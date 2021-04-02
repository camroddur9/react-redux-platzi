import React from 'react';
import { Link } from 'react-router-dom'

interface Props{

}

const Menu = (props: Props) => (
    <nav id = "menu">
        <Link to = "/">
            Users
        </Link>
        <Link to = "/tareas">
            Task
        </Link>
    </nav>
);

export default Menu;