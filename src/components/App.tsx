import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './../Styles/style.css';

import Menu from './menu';
import Users from './users/index'
import Publications from './Publications/index'
import Tasks from './Tasks/index'
import SaveTasksComponents from './Tasks/Save.component'

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className = "margen">
      <Route exact path='/' component = {Users} />
      <Route exact path='/tasks' component = {Tasks}/>
      <Route exact path='/publications/:key' component = {Publications}/>
      <Route exact path='/tasks/save' component = {SaveTasksComponents}/>
    </div>
  </BrowserRouter>
);

export default App