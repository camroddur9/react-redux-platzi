import React from 'react';
import Imagen404 from './../../UI/images/404.png'

interface Properties {
    errorMessage?: string
}

const FatalComponent = (property: Properties) => {
    return (
        <div className = "error-container">
            <img  alt = "404-error" className = "error-img" src = {Imagen404}></img>
            <div className = "error-message-top">Page not found</div>
            <div className = "error-message">¡{property.errorMessage}!</div>
        </div>
    )
}

export default FatalComponent