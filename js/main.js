var fps = 60;
var now = Date.now();
var delta = 0;  
var then = 0;

var cv = document.getElementById('canvas');
var ctx = cv.getContext('2d');

var myGame = new Game;
myGame.startGame();
function restartGame() {
  myGame = new Game;
      // myGame.isGameRunning = true;
      // myGame.susiBird1.revive();
}

function CheckCollision() {
  for (var i = 0; i < myGame.arrRockets.length; i ++) {
    if (myGame.arrRockets[i].posX < myGame.susiBird1.posX + myGame.susiBird1.width && myGame.arrRockets[i].posX + myGame.arrRockets[i].width  > myGame.susiBird1.posX &&
      myGame.arrRockets[i].posY < myGame.susiBird1.posY + myGame.susiBird1.height && myGame.arrRockets[i].posY + myGame.arrRockets[i].height > myGame.susiBird1.posY) {

      // Rockets touching susiBird
      myGame.susiBird1.collision();
      myGame.isGameRunning = false;

    } else if (myGame.badGuy.x < myGame.susiBird1.posX + myGame.susiBird1.width-50 && myGame.badGuy.x +  myGame.badGuy.width-25  > myGame.susiBird1.posX &&
      myGame.badGuy.y < myGame.susiBird1.posY + myGame.susiBird1.height-80 && myGame.badGuy.y + myGame.badGuy.height-30 > myGame.susiBird1.posY) {

      // BAD GUY TOUCHING SUSIBIRD
      myGame.susiBird1.collision();
      myGame.isGameRunning = false;

    } else {
      myGame.susiBird1.render(delta);
      myGame.arrRockets[i].render(delta);
      if(myGame.badGuy.directionR) myGame.badGuy.moveR();
      else myGame.badGuy.moveL();
      myGame.badGuy.render(delta);
     }
  }
}

function birdDies() {
  ctx.clearRect(0,0,cv.width,cv.height);
  myGame.background1.stop();
  myGame.background1.render(delta);
  myGame.background1.renderScore(myGame.susiBird1.lifes,myGame.score);
}


function update(){
  then = now;
  now = Date.now();
  delta = now - then;
  
  ctx.clearRect(0,0,cv.width,cv.height);

  // RENDER BACKGROUND AND SCORE LABELS
  myGame.background1.render(delta);
  myGame.score++;
  myGame.background1.renderScore(myGame.susiBird1.lifes,myGame.score);

  CheckCollision();
}

function updateWhenBirdDies(){
  // setTimeout(birdDies,2000);
  setTimeout(restartGame,1000); 
}

var render = function(){
  if(myGame.isGameRunning==true){
    update()
  }
  else if(myGame.isGameRunning==false){
    updateWhenBirdDies()
  }
  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);



window.addEventListener('keydown', function(e){
  switch(e.keyCode){
      case 37: // left
        myGame.susiBird1.moveX(-1);        
      break;

      case 39: // right
        myGame.susiBird1.moveX(1);
      break;
  }
});

window.addEventListener('keyup', function(e){
  myGame.susiBird1.stop();
});
