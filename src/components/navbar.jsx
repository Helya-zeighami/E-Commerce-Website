import React from 'react';
import Logo from '../assets/pizzaLogo.png'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black  z-3 w-100" >
                <div className="container-fluid ">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarText" >

                        <a className="navbar-brand ms-4" href="#">
                            <img src={Logo} alt="Logo" width="100" height="50"
                                 className="d-inline-block align-text-top"/>

                        </a>
                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0" >
                            <li className="nav-item me-4">
                                <Link to="/" className="nav-link  text-light" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/menu" className="nav-link text-light" href="#">Menu</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/about" className="nav-link text-light" href="#">About</Link>
                            </li>

                            <li className="nav-item me-4">
                                <Link to="/contact" className="nav-link text-light" href="#">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
