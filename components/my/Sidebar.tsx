"use client";

import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/stores/sidebarStore";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SidebarToggle({ className }: { className?: string }) {
  const toggle = useSidebarStore((state) => state.toggle);
  const isOpen = useSidebarStore((state) => state.isOpen);
  const expanded = useSidebarStore((state) => state.isOpen);
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-10 h-10 p-0 rounded-full flex items-center justify-center",

        className,
      )}
      onClick={toggle}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );
}
type SidebarButtonProps = React.ComponentProps<typeof Button>;

export function SidebarButton({
  className,
  children,
  ...props
}: SidebarButtonProps) {
  return (
    // rounded-full flex items-center gap-2 px-4 py-2 w-full
    <Button
      variant="ghost"
      className={cn("rounded-full px-4 py-2", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
export function SidebarIcon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        `w-5 h-5 flex items-center justify-center content-center font-bold object-cover overflow-clip ${className}`,
      )}
    >
      {children}
    </div>
  );
}
export function SidebarLabel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const expanded = useSidebarStore((state) => state.isOpen);
  return (
    <div
      className={cn(
        `flex-1 text-md font-normal`,
        expanded ? "md:block" : "md:hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function SidebarLink({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children: React.ReactNode;
}) {
  const expanded = useSidebarStore((state) => state.isOpen);
  const isMobile = useSidebarStore((state) => state.isMobile);
  const toggle = useSidebarStore((state) => state.toggle);
  const pathname = usePathname();

  const active = pathname === url;

  return (
    <Button
      asChild
      variant="ghost"
      onClick={() => {
        if (isMobile) {
          if (expanded) {
            toggle();
          }
        }
      }}
    >
      <Link
        href={url}
        className={cn(
          `rounded-full flex flex-1 items-center justify-center px-4 py-2 w-full 
          transition-transform duration-300 ease-in-out
          ${
            active
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-secondary/50"
          } 
            ${expanded ? "justify-start" : "justify-center"}
        
        ${className}`,
        )}
      >
        {children}
      </Link>
    </Button>
  );
}
export function SidebarNav({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const expanded = useSidebarStore((state) => state.isOpen);
  return (
    <nav
      className={cn(
        `flex flex-col gap-2 items-center w-full ${expanded ? "px-4 md:px-0" : "md:p-0"} ${className}`,
      )}
    >
      {children}
    </nav>
  );
}

export function SidebarHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const expanded = useSidebarStore((state) => state.isOpen);
  const toggle = useSidebarStore((state) => state.toggle);
  return (
    <header
      className={cn(
        `flex items-center mt-2 px-4 py-2 gap-4 ${expanded ? "" : "px-0 justify-center"} ${className}`,
      )}
    >
      {children}
      <SidebarToggle className={cn("md:hidden")} />
    </header>
  );
}
export function SidebarContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn(
        `flex-1 px-1 py-4 overflow-y-auto overflow-x-hidden ${className}`,
      )}
    >
      {children}
    </main>
  );
}
export function SidebarFooter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const expanded = useSidebarStore((state) => state.isOpen);
  return (
    <footer
      className={cn(
        "flex gap-4 items-center w-full h-20 px-4 border-t-2 ",
        expanded ? "" : "md:px-0 justify-center",
        className,
      )}
    >
      {children}
    </footer>
  );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
  const expanded = useSidebarStore((state) => state.isOpen);

  return (
    <aside
      className={cn(`flex flex-col
        transition-transform duration-150 ease-in-out 
        md:relative fixed inset-y-0 left-0 z-50
        bg-sidebar text-sidebar-foreground  
        h-screen 
        overflow-hidden w-full  
        md:border-r md:shadow-sm 
        ${
          expanded
            ? "md:w-72 max-md:translate-x-0 opacity-90 md:opacity-100 "
            : "md:w-14 max-md:-translate-x-full opacity-0 md:opacity-100 md:overflow-y-hidden"
        }`)}
    >
      {children}
    </aside>
  );
}
