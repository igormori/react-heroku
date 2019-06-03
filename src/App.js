import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch> 
            <Route path="/user" component={Userportal}/>
            <Route path="/" component={Initialportal}/>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
