import React from 'react';
import AddToDo from "./AddToDo";
import { useTodosStore } from "./states/todos";
import { shallow } from "zustand/shallow";
import "./style.css";

function App() {
  const { removeToDo, todos, toggleToDo } = useTodosStore(
    state => ({
      todos: state.todos,
      removeToDo: state.removeToDo,
      toggleToDo: state.toggleToDo
    }),
    shallow
  );

  return (
    <div className="container">
      <AddToDo />

      {todos.length === 0 && (
        <div className="toDoCard">Hiç görev eklenmemiş</div>
      )}
      {todos.map((todo, key) => (
        <div key={key} className={`todoItem ${todo.completed ? 'completed' : ''}`}>
          <span className="todoTitle">{todo.title}</span>
          <div className="todoActions">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleToDo(key)}
              />
              {todo.completed ? "Tamamlandı" : "Bekliyor"}
            </label>
            <button onClick={() => removeToDo(key)}>Sil</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
