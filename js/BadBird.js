// BIRDS IMAGES
var imgBadBird = new Image();   
imgBadBird.src = 'images/badBird.png';
var imgBadBirdScale = 187/100;

function BadBird(maxSpeedX, maxSpeedY, x,y){
  this.maxSpeedX = maxSpeedX;
  this.maxSpeedY = maxSpeedY;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.width = 50*imgScale;
  this.height = 50;
  this.alive = true;
}

BadBird.prototype.move = function(directionX, directionY){  
  //var directionX = +1;
  if (this.x < 60 || this.x > 385) {
    this.speedX = 0;
    directionX = -directionX;
  }
  this.speedX = this.maxSpeedX * directionX;

  if (this.y < -50 || this.y > 850) {
    this.speedY = 0;
    directionY = -directionY;
  }
  this.speedY = this.maxSpeedY * directionY;
}

BadBird.prototype.dead = function(){
  this.alive = false;
}

BadBird.prototype.collision = function(x,y){
  this.dead();  
}

BadBird.prototype.render = function(){
  this.y += this.speedY/1000*delta;
  this.x += this.speedX/1000*delta;
  if (!this.alive) {
    imgBird1.src = '';
    //console.log('badguy dead')
  }
  ctx.drawImage(imgBadBird, this.x, this.y, 93, 50);
}