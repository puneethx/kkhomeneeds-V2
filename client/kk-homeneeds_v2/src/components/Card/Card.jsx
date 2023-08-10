import React from 'react'
import "./card.scss"
import {Link} from "react-router-dom";

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
        <div className='card'>
            <div className="image">
                {item.isNew && <span className='new'>New</span>}
                <img src={item.img} className="mainImg"alt=""></img>
                <img src={item.img2} className='secondImg' alt=""></img>
                </div>
                <h2>{item.title}</h2>
                <div className='prices'>
                    <h3>₹{item.oldPrice}</h3>
                    <h3>₹{item.price}</h3>
                </div>
        </div>
    </Link>
  )
}

export default Card