function Comment({ data }) {
  return (
    <div className="text-center bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-4 flex w-3/6 justify-center border-2 border-gray-200 dark:border-gray-700">
      <div>
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {data.user.username}
        </p>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
          {data.text}
        </p>
      </div>
    </div>
  );
}

export default Comment;
