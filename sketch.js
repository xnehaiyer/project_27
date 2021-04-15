
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobOject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,600,45);
	bobObject2 = new Bob(290,600,45);
	bobObject3 = new Bob(380,600,45);
	bobObject4 = new Bob(470,600,45);
	bobObject5 = new Bob(560,600,45);

	rope1 = new Rope(bobObject1,roofObject,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2,roofObject,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3,roofObject,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4,roofObject,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5,roofObject,-bobDiameter*2,0);

	roofObject = new Roof(380,200,380,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roofObject.display();
  drawSprites();
}



