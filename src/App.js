import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

// import FontIcons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(
      <div className="if-counter">
        <Counter counter={counter} setCounter={setCounter} />
      </div>
    );
  };

  return (
    <div className="App">
      {/* header */}
      <header>
        {/* <FontAwesomeIcon icon="stopwatch" /> */}
        <h2>React Counter v2</h2>
      </header>
      <div className="add-counter">
        <button onClick={add}>Add Counter</button>
      </div>
      {/* counter */}
      <div className="if-counter">
        <Counter counter={counter} setCounter={setCounter} />
      </div>

      {/* footer */}
      <footer>
        <p>Made with React at Le Reacteur by Rico</p>
      </footer>
    </div>
  );
}

export default App;
