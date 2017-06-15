export default class GCGhostsModel {


  getIntent(){
    const arr = ['ArrowUp','ArrowDown', 'ArrowLeft', 'ArrowRight']
    return arr[Math.floor(Math.random() * 4)]
  }

  setIntent(newIntent){
    this.intent = newIntent;
  }

  toString(){
    return "G"
  }
}
