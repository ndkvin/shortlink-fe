import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Config from '@helpers/config'

export function middleware(request: NextRequest) {
  if (!request.cookies.has('token_')) {
    return NextResponse.redirect(Config.BASE_URL)
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
}