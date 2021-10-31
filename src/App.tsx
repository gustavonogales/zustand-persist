import React, { useEffect } from "react";
import { useTodos } from "./stores/todos";
import shallow from "zustand/shallow";

function App() {
  const { todos, onToggle, lastDraft, fetch } = useTodos(
    (state) => ({
      todos: state.todos,
      onToggle: state.onToggle,
      setTodos: state.setTodos,
      lastDraft: state.lastDraft,
      fetch: state.fetch,
    }),
    shallow
  );

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main>
      <h1>Todos</h1>
      <span>{lastDraft}</span>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "inherit",
                marginRight: "10px",
              }}
            >
              {todo.label}
            </span>
            <button onClick={() => onToggle(todo.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
