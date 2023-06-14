import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";

const initialState: InitialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const toolkitStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof toolkitStore.getState>;

export type AppDispatch = typeof toolkitStore.dispatch;
