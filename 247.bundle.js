(self.webpackChunkfec=self.webpackChunkfec||[]).push([[247],{338:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(7294);const a=function(e){var t=e.handleInput;return r.createElement("input",{className:"d-border-button d-search-bar","aria-label":"Search answers",placeholder:"Have a question? Search for Answers...",onChange:t})};var o=n(381),s=n.n(o),l=n(9669),u=n.n(l);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const m=function(e){var t=e.answer,n=e.asker,a=i((0,r.useState)(!1),2),o=a[0],l=a[1],c=i((0,r.useState)(!1),2),m=c[0],d=c[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"d-answer"},r.createElement("div",null,t.body),r.createElement("div",{className:"d-answer-toolbar d-light"},"by ".concat(t.answerer_name),n===t.answerer_name&&r.createElement("span",null," - ",r.createElement("strong",null,"Seller")),", ".concat(s()(t.date).format("MMM DD, YYYY").toString(),"  |  Helpful ? "),r.createElement("span",{className:"d-underlined",onClick:m?null:function(){u().put("proxy/api/fec2/hratx/qa/answers/".concat(t.id,"/helpful?question_id=").concat(t.id)).then((function(){return d(!0)})).catch((function(e){throw e}))},style:m?{textDecoration:"none"}:null},"Yes")," (".concat(m?t.helpfulness+1:t.helpfulness,")  | "),o?r.createElement("span",{className:"d-underlined",style:{filter:"brightness(300%)",textDecoration:"none",pointerEvents:"none"}},"Reported"):r.createElement("span",{className:"d-underlined",onClick:function(){u().put("proxy/api/fec2/hratx/qa/answers/".concat(t.id,"/report?question_id=").concat(t.id)).then((function(){return l(!0)})).catch((function(e){throw e}))}},"Report"))))},d=function(e){var t=e.answers,n=e.asker;return r.createElement("div",{style:{maxHeight:"50vh",overflowY:"scroll"}},t.map((function(e){return r.createElement(m,{key:e.id,answer:e,asker:n})})))};var f=n(1274),j=n(548),h=n(3754),y=n(1442);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const v=function(e){e.question_id;var t=e.handleSubmit,n=(0,r.useContext)(y.H).curProduct,a=p((0,r.useState)(!1),2),o=a[0],s=a[1],l=p((0,r.useState)(""),2),u=l[0],i=l[1],c=p((0,r.useState)(""),2),m=c[0],d=c[1],b=p((0,r.useState)(""),2),v=b[0],g=b[1];return r.createElement(r.Fragment,null,r.createElement("span",{onClick:function(){return s(!0)},className:"d-underlined"},"Add Answer"),r.createElement(f.Z,{show:o,onHide:function(){return s(!1)},backdrop:"static",keyboard:!1},r.createElement(f.Z.Header,null,r.createElement(f.Z.Title,null,"Ask Your Question"),r.createElement(f.Z.Title,{as:"p"},"About the ",n.name)),r.createElement(f.Z.Body,null,r.createElement(j.Z,null,r.createElement(j.Z.Group,null,r.createElement(j.Z.Label,null,"Your Answer"),r.createElement(j.Z.Control,{required:!0,type:"text",as:"textarea",placeholder:"As many as you want",onChange:function(e){return i(e.target.value)}})),r.createElement(j.Z.Group,null,r.createElement(j.Z.Label,null,"Your Nickname"),r.createElement(j.Z.Control,{required:!0,type:"text",placeholder:"example: jackson11!",onChange:function(e){return d(e.target.value)}})),r.createElement(j.Z.Group,null,r.createElement(j.Z.Label,null,"Your Email"),r.createElement(j.Z.Control,{required:!0,type:"email",placeholder:"joe_josephson@joe.com",onChange:function(e){return g(e.target.value)}})))),r.createElement(f.Z.Footer,null,r.createElement(h.Z,{variant:"secondary",onClick:function(){return s(!1)}},"Close"),r.createElement(h.Z,{variant:"primary",onClick:function(){t({body:u,name:m,email:v,photos:[]}),s(!1)}},"Submit"))))};function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const w=function(e){var t=e.question,n=g((0,r.useState)(Object.values(t.answers).sort((function(e,t){return t.helpfulness-e.helpfulness}))),2),a=n[0],o=n[1],s=g((0,r.useState)(2),2),l=s[0],i=s[1],c=g((0,r.useState)(!1),2),m=c[0],f=c[1];return r.createElement("div",{className:"d-question"},r.createElement("strong",{className:"d-question-Q"},"Q:"),r.createElement("div",{className:"d-question-top"},r.createElement("span",{className:"d-question-body"},t.question_body),r.createElement("span",{className:"d-question-toolbar"},"Helpful ? ",r.createElement("span",{className:"d-underlined",onClick:m?null:function(){u().put("proxy/api/fec2/hratx/qa/questions/".concat(t.question_id,"/helpful?question_id=").concat(t.question_id)).then((function(){return f(!m)})).catch((function(e){throw e}))},style:m?{textDecoration:"none"}:null},"Yes"," "),"".concat(m?t.question_helpfulness+1:t.question_helpfulness," | "),r.createElement(v,{handleSubmit:function(e){u().post("proxy/api/fec2/hratx/qa/questions/".concat(t.question_id,"/answers"),e).then((function(){return o([].concat(function(e){if(Array.isArray(e))return S(e)}(t=a)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{id:a.length+1,body:e.body,answerer_name:e.name,date:new Date,helpfulness:0,photos:e.photos}]));var t})).then((function(){return i(a.length+1)})).catch((function(e){throw e}))},question_id:t.question_id}))),r.createElement("strong",{className:"d-question-A"},"A:"),r.createElement("div",{className:"d-question-bottom"},r.createElement(d,{answers:a.length>l?a.slice(0,l):a,asker:t.asker_name}),l<a.length?r.createElement("strong",{className:"d-adjust-answers",onClick:function(){return i(a.length)}},"SEE MORE ANSWERS"):l===a.length&&l>2&&r.createElement("strong",{className:"d-adjust-answers",onClick:function(){return i(2)}},"Collapse Answers")))},k=function(e){var t=e.questions;return r.createElement("div",{className:"d-question-list"},t.map((function(e){return r.createElement(w,{id:e.question_id,key:e.question_id,question:e})})))};function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const C=function(e){var t=e.handleSubmit,n=(0,r.useContext)(y.H).curProduct,a=q((0,r.useState)(!1),2),o=a[0],s=a[1],l=q((0,r.useState)(""),2),u=l[0],i=l[1],c=q((0,r.useState)(""),2),m=c[0],d=c[1],p=q((0,r.useState)(""),2),b=p[0],v=p[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"d-add-question d-border-button d-bold",onClick:function(){return s(!0)}},"Add A Question"),r.createElement(f.Z,{show:o,onHide:function(){return s(!1)},backdrop:"static",keyboard:!1},r.createElement(f.Z.Header,null,r.createElement(f.Z.Title,null,"Ask Your Question"),r.createElement(f.Z.Title,{as:"p"},"About the ",n.name)),r.createElement(f.Z.Body,null,r.createElement(j.Z,null,r.createElement(j.Z.Group,null,r.createElement(j.Z.Label,null,"Your Question"),r.createElement(j.Z.Control,{required:!0,type:"text",as:"textarea",placeholder:"How many can I buy???",onChange:function(e){return i(e.target.value)}})),r.createElement(j.Z.Group,null,r.createElement(j.Z.Label,null,"Your Nickname"),r.createElement(j.Z.Control,{required:!0,type:"text",placeholder:"example: jackson11!",onChange:function(e){return d(e.target.value)}})),r.createElement(j.Z.Group,null,r.createElement(j.Z.Label,null,"Your Email"),r.createElement(j.Z.Control,{required:!0,type:"email",placeholder:"joe_josephson@joe.com",onChange:function(e){return v(e.target.value)}})))),r.createElement(f.Z.Footer,null,r.createElement(h.Z,{variant:"secondary",onClick:function(){return s(!1)}},"Close"),r.createElement(h.Z,{variant:"primary",onClick:function(){t({body:u,name:m,email:b,product_id:n.id}),s(!1)}},"Submit"))))};function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const N=function(e){var t=(0,r.useContext)(y.H).curProduct,n=x((0,r.useState)(2),2),o=n[0],s=n[1],l=[],i=x((0,r.useState)([]),2),c=i[0],m=i[1];return(0,r.useEffect)((function(){u().get("proxy/api/fec2/hratx/qa/questions?product_id=".concat(t.id,"&count=50")).then((function(e){var t=e.data.results.sort((function(e,t){return t.question_helpfulness-e.question_helpfulness}));l=t,m(t)}))}),[t.id]),r.createElement("div",{id:"questions-and-answers",className:"d-module"},r.createElement("strong",null,"QUESTIONS & ANSWERS"),r.createElement(a,{handleInput:function(e){var t=e.target.value;t.length>2?m(l.filter((function(e){return e.question_body.toLowerCase().indexOf(t)>-1}))):m(l)}}),c.length>0&&r.createElement(k,{questions:c.length>o?c.slice(0,o):c}),r.createElement("div",{className:"d-module-bottom"},o<c.length&&r.createElement("button",{className:"d-border-button d-bold",onClick:function(){return s(o+2)}},"More Questions"),r.createElement(C,{handleSubmit:function(e){u().post("proxy/api/fec2/hratx/qa/questions",e).then((function(){var t;m([].concat(function(e){if(Array.isArray(e))return _(e)}(t=c)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||Z(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{question_id:c.length+1,question_body:e.body,question_helpfulness:0,asker_name:e.name}]))})).then((function(){return s(c.length)})).catch((function(e){return console.log("Error: ",e)}))}})))}},6700:(e,t,n)=>{var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":7093,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":238,"./ru.js":238,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=6700}}]);