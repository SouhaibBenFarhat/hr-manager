import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../../Assets/personio_logo.svg'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg" className='mb-4'>
            <Navbar.Brand href="">
                <img src={logo} alt='brand' style={{width: 160}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
