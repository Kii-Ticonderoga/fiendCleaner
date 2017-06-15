import React, { Component } from "react";
import FiendCleanerModel from './FiendCleanerModel'
import FiendCleanerView from './FiendCleanerView'

class ReactMaze extends Component{
  constructor(props){
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
///We are become God all your fiends belong to us
//Purpose: Map through the maze and get the coordinates of each piece
          //and then "creates" a block
  creationCoord(arr){
    let newCoord =[];

    for (var i =0; i <= arr.lengh; i++ ){
      for ( var j =0; j <= arr[i].length; j++){
        newCoord = this.state.coordinates.concat({
          x:j,
          y:i,
          value: arr[i][j],
          isEaten: false
        });
      }
    }

  }
  _charToClass(ch){
    //return ch === 'O' ? new FiendCleaner() : ch
  }

  handleKeyDown(event){
    this.character.setIntent(event.key)
  }
  render(){
    // const coordinate = (arr)

    // let elements = this.state.coordinates.map(value => {
    //    if(this.state.coordinates.value == "x"){
    //      return <Wall x={this.state.coordinates.x} y = {this.state.coordinates.y}/>
    //    } else if (this.state.coordinates.value == "."){
    //      return <Food x={this.state.coordinates.x} y = {this.state.coordinates.y}/>
    //    }
    // })
    const blockWidth = Math.floor(this.state.width / this.props.board[0].length)
    const blockHeight = Math.floor(this.state.height / this.props.board.length)
    const boardComps = this.props.board.map((row, rowIndex) =>
                                            row.map((col, columnIndex) =>{
                                                if(col === 'x'){
                                                  return <Wall x={columnIndex} y={rowIndex} blockWidth={blockWidth} blockHeight={blockHeight}/>
                                                } else if(col === '.') {
                                                  return <Food x={columnIndex} y={rowIndex} blockWidth={blockWidth} blockHeight={blockHeight}/>
                                               } else if (col instanceof FiendCleanerModel) {
                                                  this.character = col
                                                  return <FiendCleanerView x={columnIndex} y={rowIndex} blockWidth={blockWidth} blockHeight={blockHeight}/>
                                                } else {
                                                  return <span></span>
                                                }
                                            }))
    return (
      //function to create walls
      <div tabIndex="0" onKeyDown={this.handleKeyDown.bind(this)} >
        {boardComps}
      </div>
    )
  }

}

class Food extends Component{

  render(){
    const {x, y, blockWidth, blockHeight} = this.props
    const mazeFood = {
      width:(this.props.blockWidth /3) + 'px',
      height: (this.props.blockHeight /3) + 'px',
      backgroundColor: "red",
      borderRadius:"50%",
      zIndex:"2",
      position:"absolute",
      top: (blockHeight * y + blockHeight/3) + 'px',
      left:(blockWidth * x + blockWidth/3) + 'px',

    }

    return <div  style ={mazeFood}></div>
  }
}

class Wall extends Component{

  render(){
    const {x, y, blockWidth, blockHeight} = this.props
    const mazeBlock = {
      width: blockWidth + 'px',
      height: blockHeight + 'px',
      backgroundColor: 'rgb(19, 26, 113)',
      zIndex:"2",
      position:"absolute",
      top: (blockHeight * y) + 'px',
      left: (blockWidth * x) + 'px',

    }
    return   <div style ={mazeBlock}></div>
  }
}

export default ReactMaze;
