import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment } from "./Redux/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(Increment(5))}>+</button>
      <button onClick={() => dispatch(Decrement(13))}>-</button>

      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
