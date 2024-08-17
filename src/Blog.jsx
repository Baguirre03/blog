import { useParams } from "react-router-dom";
import { commentPost, grabAPI } from "./API";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import "./index.css"; // Import your styles
import CommentForm from "./CommentForm";
import Header from "./Header";
import { format } from "date-fns";

function Blog() {
  const [post, setPosts] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentState, setCommentState] = useState("");
  const [user, setUser] = useState(localStorage.getItem("Username"));
  const [postDate, setPostDate] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await grabAPI(`posts/${id}`);
      setPosts(data.article);
      setComments(data.allArticleComments);
      setPostDate(format(data.article.date, "MM-dd-yyyy"));
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
    <>
      <Header></Header>{" "}
      <div
        className="post max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg mt-5 shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 mb-8"
        key={post._id}
      >
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <div className="flex items-center justify-center mb-6">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://via.placeholder.com/40"
            alt="User Avatar"
          />
          <div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {post.user.username}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{postDate}</p>
          </div>
        </div>

        <div className="whitespace-pre-wrap prose post-content max-w-none text-gray-900 dark:text-gray-100">
          {post.text}
        </div>
      </div>
      <div className="comment-section pt-4 flex flex-col w-full justify-center items-center border-2 border-gray-200 dark:border-gray-700">
        {user != null && (
          <CommentForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            commentState={commentState}
          />
        )}
        <li className="post-comments flex w-full justify-center mb-10 flex-col items-center">
          {comments.map((comment) => (
            <Comment key={comment._id} data={comment} />
          ))}
        </li>
      </div>
    </>
  );
}

export default Blog;
