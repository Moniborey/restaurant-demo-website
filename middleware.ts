import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./navigation";

const nextIntlMiddleware = createMiddleware(routing);

export function middleware(req: NextRequest) {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', "/", "/(kh|en)/:path*"],
};
