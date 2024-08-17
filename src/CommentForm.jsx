export default function CommentForm({
  handleSubmit,
  handleChange,
  commentState,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-700 p-2 mx-auto mt-5 mb-7 w-3/6"
    >
      <div className="px-3 mb-2 mt-2">
        <input
          type="body"
          placeholder="Comment"
          className="w-full bg-gray-100 dark:bg-gray-700 rounded border border-gray-400 dark:border-gray-600 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          value={commentState}
          onChange={handleChange}
          name="text"
        />
      </div>
      <div className="flex justify-end px-4">
        <button
          className="px-2.5 py-1.5 rounded-md text-white bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          type="submit"
        >
          Comment
        </button>
      </div>
    </form>
  );
}
