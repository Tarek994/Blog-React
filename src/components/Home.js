import Posts from './posts/Posts';

const Home = () => {
  const title = "Home"

  return (
    <div className="home">
      <h2>{title}</h2>
        <Posts />
        
    </div>
  )
}

export default Home