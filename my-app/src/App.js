import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMaze from "./ReactMaze.js";

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
          {/*<ReactMaze board={this.props.board}
      this.props.board.map(row =>row.join(''))
                         .map(rowString => <div>{rowString}</div>)*/}
      </div>
    );
  }
}

export default App;
