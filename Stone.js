class Stone extends SuperClass{
	constructor(x,y){
		super(x,y,50,50)
			var options={
				isStatic:false,
				restitution:0,
				friction:1,
				density:1.2
			}
			this.image=loadImage("stone.png");
			this.body=Bodies.rectangle(x,y,50,50,options);
			World.add(world,this.body);
		
	}
}