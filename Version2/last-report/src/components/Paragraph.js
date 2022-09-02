import React from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'

const Paragraph = ({title,content, name, linkpresent,link}) => {
    return (
        <div id={name}>        
            <h1>{title}</h1>
            {content.map((line,key) =>(<p key={key}>{line}</p>))}
            {linkpresent==='true' ? (<p>Click <a href={link} target="_blank" rel="noreferrer">here</a> to view the previous report.</p>) : null}
        </div>

)
}

export default Paragraph
