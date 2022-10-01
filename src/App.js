import {BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import PostDetails from './components/posts/PostDetails';
import CreatePost from './components/posts/CreatePost';
import Post from "./components/posts/Post";

function App() {
  return (
    <Router>
    <div className='App'>

      <Header/>
      <main className="container">
        <Routes>
          
          <Route  path="/" exact element={<Home/>}/>
          <Route  path="/post/:id" element={<PostDetails/>}/>
          <Route  path="/create" element={<CreatePost/>}/>

         </Routes>
      </main>
     
      <Footer />
    </div>
    </Router>
  );
}

export default App;
