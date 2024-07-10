interface IProps {
  todo: any;
  markCompleteFn: (id: string) => Promise<void>;
  destroyFn: (id: string) => Promise<void>;
}

export default function ToDoItem({ todo, markCompleteFn, destroyFn }: IProps) {
  return (
    <li className="flex items-center justify-between gap-x-6 py-5">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p
            className={`text-sm font-semibold leading-6 text-gray-900 ${todo.completed ? "line-through text-gray-400" : ""}`}
          >
            {todo.name}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"></div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <button
          type="button"
          onClick={() => markCompleteFn(todo._id)}
          className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
        >
          Mark completed
        </button>
        <button
          type="button"
          onClick={() => destroyFn(todo._id)}
          className="hidden rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-700 hover:bg-red-700 sm:block"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
