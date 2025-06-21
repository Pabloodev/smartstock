import { NextResponse } from 'next/server'

export async function POST() {
  const response = new NextResponse(null, {
    status: 302,
    headers: {
      Location: '/',
      'Set-Cookie': `token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
    },
  })

  return response
}
