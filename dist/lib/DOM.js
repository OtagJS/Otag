import Nesne from"nesne";function DOM(t){console.log(t),Object.keys(prototype).forEach(e=>Nesne.combine(t[e].prototype||t[e],prototype[e])),Object.keys(prototype.Element).forEach(e=>{t.Number.prototype[e]=t.String.prototype[e]=function(){let t=this.init();return t[e].apply(t,arguments)}}),Object.defineProperties(t.Element.prototype,{valx:{get:function(){if("function"==typeof this.value)return this.value();if(this.value||this.hasOwnProperty("value"))return this.value;if(this.View){let t,e={},n=this;return Object.keys(this.View).some(function(i){if("_"!=i[0]&&!this.View[i].isSameNode(n)){if(this._validator&&(t=this._validator[i])&&!("function"==typeof t?t(this.View[i].val):t.test(this.View[i].val)))return this._invalid&&this._invalid(),!0;e[i]=this.View[i].val}return!1},this)?null:e}return this.data||null},set:function(t){if(t instanceof Promise){let e=this;t.then(function(t){e.val=t})}this.View?this.setView(t):this.set(t)}}})}let prototype={Element:{V:function(t){return(t||"").split(":").reduce(function(t,e){return t?""==e?t.View:t.View[e]?t.View[e]:null:null},this)},p:function(t){for(var e=this;t--;)e=e.parent;return e},resp:function(t,e){return O.resp.call(this,t,e)},stor:function(t,e){return O.stor.call(this,t,e)},extend:function(t,e){return O.UI[t]?O.UI[t].apply(this,e||[]):(console.warn("₺"+t,"is not defined"),this)},destroy:function(t,e){let n=this;return new Promise(function(i){setTimeout(function(){setTimeout(function(){n.remove(),i()},e||300),n.Class("destroy")},t||0)})},interval:function(t,e,n,i){return this._interval?"string"==typeof t?this._interval[t]():isFinite(t)&&this._interval[Number(t)>0?"start":"stop"]():("string"==typeof t&&(t=this[t]),this._interval=O.interval.apply(null,[t.bind(this),e].concat(n)),i&&(this._interval.start(),t.apply(this,n))),this},disp:function(t){return t||this.hasOwnProperty("dispState")||(this.dispState=this.style.display),this.style.display=t?this.dispState:"none",this},prop:function(t,e,n){var i;return null==e&&!(t instanceof Object)||t instanceof Array?t instanceof Array?(i={},t.map(function(t){i[t]=n?this.getAttribute(t):this[t]},this)):i=n?this.getAttribute(t):this[t]:(i=this,n?(t instanceof Object||(t={[t]:e}),Object.keys(t).forEach(function(e){i.setAttribute(e,t[e])})):t instanceof Object?(Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(t[e]=t[e].bind(i))}),Nesne.combine(this,t)):this[t]=e),i},class:function(t){if("function"==typeof t)this.class(t());else{let e={add:[],rem:[]};Object.keys(t).forEach(function(n){e[("function"==typeof t[n]?t[n]():t[n])?"add":"rem"].push(n)}),this.Class(e.rem,1).Class(e.add)}return this},Class:function(t,e){return t instanceof Array||(t=[t]),t[0]&&""!=t[0]&&(this.className=t.reduce(function(t,n){return t=t.replace(new RegExp("(\\b"+n+")+"),""),(e?t:t+" "+n).replace(/\s{2}/g," ").trim()},this.className)),this},layout:function(t,e){let n=e||this;return this.innerHTML="",this.append(t.map(function(t){return t instanceof Element?t:t instanceof Array?t[0].layout(t[1],n):n.V(t)||t.init()}))},do:function(t,e,n){return arguments[3]&&(n=Nesne.toArray(arguments).splice(2)),this.prop("on"+(e||"click"),function(){this.parent[t].apply(this.parent,n||[])})},append:function(t,e){return t&&(t instanceof Array?t[0]instanceof Array&&(t=t.map(function(t){return"d".append(t)})):t=[t],e&&(t=t.reverse()),t.forEach(function(t){t instanceof Node||(t=t.init()),this.appendChild(t)},this)),this},has:function(t,e){if(t){if(this.View||(this.View={}),t instanceof Array&&!(t[0]instanceof Element)){var n=[];for(var i in t)n.push("d".has(t[i])),t[i].parent=this,Nesne.combine(this.View,t[i]);t=n}("object"!=typeof t||t instanceof Element)&&(t=[t]),t instanceof Object&&(t=(t._?"function"==typeof t._?Object.keys(t).filter(function(e){return t[e]instanceof Element}).sort(t._):t._:Object.keys(t)).map(function(e){return"function"==typeof t[e]&&(t[e]=t[e]()),this.View[e]=t[e].prop({parent:this})},this))}return this.append(t,e)},html:function(t){return this.innerHTML="",t?this.has.apply(this,arguments):this},Lang:function(t,e){t=t||this.attr("phrase")||this.prop("phrase");let n=this;n.attr("phrase",t),e&&n.prop("phr"+("function"==typeof e?"Select":""),e),this.phr&&this.phrSelect&&(t=Number(t)+this.phrSelect(this.phr)/10);let i=this.attr("t")||this.t;return O.i18n.get(t).then(function(t){n.phr&&(n.phr instanceof Object||(n.phr=[n.phr]),t=t.vars(n.phr)),n.ttl&&(n.title=t),["title","placeholder"].indexOf(i)>-1?n.attr(i,t):n.innerHTML=t}),n},setSafe:function(t,e){let n=function(t){return"string"==typeof t&&(t=t.replaceAll([/&/g,/</g,/>/g,/"/g,/'/g],["&amp;","&lt;","&gt;","&quot;","&#039;"])),t};return this.set(n(t),n(e))},set:function(t,e){if(t&&!e){let e;(e=this.attr("phrase"))?(t instanceof Object||(t=[t]),this.phr=t,this.Lang(e,t)):t instanceof Object?(this.main||(this.main=this.innerHTML),t._?(this.innerHTML="",this.append(this.main.varsX(this.data=t))):this.innerHTML=this.main.vars(this.data=t).replace(/\n/gm,"<br>")):this.innerHTML=String(t).replace(/\n/gm,"<br>")}else t?isFinite(t)?this.Lang(t,1==e?null:e):(this.main=t,e._?(this.innerHTML="",this.append(this.main.varsX(this.data=e))):this.innerHTML=this.main.vars(this.data=e).replace(/\n/gm,"<br>")):this.innerHTML="";return this.Class("def",1)},setView:function(t){let e=this.View;return this.ondata&&this.ondata(t),(t._||Object.keys(t)).forEach(function(n){e.hasOwnProperty(n)&&e[n].set(t[n])}),this},attr:function(t,e){return this.prop.apply(this,[t,e,"attr"])},link:function(t,e){return this.href=e||t,this.addr=t,-1!=t.indexOf("//")||this.onclick||(this.onclick=function(t){t.preventDefault(),"function"!=O.Page&&O.Page.route(this.addr,1)}),this},connect:function(t,e,n){if(!t)throw Error(".connect requires a data source. https://otagjs.org/#/belge/.connect");e=e||"oid";let i=(t instanceof Element?function(e){this.val=t.val}:function(e){let n=t instanceof Function?t(e):t[e];i=function(t){this.val=t}.bind(this),n instanceof Promise?n.then(i):i(n)}).bind(this);if(n){let t=null;n instanceof Object&&n.range&&(t=n.range),this.prop({dataNav:function(n){if(this.source[n]){let t=this.source[n],i=function(t){this[e]=t}.bind(this);"function"==typeof t&&(t=t())instanceof Promise?t.then(i):i(t)}else{let i=t||[0,this.source.length-1],r=this[e];(r="prev"==n?r-1:r+1)<i[0]?r=i[1]:r>i[1]&&(r=i[0]),this[e]=r}return this},next:function(){return this.dataNav("next")},prev:function(){return this.dataNav("prev")}})}return this.prop("source",t).resp(e,i),t.hasOwnProperty("_conn")&&t._conn(this,e),this},valid:function(t,e){return this._validator=t,this._invalid=e,this}},String:{get:function(t){let e=_selector(this+"");if(e.args.length||e.ui)throw new Error("Module and argument selector is not available");var n=Nesne.toArray(document.querySelectorAll(this+""));return e.id&&(t=0),null!=t&&(n=n[t]),n},init:function(){let t=_selector(this+"");return t.ui?(O.UI[t.ui]||console.log(t.ui,"is not defined"),t.el=O.UI[t.ui].apply(t.ui,t.args.concat(Nesne.toArray(arguments)))):t.el=document.createElement(t.el||"div"),t.el.Class(t.class).attr(t.attr),t.id&&(t.el.id=t.id),"INPUT"==t.el.tagName&&t.el.addEventListener("keyup",function(t){13==t.keyCode&&this.enter&&this.enter(this.value)}),t.el.View||(t.el.View={}),t.el},extends:function(){let t=(this+"").get();return t instanceof Array?t.map(O.F.each("extend",Nesne.toArray(arguments))):t.extend.apply(t,arguments)},from:function(t){let e=("*"==this?Object.keys(t):this.split(",")).map(function(e){return t[e]});return-1==this.indexOf(",")&&"*"!=this?e[0]:e},val:function(t){let e=this.split(",").map(function(t){return this[t]},t.val);return 1==e.length?e[0]:e},of:function(t){return"*"==this?t:this.split(",").reduce(function(e,n){return e[n]=t[n]||null,e},{})},obj:function(t,e){return this.split(",").reduce(e instanceof Array?function(n,i,r){return n[i]=t[r]||e[r],n}:function(n,i,r){return n[i]=t[r]||e,n},{})},vars:function(t){return t="object"==typeof t?t:arguments,Object.keys(t).reduce(function(e,n){return e.replace(new RegExp("("+n+"[₺|$|₸|₼])+"),t[n])},this)},varsX:function(t){t="object"==typeof t?t:arguments;let e=Object.keys(t).reduce(function(e,n){return e.replace(new RegExp("("+n+"[₺|$|₸|₼])+"),t[n]instanceof Element?"|"+n+"|":t[n])},this).split("|");return e=e.map(function(e,n){return n%2?t[e]:document.createTextNode(e)}),console.log(e),e},replaceAll:function(t,e){var n=this;for(var i in t)for(;n.indexOf(t[i])>-1;)n=n.replace(t[i],e[i]);return n}},Function:{prevent:function(){return t=>{t.preventDefault(),this(t)}},stop:function(){return t=>{t.stopPropagation(),this(t)}},prom:function(t){let e=this.bind(t);return function(){let t=arguments;return new Promise(function(n,i){try{n(e.apply(null,t))}catch(t){i(t)}})}},debounce:function(t){let e,n=this;return function(){let i=arguments,r=this;return clearTimeout(e),e=setTimeout(function(){n.apply(r,i)},t),r}}},Image:{set:function(t){return this.Class("loading").prop({onload:function(){this.Class("loading",1)},onerror:function(){this.Class("loading",1).Class("error")},src:t})},value:function(){return this.src}}};var _selector=function(t){var e={attr:/\[([0-9A-Za-z.-_şŞüÜöÖçÇİığĞ]+)="([0-9A-Za-z0-9.-_şŞüÜöÖçÇİığĞ]+)"\]/g,class:/\.([0-9A-Za-z_\-şŞüÜöÖçÇİığĞ]+)/g,id:/#([0-9A-Za-z\-_şŞüÜöÖçÇİığĞ]+)/,ui:/[$|₺|₸|₼]([0-9A-Za-zşŞüÜöÖçÇİığĞ]+)/,args:/:(\w+)/g,el:/^[a-zşüöçığ][a-zşüöçığ0-9]*?$/g};return e=Object.keys(e).reduce(function(n,i){for(var r,s=[],o=-1,a=e[i];(r=a.exec(t))&&a.lastIndex!=o;)if(s.push(r[0]),o=a.lastIndex,n[i]instanceof Object&&!(n[i]instanceof Array))n[i][r[1]]=r[2];else{if(null==n[i]){n[i]=r[1]||r[0],t=t.replace(r[0],"");break}n[i].push(r[1])}return s.forEach(function(e){t=t.replace(e,"")}),n},{class:[],attr:{},id:null,ui:null,args:[],el:null}),t.length&&(e.class=e.class.concat(t.split(" "))),e};export default DOM;