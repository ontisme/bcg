import{au as de,bR as we,h as B,l as Y,aN as $e,k as Ce,e as V,q as Re,aO as L,j as n,bS as ke,u as fe,aR as F,o as Ne,p as Pe,t as te,n as Be,aH as re,aS as ze,bl as Ie,bN as le,a as _,c as C,b as O,aL as W,aC as ge,bu as he,bw as pe,bv as ve,bt as me,f as be,a4 as ae,i as De,bT as Ge,z as q,A as Q,B as l,C as t,I as r,D as x,E as y,bf as G,bh as A,F as ie,G as ne,H as se,ai as Ee}from"./index-BJfYj4F8.js";import{b as Oe}from"./next-frame-once-C5Ksf8W7.js";import{g as Ae,_ as U}from"./Space-B8hsGOMY.js";import{_ as Z,a as N}from"./DescriptionsItem-BMXGPEua.js";import{N as b}from"./Statistic-Cuhn4P5T.js";import"./use-compitable-C58u3C0n.js";function Me(e){if(typeof e=="number")return{"":e.toString()};const s={};return e.split(/ +/).forEach(u=>{if(u==="")return;const[i,a]=u.split(":");a===void 0?s[""]=i:s[i]=a}),s}function T(e,s){var u;if(e==null)return;const i=Me(e);if(s===void 0)return i[""];if(typeof s=="string")return(u=i[s])!==null&&u!==void 0?u:i[""];if(Array.isArray(s)){for(let a=s.length-1;a>=0;--a){const o=s[a];if(o in i)return i[o]}return i[""]}else{let a,o=-1;return Object.keys(i).forEach(f=>{const d=Number(f);!Number.isNaN(d)&&s>=d&&d>=o&&(o=d,a=i[f])}),a}}function je(e){var s;const u=(s=e.dirs)===null||s===void 0?void 0:s.find(({dir:i})=>i===de);return!!(u&&u.value===!1)}const We={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function qe(e){return`(min-width: ${e}px)`}const X={};function Te(e=We){if(!we)return B(()=>[]);if(typeof window.matchMedia!="function")return B(()=>[]);const s=Y({}),u=Object.keys(e),i=(a,o)=>{a.matches?s.value[o]=!0:s.value[o]=!1};return u.forEach(a=>{const o=e[a];let f,d;X[o]===void 0?(f=window.matchMedia(qe(o)),f.addEventListener?f.addEventListener("change",m=>{d.forEach(h=>{h(m,a)})}):f.addListener&&f.addListener(m=>{d.forEach(h=>{h(m,a)})}),d=new Set,X[o]={mql:f,cbs:d}):(f=X[o].mql,d=X[o].cbs),d.add(i),f.matches&&d.forEach(m=>{m(f,a)})}),$e(()=>{u.forEach(a=>{const{cbs:o}=X[e[a]];o.has(i)&&o.delete(i)})}),B(()=>{const{value:a}=s;return u.filter(o=>a[o])})}const oe=1,ye=Ce("n-grid"),xe=1,Le={span:{type:[Number,String],default:xe},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},c=V({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Le,setup(){const{isSsrRef:e,xGapRef:s,itemStyleRef:u,overflowRef:i,layoutShiftDisabledRef:a}=Re(ye),o=ke();return{overflow:i,itemStyle:u,layoutShiftDisabled:a,mergedXGap:B(()=>L(s.value||0)),deriveStyle:()=>{e.value;const{privateSpan:f=xe,privateShow:d=!0,privateColStart:m=void 0,privateOffset:h=0}=o.vnode.props,{value:R}=s,S=L(R||0);return{display:d?"":"none",gridColumn:`${m??`span ${f}`} / span ${f}`,marginLeft:h?`calc((100% - (${f} - 1) * ${S}) / ${f} * ${h} + ${S} * ${h})`:""}}}},render(){var e,s;if(this.layoutShiftDisabled){const{span:u,offset:i,mergedXGap:a}=this;return n("div",{style:{gridColumn:`span ${u} / span ${u}`,marginLeft:i?`calc((100% - (${u} - 1) * ${a}) / ${u} * ${i} + ${a} * ${i})`:""}},this.$slots)}return n("div",{style:[this.itemStyle,this.deriveStyle()]},(s=(e=this.$slots).default)===null||s===void 0?void 0:s.call(e,{overflow:this.overflow}))}}),Ve={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Se=24,J="__ssr__",Xe={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Se},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},H=V({name:"Grid",inheritAttrs:!1,props:Xe,setup(e){const{mergedClsPrefixRef:s,mergedBreakpointsRef:u}=fe(e),i=/^\d+$/,a=Y(void 0),o=Te((u==null?void 0:u.value)||Ve),f=F(()=>!!(e.itemResponsive||!i.test(e.cols.toString())||!i.test(e.xGap.toString())||!i.test(e.yGap.toString()))),d=B(()=>{if(f.value)return e.responsive==="self"?a.value:o.value}),m=F(()=>{var w;return(w=Number(T(e.cols.toString(),d.value)))!==null&&w!==void 0?w:Se}),h=F(()=>T(e.xGap.toString(),d.value)),R=F(()=>T(e.yGap.toString(),d.value)),S=w=>{a.value=w.contentRect.width},$=w=>{Oe(S,w)},g=Y(!1),k=B(()=>{if(e.responsive==="self")return $}),v=Y(!1),P=Y();return Ne(()=>{const{value:w}=P;w&&w.hasAttribute(J)&&(w.removeAttribute(J),v.value=!0)}),Pe(ye,{layoutShiftDisabledRef:te(e,"layoutShiftDisabled"),isSsrRef:v,itemStyleRef:te(e,"itemStyle"),xGapRef:h,overflowRef:g}),{isSsr:!Be,contentEl:P,mergedClsPrefix:s,style:B(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:L(e.xGap),rowGap:L(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${m.value}, minmax(0, 1fr))`,columnGap:L(h.value),rowGap:L(R.value)}),isResponsive:f,responsiveQuery:d,responsiveCols:m,handleResize:k,overflow:g}},render(){if(this.layoutShiftDisabled)return n("div",re({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var s,u,i,a,o,f,d;this.overflow=!1;const m=Ie(Ae(this)),h=[],{collapsed:R,collapsedRows:S,responsiveCols:$,responsiveQuery:g}=this;m.forEach(p=>{var E,D,z,I,M;if(((E=p==null?void 0:p.type)===null||E===void 0?void 0:E.__GRID_ITEM__)!==!0)return;if(je(p)){const j=le(p);j.props?j.props.privateShow=!1:j.props={privateShow:!1},h.push({child:j,rawChildSpan:0});return}p.dirs=((D=p.dirs)===null||D===void 0?void 0:D.filter(({dir:j})=>j!==de))||null,((z=p.dirs)===null||z===void 0?void 0:z.length)===0&&(p.dirs=null);const K=le(p),ee=Number((M=T((I=K.props)===null||I===void 0?void 0:I.span,g))!==null&&M!==void 0?M:oe);ee!==0&&h.push({child:K,rawChildSpan:ee})});let k=0;const v=(s=h[h.length-1])===null||s===void 0?void 0:s.child;if(v!=null&&v.props){const p=(u=v.props)===null||u===void 0?void 0:u.suffix;p!==void 0&&p!==!1&&(k=Number((a=T((i=v.props)===null||i===void 0?void 0:i.span,g))!==null&&a!==void 0?a:oe),v.props.privateSpan=k,v.props.privateColStart=$+1-k,v.props.privateShow=(o=v.props.privateShow)!==null&&o!==void 0?o:!0)}let P=0,w=!1;for(const{child:p,rawChildSpan:E}of h){if(w&&(this.overflow=!0),!w){const D=Number((d=T((f=p.props)===null||f===void 0?void 0:f.offset,g))!==null&&d!==void 0?d:0),z=Math.min(E+D,$);if(p.props?(p.props.privateSpan=z,p.props.privateOffset=D):p.props={privateSpan:z,privateOffset:D},R){const I=P%$;z+I>$&&(P+=$-I),z+P+k>S*$?w=!0:P+=z}}w&&(p.props?p.props.privateShow!==!0&&(p.props.privateShow=!1):p.props={privateShow:!1})}return n("div",re({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[J]:this.isSsr||void 0},this.$attrs),h.map(({child:p})=>p))};return this.isResponsive&&this.responsive==="self"?n(ze,{onResize:this.handleResize},{default:e}):e()}}),He=_([C("progress",{display:"inline-block"},[C("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),O("line",`
 width: 100%;
 display: block;
 `,[C("progress-content",`
 display: flex;
 align-items: center;
 `,[C("progress-graph",{flex:1})]),C("progress-custom-content",{marginLeft:"14px"}),C("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[O("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),O("circle, dashboard",{width:"120px"},[C("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),C("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),C("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),O("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[C("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),C("progress-content",{position:"relative"}),C("progress-graph",{position:"relative"},[C("progress-graph-circle",[_("svg",{verticalAlign:"bottom"}),C("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[O("empty",{opacity:0})]),C("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),C("progress-graph-line",[O("indicator-inside",[C("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[C("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),C("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),O("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[C("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),C("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),C("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[C("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[O("processing",[_("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),_("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Ye={success:n(he,null),error:n(pe,null),warning:n(ve,null),info:n(me,null)},Fe=V({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:s}){const u=B(()=>W(e.height)),i=B(()=>e.railBorderRadius!==void 0?W(e.railBorderRadius):e.height!==void 0?W(e.height,{c:.5}):""),a=B(()=>e.fillBorderRadius!==void 0?W(e.fillBorderRadius):e.railBorderRadius!==void 0?W(e.railBorderRadius):e.height!==void 0?W(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:o,railColor:f,railStyle:d,percentage:m,unit:h,indicatorTextColor:R,status:S,showIndicator:$,fillColor:g,processing:k,clsPrefix:v}=e;return n("div",{class:`${v}-progress-content`,role:"none"},n("div",{class:`${v}-progress-graph`,"aria-hidden":!0},n("div",{class:[`${v}-progress-graph-line`,{[`${v}-progress-graph-line--indicator-${o}`]:!0}]},n("div",{class:`${v}-progress-graph-line-rail`,style:[{backgroundColor:f,height:u.value,borderRadius:i.value},d]},n("div",{class:[`${v}-progress-graph-line-fill`,k&&`${v}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:g,height:u.value,lineHeight:u.value,borderRadius:a.value}},o==="inside"?n("div",{class:`${v}-progress-graph-line-indicator`,style:{color:R}},s.default?s.default():`${m}${h}`):null)))),$&&o==="outside"?n("div",null,s.default?n("div",{class:`${v}-progress-custom-content`,style:{color:R},role:"none"},s.default()):S==="default"?n("div",{role:"none",class:`${v}-progress-icon ${v}-progress-icon--as-text`,style:{color:R}},m,h):n("div",{class:`${v}-progress-icon`,"aria-hidden":!0},n(ge,{clsPrefix:v},{default:()=>Ye[S]}))):null)}}}),_e={success:n(he,null),error:n(pe,null),warning:n(ve,null),info:n(me,null)},Qe=V({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:s}){function u(i,a,o){const{gapDegree:f,viewBoxWidth:d,strokeWidth:m}=e,h=50,R=0,S=h,$=0,g=2*h,k=50+m/2,v=`M ${k},${k} m ${R},${S}
      a ${h},${h} 0 1 1 ${$},${-g}
      a ${h},${h} 0 1 1 ${-$},${g}`,P=Math.PI*2*h,w={stroke:o,strokeDasharray:`${i/100*(P-f)}px ${d*8}px`,strokeDashoffset:`-${f/2}px`,transformOrigin:a?"center":void 0,transform:a?`rotate(${a}deg)`:void 0};return{pathString:v,pathStyle:w}}return()=>{const{fillColor:i,railColor:a,strokeWidth:o,offsetDegree:f,status:d,percentage:m,showIndicator:h,indicatorTextColor:R,unit:S,gapOffsetDegree:$,clsPrefix:g}=e,{pathString:k,pathStyle:v}=u(100,0,a),{pathString:P,pathStyle:w}=u(m,f,i),p=100+o;return n("div",{class:`${g}-progress-content`,role:"none"},n("div",{class:`${g}-progress-graph`,"aria-hidden":!0},n("div",{class:`${g}-progress-graph-circle`,style:{transform:$?`rotate(${$}deg)`:void 0}},n("svg",{viewBox:`0 0 ${p} ${p}`},n("g",null,n("path",{class:`${g}-progress-graph-circle-rail`,d:k,"stroke-width":o,"stroke-linecap":"round",fill:"none",style:v})),n("g",null,n("path",{class:[`${g}-progress-graph-circle-fill`,m===0&&`${g}-progress-graph-circle-fill--empty`],d:P,"stroke-width":o,"stroke-linecap":"round",fill:"none",style:w}))))),h?n("div",null,s.default?n("div",{class:`${g}-progress-custom-content`,role:"none"},s.default()):d!=="default"?n("div",{class:`${g}-progress-icon`,"aria-hidden":!0},n(ge,{clsPrefix:g},{default:()=>_e[d]})):n("div",{class:`${g}-progress-text`,style:{color:R},role:"none"},n("span",{class:`${g}-progress-text__percentage`},m),n("span",{class:`${g}-progress-text__unit`},S))):null)}}});function ue(e,s,u=100){return`m ${u/2} ${u/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Ue=V({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:s}){const u=B(()=>e.percentage.map((a,o)=>`${Math.PI*a/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*o)-e.circleGap*o)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:i,strokeWidth:a,circleGap:o,showIndicator:f,fillColor:d,railColor:m,railStyle:h,percentage:R,clsPrefix:S}=e;return n("div",{class:`${S}-progress-content`,role:"none"},n("div",{class:`${S}-progress-graph`,"aria-hidden":!0},n("div",{class:`${S}-progress-graph-circle`},n("svg",{viewBox:`0 0 ${i} ${i}`},R.map(($,g)=>n("g",{key:g},n("path",{class:`${S}-progress-graph-circle-rail`,d:ue(i/2-a/2*(1+2*g)-o*g,a,i),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:m[g]},h[g]]}),n("path",{class:[`${S}-progress-graph-circle-fill`,$===0&&`${S}-progress-graph-circle-fill--empty`],d:ue(i/2-a/2*(1+2*g)-o*g,a,i),"stroke-width":a,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:u.value[g],strokeDashoffset:0,stroke:d[g]}})))))),f&&s.default?n("div",null,n("div",{class:`${S}-progress-text`},s.default())):null)}}}),Ze=Object.assign(Object.assign({},be.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ce=V({name:"Progress",props:Ze,setup(e){const s=B(()=>e.indicatorPlacement||e.indicatorPosition),u=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=fe(e),o=be("Progress","-progress",He,Ge,e,i),f=B(()=>{const{status:m}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:R,fontSizeCircle:S,railColor:$,railHeight:g,iconSizeCircle:k,iconSizeLine:v,textColorCircle:P,textColorLineInner:w,textColorLineOuter:p,lineBgProcessing:E,fontWeightCircle:D,[ae("iconColor",m)]:z,[ae("fillColor",m)]:I}}=o.value;return{"--n-bezier":h,"--n-fill-color":I,"--n-font-size":R,"--n-font-size-circle":S,"--n-font-weight-circle":D,"--n-icon-color":z,"--n-icon-size-circle":k,"--n-icon-size-line":v,"--n-line-bg-processing":E,"--n-rail-color":$,"--n-rail-height":g,"--n-text-color-circle":P,"--n-text-color-line-inner":w,"--n-text-color-line-outer":p}}),d=a?De("progress",B(()=>e.status[0]),f,e):void 0;return{mergedClsPrefix:i,mergedIndicatorPlacement:s,gapDeg:u,cssVars:a?void 0:f,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{type:e,cssVars:s,indicatorTextColor:u,showIndicator:i,status:a,railColor:o,railStyle:f,color:d,percentage:m,viewBoxWidth:h,strokeWidth:R,mergedIndicatorPlacement:S,unit:$,borderRadius:g,fillBorderRadius:k,height:v,processing:P,circleGap:w,mergedClsPrefix:p,gapDeg:E,gapOffsetDegree:D,themeClass:z,$slots:I,onRender:M}=this;return M==null||M(),n("div",{class:[z,`${p}-progress`,`${p}-progress--${e}`,`${p}-progress--${a}`],style:s,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?n(Qe,{clsPrefix:p,status:a,showIndicator:i,indicatorTextColor:u,railColor:o,fillColor:d,railStyle:f,offsetDegree:this.offsetDegree,percentage:m,viewBoxWidth:h,strokeWidth:R,gapDegree:E===void 0?e==="dashboard"?75:0:E,gapOffsetDegree:D,unit:$},I):e==="line"?n(Fe,{clsPrefix:p,status:a,showIndicator:i,indicatorTextColor:u,railColor:o,fillColor:d,railStyle:f,percentage:m,processing:P,indicatorPlacement:S,unit:$,fillBorderRadius:k,railBorderRadius:g,height:v},I):e==="multiple-circle"?n(Ue,{clsPrefix:p,strokeWidth:R,railColor:o,fillColor:d,railStyle:f,viewBoxWidth:h,percentage:m,showIndicator:i,circleGap:w},I):null)}}),at={__name:"CharacterDetail",props:{character:{type:Object,default:()=>({name:"未知",level:0,gold:0,dp:0,exp:0,nextExp:1,hp:0,maxHp:1,mp:0,maxMp:1,strength:0,vitality:0,agility:0,magic:0,manuEndurance:0,recovery:0,manuIntelligence:0,spirit:0,attack:0,defense:0,magicAttack:0,magicDefense:0,accurancy:0,dodge:0,critical:0,strikeback:0,earth:0,water:0,fire:0,wind:0,chaosResist:0,poisonResist:0,petrifyResist:0,drunkResist:0,charisma:0,skillSlots:0,walkSpeed:0,battlePosition:0,petPosition:0,ridePosition:0,isClockPunched:!1,isMoving:!1})},job:{type:Object,default:()=>({name:"未知",rank:0})},loginState:{type:Number,default:1},processId:{type:Number,default:0},isInBattle:{type:Boolean,default:!1},map:{type:Object,default:()=>({mapName:"未知"})},locate:{type:Object,default:()=>({x:0,y:0,direction:0})},server:{type:Object,default:()=>({serverName:"未知",ip:"0.0.0.0",serverIndex:0,subServerIndex:0})},switchs:{type:Object,default:()=>({card:!1,chat:!1,guildChannel:!1,pk:!1,team:!1,trade:!1})},titles:{type:String,default:""},skillNames:{type:String,default:""}},setup(e){return(s,u)=>{var i;return q(),Q(t(G),{title:`${((i=e.character)==null?void 0:i.name)||"未知角色"} 的詳細信息`,bordered:!1,size:"huge"},{default:l(()=>[e.character?(q(),Q(t(H),{key:0,"x-gap":12,"y-gap":8,cols:24},{default:l(()=>[r(t(c),{span:12},{default:l(()=>[r(t(ce),{type:"line",percentage:e.character.hp/e.character.maxHp*100,"indicator-placement":"inside",processing:"",color:"#5AAAFB"},{default:l(()=>[x(" HP: "+y(e.character.hp)+" / "+y(e.character.maxHp),1)]),_:1},8,["percentage"])]),_:1}),r(t(c),{span:12},{default:l(()=>[r(t(ce),{type:"line",percentage:e.character.mp/e.character.maxMp*100,"indicator-placement":"inside",processing:"",color:"#E27782"},{default:l(()=>[x(" MP: "+y(e.character.mp)+" / "+y(e.character.maxMp),1)]),_:1},8,["percentage"])]),_:1}),r(t(c),{span:24},{default:l(()=>[r(t(G),{title:"基本信息",size:"small"},{default:l(()=>[r(t(Z),{column:6,bordered:""},{default:l(()=>[r(t(N),{label:"名稱"},{default:l(()=>[x(y(e.character.name),1)]),_:1}),r(t(N),{label:"等級"},{default:l(()=>[x(y(e.character.level),1)]),_:1}),r(t(N),{label:"職業"},{default:l(()=>[x(y(e.job.name)+" (等級 "+y(e.job.rank)+") ",1)]),_:1}),r(t(N),{label:"金錢"},{default:l(()=>[x(y(e.character.gold),1)]),_:1}),r(t(N),{label:"DP"},{default:l(()=>[x(y(e.character.dp),1)]),_:1}),r(t(N),{label:"經驗值"},{default:l(()=>[x(y(e.character.exp)+" / "+y(e.character.nextExp),1)]),_:1})]),_:1})]),_:1})]),_:1}),r(t(c),{span:12},{default:l(()=>[r(t(G),{title:"狀態和位置",size:"small"},{default:l(()=>[r(t(Z),{column:2,bordered:""},{default:l(()=>[r(t(N),{label:"登入狀態"},{default:l(()=>[x(y(e.loginState===0?"在線":"離線"),1)]),_:1}),r(t(N),{label:"進程ID"},{default:l(()=>[x(y(e.processId),1)]),_:1}),r(t(N),{label:"戰鬥狀態"},{default:l(()=>[x(y(e.isInBattle?"戰鬥中":"非戰鬥"),1)]),_:1}),r(t(N),{label:"地圖"},{default:l(()=>[x(y(e.map.mapName),1)]),_:1}),r(t(N),{label:"座標"},{default:l(()=>[x(" X: "+y(e.locate.x)+", Y: "+y(e.locate.y),1)]),_:1}),r(t(N),{label:"方向"},{default:l(()=>[x(y(e.locate.direction),1)]),_:1})]),_:1})]),_:1})]),_:1}),r(t(c),{span:12},{default:l(()=>[r(t(G),{title:"服務器信息",size:"small"},{default:l(()=>[r(t(Z),{column:2,bordered:""},{default:l(()=>[r(t(N),{label:"服務器名"},{default:l(()=>[x(y(e.server.serverName),1)]),_:1}),r(t(N),{label:"IP"},{default:l(()=>[x(y(e.server.ip),1)]),_:1}),r(t(N),{label:"伺服器索引"},{default:l(()=>[x(y(e.server.serverIndex),1)]),_:1}),r(t(N),{label:"分流索引"},{default:l(()=>[x(y(e.server.subServerIndex),1)]),_:1})]),_:1})]),_:1})]),_:1}),r(t(c),{span:12},{default:l(()=>[r(t(G),{title:"開關設置",size:"small"},{default:l(()=>[r(t(U),null,{default:l(()=>[r(t(A),{type:e.switchs.card?"success":"error"},{default:l(()=>[x(" 卡片: "+y(e.switchs.card?"開":"關"),1)]),_:1},8,["type"]),r(t(A),{type:e.switchs.chat?"success":"error"},{default:l(()=>[x(" 聊天: "+y(e.switchs.chat?"開":"關"),1)]),_:1},8,["type"]),r(t(A),{type:e.switchs.guildChannel?"success":"error"},{default:l(()=>[x(" 公會頻道: "+y(e.switchs.guildChannel?"開":"關"),1)]),_:1},8,["type"]),r(t(A),{type:e.switchs.pk?"success":"error"},{default:l(()=>[x(" PK: "+y(e.switchs.pk?"開":"關"),1)]),_:1},8,["type"]),r(t(A),{type:e.switchs.team?"success":"error"},{default:l(()=>[x(" 組隊: "+y(e.switchs.team?"開":"關"),1)]),_:1},8,["type"]),r(t(A),{type:e.switchs.trade?"success":"error"},{default:l(()=>[x(" 交易: "+y(e.switchs.trade?"開":"關"),1)]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),r(t(c),{span:12},{default:l(()=>[r(t(G),{title:"稱號",size:"small"},{default:l(()=>[r(t(U),null,{default:l(()=>[(q(!0),ie(ne,null,se(e.titles.split("|"),a=>(q(),Q(t(A),{key:a,type:"info"},{default:l(()=>[x(y(a),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),r(t(c),{span:24},{default:l(()=>[r(t(G),{title:"技能",size:"small"},{default:l(()=>[r(t(U),null,{default:l(()=>[(q(!0),ie(ne,null,se(e.skillNames.split("|"),a=>(q(),Q(t(A),{key:a,type:"success"},{default:l(()=>[x(y(a||"空"),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),r(t(c),{span:24},{default:l(()=>[r(t(G),{title:"能力值",size:"small"},{default:l(()=>[r(t(H),{cols:8,"x-gap":12,"y-gap":8},{default:l(()=>[r(t(c),null,{default:l(()=>[r(t(b),{label:"力量",value:e.character.strength},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"體力",value:e.character.vitality},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"敏捷",value:e.character.agility},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"魔力",value:e.character.magic},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"耐力",value:e.character.manuEndurance},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"回復",value:e.character.recovery},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"智力",value:e.character.manuIntelligence},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"精神",value:e.character.spirit},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),r(t(c),{span:24},{default:l(()=>[r(t(G),{title:"戰鬥能力",size:"small"},{default:l(()=>[r(t(H),{cols:8,"x-gap":12,"y-gap":8},{default:l(()=>[r(t(c),null,{default:l(()=>[r(t(b),{label:"攻擊力",value:e.character.attack},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"防禦力",value:e.character.defense},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"魔法攻擊",value:e.character.magicAttack},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"魔法防禦",value:e.character.magicDefense},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"命中",value:e.character.accurancy},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"迴避",value:e.character.dodge},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"暴擊",value:e.character.critical},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"反擊",value:e.character.strikeback},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),r(t(c),{span:24},{default:l(()=>[r(t(G),{title:"元素和抗性",size:"small"},{default:l(()=>[r(t(H),{cols:8,"x-gap":12,"y-gap":8},{default:l(()=>[r(t(c),null,{default:l(()=>[r(t(b),{label:"地",value:e.character.earth},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"水",value:e.character.water},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"火",value:e.character.fire},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"風",value:e.character.wind},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"混亂抗性",value:e.character.chaosResist},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"中毒抗性",value:e.character.poisonResist},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"石化抗性",value:e.character.petrifyResist},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"酒醉抗性",value:e.character.drunkResist},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),r(t(c),{span:24},{default:l(()=>[r(t(G),{title:"其他屬性",size:"small"},{default:l(()=>[r(t(H),{cols:8,"x-gap":12,"y-gap":8},{default:l(()=>[r(t(c),null,{default:l(()=>[r(t(b),{label:"魅力",value:e.character.charisma},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"技能槽",value:e.character.skillSlots},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"移動速度",value:e.character.walkSpeed},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"戰鬥位置",value:e.character.battlePosition},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"寵物位置",value:e.character.petPosition},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"騎寵位置",value:e.character.ridePosition},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"打卡狀態",value:e.character.isClockPunched?"已打卡":"未打卡"},null,8,["value"])]),_:1}),r(t(c),null,{default:l(()=>[r(t(b),{label:"移動狀態",value:e.character.isMoving?"移動中":"靜止"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):Ee("",!0)]),_:1},8,["title"])}}};export{at as default};
