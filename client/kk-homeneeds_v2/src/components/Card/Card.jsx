import React from "react";
import "./card.scss"; 
import { Link } from "react-router-dom";

const Card = ({ item }) => {

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>Newly Added</span>}
          <img
            src={
              `http://localhost:1337` + item.attributes.img.data.attributes.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              `http://localhost:1337` + item.attributes.img2.data.attributes.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>₹{item?.attributes.oldPrice}</h3>
          <h3>₹{item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;