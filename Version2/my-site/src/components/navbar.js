import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const navbar = () => {
    return (
        <Navbar collapseOnSelect sticky="top" variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Nadeem Howlader</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#introduction">Introduction</Nav.Link>
                        <Nav.Link href="#md-team">The MD Team</Nav.Link>
                        <Nav.Link href="#my-role">My role in the team</Nav.Link>
                        <Nav.Link href="#goals">Goals and learnings</Nav.Link>
                        <Nav.Link href="#takeaways">Takeaways</Nav.Link>
                        <Nav.Link href="#acknowledgements">Acknowledgements</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar
