"use strict";(self.webpackChunkFront_web=self.webpackChunkFront_web||[]).push([[174],{1174:(ut,q,h)=>{h.r(q),h.d(q,{LobbyModule:()=>k});var y=h(6895);function K(n,e,t,s,o,i,c){try{var l=n[i](c),a=l.value}catch(m){return void t(m)}l.done?e(a):Promise.resolve(a).then(s,o)}function G(n){return function(){var e=this,t=arguments;return new Promise(function(s,o){var i=n.apply(e,t);function c(a){K(i,s,o,c,l,"next",a)}function l(a){K(i,s,o,c,l,"throw",a)}c(void 0)})}}var pe=h(6805),ue=h(2961);function Y(n,e){const t="object"==typeof e;return new Promise((s,o)=>{const i=new ue.Hp({next:c=>{s(c),i.unsubscribe()},error:o,complete:()=>{t?s(e.defaultValue):o(new pe.K)}});n.subscribe(i)})}var fe=h(6167);class he{constructor(e,t){this.nick=e,this.tablero=t}}class me{constructor(e,t,s,o,i){this.cols=e,this.filas=t,this.background=s,this.bgReborde=o,this.puntuacion=i}}var r=h(8256),ge=h(9646),ye=h(9751),be=h(4351),Ce=h(9300),L=h(4004);class A{}class D{}class _{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const s=t.indexOf(":");if(s>0){const o=t.slice(0,s),i=o.toLowerCase(),c=t.slice(s+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(c):this.headers.set(i,[c])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const o=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(o,s),this.maybeSetNormalizedName(t,o))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof _?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new _;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof _?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const o=("a"===e.op?this.headers.get(t):void 0)||[];o.push(...s),this.headers.set(t,o);break;case"d":const i=e.value;if(i){let c=this.headers.get(t);if(!c)return;c=c.filter(l=>-1===i.indexOf(l)),0===c.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,c)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class _e{encodeKey(e){return Q(e)}encodeValue(e){return Q(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const xe=/%(\d[a-f0-9])/gi,Te={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Q(n){return encodeURIComponent(n).replace(xe,(e,t)=>Te[t]??e)}function J(n){return`${n}`}class v{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new _e,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ve(n,e){const t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[c,l]=-1==i?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,i)),e.decodeValue(o.slice(i+1))],a=t.get(c)||[];a.push(l),t.set(c,a)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t],o=Array.isArray(s)?s.map(J):[J(s)];this.map.set(t,o)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(s=>{const o=e[s];Array.isArray(o)?o.forEach(i=>{t.push({param:s,value:i,op:"a"})}):t.push({param:s,value:o,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(s=>t+"="+this.encoder.encodeValue(s)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new v({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(J(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let s=this.map.get(e.param)||[];const o=s.indexOf(J(e.value));-1!==o&&s.splice(o,1),s.length>0?this.map.set(e.param,s):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class Ee{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function $(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function V(n){return typeof Blob<"u"&&n instanceof Blob}function W(n){return typeof FormData<"u"&&n instanceof FormData}class I{constructor(e,t,s,o){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function we(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==s?s:null,i=o):i=s,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new _),this.context||(this.context=new Ee),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=t;else{const l=t.indexOf("?");this.urlWithParams=t+(-1===l?"?":l<t.length-1?"&":"")+c}}else this.params=new v,this.urlWithParams=t}serializeBody(){return null===this.body?null:$(this.body)||V(this.body)||W(this.body)||function Me(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof v?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||W(this.body)?null:V(this.body)?this.body.type||null:$(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,o=e.responseType||this.responseType,i=void 0!==e.body?e.body:this.body,c=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let a=e.headers||this.headers,m=e.params||this.params;const H=e.context??this.context;return void 0!==e.setHeaders&&(a=Object.keys(e.setHeaders).reduce((E,C)=>E.set(C,e.setHeaders[C]),a)),e.setParams&&(m=Object.keys(e.setParams).reduce((E,C)=>E.set(C,e.setParams[C]),m)),new I(t,s,i,{params:m,headers:a,context:H,reportProgress:l,responseType:o,withCredentials:c})}}var u=(()=>((u=u||{})[u.Sent=0]="Sent",u[u.UploadProgress=1]="UploadProgress",u[u.ResponseHeader=2]="ResponseHeader",u[u.DownloadProgress=3]="DownloadProgress",u[u.Response=4]="Response",u[u.User=5]="User",u))();class X{constructor(e,t=200,s="OK"){this.headers=e.headers||new _,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class U extends X{constructor(e={}){super(e),this.type=u.ResponseHeader}clone(e={}){return new U({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class j extends X{constructor(e={}){super(e),this.type=u.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new j({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class ee extends X{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function z(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let te=(()=>{class n{constructor(t){this.handler=t}request(t,s,o={}){let i;if(t instanceof I)i=t;else{let a,m;a=o.headers instanceof _?o.headers:new _(o.headers),o.params&&(m=o.params instanceof v?o.params:new v({fromObject:o.params})),i=new I(t,s,void 0!==o.body?o.body:null,{headers:a,context:o.context,params:m,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const c=(0,ge.of)(i).pipe((0,be.b)(a=>this.handler.handle(a)));if(t instanceof I||"events"===o.observe)return c;const l=c.pipe((0,Ce.h)(a=>a instanceof j));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe((0,L.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return l.pipe((0,L.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return l.pipe((0,L.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return l.pipe((0,L.U)(a=>a.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(t,s={}){return this.request("DELETE",t,s)}get(t,s={}){return this.request("GET",t,s)}head(t,s={}){return this.request("HEAD",t,s)}jsonp(t,s){return this.request("JSONP",t,{params:(new v).append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,s={}){return this.request("OPTIONS",t,s)}patch(t,s,o={}){return this.request("PATCH",t,z(o,s))}post(t,s,o={}){return this.request("POST",t,z(o,s))}put(t,s,o={}){return this.request("PUT",t,z(o,s))}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(A))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();function ne(n,e){return e(n)}function Pe(n,e){return(t,s)=>e.intercept(t,{handle:o=>n(o,s)})}const Oe=new r.OlP("HTTP_INTERCEPTORS"),F=new r.OlP("HTTP_INTERCEPTOR_FNS");function Ie(){let n=null;return(e,t)=>(null===n&&(n=((0,r.f3M)(Oe,{optional:!0})??[]).reduceRight(Pe,ne)),n(e,t))}let re=(()=>{class n extends A{constructor(t,s){super(),this.backend=t,this.injector=s,this.chain=null}handle(t){if(null===this.chain){const s=Array.from(new Set(this.injector.get(F)));this.chain=s.reduceRight((o,i)=>function ke(n,e,t){return(s,o)=>t.runInContext(()=>e(s,i=>n(i,o)))}(o,i,this.injector),ne)}return this.chain(t,s=>this.backend.handle(s))}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(D),r.LFG(r.lqb))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();const Ne=/^\)\]\}',?\n/;let se=(()=>{class n{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ye.y(s=>{const o=this.xhrFactory.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((d,f)=>o.setRequestHeader(d,f.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const d=t.detectContentTypeHeader();null!==d&&o.setRequestHeader("Content-Type",d)}if(t.responseType){const d=t.responseType.toLowerCase();o.responseType="json"!==d?d:"text"}const i=t.serializeBody();let c=null;const l=()=>{if(null!==c)return c;const d=o.statusText||"OK",f=new _(o.getAllResponseHeaders()),O=function He(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(o)||t.url;return c=new U({headers:f,status:o.status,statusText:d,url:O}),c},a=()=>{let{headers:d,status:f,statusText:O,url:de}=l(),g=null;204!==f&&(g=typeof o.response>"u"?o.responseText:o.response),0===f&&(f=g?200:0);let B=f>=200&&f<300;if("json"===t.responseType&&"string"==typeof g){const dt=g;g=g.replace(Ne,"");try{g=""!==g?JSON.parse(g):null}catch(pt){g=dt,B&&(B=!1,g={error:pt,text:g})}}B?(s.next(new j({body:g,headers:d,status:f,statusText:O,url:de||void 0})),s.complete()):s.error(new ee({error:g,headers:d,status:f,statusText:O,url:de||void 0}))},m=d=>{const{url:f}=l(),O=new ee({error:d,status:o.status||0,statusText:o.statusText||"Unknown Error",url:f||void 0});s.error(O)};let H=!1;const E=d=>{H||(s.next(l()),H=!0);let f={type:u.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(f.total=d.total),"text"===t.responseType&&o.responseText&&(f.partialText=o.responseText),s.next(f)},C=d=>{let f={type:u.UploadProgress,loaded:d.loaded};d.lengthComputable&&(f.total=d.total),s.next(f)};return o.addEventListener("load",a),o.addEventListener("error",m),o.addEventListener("timeout",m),o.addEventListener("abort",m),t.reportProgress&&(o.addEventListener("progress",E),null!==i&&o.upload&&o.upload.addEventListener("progress",C)),o.send(i),s.next({type:u.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",a),o.removeEventListener("timeout",m),t.reportProgress&&(o.removeEventListener("progress",E),null!==i&&o.upload&&o.upload.removeEventListener("progress",C)),o.readyState!==o.DONE&&o.abort()}})}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(y.JF))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();const Z=new r.OlP("XSRF_ENABLED"),ie=new r.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),ae=new r.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class ce{}let Je=(()=>{class n{constructor(t,s,o){this.doc=t,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,y.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(y.K0),r.LFG(r.Lbi),r.LFG(ie))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})();function je(n,e){const t=n.url.toLowerCase();if(!(0,r.f3M)(Z)||"GET"===n.method||"HEAD"===n.method||t.startsWith("http://")||t.startsWith("https://"))return e(n);const s=(0,r.f3M)(ce).getToken(),o=(0,r.f3M)(ae);return null!=s&&!n.headers.has(o)&&(n=n.clone({headers:n.headers.set(o,s)})),e(n)}var p=(()=>((p=p||{})[p.Interceptors=0]="Interceptors",p[p.LegacyInterceptors=1]="LegacyInterceptors",p[p.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",p[p.NoXsrfProtection=3]="NoXsrfProtection",p[p.JsonpSupport=4]="JsonpSupport",p[p.RequestsMadeViaParent=5]="RequestsMadeViaParent",p))();function w(n,e){return{\u0275kind:n,\u0275providers:e}}function De(...n){const e=[te,se,re,{provide:A,useExisting:re},{provide:D,useExisting:se},{provide:F,useValue:je,multi:!0},{provide:Z,useValue:!0},{provide:ce,useClass:Je}];for(const t of n)e.push(...t.\u0275providers);return(0,r.MR2)(e)}const le=new r.OlP("LEGACY_INTERCEPTOR_FN");let Ue=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[De(w(p.LegacyInterceptors,[{provide:le,useFactory:Ie},{provide:F,useExisting:le,multi:!0}]))]}),n})();class x{constructor(e){this.http=e,this.baseUrl="http://localhost:8081"}joinLobby(e){var t=this;return G(function*(){return yield Y(t.http.get(`${t.baseUrl}/lobbies/${e}`)).then(s=>s).catch(s=>{console.log(s)})})()}crearLobby(e){var t=this;return G(function*(){let s=new fe.Z(123,[new he(e,new me(0,0,[],[],0))]);return yield Y(t.http.post(`${t.baseUrl}/lobbies`,s)).then(o=>o).catch(o=>{console.log(o)})})()}}x.\u0275fac=function(e){return new(e||x)(r.LFG(te))},x.\u0275prov=r.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"});var T=h(241),ze=h(7186);function Ze(n,e){if(1&n){const t=r.EpF();r.TgZ(0,"img",6),r.NdJ("error",function(o){r.CHM(t);const i=r.oxw(2);return r.KtG(i.imageError(o))}),r.qZA()}if(2&n){const t=r.oxw(2);r.Q6J("src",t.image,r.LSH)}}function Be(n,e){if(1&n&&r._UZ(0,"span",8),2&n){const t=r.oxw(3);r.Tol(t.icon),r.Q6J("ngClass","p-chip-icon")}}function qe(n,e){if(1&n&&r.YNc(0,Be,1,3,"span",7),2&n){const t=r.oxw(2);r.Q6J("ngIf",t.icon)}}function Ke(n,e){if(1&n&&(r.TgZ(0,"div",9),r._uU(1),r.qZA()),2&n){const t=r.oxw(2);r.xp6(1),r.Oqu(t.label)}}function Ge(n,e){if(1&n){const t=r.EpF();r.TgZ(0,"span",10),r.NdJ("click",function(o){r.CHM(t);const i=r.oxw(2);return r.KtG(i.close(o))})("keydown.enter",function(o){r.CHM(t);const i=r.oxw(2);return r.KtG(i.close(o))}),r.qZA()}if(2&n){const t=r.oxw(2);r.Tol(t.removeIcon),r.Q6J("ngClass","pi-chip-remove-icon")}}function Ye(n,e){if(1&n&&(r.TgZ(0,"div",1),r.Hsn(1),r.YNc(2,Ze,1,1,"img",2),r.YNc(3,qe,1,1,"ng-template",null,3,r.W1O),r.YNc(5,Ke,2,1,"div",4),r.YNc(6,Ge,1,3,"span",5),r.qZA()),2&n){const t=r.MAs(4),s=r.oxw();r.Tol(s.styleClass),r.Q6J("ngClass",s.containerClass())("ngStyle",s.style),r.xp6(2),r.Q6J("ngIf",s.image)("ngIfElse",t),r.xp6(3),r.Q6J("ngIf",s.label),r.xp6(1),r.Q6J("ngIf",s.removable)}}const Qe=["*"];let $e=(()=>{class n{constructor(){this.removeIcon="pi pi-times-circle",this.onRemove=new r.vpe,this.onImageError=new r.vpe,this.visible=!0}containerClass(){return{"p-chip p-component":!0,"p-chip-image":null!=this.image}}close(t){this.visible=!1,this.onRemove.emit(t)}imageError(t){this.onImageError.emit(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["p-chip"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",style:"style",styleClass:"styleClass",removable:"removable",removeIcon:"removeIcon"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},ngContentSelectors:Qe,decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"src","error",4,"ngIf","ngIfElse"],["iconTemplate",""],["class","p-chip-text",4,"ngIf"],["tabindex","0",3,"class","ngClass","click","keydown.enter",4,"ngIf"],[3,"src","error"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-text"],["tabindex","0",3,"ngClass","click","keydown.enter"]],template:function(t,s){1&t&&(r.F$t(),r.YNc(0,Ye,7,8,"div",0)),2&t&&r.Q6J("ngIf",s.visible)},dependencies:[y.mk,y.O5,y.PC],styles:[".p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi{line-height:1.5}.pi-chip-remove-icon{line-height:1.5;cursor:pointer}.p-chip img{border-radius:50%}\n"],encapsulation:2,changeDetection:0}),n})(),Ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[y.ez]}),n})();function We(n,e){if(1&n){const t=r.EpF();r.TgZ(0,"span")(1,"i",7),r.NdJ("click",function(){r.CHM(t);const o=r.oxw().$implicit,i=r.oxw(2);return r.KtG(i.eliminarJugador(o))}),r.qZA()()}}function et(n,e){if(1&n&&(r.TgZ(0,"p-chip",6),r.YNc(1,We,2,0,"span",1),r.qZA()),2&n){const t=e.$implicit,s=r.oxw(2);r.Q6J("label",t.nick),r.xp6(1),r.Q6J("ngIf",s.isAdmin)}}function tt(n,e){if(1&n){const t=r.EpF();r.TgZ(0,"button",8),r.NdJ("click",function(){r.CHM(t);const o=r.oxw(2);return r.KtG(o.comenzarPartida())}),r._uU(1,"Comenzar"),r.qZA()}}function nt(n,e){if(1&n&&(r.TgZ(0,"body")(1,"div",2)(2,"h1"),r._uU(3,"Tu c\xf3digo de partida es:"),r.qZA(),r.TgZ(4,"p"),r._uU(5),r.qZA(),r.TgZ(6,"h3"),r._uU(7,"Jugadores:"),r.qZA(),r.TgZ(8,"div",3),r.YNc(9,et,2,2,"p-chip",4),r.qZA(),r.YNc(10,tt,2,0,"button",5),r.qZA()()),2&n){const t=r.oxw();r.xp6(5),r.Oqu(t.codigoPartida),r.xp6(4),r.Q6J("ngForOf",t.lobby.players),r.xp6(1),r.Q6J("ngIf",t.isAdmin)}}class S{constructor(e,t){this._router=e,this._activatedRoute=t,this.usuarios=[],this.isAdmin=!0}ngOnInit(){this._activatedRoute.params.subscribe(e=>{this.codigoPartida=e.id,this.ws=new ze.WebsocketBuilder(`ws://localhost:8081/lobby/${localStorage.getItem("nick")}/${this.codigoPartida}`).onMessage((t,s)=>this.lobby=JSON.parse(s.data)).onClose((t,s)=>this.comenzarPartida()).build()})}comenzarPartida(){this._router.navigateByUrl(`/game/${this.codigoPartida}`)}eliminarJugador(e){confirm(`\xbfDesea eliminar a ${e.nick} de la partida?`)&&this.ws.send(JSON.stringify({tipo:"eliminar-jugador",jugador:e.nick}))}}S.\u0275fac=function(e){return new(e||S)(r.Y36(T.F0),r.Y36(T.gz))},S.\u0275cmp=r.Xpm({type:S,selectors:[["app-lobby"]],decls:6,vars:1,consts:[["charset","UTF-8"],[4,"ngIf"],[1,"container"],[1,"inline"],[3,"label",4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[3,"label"],["aria-hidden","true",1,"fa","fa-times",3,"click"],[3,"click"]],template:function(e,t){1&e&&(r.TgZ(0,"html")(1,"head"),r._UZ(2,"meta",0),r.TgZ(3,"title"),r._uU(4,"Partida en Linea"),r.qZA()(),r.YNc(5,nt,11,3,"body",1),r.qZA()),2&e&&(r.xp6(5),r.Q6J("ngIf",t.lobby))},dependencies:[y.sg,y.O5,$e],styles:["body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;background-image:linear-gradient(to bottom,#ff0000,#ff9999);animation:_ngcontent-%COMP%_cambiarFondo 10s linear infinite}@keyframes _ngcontent-%COMP%_cambiarFondo{0%{background-image:linear-gradient(to bottom,#e100ff,#e799ff)}50%{background-image:linear-gradient(to bottom,#ff9999,#99ccff)}to{background-image:linear-gradient(to bottom,#f79b33,#e6c66f)}}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}h1[_ngcontent-%COMP%]{font-size:4rem;margin-bottom:2rem;color:#000;text-shadow:2px 2px 4px rgba(0,0,0,.3)}p[_ngcontent-%COMP%]{font-size:6rem;margin-bottom:2rem;color:#070707;text-shadow:2px 2px 4px rgba(0,0,0,.3)}button[_ngcontent-%COMP%]{background-image:linear-gradient(#3c20dd,#14a2da);color:#fff;border:none;padding:1rem 2rem;font-size:1.5rem;border-radius:.5rem;cursor:pointer;transition:background-image .3s ease}button[_ngcontent-%COMP%]:hover{background-image:linear-gradient(#14a2da,#3c20dd)}.inline[_ngcontent-%COMP%]{display:flex;margin-bottom:40px}.inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-inline:20px}"]});var b=h(433);class R{constructor(e,t){this.lobbyService=e,this.router=t}ngOnInit(){}crearPartida(){this.lobbyService.crearLobby(this.nombrePartida).then(e=>{e&&(localStorage.setItem("nick",this.nombrePartida),this.router.navigate(["/lobby/"+e?.codigo]))})}}R.\u0275fac=function(e){return new(e||R)(r.Y36(x),r.Y36(T.F0))},R.\u0275cmp=r.Xpm({type:R,selectors:[["app-form-create-lobby"]],decls:15,vars:1,consts:[["charset","UTF-8"],[1,"container"],[1,"form"],["for","nickname"],["type","text","id","nick","name","nick",3,"ngModel","ngModelChange"],[3,"click"]],template:function(e,t){1&e&&(r.TgZ(0,"html")(1,"head"),r._UZ(2,"meta",0),r.TgZ(3,"title"),r._uU(4,"Creando partida"),r.qZA()(),r.TgZ(5,"body")(6,"div",1)(7,"h1"),r._uU(8,"Creando partida"),r.qZA(),r.TgZ(9,"div",2)(10,"label",3),r._uU(11,"Coloque nick:"),r.qZA(),r.TgZ(12,"input",4),r.NdJ("ngModelChange",function(o){return t.nombrePartida=o}),r.qZA(),r.TgZ(13,"button",5),r.NdJ("click",function(){return t.crearPartida()}),r._uU(14,"Crear"),r.qZA()()()()()),2&e&&(r.xp6(12),r.Q6J("ngModel",t.nombrePartida))},dependencies:[b.Fj,b.JJ,b.On],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;height:100%;width:100%}body[_ngcontent-%COMP%]{background-image:url(/assets/juego1.jpg);background-size:cover;background-position:center center;background-repeat:no-repeat}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}h1[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:2rem;color:#070707;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem;background-color:#fffc;border-radius:1rem;box-shadow:0 .5rem 1rem #00000026}label[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}input[type=text][_ngcontent-%COMP%]{width:100%;padding:1rem;font-size:1.5rem;border:2px solid #ccc;border-radius:.5rem;margin-bottom:2rem}button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;border:none;padding:1rem 2rem;font-size:1.5rem;border-radius:.5rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#3e8e41}"]});class M{constructor(e){this.router=e}canActivate(e,t){return!!localStorage.getItem("nick")||(this.router.navigate(["/lobby/create"]),!1)}}M.\u0275fac=function(e){return new(e||M)(r.LFG(T.F0))},M.\u0275prov=r.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"});class N{constructor(e,t){this.lobbyService=e,this.router=t}onSubmit(){this.lobbyService.joinLobby(this.codigo).then(e=>{e?(localStorage.setItem("nick",this.nick),this.router.navigate(["/lobby",e.codigo])):alert("Error al unirse a la sala")})}}N.\u0275fac=function(e){return new(e||N)(r.Y36(x),r.Y36(T.F0))},N.\u0275cmp=r.Xpm({type:N,selectors:[["app-form-connect-lobby-component"]],decls:13,vars:2,consts:[[1,"container"],[1,"form"],[3,"ngSubmit"],["for","codigo"],["type","number","name","codigo","required","",3,"ngModel","ngModelChange"],["for","nick"],["type","text","name","nick","required","",3,"ngModel","ngModelChange"],["type","submit"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0)(1,"h1"),r._uU(2,"Ingresando a partida"),r.qZA(),r.TgZ(3,"div",1)(4,"form",2),r.NdJ("ngSubmit",function(){return t.onSubmit()}),r.TgZ(5,"label",3),r._uU(6,"C\xf3digo de la sala:"),r.qZA(),r.TgZ(7,"input",4),r.NdJ("ngModelChange",function(o){return t.codigo=o}),r.qZA(),r.TgZ(8,"label",5),r._uU(9,"Tu nick:"),r.qZA(),r.TgZ(10,"input",6),r.NdJ("ngModelChange",function(o){return t.nick=o}),r.qZA(),r.TgZ(11,"button",7),r._uU(12,"Unirme"),r.qZA()()()()),2&e&&(r.xp6(7),r.Q6J("ngModel",t.codigo),r.xp6(3),r.Q6J("ngModel",t.nick))},dependencies:[b._Y,b.Fj,b.wV,b.JJ,b.JL,b.Q7,b.On,b.F],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background-image:url(/assets/juego1.jpg);background-size:cover;background-position:center center;background-repeat:no-repeat}h1[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:2rem;color:#070707;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem;background-color:#fffc;border-radius:1rem;box-shadow:0 .5rem 1rem #00000026}label[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}input[_ngcontent-%COMP%]{width:100%;padding:1rem;font-size:1.5rem;border:2px solid #ccc;border-radius:.5rem;margin-bottom:2rem}button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;border:none;padding:1rem 2rem;font-size:1.5rem;border-radius:.5rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#3e8e41}"]});class P{}P.\u0275fac=function(e){return new(e||P)},P.\u0275mod=r.oAB({type:P}),P.\u0275inj=r.cJS({imports:[T.Bz.forChild([{path:"create",component:R},{path:"connect",component:N},{path:":id",component:S,canActivate:[M]}]),T.Bz]});var rt=h(4989),ot=h(805);let lt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[y.ez,ot.m8]}),n})();class k{}k.\u0275fac=function(e){return new(e||k)},k.\u0275mod=r.oAB({type:k}),k.\u0275inj=r.cJS({providers:[x],imports:[y.ez,P,rt.m,Ue,lt,Ve]})}}]);