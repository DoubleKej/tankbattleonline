/**
 * Created by kej on 16/05/2016.
 */

var context;
var map;
var socket;
var brickArray = new Array();
var steelArray = new Array();
var waterArray = new Array();
var treeArray = new  Array();
var enemyTanks = new Array();
    window.onload = function () {
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop, 17);
     map = [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2],
            [2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 2, 2, 0, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ];
        for(var i=0; i<26;i++){
            for(var j=0; j<26;j++){
                if(map[i][j]==1){
                    var brick = new Brick(i,j);
                    brickArray.push(brick);
                }
                if(map[i][j]==2){
                    var steel = new Steel(i,j);
                    steelArray.push(steel);
                }
                if(map[i][j]==3){
                    var water = new Water(i,j);
                    waterArray.push(water);
                }
                if(map[i][j]==4){
                    var tree = new Tree(i,j);
                    treeArray.push(tree);
                }
            }
        }
        initSocketClient();
}
var player;
var countBullet = 0;
//var bullet = [];

var gameLoop = function () {
    gameUpdate();
    gameDrawer(context);

};
function gameStart() {
    player = new Tank(100,100);

}

function initSocketClient() {
    socket = io.connect();
    socket.emit('player_created',{x:player.x,y:player.y});
    socket.on('player_id',function (data) {
        console.log(data.id);
        player.id = data.id;
        for (var i = 0; i < data.tanks.length; i++) {
            var enemy = new Tank(data.tanks[i].x, data.tanks[i].y);
            enemy.id = data.tanks[i].id;
            enemyTanks.push(enemy);
        }
    });
    socket.on('new_player_connected', function (data) {
        var newTank = new Tank(data.x,data.y);
        newTank.id = data.id;
        enemyTanks.push(newTank);
    });
    socket.on('enemy_update', function (data) {
        for (var i = 0; i < enemyTanks.length; i++){
            if (enemyTanks[i].id == data.id){
                enemyTanks[i].direction = data.direction;
                enemyTanks[i].x = data.x;
                enemyTanks[i].y = data.y;
                enemyTanks[i].sprite.x = data.x;
                enemyTanks[i].sprite.y = data.y;
                console.log(data.id + "-" +data.x + " " + data.y);
                break;
            }
        }
    })
}

function gameUpdate() {
    player.update();
    player.bulletTouchBrick();
    player.bulletTouchSteel();
    socket.emit('player_update',{x: player.x, y: player.y, id: player.id, direction: player.direction});
    for (var i = 0; i < enemyTanks.length; i++){
        enemyTanks[i].update();
    }
    for(var i = 0; i <waterArray.length; i++){
        waterArray[i].update();
    }
    for(var i = 0; i <enemyTanks.length; i++){
        enemyTanks[i].update();
    }
    // bullet.update();
}

function gameDrawer(context) {
    context.fillStyle = "black";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
    for(var i=0;i<enemyTanks.length;i++){
        enemyTanks[i].draw(context);
    }
    for(var i=0;i<waterArray.length;i++){
        waterArray[i].draw(context);
    }
    player.draw(context);
    for(var i=0;i<brickArray.length;i++){
        brickArray[i].draw(context);
    }
    for(var i=0;i<steelArray.length;i++){
        steelArray[i].draw(context);
    }

    for(var i=0;i<treeArray.length;i++){
        treeArray[i].draw(context);
    }
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
        case 32:
            countBullet +=1;
            player.shoot();
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