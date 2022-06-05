import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="" element ={<Home/>} />
          <Route path="about" element ={<About/>} />
          <Route path="products/*" element ={<Products/>} >
              <Route path=":id" element ={<Product/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;