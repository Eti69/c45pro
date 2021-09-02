const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine, world;


var bg;

var block, blockImg, blocksGroup;
var person, jumpImg,walkImg,standImg;
var bgimage;
var ground;
function preload(){


bgimage=loadImage('./mariobkgrnd.jpg')
blockImg=loadImage('./obstacles.png')

runImg=loadAnimation("imgs/Run__000.png","imgs/Run__001.png","imgs/Run__002.png","imgs/Run__003.png","imgs/Run__004.png","imgs/Run__005.png","imgs/Run__006.png","imgs/Run__007.png","imgs/Run__008.png","imgs/Run__009.png")
standImg=loadImage("imgs/Idle__000.png")
}

function setup(){

createCanvas(displayWidth,displayHeight)

engine=Engine.create();
world = engine.world;

bg=createSprite(1000,150,400,200);
bg.addImage(bgimage)
bg.scale=1.5;
blocksGroup= new Group();

person=createSprite(70,850,20,20)
//person.addAnimation("run",runImg);
person.addImage(standImg);
person.scale=0.4;
}




function draw(){
Engine.update(engine);

background('blue');

bg.velocityX=-3;


if(bg.x<0){
 bg.x=300;
}

if(keyDown(UP_ARROW)&&person.y>=800){
  person.velocityY=-10;

}
person.y=person.y+0.8
spawnBlocks();
drawSprites();



}


function spawnBlocks(){
    if(frameCount%100===0){
        block=createSprite(displayWidth,Math.round(random(displayHeight-500,displayHeight-200)),100,20);
        block.addImage(blockImg);
        block.scale=0.2;
        block.velocityX=bg.velocityX;
        block.lifetime=1080;


        blocksGroup.add(block);
    }
}