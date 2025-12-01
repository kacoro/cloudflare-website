// page.tsx
import React from 'react'
import { getDocBySlug, getAllDocs } from '@/lib/docs'
import markdownToHtml from '@/lib/markdownToHtml'
import fs from 'fs'
import path from 'path'

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// 生成静态参数 - 通过扫描文件系统
export async function generateStaticParams() {
  try {
    // 尝试通过扫描docs目录来获取所有可能的路径
    const docsDir = path.join(process.cwd(), 'docs');
    const paths: { slug: string[] }[] = [];
    
    const scanDirectory = (dir: string, basePath: string[] = []) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          // 递归扫描子目录
          scanDirectory(
            path.join(dir, entry.name), 
            [...basePath, entry.name]
          );
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
          // 处理markdown文件
          const fileName = entry.name.replace(/\.md$/, '');
          const slug = [...basePath, fileName];
          paths.push({ slug });
        }
      }
    };
    
    // 扫描docs目录
    if (fs.existsSync(docsDir)) {
      scanDirectory(docsDir);
    }
    
    // console.log('File system based paths:', paths);
    
    // 同时也使用原有的方法作为补充
    try {
      const docs = getAllDocs();
      // console.log('Raw docs data:', JSON.stringify(docs, null, 2));
    } catch (e) {
      console.error('Error getting docs from getAllDocs:', e);
    }
    
    return paths;
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    // 回退到基本路径
    return [
      { slug: ['index'] }
    ];
  }
}

// 修改参数解构方式，增加容错处理
export default async function Doc({ params }: DocPageProps){
  try {
    // 处理 params 可能是 Promise 的情况
    const resolvedParams = await params;
    const slug = resolvedParams.slug ? resolvedParams.slug.join('/') : '';

    console.log("Requested slug:", slug);
    console.log("Params array:", resolvedParams.slug);
    
    // 添加 slug 不存在的保护
    if (!slug) {
      return (
        <article>
          <h1>Invalid Request</h1>
          <p>No document slug provided.</p>
        </article>
      );
    }
    
    const doc = getDocBySlug(slug);
    
    // 添加文档不存在的保护
    if (!doc) {
      console.log(`Document not found for slug: ${slug}`);
      return (
        <article>
          <h1>Document Not Found</h1>
          <p>The requested document "{slug}" could not be found.</p>
        </article>
      );
    }
    
    const content = await markdownToHtml(doc.content || '');

    return (
      <article>
        <h1>{doc.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    );
  } catch (error) {
    console.error("Error in Doc component:", error);
    return (
      <article>
        <h1>Error</h1>
        <p>An error occurred while loading the document.</p>
      </article>
    );
  }
}