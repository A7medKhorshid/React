import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Portfolio from './../Portfolio/Portfolio';
const Navbar = () => {

    let location = useLocation(); 
  return (
    <nav class="navbar navbar-expand-lg pt-4 pb-4">
        <div class="container">
            <a class="navbar-brand text-white" href="/">START FRAMEWORK</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <NavLink className={`links ${location.pathname === "/about" ? "active" : ""}`}  to="/about">ABOUT</NavLink>
                    <NavLink className={`links ${location.pathname === "/portfolio" ? "active" : ""}`}  to="/portfolio">PORTFOLIO</NavLink>
                    <NavLink className={`links ${location.pathname === "/contact" ? "active" : ""}`}  to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar