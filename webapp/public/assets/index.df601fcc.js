var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,i=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&r(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&r(e,a,t[a]);return e},c=(e,n)=>t(e,a(n)),o=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&n)for(var r of n(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};import{r as m,R as u,a as d,M as p,L as E,I as f,T as g,b as x,u as v,c as h,d as y,e as b,f as w,g as N,F as _,G as C,_ as D,h as S,i as j,S as k,j as $,B as I,k as O}from"./vendor.f1db1b60.js";const T={me:null},P=m.exports.createContext(T),q=m.exports.createContext(null),z=(e,t)=>{switch(t.type){case"login":return c(i({},e),{me:t.user});case"logout":return c(i({},e),{me:null});default:throw new Error("invalid action")}},U=({children:e})=>{const[t,a]=m.exports.useReducer(z,T);return u.createElement(P.Provider,{value:t},u.createElement(q.Provider,{value:a},e))},G=()=>{const e=m.exports.useContext(P);if(!e)throw new Error("require wrapped by stateContext");return e},L=()=>{const e=m.exports.useContext(q);if(!e)throw new Error("require wrapped by stateContext");return e},M=({children:e})=>u.createElement("div",{className:"text-white-primary font-bold"},e),A=()=>new Date,F=e=>Math.floor(e.getTime()/1e3),V=e=>new Date(1e3*e),B=e=>`${e.getFullYear()}/${R(e.getMonth()+1)}/${R(e.getDate())} ${R(e.getHours())}:${R(e.getMinutes())}:${R(e.getSeconds())}`,R=e=>("0"+e).slice(-2);const Z=new class{async postAuth(e,t){await d.post("/api/auth",{},i({headers:{Authorization:`Bearer ${e}`}},t))}async postSignout(e){await d.post("/api/signout",e)}async getUserMe(e){const{data:t}=await d.get("/api/user/me",e);return t}async getIsus(e,t){const{data:a}=await d.get("/api/isu",i({params:e},t)),n=[];for(const l of a)n.push(c(i({},l),{latest_isu_condition:l.latest_isu_condition?c(i({},l.latest_isu_condition),{date:V(l.latest_isu_condition.timestamp)}):null}));return n}async postIsu(e,t){const a=new FormData;a.append("jia_isu_uuid",e.jia_isu_uuid),a.append("isu_name",e.isu_name),e.image&&a.append("image",e.image,e.image.name),await d.post("/api/isu",a,i({headers:{"content-type":"multipart/form-data"}},t))}async getIsu(e,t){const{data:a}=await d.get(`/api/isu/${e}`,t);return a}async deleteIsu(e,t){await d.delete(`/api/isu/${e}`,t)}async getIsuGraphs(e,t,a){const n={datetime:F(t.date)},{data:l}=await d.get(`/api/isu/${e}/graph`,i({params:n},a)),s=[];return l.forEach((e=>{s.push(c(i({},e),{start_at:V(e.start_at),end_at:V(e.end_at)}))})),s}async getIsuConditions(e,t,a){const n=c(i({},t),{start_time:t.start_time?F(t.start_time):void 0,end_time:F(t.end_time)}),{data:l}=await d.get(`/api/condition/${e}`,i({params:n},a)),s=[];return l.forEach((e=>{s.push(c(i({},e),{date:V(e.timestamp)}))})),s}async getTrend(e){const{data:t}=await d.get("/api/trend",i({},e)),a=[];return t.forEach((e=>{const t=[],n=[],l=[];e.info.forEach((e=>{t.push(c(i({},e),{date:V(e.timestamp)}))})),e.warning.forEach((e=>{n.push(c(i({},e),{date:V(e.timestamp)}))})),e.critical.forEach((e=>{l.push(c(i({},e),{date:V(e.timestamp)}))})),a.push(c(i({},e),{info:t,warning:n,critical:l}))})),a}},J=e=>{const t=L();return u.createElement(p,{isOpen:e.isOpen,onRequestClose:e.toggle,className:"top-18 bg-gray-50 absolute right-0 flex justify-items-center px-6 py-3 border border-outline rounded",overlayClassName:"fixed inset-0",shouldCloseOnOverlayClick:!0},u.createElement(E,{to:"/",onClick:async()=>{await Z.postSignout(),t({type:"logout"})},className:"flex items-center text-primary"},u.createElement(f,{className:"mr-1",size:16}),u.createElement("div",null,"logout")))},H=e=>u.createElement(M,null,u.createElement(E,{to:e.to,className:"flex items-center"},e.icon,u.createElement("div",{className:"ml-1"},e.label))),K=()=>{const[e,t]=m.exports.useState(!1),a=()=>{t(!e)},n=G().me;return n?u.createElement("div",{className:"w-52 flex items-center justify-between ml-auto"},u.createElement(H,{to:"/register",label:"ISUの登録",icon:u.createElement(g,null)}),u.createElement("div",{className:"border-l-1 pl-4 border-white"},u.createElement(M,null,u.createElement("div",{className:"flex items-center cursor-pointer",onClick:a},u.createElement(x,null),u.createElement("div",{className:"ml-1"},n.jia_user_id)))),u.createElement(J,{isOpen:e,toggle:a})):u.createElement(u.Fragment,null)};const X=()=>u.createElement("header",{className:"h-18 flex items-center pl-6 pr-8 bg-accent-primary"},u.createElement(E,{to:"/"},u.createElement("img",{src:"/assets/logo_white.98008342.svg",alt:"isucondition",className:"h-11 cursor-pointer"})),u.createElement(K,null)),Y=({children:e})=>u.createElement("div",{className:"px-16 py-12 w-full max-w-4xl bg-secondary border border-outline rounded"},e);const Q=()=>u.createElement(Y,null,u.createElement("div",{className:"flex flex-col items-center w-full"},u.createElement("img",{src:"/assets/logo_orange.974bf3e6.svg",alt:"isucondition",className:"my-2 max-w-sm"}),u.createElement("div",{className:"mt-4 text-lg"},"ISUとつくる新しい明日"),u.createElement("div",{className:"mt-16 w-full border-b border-outline"}),u.createElement("button",{className:"mt-10 px-5 py-2 h-12 text-white-primary font-bold bg-button rounded-3xl",onClick:async()=>{location.href=`${location.protocol}//${document.domain}:5000?callback=${location.protocol}//${location.host}`}},"JIAのアカウントでログイン"))),W=({isu:e})=>u.createElement(E,{to:`/isu/${e.jia_isu_uuid}`,className:"flex flex-col items-center"},u.createElement("img",{src:`/api/isu/${e.jia_isu_uuid}/icon`,className:"w-48 h-48 object-contain",key:e.jia_isu_uuid}),u.createElement("h3",null,e.name)),ee=({variant:e,label:t})=>{const a=`h-6 rounded-2xl px-4 font-medium text-center ${(()=>{switch(e){case"info":return"bg-status-info text-status-info";case"warning":return"bg-status-warning text-status-warning";case"sitting":return"bg-status-sitting text-status-sitting";case"critical":return"bg-status-critical text-status-critical"}})()}`;return u.createElement("div",{className:a},null!=t?t:e)},te=({isus:e})=>u.createElement("div",{className:"grid gap-8 grid-cols-isus w-full"},e.map((e=>u.createElement("div",{key:e.jia_isu_uuid,className:"flex flex-col items-center"},u.createElement(W,{isu:e}),e.latest_isu_condition?u.createElement("div",null,B(e.latest_isu_condition.date)):null,e.latest_isu_condition?u.createElement(ee,{variant:e.latest_isu_condition.condition_level}):null)))),ae=()=>{const[e,t]=m.exports.useState([]);return m.exports.useEffect((()=>{(async()=>{t(await Z.getIsus({limit:4}))})()}),[t]),u.createElement("div",null,u.createElement("h2",{className:"mb-6 text-xl font-bold"},"ISU"),u.createElement(te,{isus:e}),u.createElement("div",{className:"flex gap-12 items-center justify-center mt-8"}))},ne=()=>{const e="bg-accent-primary opacity-80 w-4 h-35 m-2 rounded-md inline-block";return u.createElement("div",{className:"flex h-100 justify-center items-center"},u.createElement("span",null,u.createElement("span",{className:e+" animate-loader0"}),u.createElement("span",{className:e+" animate-loader1"}),u.createElement("span",{className:e+" animate-loader2"}),u.createElement("span",{className:e+" animate-loader3"}),u.createElement("span",{className:e+" animate-loader4"})))},le=(e,t)=>`${Math.round(e/t*100)}%`,se=({trend:e,maxConditionCount:t})=>u.createElement("div",{className:"flex items-center w-full h-4"},u.createElement("div",{className:"h-full bg-status-info",style:{width:le(e.info.length,t)}}),u.createElement("div",{className:"h-full bg-status-warning",style:{width:le(e.warning.length,t)}}),u.createElement("div",{className:"h-full bg-status-critical",style:{width:le(e.critical.length,t)}})),re=({trend:e,maxConditionCount:t})=>u.createElement("div",{className:"grid grid-cols-trend p-2"},u.createElement("div",{className:"flex flex-col"},u.createElement("div",null,e.character),u.createElement("div",{className:"text-secondary"},(e=>{let t=null;for(const a of[e.info,e.warning,e.critical].flat())(!t||t<a.date)&&(t=a.date);return t?B(t):"no data"})(e))),u.createElement("div",{className:"flex items-center"},u.createElement(se,{trend:e,maxConditionCount:t}))),ie=()=>u.createElement("div",{className:"grid grid-cols-trend p-2"},u.createElement("div",{className:"flex justify-center"},u.createElement("div",null,"せいかく")),u.createElement("div",{className:"flex gap-4 items-center justify-center"},u.createElement(ee,{variant:"info",label:"バッチリ"}),u.createElement(ee,{variant:"warning",label:"ぼちぼち"}),u.createElement(ee,{variant:"critical",label:"こわれた"}))),ce=e=>e.info.length+e.warning.length+e.critical.length,oe=()=>{const[e,t]=m.exports.useState([]),[a,n]=m.exports.useState(0);return m.exports.useEffect((()=>{(async()=>{const e=await Z.getTrend();e.sort(((e,t)=>ce(t)-ce(e))),t(e);let a=0;e.forEach((e=>{const t=ce(e);t>a&&(a=t)})),n(a)})()}),[]),0===e.length?u.createElement(ne,null):u.createElement("div",null,u.createElement("h2",{className:"mb-6 text-xl font-bold"},"みんなのISU"),u.createElement(ie,null),e.map((e=>u.createElement(re,{key:e.character,trend:e,maxConditionCount:a}))))},me=()=>G().me?u.createElement(de,null):u.createElement(ue,null),ue=()=>u.createElement("div",{className:"flex flex-col gap-10 items-center p-10"},u.createElement(Q,null),u.createElement(Y,null,u.createElement(oe,null))),de=()=>u.createElement("div",{className:"flex flex-col gap-10 items-center p-10"},u.createElement(Y,null,u.createElement(ae,null))),pe=({to:e,label:t})=>{const{pathname:a}=v(),n=a===e;return u.createElement("div",{className:"w-20 flex justify-center "+(n?"border-b-2 text-accent-primary border-accent-primary font-bold":"text-secondary")},u.createElement(E,{to:e},t))},Ee=({id:e})=>u.createElement("div",{className:"flex"},u.createElement(pe,{to:`/isu/${e}`,label:"詳細"}),u.createElement(pe,{to:`/isu/${e}/condition`,label:"状態"}),u.createElement(pe,{to:`/isu/${e}/graph`,label:"グラフ"})),fe=({isu:e})=>u.createElement("header",{className:"pb-0 pl-12 pt-8 bg-secondary"},u.createElement("h2",{className:"mb-3 text-2xl font-bold"},e.name),u.createElement("div",{className:"ml-6"},u.createElement(Ee,{id:e.jia_isu_uuid}))),ge=e=>{const{isTryLogin:t,login:a,state:n}=(()=>{const e=G(),t=L(),[a,n]=m.exports.useState(!0),l=m.exports.useCallback((e=>{t({type:"login",user:e}),n(!1)}),[t]);return{isTryLogin:a,login:m.exports.useCallback((async t=>{if(e.me)n(!1);else try{n(!0);try{const e=await Z.getUserMe({cancelToken:t});l(e)}catch{const e=new URL(location.href),a=e.searchParams.get("jwt");if(!a)return void n(!1);e.searchParams.delete("jwt"),history.replaceState(null,"",e.href),await Z.postAuth(a,{cancelToken:t});const s=await Z.getUserMe({cancelToken:t});l(s)}}catch{n(!1)}}),[e.me,l]),state:e}})();return m.exports.useEffect((()=>{const e=d.CancelToken.source();return a(e.token),()=>e.cancel()}),[a]),t?u.createElement(ne,null):n.me?u.createElement(y,i({},e)):"/login"===e.path?u.createElement(h,{to:"/login"}):"/"===e.path?u.createElement(y,i({},e)):u.createElement(h,{to:"/"})},xe=e=>{var t=e,{children:a,onClick:n}=t,l=o(t,["children","onClick"]);return u.createElement("button",i({className:"flex items-center focus:outline-none disabled:opacity-25 disabled:cursor-not-allowed",onClick:n},l),a)},ve=({conditions:e,next:t,prev:a,page:n})=>{const l=20===e.length,s=n>1;return u.createElement("div",{className:"center flex gap-8"},u.createElement(xe,{disabled:!s,onClick:a},u.createElement(b,{size:24})),u.createElement("div",{className:"align-middle text-xl"},n),u.createElement(xe,{disabled:!l,onClick:t},u.createElement(w,{size:24})))},he=({name:e,status:t})=>{const a=(()=>{switch(e){case"is_dirty":return u.createElement(C,{size:20});case"is_overweight":return u.createElement(_,{size:20});case"is_broken":return u.createElement(N,{size:20})}})(),n=`${(()=>{switch(t){case!0:return"text-primary";case!1:return"text-teritary"}})()}`;return u.createElement("div",{className:n},a)},ye=({conditionCSV:e})=>{const t=e.split(","),a=[];return t.forEach((e=>{const t=e.split("=");if(2!==t.length)return;const n="true"===t[1];a.push([t[0],n])})),u.createElement("div",{className:"flex"},a.map((e=>u.createElement("div",{key:e[0],className:"px-1"},u.createElement(he,{name:e[0],status:e[1]})))))},be=({condition:e})=>u.createElement("div",{className:"flex flex-wrap gap-4 items-center p-4"},u.createElement("div",{className:"mr-auto"},u.createElement("div",null,e.isu_name),u.createElement("div",{className:"text-secondary"},e.message)),u.createElement("div",null,u.createElement(ye,{conditionCSV:e.condition})),u.createElement("div",{className:"flex justify-center w-24"},e.is_sitting?u.createElement(ee,{variant:"sitting"}):null),u.createElement("div",{className:"flex justify-center w-24"},u.createElement(ee,{variant:e.condition_level})),u.createElement("div",null,u.createElement("div",null,B(e.date)))),we=({conditions:e})=>u.createElement("div",{className:"flex flex-col gap-4 items-center w-full"},u.createElement("div",{className:"w-full border border-b-0 border-outline"},e.map(((e,t)=>u.createElement("div",{className:"border-b border-outline",key:t},u.createElement(be,{condition:e})))))),Ne=e=>{var t=e,{label:a,classname:n}=t,l=o(t,["label","classname"]);return u.createElement("button",i({className:"px-3 py-1 h-8 leading-4 border border-outline rounded focus:outline-none "+n},l),a)},_e=({label:e,value:t,setValue:a,classname:n,inputProps:l})=>u.createElement("label",{className:"flex flex-col "+n},e,u.createElement("input",c(i({},l),{className:"px-2 py-1 bg-teritary border border-solid border-outline rounded",value:t,onChange:e=>a(e.target.value)}))),Ce=({times:e,setTimes:t})=>u.createElement("label",{className:"flex flex-col"},"時間指定",u.createElement("div",{className:"flex items-center"},u.createElement("input",{className:"px-2 py-1 w-40 bg-teritary border-2 border-outline rounded",value:e[0],onChange:a=>t([a.target.value,e[1]]),placeholder:"2020/01/01 11:11:11"}),u.createElement("div",{className:"text-xl"},"~"),u.createElement("input",{className:"px-2 py-1 w-40 bg-teritary border-2 border-outline rounded",value:e[1],onChange:a=>t([e[0],a.target.value]),placeholder:"2020/01/01 11:11:11"}))),De=({query:e,times:t,search:a})=>{const[n,l]=m.exports.useState(e),[s,r]=m.exports.useState(t);return u.createElement("div",{className:"flex flex-wrap gap-6 items-center"},u.createElement(_e,{label:"検索条件",value:n,setValue:l,classname:"flex-1"}),u.createElement(Ce,{times:s,setTimes:r}),u.createElement(Ne,{label:"検索",onClick:()=>a({times:s,query:n})}))},Se=e=>{const t=e.split(",");for(const a of t)if(!["critical","warning","info"].includes(a))return alert("検索条件には critical,warning,info のいずれか一つ以上をカンマ区切りで入力してください"),!1;return!0},je=e=>{const t=new Date(e);return!isNaN(t.getTime())&&t},ke=({isu:e})=>{const t=m.exports.useCallback((t=>Z.getIsuConditions(e.jia_isu_uuid,t)),[e]),{conditions:a,query:n,times:l,search:s,next:r,prev:i,page:c}=(e=>{const[t,a]=m.exports.useState([]);m.exports.useEffect((()=>{(async()=>{a(await e({end_time:A(),condition_level:"critical,warning,info"}))})()}),[e,a]);const[n,l]=m.exports.useState("critical,warning,info"),[s,r]=m.exports.useState(["",""]),[i,c]=m.exports.useState([[]]),[o,u]=m.exports.useState(1),d=()=>{const e=s[0]?new Date(s[0]+"Z"):new Date(0);return{end_time:s[1]?new Date(s[1]+"Z"):t[19].date,start_time:e,condition_level:n}};return{conditions:t,query:n,times:s,search:async t=>{if(t.query&&!Se(t.query))return;let n,s;if(t.times[0]){const e=je(t.times[0]+"Z");if(!e)return void alert("時間指定の下限が不正です");n=e}else n=new Date(0);if(t.times[1]){const e=je(t.times[1]+"Z");if(!e)return void alert("時間指定の上限が不正です");s=e}else s=A();l(t.query),r(t.times);const i={start_time:n,end_time:s,condition_level:t.query};a(await e(i)),u(1),c([[]])},page:o,next:async()=>{i[o]||(i[o]=t,c(i));const n=d();n&&(a(await e(n)),u(o+1))},prev:async()=>{a(i[o-1]),u(o-1)}}})(t);return u.createElement("div",{className:"flex flex-col gap-2"},u.createElement(De,{query:n,times:l,search:s}),u.createElement("div",{className:"flex flex-col gap-4 items-center"},u.createElement(we,{conditions:a}),u.createElement(ve,{conditions:a,page:c,next:r,prev:i})))},$e=({isu:e})=>e?u.createElement("div",{className:"flex flex-col gap-10 items-center"},u.createElement(Y,null,u.createElement(ke,{isu:e}))):u.createElement(ne,null),Ie=({isu:e,reloadKey:t})=>u.createElement("img",{src:`/api/isu/${e.jia_isu_uuid}/icon`,className:"w-48 h-48 object-contain",key:t}),Oe=({isu:e})=>u.createElement("div",{className:"flex flex-wrap gap-16 justify-center"},u.createElement(Ie,{isu:e}),u.createElement("div",{className:"flex flex-col min-h-full"},u.createElement("div",{className:"text-xl font-bold"},e.name),u.createElement("div",{className:"flex flex-1 mt-4 pl-8"},u.createElement("div",{className:"mr-4"},"せいかく"),u.createElement("div",{className:"flex-1"},e.character)))),Te=({isu:e})=>e?u.createElement("div",{className:"flex flex-col gap-10 items-center"},u.createElement(Y,null,u.createElement(Oe,{isu:e}))):u.createElement(ne,null),Pe=({transitionData:e,timeCategories:t,tooltipData:a})=>{const n={chart:{toolbar:{show:!1}},grid:{yaxis:{lines:{show:!1}}},colors:["#008FFB"],series:[{type:"line",data:e}],xaxis:{categories:t},yaxis:{min:0},tooltip:{custom:({dataPointIndex:e})=>qe(a[e])}};return u.createElement("div",null,u.createElement(D,{type:"line",options:n,series:n.series}))},qe=e=>`\n  <div class="flex flex-col px-3 py-1 text-primary">\n    <div class="flex flex-row">\n      <div class="w-25">score</div>\n      <div>${e.score}</div>\n    </div>\n    <div class="flex flex-row">\n      <div class="w-25">is_dirty</div>\n      <div>${e.is_dirty}</div>\n    </div>\n    <div class="flex flex-row">\n      <div class="w-25">is_overweight</div>\n      <div>${e.is_overweight}</div>\n    </div>\n    <div class="flex flex-row">\n      <div class="w-25">is_broken</div>\n      <div>${e.is_broken}</div>\n    </div>\n  </div>`,ze=({sittingData:e,timeCategories:t})=>{const a={chart:{toolbar:{show:!1}},colors:["#ff6433"],series:[{type:"heatmap",data:e,name:""}],xaxis:{categories:t,labels:{show:!1}},plotOptions:{heatmap:{colorScale:{ranges:[{from:0,to:20,color:"#d1d1d1"}]}}}};return u.createElement("div",{style:{transform:"translateX(13px) translateY(-32px) scaleX(0.993)"}},u.createElement(D,{type:"heatmap",options:a,series:a.series}))},Ue=e=>{const[t,a]=m.exports.useState({graphs:[],transitionData:[],sittingData:[],timeCategories:[],day:"",tooltipData:[]}),[n,l]=m.exports.useState((()=>{const e=A();return e.setHours(0,0,0,0),e})());m.exports.useEffect((()=>{(async()=>{const t=await e({date:n}),l=Ge(t);a((e=>c(i({},e),{graphs:t,transitionData:l.transitionData,sittingData:l.sittingData,timeCategories:l.timeCategories,day:n.toLocaleDateString(),tooltipData:l.tooltipData})))})()}),[e,a,n]);const s=async()=>{const t=await e({date:n}),l=Ge(t);a((e=>c(i({},e),{loading:!1,graphs:t,transitionData:l.transitionData,sittingData:l.sittingData,timeCategories:l.timeCategories,day:n.toLocaleTimeString(),tooltipData:l.tooltipData})))};return c(i({},t),{fetchGraphs:async e=>{const t=new Date(e.day);isNaN(t.getTime())?alert("日時の指定が不正です"):(l(t),s())},prev:async()=>{l((e=>new Date(e.setDate(e.getDate()-1)))(n)),s()},next:async()=>{l((e=>new Date(e.setDate(e.getDate()+1)))(n)),s()}})},Ge=e=>{const t=[],a=[],n=[],l=[];return e.forEach((e=>{e.data?(t.push(e.data.score),a.push(e.data.percentage.sitting),l.push({score:e.data.score.toString(),is_dirty:`${e.data.percentage.is_dirty}%`,is_overweight:`${e.data.percentage.is_overweight}%`,is_broken:`${e.data.percentage.is_broken}%`})):(t.push(0),a.push(0),l.push({score:"-",is_dirty:"-",is_overweight:"-",is_broken:"-"})),n.push(e.start_at.toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit"}))})),{transitionData:t,sittingData:a,timeCategories:n,tooltipData:l}},Le=({day:e,fetchGraphs:t})=>{const[a,n]=m.exports.useState(e);return m.exports.useEffect((()=>{n(e)}),[e,n]),u.createElement("div",{className:"flex gap-8 w-full"},u.createElement(S,{value:a,onChange:e=>n(e.target.value),onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),t({day:a}))}}))},Me=({next:e,prev:t,day:a,fetchGraphs:n})=>u.createElement("div",{className:"flex gap-8"},u.createElement(xe,{onClick:t},u.createElement(b,{size:24})),u.createElement(Le,{day:a,fetchGraphs:n}),u.createElement(xe,{onClick:e},u.createElement(w,{size:24}))),Ae=({isu:e})=>{const t=m.exports.useCallback((t=>Z.getIsuGraphs(e.jia_isu_uuid,t)),[e.jia_isu_uuid]),{graphs:a,transitionData:n,sittingData:l,timeCategories:s,day:r,tooltipData:i,fetchGraphs:c,prev:o,next:d}=Ue(t);return 0===a.length?u.createElement(ne,null):u.createElement("div",{className:"flex flex-col gap-12"},u.createElement("div",{className:"flex justify-center w-full"},u.createElement(Me,{prev:o,next:d,day:r,fetchGraphs:c})),u.createElement("div",{className:"relative flex flex-col gap-8"},u.createElement("div",{className:"z-10"},u.createElement(Pe,{transitionData:n,timeCategories:s,tooltipData:i})),u.createElement("div",{className:"absolute top-0 w-full"},u.createElement(ze,{sittingData:l,timeCategories:s}))))},Fe=({isu:e})=>e?u.createElement("div",{className:"flex flex-col gap-10 items-center"},u.createElement(Y,null,u.createElement(Ae,{isu:e}))):u.createElement(ne,null),Ve=()=>{const[e,t]=m.exports.useState(null),{id:a}=j(),[n,l]=m.exports.useState(!1);return m.exports.useEffect((()=>{(async()=>{try{t(await Z.getIsu(a))}catch(e){404===e.response.status&&l(!0)}})()}),[a,l]),e?u.createElement("div",null,u.createElement(fe,{isu:e}),u.createElement("div",{className:"p-10"},u.createElement(Be,{isu:e}))):n?u.createElement(h,{to:"/"}):u.createElement(ne,null)},Be=({isu:e})=>u.createElement(k,null,u.createElement(ge,{path:"/isu/:id",exact:!0},u.createElement(Te,{isu:e})),u.createElement(ge,{path:"/isu/:id/condition",exact:!0},u.createElement($e,{isu:e})),u.createElement(ge,{path:"/isu/:id/graph",exact:!0},u.createElement(Fe,{isu:e}))),Re=({putIsuIcon:e})=>{const{startSelect:t,destroy:a}=(e=>{const t=document.createElement("input");t.type="file",t.accept="image/jpeg";const a=()=>{t.files&&t.files[0]&&e(t.files[0])};return t.addEventListener("change",a),{startSelect:()=>{t.click()},destroy:()=>{t.removeEventListener("change",a)}}})(e);return m.exports.useEffect((()=>a)),u.createElement("button",{className:"px-3 py-1 border border-outline rounded",onClick:t},"画像をアップロード")},Ze=()=>{const[e,t]=m.exports.useState(""),[a,n]=m.exports.useState(""),[l,s]=m.exports.useState(null),r=$();return u.createElement("div",{className:"flex justify-center p-10"},u.createElement("div",{className:"flex justify-center w-full max-w-2xl"},u.createElement(Y,null,u.createElement("div",{className:"w-full"},u.createElement("h2",{className:"mb-8 text-xl font-bold"},"ISUを登録"),u.createElement("div",{className:"flex flex-col gap-4"},u.createElement(_e,{label:"JIAのIsuID",value:e,setValue:t}),u.createElement(_e,{label:"ISUの名前",value:a,setValue:n}),u.createElement("div",{className:"flex flex-col gap-8 items-center mt-6"},u.createElement(Re,{putIsuIcon:s}),u.createElement("button",{onClick:async()=>{try{const t={jia_isu_uuid:e,isu_name:a};l&&(t.image=l),await Z.postIsu(t),r.push(`/isu/${e}`)}catch(t){409===t.response.status?r.push(`/isu/${e}`):alert(t.response.data)}},className:"px-3 py-1 w-20 h-8 text-white-primary font-bold bg-button rounded-2xl focus:outline-none"},"登録")))))))},Je=()=>u.createElement("div",{className:"flex flex-col min-h-full text-primary"},u.createElement(I,null,u.createElement(X,null),u.createElement("div",{className:"flex-1 bg-primary"},u.createElement(k,null,u.createElement(ge,{path:"/",exact:!0},u.createElement(me,null)),u.createElement(ge,{path:"/isu/:id"},u.createElement(Ve,null)),u.createElement(ge,{path:"/register",exact:!0},u.createElement(Ze,null)),u.createElement(y,null,u.createElement(h,{to:"/"}))))));O.render(u.createElement(m.exports.StrictMode,null,u.createElement(U,null,u.createElement(Je,null))),document.getElementById("root")),p.setAppElement("#root");
