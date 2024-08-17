import { Link } from "react-router-dom";
import HomeLink from "./HomeLink";
import { logout } from "./API";
import { useState } from "react";
import ModeToggle from "./ModeToggle";

export default function Header() {
  const [user, setUser] = useState(localStorage.getItem("Username"));

  return (
    <nav className="dark:bg-gray-800 bg-white shadow-md border-b-2 border-gray-300 px-6 py-3 flex items-center justify-between">
      <div className="blog-header flex items-center justify-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        <Link to="/" className="font-serif">
          Awesome Blog
        </Link>
      </div>
      <div className="nav-options flex gap-4">
        <div>
          {user != null && (
            <button className="bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100 px-4 py-2 rounded shadow-sm hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-200 ease-in-out">
              <Link to="/post">Create a post</Link>
            </button>
          )}
        </div>
        <div>
          {user != null && (
            <button
              onClick={() => {
                logout();
                setUser(null);
              }}
              className="bg-red-500 text-white dark:bg-red-700 dark:text-gray-100 px-4 py-2 rounded shadow-sm hover:bg-red-600 dark:hover:bg-red-800 transition-colors duration-200 ease-in-out"
            >
              Logout
            </button>
          )}
        </div>
        <div className="nav-options flex gap-4">
          {user == null && (
            <>
              <Link
                to="/signup"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <button className="bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100 px-4 py-2 rounded shadow-sm hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-200 ease-in-out">
                  Sign Up
                </button>
              </Link>
              <Link
                to="/login"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <button className="bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100 px-4 py-2 rounded shadow-sm hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-200 ease-in-out">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
