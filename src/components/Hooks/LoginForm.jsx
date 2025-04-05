import { useState } from 'react';
import './LoginForm.css'
export function LoginForm() {
    const [user,setUser]=useState({
        firstName:"",
        password:""
    })

    const handlerInput=(event)=>{
      const {name,value}=event.target;

      setUser((prev)=>({...prev,[name]:value}))
    }
    const handlerSubmit=(e)=>{
          e.preventDefault()
          console.log(user)
    }
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
        <button type="submit">LOG IN🚀</button>
      </form>
    </>
  );
}
