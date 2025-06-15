import UpdateAccount from '@/app/ui/components/updateAccount'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Configurações da Conta</h1>
      <UpdateAccount />
    </div>
  )
}