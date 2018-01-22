function Game(){
  this.score = 0;
  this.level = 1;
}

Game.prototype.gameOver = function() {

}

Game.prototype.startGame = function() {
  if (this.level === 1) {
    var background1 = new Background();

    var susiBird1 = new FlyingBird(100,250,250);

    var arrRockets = [
      new Rocket(-200,175,800),
      new Rocket(-250,250,800),
      new Rocket(-200,400,800),
      new Rocket(-250,100,1100),
      new Rocket(-200,325,1100),
      new Rocket(-250,100,1400),
      new Rocket(-200,175,1400),
      new Rocket(-250,325,1400)
    ];
  }
}

function createArrRockets(numRockets){
  for (var i = 0; i < numRockets; i++) {
    var x,y,z;
    if (i % 2 === 0) {x = -200;} else {x = -250;}
    y = (Math.floor(Math.random()*5)*75)+100;
    z = (Math.floor(Math.random()*3)*300)+800;
    arr.push(new Rocket(x,y,z));
  }
  return arr;
}