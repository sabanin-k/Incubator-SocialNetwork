"use strict";(self.webpackChunkkamas=self.webpackChunkkamas||[]).push([[423],{2423:function(e,s,a){a.r(s),a.d(s,{default:function(){return _}});var n=a(2791),t=a(364),r=a(5850),c=a(3498),l=function(e){return e.chat.messages},u=function(e){return e.chat.connectStatus},o=a(885),i={wrapper:"InputMessages_wrapper__QV6Sl",textarea:"InputMessages_textarea__-z9A1"},p=a(184),m=function(e){var s=e.handleSendMessage,a=e.connectStatus,t=(0,n.useState)(""),r=(0,o.Z)(t,2),c=r[0],l=r[1];return(0,p.jsxs)("div",{className:i.wrapper,children:[(0,p.jsx)("textarea",{value:c,onChange:function(e){return l(e.target.value)},className:i.textarea,placeholder:"\u041d\u0430\u0447\u043d\u0438 \u043f\u0438\u0441\u0430\u0442\u044c..."}),(0,p.jsx)("button",{disabled:"connecting"===a||0===c.length,onClick:function(){s(c),l("")},className:i.button,children:"connecting"===a?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":0===c.length?"\u041f\u0443\u0441\u0442\u043e":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},g=a(3504),h=a(4353),d={messages:"Messages_messages__rACvG",wrapper:"Messages_wrapper__7zJaQ",photo:"Messages_photo__FXBKR",name:"Messages_name__ciu+K",message:"Messages_message__CNk5T",plug:"Messages_plug__Kj8Tl"},f=function(e){var s=e.messages,a=(0,n.useState)(!0),t=(0,o.Z)(a,2),r=t[0],c=t[1],l=(0,n.useRef)(null),u=(0,n.useRef)(null);return(0,n.useLayoutEffect)((function(){r&&function(){var e=document.getElementById("scrolledDiv");e.scrollTo({top:e.scrollHeight})}()}),[s]),(0,p.jsx)("div",{className:d.messages,onScroll:function(){u.current.scrollHeight-u.current.scrollTop>680?c(!1):c(!0)},ref:u,id:"scrolledDiv",children:null!==s&&0!==s.length?s.map((function(e,s){return(0,p.jsxs)("div",{className:d.wrapper,children:[(0,p.jsx)("div",{className:d.photoWrapper,children:(0,p.jsx)(g.rU,{to:"/users/"+e.userId,children:e.photo?(0,p.jsx)("img",{src:e.photo,alt:e.userName,width:"50px",className:d.photo}):(0,p.jsx)("img",{src:h,alt:e.userName,width:"50px",className:d.photo})})}),(0,p.jsxs)("div",{className:d.messageWrapper,children:[(0,p.jsx)("b",{className:d.name,children:e.userName}),(0,p.jsx)("p",{className:d.message,children:e.message})]}),(0,p.jsx)("div",{ref:l})," "]},s)})):(0,p.jsx)("p",{className:d.plug,children:"\u041d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"})})},_=function(){var e=(0,t.v9)(l),s=(0,t.v9)(c.ru),a=(0,t.v9)(u),o=(0,t.I0)();return(0,n.useEffect)((function(){return o((0,r.hb)()),function(){o((0,r.kb)())}}),[o]),(0,p.jsxs)(p.Fragment,{children:[(0,n.useMemo)((function(){return(0,p.jsx)(f,{messages:e})}),[e]),s&&(0,p.jsx)(m,{handleSendMessage:function(e){o((0,r.bG)(e))},connectStatus:a})]})}}}]);
//# sourceMappingURL=423.090c0c9a.chunk.js.map