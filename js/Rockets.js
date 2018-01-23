// BIRDS IMAGES
var imgRocket = new Image();   
imgRocket.src = 'images/rocket.png';
var scale = 75/178;

function Rocket(speedY,x,y){
  this.posX = x;
  this.posY = y;
  this.speedY = speedY;
  this.width = 50*scale;
  this.height = 50;
  this.alive = true;
}

Rocket.prototype.stop = function(){
  this.speedY = 0;
}

Rocket.prototype.collision = function(arr){
  this.stop();
  this.alive = false;
  for (var i = 0 ; i < arr.length; i++) {
    arr[i].stop();
  }
}

Rocket.prototype.render = function(delta){
  this.posY += this.speedY/1000*delta;
  if (this.posY < -100) {
  this.posY = 800;
  } 
  ctx.drawImage(imgRocket, this.posX, this.posY, this.width, this.height);
}