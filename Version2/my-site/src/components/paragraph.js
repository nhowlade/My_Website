import React from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'

const Paragraph = ({title,content, name}) => {
    return (
        <div id={name}>        
            <h1>{title}</h1>
            {content.map((line,key) =>(<p key={key}>{line}</p>))}
        </div>

)
}

export default Paragraph
