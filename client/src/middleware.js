// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { cookies } = req;
  const accessToken = cookies.get('accessToken');

  const url = req.nextUrl.clone();

  // If the user doesn't have an access token and is trying to access the dashboard
  if (!accessToken && url.pathname === '/dashboard') {
    url.pathname = '/access'; // Redirect to the access code page
    return NextResponse.redirect(url);
  }

  // Allow request to continue
  return NextResponse.next();
}

// Only run middleware on the dashboard route
export const config = {
    matcher: '/dashboard/:path*',
  };

