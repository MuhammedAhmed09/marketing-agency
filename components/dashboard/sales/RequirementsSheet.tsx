"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { LeadStatus } from "./LeadStatusBadge";
import {
  Globe,
  Smartphone,
  Megaphone,
  TrendingUp,
  Palette,
  Share2,
  Video,
  Mail,
  CheckCircle2,
  Loader2,
} from "lucide-react";

// Types
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  interestedIn: string;
  createdAt: string;
  status: LeadStatus;
}

export interface RequirementsData {
  services: string[];
  totalBudget: string;
  depositPaid: string;
  timeline: string;
  notes: string;
  status: LeadStatus;
}

interface Props {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (leadId: string, data: RequirementsData) => Promise<void>;
}

// Services list
const SERVICES = [
  { id: "website",  label: "Website",         icon: Globe },
  { id: "app",      label: "Mobile App",       icon: Smartphone },
  { id: "ads",      label: "Paid Ads",         icon: Megaphone },
  { id: "seo",      label: "SEO",              icon: TrendingUp },
  { id: "logo",     label: "Logo & Branding",  icon: Palette },
  { id: "social",   label: "Social Media",     icon: Share2 },
  { id: "video",    label: "Video Production", icon: Video },
  { id: "email_mkt",label: "Email Marketing",  icon: Mail },
];

const TIMELINES = [
  "Less than 1 month",
  "1–2 months",
  "2–3 months",
  "3–6 months",
  "6+ months",
  "Ongoing / Retainer",
];

// Component 
export function RequirementsSheet({ lead, open, onOpenChange, onSave }: Props) {
  const [services, setServices]   = useState<string[]>([]);
  const [budget, setBudget]       = useState("");
  const [deposit, setDeposit]     = useState("");
  const [timeline, setTimeline]   = useState("");
  const [notes, setNotes]         = useState("");
  const [status, setStatus]       = useState<LeadStatus>("qualified");
  const [saving, setSaving]       = useState(false);
  const [saved, setSaved]         = useState(false);

  function toggleService(id: string) {
    setServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  }

  async function handleSave() {
    if (!lead) return;
    setSaving(true);
    await onSave(lead.id, { services, totalBudget: budget, depositPaid: deposit, timeline, notes, status });
    setSaving(false);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onOpenChange(false);
      // reset
      setServices([]); setBudget(""); setDeposit("");
      setTimeline(""); setNotes(""); setStatus("qualified");
    }, 1200);
  }

  if (!lead) return null;

  const depositNum = parseFloat(deposit) || 0;
  const budgetNum  = parseFloat(budget)  || 0;
  const remaining  = budgetNum - depositNum;
  const depositPct = budgetNum > 0 ? Math.round((depositNum / budgetNum) * 100) : 0;
  const canUnlock  = status === "closed_won" && depositNum > 0;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[540px] overflow-y-auto p-0 gap-0"
      >
        {/* ── Header ── */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b bg-muted/30">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">
              {lead.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <SheetTitle className="text-base leading-tight">{lead.name}</SheetTitle>
              <SheetDescription className="text-xs truncate">
                {lead.email} · {lead.phone}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="px-6 py-5 space-y-6">

          {/* ── Services ── */}
          <section>
            <Label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3 block">
              Services Required
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.map(({ id, label, icon: Icon }) => {
                const active = services.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggleService(id)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-150 text-left",
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-foreground hover:border-foreground/40 hover:bg-muted/50"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0 opacity-70" />
                    {label}
                  </button>
                );
              })}
            </div>
            {services.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {services.map(s => (
                  <Badge key={s} variant="secondary" className="text-[10px] tracking-wide">
                    {SERVICES.find(sv => sv.id === s)?.label}
                  </Badge>
                ))}
              </div>
            )}
          </section>

          <Separator />

          {/* ── Budget & Deposit ── */}
          <section className="space-y-4">
            <Label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase block">
              Financials (EGP)
            </Label>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="budget" className="text-xs text-muted-foreground">Total Budget</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="50,000"
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="h-9"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="deposit" className="text-xs text-muted-foreground">Deposit Paid</Label>
                <Input
                  id="deposit"
                  type="number"
                  placeholder="10,000"
                  value={deposit}
                  onChange={e => setDeposit(e.target.value)}
                  className="h-9"
                />
              </div>
            </div>

            {/* Deposit progress bar */}
            {budgetNum > 0 && (
              <div className="rounded-lg border bg-muted/40 p-3 space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Deposit coverage</span>
                  <span className="font-semibold text-foreground">{depositPct}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      depositPct >= 30 ? "bg-emerald-500" : "bg-amber-400"
                    )}
                    style={{ width: `${Math.min(depositPct, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>Paid: <strong className="text-foreground">{depositNum.toLocaleString()} EGP</strong></span>
                  <span>Remaining: <strong className="text-foreground">{remaining > 0 ? remaining.toLocaleString() : 0} EGP</strong></span>
                </div>
              </div>
            )}
          </section>

          <Separator />

          {/* ── Timeline & Status ── */}
          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Timeline
              </Label>
              <Select value={timeline} onValueChange={setTimeline}>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {TIMELINES.map(t => (
                    <SelectItem key={t} value={t} className="text-sm">{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Lead Status
              </Label>
              <Select value={status} onValueChange={v => setStatus(v as LeadStatus)}>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="closed_won">✓ Closed — Won</SelectItem>
                  <SelectItem value="closed_lost">✗ Closed — Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          <Separator />

          {/* ── Notes ── */}
          <section className="space-y-1.5">
            <Label htmlFor="notes" className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Call Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="متطلبات خاصة، concerns، timeline constraints، اللي اتكلمتم فيه..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={4}
              className="resize-none text-sm leading-relaxed"
            />
          </section>

          {/* ── Dashboard unlock notice ── */}
          {canUnlock && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Client dashboard will be <strong>unlocked</strong> after saving.
            </div>
          )}

          {/* ── Save button ── */}
          <Button
            className={cn(
              "w-full h-11 font-semibold tracking-wide transition-all duration-300",
              saved && "bg-emerald-600 hover:bg-emerald-600"
            )}
            disabled={saving || saved || services.length === 0}
            onClick={handleSave}
          >
            {saved ? (
              <><CheckCircle2 className="mr-2 h-4 w-4" /> Saved — Dashboard {canUnlock ? "Unlocked" : "Updated"}</>
            ) : saving ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
            ) : (
              "Save Requirements"
            )}
          </Button>

          {services.length === 0 && (
            <p className="text-center text-xs text-muted-foreground -mt-2">
              Select at least one service to save.
            </p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}