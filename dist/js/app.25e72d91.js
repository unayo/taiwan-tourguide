(function(e){function t(t){for(var o,c,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-41ca8fbc":"c266a91d","chunk-26646669":"228ab3c4","chunk-52bbddd9":"468918a4","chunk-70560336":"5b2dde34"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-41ca8fbc":1,"chunk-26646669":1,"chunk-52bbddd9":1,"chunk-70560336":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-41ca8fbc":"0797fea9","chunk-26646669":"a0231e26","chunk-52bbddd9":"cc0ba6a4","chunk-70560336":"66485f44"}[e]+".css",r=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===r))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===o||s===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],b.parentNode.removeChild(b),n(a)},b.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}r[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/taiwan-tourguide/dist/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var b=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18cb":function(e,t,n){"use strict";n("982d")},"22ee":function(e,t,n){e.exports=n.p+"img/search.12cd48f6.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=n("9b19"),r=n.n(c),a=n("72ef"),i=n.n(a);function u(e,t,n,c,a,u){var l=Object(o["x"])("router-link"),s=Object(o["x"])("router-view");return Object(o["s"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(l,{to:"/"},{default:Object(o["D"])((function(){return[Object(o["f"])("div",{class:Object(o["n"])([!0===u.look?"bgBanner":"","position-relative"])},[Object(o["f"])("div",{class:Object(o["n"])([!0===u.look?"fontHome":"fontOther","font"])},[Object(o["f"])("img",{class:Object(o["n"])(!0===u.look?"logo":"logoOther"),alt:"logo",src:r.a},null,2),Object(o["f"])("img",{class:Object(o["n"])(!0===u.look?"taiwan":"d-none"),alt:"font taiwan",src:i.a},null,2)],2),Object(o["f"])("div",{class:Object(o["n"])([!0===u.look?"atHome":"atOther","orangeCircle rounded-circle bg-primary"])},null,2)],2)]})),_:1}),Object(o["h"])(s,{onEmitHome:u.getHomeInfo,"get-props":a.getInfo},null,8,["onEmitHome","get-props"])],64)}var l={data:function(){return{getInfo:[]}},methods:{getHomeInfo:function(e,t){this.getInfo={City:e,Category:t}}},computed:{look:function(){return"/"===this.$route.path}}},s=(n("18cb"),n("d959")),f=n.n(s);const b=f()(l,[["render",u]]);var d=b,p=(n("fe2e"),n("c134"),n("bc3a")),h=n.n(p),m=n("130e"),y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),g=(n("b0c0"),n("8cbf")),O=n.n(g),j=n("22ee"),v=n.n(j),k={class:"home"},C={class:"h-100 container position-relative"},w=Object(o["f"])("img",{alt:"rocket",class:"rocket position-absolute",src:O.a},null,-1),x={class:"h-100 row justify-content-center justify-content-md-end align-items-center"},T={class:"custom-phone col-10 col-md-4"},P=Object(o["f"])("h3",{class:"text-white text-center"},"訂製你的專屬旅程",-1),E=Object(o["f"])("option",{value:""},"選擇城市",-1),H=["value"],S=Object(o["f"])("option",{value:""},"選擇特色",-1),_=["value"],A=Object(o["f"])("input",{type:"text",class:"form-control shadow mb-4","aria-describedby":"keyword",placeholder:"輸入關鍵字.."},null,-1),L={class:"d-grid gap-2"},N=Object(o["f"])("img",{alt:"logo",src:v.a},null,-1),B=Object(o["g"])(" 搜尋 "),I=[N,B];function M(e,t,n,c,r,a){return Object(o["s"])(),Object(o["e"])("div",k,[Object(o["f"])("div",C,[w,Object(o["f"])("div",x,[Object(o["f"])("div",T,[P,Object(o["E"])(Object(o["f"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.getCity=e}),class:"form-select shadow mb-4","aria-label":"city"},[E,(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(r.Tourism,(function(e){return Object(o["s"])(),Object(o["e"])("option",{key:e.city,value:e.en},Object(o["z"])(e.city),9,H)})),128))],512),[[o["B"],r.getCity]]),Object(o["E"])(Object(o["f"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.getCategory=e}),class:"form-select shadow mb-4","aria-label":"food"},[S,(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(r.Category,(function(e){return Object(o["s"])(),Object(o["e"])("option",{key:e.name,value:e.name},Object(o["z"])(e.tag),9,_)})),128))],512),[[o["B"],r.getCategory]]),A,Object(o["f"])("div",L,[Object(o["f"])("button",{onClick:t[2]||(t[2]=function(){return a.emit&&a.emit.apply(a,arguments)}),type:"submit",class:"btn btn-secondary text-white shadow"},I)])])])])])}var D={emits:["emit-home"],name:"Home",data:function(){return{getCity:"",getCategory:"",Tourism:[{city:"臺北市",en:"Taipei"},{city:"新北市",en:"NewTaipei"},{city:"桃園市",en:"Taoyuan"},{city:"臺中市",en:"Taichung"},{city:"臺南市",en:"Tainan"},{city:"高雄市",en:"Kaohsiung"},{city:"基隆市",en:"Keelung"},{city:"新竹市",en:"Hsinchu"},{city:"新竹縣",en:"HsinchuCounty"},{city:"苗栗縣",en:"MiaoliCounty"},{city:"彰化縣",en:"ChanghuaCounty"},{city:"南投縣",en:"NantouCounty"},{city:"雲林縣",en:"YunlinCounty"},{city:"嘉義縣",en:"ChiayiCounty"},{city:"嘉義市",en:"Chiayi"},{city:"屏東縣",en:"PingtungCounty"},{city:"宜蘭縣",en:"YilanCounty"},{city:"花蓮縣",en:"HualienCounty"},{city:"臺東縣",en:"TaitungCounty"},{city:"金門縣",en:"KinmenCounty"},{city:"澎湖縣",en:"PenghuCounty"},{city:"連江縣",en:"LienchiangCounty"}],Category:[{name:"ScenicSpot",tag:"景點"},{name:"Restaurant",tag:"美食"},{name:"Hotel",tag:"旅宿"},{name:"Activity",tag:"活動"}],tour:[]}},methods:{emit:function(){this.$emit("emit-home",this.getCity,this.getCategory),this.$router.push("/tour")}}};n("cb01");const K=f()(D,[["render",M]]);var U=K,$=[{path:"/",name:"Home",component:U},{path:"/tour",name:"TourList",component:function(){return Promise.all([n.e("chunk-41ca8fbc"),n.e("chunk-26646669")]).then(n.bind(null,"ee6d"))}},{path:"/tour/:id",name:"TourDetail",component:function(){return n.e("chunk-70560336").then(n.bind(null,"5244"))}},{path:"/map",name:"Map",component:function(){return Promise.all([n.e("chunk-41ca8fbc"),n.e("chunk-52bbddd9")]).then(n.bind(null,"4bb4"))}}],q=Object(y["a"])({history:Object(y["b"])(),routes:$}),z=q,J=Object(o["c"])(d);J.use(m["a"],h.a),J.use(z),J.mount("#app")},"72ef":function(e,t,n){e.exports=n.p+"img/font-taiwan.ec2449ed.svg"},"8cbf":function(e,t,n){e.exports=n.p+"img/rocket.ad4cbce6.png"},"982d":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.5daf10fb.svg"},aa73:function(e,t,n){},cb01:function(e,t,n){"use strict";n("aa73")}});
//# sourceMappingURL=app.25e72d91.js.map