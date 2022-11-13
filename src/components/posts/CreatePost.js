import { useState } from "react"


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [ body, setBody] = useState("");
  const [ url, setUrl] = useState("");



  return (
<section className="create-post">
    <h2> Add New Post</h2>
    <form>
    <form>
        <label>Blog title :</label>
        <input
         type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value) } />
        <label>Blog Image :</label>
        <input type="url" required value={url}
          onChange={(e) => setUrl(e.target.value) } />
        <label>Blog body :</label>
        <textarea required rows="10" value={body}
          onChange={(e) => setBody(e.target.value) } ></textarea>
        <label>Blog author :</label>
        <select>
          <option value="admin">admin</option>
          <option value="codv">codv</option>
        </select>
        <button className="btn" type="submit">
          Add Blog
        </button>
      </form>

    </form>

</section>  )
}

export default CreatePost