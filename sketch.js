
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var rod1, rod2, rod3
var paper1
var dustbinImg, dustbin

function preload(){
	dustbinImg = loadImage("dustbin.png");
}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	rod1 = new Rod(943, 304, 10, 155);
	rod2 = new Rod(1000, 380, 115, 10);
	rod3 = new Rod(1057, 306, 10, 155);

	paper1 = new Paper(200,300,25);

	ground = new Ground(600,400,1200,20);
	
	dustbin = createSprite(1000,305,10,10);
	dustbin.addImage("dust", dustbinImg);
	dustbin.scale = 0.5;

	Engine.run(engine);
  
}


function draw() {
	background(0);

	//Engine.update(engine);
	rod1.display();
	rod3.display();
	rod2.display();

	paper1.display();
	
	ground.display();

	paper1.x = paper1.body.position.x;
  	paper1.y = paper1.body.position.y;

	shoot();
	
  	drawSprites();
 
}

function shoot(){
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x : 1, y : -2});
	}
}

