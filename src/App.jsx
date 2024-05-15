import { useEffect, useState } from "react";
import "./App.css";
import BlogLink from "./BlogLink";
import { grabAPI } from "./API";
import { Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await grabAPI("posts");
      setPosts(data.allArticles);
    };
    fetchData();
  }, []);

  return posts != null ? (
    <>
      {posts.map((info) => {
        return <BlogLink key={info._id} info={info}></BlogLink>;
      })}
      <h1>
        Sign up <Link to="/signup">HERE</Link> to make posts!
      </h1>
      <h1>
        Or Login <Link to="/login">here!</Link>!
      </h1>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
