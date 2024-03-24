class Obstacle extends Rectangle
{	constructor(x)
	{	super(x, -1, 20+Math.random()*380, 50+Math.random()*canvas.height/(4-Math.min(actor.points/(1000-options.difficulty*300),3.9)), -10); //a cada 500 pontos
		this.color = "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
	}

	draw()
	{	context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}

class TopObstacle extends Obstacle
{	constructor(x)
	{	super(x);
		this.y = 0;
	}

	test(actor)
	{	if ((this.collide(actor)) && (actor.ghost.counter == 0))
		{	actor.y = this.height+1;
			actor.velocity = 0;
			actor.hurt(20);
			sounds.actorCollideObstacle.play();
		}
	}
}

class BottomObstacle extends Obstacle
{	constructor(x)
	{	super(x);
		this.y = canvas.height-this.height;
	}

	test(actor)
	{	if ((this.collide(actor)) && (actor.ghost.counter == 0))
		{	actor.y = this.y-actor.height-1;
			actor.velocity = -20;
			actor.hurt(30);
			sounds.actorCollideObstacle.play();
		}
	}
}

