import ToDoItem from "../ToDoItem";

interface IProps {
  todos: any[];
  markCompleteFn: (id: string) => Promise<void>;
  destroyFn: (id: string) => Promise<void>;
}

export default function ToDoContainer({
  todos,
  markCompleteFn,
  destroyFn,
}: IProps) {
  return (
    <div className="mt-4 bg-white max-w-xl p-4 mx-auto">
      <ul role="list" className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <ToDoItem
            key={todo._id}
            todo={todo}
            markCompleteFn={markCompleteFn}
            destroyFn={destroyFn}
          />
        ))}
      </ul>
    </div>
  );
}
