import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    
    // Check if the request is for any dashboard page
    if (url.pathname.startsWith('/dashboard')) {
        const hasAccess = req.cookies.hasAccess;
        
        // If hasAccess is missing or false, redirect to access page
        if (hasAccess !== 'true') {
            url.pathname = '/access';
            return NextResponse.redirect(url);
        }
    }
    
    // Allow request to continue
    return NextResponse.next();
}