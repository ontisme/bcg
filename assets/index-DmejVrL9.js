import{bm as k,_ as R,as as T,v as A,bn as M,ap as V,l as v,ag as z,z as E,F as K,J as r,E as m,I as o,B as s,bo as P,ab as W,C as a,be as I,D as _,al as Y,am as G,bp as S,bq as J}from"./index-BQnRnkpm.js";import{L as j,_ as H}from"./isme-Bs1aRysI.js";import{_ as O}from"./Checkbox-CzFENL16.js";import{_ as Q,a as X}from"./FormItem-BnBh4FZr.js";import{_ as Z}from"./Input-CjvOyjRT.js";import"./Dropdown-DtIUeDjB.js";import"./Popover-BzX9Onon.js";import"./use-compitable-CRW7w5Mj.js";import"./next-frame-once-C5Ksf8W7.js";import"./create-D3Vn69pI.js";const ee={toggleRole:t=>k.post("/auth/role/toggle",t),login:t=>k.post("/auth/login",t,{needToken:!1}),getUser:()=>k.get("/user/detail")},oe=t=>(Y("data-v-cee0ac05"),t=t(),G(),t),se={class:"login-container"},ne={class:"login-content"},ae={class:"header"},te=oe(()=>r("img",{src:H,alt:"Logo",class:"logo"},null,-1)),le={class:"flex-between"},re={class:"footer"},ie="BCGAssistant",ce={__name:"index",setup(t){const{t:n}=T(),$=A(),C=M(),y=V(),b=v(null),c=v(!1),h=v(!1),i=z({username:"",password:""}),L={username:{required:!0,message:n("login.pleaseInputYourUsername"),trigger:"blur"},password:{required:!0,message:n("login.pleaseInputYourPassword"),trigger:"blur"}};function x(u){var e;u.preventDefault(),(e=b.value)==null||e.validate(async l=>{if(l)$message.error(n("login.fillAllFields"));else{c.value=!0;try{await y.login(i.username,i.password),$message.success(n("login.loginSuccessful")),$.push("/")}catch(d){$message.error(d.message||n("login.loginFailed"))}finally{c.value=!1}}})}function B(){window.open("https://lovesa.cc","_blank")}const w=v({username:"",password:""});function q(){w.value.username="admin",w.value.password="123456",U(!0)}async function U(u){const{username:e,password:l,captcha:d}=w.value;if(!e||!l)return $message.warning("請輸入用戶名和密碼");try{c.value=!0,$message.loading("正在驗證，請稍後...",{key:"login"});const{data:g}=await ee.login({username:e,password:l.toString(),captcha:d,isQuick:u});h.value?S.set("loginInfo",{username:e,password:l}):S.remove("loginInfo"),D(g)}catch(g){$message.destroy("login"),console.error(g)}c.value=!1}async function D(u={}){y.setToken(u),$message.loading("登入中...",{key:"login"});try{$message.success("登入成功",{key:"login"}),window.location.reload()}catch(e){console.error(e),$message.destroy("login")}}return(u,e)=>{const l=J,d=Z,g=X,F=O,f=W,N=Q;return E(),K("div",se,[r("div",ne,[r("div",ae,[r("div",{class:"logo-title"},[te,r("h1",null,m(ie))]),r("div",null,[o(j)])]),o(N,{ref_key:"formRef",ref:b,model:i,rules:L,size:"large",onKeydown:P(x,["enter"])},{default:s(()=>[o(g,{path:"username"},{default:s(()=>[o(d,{value:i.username,"onUpdate:value":e[0]||(e[0]=p=>i.username=p),placeholder:a(n)("login.username")},{prefix:s(()=>[o(l,null,{default:s(()=>[o(a(I),{icon:"mdi:account"})]),_:1})]),_:1},8,["value","placeholder"])]),_:1}),o(g,{path:"password"},{default:s(()=>[o(d,{value:i.password,"onUpdate:value":e[1]||(e[1]=p=>i.password=p),type:"password","show-password-on":"click",placeholder:a(n)("login.password")},{prefix:s(()=>[o(l,null,{default:s(()=>[o(a(I),{icon:"mdi:lock"})]),_:1})]),_:1},8,["value","placeholder"])]),_:1}),r("div",le,[o(F,{checked:h.value,"onUpdate:checked":e[2]||(e[2]=p=>h.value=p)},{default:s(()=>[_(m(a(n)("login.rememberMe")),1)]),_:1},8,["checked"]),o(f,{text:"","on-click":()=>a(C).info("Coming soon")},{default:s(()=>[_(m(a(n)("login.forgotPassword")),1)]),_:1},8,["on-click"])]),o(f,{type:"primary",block:"",loading:c.value,onClick:x},{default:s(()=>[_(m(a(n)("login.login")),1)]),_:1},8,["loading"]),o(f,{type:"primary",block:"",loading:c.value,onClick:q},{default:s(()=>[_(" Demo Login ")]),_:1},8,["loading"])]),_:1},8,["model"]),r("div",re,[o(f,{text:"",onClick:B},{default:s(()=>[_(m(a(n)("login.visitWebsite")),1)]),_:1})])])])}}},ke=R(ce,[["__scopeId","data-v-cee0ac05"]]);export{ke as default};
