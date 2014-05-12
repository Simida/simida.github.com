/*{"created":"2010-11-11T01:13:42Z","mac":"1:21752c4f8b15a038d959f038602f554847bf55081a501cdba3d9dd96f848b3ee","k":"0.7.18","version":"2386"}*/
;(function(window,document,undefined){
function n(a){return function(){return this[a]}}var p;function q(a,b){this.m=a;this.i=b}p=q.prototype;p.createElement=function(a,b,d){a=this.m.createElement(a);if(b)for(var c in b)if(b.hasOwnProperty(c))if(c=="style"&&this.i.getName()=="MSIE")a.style.cssText=b[c];else a.setAttribute(c,b[c]);d&&a.appendChild(this.m.createTextNode(d));return a};p.insertInto=function(a,b){a=this.m.getElementsByTagName(a)[0];if(!a)a=document.documentElement;if(a&&a.lastChild){a.insertBefore(b,a.lastChild);return true}return false};
p.whenBodyExists=function(a){function b(){document.body?a():setTimeout(b,0)}b()};p.removeElement=function(a){if(a.parentNode){a.parentNode.removeChild(a);return true}return false};p.createCssLink=function(a){return this.createElement("link",{rel:"stylesheet",href:a})};p.appendClassName=function(a,b){for(var d=a.className.split(/\s+/),c=0,e=d.length;c<e;c++)if(d[c]==b)return;d.push(b);a.className=d.join(" ").replace(/^\s+/,"")};
p.removeClassName=function(a,b){for(var d=a.className.split(/\s+/),c=[],e=0,h=d.length;e<h;e++)d[e]!=b&&c.push(d[e]);a.className=c.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")};function r(a,b,d,c,e,h,i,g){this.ha=a;this.qa=b;this.ba=d;this.aa=c;this.ka=e;this.ja=h;this.$=i;this.ra=g}p=r.prototype;p.getName=n("ha");p.getVersion=n("qa");p.getEngine=n("ba");p.getEngineVersion=n("aa");p.getPlatform=n("ka");p.getPlatformVersion=n("ja");p.getDocumentMode=n("$");function s(a,b){this.i=a;this.r=b}
var aa=new r("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",undefined,false);s.prototype.parse=function(){return this.i.indexOf("MSIE")!=-1?ba(this):this.i.indexOf("Opera")!=-1?ca(this):this.i.indexOf("AppleWebKit")!=-1?da(this):this.i.indexOf("Gecko")!=-1?ea(this):aa};function t(a){var b=u(a,a.i,/(iPod|iPad|iPhone|Android)/,1);if(b!="")return b;a=u(a,a.i,/(Linux|Mac_PowerPC|Macintosh|Windows)/,1);if(a!=""){if(a=="Mac_PowerPC")a="Macintosh";return a}return"Unknown"}
function v(a){var b=u(a,a.i,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b)return b;if(b=u(a,a.i,/(iPhone )?OS ([\d_]+)/,2))return b;if(a=u(a,a.i,/Linux ([i\d]+)/,1))return a;return"Unknown"}function ba(a){var b=u(a,a.i,/(MSIE [\d\w\.]+)/,1);if(b!=""){var d=b.split(" ");b=d[0];d=d[1];return new r(b,d,b,d,t(a),v(a),w(a,a.r),x(a,d)>=6)}return new r("MSIE","Unknown","MSIE","Unknown",t(a),v(a),w(a,a.r),false)}
function ca(a){var b="Unknown",d="Unknown",c=u(a,a.i,/(Presto\/[\d\w\.]+)/,1);if(c!=""){d=c.split("/");b=d[0];d=d[1]}else{if(a.i.indexOf("Gecko")!=-1)b="Gecko";c=u(a,a.i,/rv:([^\)]+)/,1);if(c!="")d=c}if(a.i.indexOf("Version/")!=-1){c=u(a,a.i,/Version\/([\d\.]+)/,1);if(c!="")return new r("Opera",c,b,d,t(a),v(a),w(a,a.r),x(a,c)>=10)}c=u(a,a.i,/Opera[\/ ]([\d\.]+)/,1);if(c!="")return new r("Opera",c,b,d,t(a),v(a),w(a,a.r),x(a,c)>=10);return new r("Opera","Unknown",b,d,t(a),v(a),w(a,a.r),false)}
function da(a){var b=t(a),d=v(a),c=u(a,a.i,/AppleWebKit\/([\d\.\+]+)/,1);if(c=="")c="Unknown";var e="Unknown";if(a.i.indexOf("Chrome")!=-1)e="Chrome";else if(a.i.indexOf("Safari")!=-1)e="Safari";else if(a.i.indexOf("AdobeAIR")!=-1)e="AdobeAIR";var h="Unknown";if(a.i.indexOf("Version/")!=-1)h=u(a,a.i,/Version\/([\d\.\w]+)/,1);else if(e=="Chrome")h=u(a,a.i,/Chrome\/([\d\.]+)/,1);else if(e=="AdobeAIR")h=u(a,a.i,/AdobeAIR\/([\d\.]+)/,1);var i=false;if(e=="AdobeAIR"){i=u(a,h,/\d+\.(\d+)/,1);i=x(a,h)>2||
x(a,h)==2&&parseInt(i,10)>=5}else{i=u(a,c,/\d+\.(\d+)/,1);i=x(a,c)>=526||x(a,c)>=525&&parseInt(i,10)>=13}return new r(e,h,"AppleWebKit",c,b,d,w(a,a.r),i)}
function ea(a){var b="Unknown",d="Unknown",c=false;if(a.i.indexOf("Firefox")!=-1){b="Firefox";var e=u(a,a.i,/Firefox\/([\d\w\.]+)/,1);if(e!=""){c=u(a,e,/\d+\.(\d+)/,1);d=e;c=e!=""&&x(a,e)>=3&&parseInt(c,10)>=5}}else if(a.i.indexOf("Mozilla")!=-1)b="Mozilla";e=u(a,a.i,/rv:([^\)]+)/,1);if(e=="")e="Unknown";else if(!c){c=x(a,e);var h=parseInt(u(a,e,/\d+\.(\d+)/,1),10),i=parseInt(u(a,e,/\d+\.\d+\.(\d+)/,1),10);c=c>1||c==1&&h>9||c==1&&h==9&&i>=2||e.match(/1\.9\.1b[123]/)!=null||e.match(/1\.9\.1\.[\d\.]+/)!=
null}return new r(b,d,"Gecko",e,t(a),v(a),w(a,a.r),c)}function x(a,b){a=u(a,b,/(\d+)/,1);if(a!="")return parseInt(a,10);return-1}function u(a,b,d,c){if((a=b.match(d))&&a[c])return a[c];return""}function w(a,b){if(b.documentMode)return b.documentMode}function fa(a,b,d,c){this.j=a;this.n=b;this.L=d;this.p=c||ga;this.o=new y("-")}var ga="wf";function z(a,b,d){a.j.removeClassName(a.n,a.o.l(a.p,b,d,"loading"));a.j.appendClassName(a.n,a.o.l(a.p,b,d,"active"));A(a,"fontactive",b,d)}
function B(a){a.j.removeClassName(a.n,a.o.l(a.p,"loading"));a.j.appendClassName(a.n,a.o.l(a.p,"inactive"));A(a,"inactive")}function ha(a){a.j.removeClassName(a.n,a.o.l(a.p,"loading"));a.j.appendClassName(a.n,a.o.l(a.p,"active"));A(a,"active")}function A(a,b,d,c){a.L[b]&&a.L[b](d,c)}function D(a,b,d,c,e){this.j=a;this.s=b;this.G=d;this.w=c;this.Q=e;this.M=0;this.J=this.S=false;this.ga=new E;this.ca=new F}
D.prototype.watch=function(a,b,d,c){for(var e=a.length,h=0;h<e;h++){var i=a[h];b[i]||(b[i]=["n4"]);this.M+=b[i].length}if(c)this.S=c;for(h=0;h<e;h++){i=a[h];c=b[i];for(var g=d[i]||"Mm",f=0,l=c.length;f<l;f++){var m=c[f],o=G(this,"_,arial,helvetica",m,g),j=this.G.H(o);this.j.removeElement(o);o=i;var k=this.s;k.j.appendClassName(k.n,k.o.l(k.p,o,m,"loading"));A(k,"fontloading",o,m);k=G(this,this.ga.quote(o),m,g);if(j!=this.G.H(k)){this.j.removeElement(k);z(this.s,o,m);this.J=true;H(this)}else I(this,
this.Q(),j,k,o,m)}}};function H(a){if(--a.M==0&&a.S)a.J?ha(a.s):B(a.s)}D.prototype.Y=function(a,b,d,c,e){if(b!=this.G.H(d)){this.j.removeElement(d);z(this.s,c,e);this.J=true;H(this)}else if(this.Q()-a<5E3)I(this,a,b,d,c,e);else{this.j.removeElement(d);a=this.s;a.j.removeClassName(a.n,a.o.l(a.p,c,e,"loading"));a.j.appendClassName(a.n,a.o.l(a.p,c,e,"inactive"));A(a,"fontinactive",c,e);H(this)}};function I(a,b,d,c,e,h){a.w(function(i,g){return function(){g.call(i,b,d,c,e,h)}}(a,a.Y),50)}
function G(a,b,d,c){d=a.ca.expand(d);b=a.j.createElement("span",{style:"position:absolute;top:-999px;font-size:300px;font-family:"+b+",_,arial,helvetica;"+d},c);a.j.insertInto("body",b);return b}function y(a){this.ea=a||ia}var ia="-";y.prototype.l=function(){for(var a=[],b=0;b<arguments.length;b++)a.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return a.join(this.ea)};function E(){this.V='"'}
E.prototype.quote=function(a){var b=[];a=a.split(/,\s*/);for(var d=0;d<a.length;d++){var c=a[d].replace(/['"]/g,"");c.indexOf(" ")==-1?b.push(c):b.push(this.V+c+this.V)}return b.join(",")};function F(){this.U=ja;this.z=ka}var ja=["font-style","font-weight"],ka={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};
function J(a,b,d){this.da=a;this.la=b;this.z=d}J.prototype.expand=function(a,b){for(var d=0;d<this.z.length;d++)if(b==this.z[d][0]){a[this.da]=this.la+":"+this.z[d][1];return}};F.prototype.expand=function(a){if(a.length!=2)return null;for(var b=[null,null],d=0,c=this.U.length;d<c;d++){var e=this.U[d],h=a.substr(d,1);(new J(d,e,this.z[e])).expand(b,h)}return b[0]&&b[1]?b.join(";")+";":null};function K(a,b){this.m=a;this.i=b}K.prototype=q.prototype;
K.prototype.isHttps=function(){return this.m.location.protocol=="https:"};K.prototype.loadScript=function(a,b){var d=this.m.getElementsByTagName("head")[0];if(d){var c=this.m.createElement("script");c.src=a;var e=false;c.onload=c.onreadystatechange=function(){if(!e&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){e=true;b&&b();c.onload=c.onreadystatechange=null;c.parentNode.tagName=="HEAD"&&d.removeChild(c)}};d.appendChild(c)}};
K.prototype.createStyle=function(a){var b=this.m.createElement("style");b.setAttribute("type","text/css");if(b.styleSheet)b.styleSheet.cssText=a;else b.appendChild(document.createTextNode(a));return b};function la(a){for(var b=a.oa.join(","),d=[],c=0;c<a.N.length;c++){var e=a.N[c];d.push(e.name+":"+e.value+";")}return b+"{"+d.join("")+"}"}function L(a,b){this.A=a;this.O=b}
L.prototype.watch=function(a,b,d){var c=[],e={};c.push(this.A);e[this.A]=this.O[b.getStylesheetFormatId()]||[];a.watch(c,e,{},d)};function M(a,b,d){this.pa=a;this.I=b;this.ma=d}M.prototype.buildUrl=function(a,b){a=this.pa&&a?"https:":"http:";var d=typeof this.I=="function"?this.I(a):this.I;return a+"//"+d+this.ma+b};
function ma(a,b,d){if(a.P){var c=function(){try{b._gat._getTracker("UA-8850781-3")._trackPageview();b.tkKitsTracked||(b.tkKitsTracked=0);b.tkKitsTracked++}catch(e){}};if(b._gat)c();else{a=a.P.buildUrl(d.isHttps(),"/ga.js");d.loadScript(a,c)}}}function N(a,b,d){this.v=a;this.W=b;this.R=d}N.prototype.getId=n("v");N.prototype.getStylesheetFormatId=n("W");
N.prototype.isUserAgent=function(a){return this.R?this.R(a.getName(),a.getVersion(),a.getEngine(),a.getEngineVersion(),a.getPlatform(),a.getPlatformVersion(),a.getDocumentMode()):false};N.prototype.buildCssUrl=function(a,b,d,c){d="/"+d+"-"+this.W+".css";if(c)d+="?"+c;return b.buildUrl(a,d)};function O(){this.q=[]}O.prototype.addBrowser=function(a){this.getBrowserById(a.getId())||this.q.push(a)};O.prototype.getBrowserById=function(a){for(var b=0;b<this.q.length;b++){var d=this.q[b];if(a===d.getId())return d}return null};
O.prototype.findBrowser=function(a){for(var b=0;b<this.q.length;b++){var d=this.q[b];if(d.isUserAgent(a))return d}return null};O.prototype.addBrowsersToBrowserSet=function(a){for(var b=0;b<this.q.length;b++)a.addBrowser(this.q[b])};function P(a){this.v=a;this.D=new O;this.t=[];this.F=[]}p=P.prototype;p.getId=n("v");p.setSecurityToken=function(a){this.na=a};p.setNestedUrl=function(a){this.ia=a};p.setKitOptions=function(a){this.B=a};p.addBrowser=function(a){this.D.addBrowser(a)};p.addFontFamily=function(a){this.t.push(a)};
p.addCssRule=function(a){this.F.push(a)};p.supportsBrowser=function(a){return!!this.D.getBrowserById(a.getId())};p.addBrowsersToBrowserSet=function(a){this.D.addBrowsersToBrowserSet(a)};p.init=function(a){for(var b=[],d=0;d<this.F.length;d++)b.push(la(this.F[d]));a.insertInto("head",a.createStyle(b.join("")))};
p.load=function(a,b,d,c){var e=d.buildCssUrl(a.isHttps(),this.ia,this.v,this.na);a.insertInto("head",a.createCssLink(e));b&&a.whenBodyExists(function(h,i,g,f){return function(){for(var l=0;l<h.t.length;l++)h.t[l].watch(i,g,f&&l==h.t.length-1)}}(this,b,d,c))};p.collectFontFamilies=function(a,b,d){for(var c=0;c<this.t.length;c++){var e=this.t[c];b.push(e.A);d[e.A]=e.O[a.getStylesheetFormatId()]||[]}};
p.performOptionalActions=function(a,b,d){this.B&&d.whenBodyExists(function(c,e,h,i){return function(){ma(c.B,e,i);var g=c.B,f=c.v;if(g.T){g=g.T.buildUrl(i.isHttps(),"/"+f+".js?"+ +new Date);i.loadScript(g)}f=c.B;g=c.v;if(f.K){f=f.K.l(g,h,i);f.setAttribute("id","typekit-badge-"+g);i.insertInto("body",f)}}}(this,a,b,d))};function Q(a,b,d,c,e){this.fa=a;this.j=b;this.i=d;this.n=c;this.w=e;this.k=[]}Q.prototype.C=function(a){this.k.push(a)};
Q.prototype.load=function(a,b){a=a;var d=b||{};if(typeof a=="string")a=[a];else if(a&&a.length)a=a;else{d=a||{};a=[]}if(a.length){var c=this,e=a.length;for(b=0;b<a.length;b++)na(this,a[b],function(){--e==0&&R(c,d)})}else R(this,d)};function na(a,b,d){a.j.loadScript(a.fa.buildUrl(a.j.isHttps(),"/"+b+".js"),d)}
function R(a,b){if(b.userAgent)a.i=(new s(b.userAgent,document)).parse();b=new fa(a.j,a.n,b);for(var d=new O,c=0;c<a.k.length;c++)a.k[c].addBrowsersToBrowserSet(d);d=d.findBrowser(a.i);for(c=0;c<a.k.length;c++)a.k[c].init(a.j);if(d){b.j.appendClassName(b.n,b.o.l(b.p,"loading"));A(b,"loading");oa(a,d,b)}else B(b);a.k=[]}
function oa(a,b,d){d=new D(a.j,d,{H:function(h){return h.offsetWidth}},a.w,function(){return+new Date});for(var c=0;c<a.k.length;c++){var e=a.k[c];if(e.supportsBrowser(b)){e.load(a.j,d,b,c==a.k.length-1);e.performOptionalActions(window,a.i,a.j)}}}function S(a,b,d){this.u=a;this.j=b;this.w=d;this.k=[]}S.prototype.C=function(a){this.k.push(a)};
S.prototype.load=function(){var a=this.u.__webfonttypekitmodule__;if(a)for(var b=0;b<this.k.length;b++){var d=this.k[b],c=a[d.getId()];if(c){var e=this.j,h=this.w;c(function(i,g,f){var l=new O;d.addBrowsersToBrowserSet(l);g=[];var m={};if(l=l.findBrowser(i)){d.init(e);d.load(e,null,l,h);d.collectFontFamilies(l,g,m);d.performOptionalActions(window,i,e,h)}f(!!l,g,m)})}}};function T(a,b,d,c){this.u=a;this.m=b;this.X=d;this.Z=c}
T.prototype.l=function(a,b,d){var c=this.m.createElement("img");c.setAttribute("width",62);c.setAttribute("height",25);c.setAttribute("src",this.X.buildUrl(d.isHttps(),"/default.gif"));c.setAttribute("class","typekit-badge");c.setAttribute("alt","Fonts by Typekit");c.setAttribute("title","Information about the fonts used on this site");c.style.position="fixed";c.style.zIndex=2E9;c.style.right=0;c.style.bottom=0;c.style.cursor="pointer";c.style.border=0;if(b.getName()!="Opera")c.style.content="none";
c.style.display="inline";c.style["float"]="none";c.style.height="25px";c.style.left="auto";c.style.margin=0;c.style.maxHeight="25px";c.style.maxWidth="62px";c.style.minHeight="25px";c.style.minWidth="62px";c.style.orphans=2;c.style.outline="none";c.style.overflow="visible";c.style.padding=0;c.style.pageBreakAfter="auto";c.style.pageBreakBefore="auto";c.style.pageBreakInside="auto";c.style.tableLayout="auto";c.style.textIndent=0;c.style.top="auto";c.style.unicodeBidi="normal";c.style.verticalAlign=
"baseline";c.style.visibility="visible";c.style.widows=2;c.style.width="65px";var e=this.m,h=this.Z.buildUrl(false,"/"+a);U(this,c,"click",function(){e.location.href=h});if(b.getName()=="MSIE"){c.style.position="absolute";var i=this;a=function(){var g=V(i,"scrollLeft","scrollTop"),f=V(i,"clientWidth","clientHeight");c.style.bottom="auto";c.style.right="auto";c.style.top=g[1]+f[1]-25+"px";c.style.left=g[0]+f[0]-3-62+"px"};U(this,this.u,"scroll",a);U(this,this.u,"resize",a)}return c};
function V(a,b,d){var c=0,e=0;a=a.m;if(a.documentElement&&(a.documentElement[b]||a.documentElement[d])){c=a.documentElement[b];e=a.documentElement[d]}else if(a.body&&(a.body[b]||a.body[d])){c=a.body[b];e=a.body[d]}return[c,e]}function U(a,b,d,c){if(b.attachEvent){var e=a.u;b["e"+d+c]=c;b[d+c]=function(){b["e"+d+c](e.event)};b.attachEvent("on"+d,b[d+c])}else b.addEventListener(d,c,false)}var W=new O;
W.addBrowser(new N("chrome-linux-osx-win2003-win7-winvista-winxp","b",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=(g=(g=(g=g||(e=="Windows"&&h=="5.1"?true:false))||(e=="Windows"&&h=="5.2"?true:false))||(e=="Windows"&&h=="6.0"?true:false))||(e=="Windows"&&h=="6.1"?true:false))||function(f,l,m,o,j,k){f=/^([0-9]+)(_|.)([0-9]+)/.exec(k);if(j=="Macintosh"&&f){j=parseInt(f[1],10);k=parseInt(f[3],10);if(j==10)return k>3;else if(j>10)return true}else return j=="Macintosh"&&k=="Unknown"?true:false}(a,b,d,
c,e,h,i))||(e=="Ubuntu"||e=="Linux"?true:false);if(!g)return false;return function(f,l){if(f=="Chrome"){var m=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(l);if(m){f=parseFloat(m[1]);l=parseInt(m[2],10);m=parseInt(m[3],10);if(f>=6)return false;else if(f>4)return true;else if(f==4&&l>249)return true;else if(f==4&&l==249&&m>=4)return true}}return false}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("chrome6-linux-osx","d",function(a,b,d,c,e,h,i){var g=false;g=(g=g||function(f,l,m,o,j,k){f=/^([0-9]+)(_|.)([0-9]+)/.exec(k);if(j=="Macintosh"&&f){j=parseInt(f[1],10);k=parseInt(f[3],10);if(j==10)return k>3;else if(j>10)return true}else return j=="Macintosh"&&k=="Unknown"?true:false}(a,b,d,c,e,h,i))||(e=="Ubuntu"||e=="Linux"?true:false);if(!g)return false;return function(f,l){if(f=="Chrome")if(f=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(l))if(parseFloat(f[1])>=6)return true}(a,b,
d,c,e,h,i)}));W.addBrowser(new N("safari-android","a",function(a,b,d,c,e,h,i){var g=false;g=g||function(f,l,m,o,j,k){f=/([0-9]+).([0-9]+)/.exec(k);if(j=="Android"&&f){j=parseInt(f[1]);f=parseInt(f[2]);return j>2||j==2&&f>=2}else return false}(a,b,d,c,e,h,i);if(!g)return false;return function(f,l,m,o,j){if(f=="Safari"&&m=="AppleWebKit"||f=="Unknown"&&m=="AppleWebKit"&&(j=="iPhone"||j=="iPad"))if(f=/([0-9]+.[0-9]+)/.exec(o))return parseFloat(f[1])>=525.13;return false}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("ff35-linux-osx-win2003-win7-winvista-winxp","b",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=(g=(g=(g=g||(e=="Windows"&&h=="5.1"?true:false))||(e=="Windows"&&h=="5.2"?true:false))||(e=="Windows"&&h=="6.0"?true:false))||(e=="Windows"&&h=="6.1"?true:false))||function(f,l,m,o,j,k){f=/^([0-9]+)(_|.)([0-9]+)/.exec(k);if(j=="Macintosh"&&f){j=parseInt(f[1],10);k=parseInt(f[3],10);if(j==10)return k>3;else if(j>10)return true}else return j=="Macintosh"&&k=="Unknown"?true:false}(a,b,d,c,
e,h,i))||(e=="Ubuntu"||e=="Linux"?true:false);if(!g)return false;return function(f,l,m,o){if(m=="Gecko"){f=/1.9.1b[1-3]{1}/;return/1.9.1/.test(o)&&!f.test(o)}return false}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("air-linux-osx-win","b",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=g||(e=="Windows"&&h=="Unknown"?true:false))||function(f,l,m,o,j,k){f=/^([0-9]+)(_|.)([0-9]+)/.exec(k);if(j=="Macintosh"&&f){j=parseInt(f[1],10);k=parseInt(f[3],10);if(j==10)return k>3;else if(j>10)return true}else return j=="Macintosh"&&k=="Unknown"?true:false}(a,b,d,c,e,h,i))||(e=="Ubuntu"||e=="Linux"?true:false);if(!g)return false;return function(f,l){if(f=="AdobeAIR")if(f=/([0-9]+.[0-9]+)/.exec(l))return parseFloat(f[1])>=
2.5;return false}(a,b,d,c,e,h,i)}));W.addBrowser(new N("ie-win2003-win7-winvista-winxp","c",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=(g=g||(e=="Windows"&&h=="5.1"?true:false))||(e=="Windows"&&h=="5.2"?true:false))||(e=="Windows"&&h=="6.0"?true:false))||(e=="Windows"&&h=="6.1"?true:false);if(!g)return false;return function(f,l,m,o,j,k,C){if(f=="MSIE"){if(f=/([0-9]+.[0-9]+)/.exec(l))return parseFloat(f[1])>=6&&(C===undefined||C<9);return false}}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("chrome6-win2003-win7-winvista-winxp","e",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=(g=g||(e=="Windows"&&h=="5.1"?true:false))||(e=="Windows"&&h=="5.2"?true:false))||(e=="Windows"&&h=="6.0"?true:false))||(e=="Windows"&&h=="6.1"?true:false);if(!g)return false;return function(f,l){if(f=="Chrome")if(f=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(l))if(parseFloat(f[1])>=6)return true}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("safari-osx-win2003-win7-winvista-winxp","b",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=(g=(g=g||(e=="Windows"&&h=="5.1"?true:false))||(e=="Windows"&&h=="5.2"?true:false))||(e=="Windows"&&h=="6.0"?true:false))||(e=="Windows"&&h=="6.1"?true:false))||function(f,l,m,o,j,k){f=/^([0-9]+)(_|.)([0-9]+)/.exec(k);if(j=="Macintosh"&&f){j=parseInt(f[1],10);k=parseInt(f[3],10);if(j==10)return k>3;else if(j>10)return true}else return j=="Macintosh"&&k=="Unknown"?true:false}(a,b,d,c,e,h,i);
if(!g)return false;return function(f,l,m,o,j){if(f=="Safari"&&m=="AppleWebKit"||f=="Unknown"&&m=="AppleWebKit"&&(j=="iPhone"||j=="iPad"))if(f=/([0-9]+.[0-9]+)/.exec(o))return parseFloat(f[1])>=525.13;return false}(a,b,d,c,e,h,i)}));W.addBrowser(new N("ie9-win7","g",function(a,b,d,c,e,h,i){var g=false;g=g||(e=="Windows"&&h=="6.1"?true:false);if(!g)return false;return function(f,l,m,o,j,k,C){if(f=="MSIE"){if(f=/([0-9]+.[0-9]+)/.exec(l))return parseFloat(f[1])>=9&&C>=9;return false}}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("ff36-linux-osx-win2003-win7-winvista-winxp","e",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=(g=(g=(g=g||(e=="Windows"&&h=="5.1"?true:false))||(e=="Windows"&&h=="5.2"?true:false))||(e=="Windows"&&h=="6.0"?true:false))||(e=="Windows"&&h=="6.1"?true:false))||function(f,l,m,o,j,k){f=/^([0-9]+)(_|.)([0-9]+)/.exec(k);if(j=="Macintosh"&&f){j=parseInt(f[1],10);k=parseInt(f[3],10);if(j==10)return k>3;else if(j>10)return true}else return j=="Macintosh"&&k=="Unknown"?true:false}(a,b,d,c,
e,h,i))||(e=="Ubuntu"||e=="Linux"?true:false);if(!g)return false;return function(f,l,m,o){if(m=="Gecko")if(l=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(o)){f=parseFloat(l[1]);l=parseInt(l[3],10);return f>1.9||f>=1.9&&l>1}return false}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("ie9-winvista","h",function(a,b,d,c,e,h,i){var g=false;g=g||(e=="Windows"&&h=="6.0"?true:false);if(!g)return false;return function(f,l,m,o,j,k,C){if(f=="MSIE"){if(f=/([0-9]+.[0-9]+)/.exec(l))return parseFloat(f[1])>=9&&C>=9;return false}}(a,b,d,c,e,h,i)}));
W.addBrowser(new N("opera-linux-osx-win2003-win7-winvista-winxp","b",function(a,b,d,c,e,h,i){var g=false;g=(g=(g=(g=(g=(g=g||(e=="Windows"&&h=="5.1"?true:false))||(e=="Windows"&&h=="5.2"?true:false))||(e=="Windows"&&h=="6.0"?true:false))||(e=="Windows"&&h=="6.1"?true:false))||function(f,l,m,o,j,k){f=/^([0-9]+)(_|.)([0-9]+)/.exec(k);if(j=="Macintosh"&&f){j=parseInt(f[1],10);k=parseInt(f[3],10);if(j==10)return k>3;else if(j>10)return true}else return j=="Macintosh"&&k=="Unknown"?true:false}(a,b,d,c,
e,h,i))||(e=="Ubuntu"||e=="Linux"?true:false);if(!g)return false;return a=="Opera"?parseFloat(b)>=10.54:false}));if(!window.Typekit){var pa=new M(true,"use.typekit.com","/"),X=(new s(navigator.userAgent,document)).parse(),qa=new K(document,X),ra=function(a,b){setTimeout(a,b)},Y=new Q(pa,qa,X,document.documentElement,ra),Z=new S(window,qa,ra);window.Typekit=Y;window.Typekit.load=Y.load;window.Typekit.addKit=Y.C}var sa,ta=null,ua=null,va=null,wa=null,xa,$;sa=new M(true,"use.typekit.com","/k");
ta=new M(true,function(a){return(a=="https:"?"ssl":"www")+".google-analytics.com"},"");ua=new M(true,"use.typekit.com","/badges");va=new M(true,"typekit.com","/colophons");wa=new T(window,document,ua,va);xa=new function(a,b,d){this.K=a;this.P=b;this.T=d}(wa,ta,null);$=new P("jpd0pfm");$.setSecurityToken("3bb2a6e53c9684ffdc9a9bf61b5b2a628b788d2543d3caa13a8703399dd965d5a27409d43b38f75edb8edcb9a86f9f310ea33806b406a9ebdc66d4ad84bba073ca931bc1e0cb269a25e1bc9bd087f61899c2e104d3c78077e29de6866ef4162c89a2cb8bbc");
$.setNestedUrl(sa);$.setKitOptions(xa);$.addFontFamily(new L('"inconsolata-1","inconsolata-2"',{a:["n5"],b:["n5"],c:["n5"],d:["n5"],e:["n5"],f:["n5"],g:["n5"],h:["n5"]}));$.addCssRule(new function(a,b){this.oa=a;this.N=b}([".tk-inconsolata","code"],[{value:'"inconsolata-1","inconsolata-2","Monaco","Courier New",monospace',name:"font-family"}]));$.addBrowser(W.getBrowserById("air-linux-osx-win"));$.addBrowser(W.getBrowserById("chrome-linux-osx-win2003-win7-winvista-winxp"));$.addBrowser(W.getBrowserById("chrome6-linux-osx"));
$.addBrowser(W.getBrowserById("chrome6-win2003-win7-winvista-winxp"));$.addBrowser(W.getBrowserById("ff35-linux-osx-win2003-win7-winvista-winxp"));$.addBrowser(W.getBrowserById("ff36-linux-osx-win2003-win7-winvista-winxp"));$.addBrowser(W.getBrowserById("ie-win2003-win7-winvista-winxp"));$.addBrowser(W.getBrowserById("ie9-win7"));$.addBrowser(W.getBrowserById("ie9-winvista"));$.addBrowser(W.getBrowserById("opera-linux-osx-win2003-win7-winvista-winxp"));$.addBrowser(W.getBrowserById("safari-android"));
$.addBrowser(W.getBrowserById("safari-osx-win2003-win7-winvista-winxp"));if(Z&&Z.u.__webfonttypekitmodule__){Z.C($);Z.load()}else window.Typekit.addKit($);
})(this,document);
window.Typekit.config={"p":"//p.typekit.net/p.gif?s=1&k=jpd0pfm&ht=tk&h={host}&f=126&a=2894&_={_}"};
/*{"k":"1.8.3","created":"2014-05-07 13:43:21 UTC"}*/
;(function(window,document,undefined){
function e(a){return function(){return this[a]}}var f=this;function h(a,b){var d=a.split("."),c=f;!(d[0]in c)&&c.execScript&&c.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&void 0!==b?c[g]=b:c=c[g]?c[g]:c[g]={}}function k(a,b,d){this.M=a;this.K=b;this.L=d}h("webfont.BrowserInfo",k);k.prototype.A=e("M");k.prototype.hasWebFontSupport=k.prototype.A;k.prototype.B=e("K");k.prototype.hasWebKitFallbackBug=k.prototype.B;k.prototype.C=e("L");k.prototype.hasWebKitMetricsBug=k.prototype.C;
function l(a,b,d,c,g,j,u,v,w,x,y){this.D=a;this.R=b;this.J=d;this.o=c;this.P=g;this.n=j;this.G=u;this.Q=v;this.F=w;this.m=x;this.k=y}h("webfont.UserAgent",l);l.prototype.getName=e("D");l.prototype.getName=l.prototype.getName;l.prototype.z=e("J");l.prototype.getVersion=l.prototype.z;l.prototype.s=e("o");l.prototype.getEngine=l.prototype.s;l.prototype.t=e("n");l.prototype.getEngineVersion=l.prototype.t;l.prototype.v=e("G");l.prototype.getPlatform=l.prototype.v;l.prototype.w=e("F");
l.prototype.getPlatformVersion=l.prototype.w;l.prototype.r=e("m");l.prototype.getDocumentMode=l.prototype.r;l.prototype.q=e("k");l.prototype.getBrowserInfo=l.prototype.q;function m(a){this.f=a}m.prototype.toString=function(){return encodeURIComponent(this.f.c.location.hostname||this.f.e.location.hostname)};function n(a,b){this.H=a;this.g=b}
n.prototype.toString=function(){for(var a=[],b=0;b<this.g.length;b++)for(var d=this.g[b],c=d.u(),d=d.u(this.H),g=0;g<c.length;g++){var j;a:{for(j=0;j<d.length;j++)if(c[g]===d[j]){j=!0;break a}j=!1}a.push(j?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(c=a.length;0<c;c-=4)d=a.slice(0>c-4?0:c-4,c),b.unshift(parseInt(d,2).toString(16));return b.join("")};function p(a){this.I=a}
p.prototype.l=function(a,b){var d=b||{},c=this.I.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,c){return c&&d[b]?"/"+d[b].join("/"):d[b]||""});c.match(/^\/\//)&&(c=(a?"https:":"http:")+c);return c.replace(/\/*\?*($|\?)/,"$1")};function q(a){var b=new Image(1,1);b.src=a;b.onload=function(){b.onload=null}}var r={};r.a=r.j=r.b=r.d=function(){return[]};r.i=function(a,b,d){return[new m(a),new n(b,d)]};window.Typekit||(window.Typekit={});
var s=new function(a,b){this.e=a;this.c=b||a;this.O=this.c.document}(window),t=new function(){var a=new p(window.Typekit.config.p);this.N=null;this.h=a},z=!1;
function A(){if(!z)for(var a=document.getElementsByTagName("link"),b=0;b<a.length;b++){var d=a[b].getAttribute("href");if(d&&0<=d.indexOf("use.typekit")){a=t;b=s;if(a.h){var d=(d=window.__adobewebfontsappname__)?d.toString().substr(0,20):"",c=b.c.location.protocol;"about:"==c&&(c=b.e.location.protocol);q(a.h.l("https:"===("https:"==c?"https:":"http:"),{host:encodeURIComponent(b.c.location.hostname||b.e.location.hostname),app:encodeURIComponent(d),_:(+new Date).toString()}))}z=!0;break}}}var B=window.Typekit.load;
window.Typekit.load=function(){B&&B.apply(window.Typekit,arguments);A()};window.__webfonttypekitmodule__&&A();
})(this,document);
