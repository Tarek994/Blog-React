import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


const Post = ({post , id}) => {
  const navigate = useNavigate();
  return (
    <div className="post" onClick={()=>{
      navigate(`/post/` + id)}}>
      <img
        src={post.image}
        alt=""
      />
      <div className="post-author">By:{post.author ? post.author : "Undefined"}</div>
      <h3>{post.title}</h3>
    </div>
  )
}

export default Post;