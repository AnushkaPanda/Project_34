
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.MouseConstraint;
var world, Mouse; 
var roof,bob1,bob2,bob3,bob4,bob5;
var ground, rope1;
function setup() {
	createCanvas(1600, 800);
    canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
	 mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options)
	World.add(world, mConstraint)
	
	bobDiameter=40
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Pendulum(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Pendulum(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Pendulum(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Pendulum(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Pendulum(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	
	//Create the Bodies Here.
	/*roof=new Roof(width/2,70,width,20);
	bob1 = new Bob(300,450,60);
	bob2 = new Bob (300,450,60);
	bob3 = new Bob (300,450,60);
	bob4 = new Bob (300,450,60);
	bob5 = new Bob (300,450,60);
    ground=new Ground(width/2,670,width,20);*/
   
   rope1=new Sling(bob1.body,roof.body,-bobDiameter*2, 0)

   rope2=new Sling(bob2.body,roof.body,-bobDiameter*1, 0)
   rope3=new Sling(bob3.body,roof.body,0, 0)
   rope4=new Sling(bob4.body,roof.body,bobDiameter*1, 0)
   rope5=new Sling(bob5.body,roof.body,bobDiameter*2, 0)


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
    //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}
function mouseDragged(){
	Matter.Body.setPosition(bob.body, {x: mouseX, y: mouseY})
}






