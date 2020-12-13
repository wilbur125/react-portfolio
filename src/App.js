import './App.css';
import React from 'react';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
      <Switch>
          <Route  path='/' component={About} exact/>
          <Route  path='/portfolio' component={Portfolio} />
      </Switch>

    );

}


export default App;
