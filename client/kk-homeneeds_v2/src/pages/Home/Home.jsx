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
      <FeaturedProducts type="trending"/>
      <Categories/>
      <Location/>
    </div>
  )
}

export default Home