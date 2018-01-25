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
  this.badGuy;
}

Game.prototype.startGame = function() {
  this.background1 = new Background();
  this.susiBird1 = new FlyingBird(10,250,250,0);
  this.createArrRockets(this.numberOfRockets);
  this.badGuy = new BadBird(10,80,0,0);
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

Game.prototype.checkCollision = function () {
  for (var i = 0; i < myGame.arrRockets.length; i++) {
    if (
      (this.arrRockets[i].posX <
        this.susiBird1.posX + this.susiBird1.width &&
        this.arrRockets[i].posX + this.arrRockets[i].width >
          this.susiBird1.posX &&
        this.arrRockets[i].posY <
          this.susiBird1.posY + this.susiBird1.height &&
        this.arrRockets[i].posY + this.arrRockets[i].height >
          this.susiBird1.posY) ||
      (this.badGuy.x < this.susiBird1.posX + this.susiBird1.width - 50 &&
        this.badGuy.x + this.badGuy.width - 25 > this.susiBird1.posX &&
        this.badGuy.y <
          this.susiBird1.posY + this.susiBird1.height - 80 &&
        this.badGuy.y + this.badGuy.height - 30 > this.susiBird1.posY)
    ) {
      console.log("Colisión");
    }
  }
}