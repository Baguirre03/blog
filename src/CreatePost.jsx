import { useState } from "react";
import { articlePost } from "./API";
import HomeLink from "./HomeLink";
import { Navigate } from "react-router-dom";
import Input from "./Input";

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
    <div className="flex-col h-full bg-white flex justify-center">
      <div className="gap-2 mx-auto sign-up-form flex flex-col items-center border-solid border-2 border-black justify-center w-6/12 bg-white p-6  rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <form onSubmit={handleSubmit}>
          <Input type="text" inputName="title" placeholder="Title"></Input>
          <Input type="textarea" inputName="text" placeholder="Body"></Input>
          <button type="submit">Post!</button>
        </form>
        <ul>{errors}</ul>
        <HomeLink></HomeLink>
      </div>
    </div>
  );
}
