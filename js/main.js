var player = new Player(100, 100, 100);
const ground = new Surface(0, 600, 1120, 50, "green");
const leftWall = new Surface(0, 0, 20, 630, "white");
const rightWall = new Surface(1120-20, 0, 20, 630, "white");
var jumpheight = 14;
let music, jump;
function setup() {
    music = loadSound("https://lmaoyeet.github.io/barnacle/assets/audio/music.mp3");
    createCanvas(16*70,9*70);
    loop();
}

function draw() {
    background("lightblue");
    // draw
    player.draw();
    ground.draw();
    leftWall.draw();
    rightWall.draw();

    // physics
    player.newton();
    player.collideBottom(ground);
    player.collideLeft(leftWall);
    player.collideRight(rightWall);
}
function keyPressed() {
    if(keyCode == UP_ARROW) {
        if(player.onGround) {
            player.yv = 0;
            player.yv -= jumpheight;
        } else {
            // error sound
        }
    } else if(keyCode == DOWN_ARROW) {
        // player.yv += 15;
    } else if(keyCode == RIGHT_ARROW) {
        player.xv += 10;
        if(player.onLeft) {
            player.yv -= jumpheight + jumpheight/2;
        }
    } else if(keyCode == LEFT_ARROW) {
        player.xv -= 10;
        if(player.onRight) {
            player.yv -= jumpheight + jumpheight/2;
        }
    }
}