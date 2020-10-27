class Sling{
    constructor(Bird1, PointB1){
        var options = {
            bodyA: Bird1,
            pointB: PointB1,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.PointB= PointB1;
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA!== null)
        {
        var pointA = this.chain.bodyA.position;
        var pointB = this.PointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    fly()
    {
     this.chain.bodyA = null;
    }
}