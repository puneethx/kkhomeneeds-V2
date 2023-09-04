import React from "react";
import Card from "../Card/Card";
import "./ftProducts.scss";


const FeaturedProducts = ({type}) => {
  
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
  ]
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


  // const {data,loading,error} = useFetch(
  //   `products?populate=*&[filters][type][$eq]=${type}`
  // );

  return (
    <div className="ftproducts">
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
          {data.map((item) => 
            <Card item={item} key={item.id} />
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