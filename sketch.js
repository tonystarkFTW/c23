const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxes1
var land

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    boxes1 = new box(200,200,100,50);
    land = new ground(200,390,400,10);
    }

function draw(){
    background(0);
    Engine.update(engine);
    boxes1.display();
    land.display();
}