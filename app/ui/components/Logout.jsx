'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Logout() {

  const router = useRouter()

  const handleLogout = async () => {

    await fetch('/api/logout', {
      method: 'POST',
    })


    router.push('/')
  }

  return (
    <div>
      <button onClick={handleLogout}>
        <p>Deslogar</p>
      </button>
    </div>
  )
}