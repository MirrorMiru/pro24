class sand{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = { restitution : 0.3, friction : 1.2, density : 0.4 }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("yellow");
			//draw the ellipse here to display the rubber ball
            ellipseMode(RADIUS)
            ellipse(0,0, this.r)
			pop()
	}

}