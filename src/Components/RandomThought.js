import React, { Component } from 'react';
import { connect } from "react-redux";

class RandomThought extends Component {
  render() {
    let fetchedThought = this.props.thought.thought
    console.log(fetchedThought) 

    for(var x in fetchedThought){
      console.log(x)
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>Hello, World!</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    thought: state.thought
  };
};

export default connect(mapStateToProps)(RandomThought);
