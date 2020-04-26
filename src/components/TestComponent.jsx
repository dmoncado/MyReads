import React, { Component } from "react";

class TestComponent extends Component {
  state = {
	greeting: "hello world!"
  };
  
  render() {
	return (
	  <div>
		<h1> {this.state.greeting} </h1>
	  </div>
	);
  }
}

export default TestComponent;
