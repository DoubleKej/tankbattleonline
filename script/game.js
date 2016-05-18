/**
 * Created by kej on 16/05/2016.
 */
var context;
    window.onload = function () {
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop, 17);
}
var player;
var gameLoop = function () {
    gameUpdate();
    gameDrawer(context);

}
function gameStart() {
    player = new tank(100,100);
}

function gameUpdate() {
    player.update();
}

function gameDrawer(context) {
    context.fillStyle = "pink";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
    player.draw(context);
}

window.onkeydown = function (e) {
    switch (e.keyCode){
        case 87:
            player.move(1);
            break;
        case 83:
            player.move(2);
            break;
        case 65:
            player.move(3);
            break;
        case 68:
            player.move(4);
            break;

    }
}
window.onkeyup =function (e) {
    switch (e.keyCode){
        case 65://a
            if(player.speedX < 0){
                player.speedX = 0;
            }
            break;
        case 68://d
            if(player.speedX > 0){
                player.speedX = 0;
            }
            break;
        case 83://s
            if(player.speedY > 0){
                player.speedY = 0;
            }
            break;
        case 87://w
            if(player.speedY < 0){
                player.speedY = 0;
            }
            break;
    }
};