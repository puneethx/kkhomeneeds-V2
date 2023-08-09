import React from 'react';
import "./product.scss";
import {useState} from "react";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compresss&cs=tinyrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compresss&cs=tinyrgb&w=1600&lazy=load",
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>₹699</span>
        <p>
          I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth 
          I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth 
          I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth 
          I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth I am Puneeth 
        </p>
        <div className="quantity">
          <button onClick={()=> setQuantity(prev=>(prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity(prev=>prev+1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Product