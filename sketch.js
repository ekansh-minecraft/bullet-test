
var wall;
var bullet;
var speed;
var weight;
var thickness;
var hieght;
var realse = 88
var restart = 90
var testState = realse

function setup()
{
  createCanvas(800,800);
  wall = createSprite(750,400,30,100)
  wall.shapeColor = "purple"
  bullet = createSprite(20, 400 , 100, 10);
  bullet.shapeColor = "cyan"
  wall.shapeColor = "blue"
}

function draw() 
{
  background("black");
  drawSprites()

  if(testState === realse)
  {
    if(keyDown("space"))
    {
      go()
    }
  }

  if(testState === restart)
  {
    if(keyDown("r"))
    {
       reset()
       testState = realse
    } 
  }

  if(bullet.isTouching(wall))
  {
    bullet.velocityX  = 0
    var deformation = 0.5*weight*speed*speed/22500
    console.log("Weight: " + weight)
    console.log("Speed: " + speed)
    testState = restart

  }

  if(deformation > 180)
   {
      wall.shapeColor = "red"
      textSize(19)
      fill("red")
      text("this speed was lethal",300,100)
      textSize(19)
      fill("indigo")
      text("Press r to restart",100,200)
   }
   if(deformation > 80 && deformation < 180)
    {
      wall.shapeColor = "yellow"
      textSize(19)
      fill("yellow")
      text("this speed was average",300,100)
      textSize(19)
      fill("indigo")
      text("Press r to restart",100,200)
    }
    if(deformation < 80)
    {
      wall.shapeColor = "green"
      textSize(19)
      fill("green")
      text("this speed was safe",100,300)
      textSize(19)
      fill("indigo")
      text("Press r to restart",100,200)
    }

    fill("white")

  }
  

  


function go()
{
  speed = random(55,90)
  weight = random(400,1500)
  bullet.velocityX = speed
}

function reset()
{
  bullet.y = 400
  bullet.x = 20
  bullet.velocityX = 0
  wall.shapeColor = "blue"
}







