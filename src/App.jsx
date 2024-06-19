import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import BlogLink from "./BlogLink";
import { grabAPI, logout } from "./API";
import { Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("Username"));

  useEffect(() => {
    const fetchData = async () => {
      const data = await grabAPI("posts");
      setPosts(data.allArticles);
    };
    fetchData();
  }, []);

  return posts ? (
    <div>
      <h1>Welcome back {user != null ? user : ""}</h1>
      {posts.map((info) => {
        return <BlogLink key={info._id} info={info}></BlogLink>;
      })}
      <div>
        {user == null && (
          <>
            <div>
              Sign up{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                HERE
              </Link>{" "}
              to make posts!
            </div>
            <div>
              Or Login{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                here!
              </Link>
              !
            </div>
          </>
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
      <div>
        {user != null && (
          <button>
            <Link to="/post">Create a post here!</Link>
          </button>
        )}
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
