function Background() {
  this.speed = -5;
  this.x = 0;
  this.y = 0;
  this.numLoops = 0;
  this.imgBgLevel1 = new Image();
  this.imgBgLevel1.src = 'images/bg-level1.jpg';
}
//falta delta o quitalo
Background.prototype.render = function(delta){
  if (this.y < -800) { 
    this.y = 9;
    this.numLoops++;
  }
  if (this.y < 9) {
    ctx.drawImage(this.imgBgLevel1, this.x , this.y + 809 - 1, 512, 809); 
  }
  ctx.drawImage(this.imgBgLevel1, this.x, this.y, 512, 809);  
  this.y += this.speed;
}
Background.prototype.renderScore = function(numLifes, score){
  ctx.font = "24px Arial";
  var txtLifes ="Lifes: " + numLifes;
  ctx.fillText(txtLifes,80,50);
  var txtScore ="Score: " + score;
  ctx.fillText(txtScore,300,50);
}

Background.prototype.stop = function() {
  this.speed = 0;
}
