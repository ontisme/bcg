import{e as O,j as u,u as pe,f as U,l as M,h as b,bY as Oe,k as G,q as F,p as L,bJ as K,G as Te,aC as Ee,aR as Q,bZ as Me,ay as Z,ax as oe,a as x,c as g,b as z,d as f,aA as _,b_ as Fe,V as se,t as ve,a3 as ue,aa as T,i as Ke,aY as ke,aS as _e,b$ as Le}from"./index-DelEC5j5.js";import{N as je}from"./Dropdown-BlDdoP8p.js";import{N as $e,p as Be}from"./Popover-CfLr5fhY.js";import{c as J}from"./create-D3Vn69pI.js";import{u as Ve}from"./use-compitable-BZ-6egnN.js";import{V as De}from"./index-plJYE0L7.js";const Ue=O({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ge=Object.assign(Object.assign({},Be),U.props),qe=O({name:"Tooltip",props:Ge,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=pe(e),r=U("Tooltip","-tooltip",void 0,Oe,e,n),l=M(null);return Object.assign(Object.assign({},{syncPosition(){l.value.syncPosition()},setShow(d){l.value.setShow(d)}}),{popoverRef:l,mergedTheme:r,popoverThemeOverrides:b(()=>r.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return u($e,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),We=G("n-layout-sider"),vo={type:String,default:"static"},j=G("n-menu"),te=G("n-submenu"),re=G("n-menu-item-group"),D=8;function ne(e){const n=F(j),{props:r,mergedCollapsedRef:l}=n,c=F(te,null),d=F(re,null),s=b(()=>r.mode==="horizontal"),p=b(()=>s.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),v=b(()=>{var m;return Math.max((m=r.collapsedIconSize)!==null&&m!==void 0?m:r.iconSize,r.iconSize)}),I=b(()=>{var m;return!s.value&&e.root&&l.value&&(m=r.collapsedIconSize)!==null&&m!==void 0?m:r.iconSize}),N=b(()=>{if(s.value)return;const{collapsedWidth:m,indent:w,rootIndent:P}=r,{root:R,isGroup:A}=e,H=P===void 0?w:P;return R?l.value?m/2-v.value/2:H:d&&typeof d.paddingLeftRef.value=="number"?w/2+d.paddingLeftRef.value:c&&typeof c.paddingLeftRef.value=="number"?(A?w/2:w)+c.paddingLeftRef.value:0}),y=b(()=>{const{collapsedWidth:m,indent:w,rootIndent:P}=r,{value:R}=v,{root:A}=e;return s.value||!A||!l.value?D:(P===void 0?w:P)+R+D-(m+R)/2});return{dropdownPlacement:p,activeIconSize:I,maxIconSize:v,paddingLeft:N,iconMarginRight:y,NMenu:n,NSubmenu:c}}const ie={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},fe=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ye=O({name:"MenuOptionGroup",props:fe,setup(e){L(te,null);const n=ne(e);L(re,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:r,props:l}=F(j);return function(){const{value:c}=r,d=n.paddingLeft.value,{nodeProps:s}=l,p=s==null?void 0:s(e.tmNode.rawNode);return u("div",{class:`${c}-menu-item-group`,role:"group"},u("div",Object.assign({},p,{class:[`${c}-menu-item-group-title`,p==null?void 0:p.class],style:[(p==null?void 0:p.style)||"",d!==void 0?`padding-left: ${d}px;`:""]}),K(e.title),e.extra?u(Te,null," ",K(e.extra)):null),u("div",null,e.tmNodes.map(v=>le(v,l))))}}}),ge=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=F(j);return{menuProps:n,style:b(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:b(()=>{const{maxIconSize:r,activeIconSize:l,iconMarginRight:c}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${l}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:r,renderLabel:l,renderExtra:c,expandIcon:d}}=this,s=r?r(n.rawNode):K(this.icon);return u("div",{onClick:p=>{var v;(v=this.onClick)===null||v===void 0||v.call(this,p)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:l?l(n.rawNode):K(this.title),this.extra||c?u("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(n.rawNode):K(this.extra)):null),this.showArrow?u(Ee,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>d?d(n.rawNode):u(Ue,null)}):null)}}),xe=Object.assign(Object.assign({},ie),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),X=O({name:"Submenu",props:xe,setup(e){const n=ne(e),{NMenu:r,NSubmenu:l}=n,{props:c,mergedCollapsedRef:d,mergedThemeRef:s}=r,p=b(()=>{const{disabled:m}=e;return l!=null&&l.mergedDisabledRef.value||c.disabled?!0:m}),v=M(!1);L(te,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:p}),L(re,null);function I(){const{onClick:m}=e;m&&m()}function N(){p.value||(d.value||r.toggleExpand(e.internalKey),I())}function y(m){v.value=m}return{menuProps:c,mergedTheme:s,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:v,paddingLeft:n.paddingLeft,mergedDisabled:p,mergedValue:r.mergedValueRef,childActive:Q(()=>{var m;return(m=e.virtualChildActive)!==null&&m!==void 0?m:r.activePathRef.value.includes(e.internalKey)}),collapsed:b(()=>c.mode==="horizontal"?!1:d.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!p.value&&(c.mode==="horizontal"||d.value)),handlePopoverShowChange:y,handleClick:N}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:r,renderLabel:l}}=this,c=()=>{const{isHorizontal:s,paddingLeft:p,collapsed:v,mergedDisabled:I,maxIconSize:N,activeIconSize:y,title:m,childActive:w,icon:P,handleClick:R,menuProps:{nodeProps:A},dropdownShow:H,iconMarginRight:q,tmNode:k,mergedClsPrefix:$,isEllipsisPlaceholder:W,extra:B}=this,S=A==null?void 0:A(k.rawNode);return u("div",Object.assign({},S,{class:[`${$}-menu-item`,S==null?void 0:S.class],role:"menuitem"}),u(ge,{tmNode:k,paddingLeft:p,collapsed:v,disabled:I,iconMarginRight:q,maxIconSize:N,activeIconSize:y,title:m,extra:B,showArrow:!s,childActive:w,clsPrefix:$,icon:P,hover:H,onClick:R,isEllipsisPlaceholder:W}))},d=()=>u(Me,null,{default:()=>{const{tmNodes:s,collapsed:p}=this;return p?null:u("div",{class:`${n}-submenu-children`,role:"menu"},s.map(v=>le(v,this.menuProps)))}});return this.root?u(je,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:l}),{default:()=>u("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),this.isHorizontal?null:d())}):u("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),d())}}),be=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ze=O({name:"MenuOption",props:be,setup(e){const n=ne(e),{NSubmenu:r,NMenu:l}=n,{props:c,mergedClsPrefixRef:d,mergedCollapsedRef:s}=l,p=r?r.mergedDisabledRef:{value:!1},v=b(()=>p.value||e.disabled);function I(y){const{onClick:m}=e;m&&m(y)}function N(y){v.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),I(y))}return{mergedClsPrefix:d,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:c,dropdownEnabled:Q(()=>e.root&&s.value&&c.mode!=="horizontal"&&!v.value),selected:Q(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:v,handleClick:N}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:r,menuProps:{renderLabel:l,nodeProps:c}}=this,d=c==null?void 0:c(r.rawNode);return u("div",Object.assign({},d,{role:"menuitem",class:[`${e}-menu-item`,d==null?void 0:d.class]}),u(qe,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(r.rawNode):K(this.title),trigger:()=>u(ge,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Je=O({name:"MenuDivider",setup(){const e=F(j),{mergedClsPrefixRef:n,isHorizontalRef:r}=e;return()=>r.value?null:u("div",{class:`${n.value}-menu-divider`})}}),Qe=oe(fe),Xe=oe(be),eo=oe(xe);function ee(e){return e.type==="divider"||e.type==="render"}function oo(e){return e.type==="divider"}function le(e,n){const{rawNode:r}=e,{show:l}=r;if(l===!1)return null;if(ee(r))return oo(r)?u(Je,Object.assign({key:e.key},r.props)):null;const{labelField:c}=n,{key:d,level:s,isGroup:p}=e,v=Object.assign(Object.assign({},r),{title:r.title||r[c],extra:r.titleExtra||r.extra,key:d,internalKey:d,level:s,root:s===0,isGroup:p});return e.children?e.isGroup?u(Ye,Z(v,Qe,{tmNode:e,tmNodes:e.children,key:d})):u(X,Z(v,eo,{key:d,rawNodes:r[n.childrenField],tmNodes:e.children,tmNode:e})):u(Ze,Z(v,Xe,{key:d,tmNode:e}))}const me=[x("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],he=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],to=x([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[z("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),_("disabled",[_("selected, child-active",[x("&:focus-within",he)]),z("selected",[E(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[E(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),E("border-bottom: 2px solid var(--n-border-color-horizontal);",he)]),g("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),_("responsive",[g("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),z("collapsed",[g("menu-item-content",[z("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[f("arrow","transform: rotate(0);")]),z("selected",[x("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),_("disabled",[_("selected, child-active",[x("&:focus-within",me)]),z("selected",[E(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[E(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[E(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),E(null,me)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Fe({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function E(e,n){return[z("hover",e,n),x("&:hover",e,n)]}const ro=Object.assign(Object.assign({},U.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),uo=O({name:"Menu",props:ro,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=pe(e),l=U("Menu","-menu",to,Le,e,n),c=F(We,null),d=b(()=>{var i;const{collapsed:h}=e;if(h!==void 0)return h;if(c){const{collapseModeRef:o,collapsedRef:a}=c;if(o.value==="width")return(i=a.value)!==null&&i!==void 0?i:!1}return!1}),s=b(()=>{const{keyField:i,childrenField:h,disabledField:o}=e;return J(e.items||e.options,{getIgnored(a){return ee(a)},getChildren(a){return a[h]},getDisabled(a){return a[o]},getKey(a){var C;return(C=a[i])!==null&&C!==void 0?C:a.name}})}),p=b(()=>new Set(s.value.treeNodes.map(i=>i.key))),{watchProps:v}=e,I=M(null);v!=null&&v.includes("defaultValue")?se(()=>{I.value=e.defaultValue}):I.value=e.defaultValue;const N=ve(e,"value"),y=ue(N,I),m=M([]),w=()=>{m.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(y.value,{includeSelf:!1}).keyPath};v!=null&&v.includes("defaultExpandedKeys")?se(w):w();const P=Ve(e,["expandedNames","expandedKeys"]),R=ue(P,m),A=b(()=>s.value.treeNodes),H=b(()=>s.value.getPath(y.value).keyPath);L(j,{props:e,mergedCollapsedRef:d,mergedThemeRef:l,mergedValueRef:y,mergedExpandedKeysRef:R,activePathRef:H,mergedClsPrefixRef:n,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ve(e,"inverted"),doSelect:q,toggleExpand:$});function q(i,h){const{"onUpdate:value":o,onUpdateValue:a,onSelect:C}=e;a&&T(a,i,h),o&&T(o,i,h),C&&T(C,i,h),I.value=i}function k(i){const{"onUpdate:expandedKeys":h,onUpdateExpandedKeys:o,onExpandedNamesChange:a,onOpenNamesChange:C}=e;h&&T(h,i),o&&T(o,i),a&&T(a,i),C&&T(C,i),m.value=i}function $(i){const h=Array.from(R.value),o=h.findIndex(a=>a===i);if(~o)h.splice(o,1);else{if(e.accordion&&p.value.has(i)){const a=h.findIndex(C=>p.value.has(C));a>-1&&h.splice(a,1)}h.push(i)}k(h)}const W=i=>{const h=s.value.getPath(i??y.value,{includeSelf:!1}).keyPath;if(!h.length)return;const o=Array.from(R.value),a=new Set([...o,...h]);e.accordion&&p.value.forEach(C=>{a.has(C)&&!h.includes(C)&&a.delete(C)}),k(Array.from(a))},B=b(()=>{const{inverted:i}=e,{common:{cubicBezierEaseInOut:h},self:o}=l.value,{borderRadius:a,borderColorHorizontal:C,fontSize:Ne,itemHeight:Ae,dividerColor:He}=o,t={"--n-divider-color":He,"--n-bezier":h,"--n-font-size":Ne,"--n-border-color-horizontal":C,"--n-border-radius":a,"--n-item-height":Ae};return i?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),S=r?Ke("menu",b(()=>e.inverted?"a":"b"),B,e):void 0,Y=ke(),ae=M(null),Ce=M(null);let ce=!0;const de=()=>{var i;ce?ce=!1:(i=ae.value)===null||i===void 0||i.sync({showAllItemsBeforeCalculate:!0})};function ze(){return document.getElementById(Y)}const V=M(-1);function ye(i){V.value=e.options.length-i}function Ie(i){i||(V.value=-1)}const we=b(()=>{const i=V.value;return{children:i===-1?[]:e.options.slice(i)}}),Re=b(()=>{const{childrenField:i,disabledField:h,keyField:o}=e;return J([we.value],{getIgnored(a){return ee(a)},getChildren(a){return a[i]},getDisabled(a){return a[h]},getKey(a){var C;return(C=a[o])!==null&&C!==void 0?C:a.name}})}),Se=b(()=>J([{}]).treeNodes[0]);function Pe(){var i;if(V.value===-1)return u(X,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Se.value,domId:Y,isEllipsisPlaceholder:!0});const h=Re.value.treeNodes[0],o=H.value,a=!!(!((i=h.children)===null||i===void 0)&&i.some(C=>o.includes(C.key)));return u(X,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:a,tmNode:h,domId:Y,rawNodes:h.rawNode.children||[],tmNodes:h.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:P,uncontrolledExpanededKeys:m,mergedExpandedKeys:R,uncontrolledValue:I,mergedValue:y,activePath:H,tmNodes:A,mergedTheme:l,mergedCollapsed:d,cssVars:r?void 0:B,themeClass:S==null?void 0:S.themeClass,overflowRef:ae,counterRef:Ce,updateCounter:()=>{},onResize:de,onUpdateOverflow:Ie,onUpdateCount:ye,renderCounter:Pe,getCounter:ze,onRender:S==null?void 0:S.onRender,showOption:W,deriveResponsiveState:de}},render(){const{mergedClsPrefix:e,mode:n,themeClass:r,onRender:l}=this;l==null||l();const c=()=>this.tmNodes.map(v=>le(v,this.$props)),s=n==="horizontal"&&this.responsive,p=()=>u("div",{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${n}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},s?u(De,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:c,counter:this.renderCounter}):c());return s?u(_e,{onResize:this.onResize},{default:p}):p()}});export{qe as N,uo as a,We as l,vo as p};
