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
			{	
				if (rectangles[rectangle] instanceof Enemy)
				{	
					this.owner.points += parseInt(rectangles[rectangle].totalhealth);
					enemies.kill(rectangles[rectangle]);
					sounds.laserCollideEnemy.play();
				}
			}
		}
	}
}

class Bullet extends Rectangle
{	constructor(x, y, owner)
	{	super(x, y, 10, 3, 25);
		this.owner = owner;
	}

	draw()
	{	context.fillStyle = "rgb(0, 0, 255)";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	update()
	{	this.x += this.velocity;
	}

	test(rectangles)
	{	for (var rectangle = 0; (rectangle < rectangles.length); rectangle++)
		{	if (this.collide(rectangles[rectangle]))
			{	this.width = canvas.width;
				if (rectangles[rectangle] instanceof Enemy)
				{	
					rectangles[rectangle].health -= 20
					if(rectangles[rectangle].health<=0){
						this.owner.points += parseInt(rectangles[rectangle].totalhealth);
						enemies.kill(rectangles[rectangle]);
						sounds.laserCollideEnemy.play();
					}
				}
			}
		}
	}
}

class EnemyBullet extends Rectangle{
	constructor(x, y, owner)
	{	super(x, y, 10, 3, -25);
		this.owner = owner;
	}

	draw()
	{	context.fillStyle = "rgb(0, 0, 255)";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	update()
	{	this.x += this.velocity;
	}

	test(actor)
	{	
		if (this.collide(actor) && actor.ghost.counter==0)
		{	this.x = canvas.width;
			actor.hurt(20);
		}
		
	}
}
