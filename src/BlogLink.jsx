import { Link } from "react-router-dom"

function BlogLink({info}) {
    return (
        <Link to={"posts/" + info._id}>
            <h1 key={info._id}>{info.user.username} wrote: {info.text}</h1>
        </Link>        
    )
}

export default BlogLink