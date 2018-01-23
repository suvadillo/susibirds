// BIRDS IMAGES
var imgBadBird = new Image();   
imgBadBird.src = 'images/badBird.png';
var imgBadBirdScale = 187/100;

function BadBird(speedX, speedY, x,y){
  this.speedX = 50;
  this.speedY = 50;
  this.x = x;
  this.y = y;
  this.width = 50*imgScale;
  this.height = 50;
  this.alive = true;
}

BadBird.prototype.move = function(directionX, directionY){  
  if (this.x < 60 || this.x > 385) {
    directionX = -directionX;
  }
  this.x += this.speedX * directionX;

  if (this.y < -50 || this.y > 850) {
    directionY = -directionY;
  }
  this.y += this.speedY * directionY;
}

BadBird.prototype.stop = function(){
  this.speedX = 0;
  this.speedY = 0;
}

BadBird.prototype.dead = function(){
  this.alive = false;
}

BadBird.prototype.collision = function(x,y){
  this.dead();  
}

BadBird.prototype.render = function(){
  // this.y += this.speedY/1000*delta;
  // this.x += this.speedX/1000*delta;
  // console.log('entra')
  // if (!this.alive) {
  //   imgBird1.src = '';
  //   //console.log('badguy dead')
  // }
  ctx.drawImage(imgBadBird, this.x, this.y, this.width, this.height);
}