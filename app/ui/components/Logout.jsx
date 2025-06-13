'use client'

import { useRouter } from 'next/navigation'
import { DoorOpen } from 'lucide-react';

export default function Logout() {

  const router = useRouter()

  const handleLogout = async () => {

    await fetch('/api/logout', {
      method: 'POST',
    })


    router.push('/login')
  }

  return (
    <div>
      <button className='text-red-400 cursor-pointer' title='Deslogar' onClick={handleLogout}>
      <DoorOpen />
      </button>
    </div>
  )
}