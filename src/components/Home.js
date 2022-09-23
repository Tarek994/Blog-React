import Posts from './posts/Posts';
import { useState } from 'react';

const Home = () => {
  
  let [name, setName] = useState("Ali")
  const handleClick = ( ) => {
    
    setName("Hossam");
  };
  console.log(name)

  return (
    <div className="home">
      
        <button className='btn' onClick={handleClick}>
        Click Me!
        </button>
        <h1>{name}</h1>
        <Posts />
        
    </div>
  )
}

export default Home