import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>

      <Header/>
      <main>
         <Home/>
      </main>
     
      <h2>Hello App</h2>


      <Footer />
    </div>
  );
}

export default App;
