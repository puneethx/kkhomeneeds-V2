import React from 'react';
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Location from '../../components/Location/Location';
import "./home.scss";
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts';


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <TrendingProducts type="trending"/>
      <Location/>
    </div>
  )
}

export default Home