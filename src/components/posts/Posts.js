import Post from "./Post"
import { useState,useEffect } from "react"


const Posts = () => {

  const [posts, setPost] = useState(null);
  const [isloading, setIsloading] = useState(false);

  useEffect(() =>{
    setIsloading(true);
    fetch("http://localhost:4000/posts").then(res => {
    return res.json()
    .then(data => {
      // console.log(data);
      setPost(data);
      setIsloading(false);
    })
    });
  },[]);


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
      
      
     

      </section>
  )
}

export default Posts