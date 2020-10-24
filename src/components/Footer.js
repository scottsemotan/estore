import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../index.css';

const Footer = () => (
    <nav class="foot navbar navbar-dark bg-dark">
        <a class="navbar-brand">Hey It's a Nav Bar at the bottom</a>
        <Link className="nav-link" to={"/Admin"}>
                  Admin Only
        </Link>
    </nav>
)


export default Footer;
