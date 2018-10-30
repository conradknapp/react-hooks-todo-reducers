import React from "react";
import ReactDOM from "react-dom";

import Store from "./context";
import reducer from "./reducer";

import { persistContext, persistReducer } from "./persist";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  // create a global store to store the state
  const globalStore = persistContext(React.useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = persistReducer(
    React.useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </Store.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
