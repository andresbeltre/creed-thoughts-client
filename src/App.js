import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import UnderConstruction from './Components/UnderConstruction';
import RandomThought from './Components/RandomThought';

class App extends Component  {
  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={UnderConstruction} />
            <Route exact path='/thought' component={RandomThought} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
