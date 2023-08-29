import React from 'react';
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Location from '../../components/Location/Location';
import "./home.scss";


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Location/>
    </div>
  )
}

export default Home