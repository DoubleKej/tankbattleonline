/**
 * Created by kej on 21/05/2016.
 */
class Water{
    constructor(x,y){
        this.x=x*16;
        this.y=y*16;
        this.sprite = new Image();
        this.sprite.src = "images/water_1.png";
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}
