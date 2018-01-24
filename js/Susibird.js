function FlyingBird(maxSpeedX,x,y){
  this.maxSpeedX = maxSpeedX;
  this.posX = x;
  this.posY = y;
  this.imgs = [new Image(),new Image()];
  this.imgs[0].src = 'images/susiBird.png';
  this.imgs[1].src = 'images/explosion01.png';
  this.imgsScales = [100/161, 1];
  this.imgsResize = [110,110];
  this.width = this.imgsScales[0]*this.imgsResize[0];
  this.height = this.imgsResize[0];
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
  //this.alive = false;
  this.lifes--;
  // AÑADIR EFECTO DE QUE EL PAJARO DESAPARECE ???
}

FlyingBird.prototype.collision = function(){
  this.width = 0;
  this.height = 0; 
  this.dead();  
  this.renderCollision();
}

FlyingBird.prototype.renderCollision = function(delta){
  ctx.drawImage(this.imgs[1], this.posX, this.posY,this.imgsScales[1]*this.imgsResize[1], this.imgsResize[1]);
}

FlyingBird.prototype.render = function(delta){
  this.posY += this.speedY/1000*delta;
  this.posX += this.speedX/1000*delta;
  ctx.drawImage(this.imgs[0], this.posX, this.posY, this.width, this.height);
}

FlyingBird.prototype.revive = function() {
  //this.alive = true;
  console.log(myGame.susiBird1);
  ctx.drawImage(this.imgs[0], this.posX, this.posY, this.width, this.height);
}