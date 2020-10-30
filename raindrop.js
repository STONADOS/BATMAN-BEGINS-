class rain {
    constructor(x, y){
        var options={
            restitution: 0.1,
            friction: 0.001
         };
        this.body = Bodies.circle(x, y, 20, options);
        this.r = 10;
        this.y= y
        this.x = x;
        World.add(world, this.body);
    }

display(){
    var pos = this.body.position;
    
    ellipseMode(CENTER);
    fill("blue");
    ellipse(pos.x, pos.y, this.r, this.r);

    if(frameCount % 1 == 0){
        pos.y += random(10, 20)
    }
    if(pos.y > displayHeight + 30){
        Body.setPosition(this.body, {x:random(10, 400), y: 0})
    }

    
}

}