var fps = 60;

var cv = document.getElementById('canvas');
var ctx = cv.getContext('2d');

// ********* INSTANCIAR TODOS LOS OBJETOS

// var imgBadBird = new Image();   
// imgBadBird.src = 'images/badBird.png';
// var imgBadBirdScale = 187/100;

var background1 = new Background();

var susiBird1 = new FlyingBird(100,250,250);

// var numRockets = Math.floor(Math.random()*2) + 2;

// var arrRockets = createArrRockets(numRockets);


var arrRockets = [
  new Rocket(-200,175,800),
  new Rocket(-250,250,800),
  new Rocket(-200,400,800),
  new Rocket(-250,100,1100),
  new Rocket(-200,325,1100),
  new Rocket(-250,100,1400),
  new Rocket(-200,175,1400),
  new Rocket(-250,325,1400)
];

var badGuy = new BadBird(50,50,400,300);

var myGame = new Game;

// myGame.startGame();

function CheckCollision() {
  for (var i = 0; i < arrRockets.length; i ++) {
    // console.log("arrRockets: X: " + arrRockets[i].posX + " / Y: " + arrRockets[i].posY);
    // console.log("susiBird: X: " + susiBird1.posX + " / Y: " + susiBird1.posY);
    if (arrRockets[i].posX < susiBird1.posX + susiBird1.width && arrRockets[i].posX + arrRockets[i].width  > susiBird1.posX &&
      arrRockets[i].posY < susiBird1.posY + susiBird1.height && arrRockets[i].posY + arrRockets[i].height > susiBird1.posY) {
      // The objects are touching
      console.log("COLLISION");        
      susiBird1.collision(susiBird1.posX, susiBird1.posY);
      arrRockets[i].collision(arrRockets);
      background1.stop();
      badGuy.render(delta);

    } else {
      susiBird1.render(delta);
      arrRockets[i].render(delta);
      badGuy.render(delta);
    }
  }
}

// INSTANCIAR TODOS LOS OBJETOS *********

var now = Date.now();
var delta = 0;

var render = function(){
  then = now;
  now = Date.now();
  delta = now - then;
  
  ctx.clearRect(0,0,cv.width,cv.height);

  // ********* LLAMAR AL RENDER DE TODOS LOS ELEMENTOS

  background1.render(delta);
  background1.renderScore(susiBird1.lifes,myGame.score);
  //badGuy.move(-1,-1);
  //ctx.drawImage(imgBadBird, 50, 50, 400, 300);
  // badGuy.render();

  CheckCollision();

  // LLAMAR AL RENDER DE TODOS LOS ELEMENTOS *********


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
