export function PropsDrilling() {
  return (
    <>
      <h1>Hello this is parent Component A</h1>
      <ChildComponent data={"React JS"} />
    </>
  );
}

const ChildComponent = (props) => {
  return (
    <>
      <h1>Hello this is child Component B</h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};
const GrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello this is GrandChildComponent C</h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};
const GrandGrandChildComponent = (props) => {
  return <h1>Hello I love {props.data}</h1>;
};
