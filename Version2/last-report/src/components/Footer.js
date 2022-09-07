import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div style={{background:"#36454F"}}>
            <Container className="p-2">
                <div style={{color:"white", display:"block", textAlign:"center"}}>© 2022-2023 by Nadeem Howlader</div>
                <div style={{color:"white", textAlign:"center"}}><a href="https://nadeemhowlader.com/views/credits.html" target="_blank" rel="noreferrer" style={{color:"white", textDecoration:"none" }}>Credits</a></div>
            </Container>
        </div>
    )
}

export default Footer
