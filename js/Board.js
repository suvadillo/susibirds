function Background() {
  this.speed = -5;
  this.x = 0;
  this.y = 0;
  this.width = 512;
  this.height = 809;
  this.numLoops = 0;
  this.imgBgLevel1 = new Image();
  this.imgBgLevel1.src = 'images/bg-level1.jpg';
  this.imgScore = new Image();
  this.imgScore.src = 'images/score-board.png';
  this.imgScoreWidth = 150;
  this.imgScoreHeight = 83;
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
  myGame.ctx.drawImage(this.imgScore, 65, 5, this.imgScoreWidth, this.imgScoreHeight);
  myGame.ctx.font = "24px Arial";
  var txtLifes ="Lifes: " + numLifes;
  myGame.ctx.fillText(txtLifes,100,65);
  myGame.ctx.drawImage(this.imgScore, 300, 5, this.imgScoreWidth, this.imgScoreHeight);
  var txtScore ="Score: " + parseInt(score);
  myGame.ctx.fillText(txtScore,315,65);
}

Background.prototype.renderGameOver = function(){
  myGame.ctx.font = "100px Arial";
  var txtGame ="GAME";
  myGame.ctx.fillText(txtGame,118,350);
  var txtScore ="OVER";
  myGame.ctx.fillText(txtScore,120,450);
}

Background.prototype.stop = function() {
  this.speed = 0;
}
