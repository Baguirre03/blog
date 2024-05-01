import { useEffect, useState } from 'react';
import './App.css'
import BlogLink from './BlogLink';
import grabAPI from './grabAPI';

function App() {
  const [posts, setPosts] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await grabAPI('posts');
      setPosts(data.allArticles)
    };
    fetchData();
  }, []);

  return (
    posts != null ? posts.map((info) => {
      return <BlogLink key={info._id} info={info}></BlogLink>
    }) : <h1>Loading...</h1>
  )
}

export default App
