import { createStore } from "redux";
import { InitialState } from "../types";

const initiaState: InitialState = {
  count: 0,
};

export type ActionType = { type: "INCREMENT" } | { type: "DECREMENT" };

export const reduxIncreamentAction = (): ActionType => {
  return { type: "INCREMENT" };
};

export const reduxDecreamentAction = (): ActionType => {
  return { type: "DECREMENT" };
};

const reducer = (
  state: InitialState = initiaState,
  action: ActionType
): InitialState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const reduxStore = createStore(reducer);
