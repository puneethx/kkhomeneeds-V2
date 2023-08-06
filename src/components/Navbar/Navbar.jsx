import React from 'react';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import "./navbar.scss";
import MainLogo from "../Images/logo-main.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className='link' to ="/products/1">Appliances</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/products/2">Cookers</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/products/3">Gas Stoves</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/products/4">Fans</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">
          <img src={MainLogo} className="main-logo" alt="logo" /></Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/">Home</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className='icons'>
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className='cartIcon'>
              <ShoppingCartOutlinedIcon/>
              <span className='cartSpan'>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar