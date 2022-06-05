import React ,{useEffect} from 'react';
import {useState} from "react";
import { useParams } from 'react-router-dom';

const Product = () => {
    const [product,setProduct] =useState({});
    const {id} =useParams();
   
    useEffect(()=>{
        const fetchProducts  = async() =>{
            let r = await fetch(`http://localhost:8080/products/${id}`);
            let d = await r.json();
            setProduct(d);
            // console.log(d);
        };
        fetchProducts();
    },[id]);
  return (
            <div>
                 Product ID:{id} 
                <div>Product Name: {product.name}</div>
            </div>
        ); 
};

export default Product;