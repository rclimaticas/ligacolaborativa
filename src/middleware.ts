'use client';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const TOKEN_KEY = 'authToken';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_KEY);

  const protectedRoutes = [
    '/user',
    '/',
    '/ligacolaborativa',
    '/datarc',
    '/ondefoi',
    '/login',
    '/register',
  ];

  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/comingsoon', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/user/:path*',
    '/login/:path*',
    '/ondefoi/:path*',
    '/graph/:path*',
    '/ligacolaborativa/:path*',
    '/datarc/:path*',
    '/',
  ],
};
