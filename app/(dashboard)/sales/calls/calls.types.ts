export type CallStatus = "scheduled" | "completed" | "missed" | "cancelled" | "in_progress";
export type CallOutcome = "interested" | "not_interested" | "follow_up" | "closed_won" | "no_answer" | null;

export interface Call {
  id: string;
  leadName: string;
  leadCompany?: string;
  leadEmail: string;
  leadPhone: string;
  assignedTo: string;           // sales rep name
  scheduledAt: string;          // ISO datetime
  duration?: number;            // minutes (for completed)
  status: CallStatus;
  outcome?: CallOutcome;
  notes?: string;
  service?: string;
}

// ─── Status config ─────────────────────────────────────────────────────────
export const CALL_STATUS_CONFIG: Record<CallStatus, {
  label: string; className: string; dot: string;
}> = {
  scheduled:   { label: "Scheduled",   className: "bg-blue-50 text-blue-700 border-blue-200",    dot: "bg-blue-500" },
  in_progress: { label: "In Progress", className: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500 animate-pulse" },
  completed:   { label: "Completed",   className: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  missed:      { label: "Missed",      className: "bg-red-50 text-red-700 border-red-200",        dot: "bg-red-500" },
  cancelled:   { label: "Cancelled",   className: "bg-zinc-100 text-zinc-500 border-zinc-200",    dot: "bg-zinc-400" },
};

export const CALL_OUTCOME_CONFIG: Record<NonNullable<CallOutcome>, {
  label: string; className: string;
}> = {
  interested:     { label: "Interested",     className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  not_interested: { label: "Not Interested", className: "bg-red-50 text-red-700 border-red-200" },
  follow_up:      { label: "Follow Up",      className: "bg-amber-50 text-amber-700 border-amber-200" },
  closed_won:     { label: "Closed Won ✓",   className: "bg-violet-50 text-violet-700 border-violet-200" },
  no_answer:      { label: "No Answer",      className: "bg-zinc-100 text-zinc-500 border-zinc-200" },
};

// ─── Mock data ──────────────────────────────────────────────────────────────
const today = new Date();
const fmt = (d: Date) => d.toISOString();
const addH = (h: number) => { const d = new Date(today); d.setHours(d.getHours() + h); return fmt(d); };
const subD = (days: number, h = 10) => { const d = new Date(today); d.setDate(d.getDate() - days); d.setHours(h, 0); return fmt(d); };

export const MOCK_CALLS: Call[] = [
  // ── Today ──
  {
    id: "c1",
    leadName: "أحمد محمد", leadCompany: "Ahmed Corp",
    leadEmail: "ahmed@example.com", leadPhone: "+20 100 123 4567",
    assignedTo: "Mohamed Ali", scheduledAt: addH(1),
    status: "scheduled", service: "Ads + SEO",
  },
  {
    id: "c2",
    leadName: "Sara Khalid", leadCompany: "Sara Ltd",
    leadEmail: "sara@company.com", leadPhone: "+20 112 987 6543",
    assignedTo: "Mohamed Ali", scheduledAt: addH(3),
    status: "scheduled", service: "Website",
  },
  {
    id: "c3",
    leadName: "Dina Yousef", leadCompany: "Med Clinic",
    leadEmail: "dina@medclinic.com", leadPhone: "+20 115 666 5577",
    assignedTo: "Sara Nour", scheduledAt: addH(-1),
    status: "in_progress", service: "Website + Ads",
  },
  {
    id: "c4",
    leadName: "Omar Fathy", leadCompany: "Startup EG",
    leadEmail: "omar@startup.eg", leadPhone: "+20 100 777 2200",
    assignedTo: "Mohamed Ali", scheduledAt: addH(-3),
    status: "completed", duration: 24,
    outcome: "interested", service: "Ads",
    notes: "Very interested in Meta Ads. Needs proposal by EOD.",
  },
  {
    id: "c5",
    leadName: "Laila Mostafa", leadCompany: "Laila Design",
    leadEmail: "laila@design.co", leadPhone: "+20 111 444 9900",
    assignedTo: "Sara Nour", scheduledAt: addH(-5),
    status: "missed", outcome: "no_answer", service: "Social Media",
  },
  // ── Past days ──
  {
    id: "c6",
    leadName: "محمود عبدالله", leadCompany: "MB Solutions",
    leadEmail: "mahmoud@biz.co", leadPhone: "+20 106 555 0011",
    assignedTo: "Mohamed Ali", scheduledAt: subD(1, 11),
    status: "completed", duration: 38,
    outcome: "closed_won", service: "App",
    notes: "Agreed on 60K EGP. 15K deposit transferred.",
  },
  {
    id: "c7",
    leadName: "Nour Hassan", leadCompany: "Nour Shop",
    leadEmail: "nour@shop.io", leadPhone: "+20 115 333 7788",
    assignedTo: "Sara Nour", scheduledAt: subD(1, 14),
    status: "completed", duration: 15,
    outcome: "not_interested", service: "Logo + Branding",
    notes: "Budget too low. Will revisit in Q3.",
  },
  {
    id: "c8",
    leadName: "كريم إبراهيم", leadCompany: "KI eCommerce",
    leadEmail: "karim@ecom.eg", leadPhone: "+20 106 222 3344",
    assignedTo: "Mohamed Ali", scheduledAt: subD(2, 10),
    status: "completed", duration: 42,
    outcome: "follow_up", service: "SEO + Website",
    notes: "Needs to discuss with partner. Follow up next Monday.",
  },
  {
    id: "c9",
    leadName: "Youssef Ramzy", leadCompany: "YR Group",
    leadEmail: "youssef@yr.eg", leadPhone: "+20 100 888 1122",
    assignedTo: "Sara Nour", scheduledAt: subD(2, 15),
    status: "cancelled", service: "Ads",
  },
  {
    id: "c10",
    leadName: "Hana Sherif", leadCompany: "Hana Boutique",
    leadEmail: "hana@boutique.co", leadPhone: "+20 112 555 3344",
    assignedTo: "Mohamed Ali", scheduledAt: subD(3, 11),
    status: "completed", duration: 29,
    outcome: "interested", service: "Social Media + Ads",
    notes: "Loved the case studies. Send proposal for 3-month retainer.",
  },
];