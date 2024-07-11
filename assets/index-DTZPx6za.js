import{c as g,a as f,b as N,d as $,e as P,u as V,f as E,g as H,p as O,t as F,h as w,i as K,j as k,k as M,l as I,o as q,m as G,n as J,q as U,s as Q,v as X,w as Y,x as Z,y as W,z as x,A as y,B,C as i,D as L,E as T,F as S,G as A,H as ee,I as l,J as C,K as j,L as re,r as te}from"./index-CGAq74Qo.js";import"./isme-7D3668Rn.js";import{_ as oe,a as ne,b as ae,c as se}from"./SideMenu-N880fP6M.js";import{_ as ie}from"./AppCard-EFIT82NQ.js";import{_ as ce,a as le,A as de}from"./ThemeSetting-BfknG__s.js";import{N as me}from"./Dropdown-Cg6BW7Nq.js";import"./index-BRePxQic.js";import"./RadioGroup-DZpKiZip.js";import"./Space-BG_M0rkT.js";import"./Avatar-brC51OoE.js";import"./Menu-DAhsCT31.js";import"./Popover-DhAZ_XRh.js";import"./use-compitable-TQif5LUF.js";import"./next-frame-once-C5Ksf8W7.js";import"./create-D3Vn69pI.js";import"./index-6Uffk3aI.js";import"./Tabs-s_vQY1cb.js";import"./Input-B18i41tj.js";import"./InputGroup-CcXG6-c_.js";const ue=g("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[f("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),f("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),f("&:not(:last-child)",[N("clickable",[$("link",`
 cursor: pointer;
 `,[f("&:hover",`
 background-color: var(--n-item-color-hover);
 `),f("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),$("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[f("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[g("icon",`
 color: var(--n-item-text-color-hover);
 `)]),f("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[g("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),$("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),f("&:last-child",[$("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[g("icon",`
 color: var(--n-item-text-color-active);
 `)]),$("separator",`
 display: none;
 `)])])]),D=M("n-breadcrumb"),pe=Object.assign(Object.assign({},E.props),{separator:{type:String,default:"/"}}),_e=P({name:"Breadcrumb",props:pe,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=V(e),c=E("Breadcrumb","-breadcrumb",ue,H,e,o);O(D,{separatorRef:F(e,"separator"),mergedClsPrefixRef:o});const n=w(()=>{const{common:{cubicBezierEaseInOut:h},self:{separatorColor:b,itemTextColor:d,itemTextColorHover:r,itemTextColorPressed:s,itemTextColorActive:m,fontSize:p,fontWeightActive:u,itemBorderRadius:v,itemColorHover:_,itemColorPressed:R,itemLineHeight:z}}=c.value;return{"--n-font-size":p,"--n-bezier":h,"--n-item-text-color":d,"--n-item-text-color-hover":r,"--n-item-text-color-pressed":s,"--n-item-text-color-active":m,"--n-separator-color":b,"--n-item-color-hover":_,"--n-item-color-pressed":R,"--n-item-border-radius":v,"--n-font-weight-active":u,"--n-item-line-height":z}}),a=t?K("breadcrumb",void 0,n,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:n,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),k("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},k("ul",null,this.$slots))}}),fe=(e=J?window:null)=>{const o=()=>{const{hash:n,host:a,hostname:h,href:b,origin:d,pathname:r,port:s,protocol:m,search:p}=(e==null?void 0:e.location)||{};return{hash:n,host:a,hostname:h,href:b,origin:d,pathname:r,port:s,protocol:m,search:p}},t=()=>{c.value=o()},c=I(o());return q(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),G(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),c},he={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},be=P({name:"BreadcrumbItem",props:he,setup(e,{slots:o}){const t=U(D,null);if(!t)return()=>null;const{separatorRef:c,mergedClsPrefixRef:n}=t,a=fe(),h=w(()=>e.href?"a":"span"),b=w(()=>a.value.href===e.href?"location":null);return()=>{const{value:d}=n;return k("li",{class:[`${d}-breadcrumb-item`,e.clickable&&`${d}-breadcrumb-item--clickable`]},k(h.value,{class:`${d}-breadcrumb-item__link`,"aria-current":b.value,href:e.href,onClick:e.onClick},o),k("span",{class:`${d}-breadcrumb-item__separator`,"aria-hidden":"true"},Q(o.separator,()=>{var r;return[(r=e.separator)!==null&&r!==void 0?r:c.value]})))}}}),ve={class:"flex items-center"},xe={__name:"BreadCrumb",setup(e){const o=X(),t=Y(),c=Z(),n=I([]);W(()=>t.name,r=>{n.value=a(c.permissions,r)},{immediate:!0});function a(r,s,m=[]){var p;for(const u of r){if(u.code===s)return[...m,u];if((p=u.children)!=null&&p.length){const v=a(u.children,s,[...m,u]);if(v)return v}}return null}function h(r){r.path&&r.code!==t.name&&o.push(r.path)}function b(r=[]){return r.filter(s=>s.show).map(s=>({label:s.name,key:s.code,icon:()=>k("i",{class:s.icon})}))}function d(r){r&&r!==t.name&&o.push({name:r})}return(r,s)=>{const m=be,p=me,u=_e;return x(),y(u,null,{default:B(()=>{var v;return[(v=i(n))!=null&&v.length?(x(!0),S(A,{key:1},ee(i(n),(_,R)=>(x(),y(m,{key:_.code,clickable:!!_.path,onClick:z=>h(_)},{default:B(()=>[l(p,{options:R<i(n).length-1?b(_.children):[],onSelect:d},{default:B(()=>[C("div",ve,[C("i",{class:j([_.icon,"mr-8"])},null,2),L(" "+T(_.name),1)])]),_:2},1032,["options"])]),_:2},1032,["clickable","onClick"]))),128)):(x(),y(m,{key:0,clickable:!1},{default:B(()=>[L(T(i(t).meta.title),1)]),_:1}))]}),_:1})}}},ge={__name:"index",setup(e){return(o,t)=>(x(),S(A,null,[l(i(oe),{"border-b":"1px solid light_border dark:dark_border"}),l(i(ne),{class:"cus-scroll-y mt-4 h-0 flex-1"})],64))}},ke={class:"ml-auto flex flex-shrink-0 items-center px-12 text-18"},Ce={__name:"index",setup(e){return(o,t)=>{const c=le,n=ie;return x(),y(n,{class:"flex items-center px-12","border-b":"1px solid light_border dark:dark_border"},{default:B(()=>[l(i(ae)),l(i(xe)),C("div",ke,[l(i(ce)),l(c,{class:"mr-16"}),l(i(se))])]),_:1})}}},$e={class:"wh-full flex"},Be={class:"w-0 flex-col flex-1"},ye={class:"p-12","border-b":"1px solid light_border dark:dark_border"},qe={__name:"index",setup(e){const o=re();return(t,c)=>(x(),S("div",$e,[C("aside",{class:j(["flex-col flex-shrink-0 transition-width-300",i(o).collapsed?"w-64":"w-220"]),"border-r":"1px solid light_border dark:dark_border"},[l(ge)],2),C("article",Be,[l(Ce,{class:"h-60 flex-shrink-0"}),C("div",ye,[l(i(de),{class:"flex-shrink-0"})]),te(t.$slots,"default")])]))}};export{qe as default};
