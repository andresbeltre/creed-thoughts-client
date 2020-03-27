import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchThought } from "../actions";

class RandomThought extends Component {
  componentDidMount() {

  }

  render() {
    let fetchedThought;
    if (this.props.thought !== undefined) {
      fetchedThought = this.props.thought;
      console.log({fetchedThought});
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>Hello, World!</p>
            <p>{fetchedThought.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("give me this money bitch", state)
  return {
    thought: state.thoughtReducer.thought
  };
};

export default connect(mapStateToProps)(RandomThought);
