const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,585,width,20);
	dustbinObj=new dustbin(1000,570);
	b=new Ball(200,58 ,20,20);
}


function draw() {
	Engine.run(engine);
	rectMode(CENTER);
	background(230);
  	groundObject.display();
  	dustbinObj.display();
	
	b.display();
	
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	console.log("abc")
	Matter.Body.setPosition(b.body,{x:130,y:200})
	}
}