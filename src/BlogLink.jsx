import { Link } from "react-router-dom";
import "./index.css";

function BlogLink({ info }) {
  return (
    <div className="flex flex-col justify-center max-w-md w-full bg-white shadow-lg rounded-lg p-6 h-full">
      <h2 className="text-2xl font-semibold mb-4">{info.title}</h2>
      <div className="flex items-center mb-6 justify-center">
        <div>
          <p className="text-gray-900 font-semibold">{info.user.username}</p>
          <p className="text-gray-600 text-sm">{info.user.description}</p>
        </div>
      </div>

      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        to={"posts/" + info._id}
        key={info._id}
        class="block text-blue-500 hover:text-blue-700 font-medium text-lg transition duration-300 ease-in-out"
      >
        Read the full post
      </Link>
    </div>
  );
}

export default BlogLink;
