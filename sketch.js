var fixedRect, movingRect;
var go1, go2 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  go1 = createSprite(400,300,20,25);
  go1.velocityY=2;

  go2 = createSprite(400,700,20,25);
  go2.velocityY = -2;
}

function draw() {
  background(0,0,0);  

 bounceoff(movingRect,fixedRect);
 bounceoff(go2,go1);
  drawSprites();
}
function bounceoff (ob1,ob2) {
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
  ob1.velocityX = ob1.velocityX * (-1);
 ob2.velocityX = ob2.velocityX * (-1);
}
if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
  ob1.velocityY = ob1.velocityY * (-1);
  ob2.velocityY = ob2.velocityY * (-1);
}
}