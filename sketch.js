var garden, gardenImg, cat1, cat2, cat3, cat4, cat1Img, cat2Img, cat3Img, cat4Img, mouse1, mouse2, mouse3, mouse4, mouse1Img, mouse2Img, mouse3Img, mouse4Img
function preload() {
catImage = loadImage("cat1.png");
catImage = loadImage("cat2.png");
catImage = loadImage("cat3.png");
catImage = loadImage("cat4.png");
gardenImage = loadImage("garden.png");
mouseImage = loadImage("mouse1.png");
mouseImage = loadImage("mouse2.png");
mouseImage = loadImage("mouse3.png");
mouseImage = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    text(mouseX + ','+ mouseY,10, 45);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

    }
}
    
