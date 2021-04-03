const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,st1,st2,st3,st4,st5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    st1 = new Stone (280,250,80,80)
    st2 = new Stone (300,350,50,50)
    st3 = new Stone (400,280,30,30)
    st4 = new Stone (550,380,60,60)
    st5 = new Stone (700,550,90,90)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    st1.display();
    st2.display();
    st3.display();
    st4.display();
    st5.display();

    
 
}