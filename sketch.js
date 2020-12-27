var bullet, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
speed=random(223,321)
weight=random(30,54)

 bullet=createSprite(50, 200, 60, 30);
bullet.velocityX = speed;
thickness=random(22,83)
wall=createSprite(1500,200,60,height/2);
wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255);  

/*if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor=color(230,230,0);
  }

  
  if(deformation<180 && deformation>100) {
  bullet.shapeColor=color(230,230,0); 
}
  
  if(deformation<100)
  {
    bullet.shapeColor=color(0,255,0);
  }*/
  if (hasCollided(bullet,wall)){
     
    var damage =0.5 * weight * speed* speed/(thickness * thickness * thickness);
  
    if (damage>5){
       wall.shapeColor = color(255,0,0);
    }
  
  if (damage<5){
  
    wall.shapeColor = color(0,255,0);
  
  }
}
  

  
    

  drawSprites();
}

function hasCollided (Lbullet,Lwall) 
{

     bulletRightEdge = Lbullet.x + Lbullet.width;
     wallLeftEdge = Lwall.x;
 if (bulletRightEdge>=wallLeftEdge ){

    return true

  }

  return false
}


