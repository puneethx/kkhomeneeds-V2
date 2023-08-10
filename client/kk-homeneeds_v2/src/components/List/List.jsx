import React from 'react';
import "./list.scss";
import Card from "../Card/Card"

const List = () => {
    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "Butterfly EKN" ,
            oldPrice: 1299,
            price: 699,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "Coat",
            oldPrice: 1299,
            price: 599,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 1299,
            price: 399,
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 1299,
            price: 799,
        },
    
    
    
    ]
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List