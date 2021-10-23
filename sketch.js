var ball
function setup() {
  createCanvas(1000,600);
  ball = createSprite(200,200,50,20);
}



function draw() 
{
  background("green");

  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x = ball.position.x + 2
  }

  if(keyIsDown(LEFT_ARROW)){
    ball.position.x = ball.position.x - 2
  }

  if(keyIsDown(UP_ARROW)){
    ball.position.y = ball.position.y - 2
  }

    if(keyIsDown(DOWN_ARROW)){
      ball.position.y = ball.position.y + 2
    }
  drawSprites()
}







