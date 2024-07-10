import PouchDB from "pouchdb";
import { ulid } from "ulid";

import { ToDo } from "../models/ToDo";

const database = new PouchDB("my-app");
const remoteDB = new PouchDB("http://localhost:5984/my-app");

database.sync(remoteDB, { live: true, retry: true });

export const getAll = async (): Promise<Array<ToDo>> => {
  return (
    await database.allDocs({ include_docs: true, descending: true })
  ).rows.map((item) => item.doc) as ToDo[];
};

export const store = async (name: string) => {
  await database.put({
    _id: ulid(),
    name,
    completed: false,
  });
};

export const markCompleted = async (id: string) => {
  const doc = await database.get(id);

  await database.put({
    ...doc,
    completed: true,
  });
};

export const destroy = async (id: string) => {
  const doc = await database.get(id);
  await database.remove(doc);
};
