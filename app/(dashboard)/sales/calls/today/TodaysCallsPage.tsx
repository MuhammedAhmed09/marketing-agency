"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Phone, Clock, UserCheck, XCircle, MoreHorizontal,
  CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";
import { MOCK_CALLS, type Call, type CallStatus } from "../calls.types";
import { CallOutcomeBadge, CallStatusBadge } from "../CallBadges";

// ─── Pure helpers ─────────────────────────────────────────────────────────────
function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function timeUntil(iso: string, now: number): string {
  const diff = new Date(iso).getTime() - now;
  if (diff < -3600000) return "Overdue";
  if (diff < 0) return "Now";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 0) return `in ${h}h ${m}m`;
  return `in ${m}m`;
}

function buildDateLabel(now: number): string {
  return new Date(now).toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className={cn(
      "shrink-0 flex items-center justify-center rounded-full bg-foreground text-background font-bold",
      size === "sm" ? "h-7 w-7 text-[10px]" : "h-9 w-9 text-xs"
    )}>
      {initials}
    </div>
  );
}

// ─── Call Card ────────────────────────────────────────────────────────────────
interface CallCardProps {
  call: Call;
  now: number;
  onUpdate: (id: string, s: CallStatus) => void;
}

function CallCard({ call, now, onUpdate }: CallCardProps) {
  const time   = formatTime(call.scheduledAt);
  const until  = timeUntil(call.scheduledAt, now);
  const isPast = new Date(call.scheduledAt).getTime() < now;

  return (
    <div className={cn(
      "rounded-xl border bg-card p-4 transition-all",
      call.status === "in_progress" && "border-amber-300 bg-amber-50/20 dark:bg-amber-950/10",
      call.status === "completed"   && "opacity-60",
      call.status === "missed"      && "border-red-200 bg-red-50/20 dark:bg-red-950/10"
    )}>
      <div className="flex items-start justify-between gap-3">

        {/* Time */}
        <div className="flex flex-col items-center gap-1 pt-0.5 shrink-0">
          <span className={cn(
            "text-sm font-bold tabular-nums",
            call.status === "in_progress" ? "text-amber-600"
              : call.status === "missed"  ? "text-red-500"
              : "text-foreground"
          )}>
            {time}
          </span>
          <span className={cn(
            "text-[10px] font-semibold",
            call.status === "in_progress" ? "text-amber-500"
              : call.status === "missed"  ? "text-red-400"
              : isPast                    ? "text-muted-foreground"
              : "text-blue-600"
          )}>
            {until}
          </span>
        </div>

        <div className="w-px self-stretch bg-border shrink-0" />

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Avatar name={call.leadName} size="sm" />
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate leading-tight">{call.leadName}</p>
              <p className="text-xs text-muted-foreground truncate">{call.leadCompany}</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5 shrink-0">
              <CallStatusBadge status={call.status} />
              {call.outcome && <CallOutcomeBadge outcome={call.outcome} />}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />{call.leadPhone}
            </span>
            {call.service && (
              <Badge variant="secondary" className="text-[10px] h-4">{call.service}</Badge>
            )}
            {call.duration && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />{call.duration} min
              </span>
            )}
          </div>

          {call.notes && (
            <p className="text-xs text-muted-foreground bg-muted/50 rounded-md px-2.5 py-1.5 leading-relaxed line-clamp-2">
              &ldquo;{call.notes}&rdquo;
            </p>
          )}
        </div>

        {/* Actions */}
        {(call.status === "scheduled" || call.status === "in_progress") && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
                <MoreHorizontal className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem onClick={() => onUpdate(call.id, "in_progress")}>
                <Loader2 className="mr-2 h-3.5 w-3.5" />Start Call
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdate(call.id, "completed")}>
                <CheckCircle2 className="mr-2 h-3.5 w-3.5" />Mark Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdate(call.id, "missed")}>
                <AlertCircle className="mr-2 h-3.5 w-3.5" />Mark Missed
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={() => onUpdate(call.id, "cancelled")}
              >
                <XCircle className="mr-2 h-3.5 w-3.5" />Cancel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TodaysCallsPage() {
  // useState lazy initializer → Date.now() runs once on mount, not on re-render
  const [now]         = useState<number>(() => Date.now());
  const [calls, setCalls] = useState<Call[]>(MOCK_CALLS);

  const dateLabel = buildDateLabel(now);

  const todaysCalls = useMemo(() => {
    const todayStr = new Date(now).toDateString();
    return calls
      .filter(c =>
        new Date(c.scheduledAt).toDateString() === todayStr &&
        c.status !== "cancelled"
      )
      .sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime());
  }, [calls, now]);

  const stats = useMemo(() => ({
    total:      todaysCalls.length,
    upcoming:   todaysCalls.filter(c => c.status === "scheduled").length,
    inProgress: todaysCalls.filter(c => c.status === "in_progress").length,
    done:       todaysCalls.filter(c => c.status === "completed" || c.status === "missed").length,
  }), [todaysCalls]);

  function updateStatus(id: string, status: CallStatus) {
    setCalls(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-xl font-bold tracking-tight">Today&apos;s Calls</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{dateLabel}</p>
        </div>

        {/* Progress */}
        <Card className="border shadow-none">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold">Daily Progress</span>
              <span className="text-xs text-muted-foreground">
                {stats.done} / {stats.total} calls done
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                style={{ width: stats.total > 0 ? `${(stats.done / stats.total) * 100}%` : "0%" }}
              />
            </div>
            <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                {stats.upcoming} Upcoming
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                {stats.inProgress} In Progress
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {stats.done} Done
              </span>
            </div>
          </CardContent>
        </Card>

        {/* List */}
        {todaysCalls.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-2">
            <UserCheck className="h-10 w-10 opacity-20" />
            <p className="text-sm">No calls scheduled for today.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {todaysCalls.map(call => (
              <CallCard key={call.id} call={call} now={now} onUpdate={updateStatus} />
            ))}
          </div>
        )}

      </div>
    </TooltipProvider>
  );
}