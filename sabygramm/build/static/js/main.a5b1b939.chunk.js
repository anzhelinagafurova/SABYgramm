(this.webpackJsonpsabygramm=this.webpackJsonpsabygramm||[]).push([[0],{47:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(25),c=s.n(n),i=s(3),r=s(8),o=s(9),l=s(14),d=s(13),u=s(19),m=function(){function e(){Object(r.a)(this,e),this.dialogData=[[{id:0,name:"\u0410\u043d\u0436\u0435\u043b\u0438\u043d\u0430",lastMessage:"\u041a\u0430\u043a \u0442\u044b?",img:"https://bugaga.ru/uploads/posts/2016-12/1481556556_kot-volshebnik-1.jpg",timing:"15 \u043c"},{id:1,name:"\u041a\u0440\u0438\u0441",lastMessage:"\u0412\u0441\u0442\u0430\u043b\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432 6 \u0443\u0442\u0440\u0430 \u043f\u0440\u0438\u043a\u0438\u043d\u044c...",img:"https://yt3.ggpht.com/a/AATXAJynSQVjxLr742pi_eZXJxyzjfWLaRcCxgYaeJX_Cg=s900-c-k-c0xffffffff-no-rj-mo",timing:"1 \u0447"}],[{id:2,name:"\u0421\u0435\u0440\u0433\u0435\u0439",lastMessage:"\u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0432 \u0442\u0430\u0441\u043a\u0430\u0445",img:"https://i02.fotocdn.net/s110/defbcd4b451a9263/gallery_xl/2460844912.jpg",timing:"2 \u0447"},{id:3,name:"\u042d\u0434\u0443\u0430\u0440\u0434",lastMessage:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043f\u043e\u0434\u043e\u0448\u0435\u043b",img:"https://pm1.narvii.com/7357/dd8ddd1a25b83dcf20d7036a4656fc47b7aad917r1-1080-1198v2_hq.jpg",timing:"1 \u0434"},{id:7,name:"\u0421\u0435\u0440\u0451\u0436\u0430",lastMessage:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0443 \u043c\u0435\u043d\u044f \u0432\u043e\u043f\u0440\u043e\u0441",img:"https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1",timing:"2 \u0434"}],[{id:4,name:"\u0412\u043e\u0432\u0430",lastMessage:"\u0412\u044b\u0443\u0447\u0438\u043b \u0440\u0435\u0430\u043a\u0442 \u0437\u0430 \u0447\u0430\u0441",img:"https://cutewallpaper.org/21/grumpy-cat-screensaver/Grumpy-Wallpapers-Wallpaper-Cave.jpg",timing:"2 \u0447"},{id:5,name:"\u0421\u0430\u0448\u0430",lastMessage:"\u042f \u043d\u0430 2 \u044d\u0442\u0430\u0436\u0435 \u043a\u0443\u0434\u0430 \u0438\u0434\u0442\u0438?",img:"https://ustaliy.ru/wp-content/uploads/2019/03/universe.jpg",timing:"1 \u043d"},{id:6,name:"\u041b\u0451\u0448\u0430",lastMessage:"\u042f \u0432 \u0441\u0442\u043e\u043b\u043e\u0432\u043e\u0439, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e",img:"https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5d62dba6998ed600ad85c10e_5d62dbc135c8d800adef2383/scale_1200",timing:"2 \u043d"}]]}return Object(o.a)(e,[{key:"getMockedData",value:function(){return this.dialogData}},{key:"sendDataPost",value:function(e,t){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)})}},{key:"sendDataGet",value:function(e,t){return new Promise((function(e){setTimeout((function(){return e([{id:0,name:"Halo",number:"Salut",picture:"https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1"}])}),500)}))}},{key:"getDialogData",value:function(){return fetch("http://185.93.109.221:8000/dialogs")}}]),e}(),j=(s(47),s(0)),h=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={phone:"",password:""},e.renderAuthPage=function(){return Object(j.jsxs)("section",{className:"login-container",children:[Object(j.jsx)("h1",{className:"login-text",children:"\u0432\u0445\u043e\u0434"}),Object(j.jsxs)("form",{className:"login-form",onSubmit:e.sendForm,children:[Object(j.jsxs)("div",{className:"tel-wrapper",children:[Object(j.jsx)("p",{className:"number-7",children:"+7"}),Object(j.jsx)("input",{type:"tel",name:"phoneNumber",placeholder:"\u0422\u0435\u043b. \u043d\u043e\u043c\u0435\u0440",maxLength:"10",pattern:"\\d*",required:!0})]}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",maxLength:"12",required:!0}),Object(j.jsx)("button",{type:"submit",className:"login-button",children:Object(j.jsx)("i",{className:"fas fa-play"})})]})]})},e.sendForm=function(t){t.preventDefault();var s=t.currentTarget,a=e.props,n=a.setProlifePhoto,c=a.setUserName,i=a.setWelcomeMessage,r={phone:s.phoneNumber.value,password:s.password.value};e.service.sendDataPost(r,"").then((function(e){return e.json()})).then((function(t){0===t.status&&(c(t.name),i(t.welcome_msg),n(t.image_link),e.props.history.push("/dialogs"));(1===t.status&&alert("Password is incorrect!"),2===t.status)&&e.props.history.push("/edit")}))},e}return Object(o.a)(s,[{key:"render",value:function(){return this.renderAuthPage()}}]),s}(a.Component),g=Object(u.b)((function(e){return{myUserName:e.myUserName,myWelcomeMessage:e.myWelcomeMessage,myProfilePhoto:e.myProfilePhoto}}),(function(e){return{setPhone:function(t){var s=t.target.value;e({type:"SET_MY_PASSWORD",payload:s})},setPassword:function(t){var s=t.target.value;e({type:"SET_MY_PHONE",payload:s})},setProlifePhoto:function(t){e({type:"SET_MY_PROFILE_PHOTO",payload:t})},setUserName:function(t){e({type:"SET_MY_USER_NAME",payload:t})},setWelcomeMessage:function(t){e({type:"SET_MY_WELCOME_MESSAGE",payload:t})}}}))(h),p=s(6),b=s.n(p),f=s(17),O=function(e){var t='<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" version="1.1">\n      <circle cx="37" cy="37" r="37" fill="white"></circle>\n    <text x="18" y="60" font-size="60" font-family="Roboto, sans-serif" fill="#738DED">'.concat(e,"\n          </text>  \n    </svg>"),s=new Blob([t],{type:"image/svg+xml"});return v(s)},x=function(e){return v(e.target.files[0])},v=function(e){return new Promise((function(t){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){t(s.result)}}))},A=(s(50),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.setPhoto=function(){var t=Object(f.a)(b.a.mark((function t(s){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.currentTarget.closest("form"),t.next=3,x(s);case 3:return n=t.sent,t.t0=e.props,t.next=7,n;case 7:return t.t1=t.sent,t.t0.setProfilePhoto.call(t.t0,t.t1),t.next=11,n;case 11:a.pictureUrl.value=t.sent;case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setData=function(){var t=Object(f.a)(b.a.mark((function t(s){var a,n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),a=s.currentTarget,e.props.photo){t.next=9;break}return t.next=5,O(a.username.value[0].toUpperCase());case 5:return n=t.sent,t.next=8,n;case 8:a.pictureUrl.value=t.sent;case 9:c={name:a.username.value,welcome_msg:a.message.value||"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c!",image_link:a.pictureUrl.value||n},e.service.sendDataPost(c,"/edit"),e.props.setUserName(c.name),e.props.setWelcomeMessage(c.welcome_msg),e.props.setProfilePhoto(c.image_link),e.props.history.push("/dialogs");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.photo;return Object(j.jsx)("section",{className:"edit-container",children:Object(j.jsxs)("form",{className:"name-form",id:"editForm",onSubmit:this.setData,children:[Object(j.jsxs)("label",{htmlFor:"picture",id:"upload-background",className:"upload-background",children:[e?Object(j.jsx)("img",{src:e,alt:"Profile icon",className:"profile-photo"}):Object(j.jsx)("div",{className:"plus",children:"+"}),Object(j.jsx)("input",{type:"file",id:"picture",accept:"image/*",onChange:this.setPhoto})]}),Object(j.jsx)("input",{type:"text",name:"pictureUrl",hidden:!0}),Object(j.jsx)("p",{className:"photo-label",children:"\u0424\u043e\u0442\u043e"}),Object(j.jsx)("input",{type:"text",name:"username",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",maxLength:"25",required:!0}),Object(j.jsx)("input",{type:"text",name:"message",placeholder:"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c!",maxLength:"200"}),Object(j.jsx)("button",{type:"submit",className:"edit-button",children:Object(j.jsx)("i",{className:"fas fa-play"})})]})})}}]),s}(a.Component)),y=Object(u.b)((function(e){var t=e.myProfilePhoto,s=e.myWelcomeMessage;return{name:e.myUserName,message:s,photo:t}}),(function(e){return{setProfilePhoto:function(t){return e({type:"SET_MY_PROFILE_PHOTO",payload:t})},setUserName:function(t){return e({type:"SET_MY_USER_NAME",payload:t})},setWelcomeMessage:function(t){return e({type:"SET_MY_WELCOME_MESSAGE",payload:t})}}}))(A),w=s(67),M=s(66),S=s(27);s(51),s(52);document.getElementById("root").addEventListener("click",(function(){document.querySelectorAll(".settings").forEach((function(e){return e.remove()}))}));var E=function(e){var t=e.showed,s=e.groupId;if(t)switch(s){case 0:return Object(j.jsxs)("ul",{className:"settings",children:[Object(j.jsx)("li",{children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0438\u0445\u0438\u043c"}),Object(j.jsx)("li",{children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u0440\u043e\u043a\u0438\u043c"}),Object(j.jsx)("li",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]});case 1:return Object(j.jsxs)("ul",{className:"settings",children:[Object(j.jsx)("li",{children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u043c"}),Object(j.jsx)("li",{children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0438\u0445\u0438\u043c"}),Object(j.jsx)("li",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]});case 2:return Object(j.jsxs)("ul",{className:"settings",children:[Object(j.jsx)("li",{children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u043c"}),Object(j.jsx)("li",{children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u0440\u043e\u043a\u0438\u043c"}),Object(j.jsx)("li",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]});default:return Object(j.jsx)("div",{children:"ups..."})}return Object(j.jsx)("p",{})},N=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).timer=null,a.state={showed:!1},a.touchend=function(){a.timer&&(clearTimeout(a.timer),a.timer=null)},a.touchstart=function(){a.timer||(a.timer=setTimeout((function(){a.setState({showed:!0})}),500))},a.handleClick=function(){a.onHistoryPush()},a.onHistoryPush=a.onHistoryPush.bind(Object(S.a)(a)),a}return Object(o.a)(s,[{key:"onHistoryPush",value:function(){var e=this.props,t=e.dialog,s=t.name,a=t.img,n=t.id,c=e.groupId;this.props.history.push({pathname:"/chatapp/".concat(n),state:{id:n,name:s,img:a,groupId:c}})}},{key:"render",value:function(){var e=this.props,t=e.dialog,s=t.name,a=t.lastMessage,n=t.img,c=t.timing,i=e.groupId;return Object(j.jsxs)("div",{className:"dialog",onClick:this.handleClick,onTouchStart:this.touchstart,onTouchEnd:this.touchend,onMouseDown:this.touchstart,onMouseUp:this.touchend,children:[Object(j.jsx)("img",{src:n,alt:"dialogPicture",className:"dialog-img"}),Object(j.jsxs)("div",{className:"dialog-contain",children:[Object(j.jsx)("p",{className:"dialog-name",children:s}),Object(j.jsx)("p",{className:"dialog-message",children:a})]}),Object(j.jsx)("div",{className:"dialog-timing",children:c}),Object(j.jsx)(E,{showed:this.state.showed,groupId:i})]})}}]),s}(a.Component),C=Object(i.h)(N),k=s(15),I=(s(54),function(e){var t=e.groupId,s=e.onSearch,n=e.dialogs,c=e.onSettings,i=Object(a.useState)(!1),r=Object(k.a)(i,2),o=r[0],l=r[1],d=null;switch(t){case 0:d="\u041e\u0431\u0449\u0438\u0435";break;case 1:d="\u0413\u0440\u043e\u043c\u043a\u0438\u0435";break;case 2:d="\u0422\u0438\u0445\u0438\u0435";break;case"all":d="\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b";break;default:d=null}return Object(j.jsxs)("header",{className:"dialogs-header",children:[d&&Object(j.jsx)("i",{className:"fa fa-bars","aria-hidden":"true",onClick:c}),d&&Object(j.jsx)("i",{className:"fa fa-users","aria-hidden":"true"}),Object(j.jsx)("div",{className:"group-name",children:d}),Object(j.jsx)("input",{type:"text",className:"dialogs-search",onInput:function(e){var a=[];"all"===t?n.forEach((function(t){t.forEach((function(t){t.name.toLowerCase().includes(e.target.value.toLowerCase())&&a.push(t)}))})):n[t].forEach((function(t){t.name.toLowerCase().includes(e.target.value.toLowerCase())&&a.push(t)})),s(a)},onBlur:function(e){s(null),l(!1),e.target.value=null},hidden:!o,autoFocus:!0}),d&&Object(j.jsx)("i",{className:"fa fa-search","aria-hidden":"true",onClick:function(){l(!1===o)}})]})}),P=(s(55),s(56),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",resultHidden:!0,found:[]},e.changePlaceholderFocus=function(){e.setState({placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"})},e.changePlaceholderBlur=function(){e.setState({placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})},e.changePhone=function(t){e.service.sendDataGet(t.target.value,"").then((function(t){return e.setState({found:t,resultHidden:!1})}))},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"add-contact-form",children:[Object(j.jsx)("input",{type:"tel",className:"add-contact",placeholder:this.state.placeholder,onFocus:this.changePlaceholderFocus,onBlur:this.changePlaceholderBlur,onChange:this.changePhone}),Object(j.jsx)("div",{className:"add-contact-result-container",hidden:this.state.resultHidden,children:this.state.found.map((function(e){return Object(j.jsxs)("div",{className:"add-contact-result",children:[Object(j.jsx)("img",{src:e.picture,alt:"avatar"}),Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("i",{className:"fa fa-plus-circle","aria-hidden":"true"})]},e.id)}))})]})}}]),s}(a.Component)),T=s(18),D=(s(57),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACySURBVHgB7ZOhDsJADECvBIXeNBo+AjQWPoKvmIIEjSMBh95HgMZjmZ8Fe7xmXZiCa4Jck5fbenm9XtKT4IgY44xlZb8bEaldMpwgt+89ZJIq28kvuHFyabnF0CFv4QkFOd26hM91vratread3Ah2cLTi6bLlM8v38j/lcTthbpkYwCQ0A7LsyiwFlEzd9VeBKZyhRlx7ZA0d5bb1CrTdORxSZA3Re4bmkTysSIV8D4nxBulz6F4h5s8kAAAAAElFTkSuQmCC"),L=new m,U=function(){return Object(j.jsxs)("div",{className:"link-controllers ",children:[Object(j.jsx)(T.b,{to:"/contacts",className:"left-controller",children:Object(j.jsxs)("div",{className:"link-contain",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB1Vn9ddMwEL/k8T9hgqoTNJ0AMwHZgGyQbJB0AsIEoRMAEzhMkDKBnQlcJhBWclfLsj7ubKfA7z1Xrk6n+9JJZwXgCtBar+on1xdU+K7gf0Ct6F6HsYbXRC0wQ+9VqIB5X0bGb3Bcgbwz4/n62VpGzMeSl1J+E/HkJsBTIH3hoe2QthtLXkz5pcW8RU+aZ231Zw6Pwv4qMGeG9OMY8lIG5Mi09tBoOeQBAwqIG5CPIS9lAGHmoc1CntbN2s08tD3S9mPJixlQMSbUHhp5q9CYfDj+s6WkGktezIAcebYe2ioW0rr/qw5jPba8kAGZLVQ3SbWx+pcRfpOURxxHB1l2LXmhSbc6jC2MjKvIQ0/mXE8OxWvLc4VTyKuIJwt92Y0U/EvQlzOg0HwUVzPC8mSRUGBu8dDYo47XOnPdJHdh9a8Y8vZJo4WeXCLPwhIyA56DCuRZYN83nshE5HTbk1nMUOudijR2qaybGmdP82l+5PLQoEziSYsvR75MwENR+y7gMZHrlCpTawx54MdkMnkGPhS2Ep4nbO+4DKjTI/77Eq2pR5ESZFAo4InLUI8tiVcSbWh0U9RhG3DjDErCWrds5T3KvAU+KMqKOnwRkCyFWQ8eAhl9z2d54SFnew2QeJMi8AvkODlyOShdnrMBuA7N89wzgUuQo3TmSAJ1M8+Mcmc6UBHaRYbkgAIZWnngGiBdy2PkAHsrdfiU+eMaIF3L5xyQbKEWOjsKE63cGbqEzkrofpdPi54yS2yV+UMGiM8AxAO2e2ktZHjw30eQwZsDhPcgQL10dnVD9YzkRFXYmrJlCzJ0Dz7d/qg+F3TAxMBijn3ToLtl/tIdsHYGsTxqVYgKmNCJa8gAD6GKLlfLiBvGpHOpIhZvJZATvLacRvjeQRoK2z7b6AHbD4yxwfPGZ0DpMMVAtdBPkOPkzBGDyABJkUW71pAIcE5iMuC3S3gDw0DeMx/l1FfWz71bFGKSH6EbWUkEOrkWW0IK0vDVQAqaU9bGHPzLklNHKWxPLmEKA1B7+XZioe76giSfV6nvYdLGLQxALALJ7c2DVqXoYEjprbAtXUKvCOjLDxaF57A7YHvHVQL3+Pjh1JQPom1UQRhzpLeWCt42GCGt2wZ8D5XeZh5D/whh9DoHFPSYMMAfu73wjWfL65vEwW0Nmo8iOzr0foKR5XXOAbMMcE8/1x8QQT3Wp5Dx8idoG6CwPYwtLxSBEtIoE/12Iqd2oBL6yxsXVuXog+Sj5+9B+39jYH8kSfAH59pcMpQFQ70AAAAASUVORK5CYII=",alt:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(j.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})}),Object(j.jsx)(T.b,{to:"#!",children:Object(j.jsxs)("div",{className:"link-contain",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"\u041a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"})}),Object(j.jsx)("p",{children:"\u041a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"})]})})]})},F=Object(u.b)((function(e){return{myUserName:e.myUserName,myWelcomeMessage:e.myWelcomeMessage,myProfilePhoto:e.myProfilePhoto}}),(function(e){return{setProfilePhoto:function(t){return e({type:"SET_MY_PROFILE_PHOTO",payload:t})},setUserName:function(t){return e({type:"SET_MY_USER_NAME",payload:t})},setWelcomeMessage:function(t){return e({type:"SET_MY_WELCOME_MESSAGE",payload:t})},clearState:function(){return e({type:"CLEAR_STATE"})}}}))((function(e){var t=e.myUserName,s=e.myWelcomeMessage,a=e.myProfilePhoto,n=e.setProfilePhoto,c=e.setUserName,i=e.setWelcomeMessage,r=e.clearState,o=function(){var e=Object(f.a)(b.a.mark((function e(t){var s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.currentTarget.closest("form"),e.next=3,x(t);case 3:return a=e.sent,e.t0=n,e.next=7,a;case 7:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=11,a;case 11:s.pictureUrl.value=e.sent;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(b.a.mark((function e(t){var s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s=t.currentTarget,a={name:s.username.value,welcome_msg:s.message.value,image_link:s.pictureUrl.value},L.sendDataPost(a,"/edit"),c(a.name),i(a.welcome_msg);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"setting-page",children:[U(),Object(j.jsxs)("form",{name:"profileInfo",className:"profileInfo",onSubmit:l,children:[Object(j.jsxs)("label",{htmlFor:"picture",id:"upload-background",className:"upload-background-profile",children:[Object(j.jsx)("img",{src:a,alt:"Profile icon",className:"photo-settings"}),Object(j.jsx)("input",{className:"profile-photo-settings",type:"file",id:"picture",accept:"image/*",onChange:o})]}),Object(j.jsx)("input",{type:"text",name:"pictureUrl",hidden:!0}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"text",className:"username-field",name:"username",defaultValue:t,maxLength:"25"}),Object(j.jsx)("img",{src:D,alt:"edit",className:"settings-pencil"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"text",className:"message-field",name:"message",defaultValue:s,maxLength:"200"}),Object(j.jsx)("img",{src:D,alt:"edit",className:"settings-pencil"})]}),Object(j.jsx)("button",{type:"submit",className:"profileInfo-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(j.jsx)(T.b,{to:"/",className:"profileInfo-button exit-button",onClick:r,children:"\u0412\u044b\u0439\u0442\u0438"}),Object(j.jsx)("span",{children:"SABYgramm \xa9"})]})]})})),B=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={slideGroup:0,itemsFound:null,dialogs:[]},e.slideChanged=function(t){t&&e.setState({slideGroup:t.activeIndex-1})},e.renderSearchItems=function(t){e.setState({itemsFound:t})},e.addContact=function(){if(e.state.dialogs[0]&&0===e.state.dialogs[0].length)return Object(j.jsx)(P,{})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.service.getDialogData().then((function(e){return e.json()})).then((function(t){e.setState({dialogs:t})}))}},{key:"render",value:function(){return Object(j.jsxs)(w.a,{className:"mySwiper",initialSlide:"1",onSlideChange:this.slideChanged,children:[Object(j.jsx)(I,{slot:"container-start",groupId:this.state.slideGroup,onSearch:this.renderSearchItems,dialogs:this.state.dialogs}),Object(j.jsxs)("div",{className:"dialog-container",children:[Object(j.jsx)(M.a,{children:Object(j.jsx)(F,{})}),Object(j.jsxs)(M.a,{children:[this.addContact(),Object(j.jsx)(Y,{dialogs:this.state.dialogs[0],itemsFound:this.state.itemsFound,groupId:0})]}),Object(j.jsxs)(M.a,{children:[this.addContact(),Object(j.jsx)(Y,{dialogs:this.state.dialogs[1],itemsFound:this.state.itemsFound,groupId:1})]}),Object(j.jsxs)(M.a,{children:[this.addContact(),Object(j.jsx)(Y,{dialogs:this.state.dialogs[2],itemsFound:this.state.itemsFound,groupId:2})]})]})]})}}]),s}(a.Component),Y=function(e){var t=e.dialogs,s=e.itemsFound,a=void 0===s?null:s,n=e.groupId,c=void 0===n?null:n,i=null;return i=a||t,t?Object(j.jsx)("div",{children:i.map((function(e){return Object(j.jsx)(C,{dialog:e,groupId:c},e.id)}))}):Object(j.jsx)("div",{})},R=s(7),H=s(34),G=s(35),Q=s(37),J=s.n(Q),W=function(e){var t=e.msgInput.current,s=function(){var t=Object(f.a)(b.a.mark((function t(s){var a,n,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.preventDefault(),(a=e.savedMsg.trim()).length>0&&(e.editMode?e.updateMessage(a):e.addNewMessage(a,"outgoing")),e.editMode||(n="",c=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout(Object(f.a)(b.a.mark((function t(){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:s=t.sent,n=s,e.addNewMessage(n,"incoming");case 5:case"end":return t.stop()}}),t)}))),2e3);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){return"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"},c());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=Object(a.useState)(!1),c=Object(k.a)(n,2),i=c[0],r=c[1];return Object(j.jsxs)("form",{className:e.editMode?"message-form editing-input":"message-form",onSubmit:s,children:[Object(j.jsx)("div",{className:i?"emoji-picker":"hidden",children:Object(j.jsx)(J.a,{disableAutoFocus:!0,onEmojiClick:function(s,a){r(!1);var n=t.selectionStart,c=t.selectionEnd-t.selectionStart,i=t.value.split("");i.splice(n,c,a.emoji);var o=i.join("");e.setSavedMsg(o),t.focus(),t.selectionStart=t.selectionEnd=n+1}})}),Object(j.jsx)("button",{type:"button",className:"open-emojis",onClick:function(e){e.preventDefault(),r(!i)},children:Object(j.jsx)(H.a,{icon:G.b})}),Object(j.jsx)("input",{id:"message-input",type:"text",ref:e.msgInput,className:"message-input",placeholder:"Message",autoComplete:"off",onChange:function(t){e.setSavedMsg(t.currentTarget.value)},value:e.savedMsg||"",onKeyDown:function(s){if(38===s.keyCode&&e.lastMessageIndex>=0&&!1===e.editMode){for(var a=e.lastMessageIndex;"incoming"===e.currentMessages[a].direction;)a--;t.blur(),setTimeout((function(){e.enterEditMode(a)}),0)}}}),Object(j.jsxs)("button",{type:"submit",className:"send-message",children:[Object(j.jsx)("span",{className:"sr-only",children:"send"}),Object(j.jsx)(H.a,{icon:G.a})]})]},"MessageForm")},Z=function(e){var t=function(e){return e.toString().split(" ")[1].split(":")[0]+":"+e.toString().split(" ")[1].split(":")[1]};return Object(j.jsx)(j.Fragment,{children:"outgoing"===e.message.direction?Object(j.jsx)("div",{className:"outgoing",children:Object(j.jsxs)("button",{className:e.editMode&&e.index===e.editIndex?"message editing":"message",onClick:function(){return e.enterEditMode(e.index)},children:[e.message.message,Object(j.jsx)("p",{className:"msg-date",children:e.message.edit?"\u0440\u0435\u0434. "+t(e.message.edit):t(e.message.time)})]})}):Object(j.jsx)("div",{className:"incoming",children:Object(j.jsxs)("div",{className:"message",children:[e.message.message,Object(j.jsx)("p",{className:"msg-date",children:e.message.edit?"\u0440\u0435\u0434. "+t(e.message.edit):t(e.message.time)})]})})})},_=function(e){var t=e.messages.name,s=e.messages.messages,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){n&&n.current.addEventListener("DOMNodeInserted",(function(e){var t=e.currentTarget;t.scroll({top:t.scrollHeight})}))}),[]),Object(j.jsxs)("div",{className:"chat-window",children:[Object(j.jsx)("ul",{className:"message-list",ref:n,children:0!==s.length?s.map((function(t,s){return Object(j.jsx)("li",{children:Object(j.jsx)(Z,{message:t,enterEditMode:e.enterEditMode,index:s,editMode:e.editMode,editIndex:e.editIndex})},s)})):null}),0===s.length?Object(j.jsxs)("p",{className:"no-message",children:["This is the beginning of your conversation with"," ",t]}):null,Object(j.jsx)(W,{addNewMessage:e.addNewMessage,updateSaved:e.updateSaved,setSavedMsg:e.setSavedMsg,savedMsg:e.savedMsg,currentMessages:s,updateMessage:e.updateMessage,editMode:e.editMode,setEditMode:e.setEditMode,editIndex:e.editIndex,enterEditMode:e.enterEditMode,lastMessageIndex:s.length-1,msgInput:e.msgInput})]})},X=(s(61),s(62),function(e){var t=e.groupId,s=e.name,n=e.img,c=Object(a.useState)(!1),r=Object(k.a)(c,2),o=r[0],l=r[1],d=null,u=Object(i.f)();switch(t){case 0:d="\u041e\u0431\u0449\u0438\u0435";break;case 1:d="\u0413\u0440\u043e\u043c\u043a\u0438\u0435";break;case 2:d="\u0422\u0438\u0445\u0438\u0435";break;default:d=null}return Object(j.jsxs)("header",{className:"message-header",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"22",viewBox:"0 0 32 24",fill:"none",onClick:function(){return u.push("/dialogs")},children:Object(j.jsx)("path",{d:"M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807614 11.0711 0.807613 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z",fill:"white"})}),Object(j.jsx)("img",{src:n,alt:"dialogPicture",className:"message-dialog-img"}),Object(j.jsxs)("div",{className:"flex-names",children:[Object(j.jsx)("div",{className:"user-name",children:s}),Object(j.jsx)("div",{className:"group-name",children:d})]}),Object(j.jsx)("i",{className:"fas fa-ellipsis-v",onClick:function(){l(!o)}}),Object(j.jsx)(E,{showed:o,groupId:t})]})}),z=function(){var e=Object(i.g)().state,t=e.groupId,s=e.name,n=e.img,c=Object(a.useState)("0"),r=Object(k.a)(c,1)[0],o=Object(a.useState)(!1),l=Object(k.a)(o,2),d=l[0],u=l[1],m=Object(a.useState)(null),h=Object(k.a)(m,2),g=h[0],p=h[1],b=Object(a.useRef)(),f=Object(a.useState)({0:{name:s,messages:[],saved:"",editMode:!1,groupId:t,img:n}}),O=Object(k.a)(f,2),x=O[0],v=O[1],A=Object(a.useState)(""),y=Object(k.a)(A,2),w=y[0],M=y[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(X,{groupId:x[r].groupId,name:x[r].name,img:x[r].img}),Object(j.jsx)("div",{className:"chat-container",children:Object(j.jsx)(_,{messages:x[r],addNewMessage:function(e,t){var s=x[r],a=(new Date).toLocaleString();s.messages.push({message:e,time:a,direction:t});var n=Object(R.a)({},x);n[r]=s,v(n),M("")},updateSaved:function(e){var t=x[r];t.saved=e;var s=Object(R.a)({},x);s[r]=t,v(s)},setSavedMsg:M,savedMsg:w,editMode:d,setEditMode:u,editIndex:g,setEditIndex:p,updateMessage:function(e){if(e.trim().length>0){var t=x[r],s=(new Date).toLocaleString();t.messages[g].message=e,t.messages[g].edit=s;var a=Object(R.a)({},x);a[r]=t,v(a)}u(!1),M("")},msgInput:b,enterEditMode:function(e){var t=x[r].messages[e].message;p(e),M(t),u(!0),b.current.focus()}})})]})},q=s(29),K=(s(63),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={slideGroup:"all",itemsFound:null,dialogs:[]},e.slideChanged=function(t){t&&1===t.activeIndex?e.setState({slideGroup:"all"}):e.setState({slideGroup:null})},e.renderSearchItems=function(t){e.setState({itemsFound:t})},e.addContact=function(){if(0===e.state.dialogs.length)return Object(j.jsx)(P,{})},e.swipePrev=function(){},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.service.getDialogData().then((function(e){return e.json()})).then((function(t){e.setState({dialogs:t})}))}},{key:"render",value:function(){return Object(j.jsxs)(w.a,{className:"mySwiper",initialSlide:"1",onSlideChange:this.slideChanged,children:[Object(j.jsx)(I,{slot:"container-start",groupId:this.state.slideGroup,onSettings:this.swipePrev,onSearch:this.renderSearchItems,dialogs:this.state.dialogs}),Object(j.jsx)(M.a,{children:Object(j.jsx)(F,{})}),Object(j.jsxs)(M.a,{children:[this.addContact(),Object(j.jsx)(V,{dialogs:this.state.dialogs,itemsFound:this.state.itemsFound})]})]})}}]),s}(a.Component)),V=function(e){var t=e.dialogs,s=e.itemsFound,a=void 0===s?null:s,n=null;return 0!==t.length&&(n=a||[].concat(Object(q.a)(t[0]),Object(q.a)(t[1]),Object(q.a)(t[2]))),n?Object(j.jsx)("div",{className:"dialog-container",children:n.map((function(e){return Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)("img",{src:e.img,alt:"dialogPicture",className:"contacts-img"}),e.name]},e.id)}))}):Object(j.jsx)("div",{})},$=(s(64),function(e){e.socket;return Object(j.jsx)("div",{children:"Test"})}),ee=function(){return Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:g}),Object(j.jsx)(i.a,{path:"/edit",component:y}),Object(j.jsx)(i.a,{path:"/dialogs",component:B}),Object(j.jsx)(i.a,{path:"/contacts",component:K}),Object(j.jsx)(i.a,{path:"/test",render:function(){return Object(j.jsx)($,{})}}),Object(j.jsx)(i.a,{path:"/chatapp/:id",render:function(e){var t=e.match.params,s=t.id,a=t.groupId;return Object(j.jsx)(z,{dialogId:a,id:s})}})]})},te=s(38),se={myUserName:"",myWelcomeMessage:"",myProfilePhoto:null,myPassword:null,myPhone:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MY_PASSWORD":return Object(R.a)(Object(R.a)({},e),{},{myPassword:t.payload});case"SET_MY_PHONE":return Object(R.a)(Object(R.a)({},e),{},{myPhone:t.payload});case"SET_MY_PROFILE_PHOTO":return Object(R.a)(Object(R.a)({},e),{},{myProfilePhoto:t.payload});case"SET_MY_WELCOME_MESSAGE":return Object(R.a)(Object(R.a)({},e),{},{myWelcomeMessage:t.payload});case"SET_MY_USER_NAME":return Object(R.a)(Object(R.a)({},e),{},{myUserName:t.payload});case"CLEAR_STATE":return se;default:return e}},ne=Object(te.a)(ae);c.a.render(Object(j.jsx)(u.a,{store:ne,children:Object(j.jsx)(T.a,{children:Object(j.jsx)(ee,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a5b1b939.chunk.js.map