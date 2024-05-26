function Comment({ data }) {
  return (
    <h4>
      {data.user.username}: {data.text}
    </h4>
  );
}

export default Comment;
