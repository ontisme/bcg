import{o as Ie,aN as ae,bR as Et,k as dt,q as Y,b3 as ft,b1 as ct,b2 as ht,l as T,T as Z,U,aR as ie,e as se,p as ne,bS as Bt,ct as Tt,a8 as ve,cu as Xe,cv as Pt,bF as It,y as te,ac as zt,t as V,a5 as pt,j as S,b7 as vt,b8 as Dt,cw as ge,bI as we,cx as Nt,cy as Lt,cz as ze,cA as Ft,cB as K,bG as gt,cC as De,cD as Wt,cE as ee,cF as wt,cG as _e,cH as Ye,cI as Ht,cJ as Ke,cK as Ge,cL as ce,cM as Xt,cN as ke,bH as Yt,cO as Kt,cP as Gt,cQ as kt,cR as Ut,cS as Vt,cT as jt,a as H,c as L,aA as be,d as ye,b as he,cU as Jt,u as qt,f as Ne,V as mt,h as re,a9 as Ue,au as Zt,aL as $e,i as Qt,a6 as Ve,a7 as Rt,cV as en,cW as je,b0 as tn,aH as nn,an as xe,G as rn,c3 as on,a3 as an,cX as Je,bN as sn,cY as ln,ay as un,aa as le}from"./index-CGAq74Qo.js";import{u as dn}from"./use-compitable-TQif5LUF.js";import{b as fn}from"./next-frame-once-C5Ksf8W7.js";let Se;function cn(){return Se===void 0&&(Se=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Se}let Q,oe;const hn=()=>{var e,t;Q=Et?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,oe=!1,Q!==void 0?Q.then(()=>{oe=!0}):oe=!0};hn();function pn(e){if(oe)return;let t=!1;Ie(()=>{oe||Q==null||Q.then(()=>{t||e()})}),ae(()=>{t=!0})}const fo=dt("n-internal-select-menu"),vn=dt("n-internal-select-menu-body"),bt="__disabled__";function R(e){const t=Y(ft,null),n=Y(ct,null),r=Y(ht,null),i=Y(vn,null),o=T();if(typeof document<"u"){o.value=document.fullscreenElement;const a=()=>{o.value=document.fullscreenElement};Ie(()=>{Z("fullscreenchange",document,a)}),ae(()=>{U("fullscreenchange",document,a)})}return ie(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?bt:l===!0?o.value||"body":l:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:i!=null&&i.value?i.value:l??(o.value||"body")})}R.tdkey=bt;R.propTo={type:[String,Object,Boolean],default:void 0};let W=null;function yt(){if(W===null&&(W=document.getElementById("v-binder-view-measurer"),W===null)){W=document.createElement("div"),W.id="v-binder-view-measurer";const{style:e}=W;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(W)}return W.getBoundingClientRect()}function gn(e,t){const n=yt();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Me(e){const t=e.getBoundingClientRect(),n=yt();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function wn(e){return e.nodeType===9?null:e.parentNode}function $t(e){if(e===null)return null;const t=wn(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+i+r))return t}return $t(t)}const mn=se({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;ne("VBinder",(t=Bt())===null||t===void 0?void 0:t.proxy);const n=Y("VBinder",null),r=T(null),i=f=>{r.value=f,n&&e.syncTargetWithParent&&n.setTargetRef(f)};let o=[];const a=()=>{let f=r.value;for(;f=$t(f),f!==null;)o.push(f);for(const $ of o)Z("scroll",$,m,!0)},l=()=>{for(const f of o)U("scroll",f,m,!0);o=[]},s=new Set,p=f=>{s.size===0&&a(),s.has(f)||s.add(f)},g=f=>{s.has(f)&&s.delete(f),s.size===0&&l()},m=()=>{fn(u)},u=()=>{s.forEach(f=>f())},h=new Set,v=f=>{h.size===0&&Z("resize",window,y),h.has(f)||h.add(f)},d=f=>{h.has(f)&&h.delete(f),h.size===0&&U("resize",window,y)},y=()=>{h.forEach(f=>f())};return ae(()=>{U("resize",window,y),l()}),{targetRef:r,setTargetRef:i,addScrollListener:p,removeScrollListener:g,addResizeListener:v,removeResizeListener:d}},render(){return Tt("binder",this.$slots)}}),bn=se({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=Y("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?ve(Xe("follower",this.$slots),[[t]]):Xe("follower",this.$slots)}}),q="@@mmoContext",yn={mounted(e,{value:t}){e[q]={handler:void 0},typeof t=="function"&&(e[q].handler=t,Z("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[q];typeof t=="function"?n.handler?n.handler!==t&&(U("mousemoveoutside",e,n.handler),n.handler=t,Z("mousemoveoutside",e,t)):(e[q].handler=t,Z("mousemoveoutside",e,t)):n.handler&&(U("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[q];t&&U("mousemoveoutside",e,t),e[q].handler=void 0}},{c:ue}=Pt(),$n="vueuc-style",de={top:"bottom",bottom:"top",left:"right",right:"left"},qe={start:"end",center:"center",end:"start"},Ae={top:"height",bottom:"height",left:"width",right:"width"},xn={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Sn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Mn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Ze={top:!0,bottom:!1,left:!0,right:!1},Qe={top:"end",bottom:"start",left:"end",right:"start"};function An(e,t,n,r,i,o){if(!i||o)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",p={top:0,left:0};const g=(h,v,d)=>{let y=0,f=0;const $=n[h]-t[v]-t[h];return $>0&&r&&(d?f=Ze[v]?$:-$:y=Ze[v]?$:-$),{left:y,top:f}},m=a==="left"||a==="right";if(s!=="center"){const h=Mn[e],v=de[h],d=Ae[h];if(n[d]>t[d]){if(t[h]+t[d]<n[d]){const y=(n[d]-t[d])/2;t[h]<y||t[v]<y?t[h]<t[v]?(s=qe[l],p=g(d,v,m)):p=g(d,h,m):s="center"}}else n[d]<t[d]&&t[v]<0&&t[h]>t[v]&&(s=qe[l])}else{const h=a==="bottom"||a==="top"?"left":"top",v=de[h],d=Ae[h],y=(n[d]-t[d])/2;(t[h]<y||t[v]<y)&&(t[h]>t[v]?(s=Qe[h],p=g(d,h,m)):(s=Qe[v],p=g(d,v,m)))}let u=a;return t[a]<n[Ae[a]]&&t[a]<t[de[a]]&&(u=de[a]),{placement:s!=="center"?`${u}-${s}`:u,left:p.left,top:p.top}}function Cn(e,t){return t?Sn[e]:xn[e]}function On(e,t,n,r,i,o){if(o)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateX(-50%)"}}}const _n=ue([ue(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ue(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ue("> *",{pointerEvents:"all"})])]),En=se({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=Y("VBinder"),n=ie(()=>e.enabled!==void 0?e.enabled:e.show),r=T(null),i=T(null),o=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&t.addScrollListener(s),u.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};Ie(()=>{n.value&&(s(),o())});const l=It();_n.mount({id:"vueuc/binder",head:!0,anchorMetaName:$n,ssr:l}),ae(()=>{a()}),pn(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const u=r.value;if(u===null)return;const h=t.targetRef,{x:v,y:d,overlap:y}=e,f=v!==void 0&&d!==void 0?gn(v,d):Me(h);u.style.setProperty("--v-target-width",`${Math.round(f.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(f.height)}px`);const{width:$,minWidth:I,placement:_,internalShift:E,flip:G}=e;u.setAttribute("v-placement",_),y?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:w}=u;$==="target"?w.width=`${f.width}px`:$!==void 0?w.width=$:w.width="",I==="target"?w.minWidth=`${f.width}px`:I!==void 0?w.minWidth=I:w.minWidth="";const A=Me(u),C=Me(i.value),{left:b,top:F,placement:z}=An(_,f,A,E,G,y),P=Cn(z,y),{left:k,top:c,transform:x}=On(z,C,f,F,b,y);u.setAttribute("v-placement",z),u.style.setProperty("--v-offset-left",`${Math.round(b)}px`),u.style.setProperty("--v-offset-top",`${Math.round(F)}px`),u.style.transform=`translateX(${k}) translateY(${c}) ${x}`,u.style.setProperty("--v-transform-origin",P),u.style.transformOrigin=P};te(n,u=>{u?(o(),p()):a()});const p=()=>{zt().then(s).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{te(V(e,u),s)}),["teleportDisabled"].forEach(u=>{te(V(e,u),p)}),te(V(e,"syncTrigger"),u=>{u.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),u.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const g=pt(),m=ie(()=>{const{to:u}=e;if(u!==void 0)return u;g.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:i,followerRef:r,mergedTo:m,syncPosition:s}},render(){return S(Dt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=S("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[S("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?ve(n,[[vt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var Ee=ge(we,"WeakMap"),Bn=Nt(Object.keys,Object),Tn=Object.prototype,Pn=Tn.hasOwnProperty;function In(e){if(!Lt(e))return Bn(e);var t=[];for(var n in Object(e))Pn.call(e,n)&&n!="constructor"&&t.push(n);return t}function Le(e){return ze(e)?Ft(e):In(e)}var zn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dn=/^\w*$/;function Fe(e,t){if(K(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||gt(e)?!0:Dn.test(e)||!zn.test(e)||t!=null&&e in Object(t)}var Nn="Expected a function";function We(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Nn);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(We.Cache||De),n}We.Cache=De;var Ln=500;function Fn(e){var t=We(e,function(r){return n.size===Ln&&n.clear(),r}),n=t.cache;return t}var Wn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hn=/\\(\\)?/g,Xn=Fn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Wn,function(n,r,i,o){t.push(i?o.replace(Hn,"$1"):r||n)}),t});function xt(e,t){return K(e)?e:Fe(e,t)?[e]:Xn(Wt(e))}var Yn=1/0;function me(e){if(typeof e=="string"||gt(e))return e;var t=e+"";return t=="0"&&1/e==-Yn?"-0":t}function St(e,t){t=xt(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[me(t[n++])];return n&&n==r?e:void 0}function Kn(e,t,n){var r=e==null?void 0:St(e,t);return r===void 0?n:r}function Gn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function kn(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Un(){return[]}var Vn=Object.prototype,jn=Vn.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,Jn=Re?function(e){return e==null?[]:(e=Object(e),kn(Re(e),function(t){return jn.call(e,t)}))}:Un;function qn(e,t,n){var r=t(e);return K(e)?r:Gn(r,n(e))}function et(e){return qn(e,Le,Jn)}var Be=ge(we,"DataView"),Te=ge(we,"Promise"),Pe=ge(we,"Set"),tt="[object Map]",Zn="[object Object]",nt="[object Promise]",rt="[object Set]",ot="[object WeakMap]",it="[object DataView]",Qn=ee(Be),Rn=ee(_e),er=ee(Te),tr=ee(Pe),nr=ee(Ee),X=wt;(Be&&X(new Be(new ArrayBuffer(1)))!=it||_e&&X(new _e)!=tt||Te&&X(Te.resolve())!=nt||Pe&&X(new Pe)!=rt||Ee&&X(new Ee)!=ot)&&(X=function(e){var t=wt(e),n=t==Zn?e.constructor:void 0,r=n?ee(n):"";if(r)switch(r){case Qn:return it;case Rn:return tt;case er:return nt;case tr:return rt;case nr:return ot}return t});var rr="__lodash_hash_undefined__";function or(e){return this.__data__.set(e,rr),this}function ir(e){return this.__data__.has(e)}function pe(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new De;++t<n;)this.add(e[t])}pe.prototype.add=pe.prototype.push=or;pe.prototype.has=ir;function ar(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function sr(e,t){return e.has(t)}var lr=1,ur=2;function Mt(e,t,n,r,i,o){var a=n&lr,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var p=o.get(e),g=o.get(t);if(p&&g)return p==t&&g==e;var m=-1,u=!0,h=n&ur?new pe:void 0;for(o.set(e,t),o.set(t,e);++m<l;){var v=e[m],d=t[m];if(r)var y=a?r(d,v,m,t,e,o):r(v,d,m,e,t,o);if(y!==void 0){if(y)continue;u=!1;break}if(h){if(!ar(t,function(f,$){if(!sr(h,$)&&(v===f||i(v,f,n,r,o)))return h.push($)})){u=!1;break}}else if(!(v===d||i(v,d,n,r,o))){u=!1;break}}return o.delete(e),o.delete(t),u}function dr(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}function fr(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var cr=1,hr=2,pr="[object Boolean]",vr="[object Date]",gr="[object Error]",wr="[object Map]",mr="[object Number]",br="[object RegExp]",yr="[object Set]",$r="[object String]",xr="[object Symbol]",Sr="[object ArrayBuffer]",Mr="[object DataView]",at=Ye?Ye.prototype:void 0,Ce=at?at.valueOf:void 0;function Ar(e,t,n,r,i,o,a){switch(n){case Mr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Sr:return!(e.byteLength!=t.byteLength||!o(new Ke(e),new Ke(t)));case pr:case vr:case mr:return Ht(+e,+t);case gr:return e.name==t.name&&e.message==t.message;case br:case $r:return e==t+"";case wr:var l=dr;case yr:var s=r&cr;if(l||(l=fr),e.size!=t.size&&!s)return!1;var p=a.get(e);if(p)return p==t;r|=hr,a.set(e,t);var g=Mt(l(e),l(t),r,i,o,a);return a.delete(e),g;case xr:if(Ce)return Ce.call(e)==Ce.call(t)}return!1}var Cr=1,Or=Object.prototype,_r=Or.hasOwnProperty;function Er(e,t,n,r,i,o){var a=n&Cr,l=et(e),s=l.length,p=et(t),g=p.length;if(s!=g&&!a)return!1;for(var m=s;m--;){var u=l[m];if(!(a?u in t:_r.call(t,u)))return!1}var h=o.get(e),v=o.get(t);if(h&&v)return h==t&&v==e;var d=!0;o.set(e,t),o.set(t,e);for(var y=a;++m<s;){u=l[m];var f=e[u],$=t[u];if(r)var I=a?r($,f,u,t,e,o):r(f,$,u,e,t,o);if(!(I===void 0?f===$||i(f,$,n,r,o):I)){d=!1;break}y||(y=u=="constructor")}if(d&&!y){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!(typeof _=="function"&&_ instanceof _&&typeof E=="function"&&E instanceof E)&&(d=!1)}return o.delete(e),o.delete(t),d}var Br=1,st="[object Arguments]",lt="[object Array]",fe="[object Object]",Tr=Object.prototype,ut=Tr.hasOwnProperty;function Pr(e,t,n,r,i,o){var a=K(e),l=K(t),s=a?lt:X(e),p=l?lt:X(t);s=s==st?fe:s,p=p==st?fe:p;var g=s==fe,m=p==fe,u=s==p;if(u&&Ge(e)){if(!Ge(t))return!1;a=!0,g=!1}if(u&&!g)return o||(o=new ce),a||Xt(e)?Mt(e,t,n,r,i,o):Ar(e,t,s,n,r,i,o);if(!(n&Br)){var h=g&&ut.call(e,"__wrapped__"),v=m&&ut.call(t,"__wrapped__");if(h||v){var d=h?e.value():e,y=v?t.value():t;return o||(o=new ce),i(d,y,n,r,o)}}return u?(o||(o=new ce),Er(e,t,n,r,i,o)):!1}function He(e,t,n,r,i){return e===t?!0:e==null||t==null||!ke(e)&&!ke(t)?e!==e&&t!==t:Pr(e,t,n,r,He,i)}var Ir=1,zr=2;function Dr(e,t,n,r){var i=n.length,o=i;if(e==null)return!o;for(e=Object(e);i--;){var a=n[i];if(a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++i<o;){a=n[i];var l=a[0],s=e[l],p=a[1];if(a[2]){if(s===void 0&&!(l in e))return!1}else{var g=new ce,m;if(!(m===void 0?He(p,s,Ir|zr,r,g):m))return!1}}return!0}function At(e){return e===e&&!Yt(e)}function Nr(e){for(var t=Le(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,At(i)]}return t}function Ct(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Lr(e){var t=Nr(e);return t.length==1&&t[0][2]?Ct(t[0][0],t[0][1]):function(n){return n===e||Dr(n,e,t)}}function Fr(e,t){return e!=null&&t in Object(e)}function Wr(e,t,n){t=xt(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var a=me(t[r]);if(!(o=e!=null&&n(e,a)))break;e=e[a]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&Kt(i)&&Gt(a,i)&&(K(e)||kt(e)))}function Hr(e,t){return e!=null&&Wr(e,t,Fr)}var Xr=1,Yr=2;function Kr(e,t){return Fe(e)&&At(t)?Ct(me(e),t):function(n){var r=Kn(n,e);return r===void 0&&r===t?Hr(n,e):He(t,r,Xr|Yr)}}function Gr(e){return function(t){return t==null?void 0:t[e]}}function kr(e){return function(t){return St(t,e)}}function Ur(e){return Fe(e)?Gr(me(e)):kr(e)}function Vr(e){return typeof e=="function"?e:e==null?Ut:typeof e=="object"?K(e)?Kr(e[0],e[1]):Lr(e):Ur(e)}function jr(e,t){return e&&Vt(e,t,Le)}function Jr(e,t){return function(n,r){if(n==null)return n;if(!ze(n))return e(n,r);for(var i=n.length,o=-1,a=Object(n);++o<i&&r(a[o],o,a)!==!1;);return n}}var qr=Jr(jr);function Zr(e,t){var n=-1,r=ze(e)?Array(e.length):[];return qr(e,function(i,o,a){r[++n]=t(i,o,a)}),r}function Qr(e,t){var n=K(e)?jt:Zr;return n(e,Vr(t))}const Oe={top:"bottom",bottom:"top",left:"right",right:"left"},M="var(--n-arrow-height) * 1.414",Rr=H([L("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[H(">",[L("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),be("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[be("scrollable",[be("show-header-or-footer","padding: var(--n-padding);")])]),ye("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ye("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),he("scrollable, show-header-or-footer",[ye("content",`
 padding: var(--n-padding);
 `)])]),L("popover-shared",`
 transform-origin: inherit;
 `,[L("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[L("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${M});
 height: calc(${M});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),H("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),H("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),H("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),H("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),B("top-start",`
 top: calc(${M} / -2);
 left: calc(${N("top-start")} - var(--v-offset-left));
 `),B("top",`
 top: calc(${M} / -2);
 transform: translateX(calc(${M} / -2)) rotate(45deg);
 left: 50%;
 `),B("top-end",`
 top: calc(${M} / -2);
 right: calc(${N("top-end")} + var(--v-offset-left));
 `),B("bottom-start",`
 bottom: calc(${M} / -2);
 left: calc(${N("bottom-start")} - var(--v-offset-left));
 `),B("bottom",`
 bottom: calc(${M} / -2);
 transform: translateX(calc(${M} / -2)) rotate(45deg);
 left: 50%;
 `),B("bottom-end",`
 bottom: calc(${M} / -2);
 right: calc(${N("bottom-end")} + var(--v-offset-left));
 `),B("left-start",`
 left: calc(${M} / -2);
 top: calc(${N("left-start")} - var(--v-offset-top));
 `),B("left",`
 left: calc(${M} / -2);
 transform: translateY(calc(${M} / -2)) rotate(45deg);
 top: 50%;
 `),B("left-end",`
 left: calc(${M} / -2);
 bottom: calc(${N("left-end")} + var(--v-offset-top));
 `),B("right-start",`
 right: calc(${M} / -2);
 top: calc(${N("right-start")} - var(--v-offset-top));
 `),B("right",`
 right: calc(${M} / -2);
 transform: translateY(calc(${M} / -2)) rotate(45deg);
 top: 50%;
 `),B("right-end",`
 right: calc(${M} / -2);
 bottom: calc(${N("right-end")} + var(--v-offset-top));
 `),...Qr({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(i=>{const o=i.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${M}) / 2)`,s=N(i);return H(`[v-placement="${i}"] >`,[L("popover-shared",[he("center-arrow",[L("popover-arrow",`${t}: calc(max(${l}, ${s}) ${o?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function N(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function B(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return H(`[v-placement="${e}"] >`,[L("popover-shared",`
 margin-${Oe[n]}: var(--n-space);
 `,[he("show-arrow",`
 margin-${Oe[n]}: var(--n-space-arrow);
 `),he("overlap",`
 margin: 0;
 `),Jt("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Oe[n]}: auto;
 ${r}
 `,[L("popover-arrow",t)])])])}const Ot=Object.assign(Object.assign({},Ne.props),{to:R.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),eo=({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:i})=>S("div",{key:"__popover-arrow__",style:r,class:[`${i}-popover-arrow-wrapper`,n]},S("div",{class:[`${i}-popover-arrow`,e],style:t})),to=se({name:"PopoverBody",inheritAttrs:!1,props:Ot,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:o}=qt(e),a=Ne("Popover","-popover",Rr,en,e,i),l=T(null),s=Y("NPopover"),p=T(null),g=T(e.show),m=T(!1);mt(()=>{const{show:w}=e;w&&!cn()&&!e.internalDeactivateImmediately&&(m.value=!0)});const u=re(()=>{const{trigger:w,onClickoutside:A}=e,C=[],{positionManuallyRef:{value:b}}=s;return b||(w==="click"&&!A&&C.push([Ue,_,void 0,{capture:!0}]),w==="hover"&&C.push([yn,I])),A&&C.push([Ue,_,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&m.value)&&C.push([Zt,e.show]),C}),h=re(()=>{const w=e.width==="trigger"?void 0:$e(e.width),A=[];w&&A.push({width:w});const{maxWidth:C,minWidth:b}=e;return C&&A.push({maxWidth:$e(C)}),b&&A.push({maxWidth:$e(b)}),o||A.push(v.value),A}),v=re(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:A,cubicBezierEaseOut:C},self:{space:b,spaceArrow:F,padding:z,fontSize:P,textColor:k,dividerColor:c,color:x,boxShadow:O,borderRadius:j,arrowHeight:J,arrowOffset:D,arrowOffsetVertical:_t}}=a.value;return{"--n-box-shadow":O,"--n-bezier":w,"--n-bezier-ease-in":A,"--n-bezier-ease-out":C,"--n-font-size":P,"--n-text-color":k,"--n-color":x,"--n-divider-color":c,"--n-border-radius":j,"--n-arrow-height":J,"--n-arrow-offset":D,"--n-arrow-offset-vertical":_t,"--n-padding":z,"--n-space":b,"--n-space-arrow":F}}),d=o?Qt("popover",void 0,v,e):void 0;s.setBodyInstance({syncPosition:y}),ae(()=>{s.setBodyInstance(null)}),te(V(e,"show"),w=>{e.animated||(w?g.value=!0:g.value=!1)});function y(){var w;(w=l.value)===null||w===void 0||w.syncPosition()}function f(w){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(w)}function $(w){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(w)}function I(w){e.trigger==="hover"&&!E().contains(Ve(w))&&s.handleMouseMoveOutside(w)}function _(w){(e.trigger==="click"&&!E().contains(Ve(w))||e.onClickoutside)&&s.handleClickOutside(w)}function E(){return s.getTriggerElement()}ne(ht,p),ne(ct,null),ne(ft,null);function G(){if(d==null||d.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&m.value))return null;let A;const C=s.internalRenderBodyRef.value,{value:b}=i;if(C)A=C([`${b}-popover-shared`,d==null?void 0:d.themeClass.value,e.overlap&&`${b}-popover-shared--overlap`,e.showArrow&&`${b}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${b}-popover-shared--center-arrow`],p,h.value,f,$);else{const{value:F}=s.extraClassRef,{internalTrapFocus:z}=e,P=!je(t.header)||!je(t.footer),k=()=>{var c,x;const O=P?S(rn,null,xe(t.header,D=>D?S("div",{class:[`${b}-popover__header`,e.headerClass],style:e.headerStyle},D):null),xe(t.default,D=>D?S("div",{class:[`${b}-popover__content`,e.contentClass],style:e.contentStyle},t):null),xe(t.footer,D=>D?S("div",{class:[`${b}-popover__footer`,e.footerClass],style:e.footerStyle},D):null)):e.scrollable?(c=t.default)===null||c===void 0?void 0:c.call(t):S("div",{class:[`${b}-popover__content`,e.contentClass],style:e.contentStyle},t),j=e.scrollable?S(on,{contentClass:P?void 0:`${b}-popover__content ${(x=e.contentClass)!==null&&x!==void 0?x:""}`,contentStyle:P?void 0:e.contentStyle},{default:()=>O}):O,J=e.showArrow?eo({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:b}):null;return[j,J]};A=S("div",nn({class:[`${b}-popover`,`${b}-popover-shared`,d==null?void 0:d.themeClass.value,F.map(c=>`${b}-${c}`),{[`${b}-popover--scrollable`]:e.scrollable,[`${b}-popover--show-header-or-footer`]:P,[`${b}-popover--raw`]:e.raw,[`${b}-popover-shared--overlap`]:e.overlap,[`${b}-popover-shared--show-arrow`]:e.showArrow,[`${b}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:p,style:h.value,onKeydown:s.handleKeydown,onMouseenter:f,onMouseleave:$},n),z?S(tn,{active:e.show,autoFocus:!0},{default:k}):k())}return ve(A,u.value)}return{displayed:m,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:l,adjustedTo:R(e),followerEnabled:g,renderContentNode:G}},render(){return S(En,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===R.tdkey},{default:()=>this.animated?S(Rt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),no=Object.keys(Ot),ro={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function oo(e,t,n){ro[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const i=e.props[r],o=n[r];i?e.props[r]=(...a)=>{i(...a),o(...a)}:e.props[r]=o})}const io={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:R.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},ao=Object.assign(Object.assign(Object.assign({},Ne.props),io),{internalOnAfterLeave:Function,internalRenderBody:Function}),co=se({name:"Popover",inheritAttrs:!1,props:ao,__popover__:!0,setup(e){const t=pt(),n=T(null),r=re(()=>e.show),i=T(e.defaultShow),o=an(r,i),a=ie(()=>e.disabled?!1:o.value),l=()=>{if(e.disabled)return!0;const{getDisabled:c}=e;return!!(c!=null&&c())},s=()=>l()?!1:o.value,p=dn(e,["arrow","showArrow"]),g=re(()=>e.overlap?!1:p.value);let m=null;const u=T(null),h=T(null),v=ie(()=>e.x!==void 0&&e.y!==void 0);function d(c){const{"onUpdate:show":x,onUpdateShow:O,onShow:j,onHide:J}=e;i.value=c,x&&le(x,c),O&&le(O,c),c&&j&&le(j,!0),c&&J&&le(J,!1)}function y(){m&&m.syncPosition()}function f(){const{value:c}=u;c&&(window.clearTimeout(c),u.value=null)}function $(){const{value:c}=h;c&&(window.clearTimeout(c),h.value=null)}function I(){const c=l();if(e.trigger==="focus"&&!c){if(s())return;d(!0)}}function _(){const c=l();if(e.trigger==="focus"&&!c){if(!s())return;d(!1)}}function E(){const c=l();if(e.trigger==="hover"&&!c){if($(),u.value!==null||s())return;const x=()=>{d(!0),u.value=null},{delay:O}=e;O===0?x():u.value=window.setTimeout(x,O)}}function G(){const c=l();if(e.trigger==="hover"&&!c){if(f(),h.value!==null||!s())return;const x=()=>{d(!1),h.value=null},{duration:O}=e;O===0?x():h.value=window.setTimeout(x,O)}}function w(){G()}function A(c){var x;s()&&(e.trigger==="click"&&(f(),$(),d(!1)),(x=e.onClickoutside)===null||x===void 0||x.call(e,c))}function C(){if(e.trigger==="click"&&!l()){f(),$();const c=!s();d(c)}}function b(c){e.internalTrapFocus&&c.key==="Escape"&&(f(),$(),d(!1))}function F(c){i.value=c}function z(){var c;return(c=n.value)===null||c===void 0?void 0:c.targetRef}function P(c){m=c}return ne("NPopover",{getTriggerElement:z,handleKeydown:b,handleMouseEnter:E,handleMouseLeave:G,handleClickOutside:A,handleMouseMoveOutside:w,setBodyInstance:P,positionManuallyRef:v,isMountedRef:t,zIndexRef:V(e,"zIndex"),extraClassRef:V(e,"internalExtraClass"),internalRenderBodyRef:V(e,"internalRenderBody")}),mt(()=>{o.value&&l()&&d(!1)}),{binderInstRef:n,positionManually:v,mergedShowConsideringDisabledProp:a,uncontrolledShow:i,mergedShowArrow:g,getMergedShow:s,setShow:F,handleClick:C,handleMouseEnter:E,handleMouseLeave:G,handleFocus:I,handleBlur:_,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,i=!1;if(!t&&(n.activator?r=Je(n,"activator"):r=Je(n,"trigger"),r)){r=sn(r),r=r.type===ln?S("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)i=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:a}=this,l=[o,...a],s={onBlur:p=>{l.forEach(g=>{g.onBlur(p)})},onFocus:p=>{l.forEach(g=>{g.onFocus(p)})},onClick:p=>{l.forEach(g=>{g.onClick(p)})},onMouseenter:p=>{l.forEach(g=>{g.onMouseenter(p)})},onMouseleave:p=>{l.forEach(g=>{g.onMouseleave(p)})}};oo(r,a?"nested":t?"manual":this.trigger,s)}}return S(mn,{ref:"binderInstRef",syncTarget:!i,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?ve(S("div",{style:{position:"fixed",inset:0}}),[[vt,{enabled:o,zIndex:this.zIndex}]]):null,t?null:S(bn,null,{default:()=>r}),S(to,un(this.$props,no,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}});export{mn as B,co as N,bn as V,En as a,ue as b,$n as c,vn as d,Kn as g,fo as i,pn as o,io as p,eo as r,R as u};