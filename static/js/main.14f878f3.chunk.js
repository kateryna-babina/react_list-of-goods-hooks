(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function h(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),r=Object(i.a)(o,2),l=r[0],d=r[1],N=l!==s.NONE||n,O=function(t){d(t)};return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":l!==s.ALPHABET}),onClick:function(){O(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":l!==s.LENGTH}),onClick:function(){O(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!n}),onClick:function(){c(!n)},children:"Reverse"}),N&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(!1),d(s.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:h(j,{isReversed:n,sortType:l}).map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14f878f3.chunk.js.map