"use client";

import * as React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import { adminSidebar, clientSidebar, developerSidebar, salesSidebar,  } from "./sidebar-data";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "./nav-user";
import { NavMain } from "./nav-main";

export type NavItem = {
  title: string;
  icon?: LucideIcon;
  url?: string;
  items?: { title: string; url: string }[];
};

type Role = "admin" | "sales" | "developer" | "client";

const dataMap: Record<Role, NavItem[]> = {
  admin: adminSidebar,
  sales: salesSidebar,
  developer: developerSidebar,
  client: clientSidebar,
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  role: Role;
};

export function AppSidebar({ role, ...props }: AppSidebarProps) {
  const data = dataMap[role];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader dir="rtl" className="border-b">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain data={data} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}