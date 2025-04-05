import React, { useState } from "react";

export const HideAndShowElement = () => {
  const [status, setStatus] = useState(true);
  return (
    <>
      {status ? <h1>Hello Ankur</h1> : "null"}
      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
    </>
  );
};
