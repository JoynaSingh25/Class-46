class Player{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100,70, options);
        this.image=loadImage("images/s.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //this.body.position.x=mouseX;
       // this.body.position.y=mouseY;

        var a=this.body.position.x;
        var b=this.body.position.y;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,0,300,270);
        pop();
      }
}