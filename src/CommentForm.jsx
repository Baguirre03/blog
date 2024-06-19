export default function CommentForm({
  handleSubmit,
  handleChange,
  commentState,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-5"
    >
      <div className="px-3 mb-2 mt-2">
        <input
          type="body"
          placeholder="Comment"
          className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          value={commentState}
          onChange={handleChange}
          name="text"
        ></input>
      </div>
      <div class="flex justify-end px-4">
        <button
          className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
          type="submit"
        >
          Comment
        </button>
      </div>
    </form>
  );
}
