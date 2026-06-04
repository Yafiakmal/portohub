"use client";
import { LogOut, LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarIcon,
  SidebarLabel,
  SidebarHeader,
  SidebarLink,
  SidebarNav,
  SidebarContent,
  SidebarFooter,
  SidebarButton,
  SidebarToggle,
} from "@/components/my/Sidebar";
import { cn } from "@/lib/utils";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex h-screen w-full overflow-hidden bg-background")}>
      <Sidebar>
        {/* header */}
        <SidebarHeader>
          <SidebarIcon
            className={cn(
              "bg-purple-700 rounded-full h-12 w-12 flex items-center justify-center",
            )}
          >
            <span>MYA</span>
          </SidebarIcon>
          <SidebarLabel>Sidebar Header</SidebarLabel>
        </SidebarHeader>

        <SidebarContent>
          <SidebarNav>
            <SidebarLink url="/dummy-json">
              <SidebarIcon>
                <LayoutDashboard size={16} />
              </SidebarIcon>
              <SidebarLabel>Dummy Json</SidebarLabel>
            </SidebarLink>
            <SidebarLink url="/test">
              <SidebarIcon>
                <LayoutDashboard size={16} />
              </SidebarIcon>
              <SidebarLabel>Test</SidebarLabel>
            </SidebarLink>
          </SidebarNav>
        </SidebarContent>

        <SidebarFooter>
          <SidebarButton
            variant="default"
            className={cn("bg-error w-full")}
            onClick={() => alert("Logout")}
          >
            <SidebarIcon>
              <LogOut size={16} />
            </SidebarIcon>
            <SidebarLabel className="w-fit">Logout</SidebarLabel>
          </SidebarButton>
        </SidebarFooter>
      </Sidebar>
      <div className={cn("flex flex-col w-full h-screen overflow-x-hidden")}>
        <header
          className={cn(
            "sticky top-0 z-10 flex items-center gap-4 p-4 md:p-6 justify-end md:justify-start bg-background/80 backdrop-blur-sm",
          )}
        >
          <SidebarToggle />
        </header>

        <main className={cn("flex flex-col flex-1 bg-background p-6 ")}>
          {children}
        </main>

        <footer className={cn("py-4 mb-6 text-center h-20 w-full")}>
          <span className="text-sm text-foreground">
            &copy; 2024 My Company. All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}
