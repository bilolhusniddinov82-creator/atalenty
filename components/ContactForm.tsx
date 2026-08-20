"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/validation";
import { submitContact } from "@/actions/contact";
import { FormField } from "@/components/ui/FormField";
import { inputClass } from "@/components/ui/inputStyles";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface ContactValues {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { t } = useLanguage();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(values: ContactValues) {
    const res = await submitContact(values);
    setResult(res);
    if (res.success) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormField label={t.contact.formName} htmlFor="name" error={errors.name?.message}>
        <input id="name" className={inputClass} placeholder={t.contact.formName} {...register("name")} />
      </FormField>
      <FormField label={t.contact.formEmail} htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClass} placeholder="you@example.com" {...register("email")} />
      </FormField>
      <FormField label={t.contact.formMessage} htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          placeholder={t.contact.formMessagePlaceholder}
          {...register("message")}
        />
      </FormField>
      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full justify-center sm:w-auto">
        {isSubmitting ? t.contact.formSubmitting : t.contact.formSubmit}
      </Button>
      {result && (
        <div
          className={`flex items-start gap-2.5 rounded-xl border p-4 text-sm ${
            result.success ? "border-teal/30 bg-teal/10 text-teal" : "border-red-400/30 bg-red-400/10 text-red-300"
          }`}
        >
          <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
          {result.message}
        </div>
      )}
    </form>
  );
}
