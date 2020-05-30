class Bob{
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.radius);
    }
}