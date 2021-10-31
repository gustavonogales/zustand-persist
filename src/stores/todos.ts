import create from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import produce from "immer";
import { Todo } from "../types/Todo";
import { get, set } from "../services/storage";
import { getTodos } from "../services/todos";

type TodoStoreData = {
  todos: Todo[];
  onToggle: (id: number) => void;
  setTodos: (todos: Todo[]) => void;
  lastDraft: string;
  fetch: () => Promise<void>;
};

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return get(name);
  },
  setItem: async (name: string, data: any): Promise<void> => {
    set(name, data);
  },
};

export const useTodos = create<TodoStoreData>(
  persist(
    (set, get) => ({
      onToggle: (id: number) =>
        set((state) =>
          produce(state, (draftTodos) => {
            const todo = draftTodos.todos.find((todo) => todo.id === id);
            if (todo) todo.completed = !todo.completed;
            draftTodos.lastDraft = new Date().toISOString();
          })
        ),
      todos: [],
      lastDraft: "",
      fetch: async () => {
        const response = await getTodos();
        set((state) => ({ todos: response.data }));
      },
      setTodos: (todos: Todo[]) =>
        set((state) => ({
          todos,
          lastDraft: new Date().toISOString(),
        })),
    }),
    {
      name: "todos",
      getStorage: () => storage,
    }
  )
);
