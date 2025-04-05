import React, { useState } from "react";

export const InputBoxValue = () => {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);
  const handlerOnChange = (event) => {
    setData(event.target.value);
  };

  return (
    <>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={handlerOnChange} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </>
  );
};
