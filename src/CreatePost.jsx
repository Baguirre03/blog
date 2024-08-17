import { useState } from "react";
import { articlePost } from "./API";
import HomeLink from "./HomeLink";
import { Navigate } from "react-router-dom";
import Input from "./Input";
import Header from "./Header";

export default function CreatePost() {
  const [postCreated, setPostCreated] = useState(false);
  const [errors, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    const res = await articlePost(data);
    if (res.rsp.created) setPostCreated(true);
    else setError("Missing value");
  }

  if (postCreated) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Header></Header>
      <div className="flex-col h-full bg-white dark:bg-gray-900 flex justify-center">
        <div className="gap-2 mx-auto sign-up-form flex flex-col items-center border-solid border-2 border-black dark:border-gray-700 justify-center w-6/12 bg-white dark:bg-gray-800 p-6 rounded shadow-md dark:shadow-[rgba(255,_255,_255,_0.2)_0px_30px_90px]">
          <form onSubmit={handleSubmit} className="w-full">
            <Input
              type="text"
              inputName="title"
              placeholder="Title"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            <Input
              type="textarea"
              inputName="text"
              placeholder="Body"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white dark:text-gray-100 hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            >
              Post!
            </button>
          </form>
          <ul className="mt-4 text-red-500 dark:text-red-400">{errors}</ul>
        </div>
      </div>
    </div>
  );
}
