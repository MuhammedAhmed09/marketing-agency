"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Search, Clock, UserCheck, TrendingUp, ArrowUpDown,
} from "lucide-react";
import { CallOutcome, MOCK_CALLS } from "../calls.types";
import { CallOutcomeBadge, CallStatusBadge } from "../CallBadges";

type OutcomeFilter = "all" | NonNullable<CallOutcome>;

function formatDateTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) +
    " · " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">
      {initials}
    </div>
  );
}

function StatCard({ label, value, icon: Icon, accent }: {
  label: string; value: number | string; icon: React.ElementType; accent: string;
}) {
  return (
    <Card className="border shadow-none">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
            <p className="text-2xl font-bold tracking-tight">{value}</p>
          </div>
          <div className={cn("rounded-lg p-2", accent)}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CallHistoryPage() {
  const [search, setSearch]         = useState("");
  const [outcomeFilter, setOutcome] = useState<OutcomeFilter>("all");
  const [sortDir, setSortDir]       = useState<"asc" | "desc">("desc");

  const history = useMemo(() => {
    return MOCK_CALLS
      .filter(c => c.status === "completed" || c.status === "missed" || c.status === "cancelled")
      .filter(c => {
        const q = search.toLowerCase();
        return !q ||
          c.leadName.toLowerCase().includes(q) ||
          c.leadEmail.toLowerCase().includes(q) ||
          (c.leadCompany ?? "").toLowerCase().includes(q);
      })
      .filter(c => outcomeFilter === "all" || c.outcome === outcomeFilter)
      .sort((a, b) => {
        const diff = new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime();
        return sortDir === "asc" ? diff : -diff;
      });
  }, [search, outcomeFilter, sortDir]);

  const stats = useMemo(() => {
    const completed = MOCK_CALLS.filter(c => c.status === "completed");
    return {
      total:      MOCK_CALLS.filter(c => ["completed","missed","cancelled"].includes(c.status)).length,
      completed:  completed.length,
      won:        completed.filter(c => c.outcome === "closed_won").length,
      avgDur:     completed.length > 0
        ? Math.round(completed.reduce((s, c) => s + (c.duration ?? 0), 0) / completed.length)
        : 0,
    };
  }, []);

  const OUTCOME_TABS: { key: OutcomeFilter; label: string }[] = [
    { key: "all",           label: "All" },
    { key: "interested",    label: "Interested" },
    { key: "follow_up",     label: "Follow Up" },
    { key: "closed_won",    label: "Won" },
    { key: "not_interested",label: "Not Interested" },
    { key: "no_answer",     label: "No Answer" },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-xl font-bold tracking-tight">Call History</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Record of all completed, missed and cancelled calls.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatCard label="Total Calls"   value={stats.total}     icon={UserCheck}  accent="bg-blue-100 text-blue-600" />
          <StatCard label="Completed"     value={stats.completed} icon={UserCheck}  accent="bg-emerald-100 text-emerald-600" />
          <StatCard label="Closed Won"    value={stats.won}       icon={TrendingUp} accent="bg-violet-100 text-violet-600" />
          <StatCard label="Avg Duration"  value={`${stats.avgDur}m`} icon={Clock}   accent="bg-amber-100 text-amber-600" />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Outcome tabs */}
          <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
            {OUTCOME_TABS.map(({ key, label }) => {
              const count = key === "all"
                ? history.length
                : MOCK_CALLS.filter(c =>
                    ["completed","missed","cancelled"].includes(c.status) && c.outcome === key
                  ).length;
              return (
                <button
                  key={key}
                  onClick={() => setOutcome(key)}
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
                    outcomeFilter === key
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  )}
                >
                  {label}
                  <span className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                    outcomeFilter === key ? "bg-background/20 text-background" : "bg-background text-foreground"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search history..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-8 h-8 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <Card className="border shadow-none">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[200px]">Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>
                  <button
                    className="flex items-center gap-1 text-xs font-medium"
                    onClick={() => setSortDir(d => d === "asc" ? "desc" : "asc")}
                  >
                    Date <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Outcome</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="py-16 text-center text-sm text-muted-foreground">
                    No call history found.
                  </TableCell>
                </TableRow>
              ) : history.map(call => (
                <TableRow key={call.id} className="group">
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <Avatar name={call.leadName} />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate">{call.leadName}</p>
                        {call.leadCompany && (
                          <p className="text-xs text-muted-foreground truncate">{call.leadCompany}</p>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{call.leadEmail}</p>
                    <p className="text-xs text-muted-foreground">{call.leadPhone}</p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{call.service ?? "—"}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    {formatDateTime(call.scheduledAt)}
                  </TableCell>
                  <TableCell>
                    {call.duration ? (
                      <span className="flex items-center gap-1 text-sm">
                        <Clock className="h-3 w-3 text-muted-foreground" />{call.duration}m
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-sm">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <CallStatusBadge status={call.status} />
                  </TableCell>
                  <TableCell>
                    {call.outcome
                      ? <CallOutcomeBadge outcome={call.outcome} />
                      : <span className="text-muted-foreground text-sm">—</span>
                    }
                  </TableCell>
                  <TableCell className="max-w-[200px]">
                    {call.notes
                      ? <p className="text-xs text-muted-foreground line-clamp-2">{call.notes}</p>
                      : <span className="text-muted-foreground text-sm">—</span>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-4 py-2.5">
            <p className="text-xs text-muted-foreground">
              Showing <strong>{history.length}</strong> records
            </p>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  );
}