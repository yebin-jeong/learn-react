import { useRef, useState } from "react";


function useCounter(initCount: number) {
  const [ count, setCount ] = useState(0);
  const stepRef = useRef(initCount);

  const down = () => {};
  const up = () => {};
  const reset = () => {};
}

export default useCounter;