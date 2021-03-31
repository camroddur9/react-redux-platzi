import React from 'react';
import './../../Styles/style.css';
import  axios from 'axios';

interface Props{

}

interface State{
  usuarios?: any
}



class Users extends React.Component<Props,State> {

  constructor(props: Props){
    super(props);
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      usuarios: resp.data
    });
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuario: any) => (
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
    return(
      <div>
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
              this.ponerFilas()
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Users