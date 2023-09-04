import React from 'react';
import "./product.scss";
import {useState} from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const dispatch = useDispatch()
  const images = [
      "https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
  ];



  const data = [
    {
      id:1,
      img:"https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Butterfly Kettle",
      desc: "This is Butterfly Kettle from Butterfly company",
      isNew:true,
      oldPrice: 1299,
      price: 799,
    }
  ];



  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img 
            src={images[0]} 
            alt="" onClick={e => setSelectedImg(0)}/>
          <img 
            src={images[1]} 
            alt="" onClick={e => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      {data?.map(item=>  
      <div className="right" item={item} key={item.id}>
        <span className='title'  >{item.title}</span>
        <span className='desc' > {item.desc}</span>
        <span className='price'>₹{item.price}</span>
        <p>
            {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button onClick={()=> setQuantity(prev=>(prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add' onClick={()=>
          dispatch(
            addToCart({
              id: item.id,
              title: item.title,
              desc: item.desc,
              price: item.price,
              img: item.img,
              quantity,
        }))}>
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
      )}
    </div>
  )
}

export default Product