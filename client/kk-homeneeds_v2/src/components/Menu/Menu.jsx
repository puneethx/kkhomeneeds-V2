import React from 'react'
import {Link} from "react-router-dom"
import "./menu.scss"

const Menu = (setMenuOpen) => {
    return (
        <div className='main-menu'>
          <div className="item">
            <Link className='link' onClick={()=> setMenuOpen(false)} to ="/products/1">Appliances</Link>
          </div>
          <div className="item">
            <Link className='link' onClick={()=> setMenuOpen(false)} to ="/products/2">Cookers</Link>
          </div>
          <div className="item">
            <Link className='link' onClick={()=> setMenuOpen(false)} to ="/products/3">Gas Stoves</Link>
          </div>
          <div className="item">
            <Link className='link' onClick={()=> setMenuOpen(false)} to ="/products/4">Fans</Link>
          </div>
          <div className="item">
            <Link className='link' onClick={()=> setMenuOpen(false)} to ="/account">Account</Link>
          </div>
          <div className="item">
            <Link className='link' onClick={()=> setMenuOpen(false)} to ="/Settings">Settings</Link>
          </div>
          <div className="item">
            <Link className='link' onClick={()=> setMenuOpen(false)} to ="/about">About</Link>
          </div>
        </div>
      )
}

export default Menu