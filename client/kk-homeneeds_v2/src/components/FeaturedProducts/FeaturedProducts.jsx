import React from 'react'
import "./featuredProducts.scss"
// import Butterfly1 from "../Images/butterfly_ekn.jpg";
// import Butterfly2 from "../Images/butterfly_ekn2.png";
import Card from "../Card/Card";

const FeaturedProducts = ({type}) => {
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
            price: 799,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 1299,
            price: 499,
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 1299,
            price: 299,
        },
    
    
    
    ]
    return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
                hi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddyhi i am Puneeth reddy
            </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts