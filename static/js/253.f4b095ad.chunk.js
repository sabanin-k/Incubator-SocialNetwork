"use strict";(self.webpackChunkkamas=self.webpackChunkkamas||[]).push([[253],{2253:function(e,s,n){n.r(s),n.d(s,{default:function(){return q}});var a=n(2791),r=n(364),t=n(7781),o=n(137),p=n(8048),i=n(8500),c=n(3498),l=function(e){return e.dialogsPage.opponents},d=function(e){return e.dialogsPage.messages},u=function(e){return e.dialogsPage.currentOpponent},m=n(1175),_=n(5705),h="InputField_form__QxXTN",x="InputField_input__T2e-L",g="InputField_button__4qMF7",v=n(184),N=function(e){var s=e.currentOpponent,n=(0,r.I0)();return(0,v.jsx)(_.J9,{initialValues:{textarea:""},onSubmit:function(e,a){var r=a.resetForm;n((0,p.bG)(s.id,e.textarea)),r({})},children:s.id&&(0,v.jsxs)(_.l0,{className:h,children:[(0,v.jsx)(_.gN,{type:"textarea",name:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:x}),(0,v.jsx)("button",{type:"submit",className:g,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},j=n(3504),f=n(4353),O={wrapper:"Messages_wrapper__tZqw2",messageWrapper:"Messages_messageWrapper__XLm8t",message:"Messages_message__-ZpGn",photo:"Messages_photo__YU8Ua",senderName:"Messages_senderName__H5XSk",chooseOpponent:"Messages_chooseOpponent__OHDo0"},b=function(e){var s=e.messages,n=e.currentOpponent,a=e.authProfile;return(0,v.jsx)("div",{className:O.wrapper,children:n.id?s.map((function(e){return(0,v.jsxs)("div",{className:O.messageWrapper,children:[(0,v.jsx)("div",{className:O.photoWrapper,children:(0,v.jsx)(j.rU,{to:"/users/".concat(e.senderId),children:(0,v.jsx)("img",{src:n.id===e.senderId?n.photos.small||f:a.photos.small||f,alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",width:"30px",className:O.photo})})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:O.senderName,children:e.senderName}),(0,v.jsx)("p",{className:O.message,children:e.body})]})]},e.id)})):(0,v.jsx)("div",{className:O.chooseOpponent,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430"})})},w="Opponents_opponent__CR2-s",k="Opponents_photo__vWuss",I="Opponents_wrapper__hQ2hv",M="Opponents_name__6c2SM",C=function(e){var s=e.opponents,n=(0,r.I0)();return(0,v.jsx)("div",{className:I,children:s.map((function(e){return(0,v.jsxs)("div",{onClick:function(){return s=e,n((0,p.QV)(s.id)),void n(p.cq.setCurrentOpponent(s));var s},className:w,children:[(0,v.jsx)("img",{src:e.photos.small||f,alt:e.userName,className:k,width:"30px"}),(0,v.jsx)("p",{className:M,children:e.userName})]},e.id)}))})},P="Dialogs_dialogs__pxitv",F="Dialogs_dialogList__oBjP2",W="Dialogs_messages__bT+pv",q=(0,t.qC)(o.Z)((function(){var e=(0,r.I0)(),s=(0,r.v9)(m.et),n=(0,r.v9)(u),t=(0,r.v9)(d),o=(0,r.v9)(l),_=(0,r.v9)(c.b1);return(0,a.useEffect)((function(){e((0,p.Vd)()),e((0,i.SO)(_))}),[]),(0,v.jsxs)("div",{className:P,children:[(0,v.jsx)("div",{className:F,children:(0,v.jsx)(C,{opponents:o})}),(0,v.jsxs)("div",{className:W,children:[(0,v.jsx)(b,{messages:t,currentOpponent:n,authProfile:s}),(0,v.jsx)(N,{currentOpponent:n})]})]})}))}}]);
//# sourceMappingURL=253.f4b095ad.chunk.js.map