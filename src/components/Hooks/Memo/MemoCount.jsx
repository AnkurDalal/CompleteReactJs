import { memo, useRef } from "react";

const Counts = ({ data }) => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <>
      <div>
        <p>Nothing Chage here but i have now rendered:</p>
        <span>{renderCount.current++} times</span>
        <p>
          my name is {data.name} I am {data.age} years old and i am from{" "}
          {data.city}
        </p>
      </div>
    </>
  );
};

export default memo(Counts);
