// BIRDS IMAGES
var imgRocket = new Image();   
imgRocket.src = 'images/rocket.png';
var scale = 75/178;

function Rocket(speedY,x,y){
  this.posX = x;
  this.posY = y;
  // this.globalY = 0;
  this.speedY = speedY;
  this.width = 50*scale;
  this.height = 50;
  this.alive = true;
}

Rocket.prototype.stop = function(){
  this.speedY = 0;
}

Rocket.prototype.collision = function(){
  this.stop();
  this.alive = false;
  // VER SI HAY QUE AÑADIR ALGO MÁS ???
}

Rocket.prototype.render = function(myGame.delta){
  this.posY += this.speedY/1000*myGame.delta;
  if (this.posY < -100) {
  this.posY = 800;
  } 
  if (this.alive) {
    myGame.ctx.drawImage(imgRocket, this.posX, this.posY, this.width, this.height);
  } else {
    return;
    //myGame.ctx.drawImage(imgRocket, this.posX, this.posY, 0, 0);
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