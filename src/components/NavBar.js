import React from "react"; 
import { NavLink } from "react-router-dom";
import logo from '../media/icons/logo.png';
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav>
            <NavLink to="/" className='logo-container'><img src={logo} alt="" className="logo" /></NavLink>
            <ul className="navbar">
                <NavLink to="/category/juguetes" className='nav-link' activeClassName='active'>Juguetes</NavLink>
                <NavLink to="/category/accesorios" className='nav-link' activeClassName='active'>Accesorios</NavLink>
                <NavLink to="/category/all" className='nav-link' activeClassName='active'>Todos los productos</NavLink>
            </ul>
            <NavLink to="/cart"><CartWidget /></NavLink>
        </nav>
    )
}
export default NavBar; 