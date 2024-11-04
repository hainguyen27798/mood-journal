import { create } from 'zustand';

interface INavState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useNav = create<INavState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
