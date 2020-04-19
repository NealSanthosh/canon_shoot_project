class Tanker {
  constructor(x) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, 360, 50, 60, options);
     this.hight = 60;
     this.width = 50;

     World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.

      var pos = this.body.position;

      rect(pos.x + 10,340,80,20,PI/9);
      ellipse(pos.x - 20,355,60,60);
      rect(pos.x - 20,370,60,20);

      // You could also use an image if you want a specific look

    };
}
