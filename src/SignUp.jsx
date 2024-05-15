export default function SignUp() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    const res = postAPI(data);
    if (res) {
      //LOGIN
    } else {
      // SHOW errors
    }
  }

  async function postAPI(data) {
    try {
      const response = await fetch(`http://localhost:3000/signup`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const rsp = await response.json();
      return { created: true, rsp };
    } catch (err) {
      return { created: false, err };
    }
  }

  return (
    <div>
      <h1>Sign up today!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input
          type="password"
          name="confirm_password"
          placeholder="confirm password"
        />
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
}
