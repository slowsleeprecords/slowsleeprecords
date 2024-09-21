import { NextResponse } from "next/server";

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
        
        // If accessToken exists, allow request to continue
        return NextResponse.next();
    }

    // Allow request to continue if not dashboard page
    return NextResponse.next();
}