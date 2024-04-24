import { useEffect, useState } from 'react';
import './App.css'

async function grabAPI(backslash) {
  try {
    const response = await fetch(`https://blog-api-top.fly.dev/${backslash}`, {mode: 'cors', method: 'GET'})
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

function App() {
  const [posts, setPosts] = useState(null)
  
  useEffect(() => {
    console.log('RUNNING')
    const fetchData = async () => {
      const data = await grabAPI('posts');
      setPosts(data.allArticles)
    };
    fetchData();
  }, []);

  console.log(posts)
  return (
    posts != null ? posts.map((info) => {
      return <h1 key={info._id}>{info.user.username} wrote: {info.text}</h1>
    }) : <h1>Loading</h1>
  )
}

export default App
