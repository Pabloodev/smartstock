import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-[#064b76]">
        <div className="flex items-center justify-center gap-5">
          <img src="athonfav.png" alt="Icon Athon Telecom" className="w-10" />
          <h1 className="text-3xl font-medium">Smart Stock</h1>
          <span className="text-end text-orange-300">por Athon Telecom</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg flex flex-col gap-5">
            <h2 className="text-5xl font-medium">Nossa <span className='text-gradient'>Gestão</span>, de um Jeito Muito Mais Facil.</h2>

            <Link href="/home">
              <button className='cursor-pointer flex items-center gap-3 justify-center bg-white text-blue-900 px-6 py-2 rounded hover:bg-gray-200 transition'>
                <span>Acessar app</span>
                <ArrowRight />
              </button>
            </Link>

            <footer className="absolute bottom-4 left-4 text-xs text-white">
              © 2025 Athon Telecom · Beta
            </footer>

          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/hero-nova.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
