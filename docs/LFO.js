!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LFO=t():e.LFO=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";e.exports=r(1).default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.startTime=(new Date).getTime(),this.freq=1,this.amplitude=2,this.waveform=null,this.set(t)}return i(e,[{key:"set",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(this.freq=e.freq||this.freq,this.amplitude=e.amplitude||this.amplitude,e.waveform){case"sine":this.waveform=Math.sin;break;case"triangle":this.waveform=function(e){return e<=Math.PI?e/(Math.PI/2)-1:(e-Math.PI)/(-Math.PI/2)+1};break;case"square":this.waveform=function(e){return e<=Math.PI?-1:1};break;case"sawtooth":this.waveform=function(e){return e/Math.PI-1};break;case"noise":this.waveform=function(){return 2*Math.random()-1};break;default:this.waveform=e.waveform||this.waveform}}},{key:"reset",value:function(){this.startTime=(new Date).getTime()}},{key:"value",get:function(){var e=(new Date).getTime(),t=(e-this.startTime)/1e3,r=this.freq*t;return r-=Math.floor(r),this.amplitude/2*this.waveform(r*(2*Math.PI))}}]),e}();t.default=o}])});