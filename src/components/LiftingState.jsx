import { useState } from "react";

export function LiftingState() {
  const [inputValue, SetInputValue] = useState("");
  return (
    <>
      <InputComponent input={inputValue} setInput={SetInputValue}/>
      <DisplayInput input={inputValue} setInput={SetInputValue}/>
    </>
  );
}

const InputComponent = ({input,setInput}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

const DisplayInput = ({input,setInput}) => {
  return <>
    <h1>The entered value is:{input}</h1>
  </>;
};
