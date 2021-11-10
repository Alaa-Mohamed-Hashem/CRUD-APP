import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavbarBrand, Container } from 'reactstrap';
import '../App.css'

export const Heading = () => {
   return (
      <Navbar color="dark" dark className="navbar">
         <Container>
            <NavbarBrand href="/">My Team</NavbarBrand>
            <Nav>
               <NavItem>
                  <Link className="btn btn-primary" to="/add">Add User</Link>
               </NavItem>
            </Nav>
         </Container>
      </Navbar>
   )
};

export default Heading;