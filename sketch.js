
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bobObject1= new Bob(400,200, 20)
	var bobObject2= new Bob(420,200,20)
	var bobObject3=new Bob(480,200,20)
	var bobObject4= new Bob(380,200,20)
	var bobObject5= new Bob(340,200,20)

	var roof= new Roof(400,20,800)

	rope1= new Rope(bobObject1.body,roof.body,bobDiameter*2,0)
	rope2= new Rope(bobObject2.body,roof.body,bobDiameter*2,0)
    rope3= new Rope(bobObject3.body,roof.body,bobDiameter*2,0)
    rope5= new Rope(bobObject5.body,roof.body,bobDiameter*2,0)
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  bobObject5.display()
  bobObject4.display()
  bobObject3.display()
  bobObject2.display()
  bobObject1.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}



 