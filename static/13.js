!function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){function r(e,t){e=Array.isArray(e)?e:[e];var n=e.map(i("threshold",0)),r=e.map(i("threshold",0)),u=e.map(i("decay",.005)),c=e.map(s(i("hi",512))),l=e.map(s(i("lo",0))),f=o(c,l),p=e.length,d=new Float64Array(p),h=new Uint8Array(p);t=t||0,a(c,'All "hi" keys must be numbers'),a(l,'All "lo" keys must be numbers'),a(r,'All "threshold" keys must be numbers'),a(u,'All "decay" keys must be numbers');for(var m=0;m<u.length;m+=1)u[m]=1-u[m];return function(e,i){i=i||1;for(var o=0;p>o;o+=1){for(var s=1/f[o],a=c[o],m=l[o],v=0,y=m;a>y;y+=1)v+=s*e[y];d[o]+=i,d[o]>t&&v>r[o]?(h[o]=v,d[o]=0,r[o]=v>n[o]?v:r[o]):h[o]=0,r[o]*=u[o]}return h}}function i(e,t){return function(n){return e in n?n[e]:t}}function o(e,t){for(var n=[],r=0;r<e.length;r+=1)n[r]=e[r]-t[r];return n}function s(e){return function(t){return Math.round(e(t))}}function a(e,t){for(var n=0;n<e.length;n+=1)if("number"!=typeof e[n])throw new Error(t);return e}t.exports=r},{}],2:[function(e,t,n){},{}],3:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(s(n))for(o=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;r>u;u++)c[u].apply(this,o);return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-->0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],4:[function(e,t,n){function r(){l=!1,a.length?c=a.concat(c):f=-1,c.length&&i()}function i(){if(!l){var e=setTimeout(r);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function s(){}var a,u=t.exports={},c=[],l=!1,f=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new o(e,t)),1!==c.length||l||setTimeout(i,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=s,u.addListener=s,u.once=s,u.off=s,u.removeListener=s,u.removeAllListeners=s,u.emit=s,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],5:[function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,o){t=t||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var c=e.length;u>0&&c>u&&(c=u);for(var l=0;c>l;++l){var f,p,d,h,m=e[l].replace(a,"%20"),v=m.indexOf(n);v>=0?(f=m.substr(0,v),p=m.substr(v+1)):(f=m,p=""),d=decodeURIComponent(f),h=decodeURIComponent(p),r(s,d)?i(s[d])?s[d].push(h):s[d]=[s[d],h]:s[d]=h}return s};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],6:[function(e,t,n){"use strict";function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(s(e),function(s){var a=encodeURIComponent(i(s))+n;return o(e[s])?r(e[s],function(e){return a+encodeURIComponent(i(e))}).join(t):a+encodeURIComponent(i(e[s]))}).join(t):a?encodeURIComponent(i(a))+n+encodeURIComponent(i(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],7:[function(e,t,n){"use strict";n.decode=n.parse=e(5),n.encode=n.stringify=e(6)},{5:5,6:6}],8:[function(e,t,n){var r=e(9),i=e(11);t.exports=function(e,t){function n(){o();var t=e.width,n=e.height;a[0]=t/o.scale,a[1]=n/o.scale}if(!e)throw new TypeError("must specify a canvas element");t=t||{};var o=r(e,t.parent,t.scale),s=i(),a=[0,0];return n(),window.addEventListener("resize",function(){n(),s.emit("resize")},!1),Object.defineProperties(s,{scale:{get:function(){return o.scale},set:function(e){o.scale=e}},shape:{get:function(){return a}},parent:{get:function(){return o.parent},set:function(e){o.parent=e}}}),s}},{11:11,9:9}],9:[function(e,t,n){function r(e,t,n){function r(){var t=r.parent||e.parentNode;if("function"==typeof t)var n=t(o)||o,a=n[0],u=n[1];else if(t&&t!==document.body)var c=i(t),a=0|c[0],u=0|c[1];else var a=window.innerWidth,u=window.innerHeight;return s?(e.setAttribute("width",a*r.scale+"px"),e.setAttribute("height",u*r.scale+"px")):(e.width=a*r.scale,e.height=u*r.scale),e.style.width=a+"px",e.style.height=u+"px",r}var s="SVG"===e.nodeName.toUpperCase();return e.style.position=e.style.position||"absolute",e.style.top=0,e.style.left=0,r.scale=parseFloat(n||1),r.parent=t,r()}var i=e(10);t.exports=r;var o=new Float32Array(2)},{10:10}],10:[function(e,t,n){function r(e){if(e===window||e===document.body)return[window.innerWidth,window.innerHeight];if(!e.parentNode){var t=!0;document.body.appendChild(e)}var n=e.getBoundingClientRect(),r=getComputedStyle(e),o=(0|n.height)+i(r.getPropertyValue("margin-top"))+i(r.getPropertyValue("margin-bottom")),s=(0|n.width)+i(r.getPropertyValue("margin-left"))+i(r.getPropertyValue("margin-right"));return t&&document.body.removeChild(e),[s,o]}function i(e){return parseFloat(e)||0}t.exports=r},{}],11:[function(e,t,n){function r(e){return this instanceof r?(this.running=!1,this.last=s(),this._frame=0,this._tick=this.tick.bind(this),void(e&&this.on("tick",e))):new r(e)}var i=e(19),o=e(3).EventEmitter,s=e(14),a=e(12);t.exports=r,i(r,o),r.prototype.start=function(){return this.running?void 0:(this.running=!0,this.last=s(),this._frame=a(this._tick),this)},r.prototype.stop=function(){return this.running=!1,0!==this._frame&&a.cancel(this._frame),this._frame=0,this},r.prototype.tick=function(){this._frame=a(this._tick);var e=s(),t=e-this.last;this.emit("tick",t),this.last=e}},{12:12,14:14,19:19,3:3}],12:[function(e,t,n){for(var r=e(13),i="undefined"==typeof window?{}:window,o=["moz","webkit"],s="AnimationFrame",a=i["request"+s],u=i["cancel"+s]||i["cancelRequest"+s],c=0;c<o.length&&!a;c++)a=i[o[c]+"Request"+s],u=i[o[c]+"Cancel"+s]||i[o[c]+"CancelRequest"+s];if(!a||!u){var l=0,f=0,p=[],d=1e3/60;a=function(e){if(0===p.length){var t=r(),n=Math.max(0,d-(t-l));l=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}t.exports=function(e){return a.call(i,e)},t.exports.cancel=function(){u.apply(i,arguments)}},{13:13}],13:[function(e,t,n){(function(e){(function(){var n,r,i;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-i)/1e6},r=e.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n()):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,e(4))},{4:4}],14:[function(e,t,n){(function(e){t.exports=e.performance&&e.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){function r(e,t,n){return n>t?t>e?t:e>n?n:e:n>e?n:e>t?t:e}t.exports=r},{}],16:[function(e,t,n){function r(e,t){if("string"!=typeof e)throw new TypeError("String expected");t||(t=document);var n=/<([\w:]+)/.exec(e);if(!n)return t.createTextNode(e);e=e.replace(/^\s+|\s+$/g,"");var r=n[1];if("body"==r){var i=t.createElement("html");return i.innerHTML=e,i.removeChild(i.lastChild)}var o=s[r]||s._default,a=o[0],u=o[1],c=o[2],i=t.createElement("div");for(i.innerHTML=u+e+c;a--;)i=i.lastChild;if(i.firstChild==i.lastChild)return i.removeChild(i.firstChild);for(var l=t.createDocumentFragment();i.firstChild;)l.appendChild(i.removeChild(i.firstChild));return l}t.exports=r;var i,o=!1;"undefined"!=typeof document&&(i=document.createElement("div"),i.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',o=!i.getElementsByTagName("link").length,i=void 0);var s={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:o?[1,"X<div>","</div>"]:[0,"",""]};s.td=s.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],s.option=s.optgroup=[1,'<select multiple="multiple">',"</select>"],s.thead=s.tbody=s.colgroup=s.caption=s.tfoot=[1,"<table>","</table>"],s.polyline=s.ellipse=s.polygon=s.circle=s.text=s.line=s.path=s.rect=s.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},{}],17:[function(e,t,n){function r(e){var t=o(e);return'<link href="'+t+'" rel="stylesheet" type="text/css">'}function i(e){var t=o(e),n=document.createElement("link");return n.setAttribute("href",t),n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n}function o(e){var t=Object.keys(e).map(function(t){var n=e[t];return t=t.replace(/\s+/,"+"),"boolean"==typeof n?t:t+":"+a(n).join(",")}).join("|");return"http://fonts.googleapis.com/css?family="+t}function s(e){var t=i(e);return document.head.appendChild(t),t}function a(e){return Array.isArray(e)?e:[e]}t.exports=r,t.exports.add=s},{}],18:[function(e,t,n){function r(e,t,n){"function"==typeof t&&(n=t,t=null);var r,i=document.createElement("img");return i.onload=function(){r||(r=!0,n&&n(void 0,i))},i.onerror=function(t){r||(r=!0,n&&n(new Error('Unable to load "'+e+'"'),i))},t&&t.crossOrigin&&(i.crossOrigin=t.crossOrigin),i.src=e,i}t.exports=r},{}],19:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],20:[function(e,t,n){var r={};t.exports=function(e,t){if(!r[e]){r[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(n,i.childNodes[0]):i.appendChild(n)}}},{}],21:[function(e,t,n){function r(e,t){e=e||0;for(var n=new Array(e),r=0;e>r;r++)n[r]=t;return n}t.exports=r},{}],22:[function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=Object.assign||function(e,t){for(var n,s,a=r(e),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var c in n)i.call(n,c)&&(a[c]=n[c]);if(Object.getOwnPropertySymbols){s=Object.getOwnPropertySymbols(n);for(var l=0;l<s.length;l++)o.call(n,s[l])&&(a[s[l]]=n[s[l]])}}return a}},{}],23:[function(e,t,n){function r(e,t){function n(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];var r=e.apply(this,t),i=t[t.length-1];return"function"==typeof r&&r!==i&&Object.keys(i).forEach(function(e){r[e]=i[e]}),r}if(e&&t)return r(e)(t);if("function"!=typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){n[t]=e[t]}),n}t.exports=r},{}],24:[function(e,t,n){function r(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}var i=e(23);t.exports=i(r),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0})})},{23:23}],25:[function(e,t,n){"use strict";t.exports=function(e,t){if(void 0===t&&(t=e,e=0),"number"!=typeof e||"number"!=typeof t)throw new TypeError("Expected all arguments to be numbers");return Math.random()*(t-e)+e}},{}],26:[function(e,t,n){(function(e){t.exports=function(t,n){function r(t){function r(){n&&n(t,o),n=null}u?e.nextTick(r):r()}function i(e,t,n){o[e]=n,(0===--s||t)&&r(t)}var o,s,a,u=!0;Array.isArray(t)?(o=[],s=t.length):(a=Object.keys(t),o={},s=a.length),s?a?a.forEach(function(e){t[e](i.bind(void 0,e))}):t.forEach(function(e,t){e(i.bind(void 0,t))}):r(null),u=!1}}).call(this,e(4))},{4:4}],27:[function(e,t,n){!function(){"use strict";function e(e){e||(e=Math.random),this.p=new Uint8Array(256),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var t=0;256>t;t++)this.p[t]=256*e();for(t=0;512>t;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}var r=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,o=1/3,s=1/6,a=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;e.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var n,o,s=this.permMod12,a=this.perm,u=this.grad3,c=0,l=0,f=0,p=(e+t)*r,d=Math.floor(e+p),h=Math.floor(t+p),m=(d+h)*i,v=d-m,y=h-m,g=e-v,b=t-y;g>b?(n=1,o=0):(n=0,o=1);var w=g-n+i,x=b-o+i,_=g-1+2*i,k=b-1+2*i,A=255&d,C=255&h,E=.5-g*g-b*b;if(E>=0){var M=3*s[A+a[C]];E*=E,c=E*E*(u[M]*g+u[M+1]*b)}var O=.5-w*w-x*x;if(O>=0){var j=3*s[A+n+a[C+o]];O*=O,l=O*O*(u[j]*w+u[j+1]*x)}var L=.5-_*_-k*k;if(L>=0){var S=3*s[A+1+a[C+1]];L*=L,f=L*L*(u[S]*_+u[S+1]*k)}return 70*(c+l+f)},noise3D:function(e,t,n){var r,i,a,u,c,l,f,p,d,h,m=this.permMod12,v=this.perm,y=this.grad3,g=(e+t+n)*o,b=Math.floor(e+g),w=Math.floor(t+g),x=Math.floor(n+g),_=(b+w+x)*s,k=b-_,A=w-_,C=x-_,E=e-k,M=t-A,O=n-C;E>=M?M>=O?(c=1,l=0,f=0,p=1,d=1,h=0):E>=O?(c=1,l=0,f=0,p=1,d=0,h=1):(c=0,l=0,f=1,p=1,d=0,h=1):O>M?(c=0,l=0,f=1,p=0,d=1,h=1):O>E?(c=0,l=1,f=0,p=0,d=1,h=1):(c=0,l=1,f=0,p=1,d=1,h=0);var j=E-c+s,L=M-l+s,S=O-f+s,q=E-p+2*s,T=M-d+2*s,P=O-h+2*s,z=E-1+3*s,N=M-1+3*s,R=O-1+3*s,D=255&b,F=255&w,U=255&x,H=.6-E*E-M*M-O*O;if(0>H)r=0;else{var I=3*m[D+v[F+v[U]]];H*=H,r=H*H*(y[I]*E+y[I+1]*M+y[I+2]*O)}var B=.6-j*j-L*L-S*S;if(0>B)i=0;else{var X=3*m[D+c+v[F+l+v[U+f]]];B*=B,i=B*B*(y[X]*j+y[X+1]*L+y[X+2]*S)}var V=.6-q*q-T*T-P*P;if(0>V)a=0;else{var W=3*m[D+p+v[F+d+v[U+h]]];V*=V,a=V*V*(y[W]*q+y[W+1]*T+y[W+2]*P)}var G=.6-z*z-N*N-R*R;if(0>G)u=0;else{var J=3*m[D+1+v[F+1+v[U+1]]];G*=G,u=G*G*(y[J]*z+y[J+1]*N+y[J+2]*R)}return 32*(r+i+a+u)},noise4D:function(e,t,n,r){var i,o,s,c,l,f=(this.permMod12,this.perm),p=this.grad4,d=(e+t+n+r)*a,h=Math.floor(e+d),m=Math.floor(t+d),v=Math.floor(n+d),y=Math.floor(r+d),g=(h+m+v+y)*u,b=h-g,w=m-g,x=v-g,_=y-g,k=e-b,A=t-w,C=n-x,E=r-_,M=0,O=0,j=0,L=0;k>A?M++:O++,k>C?M++:j++,k>E?M++:L++,A>C?O++:j++,A>E?O++:L++,C>E?j++:L++;var S,q,T,P,z,N,R,D,F,U,H,I;S=M>=3?1:0,q=O>=3?1:0,T=j>=3?1:0,P=L>=3?1:0,z=M>=2?1:0,N=O>=2?1:0,R=j>=2?1:0,D=L>=2?1:0,F=M>=1?1:0,U=O>=1?1:0,H=j>=1?1:0,I=L>=1?1:0;var B=k-S+u,X=A-q+u,V=C-T+u,W=E-P+u,G=k-z+2*u,J=A-N+2*u,K=C-R+2*u,$=E-D+2*u,Q=k-F+3*u,Y=A-U+3*u,Z=C-H+3*u,ee=E-I+3*u,te=k-1+4*u,ne=A-1+4*u,re=C-1+4*u,ie=E-1+4*u,oe=255&h,se=255&m,ae=255&v,ue=255&y,ce=.6-k*k-A*A-C*C-E*E;if(0>ce)i=0;else{var le=f[oe+f[se+f[ae+f[ue]]]]%32*4;ce*=ce,i=ce*ce*(p[le]*k+p[le+1]*A+p[le+2]*C+p[le+3]*E)}var fe=.6-B*B-X*X-V*V-W*W;if(0>fe)o=0;else{var pe=f[oe+S+f[se+q+f[ae+T+f[ue+P]]]]%32*4;fe*=fe,o=fe*fe*(p[pe]*B+p[pe+1]*X+p[pe+2]*V+p[pe+3]*W)}var de=.6-G*G-J*J-K*K-$*$;if(0>de)s=0;else{var he=f[oe+z+f[se+N+f[ae+R+f[ue+D]]]]%32*4;de*=de,s=de*de*(p[he]*G+p[he+1]*J+p[he+2]*K+p[he+3]*$)}var me=.6-Q*Q-Y*Y-Z*Z-ee*ee;if(0>me)c=0;else{var ve=f[oe+F+f[se+U+f[ae+H+f[ue+I]]]]%32*4;me*=me,c=me*me*(p[ve]*Q+p[ve+1]*Y+p[ve+2]*Z+p[ve+3]*ee)}var ye=.6-te*te-ne*ne-re*re-ie*ie;if(0>ye)l=0;else{var ge=f[oe+1+f[se+1+f[ae+1+f[ue+1]]]]%32*4;ye*=ye,l=ye*ye*(p[ge]*te+p[ge+1]*ne+p[ge+2]*re+p[ge+3]*ie)}return 27*(i+o+s+c+l)}},"undefined"!=typeof define&&define.amd&&define(function(){return e}),"undefined"!=typeof n?n.SimplexNoise=e:"undefined"!=typeof window&&(window.SimplexNoise=e),"undefined"!=typeof t&&(t.exports=e)}()},{}],28:[function(e,t,n){function r(e){if(e)throw e}function i(e,t){l||(u(".npm-scb-wrap {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.npm-scb-wrap a {\n  text-decoration: none;\n  color: #000;\n}\n.npm-scb-white\n.npm-scb-wrap a {\n  color: #fff;\n}\n\n.npm-scb-inner {\n  position: absolute;\n  top: -120px; left: 0;\n  padding: 8px;\n  width: 100%;\n  height: 150px;\n  z-index: 2;\n  -webkit-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n     -moz-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n      -ms-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n       -o-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n          transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n}\n.npm-scb-wrap:hover\n.npm-scb-inner {\n  top: 0;\n}\n\n.npm-scb-artwork {\n  position: absolute;\n  top: 16px; left: 16px;\n  width: 104px; height: 104px;\n  box-shadow: 0 0 8px -3px #000;\n  outline: 1px solid rgba(0,0,0,0.1);\n  z-index: 2;\n}\n.npm-scb-white\n.npm-scb-artwork {\n  outline: 1px solid rgba(255,255,255,0.1);\n  box-shadow: 0 0 10px -2px rgba(255,255,255,0.9);\n}\n\n.npm-scb-info {\n  position: absolute;\n  top: 16px;\n  left: 120px;\n  width: 300px;\n  z-index: 1;\n}\n\n.npm-scb-info > a {\n  display: block;\n}\n\n.npm-scb-now-playing {\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  width: 500px;\n  z-index: 1;\n  padding: 15px 0;\n  top: 0; left: 138px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s;\n     -moz-transition: opacity 0.25s;\n      -ms-transition: opacity 0.25s;\n       -o-transition: opacity 0.25s;\n          transition: opacity 0.25s;\n}\n\n.npm-scb-wrap:hover\n.npm-scb-now-playing {\n  opacity: 0;\n}\n\n.npm-scb-white\n.npm-scb-now-playing {\n  color: #fff;\n}\n.npm-scb-now-playing > a {\n  font-weight: bold;\n}\n\n.npm-scb-info > a > p {\n  margin: 0;\n  padding-bottom: 0.25em;\n  line-height: 1.35em;\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.npm-scb-title {\n  font-weight: bold;\n}\n\n.npm-scb-icon {\n  position: absolute;\n  top: 120px;\n  padding-top: 0.75em;\n  left: 16px;\n}\n"),l=!0),p||(p=a.compile('<div class="npm-scb-wrap">\n  <div class="npm-scb-inner">\n    <a target="_blank" href="{{!urls.song}}">\n      <img class="npm-scb-icon" src="{{!icon}}">\n      <img class="npm-scb-artwork" src="{{!artwork}}">\n    </a>\n    <div class="npm-scb-info">\n      <a target="_blank" href="{{!urls.song}}">\n        <p class="npm-scb-title">{{!title}}</p>\n      </a>\n      <a target="_blank" href="{{!urls.artist}}">\n        <p class="npm-scb-artist">{{!artist}}</p>\n      </a>\n    </div>\n  </div>\n  <div class="npm-scb-now-playing">\n    Now Playing:\n    <a href="{{!urls.song}}">{{!title}}</a>\n    by\n    <a href="{{!urls.artist}}">{{!artist}}</a>\n  </div>\n</div>')),!f&&e.getFonts&&(s.add({"Open Sans":[300,600]}),f=!0),e=e||{},t=t||r;var n=e.el||document.createElement("div"),i="dark"in e&&!e.dark?"white":"black",d=e.client_id,h=e.song;return o(d,h,function(e,r){if(e)return t(e);if("track"!==r.kind)throw new Error("soundcloud-badge only supports individual tracks at the moment");n.classList["black"===i?"remove":"add"]("npm-scb-white"),n.innerHTML=p({artwork:r.artwork_url||r.user.avatar_url,artist:r.user.username,title:r.title,icon:c[i],urls:{song:r.permalink_url,artist:r.user.permalink_url}}),document.body.appendChild(n),t(null,r.stream_url+"?client_id="+d,r,n)}),n}var o=e(32),s=e(29),a=e(31),u=e(30),c=(e(2),{black:"https://developers.soundcloud.com/assets/logo_black.png",white:"https://developers.soundcloud.com/assets/logo_white.png"});t.exports=i;var l=!1,f=!1,p=null},{2:2,29:29,30:30,31:31,32:32}],29:[function(e,t,n){arguments[4][17][0].apply(n,arguments)},{17:17}],30:[function(e,t,n){var r=[];t.exports=function(e){if(!(r.indexOf(e)>=0)){r.push(e);var t=document.createElement("style"),n=document.createTextNode(e);t.appendChild(n),document.head.childNodes.length?document.head.insertBefore(t,document.head.childNodes[0]):document.head.appendChild(t)}}},{}],31:[function(e,t,n){function r(e,t){t=t||{};var n=i(e);return n(t)}function i(e){for(var t,n=[],r=s(e),i=0;i<r.length;++i)if(t=r[i],i%2==0)n.push('"'+t.replace(/"/g,'\\"')+'"');else switch(t[0]){case"/":t=t.slice(1),n.push(") + ");break;case"^":t=t.slice(1),o(t),n.push(' + section(obj, "'+t+'", true, ');break;case"#":t=t.slice(1),o(t),n.push(' + section(obj, "'+t+'", false, ');break;case"!":t=t.slice(1),o(t),n.push(" + obj."+t+" + ");break;default:o(t),n.push(" + escape(obj."+t+") + ")}return n="\n"+a(c.toString())+";\n\n"+a(u.toString())+";\n\n  return "+n.join("").replace(/\n/g,"\\n"),new Function("obj",n)}function o(e){if(!e.match(/^[\w.]+$/))throw new Error('invalid property "'+e+'"')}function s(e){return e.split(/\{\{|\}\}/)}function a(e){return e.replace(/^/gm,"  ")}function u(e,t,n,r){var i=e[t];return"function"==typeof i?i.call(e,r):(n&&(i=!i),i?r:"")}function c(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}n=t.exports=r,n.compile=i},{}],32:[function(e,t,n){function r(e,t,n){var r="https://api.soundcloud.com/resolve.json?"+i.stringify({url:t,client_id:e});o({uri:r,method:"GET"},function(t,r,i){if(t)return n(t);try{i=JSON.parse(i)}catch(o){return n(o)}if(i.errors)return n(new Error(i.errors[0].error_message));var s="track"===i.kind&&i.stream_url+"?client_id="+e;return n(null,i,s)})}var i=e(7),o=e(33);t.exports=r},{33:33,7:7}],33:[function(e,t,n){function r(e,t){function n(){4===l.readyState&&r()}function r(){var e=null,n=l.statusCode=l.status,r=l.body=l.response||l.responseText||l.responseXML;if(0===n||n>=400&&600>n){var i=l.responseText||a[String(l.status).charAt(0)];e=new Error(i),e.statusCode=l.status}if(m)try{r=l.body=JSON.parse(r)}catch(o){}t(e,l,r)}function o(e){t(e,l)}"string"==typeof e&&(e={uri:e}),e=e||{},t=s(t);var l;l=e.cors?new c:new u;var f=l.url=e.uri,p=l.method=e.method||"GET",d=e.body||e.data,h=l.headers=e.headers||{},m=!1;return"json"in e&&(m=!0,h["Content-Type"]="application/json",d=JSON.stringify(e.json)),l.onreadystatechange=n,l.onload=r,l.onerror=o,l.onprogress=function(){},l.ontimeout=i,l.open(p,f),e.cors&&(l.withCredentials=!0),l.timeout="timeout"in e?e.timeout:5e3,l.setRequestHeader&&Object.keys(h).forEach(function(e){l.setRequestHeader(e,h[e])}),l.send(d),l}function i(){}var o=e(34),s=e(35),a={0:"Internal XMLHttpRequest Error",4:"4xx Client Error",5:"5xx Server Error"},u=o.XMLHttpRequest||i,c="withCredentials"in new u?o.XMLHttpRequest:o.XDomainRequest;t.exports=r},{34:34,35:35}],34:[function(e,t,n){(function(e){"undefined"!=typeof window?t.exports=window:"undefined"!=typeof e?t.exports=e:t.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],35:[function(e,t,n){function r(e){var t=!1;return function(){return t?void 0:(t=!0,e.apply(this,arguments))}}t.exports=r,r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0})})},{}],36:[function(e,t,n){function r(e,t,n){if(!(this instanceof r))return new r(e,t,n);if(t instanceof i||(n=t,t=null),n=n||{},this.ctx=t=t||new i,e instanceof AudioNode||(e=e instanceof Audio?t.createMediaElementSource(e):t.createMediaStreamSource(e)),this.analyser=t.createAnalyser(),this.stereo=!!n.stereo,this.audible=n.audible!==!1,this.wavedata=null,this.freqdata=null,this.splitter=null,this.merger=null,this.source=e,this.stereo){this.analyser=[this.analyser],this.analyser.push(t.createAnalyser()),this.splitter=t.createChannelSplitter(2),this.merger=t.createChannelMerger(2),this.output=this.merger,this.source.connect(this.splitter);for(var o=0;2>o;o++)this.splitter.connect(this.analyser[o],o,0),this.analyser[o].connect(this.merger,0,o);this.audible&&this.merger.connect(t.destination)}else this.output=this.source,this.source.connect(this.analyser),this.audible&&this.analyser.connect(t.destination)}var i=window.AudioContext||window.webkitAudioContext;t.exports=r,r.prototype.waveform=function(e,t){e||(e=this.wavedata||(this.wavedata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount)));var n=this.stereo?this.analyser[t||0]:this.analyser;return n.getByteTimeDomainData(e),e},r.prototype.frequencies=function(e,t){e||(e=this.freqdata||(this.freqdata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount)));var n=this.stereo?this.analyser[t||0]:this.analyser;return n.getByteFrequencyData(e),e}},{}],37:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){function n(e){if(p.duration){S+=Math.min(e,30)/1e3;var t=d.frequencies(),n=x(t,e),i=o(A.shape,2),s=i[0],a=i[1],u=A.scale;w.save(),w.scale(u,u),w.clearRect(0,0,s,a),w.fillStyle=_,w.fillRect(0,0,s,a),w.translate(s/2,a/2);var c=n[0]/255,l=Math.max(s,a)/2+5*c;w.scale(l,l),L.forEach(function(e){w.lineWidth=e.thickness/l,r(e,n)}),w.restore(),b.style.left=(window.innerWidth-s)/2+"px",b.style.top=(window.innerHeight-a)/2+"px"}}function r(e,t){var n=o(e.position,2),r=n[0],i=n[1];e.rotation+=.02*e.radius,e.position[0]+=.01*q.noise3D(2*r,2*i,S)*t[0]/255,e.position[1]+=.01*q.noise3D(2*r,2*i,S)*t[0]/255;var s=e.radius,a=e.rotation;s+=.01*q.noise3D(10*r,10*i,t[1]/255),w.rotate(a),w.beginPath(),"arc"===e.type?w.arc(r,i,s,0,e.arc):w.rect(r-s,i-s,2*s,2*s),w.fillStyle=w.strokeStyle=e.color,e.fill?w.fill():w.stroke(),w.rotate(-a)}var i=o(t,2),s=i[0],u=i[1];if(e)return j(e);var c=u.src,l=u.div,p=new window.Audio;p.crossOrigin="Anonymous",p.src=c;var d=(0,m["default"])(p,{stereo:!1}),h=d.analyser,v=d.ctx.sampleRate,g=h.fftSize;p.play();var b=document.createElement("canvas"),w=b.getContext("2d");document.body.insertBefore(b,l),document.body.style.margin="0",document.body.style.overflow="hidden";var x=(0,C["default"])([{lo:(0,E.freq2index)(50,v,g),hi:(0,E.freq2index)(100,v,g),threshold:0,decay:.001},{lo:(0,E.freq2index)(2e3,v,g),hi:(0,E.freq2index)(2500,v,g),threshold:0,decay:.01}]),_=w.createPattern(s,"repeat"),k=10,A=(0,a["default"])(b,{parent:function(){return[window.innerWidth-2*k,window.innerHeight-2*k]},scale:Math.min(2,window.devicePixelRatio)}),M=["arc","square"],O=["#da7a33","#33da95"],L=(0,y["default"])(500).map(function(e,t){return{position:[(0,f["default"])(-1,1),(0,f["default"])(-1,1)],type:M[Math.floor((0,f["default"])(1)*M.length)],color:O[Math.floor((0,f["default"])(1)*O.length)],fill:(0,f["default"])(1)>.5,thickness:(0,f["default"])(.5,2.5),arc:(0,f["default"])(1)<1/M.length?(0,f["default"])(Math.PI):2*Math.PI,radius:(0,f["default"])(.01,.02),rotation:(0,f["default"])(-Math.PI,Math.PI)}}),S=0;A.start().on("tick",n)}var o=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=e(8),a=r(s),u=e(28),c=r(u),l=e(25),f=r(l),p=e(39),d=r(p),h=e(36),m=r(h),v=e(21),y=r(v),g=e(26),b=r(g),w=e(18),x=r(w),_=e(40),k=r(_),A=e(1),C=r(A),E=e(38),M=e(27),O=r(M),j=(0,k["default"])(),L=window.AudioContext||window.webkitAudioContext,S=/(iPad|iPhone|Android)/i.test(navigator.userAgent),q=new O["default"];S||!L?(0,d["default"])():(0,b["default"])([function(e){(0,x["default"])("assets/paper.png",e)},function(e){(0,c["default"])({client_id:"b95f61a90da961736c03f659c03cb0cc",song:"https://soundcloud.com/partyomo/partynextdoor-kehlanis-freestyle",dark:!0,getFonts:!0},function(t,n,r,i){return t?e(t):void e(null,{src:n,data:r,div:i})})}],i)},{1:1,18:18,21:21,25:25,26:26,27:27,28:28,36:36,38:38,39:39,40:40,8:8}],38:[function(e,t,n){
"use strict";function r(e,t,n){return e*t/n}function i(e,t,n){return u(Math.floor(e/(t/n)),0,n/2)}function o(e,t,n){var r=Array.isArray(e.analyser)?e.analyser[0]:e.analyser,i=e.ctx.sampleRate,o=r.fftSize,s=e.frequencies();return a(s,t,n,i,o)}function s(e,t){return function(n,r,i){return a(n,r,i,e,t)}}function a(e,t,n,r,o){for(var s=i(t,r,o),a=i(n,r,o),u=a-s,c=0;a>s;s++)c+=e[s]/255;return 0===u?0:c/u}Object.defineProperty(n,"__esModule",{value:!0}),n.index2freq=r,n.freq2index=i,n.getAnalyserAverages=o,n.frequencyAverages=s;var u=e(15)},{15:15}],39:[function(e,t,n){"use strict";function r(e){return e&&console.error(e),i('\n    <div>Only supported on Desktop Chrome & FireFox.</div>\n    <div>See my other <strong>#codevember</strong> demos at\n    <a href="https://github.com/mattdesl/codevember">\n    https://github.com/mattdesl/codevember</a>.</div>\n  ')}var i=e(40)();t.exports=r},{40:40}],40:[function(e,t,n){"use strict";function r(e,t){return null!=t&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}function i(e){function t(){h();var e=document.createElement("div");return e.setAttribute("id","fatal-error"),document.body.appendChild(e),s(e.style,{font:f?"16px monospace":'15px "Open Sans", Helvetica, sans-serif',background:i?"#313131":"#fff",color:i?"#e9e9e9":"#000","word-wrap":f?"break-word":void 0}),e}function n(e){return e.map(function(e){return'<div class="fatal-error-stack-line">'+e+"</div>"}).join("\n")}e=e||{};var i=e.dark,f=e.pre,p=e.googleFonts!==!1,d=e.stack,h=u(function(){p&&c.add({"Open Sans":[300,600]}),o(l)});return function(e){var i=e;if(r(e,Error)&&(i=d?e.stack:e.message),"string"==typeof i&&(i=(i||"").trim(),d)){var o=i.split("\n");o.length>0&&(i=n(o))}var s=document.querySelector("#fatal-error");for(s||(s=t());s.firstChild;)s.removeChild(s.firstChild);return Array.isArray(i)?i.forEach(function(e){s.appendChild(a(e))}):s.appendChild(a(i)),s}}var o=e(20),s=e(22),a=e(16),u=e(24),c=e(17),l="\n#fatal-error {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100000;\n  top: 0;\n  left: 0;\n  padding: 20px;\n  box-sizing: border-box;\n  font-size: 16px;\n  margin: 0;\n  color: #000;\n}\n.fatal-error-stack-line {\n  padding-left: 20px;\n}\n.fatal-error-stack-line:first-child {\n  padding-left: 0px;\n  font-weight: bold;\n}\na, a:visited, a:active {\n  text-decoration: none;\n  color: #48a0cd;\n}\na:hover {\n  text-decoration: underline;\n}\n";t.exports=i},{16:16,17:17,20:20,22:22,24:24}]},{},[37]);