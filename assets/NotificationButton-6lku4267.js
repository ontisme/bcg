import{_ as v,bQ as k,v as g,h as l,o as b,z as n,F as s,I as o,B as t,C as e,ab as d,be as f,E as x,ai as B,J as _,bE as I,G as S,H as C,A as w,D as y,al as A,am as R}from"./index-BQnRnkpm.js";import V from"./NotificationItem-DAUAM5QF.js";import{N as E}from"./Popover-BzX9Onon.js";import{N as L,a as D}from"./ListItem-i01tgV9K.js";import"./use-compitable-CRW7w5Mj.js";import"./next-frame-once-C5Ksf8W7.js";const F=a=>(A("data-v-7ea43c34"),a=a(),R(),a),M={class:"notification-button"},P={key:0},T={class:"notification-popover"},W=F(()=>_("h3",null,"Recent Notifications",-1)),z={__name:"NotificationButton",setup(a){const i=k(),m=g(),c=l(()=>i.unreadCount),p=l(()=>i.recentNotifications);function h(r){i.markAsRead(r)}function N(){m.push("/notification")}return b(()=>{i.syncWithWebsocket()}),(r,G)=>(n(),s("div",M,[o(e(E),{trigger:"click",placement:"bottom"},{trigger:t(()=>[o(e(d),{circle:""},{icon:t(()=>[o(e(f),{icon:"mdi:bell-outline",width:24})]),default:t(()=>[c.value>0?(n(),s("div",P,x(c.value),1)):B("",!0)]),_:1})]),default:t(()=>[_("div",T,[W,o(e(I),{style:{"max-height":"300px"}},{default:t(()=>[o(e(L),null,{default:t(()=>[(n(!0),s(S,null,C(p.value,u=>(n(),w(e(D),{key:u.id},{default:t(()=>[o(V,{notification:u,onMarkAsRead:h},null,8,["notification"])]),_:2},1024))),128))]),_:1})]),_:1}),o(e(d),{text:"",onClick:N},{icon:t(()=>[o(e(f),{icon:"mdi:chevron-right",width:16})]),default:t(()=>[y(" View All Notifications ")]),_:1})])]),_:1})]))}},O=v(z,[["__scopeId","data-v-7ea43c34"]]);export{O as default};
