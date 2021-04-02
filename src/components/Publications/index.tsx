import React from 'react';

interface Props {
    match?: any
}

class Publications extends React.Component<Props> {
    render(){
        console.log(this.props)
        return(
            
            <div>
                {this.props.match.params.key}
            </div>
        )
    }
}

export default Publications