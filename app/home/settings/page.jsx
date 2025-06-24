"use client"

import UpdateAccount from '@/app/ui/components/updateAccount'
import FeedbackForm from '@/app/ui/components/Feedback'
import { Paintbrush } from 'lucide-react';
import { useState } from 'react';
import ThemeModal from '@/app/ui/components/themeModal';

export default function Page() {
  const [modalThemeOpen, setModalThemeOpen] = useState()

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-6 text-gray-900 dark:text-white mb-10">Configurações</h1>
      <div className='gap-5 flex flex-col gap-10'>
        <div className='text-gray-900 dark:text-white flex items-center gap-3'>
          <h1 className='font-medium'>Tema do aplicativo: </h1>
          <button onClick={() => setModalThemeOpen(!modalThemeOpen)} className='hover:border-blue-500 transition duration-700 items-center gap-3 flex border-1 border-gray-300 shadow p-2 rounded-lg cursor-pointer'>
            <Paintbrush />
            <p>Selecionar tema</p>
          </button>
          {modalThemeOpen && (
            <ThemeModal onClose={() => setModalThemeOpen(false)}/>
          )}
        </div>
        <UpdateAccount />
        <FeedbackForm />
      </div>

    </div>
  )
}