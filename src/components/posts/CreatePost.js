
const CreatePost = () => {
  return (
<section className="create-post">
    <h2> Add New Post</h2>
    <form>
    <form>
        <label>Blog title :</label>
        <input type="text" required />
        <label>Blog Image :</label>
        <input type="url" required />
        <label>Blog body :</label>
        <textarea required rows="10"></textarea>
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