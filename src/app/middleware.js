// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if the request is a POST request to the /deposit route
  if (request.nextUrl.pathname === '/deposit' && request.method === 'POST') {
    // Rewrite the request to change it to a GET request
    const url = new URL('/deposit', request.url);

    // Redirect to the same route as a GET request
    return NextResponse.redirect(url);
  }

  // Check if the request is a POST request to the /deposit route
  if (request.nextUrl.pathname === '/transactions' && request.method === 'POST') {
    // Rewrite the request to change it to a GET request
    const url = new URL('/transactions', request.url);

    // Redirect to the same route as a GET request
    return NextResponse.redirect(url);
  }

  // Allow other requests to proceed without modification
  return NextResponse.next();
}

// Specify the paths where the middleware should be applied
export const config = {
  matcher: ['/deposit', '/transactions'], // Apply the middleware only for the /deposit route
};
