"use server";

import { contactFormSchema } from "@/lib/validation";

export interface ActionResult {
  success: boolean;
  message: string;
}

export async function submitContact(values: {
  name: string;
  email: string;
  message: string;
}): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, message: "Please check the form for errors." };
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { success: true, message: "Thanks — we'll get back to you within a business day." };
}
