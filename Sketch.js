var balloon, balloon_Img;
var canvas;
var gameState = 0;
var score;
var END = 0;
var START = 1;
var arrow, arrow_Img;
var bow, bow_Img;
var background, backgroung_Img;

function preload() {
    balloon_Img = loadAnimation("images/Blue_balloon.jpg", "images/Green_ballon.jpg", "images/Orange_balloon.jpg", "images/Pink_balloon.jpg");
    arrow_Img = loadImage("images/");
    bow_Img = loadImage("images/");
    background_Img = loadImage("images/");
}
function setup() {
    arrow = createSprite(200,50);
    arrow.setAnimation(arrowImg);
    arrow.visible = false;

    balloon = createSprite()

    bow = createSprite();
    bow.setAnimation(bow_Img);

    background = createSprite(0,0,400,400);
    background.setAnimation();
    background.velocity = 4;
}

function draw() {
    if(gameState = 1) {
    canvas = Canvas(400, 400);

        bow.x = World.mouseX;
        bow.y = World.mouseY;

        balloon.x = random(50, 390);

    text("Score: " + score, 100, 300);

    if(arrow.isTouching(balloon)) {
        score = score + 1;
        balloon.destroy();
        arrow.destroy();
    }

    if(keyDown = 32) {
        arrow.visible = true;
        arrow.velocity = 3;
    }

    if(balloon.x > display.Width) {
        gameState = 0;
    }

    }
    if(gamestate = 0) {
        balloon.destroy();
        arrow.destroy();
        bow.destroy();

        score = 0;
    }

}