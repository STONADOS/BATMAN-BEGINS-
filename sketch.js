// :::: CAUTION ::::
// I am 
// not
// able
// to 
// use
// gravity
// in
// my 
// project
 


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render

var manWalkingImage
var batman
var lightning1, lightning2, lightning3, lightning4;
var maxDrops = 100;
var drops = [];

var world, engine;

var rectangleee;

function preload(){
    manWalkingAnimation= loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
    lightning1 = loadImage("1.png");
    lightning2 = loadImage("2.png");
    lightning3 = loadImage("3.png");
    lightning4 = loadImage("4.png");

}

function setup(){
    createCanvas(400, displayHeight);

    
    engine = Engine.create();
    world = engine.world;

   batman = createSprite(200, (displayHeight / 2) + 70);
   batman.addAnimation("walking", manWalkingAnimation);
   batman.scale = 0.7;

   for(var i = 0; i < maxDrops; i++){
        drops.push(new rain(random(0, 400), random(-80, 0)));

        }
    

    rectangleee = new umbrella(200, 510);
}

function draw(){
    background("black");

    if(frameCount % 30 == 0){
        var lighting = createSprite(random(60, 340), 100);
        
        var rand = Math.round(Math.random(1,2));
        switch(rand){
            case 1: lighting.addImage(lightning1);
                    break;
            case 2: lighting.addImage(lightning2);
                    break;
            case 3: lighting.addImage(lightning3);
                    break;
            case 4: lighting.addImage(lightning4);
                    break;
            default: lighting.addImage(lightning4);
        }

        lighting.scale = 0.5;
        lighting.lifetime = 20;
    }
   
    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        }

    // rectangleee.display();
        

drawSprites();

}   

