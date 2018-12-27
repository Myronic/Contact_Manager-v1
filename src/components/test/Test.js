import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  /*
  componentWillMount() {
    console.log("component willMount");
  }

  componentDidUpdate() {
    console.log("component didUpdate");
  }

  componentWillUpdate() {
    console.log("component WillUpdate");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps");
  }
  */

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1> <hr />
        <h1>{body}</h1>
      </div>
    );
  }
}
export default Test;
