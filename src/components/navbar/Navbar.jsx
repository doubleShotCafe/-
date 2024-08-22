import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <NavLink className="navbar-brand font1 color1" to="/">
                    <img style={{border:"1px solid #432813" , borderRadius:"50%"}} src={Logo} alt="Brand Logo" width="40" height="40" className="d-inline-block align-top " />
                    Double Shot
                </NavLink>
                <button className="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link font2 color1" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font2 color1" to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font2 color1" to="/1">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font2 color1" to="/2">Offers</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar