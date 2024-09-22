import { NextResponse } from 'next/server';

export function middleware(request) {
  const { cookies } = request;

  // Access the 'access_granted' cookie
  const accessGranted = cookies.get('access_granted');

  // Check if the user is trying to access any dashboard-related route
  if (request.nextUrl.pathname.startsWith('/dashboard') && !accessGranted) {
    // If the cookie doesn't exist, redirect to access page
    return NextResponse.redirect(new URL('/access', request.url));
  }

  // If the cookie exists, allow the user to continue to the dashboard or nested routes
  return NextResponse.next();
}

// Apply the middleware to protect /dashboard and all its sub-routes
export const config = {
  matcher: ['/dashboard/:path*'],  // Protect /dashboard and all sub-routes (nested folders)
};
