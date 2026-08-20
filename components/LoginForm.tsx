"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/lib/validation";
import { FormField } from "@/components/ui/FormField";
import { inputClass } from "@/components/ui/inputStyles";
import { Button } from "@/components/ui/Button";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";

interface LoginValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const router = useRouter();
  const [notice, setNotice] = useState<{ success: boolean; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginFormSchema) });

  async function onSubmit(values: LoginValues) {
    const res = login(values);
    setNotice(res);
    if (res.success) {
      setTimeout(() => router.push("/dashboard"), 500);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormField label={t.auth.email} htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClass} placeholder="you@example.com" {...register("email")} />
      </FormField>
      <FormField label={t.auth.password} htmlFor="password" error={errors.password?.message}>
        <input id="password" type="password" className={inputClass} placeholder="••••••••" {...register("password")} />
      </FormField>
      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center">
        {isSubmitting ? "…" : t.auth.loginButton}
      </Button>
      {notice && (
        <div
          className={`flex items-start gap-2.5 rounded-xl border p-4 text-sm ${
            notice.success ? "border-teal/30 bg-teal/10 text-teal" : "border-seal/30 bg-seal/10 text-seal"
          }`}
        >
          {notice.success ? (
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
          )}
          {notice.message}
        </div>
      )}
    </form>
  );
}
