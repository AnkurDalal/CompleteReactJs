import React from "react";

export const ArrayListHandle = () => {
  const students = [
    { name: "Ankur", age: 21, city: "Rohtak" },
    { name: "Mitanshu", age: 8, city: "Ch.Dadri" },
    { name: "Sanyam", age: 18, city: "Delhi" },
  ];
  return (
    <>
      {students.map((item, i) => (
        <ol key={i}>
          <>
            <li>Name:{item.name}</li>
            <li>Age:{item.age}</li>
            <li>city:{item.city}</li>
          </>
        </ol>
      ))}
    </>
  );
};
