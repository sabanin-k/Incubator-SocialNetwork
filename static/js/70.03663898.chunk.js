"use strict";(self.webpackChunkkamas=self.webpackChunkkamas||[]).push([[70],{6070:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var s=t(2791),a=t(7581),r=t(5117),c=t(9750),i=t(1698),l={newsSection:"News_newsSection__mJ-kv",link:"News_link__vneP8",img:"News_img__cJ3Fb",textDiv:"News_textDiv__1Yhzy",calendarData:"News_calendarData__gaeqn",contentSpan:"News_contentSpan__F01LR"},u=t(184),o=function(n){var e=function(n){return(0,u.jsx)("p",{children:n})},t=function(t,s){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:l.contentSpan,onClick:function(e){e.preventDefault(),n.getContent(t)},children:"\u0423\u0431\u0440\u0430\u0442\u044c"}),e(s)]})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:l.newsSection,children:n.news.map((function(s){return(0,u.jsxs)("a",{href:s.url,className:l.link,target:"_blank",rel:"noreferrer",children:[(0,u.jsx)("img",{src:s.urlToImage||c,alt:"news",width:"200px",className:l.img}),(0,u.jsxs)("div",{className:l.textDiv,children:[(0,u.jsx)("p",{className:l.phrase,children:s.title}),(0,u.jsx)("span",{className:l.calendarData,children:s.publishedAt}),(0,u.jsx)("div",{className:l.content,children:null!==s.description&&(n.hasContent.includes(s.url)?t(s.url,s.description):(a=s.url,r="",(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:l.contentSpan,onClick:function(e){e.preventDefault(),n.getContent(a)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),e(r)]})))})]})]},Math.random());var a,r}))}),(0,u.jsx)(i.Z,{})]})},h=t(1261),d=function(n){return n.newsPage.news},f=function(n){return n.newsPage.isFetching},g=function(n){return n.newsPage.hasContent},p=(0,a.$j)((function(n){return{news:d(n),isFetching:f(n),hasContent:g(n)}}),{getNewsThunk:r.Lf,getContent:r.L5})((function(n){return(0,s.useEffect)((function(){n.getNewsThunk()}),[]),(0,u.jsxs)(u.Fragment,{children:[n.isFetching&&(0,u.jsx)(h.Z,{}),(0,u.jsx)(o,{news:n.news,hasContent:n.hasContent,getContent:n.getContent})]})}))},9750:function(n,e,t){n.exports=t.p+"static/media/newspaper.5b631658b804dc96e40d.png"}}]);
//# sourceMappingURL=70.03663898.chunk.js.map