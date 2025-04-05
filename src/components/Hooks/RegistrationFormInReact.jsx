import { use, useState } from "react";
import './RegistrationFormInReact.css'
export function RegistrationFormInReact() {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handlerInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">
          <b>Enter Your Name:</b>
        </label>
        <input
          type="text"
          id="name"
          name="firstName"
          
          value={user.firstName}
          onChange={handlerInput}
        />
        <label htmlFor="email">
          <b>Enter Your E-mail:</b>
        </label>
        <input
          type="email"
          id="name"
          name="email"
          
          value={user.handlerInputemail}
          onChange={handlerInput}
        />
        <label htmlFor="password">
          <b>Enter Your Password:</b>
        </label>
        <input
          type="password"
          id="password"
          name="password"
        
          value={user.password}
          onChange={handlerInput}
        />
        <button type="submit">Submit form🚀</button>
      </form>
    </>
  );
}
