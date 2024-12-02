import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Diagram,
  Home2,
  LampCharge,
  NotificationBing,
  Setting2,
  TaskSquare,
} from "iconsax-react";

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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
