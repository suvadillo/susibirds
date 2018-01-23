// var imgBadBird = new Image();   
// imgBadBird.src = 'images/badBird.png';
// var imgBadBirdScale = 187/100;

function BadBird(maxSpeedX, maxSpeedY, x, y, i){
  this.maxSpeedX = maxSpeedX;
  this.maxSpeedY = maxSpeedY;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.imgBadBird = new Image();
  this.indexImgArr = i;
  this.imgArr = [
    {src: 'images/badBird.png', scale: 187/100, resize: 50}];
  this.imgBadBird.src = this.imgArr[i].src;
  this.imgScale = this.imgArr[i].scale;
  this.width = this.imgArr[i].resize*this.imgScale;
  this.height = this.imgArr[i].resize;
  this.alive = true;
}

BadBird.prototype.move = function(directionX, directionY){  
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
    this.imgBadBird.src = '';
    console.log('badguy dead');
  }
  ctx.drawImage(this.imgBadBird, this.x, this.y, this.width , this.height);
}