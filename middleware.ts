import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, isLocale, locales } from "@/lib/i18n-config"

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/apple-icon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split("/")
  const maybeLocale = segments[1]

  if (isLocale(maybeLocale)) {
    const response = NextResponse.next()
    response.cookies.set("NEXT_LOCALE", maybeLocale)
    return response
  }

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  const headerLocale = request.headers.get("accept-language")?.split(",")[0]?.split("-")[0]
  const preferred = isLocale(cookieLocale ?? "") ? cookieLocale : isLocale(headerLocale ?? "") ? headerLocale : defaultLocale
  const locale = locales.includes(preferred as typeof locales[number]) ? preferred : defaultLocale

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
}
