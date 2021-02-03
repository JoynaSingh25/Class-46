class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:5
        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot);
    }
    jump(){
    this.slingshot.bodyA=null;
    }
    catch(body){
    this.slingshot.bodyA=body;
    }
    display(){
        if(this.slingshot.bodyA){
        var a=this.slingshot.bodyA.position;
        var b=this.slingshot.bodyB.position;
        strokeWeight(4);
        stroke(255);
        line(a.x,a.y,b.x,b.y);
    }}
}