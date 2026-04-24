function handleClick() {
  console.log("clicked");
}

const handleClick = function () {
  console.log("clicked");
};
const handleClick = () => {
  console.log("clicked");
};

<button onClick={() => console.log("clicked")} />


  const MyComponent = () => {
  return <h1>Hello</h1>;
};


function MyComponent() {
  return <h1>Hello</h1>;
}
const fetchData = async () => {
  const res = await fetch("/api");
};