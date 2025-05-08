//declaring local variables
let gameState = "menu";
let oneScore = 0;
let twoScore = 0;
let oneScored = false;
let twoScored = false;

function setup() {
    createCanvas(400,400);
    console.log("Project Seoirl");
    console.log("v1.0.0");
    console.log("Created by 7Zeb in p5.js");
    console.log("https://7zeb.github.io");
}

function draw() {
    if (gameState === "menu") {
        background(84, 195, 235); //light blue color
        mainMenu();
    }
}


function mainMenu() {
    fill("black");
    textSize(30);
    text("Project Seoirl", 105, 100);
    
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
