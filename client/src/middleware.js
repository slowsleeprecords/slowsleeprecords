import { NextResponse } from 'next/server';

export function middleware(request) {
  const { nextUrl: url, cookies } = request;

  // Check for the 'access_granted' cookie
  const accessGranted = cookies.get('access_granted');
  
  // If the user tries to access any dashboard-related route and doesn't have the cookie, redirect to the access page
  if (url.pathname.startsWith('/dashboard') && !accessGranted) {
    return NextResponse.redirect(new URL('/access', request.url));
  }

  // If the cookie exists or it's not a protected route, continue to the requested route
  return NextResponse.next();
}

// Apply the middleware to the /dashboard route and all nested routes under it
export const config = {
  matcher: ['/dashboard/:path*'],  // Protect /dashboard and all sub-routes (nested paths)
};
