import React from 'react';
import "./delivery.scss";
import DelImgPC from "../../components/Images/delivery.png"

const Delivery = () => {
  return (
    <div className='mainDiv'>
      <img className='delimgpc' src={DelImgPC} alt='loading'></img>
    </div>
  )
}

export default Delivery