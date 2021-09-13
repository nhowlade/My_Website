import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Bullet = ({title,content, imgsrc}) => {
    const arr = imgsrc.includes("sccm");
    return (
        <div>        
            <h1>{title}</h1>
            <Container>
                <Row xs={1} lg={2} className="align-items-center">
                    {
                        (arr === true ? <Col><Image src={imgsrc} fluid roundedCircle/></Col> :<Col><Image src={imgsrc} fluid/></Col>  )
                    }
                    <Col>{content.map((line,key) =>(<p key={key}>{line}</p>))}</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bullet
