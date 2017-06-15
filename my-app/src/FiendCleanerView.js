import React, { Component } from 'react';

class FiendCleanerView extends Component {


  render(){
    const {x, y, blockWidth, blockHeight} = this.props
    const fiendSize = Math.round((blockWidth + blockHeight)/4)
    const fiendStyle = {
      width: "0px",
      height: "0px",
      borderRight: fiendSize + "px solid transparent",
      borderTop: fiendSize + "px solid orange",
      borderLeft: fiendSize + "px solid orange",
      borderBottom: fiendSize + "px solid orange",
      borderTopLeftRadius: fiendSize + "px",
      borderTopRightRadius: fiendSize + "px",
      borderBottomLeftRadius: fiendSize + "px",
      borderBottomRightRadius: fiendSize + "px",
      zIndex:"1",
      position: 'absolute',
      top: (blockHeight * y) + 'px',
      left: (blockWidth * x) + 'px'
    }
    return (<div style={fiendStyle}></div>)
  }
}

export default FiendCleanerView;
