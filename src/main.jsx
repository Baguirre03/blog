import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Blog from "./Blog";
import SignUp from "./SignUp";
import Login from "./Login";

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
    element: <SignUp></SignUp>
  }, 
  {
    path: "login",
    element: <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
