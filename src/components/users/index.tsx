import React from 'react';
import { connect } from 'react-redux';

import * as userActions from './../../actions/usersActions'

import ContentComponent from './../content/Content.component'
import SpinnerComponent from './../general/Spinner.Component'
import FatalComponent from './../general/Fatal.Component'

import icons from './../../utils/import.icons'

interface Props{
  
}
interface Actions{
  getAll?: any
  usuarios?: any
  loadingUsers?: boolean
  error?: string
}

class Users extends React.Component <Actions, Props> {

  componentDidMount() {
    this.props.getAll()
  }

  render(){
    console.log(this.props.error === "")
    return(
      <div>
        {this.props.loadingUsers ? 
          <SpinnerComponent/>:
          this.props.error === "" ?
            <ContentComponent
            />:
            <FatalComponent
              errorMessage = {this.props.error}
            />
        }
      </div>
    )
  }
}

const mapStateToProps = (reducers: any) => {
  return( reducers.userReducer)
};

export default connect(mapStateToProps, userActions)(Users);