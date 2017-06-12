const board = "xxxxxxxxxxxxxx\n \
               x............x\n \
               x.x.x.xOx..x.x\n \
               x............x\n \
               x..xxxxx.....x\n \
               xxxxxxxxxxxxxx\n"
const _ = require('lodash');

class FiendCleaner {

  getIntent(){
    return ['up','down', 'left', 'right'][Math.floor(Math.random() * 4)]
    //return this.intent;
  }

  setIntent(newIntent){
    this.intent = newIntent;
  }

  toString(){
    return 'O'
  }
}




class Maze {
	constructor(){
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
                    console.log(arr)
                     this.resolve(x, y)
                   })
       })
       this.board.map(row => console.log(row.join('')));
       console.log("")
    }
    setInterval(checkPos,1000);
	}


	_charToClass(ch){
		return ch === 'O' ? new FiendCleaner() : ch
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
      case "up":
        return this.board[y - 1][x] != "x"

      case "down":
        return this.board[y + 1][x] != "x"

      case "left":
        return this.board[y][x - 1] != "x"

      case "right":
        return this.board[y][x + 1] != "x"


    }
  }

  mover(x, y, intent){
    console.log(x,y,intent)
    switch (intent){
      case "up":
        this.board[y-1][x] = this.board[y][x]
        this.board[y][x] = " "
        break;
      case "down":
        this.board[y+1][x] = this.board[y][x]
        this.board[y][x] = " "
        break;
      case "left":
        this.board[y][x-1] = this.board[y][x]
        this.board[y][x] = " "
        break;
      case "right":
        this.board[y][x+1] = this.board[y][x]
        this.board[y][x] = " "
        break;
    }
  }
}
const maze = new Maze()
