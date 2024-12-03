"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import {
  Diagram,
  Home2,
  LampCharge,
  NotificationBing,
  Setting2,
  TaskSquare,
} from "iconsax-react";
import Image from "next/image";
import { SideMenuItem } from "./SideMenuItem";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home2,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: TaskSquare,
  },
  {
    title: "Report",
    url: "/report",
    icon: Diagram,
  },
  {
    title: "Insights",
    url: "/insigts",
    icon: LampCharge,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: NotificationBing,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Setting2,
  },
];

export function AppSideBar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          {/* Logo */}
          <SidebarGroupLabel className="">
            <div className="relative w-full h-[72px]">
              <Image
                src="/images/logo.svg"
                alt="Full width example"
                fill
                className="object-cover" // Makes the image responsive
              />
            </div>
          </SidebarGroupLabel>
          {/* Menu items */}
          <SidebarGroupContent className="pt-12 px-6 ">
            <SidebarMenu className="flex flex-col gap-4">
              {items.map((item) => (
                <SideMenuItem
                  key={item.title}
                  url={item.url}
                  title={item.title}
                  Icon={item.icon}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
