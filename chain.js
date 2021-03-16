class Chain {
    constructor(body1,body2){
       var option = {
           stiffness: 0.5,
           length: 50,
           bodyA: body1,
           bodyB: body2
       }
       this.chain = Constraint.create(option);
       World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }



}