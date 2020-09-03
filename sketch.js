
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball3 = new Ball(400,750,50,50);
 ball2 = new Ball(450,750,50,50);
 ball1 = new Ball(500,750,50,50);
 ball4 = new Ball(350,750,50,50);
 ball5 = new Ball(300,750,50,50);
roof =  Bodies.rectangle(400, 0, 800, 5, options);
rope1 = new Rope(ball1.body,roof.body,-ball1Diamater*2,0);
rope2 = new Rope(ball2.body,roof.body,-ball2Diamater*2,0);
rope3 = new Rope(ball3.body,roof.body,-ball3Diamater*2,0);
rope4 = new Rope(ball4.body,roof.body,-ball4Diamater*2,0);
rope5 = new Rope(ball3.body,roof.body,-ball5Diamater*2,0);
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}



function swing(){
	if(keyDown("a")){
		ball1(600,780);
	}
}