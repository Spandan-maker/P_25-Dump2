class Paper extends BaseClass {
  constructor(x, y, r, width) {
    super(x,y,r,width);
    this.image = loadImage("Paper.png");
  }

  display()
{	
    var paperpos=this.body.position;	

    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER);
    strokeWeight(4);
    fill(255,0,255)
    imageMode(CENTER);
    image(this.image, 5,10 ,this.r, this.r);
    pop()
    
}
}
