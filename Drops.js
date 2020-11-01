class drop{
    constructor(x,y,radius){
       var options={
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
       }
       this.body = Bodies.circle(x,y,radius,options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
    }
      display(){
          var pos=this.body.position;
          var angle=this.body.angle;
          push();
          elipceMode(CENTER)
          pop();
      }
}