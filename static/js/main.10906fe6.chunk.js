(this["webpackJsonpreact-transition-group-go"]=this["webpackJsonpreact-transition-group-go"]||[]).push([[0],{19:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(12),r=n.n(s),l=(n(31),n(32),n(3)),o=n(13),j=n(9),u=n(40);n(19);var m=n(39);var b=n(41);var d=n(5);var h=[{path:"/transition",exact:!0,component:function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(a.useRef)(null),r=Object(a.useState)(!1),l=Object(j.a)(r,2),o=l[0],u=l[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-center",children:"Transition"}),Object(c.jsx)(d.d,{appear:!0,in:n,timeout:0,nodeRef:s,unmountOnExit:o,children:function(e){return Object(c.jsxs)("ul",{className:"list-group mt-3 transition-".concat(e),ref:s,children:[Object(c.jsxs)("li",{className:"list-group-item",children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("li",{className:"list-group-item",children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("li",{className:"list-group-item",children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("li",{className:"list-group-item",children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("li",{className:"list-group-item",children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("li",{className:"list-group-item",children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]}),Object(c.jsxs)("li",{className:"list-group-item",children:["\u72b6\u6001\uff1a",n?"\u663e\u793a":"\u9690\u85cf"]})]})}}),Object(c.jsxs)("div",{className:"text-center mt-3",children:[Object(c.jsxs)("button",{className:"btn btn-primary",onClick:function(){return i(!n)},children:[n?"\u9690\u85cf":"\u663e\u793a","\u5217\u8868"]}),Object(c.jsxs)("button",{className:"btn btn-primary ml-3",onClick:function(){return u(!o)},children:["unmountOnExit \u72b6\u6001\uff1a",o.toString()]})]})]})}},{path:"/csstransiton",exact:!0,component:function(){var e=Object(a.useState)((function(){return[(new Date).getTime(),(new Date).getTime()+1,(new Date).getTime()+2]})),t=Object(j.a)(e,2),n=t[0],i=t[1],s=function(){i([].concat(Object(o.a)(n),[(new Date).getTime()]))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-center",children:"CSSTransitonPage"}),Object(c.jsx)("ul",{className:"list-group",children:n.map((function(e,t){return Object(c.jsx)(u.a,{in:!0,classNames:"csstransition-fade",timeout:10,appear:!0,children:Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[t+1," - ",e,Object(c.jsxs)("div",{children:[n.length>1&&Object(c.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return function(e){i((function(t){var n=Object(o.a)(t);return n.splice(e,1),n}))}(t)},children:"\u79fb\u9664"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:s,children:"\u589e\u52a0"})]})]})},e)}))})]})})}},{path:"/transitongroup",exact:!0,component:function(){var e=Object(a.useState)([(new Date).getTime(),(new Date).getTime()+1,(new Date).getTime()+2]),t=Object(j.a)(e,2),n=t[0],i=t[1],s=function(){i([].concat(Object(o.a)(n),[(new Date).getTime()]))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"TransitionGroupPage"}),Object(c.jsx)("ul",{className:"list-group",children:Object(c.jsx)(b.a,{component:null,childFactory:function(e){return console.log(e),e},children:n.map((function(e,t){return Object(c.jsx)(u.a,{appear:!0,timeout:{appear:410,enter:410,exit:300},classNames:"transition-group-fade",children:Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[t+1," - ",e,Object(c.jsxs)("div",{children:[n.length>1&&Object(c.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return function(e){i((function(t){var n=Object(o.a)(t);return n.splice(e,1),n}))}(t)},children:"\u79fb\u9664"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:s,children:"\u589e\u52a0"})]})]})},e)}))})})]})}},{path:"/switchtransition",exact:!0,component:function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)("out-in"),r=Object(j.a)(s,2),l=r[0],o=r[1],b=function(e){var t=e.target.value;o(t)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"text-center",children:"SwitchTransiton"}),Object(c.jsxs)("div",{className:"d-flex justify-content-center mb-5",children:[Object(c.jsxs)("div",{className:"form-check",children:[Object(c.jsx)("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"out-in",checked:"out-in"===l,onChange:b}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"exampleRadios1",children:"Mode: out-in"})]}),Object(c.jsxs)("div",{className:"form-check ml-3",children:[Object(c.jsx)("input",{className:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"in-out",checked:"in-out"===l,onChange:b}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"exampleRadios2",children:"Mode: in-out"})]})]}),Object(c.jsx)(m.a,{mode:l,children:Object(c.jsx)(u.a,{timeout:500,classNames:"switchtransiton-fade",children:Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("button",{onClick:function(){return i(!n)},className:"btn btn-primary",children:n?"Goodbye, world!":"Hello, world!"})})},n?"Goodbye, world!":"Hello, world!")})]})}},{path:"",component:function(){return Object(c.jsx)("div",{className:"home container text-center mt-3",children:Object(c.jsx)("a",{className:"btn btn-primary",href:"https://yuelau.github.io/react-transition-group/#/",children:"\u4f20\u9001\u95e8"})})}}];var p=function(){var e=Object(l.f)().pathname,t=["/transition","/csstransiton","/transitongroup","/switchtransition"].includes(e),n=e.substr(1).replace(/^[\w\d]{1}/,(function(e){return e.toUpperCase()}))+"Page";return Object(c.jsxs)("div",{className:"app px-3 py-3 container",children:[t&&Object(c.jsx)("div",{className:"text-right",children:Object(c.jsx)("a",{className:"btn btn-primary",rel:"noreferrer",target:"_blank",href:"https://yuelau.github.io/readme-react-go/#/codeview?origin=".concat(n),children:"\u67e5\u770b\u6e90\u7801"})}),Object(c.jsx)(l.c,{children:h.map((function(e,t){return Object(c.jsx)(l.a,{path:e.path,exact:e.exact,component:e.component},t)}))})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},O=n(20);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)(p,{})})}),document.getElementById("root")),x()}},[[38,1,2]]]);
//# sourceMappingURL=main.10906fe6.chunk.js.map