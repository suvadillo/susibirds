// BIRDS IMAGES
var imgBird1 = new Image();   
imgBird1.src = 'images/susiBird.png';
var imgScale = 100/161;

var imgExplosion = 'images/explosion01.png';
var imgExplScale = 1;

// this.images = [imgBird1,2] CAMBIA ESTO!!!!!!!!

function FlyingBird(maxSpeedX,x,y){
  this.maxSpeedX = maxSpeedX;
  this.posX = x;
  this.posY = y;
  this.width = 110*imgScale;
  this.height = 110;
  this.speedX = 0;
  this.speedY = 0;
  this.lifes = 3;
  this.health = 1;
  this.alive = true;
}

FlyingBird.prototype.moveX = function(direction){
  if (this.posX < 60) {
    this.speedX = 0;
    this.posX = 60;
  } else if (this.posX > 385) {
    this.speedX = 0;
    this.posX = 385;
  } else {
    this.speedX = this.maxSpeedX * direction;
  }
}

FlyingBird.prototype.moveY = function(){
  this.speedY = this.maxSpeedY;
}

FlyingBird.prototype.stop = function(){
  this.speedX = 0;
  this.speedY = 0;
}

FlyingBird.prototype.dead = function(){
  this.alive = false;
  this.lifes--;
  // AÑADIR EFECTO DE QUE EL PAJARO DESAPARECE ???
}

FlyingBird.prototype.collision = function(){
  this.width = 0;
  this.height = 0; 
  this.dead();  
}


FlyingBird.prototype.render = function(delta){
  this.posY += this.speedY/1000*delta;
  this.posX += this.speedX/1000*delta;
  if (!this.alive) {
    imgBird1.src = imgExplosion;
    ctx.drawImage(imgBird1, this.posX, this.posY, imgExplScale*80, 80);  
  }
  ctx.drawImage(imgBird1, this.posX, this.posY, this.width, this.height);
}