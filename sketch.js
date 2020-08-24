const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(930,350,70,70);
    box3 = new Box(700,250,70,70);
    box4 = new Box(930,250,70,70);
    box5 = new Box(805,175,70,70);
    ground = new Ground(600,height,1200,20);
    bird1 = new Bird (805,350);
    log1 = new Log (810,300,300,PI/2);
    log2 = new Log (800,205,300,PI/2);
    log3 = new Log (750,175,125,PI/7);
    log4 = new Log (870,175,125,-PI/7);
    
    pig1 = new Pig (805,265);
    pig2 = new Pig (805,360);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    text(mouseX+","+mouseY,200,20);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
}