class Star extends Rectangle
{	constructor(x)
	{	var size = 1+Math.random()*5;
		super(x, Math.random()*canvas.height, size, size, -size);
	}

	draw()
	{	context.fillRect(this.x, this.y, this.width, this.height);
	}
}

