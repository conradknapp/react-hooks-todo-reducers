import React from "react";
import Store from "../context";

const TodoForm = () => {
  const { dispatch } = React.useContext(Store);
  const [todo, setTodo] = React.useState("");

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("added", todo);
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={todo} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
