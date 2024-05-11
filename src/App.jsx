import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <Counter
        count={count}
        setCount={setCount}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </>
  );
}

export default App;
