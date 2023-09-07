import React from 'react'
import MainLogo from "../Images/logo-main.png";
import {Link} from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className='item'>
          <h1>Categories</h1>
          <span>Appliances</span>
          <span>Cookers</span>
          <span>Gas Stoves</span>
          <span>Fans</span>
          <span>New Arrivals</span>
          <span>Offers</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Address</span>
          <span>Cookies</span>
        </div>
        <div id="about" className="item2">
          <h1>About</h1>
          <span>At <span className='name'>KK HomeNeeds</span>, 
          we take pride in offering the best quality products 
          at the lowest possible cost. 
          We understand that creating a comfortable and stylish home doesn't have to break the bank, and that's why we are committed to providing you with 
          top-notch products at affordable prices. </span>
        </div>
        <div id='contact' className="item">
          <h1>Contact</h1>
          <span>We'd love to hear from you!</span>
          <span>KK HomeNeeds</span>
          <span>Owner: T Surendra Reddy</span>
          <span>Phone : +91 9703508405</span>
          <span>Opp. Indian Bank,</span>
          <span>Gokul Circle,</span>
          <span>Punganur,</span>
          <span>Chittoor, 517247</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className='logo'>
            <Link className='link' to="/">
            <img src={MainLogo} className="main-logo" alt="logo" /></Link>
          </div>
          <span>© Copyright 2014. All Rights Reserved</span>
        </div>
        <div className="right">
          <span>Developed By <span className='btm-rt'><Link className='link' target="_blank" to="https://github.com/puneethx">T Puneeth Reddy</Link></span></span>
        </div>
      </div>
    </div>
  )
}
