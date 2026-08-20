import { Feature, Step } from "@/types";

export const STEPS: Step[] = [
  {
    n: "01",
    title: "Upload your document",
    body: "Add the file that needs notarizing. We check it's the right format and flag anything missing before you book.",
    icon: "UploadCloud",
  },
  {
    n: "02",
    title: "Verify your identity",
    body: "A quick ID scan and liveness check — the same standard a notary would run in person, done in under two minutes.",
    icon: "Fingerprint",
  },
  {
    n: "03",
    title: "Meet your notary & sign",
    body: "Join a short video call with a commissioned notary, sign, and get your stamped, certified copy immediately.",
    icon: "Stamp",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: "Video",
    title: "Live video notarization",
    body: "Face-to-face with a commissioned notary from your phone or laptop — no waiting room, no driving.",
  },
  {
    icon: "ShieldCheck",
    title: "Bank-level encryption",
    body: "Documents and ID scans are encrypted in transit and at rest. Nothing sits on a shared drive.",
  },
  {
    icon: "FileCheck2",
    title: "Instant certified copies",
    body: "Your stamped document lands in your inbox as a tamper-evident PDF the moment the call ends.",
  },
  {
    icon: "MapPin",
    title: "In-person, if you'd rather",
    body: "Prefer face-to-face? Find a commissioned notary near you and book a desk slot instead.",
  },
  {
    icon: "Clock",
    title: "Appointments in minutes",
    body: "Real-time availability across every notary on the platform — most people are seen same-day.",
  },
  {
    icon: "Lock",
    title: "Full audit trail",
    body: "Every session is logged and timestamped, so your document holds up wherever it's presented.",
  },
];
