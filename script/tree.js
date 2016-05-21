/**
 * Created by kej on 22/05/2016.
 */
class Tree{
    constructor(x,y){
        this.x=x*16;
        this.y=y*16;
        this.sprite = new Image();
        this.sprite.src = "images/trees.png";
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}
