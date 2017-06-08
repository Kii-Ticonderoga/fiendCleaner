const board = "xxxxxxxxxxxxx\n 
               x...........x\n
               x.x.x.xOx.x.x\n
               x...........x\n
         	   xxxxxxxxxxxxx\n" 
const _ = require('lodash');

class FiendCleaner(xPos,yPos) {
	constructor (){
		this.xPos= xPos
		this.yPos=yPos
	}


}

class Maze {
	constructor(){
		this.points = 0
		const rows = board.split('\n')
		const trimmedRows  = rows.map(str => str.trim())
		const filterRows = trimmedRows.filter(str => str !== "")
		this.board = rows.map((row, rowIndex) => row.split("")
									    .map((str, colIndex) => 
									    	this._charToClass(str,rowIndex, colIndex)))
		this.sprites = _.flatten(this.board)
						.filter(col => typeof col !== 'string'))
		setInterval(this._checkPos,100);
	}


	_charToClass(ch, xPos, yPos){
		return ch === 'O' ? new FiendCleaner(xPos,yPos) : ch
	}

	_checkPos(){
		setInterval()
	}
}