function BadBird(speed, x, y, i){
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.imgBadBird = new Image();
  this.indexImgArr = i;
  this.imgArr = [
    {src: 'images/badGuy.gif', scale: 187/100, resize: 50}];
  this.imgBadBird.src = this.imgArr[i].src;
  this.imgScale = this.imgArr[i].scale;
  this.width = this.imgArr[i].resize*this.imgScale;
  this.height = this.imgArr[i].resize;
  this.alive = true;
  this.directionR = true;
}

BadBird.prototype.moveD = function () {
  if (this.y >= 1700) this.y = 0;
  this.y += this.speed/1000*delta;
}

BadBird.prototype.moveR = function(){
  this.moveD();
  if (this.canMoveR())this.x += this.speed/1000*delta;
  else this.directionR = false;
}
BadBird.prototype.moveL = function(){
  this.moveD();
  if (this.canMoveL())this.x -= this.speed/1000*delta;
  else this.directionR = true;
}
BadBird.prototype.canMoveR = function(){  
  return (this.x >= 385) ? false : true;
}
BadBird.prototype.canMoveL = function(){  
  return (this.x <= 60) ? false : true;
}


// BadBird.prototype.dead = function(){
//   this.alive = false;
// }

// BadBird.prototype.collision = function(x,y){
//   this.dead();  
// }

BadBird.prototype.render = function(){
  if (!this.alive) {
    this.imgBadBird.src = '';
    console.log('badguy dead');
  }
  ctx.drawImage(this.imgBadBird, this.x, this.y, this.width , this.height);
}