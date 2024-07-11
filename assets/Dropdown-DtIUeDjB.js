import{B as ke,V as Ne,a as Pe,r as Re,p as ce,N as Ke}from"./Popover-BzX9Onon.js";import{l as F,y as ie,ag as Ce,c0 as Ie,c1 as Oe,aN as _e,U as G,c2 as De,T as V,e as $,j as l,k as de,q as j,b2 as pe,h as y,p as H,aR as J,a7 as $e,aH as fe,bJ as X,bq as ze,$ as Ae,G as Te,b3 as Fe,b1 as je,c3 as Be,c as N,a0 as Me,a as E,aA as le,b as K,d as D,f as he,a3 as Le,t as C,u as Ee,aa as te,a4 as T,i as He,ay as Ue,c4 as qe}from"./index-BQnRnkpm.js";import{h as se,c as We}from"./create-D3Vn69pI.js";function Ge(e){return n=>{n?e.value=n.$el:e.value=null}}function Ve(e,n,i){const r=F(e.value);let t=null;return ie(e,o=>{t!==null&&window.clearTimeout(t),o===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}function Je(e={},n){const i=Ce({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,o=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(m=>{if(m!==d.key)return;const v=r[m];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},c=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(m=>{if(m!==d.key)return;const v=t[m];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},f=()=>{(n===void 0||n.value)&&(V("keydown",document,o),V("keyup",document,c)),n!==void 0&&ie(n,d=>{d?(V("keydown",document,o),V("keyup",document,c)):(G("keydown",document,o),G("keyup",document,c))})};return Ie()?(Oe(f),_e(()=>{(n===void 0||n.value)&&(G("keydown",document,o),G("keyup",document,c))})):f(),De(i)}const Xe=$({name:"ChevronRight",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ve=$({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ae=de("n-dropdown-menu"),Z=de("n-dropdown"),ue=de("n-dropdown-option");function re(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Ze(e){return e.type==="group"}function be(e){return e.type==="divider"}function Qe(e){return e.type==="render"}const we=$({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=j(Z),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:o,activeKeyPathRef:c,animatedRef:f,mergedShowRef:d,renderLabelRef:m,renderIconRef:v,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:P,nodePropsRef:I,menuPropsRef:B}=n,x=j(ue,null),O=j(ae),U=j(pe),Q=y(()=>e.tmNode.rawNode),q=y(()=>{const{value:s}=S;return re(e.tmNode.rawNode,s)}),Y=y(()=>{const{disabled:s}=e.tmNode;return s}),ee=y(()=>{if(!q.value)return!1;const{key:s,disabled:w}=e.tmNode;if(w)return!1;const{value:R}=i,{value:z}=r,{value:ne}=t,{value:A}=o;return R!==null?A.includes(s):z!==null?A.includes(s)&&A[A.length-1]!==s:ne!==null?A.includes(s):!1}),oe=y(()=>r.value===null&&!f.value),W=Ve(ee,300,oe),M=y(()=>!!(x!=null&&x.enteringSubmenuRef.value)),L=F(!1);H(ue,{enteringSubmenuRef:L});function _(){L.value=!0}function a(){L.value=!1}function b(){const{parentKey:s,tmNode:w}=e;w.disabled||d.value&&(t.value=s,r.value=null,i.value=w.key)}function p(){const{tmNode:s}=e;s.disabled||d.value&&i.value!==s.key&&b()}function u(s){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:w}=s;w&&!se({target:w},"dropdownOption")&&!se({target:w},"scrollbarRail")&&(i.value=null)}function k(){const{value:s}=q,{tmNode:w}=e;d.value&&!s&&!w.disabled&&(n.doSelect(w.key,w.rawNode),n.doUpdateShow(!1))}return{labelField:g,renderLabel:m,renderIcon:v,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:y(()=>W.value&&!M.value),rawNode:Q,hasSubmenu:q,pending:J(()=>{const{value:s}=o,{key:w}=e.tmNode;return s.includes(w)}),childActive:J(()=>{const{value:s}=c,{key:w}=e.tmNode,R=s.findIndex(z=>w===z);return R===-1?!1:R<s.length-1}),active:J(()=>{const{value:s}=c,{key:w}=e.tmNode,R=s.findIndex(z=>w===z);return R===-1?!1:R===s.length-1}),mergedDisabled:Y,renderOption:P,nodeProps:I,handleClick:k,handleMouseMove:p,handleMouseEnter:b,handleMouseLeave:u,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:a}},render(){var e,n;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:o,siblingHasIcon:c,siblingHasSubmenu:f,renderLabel:d,renderIcon:m,renderOption:v,nodeProps:g,props:S,scrollable:P}=this;let I=null;if(t){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);I=l(ye,Object.assign({},U,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(r),O=l("div",Object.assign({class:[`${o}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),l("div",fe(B,S),[l("div",{class:[`${o}-dropdown-option-body__prefix`,c&&`${o}-dropdown-option-body__prefix--show-icon`]},[m?m(r):X(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},d?d(r):X((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,f&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(ze,null,{default:()=>l(Xe,null)}):null)]),this.hasSubmenu?l(ke,null,{default:()=>[l(Ne,null,{default:()=>l("div",{class:`${o}-dropdown-offset-container`},l(Pe,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>l("div",{class:`${o}-dropdown-menu-wrapper`},i?l($e,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return v?v({node:O,option:r}):O}}),Ye=$({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=j(ae),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:o}=j(Z);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:i,nodeProps:t,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:o,renderOption:c}=this,{rawNode:f}=this.tmNode,d=l("div",Object.assign({class:`${n}-dropdown-option`},t==null?void 0:t(f)),l("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},X(f.icon)),l("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(f):X((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),l("div",{class:[`${n}-dropdown-option-body__suffix`,i&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:d,option:f}):d}}),eo=$({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:i}=this,{children:r}=e;return l(Te,null,l(Ye,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:o}=t;return o.show===!1?null:be(o)?l(ve,{clsPrefix:i,key:t.key}):t.isGroup?(Ae("dropdown","`group` node is not allowed to be put in `group` node."),null):l(we,{clsPrefix:i,tmNode:t,parentKey:n,key:t.key})}))}}),oo=$({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return l("div",n,[e==null?void 0:e()])}}),ye=$({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:i}=j(Z);H(ae,{showIconRef:y(()=>{const t=n.value;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:f}=o;return t?t(f):f.icon})}),hasSubmenuRef:y(()=>{const{value:t}=i;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>re(d,t));const{rawNode:f}=o;return re(f,t)})})});const r=F(null);return H(Fe,null),H(je,null),H(pe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:o}=t;return o.show===!1?null:Qe(o)?l(oo,{tmNode:t,key:t.key}):be(o)?l(ve,{clsPrefix:n,key:t.key}):Ze(o)?l(eo,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key}):l(we,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key,props:o.props,scrollable:i})});return l("div",{class:[`${n}-dropdown-menu`,i&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},i?l(Be,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Re({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),no=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Me(),N("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[D("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),D("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),D("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),D("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[D("content",`
 padding: var(--n-padding);
 `)])]),to={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ro=Object.keys(ce),io=Object.assign(Object.assign(Object.assign({},ce),to),he.props),uo=$({name:"Dropdown",inheritAttrs:!1,props:io,setup(e){const n=F(!1),i=Le(C(e,"show"),n),r=y(()=>{const{keyField:a,childrenField:b}=e;return We(e.options,{getKey(p){return p[a]},getDisabled(p){return p.disabled===!0},getIgnored(p){return p.type==="divider"||p.type==="render"},getChildren(p){return p[b]}})}),t=y(()=>r.value.treeNodes),o=F(null),c=F(null),f=F(null),d=y(()=>{var a,b,p;return(p=(b=(a=o.value)!==null&&a!==void 0?a:c.value)!==null&&b!==void 0?b:f.value)!==null&&p!==void 0?p:null}),m=y(()=>r.value.getPath(d.value).keyPath),v=y(()=>r.value.getPath(e.value).keyPath),g=J(()=>e.keyboard&&i.value);Je({keydown:{ArrowUp:{prevent:!0,handler:Y},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Q},Enter:{prevent:!0,handler:oe},Escape:U}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:P}=Ee(e),I=he("Dropdown","-dropdown",no,qe,e,S);H(Z,{labelFieldRef:C(e,"labelField"),childrenFieldRef:C(e,"childrenField"),renderLabelRef:C(e,"renderLabel"),renderIconRef:C(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:c,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:m,activeKeyPathRef:v,animatedRef:C(e,"animated"),mergedShowRef:i,nodePropsRef:C(e,"nodeProps"),renderOptionRef:C(e,"renderOption"),menuPropsRef:C(e,"menuProps"),doSelect:B,doUpdateShow:x}),ie(i,a=>{!e.animated&&!a&&O()});function B(a,b){const{onSelect:p}=e;p&&te(p,a,b)}function x(a){const{"onUpdate:show":b,onUpdateShow:p}=e;b&&te(b,a),p&&te(p,a),n.value=a}function O(){o.value=null,c.value=null,f.value=null}function U(){x(!1)}function Q(){M("left")}function q(){M("right")}function Y(){M("up")}function ee(){M("down")}function oe(){const a=W();a!=null&&a.isLeaf&&i.value&&(B(a.key,a.rawNode),x(!1))}function W(){var a;const{value:b}=r,{value:p}=d;return!b||p===null?null:(a=b.getNode(p))!==null&&a!==void 0?a:null}function M(a){const{value:b}=d,{value:{getFirstAvailableNode:p}}=r;let u=null;if(b===null){const k=p();k!==null&&(u=k.key)}else{const k=W();if(k){let s;switch(a){case"down":s=k.getNext();break;case"up":s=k.getPrev();break;case"right":s=k.getChild();break;case"left":s=k.getParent();break}s&&(u=s.key)}}u!==null&&(o.value=null,c.value=u)}const L=y(()=>{const{size:a,inverted:b}=e,{common:{cubicBezierEaseInOut:p},self:u}=I.value,{padding:k,dividerColor:s,borderRadius:w,optionOpacityDisabled:R,[T("optionIconSuffixWidth",a)]:z,[T("optionSuffixWidth",a)]:ne,[T("optionIconPrefixWidth",a)]:A,[T("optionPrefixWidth",a)]:me,[T("fontSize",a)]:ge,[T("optionHeight",a)]:xe,[T("optionIconSize",a)]:Se}=u,h={"--n-bezier":p,"--n-font-size":ge,"--n-padding":k,"--n-border-radius":w,"--n-option-height":xe,"--n-option-prefix-width":me,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":z,"--n-option-icon-size":Se,"--n-divider-color":s,"--n-option-opacity-disabled":R};return b?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),_=P?He("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:S,mergedTheme:I,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&O()},doUpdateShow:x,cssVars:P?void 0:L,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const e=(r,t,o,c,f)=>{var d;const{mergedClsPrefix:m,menuProps:v}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(v==null?void 0:v(void 0,this.tmNodes.map(P=>P.rawNode)))||{},S={ref:Ge(t),class:[r,`${m}-dropdown`,this.themeClass],clsPrefix:m,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:f};return l(ye,fe(this.$attrs,S,g))},{mergedTheme:n}=this,i={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Ke,Object.assign({},Ue(this.$props,ro),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{Xe as C,uo as N,Ge as c};
