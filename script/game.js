/**
 * Created by kej on 16/05/2016.
 */
var context;
    window.onload = function () {

    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop, 17);
}
var tank;
var gameLoop = function () {
    gameDrawer(context);
}
function gameStart() {
    tank = new Image();
    tank.src = "images/tank_player1_down_c0_t2_s1.png";

}

function gameDrawer(context) {
    context.drawImage(tank, 100, 100)
}
