const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1=new DUSTBIN(400,670,200,20);
	box2=new DUSTBIN(300,660,20,150);
	box3=new DUSTBIN(500,660,20,150);
  
	paper=new PAPER(120,630,70);
	
	
	ground=new DUSTBIN(400,690,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();
  //crumpledPaper.display();
  
  box1.display();
 
  paper.display();

 ground.display();

   
 

	

}	
function keyPressed() {
if (keyDown("up")) {
	Matter.Body.applyForce(paper.body,paper.position,{x:560, y:-560})
}
}