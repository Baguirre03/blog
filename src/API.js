const URL =
  import.meta.env.VITE_MODE == "deployed"
    ? "https://blog-api-top.fly.dev"
    : "http://localhost:3000";

async function grabAPI(backslash) {
  try {
    const response = await fetch(`${URL}/${backslash}`, {
      mode: "cors",
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function postAPI(backslash, information) {
  try {
    const response = await fetch(`${URL}/${backslash}`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        information,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function postAPIsignup(data) {
  try {
    const response = await fetch(`${URL}/signup`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const rsp = await response.json();
    if (rsp.errors.length > 0) {
      return { created: false, errors: rsp.errors };
    } else {
      return { created: true, rsp };
    }
  } catch (err) {
    return { err };
  }
}

async function loginPost(user, pass) {
  try {
    const response = await fetch(`${URL}/login`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    if (result.rsp.loggedin) {
      localStorage.setItem("UserId", result.user._id);
      localStorage.setItem("Username", result.user.username);
      localStorage.setItem("SavedToken", "Bearer " + result.token);
    }
    return result;
  } catch (err) {
    return { err };
  }
}

async function articlePost(data) {
  try {
    const response = await fetch(`${URL}/posts/post`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        text: data.text,
      }),
      headers: {
        Authorization: localStorage.getItem("SavedToken"),
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result, "RESULT API");

    return result;
  } catch (err) {
    return { err };
  }
}

async function commentPost(data, id) {
  try {
    const response = await fetch(`${URL}/posts/create/${id}/comment`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        text: data.text,
      }),
      headers: {
        Authorization: localStorage.getItem("SavedToken"),
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return { err };
  }
}

function logout() {
  localStorage.clear("UserId");
  localStorage.clear("Username");
  localStorage.clear("SavedToken");
}

export {
  grabAPI,
  postAPI,
  postAPIsignup,
  loginPost,
  logout,
  articlePost,
  commentPost,
};
