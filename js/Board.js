function Background() {
  this.speed = -5;
  this.x = 0;
  this.y = 0;
  this.width = 512;
  this.height = 809;
  this.numLoops = 0;
  this.imgBgLevel1 = new Image();
  this.imgBgLevel1.src = 'images/bg-level1.jpg';
}

Background.prototype.render = function(){
  if (this.y < -800) { 
    this.y = 9;
    this.numLoops++;
  }
  if (this.y < 9) {
    myGame.ctx.drawImage(this.imgBgLevel1, this.x , this.y + this.height - 1, this.width, this.height); 
  }
  myGame.ctx.drawImage(this.imgBgLevel1, this.x, this.y, this.width, this.height);  
  this.y += this.speed;
}

Background.prototype.renderScore = function(numLifes, score){
  myGame.ctx.font = "24px Arial";
  var txtLifes ="Lifes: " + numLifes;
  myGame.ctx.fillText(txtLifes,80,50);
  var txtScore ="Score: " + score;
  myGame.ctx.fillText(txtScore,300,50);
}

Background.prototype.stop = function() {
  this.speed = 0;
}
