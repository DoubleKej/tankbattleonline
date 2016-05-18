/**
 * Created by kej on 18/05/2016.
 */
class bullet{
    constructor(x,y){
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
        this.direction=1;
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
    draw(context){
        context.drawImage(this.sprite,this.x,this.y);
    }
    move(direction){
        switch (direction){
            case 87:
                this.speedY= -3;
                this.speedX= 0;
                this.sprite = this.spriteUp;
                this.direction =1;
                break;
            case 83:
                this.speedY= 3;
                this.speedX= 0;
                this.sprite = this.spriteDown;
                this.direction = 2;
                break;
            case 65:
                this.speedY= 0;
                this.speedX= -3;
                this.sprite = this.spriteLeft;
                this.direction = 3;
                break;
            case 68:
                this.speedY= 0;
                this.speedX= 3;
                this.sprite = this.spriteRight;
                this.direction = 4;
                break;
        }
    }
}

}