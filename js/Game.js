function Game(){
  this.cv = document.getElementById('canvas');
  this.ctx = this.cv.getContext('2d');
  this.fps = 60;
  this.now = Date.now();    
  this.then = 0;
  this.delta = 0;
  this.score = 0;
  this.level = 1;
  this.background1;
  this.arrRockets = [];
  this.numberOfRockets = 8;
  this.susiBird1;
  this.susiBird2;
  // this.susiBird3;
  // this.susiBirds = [];
  this.badGuy;
  this.isGameRunning = true;
}

Game.prototype.gameOver = function() {

}

Game.prototype.startGame = function() {
  this.background1 = new Background();
  this.susiBird1 = new FlyingBird(50,250,250,0);
  this.createArrRockets(this.numberOfRockets);
  this.badGuy = new BadBird(10,80,0,0);
  // this.reverseBadGuy = new BadBird(-10,385,-850,0);
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

Game.prototype.createSusiBird = function() {
  this.susiBird2 = new FlyingBird(50,250,250,0);
}
