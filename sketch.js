
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground
var radius=40
var engine
var world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		denisty:1.2
	}
	var ground_options={
		isStatic:true
	}
	ground = Bodies.rectangle(400,800,800,800,20,ground_options)
	engine = Engine.create();
	world = engine.world;
	World.add(world,ground)
	//Create the Bodies Here.
	ball = Bodies.circle(200,600,radius/2,ball_options)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  drawSprites();	
  rect(rect.position.x,rect.position.y,800,20)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{
			x:85,y:-85
		})

	}
}


