import { useState } from "react";
import { loginPost } from "./API";
import { Navigate } from "react-router-dom";
import HomeLink from "./HomeLink";
import Input from "./Input";
import SignUpButton from "./SignUpButton";
import Header from "./Header";

export default function Login() {
  const [error, setError] = useState("");
  const [user, setUser] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    const result = await loginPost(data.username, data.password);
    if (result.rsp.loggedin) {
      // Grab TOKEN and set to BEARER in local storage for correct use
      setError("");
      setUser(true);
    } else {
      setError(result.rsp.errors);
    }
  }

  return user ? (
    <Navigate to="/"></Navigate>
  ) : (
    <div className="flex flex-col w-full h-full">
      <Header></Header>
      <div className="text-center flex-col h-full bg-white dark:bg-gray-900 flex justify-center">
        <div className="gap-2 mx-auto sign-up-form flex flex-col items-center border-solid border-2 border-black dark:border-gray-700 justify-center w-6/12 bg-white dark:bg-gray-800 p-6 rounded shadow-lg dark:shadow-[rgba(255,255,255,0.2)_0px_30px_90px]">
          <h1 className="text-gray-900 dark:text-white">Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              inputName="username"
              type="text"
              placeholder="username"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            ></Input>
            <Input
              inputName="password"
              type="password"
              placeholder="password"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            ></Input>
            <SignUpButton login={true} />
          </form>
          <div className="text-red-500 dark:text-red-400">{error}</div>
        </div>
      </div>
    </div>
  );
}
