class Power extends Rectangle
{	constructor()
	{	super(canvas.width, 100+Math.random()*(canvas.height-200), 50, 50, -5);
	}

	give(actor)
	{
	}

	test(actor)
	{	if (this.collide(actor))
		{	this.give(actor);
			this.x = -2*this.width;
		}
	}
}

class Bigger extends Power
{	draw()
	{	context.font = this.width+"px Arial";
		context.fillStyle = "rgb(0, 0, 255)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCharCode(8853), this.x+this.width/2, this.y+this.height/2);
	}

	give(actor)
	{	actor.width *= 1.2;
		actor.height *= 1.2;
		velocidade *= 0.93 - options.difficulty * 0.07;
		sounds.actorCollideSizePower.play();
	}
}

class Smaller extends Power
{	draw()
	{	context.font = this.width+"px Arial";
		context.fillStyle = "rgb(255, 0, 0)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCharCode(8854), this.x+this.width/2, this.y+this.height/2);
	}

	give(actor)
	{	actor.width *= 0.8;
		actor.height *= 0.8;
		velocidade *= 1.07 + options.difficulty * 0.07;
		sounds.actorCollideSizePower.play();
	}
}

class Ghost extends Power
{	draw()
	{	context.font = this.width+"px Arial";
		context.fillStyle = "rgb(0, 255, 0)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCharCode(9762), this.x+this.width/2, this.y+this.height/2);
	}

	give(actor)
	{	actor.ghost.counter = actor.ghost.time;
		sounds.actorCollideGhostPower.play();
	}
}

class LaserAmmo extends Power
{	draw()
	{	context.font = this.width+"px Arial";
		context.fillStyle = "rgb(255, 0, 255)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCharCode(8888), this.x+this.width/2, this.y+this.height/2);
	}

	give(actor)
	{	actor.ammo.laser++;
		sounds.actorCollideLaserAmmoPower.play();
	}
}

class BulletAmmo extends Power
{	draw()
	{	context.font = this.width+"px Arial";
		context.fillStyle = "rgb(255, 0, 255)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCodePoint(128165), this.x+this.width/2, this.y+this.height/2);
	}

	give(actor)
	{	actor.ammo.bullet+=5;
		sounds.actorCollideLaserAmmoPower.play();
	}
}

class Food extends Power
{	draw()
	{	context.font = this.width+"px Arial";
		context.fillStyle = "rgb(255, 0, 255)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCodePoint(129382), this.x+this.width/2, this.y+this.height/2);
	}

	give(actor)
	{	
		if(actor.health>80){
			actor.lifes++
			actor.health = 100 - actor.health;
		}
		else{
			actor.health+=20;
		}
	}
}

class Life extends Power
{	draw()
	{	context.font = this.width+"px Arial";
		context.fillStyle = "rgb(255, 0, 0)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCharCode(10084), this.x+this.width/2, this.y+this.height/2);
	}

	give(actor)
	{	
		actor.lifes++;
	}
}

