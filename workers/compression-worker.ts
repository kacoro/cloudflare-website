// workers/compression-worker.js
export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    
    // 添加压缩相关的响应头
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Encoding', 'br, gzip');
    newHeaders.set('Vary', 'Accept-Encoding');
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};