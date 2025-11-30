'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Doc } from '@/lib/docs'

interface SidebarNavProps {
  docs: Doc[]
}

export function SidebarNav({ docs }: SidebarNavProps) {
  const pathname = usePathname()
  
  // 构建嵌套结构
  const navigationStructure = buildNavigationStructure(docs)
  
  return (
    <nav className="space-y-2">
      {renderNavigation(navigationStructure, pathname)}
    </nav>
  )
}

function buildNavigationStructure(docs: Doc[]) {
  const structure: any = {}
  
  docs.forEach(doc => {
    const parts = doc.slug.split('/')
    
    if (parts.length === 1) {
      // 根级别文档
      structure[doc.slug] = { ...doc, type: 'file' }
    } else {
      // 嵌套文档
      let currentLevel = structure
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i]
        if (i === parts.length - 1) {
          // 最后一部分是文件
          currentLevel[part] = { ...doc, type: 'file' }
        } else {
          // 目录
          if (!currentLevel[part]) {
            currentLevel[part] = { type: 'directory', children: {} }
          }
          currentLevel = currentLevel[part].children
        }
      }
    }
  })
  
  return structure
}

function renderNavigation(structure: any, currentPath: string, basePath = '/docs') {
  return Object.entries(structure).map(([key, item]: [string, any]) => {
    if (item.type === 'file') {
      const href = `${basePath}/${item.slug}`
      return (
        <Link
          key={item.slug}
          href={href}
          className={`block py-1 px-2 rounded text-sm ${
            currentPath === href 
              ? 'bg-blue-100 text-blue-800 font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {item.title}
        </Link>
      )
    } else {
      // 目录项
      return (
        <div key={key} className="ml-2">
          <h3 className="font-medium text-gray-900 py-1">{formatDirectoryName(key)}</h3>
          <div className="ml-2 border-l border-gray-200 pl-2">
            {renderNavigation(item.children, currentPath, basePath)}
          </div>
        </div>
      )
    }
  })
}

function formatDirectoryName(name: string) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}