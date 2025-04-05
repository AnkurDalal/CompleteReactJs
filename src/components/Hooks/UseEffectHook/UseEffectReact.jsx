import { useEffect, useState } from "react";
import "./UseEffect.css";
export function UseEffectInReact() {
  const [count, setCount] = useState(0);
  const[Fname,setFname]=useState();

  const handlerOnChange=(event)=>{
      setFname(event.target.value)
      console.log(event.target.value)
  }

  const handlerClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("count value: ", count);
    document.title=`Count=${count}`
  }, [count]);
  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={handlerClick}>Increment</button>
      <h2>Name:{Fname}</h2>
      <input type="text" name='Fname' value={Fname} onChange={handlerOnChange}/>
    </>
  );
}
