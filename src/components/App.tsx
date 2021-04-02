import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './../Styles/style.css';

import Menu from './menu';
import Users from './users/index'

const Tareas = () => 
  <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className = "margen">
      <Route exact path='/' component = {Users} />
      <Route exact path='/tareas' component = {Tareas}/>
    </div>
  </BrowserRouter>
);

export default App