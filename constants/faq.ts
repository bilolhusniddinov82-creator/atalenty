import { FaqItem } from "@/types";

export const FAQS: FaqItem[] = [
  {
    q: "Is an online notarization legally valid?",
    a: "Yes. Remote online notarization is recognized in all 50 states and follows the same identity-verification and record-keeping standards as an in-person signing.",
  },
  {
    q: "What do I need for my appointment?",
    a: "A government-issued photo ID, the document you're signing, and a device with a camera. Most sessions take under 10 minutes.",
  },
  {
    q: "Can a notary refuse to notarize my document?",
    a: "Yes — if the signer can't be verified, appears coerced, or the document is incomplete, a notary is required to decline. We'll tell you exactly why beforehand if something's likely to be flagged.",
  },
  {
    q: "What happens to my ID scan afterward?",
    a: "It's encrypted and retained only as long as your state's notary record-keeping laws require, then deleted. It's never sold or used for anything beyond verifying that session.",
  },
];
