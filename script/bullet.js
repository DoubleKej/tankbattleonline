/**
 * Created by kej on 18/05/2016.
 */
class Bullet{
    constructor(x,y,direction){
        this.x=x;
        this.y=y;
        this.speedX=0;
        this.speedY=0;
        this.sprite=new Image();
        this.spriteUp=new Image();
        this.spriteDown=new Image();
        this.spriteLeft=new Image();
        this.spriteRight=new Image();
        this.spriteUp.src="images/bullet_up.png";
        this.spriteDown.src=-"images/bullet_down.png";
        this.spriteLeft.src="images/bullet_left.png";
        this.spriteRight.src="images/bullet_right.png";
        this.sprite = this.spriteUp;
        
        switch(direction){
            case 1://up
                this.speedY = -4;
                this.sprite = this.spriteUp;
                break;
            case 2://down
                this.speedY = 4;
                this.sprite = this.spriteDown;
                break;
            case 3://left
                this.speedX = -4;
                this.sprite = this.spriteLeft;
                break;
            case 4://right
                this.speedX = 4;
                this.sprite = this.spriteRight;
                break;
        }
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
    draw(context){
        context.drawImage(this.sprite,this.x,this.y);
    }
    // move(direction){
    //     switch (direction){
    //         case 1:
    //             this.speedY= -5;
    //             this.speedX= 0;
    //             this.sprite = this.spriteUp;
    //             this.direction =1;
    //             break;
    //         case 2:
    //             this.speedY= 5;
    //             this.speedX= 0;
    //             this.sprite = this.spriteDown;
    //             this.direction = 2;
    //             break;
    //         case 3:
    //             this.speedY= 0;
    //             this.speedX= -5;
    //             this.sprite = this.spriteLeft;
    //             this.direction = 5;
    //             break;
    //         case 4:
    //             this.speedY= 0;
    //             this.speedX= 5;
    //             this.sprite = this.spriteRight;
    //             this.direction = 4;
    //             break;
    //     }
    // }
}

