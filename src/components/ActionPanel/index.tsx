import { useState } from "react";

interface IProps {
  storeFn: (name: string) => Promise<void>;
}

export default function ActionPanel({ storeFn }: IProps) {
  const [name, setName] = useState<string>("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      return;
    }

    await storeFn(name);

    setName("");
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow sm:rounded-lg mt-4 max-w-md mx-auto">
        <form className="px-4 py-5 sm:p-6" onSubmit={submit}>
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Create Task
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Task Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Add To Do
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
