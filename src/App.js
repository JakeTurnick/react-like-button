import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addLikes = () => setCount(count + 1);
  const displayLikes = () => {
    if (count == 1) {
      return `${count} like`;
    } else {
      return `${count} likes`;
    }
  };
  const resetLikes = () => setCount(0);

  return (
    <div className="App">
      <button className="addLike" onClick={addLikes}>
        {displayLikes()}
      </button>
      <button className="reset" onClick={resetLikes}>
        Reset likes!
      </button>
    </div>
  );
}

export default App;
