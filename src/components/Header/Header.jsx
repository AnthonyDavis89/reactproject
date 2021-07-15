import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar">
            <span className="navbar-brand mb-0 h1 portfolioName">Anthony Davis</span>
            <ul>
                <li>
                    <a class="nav-link" href="#/">About</a>
                </li>
                <li>
                    <a class="nav-link" href="#/portfolio">My work</a>
                </li>
                <li>
                    <a class="nav-link" href="#/contact">Let's chat</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;