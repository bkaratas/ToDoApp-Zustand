import { create } from "zustand";

export const useTodosStore = create((set, get) => ({
  todos: [],
  title: "",
  completed: false,
  setTitle: (title) =>
    set(() => ({
      title,
    })),
  setCompleted: (completed) =>
    set(() => ({
      completed,
    })),
  addToDo: (item) => {
    set((state) => ({
      todos: [...state.todos, item],
    }));
    get().resetToDoForm();
  },
  removeToDo: (id) =>
    set((state) => ({
      todos: state.todos.filter((_, key) => id !== key),
    })),
  resetToDoForm: () =>
    set(() => ({
      title: "",
      completed: false,
    })),
  toggleToDo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo, key) =>
        key === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));
