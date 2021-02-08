const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg, bob;

var d = 50;

function preload() {
    // backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width / 2, 50, windowWidth, 50);

    bob1 = new Paper(width / 2 - 100, 200, 25);
    bob2 = new Paper(width / 2 - 50, 200, 25);
    bob3 = new Paper(width / 2, 200, 25);
    bob4 = new Paper(width / 2 + 50, 200, 25);
    bob5 = new Paper(width / 2 + 100, 200, 25);

    rope1 = new Rope(bob1.body, ground.body, -2 * d, 0);
    rope2 = new Rope(bob2.body, ground.body, -1 * d, 0);
    rope3 = new Rope(bob3.body, ground.body, 0, 0);
    rope4 = new Rope(bob4.body, ground.body, 1 * d, 0);
    rope5 = new Rope(bob5.body, ground.body, 2 * d, 0);


}

function draw() {
    background(255);
    Engine.update(engine);

    ground.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}