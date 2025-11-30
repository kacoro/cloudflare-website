import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'docs')

export interface Doc {
  slug: string
  title: string
  category?: string
  subcategory?: string
  content?: string
  [key: string]: any
}

export function getAllDocs(): Doc[] {
  const docs: Doc[] = []
  
  function traverseDirectory(dirPath: string, relativePath: string = '') {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    
    entries.forEach(entry => {
      const fullPath = path.join(dirPath, entry.name)
      const relativeEntryPath = path.join(relativePath, entry.name)
      
      if (entry.isDirectory()) {
        traverseDirectory(fullPath, relativeEntryPath)
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        const slug = relativeEntryPath.replace(/\.md$/, '')
        const pathParts = slug.split('/')
        
        docs.push({
          slug,
          title: data.title || pathParts[pathParts.length - 1],
          category: pathParts[0] !== path.basename(entry.name, '.md') ? pathParts[0] : undefined,
          subcategory: pathParts.length > 2 ? pathParts[1] : undefined,
          ...data
        })
      }
    })
  }
  
  traverseDirectory(docsDirectory)
  return docs
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
      title: data.title || realSlug,
      ...data
    }
  } catch (error) {
    return {
      slug: realSlug,
      title: realSlug,
      content: 'Document not found'
    }
  }
}

export function getDocsByCategory(category: string): Doc[] {
  const allDocs = getAllDocs()
  return allDocs.filter(doc => doc.category === category)
}