import { useState } from "react";
import { loginPost, postAPIsignup } from "./API";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
    <div>
      <h1>Sign up today!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input
          type="password"
          name="confirm_password"
          placeholder="confirm password"
        />
        <button type="submit">Sign up!</button>
      </form>
      <ul>
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
    </div>
  );
}
