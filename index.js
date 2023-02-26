const GuessingGame = require('./src/guessing-game.js');
window.game = new GuessingGame();

// class GuessingGame extends GuessingGame{
//    constructor(res, min, max){
//       res,
//       min, 
//       max
//    }

//    setRange(min, max){
//       this.min = min
//       this.max = max
//    }

//    guess(){
//       let arr = []
//       for (let index = this.min; index <= this.max; index++) {
//          arr.push(index)
//       }
//       this.res = arr[Math.round((arr.length - 1) / 2)]
//       return this.res
//    }

//    lower(){
//      this.max = this.res
//    }

//    greater(){
//      this.min = this.res
//    }
// }
