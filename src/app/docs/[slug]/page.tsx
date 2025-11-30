// page.tsx
import React from 'react'
import { getDocBySlug, getAllDocs } from '../../../lib/docs'
import markdownToHtml from '../../../lib/markdownToHtml'

export async function generateStaticParams() {
  const docs = getAllDocs()
  console.log("All docs found:", docs)
  
  const params = docs.map((doc) => ({
    slug: doc.slug,
  }))
  
  console.log("Generated static params:", params)
  return params
}

// 修改参数解构方式，增加容错处理
export default async function Doc({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<React.ReactElement> {
  // 处理 params 可能是 Promise 的情况
  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams || {};
  
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
  console.log("Found doc:", doc)
  
  const content = await markdownToHtml(doc.content || '')

  return (
    <article>
      <h1>{doc.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}