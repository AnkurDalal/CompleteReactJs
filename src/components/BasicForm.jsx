import React, { useState } from "react";

export const BasicForm = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [tnc, setTnc] = useState("");

  const getFormData = (e) => {
    console.log(name, city, tnc);
    e.preventDefault();
  };
  return (
    <>
      <h1>Handle Form In React</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter your Name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setCity(e.target.value)}>
          <option>select your State</option>
          <option>HARYANA</option>
          <option>BIHAR</option>
          <option>PUNJAB</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and Conditions</span>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
