var snow,bg;
var snowimg,bgimg;

function preload()
{
  bgimg=loadImage("snow2.jpg");
  snowimg=loadImage("snow4.webp");
}

function setup()
{
 createCanvas(800,600);
}

function draw()
{
  background(bgimg);
  spawnsnow();
  drawSprites();
}

function spawnsnow()
{
  if(frameCount%100===0)
  {
    snow=createSprite(Math.round(random(100,500)),Math.round(random(100,500)),10,10);
    snow.addImage(snowimg);
    snow.velocityY=1;
    snow.scale=0.1;
    snow.lifetime=150;
  }
}