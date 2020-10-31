import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Welcome To Our Shop!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/home"}>
                  Home
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
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin"}>
                  Admin Only
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
  );
}

export default Nav;
