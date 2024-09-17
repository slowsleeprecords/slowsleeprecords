// app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    
    // Check if the request is for any dashboard page
    if (url.pathname.startsWith('/dashboard')) {
        const accessToken = req.cookies.get('accessToken');

        // If accessToken is missing, redirect to the access page
        if (!accessToken) {
            url.pathname = '/access';
            return NextResponse.redirect(url);
        }
    }

    // Allow request to continue if the accessToken exists
    return NextResponse.next();
}

// Define the paths where the middleware should run
export const config = {
    matcher: ['/dashboard/:path*'],
};
