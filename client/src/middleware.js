import { NextResponse } from 'next/server'

// Define protected routes
const protectedRoutes = ['/dashboard']; // Add any other protected routes here

export function middleware(req) {
    // Extract access-related cookies from the request
    const accessToken = req.cookies.get('accessToken'); // Adjust this according to your cookie name

    const url = req.nextUrl.clone();

    // If the user is trying to access a protected route but has no access token, redirect to the access page
    if (protectedRoutes.includes(url.pathname) && !accessToken) {
        url.pathname = '/accesspage'; // redirect to the access page
        return NextResponse.redirect(url);
    }

    // Allow the request if accessToken exists
    return NextResponse.next();
}

// Specify routes where this middleware should run
export const config = {
    matcher: ['/dashboard:path*'], // Add other protected routes here if necessary
};
