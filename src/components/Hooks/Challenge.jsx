import { useState } from "react";
import "./Challenge.css";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleInc = () => {
    setCount(count + step);
  };

  const handleDec = () => {
    setCount(count - step);
  };

  const handleRes = () => {
    setCount(0);
  };
  return (
    <div className="container state-container">
      <h1>useState Challenge</h1>

      <p>
        Count: <span> {count} </span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="grid-three-cols">
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={handleRes}>Reset</button>
      </div>
    </div>
  );
};
