import { NextResponse } from "next/server"

const publicRoutes = [
  { path: "/login", whenAuthenticated: "redirect"},
  { path: "/register", whenAuthenticated: "redirect"},
  { path: "/reset-password", whenAuthenticated: "redirect"},
  { path: "/solicita-reset", whenAuthenticated: "redirect"},
  { path: "/", whenAuthenticated: "next"}
]

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login"

export function middleware(request) {
  const path = request.nextUrl.pathname
  const publicRoute = publicRoutes.find(route => route.path == path)
  const authToken = request.cookies.get('token')

  if (!authToken && publicRoute) {
    return NextResponse.next()
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = "/home"

    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && !publicRoute) {
    
    return NextResponse.next()
  }

  return NextResponse.next()
  
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}