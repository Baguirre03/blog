import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Blog from "./Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "posts/:id",
    element: <Blog></Blog>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
