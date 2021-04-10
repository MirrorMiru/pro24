const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(400,550,50)
    rubber2 = new Rubber(800,550,10)
    rubber3 = new Rubber(830,550,10)
    rubber4 = new Rubber(850,550,10)
    rubber5 = new Rubber(870,550,10)
    rock1 = new Rock(300,550, 50,50)
    rock2 = new Rock(120,550, 70,70)
    sand1 = new sand(950, 550,5)
    sand2 = new sand(952, 550,5)
    sand3 = new sand(955, 550,5)
    sand4 = new sand(960, 550,5)
    sand5 = new sand(965, 550,5)
    iron1 = new Iron(1000,550,55,55)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display()
    rubber2.display()
    rubber3.display()
    rubber4.display()
    rubber5.display()
    rock1.display()
    rock2.display()
    sand1.display()
    sand2.display()
    sand3.display()
    sand4.display()
    sand5.display()
    iron1.display()
    
 
}