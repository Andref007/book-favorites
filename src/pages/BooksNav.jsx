import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function BooksNav() {
  return (
    
    <Navbar bg="dark" variant="dark">
    <Container>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Books'>Books</Link>

      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  )
}
