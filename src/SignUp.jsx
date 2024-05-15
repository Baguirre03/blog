import { useState } from "react";
import { postAPIsignup } from "./API";

export default function SignUp() {
  const [errors, setErrors] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    const res = await postAPIsignup(data);
    console.log(res);
    if (res.created) {
      //LOGIN
      console.log("User Created!");
      setErrors([]);
    } else {
      setErrors(res.errors);
    }
  }

  return (
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
