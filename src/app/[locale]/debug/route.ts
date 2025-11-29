// app/debug/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const envInfo = {
    NODE_ENV: process.env.NODE_ENV,
    NEXTJS_ENV: process.env.NEXTJS_ENV,
    CF_PAGES: process.env.CF_PAGES,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(envInfo);
}