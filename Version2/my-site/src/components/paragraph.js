import React from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'

const Paragraph = ({title,content}) => {
    return (
        <div>        
            <h1>{title}</h1>
            {content.map(line =>(<p>{line}</p>))}
        </div>

)
}

export default Paragraph
