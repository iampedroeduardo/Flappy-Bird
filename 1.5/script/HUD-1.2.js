class HUD
{	draw()
	{	context.font = "50px Arial";
		context.textAlign = "left";
		context.textBaseline = "top";

		context.fillStyle = "rgb(255, 0, 0)";
		context.fillText(String.fromCharCode(10084), 10, 10);
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillText(actor.lifes, 70, 10);

		context.fillStyle = "rgb(255, 255, 255)";
		context.fillRect(120, 15, 100, 30);
		context.fillStyle = "rgb(255, 0, 0)";
		context.fillRect(120, 15, actor.health, 30);

		context.fillStyle = "rgb(255, 0, 255)";
		context.fillText(String.fromCharCode(8888), 10, 50);
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillText(actor.ammo.laser, 70, 50);

		context.fillStyle = "rgb(255, 0, 255)";
		context.fillText(String.fromCodePoint(128165), 5, 90);
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillText(actor.ammo.bullet, 70, 90);

		context.fillStyle = "rgb(0, 0, 0)";
		context.fillText(String.fromCharCode(9876), 10, 130);
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillText(actor.points, 70, 130);
	}
}

