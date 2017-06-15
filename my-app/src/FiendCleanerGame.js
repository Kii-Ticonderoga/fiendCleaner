import FiendCleanerModel from './FiendCleanerModel'

const board = "xxxxxxxxxxxxxxxxxxxxx\n \
               x...x.....x.....x...x\n \
               x.x..x.x...x.x...x..x\n \
               x.x.....xxO...x.....x\n \
               x.x...x..x.x.x...x..x\n \
               x.x...x....x...xxx..x\n \
               x....xxx............x\n \
               xx..x....x.x...x....x\n \
               x.....x..x.x.x...x..x\n \
               x.xx..x....x...x....x\n \
               x.....xx.........xx.x\n \
               xx..x....x.x...x....x\n \
               xxxxxxxxxxxxxxxxxxxxx\n"
const _ = require('lodash');

class FiendCleanerGame {
	constructor(draw){
		this.points = 0
		const rows = board.split('\n')
		                  .map(str => str.trim())
		                  .filter(str => str !== "")
		this.board = rows.map(row => row.split("")
									   .map(str => this._charToClass(str)))
    const checkPos = () => {
       const up = this.board[rows[-1]]
       this.board.map((row,y) => {
         const living =  row.map((_, x) => x)
                   .filter(x => this.board[y][x].getIntent)
                   .map((x,i,arr) =>{
                     this.resolve(x, y)
                   })
       })
       draw(this.board)
    }
    setInterval(checkPos,100);
	}


	_charToClass(ch){
		return ch === 'O' ? new FiendCleanerModel() : ch
	}

  resolve(x,y){
      const intent = this.board[y][x].getIntent()
      if(this.spaceEmpty(x,y,intent)){
        this.mover(x,y,intent)
      }
  }

  // string directions will be changed to event Keycodes later
  spaceEmpty(x,y,intent){
    switch (intent) {
      case "ArrowUp":
        return this.board[y - 1][x] != "x"

      case "ArrowDown":
        return this.board[y + 1][x] != "x"

      case "ArrowLeft":
        return this.board[y][x - 1] != "x"

      case "ArrowRight":
        return this.board[y][x + 1] != "x"


    }
  }

  mover(x, y, intent){
    switch (intent){
      case "ArrowUp":
        this.board[y-1][x] = this.board[y][x]
        this.board[y][x] = " "
        break;
      case "ArrowDown":
        this.board[y+1][x] = this.board[y][x]
        this.board[y][x] = " "
        break;
      case "ArrowLeft":
        this.board[y][x-1] = this.board[y][x]
        this.board[y][x] = " "
        break;
      case "ArrowRight":
        this.board[y][x+1] = this.board[y][x]
        this.board[y][x] = " "
        break;
    }
  }
}

export default FiendCleanerGame;
