parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"PXcJ":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.playBtn=document.getElementById("play"),exports.stopBtn=document.getElementById("stop"),exports.gainRange=document.getElementById("gain"),exports.sineSpeed=document.getElementById("sinewave-speed"),exports.sineLoadBtn=document.getElementById("load-sinewave"),exports.sampleSpeed=document.getElementById("sample-speed"),exports.kickLoadBtn=document.getElementById("load-kick");
},{}],"DG8J":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(){this.audioCtx=new AudioContext,this.mixerNode=this.audioCtx.createScriptProcessor(1024,1,1),this.masterGainNode=this.audioCtx.createGain(),this.masterGainNode.gain.value=.5,this.masterGainNode.connect(this.audioCtx.destination)}return t.prototype.load=function(t){this.mixerNode.onaudioprocess=t},t.prototype.play=function(){this.mixerNode.connect(this.masterGainNode)},t.prototype.stop=function(){this.mixerNode.disconnect()},t.prototype.getMasterGain=function(){return this.masterGainNode.gain.value},t.prototype.setMasterGain=function(t){console.log(t),this.masterGainNode.gain.value=t},t}();exports.ngPlayer=t;
},{}],"Wiuz":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.sineWave=function(t,e,n){void 0===t&&(t=.2),void 0===e&&(e=1),void 0===n&&(n=0);var o=n;return function(n){for(var r=n.outputBuffer.getChannelData(0),i=0;i<r.length;++i)o+=t,r[i]=Math.sin(o)*e}},exports.kick=function(t,e,n,o){void 0===t&&(t=1),void 0===e&&(e=1),void 0===n&&(n=0),void 0===o&&(o=!0);var r=[.75,.9,1,.9,.5,.1,0,.1,.5,.75,.85,.9,.85,.75,.5,.25,.15,.1,.15,.25,.4,.5,.6,.75,.8,.85,.8,.75,.6,.5,.4,.3,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.66,.62,.6,.55,.5,.48,.45,.44,.45,.46,.48,.5,.52,.54,.55,.54,.52,.51,.5],i=n;return t*=.02,function(e){for(var n=e.outputBuffer.getChannelData(0),a=0;a<n.length;++a)if(i+=t,!0===o&&i>r.length&&(i=0),i>r.length)n[a]=.5;else{var u=Math.floor(i),v=r[u]-(r[u]-(u===r.length?r[0]:r[u+1]))*(i-u);n[a]=v}}};
},{}],"ZCfc":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./constant"),a=require("./player/player"),n=require("./player/sample"),i=new a.ngPlayer;e.playBtn.onclick=function(){i.play()},e.stopBtn.onclick=function(){i.stop()},e.gainRange.value=i.getMasterGain().toString(),e.gainRange.onchange=function(a){i.setMasterGain(parseFloat(e.gainRange.value))},e.sineSpeed.value="0.2",e.sineLoadBtn.onclick=function(){i.load(n.sineWave(parseFloat(e.sineSpeed.value)))},e.kickLoadBtn.onclick=function(){i.load(n.kick(parseFloat(e.sampleSpeed.value)))},i.load(n.sineWave(parseFloat(e.sineSpeed.value)));
},{"./constant":"PXcJ","./player/player":"DG8J","./player/sample":"Wiuz"}]},{},["ZCfc"], null)
//# sourceMappingURL=main.b541a3d4.map