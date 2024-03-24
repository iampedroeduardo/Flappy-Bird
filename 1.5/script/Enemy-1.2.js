class Enemy extends Rectangle
{	constructor()
	{	var scale = 0.1+(options.difficulty*0.1)+Math.random()*(0.1+(options.difficulty*0.1));
		super(canvas.width, 100+Math.random()*(canvas.height-200), 471*scale, 469*scale, -5);
		this.sprites = new Sprites("./img/ghost-1x1-471x469.png", 471, 469, 1, 0);
		this.totalhealth = 100*this.width/100;
		this.health = this.totalhealth
	}

	draw()
	{	
		context.fillStyle = "rgb(255, 255, 255)";
		context.fillRect(this.x, this.y-3, this.width, 3);

		context.fillStyle = "rgb(0, 0, 255)";
		context.fillRect(this.x, this.y-3, this.width*this.health/this.totalhealth, 3);
		this.sprites.draw(this.x, this.y, this.width, this.height);
	}

	test(actor)
	{	if ((this.collide(actor)) && (actor.ghost.counter == 0))
		{	actor.hurt(this.health*0.7);
			this.x = -this.width;
			sounds.actorCollideEnemy.play();
		}
	}
}
class Smart extends Enemy{
	update(){
		super.update();
		this.y += Math.sign(actor.y - this.y)*5;
	}
}
class Fire extends Enemy{
	fire(){
		if(Math.random()<0.002+(0.002*options.difficulty)){
			enemybullets.fire(this.x+this.width/2, this.y+this.height/2-1, this);
		}
	}
}