/**
 * Created by kej on 21/05/2016.
 */
class Water{
    constructor(x,y){
        this.x=x*16;
        this.y=y*16;
        this.sprite = new Animation(this.x, this.y, "water_",2,10);
        }
    draw(context){
        this.sprite.draw(context);
    }
    update(){
        this.sprite.update(this.x, this.y);
    }
}
