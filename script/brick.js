/**
 * Created by kej on 20/05/2016.
 */
class Brick{
    constructor(x,y){
        this.x=x*16;
        this.y=y*16;
        this.sprite = new Image();
        this.sprite.src = "images/wall_brick.png";
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}
