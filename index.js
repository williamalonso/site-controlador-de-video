//declare variable
	var myVideo = document.querySelector("#video"); //retorna o elemento de id=video

//declare functions
	function playPause() {
		if(myVideo.paused) {
			myVideo.play();
		}
		else {
			myVideo.pause();
		}
	}

	function makeBig() {
		myVideo.width = 920;
	}

	function makeSmall() {
		myVideo.width = 120;
	}

	function makeNormal() {
		myVideo.width = 320;
	}

	function advance() {
		myVideo.currentTime += 10;
	}

	function voltar() {
		myVideo.currentTime -= 10;
	}

	function increase() {
		myVideo.playbackRate += 0.10;
	}

	function decrease() {
		myVideo.playbackRate -= 0.10;
	}
