import{by as xe,bz as Se,bV as _e,bW as ce,c as p,b as O,k as ke,e as q,f as A,l as L,u as re,p as ve,bX as pe,h as M,i as le,j as S,aM as me,d as x,a as D,aC as Te,q as we,aL as oe,a3 as ze,t as de,aa as K,_ as Be,ak as Ie,ag as ue,o as $e,z as w,F as $,I as l,B as s,C as t,J as P,bh as Re,D as z,E as U,be as G,ab as R,G as J,bE as Oe,H as te,bf as be,A as ge,ai as Pe,bg as Le,K as Me,al as Ne,am as Ee}from"./index-BQnRnkpm.js";import{C as je}from"./Dropdown-DtIUeDjB.js";import{p as se,l as We,a as Fe}from"./Menu-t9Xcnrvn.js";import{N as Ve}from"./InputGroup-DXYvrFkA.js";import{_ as Y}from"./Space-CLF6l0zJ.js";import{_ as Z}from"./Input-CjvOyjRT.js";import{_ as He}from"./Avatar-J5Z3ebzN.js";import{_ as Ye,a as he}from"./FormItem-BnBh4FZr.js";import"./Popover-BzX9Onon.js";import"./use-compitable-CRW7w5Mj.js";import"./next-frame-once-C5Ksf8W7.js";import"./create-D3Vn69pI.js";import"./index-Cb73Af_S.js";const Ae=e=>{const{baseColor:o,textColor2:i,bodyColor:g,cardColor:h,dividerColor:b,actionColor:k,scrollbarColor:m,scrollbarColorHover:c,invertedColor:f}=e;return{textColor:i,textColorInverted:"#FFF",color:g,colorEmbedded:k,headerColor:h,headerColorInverted:f,footerColor:k,footerColorInverted:f,headerBorderColor:b,headerBorderColorInverted:f,footerBorderColor:b,footerBorderColorInverted:f,siderBorderColor:b,siderBorderColorInverted:f,siderColor:h,siderColorInverted:f,siderToggleButtonBorder:`1px solid ${b}`,siderToggleButtonColor:o,siderToggleButtonIconColor:i,siderToggleButtonIconColorInverted:i,siderToggleBarColor:ce(g,m),siderToggleBarColorHover:ce(g,c),__invertScrollbar:"true"}},ne=xe({name:"Layout",common:Se,peers:{Scrollbar:_e},self:Ae}),De=p("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[p("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),O("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ue={embedded:Boolean,position:se,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ye=ke("n-layout");function Ce(e){return q({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},A.props),Ue),setup(o){const i=L(null),g=L(null),{mergedClsPrefixRef:h,inlineThemeDisabled:b}=re(o),k=A("Layout","-layout",De,ne,o,h);function m(y,C){if(o.nativeScrollbar){const{value:T}=i;T&&(C===void 0?T.scrollTo(y):T.scrollTo(y,C))}else{const{value:T}=g;T&&T.scrollTo(y,C)}}ve(ye,o);let c=0,f=0;const _=y=>{var C;const T=y.target;c=T.scrollLeft,f=T.scrollTop,(C=o.onScroll)===null||C===void 0||C.call(o,y)};pe(()=>{if(o.nativeScrollbar){const y=i.value;y&&(y.scrollTop=f,y.scrollLeft=c)}});const W={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},N={scrollTo:m},F=M(()=>{const{common:{cubicBezierEaseInOut:y},self:C}=k.value;return{"--n-bezier":y,"--n-color":o.embedded?C.colorEmbedded:C.color,"--n-text-color":C.textColor}}),B=b?le("layout",M(()=>o.embedded?"e":""),F,o):void 0;return Object.assign({mergedClsPrefix:h,scrollableElRef:i,scrollbarInstRef:g,hasSiderStyle:W,mergedTheme:k,handleNativeElScroll:_,cssVars:b?void 0:F,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},N)},render(){var o;const{mergedClsPrefix:i,hasSider:g}=this;(o=this.onRender)===null||o===void 0||o.call(this);const h=g?this.hasSiderStyle:void 0,b=[this.themeClass,e&&`${i}-layout-content`,`${i}-layout`,`${i}-layout--${this.position}-positioned`];return S("div",{class:b,style:this.cssVars},this.nativeScrollbar?S("div",{ref:"scrollableElRef",class:[`${i}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,h],onScroll:this.handleNativeElScroll},this.$slots):S(me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,h]}),this.$slots))}})}const fe=Ce(!1),Je=Ce(!0),qe=p("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[O("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),O("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Xe={position:se,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ke=q({name:"LayoutHeader",props:Object.assign(Object.assign({},A.props),Xe),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=re(e),g=A("Layout","-layout-header",qe,ne,e,o),h=M(()=>{const{common:{cubicBezierEaseInOut:k},self:m}=g.value,c={"--n-bezier":k};return e.inverted?(c["--n-color"]=m.headerColorInverted,c["--n-text-color"]=m.textColorInverted,c["--n-border-color"]=m.headerBorderColorInverted):(c["--n-color"]=m.headerColor,c["--n-text-color"]=m.textColor,c["--n-border-color"]=m.headerBorderColor),c}),b=i?le("layout-header",M(()=>e.inverted?"a":"b"),h,e):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:h,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),S("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Ge=p("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[O("bordered",[x("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),x("left-placement",[O("bordered",[x("border",`
 right: 0;
 `)])]),O("right-placement",`
 justify-content: flex-start;
 `,[O("bordered",[x("border",`
 left: 0;
 `)]),O("collapsed",[p("layout-toggle-button",[p("base-icon",`
 transform: rotate(180deg);
 `)]),p("layout-toggle-bar",[D("&:hover",[x("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),x("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),p("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[p("base-icon",`
 transform: rotate(0);
 `)]),p("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[D("&:hover",[x("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),x("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),O("collapsed",[p("layout-toggle-bar",[D("&:hover",[x("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),x("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),p("layout-toggle-button",[p("base-icon",`
 transform: rotate(0);
 `)])]),p("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[p("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),p("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[x("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),x("bottom",`
 position: absolute;
 top: 34px;
 `),D("&:hover",[x("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),x("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),x("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),D("&:hover",[x("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),x("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),p("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),O("show-content",[p("layout-sider-scroll-container",{opacity:1})]),O("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Ze=q({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return S("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},S(Te,{clsPrefix:e},{default:()=>S(je,null)}))}}),Qe=q({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return S("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},S("div",{class:`${e}-layout-toggle-bar__top`}),S("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),eo={position:se,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},oo=q({name:"LayoutSider",props:Object.assign(Object.assign({},A.props),eo),setup(e){const o=we(ye),i=L(null),g=L(null),h=M(()=>oe(c.value?e.collapsedWidth:e.width)),b=M(()=>e.collapseMode!=="transform"?{}:{minWidth:oe(e.width)}),k=M(()=>o?o.siderPlacement:"left"),m=L(e.defaultCollapsed),c=ze(de(e,"collapsed"),m);function f(v,d){if(e.nativeScrollbar){const{value:u}=i;u&&(d===void 0?u.scrollTo(v):u.scrollTo(v,d))}else{const{value:u}=g;u&&u.scrollTo(v,d)}}function _(){const{"onUpdate:collapsed":v,onUpdateCollapsed:d,onExpand:u,onCollapse:V}=e,{value:j}=c;d&&K(d,!j),v&&K(v,!j),m.value=!j,j?u&&K(u):V&&K(V)}let W=0,N=0;const F=v=>{var d;const u=v.target;W=u.scrollLeft,N=u.scrollTop,(d=e.onScroll)===null||d===void 0||d.call(e,v)};pe(()=>{if(e.nativeScrollbar){const v=i.value;v&&(v.scrollTop=N,v.scrollLeft=W)}}),ve(We,{collapsedRef:c,collapseModeRef:de(e,"collapseMode")});const{mergedClsPrefixRef:B,inlineThemeDisabled:y}=re(e),C=A("Layout","-layout-sider",Ge,ne,e,B);function T(v){var d,u;v.propertyName==="max-width"&&(c.value?(d=e.onAfterLeave)===null||d===void 0||d.call(e):(u=e.onAfterEnter)===null||u===void 0||u.call(e))}const Q={scrollTo:f},X=M(()=>{const{common:{cubicBezierEaseInOut:v},self:d}=C.value,{siderToggleButtonColor:u,siderToggleButtonBorder:V,siderToggleBarColor:j,siderToggleBarColorHover:ee}=d,I={"--n-bezier":v,"--n-toggle-button-color":u,"--n-toggle-button-border":V,"--n-toggle-bar-color":j,"--n-toggle-bar-color-hover":ee};return e.inverted?(I["--n-color"]=d.siderColorInverted,I["--n-text-color"]=d.textColorInverted,I["--n-border-color"]=d.siderBorderColorInverted,I["--n-toggle-button-icon-color"]=d.siderToggleButtonIconColorInverted,I.__invertScrollbar=d.__invertScrollbar):(I["--n-color"]=d.siderColor,I["--n-text-color"]=d.textColor,I["--n-border-color"]=d.siderBorderColor,I["--n-toggle-button-icon-color"]=d.siderToggleButtonIconColor),I}),E=y?le("layout-sider",M(()=>e.inverted?"a":"b"),X,e):void 0;return Object.assign({scrollableElRef:i,scrollbarInstRef:g,mergedClsPrefix:B,mergedTheme:C,styleMaxWidth:h,mergedCollapsed:c,scrollContainerStyle:b,siderPlacement:k,handleNativeElScroll:F,handleTransitionend:T,handleTriggerClick:_,inlineThemeDisabled:y,cssVars:X,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender},Q)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:i,showTrigger:g}=this;return(e=this.onRender)===null||e===void 0||e.call(this),S("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,i&&`${o}-layout-sider--collapsed`,(!i||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:oe(this.width)}]},this.nativeScrollbar?S("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):S(me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),g?g==="bar"?S(Qe,{clsPrefix:o,class:i?this.collapsedTriggerClass:this.triggerClass,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):S(Ze,{clsPrefix:o,class:i?this.collapsedTriggerClass:this.triggerClass,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?S("div",{class:`${o}-layout-sider__border`}):null)}}),ae=e=>(Ne("data-v-68373936"),e=e(),Ee(),e),to={class:"sidebar-content"},ro={class:"header-content"},lo=ae(()=>P("h1",null,"WebSocket調試器",-1)),so={class:"header-actions"},no={class:"main-content"},ao={key:0,class:"messages-container"},io=ae(()=>P("span",null,"WebSocket",-1)),co=["innerHTML"],uo={key:1},bo={key:1,class:"no-messages"},go={class:"input-area"},ho={class:"shortcuts-container"},fo=ae(()=>P("h2",null,"快捷短語管理",-1)),vo={__name:"WebsocketDebugger",setup(e){const o=Ie(),i=M(()=>o.isConnected||!1),g=ue({url:"ws://localhost:12345/"}),h=L(""),b=L(!0),k=L("connection"),m=M(()=>[...o.messages].reverse().slice(0,50).map(a=>({...a,timestamp:a.timestamp?new Date(a.timestamp):new Date}))),c=L([]),f=L(!1),_=ue({name:"",content:""}),W={name:{required:!0,message:"請輸入快捷短語名稱",trigger:"blur"},content:{required:!0,message:"請輸入快捷短語內容",trigger:"blur"}},N=L(-1);$e(()=>{y()});const F=[{label:"連接管理",key:"connection",icon:B("mdi:electric-switch")},{label:"快捷短語",key:"shortcuts",icon:B("mdi:lightning-bolt")}];function B(a){return()=>S(G,{icon:a})}function y(){const a=localStorage.getItem("websocket-shortcuts");a&&(c.value=JSON.parse(a))}function C(){localStorage.setItem("websocket-shortcuts",JSON.stringify(c.value))}function T(a){u(a)}function Q(){N.value===-1?c.value.push({..._}):c.value[N.value]={..._},C(),f.value=!1,_.name="",_.content="",N.value=-1}function X(a){const r=c.value[a];_.name=r.name,_.content=r.content,N.value=a,f.value=!0}function E(a){c.value.splice(a,1),C()}function v(){o.initWebSocket()}function d(){o.isConnected&&o.closeWebSocket()}function u(a=null){if(a=a||h.value.trim(),a){try{const r=JSON.parse(a);o.sendMsg(r)}catch{o.sendMsg(a)}h.value=""}}function V(a){if(!a)return"Empty message";try{const r=JSON.parse(a),n=JSON.stringify(r,null,2);return ee(n)}catch(r){return console.error("Error parsing message:",r),j(a)}}function j(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ee(a){return a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,r=>{let n="number";return r.startsWith('"')?r.endsWith(":")?n="key":n="string":/true|false/.test(r)?n="boolean":/null/.test(r)&&(n="null"),`<span class="${n}">${r}</span>`})}function I(a){navigator.clipboard.writeText(a).then(()=>{}).catch(r=>{console.error("無法複製消息",r)})}return(a,r)=>(w(),$("div",{class:Me(["websocket-debugger",{"dark-mode":b.value}])},[l(t(fe),{"has-sider":""},{default:s(()=>[l(t(oo),{bordered:"","show-trigger":"","collapse-mode":"width","collapsed-width":50,width:170,"native-scrollbar":!1},{default:s(()=>[P("div",to,[l(t(Fe),{value:k.value,"onUpdate:value":r[0]||(r[0]=n=>k.value=n),options:F},null,8,["value"])])]),_:1}),l(t(fe),null,{default:s(()=>[l(t(Ke),{bordered:""},{default:s(()=>[P("div",ro,[lo,P("div",so,[l(t(Y),null,{default:s(()=>[l(t(Re),{type:i.value?"success":"error"},{default:s(()=>[z(U(i.value?"已連接":"未連接"),1)]),_:1},8,["type"]),l(t(Z),{value:g.url,"onUpdate:value":r[1]||(r[1]=n=>g.url=n),placeholder:"ws://localhost:12345/"},{prefix:s(()=>[l(t(G),{icon:"mdi:electric-switch"})]),_:1},8,["value"]),l(t(R),{type:"primary",disabled:i.value,onClick:v},{default:s(()=>[z(" 連接 ")]),_:1},8,["disabled"]),l(t(R),{disabled:!i.value,onClick:d},{default:s(()=>[z(" 斷開連接 ")]),_:1},8,["disabled"])]),_:1})])])]),_:1}),l(t(Je),null,{default:s(()=>[P("div",no,[k.value==="connection"?(w(),$(J,{key:0},[m.value&&m.value.length>0?(w(),$("div",ao,[l(t(Oe),{style:{"max-height":"calc(100vh - 220px)"}},{default:s(()=>[(w(!0),$(J,null,te(m.value,n=>{var H;return w(),$("div",{key:((H=n.timestamp)==null?void 0:H.getTime())||Math.random(),class:"message-item"},[l(t(be),{size:"small",bordered:!1},{header:s(()=>[l(t(Y),{align:"center"},{default:s(()=>[l(t(He),{round:""},{default:s(()=>[z(" WS ")]),_:1}),io,z(" "+U(new Date(n.timestamp).toLocaleString())+" ",1),l(t(R),{size:"tiny",onClick:ie=>I(n.data)},{default:s(()=>[l(t(G),{icon:"mdi:content-copy"})]),_:2},1032,["onClick"])]),_:2},1024)]),default:s(()=>[n.data?(w(),$("pre",{key:0,class:"message-content",innerHTML:V(n.data)},null,8,co)):(w(),$("span",uo,"No message data"))]),_:2},1024)])}),128))]),_:1})])):(w(),$("div",bo," No messages yet. ")),P("div",go,[l(t(Ve),null,{default:s(()=>[l(t(Z),{value:h.value,"onUpdate:value":r[2]||(r[2]=n=>h.value=n),type:"textarea",placeholder:"輸入要發送的消息",autosize:{minRows:2,maxRows:10}},null,8,["value"]),l(t(R),{type:"primary",disabled:!i.value,onClick:r[3]||(r[3]=()=>u(h.value.value))},{default:s(()=>[z(" 發送 ")]),_:1},8,["disabled"])]),_:1}),P("div",ho,[l(t(Y),null,{default:s(()=>[(w(!0),$(J,null,te(c.value,n=>(w(),ge(t(R),{key:n.name,size:"small",onClick:H=>T(n.content)},{default:s(()=>[z(U(n.name),1)]),_:2},1032,["onClick"]))),128)),l(t(R),{size:"small",onClick:r[4]||(r[4]=n=>f.value=!0)},{icon:s(()=>[l(t(G),{icon:"mdi:plus"})]),default:s(()=>[z(" 添加快捷短語 ")]),_:1})]),_:1})])])],64)):k.value==="shortcuts"?(w(),$(J,{key:1},[fo,l(t(Y),{vertical:""},{default:s(()=>[(w(!0),$(J,null,te(c.value,(n,H)=>(w(),ge(t(be),{key:n.name,size:"small"},{header:s(()=>[l(t(Y),{justify:"space-between"},{default:s(()=>[P("span",null,U(n.name),1),l(t(Y),null,{default:s(()=>[l(t(R),{size:"tiny",onClick:ie=>X(H)},{default:s(()=>[z(" 編輯 ")]),_:2},1032,["onClick"]),l(t(R),{size:"tiny",onClick:ie=>E(H)},{default:s(()=>[z(" 刪除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),default:s(()=>[P("pre",null,U(n.content),1)]),_:2},1024))),128)),l(t(R),{onClick:r[5]||(r[5]=n=>f.value=!0)},{default:s(()=>[z(" 添加新快捷短語 ")]),_:1})]),_:1})],64)):Pe("",!0)])]),_:1})]),_:1})]),_:1}),l(t(Le),{show:f.value,"onUpdate:show":r[9]||(r[9]=n=>f.value=n),preset:"dialog",title:"添加/編輯快捷短語"},{action:s(()=>[l(t(R),{onClick:r[8]||(r[8]=n=>f.value=!1)},{default:s(()=>[z(" 取消 ")]),_:1}),l(t(R),{type:"primary",onClick:Q},{default:s(()=>[z(" 保存 ")]),_:1})]),default:s(()=>[l(t(Ye),{model:_,rules:W},{default:s(()=>[l(t(he),{label:"名稱",path:"name"},{default:s(()=>[l(t(Z),{value:_.name,"onUpdate:value":r[6]||(r[6]=n=>_.name=n),placeholder:"輸入快捷短語名稱"},null,8,["value"])]),_:1}),l(t(he),{label:"內容",path:"content"},{default:s(()=>[l(t(Z),{value:_.content,"onUpdate:value":r[7]||(r[7]=n=>_.content=n),type:"textarea",placeholder:"輸入快捷短語內容"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])],2))}},$o=Be(vo,[["__scopeId","data-v-68373936"]]);export{$o as default};
