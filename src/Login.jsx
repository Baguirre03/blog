import { useState } from "react";
import { loginPost } from "./API";
import { Navigate } from "react-router-dom";
import HomeLink from "./HomeLink";
import Input from "./Input";

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
    <div className="flex-col h-full bg-white flex justify-center">
      <div className="gap-2 mx-auto sign-up-form flex flex-col items-center border-solid border-2 border-black justify-center w-6/12 bg-white p-6  rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <h1>Login!</h1>
        <form onSubmit={handleSubmit}>
          <Input
            inputName="username"
            type="text"
            placeholder="username"
          ></Input>
          <Input
            inputName="password"
            type="text"
            placeholder="password"
          ></Input>
          <button type="submit">Sign up!</button>
        </form>
        <div>{error}</div>
        <HomeLink></HomeLink>
      </div>
    </div>
  );
}
