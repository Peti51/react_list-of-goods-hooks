(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),i=n(5),r=n(7),a=n(1),u=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=[].concat(l),e=Object(a.useState)(!1),n=Object(i.a)(e,2),s=n[0],o=n[1],b=Object(a.useState)(c.NONE),j=Object(i.a)(b,2),h=j[0],N=j[1],O=Object(a.useMemo)((function(){return function(t,e,n){var s=Object(r.a)(t);return s.sort((function(t,e){switch(n){case c.ALPHABET:return t.localeCompare(e);case c.LENGTH:return t.length-e.length;case c.NONE:default:return 0}})),!0===e&&s.reverse(),s}(t,s,h)}),[t,s,h]);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:"button is-info ".concat(h===c.ALPHABET?"":"is-light"),onClick:function(){return N(c.ALPHABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-success ".concat(h===c.LENGTH?"":"is-light"),onClick:function(){return N(c.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button is-warning ".concat(s?"":"is-light"),onClick:function(){o((function(t){return!t}))},children:"Reverse"}),s||h!==c.NONE?Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(!1),N(c.NONE)},children:"Reset"}):null]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:O.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.aefe8c2d.chunk.js.map