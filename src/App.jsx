import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import BlogLink from "./BlogLink";
import { grabAPI, logout } from "./API";
import { Link } from "react-router-dom";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState(false);
  localStorage.setItem("dark", "");

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
      <div className="max-w-full dark:bg-gray-800 container flex justify-center pb-10 pt-10">
        <div className="dark:bg-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((info) => {
            return <BlogLink key={info._id} info={info}></BlogLink>;
          })}
        </div>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
