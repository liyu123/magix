KISSY.add("magix/event",function(d,b){var a=b.safeExec;return{trigger:function(b,f,c,h){var g="~~"+b+"_list",k=this[g];if(k){f||(f={});if(!f.type)f.type=b;if(h)for(b=k.length-1;0<=b&&!(!1===a(k[b],f,this));b--);else{b=0;for(h=k.length;b<h&&!(!1===a(k[b],f,this));b++);}}c&&delete this[g]},bind:function(a,b){var c="~~"+a+"_list";this[c]||(this[c]=[]);this[c].push(b)},unbind:function(a,b){var c="~~"+a+"_list",h=this[c];if(h)if(b)for(var c=0,g=h.length;c<g;c++){if(h[c]==b){h.splice(c,1);break}}else delete this[c]}}},
{requires:["magix/magix"]});
KISSY.add("magix/impl/magix",function(d){return{include:function(b){var b=d.Config.packages.magix.path+b+".js?r="+Math.random()+".js",a=new (window.ActiveXObject||window.XMLHttpRequest)("Microsoft.XMLHTTP");a.open("GET",b,!1);a.send(null);return a.responseText},libRequire:function(b,a){d.use(b,function(b,d){a(d)})},libEnv:function(){var b=this.config(),a=b.appHome;if(!a)throw Error("please set appHome");a=a.replace(/(^|\/)app\/?/i,function(a,c){return c||"./"});b.appHome=a;if(!b.release&&/^https?:\/\//.test(a))b.release=
-1==a.indexOf(location.protocol+"//"+location.host);b.release||d.config({map:[[RegExp("("+a+".+)-min\\.js(\\?[^?]+)?"),"$1.js$2"]]});var m="";(m=b.release?b.appTag:d.now())&&(m+=".js");d.config({packages:[{name:"app",path:a,tag:m}]});b.viewChangeAnim&&d.Env.mods["mxext/vfanim"]&&d.use("mxext/vfanim")},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isObject,isRegExp:d.isRegExp,isString:d.isString,isNumber:d.isNumber}});
KISSY.add("magix/impl/router",function(d){return{useHistoryState:function(){var b=this,a=location.href;d.one(window).on("popstate",function(){var d=location.href==a;if(b.$canFirePopState||!d)b.$canFirePopState=!0,b.route()})},useLocationHash:function(){var b=this;d.one(window).on("hashchange",function(){b.suspend();b.route();b.resume()})}}});
KISSY.add("magix/impl/view",function(d,b,a,m){var a=function(){},f={idIt:1,wrapAsyncUpdate:1,registerAsyncUpdateName:1,extend:1};a.extend=function(a,b){var g=function(){g.superclass.constructor.apply(this,arguments);b&&m.safeExec(b,[],this)},k;for(k in this)m.hasProp(f,k)&&(g[k]=this[k]);return d.extend(g,this,a)};m.mix(a.prototype,{getTmplByXHR:function(a,h){b({url:a,dataType:"html",success:function(a){h(a)},error:function(a,c){h(c)}})},delegateUnbubble:function(a,b){var g=this;if(!g.$cacheEvents)g.$cacheEvents=
{};a=d.one(a);a.delegate(b,"*[mx"+b+"]",g.$cacheEvents[b]=function(a){g.processEvent(a)})},undelegateUnbubble:function(a,b){var g=this.$cacheEvents;g&&(a=d.one(a),a.undelegate(b,"*[mx"+b+"]",g[b]),delete g[b])}});return a},{requires:["ajax","sizzle","magix/magix"]});
KISSY.add("magix/magix",function(d,b){var a=function(a,b){return!a?!1:Object.prototype.hasOwnProperty.call(a,b)},m=function(b,c,h){for(var d in c)if(a(c,d)&&(!h||!a(h,d)))b[d]=c[d];return b},f=function(a,b,c,f,p,n){h.isArray(a)||(a=[a]);if(!b||!h.isArray(b)&&!b.callee)b=[b];for(f=0;f<a.length;f++)try{n=a[f],p=h.isFunction(n)&&n.apply(c,b)}catch(u){d.log(u,n)}return p},c=function(){throw Error("unimplement method");},h={isArray:c,isObject:c,isFunction:c,isRegExp:c,isString:c,isNumber:c,libRequire:c,
include:c,libEnv:c,mix:m,unimpl:c,hasProp:a,safeExec:f,noop:function(){},templates:{},cfg:{},locals:{},config:function(a){var b=this.cfg;if(a)this.cfg=m(b,a);return this.cfg},start:function(a){var b=this,a=b.config(a);b.libEnv();a.ready&&(f(a.ready),delete a.ready);b.libRequire("magix/router",function(a){b.libRequire("magix/vom",function(b){a.bind("locationChanged",function(a){a.changed.isViewPath()?b.remountRootVframe(a):b.notifyLocationChange(a)});a.bind("idle",function(){b.resume()});a.bind("busy",
function(){b.suspend()});a.start()})})},objectKeys:function(b){if(Object.keys)return Object.keys(b);var c=[],d;for(d in b)a(b,d)&&c.push(d);return c},local:function(a,b){var c=arguments,d=this.locals;if(0==c.length)return d;if(1==c.length)if(this.isObject(a))m(d,a);else return d[a];else d[a]=b}};return h.mix(h,b)},{requires:["magix/impl/magix"]});
KISSY.add("magix/router",function(d,b,a,m){var f=a.hasProp,c=a.mix,h=function(b){var i,j=this.params;a.isArray(b)||(b=(""+b).split(","));for(var e=0;e<b.length&&!(i=f(j,b[e]));e++);return i},g=function(){return f(this,l)},k=function(){return f(this,"viewPath")},t=function(){return this.hash[l]!=this.query[l]},o=function(a){return this.hash.params[a]!=this.query.params[a]},p=function(a){return f(this.hash.params,a)},n=function(a){return f(this.query.params,a)},u=function(a){return this.params[a]},
y=a.safeExec,r=window,w=encodeURIComponent,z=decodeURIComponent,x=/\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,A=/[^\/]*$/,s=/([#?]).*$/,B=/([^=&?\/#]+)=([^&=#?]*)/g,l="pathname",d=c({iQ:[],iC:0,qH:{},useHistoryState:a.unimpl,useLocationHash:a.unimpl,compareObject:function(b,i){for(var j=[],j=j.concat(a.objectKeys(b)),j=j.concat(a.objectKeys(i)),e=0;e<j.length;e++){var q=j[e];if(b[q]!=i[q])return!1}return!0},getPathnameRelations:function(){if(this.$pnr)return this.$pnr;var b={virtualToReal:{},virtualRegExpToReal:{}},
i=a.config().pathCfg,j=i.map,e=i.defaultView,q=i.defaultPathname||"";if(a.isObject(j))for(var c in j)if(f(j,c))for(var n=c,d=j[c],p=[],p=a.isArray(d)?d:a.isString(d)?d.split(","):[d],d=0;d<p.length;d++)a.isRegExp(p[d])?b.virtualRegExpToReal[n]=p[d]:(!q&&n==e&&(q=p[d]),b.virtualToReal[p[d]]=n);if(!e)throw Error("unset defaultView");b.virtualToReal[""]=e;b.home=e;b[l]=q;b.notFound=i.notFound;return this.$pnr=b},getViewPath:function(a){var i=this.getPathnameRelations();a||(a=i[l]);var j=i.virtualToReal[a];
if(!j)for(var e in i.virtualRegExpToReal)if(i.virtualRegExpToReal[e].test(a)){j=e;break}return{viewPath:j?j:i.notFound||i.home,pathname:j?a:i.notFound?a:i[l]}},start:function(){this.supportHistoryState()?this.useHistoryState():this.useLocationHash();this.route()},supportHistoryState:function(){var b=r.history;return a.config().useHistoryState&&b.pushState&&b.replaceState},pathToObject:function(b){var i={},j={},e=r.location.protocol,c="";s.test(b)?c=b.replace(s,""):~b.indexOf("=")||(c=b);if(c)if(0==
c.indexOf(e))e=c.indexOf("/",e.length+2),c=-1==e?"/":c.substring(e);else if("/"!=c.charAt(0)&&a.config().useHistoryState&&!this.supportHistoryState()){e=r.location[l].replace(A,"");for(e+=c;x.test(e);)e=e.replace(x,"$1/");c=e}b.replace(B,function(i,a,e){j[a]=e});i[l]=c;i.params=j;return i},objectToPath:function(a){var i=a[l],j=[],e;for(e in a.params)f(a.params,e)&&j.push(e+"="+a.params[e]);return i+(j.length?"?":"")+j.join("&")},parseQueryAndHash:function(){var a=r.location.href,i=this.qH;try{a=z(a)}catch(j){}if(f(i,
a))return i[a];var e=a.replace(/^[^?#]+/g,""),b=r.location[l]+e.replace(/^([^#]+).*$/g,"$1"),e=e.replace(/^[^#]*#?/g,""),d=this.pathToObject(b),h=this.pathToObject(e.replace(/^!?/,"")),g={};c(g,d.params);c(g,h.params);return i[a]={isPathnameDiff:t,isParamDiff:o,hashParamsOwn:p,queryParamsOwn:n,get:u,originalQuery:b,originalHash:e,query:d,hash:h,params:g}},parseLocation:function(){var b=this.parseQueryAndHash(),i=this.getViewPath(a.config().useHistoryState?b.hash[l]?b.hash[l]:b.query[l]:b.hash[l]);
return c(b,i)},getChangedLocation:function(b,i){var j={params:{}};b[l]!=i[l]&&(j[l]=!0);if(b.viewPath!=i.viewPath)j.viewPath=!0;for(var e=a.objectKeys(b.params),e=e.concat(a.objectKeys(i.params)),c=0;c<e.length;c++){var n=e[c];b.params[n]!==i.params[n]&&(j.params[n]=!0)}j.isParam=h;j.isPathname=g;j.isViewPath=k;return j},route:function(){var a=this.parseLocation(),i=this.$location||{params:{}},b=!this.$location,e;a.viewPath==(i.viewPath||"")?this.compareLocation(i,a)||(e=!0):e=!0;e&&(i=this.getChangedLocation(i,
a),this.trigger("locationChanged",{location:a,changed:i,firstFire:b}));this.$location=a;this.resume()},compareLocation:function(a,i){return a[l]!=i[l]?!1:this.compareObject(a.params,i.params)},navigate2:function(b){var i=this;b&&a.isString(b)&&i.idle(function(){i.trigger("busy");i.suspend();var j=i.pathToObject(b),e=c({},i.$location.params),e=c(e,j.params);if(j[l]){if(a.config().useHistoryState&&!i.supportHistoryState()&&(e=i.$location.query)&&(e=e.params))for(var n in e)f(e,n)&&!f(j.params,n)&&(j.params[n]=
"")}else j.params=e,j[l]=i.$location[l];i.compareLocation(j,i.$location)?i.resume():(j=i.objectToPath(j),i.supportHistoryState()?(i.$canFirePopState=!0,history.pushState(new Date,document.title,j),i.route()):location.hash="#!"+j)})},navigate:function(b,i){if(a.isObject(b)){var j=[],e;for(e in b)j.push(e+"="+w(b[e]));b=j.join("&");i&&(b=i+"?"+b)}this.navigate2(b)},idle:function(a){this.iC?this.iQ.push(a):y(a)},suspend:function(){this.iC++},resume:function(){0<this.iC&&(this.iC--,this.iC||(this.trigger("idle"),
this.iQ.length&&this.idle(this.iQ.shift())))}},m);return a.mix(d,b)},{requires:["magix/impl/router","magix/magix","magix/event"]});
KISSY.add("magix/vframe",function(d,b,a){var m=document,f=0,c=window.CollectGarbage||b.noop,h=b.safeExec,g=function(a){return"object"==typeof a?a:m.getElementById(a)},k=function(a){this.rC=0;this.rM={};this.notifyParentAlter();var b=this.view;h(b.trigger,"childrenAlter",b);this.unloadSubVframes(a)},t=/<script[^>]*>[\s\S]*?<\/script>/ig,o=function(a){this.id=o.idIt(a);this.viewId=this.id+"_view";this.children=[];this.view=null;this.rC=0;this.rM={}};b.mix(o,{tagName:"vframe",idIt:function(a){return a.id||
(a.id="magix_vf_"+f++)},createVframe:function(a,c){var a=g(a),d=new o(a);b.mix(d,c);return d},createVframeNode:function(a,b){var c=m.createElement(o.tagName);c.id=a;b.parentNode.insertBefore(c,b)}});m.createElement(o.tagName);b.mix(o.prototype,a);b.mix(o.prototype,{viewChangeUseAnim:function(){return!1},oldViewDestroy:b.noop,prepareNextView:b.noop,newViewCreated:b.noop,mountView:function(a){var c=this,d=g(c.id);d._dataBak?d._dataChged=1:(d._dataBak=1,d._dataTmpl=d.innerHTML.replace(t,""));var h=c.viewName&&
c.viewChangeUseAnim();c.unmountView(h,!0);if(a)c.viewName=a,b.libRequire(a,function(b){if(a==c.viewName){b.wrapAsyncUpdate();var g;h?(g=c.viewId,c.prepareNextView()):g=c.id;var f=new b({viewName:a,owner:c,ownerVOM:c.owner,id:g,vId:c.viewId,vfId:c.id});f.bind("interact",function(a){c.trigger("viewLoad",{view:f},c.vced=!0);h&&c.newViewCreated(!0);if(!a.tmpl){if(!h&&d._dataChged)d.innerHTML=d._dataTmpl;c.loadSubVframes()}f.bind("rendered",function(){c.loadSubVframes()});f.bind("prerender",function(a){k.call(c,
a.anim)})});c.view=f;f.load()}})},unmountView:function(a,b){if(this.view){k.call(this,a);this.view.destroy();this.vced=!1;var d=g(this.id);if(!a&&d._dataBak)d.innerHTML=d._dataTmpl,c();a&&b&&this.oldViewDestroy();delete this.view;delete this.viewName}else this.viewName&&(this.unbind("viewLoad"),delete this.viewName)},loadSubVframes:function(){this.owner.suspend();var a=(g(this.viewId)||g(this.id)).getElementsByTagName(o.tagName),b=a.length;if(b)for(var c=0,d;c<b;c++)d=a[c],d=o.createVframe(d,{owner:this.owner,
parentId:this.id}),this.children.push(d.id),d.mountView(a[c].getAttribute("data-view")),this.owner.registerVframe(d);else this.notifyChildrenCreated();this.owner.resume()},unloadSubVframes:function(a){for(var b=this.children,c,d=0,h=b.length,f;d<h;d++)f=b[d],c=this.owner.getVframe(f),c.unmountView(a),this.owner.unregisterVframe(c),g(f).id="";this.children=[]},notifyLocationChange:function(a){var c=this.view;if(c&&c.exist&&c.rendered){if(h(c.testOLChanged,a,c))var d=h(c.locationChange,a,c);if(!1!==
d){if(!b.isArray(d))d=this.children;for(var c=0,f=d.length,g;c<f;c++)(g=this.owner.getVframe(d[c]))&&h(g.notifyLocationChange,a,g)}}},notifyChildrenCreated:function(){var a=this.view;a&&h(a.trigger,"childrenCreated",a);this.notifyParentAlter(!0)},notifyParentAlter:function(a){var c=this.parentId;if(c)if(c=this.owner.getVframe(c),a)b.hasProp(c.rM,this.id)||(c.rM[this.id]=1,c.rC++,c.rC==c.children.length&&c.notifyChildrenCreated());else if(b.hasProp(c.rM,this.id))delete c.rM[this.id],c.rC--,a=c.view,
h(a.trigger,"childrenAlter",a),c.notifyParentAlter()},message:function(a){var b=this.view;b&&this.vced?h(b.receiveMessage,a,b):this.viewName&&this.bind("viewLoad",function(b){h(b.view.receiveMessage,a,b.view)})}});return o},{requires:["magix/magix","magix/event"]});
KISSY.add("magix/view",function(d,b,a,m){var f=1,c=a.safeExec,h=a.hasProp,g="render,renderUI,updateUI".split(","),k=function(i){a.mix(this,i);this.exist=!0;this.iQ=[];this.sign=this.iC=0},t=k.prototype,o=function(a,b){return function(){var c=this,d=arguments;c.idle(function(){b&&c.sign++;a.apply(c,d)},[],c,a)}},p=/(?:^|\s)return(?:(?:\s+[+\-\w$'"{\[\(\/])|[+\-{\[\(\/'"])/,n=/{([\s\S]+)}/,u=/\\[\s\S]/g,y=/\s*\/\s*/g,r=/^[\s\xa0\u3000\uFEFF]*$/,w=[/[^\w$_]\/[\s\S]*?\//,/(?:'[^']*')|(?:"[^"]*")/,/{[^{}]+}/],
z=function(a){if(a=(""+a).match(n)){a=a[1];if(r.test(a))return!0;for(var a=a.replace(u,"").replace(y,""),b=0,c;b<w.length;b++)for(c=w[b];c.test(a);)a=a.replace(c,"");return p.test(a)}return!1};a.mix(k,{idIt:function(a){return a.id||(a.id="magix_mxe_"+f++)},wrapAsyncUpdate:function(){if(!this["~~"]){this["~~"]=1;var b=this.prototype,c;this.registerAsyncUpdateName();for(var e in b){c=b[e];var d=null;a.isFunction(c)&&c!=a.noop&&!c["~~"]&&!z(c)&&(h(this.$ans,e)?d=o(c,!0):h(b,e)&&!h(t,e)&&(d=o(c)),d&&
(d["~~"]=c,b[e]=d))}}},registerAsyncUpdateName:function(b){if(!this.$ans){this.$ans={};for(var c=0;c<g.length;c++)this.$ans[g[c]]=!0}if(b){a.isArray(b)||(b=[b]);for(c=0;c<b.length;c++)this.$ans[b[c]]=!0}return this}});var x={submit:1,blur:1,focus:1,focusin:1,focusout:1,mouseenter:1,mouseleave:1,mousewheel:1,valuechange:1},d=k.prototype,A=document,s=window,B=s.CollectGarbage||a.noop,l="abort,stop,cancel,destroy,dispose".split(","),v=function(a){return"object"==typeof a?a:A.getElementById(a)};a.mix(d,
m);a.mix(d,{getTmplByXHR:a.unimpl,delegateUnbubble:a.unimpl,undelegateUnbubble:a.unimpl,render:a.noop,locationChange:a.noop,receiveMessage:a.noop,init:a.noop,hasTemplate:!0,enableEvent:!0,enableRefreshAnim:!1,load:function(){var a=this,b=a.hasTemplate,e=function(){a.suspend();c(a.render,[],a);a.delegateBubbleEvents();a.idle(function(){var e=!b&&!a.rendered;if(e)a.delegateUnbubbleEvents(),a.rendered=!0;c(a.init,[],a);e&&a.trigger("created",null,!0)});a.trigger("interact",{tmpl:b},!0);a.resume()};b?
a.getTemplate(a.manage(function(b){a.template=b;e()})):e()},updateViewId:function(){this.id=v(this.vId)?this.vId:this.vfId},setNodeHTML:function(a){v(this.id).innerHTML=a},setViewHTML:function(b){if(this.exist){var d=this.rendered;if(d){var e=a.config().viewChangeAnim&&this.enableRefreshAnim;this.trigger("refresh",null,!0,!0);this.trigger("prerender",{anim:e});this.destroyManaged(!0);this.undelegateUnBubbleEvents();var q=this.owner;e&&(c(q.oldViewDestroy,[],q),c(q.prepareNextView,[],q),this.updateViewId())}this.setNodeHTML(b);
B();e&&c(q.newViewCreated,[],q);this.delegateUnbubbleEvents();this.rendered=!0;this.trigger("rendered");d||this.trigger("created",null,!0)}},postMessageTo:function(a,b){var c=this.ownerVOM;this.idle(c.postMessage,[a,b],c)},idle:function(a,b,e,d){var h=this;d||(d=a);var g=d["~~_id_"],k=h.iQ;h.iC?(g?k[g]&&(k[g]["~~_id_"]="~~_id_"):g=d["~~_id_"]="~~"+f++,k.push([a,b,e,d]),k[g]=a):"~~_id_"!=a["~~_id_"]&&h.ownerVOM.idle(function(){h.exist&&(g&&delete k[g],c(a,b,e))})},getLocation:function(){return this.ownerVOM.$location},
observeLocation:function(b,c){var e=arguments.length;if(e)1==e&&(c=!1),this.$location={keys:a.isArray(b)?b:(""+b).split(","),pn:c}},testOLChanged:function(a){var b=this.$location,a=a.changed;if(b){var c=!1;b.pn&&(c=a.isPathname());c||(c=a.isParam(b.keys));return c}return!0},destroy:function(){this.trigger("refresh",null,!0,!0);this.trigger("destroy",null,!0,!0);this.destroyManaged();this.undelegateUnBubbleEvents();this.undelegateBubbleEvents();this.exist=!1;this.iQ=[];this.sign++},getTemplate:function(b){var c=
this;if(c.template)b(c.template);else{var e=a.templates[c.viewName];if(e)b(e);else{var e=a.config(),d=e.appHome+c.viewName+".html";e.release||(d+="?_="+(new Date).getTime()+".html");c.getTmplByXHR(d,function(e){b(a.templates[c.viewName]=e)})}}},processEvent:function(a){if(this.enableEvent&&this.exist){for(var b=a.target;b&&1!=b.nodeType;)b=b.parentNode;for(var e=b,d="mx"+a.type,h,g=v(this.vfId);e&&e!=g&&!(h=e.getAttribute(d));)e=e.parentNode;if(h)if(d=e.getAttribute("data-handler"))~[",",d,","].join().indexOf(","+
this.vfId+",")||(h=0);else{for(d=e;d&&d!=g;)if("VFRAME"==d.tagName.toUpperCase()){e.setAttribute("data-handler",d.id);h=0;break}else d=d.parentNode;h&&e.setAttribute("data-handler",this.vfId)}if(h){h=h.split(":");var g=h.shift(),d=h[h.length-1],f,e=k.idIt(e);if("_halt_"==d||"_stop_"==d)a.stopPropagation(),f=!0;if("_halt_"==d||"_prevent_"==d)a.preventDefault(),f=!0;f&&h.pop();f=this.events;for(var d=f[a.type],l=0,m;l<h.length;l++)m=h[l].lastIndexOf("@"),-1<m&&(h[h[l].substring(m+1)]=h[l].substring(0,
m));d[g]&&c(d[g],{view:this,currentId:e,targetId:k.idIt(b),domEvent:a,events:f,params:h},d)}}},fixedEvent:function(a){if(!a)a=s.event;if(a){if(!a.stopPropagation)a.stopPropagation=function(){a.cancelBubble=!0};if(!a.preventDefault)a.preventDefault=function(){a.returnValue=!1};if(a.srcElement&&!a.target)a.target=a.srcElement}return a},processDelegateEvents:function(a,b){var c=this;if(c.enableEvent){var d=c.events,g=v(c.vfId);if(c.$bubbleList&&c.$unbubbleList)for(var d=a?c.$bubbleList:c.$unbubbleList,
f=0;f<d.length;f++)a?g["on"+d[f]]=b?null:function(a){a=c.fixedEvent(a);c.processEvent(a)}:b?c.undelegateUnbubble(g,d[f]):c.delegateUnbubble(g,d[f]);else for(f in c.$bubbleList=[],c.$unbubbleList=[],d)h(d,f)&&(h(x,f)?(c.$unbubbleList.push(f),a||(b?c.undelegateUnbubble(g,f):c.delegateUnbubble(g,f))):(c.$bubbleList.push(f),a&&(g["on"+f]=b?null:function(a){a=c.fixedEvent(a);c.processEvent(a)})))}},delegateBubbleEvents:function(){this.processDelegateEvents(!0)},delegateUnbubbleEvents:function(){this.processDelegateEvents()},
undelegateUnBubbleEvents:function(){this.processDelegateEvents(!1,!0)},undelegateBubbleEvents:function(){this.processDelegateEvents(!0,!0)},manage:function(b,c){var d=!0;1==arguments.length&&(c=b,b="res_"+f++,d=!1);if(!this.$resCache)this.$resCache={};d={hasKey:d,res:c};a.isFunction(c)&&(c=this.wrapManagedFunction(c),d[this.sign]=c);this.$resCache[b]=d;return c},getManaged:function(b){var c=this.$resCache,d=this.sign;return c&&h(c,b)?(b=c[b],c=b.res,a.isFunction(c)&&(b[d]||(b[d]=this.wrapManagedFunction(c)),
c=b[d]),c):null},removeManaged:function(a){var b=null,c=this.$resCache;if(c)if(h(c,a))b=c[a].res,delete c[a];else for(var d in c)if(c[d].res===a){b=c[d].res;delete c[d];break}return b},destroyManaged:function(b){var d=this.$resCache;if(d){for(var e in d){var h=d[e],f=!1,g=h.res;if(a.isNumber(g))s.clearTimeout(g),s.clearInterval(g),f=!0;else if(g)for(var k=0;k<l.length;k++)a.isFunction(g[l[k]])&&(c(g[l[k]],[],g),f=!0);this.trigger("destroyResource",{resource:g,processed:f});b&&!h.hasKey&&delete d[e]}b||
(this.unbind("destroyResource"),delete this.$resCache)}},wrapManagedFunction:function(a){var b=this,d=b.sign;return function(){b.sign==d&&c(a,arguments,b)}},beginAsyncUpdate:function(){return this.sign++},signature:function(){return this.sign},endAsyncUpdate:function(){return this.sign},suspend:function(){this.iC++},resume:function(){0<this.iC&&this.iC--;if(!this.iC){var a=[].slice.call(this.iQ);for(this.iQ=[];a.length;)this.idle.apply(this,a.shift())}}});a.mix(k,b,{prototype:!0});a.mix(k.prototype,
b.prototype);return k},{requires:["magix/impl/view","magix/magix","magix/event"]});
KISSY.add("magix/vom",function(d,b,a,m){var f=document;return a.mix({iC:0,iQ:[],rootVframe:null,vframes:{},rootVframeId:"magix_vf_root",registerVframe:function(a){this.vframes[a.id]=a;this.trigger(a.id,{vframe:a},!0)},getVframe:function(a){return this.vframes[a]},unregisterVframe:function(b){delete this.vframes[a.isString(b)?b:b.id]},buildRootVframe:function(){if(!this.rootVframe)f.getElementById(this.rootVframeId)||b.createVframeNode(this.rootVframeId,f.body.firstChild),this.rootVframe=b.createVframe(this.rootVframeId,
{owner:this}),this.registerVframe(this.rootVframe)},remountRootVframe:function(a){this.$location=a.location;this.buildRootVframe();this.rootVframe.mountView(a.location.viewPath)},notifyLocationChange:function(a){this.$location=a.location;this.rootVframe&&this.rootVframe.notifyLocationChange(a)},idle:function(b,d,g){this.iC?this.iQ.push([b,d,g]):a.safeExec(b,d,g)},suspend:function(){this.iC++},resume:function(){0<this.iC&&this.iC--;if(!this.iC){var a=this.iQ;if(a.length){a=[].slice.call(a);for(this.iQ=
[];a.length;)this.idle.apply(this,a.shift())}}},postMessage:function(b,d){a.isArray(b)||(b=[b]);d||(d={});for(var g=0;g<b.length;g++){var f=this.getVframe(b[g]);f?f.message(d):this.bind(b[g],function(a){a.vframe.message(d)})}}},m)},{requires:["magix/vframe","magix/magix","magix/event"]});
(function(d){var b=function(){};if(!d.console)d.console={log:b,warn:b,error:b,debug:b};if(!d.Magix)d.Magix={start:function(a){this.$tempCfg=a}},KISSY.use("magix/magix",function(a,b){var f=d.Magix.$tempCfg;d.Magix=b;f&&b.start(f)})})(this);