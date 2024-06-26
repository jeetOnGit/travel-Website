import './App.css';
import Navbar from '../src/components/navbar.js'
// import HeroSection from '../src/components/heroSection.js'
import Home from '../src/components/pages/Home.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import signUp from './components/pages/signUp.js';
import products from './components/pages/products.js';
import services from './components/pages/services.js';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/services" exact Component={services}/>
          <Route path="/products" exact Component={products}/>
          <Route path="/signUp" exact Component={signUp}/>
        </Routes>
      </Router>
         
    </>
  );
}

export default App;
