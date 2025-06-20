import UpdateAccount from '@/app/ui/components/updateAccount'
import FeedbackForm from '@/app/ui/components/Feedback'

export default function Page() {
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-6">Configurações</h1>
      <div className='gap-5 flex flex-col gap-10'>
        <UpdateAccount />
        <FeedbackForm />
      </div>

    </div>
  )
}