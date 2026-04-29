import { set } from "react-hook-form";
import { create } from "zustand";

export const useUIStore = create((set) => ({

    modal: null,
    confirm: null,

    OpenModal: (title, message, onClose) => set({
        modal: { title, message, onClose }
    }),

    CloseModal: () => set({ modal: null }),

    openConfirm: (tittle, message, onConfirm, oncancel) => set({
        confirm: { tittle, message, onConfirm, oncancel }
    }),

    closeConfirm: () => set({ confirm: null })

}));