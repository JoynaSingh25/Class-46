const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,bar1,bar2,bar3,bar4,r,sling,sling1;

function setup(){
    var canvas = createCanvas(450,700);
   r=createSprite(200,250);
   r.visible=false;

    engine = Engine.create();
    world = engine.world;

 
  bar1=new Bar(397,402);
  bar2=new Bar(87,402);
  bar3=new Bar(238,216);
  bar4=new Bar(233,571)
  player=new Player(233,571);

sling=new Slingshot(player.body,bar3.body);
}

function draw(){
background(0);
Engine.update(engine);
console.log(mouseX,mouseY);

if(player.body.position.x>380 && player.body.position.y>365){
changePosition(bar1);
}
if(player.body.position.x<103 && player.body.position.y>370){
  changePosition(bar2);
  }
  if((player.body.position.x>210 && player.body.position.x<252) && player.body.position.y>537){
    changePosition(bar4);
    }
     
//camera.position.y=player.body.position.y;

bar1.display();
bar2.display();
bar3.display();
bar4.display();

sling.display();
player.display();
     
}

function spawnBars(){
    //if(frameCount % 480){
     bar1=new Bar(100);
     
   // }
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  console.log("released")
  sling.jump();
}

/*function keyPressed(){
  if(keyCode === 32){
     slingshot.catch(player.body);
  }
}*/

function changePosition(a){
sling1=new Slingshot(player.body,a.body);
sling1.display();
}