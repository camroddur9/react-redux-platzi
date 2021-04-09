import React from 'react';
import {connect} from 'react-redux';
import Spinner from './../general/Spinner.Component';
import Fatal from './../general/Fatal.Component';

interface Properties {
    comments?: any
    com_loading?: boolean
    com_error?: string
}

interface Reducers {
    userReducer?: any,
    publicationsReducer?: any,
    openClose?: any
}

const CommentComponent = (property: Properties) => {
    console.log(property)
    return (
        <ul>
            {
                property.com_loading && !property.comments.length ?
                    <li>
                    <Spinner></Spinner>
                    </li>
                    : 
                    property.com_error === "" ?
                    property.comments.map((comment: any, keyindex: number) => 
                    <li key = {keyindex}>
                        <div>
                            <p>
                                {comment.email}
                            </p>
                            <p>
                                {comment.body}
                            </p>
                        </div>
                    </li>
                    )
                    :
                    <div>{property.com_error}</div>
            } 
        </ul>
    )
}

const mapStateToProps = ({publicationsReducer}: Reducers) => publicationsReducer;

export default connect(mapStateToProps)(CommentComponent);