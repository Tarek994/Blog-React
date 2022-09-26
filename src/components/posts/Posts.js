import Post from "./Post"
import { useState,useEffect } from "react"


const Posts = () => {

  const [posts, setPost] = useState(null);

  useEffect(() =>{
    fetch("http://localhost:4000/posts").then(res => {
    return res.json()
    .then(data => {
      console.log(data);
    })
    })
  },[])


  const handleDelete = (id) => {
  let curposts = [...posts]
  let newposts = curposts.filter(post => post.id !== id)
      setPost(newposts);

   };

  return (
    <section className="posts">
      
      {posts ? posts.map((post) => (
        <Post key={post.id} post={post} handleDelete={handleDelete}/>
      ) ):"no posts"}
     

      </section>
  )
}

export default Posts