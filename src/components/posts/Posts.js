import Post from "./Post"
import { useState,useEffect } from "react"


const Posts = () => {

  const [posts, setPost] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() =>{
    setIsloading(true);
    fetch("http://localhost:4000/postss")
    .then((res)=>{
      console.log(res)
      if(!res.ok){
        throw Error(res.statusText ? res.statusText : "Error")
       
      }
      return res.json();
    })
    .then((data) => {
      setIsloading(false)
      console.log(data);
      setPost(data);
      
    }).catch((err) => {
      setIsloading(false);
      setErrMsg(err.message)
    })
},[])
    
    
  const handleDelete = (id) => {
  let curposts = [...posts]
  let newposts = curposts.filter(post => post.id !== id)
      setPost(newposts);

   };

  return (
    <section className="posts">
      
      {posts && posts.map((post) => (
        <Post key={post.id} post={post} handleDelete={handleDelete}/>
      ) )}
      {isloading && <div>  Loading ...</div>}
      {!posts && !isloading && !errMsg && <div className="not-found"> No Posts.. </div>}
      {errMsg && <div className="error">{errMsg}</div>}
     

      </section>
  )
}

export default Posts