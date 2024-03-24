class Stars
{	constructor()
	{	this.stars = [];
		while (this.stars.length < 50)
		{	this.stars.push(new Star(Math.random()*canvas.width));
		}
	}

	iterate()
	{	context.fillStyle = "rgb(0, 0, 0)";
		for (var star = 0; (star < this.stars.length); star++)
		{	this.stars[star].draw();

			this.stars[star].update();

			if (this.stars[star].x < 0)
			{	this.stars.splice(star, 1);
				star--;
				this.stars.push(new Star(canvas.width));
			}
		}
	}
}

