import React from 'react'
import "./slider.scss";
import {Slider1,Slider2,Slider3} from "../Images"
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';


const Slider = () => {

    const data = [
        {Slider1},{Slider2},{Slider3}
    ]
  return (
    <div className='slider'>
        <div className="container">
            <img src={data[0]} alt="" ></img>
            <img src={data[1]} alt="" ></img>
            <img src={data[2]} alt="" ></img>
        </div>
        <div className="icons">
            <div className="icon">
                <KeyboardArrowLeftRoundedIcon/>
            </div>
            <div className='icon'>
                <KeyboardArrowRightRoundedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider