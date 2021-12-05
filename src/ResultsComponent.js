import React, { Component } from "react";

export default class ResultsComponent extends Component {
  render() {
    return (
      <div id="results-component">
        <div className="my-expression">
          <p>{this.props.result}</p>
        </div>
        <div className="my-answer">
          <p>{this.props.answer}</p>
        </div>
      </div>
    );
  }
}
