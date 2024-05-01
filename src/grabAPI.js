export default async function grabAPI(backslash) {
    try {
      const response = await fetch(`https://blog-api-top.fly.dev/${backslash}`, {mode: 'cors', method: 'GET'})
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }