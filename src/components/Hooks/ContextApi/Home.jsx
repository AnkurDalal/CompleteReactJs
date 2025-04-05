import { useContext } from "react";
import { BioContext } from "./ContextApi";
export const Home = () => {
  const { myName, myAge, myEducation } = useContext(BioContext);
  return (
    <h1>
      Hello my name is {myName}. I am {myAge} years old and my education
      qualification is {myEducation}
    </h1>
  );
};
