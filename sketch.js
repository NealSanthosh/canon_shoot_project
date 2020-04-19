// You could have multiple flags like: start, launch to indicate the state of the game.

// const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var tank;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,410,20);
    tank = new Tanker(60);
}



function draw() {
    background(0);
    Engine.update(engine);

    // Remember to update the Matter Engine and set the background.

    tank.display();
    ground.display();
   
}


function keyReleased() {
    // Call the shoot method for the cannon.
}