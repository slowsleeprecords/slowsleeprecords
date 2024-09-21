import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('accessToken');

  if (!token) {
    return NextResponse.redirect(new URL('/access', req.url));
  }

  try {
    // Verify the JWT
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next(); // Allow the request to proceed
  } catch (err) {
    // If verification fails, redirect to access page
    console.error('JWT verification failed:', err);
    return NextResponse.redirect(new URL('/access', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect all routes under /dashboard
};
