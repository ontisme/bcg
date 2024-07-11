import{M as L,N as H,O as j,P as Q,Q as F,R as ae,S as J,e as B,l as U,j as i,T as le,U as ie,h as $,k as pt,q as Ee,V as qe,W as ce,X as Ue,Y as $e,Z as Ae,$ as ft,a as re,c as w,a0 as mt,d as V,b as He,a1 as gt,u as vt,f as Oe,a2 as bt,p as xt,t as Se,a3 as Fe,y as wt,a4 as Be,i as kt,a5 as yt,a6 as _t,a7 as Ct,a8 as St,a9 as Ut,aa as pe,ab as fe,ac as Le,L as je,ad as $t,z as W,F as Me,K as At,C as y,ae as Mt,af as Ke,w as Rt,A as be,_ as Pt,v as Vt,ag as Dt,I as Ze,B as xe,G as zt,H as It,ah as Tt,D as Xe,E as Ht,ai as Ft,aj as Bt}from"./index-DelEC5j5.js";import{N as Nt}from"./Dropdown-BlDdoP8p.js";import"./SideMenu-D887wn0m.js";import{_ as Et,a as qt}from"./Tabs-BL1IvnxA.js";import{_ as Ot,u as Lt}from"./Input-CSeQnrqH.js";import{N as jt}from"./InputGroup-CfHmdPSq.js";import{u as Re,B as Kt,V as Zt,a as Xt}from"./Popover-CfLr5fhY.js";import{N as Gt}from"./Menu-CkrXLsR-.js";function Ge(e,t,r){t/=100,r/=100;const n=t*Math.min(r,1-r)+r;return[e,n?(2-2*r/n)*100:0,n*100]}function ve(e,t,r){t/=100,r/=100;const n=r-r*t/2,o=Math.min(n,1-n);return[e,o?(r-n)/o*100:0,n*100]}function O(e,t,r){t/=100,r/=100;let n=(o,a=(o+e/60)%6)=>r-r*t*Math.max(Math.min(a,4-a,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function Pe(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),o=n-Math.min(e,t,r),a=o&&(n==e?(t-r)/o:n==t?2+(r-e)/o:4+(e-t)/o);return[60*(a<0?a+6:a),n&&o/n*100,n*100]}function Ve(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),o=n-Math.min(e,t,r),a=1-Math.abs(n+n-o-1),s=o&&(n==e?(t-r)/o:n==t?2+(r-e)/o:4+(e-t)/o);return[60*(s<0?s+6:s),a?o/a*100:0,(n+n-o)*50]}function De(e,t,r){t/=100,r/=100;let n=t*Math.min(r,1-r),o=(a,s=(a+e/30)%12)=>r-n*Math.max(Math.min(s-3,9-s,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}function Wt(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function de(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Qt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Jt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Yt={rgb:{hex(e){return L(H(e))},hsl(e){const[t,r,n,o]=H(e);return j([...Ve(t,r,n),o])},hsv(e){const[t,r,n,o]=H(e);return Q([...Pe(t,r,n),o])}},hex:{rgb(e){return F(H(e))},hsl(e){const[t,r,n,o]=H(e);return j([...Ve(t,r,n),o])},hsv(e){const[t,r,n,o]=H(e);return Q([...Pe(t,r,n),o])}},hsl:{hex(e){const[t,r,n,o]=ae(e);return L([...De(t,r,n),o])},rgb(e){const[t,r,n,o]=ae(e);return F([...De(t,r,n),o])},hsv(e){const[t,r,n,o]=ae(e);return Q([...Ge(t,r,n),o])}},hsv:{hex(e){const[t,r,n,o]=J(e);return L([...O(t,r,n),o])},rgb(e){const[t,r,n,o]=J(e);return F([...O(t,r,n),o])},hsl(e){const[t,r,n,o]=J(e);return j([...ve(t,r,n),o])}}};function We(e,t,r){return r=r||de(e),r?r===t?e:Yt[r][t](e):null}const oe="12px",en=12,X="6px",tn=6,nn="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",rn=B({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function r(a){t.value&&(le("mousemove",document,n),le("mouseup",document,o),n(a))}function n(a){const{value:s}=t;if(!s)return;const{width:u,left:d}=s.getBoundingClientRect(),b=Qt((a.clientX-d-tn)/(u-en)*360);e.onUpdateHue(b)}function o(){var a;ie("mousemove",document,n),ie("mouseup",document,o),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:oe,borderRadius:X}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:nn,height:oe,borderRadius:X,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:X,right:X,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${X})`,borderRadius:X,width:oe,height:oe}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:X,width:oe,height:oe}})))))}}),ue="12px",on=12,G="6px",an=B({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function r(a){!t.value||!e.rgba||(le("mousemove",document,n),le("mouseup",document,o),n(a))}function n(a){const{value:s}=t;if(!s)return;const{width:u,left:d}=s.getBoundingClientRect(),b=(a.clientX-d)/(u-on);e.onUpdateAlpha(Jt(b))}function o(){var a;ie("mousemove",document,n),ie("mouseup",document,o),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:$(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ue,borderRadius:G},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:G,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:G,right:G,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${G})`,borderRadius:G,width:ue,height:ue}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:F(this.rgba),borderRadius:G,width:ue,height:ue}}))))}}),me="12px",ge="6px",ln=B({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=U(null);function r(a){t.value&&(le("mousemove",document,n),le("mouseup",document,o),n(a))}function n(a){const{value:s}=t;if(!s)return;const{width:u,height:d,left:b,bottom:m}=s.getBoundingClientRect(),x=(m-a.clientY)/d,A=(a.clientX-b)/u,_=100*(A>1?1:A<0?0:A),z=100*(x>1?1:x<0?0:x);e.onUpdateSV(_,z)}function o(){var a;ie("mousemove",document,n),ie("mouseup",document,o),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:$(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:me,height:me,borderRadius:ge,left:`calc(${this.displayedSv[0]}% - ${ge})`,bottom:`calc(${this.displayedSv[1]}% - ${ge})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ge,width:me,height:me}})))}}),ze=pt("n-color-picker");function sn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function un(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function cn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function dn(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function hn(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const pn={paddingSmall:"0 4px"},Ne=B({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=U(""),{themeRef:r}=Ee(ze,null);qe(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function o(s){t.value=s}function a(s){let u,d;switch(e.label){case"HEX":d=dn(s),d&&e.onUpdateValue(s),t.value=n();break;case"H":u=un(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"S":case"L":case"V":u=cn(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"A":u=hn(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"R":case"G":case"B":u=sn(s),u===!1?t.value=n():e.onUpdateValue(u);break}}return{mergedTheme:r,inputValue:t,handleInputChange:a,handleInputUpdateValue:o}},render(){const{mergedTheme:e}=this;return i(Ot,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:pn,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),fn=B({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,r){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?L:ce)(r));return}let o;switch(e.valueArr===null?o=[0,0,0,0]:o=Array.from(e.valueArr),e.mode){case"hsv":o[t]=r,e.onUpdateValue((n?Q:Ae)(o));break;case"rgb":o[t]=r,e.onUpdateValue((n?F:$e)(o));break;case"hsl":o[t]=r,e.onUpdateValue((n?j:Ue)(o));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(jt,null,{default:()=>{const{mode:r,valueArr:n,showAlpha:o}=this;if(r==="hex"){let a=null;try{a=n===null?null:(o?L:ce)(n)}catch{}return i(Ne,{label:"HEX",showAlpha:o,value:a,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(r+(o?"a":"")).split("").map((a,s)=>i(Ne,{label:a.toUpperCase(),value:n===null?null:n[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}}),mn=B({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:r}=Ee(ze,null);return()=>{const{hsla:n,value:o,clsPrefix:a,onClick:s,disabled:u}=e,d=t.label||r.value;return i("div",{class:[`${a}-color-picker-trigger`,u&&`${a}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${a}-color-picker-trigger__fill`},i("div",{class:`${a}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?j(n):""}}),o&&n?i("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},d?d(o):o):null))}}});function gn(e,t){if(t==="hsv"){const[r,n,o,a]=J(e);return F([...O(r,n,o),a])}return e}function vn(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const bn=B({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=$(()=>e.swatches.map(a=>{const s=de(a);return{value:a,mode:s,legalValue:gn(a,s)}}));function r(a){const{mode:s}=e;let{value:u,mode:d}=a;return d||(d="hex",/^[a-zA-Z]+$/.test(u)?u=vn(u):(ft("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),d===s?u:We(u,s,d)}function n(a){e.onUpdateColor(r(a))}function o(a,s){a.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:o}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:r=>{this.handleSwatchKeyDown(r,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),xn=B({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=de(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(r){var n;const o=r.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,We(o.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),wn=re([w("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),w("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[mt(),w("input",`
 text-align: center;
 `)]),w("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[re("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),w("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[V("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),re("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),w("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[V("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),w("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[V("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[He("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),w("color-picker-preview",`
 display: flex;
 `,[V("sliders",`
 flex: 1 0 auto;
 `),V("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),V("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),V("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),w("color-picker-input",`
 display: flex;
 align-items: center;
 `,[w("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),V("mode",`
 width: 72px;
 text-align: center;
 `)]),w("color-picker-control",`
 padding: 12px;
 `),w("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[w("button","margin-left: 8px;")]),w("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[V("value",`
 white-space: nowrap;
 position: relative;
 `),V("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),He("disabled","cursor: not-allowed"),w("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[re("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),w("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[w("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[V("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),re("&:focus",`
 outline: none;
 `,[V("fill",[re("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),kn=Object.assign(Object.assign({},Oe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Re.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),yn=B({name:"ColorPicker",props:kn,setup(e,{slots:t}){const r=U(null);let n=null;const o=gt(e),{mergedSizeRef:a,mergedDisabledRef:s}=o,{localeRef:u}=Lt("global"),{mergedClsPrefixRef:d,namespaceRef:b,inlineThemeDisabled:m}=vt(e),x=Oe("ColorPicker","-color-picker",wn,bt,e,d);xt(ze,{themeRef:x,renderLabelRef:Se(e,"renderLabel"),colorPickerSlots:t});const A=U(e.defaultShow),_=Fe(Se(e,"show"),A);function z(l){const{onUpdateShow:c,"onUpdate:show":p}=e;c&&pe(c,l),p&&pe(p,l),A.value=l}const{defaultValue:Ie}=e,Te=U(Ie===void 0?Wt(e.modes,e.showAlpha):Ie),C=Fe(Se(e,"value"),Te),Y=U([C.value]),I=U(0),we=$(()=>de(C.value)),{modes:Qe}=e,D=U(de(C.value)||Qe[0]||"rgb");function Je(){const{modes:l}=e,{value:c}=D,p=l.findIndex(f=>f===c);~p?D.value=l[(p+1)%l.length]:D.value="rgb"}let M,R,ee,te,N,E,q,P;const se=$(()=>{const{value:l}=C;if(!l)return null;switch(we.value){case"hsv":return J(l);case"hsl":return[M,R,ee,P]=ae(l),[...Ge(M,R,ee),P];case"rgb":case"hex":return[N,E,q,P]=H(l),[...Pe(N,E,q),P]}}),K=$(()=>{const{value:l}=C;if(!l)return null;switch(we.value){case"rgb":case"hex":return H(l);case"hsv":return[M,R,te,P]=J(l),[...O(M,R,te),P];case"hsl":return[M,R,ee,P]=ae(l),[...De(M,R,ee),P]}}),ke=$(()=>{const{value:l}=C;if(!l)return null;switch(we.value){case"hsl":return ae(l);case"hsv":return[M,R,te,P]=J(l),[...ve(M,R,te),P];case"rgb":case"hex":return[N,E,q,P]=H(l),[...Ve(N,E,q),P]}}),Ye=$(()=>{switch(D.value){case"rgb":case"hex":return K.value;case"hsv":return se.value;case"hsl":return ke.value}}),he=U(0),ye=U(1),_e=U([0,0]);function et(l,c){const{value:p}=se,f=he.value,g=p?p[3]:1;_e.value=[l,c];const{showAlpha:h}=e;switch(D.value){case"hsv":v((h?Q:Ae)([f,l,c,g]),"cursor");break;case"hsl":v((h?j:Ue)([...ve(f,l,c),g]),"cursor");break;case"rgb":v((h?F:$e)([...O(f,l,c),g]),"cursor");break;case"hex":v((h?L:ce)([...O(f,l,c),g]),"cursor");break}}function tt(l){he.value=l;const{value:c}=se;if(!c)return;const[,p,f,g]=c,{showAlpha:h}=e;switch(D.value){case"hsv":v((h?Q:Ae)([l,p,f,g]),"cursor");break;case"rgb":v((h?F:$e)([...O(l,p,f),g]),"cursor");break;case"hex":v((h?L:ce)([...O(l,p,f),g]),"cursor");break;case"hsl":v((h?j:Ue)([...ve(l,p,f),g]),"cursor");break}}function nt(l){switch(D.value){case"hsv":[M,R,te]=se.value,v(Q([M,R,te,l]),"cursor");break;case"rgb":[N,E,q]=K.value,v(F([N,E,q,l]),"cursor");break;case"hex":[N,E,q]=K.value,v(L([N,E,q,l]),"cursor");break;case"hsl":[M,R,ee]=ke.value,v(j([M,R,ee,l]),"cursor");break}ye.value=l}function v(l,c){c==="cursor"?n=l:n=null;const{nTriggerFormChange:p,nTriggerFormInput:f}=o,{onUpdateValue:g,"onUpdate:value":h}=e;g&&pe(g,l),h&&pe(h,l),p(),f(),Te.value=l}function rt(l){v(l,"input"),Le(ne)}function ne(l=!0){const{value:c}=C;if(c){const{nTriggerFormChange:p,nTriggerFormInput:f}=o,{onComplete:g}=e;g&&g(c);const{value:h}=Y,{value:S}=I;l&&(h.splice(S+1,h.length,c),I.value=S+1),p(),f()}}function ot(){const{value:l}=I;l-1<0||(v(Y.value[l-1],"input"),ne(!1),I.value=l-1)}function at(){const{value:l}=I;l<0||l+1>=Y.value.length||(v(Y.value[l+1],"input"),ne(!1),I.value=l+1)}function lt(){v(null,"input"),z(!1)}function it(){const{value:l}=C,{onConfirm:c}=e;c&&c(l),z(!1)}const st=$(()=>I.value>=1),ut=$(()=>{const{value:l}=Y;return l.length>1&&I.value<l.length-1});wt(_,l=>{l||(Y.value=[C.value],I.value=0)}),qe(()=>{if(!(n&&n===C.value)){const{value:l}=se;l&&(he.value=l[0],ye.value=l[3],_e.value=[l[1],l[2]])}n=null});const Ce=$(()=>{const{value:l}=a,{common:{cubicBezierEaseInOut:c},self:{textColor:p,color:f,panelFontSize:g,boxShadow:h,border:S,borderRadius:k,dividerColor:Z,[Be("height",l)]:dt,[Be("fontSize",l)]:ht}}=x.value;return{"--n-bezier":c,"--n-text-color":p,"--n-color":f,"--n-panel-font-size":g,"--n-font-size":ht,"--n-box-shadow":h,"--n-border":S,"--n-border-radius":k,"--n-height":dt,"--n-divider-color":Z}}),T=m?kt("color-picker",$(()=>a.value[0]),Ce,e):void 0;function ct(){var l;const{value:c}=K,{value:p}=he,{internalActions:f,modes:g,actions:h}=e,{value:S}=x,{value:k}=d;return i("div",{class:[`${k}-color-picker-panel`,T==null?void 0:T.themeClass.value],onDragstart:Z=>{Z.preventDefault()},style:m?void 0:Ce.value},i("div",{class:`${k}-color-picker-control`},i(ln,{clsPrefix:k,rgba:c,displayedHue:p,displayedSv:_e.value,onUpdateSV:et,onComplete:ne}),i("div",{class:`${k}-color-picker-preview`},i("div",{class:`${k}-color-picker-preview__sliders`},i(rn,{clsPrefix:k,hue:p,onUpdateHue:tt,onComplete:ne}),e.showAlpha?i(an,{clsPrefix:k,rgba:c,alpha:ye.value,onUpdateAlpha:nt,onComplete:ne}):null),e.showPreview?i(xn,{clsPrefix:k,mode:D.value,color:K.value&&ce(K.value),onUpdateColor:Z=>{v(Z,"input")}}):null),i(fn,{clsPrefix:k,showAlpha:e.showAlpha,mode:D.value,modes:g,onUpdateMode:Je,value:C.value,valueArr:Ye.value,onUpdateValue:rt}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&i(bn,{clsPrefix:k,mode:D.value,swatches:e.swatches,onUpdateColor:Z=>{v(Z,"input")}})),h!=null&&h.length?i("div",{class:`${k}-color-picker-action`},h.includes("confirm")&&i(fe,{size:"small",onClick:it,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button},{default:()=>u.value.confirm}),h.includes("clear")&&i(fe,{size:"small",onClick:lt,disabled:!C.value,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${k}-color-picker-action`},{default:t.action}):f?i("div",{class:`${k}-color-picker-action`},f.includes("undo")&&i(fe,{size:"small",onClick:ot,disabled:!st.value,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button},{default:()=>u.value.undo}),f.includes("redo")&&i(fe,{size:"small",onClick:at,disabled:!ut.value,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:d,namespace:b,selfRef:r,hsla:ke,rgba:K,mergedShow:_,mergedDisabled:s,isMounted:yt(),adjustedTo:Re(e),mergedValue:C,handleTriggerClick(){z(!0)},handleClickOutside(l){var c;!((c=r.value)===null||c===void 0)&&c.contains(_t(l))||z(!1)},renderPanel:ct,cssVars:m?void 0:Ce,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r==null||r(),i("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},i(Kt,null,{default:()=>[i(Zt,null,{default:()=>i(mn,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),i(Xt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Re.tdkey,to:this.adjustedTo},{default:()=>i(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?St(this.renderPanel(),[[Ut,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Dn={__name:"ToggleTheme",setup(e){const t=je(),r=$t();async function n({clientX:o,clientY:a}){function s(){t.toggleDark(),Mt(r)()}if(!document.startViewTransition)return s();const u=[`circle(0px at ${o}px ${a}px)`,`circle(${Math.hypot(Math.max(o,window.innerWidth-o),Math.max(a,window.innerHeight-a))}px at ${o}px ${a}px)`];await document.startViewTransition(s).ready,document.documentElement.animate({clipPath:r.value?u.reverse():u},{duration:500,easing:"ease-in",pseudoElement:`::view-transition-${r.value?"old":"new"}(root)`})}return(o,a)=>(W(),Me("i",{class:At(["mr-16 cursor-pointer",y(r)?"i-fe:moon":"i-fe:sun"]),onClick:n},null,2))}},_n={__name:"ContextMenu",props:{show:{type:Boolean,default:!1},currentPath:{type:String,default:""},x:{type:Number,default:0},y:{type:Number,default:0}},emits:["update:show"],setup(e,{emit:t}){const r=e,n=t,o=Ke(),a=$(()=>[{label:"重新加载",key:"reload",disabled:r.currentPath!==o.activeTab,icon:()=>i("i",{class:"i-mdi:refresh text-14"})},{label:"关闭",key:"close",disabled:o.tabs.length<=1,icon:()=>i("i",{class:"i-mdi:close text-14"})},{label:"关闭其他",key:"close-other",disabled:o.tabs.length<=1,icon:()=>i("i",{class:"i-mdi:arrow-expand-horizontal text-14"})},{label:"关闭左侧",key:"close-left",disabled:o.tabs.length<=1||r.currentPath===o.tabs[0].path,icon:()=>i("i",{class:"i-mdi:arrow-expand-left text-14"})},{label:"关闭右侧",key:"close-right",disabled:o.tabs.length<=1||r.currentPath===o.tabs[o.tabs.length-1].path,icon:()=>i("i",{class:"i-mdi:arrow-expand-right text-14"})}]),s=Rt(),u=new Map([["reload",()=>{var m;o.reloadTab(s.fullPath,(m=s.meta)==null?void 0:m.keepAlive)}],["close",()=>{o.removeTab(r.currentPath)}],["close-other",()=>{o.removeOther(r.currentPath)}],["close-left",()=>{o.removeLeft(r.currentPath)}],["close-right",()=>{o.removeRight(r.currentPath)}]]);function d(){n("update:show",!1)}function b(m){const x=u.get(m);x&&x(),d()}return(m,x)=>{const A=Nt;return W(),be(A,{show:e.show,options:y(a),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:d,onSelect:b},null,8,["show","options","x","y"])}}},Cn={__name:"index",setup(e){const t=Vt(),r=Ke(),n=Dt({show:!1,x:0,y:0,currentPath:""});function o(b){r.setActiveTab(b),t.push(b)}function a(){n.show=!0}function s(){n.show=!1}function u(b,m,x){Object.assign(n,{x:b,y:m,currentPath:x})}async function d(b,m){const{clientX:x,clientY:A}=b;s(),u(x,A,m.path),await Le(),a()}return(b,m)=>{const x=Et,A=qt;return W(),Me("div",null,[Ze(A,{value:y(r).activeTab,closable:y(r).tabs.length>1,type:"card",onClose:m[0]||(m[0]=_=>y(r).removeTab(_))},{default:xe(()=>[(W(!0),Me(zt,null,It(y(r).tabs,_=>(W(),be(x,{key:_.path,name:_.path,onClick:z=>o(_.path),onContextmenu:Tt(z=>d(z,_),["prevent"])},{default:xe(()=>[Xe(Ht(_.title),1)]),_:2},1032,["name","onClick","onContextmenu"]))),128))]),_:1},8,["value","closable"]),y(n).show?(W(),be(_n,{key:0,show:y(n).show,"onUpdate:show":m[1]||(m[1]=_=>y(n).show=_),"current-path":y(n).currentPath,x:y(n).x,y:y(n).y},null,8,["show","current-path","x","y"])):Ft("",!0)])}}},zn=Pt(Cn,[["__scopeId","data-v-5ef4d528"]]),In={__name:"ThemeSetting",setup(e){const t=je(),r=Object.entries(Bt()).map(([,n])=>n.primary);return(n,o)=>{const a=yn,s=Gt;return W(),be(s,{trigger:"hover"},{trigger:xe(()=>[Ze(a,{class:"mr-16 h-32 w-32",value:y(t).primaryColor,swatches:y(r),"on-update:value":u=>y(t).setPrimaryColor(u),"render-label":()=>""},null,8,["value","swatches","on-update:value"])]),default:xe(()=>[Xe(" 設置主題色 ")]),_:1})}}};export{zn as A,Dn as _,In as a};
