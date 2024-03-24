class Actor extends Rectangle
{	constructor()
	{	super(100, canvas.height/2, 388/3, 287/3, 0);
		this.sprites = new Sprites("./img/bird-4x1-388x287.png", 388, 287, 4, 2);
		this.ghost = {time: (7.5-(2.5*options.difficulty))*FPS, counter: 0};
		this.ammo = {laser: 3, bullet: 10};
		this.lifes = 3;
		this.health = 100;
		this.points = 0;
	}

	draw()
	{	if (this.ghost.counter > 0)
		{	context.save();
			context.globalAlpha = 0.3;
		}

		this.sprites.draw(this.x, this.y, this.width, this.height);

		if (this.ghost.counter > 0)
		{	context.restore();

			context.fillStyle = "rgb(255, 255, 255)";
			context.fillRect(this.x, this.y, this.width, 3);

			context.fillStyle = "rgb(0, 0, 255)";
			context.fillRect(this.x, this.y, this.width*this.ghost.counter/this.ghost.time, 3);
		}

		this.sprites.update();
	}

	update()
	{	this.velocity += 2; //gravidade
		this.y += this.velocity;

		this.y = Math.max(5, Math.min(canvas.height-this.height-5, this.y));

		if (this.ghost.counter > 0)
		{	this.ghost.counter--;
		}
	}

	fire(type)
	{	if (type == "laser" && this.ammo.laser > 0)
		{	this.ammo.laser--;
			lasers.fire(this.x+this.width/2, this.y+this.height/2-1, this);
		}
		if (type == "bullet" && this.ammo.bullet > 0)
		{	this.ammo.bullet--;
			bullets.fire(this.x+this.width/2, this.y+this.height/2-1, this);
		}
	}

	hurt(damage)
	{	
		this.health -= damage;
		if (this.health <= 0)
		{	if (--this.lifes == 0)
			{	this.health = 0;
				this.velocity = 0;
				this.sprites = new Sprites("./img/rip-1x1-573x684.png", 573, 684, 1, 0);
				this.state = "down";
				sounds.actorDeath.play();
				document.removeEventListener("keypress",onKeyPress);
				clearInterval(timer);
				timer = setInterval(loop2, 1000/FPS);
			}
			else
			{	this.health = 100;
			}
		}
	}
}

