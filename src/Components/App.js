import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../App.css';

//redux imnport statements
import { connect } from "react-redux";
import * as actions from "../actions";

//Components
import RandomThought from './RandomThought';
import UnderConstruction from './UnderConstruction';

class App extends Component  {
  async componentDidMount() {
    //await this.props.fetchThought();
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={UnderConstruction} />
            <Route exact path='/thought' component={RandomThought} props={this.props} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    thought: state.thought
  };
};

export default connect(mapStateToProps, actions)(App);
