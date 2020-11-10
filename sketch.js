
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1366, 600);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(683,590,1366,20);
	// tree = new Tree(1100,340);
	boy=loadImage("boy.png");
  tree =loadImage("tree.png");
	stone=new Stone(450,350);

	launcher= new Launcher(stone.body,{x:440,y:410})
  mango1=new Mango(1050,300);
  mango2=new Mango(1060,200)
  mango3=new Mango(1150,130)
  mango4=new Mango(1120,250)
  mango5=new Mango(1190,280)
  mango6=new Mango(1170,230)

 
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
 
  ground.display();
 
  push();
  imageMode(CENTER);
  image(boy,500,500,200,350);
  image(tree,1100,340,300,500);
  pop();					
  stone.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  dColl(mango1,stone)
  dColl(mango2,stone)
  dColl(mango3,stone)
  dColl(mango4,stone)
  dColl(mango5,stone)
  dColl(mango6,stone)
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:440,y:410})
    launcher.attach(stone.body,{x:440,y:410});

  }
}

function dColl(bodyA,bodyB){
  pos1=bodyA.body.position;
  pos2=bodyB.body.position;

  var distance=dist(pos2.x,pos2.y,pos1.x,pos1.y);
  if(distance<=70){
    Body.setStatic(bodyA.body,false);
  }
}




