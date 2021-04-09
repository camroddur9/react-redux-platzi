import React, { Component } from 'react'

class SaveComponent extends Component {
    render() {
        return (
            <div>
                <h1>
                    Save Task
                </h1>
                <div>
                    User Id:
                    <input type='number' className = "input"></input>
                </div>
                <br/>
                <div>
                    Title
                    <input type='text' className = "input"></input>
                </div>
                <br/>
                <button>
                    Save
                </button>
            </div>
        )
    }
}

export default SaveComponent
