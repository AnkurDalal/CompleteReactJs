import { useMemo, useState } from "react";
import Counts from "./MemoCount";
export const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const detials = useMemo(() => {
    return {
      name: "Ankur Dalal",
      age: 21,
      city: "Delhi",
    };
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <Counts data={detials} />
    </>
  );
};
