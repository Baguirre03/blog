import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Blog from "./Blog";
import SignUp from "./SignUp";
import Login from "./Login";
import CreatePost from "./CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "posts/:id",
    element: <Blog></Blog>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "post",
    element: <CreatePost></CreatePost>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
