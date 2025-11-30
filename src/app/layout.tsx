// src/app/docs/layout.tsx
import React from 'react';
import Link from 'next/link';
import { getAllDocs } from '../lib/docs';
import './globals.css'; // 根据实际路径调整
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = getAllDocs();

  return (
     <html lang="en">
      <body>
    <div className="flex">
      {/* 左侧菜单 */}
      <nav className="w-64 min-h-screen bg-gray-50 border-r p-4">
        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
        <ul className="space-y-2">
          {docs.map((doc) => (
            <li key={doc.slug}>
              <Link 
                href={`/docs/${doc.slug}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* 右侧内容 */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
    </body>
    </html>
  );
}