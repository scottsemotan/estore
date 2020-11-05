import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Navbar from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Nav() {
  return (
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Pick your Pig - Guinea Pigs online store
          </a>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/shop"}>
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register-login"}>
                  Register/Login
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to={"/checkout"}>
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
   
  );
}

export default Nav;
