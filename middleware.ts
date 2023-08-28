import { NextRequest, NextResponse } from "next/server";
import Negotiator from 'negotiator';
import { match } from "@formatjs/intl-localematcher";

export let locales = ['en', 'vi'];
export let defaultLocale = 'en';

function getLocale(request: Request): string {
    const headers = new Headers(request.headers)
    const acceptLanguage = headers.get("accept-language")
    if (acceptLanguage){
        headers.set('accept-language', acceptLanguage.replaceAll("_", "-"))
    }

    const headersObject = Object.fromEntries(headers.entries());
    const languages = new Negotiator({headers: headersObject}).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
   
    if (pathnameIsMissingLocale) {
      const locale = getLocale(request)
   
      const newUrl =  NextResponse.redirect(
        new URL(`/${locale}${pathname}`, request.url)
      )

      console.log(newUrl);

      return newUrl
      
    }
}

export const config = {
    matcher: [
        '/((?!_next|api|favicon.ico|images).*)',
    ]
}