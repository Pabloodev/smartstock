import { LoginForm } from "../ui/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 ">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center justify-center gap-5">
          <img src="athonfav.png" alt="Icon Athon Telecom" className="w-10" />
          <h1 className="text-3xl font-medium">Smart Stock</h1>
          <span className="text-end text-cyan-200">por Athon Networks</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex flex-col items-center justify-center">
        <div className="relative flex items-center gap-6">
          <div className="bg-gradient-to-t from-sky-500 to-indigo-500 rounded-xl cursor-pointer p-0.5 shadow-lg shadow-blue-500/50 hover:from-purple-500 hover:to-sky-500 transition duration-300 w-fit animate-bounce-slow border border-white/10 border-dashed rotate-2">
            <img
              src="/print.png"
              alt="Print do app"
              className="w-[700px] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
