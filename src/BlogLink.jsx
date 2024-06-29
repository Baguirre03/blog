import { Link } from "react-router-dom";
import "./index.css";

function BlogLink({ info }) {
  return (
    <Link
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      to={"posts/" + info._id}
    >
      <div key={info._id}>
        {info.user.username} wrote: {info.title}
      </div>
    </Link>
  );
}

export default BlogLink;
