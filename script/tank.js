/**
 * Created by kej on 16/05/2016.
 */

class Tank{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.speedX=0;
        this.speedY=0;
        this.sprite = new Image();
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.spriteDown.src = "images/tank_player1_down_c0_t2_s1.png";
        this.spriteUp.src = "images/tank_player1_up_c0_t2_s1.png";
        this.spriteLeft.src = "images/tank_player1_left_c0_t2_s1.png";
        this.spriteRight.src = "images/tank_player1_right_c0_t2_s1.png";
        // this.spriteDown.src = "images/fighter_down.png";
        // this.spriteUp.src = "images/fighter_up.png";
        // this.spriteLeft.src = "images/fighter_left.png";
        // this.spriteRight.src = "images/fighter_right.png";
        this.bullets = new Array() ;
        this.sprite = this.spriteUp;
        this.direction = 1;
    }
    update(){
        var isMove = true;
        var rect1 = {x:this.x+this.speedX, y:this.y+this.speedY, width:32, height:32};

        for(var i = 0; i< brickArray.length; i++){
            var rect2 = {x:brickArray[i].x, y:brickArray[i].y, width:16, height:16};
            if(this.checkCollision(rect1,rect2)==true){
                isMove= false;
                break;
            }
        }
        for(var i = 0; i< steelArray.length; i++){
            var rect2 = {x:steelArray[i].x, y:steelArray[i].y, width:16, height:16};
            if(this.checkCollision(rect1,rect2)==true){
                isMove= false;
                break;
            }
        }
        for(var i = 0; i< waterArray.length; i++){
            var rect2 = {x:waterArray[i].x, y:waterArray[i].y, width:16, height:16};
            if(this.checkCollision(rect1,rect2)==true){
                isMove= false;
                break;
            }
        }
        if(isMove==true){
            this.x += this.speedX;
            this.y += this.speedY;
        }
        for( var i =0; i<this.bullets.length; i++){
            this.bullets[i].update();
        }

    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
        for( var i =0; i<this.bullets.length; i++){
            this.bullets[i].draw(context);
        }
    }
    move(direction){
        switch (direction){
            case 1:
                this.speedY= -3;
                this.speedX= 0;
                this.sprite = this.spriteUp;
                this.direction =1;
                break;
            case 2:
                this.speedY= 3;
                this.speedX= 0;
                this.sprite = this.spriteDown;
                this.direction = 2;
                break;
            case 3:
                this.speedY= 0;
                this.speedX= -3;
                this.sprite = this.spriteLeft;
                this.direction = 3;
                break;
            case 4:
                this.speedY= 0;
                this.speedX= 3;
                this.sprite = this.spriteRight;
                this.direction = 4;
                break;
        }
    }
    shoot(){
        var bullet = new Bullet(this.x+12, this.y+12, this.direction);
            this.bullets.push(bullet);
    }
    checkCollision(rect1, rect2){
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            // collision detected!
            return true;
        }
        return false;
    }
}