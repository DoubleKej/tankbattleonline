/**
 * Created by kej on 22/05/2016.
 */
class Animation{
    constructor(x,y,name,number,speed){

        this.x = x;
        this.y = y;
        this.count = 0;
        this.speed = speed;
        this.countFrame = number;
        this.sprites = new Array();
        this.index = 0;
        for(var i = 1; i <= number; i++){
            var image = new Image();
            var dir = "images/"+name+i+".png";
            image.src = dir;
            this.sprites.push(image);
        }
    }
    update(){
        this.count++;
        if(this.count >= this.speed){
            this.count = 0;
            this.index++;
            this.index = this.index % this.countFrame;
        }
        
    }
    draw(context){
        context.drawImage(this.sprites[this.index],this.x,this.y);
    }
}
