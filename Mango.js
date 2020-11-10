class Mango extends SuperClass{
	constructor(x,y){
		super(x,y,50,50)
			var options={
				isStatic:true,
				restitution:0,
				friction:1
			}
		this.image=loadImage("mango.png");
		this.body=Bodies.rectangle(x,y,50,50,options)
		World.add(world,this.body);	
		
	}
}