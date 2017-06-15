export default class FiendCleanerModel {


  getIntent(){
    //return ['ArrowUp','ArrowDown', 'ArrowLeft', 'ArrowRight'][Math.floor(Math.random() * 4)]
    return this.intent;
  }

  setIntent(newIntent){
    this.intent = newIntent;
  }

  toString(){
    return 'O'
  }
}
