import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
import Cat1 from "../Images/Cat_1.png";
import Cat2 from "../Images/Cat_2.png";
import Cat3 from "../Images/Cat_3.png";
import Cat4 from "../Images/Cat_4.png";
import Cat5 from "../Images/Cat_5.png";
import Cat6 from "../Images/Cat_6.png";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            className="img"
            src={Cat1}
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Stoves
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            className="img"
            src={Cat2}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Fans
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            className="img"
            src={Cat3}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Tower Fans
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                className="img"
                src={Cat4}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Home Theatre
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                className="img"
                src={Cat5}
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Electric Appliances
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
              Cookers & Pans
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;