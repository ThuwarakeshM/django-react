import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    console.log('Im running');

    return <h1>Hello World</h1>
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));