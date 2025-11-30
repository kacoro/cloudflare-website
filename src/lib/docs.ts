import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'docs')

console.log('DOCS_PATH:', docsDirectory)
console.log('Directory exists:', fs.existsSync(docsDirectory))

export function getDocBySlug(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.md`)
  console.log(`Looking for document: ${fullPath}`)
  console.log(`File exists: ${fs.existsSync(fullPath)}`)
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    return {
      slug,
      title: 'Document Not Found',
      content: 'Document not found'
    }
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    ...data
  }
}

export function getAllDocs() {
  // 确保docs目录存在
  if (!fs.existsSync(docsDirectory)) {
    console.log('Docs directory does not exist')
    return []
  }
  
  const files = fs.readdirSync(docsDirectory)
  console.log('Files in docs directory:', files)
  
  const markdownFiles = files.filter(file => file.endsWith('.md'))
  console.log('Markdown files found:', markdownFiles)
    
  const slugs = markdownFiles.map(file => file.replace('.md', ''))
  console.log('Slugs generated:', slugs)
    
  return slugs.map(slug => getDocBySlug(slug))
}