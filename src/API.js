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

async function postAPIsignup(data) {
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
    if (rsp.errors.length > 0) {
      return { created: false, errors: rsp.errors };
    } else {
      return { created: true, rsp };
    }
  } catch (err) {
    return { err };
  }
}

export { grabAPI, postAPI, postAPIsignup };
