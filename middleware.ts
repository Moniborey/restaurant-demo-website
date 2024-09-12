import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, routing } from "./navigation";

const nextIntlMiddleware = createMiddleware(routing);

export function middleware(req: NextRequest) {

  const pathname = req.nextUrl.pathname.split('/')

  // redirect if country doesnt exist
  if(pathname.length > 2){
    const country = pathname[2]
    if(country === 'en' || !locales.includes(country)) return NextResponse.redirect(new URL("/", req.url));
  }

  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', "/", "/(kh|en)/:path*"],
};
