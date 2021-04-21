const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var engine, world;

function preload()
{
	dustbinimage = loadImage('dustbin.png');
}

function setup() {
	createCanvas(1400, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(200,300)

	ground=new Ground(700,550,1400,30)

	lwall=new Dustbin(1015,430,15,170)
	bottom=new Dustbin(1100,530,150,15)
	rwall=new Dustbin(1185,430,15,170)

	launcher=new Launcher(paper.body,{x:450,y:150})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  

  ground.display();

  lwall.display();
  bottom.display();
  rwall.display();
  image(dustbinimage,1000,340,200,200);
  paper.display();
  launcher.display();
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
  }
  
  function mouseReleased(){
	launcher.fly();
  }


