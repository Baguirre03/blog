import { useParams } from "react-router-dom";
import { commentPost, grabAPI } from "./API";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import HomeLink from "./HomeLink";
import "./index.css"; // Import your styles
import CommentForm from "./CommentForm";
import Header from "./Header";
import { format, parseISO } from "date-fns";

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
      setPostDate(format(post.date, "MM-dd-yyyy"));
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
  console.log(post);
  return !post ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Header></Header>'{" "}
      <div
        className="post max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6"
        key={post._id}
      >
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div class="flex items-center  justify-center mb-6">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="https://via.placeholder.com/40"
            alt="User Avatar"
          />
          <div>
            <p class="text-xl font-semibold"> {post.user.username}</p>
            <p class="text-gray-600">{postDate}</p>
          </div>
        </div>

        <div className="post-content prose max-w-none">{post.text}</div>
        {user != null && (
          <CommentForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            commentState={commentState}
          ></CommentForm>
        )}
        <li className="post-comments flex flex-col items-center">
          {comments.map((comment) => {
            return (
              <Comment key={comment._id} data={comment}>
                {}
              </Comment>
            );
          })}
        </li>
      </div>
    </>
  );
}

export default Blog;
