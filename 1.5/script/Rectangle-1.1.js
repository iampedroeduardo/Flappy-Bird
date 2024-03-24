class Rectangle
{	constructor(x, y, width, height, velocity)
	{	this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.velocity = velocity;
	}

	draw()
	{	context.strokeStyle = "rgb(0, 0, 0)";
		context.strokeRect(this.x, this.y, this.width, this.height);
	}

	update()
	{	this.x += this.velocity;
	}

	inside(x, y)
	{	return((x >= this.x) && (x <= this.x+this.width) && (y >= this.y) && (y <= this.y+this.height));
	}

	collide(other)
	{	return(this.inside(other.x, other.y) || this.inside(other.x+other.width, other.y) || this.inside(other.x+other.width, other.y+other.height) || this.inside(other.x, other.y+other.height) || other.inside(this.x, this.y) || other.inside(this.x+this.width, this.y) || other.inside(this.x+this.width, this.y+this.height) || other.inside(this.x, this.y+this.height));
	}
}

