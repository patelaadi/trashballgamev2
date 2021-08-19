
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var dustbin1,dustbin2,dustbin3;
var paper1;

 


function setup() {
	
createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;


	

	dustbin1 = new Dustbin(145,650,10,70);
	dustbin2 = new Dustbin(200,680,100,10);
	dustbin3 = new Dustbin(255,650,10,70);

	ground = new Ground(400,690,800,5);

	paper1 = new Paper(700,400,100,100);

	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
	  
	 
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paper1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:-230,y:250});
	}
}



