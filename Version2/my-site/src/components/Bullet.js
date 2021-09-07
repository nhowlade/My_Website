import React from 'react'

const Bullet = ({title,content}) => {
    return (
        <div>        
            <h1>{title}</h1>
            {content.map((line,key) =>(<p key={key}>{line}</p>))}
        </div>
    )
}

export default Bullet
