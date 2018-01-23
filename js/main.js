var fps = 60;
var now = Date.now();
var delta = 0;  
var then = 0;

var cv = document.getElementById('canvas');
var ctx = cv.getContext('2d');
// **INSTANCIAR TODOS LOS OBJETOS
//var background1 = new Background();
// var susiBird1 = new FlyingBird(100,250,250,0);
// var arrRockets  = []
// var badGuy = new BadBird(10,10,60,0,0);

var myGame = new Game;
myGame.startGame();

function CheckCollision() {
  for (var i = 0; i < myGame.arrRockets.length; i ++) {
    if (myGame.arrRockets[i].posX < myGame.susiBird1.posX + myGame.susiBird1.width && myGame.arrRockets[i].posX + myGame.arrRockets[i].width  > myGame.susiBird1.posX &&
      myGame.arrRockets[i].posY < myGame.susiBird1.posY + myGame.susiBird1.height && myGame.arrRockets[i].posY + myGame.arrRockets[i].height > myGame.susiBird1.posY) {
      // The objects are touching
      myGame.susiBird1.collision();
      myGame.arrRockets[i].collision(myGame.arrRockets);
      myGame.background1.stop();
      myGame.isGameRunning = false;

    } else {
      myGame.susiBird1.render(delta);
      myGame.arrRockets[i].render(delta);
      myGame.badGuy.move(1,1);
      myGame.badGuy.render(delta);
    }
  }
}

function birdDies() {
  ctx.clearRect(0,0,cv.width,cv.height);
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
  myGame.background1.renderScore(myGame.susiBird1.lifes,myGame.score);

  CheckCollision();
}

function updateWhenBirdDies(){
  setTimeout(birdDies,3000);  
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
// function createArrRockets(numRockets){
//   for (var i = 0; i < numRockets; i++) {
//     var x,y,z;
//     if (i % 2 === 0) {x = -200;} else {x = -250;}
//     y = (Math.floor(Math.random()*5)*75)+100;
//     z = (Math.floor(Math.random()*3)*300)+800;
//     var rocket = new Rocket(x,y,z)
//     arrRockets.push(rocket);
//   }
// }
// createArrRockets(8)
// console.log(myGame.arrRockets)