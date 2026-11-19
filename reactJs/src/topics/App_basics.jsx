function App() {
  const name = "Sunitha";
  const age = 20;
  function handleClick() {
    alert("Button clicked");
  }
  return (
    <>
      <h1>Hello, World!</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Click Me</button>
      Student Component:
      <Student name="Jane Doe" age={21} />
      <Student name="Sunitha Rao" age={32} />
    </>
  );
}

function Student(props) {
  const studentName = "John Doe";
  const studentAge = 22;
  return (
    <>
      <h2>Student Information</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </>
  );
}

export default App;
