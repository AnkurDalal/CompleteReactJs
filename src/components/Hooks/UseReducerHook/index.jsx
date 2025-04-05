import { useReducer } from "react";

export const ReducerComp = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Inc":
        return { count: state.count + 2 };
      case "Dec":
        return { count: state.count - 2 };
      case "Res":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Dec" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Res" })}>Reset</button>
    </>
  );
};
