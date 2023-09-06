import React from 'react'
import "./categoriessm.scss"

import { Link } from "react-router-dom";
import Cat1 from "../Images/Cat_1.png";
import Cat2 from "../Images/Cat_2.png";
import Cat3 from "../Images/Cat_3.png";
import Cat4 from "../Images/Cat_4.png";
import Cat5 from "../Images/Cat_5.png";
import Cat6 from "../Images/Cat_6.png";




const Categoriessm = () => {
  return (
    <div className='categoriessm'>
      <div className="row">
        <div className="col">
        <img
            className="img"
            src={Cat1}
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              <span className='foo'>Stoves</span>
            </Link>
          </button>
        </div>
        <div className="col">
        <img
            className="img"
            src={Cat2}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            <span className='foo'>Fans</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col col1">
        <img
            className="img"
            src={Cat3}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            <span className='foo'>Tower Fans</span>
            </Link>
          </button>
        </div>
        <div className="col">
          <div className="row">
          <img
                className="img"
                src={Cat4}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                <span className='foo'>Home Theatre</span>
                </Link>
              </button>
          </div>
          <div className="row">
          <img
                className="img"
                src={Cat5}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                <span className='foo'>Electric Appliances</span>
                </Link>
              </button>
          </div>
        </div>
      </div>
      <div className="row">
        <img
          className="img"
          src={Cat6}
          alt=""
        />
        <button className="button">
          <Link to="/products/1" className="link">
          <span className='foo'>Cookers & Pans</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Categoriessm