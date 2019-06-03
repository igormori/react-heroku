import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Portal from './portal'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch> 
            <Route path="/user" component={Portal}/>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
