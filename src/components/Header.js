import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
            {/* <NavLink to="/">Home</NavLink> */}
            <NavLink to="/add-product">Add product</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );
}
