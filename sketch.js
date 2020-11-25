var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,helicopter1
var g1,g2,g3,grd
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);

	



	engine = Engine.create();
	world = engine.world;


box1=new Box(250,200,10,10)
helicopter1= new Heli(250,200)
fill ("green")
grd=new Ground(250,500,500,20)	

g1=new Ground(250,480,200,20)
g2=new Ground(150,480,20,100)
g3=new Ground(350,480,20,100)	



	//Create a Ground



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 


box1.display()	

	
g1.display()
g2.display()	
g3.display()
grd.display()

	
  drawSprites();
 
}









 

