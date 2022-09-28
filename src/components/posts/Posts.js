import Post from "./Post"
import { useState,useEffect } from "react"


const Posts = () => {

  const [posts, setPost] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  useEffect(() =>{
    setIsloading(true);
    fetch("http://localhost:4000/postss")
    .then((res)=>{
      if(!res.ok){
        throw Error("Not Found")
       
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setPost(data);
      
    }).catch(err => {
      setIsloading(false);
      console.log(err.message)
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
      {!posts && !isloading && <div className="not-found"> No Posts.. </div>}
    
     

      </section>
  )
}

export default Posts