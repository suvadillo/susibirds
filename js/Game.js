function Game(){
  this.score = 0;
  this.level = 1;
  this.background1;
  this.arrRockets = [];
  this.numberOfRockets = 8;
  this.susiBird1;
  this.badGuy;
  this.isGameRunning = true;
}

Game.prototype.gameOver = function() {

}

Game.prototype.startGame = function() {
  this.background1 = new Background();
  this.susiBird1 = new FlyingBird(50,250,250,0);
  this.createArrRockets(this.numberOfRockets);
  this.badGuy = new BadBird(10,10,60,0,0);
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
