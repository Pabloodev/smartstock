"use client";

import { cn } from "@/app/lib/utils";
import { Button } from "@/app/ui/components/Button";
import { Input } from "@/app/ui/components/Input";
import { Label } from "@/app/ui/components/Label";
import { useState } from "react";
import { useActionState } from "react";
import { EyeClosed, Eye } from "lucide-react";
import Loading from "./Loading";
import Link from "next/link";

import { register } from "@/app/actions/register";

const initialState = {
  message: "",
  error: false,
};

export function RegisterForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [state, formAction] = useActionState(
    async (prevState, formData) => {
      setIsSubmitting(true);
      const result = await register(formData);
      setIsSubmitting(false); 
      return result;
    },
    initialState
  );

  return (
    <form
      action={formAction}
      onSubmit={() => setIsSubmitting(true)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-white">Registro</h1>
        <p className="text-muted-foreground text-sm text-balance text-white">
          Faça o registro para acessar o painel do cliente.
        </p>
      </div>

      

      <div className="grid gap-2">

        <div className="grid gap-3">
          <Label htmlFor="user">User</Label>
          <Input
            id="user"
            type="text"
            placeholder="joao"
            required
            name="user"
            className="invalid:border-blue-300 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-blue-300 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 
          disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="joao.colaborador@gmail.com"
            required
            name="email"
            className="invalid:border-blue-300 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-blue-300 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 
          disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
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
              className="invalid:border-blue-300 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-blue-300 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 
          disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeClosed className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {state?.error && (
          <p className="text-pink-600 text-sm">{state.message}</p>
        )}

        <Link href="/login"> 
          <button type="button" className="underline underline-offset-1 text-gray-300 hover:text-white cursor-pointer">
            <p>Já tem uma conta, faça login.</p>
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
                Registrar
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
