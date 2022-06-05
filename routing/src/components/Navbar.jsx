import React from 'react'
import './style.css';
import {Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
    const handleOnClick =(id) => {
            if(id===1){
                navigate("/products/1");
            }
            if(id===2){
              navigate("/products/2");
           }
          if(id===3){
            navigate("/products/3");
          }      
    };
  return (
    <div className="page">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <button className='butncolr' onClick={()=> handleOnClick(1)}>Go to Product 1</button>
        <button className='butncolr' onClick={()=> handleOnClick(2)}>Go to Product 2</button>
        <button className='butncolr' onClick={()=> handleOnClick(3)}>Go to Product 3</button>
    </div>
  );
};

export default Navbar;