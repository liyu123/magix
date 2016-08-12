/*Magix3.1.1 Licensed MIT*/KISSY.add("magix",function(n,t){var e,r=function(t,e){n.use(t&&t+$,function(n){e&&e.apply(n,d.call(arguments,1))})},i=n.extend,o=n.isObject,a=n.isArray,u=n.DOM,f=u.html,c=function(t,e,r,i){e&&!c[t]&&(c[t]=1,r=n.one(w+T),r?(i=r.prop("styleSheet"),i?i.cssText+=e:r.append(e)):n.one("head").append('<style id="'+T+'">'+e+"</style>"))},s=0,$="",h=[],d=h.slice,l=function(){},p=",",v=null,m=window,g=document,w="#",y="",b="object",x="prototype",k="/",V=/[#?].*$/,S=/([^=&?\/#]+)=?([^&#?]*)/g,q=/(?!^)=|&/,I=function(n){return(n||"mx_")+s++},T=I(),j=I(),U={rootId:I(),defaultView:j,error:function(n){throw n}},H=U.hasOwnProperty,O=function(n){return typeof n==b?n:g.getElementById(n)},A=function(n,t,e){if(n=O(n),t=O(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},M=function(n,t,e){for(e in t)n[e]=t[e];return n},P=function(n,t,e,r,i,o){for(a(n)||(n=[n]),a(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(u){U.error(u)}return i},Z=function(n,t){return n&&H.call(n,t)},E=function(n,t){return t.f-n.f||t.t-n.t},L=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};M(L[x],{get:function(n){var t=this,e=t.c,r=e[y+n];return r&&(r.f++,r.t=s++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=y+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(E);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=s++},del:function(n){n=y+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=$,delete t[n],r&&P(r,e.o,e))},has:function(n){return Z(this.c,y+n)}});var N,C=new L,D=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}N[t]=e},J=function(n){var t,e=C.get(n);return e||(N={},t=n.replace(V,$),n==t&&q.test(t)&&(t=$),n.replace(t,$).replace(S,D),C.set(n,e={a:t,b:N})),{path:e.a,params:M({},e.b)}},R=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+$,(!e||r||Z(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},B=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;i>e;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},F=Object.keys||function(n,t,e){t=[];for(e in n)Z(n,e)&&t.push(e);return t},K={config:function(n,t){return t=U,n&&(t=o(n)?M(t,n):t[n]),t},boot:function(n){M(U,n),r(U.ini,function(t){M(U,t),M(U,n),r(U.exts,function(){ln.on("changed",Tn),ln.bind()})})},toMap:B,toTry:P,toUrl:R,parseUrl:J,mix:M,has:Z,keys:F,inside:A,node:O,applyStyle:c,guid:I,Cache:L},Q="on",Y={fire:function(n,t,e,r){var i,o,a,u,f=y+n,c=this,s=c[f];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)a=r?i:o-i,u=s[a],u.d?(s.splice(a,1),o--):P(u.f,t,c);s=c[Q+n],s&&P(s,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=y+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=y+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t&&!r.d){r.d=1;break}}else delete o[i],delete o[Q+n]}};K.Event=Y;var _,z,G,W,X,nn,tn="path",en="view",rn="params",on=new L,an=new L,un=m.location,fn={params:{},href:$},cn=/(?:^https?:\/\/[^\/]+|#.*$)/gi,sn=/^[^#]*#?!?/,$n=function(n,t,e){if(n){e=this[rn],n=(n+$).split(p);for(var r=0;r<n.length&&!(t=Z(e,n[r]));r++);}return t},hn=function(n){if(G||(G=U.routes||{},W=U.unmatchView,X=U.defaultView,nn=U.defaultPath||k,G[nn]||(G[nn]=X)),!n[en]){var t=n.hash[tn]||ln.edge&&n.query[tn]||nn;n[tn]=t,n[en]=G[t]||W||X}},dn=function(n,t){var e=n.href,r=t.href,i=e+y+r,o=an.get(i);if(!o){var a,u,f,c;o={isParam:$n,force:!n.href},o[rn]=c={};var s,$,h=n[rn],d=t[rn],l=[tn,en].concat(F(h),F(d));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,d=t,c=o),u=h[$],f=d[$],u!=f&&(c[$]={from:u,to:f},a=1);an.set(i,o={a:a,b:o})}return o},ln=M({update:function(n,t,e,r){n=R(n,t,e.query[rn]),n!=e.srcHash&&(n="#!"+n,r?un.replace(n):un.hash=n)},parse:function(n){n=n||un.href;var t,e,r,i,o=on.get(n);return o||(t=n.replace(cn,$),e=n.replace(sn,$),r=J(t),i=J(e),o={href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:M(M({},r[rn]),i[rn])},hn(o),on.set(n,o)),o},diff:function(){var n=ln.parse(),t=dn(fn,fn=n);return t.a&&(z=fn[rn],ln.fire("changed",_=t.b)),_},to:function(n,t,e){!t&&o(n)&&(t=n,n=$);var r=J(n),i=r[rn],a=r[tn],u=fn[tn];if(M(i,t),a)for(u in fn.query[rn])Z(i,u)||(i[u]=$);else z&&(a=u,i=M(M({},z),i));ln.update(a,z=i,fn,e)}},Y);K.Router=ln;var pn=n.one(m);ln.bind=function(){var n,t=ln.parse().srcHash;pn.on("hashchange",function(e,r){r=ln.parse(),n=r.srcHash,n!=t&&(e={backward:function(){e.p=1,location.hash="#!"+t},forward:function(){e.p=1,t=n,ln.diff()},prevent:function(){e.p=1},location:r},ln.fire("change",e),e.p||e.forward())}),window.onbeforeunload=function(n){n=n||window.event;var t={};return ln.fire("pageunload",t),t.msg?(n&&(n.returnValue=t.msg),t.msg):void 0},ln.diff()};var vn,mn,gn=n.all,wn=/\{(.+)\}/,yn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=kn[n.pId],e&&!Z(e.$r,t)&&(e.$r[t]=1,e.$rc++,yn(e)))},bn=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=kn[n.pId],r&&Z(r.$r,e)&&(r.$rc--,delete r.$r[e],bn(r,t)))},xn=function(n,t){return vn||(e=g.body,n=U.rootId,t=O(n),t||(e.id=n),vn=new jn(n)),vn},kn={},Vn=function(n,t){Z(kn,n)||(kn[n]=t,jn.fire("add",{vframe:t}))},Sn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},qn=function(n,t,e){e=kn[n],e&&(delete kn[n],jn.fire("remove",{vframe:e,fcc:t}))},In=function(n,t){if(n&&(t=n.$v)&&t.$s>0){var e=ot(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;i>o;)In(kn[r[o++]])}},Tn=function(n){var t,e=xn();(t=n.view)?e.mountView(t.to):In(e)},jn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,Vn(n,e)};M(jn,M({root:xn,all:function(){return kn},get:function(n){return kn[n]}},Y)),M(M(jn[x],Y),{mountView:function(n,t){var e,i,o,a=this,u=O(a.id);!a.$a&&u&&(a.$a=1,a.$t=u.innerHTML),a.unmountView(),a.$d=0,u&&n&&(a.path=n,e=J(n),i=++a.$s,r(e.path,function(n){if(i==a.$s){it(n);var r,u,f=e.params,c=a.parent();if(c=c&&c.$v,c=c&&c.$updater)for(r in f)u=f[r],u=u.match(wn),u&&(f[r]=c.get(u[1]));var s=M(f,t);o=new n({owner:a,id:a.id},s),a.$v=o,tt(o),o.init(s),o.render(),o.tmpl||o.$p||o.endUpdate()}}))},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(mn||(t=1,mn={id:e.id}),e.$d=1,e.unmountZone(0,1),bn(e,mn),e.$v=0,at(r),n=O(e.id),n&&e.$a&&f(n,e.$t),t&&(mn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return bn(i),r=kn[n],r||(Z(i.$c,n)||(i.$cl=$,i.$cc++),i.$c[n]=n,r=new jn(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var e,r,i,o=this;n=n||o.id;var a=gn(w+n+" [mx-view]");for(o.$h=1,o.unmountZone(n,1),e=a.length-1;e>=0;e--)r=a[e],i=r.id||(r.id=I()),o.mountVframe(i,r.getAttribute("mx-view"),t);o.$h=0,yn(o)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=kn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),qn(n,r),e.id=e.pId=$,e=kn[i],e&&Z(e.$c,n)&&(delete e.$c[n],e.$cl=$,e.$cc--,t||yn(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&A(e,n))&&r.unmountVframe(e,1);t||yn(r)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=kn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=F(n.$c))},invoke:function(n,t){var e,r,i,o,a,u,f=this;return(r=f.$v)&&r.$p?e=(i=r[n])&&P(i,t,r):(a=f.$il,o=a[u=y+n],o&&(o.r=1),o={n:n,a:t,k:u},a.push(o),a[u]=o),e}}),K.Vframe=jn;var Un=function(n,t){t=this,P(t.f,n,t.v)},Hn=function(n,e,r,i,o,a){a?t[(i?"un":$)+"delegate"](n,e,o,r,a):t[i?"detach":Q](n,e,r,a)},On="parentNode",An=new L(30,10),Mn=/([^\(]+)\(([\s\S]*)?\)/,Pn={},Zn=function(n){for(var t,r,i,o,a,u,f,c,s,$,d=n.target,l=n.type,p="mx-"+l,v=[];d!=e&&1==d.nodeType;){if(t=d.getAttribute(p)){if(v=[],a=d.$f,!a)for(u=d;u=u[On];)if(Z(kn,f=u.id)){d.$f=a=f;break}a?(i=kn[a],o=i&&i.$v,o&&o.$s>0&&(c=An.get(t),c||(c=t.match(Mn)||h,c={n:c[1],i:c[2]},c.p=c.i&&P(Function("return "+c.i))||{},An.set(t,c)),s=c.n+y+l,$=o[s],$&&(n.current=d,n.currentTarget=d,n.params=c.p,P($,n,o)))):U.error(Error("bad:"+t))}if((r=d.$)&&r[l]||n.mxStop||n.isPropagationStopped())break;v.push(d),d=d[On]||e}for(;d=v.pop();)r=d.$||(d.$={}),r[l]=1},En=function(n,t){var r=0|Pn[n],i=r>0?1:0;r+=t?-i:i,r||(Hn(e,n,Zn,t),t||(r=1)),Pn[n]=r},Ln={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Nn=/\\|'|\r|\n|\u2028|\u2029/g,Cn=function(n){return"\\"+Ln[n]},Dn=/<%=([\s\S]+?)%>|<%!([\s\S]+?)%>|<%([\s\S]+?)%>|$/g,Jn=function(n){var t=0,e="$p+='";n.replace(Dn,function(r,i,o,a,u){return e+=n.slice(t,u).replace(Nn,Cn),t=u+r.length,i?e+="'+\n(($t=("+i+"))==null?'':$e($t))+\n'":o?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":a&&(e+="';\n"+a+"\n$p+='"),r}),e+="';\n",e="with($mx){\n"+e+"}\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){v=v==null?'':''+v;return v.replace($er,$ef)};\n"+e+"return $p;\n";var r;try{r=Function("$mx",e)}catch(i){throw i.source=e,i}return r},Rn=new L,Bn=function(n,t){var e=Rn.get(n);return e||(e=Jn(n),Rn.set(n,e)),e(t)},Fn=/\u001f/g,Kn=/@(\d+)\-\u001f/g,Qn=JSON.stringify,Yn=function(n,t,e,r){var i=n.$v,o=i.tmpl,a=i.tmplData,u=i.id,f=function(n,t){return Bn(n,t).replace(Fn,u)};if(t||!n.$rd)if(n.$rd&&e&&a)for(var c,s,$,h,d,l,p,v,m={},g=function(n){var t=n.id||(n.id=I("n"));if(!m[t]){m[t]=1;var e=s.view&&kn[t];if(h)for(var o=s.attrs.length-1;o>=0;o--){var a=s.attrs[o],u=f(a.v,r);a.p?n[a.n]=u:n.setAttribute(a.n,u)}e&&e.unmountView(),s.tmpl&&$&&i.setHTML(t,f(s.tmpl,r)),e&&e.mountView(f(s.view,r))}},w=a.length-1;w>=0;w--){if($=0,h=0,s=a[w],d=1,p=s.mask,c=s.pKeys)for(l=c.length;--l>=0;)if(Z(e,c[l])){d=0;break}if(d){for(c=s.keys,l=c.length,d=0;--l>=0;)if(Z(e,c[l])){if(d=1,!p||$&&h){$=s.tmpl,h=s.attrs;break}v=p.charAt(l),$=$||1&v,h=h||2&v}if(d){d="#"+u+" "+s.selector.replace(Fn,u);var y=document.querySelectorAll(d);for(l=0;l<y.length;)g(y[l++])}}}else{var b,x,k=function(n,t){return b[t].tmpl};if(a){if(!a.$)for(a.$=b={},x=a.length;x>0;){var V=a[--x];V.guid&&(b[V.guid]=V,V.tmpl=V.tmpl.replace(Kn,k),delete V.guid)}b=a.$}n.$rd=1;var S=o.replace(Kn,k);i.setHTML(u,f(S,r))}},_n=function(n){var t=this;t.$v=n,t.$data={},t.$json={}},zn=_n.prototype;M(zn,Y),M(zn,{get:function(n){var t=this.$data;return n&&(t=t[n]),t},set:function(n){var t=this;return M(t.$data,n),t},digest:function(){var n,t,e,r,i,o=this,a=o.$data,u=o.$json,f={};for(e in a)t=a[e],i=0,r=Qn(t),Z(u,e)?(i=r!=u[e],u[e]=r):(u[e]=r,i=1),i&&(f[e]=n=1);return Yn(o,n,f,a),n&&(o.fire("changed",{keys:f}),delete o.$lss),o},snapshot:function(){var n=this;return n.$ss=Qn(n.$json),n},altered:function(){var n=this;return n.$ss?(n.$lss||(n.$lss=JSON.stringify(n.$json)),n.$ss!=n.$lss):!0}});var Gn=/^(\$?)([^<]+)<([^>]+)>$/,Wn=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&Xn(i,e,1)},Xn=function(n,t,e){var r,i,o=n[t];return o&&(i=o.e,r=i.destroy,r&&e&&P(r,h,i),delete n[t]),i},nt=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),Wn(e),P(t,d.call(arguments),e))}},tt=function(n,t){var e,r,i=n.$eo;for(e in i)En(e,t);for(i=n.$el,e=i.length;e--;)r=i[e],Hn(r.e||w+n.id,r.n,Un,t,r.s,{v:n,f:r.f})},et=[],rt={win:m,doc:g},it=function(n){if(!n[y]){n[y]=1;var t,e,r,i,o,a,u,f,c=n[x],s={},$=[];for(u in c)if(t=c[u],e=u.match(Gn))for(a=e[1],r=e[2],i=e[3].split(p);f=i.pop();)a?(o=rt[r],$.push({f:t,s:o?v:" "+r,n:f,e:o})):(s[f]=1,c[r+y+f]=t);nt(c),c.$eo=s,c.$el=$}},ot=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=_.path),t||(t=_.isParam(e.k))),t},at=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),Wn(n,1),tt(n,1)),n.$s--},ut=function(n,t){t=this,M(t,n),t.$l={k:[]},t.$r={},t.$s=1,P(et,n,t),t.$updater=new _n(t)},ft=ut[x];M(ut,{merge:function(n,t){t=n&&n.ctor,t&&et.push(t),M(ft,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,o=[];r&&o.push(r);var a=function(n,t){e.call(this,n,t),P(o,t,this)},u=n.mixins;if(u)for(var f,c=u.length;--c>=0;)f=u[c],r=f.ctor,r&&o.push(r),M(n,r);return a.extend=e.extend,i(a,e,n,t)}}),M(M(ft,Y),{render:l,init:l,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n,1)},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||Sn(e))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,t&&(e.p=t),n&&(e.k=r.concat((n+$).split(p)))},capture:function(n,t,e,r,i){return r=this.$r,Xn(r,n,1),i={e:t,x:e},r[n]=i,t},release:function(n,t){return Xn(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(r){r.prevent(),e.$tipped||(t.call(e)?(e.$tipped=!0,window.confirm(n)?(e.$tipped=!1,r.forward()):(e.$tipped=!1,r.backward())):r.forward())},i=function(r){t.call(e)&&(r.msg=n)};ln.on("change",r),ln.on("pageunload",i),e.on("destroy",function(){ln.off("change",r),ln.off("pageunload",i)})},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=Z(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=O(n),e&&f(e,t)),r.endUpdate(n)}}),K.View=ut;var ct=n.type,st=n.bind,$t=n.now,ht=JSON.stringify,dt=function(){this.id=I("b"),this.$={}};M(dt[x],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,u=r.$,f=u;if(i){for(var c,s=a(n)?d.call(n):(n+$).split(".");(c=s.shift())&&f;)f=f[c];c&&(f=e)}return o&&ct(t)!=ct(f)&&(U.error(Error("type neq:"+n+"\n"+ht(u))),f=t),f},set:function(n,t){var e,r=this;o(n)||(e={},e[n]=t,n=e),M(r.$,n)}});var lt=1,pt=2,vt=function(n,t,e){e=this[n],delete this[n],P(e,t,e.e)},mt=function(n,t,e,r,i,o){var a=[],u=v,f=0;return function(c,s){var $,h=this;f++;var d=h.$m,l=d.k;a[c+1]=h;var p={bag:h,error:s};if(s)u=s,t.fire("fail",p),$=1;else if(!o.has(l)){l&&o.set(l,h),d.t=$t();var m=d.a;m&&P(m,h,h),d.x&&t.clear(d.x),t.fire("done",p),$=1}if(!e.$o){var g=f==r;g&&(e.$b=0,i==pt&&(a[0]=u,P(n,a,e))),i==lt&&P(n,[s?s:v,h,g,c],e)}$&&t.fire("end",p)}},gt=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){gt(this,t,e,r,i)});n.$b=1;var o=n.constructor,u=o.$r;a(t)||(t=[t]);for(var f,c=t.length,s=mt(e,o,n,c,r,o.$c),$=0;c>$;$++)if(f=t[$]){var h,d=o.get(f,i),l=d.e,p=l.$m.k,v=st(s,l,$);p&&u[p]?u[p].push(v):d.u?(p&&(h=[v],h.e=l,u[p]=h,v=st(vt,u,p)),o.$s(l,v)):v()}return n},wt=function(){var n=this;n.id=I("s"),n.$q=[]};M(wt[x],{all:function(n,t){return gt(this,n,t,pt)},save:function(n,t){return gt(this,n,t,pt,1)},one:function(n,t){return gt(this,n,t,lt)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=d.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&P(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var yt=function(n,t,e){return e=[ht(t),ht(n)],e.join(y)},bt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},xt=M({add:function(n){var t=this,e=t.$m;a(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=e.cache,i=new dt;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&yt(e,n)},o(n)&&i.set(n);var a=e.before;return a&&P(a,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(bt,B((n+$).split(p)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=o.cache;if(a&&(e=yt(o,n)),e){var u=r.$r,f=u[e];f?t=f.e:(t=i.get(e),t&&a>0&&$t()-t.$m.t>a&&(t=0))}return t}},Y);wt.extend=function(n,t,e){var r=this,o=function(){r.call(this)};return o.$s=n,o.$c=new L(t,e),o.$r={},o.$m={},i(o,r,v,xt)},K.Service=wt;var kt=function(n,t){var e=this,r=n&&n.ctor,o=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return o.extend=kt,i(o,e,n,t)};return M(l[x],Y),l.extend=kt,K.Base=l,n.add(j,function(){return ut.extend()}),K},{requires:["event","node"]});