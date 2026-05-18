import { cn } from "@/lib/utils";
import {
  CALL_STATUS_CONFIG,
  CALL_OUTCOME_CONFIG,
  type CallStatus,
  type CallOutcome,
} from "./calls.types";

export function CallStatusBadge({ status, className }: { status: CallStatus; className?: string }) {
  const cfg = CALL_STATUS_CONFIG[status];
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
      cfg.className, className
    )}>
      <span className={cn("h-1.5 w-1.5 rounded-full", cfg.dot)} />
      {cfg.label}
    </span>
  );
}

export function CallOutcomeBadge({ outcome, className }: { outcome: NonNullable<CallOutcome>; className?: string }) {
  const cfg = CALL_OUTCOME_CONFIG[outcome];
  return (
    <span className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
      cfg.className, className
    )}>
      {cfg.label}
    </span>
  );
}