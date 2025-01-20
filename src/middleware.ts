
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { checkSession } from './libs/auth';

const guestRoutes = ["/login","/register", "/"];

const authRoutes = ["/posts", "/profile"];

const onGuestRoute = (path : string) => {
    return guestRoutes.includes(path);
}
const onAuthRoute = (path : string) => {
    return authRoutes.includes(path);
}

export default async function middleware(req : NextRequest) {
    const { success, data } = await checkSession();

    if(onGuestRoute(req.nextUrl.pathname) && success) {
        const url = req.nextUrl.clone();
        url.pathname = "/posts";
        return NextResponse.redirect(url);
    }
    else if(onAuthRoute(req.nextUrl.pathname) && !success) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
