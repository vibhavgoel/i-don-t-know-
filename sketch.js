
var ship,shiping;
var sea,seaImg;

function preload(){
shiping=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg=loadImage("sea.jpg")

}

function setup(){
 
  createCanvas(400,400)
 

   sea=createSprite(200,200,400,20)
   sea.addImage(seaImg)
   

   ship=createSprite(180,200,10,10) 
   ship.addAnimation("hi",shiping)
   ship.scale=0.25;
  
}

function draw() {
  background(seaImg);
   
  sea.velocityX=-8
  if(sea.x<0)
  {
  sea.x=sea.width/2
  }
  
      
  drawSprites();
}
