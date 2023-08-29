import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";
// import {useState,useEffect} from "react";
// import axios from "axios";



const FeaturedProducts = ({ type }) => {
  
  // // const { data, loading, error } = useFetch(
  // //   `/products?populate=*&[filters][type][$eq]=${type}`
  // // );
  // // const [data,setData] = useState([]);

  // // useEffect(()=>{
  // //   const fetchData = async ()=>{
  // //     try{
  // //       const res = await axios.get(env.REACT_APP_API_URL+"/products");
  // //       setData(res.data.data)
  // //     }catch(err){
  // //       console.log(err)
  // //     }
  // //   };
  // //   fetchData();
  // // },[])

  // const [data, setData] = useState([])
  // useEffect (()=>{
  //   const fetchData = async ()=>{
  //     try{
  //       const res = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`,
  //       // {
  //       //   headers: {
  //       //     Authorization: "bearer " + env.REACT_APP_API_TOKEN,
  //       //   },
  //       // }
  //       );
  //       setData(res.data.data);
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   fetchData();
  // },[]);


  const {data,loading,error} = useFetch(
    `products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Featured Products Trending Products Featured Products Trending ProductsFeatured Products Trending Products
          Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
          Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
          Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
          Featured Products Trending ProductsFeatured Products Trending ProductsFeatured Products Trending Products
        </p>
      </div>
      <div className="bottom">
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />
          )}
      </div>
    </div>
  );
};

export default FeaturedProducts;




// let link = env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`;
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );