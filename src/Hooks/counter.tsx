import { useState } from "react";
const useCounter = () => {
  const [count, setCounter] = useState(0);

  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);

  return { count, increment, decrement };
};
export { useCounter };
