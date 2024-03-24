class Enemies
{	constructor()
	{	this.enemies = [];
	}

	iterate(actor)
	{	for (var enemy = 0; (enemy < this.enemies.length); enemy++)
		{	this.enemies[enemy].draw();

			this.enemies[enemy].test(actor);

			if(this.enemies[enemy].hasOwnProperty('Fire')){
				this.enemies[enemy].fire();
			}

			this.enemies[enemy].update();

			if (this.enemies[enemy].x+this.enemies[enemy].width < 0)
			{	this.enemies.splice(enemy, 1);
				enemy--;
				actor.points += 10;
			}
		}
		if (Math.random() < 0.01+actor.points/(500-200*options.difficulty)/100) //a cada 200 pontos
		{	this.enemies.push(new probability[1][options.difficulty][Math.floor(Math.random()*10)]());
		}
	}

	kill(enemy)
	{	this.enemies.splice(this.enemies.indexOf(enemy), 1);
	}
}

