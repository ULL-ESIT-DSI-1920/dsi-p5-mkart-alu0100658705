parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CN6n":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/kart-bowser.1e7ac847.png";
},{}],"dZHy":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/kart-kong.dd376576.png";
},{}],"hxgw":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/kart-luigi.28542770.png";
},{}],"LbeF":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/kart-mario.96a80e65.png";
},{}],"DrZ3":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/kart-peach.b6ed4c69.png";
},{}],"yvRD":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/kart-yoshi.f0945523.png";
},{}],"mHxV":[function(require,module,exports) {
module.exports={bowser:require("./kart-bowser.png"),kong:require("./kart-kong.png"),luigi:require("./kart-luigi.png"),mario:require("./kart-mario.png"),peach:require("./kart-peach.png"),yoshi:require("./kart-yoshi.png")};
},{"./kart-bowser.png":"CN6n","./kart-kong.png":"dZHy","./kart-luigi.png":"hxgw","./kart-mario.png":"LbeF","./kart-peach.png":"DrZ3","./kart-yoshi.png":"yvRD"}],"Pl20":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/champ-green.5de3bb35.png";
},{}],"JON9":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/champ-purple.3923f805.png";
},{}],"A2fx":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100658705/champ-red.7fa0fcbb.png";
},{}],"WNgJ":[function(require,module,exports) {
module.exports={green:require("./champ-green.png"),purple:require("./champ-purple.png"),red:require("./champ-red.png")};
},{"./champ-green.png":"Pl20","./champ-purple.png":"JON9","./champ-red.png":"A2fx"}],"ZlrI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KartPlayer=void 0;var t=e(require("../assets/images/champ-*.png"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return u(t)||c(t,e)||i(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function u(t){if(Array.isArray(t))return t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}function h(t){return function(){var e,n=x(t);if(w()){var r=x(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return y(this,e)}}function y(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){var e="function"==typeof Map?new Map:void 0;return(b=function(t){if(null===t||!m(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return v(t,arguments,x(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,t)})(t)}function v(t,e,n){return(v=w()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&g(o,n.prototype),o}).apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function m(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=function(e){f(o,b(HTMLElement));var n=h(o);function o(t,e){var r;return s(this,o),(r=n.call(this)).attachShadow({mode:"open"}),r.name=t,r.image=e.image,r.y=e.y,r.x=0,r.opacidad=1,r.b=-1,r.power=r.create_power(),r.power_selected=r.power[0],r.active=0,r}return p(o,[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowRoot.innerHTML="\n        <style>".concat(this.styles,'</style>\n        <item-kart></item-kart>\n        <img id="powerup" src="').concat(this.power_selected,'" width=64 heigt=64>\n        <img id="avatar" src="').concat(this.image,'" alt="').concat(this.name,'" width=128 height=128>\n      ')}},{key:"addToRoad",value:function(t){t.appendChild(this)}},{key:"inc",value:function(){1==this.object()?(this.x+=this.powerUp(),this.active=1,70==this.powerUp()?this.power_selected=this.power[0]:40==this.powerUp()?this.power_selected=this.power[1]:this.power_selected=this.power[2]):(this.active=0,this.x+=20),this.render()}},{key:"powerUp",value:function(){var t=[70,40,0];return t[Math.floor(Math.random()*t.length)]}},{key:"object",value:function(){var t=[0,0,1];return t[Math.floor(Math.random()*t.length)]}},{key:"win",value:function(){this.b=5,this.active=0,this.render()}},{key:"lose",value:function(){this.opacidad=.5,this.active=0,this.render()}},{key:"isWinner",value:function(){if(this.x>=950)return!0}},{key:"restart",value:function(){this.x=0,this.opacidad=1,this.b=-1,this.render()}},{key:"create_power",value:function(){for(var e=[],n=0,o=Object.entries(t.default);n<o.length;n++){var i=r(o[n],2),a=(i[0],i[1]);e.push(a)}return e}},{key:"styles",get:function(){return"\n    :host {\n      --x: ".concat(this.x,"px;\n      position: absolute;\n      display: inline-block;\n      top: ").concat(this.y,"px;\n      transform: translateX(var(--x));\n      transition: transform 0.35s;\n      will-change: transform;\n    }\n    #powerup {\n      display: block;\n      opacity: ").concat(this.active,";\n      top: 1px;\n      left: 10px;\n      position:relative;\n    }\n    #avatar{\n      opacity: ").concat(this.opacidad,";\n      -webkit-filter: drop-shadow(").concat(this.b,"px  ").concat(this.b,"px  0 gold)\n                      drop-shadow(-").concat(this.b,"px  -").concat(this.b,"px 0 gold);\n      filter: drop-shadow(").concat(this.b,"px  ").concat(this.b,"px  0 gold) \n          drop-shadow(-").concat(this.b,"px) -").concat(this.b,"px 0 gold);\n     }\n   ")}}]),o}();exports.KartPlayer=k,customElements.define("kart-player",k);
},{"../assets/images/champ-*.png":"WNgJ"}],"QvaY":[function(require,module,exports) {
"use strict";var r=e(require("../assets/images/kart-*.png")),t=require("./KartPlayer.js");function e(r){return r&&r.__esModule?r:{default:r}}function n(r,t){return c(r)||u(r,t)||a(r,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(r,t){if(r){if("string"==typeof r)return i(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(r,t):void 0}}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function u(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}}function c(r){if(Array.isArray(r))return r}for(var l=document.querySelector(".start"),f=document.querySelector(".restart"),s=document.querySelector(".road"),d=[],y=null,m=0,b=0,h=Object.entries(r.default);b<h.length;b++){var v=n(h[b],2),g=v[0],p=v[1],S={image:p,y:d.length=m},j=new t.KartPlayer(g,S);j.addToRoad(s),d.push(j),m+=75}var w=function(){y=setInterval(function(){return I()},500),l.disabled=!0,f.disabled=!0},A=function(){clearInterval(y),d.forEach(function(r){return r.isWinner()?r.win():r.lose()}),f.disabled=!1},q=function(){d.forEach(function(r){return r.restart()}),l.disabled=!1},I=function(){d.forEach(function(r){return r.inc()}),d.some(function(r){return r.isWinner()})&&A()};l.onclick=function(){return w()},f.onclick=function(){return q()};
},{"../assets/images/kart-*.png":"mHxV","./KartPlayer.js":"ZlrI"}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p5-mkart-alu0100658705/js.dedf7b21.js.map