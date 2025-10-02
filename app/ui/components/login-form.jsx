"use client";

import { cn } from "@/app/lib/utils";
import { Input } from "./input";
import { Label } from "./label";
import { useState } from "react";
import { useActionState } from "react";
import { EyeClosed, Eye, Terminal } from "lucide-react";
import Loading from "./Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sign } from "./../../actions/auth";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { MoveLeft } from 'lucide-react';


export function LoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  const router = useRouter();

  const [state, formAction] = useActionState(async (prevState, formData) => {
    setIsSubmitting(true);
    const result = await sign(formData);
    setIsSubmitting(false);

    if (result.success) {
      setAlert({ type: "success", message: "Login efetuado com sucesso!" });
      setTimeout(() => {
        router.push("/home");
      }, 1000); // dá 1s para o usuário ver o alert
    } else if (result.error) {
      setAlert({ type: "destructive", message: result.message });
    }

    return result;
  }, { message: "", error: false });

  return (
    <form
      action={formAction}
      onSubmit={() => setIsSubmitting(true)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Link href={'/'} className="flex items-center gap-2 cursor-pointer hover:text-gray-400 transition duration-300">
        <MoveLeft />
        <button className="cursor-pointer">Voltar a pagina inicial</button>
      </Link>

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <p className="text-muted-foreground text-sm text-balance text-white">
          Faça o login para acessar o painel do cliente.
        </p>
      </div>

      {alert && (
        <Alert variant={alert.type} className="mb-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{alert.type === "success" ? "Sucesso!" : "Erro!"}</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-2">
        <div className="grid gap-3">
          <Label htmlFor="user">Usuário</Label>
          <Input
            id="user"
            type="text"
            placeholder="joao.colaborator"
            required
            name="user"
            className="invalid:border-blue-300 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-blue-300 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
          />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <div className="flex gap-2">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="******"
              name="password"
              className="invalid:border-blue-300 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-blue-300 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            >
              {showPassword ? <EyeClosed className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Link href="/register">
          <button type="button" className="text-gray-300 hover:text-white cursor-pointer">
            Ainda não tem uma conta? faça o cadastro.
          </button>
        </Link>
        <Link href="/solicita-reset">
          <button type="button" className="text-gray-300 hover:text-white cursor-pointer">
            Resetar conta
          </button>
        </Link>

        <div className="mt-5">
          {isSubmitting ? (
            <Loading />
          ) : (
            <div className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-lg cursor-pointer p-0.5 shadow-lg shadow-blue-500/50 hover:from-purple-500 hover:to-sky-500 transition duration-300">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg duration-700 cursor-pointer w-full"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
