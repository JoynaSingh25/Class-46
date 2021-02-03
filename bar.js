class Bar extends BaseClass{
    constructor(a,y){
       // var a = Math.round(random(10,490));
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        super(a,y,300,300);
    }
   
        display(){
            var x=this.body.position.x;
            var y=this.body.position.y;
           
            fill(255,100,255);
            imageMode(CENTER);
            image(this.image,x,y,350,350);
        
          }
         /* remove(){
          if(this.body.position.y>700){
            World.remove(world,this.body);
        }}*/
}