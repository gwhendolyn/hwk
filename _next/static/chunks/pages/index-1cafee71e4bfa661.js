(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3035)}])},3035:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var n=s(4848),a=s(3368),l=s.n(a),c=s(9680),i=s.n(c),r=s(6195),u=s.n(r);function o(e){return(0,n.jsxs)("div",{className:u().container,id:e.lm?null:"inverted",children:[(0,n.jsx)("button",{className:u().button,children:(0,n.jsx)("img",{className:u().icon,src:"/hwk/save.svg"})}),(0,n.jsx)("hr",{className:u().rule}),(0,n.jsx)("button",{className:u().button,children:(0,n.jsx)("img",{className:u().icon,src:"/hwk/open.svg"})}),(0,n.jsx)("hr",{className:u().rule}),(0,n.jsx)("button",{className:u().button,onClick:e.setLm,children:(0,n.jsx)("img",{className:u().icon,src:e.lm?"/hwk/dark.svg":"/hwk/light.svg"})}),(0,n.jsx)("hr",{className:u().rule}),(0,n.jsx)("button",{className:u().button,children:(0,n.jsx)("img",{className:u().icon,src:"/hwk/info.svg"})}),(0,n.jsx)("hr",{className:u().rule})]})}var d=s(5183),h=s.n(d),m=s(1426),p=s.n(m),x=s(4431),g=s.n(x),j=s(6540);function v(e){let[t,s]=(0,j.useState)(null==e.nam?"New Category":e.nam),[a,l]=(0,j.useState)(null==e.wght?0:e.wght),[c,i]=(0,j.useState)(null==e.ass?[]:e.ass),[r,u]=(0,j.useState)(null==e.em||e.em);function o(){u(!r)}(0,j.useEffect)(()=>{e.updateCat(e.classID,e.id,"nam",t),e.updateCat(e.classID,e.id,"wght",a),e.updateCat(e.classID,e.id,"ass",c),e.updateCat(e.classID,e.id,"em",r)},[t,a,c,r]),(0,j.useEffect)(()=>{var t=0,s=0;for(let e of c)isNaN(parseInt(e[1]))||(t+=parseInt(e[1]),s+=100-parseInt(e[1]));0==!c.length&&(t/=c.length,s/=c.length),t*=parseInt(a)/100,s*=parseInt(a)/100,e.updateLocked(t,e.id),e.updateLost(s,e.id)},[c]);let d=e=>t=>{i(c.map((s,n)=>n==e?[t.target.value,s[1]]:s))},h=e=>t=>{i(c.map((s,n)=>n==e?[s[0],t.target.value]:s))};return(0,n.jsx)("div",{children:r?(0,n.jsxs)("div",{className:g().container,children:[(0,n.jsx)("p",{children:"Name:"}),(0,n.jsx)("input",{type:"text",value:t,onChange:function(e){s(e.target.value)},onFocus:e=>{e.target.select()}}),(0,n.jsx)("p",{children:"Weight"}),(0,n.jsx)("input",{type:"number",value:a,onChange:function(e){l(e.target.value)},onFocus:e=>{e.target.select()}}),(0,n.jsx)("button",{onClick:o,children:"finish editing"})]}):(0,n.jsxs)("div",{className:g().container,children:[(0,n.jsx)("p",{children:t}),(0,n.jsx)("button",{onClick:o,children:"edit"}),(0,n.jsxs)("div",{className:g().assignments,children:[c.length>0?c.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Assignment Name"}),(0,n.jsx)("input",{type:"text",value:e[0],onChange:d(t),onFocus:e=>{e.target.select()}}),(0,n.jsx)("p",{children:"Grade"}),(0,n.jsx)("input",{type:"number",value:e[1],onChange:h(t),onFocus:e=>{e.target.select()}})]},t)):null,(0,n.jsx)("button",{onClick:function(){i([...c,[c.length+1,""]])},className:g().button,children:"add assignment"})]})]})})}function C(e){let[t,s]=(0,j.useState)(null==e.catID?0:e.catID),[a,l]=(0,j.useState)([]),[c,i]=(0,j.useState)([]),[r,u]=(0,j.useState)(null==e.em||e.em),[o,d]=(0,j.useState)(null==e.cats?[]:e.cats),[h,m]=(0,j.useState)(null==e.nam?"New class":e.nam),[x,g]=(0,j.useState)(null==e.bp?[["D",60],["C",70],["B",80],["A",90]]:e.bp),[C,f]=(0,j.useState)(null==e.pLock?0:e.pLock),[N,b]=(0,j.useState)(null==e.pLost?0:e.pLost);function _(){r&&g([...x].sort(function(e,t){return e[1]-t[1]})),u(!r)}(0,j.useEffect)(()=>{e.updateClass(e.id,"em",r),e.updateClass(e.id,"nam",h),e.updateClass(e.id,"bp",x),e.updateClass(e.id,"pLock",C),e.updateClass(e.id,"pLost",N)},[r,h,x,C,N]);let k=e=>t=>{g(x.map((s,n)=>n==e?[t.target.value,s[1]]:s))},S=e=>t=>{g(x.map((s,n)=>n==e?[s[0],t.target.value]:s))};function w(e){var t="F";for(let s of x)e>s[1]&&(t=s[0]);return t}let y=(e,t)=>{a[t]=e,l(a),f(a.reduce((e,t)=>e+t,0))},I=(e,t)=>{c[t]=e,i(c),b(c.reduce((e,t)=>e+t,0))};return(0,n.jsx)("div",{children:r?(0,n.jsxs)("div",{className:p().container,children:[(0,n.jsxs)("div",{className:p().nameIn,children:[(0,n.jsx)("p",{children:"Class Name:"}),(0,n.jsx)("input",{type:"text",value:h,onChange:function(e){m(e.target.value)},onFocus:e=>{e.target.select()}})]}),(0,n.jsxs)("div",{className:p().breakpointsIn,children:[(0,n.jsx)("p",{children:"Grade breakpoints"}),(0,n.jsxs)("div",{className:p().labels,children:[(0,n.jsx)("p",{children:"Letter Grade"}),(0,n.jsx)("p",{children:"Minimum Percentage"})]}),x.length>0?x.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"text",value:e[0],onChange:k(t),onFocus:e=>{e.target.select()}}),(0,n.jsx)("input",{type:"number",value:e[1],onChange:S(t),onFocus:e=>{e.target.select()}})]},t)):null,(0,n.jsx)("button",{onClick:function(){g([...x,["new",0]])},className:p().button,children:"add breakpoint"})]}),(0,n.jsx)("button",{onClick:_,className:p().button,children:"finish editing"})]}):(0,n.jsxs)("div",{className:p().container,children:[(0,n.jsxs)("div",{className:p().topBar,children:[(0,n.jsx)("h1",{children:h}),(0,n.jsxs)("h2",{children:["Currently achieved grade: ",C.toFixed(2),"% (",w(C),")"]}),(0,n.jsxs)("h2",{children:["Highest possible grade: ",(100-N).toFixed(2),"% (",w(100-N),")"]}),(0,n.jsx)("button",{onClick:_,className:p().button,children:"edit"})]}),(0,n.jsxs)("div",{className:p().categoriesBox,children:[o,(0,n.jsx)("button",{onClick:function(){d([...o,(0,n.jsx)(v,{id:t,classID:e.id,updateCat:e.updateCat,updateLocked:y,updateLost:I},t)]),e.addCat(e.id,t),s(t+1)},className:p().button,children:"add category"})]})]})})}let f=0;function N(e){let[t,s]=(0,j.useState)([]),[a,l]=(0,j.useState)({});(0,j.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("simplifiedState"));e&&(function(e){var t=[];for(let s of Object.keys(e)){var a=[];for(let t of Object.keys(e[s].cats))a.push((0,n.jsx)(v,{id:t,classID:s,nam:e[s].cats[t].nam,wght:e[s].cats[t].wght,ass:e[s].cats[t].ass,em:e[s].cats[t].em},t));t.push((0,n.jsx)(C,{cats:a,catID:a.length,em:e[s].em,nam:e[s].nam,bp:e[s].nam,pLock:e[s].pLock,pLost:e[s].pLost}))}console.log(t),s(t),f=t.length}(e),l(e))},[]),(0,j.useEffect)(()=>{localStorage.setItem("simplifiedState",JSON.stringify(a))},[JSON.stringify(a)]);let c=(e,t,s)=>{a[e][t]=s,l(structuredClone(a))},i=(e,t)=>{a[e].cats[t]={},l(structuredClone(a))},r=(e,t,s,n)=>{a[e].cats[t][s]=n,l(structuredClone(a))};return(0,n.jsxs)("div",{className:h().container,id:e.lm?null:"inverted",children:[t,(0,n.jsx)("button",{onClick:function(){s([...t,(0,n.jsx)(C,{id:f,updateClass:c,addCat:i,updateCat:r},f)]),a[f]={cats:{}},l(structuredClone(a)),f++},className:h().button,children:(0,n.jsx)("img",{className:h().icon,src:"/hwk/add.svg"})})]})}function b(){let[e,t]=(0,j.useState)(!0);return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"HWK: Grade Calculator"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(o,{lm:e,setLm:()=>{t(!e)}}),(0,n.jsx)(N,{lm:e})]})}},4431:e=>{e.exports={container:"Category_container__hCK7v",assignments:"Category_assignments__r54u9"}},1426:e=>{e.exports={container:"Course_container__25gEO",topBar:"Course_topBar__BUAOy"}},5183:e=>{e.exports={container:"CourseContainer_container___tlMy",button:"CourseContainer_button__vMiDp"}},9680:e=>{e.exports={container:"Home_container__d256j"}},6195:e=>{e.exports={rule:"Sidebar_rule__tu0eX",container:"Sidebar_container__DYphx",button:"Sidebar_button__SyJgS",icon:"Sidebar_icon__Xclcw"}},3368:(e,t,s)=>{e.exports=s(6085)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(7276)),_N_E=e.O()}]);