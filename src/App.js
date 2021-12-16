import React from 'react';
import  './App.css';
import './index';

import Home from './pages/Home';
import {Rooms} from './pages/Rooms';
import SingleRooms from './pages/SingleRooms';
import Error from './pages/Error';
import {Route, Switch} from "react-router-dom";

import './component/Navbar';
import Navbar from './component/Navbar';

function App() {
  return (
  <>
  <Navbar/>
  <Switch>
  <Route exact path="/" component={Home} exact/>
  <Route exact path="/rooms/" component={Rooms} exact/>
  <Route exact path="/rooms/:slug" component={SingleRooms} exact/>
  <Route component={Error} />
  </Switch>
  </>
  );
}

export default App;
