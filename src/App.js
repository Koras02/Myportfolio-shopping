import React from 'react';
import {Route , Switch, BrowserRouter } from 'react-router-dom' 
import './App.css';
import Home from './FirstPage/Home';

function App() {
  return (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} /> 
      </Switch>
    </BrowserRouter>
  </>
  )  
}

export default App;
