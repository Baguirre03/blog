import { useEffect, useState } from "react";
import "./App.css";
import BlogLink from "./BlogLink";
import { grabAPI, logout } from "./API";
import { Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("Username"));

  console.log(user, "user");
  useEffect(() => {
    const fetchData = async () => {
      const data = await grabAPI("posts");
      setPosts(data.allArticles);
    };
    fetchData();
  }, []);

  return posts ? (
    <div>
      <h1>{user != null ? user : ""}</h1>
      {posts.map((info) => {
        return <BlogLink key={info._id} info={info}></BlogLink>;
      })}
      <div>
        {user == null && (
          <>
            <h1>
              Sign up <Link to="/signup">HERE</Link> to make posts!
            </h1>
            <h1>
              Or Login <Link to="/login">here!</Link>!
            </h1>
          </>
        )}
      </div>
      <h1>
        {user != null ? (
          <button
            onClick={() => {
              logout();
              setUser(null);
            }}
          >
            Logout
          </button>
        ) : (
          " "
        )}
      </h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
