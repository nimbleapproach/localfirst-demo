import { useCallback, useEffect, useState } from "react";

import { destroy, getAll, markCompleted, store } from "./actions";
import Navbar from "./components/Navbar";
import ActionPanel from "./components/ActionPanel";
import ToDoContainer from "./components/ToDoContainer";
import { ToDo } from "./models/ToDo";

export default function App() {
  const [todos, setTodos] = useState<Array<ToDo>>([]);

  const getAllTodos = useCallback(async () => {
    setTodos(await getAll());
  }, []);

  const storeToDo = useCallback(async (name: string) => {
    await store(name);
    getAllTodos();
  }, []);

  const markToDoCompleted = useCallback(async (id: string) => {
    await markCompleted(id);
    getAllTodos();
  }, []);

  const destroyToDo = useCallback(async (id: string) => {
    await destroy(id);
    getAllTodos();
  }, []);

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen w-full pb-10">
      <Navbar />
      <ActionPanel storeFn={storeToDo} />
      {todos.length > 0 ? (
        <ToDoContainer
          todos={todos}
          markCompleteFn={markToDoCompleted}
          destroyFn={destroyToDo}
        />
      ) : (
        <p className="text-center">No items to display</p>
      )}
    </div>
  );
}
