
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var Grond;










function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Grond = new Ground(240,695,800,10);
//	div1 = new division(80,550,10,300);
//	div2 = new division(160,550,10,300);
//	div3 = new division(240,550,10,300);
//	div4 = new division(320,550,10,300);
//	div5 = new division(400,550,10,300);
	//div6 = new division(560,550,10,300);
	//div7 = new division(640,550,10,300);
	part = new particle(240,150,10);

	for(var k = 0; k<=width; k = k+80){
		divisions.push(new division(k,height-divisionHeight/2, 10, divisionHeight));
		}
	
		for(var j = 40; j <= width; j = j+50){
			plinkos.push(new Plinko(j,75,10));
		}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  

	a();

	

	
	for(var k = 0; k<divisions.legnth; k = k++){
        divisions[k].display();
		}
		
		for(var j = 0; k<particles.legnth; j = j++){
			plinkos[j].display();
			}

//	div1.display();
//	div2.display();
//	div3.display();
//	div4.display();
//	div5.display();
	//div6.display();
	//div7.display();
	Grond.display();
	part.display();	
  
	
	

  

 
}

function a(){
	if(frameCount%60 === 0){
		particles.push(new particle(random(width/2-10, width/2+10),10,10));
	}
	
}


