import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <Navbar expand="lg" className="navbar navbar-dark bg-dark" >
                <button><NavLink to="/"> Dashboard </NavLink></button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                        <button><NavLink to="/nowplaying">Now Playing </NavLink></button>
                        <button><NavLink to="/upcoming">Upcoming </NavLink></button>
                        <button><NavLink to="/search">Search </NavLink></button>
                        <button><NavLink to="/genre">Genre </NavLink></button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header



