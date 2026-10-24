import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Wrong way: all three lines use the same old count
  function addThreeWrong() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  // Right way: each update uses the latest value
  function addThreeRight() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  // State is a snapshot: this logs the old value
  function showSnapshot() {
    setCount(count + 1);
    console.log("Logged value:", count);
  }

  return (
    <div>
      <h1>State demo</h1>
      <p>Count: {count}</p>
      <button onClick={addThreeWrong}>+3 (wrong way, adds only 1)</button>
      <button onClick={addThreeRight}>+3 (updater form, adds 3)</button>
      <button onClick={showSnapshot}>+1 and log (see console)</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}