import { useRef } from "react";

export const UseReff = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handlerSubmit = (e) => {
    e.preventDefault();
    // const userNmae=(document.getElementById('username'))
    // const password=(document.getElementById('password'))
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input type="text" id="username" ref={username} />
        <br />
        <input type="password" id="password" ref={password} />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
