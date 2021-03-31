import React from 'react';
import { Link } from 'react-router-dom'

interface Props{

}

const Menu = (props: Props) => (
    <nav id = "menu">
        <Link to = "/">
            Usuarios
        </Link>
        <Link to = "/tareas">
            Tareas
        </Link>
    </nav>
);

export default Menu;