async function grabAPI(backslash) {
  try {
    const response = await fetch(`https://blog-api-top.fly.dev/${backslash}`, {
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
    const response = await fetch(`https://blog-api-top.fly.dev/${backslash}`, {
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

async function postSignUP(backslash, info) {
  console.log(info, "info");
  try {
    const response = await fetch(`http://localhost:3000/${backslash}`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        username: info.username,
        password: info.password,
        confirm_password: info.confirm_password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export { grabAPI, postAPI, postSignUP };
