(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{3309:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[appId]",function(){return a(1579)}])},6044:function(e,t,a){"use strict";var s=a(5893),o=a(7294),r=a(9045),n=a.n(r);t.Z=()=>{let[e,t]=(0,o.useState)("");return(0,o.useEffect)(()=>{t(window.location.host)},[]),e.includes("beta")?(0,s.jsx)("span",{className:n().beta,children:"beta"}):(0,s.jsx)(s.Fragment,{})}},1579:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m}});var s=a(5893),o=a(9008),r=a.n(o),n=a(7294),i=a(3596),_=a(6515),p=a(3622),c=a(7261),l=a.n(c),u=a(789),x=a.n(u),d=a(6044),m=!0;t.default=e=>{var t;let a=e.appId;(0,n.useEffect)(()=>{(async()=>{(0,p.Wq)({type:"view"})})()},[]),(0,n.useEffect)(()=>{setInterval(async()=>{(0,p.Wq)({type:"keep"})},1e4)},[]);let[o,_]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async()=>{_(await (0,p.Ms)())})()},[]),(0,s.jsxs)("div",{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"TOC - ProtoSim"})}),(0,s.jsxs)("header",{className:l().header,children:[(0,s.jsx)("a",{href:"",children:"Communication Protocol Simulator ProtoSim"}),(0,s.jsx)(d.Z,{}),(0,s.jsx)("span",{className:l().userName,children:null==o?"Guest":o})]}),(0,s.jsxs)("main",{className:l().main+" "+x().main,children:[(0,s.jsx)("ol",{className:x().textbookList,children:null===(t=(0,i.M)(a))||void 0===t?void 0:t.textbooks.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(b,{textbook:e})},e.id))}),(0,s.jsx)(s.Fragment,{})]})]})};let b=e=>{let{textbook:t}=e,[a,o]=(0,n.useState)(0);return(0,n.useEffect)(()=>{(async()=>{o(Math.round(await t.pages.reduce(async(e,t)=>{if("separator"===t.iconType)return await e;let a=await _.U2("pageCompleted_".concat(t.id));return await e+(!0===a?1:0)},(async()=>0)())/t.pages.filter(e=>"separator"!==e.iconType).length*100))})()},[t]),(0,s.jsxs)("a",{href:"".concat(t.id,"/").concat(t.pages[0].id),children:[(0,s.jsx)("div",{className:x().textbookListTitle,children:t.title}),(0,s.jsxs)("div",{className:x().progressBarOuter,children:[(0,s.jsx)("div",{className:x().progressBarInner,style:{width:"".concat(a,"%")}}),(0,s.jsx)("div",{className:x().progressBarText,children:"".concat(a," %")})]})]})}},9045:function(e){e.exports={beta:"beta_beta__nBVqY"}},7261:function(e){e.exports={allWrapper:"App_allWrapper__G4W8h",header:"App_header__9Xne4",userName:"App_userName__Xvo8m",main:"App_main__wo9xi",textbookPageListArea:"App_textbookPageListArea__gTiQd",openedPage:"App_openedPage__4m77x",completedPage:"App_completedPage__WutWa",separator:"App_separator__NqcDx",textbookArea:"App_textbookArea__CB9cZ",textbookController:"App_textbookController__FvQVu",open:"App_open__AXnPI",toolArea:"App_toolArea__IQAEF",displayNone:"App_displayNone__5BlaV"}},789:function(e){e.exports={main:"TextbookPageList_main__yDhr3",textbookList:"TextbookPageList_textbookList__Qveln",noNumber:"TextbookPageList_noNumber__q3TPe",textbookListTitle:"TextbookPageList_textbookListTitle__4uQ0r",progressBarOuter:"TextbookPageList_progressBarOuter__OdT1X",progressBarInner:"TextbookPageList_progressBarInner___QZ5w",progressBarText:"TextbookPageList_progressBarText__PLM79",reset:"TextbookPageList_reset__2EFcB"}},9008:function(e,t,a){e.exports=a(7828)}},function(e){e.O(0,[983,653,888,774,179],function(){return e(e.s=3309)}),_N_E=e.O()}]);