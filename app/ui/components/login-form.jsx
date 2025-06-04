import { cn } from "@/lib/utils"
import { Button } from "@/app/ui/components/button"
import { Input } from "@/app/ui/components/input"
import { Label } from "@/app/ui/components/label"

export function LoginForm({
  className,
  ...props
}) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Faça login para acessar</h1>
        <p className="text-sm text-balance">
          Entre com seu usuario e senha
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="usuario">Usuário</Label>
          <Input id="usuario" type="usuario" placeholder="pablo.dev" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" placeholder="******" required />
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          Login
        </Button>
      </div>
    </form>
  );
}
