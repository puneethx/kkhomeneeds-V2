import React from 'react';
import "./product.scss";
import {useState} from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


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
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className='link'>
          <div className='item'>
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
        </div>
        <div className='info'>
          <span>Vendor: Butterfly</span>
          <span>Product: Kettle</span>
        </div>
        <hr/>
        <div className='details'>
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product