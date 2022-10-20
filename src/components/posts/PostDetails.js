import useFetch from "../../useFetch";
import { useParams } from "react-router-dom"



const PostDetails = () => {

    const {id}  = useParams();
    
    
  let {data:post, isloading, errMsg} = useFetch(`http://localhost:4000/posts${id}`);
  return (
         
       < >
        {isloading && <div>loading ..</div>}
        {errMsg && <div className="error">{errMsg}</div>}
        {post && !isloading && !errMsg && (

       


          <article className="container post-details">
        <div className="post-details-title">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <button className="btn btn-danger"> Delete </button>
      </div>
      <img
        src={post.image}
        alt=""
        className="post-details-img"
      />
      <p className="post-details-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora fugiat
        quasi earum sapiente illum nulla? Deleniti id, nisi deserunt corporis et
        dolores ea veniam a quam quod, aliquid neque quidem amet aut nemo
        perferendis harum facere mollitia molestias sunt laudantium quia quae
        laborum magni? Impedit labore repellat commodi officia asperiores. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Tempora fugiat quasi
        earum sapiente illum nulla? Deleniti id, nisi deserunt corporis et
        dolores ea veniam a quam quod, aliquid neque quidem amet aut nemo
        perferendis harum facere mollitia molestias sunt laudantium quia quae
        laborum magni? Impedit labore repellat commodi officia asperiores.
      </p>

    </article>
         )}

       </ >


    
  )
}

export default PostDetails