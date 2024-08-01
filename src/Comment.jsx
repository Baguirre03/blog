function Comment({ data }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4 flex w-3/6 justify-center border-2">
      <div>
        <p className="text-sm font-semibold text-gray-900">
          {data.user.username}
        </p>
        <p className="mt-1 text-sm text-gray-700">{data.text}</p>
      </div>
    </div>
  );
}

export default Comment;
