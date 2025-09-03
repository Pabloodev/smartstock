import ResetPassword from "../ui/components/resetPassword"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-gradient-to-r from-zinc-950 to-blue-950">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center justify-center gap-5">
          <img src="athonfav.png" alt="Icon Athon Telecom" className="w-10" />
          <h1 className="text-3xl font-medium">Smart Stock</h1>
          <span className="text-end text-orange-300">por Athon Telecom</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ResetPassword />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/herohome.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
