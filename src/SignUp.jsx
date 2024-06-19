import { useState } from "react";
import { loginPost, postAPIsignup } from "./API";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "./Input";
import HomeLink from "./HomeLink";

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
    <div className="max-w-sm mx-auto sign-up-form">
      {/* <h1 className="items-center">Sign up today!</h1> */}
      <form onSubmit={handleSubmit}>
        <Input inputName="username" type="text"></Input>
        <Input inputName="password" type="text"></Input>
        <Input
          difName="Confirm Password"
          inputName="confirm_password"
          type="text"
        ></Input>
        <button type="submit">Sign up!</button>
      </form>
      <ul>
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
      <HomeLink></HomeLink>
    </div>
  );
}
