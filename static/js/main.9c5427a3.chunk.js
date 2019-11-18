(this.webpackJsonpinternproject=this.webpackJsonpinternproject||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},38:function(e,t,a){},47:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(11),c=a.n(o),i=(a(38),a(8)),s=a(16),l=a(14),u=(a(39),a(18)),m="DISPLAY_MESSAGE",p="GET_ORGANIZATIONS",f="GET_ORGANIZATIONS_SUCCESS",b="ADD_ORGANIZATION",d="GET_IRRIGATIONGROUPS",g="GET_IRRIGATIONGROUPS_SUCCESS",O="ADD_IRRIGATIONGROUP",y="GET_FAILURE",h="ADD_FAILURE",v="CLEAR_ERROR",j="ADD_SUCCESS";function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=Object(u.b)((function(e){return{organizations:e.organizations,irrigationgroups:e.irrigationgroups,info:e.info}}),(function(e){return{getOrganizations:function(){return e({type:p,payload:""})},addOrganization:function(t){return e(function(e){return{type:b,payload:e}}(t))},getIrrigationGroups:function(){return e({type:d,payload:""})},addIrrigationGroup:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))((function(e){var t={organizationName:"",primaryContactPersonName:""},a={totalBeneficiary:"",hasFormedWUSC:!0,organization:{}},o=Object(r.useState)([]),c=Object(s.a)(o,2),u=c[0],m=c[1],p=Object(r.useState)(t),f=Object(s.a)(p,2),b=f[0],d=f[1],g=Object(r.useState)(a),O=Object(s.a)(g,2),y=O[0],h=O[1],v=Object(r.useState)(""),j=Object(s.a)(v,2),E=j[0],w=j[1],P=function(e){var t=e.target,a=t.name,r=t.value;d(N({},b,Object(i.a)({},a,r)))},S=function(e){var t=e.target,a=t.name,r=t.value;h(N({},y,Object(i.a)({},a,r)))};Object(r.useEffect)((function(){e.getOrganizations()}),[]),Object(r.useEffect)((function(){e.info.message&&Object(l.b)(e.info.message)}),[e.info]),Object(r.useEffect)((function(){setTimeout((function(){m(e.organizations.message)}),2e3)}));return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(l.a,{position:l.b.POSITION.TOP_RIGHT}),n.a.createElement("form",{className:"jumbotron",onSubmit:function(a){a.preventDefault(),function(){if(b.organizationName&&b.primaryContactPersonName){var a=b,r=new Date,n=r.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),o=r.getFullYear()+"/"+(r.getMonth()+1)+"/"+r.getDate(),c=Math.floor(1e4*Math.random());a.id="organization"+o+c+n,e.addOrganization(a),w(a.id),d(t)}else Object(l.b)("Please provide all inputs,have you forgot to add organization first")}()}},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"organizationName",className:"col-sm-2 col-form-label"},"Organization Name"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("input",{type:"text",className:"form-control-plaintext",name:"organizationName",id:"organizationName",value:b.organizationName,onChange:P,placeholder:"Enter organization Name"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"primaryContactPersonName",className:"col-sm-2 col-form-label"},"Contact Person Name"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("input",{type:"text",className:"form-control-plaintext",id:"primaryContactPersonName",name:"primaryContactPersonName",value:b.primaryContactPersonName,onChange:P,placeholder:"Enter here"}))),n.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Add Organization")),n.a.createElement("form",{className:"jumbotron",onSubmit:function(t){t.preventDefault(),function(){if(y.hasFormedWUSC&&y.totalBeneficiary&&E){var t=y,r=new Date,n=r.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),o=r.getFullYear()+"/"+(r.getMonth()+1)+"/"+r.getDate(),c=Math.floor(1e4*Math.random());t.id="irrigation-group"+o+c+n;var i={id:E};t.organization=i,e.addIrrigationGroup(t),h(a)}else Object(l.b)("Please provide all inputs")}()}},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"totalBeneficiary",className:"col-sm-2 col-form-label"},"Total Beneficiary HH"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("input",{type:"number",className:"form-control-plaintext",name:"totalBeneficiary",id:"totalBeneficiary",value:y.totalBeneficiary,onChange:S,placeholder:"Enter Total Beneficiary HH"}))),n.a.createElement("fieldset",{className:"form-group"},n.a.createElement("div",{className:"row"},n.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"WUSC Formed"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"hasFormedWUSC",id:"hasFormedWUSC1",value:"true",onChange:S,checked:!0}),n.a.createElement("label",{className:"form-check-label",htmlFor:"hasFormedWUSC1"},"True")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"hasFormedWUSC",id:"hasFormedWUSC2",value:"false",onChange:S}),n.a.createElement("label",{className:"form-check-label",htmlFor:"hasFormedWUSC2"},"False"))))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"organizationType"},"Organization Type"),n.a.createElement("select",{className:"form-control",id:"organizationType"},u?u.map((function(e,t){return n.a.createElement("option",{key:t,className:"black"},e.organizationName)})):"")),n.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Add Irrigation User Group")))}));a(47);var P=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("h3",{className:"navbar-brand"},"MyOrganization")),n.a.createElement(w,null),n.a.createElement("footer",null,n.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2018 developed by _ Subash")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);var S=a(9);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var z=[];function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var k={success:!1,message:{}};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var I={success:!1,message:[]};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=[];var G=Object(S.c)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case m:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{data:a});default:return e}},info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case y:case h:return A({},e,{message:a});case v:return e;case j:return A({},e,{message:a});default:return e}},organizations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=t.payload||[];switch(t.type){case f:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{success:!0,message:a});default:return{state:e}}},irrigationgroups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case g:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{success:!0,message:a});default:return e}}}),U=a(32),R=a(7),_=a.n(R),W=a(5),B="http://5dd0d218d5f1a500149a87cd.mockapi.io/api/v1/",M=a(13),L=a.n(M),H=_.a.mark(J),Y=_.a.mark($),Z=[];function J(e){var t,a;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return Z=[],r.next=3,Object(W.a)(L.a.get,"".concat(B,"/irrigation-user-groups"),e.payload);case 3:if(200!==(t=r.sent).status||!t.data){r.next=10;break}return t.data.map((function(e,t){return Z.push({id:e.id,totalBeneficiary:e.totalBeneficiary,hasFormedWUSC:e.hasFormedWUSC,organization:e.organization}),null})),r.next=8,Object(W.b)({type:g,payload:Z});case 8:r.next=13;break;case 10:return a="Failed to get irrigation groups"+t.status,r.next=13,Object(W.b)({type:y,payload:a});case 13:case"end":return r.stop()}}),H)}function $(e){var t,a,r,n,o,c,i;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=new Date,r=a.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),n=a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate(),o=Math.floor(1e4*Math.random()),t.id="ig"+n+o+r,s.next=8,Object(W.a)(L.a.post,"".concat(B,"/irrigation-user-groups"),e.payload);case 8:if(!((c=s.sent).status>200&&c.data)){s.next=19;break}return s.next=12,Object(W.b)({type:d,payload:""});case 12:return s.next=14,Object(W.b)({type:p,payload:""});case 14:return"Success!! Irrigation Group Added",s.next=17,Object(W.b)({type:j,payload:"Success!! Irrigation Group Added"});case 17:s.next=22;break;case 19:return i="Failed To Add Irrigation Group, "+c.status,s.next=22,Object(W.b)({type:h,payload:i});case 22:case"end":return s.stop()}}),Y)}var q=_.a.mark(V),K=_.a.mark(X),Q=[];function V(e){var t,a;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return Q=[],r.next=3,Object(W.a)(L.a.get,"".concat(B,"/organizations"),e.payload);case 3:if(200!==(t=r.sent).status||!t.data){r.next=10;break}return t.data.map((function(e){return Q.push({id:e.id,primaryContactPersonName:e.primaryContactPersonName,organizationType:e.organizationType,organizationName:e.organizationName}),null})),r.next=8,Object(W.b)({type:f,payload:Q});case 8:r.next=13;break;case 10:return a="Failed to get organizations"+t.status,r.next=13,Object(W.b)({type:y,payload:a});case 13:case"end":return r.stop()}}),q)}function X(e){var t,a;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(W.a)(L.a.post,"".concat(B,"/organizations"),e.payload);case 2:if(!((t=r.sent).status>=200)){r.next=11;break}return r.next=6,Object(W.b)({type:p,payload:""});case 6:return"Success!! Organization Added",r.next=9,Object(W.b)({type:j,payload:"Success!! Organization Added"});case 9:r.next=14;break;case 11:return a="Failed To Add Organization, "+t.status,r.next=14,Object(W.b)({type:h,payload:a});case 14:case"end":return r.stop()}}),K)}var ee=_.a.mark(te);function te(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)(p,V);case 2:return e.next=4,Object(W.c)(b,X);case 4:return e.next=6,Object(W.c)(d,J);case 6:return e.next=8,Object(W.c)(O,$);case 8:case"end":return e.stop()}}),ee)}var ae=Object(U.a)(),re=Object(S.e)(G,Object(S.a)(ae));ae.run(te,re.dispatch);var ne=n.a.createElement(u.a,{store:re},n.a.createElement(P,null));c.a.render(ne,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9c5427a3.chunk.js.map