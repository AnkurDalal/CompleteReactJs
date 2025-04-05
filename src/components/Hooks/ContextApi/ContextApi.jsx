import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Ankur Dalal";
  const myAge = 21;
  const myEducation = "Bachelors of Technology.";
  return (
    <BioContext.Provider value={{ myName, myAge, myEducation }}>
      {children}
    </BioContext.Provider>
  );
};
