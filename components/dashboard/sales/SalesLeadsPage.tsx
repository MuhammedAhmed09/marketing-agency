"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Search,
  MoreHorizontal,
  ClipboardList,
  Phone,
  Eye,
  ArrowUpDown,
  Users,
  TrendingUp,
  CircleDollarSign,
  Sparkles,
} from "lucide-react";
import { LeadStatusBadge, type LeadStatus } from "./LeadStatusBadge";
import { RequirementsSheet, type Lead, type RequirementsData } from "./RequirementsSheet";

// Mock Data 
const INITIAL_LEADS: Lead[] = [
  { id: "1",  name: "أحمد محمد",     email: "ahmed@example.com",   phone: "+20 100 123 4567", company: "Ahmed Corp",     interestedIn: "Ads + SEO",        createdAt: "2025-05-14", status: "new" },
  { id: "2",  name: "Sara Khalid",   email: "sara@company.com",    phone: "+20 112 987 6543", company: "Sara Ltd",       interestedIn: "Website",          createdAt: "2025-05-13", status: "contacted" },
  { id: "3",  name: "محمود عبدالله", email: "mahmoud@biz.co",      phone: "+20 106 555 0011", company: "MB Solutions",   interestedIn: "App",              createdAt: "2025-05-12", status: "qualified" },
  { id: "4",  name: "Nour Hassan",   email: "nour@shop.io",        phone: "+20 115 333 7788", company: "Nour Shop",      interestedIn: "Logo + Branding",  createdAt: "2025-05-11", status: "closed_won" },
  { id: "5",  name: "Omar Fathy",    email: "omar@startup.eg",     phone: "+20 100 777 2200", company: "Startup EG",     interestedIn: "Ads",              createdAt: "2025-05-10", status: "new" },
  { id: "6",  name: "Laila Mostafa", email: "laila@design.co",     phone: "+20 111 444 9900", company: "Laila Design",   interestedIn: "Social Media",     createdAt: "2025-05-09", status: "contacted" },
  { id: "7",  name: "كريم إبراهيم",  email: "karim@ecom.eg",       phone: "+20 106 222 3344", company: "KI eCommerce",   interestedIn: "SEO + Website",    createdAt: "2025-05-08", status: "closed_lost" },
  { id: "8",  name: "Dina Yousef",   email: "dina@medclinic.com",  phone: "+20 115 666 5577", company: "Med Clinic",     interestedIn: "Website + Ads",    createdAt: "2025-05-07", status: "new" },
];

const FILTER_TABS: { key: "all" | LeadStatus; label: string }[] = [
  { key: "all",         label: "All Leads" },
  { key: "new",         label: "New" },
  { key: "contacted",   label: "Contacted" },
  { key: "qualified",   label: "Qualified" },
  { key: "closed_won",  label: "Won" },
  { key: "closed_lost", label: "Lost" },
];

// Stat Card
function StatCard({
  label, value, icon: Icon, accent,
}: {
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

//  Avatar initials
function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">
      {initials}
    </div>
  );
}

//  Main Component 
export default function SalesLeadsPage() {
  const [leads, setLeads]         = useState<Lead[]>(INITIAL_LEADS);
  const [filter, setFilter]       = useState<"all" | LeadStatus>("all");
  const [search, setSearch]       = useState("");
  const [sortDir, setSortDir]     = useState<"asc" | "desc">("desc");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeLead, setActiveLead] = useState<Lead | null>(null);

  // stats
  const stats = useMemo(() => ({
    total:     leads.length,
    qualified: leads.filter(l => l.status === "qualified").length,
    won:       leads.filter(l => l.status === "closed_won").length,
    convRate:  leads.length > 0
      ? Math.round((leads.filter(l => l.status === "closed_won").length / leads.length) * 100) + "%"
      : "0%",
  }), [leads]);

  // filtered + sorted
  const displayed = useMemo(() => {
    return leads
      .filter(l => {
        const matchStatus = filter === "all" || l.status === filter;
        const q = search.toLowerCase();
        const matchSearch = !q ||
          l.name.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q) ||
          (l.company ?? "").toLowerCase().includes(q) ||
          l.interestedIn.toLowerCase().includes(q);
        return matchStatus && matchSearch;
      })
      .sort((a, b) => {
        const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        return sortDir === "asc" ? diff : -diff;
      });
  }, [leads, filter, search, sortDir]);

  function openSheet(lead: Lead) {
    setActiveLead(lead);
    setSheetOpen(true);
  }

  async function handleSave(leadId: string, data: RequirementsData) {
    // TODO: replace with API call — e.g. await updateLead(leadId, data)
    await new Promise(r => setTimeout(r, 800)); // simulate API
    setLeads(prev =>
      prev.map(l => l.id === leadId ? { ...l, status: data.status } : l)
    );
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="space-y-6">
        {/* ── Page header ── */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">All Leads</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage and qualify incoming leads from the landing page.
            </p>
          </div>
          <Badge variant="outline" className="gap-1.5 text-xs shrink-0">
            <Sparkles className="h-3 w-3" />
            {leads.filter(l => l.status === "new").length} new today
          </Badge>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatCard label="Total Leads"      value={stats.total}     icon={Users}             accent="bg-blue-100 text-blue-600" />
          <StatCard label="Qualified"        value={stats.qualified} icon={ClipboardList}     accent="bg-emerald-100 text-emerald-600" />
          <StatCard label="Closed Won"       value={stats.won}       icon={CircleDollarSign}  accent="bg-violet-100 text-violet-600" />
          <StatCard label="Conversion Rate"  value={stats.convRate}  icon={TrendingUp}        accent="bg-amber-100 text-amber-600" />
        </div>

        {/* ── Filters + Search ── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
            {FILTER_TABS.map(({ key, label }) => {
              const count = key === "all" ? leads.length : leads.filter(l => l.status === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
                    filter === key
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  )}
                >
                  {label}
                  <span className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                    filter === key ? "bg-background/20 text-background" : "bg-background text-foreground"
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
              placeholder="Search leads..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-8 h-8 text-sm"
            />
          </div>
        </div>

        {/* ── Table ── */}
        <Card className="border shadow-none">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[220px]">Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Interested In</TableHead>
                <TableHead>
                  <button
                    className="flex items-center gap-1 text-xs font-medium"
                    onClick={() => setSortDir(d => d === "asc" ? "desc" : "asc")}
                  >
                    Date <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {displayed.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-16 text-center text-sm text-muted-foreground">
                    No leads match your search.
                  </TableCell>
                </TableRow>
              ) : (
                displayed.map(lead => (
                  <TableRow key={lead.id} className="group">

                    {/* Client */}
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar name={lead.name} />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold truncate">{lead.name}</p>
                          {lead.company && (
                            <p className="text-xs text-muted-foreground truncate">{lead.company}</p>
                          )}
                        </div>
                      </div>
                    </TableCell>

                    {/* Contact */}
                    <TableCell>
                      <p className="text-sm text-foreground">{lead.email}</p>
                      <p className="text-xs text-muted-foreground">{lead.phone}</p>
                    </TableCell>

                    {/* Interested In */}
                    <TableCell>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {lead.interestedIn}
                      </Badge>
                    </TableCell>

                    {/* Date */}
                    <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric", month: "short", year: "numeric"
                      })}
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <LeadStatusBadge status={lead.status} />
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => openSheet(lead)}
                            >
                              <ClipboardList className="h-3.5 w-3.5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Fill Requirements</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                              <a href={`tel:${lead.phone}`}>
                                <Phone className="h-3.5 w-3.5" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Call</TooltipContent>
                        </Tooltip>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <MoreHorizontal className="h-3.5 w-3.5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem onClick={() => openSheet(lead)}>
                              <ClipboardList className="mr-2 h-3.5 w-3.5" />
                              Requirements Form
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-3.5 w-3.5" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() =>
                                setLeads(prev =>
                                  prev.map(l =>
                                    l.id === lead.id ? { ...l, status: "closed_lost" } : l
                                  )
                                )
                              }
                            >
                              Mark as Lost
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* Footer */}
          <div className="flex items-center justify-between border-t px-4 py-2.5">
            <p className="text-xs text-muted-foreground">
              Showing <strong>{displayed.length}</strong> of <strong>{leads.length}</strong> leads
            </p>
            <p className="text-xs text-muted-foreground">
              Last updated: just now
            </p>
          </div>
        </Card>

        {/* ── Requirements Sheet ── */}
        <RequirementsSheet
          lead={activeLead}
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          onSave={handleSave}
        />
      </div>
    </TooltipProvider>
  );
}