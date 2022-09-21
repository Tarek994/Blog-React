import Posts from './posts/Posts';

const Home = () => {
  const title = "Home"
  const style = {color: "red", }

  return (
    <div className="home">
      <h2 style={style}>{title}</h2>
        <Posts />
        
    </div>
  )
}

export default Home