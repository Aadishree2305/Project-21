var wall, thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(400,400);
 wall = createSprite(1200,200,thickness,height/2);

 bullet = createSprite(20,180,20,20);
 bullet.velocityX=speed;

 thickness=random(22,83);

 speed=random(233,321);
 weight=random(30,52);

}

function draw() {
  background(0);  

  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5* weight* speed* speed/(thickness *thickness *thickness);

    if(damage>10){
       wall.shapeColor=color(00,FF,00);
    }

    if(damage<10){
      wall.shapeColor=color(31,00,62);
   }

  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
   bulletRight=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   { 
     return true ;
   }
   return false;
}
