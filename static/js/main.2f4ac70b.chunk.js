(this.webpackJsonpmeme_generator=this.webpackJsonpmeme_generator||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(6),s=n.n(r),u=(n(13),n(2)),o=n(7),m=n.n(o);n(16);var j=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),o=s[0],j=s[1],b=Object(a.useState)([]),l=Object(u.a)(b,2),p=l[0],d=l[1],f=Object(a.useState)(null),O=Object(u.a)(f,2),h=O[0],x=O[1],v=Object(a.useState)(null),g=Object(u.a)(v,2),S=g[0],k=g[1];Object(a.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){return d(e.data.memes)}))}),[]);var y=function(e){var t=e.target.name,n=e.target.value;"top"===t?i(n):j(n)};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={template_id:h,text0:n,text1:o,username:"xzk03017",password:"xzk03017@cndps.com"};fetch("https://api.imgflip.com/caption_image?".concat(m.a.stringify(t))).then((function(e){return e.json()})).then((function(e){e.success&&k(e.data.url)}))},children:[Object(c.jsx)("input",{type:"text",name:"top",value:n,onChange:y}),Object(c.jsx)("input",{type:"text",name:"bottom",value:o,onChange:y}),Object(c.jsx)("input",{type:"submit",value:"Generate meme"})]}),Object(c.jsx)("div",{className:"meme",children:S?Object(c.jsx)("img",{src:S,alt:""}):null}),Object(c.jsx)("div",{className:"meme-container",children:p&&p.map((function(e){return Object(c.jsx)("img",{id:e.id,onClick:function(){return t=e.id,void x(t);var t},src:e.url,alt:""},e.id)}))})]})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2f4ac70b.chunk.js.map