import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import BlogLink from "./BlogLink";
import { grabAPI, logout } from "./API";
import { Link } from "react-router-dom";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await grabAPI("posts");
      setPosts(data.allArticles);
    };
    fetchData();
  }, []);

  return posts ? (
    <>
      <Header></Header>
      <div>
        {posts.map((info) => {
          return <BlogLink key={info._id} info={info}></BlogLink>;
        })}
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
