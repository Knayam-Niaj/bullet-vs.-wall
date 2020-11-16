var bullet, speed, weight;
var wall, thickness;
var damage;

function setup() {
  createCanvas(800,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(200, 200, 50, 50);
  

  wall = createSprite(700, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0, 0, 0);  

  bullet.velocityX = speed;


  if(bullet.x-wall.x < (bullet.width+wall.width)/2 &&
     wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;

    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage < 10){
      bullet.shapeColor = "green";
    } else if (damage > 10){
      bullet.shapeColor = "red";
    }
  }

  

  drawSprites();
}