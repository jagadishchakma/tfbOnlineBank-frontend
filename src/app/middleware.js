// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if the request is a POST request to the /deposit route
  if (request.nextUrl.pathname === '/deposit' && request.method === 'POST') {
    // Perform any custom logic here, such as validation or logging

    // Redirect to an API route to handle the request
    return NextResponse.rewrite(new URL('/deposit', request.url));
  }
  // Check if the request is a POST request to the /deposit route
  if (request.nextUrl.pathname === '/transactions' && request.method === 'POST') {
    // Perform any custom logic here, such as validation or logging

    // Redirect to an API route to handle the request
    return NextResponse.rewrite(new URL('/transactions', request.url));
  }

  // Allow other requests to proceed without modification
  return NextResponse.next();
}

// Specify the paths where the middleware should be applied
export const config = {
  matcher: ['/deposit', '/transactions'], // Apply the middleware only for the /deposit route
};
