import React from 'react'
import { Container } from 'react-bootstrap'
// import { Navbar } from 'react-bootstrap'

const Footer = () => {
    return (
        <div style={{background:"#36454F"}}>
            <Container className="p-2">
                <div style={{color:"white", display:"block", textAlign:"center"}}>© 2020-2021 by Nadeem Howlader</div>
                <div style={{color:"white", textAlign:"center"}}>Credits</div>
            </Container>
        </div>
    )
}

export default Footer
