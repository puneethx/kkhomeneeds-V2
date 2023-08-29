import React from 'react';
import "./products.scss";
import List from "../../components/List/List";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';


const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice,setMaxPrice] = useState(10000);
  const [sort, setSort ] = useState(null);

  const [selectedSubCats,setSelectedSubCats] = useState([]);

  const{data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  
  const handleChange = (e) =>{
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats,value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map(item=>(
            <div className='inputItem' key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item?.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input className="ranger" type='range' min={0} max={10000} step="500"
            onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input className="radio" type="radio" id="asc" value="asc" name='price' checked onChange={e=>setSort("asc")}/>
            <label for="asc" htmlFor='asc'>Price (Low to High)</label>
          </div>
          <div className="inputItem">
            <input className="radio" type="radio" id="desc" value="desc" name='price' onChange={e=>setSort("desc")} />
            <label htmlFor='asc'>Price (High to Low)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className='catImg'
          src='https://images.pexels.com/photos/5825363/pexels-photo-5825363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=""
        ></img>
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats = {selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products;