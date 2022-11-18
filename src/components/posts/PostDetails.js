import useFetch from "../../useFetch";
import { useParams } from "react-router-dom"



const PostDetails = (props) => {

    const {id}  = useParams();
    
  let {data:post, isloading, errMsg} = useFetch(`http://localhost:4000/posts?id=${id}`);
  if(post) post = post[0];
  
  const handleDelete = () => {
    if(post) post = post[0];
      fetch(`http://localhost:4000/posts?id=${id}`,{
        method: "DELETE"
      }).then(() =>{
        props.history.push('/')
      })
  }

  return (
         
       < >
        {isloading && <div>loading ..</div>}
        {errMsg && <div className="error">{errMsg}</div>}
        {post && !isloading && !errMsg && (

          <article className="container post-details">
        <div className="post-details-title">
        <h1>{post.title}</h1>
        <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
      </div>
      <img
        src={post.image}
        alt=""
        className="post-details-img"
      />
      <p className="post-details-body">
        {post.body}
        <p>{post.author}</p>
      </p>

    </article>
         )}

       </ >


    
  )
}

export default PostDetails