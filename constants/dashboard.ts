export interface Appointment {
  id: string;
  documentType: string;
  signerName: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "completed";
}

export const APPOINTMENTS: Appointment[] = [
  { id: "apt-1", documentType: "Power of attorney", signerName: "Jordan Casey", date: "Aug 8, 2026", time: "10:30 AM", status: "confirmed" },
  { id: "apt-2", documentType: "Real estate deed", signerName: "Lena Farrow", date: "Aug 8, 2026", time: "2:00 PM", status: "pending" },
  { id: "apt-3", documentType: "Affidavit", signerName: "Tom Bricker", date: "Aug 7, 2026", time: "9:15 AM", status: "completed" },
  { id: "apt-4", documentType: "Loan document", signerName: "Ana Souza", date: "Aug 6, 2026", time: "4:45 PM", status: "completed" },
];

export const DASHBOARD_STATS = [
  { label: "This month", value: "38", sub: "notarizations" },
  { label: "Upcoming", value: "6", sub: "appointments" },
  { label: "Rating", value: "4.9", sub: "average" },
  { label: "Response time", value: "12 min", sub: "median" },
];
