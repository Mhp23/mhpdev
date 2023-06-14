import { create } from "zustand";
import { InitialState } from "../types";

const useCounterStore = create<
  InitialState & {
    increment: () => void;
    decrement: () => void;
  }
>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
