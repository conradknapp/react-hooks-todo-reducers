import React from "react";
import Store from "../context";

const TodoList = () => {
  const { state, dispatch } = React.useContext(Store);

  let header =
    state.todos.length > 0 ? (
      <h1>{state.todos.length} Todos</h1>
    ) : (
      <h1>No more todos</h1>
    );

  return (
    <div>
      {header}
      <ul>
        {state.todos.map((todo, i) => (
          <li key={todo}>
            {todo}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => dispatch({ type: "DONE", payload: todo })}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
