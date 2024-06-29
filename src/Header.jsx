import { Link } from "react-router-dom";
import HomeLink from "./HomeLink";
import { logout } from "./API";
import { useState } from "react";

export default function Header() {
  const [user, setUser] = useState(localStorage.getItem("Username"));

  return (
    <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex align-middle justify-between p-5 bg-gray-300">
      <div className="blog-header flex items-center justify-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        <Link to="/">Blog-Api</Link>
      </div>
      <div className="nav-options flex gap-4">
        <div>
          {user != null && (
            <button>
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
            >
              Logout
            </button>
          )}
        </div>
        <div className="nav-options flex gap-4">
          {user == null && (
            <>
              <button>
                <Link
                  to="/signup"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Sign-up
                </Link>
              </button>
              <button>
                <Link
                  to="/login"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Login
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
