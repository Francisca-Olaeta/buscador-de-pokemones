import { React } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/img/logo.svg'

const MyNavbar = () => {
    const setActiveClass = ({isActive})=>(isActive ? "active" : "notActive");
  return (
    <Navbar className="myNavbar" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top ms-3"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
        <Container className="justify-content-end p-2">
        <NavLink end className = {setActiveClass} to="/">
            Home
        </NavLink>
        {"-"}
        <NavLink className = {setActiveClass} to="/pokemones">
            Pokemones
        </NavLink>

        </Container> 
    </Navbar>
  )
}

export default MyNavbar