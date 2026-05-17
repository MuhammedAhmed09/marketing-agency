import {
  BarChart3,
  Bell,
  Briefcase,
  Calendar,
  ClipboardList,
  Clock,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
  User,
  Users,
  FolderKanban,
  BadgeDollarSign,
  KanbanSquare,
  Code2,
  LineChart,
  Receipt,
  Headphones,
} from "lucide-react";

import { NavItem } from "./app-sidebar";

/* ADMIN SIDEBAR */
export const adminSidebar: NavItem[] = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },

  {
    title: "CRM & Leads",
    icon: Users,
    items: [
      { title: "All Leads", url: "/admin/leads" },
      { title: "Pipeline", url: "/admin/leads/pipeline" },
      { title: "Booked Calls", url: "/admin/leads/calls" },
    ],
  },

  {
    title: "Projects",
    icon: FolderKanban,
    items: [
      { title: "All Projects", url: "/admin/projects" },
      { title: "Active Projects", url: "/admin/projects/active" },
      { title: "Completed Projects", url: "/admin/projects/completed" },
    ],
  },

  {
    title: "Team Management",
    icon: Briefcase,
    items: [
      { title: "Developers", url: "/admin/developers" },
      { title: "Sales Team", url: "/admin/sales" },
      { title: "Assign Tasks", url: "/admin/tasks/assign" },
    ],
  },

  {
    title: "Reports & Analytics",
    icon: BarChart3,
    items: [
      { title: "Revenue Reports", url: "/admin/reports/revenue" },
      { title: "Performance Analytics", url: "/admin/reports/analytics" },
    ],
  },

  {
    title: "Invoices & Payments",
    icon: CreditCard,
    items: [
      { title: "Invoices", url: "/admin/billing/invoices" },
      { title: "Transactions", url: "/admin/billing/transactions" },
    ],
  },

  {
    title: "Messages",
    url: "/admin/chat",
    icon: MessageCircle,
  },

  {
    title: "Notifications",
    url: "/admin/notifications",
    icon: Bell,
  },

  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

/* SALES SIDEBAR */
export const salesSidebar: NavItem[] = [
  {
    title: "Dashboard",
    url: "/sales",
    icon: LayoutDashboard,
  },

  {
    title: "Leads",
    url: "/sales/leads",
    icon: Users,
  },

  {
    title: "Calls",
    icon: Calendar,
    items: [
      { title: "Booked Calls", url: "/sales/calls" },
      { title: "Today's Calls", url: "/sales/calls/today" },
      { title: "Call History", url: "/sales/calls/history" },
    ],
  },

  {
    title: "Requirements",
    icon: ClipboardList,
    items: [
      { title: "Client Requirements", url: "/sales/requirements" },
      { title: "Pending Requirements", url: "/sales/requirements/pending" },
    ],
  },

  {
    title: "Proposals",
    icon: FileText,
    items: [
      { title: "All Proposals", url: "/sales/proposals" },
      { title: "Create Proposal", url: "/sales/proposals/create" },
      { title: "Pending Approval", url: "/sales/proposals/pending" },
    ],
  },

  {
    title: "Invoices & Payments",
    icon: Receipt,
    items: [
      { title: "Invoices", url: "/sales/invoices" },
      { title: "Pending Payments", url: "/sales/payments/pending" },
      { title: "Completed Payments", url: "/sales/payments/completed" },
    ],
  },

  {
    title: "Clients",
    icon: Briefcase,
    items: [
      { title: "All Clients", url: "/sales/clients" },
      { title: "Active Clients", url: "/sales/clients/active" },
    ],
  },

  {
    title: "Messages",
    url: "/sales/chat",
    icon: MessageCircle,
  },

  {
    title: "Notifications",
    url: "/sales/notifications",
    icon: Bell,
  },

  {
    title: "Performance",
    url: "/sales/performance",
    icon: LineChart,
  },

  {
    title: "Settings",
    url: "/sales/settings",
    icon: Settings,
  },
];

/* DEVELOPER SIDEBAR */
export const developerSidebar: NavItem[] = [
  {
    title: "Dashboard",
    url: "/developer",
    icon: LayoutDashboard,
  },

  {
    title: "Projects",
    icon: FolderKanban,
    items: [
      { title: "My Projects", url: "/developer/projects" },
      { title: "Active Projects", url: "/developer/projects/active" },
      { title: "Completed Projects", url: "/developer/projects/completed" },
    ],
  },

  {
    title: "Tasks",
    icon: KanbanSquare,
    items: [
      { title: "Task Board", url: "/developer/tasks/board" },
      { title: "Pending Tasks", url: "/developer/tasks/pending" },
      { title: "Completed Tasks", url: "/developer/tasks/completed" },
      { title: "Deadlines", url: "/developer/tasks/deadlines" },
    ],
  },

  {
    title: "Project Updates",
    icon: ClipboardList,
    items: [
      { title: "Create Update", url: "/developer/updates/create" },
      { title: "My Updates", url: "/developer/updates" },
      { title: "Daily Reports", url: "/developer/reports/daily" },
    ],
  },

  {
    title: "Files & Deliverables",
    icon: FileText,
    items: [
      { title: "Upload Files", url: "/developer/files/upload" },
      { title: "Project Files", url: "/developer/files" },
      { title: "Deliverables", url: "/developer/deliverables" },
    ],
  },

  {
    title: "Development",
    icon: Code2,
    items: [
      { title: "Repositories", url: "/developer/repos" },
      { title: "Deployments", url: "/developer/deployments" },
      { title: "Environments", url: "/developer/environments" },
    ],
  },

  {
    title: "Messages",
    url: "/developer/chat",
    icon: MessageCircle,
  },

  {
    title: "Notifications",
    url: "/developer/notifications",
    icon: Bell,
  },

  {
    title: "Schedule",
    url: "/developer/schedule",
    icon: Clock,
  },

  {
    title: "Profile",
    url: "/developer/profile",
    icon: User,
  },

  {
    title: "Settings",
    url: "/developer/settings",
    icon: Settings,
  },
];

/* CLIENT SIDEBAR */
export const clientSidebar: NavItem[] = [
  {
    title: "Dashboard",
    url: "/client",
    icon: LayoutDashboard,
  },

  {
    title: "Projects",
    icon: FolderKanban,
    items: [
      { title: "My Projects", url: "/client/projects" },
      { title: "Project Progress", url: "/client/projects/progress" },
      { title: "Project Timeline", url: "/client/projects/timeline" },
      { title: "Milestones", url: "/client/projects/milestones" },
    ],
  },

  {
    title: "Tasks & Updates",
    icon: ClipboardList,
    items: [
      { title: "Latest Updates", url: "/client/updates" },
      { title: "Completed Tasks", url: "/client/tasks/completed" },
      { title: "Pending Tasks", url: "/client/tasks/pending" },
    ],
  },

  {
    title: "Files & Assets",
    icon: FileText,
    items: [
      { title: "Uploaded Files", url: "/client/files" },
      { title: "Deliverables", url: "/client/files/deliverables" },
      { title: "Contracts", url: "/client/files/contracts" },
    ],
  },

  {
    title: "Reports",
    icon: BarChart3,
    items: [
      { title: "Daily Reports", url: "/client/reports/daily" },
      { title: "Weekly Reports", url: "/client/reports/weekly" },
      { title: "All Reports", url: "/client/reports" },
    ],
  },

  {
    title: "Invoices & Payments",
    icon: BadgeDollarSign,
    items: [
      { title: "Invoices", url: "/client/billing/invoices" },
      { title: "Payment History", url: "/client/billing/history" },
      { title: "Pending Payments", url: "/client/billing/pending" },
    ],
  },

  {
    title: "Messages",
    url: "/client/chat",
    icon: MessageCircle,
  },

  {
    title: "Support",
    icon: Headphones,
    items: [
      { title: "Open Ticket", url: "/client/support/create" },
      { title: "My Tickets", url: "/client/support" },
    ],
  },

  {
    title: "Notifications",
    url: "/client/notifications",
    icon: Bell,
  },

  {
    title: "Profile",
    url: "/client/profile",
    icon: User,
  },

  {
    title: "Settings",
    url: "/client/settings",
    icon: Settings,
  },
];