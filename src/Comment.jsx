function Comment({ data }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4 max-w-3xl w-96">
      <div>
        <p className="text-sm font-semibold text-gray-900">
          {data.user.username}
        </p>
        <p className="mt-1 text-sm text-gray-700">data.text</p>
      </div>
    </div>
  );
}

export default Comment;
