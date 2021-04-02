import React from 'react';
import { connect } from 'react-redux';

import * as userActions from './../../actions/usersActions'

import ContentComponent from './../content/Content.component'
import SpinnerComponent from './../general/Spinner.Component'

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

  handleShowRows = () => (
    this.props.usuarios.map((usuario: any) => (
      <tr key = {usuario.id}>
        <td>
          {usuario.name}
        </td>
        <td>
          {usuario.username}
        </td>
        <td>
          {usuario.email}
        </td>
        <td>
          {usuario.website}
        </td>
      </tr>
    ))
  )

  render(){
    console.log(this.props.loadingUsers)
    return(
      <div>
        {this.props.loadingUsers ? 
        <SpinnerComponent/>:
        <ContentComponent
          handleShowRows = {this.handleShowRows()}
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