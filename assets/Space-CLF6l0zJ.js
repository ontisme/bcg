import{cZ as G,n as R,e as j,f as C,u as E,aB as _,h as I,a4 as M,c_ as P,aK as w,bl as T,j as S,c$ as A}from"./index-BQnRnkpm.js";function L(e,n="default",i=[]){const t=e.$slots[n];return t===void 0?i:t()}const O=()=>G,W={name:"Space",self:O};let h;const D=()=>{if(!R)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h},F=Object.assign(Object.assign({},C.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),K=j({name:"Space",props:F,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:i}=E(e),c=C("Space","-space",void 0,W,e,n),t=_("Space",i,n);return{useGap:D(),rtlEnabled:t,mergedClsPrefix:n,margin:I(()=>{const{size:r}=e;if(Array.isArray(r))return{horizontal:r[0],vertical:r[1]};if(typeof r=="number")return{horizontal:r,vertical:r};const{self:{[M("gap",r)]:f}}=c.value,{row:a,col:g}=P(f);return{horizontal:w(g),vertical:w(a)}})}},render(){const{vertical:e,reverse:n,align:i,inline:c,justify:t,itemClass:r,itemStyle:f,margin:a,wrap:g,mergedClsPrefix:v,rtlEnabled:x,useGap:l,wrapItem:B,internalUseGap:$}=this,u=T(L(this),!1);if(!u.length)return null;const b=`${a.horizontal}px`,m=`${a.horizontal/2}px`,z=`${a.vertical}px`,o=`${a.vertical/2}px`,p=u.length-1,d=t.startsWith("space-");return S("div",{role:"none",class:[`${v}-space`,x&&`${v}-space--rtl`],style:{display:c?"inline-flex":"flex",flexDirection:e&&!n?"column":e&&n?"column-reverse":!e&&n?"row-reverse":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!g||e?"nowrap":"wrap",marginTop:l||e?"":`-${o}`,marginBottom:l||e?"":`-${o}`,alignItems:i,gap:l?`${a.vertical}px ${a.horizontal}px`:""}},!B&&(l||$)?u:u.map((y,s)=>y.type===A?y:S("div",{role:"none",class:r,style:[f,{maxWidth:"100%"},l?"":e?{marginBottom:s!==p?z:""}:x?{marginLeft:d?t==="space-between"&&s===p?"":m:s!==p?b:"",marginRight:d?t==="space-between"&&s===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:d?t==="space-between"&&s===p?"":m:s!==p?b:"",marginLeft:d?t==="space-between"&&s===0?"":m:"",paddingTop:o,paddingBottom:o}]},y)))}});export{K as _,L as g};
