import { useMemo, useState } from "react";

export const MemoParentComp = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <ExpesnsiveComp />
        <button onClick={() => setCount((prev) => prev + 1)}>
          Re render Component
        </button>
        <p>Parent re-renders:{count}</p>
      </div>
    </>
  );
};

const ExpesnsiveComp = () => {
  const sum = () => {
    console.log("calculating sum......");

    let i = 0;
    for (i = 0; i <= 100000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);

  return <p>{total}</p>;
};
