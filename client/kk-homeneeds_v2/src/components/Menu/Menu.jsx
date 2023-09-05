import React from 'react'
import {Link} from "react-router-dom"
import "./menu.scss"

const Menu = () => {
    return (
        <div className='main-menu'>
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
          <div className="item">
            <Link className='link' to ="/account">Account</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/Settings">Settings</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/about">About</Link>
          </div>
        </div>
      )
}

export default Menu