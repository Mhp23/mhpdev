export interface InitialState {
  count: number;
}
export interface DefaultCounterProps {
  value: number;
  title: string;
  color: string;
  onIncrease: () => void;
  onDecrease: () => void;
}
