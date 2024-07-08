import { useTodosStore } from "./states/todos";
import { shallow } from "zustand/shallow";

const AddToDo = () => {
  const { addToDo, title, completed, setTitle} = useTodosStore(
    (state) => ({
      addToDo: state.addToDo,
      title: state.title,
      completed: state.completed,
      setTitle: state.setTitle,
      resetToDoForm: state.resetToDoForm,
    }),
    shallow
  );

  const submitHandler = (e) => {
    e.preventDefault();
    addToDo({
      title,
      completed,
    });
    resetToDoForm();
  };

  return (
    <form onSubmit={submitHandler} className="addTodoForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo"
      />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddToDo;
