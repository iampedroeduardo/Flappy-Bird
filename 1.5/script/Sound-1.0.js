class Sound
{	constructor(sound)
	{	this.audio = document.createElement("audio");
		this.audio.src = sound;
		this.audio.controls = false;
		this.audio.autoplay = false;
		this.audio.loop = false;
	}

	play()
	{	
		if(options.sound){
			this.audio.currentTime = 0;
			this.audio.play();
		}
	}
}

