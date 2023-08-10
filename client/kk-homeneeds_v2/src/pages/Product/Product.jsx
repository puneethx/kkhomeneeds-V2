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
    "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
          <img src={images[2]} alt="" onClick={e => setSelectedImg(2)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <span className='title'>Butterfly 1.5L 1500W Electric Kettle, Dry Boil Protection, EKN</span>
        <span className='price'>₹699</span>
        <p>
        Prepare hot water, instant tea etc. in a matter of minutes 
        with Butterfly EKN Kettle. With attractive features like 
        automatic cut-off, ergonomically designed handles, unique designs
        with attractive finishes, lightweight and compact, making it easy
        to carry. To top it off, it also comes with the better safety
        features, making it safe to use. It will quickly heats and lasts 
        the heat of the water for a long.
        </p>
        <div className="quantity">
          <button onClick={()=> setQuantity(prev=>(prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon className='icon'/> ADD TO CART
        </button>
        <div className='link'>
          <div className='item'>
            <FavoriteBorderIcon className='icon'/> ADD TO WISHLIST
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