import React from 'react';
import "./list.scss";
import Card from "../Card/Card";


const List = () => {

  const data = [
    {
      id:1,
      img:"https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Butterfly Kettle",
      isNew:true,
      oldPrice: 1299,
      price: 799,
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Butterfly Kettle",
      isNew:true,
      oldPrice: 1299,
      price: 799,
    },
    {
      id:3,
      img:"https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Butterfly Kettle",
      isNew:true,
      oldPrice: 1299,
      price: 799,
    },
    {
      id:4,
      img:"https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Butterfly Kettle",
      isNew:false,
      oldPrice: 1299,
      price: 799,
    },
  ];
    
  return (
    <div className='list'>
        {data?.map(item=> <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List