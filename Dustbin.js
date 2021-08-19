class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            'isStatic' : true
        }
        
        this.image = loadImage("Sprites/trash can.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        

        World.add(world, this.body);
      }
      display(){
       var pos  =(this.body.position)
          rectMode(CENTER);
          fill("white");
          imageMode(CENTER);
        image( this.image,200,640,100,100);
      }
}