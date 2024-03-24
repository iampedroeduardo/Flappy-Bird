class Powers
{	constructor()
	{	this.powers = [];
	}

	iterate(actor)
	{	for (var power = 0; (power < this.powers.length); power++)
		{	this.powers[power].draw();

			this.powers[power].test(actor);

			this.powers[power].update();

			if (this.powers[power].x+this.powers[power].width < 0)
			{	this.powers.splice(power, 1);
				power--;
			}
		}
		if (Math.random() < 0.01)
		{	this.powers.push(new probability[0][options.difficulty][Math.floor(Math.random()*10)]());
		}
	}
}

