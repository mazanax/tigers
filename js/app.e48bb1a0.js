(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0cef":function(t,e,r){t.exports=r.p+"img/04.bf464b2b.jpg"},2033:function(t,e,r){t.exports=r.p+"img/01.8a5b8721.jpg"},"3adf":function(t,e,r){t.exports=r.p+"img/6.9a505d72.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("8c4f"),o=r("ce5b"),s=r.n(o);r("bf40");n["default"].use(s.a);var i={},c=new s.a(i),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loaded&&!t.error?r("div",{staticClass:"mt-10 mx-5"},[r("h2",{staticClass:"text-h3 mb-3"},[t._v("Что случилось?")]),r("p",[t._v("Как пишут на сайте WWF, в России осталось всего 600 тигров. И это реально проблема.")]),r("p",[t._v("Сохранение природы, о котором написано в конституции — это круто, но чтобы ее реально сохранить, нужно что-то делать, а не просто написать об этом в никому не нужной книжке.")]),r("p",[t._v("Собственно поэтому я решил собрать "),r("b",[t._v(t._s(parseInt(t.progress.target).toLocaleString("ru"))+"₽")]),t._v(" и пожертвовать их в WWF.")]),r("div",{staticClass:"my-15"},[r("Progress",{attrs:{target:parseInt(t.progress.target),amount:parseInt(t.progress.amount)}}),r("h1",{staticClass:"mt-15 text-center display-2"},[t._v("Сбор завершен")]),r("p",{staticClass:"text-center mt-5"},[t._v("Спасибо всем, кто принял участие в моей безумной затее. Надеюсь, мы действительно сделали полезное дело!")])],1),r("div",{staticClass:"mb-15"},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-img",{attrs:{src:t.proofs[0]}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-img",{attrs:{src:t.proofs[1]}})],1)],1)],1),r("div",{staticClass:"mb-15"},[r("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,n){return r("v-carousel-item",{key:n,attrs:{src:e}},[r("v-sheet",{attrs:{height:"100%",color:"rgba(255, 255, 255, 0)"}},[r("div",{staticClass:"d-flex fill-height justify-end align-end"},[r("div",{staticClass:"text-caption pa-1 white"},[t._v("©"+t._s(t.copyrights[n]))])])])],1)})),1)],1),t.members.length?r("div",{staticClass:"mb-15"},[r("h2",{staticClass:"text-h3 mb-3"},[t._v("Список участников")]),r("v-row",t._l(t.members,(function(e){return r("v-col",{key:e.name,staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[r("v-img",{staticClass:"mx-auto",attrs:{src:t.avatars[e.avatar],width:"80%","max-width":"150"}}),r("p",[t._v(t._s(e.name))])],1)})),1)],1):t._e()]):t.error?r("div",{staticClass:"mt-10 mx-5"},[r("div",{staticClass:"text-center"},[r("p",[r("v-icon",{attrs:{size:"80"}},[t._v("mdi-emoticon-sad-outline")])],1),t._v(" Произошла ошибка при загрузке данных. Попробуйте обновить страницу. ")]),r("div",{staticClass:"my-3 d-flex justify-center"},[r("v-btn",{attrs:{"x-large":"",color:"green",dark:"",to:"/"}},[t._v("Обновить")])],1)]):r("div",{staticClass:"mt-10 mx-5"},[r("div",{staticClass:"text-center"},[r("v-progress-circular",{attrs:{size:120,width:3,color:"green",indeterminate:""}}),r("p",{staticClass:"my-5"},[t._v("Идет загрузка, подождите...")])],1)])},p=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-progress-linear",{attrs:{height:"50",value:t.value,striped:"",color:"green"}},[r("strong",[t._v("Собрано "+t._s(parseInt(t.amount).toLocaleString("ru"))+"₽ из "+t._s(parseInt(t.target).toLocaleString("ru"))+"₽")])])},f=[],m={name:"Progress",props:["amount","target"],computed:{value:function(){return 100*this.amount/this.target}}},g=m,d=r("2877"),v=Object(d["a"])(g,l,f,!1,null,"28deb498",null),b=v.exports,h=(r("d3b7"),r("99af"),"https://tigers.mznx.ru");function x(){return fetch("".concat(h,"/progress")).then((function(t){return t.json()}))}var _=r("2033"),y=r.n(_),j=r("81f3"),w=r.n(j),C=r("0cef"),k=r.n(C),O=r("8052"),P=r.n(O),S=r("6586"),T=r.n(S),F=r("794e"),W=r.n(F),z=r("f4f9"),E=r.n(z),I=r("cbee"),J=r.n(I),$=r("bb0b"),M=r.n($),L=r("3adf"),A=r.n(L),q=r("9199"),B=r.n(q),D=r("f1f9"),G=r.n(D),H=r("7b29"),K=r.n(H),N=r("ad4f"),Q=r.n(N),R={name:"index",components:{Progress:b},data:function(){return{avatars:{1:T.a,2:W.a,3:E.a,4:J.a,5:M.a,6:A.a,7:B.a,8:G.a},slides:[y.a,w.a,k.a,P.a],proofs:[K.a,Q.a],copyrights:["Flickr.com / Tambako The Jaguar","Flickr.com / Tambako The Jaguar","Flickr.com / Tambako The Jaguar","Flickr.com / Pionites melanocephalus"],loaded:!0,error:!1,members:[],progress:{amount:0,target:0}}},mounted:function(){var t=this;x().then((function(e){t.progress.amount=e.amount,t.progress.target=e.target,t.members=e.members,t.loaded=!0})).catch((function(){t.error=!0})),document.title="Спасаем тигров вместе • mznx.ru"}},U=R,V=Object(d["a"])(U,u,p,!1,null,"7911b37e",null),X=V.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-10 mx-5"},[r("h2",{staticClass:"text-h3 mb-3"},[t._v("Платеж успешно проведен")]),r("p",[t._v("Спасибо, что решили поддержать мой проект!")]),r("p",[t._v("Как только соберется нужная сумма, переведу собранные деньги в WWF и оповещу об этом через E-mail.")]),r("p",[t._v("Список участников будет обновлен автоматически.")]),r("div",{staticClass:"my-5 text-center"},[r("v-btn",{attrs:{to:"/","x-large":"",color:"green",dark:""}},[t._v("Вернуться на главную")])],1)])},Z=[],tt={name:"thank_you",mounted:function(){document.title="Пожертвование получено • mznx.ru"}},et=tt,rt=Object(d["a"])(et,Y,Z,!1,null,"26529524",null),nt=rt.exports,at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{color:"#fff000",absolute:"",app:"",dark:"",height:"150",src:t.image},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[r("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])}),r("v-main",[r("v-container",[r("router-view")],1)],1),r("v-footer",{attrs:{app:""}})],1)},ot=[],st=r("b7ef"),it=r.n(st),ct={name:"App",data:function(){return{image:it.a}}},ut=ct,pt=Object(d["a"])(ut,at,ot,!1,null,null,null),lt=pt.exports;n["default"].config.productionTip=!1,n["default"].use(a["a"]);var ft=[{path:"/",component:X},{path:"/thank-you",component:nt}],mt=new a["a"]({mode:"history",routes:ft});new n["default"]({render:function(t){return t(lt)},vuetify:c,router:mt}).$mount("#app")},6586:function(t,e,r){t.exports=r.p+"img/1.d7cf07ce.png"},"794e":function(t,e,r){t.exports=r.p+"img/2.f60758b3.png"},"7b29":function(t,e,r){t.exports=r.p+"img/proofs.fb2d1ac9.jpg"},8052:function(t,e,r){t.exports=r.p+"img/06.e6975a60.jpg"},"81f3":function(t,e,r){t.exports=r.p+"img/03.75062901.jpg"},9199:function(t,e,r){t.exports=r.p+"img/7.891110e3.png"},ad4f:function(t,e,r){t.exports=r.p+"img/proofs-1.4f4800da.jpg"},b7ef:function(t,e,r){t.exports=r.p+"img/tiger.2a6ac3f0.jpg"},bb0b:function(t,e,r){t.exports=r.p+"img/5.f1f9e7f3.png"},cbee:function(t,e,r){t.exports=r.p+"img/4.3ad46dbd.png"},f1f9:function(t,e,r){t.exports=r.p+"img/8.ed982fb8.png"},f4f9:function(t,e,r){t.exports=r.p+"img/3.58a6d331.png"}});
//# sourceMappingURL=app.e48bb1a0.js.map