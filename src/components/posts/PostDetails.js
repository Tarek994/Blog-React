import useFetch from "../../useFetch";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const PostDetails = (props) => {
    const navigate = useNavigate();
    const {id}  = useParams();
    
  let {data:post, isloading, errMsg} = useFetch(`http://localhost:4000/data/db/posts?id=${id}`);
  if(post) post = post[0];
  
  const handleDelete = async (id ) => {
    try{
      const response = await
      fetch(`http://localhost:4000/data/db/posts/${id}`,{
        method: "DELETE"
      });
      if(!response.ok){
        throw new Error("Failed to delete post");
      }
      
    } catch(error){
      console.error(error);
    }navigate('/');
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