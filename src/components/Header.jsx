import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({insideDashboard}) => {
  return (
    <Navbar style={{zIndex:1}} className="shadow border rounded position-fixed w-100">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} className='text-decoration-none fw-bolder'><i className='fa-brands fa-docker'></i> Project Fair</Link>
          </Navbar.Brand>
        </Container>
        {
          insideDashboard &&
          <button className="btn btn-link fw-bolder">Logout <i className='fa-solid fa-right-from-bracket ms-1'></i></button>
        }
      </Navbar>
  )
}

export default Header