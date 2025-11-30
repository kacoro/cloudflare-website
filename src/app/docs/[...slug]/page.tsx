// page.tsx
import React from 'react'
import { getDocBySlug, getAllDocs } from '@/lib/docs'
import markdownToHtml from '@/lib/markdownToHtml'


interface DocPageProps {
  params: Promise<{  // params 现在明确标记为 Promise
    slug: string[];
  }>;
}
export async function generateStaticParams() {
  const docs = getAllDocs()
  
  const params = docs.map((doc) => ({
    slug: doc.slug.split('/'),
  }))
  
  return params
}

// 修改参数解构方式，增加容错处理
export default async function Doc({ params }: DocPageProps){
  // 处理 params 可能是 Promise 的情况
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join('/');

  
  console.log("Requested slug:", slug)
  
  // 添加 slug 不存在的保护
  if (!slug) {
    return (
      <article>
        <h1>Invalid Request</h1>
        <p>No document slug provided.</p>
      </article>
    );
  }
  
  const doc = getDocBySlug(slug)
  
  const content = await markdownToHtml(doc.content || '')

  return (
    <article>
      <h1>{doc.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}