"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Phone, Search, MoreHorizontal, CalendarClock,
  Clock, UserCheck, XCircle, Calendar,
} from "lucide-react";
import { MOCK_CALLS, type Call, type CallStatus } from "./calls.types";
import { CallStatusBadge } from "./CallBadges";

// ─── helpers ────────────────────────────────────────────────────────────────
function formatDateTime(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
    time: d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
  };
}

function timeUntil(iso: string) {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff < 0) return null;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 0) return `in ${h}h ${m}m`;
  return `in ${m}m`;
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

// ─── Component ───────────────────────────────────────────────────────────────
export default function BookedCallsPage() {
  const [calls, setCalls] = useState<Call[]>(MOCK_CALLS);
  const [search, setSearch] = useState("");

  // Only upcoming/scheduled + in_progress
  const booked = useMemo(() =>
    calls
      .filter(c => c.status === "scheduled" || c.status === "in_progress")
      .filter(c => {
        const q = search.toLowerCase();
        return !q ||
          c.leadName.toLowerCase().includes(q) ||
          c.leadEmail.toLowerCase().includes(q) ||
          (c.leadCompany ?? "").toLowerCase().includes(q);
      })
      .sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime()),
    [calls, search]
  );

  const stats = useMemo(() => ({
    total:       calls.filter(c => c.status === "scheduled" || c.status === "in_progress").length,
    today:       calls.filter(c => {
                   const d = new Date(c.scheduledAt);
                   const now = new Date();
                   return (c.status === "scheduled" || c.status === "in_progress") &&
                     d.toDateString() === now.toDateString();
                 }).length,
    inProgress:  calls.filter(c => c.status === "in_progress").length,
  }), [calls]);

  function updateStatus(id: string, status: CallStatus) {
    setCalls(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Booked Calls</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              All upcoming and in-progress calls.
            </p>
          </div>
          {stats.inProgress > 0 && (
            <Badge className="gap-1.5 bg-amber-500 hover:bg-amber-500 text-white text-xs animate-pulse shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {stats.inProgress} In Progress
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard label="Total Booked"  value={stats.total}      icon={CalendarClock} accent="bg-blue-100 text-blue-600" />
          <StatCard label="Today's Calls" value={stats.today}      icon={Calendar}      accent="bg-violet-100 text-violet-600" />
          <StatCard label="In Progress"   value={stats.inProgress} icon={Phone}         accent="bg-amber-100 text-amber-600" />
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search calls..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 h-8 text-sm"
          />
        </div>

        {/* Table */}
        <Card className="border shadow-none">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[200px]">Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {booked.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="py-16 text-center text-sm text-muted-foreground">
                    No upcoming calls.
                  </TableCell>
                </TableRow>
              ) : booked.map(call => {
                const { date, time } = formatDateTime(call.scheduledAt);
                const until = timeUntil(call.scheduledAt);
                return (
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
                    <TableCell>
                      <p className="text-sm font-medium">{time}</p>
                      <p className="text-xs text-muted-foreground">{date}</p>
                      {until && (
                        <p className="text-[10px] font-semibold text-blue-600 mt-0.5 flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5" />{until}
                        </p>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        <UserCheck className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-sm">{call.assignedTo}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <CallStatusBadge status={call.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                              <a href={`tel:${call.leadPhone}`}>
                                <Phone className="h-3.5 w-3.5" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Call Now</TooltipContent>
                        </Tooltip>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <MoreHorizontal className="h-3.5 w-3.5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem onClick={() => updateStatus(call.id, "completed")}>
                              <UserCheck className="mr-2 h-3.5 w-3.5" />
                              Mark Completed
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => updateStatus(call.id, "cancelled")}
                            >
                              <XCircle className="mr-2 h-3.5 w-3.5" />
                              Cancel Call
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-4 py-2.5">
            <p className="text-xs text-muted-foreground">
              Showing <strong>{booked.length}</strong> upcoming calls
            </p>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  );
}