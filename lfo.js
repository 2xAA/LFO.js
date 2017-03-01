// Copyright (c) 2017 Guillaume Bauer

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

//GitHub: http://github.com/TheTeapot418/LFO.js

function LFO (param) {
	this.startTime = new Date().getTime();
	
	var param = param || {};
	
	this.freq = 1;
	this.amplitude = 2;
	
	this.set = function (param) {
		
		var param = param || {};
		
		this.freq = param.freq || this.freq;
		this.amplitude = param.amplitude || this.amplitude;
		
		switch (param.waveform) {
		case "sine":
			this.waveform = Math.sin;
			break;
			
		case "triangle":
			this.waveform = function(x) {
				if (x <= Math.PI) {
					return x / (Math.PI / 2) - 1;
				} else {
					return (x - (Math.PI)) / (-Math.PI / 2) + 1;
				}

			}
			break;
			
		case "square":
			this.waveform = function(x) {
				if (x <= Math.PI) {
					return -1;
				} else {
					return 1;
				}
			}
			break;
			
		case "sawtooth":
			this.waveform = function(x) {
				return x / Math.PI - 1;
			}
			break;
			
		case "noise":
			this.waveform = function(x) {
				return Math.random() * 2 - 1;
			}
			break;
			
		default:
			this.waveform = param.waveform || this.waveform;
		}
	}
	
	this.set(param);
	
	this.value = function() {
		var T = 1 / this.freq;
		var d = new Date().getTime();
		var a = (d - this.startTime) / 1000;
		var x = this.freq * a;
		x = x - Math.floor(x);
		
		return (this.amplitude / 2) * this.waveform(x * 2 * Math.PI);
	}
	
	this.reset = function() {
		this.startTime = new Date().getTime();
	}
}