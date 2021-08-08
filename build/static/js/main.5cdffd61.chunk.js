(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{31:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return A}));var r,c=n(13),a=n.n(c),o=n(18),s=n(14),u=n.n(s),i=n(2),b=Object(i.b)("phonebook/fetchContactsRequest"),l=Object(i.b)("phonebook/fetchContactsSuccess"),d=Object(i.b)("phonebook/fetchContactsError"),j=Object(i.b)("phonebook/addContactSuccess"),h=Object(i.b)("phonebook/addContactsError"),f=Object(i.b)("phonebook/addContactRequest"),O={fetchContactsRequest:b,fetchContactsSuccess:l,fetchContactsError:d,changeFilter:Object(i.b)("phonebook/filter"),addContactRequest:f,addContactSuccess:j,addContactsError:h,deleteContactSuccess:Object(i.b)("phonebook/deleteContactSuccess"),deleteContactsError:Object(i.b)("phonebook/deleteContactsError"),deleteContactRequest:Object(i.b)("phonebook/deleteContactRequest")},g={submit:function(e){var t=e.name,n=e.number;return function(){var e=Object(o.a)(a.a.mark((function e(r){var c,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={name:t,number:n},r(O.addContactRequest()),e.prev=2,e.next=5,u.a.post("/contacts",c);case 5:o=e.sent,s=o.data,r(O.addContactSuccess(s)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r(O.addContactsError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},deletedContact:function(e){return function(t){t(O.deleteContactRequest()),u.a.delete("/contacts/".concat(e)).then((function(){return t(O.deleteContactSuccess(e))})).catch((function(e){return t(O.deleteContactsError(e.message))}))}},fetchContacts:function(){return function(e){e(O.fetchContactsRequest()),u.a.get("/contacts").then((function(t){var n=t.data;return e(O.fetchContactsSuccess(n))})).catch((function(t){return e(O.fetchContactsError(t.message))}))}}},p=n(20),v=function(e){return e.contacts.filter},x={getValue:v,getVisibleContact:Object(p.a)([v,function(e){return e.contacts.items}],(function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}))},k=n(4),C=n(25),m=n(6),y=O.fetchContactsSuccess,S=O.addContactSuccess,E=O.deleteContactSuccess,R=O.changeFilter,q=Object(i.c)([],(r={},Object(k.a)(r,y,(function(e,t){return t.payload})),Object(k.a)(r,S,(function(e,t){var n=t.payload;return e.map((function(e){return e.name})).includes(n.name)?alert("".concat(n.name," is already in contacts.")):[n].concat(Object(C.a)(e))})),Object(k.a)(r,E,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),w=Object(i.c)("",Object(k.a)({},R,(function(e,t){return t.payload}))),A=Object(m.b)({items:q,filter:w})},79:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(24),o=n.n(a),s=n(16),u=n(7),i=n(42),b=n(5),l=n(8),d=n(1),j={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function h(){var e=Object(u.c)(l.c.getIsAuthenticated);return Object(d.jsxs)("nav",{children:[Object(d.jsx)(s.b,{to:"/",exact:!0,style:j.link,activeStyle:j.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(d.jsx)(s.b,{to:"/phonebook",exact:!0,style:j.link,activeStyle:j.activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})]})}var f=n.p+"static/media/default-avatar.566eacd7.png",O={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function g(){var e=Object(u.b)(),t=Object(u.c)(l.c.getUsername),n=Object(r.useCallback)((function(){e(l.a.logOut())}),[e]);return Object(d.jsxs)("div",{style:O.container,children:[Object(d.jsx)("img",{src:f,alt:"",width:"32",style:O.avatar}),Object(d.jsxs)("span",{style:O.name,children:["Welcome, ",t]}),Object(d.jsx)("button",{type:"button",onClick:n,children:"Logout"})]})}var p={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(s.b,{to:"/register",exact:!0,style:p.link,activeStyle:p.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)(s.b,{to:"/login",exact:!0,style:p.link,activeStyle:p.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},x={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function k(){var e=Object(u.c)(l.c.getIsAuthenticated);return Object(d.jsxs)("header",{style:x.header,children:[Object(d.jsx)(h,{}),e?Object(d.jsx)(g,{}):Object(d.jsx)(v,{})]})}var C=n(21),m=n(26),y=["isAuthenticated","redirectTo","children"];function S(e){e.isAuthenticated;var t=e.redirectTo,n=e.children,r=Object(m.a)(e,y),c=Object(u.c)(l.c.getIsAuthenticated);return Object(d.jsx)(b.b,Object(C.a)(Object(C.a)({},r),{},{children:c?n:Object(d.jsx)(b.a,{to:t})}))}var E=["isAuthenticated","redirectTo","children"];function R(e){e.isAuthenticated;var t=e.redirectTo,n=e.children,r=Object(m.a)(e,E),c=Object(u.c)(l.c.getIsAuthenticated);return Object(d.jsx)(b.b,Object(C.a)(Object(C.a)({},r),{},{children:c&&r.restricted?Object(d.jsx)(b.a,{to:t}):n}))}var q=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,95))})),w=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,96))})),A=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,97))})),U=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,98))}));function L(){var e=Object(u.b)();return Object(r.useEffect)((function(){e(l.a.getCurrentUser())}),[e]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)("p",{children:"...Load"}),children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(R,{exact:!0,path:"/",children:Object(d.jsx)(q,{})}),Object(d.jsx)(R,{path:"/register",restricted:!0,redirectTo:"/phonebook",children:Object(d.jsx)(w,{})}),Object(d.jsx)(R,{path:"/login",restricted:!0,redirectTo:"/phonebook",children:Object(d.jsx)(A,{})}),Object(d.jsx)(S,{path:"/phonebook",redirectTo:"/login",children:Object(d.jsx)(U,{})})]})})]})}var I=n(25),z=n(2),T=n(17),B=n(43),F=n.n(B),W=n(31),D=Object(I.a)(Object(z.d)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),J={key:"auth",storage:F.a,whitlist:["token"]},V=Object(z.a)({reducer:{auth:Object(T.g)(J,l.b),contacts:W.c},middleware:D,devContacts:!1}),M={store:V,persistor:Object(T.h)(V)};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u.a,{store:M.store,children:Object(d.jsx)(i.a,{loading:null,persistor:M.persistor,children:Object(d.jsx)(s.a,{children:Object(d.jsx)(L,{})})})})}),document.getElementById("root"))},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return C})),n.d(t,"a",(function(){return A})),n.d(t,"c",(function(){return U}));var r,c,a,o,s=n(2),u=Object(s.b)("auth/registerRequest"),i=Object(s.b)("auth/registerSuccess"),b=Object(s.b)("auth/registerError"),l=Object(s.b)("auth/loginRequest"),d=Object(s.b)("auth/loginSuccess"),j=Object(s.b)("auth/loginError"),h={registerRequest:u,registerSuccess:i,registerError:b,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:l,loginSuccess:d,loginError:j,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")},f=n(4),O=n(6),g={name:null,email:null},p=Object(s.c)(g,(r={},Object(f.a)(r,h.registerSuccess,(function(e,t){return t.payload.user})),Object(f.a)(r,h.loginSuccess,(function(e,t){return t.payload.user})),Object(f.a)(r,h.logoutSuccess,(function(){return g})),Object(f.a)(r,h.getCurrentUserSuccess,(function(e,t){return t.payload})),r)),v=Object(s.c)(null,(c={},Object(f.a)(c,h.registerSuccess,(function(e,t){return t.payload.token})),Object(f.a)(c,h.loginSuccess,(function(e,t){return t.payload.token})),Object(f.a)(c,h.logoutSuccess,(function(){return null})),c)),x=Object(s.c)(null,(a={},Object(f.a)(a,h.registerError,(function(e,t){return t.payload})),Object(f.a)(a,h.loginError,(function(e,t){return t.payload})),Object(f.a)(a,h.logoutError,(function(e,t){return t.payload})),Object(f.a)(a,h.getCurrentUserError,(function(e,t){return t.payload})),a)),k=Object(s.c)(!1,(o={},Object(f.a)(o,h.registerSuccess,(function(){return!0})),Object(f.a)(o,h.loginSuccess,(function(){return!0})),Object(f.a)(o,h.getCurrentUserSuccess,(function(){return!0})),Object(f.a)(o,h.registerError,(function(){return!1})),Object(f.a)(o,h.loginError,(function(){return!1})),Object(f.a)(o,h.getCurrentUserError,(function(){return!1})),Object(f.a)(o,h.logoutSuccess,(function(){return!1})),o)),C=Object(O.b)({user:p,isAuthenticated:k,token:v,error:x}),m=n(13),y=n.n(m),S=n(18),E=n(14),R=n.n(E);R.a.defaults.baseURL="https://connections-api.herokuapp.com";var q=function(e){R.a.defaults.headers.common.Authorization="Bearer ".concat(e)},w=function(){R.a.defaults.headers.common.Authorization=" "},A={register:function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h.registerRequest()),t.prev=1,t.next=4,R.a.post("/users/signup",e);case 4:r=t.sent,q(r.data.token),n(h.registerSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(h.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h.loginRequest()),t.prev=1,t.next=4,R.a.post("/users/login",e);case 4:r=t.sent,q(r.data.token),n(h.loginSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(h.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h.logoutRequest()),e.prev=1,e.next=4,R.a.post("/users/logout");case 4:w(),t(h.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(h.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(S.a)(y.a.mark((function e(t,n){var r,c,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(),c=r.auth.token){e.next=3;break}return e.abrupt("return");case 3:return q(c),t(h.getCurrentUserRequest()),e.prev=5,e.next=8,R.a.get("/users/current");case 8:a=e.sent,t(h.getCurrentUserSuccess(a.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(h.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},U={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUsername:function(e){return e.auth.user.name}}}},[[79,1,2]]]);
//# sourceMappingURL=main.5cdffd61.chunk.js.map