function insert (v) {
	for (var i = 0; i < values.length; i++) {
		if (i == values.length-1) {
			values[i] = v;
			break;
		}
		values[i] = values[i+1];
	}
}

var scene = document.getElementById('scene');
var ctx = scene.getContext('2d');
var values = [];

ctx.strokeStyle = "white";

for (var i = 0; i < scene.width; i++) {
	values[i] = 0;
}

function loop () {
	requestAnimationFrame(loop);

	ctx.clearRect(0, 0, scene.width, scene.height);
	ctx.beginPath();
	
	var v = lfo.value();
	insert(v);
	ctx.moveTo(0, -values[0] + 150);
	
	for (var i = 1; i < values.length; i++) {
		ctx.lineTo(i, -values[i]+150);
	}
	
	ctx.stroke();
	ctx.closePath();
}

var lfo = new LFO ({
    freq: 1.3,
    amplitude: 15,
    waveform: function (x) {
        if (x < Math.PI) {
            return 1;
        } else {
            return -1;
        }
    }
});
loop();