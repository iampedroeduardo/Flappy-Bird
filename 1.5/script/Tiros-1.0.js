class Tiros
{	constructor(type)
	{	this.type = type;
		this.beams = [];
	}

	fire(x, y, owner)
	{	this.beams.push(new this.type(x, y, owner));
		sounds.actorFireLaser.play();
	}

	iterate(rectangles)
	{	for (var beam = 0; (beam < this.beams.length); beam++)
		{	this.beams[beam].draw();

			this.beams[beam].test(rectangles);

			this.beams[beam].update();

			if (this.beams[beam].x+this.beams[beam].width > canvas.width)
			{	this.beams.splice(beam, 1);
				beam--;
			}
		}
	}
}

