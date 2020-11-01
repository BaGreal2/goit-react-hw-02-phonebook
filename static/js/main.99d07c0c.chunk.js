(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={list:"Contacts_list__2ALTo",listItem:"Contacts_listItem__Bo3T2",button:"Contacts_button__1rqxZ"}},function(e,t,n){e.exports={container:"NameForm_container__Cvt-z",title:"NameForm_title__2u4B2",button:"NameForm_button__2lBFj"}},,function(e,t,n){e.exports={title:"App_title__6eRQA"}},,,function(e,t,n){e.exports={container:"Filter_container__15YJS"}},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=(n(18),n(8)),l=n(2),s=n(3),u=n(1),h=n(5),m=n(4),b=n(7),d=n.n(b),p=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeName=a.onChangeName.bind(Object(u.a)(a)),a.onChangeNumber=a.onChangeNumber.bind(Object(u.a)(a)),a.onPushContact=a.onPushContact.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onChangeName",value:function(e){e.preventDefault(),this.props.handleGetName(e.target.value)}},{key:"onChangeNumber",value:function(e){e.preventDefault(),this.props.handleGetNumber(e.target.value)}},{key:"onPushContact",value:function(e){e.preventDefault(),console.log(e.target),this.props.handlePushContact(this.props.name,this.props.number)}},{key:"render",value:function(){var e=this.props.name,t=this.props.number;return o.a.createElement("div",{className:d.a.container},o.a.createElement("form",{onSubmit:this.onPushContact},o.a.createElement("h3",{className:d.a.title},"Name"),o.a.createElement("input",{name:"name",type:"text",value:e,onChange:this.onChangeName}),o.a.createElement("h3",{className:d.a.title},"Number"),o.a.createElement("input",{name:"number",type:"text",value:t,onChange:this.onChangeNumber}),o.a.createElement("br",null),o.a.createElement("button",{className:d.a.button,type:"submit"},"Add contact")))}}]),n}(a.Component),f=n(6),v=n.n(f),C=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onHandleDelete=a.onHandleDelete.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onHandleDelete",value:function(e){e.preventDefault(),console.log(e.target.parentNode.closest("li").getAttribute("id")),this.props.handleDeleteContact(e.target.parentNode.closest("li").getAttribute("id"))}},{key:"render",value:function(){return o.a.createElement("li",{id:this.props.id,className:v.a.listItem},o.a.createElement("p",null,this.props.name,": ",this.props.number)," ",o.a.createElement("button",{onClick:this.onHandleDelete,className:v.a.button},"Delete"))}}]),n}(a.Component),j=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.contacts.filter((function(t){return t.name.toLowerCase().includes(e.props.filter)}));return o.a.createElement("div",null,o.a.createElement("ul",{className:v.a.list},t.map((function(t){return o.a.createElement(C,{name:t.name,number:t.number,id:t.id,key:t.id,handleDeleteContact:e.props.handleDeleteContact})}))))}}]),n}(a.Component),N=n(21),O=n(12),g=n.n(O),E=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onFilterChange=a.onFilterChange.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onFilterChange",value:function(e){e.preventDefault(),this.props.handleGetFilter(e.target.value)}},{key:"render",value:function(){var e=this.props.filter;return o.a.createElement("div",{className:g.a.container},o.a.createElement("h3",null,"Find contacts by name"),o.a.createElement("input",{type:"text",value:e,onChange:this.onFilterChange}))}}]),n}(a.Component),y=n(9),k=n.n(y),_=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleGetName=a.handleGetName.bind(Object(u.a)(a)),a.handleGetNumber=a.handleGetNumber.bind(Object(u.a)(a)),a.handleGetFilter=a.handleGetFilter.bind(Object(u.a)(a)),a.handlePushContact=a.handlePushContact.bind(Object(u.a)(a)),a.handleDeleteContact=a.handleDeleteContact.bind(Object(u.a)(a)),a.state={contacts:[{name:"Roise Simpson",number:"645-17-49",id:Object(N.a)()},{name:"Hermione Kline",number:"443-89-12",id:Object(N.a)()},{name:"Eden Clements",number:"459-12-56",id:Object(N.a)()}],filter:"",name:"",number:""},a}return Object(s.a)(n,[{key:"handleGetName",value:function(e){this.setState({name:e})}},{key:"handleGetNumber",value:function(e){this.setState({number:e})}},{key:"handleGetFilter",value:function(e){this.setState({filter:e.toLowerCase()})}},{key:"handleDeleteContact",value:function(e){var t=this.state.contacts.map((function(e){return e.id})),n=Object(i.a)(this.state.contacts),a=t.indexOf(e);n.splice(a,1),this.setState({contacts:Object(i.a)(n)})}},{key:"handlePushContact",value:function(e,t){this.state.contacts.map((function(e){return e.name})).includes(e)?alert("".concat(e," is already in contacts.")):this.setState((function(n){return{contacts:[].concat(Object(i.a)(n.contacts),[{name:e,number:t,id:Object(N.a)()}])}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h2",{className:k.a.title},"Phonebook"),o.a.createElement(p,{name:this.state.name,number:this.state.number,handleGetName:this.handleGetName,handleGetNumber:this.handleGetNumber,handlePushContact:this.handlePushContact}),o.a.createElement("h2",{className:k.a.title},"Contacts"),o.a.createElement(E,{filter:this.state.filter,handleGetFilter:this.handleGetFilter}),o.a.createElement(j,{contacts:this.state.contacts,filter:this.state.filter,handleDeleteContact:this.handleDeleteContact}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.99d07c0c.chunk.js.map