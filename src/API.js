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
    const rsp = await response.json();
    localStorage.setItem("username", user);
    localStorage.setItem("SavedToken", "Bearer " + rsp.token);
    return rsp;
  } catch (err) {
    return { err };
  }
}

function logout() {
  localStorage.setItem("username", false);
  localStorage.setItem("SavedToken", false);
}

export { grabAPI, postAPI, postAPIsignup, loginPost, logout };
