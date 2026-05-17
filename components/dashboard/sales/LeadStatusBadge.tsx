import { cn } from "@/lib/utils";

export type LeadStatus = "new" | "contacted" | "qualified" | "closed_won" | "closed_lost";

const STATUS_CONFIG: Record<LeadStatus, { label: string; className: string; dot: string }> = {
  new: {
    label: "New",
    className: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  contacted: {
    label: "Contacted",
    className: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
  qualified: {
    label: "Qualified",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  closed_won: {
    label: "Won ✓",
    className: "bg-violet-50 text-violet-700 border-violet-200",
    dot: "bg-violet-500",
  },
  closed_lost: {
    label: "Lost",
    className: "bg-zinc-100 text-zinc-500 border-zinc-200",
    dot: "bg-zinc-400",
  },
};

interface Props {
  status: LeadStatus;
  className?: string;
}

export function LeadStatusBadge({ status, className }: Props) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
        cfg.className,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", cfg.dot)} />
      {cfg.label}
    </span>
  );
}

export { STATUS_CONFIG };