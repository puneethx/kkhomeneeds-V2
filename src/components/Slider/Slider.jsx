import React, { useState } from "react";
import "./slider.scss";
import Slide3 from "../Images/slide4.jpg";
import Slide2 from "../Images/slide2.jpg";
import Slide1 from "../Images/slide3.jpg";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const prevSlide =() =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1);
    };

    const nextSlide =() =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1);
    };
 
    return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={Slide1} alt="" ></img>
            <img src={Slide2} alt="" ></img>
            <img src={Slide3} alt="" ></img>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <KeyboardArrowLeftRoundedIcon/>
            </div>
            <div className='icon' onClick={nextSlide}>
                <KeyboardArrowRightRoundedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider