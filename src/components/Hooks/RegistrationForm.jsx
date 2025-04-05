import { useState } from "react";

export function RegistrationForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlerInput = (event) => {
 
    console.log(event.target.value)

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    const formData={
        name,
        email,
        password
    }
    console.log(formData)
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
          name="name"
          style={{ border: "2px solid black" }}
          value={name}
          onChange={handlerInput}
        />
        <label htmlFor="email">
          <b>Enter Your E-mail:</b>
        </label>
        <input
          type="email"
          id="name"
          name="email"
          style={{ border: "2px solid black" }}
          value={email}
          onChange={handlerInput}
        />
        <label htmlFor="password">
          <b>Enter Your Password:</b>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          style={{ border: "2px solid black" }}
          value={password}
          onChange={handlerInput}
        />
        <button type="submit">Submit form🚀</button>
      </form>
    </>
  );
}
