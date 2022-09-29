import {BrowserRouter as Router, Switch, Route } from "react-router-dom"


import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import PostDetails from './components/posts/PostDetails';
import CreatePost from './components/posts/CreatePost';

function App() {
  return (
    <Router>
    <div className='App'>

      <Header/>
      <main className="container">
        <Switch>
         <Home/>
         {/* <PostDetails /> */}
         {/* <CreatePost /> */}
         </Switch>
      </main>
     
      


      <Footer />
    </div>
    </Router>
  );
}

export default App;
