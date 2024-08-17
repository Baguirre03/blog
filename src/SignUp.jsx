import { useState } from "react";
import { loginPost, postAPIsignup } from "./API";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "./Input";
import HomeLink from "./HomeLink";
import Header from "./Header";
import SignUpButton from "./SignUpButton";

export default function SignUp() {
  const [errors, setErrors] = useState([]);
  const [userCreated, setUserCreated] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    const res = await postAPIsignup(data);
    if (res.created) {
      setErrors([]);
      const res = await loginPost(data.username, data.password);
      if (res.rsp.loggedin) {
        setUserCreated(true);
      }
    } else {
      setErrors(res.errors);
    }
  }

  return userCreated ? (
    <div>
      <Navigate to="/"></Navigate>
    </div>
  ) : (
    <div className="flex flex-col w-full h-full">
      <Header></Header>
      <div className="text-center first:flex h-full bg-white dark:bg-gray-900 justify-center align-center items-center">
        <div className="gap-2 mx-auto sign-up-form flex flex-col items-center border-solid border-2 border-black dark:border-gray-700 justify-center h-min w-6/12 bg-white dark:bg-gray-800 p-6 rounded shadow-md dark:shadow-[rgba(255,_255,_255,_0.2)_0px_30px_90px]">
          <h1 className="text-gray-900 dark:text-white">Sign Up!</h1>
          <form onSubmit={handleSubmit}>
            <Input
              inputName="username"
              type="text"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <Input
              difName="Short User Description"
              inputName="description"
              type="text"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <Input
              inputName="password"
              type="text"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <Input
              difName="Confirm Password"
              inputName="confirm_password"
              type="text"
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            <SignUpButton login={false} />
          </form>
          <ul className="text-red-500 dark:text-red-400">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
