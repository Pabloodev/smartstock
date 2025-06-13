'use client'

import { useRouter } from 'next/navigation'
import { DoorOpen } from 'lucide-react';

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
      <button className='text-red-400 cursor-pointer' onClick={handleLogout}>
      <DoorOpen />
      </button>
    </div>
  )
}