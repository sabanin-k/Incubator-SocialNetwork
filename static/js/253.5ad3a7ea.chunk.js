"use strict";(self.webpackChunkkamas=self.webpackChunkkamas||[]).push([[253],{2253:function(e,s,a){a.r(s),a.d(s,{default:function(){return P}});var n=a(2791),r=a(364),t=a(7781),o=a(137),i=a(8048),p=a(8500),c=a(3498),l=function(e){return e.dialogsPage.opponents},d=function(e){return e.dialogsPage.messages},u=function(e){return e.dialogsPage.currentOpponent},m=a(1175),_=a(5705),h="InputField_form__QxXTN",g="InputField_input__T2e-L",x="InputField_button__4qMF7",v=a(184),N=function(e){var s=e.currentOpponent,a=(0,r.I0)();return(0,v.jsx)(_.J9,{initialValues:{textarea:""},onSubmit:function(e,n){var r=n.resetForm;a((0,i.bG)(s.id,e.textarea)),r({})},children:s.id&&(0,v.jsxs)(_.l0,{className:h,children:[(0,v.jsx)(_.gN,{type:"textarea",name:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:g}),(0,v.jsx)("button",{type:"submit",className:x,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},f=a(4353),j={wrapper:"Messages_wrapper__tZqw2",messageWrapper:"Messages_messageWrapper__XLm8t",message:"Messages_message__-ZpGn",photo:"Messages_photo__YU8Ua",senderName:"Messages_senderName__H5XSk",chooseOpponent:"Messages_chooseOpponent__OHDo0"},O=function(e){var s=e.messages,a=e.currentOpponent,n=e.authProfile;return(0,v.jsx)("div",{className:j.wrapper,children:a.id?s.map((function(e){return(0,v.jsxs)("div",{className:j.messageWrapper,children:[(0,v.jsx)("div",{className:j.photoWrapper,children:(0,v.jsx)("img",{src:a.id===e.senderId?a.photos.small||f:n.photos.small||f,alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",width:"30px",className:j.photo})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:j.senderName,children:e.senderName}),(0,v.jsx)("p",{className:j.message,children:e.body})]})]},e.id)})):(0,v.jsx)("div",{className:j.chooseOpponent,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430"})})},b="Opponents_wrapper__hQ2hv",w="Opponents_photo__vWuss",k=function(e){var s=e.opponents,a=(0,r.I0)();return(0,v.jsx)(v.Fragment,{children:s.map((function(e){return(0,v.jsxs)("div",{onClick:function(){return s=e,a((0,i.QV)(s.id)),void a(i.cq.setCurrentOpponent(s));var s},className:b,children:[(0,v.jsx)("img",{src:e.photos.small||f,alt:e.userName,className:w,width:"30px"}),e.userName]},e.id)}))})},I="Dialogs_dialogs__pxitv",M="Dialogs_dialogList__oBjP2",F="Dialogs_messages__bT+pv",P=(0,t.qC)(o.Z)((function(){var e=(0,r.I0)(),s=(0,r.v9)(m.et),a=(0,r.v9)(u),t=(0,r.v9)(d),o=(0,r.v9)(l),_=(0,r.v9)(c.b1);return(0,n.useEffect)((function(){e((0,i.Vd)()),e((0,p.SO)(_))}),[]),(0,v.jsxs)("div",{className:I,children:[(0,v.jsx)("div",{className:M,children:(0,v.jsx)(k,{opponents:o})}),(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)(O,{messages:t,currentOpponent:a,authProfile:s}),(0,v.jsx)(N,{currentOpponent:a})]})]})}))}}]);
//# sourceMappingURL=253.5ad3a7ea.chunk.js.map