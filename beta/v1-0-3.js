//declaring local variables
let gameState = "menu";
let oneScore = 0;
let twoScore = 0;
let oneScored = false;
let twoScored = false;

function setup() {
    createCanvas(400,400);
    console.log("Project Seoirl");
    console.log("v1.0.3");
    console.log("Created by 7Zeb in p5.js");
    console.log("https://7zeb.github.io");
}

function draw() {
    if (gameState === "menu") {
        background(84, 195, 235); //light blue color
        mainMenu();
    } else if (gameState === "tutorial") {
        tutorial();
    } else if (gameState === "gameplay") {
        background("orange");
        goalArea();
        wallOne();
        wallTwo();
        wallThree();
        wallFour();
        bumpWall();
        scoreBoard();
        spriteOne();
        spriteTwo();
    }
}

function keyPressed() {
    
    //to go to tutorial
    if (key == 't') {
        gameState = "tutorial";
        redraw();
    }
    
    //to go back to main menu
    if (gameState === "tutorial" && key == 'm') {
        gameState = "menu";
        redraw();
    }
    
    //to go to gameplay
    if (gameState === "menu" && keyCode === ENTER) {
        gameState = "gameplay";
        redraw();
    }
}


function mainMenu() {
    fill("black");
    textSize(30);
    text("Project Seoirl", 105, 100);
    
    fill("orange");
    textSize(20);
    text("Beta Release",135,130);
    
    fill("darkblue");
    textSize(20);
    text("Press ENTER to start", 110,250);
    
    fill("yellow");
    text("Press T to go to tutorial", 105,280);
    
    fill("green");
    textSize(15);
     text("Game available on website", 120, 300);
    text("7zeb.github.io",160,320)
}

function tutorial() {
    background("blue")
    fill("white");
    textSize(20);
    text("HOW TO PLAY", 125, 40);
    
    textSize(15);
    text("Use Arrow keys to move the green character",50,60);
    text("Use WASD keys to move the blue character",50,80);
    text("Try not to bump into walls, as you will be reset",45,100);
    text("Press R to restart the game", 105,140);
    text("Press M to go back to main menu",80,160)
    
    textSize(12);
    text("The goal is in the middle, once you get there the scoreboard will update",10,120);
}
