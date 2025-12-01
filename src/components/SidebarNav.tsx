'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DocItem } from '@/lib/docs'

interface SidebarNavProps {
  items?: DocItem[]
}

export function SidebarNav({ items = [] }: SidebarNavProps) {
  const pathname = usePathname()
  
  return (
    <nav className="space-y-1">
      {renderItems(items, pathname)}
    </nav>
  )
}

function renderItems(items: DocItem[] = [], currentPath: string, basePath = '/docs') {
  if (!items || !Array.isArray(items)) {
    return null
  }
  
  return items.map((item) => {
    if (!item) return null
    
    // 确保只有文档项才会被渲染为链接
    if ('slug' in item && typeof item.slug === 'string') {
      // 这是一个文档
      const href = `${basePath}/${item.slug}`
      return (
        <Link
          key={item.slug}
          href={href}
          className={`block py-2 px-3 rounded text-sm transition-colors ${
            currentPath === href 
              ? 'bg-blue-100 text-blue-800 font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {item.title}
        </Link>
      )
    } else if ('path' in item) {
      // 这是一个目录
      return (
        <div key={item.path} className="mt-2">
          <h3 className="font-medium text-gray-900 py-1 px-3 text-sm uppercase tracking-wide">
            {item.title}
          </h3>
          <div className="ml-2 border-l border-gray-200 pl-2">
            {renderItems(item.children, currentPath, basePath)}
          </div>
        </div>
      )
    }
    
    return null
  })
}