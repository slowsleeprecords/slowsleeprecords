import { NextResponse } from 'next/server';
import cookie from 'cookie';

export default async function middleware(req) {
  const cookieHeader = req.headers.get('Cookie');
  const cookies = cookie.parse(cookieHeader || '');

  // Check if the access cookie exists and is valid
  if (!cookies.accessGranted) {
    // Redirect to access page if cookie is missing or invalid
    if (req.url.includes('/dashboard')) {
      return NextResponse.rewrite(new URL('/access', req.url));
    }
  }

  // Allow request to proceed if cookie is valid
  return NextResponse.next();
}