import { useState } from "react";
import { articlePost } from "./API";
import HomeLink from "./HomeLink";
import { Navigate } from "react-router-dom";

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
    else setError(res.rsp.error);
  }

  if (postCreated) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="body" name="text" placeholder="Body" />
        <button type="submit">Post!</button>
      </form>
      <ul>{errors}</ul>
      <HomeLink></HomeLink>
    </>
  );
}
