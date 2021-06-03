class Ball{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.7,
        }
        this.ball=Bodies.circle(x,y,width,options);
        World.add(world,this.ball);
        this.w=width;
        this.h=height;
        this.image=loadImage("paper.png");
    }

    display(){
        var angle=this.ball.angle;
        push();
        translate(this.ball.position.x,this.ball.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50,50);
        pop();
    }
}