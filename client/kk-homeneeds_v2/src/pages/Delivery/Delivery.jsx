import React from 'react';
import "./delivery.scss";
import DelImg from "../../components/Images/delivery.png"

const Delivery = () => {
  return (
    <div className='mainDiv'>
        <img className='delimg' src={DelImg} alt='loading'></img>
    </div>
  )
}

export default Delivery