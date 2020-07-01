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


	roof= new Cover(400,200,400,100)
	bob3= new Bob(400,500,40)
	bob2=new Bob(320,500,40)
	bob4=new Bob(480,500,40)
	bob5=new Bob(560,500,40)
	bob1=new Bob(240,500,40)
	rope3=new Rope(bob3.body,roof.body,0,-200)
	rope2=new Rope(bob2.body,roof.body,-80,-200)
	rope1=new Rope(bob1.body,roof.body,-160,-200)
	rope4=new Rope(bob4.body,roof.body,80,-200)
	rope5= new Rope(bob5.body,roof.body,160,-200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof.display()
  rope3.display()
  rope2.display()
  rope1.display()
  rope4.display()
  rope5.display()



  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-180})
	}
}

