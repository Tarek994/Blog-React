import Post from "./Post"
import { useState,useEffect } from "react"
import useFetch from "../../useFetch";


const Posts = () => {
  let {data:posts, isloading, errMsg} = useFetch("http://localhost:4000/posts");

  const handleDelete = (id) => {
  let curposts = [...posts]
  let newposts = curposts.filter(post => post.id !== id)
      // setPost(newposts);
   };

  return (
    <section className="posts">
      
      {posts && posts.map((post) => (
        <Post key={post.id} post={post} handleDelete={handleDelete}/>
      ))}
      {isloading && <div>  Loading ...</div>}
      {!posts && !isloading && !errMsg && <div className="not-found"> No Posts.. </div>}
      {errMsg && <div className="error">{errMsg}</div>}
     

      </section>
  )
}

export default Posts