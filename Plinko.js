class Plinko {
    constructor(x, y, r){

        var options = {isStatic: false, restitution: 0.7, friction: 0.5, density: 1}
        this.body = Matter.Bodies.circle(x, y, r ,options); 
        this.radius = r;
        
 
        

        World.add(world, this.body);
        }
        display(){
            ellipseMode(RADIUS);
            ellipse(this.body.position.x, this.body.position.y, this.radius);



            
        }
}