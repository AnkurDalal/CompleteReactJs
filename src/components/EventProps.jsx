export function EventProps() {
  const handleClick = () => {
    alert("Click me Button called !");
  };
  const handleMouseEnter = () => {
    alert("Mouse Hover Button called !");
  };
  return (
    <>
      <WelcomeUser onClick={handleClick} onMouseEnter={handleMouseEnter} />
    </>
  );
}

function WelcomeUser(props) {
  const Greeting = (name) => {
    alert(`Hey good morning ${name}`);
  };
  return (
    <>
      <button onClick={props.onClick}>Click ME !</button>
      <button onMouseEnter={props.onMouseEnter}>Mouse Enter !</button>
      <button onClick={() => Greeting("Ankur")}>Greeting</button>
    </>
  );
}
