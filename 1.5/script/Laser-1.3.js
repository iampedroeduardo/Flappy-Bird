class Laser extends Rectangle
{	constructor(x, y, owner)
	{	super(x, y, 0, 3, 50);
		this.owner = owner;
	}

	draw()
	{	context.fillStyle = "rgb(255, 0, 255)";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	update()
	{	this.width += this.velocity;
	}

	test(rectangles)
	{	for (var rectangle = 0; (rectangle < rectangles.length); rectangle++)
		{	if (this.collide(rectangles[rectangle]))
			{	this.width = canvas.width;
				if (rectangles[rectangle] instanceof Enemy)
				{	enemies.kill(rectangles[rectangle]);
					this.owner.points += 100;
					sounds.laserCollideEnemy.play();
				}
			}
		}
	}
}

