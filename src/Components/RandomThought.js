import React, { Component } from "react";
import { connect } from "react-redux";

class RandomThought extends Component {
  componentDidMount() {
    //let fetchedThought = this.props.thought.thought;
    // let thoughtObj;
    // if (fetchedThought) {
    //   console.log("test");
    //   thoughtObj = JSON.parse(fetchedThought);
    //   console.log(thoughtObj);
    // }
    // console.log(thoughtObj);
    //console.log(fetchedThought);
    // console.log(thoughtObj);
    // console.log(JSON.stringify(thoughtObj));
  }

  render() {
    let fetchedThought;
    if (this.props.thought.thought !== undefined) {
      fetchedThought = this.props.thought.thought;
      console.log(fetchedThought);
      let thoughtObj = JSON.parse(fetchedThought);
      console.log(thoughtObj);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>Hello, World!</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    thought: state.thought
  };
};

export default connect(mapStateToProps)(RandomThought);
