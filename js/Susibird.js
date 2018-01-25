function FlyingBird(maxSpeedX,x,y){
  this.maxSpeedX = maxSpeedX;
  this.maxSpeedY = 50;
  this.posX = x;
  this.posY = y;
  this.imgs = [new Image(),new Image(),new Image(),new Image(),new Image()];
  this.imgs[0].src = 'images/susiBird.png';
  this.imgs[1].src = 'images/explosion01.png';
  this.imgs[2].src = 'images/susiBird2Balloons.png';
  this.imgs[3].src = 'images/susiBird1Balloon.png';
  this.imgs[4].src = 'images/susiBird0Balloons.png';
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

FlyingBird.prototype.moveY = function(direction){
  if (this.posY < 0) {
    this.speedY = 0;
  } else if (this.posY > 800) {
    this.speedY = 0;
  } else {
    this.speedY = this.maxSpeedY * direction;
  }
}

FlyingBird.prototype.stop = function(){
  this.speedX = 0;
  this.speedY = 0;
}

FlyingBird.prototype.collision = function(){
  this.lifes--; 
  this.renderCollision();
}

FlyingBird.prototype.renderCollision = function(){
  myGame.ctx.drawImage(this.imgs[1], this.posX, this.posY,this.imgsScales[1]*this.imgsResize[1], this.imgsResize[1]);
}

FlyingBird.prototype.render = function(){
  this.posY += this.speedY/1000*myGame.delta;
  this.posX += this.speedX/1000*myGame.delta;
  myGame.ctx.drawImage(this.imgs[0], this.posX, this.posY, this.width, this.height);
}

FlyingBird.prototype.revive = function() {
  //this.alive = true;
  console.log(myGame.susiBird1);
  myGame.ctx.drawImage(this.imgs[0], this.posX, this.posY, this.width, this.height);
}