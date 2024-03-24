class Sprites
{	constructor(image, width, height, size, wait)
	{	this.image = new Image();
		this.image.src = image;
		this.width = width;
		this.height = height;
		this.size = size;
		this.wait = wait;
		this.counter = wait;
		this.actual = 0;
	}

	draw(x, y, width, height)
	{	context.drawImage(this.image, this.actual*this.width, 0, this.width, this.height, x, y, width, height);
	}

	update()
	{	if (--this.counter == 0)
		{	this.counter = this.wait;
			this.actual = (this.actual+1)%this.size;
		}
	}
}

