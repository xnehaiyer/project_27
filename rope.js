class Rope{
    constructor(body1, body2){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        //this.pointB = pointB
        this.rope1 = Constraint.create(options);
        World.add(world, this.rope1);
    }
    attach(body){
        this.rope1.bodyA = bodyA;
        this.rope1.bodyB = bodyB;
    }
    
    fly(){
        this.rope1.bodyA = null;
        this.rope1.bodyB = null;
    }

    display(){
        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.rope1.bodyA){
            var pointA = this.rope1.bodyA.position;
            var pointB = this.rope1.bodyB.position;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.rope1,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.rope1,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}