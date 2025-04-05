import { use, useState } from "react";
import "./ContactForm.css";
export function ContactForm() {
  const [user, setUser] = useState({
    Fname: "",
    email: "",
    message: "",
  });
  const handlerInput = (event) => {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form className="contact-form" onSubmit={handlerSubmit}>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="Fname"
          required
          autoComplete="off"
          value={user.Fname}
          onChange={handlerInput}
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="off"
          value={user.email}
          onChange={handlerInput}
        />

        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          autoComplete="off"
          value={user.message}
          onChange={handlerInput}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
}
