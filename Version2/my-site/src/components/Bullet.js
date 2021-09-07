import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Bullet = ({title,content, imgsrc}) => {
    return (
        <div>        
            <h1>{title}</h1>
            <Container>
                <Row xs={1} lg={2}>
                    <Col>{content.map((line,key) =>(<p key={key}>{line}</p>))}</Col>
                    <Col ><Image src={imgsrc} fluid/></Col>
                </Row>
            </Container>
            {content.map((line,key) =>(<p key={key}>{line}</p>))}
        </div>
    )
}

export default Bullet
