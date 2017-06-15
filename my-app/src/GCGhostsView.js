import React, { Component } from 'react';

class GCGhostsView extends Component {


  render(){
    const {x,y, blockWidth, blockHeight} = this.props
    const ghostSize = Math.round((blockWidth + blockHeight)/ 4)
    const ghostStyle = {
      boxShadow: [
        "0 0 0 1em red",
        "0 1em 0 1em red",
        "-2.5em 1.5em 0 .5em red",
        "2.5em 1.5em 0 .5em red",
        "-3em -3em 0 0 red",
        "3em -3em 0 0 red",
        "-2em -2em 0 0 red",
        "2em -2em 0 0 red",
        "-3em -1em 0 0 red",
        "-2em -1em 0 0 red",
        "2em -1em 0 0 red",
        "3em -1em 0 0 red",
        "-4em 0 0 0 red",
        "-3em 0 0 0 red",
        "3em 0 0 0 red",
        "4em 0 0 0 red",
        "-5em 1em 0 0 red",
        "-4em 1em 0 0 red",
        "4em 1em 0 0 red",
        "5em 1em 0 0 red",
        "-5em 2em 0 0 red",
        "5em 2em 0 0 red",
        "-5em 3em 0 0 red",
        "-3em 3em 0 0 red",
        "3em 3em 0 0 red",
        "5em 3em 0 0 red",
        "-2em 4em 0 0 red",
        "-1em 4em 0 0 red",
        "1em 4em 0 0 red",
        "2em 4em 0 0 red"],
      background: "red",
      width: "1em",
      height: "1em",
      overflow: "hidden",
      margin: "50px 0 70px 65px",
      position:"absolute",
      top:(blockWidth * y) + 'px',
      left:(blockWidth * x) + 'px'
    }

    return(<div style={ghostStyle}></div>)
  }

}

export default GCGhostsView;
