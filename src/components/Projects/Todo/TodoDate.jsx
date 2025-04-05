import { useState } from "react";
export function TodoDate() {
  const [dateTime, setDateTime] = useState();
  setInterval(() => {
    const date = new Date();
    const formatDate = date.toLocaleDateString();
    const formatTime = date.toLocaleTimeString();

    setDateTime(`${formatDate} - ${formatTime}`);
  }, 1000);
  return (
    <>
      <h2 className="date-time">{dateTime}</h2>
    </>
  );
}
