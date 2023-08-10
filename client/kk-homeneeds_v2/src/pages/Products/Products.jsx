import React from 'react';
import "./products.scss";
import List from "../../components/List/List";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(10000)
  const [sort, setSort ] = useState(null)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor='1'>Cookers</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor='2'>Gas Stoves</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor='3'>Induction Stoves</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="4" value={4} />
            <label htmlFor='4'>Pans</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input className="ranger" type='range' min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor='asc'>Price (Low to High)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name='price' onChange={e=>setSort("desc")} />
            <label htmlFor='asc'>Price (High to Low)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className='catImg'
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=""
        ></img>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products