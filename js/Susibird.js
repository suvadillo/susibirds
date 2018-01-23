// BIRDS IMAGES
// var imgBird1 = new Image();   
// imgBird1.src = 'images/susiBird.png';
// var imgScale = 100/161;

// var imgExplosion = 'images/explosion01.png';
// var imgExplScale = 1;

// this.images = [imgBird1,2] CAMBIA ESTO!!!!!!!!

function FlyingBird(maxSpeedX,x,y,i){
  this.maxSpeedX = maxSpeedX;
  this.posX = x;
  this.posY = y;
  this.imgBird = new Image();
  this.indexImgArr = i;
  this.imgArr = [
    {src: 'images/susiBird.png', scale: 100/161, resize: 110},
    {src: 'images/explosion01.png', scale: 1, resize: 80}];
  this.imgBird.src = this.imgArr[i].src;
  this.imgScale = this.imgArr[i].scale;
  this.width = this.imgArr[i].resize*this.imgScale;
  this.height = this.imgArr[i].resize;
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
    //explosion(this.posX, this.posY);
    this.imgBird.src = 'images/explosion01.png';
    this.imgScale = 1;
    this.width = 80;
    this.height = 80;
    console.log(this.imgBird.src);
    ctx.drawImage(this.imgBird, this.posX, this.posY, 0, 0);  
  }
  ctx.drawImage(this.imgBird, this.posX, this.posY, this.width, this.height);
}

// function explosion (x,y) {
//   var explosion = new FlyingBird (0,x,y,1);
//   console.log(explosion.imgBird.src);
//   ctx.drawImage(explosion.imgBird, explosion.posX, explosion.posY, explosion.width, explosion.height);
// }