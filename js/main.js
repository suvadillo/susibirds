var myGame = new Game();
myGame.startGame();

function update() {
  myGame.background1.render();
  myGame.susiBird1.render();
  myGame.arrRockets.forEach(function(rockets) {
    rockets.renderRocket();
  });
  myGame.checkCollision();
  myGame.background1.renderScore(myGame.susiBird1.lifes, myGame.score);
}

window.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 37: // left
      myGame.susiBird1.direction[0] = true;
      break;
    case 39: // right
      myGame.susiBird1.direction[1] = true;
      break;
    case 38: // up
      myGame.susiBird1.direction[2] = true;
      break;
    case 40: // down
      myGame.susiBird1.direction[3]= true;
      break;
  }
  console.log(myGame.susiBird1.direction)
});

window.addEventListener("keyup", function(e) {
  switch (e.keyCode) {
    case 37: // left
      myGame.susiBird1.direction[0] = false;
      break;
    case 39: // right
      myGame.susiBird1.direction[1] = false;
      break;
    case 38: // up
      myGame.susiBird1.direction[2] = false;
      break;
    case 40: // down
      myGame.susiBird1.direction[3]= false;
      break;
  }
});

var render = function() {
  myGame.then = myGame.now;
  myGame.now = Date.now();
  myGame.delta = myGame.now - myGame.then;
  myGame.ctx.clearRect(0, 0, myGame.cv.width, myGame.cv.height);
  update();
  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);
