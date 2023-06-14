import React from "react";
import useCounterStore from "./zustand";
import DefaultCounter from "./DefaultCounter";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, decrement, increment, toolkitStore } from "./redux-toolkit";
import {
  reduxDecreamentAction,
  reduxIncreamentAction,
  reduxStore,
} from "./redux";
/**
 * Please Don't wonder about this implementation for Redux! because in
 * the following as you can see I used Provider for the toolkit store
 * and I wanted to prevent making issues.
 */
const ReduxCounter: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    const subscribe = reduxStore.subscribe(() => {
      setCount(reduxStore.getState().count);
    });
    return () => {
      subscribe?.();
    };
  }, []);

  const onIncrease = () => {
    reduxStore.dispatch(reduxIncreamentAction());
  };

  const onDecrease = () => {
    reduxStore.dispatch(reduxDecreamentAction());
  };

  return (
    <DefaultCounter
      value={count}
      title="Redux"
      color="purple"
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

const ToolkitCounter: React.FC = () => {
  const { count } = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increment());
  };

  const onDecrease = () => {
    dispatch(decrement());
  };

  return (
    <DefaultCounter
      value={count}
      color="green"
      title="Redux Toolkit"
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

const ZustandCounter: React.FC = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrease = useCounterStore((state) => state.decrement);

  return (
    <DefaultCounter
      value={count}
      color="yellow"
      title="Zustand"
      onIncrease={increment}
      onDecrease={decrease}
    />
  );
};

const App: React.FC = () => {
  return (
    <>
      <ReduxCounter />
      <Provider store={toolkitStore}>
        <ToolkitCounter />
      </Provider>
      <ZustandCounter />
    </>
  );
};

export default App;
