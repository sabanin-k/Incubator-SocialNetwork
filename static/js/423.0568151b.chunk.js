"use strict";(self.webpackChunkkamas=self.webpackChunkkamas||[]).push([[423],{2423:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var t=n(2791),a=n(364),r=n(5850),c=n(3498),u=function(e){return e.chat.messages},l=function(e){return e.chat.connectStatus},o=n(885),i={wrapper:"InputMessages_wrapper__QV6Sl",textarea:"InputMessages_textarea__-z9A1"},d=n(184),m=function(e){var s=e.handleSendMessage,n=e.connectStatus,a=(0,t.useState)(""),r=(0,o.Z)(a,2),c=r[0],u=r[1],l=function(){s(c),u("")},m=function(e){e.ctrlKey&&"Enter"===e.code&&0!==c.length&&l()};return(0,t.useEffect)((function(){var e=document.getElementById("textarea");return e.addEventListener("keydown",m),function(){return e.removeEventListener("keydown",m)}}),[c]),(0,d.jsxs)("div",{className:i.wrapper,children:[(0,d.jsx)("textarea",{value:c,onChange:function(e){return u(e.target.value)},className:i.textarea,placeholder:"\u041d\u0430\u0447\u043d\u0438 \u043f\u0438\u0441\u0430\u0442\u044c...",id:"textarea"}),(0,d.jsx)("button",{disabled:"connecting"===n||0===c.length,onClick:l,className:i.button,children:"connecting"===n?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":0===c.length?"\u041f\u0443\u0441\u0442\u043e":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},g=n(3504),p=n(4353),h={messages:"Messages_messages__rACvG",wrapper:"Messages_wrapper__7zJaQ",photo:"Messages_photo__FXBKR",name:"Messages_name__ciu+K",message:"Messages_message__CNk5T",plug:"Messages_plug__Kj8Tl"},f=function(e){var s=e.messages,n=(0,t.useState)(!0),a=(0,o.Z)(n,2),r=a[0],c=a[1],u=(0,t.useRef)(null),l=(0,t.useRef)(null);return(0,t.useLayoutEffect)((function(){r&&function(){var e=document.getElementById("scrolledDiv");e.scrollTo({top:e.scrollHeight})}()}),[s]),(0,d.jsx)("div",{className:h.messages,onScroll:function(){l.current.scrollHeight-l.current.scrollTop>680?c(!1):c(!0)},ref:l,id:"scrolledDiv",children:null!==s&&0!==s.length?s.map((function(e,s){return(0,d.jsxs)("div",{className:h.wrapper,children:[(0,d.jsx)("div",{className:h.photoWrapper,children:(0,d.jsx)(g.rU,{to:"/users/"+e.userId,children:e.photo?(0,d.jsx)("img",{src:e.photo,alt:e.userName,width:"50px",className:h.photo}):(0,d.jsx)("img",{src:p,alt:e.userName,width:"50px",className:h.photo})})}),(0,d.jsxs)("div",{className:h.messageWrapper,children:[(0,d.jsx)("b",{className:h.name,children:e.userName}),(0,d.jsx)("p",{className:h.message,children:e.message})]}),(0,d.jsx)("div",{ref:u})," "]},s)})):(0,d.jsx)("p",{className:h.plug,children:"\u041d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"})})},x=function(){var e=(0,a.v9)(u),s=(0,a.v9)(c.ru),n=(0,a.v9)(l),o=(0,a.I0)();return(0,t.useEffect)((function(){return o((0,r.hb)()),function(){o((0,r.kb)())}}),[o]),(0,d.jsxs)(d.Fragment,{children:[(0,t.useMemo)((function(){return(0,d.jsx)(f,{messages:e})}),[e]),s&&(0,d.jsx)(m,{handleSendMessage:function(e){o((0,r.bG)(e))},connectStatus:n})]})}}}]);
//# sourceMappingURL=423.0568151b.chunk.js.map