import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  userId: "",
  setUserId: (data) => set({ userId: data }),
}));