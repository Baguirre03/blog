import { useParams } from "react-router-dom";
import { commentPost, grabAPI } from "./API";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import HomeLink from "./HomeLink";
import "./index.css"; // Import your styles
import CommentForm from "./CommentForm";

function Blog() {
  const [post, setPosts] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentState, setCommentState] = useState("");
  const [user, setUser] = useState(localStorage.getItem("Username"));

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await grabAPI(`posts/${id}`);
      setPosts(data.article);
      setComments(data.allArticleComments);
    };
    fetchData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    const res = await commentPost(data, post._id);
    if (res.rsp.created) {
      setComments(res.allComments);
      setCommentState("");
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setCommentState(e.target.value);
  }

  return !post ? (
    <h1>Loading...</h1>
  ) : (
    <div className="post" key={post._id}>
      <h1 className="text-3xl font-bold underline">{post.title}</h1>
      <h1 className="post-user text-slate-500">Made by {post.user.username}</h1>
      <div className="post-content">{post.text}</div>
      <li className="post-comments">
        {comments.map((comment) => {
          return (
            <Comment key={comment._id} data={comment}>
              {}
            </Comment>
          );
        })}
      </li>
      {user != null && (
        <CommentForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          commentState={commentState}
        ></CommentForm>
      )}
      <HomeLink></HomeLink>
    </div>
  );
}

export default Blog;
