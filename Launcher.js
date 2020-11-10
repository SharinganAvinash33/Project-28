class Launcher{
	constructor(bodyA, pointB){
	var options={
		bodyA:bodyA,
		pointB:pointB,
		stiffness:0.002,
		length:0
	}
	this.pointB=pointB;
	this.Launcher=Matter.Constraint.create(options);
	World.add(world,this.Launcher)
	}
	display(){
        if(this.Launcher.bodyA){

        
        var pointA=this.Launcher.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke("red")
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
    fly(){
        this.Launcher.bodyA=null;
    }
    attach(bodyA,pointB){
    	var options={
		bodyA:bodyA,
		pointB:pointB,
		stiffness:0.002,
		length:0
		}
		this.pointB=pointB
    	this.Launcher=Matter.Constraint.create(options);
    	World.add(world,this.Launcher);
 		
 		
 			if(this.Launcher.bodyA){

        
        var pointA=this.Launcher.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke("red")
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        
 		}   

	
}
}