import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';
 import { NextRequest, NextResponse } from 'next/server';

// export default createMiddleware(routing);
 // 自定义中间件函数
export default function middleware(request: NextRequest) {
  // 如果是站点地图或 robots.txt 请求，跳过国际化中间件
  if (
    request.nextUrl.pathname === '/sitemap.xml' || 
    request.nextUrl.pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }
  
  // 对于其他请求，使用 next-intl 中间件
  return createMiddleware(routing)(request);
}
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};  