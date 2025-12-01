// src/app/docs/layout.tsx
import React from 'react';
import Link from 'next/link';
import { getAllDocs } from '@/lib/docs';
import { SidebarNav } from '@/components/SidebarNav'

import './globals.css'; // 根据实际路径调整
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docsTree = getAllDocs()

  return (
     <html lang="en">
      <body>
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* 左侧菜单 */}
      <aside className="w-full md:w-64 bg-gray-50 p-4 border-r">
          <SidebarNav items={docsTree} />
      </aside>
      
      {/* 右侧内容 */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
    </body>
    </html>
  );
}