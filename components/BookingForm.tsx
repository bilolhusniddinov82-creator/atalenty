"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema } from "@/lib/validation";
import { BookingFormValues } from "@/types";
import { submitBooking } from "@/actions/booking";
import { FormField } from "@/components/ui/FormField";
import { inputClass } from "@/components/ui/inputStyles";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { REGIONS } from "@/constants/cities";
import { DOCUMENT_TYPES, getDocumentTypeLabel } from "@/constants/documentTypes";

export function BookingForm() {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
  });

  async function onSubmit(values: BookingFormValues) {
    const res = await submitBooking(values);
    if (res.success) {
      setResult({ success: true, message: t.booking.successMessage });
      reset();
      setTimeout(() => router.push("/"), 1400);
    } else {
      setResult({ success: false, message: res.message });
    }
  }

  return (
    <GlassCard className="p-7 sm:p-9">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField label={t.booking.fullName} htmlFor="fullName" error={errors.fullName?.message}>
            <input id="fullName" className={inputClass} placeholder="Jahongir Yusupov" {...register("fullName")} />
          </FormField>
          <FormField label={t.booking.email} htmlFor="email" error={errors.email?.message}>
            <input id="email" type="email" className={inputClass} placeholder="siz@example.com" {...register("email")} />
          </FormField>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField label={t.booking.documentType} htmlFor="documentType" error={errors.documentType?.message}>
            <select id="documentType" className={inputClass} defaultValue="" {...register("documentType")}>
              <option value="" disabled>
                {t.booking.documentTypePlaceholder}
              </option>
              {DOCUMENT_TYPES.map((d) => (
                <option key={d.id} value={d.id}>
                  {getDocumentTypeLabel(d.id, locale)}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label={t.booking.state} htmlFor="regionId" error={errors.regionId?.message}>
            <select id="regionId" className={inputClass} defaultValue="" {...register("regionId")}>
              <option value="" disabled>
                {t.booking.statePlaceholder}
              </option>
              {REGIONS.map((region) => (
                <option key={region.id} value={region.id}>
                  {locale === "ru" ? region.nameRu : locale === "en" ? region.nameEn : region.nameUz}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField label={t.booking.preferredDate} htmlFor="preferredDate" error={errors.preferredDate?.message}>
          <input id="preferredDate" type="date" className={inputClass} {...register("preferredDate")} />
        </FormField>

        <FormField label={t.booking.notes} htmlFor="notes" error={errors.notes?.message}>
          <textarea
            id="notes"
            rows={3}
            className={inputClass}
            placeholder={t.booking.notesPlaceholder}
            {...register("notes")}
          />
        </FormField>

        <Button type="submit" variant="primary" disabled={isSubmitting} className="mt-2 w-full justify-center">
          {isSubmitting ? t.booking.submitting : t.booking.submit}
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
    </GlassCard>
  );
}
