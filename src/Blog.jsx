import { useParams } from "react-router-dom";
import grabAPI from "./grabAPI";
import { useEffect, useState } from "react";
import Comment from "./Comment";

function Blog() {
    const [post, setPosts] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
          const data = await grabAPI(`posts/${id}`);
          setPosts(data)
        };
        fetchData();
      }, []);

    return (
      !post ? <h1>Loading...</h1> : 
      <div className="post" key={post._id}>
        <h1 className="post-title">{post.article.title}</h1>
        <h1 className="post-user">Made by {post.article.user.username}</h1>
        <div className="post-content">
          {post.article.text}
        </div>
        <h3>Create an account to make posts!</h3>
        <li className="post-comments">
          {post.allArticleComments.map((comment) => {
            return <Comment key={comment._id} data={comment}></Comment>
          })}
        </li>
      </div>
    )
}

export default Blog;