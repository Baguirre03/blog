import { Link } from "react-router-dom";
import "./index.css";

function BlogLink({ info }) {
  return (
    <div className="dark:hover:border-blue-400 dark:bg-gray-900 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 flex text-center flex-col justify-center max-w-md  w-full bg-white shadow-lg rounded-lg p-6 h-full">
      <h2 className="text-2xl font-semibold mb-4">{info.title}</h2>
      <div className="flex items-center mb-6 justify-center">
        <div>
          <p className="text-gray-900 dark:text-white  font-semibold">
            {info.user.username}
          </p>
          <p className="text-gray-600 dark:text-white  text-sm">
            {info.user.description}
          </p>
        </div>
      </div>

      <Link
        to={"posts/" + info._id}
        key={info._id}
        className="dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 block text-blue-500 hover:text-blue-700 font-medium text-lg transition duration-300 ease-in-out"
      >
        Read the full post
      </Link>
    </div>
  );
}

export default BlogLink;
