import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  isMobile: boolean;
  toggle: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  isMobile: (typeof window !== "undefined" && window.innerWidth < 768) || false,
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
