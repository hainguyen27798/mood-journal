import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const publicRoutes = [/.*\/login/];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl?.pathname;

  const isPublicRoute = publicRoutes.some((permission) => permission.test(path));

  const isLogin = cookies().get('isLogin')?.value;

  if (!isPublicRoute && isLogin !== 'true') {
    return NextResponse.redirect(new URL(`/login`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|icon.png|sitemap.xml|robots.txt).*)'],
};
