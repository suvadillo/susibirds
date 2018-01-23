function Game(){
  this.score = 0;
  this.level = 1;
  this.isGameRunning=true;
  this.arrRockets=[];
  this.numberOfRockets = 8;
}

Game.prototype.gameOver = function() {

}

Game.prototype.startGame = function() {
    // this.background1 = new Background();
    // var susiBird1 = new FlyingBird(100,250,250);
    this.createArrRockets(this.numberOfRockets);
}


Game.prototype.createArrRockets = function(numRockets){
  for (var i = 0; i < numRockets; i++) {
    var x,y,z;
    if (i % 2 === 0) {x = -200;} else {x = -250;}
    y = (Math.floor(Math.random()*5)*75)+100;
    z = (Math.floor(Math.random()*3)*300)+800;
    var rocket = new Rocket(x,y,z)
    this.arrRockets.push(rocket);
  }
}
