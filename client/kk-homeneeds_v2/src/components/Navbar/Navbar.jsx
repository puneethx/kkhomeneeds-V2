import React,{useState} from 'react';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import "./navbar.scss";
import MainLogo from "../Images/logo-main.png";
import Cart from "../Cart/Cart"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  
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
            <div className='cartIcon' onClick={()=> setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span className='cartSpan'>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar