(this.webpackJsonpsabygramm=this.webpackJsonpsabygramm||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n,s=a(0),r=a.n(s),c=a(19),o=a.n(c),i=a(3),l=a(10),d=a(11),u=a(16),m=a(15),p=a(14),h=(a(37),a(1)),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).renderAuthPage=function(){var t=e.props,a=t.password,n=t.phone;return Object(h.jsxs)("section",{className:"login-container",children:[Object(h.jsx)("h1",{className:"login-text",children:"\u0432\u0445\u043e\u0434"}),Object(h.jsxs)("form",{method:"POST",action:"",onSubmit:e.sendForm,className:"login-form",children:[Object(h.jsxs)("div",{className:"tel-wrapper",children:[Object(h.jsx)("p",{className:"number-7",children:"+7"}),Object(h.jsx)("input",{type:"tel",name:"phone-number",placeholder:"\u0422\u0435\u043b. \u043d\u043e\u043c\u0435\u0440",value:n,onChange:e.props.setPhone,maxLength:"10",pattern:"\\d*",required:!0})]}),Object(h.jsx)("input",{type:"text",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:e.props.setPassword,value:a,required:!0}),Object(h.jsx)("button",{type:"submit",className:"login-button",children:Object(h.jsx)("i",{className:"fas fa-play"})})]})]})},e.sendForm=function(t){t.preventDefault(),t.target.submit(),e.props.history.push("/edit")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,a=e.isRegistrated;return t&&a?Object(h.jsx)("div",{children:"\u0441\u0442\u0430\u0440\u0438\u043d\u0446\u0430 \u0441 \u0434\u0438\u0430\u043b\u043e\u0433\u0430\u043c\u0438"}):a?!t&&a?this.renderAuthPage("/edit"):void 0:this.renderAuthPage("/edit")}}]),a}(s.Component),g=Object(p.b)((function(e){return{isAuthenticated:e.isAuthenticated,isRegistrated:e.isRegistrated}}),(function(e){return{setPhone:function(t){var a=t.target.value;e({type:"SET_MY_PASSWORD",payload:a})},setPassword:function(t){var a=t.target.value;e({type:"SET_MY_PHONE",payload:a})}}}))(j),b=(a(39),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).setPhoto=function(t){var a=new FileReader,n=t.target.files[0];a.readAsDataURL(n),a.onload=function(){e.props.setProfilePhoto(a.result),document.getElementById("editForm").pictureUrl.value=a.result},a.onerror=function(){alert("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438")}},e.setData=function(t){if(e.props.setUserName(document.getElementById("editForm").username.value),e.props.setWelcomeMessage(document.getElementById("editForm").message.value),!e.props.photo){var a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" >\n        <circle cx="130" cy="130" r="180"  fill="#738DED" width="200" />\n          <text x="90" y="220" font-size="180" font-family="Roboto, sans-serif" fill="white"> '.concat(document.getElementById("editForm").username.value[0].toUpperCase(),"\n          </text>     \n        </svg>"),n=new Blob([a],{type:"image/svg+xml"}),s=URL.createObjectURL(n);e.props.setProfilePhoto(s),document.getElementById("editForm").pictureUrl.value=s}document.getElementById("editForm").submit()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.photo;return Object(h.jsx)("section",{className:"edit-container",children:Object(h.jsxs)("form",{className:"name-form",id:"editForm",action:"",method:"POST",onSubmit:this.setData,children:[Object(h.jsxs)("label",{htmlFor:"picture",id:"upload-background",className:"upload-background",children:[e?Object(h.jsx)("img",{src:e,alt:"Profile icon",className:"profile-photo"}):Object(h.jsx)("div",{className:"plus",children:"+"}),Object(h.jsx)("input",{type:"file",id:"picture",accept:"image/*",onChange:this.setPhoto})]}),Object(h.jsx)("input",{type:"text",name:"pictureUrl",hidden:!0}),Object(h.jsx)("p",{className:"photo-label",children:"\u0424\u043e\u0442\u043e"}),Object(h.jsx)("input",{type:"text",name:"username",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0}),Object(h.jsx)("input",{type:"text",name:"message",placeholder:"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c!",required:!0}),Object(h.jsx)("button",{type:"submit",className:"edit-button",children:Object(h.jsx)("i",{className:"fas fa-play"})})]})})}}]),a}(s.Component)),f=Object(p.b)((function(e){var t=e.myProfilePhoto,a=e.myWelcomeMessage;return{name:e.myUserName,message:a,photo:t}}),(function(e){return{setProfilePhoto:function(t){return e({type:"SET_MY_PROFILE_PHOTO",payload:t})},setUserName:function(t){return e({type:"SET_MY_USER_NAME",payload:t})},setWelcomeMessage:function(t){return e({type:"SET_MY_WELCOME_MESSAGE",payload:t})}}}))(b),O=a(18),v=a(50),x=a(49),y=(a(40),document.getElementsByClassName("dialog")),P=document.createElement("ul");function E(){n&&(clearTimeout(n),n=null)}function N(e){var t=e.currentTarget;n||(n=setTimeout((function(){t.appendChild(P)}),500))}P.innerHTML="<li>\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0438\u0445\u0438\u043c</li><li>\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u0440\u043e\u043a\u0438\u043c</li><li>\u0423\u0434\u0430\u043b\u0438\u0442\u044c</li>",P.className="settings",document.addEventListener("DOMSubtreeModified",(function(e){for(var t=0;t<y.length;t++){var a=y[t];a.addEventListener("touchstart",N,!1),a.addEventListener("touchend",E,!1),a.addEventListener("mousedown",N,!1),a.addEventListener("mouseup",E,!1)}})),document.getElementById("root").addEventListener("click",(function(){P.remove()}));var w=function(e){var t=e.dialog,a=t.name,n=t.lastMessage,s=t.img;return Object(h.jsxs)("div",{className:"dialog",children:[Object(h.jsx)("img",{src:s,alt:"dialogPicture",className:"dialog-img"}),Object(h.jsxs)("div",{className:"dialog-contain",children:[Object(h.jsx)("p",{className:"dialog-name",children:a}),Object(h.jsx)("p",{className:"dialog-message",children:n})]})]})},S=a(23),_=a.n(S),M=a(27),F=function(){function e(){Object(l.a)(this,e),this.dialogData=[[{id:0,name:"\u0410\u043d\u0436\u0435\u043b\u0438\u043d\u0430",lastMessage:"\u041a\u0430\u043a \u0442\u044b?",img:"https://bugaga.ru/uploads/posts/2016-12/1481556556_kot-volshebnik-1.jpg"},{id:1,name:"\u041a\u0440\u0438\u0441",lastMessage:"\u0412\u0441\u0442\u0430\u043b\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432 6 \u0443\u0442\u0440\u0430 \u043f\u0440\u0438\u043a\u0438\u043d\u044c...",img:"https://yt3.ggpht.com/a/AATXAJynSQVjxLr742pi_eZXJxyzjfWLaRcCxgYaeJX_Cg=s900-c-k-c0xffffffff-no-rj-mo"}],[{id:2,name:"\u0421\u0435\u0440\u0433\u0435\u0439",lastMessage:"\u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0432 \u0442\u0430\u0441\u043a\u0430\u0445",img:"https://i02.fotocdn.net/s110/defbcd4b451a9263/gallery_xl/2460844912.jpg"},{id:3,name:"\u042d\u0434\u0443\u0430\u0440\u0434",lastMessage:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043f\u043e\u0434\u043e\u0448\u0435\u043b",img:"https://pm1.narvii.com/7357/dd8ddd1a25b83dcf20d7036a4656fc47b7aad917r1-1080-1198v2_hq.jpg"},{id:7,name:"\u0421\u0435\u0440\u0451\u0436\u0430",lastMessage:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0443 \u043c\u0435\u043d\u044f \u0432\u043e\u043f\u0440\u043e\u0441",img:"https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1"}],[{id:4,name:"\u0412\u043e\u0432\u0430",lastMessage:"\u0412\u044b\u0443\u0447\u0438\u043b \u0440\u0435\u0430\u043a\u0442 \u0437\u0430 \u0447\u0430\u0441",img:"https://cutewallpaper.org/21/grumpy-cat-screensaver/Grumpy-Wallpapers-Wallpaper-Cave.jpg"},{id:5,name:"\u0421\u0430\u0448\u0430",lastMessage:"\u042f \u043d\u0430 2 \u044d\u0442\u0430\u0436\u0435 \u043a\u0443\u0434\u0430 \u0438\u0434\u0442\u0438?",img:"https://ustaliy.ru/wp-content/uploads/2019/03/universe.jpg"},{id:6,name:"\u041b\u0451\u0448\u0430",lastMessage:"\u042f \u0432 \u0441\u0442\u043e\u043b\u043e\u0432\u043e\u0439, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e",img:"https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5d62dba6998ed600ad85c10e_5d62dbc135c8d800adef2383/scale_1200"}]]}return Object(d.a)(e,[{key:"sendLoginForm",value:function(){var e=Object(M.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/",{method:"POST",body:{login:t.login,password:t.password}});case 2:e.sent.ok&&alert("Logged in!");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDialogData",value:function(e){return this.dialogData[e]}}]),e}(),C=(a(42),function(e){var t=e.groupId,a=e.onSearch,n=e.dialogs,r=Object(s.useState)(!1),c=Object(O.a)(r,2),o=c[0],i=c[1],l=null;switch(t){case 0:l="\u041e\u0431\u0449\u0438\u0435";break;case 1:l="\u0413\u0440\u043e\u043c\u043a\u0438\u0435";break;case 2:l="\u0422\u0438\u0445\u0438\u0435";break;default:l=null}return Object(h.jsxs)("header",{className:"dialogs-header",children:[Object(h.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"}),Object(h.jsx)("i",{className:"fa fa-users","aria-hidden":"true"}),Object(h.jsx)("div",{className:"group-name",children:l}),Object(h.jsx)("input",{type:"text",className:"dialogs-search",onInput:function(e){var s=[];n.forEach((function(t){t.name.toLowerCase().includes(e.target.value.toLowerCase())&&s.push(t)})),a(s,t)},onBlur:function(e){a(null,t),i(!1),e.target.value=null},hidden:!o,autoFocus:!0}),Object(h.jsx)("i",{className:"fa fa-search","aria-hidden":"true",onClick:function(){i(!1===o)}})]})}),L=(a(43),a(44),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",phone:""},e.changePlaceholderFocus=function(){e.setState({placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"})},e.changePlaceholderBlur=function(){e.setState({placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})},e.changePhone=function(t){e.setState({phone:t.target.value})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("form",{className:"add-contact-form",children:Object(h.jsx)("input",{className:"add-contact",placeholder:this.state.placeholder,onFocus:this.changePlaceholderFocus,onBlur:this.changePlaceholderBlur,value:this.state.phone,onChange:this.changePhone})})}}]),a}(s.Component)),k=function(e){var t=e.groupId,a=e.service,n=e.itemsFound,s=void 0===n?null:n,r=null;return r=s||a.getDialogData(t),Object(h.jsx)("div",{children:r.map((function(e){return Object(h.jsx)(w,{dialog:e},e.id)}))})},A=function(e){var t=e.groupId,a=Object(s.useState)(+t),n=Object(O.a)(a,2),r=n[0],c=n[1],o=Object(s.useState)(null),i=Object(O.a)(o,2),l=i[0],d=i[1],u=new F,m=u.getDialogData(r);return Object(h.jsxs)("div",{className:"dialog-container",children:[Object(h.jsx)(C,{groupId:r,onSearch:function(e,t){t===r&&d(e)},dialogs:m}),Object(h.jsxs)(v.a,{className:"mySwiper",onSlideChange:function(e){e&&c(e.activeIndex)},children:[Object(h.jsxs)(x.a,{children:[function(){if(0===m.length)return Object(h.jsx)(L,{})}(),Object(h.jsx)(k,{groupId:0,service:u,itemsFound:l})]}),Object(h.jsx)(x.a,{children:Object(h.jsx)(k,{groupId:1,service:u,itemsFound:l})}),Object(h.jsx)(x.a,{children:Object(h.jsx)(k,{groupId:2,service:u,itemsFound:l})})]}),Object(h.jsx)("br",{})]})},I=function(){return Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(i.a,{path:"/edit",component:f}),Object(h.jsx)(i.a,{path:"/dialogs/:id",render:function(e){var t=e.match.params.id;return Object(h.jsx)(A,{groupId:t})}})]})},T=a(28),D=r.a.createContext(),R=D.Provider,B=(D.Consumer,a(29)),U=a(9),W={isAuthenticated:!1,isRegistrated:!1,myUserName:"",myWelcomeMessage:"",myProfilePhoto:null,myPassword:null,myPhone:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MY_PASSWORD":return Object(U.a)(Object(U.a)({},e),{},{myPassword:t.payload});case"SET_MY_PHONE":return Object(U.a)(Object(U.a)({},e),{},{myPhone:t.payload});case"SET_MY_PROFILE_PHOTO":return Object(U.a)(Object(U.a)({},e),{},{myProfilePhoto:t.payload});case"SET_MY_WELCOME_MESSAGE":return Object(U.a)(Object(U.a)({},e),{},{myWelcomeMessage:t.payload});case"SET_MY_USER_NAME":return Object(U.a)(Object(U.a)({},e),{},{myUserName:t.payload});default:return e}},q=Object(B.a)(Y);o.a.render(Object(h.jsx)(p.a,{store:q,children:Object(h.jsx)(R,{value:F,children:Object(h.jsx)(T.a,{children:Object(h.jsx)(I,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1838dd19.chunk.js.map