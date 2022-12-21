import { useState } from "react";
import UsePrevious from "./UsePrevious";
const Counter = () => {
  const [count, setCount] = useState(0);
  const previousValue = UsePrevious(count);
  return (
    <div>
      <p>Current value of count is: {count}</p>
      <p>Previous value of count is:{previousValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};
export default Counter;
