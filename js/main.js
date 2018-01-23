var fps = 60;
var cv = document.getElementById('canvas');
var ctx = cv.getContext('2d');
// ********* INSTANCIAR TODOS LOS OBJETOS
var background1 = new Background();
var susiBird1 = new FlyingBird(100,250,250);
var arrRockets  = []
var badGuy = new BadBird(10,10,60,0);

var myGame = new Game;

function CheckCollision() {
  for (var i = 0; i < arrRockets.length; i ++) {
    if (arrRockets[i].posX < susiBird1.posX + susiBird1.width && arrRockets[i].posX + arrRockets[i].width  > susiBird1.posX &&
      arrRockets[i].posY < susiBird1.posY + susiBird1.height && arrRockets[i].posY + arrRockets[i].height > susiBird1.posY) {
      // The objects are touching
      susiBird1.collision();
      arrRockets[i].collision(arrRockets);
      background1.stop();
      myGame.isGameRunning=false;

    } else {
      susiBird1.render(delta);
      arrRockets[i].render(delta);
      badGuy.move(1,1);
      badGuy.render(delta);
    }
  }
}

// INSTANCIAR TODOS LOS OBJETOS *********

var now = Date.now();
var delta = 0;
function update(){
  then = now;
  now = Date.now();
  delta = now - then;
  
  ctx.clearRect(0,0,cv.width,cv.height);

  // ********* LLAMAR AL RENDER DE TODOS LOS ELEMENTOS

  background1.render(delta);
  background1.renderScore(susiBird1.lifes,myGame.score);
  //badGuy.move(-1,-1);
  //ctx.drawImage(imgBadBird, 50, 50, 400, 300);

   CheckCollision();

  // LLAMAR AL RENDER DE TODOS LOS ELEMENTOS *********
}
function updateWhenBirdDied(){
  setTimeout(function(){ console.log("Hello"); }, 3000);
  ctx.clearRect(0,0,cv.width,cv.height);
  background1.render(delta);
}



var render = function(){
  if(myGame.isGameRunning==true){
    update()
  }
  else if(myGame.isGameRunning==false){
    updateWhenBirdDied()
  }
  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);



window.addEventListener('keydown', function(e){
  switch(e.keyCode){
      case 37: // izquierda
        susiBird1.moveX(-1);
        console.log(susiBird1.posX);
        
      break;
      case 39: // derecha
        susiBird1.moveX(1);
        console.log(susiBird1.posX);
      break;
  }
});

window.addEventListener('keyup', function(e){
  susiBird1.stop();
});
function createArrRockets(numRockets){
  for (var i = 0; i < numRockets; i++) {
    var x,y,z;
    if (i % 2 === 0) {x = -200;} else {x = -250;}
    y = (Math.floor(Math.random()*5)*75)+100;
    z = (Math.floor(Math.random()*3)*300)+800;
    var rocket = new Rocket(x,y,z)
    arrRockets.push(rocket);
  }
}
createArrRockets(8)
myGame.startGame()
console.log(myGame.arrRockets)