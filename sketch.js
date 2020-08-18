var chopper,supply,position;

function setup() {
  createCanvas(1500,700);
  position=random(50,40);
  
  chopper=createSprite(90, 200, 70, 35);
  chopper.visible=false;
  chopper.shapeColor="green";

  supply=createSprite(position, 200, 30, 30);
  supply.visible=false;
  
  
}

function draw() {
  background("lightblue");  
  
  drawSprites();
  
  if(keyDown("space")){
    chopper.visible=true;
  }

  if(keyDown("down")){
    supply.visible=true;
    supply.velocityY=4;
  }

  if(keyDown("left")){
    chopper.velocityX=-3;
  }

  if(keyDown("right")){
    chopper.velocityX=3;
  }
  
  //chopper.bounceOff(screenLeft);
}