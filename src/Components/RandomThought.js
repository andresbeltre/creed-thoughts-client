import React, { Component } from "react"
import { connect } from "react-redux"

class RandomThought extends Component {
  componentDidMount() {}

  render() {
    let fetchedThought
    if (this.props.thought !== undefined) {
      fetchedThought = this.props.thought
      console.log({ fetchedThought })
    }

    let content = fetchedThought.content.split("\\n\\n").map((text, i) => i ? [<br/>,<br/>, text] : text);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div>{fetchedThought.date.date}</div>
            <div>{content}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    thought: state.thought.thought
  }
}

export default connect(mapStateToProps)(RandomThought)
