import React from 'react'
import Card from "../Card/Card";
import "../FeaturedProducts/ftProducts.scss"

const TrendingProducts = () => {

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
          isNew:false,
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
          id:3,
          img:"https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          img2:"https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title:"Butterfly Kettle",
          isNew:true,
          oldPrice: 1299,
          price: 799,
        },
      ]
    

      return (
        <div className="ftproducts">
          <div className="top">
            <h1>Trending products</h1>
            <p>
              Featured Products Trending Products Featured Products Trending ProductsFeatured Products Trending Products
              Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
              Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
              Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
              Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
            </p>
          </div>
          <div className="bottom">
              {data.map((item) => 
                <Card item={item} key={item.id} />
              )}
          </div>
        </div>
      );
}

export default TrendingProducts