import { useState } from "react";
import "./ToggleSwitch.css";
export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <div
        className="toggle-switch"
        style={{ backgroundColor: isOn ? "#4caf50" : "red" }}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  );
}
