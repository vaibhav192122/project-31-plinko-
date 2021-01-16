const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,50,480,20);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    slingshot.display();    
}

/*function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}

function keyPressed(){
    if(keyCode === 32){

    }
}
*/