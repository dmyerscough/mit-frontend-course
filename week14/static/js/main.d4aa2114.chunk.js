(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{19:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),i=(n(19),n(14)),d=n(5),s=n(1);var u=function(e){var t=e.addTodo,n=c.a.useState(""),a=Object(d.a)(n,2),o=a[0],r=a[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),o&&(t(o),r(""))},children:Object(s.jsx)("input",{type:"text",className:"input",value:o,placeholder:"Add Todo...",onChange:function(e){return r(e.target.value)}})})};var l=function(){var e=c.a.useState([{text:"learn react",isCompleted:!1},{text:"meet friend for lunch",isCompleted:!1},{text:"build todo app",isCompleted:!1}]),t=Object(d.a)(e,2),n=t[0],a=t[1],o=function(e){var t=Number(e.target.id);a(n.filter((function(e,n){return n!==t})))};return Object(s.jsx)("div",{className:"app",children:Object(s.jsxs)("div",{className:"todo-list",children:[n.map((function(e,t){return Object(s.jsx)("div",{className:"todo",id:t,onClick:o,children:e.text},t)})),Object(s.jsx)(u,{addTodo:function(e){a([].concat(Object(i.a)(n),[{text:e,isCompleted:!1}]))}})]})})},j=n(13);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(j.a,{basename:"/week14",children:Object(s.jsx)(l,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d4aa2114.chunk.js.map