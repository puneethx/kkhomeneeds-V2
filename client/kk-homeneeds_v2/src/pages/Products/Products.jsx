import React from 'react';
import "./products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";


const Products = () => {
  const catId = parseInt(useParams().id)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type="checkbox" id="1" value={1}/>
            <label htmlFor="1">Kettle</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="2" value={2}/>
            <label htmlFor="2">Stove</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id="3" value={3}/>
            <label htmlFor="3">Cooker</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input className="ranger" type='range' min={0} max={10000} step="500"/>
            <span>10000</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input className="radio" type="radio" id="asc" value="asc" name='price'/>
            <label for="asc" htmlFor='asc'>Price (Low to High)</label>
          </div>
          <div className="inputItem">
            <input className="radio" type="radio" id="desc" value="desc" name='price'  />
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
        <List catId={catId} maxPrice="1000"/>
      </div>
    </div>
  )
}

export default Products;