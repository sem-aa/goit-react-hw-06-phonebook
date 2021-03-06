(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{121:function(t,e,n){t.exports={enter:"fadePhonebook_enter__1uiEy",enterActive:"fadePhonebook_enterActive__33r5v",exit:"fadePhonebook_exit__36X6B",exitActive:"fadePhonebook_exitActive__QSmO_"}},129:function(t,e,n){},14:function(t,e,n){t.exports={mainForm:"Form_mainForm__32ZZ_",name:"Form_name__3pAij",number:"Form_number__4LmIV",inputName:"Form_inputName__1B43q",inputNumber:"Form_inputNumber__1Y-Xu",addContact:"Form_addContact__3nBLP"}},142:function(t,e){},144:function(t,e){},155:function(t,e){},157:function(t,e){},184:function(t,e){},186:function(t,e){},187:function(t,e){},192:function(t,e){},194:function(t,e){},213:function(t,e){},225:function(t,e){},228:function(t,e){},232:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(3),o=n.n(c),r=n(21),i=n.n(r),s=(n(129),n(65)),u=n.n(s),l=n(119),m=n(122),b=n(36),f=n(37),d=n(40),_=n(39),p=n(233),h=n(41),j=n.n(h),x=n(120),v=n(14),O=n.n(v),g=function(t){Object(d.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.addContact=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:O.a.mainForm,onSubmit:this.addContact,children:[Object(a.jsxs)("label",{className:O.a.name,children:["Name"," ",Object(a.jsx)("input",{className:O.a.inputName,name:"name",type:"text",value:e,onChange:this.changeInput})]}),Object(a.jsxs)("label",{className:O.a.number,children:["Number"," ",Object(a.jsx)("input",{className:O.a.inputNumber,name:"number",type:"text",value:n,onChange:this.changeInput})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:O.a.addContact,type:"submit",children:"Add Contact"})]})}}]),n}(o.a.Component),C=n(30),N=n.n(C),S=n(234),k=n(121),F=n.n(k);var A=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)(S.a,{component:"ul",children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsx)(p.a,{classNames:F.a,timeout:500,children:Object(a.jsxs)("li",{className:N.a.conctact,children:[Object(a.jsx)("p",{className:N.a.name,children:c}),Object(a.jsx)("p",{className:N.a.number,children:o}),Object(a.jsx)("button",{className:N.a.button,onClick:function(){return n(e)},children:"Delete"})]})},e)}))})},y=n(66),P=n.n(y),w=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:P.a.find,children:["Find number",Object(a.jsx)("input",{className:P.a.inputFind,type:"text",value:e,onChange:n})]})},L=n(67),D=n.n(L),I=n(68),B=n.n(I),E=function(){return Object(a.jsx)(p.a,{in:!0,appear:!0,classNames:B.a,timeout:500,unmountOnExit:!0,children:Object(a.jsx)("h2",{className:B.a.title,children:"Phonebook"})})},T=n(133),H=function(t){Object(d.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],doubleContact:!1,filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){if(t.state.contacts.find((function(t){return t.name===e.name})))return t.setState({doubleContact:!0}),void setTimeout((function(){return t.setState({doubleContact:!1})}),3e3);var n={id:T.generate(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[n].concat(Object(m.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLocaleLowerCase().includes(c)}))},t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("contacts"),n=JSON.parse(e),console.log(n),console.log(localStorage),!n){t.next=7;break}return t.next=7,this.setState({contacts:n});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=t.doubleContact,o=this.getVisibleContact();return Object(a.jsxs)("div",{className:j.a.App,children:[Object(a.jsx)(p.a,{in:c,classNames:D.a,timeout:500,unmountOnExit:!0,children:Object(a.jsx)("div",{className:j.a.alert,children:"\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"})}),Object(a.jsx)(E,{}),Object(a.jsx)(g,{onSubmit:this.formSubmitHandler}),Object(a.jsx)("h2",{className:j.a.title,children:"Contacts"}),Object(a.jsx)(p.a,{in:n.length>1,classNames:D.a,timeout:500,unmountOnExit:!0,children:Object(a.jsx)(w,{value:e,onChange:this.changeFilter})}),Object(a.jsx)(A,{contacts:o,onDeleteContact:this.deleteContact})]})}}]),n}(o.a.Component),J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root")),J()},30:function(t,e,n){t.exports={contact:"Phonebook_contact__3m7IU",button:"Phonebook_button__3EoCD",name:"Phonebook_name__3lf6D",number:"Phonebook_number__1HT8N"}},41:function(t,e,n){t.exports={App:"App_App__2QrxK",alert:"App_alert__2TrdC"}},66:function(t,e,n){t.exports={find:"Filter_find__2myWQ",inputFind:"Filter_inputFind__1dlBc"}},67:function(t,e,n){t.exports={enter:"fade_enter__1HwOU",enterActive:"fade_enterActive__Sowok",exit:"fade_exit__3sna8",exitActive:"fade_exitActive__1VRz5"}},68:function(t,e,n){t.exports={appear:"fadeLogo_appear__1uEBv",appearActive:"fadeLogo_appearActive__1-P1L",title:"fadeLogo_title__3-Krj"}}},[[232,1,2]]]);
//# sourceMappingURL=main.0814c6f6.chunk.js.map