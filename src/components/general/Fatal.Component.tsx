import React from 'react';
import { connect } from 'react-redux'
import Imagen404 from './../../UI/images/404.png'

import * as userActions from './../../actions/usersActions'

interface Properties {
    errorMessage?: string
}

const FatalComponent = (property: Properties) => {
    return (
        <div className = "error-container">
            <img  className = "error-img" src = {Imagen404}></img>
            <div className = "error-message-top">Page not found</div>
            <div className = "error-message">¡{property.errorMessage}!</div>
        </div>
    )
}

export default FatalComponent