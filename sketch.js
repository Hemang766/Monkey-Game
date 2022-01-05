var bananaImage,monkey,monkeyImg,banana,obstacleImage,obstacle,backgroundImg,backImage,Invisibleground,bananaGroup,stoneGroup;
var score;
function preload(){
backImage=loadImage("jungle.jpg");
monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

bananaImg=loadImage("banana.png");
obstacleImg=loadImage("stone.png");
} 



function setup(){
 createCanvas(400,400); 
Invisibleground=createSprite(0,350,1200,10);
 backgroundImg =createSprite(0,100,1200,40);
 backgroundImg.addImage("backgroundImg",backImage);
 backgroundImg.x= backgroundImg.width/2;
   backgroundImg.velocityX=-7;
   backgroundImg.scale=1.2;
  monkey=createSprite(50,300,30,40);
monkey.addAnimation("running",monkeyImg);
monkey.scale=0.1;
  bananaGroup=createGroup();
stoneGroup=createGroup();

  
}
function draw(){
  background("white");
if (backgroundImg.x < 0){
      backgroundImg.x = backgroundImg.width/2;
    }
  if (monkey.isTouching(stoneGroup)){
    monkey.scale=0.09
  }
  if (monkey.isTouching(bananaGroup)){
    monkey.scale=0.11
  }
  
   if(keyDown("space") && monkey.y >= 300) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  if(World.frameCount%80===0){
     banana=createSprite(600,random(200,260),200,200);
  bananaGroup.add(banana);
    banana.velocityX=-7;
   banana.addImage("food",bananaImg);
    banana.scale=0.05 ;
    banana.lifetime=85;
  }
  if(World.frameCount%57===0){
     stone=createSprite(600,325,20,20);
  stoneGroup.add(stone);
    stone.velocityX=-7;
    stone.scale=0.17 ;
    stone.lifetime=85;
    stone.addImage("obstacle",obstacleImg);
  }
  

  
monkey.collide(Invisibleground);

drawSprites();
}