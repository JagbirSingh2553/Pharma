import React from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';

const App = () => {
    return(
    <BrowserRouter>
      <React.Fragment>
          <Switch>
          <Home/>
          </Switch>         
      </React.Fragment>
    </BrowserRouter>
    )
}

export default App;