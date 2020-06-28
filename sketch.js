var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	top= new Roof(400,300,400,200)
	bob3= new Bob(400,500,40)
	rope3=new Rope(bob3.body,top.body,-bob3.radius*4,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  bob3.display()
  rope3.display()
  top.drawroof()
  background(255);



  
  drawSprites();
 
}



