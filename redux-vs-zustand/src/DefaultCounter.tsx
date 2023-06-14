import { DefaultCounterProps } from "./types";

const DefaultCounter: React.FC<DefaultCounterProps> = ({
  value,
  title,
  color,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="counter">
      <h2>
        Value in <b style={{ color }}>{title}</b> is: {value}
      </h2>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default DefaultCounter;
