class Paper extends BaseClass {
    constructor(x, y, r) {
      super(x,y,r);
      this.body.image = loadImage("Paper.png");
    }
    display()
	{	
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER);
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
			pop()
			
	}
  }
  
