import { useState } from "react";
import { loginPost } from "./API";
import { Navigate } from "react-router-dom";

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
    const res = await loginPost(data.username, data.password);
    if (res.rsp.loggedin) {
      // Grab TOKEN and set to BEARER in local storage for correct use
      setError("");
      setUser(true);
    } else {
      setError(res.errors);
    }
  }

  return user ? (
    <Navigate to="/"></Navigate>
  ) : (
    <div>
      <h1>Login!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Sign up!</button>
      </form>
      <div>{error}</div>
    </div>
  );
}
