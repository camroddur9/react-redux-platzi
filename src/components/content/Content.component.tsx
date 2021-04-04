import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import * as userActions from './../../actions/usersActions'

import icons from './../../utils/import.icons'

const ContentComponent = (props: any) => {

  
    const handleShowRows = () => 
      props.users.map((usuario: any, key: number) => (
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
          <td className = "show-btns-container">
            <Link to = { `/publications/${key}`}>
              <img alt = "show-btn" className = "show-btn" src = {icons['show']}></img>
            </Link>
          </td>
        </tr>
      )
    )

    return(
        <table className = "tabla">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                User
              </th>
              <th>
                Email
              </th>
              <th>
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {
              handleShowRows()
            }
          </tbody>
        </table>
    )
}

const mapStateToProps = (reducers: any) => {
  return( reducers.userReducer)
};

export default connect(mapStateToProps, userActions)(ContentComponent);