import { useState } from "react";
import { loginPost, postAPIsignup } from "./API";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "./Input";
import HomeLink from "./HomeLink";
import Header from "./Header";

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
    <div className="flex-col h-full bg-white flex justify-center">
      <div className="gap-2 mx-auto sign-up-form flex flex-col items-center border-solid border-2 border-black justify-center w-6/12 bg-white p-6  rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        {/* <h1 className="items-center">Sign up today!</h1> */}
        <h1>Sign Up!</h1>
        <form onSubmit={handleSubmit}>
          <Input inputName="username" type="text"></Input>
          <Input
            difName="Short User Description"
            inputName="description"
            type="text"
          ></Input>
          <Input inputName="password" type="text"></Input>
          <Input
            difName="Confirm Password"
            inputName="confirm_password"
            type="text"
          ></Input>
          <button className="button-submit" type="submit">
            Sign up!
          </button>
        </form>
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
        <HomeLink></HomeLink>
      </div>
    </div>
  );
}
