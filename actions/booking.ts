"use server";

import { bookingFormSchema } from "@/lib/validation";
import { BookingFormValues } from "@/types";

export interface ActionResult {
  success: boolean;
  message: string;
}

/**
 * Mock booking submission. Validates the payload server-side and returns
 * a result — swap the body for a real database write / notary-matching
 * call once a backend is connected.
 */
export async function submitBooking(values: BookingFormValues): Promise<ActionResult> {
  const parsed = bookingFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Please check the form for errors." };
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  return { success: true, message: "ok" };
}
