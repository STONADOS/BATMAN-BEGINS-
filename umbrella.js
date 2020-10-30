class umbrella{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 50, 100);
        this.width = 200;
        this.height = 450;
        World.add(world, this.body)
    }
display(){
    var pos = this.body.position;
        
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
    
}
}