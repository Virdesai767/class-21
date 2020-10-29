var b1, b2, q1, q2
function setup() {
  createCanvas(800,400);
  b2 = createSprite(400, 200, 50, 50);
  b2.shapeColor = "White"
  b1 = createSprite (200,200,50,50)
  b1.shapeColor = "White"
  q1 = createSprite (600, 300, 50, 50);
  q1. shapeColor = "white"
  q2 = createSprite (400, 200, 30, 30);
  q2.shapeColor = "white"
}

function draw() {
  background(0)  
  drawSprites()
if(isTouching(b1, b2)) {
b1.shapeColor = "red";
b2.shapeColor = "red";
}
else {
  b1.shapeColor = "white";
  b2.shapeColor = "white";
}
if(isTouching(q1, b2)) {
  q1.shapeColor = "red";
  b2.shapeColor = "red";
  }
  else {
    q1.shapeColor = "white";
    b2.shapeColor = "white";
  }
b2.x = mouseX;
b2.y = mouseY;
}
