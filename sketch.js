
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	ball= new Ball(100,100,20)
	ground = new Ground(400,680,800,20)
	side = new Side(700,550,200,300)
	
  
}


function draw() {
  
  background(255);
  Engine.update(engine)
  ball.display()
  ground.display()
 side.display()
 
}
function keyPressed(){
if (keyIsDown(UP_ARROW)){
Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-20})	
}
}

