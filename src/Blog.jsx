import { useParams } from "react-router-dom";
import grabAPI from "./grabAPI";
import { useEffect, useState } from "react";

function Blog() {
    const [post, setPostInfo] = useState([])

    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
          const data = await grabAPI(`posts/${id}`);
          setPostInfo(data)
        };
        fetchData();
      }, []);

    console.log(post)
    return <h1>hello</h1>
}

export default Blog;