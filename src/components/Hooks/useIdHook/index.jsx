import { useId } from "react";

export const UseId = () => {
    const id=useId()
  return (
    <>
      <div>
        <label htmlFor={id+"userId"}>Enter your Name:</label>
        <input type="text" id={id+"userId"} name="name" />
      </div>
      <div>
        <label htmlFor={id+"emailId"}>Enter your Email:</label>
        <input type="email" id={id+"emailId"} name="email" />
      </div>
      <div>
        <label htmlFor={id+"passwordId"}>Enter your Password:</label>
        <input type="password" id={id+"passwordId"} name="password" />
      </div>
      <button>Submit</button>
    </>
  );
};
