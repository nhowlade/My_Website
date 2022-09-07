import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import { scroller } from "react-scroll";

const navbar = () => {
    const SmoothScroll = (name) => scroller.scrollTo(name, {
        smooth: true,
        offset: -70,
        duration: 500,
    })
    return (
        <Navbar collapseOnSelect sticky="top" variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="https://nadeemhowlader.com">Nadeem Howlader</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#introduction"><span onClick={() => SmoothScroll("intro")}>Introduction</span></Nav.Link>
                        <Nav.Link href="#arctic=wolf"><span onClick={() => SmoothScroll("arctic-wolf")}>Arctic Wolf</span></Nav.Link>
                        <Nav.Link href="#my-role"><span onClick={() => SmoothScroll("my-role")}>My role in the team</span></Nav.Link>
                        <NavDropdown title="Goals and Learnings" id="navbarScrollingDropdown">
                            <NavDropdown.Item><span onClick={() => SmoothScroll("python")}>Learning Python</span></NavDropdown.Item>
                            <NavDropdown.Item><span onClick={() => SmoothScroll("aws")}>Using Amazon Web Services</span></NavDropdown.Item>
                            <NavDropdown.Item><span onClick={() => SmoothScroll("golang")}>Learning Golang</span></NavDropdown.Item>
                            <NavDropdown.Item><span onClick={() => SmoothScroll("docker")}>Learning Docker</span></NavDropdown.Item>
                            <NavDropdown.Item><span onClick={() => SmoothScroll("git")}>Using Version Control</span></NavDropdown.Item>
                            <NavDropdown.Item><span onClick={() => SmoothScroll("testing")}>Testing code thoroughly</span></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#takeaways"><span onClick={() => SmoothScroll("takeaways")}>Takeaways</span></Nav.Link>
                        <Nav.Link href="#acknowledgements"><span onClick={() => SmoothScroll("acknowledgements")}>Acknowledgements</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar
