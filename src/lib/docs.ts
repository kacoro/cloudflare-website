import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'docs')

export interface Doc {
  slug: string
  title: string
  order?: number
  date?: string
  content?: string
  [key: string]: any
}

export interface Directory {
  name: string
  path: string
  title: string
  order?: number
  children: Array<Doc | Directory>
}

// 导出联合类型以便在其他地方使用
export type DocItem = Doc | Directory

export function getAllDocs(): DocItem[] {
  return buildDocumentationTree(docsDirectory)
}

function buildDocumentationTree(dirPath: string, relativePath: string = ''): DocItem[] {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    
    // 分离文件和目录
    const files = entries.filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    const directories = entries.filter(entry => entry.isDirectory())
    
    const result: DocItem[] = []
    
    // 处理文件
    files.forEach(file => {
      // 跳过配置文件
      if (file.name === '_config.json') {
        return
      }
      
      const fullPath = path.join(dirPath, file.name)
      const relativeFilePath = path.join(relativePath, file.name)
      const slug = relativeFilePath.replace(/\.md$/, '')
      
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        result.push({
          slug,
          title: data.title || formatTitle(file.name.replace(/\.md$/, '')),
          order: data.order ?? Infinity,
          date: data.date ? new Date(data.date).toISOString() : undefined,
          ...data
        })
      } catch (e) {
        console.warn(`Failed to read file: ${fullPath}`, e)
      }
    })
    
    // 处理目录
    directories.forEach(directory => {
      const fullPath = path.join(dirPath, directory.name)
      const relativeDirPath = path.join(relativePath, directory.name)
      
      // 从_config.json文件中获取目录信息
      let dirInfo: any = {
        title: formatTitle(directory.name),
        order: Infinity
      }
      
      try {
        const configPath = path.join(fullPath, '_config.json')
        if (fs.existsSync(configPath)) {
          const configContent = fs.readFileSync(configPath, 'utf8')
          const configData = JSON.parse(configContent)
          dirInfo = {
            title: configData.title || dirInfo.title,
            order: configData.order ?? dirInfo.order
          }
        }
      } catch (e) {
        console.warn(`Failed to read config for directory: ${relativeDirPath}`, e)
      }
      
      const children = buildDocumentationTree(fullPath, relativeDirPath)
      
      result.push({
        name: directory.name,
        path: relativeDirPath,
        children,
        ...dirInfo
      })
    })
    
    // 按 order 字段排序
    return result.sort((a, b) => {
      // 目录和文档都可能有 order 字段
      const orderA = ('order' in a && a.order !== undefined) ? a.order : Infinity
      const orderB = ('order' in b && b.order !== undefined) ? b.order : Infinity
      
      if (orderA !== orderB) {
        return orderA - orderB
      }
      
      // 如果 order 相同，按标题排序
      const titleA = ('title' in a && a.title) || ''
      const titleB = ('title' in b && b.title) || ''
      return titleA.localeCompare(titleB)
    })
  } catch (e) {
    console.error(`Failed to build documentation tree for: ${dirPath}`, e)
    return []
  }
}

export function getDocBySlug(slug: string): Doc {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(docsDirectory, `${realSlug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug: realSlug,
      content,
      title: data.title || formatTitle(realSlug.split('/').pop() || realSlug),
      order: data.order,
      date: data.date ? new Date(data.date).toISOString() : undefined,
      ...data
    }
  } catch (error) {
    return {
      slug: realSlug,
      title: formatTitle(realSlug.split('/').pop() || realSlug),
      content: 'Document not found'
    }
  }
}

function formatTitle(name: string): string {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}