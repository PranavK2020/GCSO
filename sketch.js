var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500,200,height /2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}