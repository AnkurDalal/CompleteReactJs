import { useState } from "react";

export function Practise() {
  const [user, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  const userCount = user.length;
  const average = user.reduce((acc, curr) => {
    return (acc + curr.age) / userCount;
  }, 0);
  return (
    <>
      <h1>User Lists:</h1>
      <ol>
        <li>
          {user.map((i) => {
            return (
              <>
                <h3>{i.name}</h3>
                <h5>{i.age}</h5>
              </>
            );
          })}
          <h6>Total count:{userCount}</h6>
          <h6>Average of ages:{average}</h6>
        </li>
      </ol>
    </>
  );
}
