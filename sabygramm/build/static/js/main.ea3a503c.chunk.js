(this.webpackJsonpsabygramm=this.webpackJsonpsabygramm||[]).push([[0],{47:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(25),i=a.n(n),c=a(3),r=a(6),o=a(7),l=a(10),d=a(9),u=a(18),m=function(){function e(){Object(r.a)(this,e),this.dialogData=[[{id:0,id_pair:1,name:"\u0410\u043d\u0436\u0435\u043b\u0438\u043d\u0430",lastMessage:"\u041a\u0430\u043a \u0442\u044b?",img:"https://bugaga.ru/uploads/posts/2016-12/1481556556_kot-volshebnik-1.jpg",timing:"15 \u043c"},{id:1,id_pair:2,name:"\u041a\u0440\u0438\u0441",lastMessage:"\u0412\u0441\u0442\u0430\u043b\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432 6 \u0443\u0442\u0440\u0430 \u043f\u0440\u0438\u043a\u0438\u043d\u044c...",img:"https://yt3.ggpht.com/a/AATXAJynSQVjxLr742pi_eZXJxyzjfWLaRcCxgYaeJX_Cg=s900-c-k-c0xffffffff-no-rj-mo",timing:"1 \u0447"}],[{id:2,id_pair:3,name:"\u0421\u0435\u0440\u0433\u0435\u0439",lastMessage:"\u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0432 \u0442\u0430\u0441\u043a\u0430\u0445",img:"https://i02.fotocdn.net/s110/defbcd4b451a9263/gallery_xl/2460844912.jpg",timing:"2 \u0447"},{id:3,id_pair:4,name:"\u042d\u0434\u0443\u0430\u0440\u0434",lastMessage:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043f\u043e\u0434\u043e\u0448\u0435\u043b",img:"https://pm1.narvii.com/7357/dd8ddd1a25b83dcf20d7036a4656fc47b7aad917r1-1080-1198v2_hq.jpg",timing:"1 \u0434"},{id:7,id_pair:5,name:"\u0421\u0435\u0440\u0451\u0436\u0430",lastMessage:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0443 \u043c\u0435\u043d\u044f \u0432\u043e\u043f\u0440\u043e\u0441",img:"https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1",timing:"2 \u0434"}],[{id:4,id_pair:6,name:"\u0412\u043e\u0432\u0430",lastMessage:"\u0412\u044b\u0443\u0447\u0438\u043b \u0440\u0435\u0430\u043a\u0442 \u0437\u0430 \u0447\u0430\u0441",img:"https://cutewallpaper.org/21/grumpy-cat-screensaver/Grumpy-Wallpapers-Wallpaper-Cave.jpg",timing:"2 \u0447"},{id:5,id_pair:7,name:"\u0421\u0430\u0448\u0430",lastMessage:"\u042f \u043d\u0430 2 \u044d\u0442\u0430\u0436\u0435 \u043a\u0443\u0434\u0430 \u0438\u0434\u0442\u0438?",img:"https://ustaliy.ru/wp-content/uploads/2019/03/universe.jpg",timing:"1 \u043d"},{id:6,id_pair:8,name:"\u041b\u0451\u0448\u0430",lastMessage:"\u042f \u0432 \u0441\u0442\u043e\u043b\u043e\u0432\u043e\u0439, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e",img:"https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5d62dba6998ed600ad85c10e_5d62dbc135c8d800adef2383/scale_1200",timing:"2 \u043d"}]]}return Object(o.a)(e,[{key:"getMockedData",value:function(){return this.dialogData}},{key:"handleDialogs",value:function(e,t){return console.log("to"+e.group_number),fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)})}},{key:"sendDataPost",value:function(e,t){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)})}},{key:"sendDataGet",value:function(e){return fetch(e,{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}})}},{key:"getDialogData",value:function(){}}]),e}(),h=(a(47),a(0)),j=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={phone:"",password:""},e.renderAuthPage=function(){return Object(h.jsxs)("section",{className:"login-container",children:[Object(h.jsx)("h1",{className:"login-text",children:"\u0432\u0445\u043e\u0434"}),Object(h.jsxs)("form",{className:"login-form",onSubmit:e.sendForm,children:[Object(h.jsxs)("div",{className:"tel-wrapper",children:[Object(h.jsx)("p",{className:"number-7",children:"+7"}),Object(h.jsx)("input",{type:"tel",name:"phoneNumber",placeholder:"\u0422\u0435\u043b. \u043d\u043e\u043c\u0435\u0440",maxLength:"10",pattern:"\\d*",required:!0})]}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",maxLength:"12",required:!0}),Object(h.jsx)("button",{type:"submit",className:"login-button",children:Object(h.jsx)("i",{className:"fas fa-play"})})]})]})},e.sendForm=function(t){t.preventDefault();var a=t.currentTarget,s=e.props,n=s.setProlifePhoto,i=s.setUserName,c=s.setWelcomeMessage,r=s.setId,o={phone:a.phoneNumber.value,password:a.password.value};e.service.sendDataPost(o,"").then((function(e){return e.json()})).then((function(t){0===t.status&&(i(t.name),c(t.welcome_msg),n(t.image_link),r(t.id),e.props.history.push("/dialogs"));(1===t.status&&alert("Password is incorrect!"),2===t.status)&&e.props.history.push("/edit")}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.renderAuthPage()}}]),a}(s.Component),g=Object(u.b)((function(e){return{myUserName:e.myUserName,myWelcomeMessage:e.myWelcomeMessage,myProfilePhoto:e.myProfilePhoto}}),(function(e){return{setPhone:function(t){var a=t.target.value;e({type:"SET_MY_PASSWORD",payload:a})},setPassword:function(t){var a=t.target.value;e({type:"SET_MY_PHONE",payload:a})},setId:function(t){e({type:"SET_MY_ID",payload:t})},setProlifePhoto:function(t){e({type:"SET_MY_PROFILE_PHOTO",payload:t})},setUserName:function(t){e({type:"SET_MY_USER_NAME",payload:t})},setWelcomeMessage:function(t){e({type:"SET_MY_WELCOME_MESSAGE",payload:t})}}}))(j),p=a(13),b=a.n(p),f=a(19),O=function(e){var t='<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" version="1.1">\n      <circle cx="37" cy="37" r="37" fill="white"></circle>\n    <text x="18" y="60" font-size="60" font-family="Roboto, sans-serif" fill="#738DED">'.concat(e,"\n          </text>  \n    </svg>"),a=new Blob([t],{type:"image/svg+xml"});return v(a)},x=function(e){return v(e.target.files[0])},v=function(e){return new Promise((function(t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t(a.result)}}))},A=(a(50),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.setPhoto=function(){var t=Object(f.a)(b.a.mark((function t(a){var s,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a.currentTarget.closest("form"),t.next=3,x(a);case 3:return n=t.sent,t.t0=e.props,t.next=7,n;case 7:return t.t1=t.sent,t.t0.setProfilePhoto.call(t.t0,t.t1),t.next=11,n;case 11:s.pictureUrl.value=t.sent;case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setData=function(){var t=Object(f.a)(b.a.mark((function t(a){var s,n,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),s=a.currentTarget,e.props.photo){t.next=9;break}return t.next=5,O(s.username.value[0].toUpperCase());case 5:return n=t.sent,t.next=8,n;case 8:s.pictureUrl.value=t.sent;case 9:i={name:s.username.value,welcome_msg:s.message.value||"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c!",image_link:s.pictureUrl.value||n},e.service.sendDataPost(i,"/edit"),e.props.setUserName(i.name),e.props.setWelcomeMessage(i.welcome_msg),e.props.setProfilePhoto(i.image_link),e.props.history.push("/dialogs");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.photo;return Object(h.jsx)("section",{className:"edit-container",children:Object(h.jsxs)("form",{className:"name-form",id:"editForm",onSubmit:this.setData,children:[Object(h.jsxs)("label",{htmlFor:"picture",id:"upload-background",className:"upload-background",children:[e?Object(h.jsx)("img",{src:e,alt:"Profile icon",className:"profile-photo"}):Object(h.jsx)("div",{className:"plus",children:"+"}),Object(h.jsx)("input",{type:"file",id:"picture",accept:"image/*",onChange:this.setPhoto})]}),Object(h.jsx)("input",{type:"text",name:"pictureUrl",hidden:!0}),Object(h.jsx)("p",{className:"photo-label",children:"\u0424\u043e\u0442\u043e"}),Object(h.jsx)("input",{type:"text",name:"username",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",maxLength:"25",required:!0}),Object(h.jsx)("input",{type:"text",name:"message",placeholder:"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c!",maxLength:"200"}),Object(h.jsx)("button",{type:"submit",className:"edit-button",children:Object(h.jsx)("i",{className:"fas fa-play"})})]})})}}]),a}(s.Component)),y=Object(u.b)((function(e){var t=e.myProfilePhoto,a=e.myWelcomeMessage;return{name:e.myUserName,message:a,photo:t}}),(function(e){return{setProfilePhoto:function(t){return e({type:"SET_MY_PROFILE_PHOTO",payload:t})},setUserName:function(t){return e({type:"SET_MY_USER_NAME",payload:t})},setWelcomeMessage:function(t){return e({type:"SET_MY_WELCOME_MESSAGE",payload:t})}}}))(A),w=a(69),S=a(68),M=a(27),N=(a(51),a(52),function(e){var t=e.display,a=e.groupId,s=e.id,n=e.margin,i=e.canChange,c=new m,r=function(e,t){i&&c.handleDialogs({status:0,user_id:e,group_number:t},"/dialogs")};if("block"===t)switch(a){case 0:return Object(h.jsxs)("ul",{className:"settings",style:{display:"".concat(t),marginTop:"".concat(n)},children:[Object(h.jsx)("li",{onClick:r(s,2),children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0438\u0445\u0438\u043c"}),Object(h.jsx)("li",{onClick:r(s,1),children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u0440\u043e\u043a\u0438\u043c"}),Object(h.jsx)("li",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]});case 1:return Object(h.jsxs)("ul",{className:"settings",style:{display:"".concat(t),marginTop:"".concat(n)},children:[Object(h.jsx)("li",{onClick:r(s,0),children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u043c"}),Object(h.jsx)("li",{onClick:r(s,2),children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0438\u0445\u0438\u043c"}),Object(h.jsx)("li",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]});case 2:return Object(h.jsxs)("ul",{className:"settings",style:{display:"".concat(t),marginTop:"".concat(n)},children:[Object(h.jsx)("li",{onClick:r(s,0),children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u043c"}),Object(h.jsx)("li",{onClick:r(s,1),children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u0440\u043e\u043a\u0438\u043c"}),Object(h.jsx)("li",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]});default:return Object(h.jsx)("div",{children:"ups..."})}return Object(h.jsx)("p",{})}),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={display:"none",canChange:!1},s.timer=null,s.touchend=function(){s.timer&&(clearTimeout(s.timer),s.timer=null,s.setState({canChange:!0}))},s.touchstart=function(){s.timer||(s.timer=setTimeout((function(){s.setState({display:"block",canChange:!1})}),500))},s.handleClick=function(){s.onHistoryPush()},s.onHistoryPush=s.onHistoryPush.bind(Object(M.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("root").addEventListener("click",(function(){e.setState({display:"none"})}))}},{key:"onHistoryPush",value:function(){var e=this.props,t=e.dialog,a=t.name,s=t.img,n=t.id,i=t.id_pair,c=e.groupId;this.props.history.push({pathname:"/chatapp/".concat(i),state:{id:n,name:a,img:s,groupId:c,id_pair:i}})}},{key:"render",value:function(){var e,t=this.props,a=t.dialog,s=a.name,n=a.lastMessage,i=a.img,c=a.id_pair,r=a.timing,o=a.id,l=t.groupId;return e=r.toString().split(" ")[1].split(":")[0]+":"+r.toString().split(" ")[1].split(":")[1],Object(h.jsxs)("div",{className:"dialog",onTouchStart:this.touchstart,onTouchEnd:this.touchend,onMouseDown:this.touchstart,onMouseUp:this.touchend,children:[Object(h.jsx)("img",{src:i,alt:"dialogPicture",onClick:this.handleClick,className:"dialog-img"}),Object(h.jsxs)("div",{className:"dialog-contain",children:[Object(h.jsx)("p",{className:"dialog-name",children:s}),Object(h.jsx)("p",{className:"dialog-message",children:n})]}),Object(h.jsx)("div",{className:"dialog-timing",children:e}),Object(h.jsx)(N,{groupId:l,display:this.state.display,id_pair:c,id:o,margin:"55px",canChange:this.state.canChange})]})}}]),a}(s.Component),k=Object(c.h)(E),C=a(12),I=a(17),P=(a(54),function(e){var t=e.groupId,a=e.onSearch,n=e.dialogs,i=e.onSettings,c=Object(s.useState)(!1),r=Object(C.a)(c,2),o=r[0],l=r[1],d=null;switch(t){case 0:d="\u041e\u0431\u0449\u0438\u0435";break;case 1:d="\u0413\u0440\u043e\u043c\u043a\u0438\u0435";break;case 2:d="\u0422\u0438\u0445\u0438\u0435";break;case"all":d="\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b";break;default:d=null}return Object(h.jsxs)("header",{className:"dialogs-header",children:[d&&Object(h.jsx)("i",{className:"fa fa-bars","aria-hidden":"true",onClick:i}),d&&Object(h.jsx)(I.b,{to:"/dialogs",children:Object(h.jsx)("i",{className:"fa fa-users","aria-hidden":"true"})}),Object(h.jsx)("div",{className:"group-name",children:d}),Object(h.jsx)("input",{type:"text",className:"dialogs-search",onInput:function(e){var s=[];"all"===t?n.forEach((function(t){t.forEach((function(t){t.name.toLowerCase().includes(e.target.value.toLowerCase())&&s.push(t)}))})):n[t].forEach((function(t){t.name.toLowerCase().includes(e.target.value.toLowerCase())&&s.push(t)})),a(s)},onBlur:function(e){a(null),l(!1),e.target.value=null},hidden:!o,autoFocus:!0}),d&&Object(h.jsx)("i",{className:"fa fa-search","aria-hidden":"true",onClick:function(){l(!1===o)}})]})}),T=(a(55),a(56),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",resultHidden:!0,defaultValue:null,result:{},loading:!1},e.changePlaceholderFocus=function(){e.setState({placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",defaultValue:"+7"})},e.changePlaceholderBlur=function(){e.setState({placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",defaultValue:null})},e.changePhone=function(t){12===t.target.value.length&&(e.setState({loading:!0}),e.service.sendDataPost({status:1,phone:t.target.value.slice(2)},"/contacts").then((function(e){return e.json()})).then((function(t){e.setState({result:t,resultHidden:!1,loading:!1})})))},e.addContact=function(t){e.service.sendDataPost({status:2,user2_id:e.state.result.id},"/contacts").then((function(e){return e.json()})).then((function(e){void 0!==e.dialog_id&&alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432!")}))},e}return Object(o.a)(a,[{key:"renderResult",value:function(){return 1===this.state.result.status?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:this.state.result.image_link,alt:"avatar"}),Object(h.jsx)("span",{children:this.state.result.name}),Object(h.jsx)("i",{className:"fa fa-plus-circle","aria-hidden":"true",onClick:this.addContact})]}):0===this.state.result.status?Object(h.jsx)("p",{children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):this.state.loading?Object(h.jsx)("p",{children:"\u0418\u0434\u0451\u0442 \u043f\u043e\u0438\u0441\u043a..."}):void 0}},{key:"render",value:function(){return Object(h.jsxs)("form",{className:"add-contact-form",children:[Object(h.jsx)("input",{type:"tel",className:"add-contact",placeholder:this.state.placeholder,onFocus:this.changePlaceholderFocus,onBlur:this.changePlaceholderBlur,onChange:this.changePhone,maxLength:"12",defaultValue:this.state.defaultValue}),Object(h.jsx)("div",{className:"add-contact-result-container",hidden:this.state.resultHidden,children:Object(h.jsx)("div",{className:"add-contact-result",children:this.renderResult()})})]})}}]),a}(s.Component)),D=(a(57),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACySURBVHgB7ZOhDsJADECvBIXeNBo+AjQWPoKvmIIEjSMBh95HgMZjmZ8Fe7xmXZiCa4Jck5fbenm9XtKT4IgY44xlZb8bEaldMpwgt+89ZJIq28kvuHFyabnF0CFv4QkFOd26hM91vratread3Ah2cLTi6bLlM8v38j/lcTthbpkYwCQ0A7LsyiwFlEzd9VeBKZyhRlx7ZA0d5bb1CrTdORxSZA3Re4bmkTysSIV8D4nxBulz6F4h5s8kAAAAAElFTkSuQmCC"),L=new m,F=function(){return Object(h.jsxs)("div",{className:"link-controllers ",children:[Object(h.jsx)(I.b,{to:"/contacts",className:"left-controller",children:Object(h.jsxs)("div",{className:"link-contain",children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB1Vn9ddMwEL/k8T9hgqoTNJ0AMwHZgGyQbJB0AsIEoRMAEzhMkDKBnQlcJhBWclfLsj7ubKfA7z1Xrk6n+9JJZwXgCtBar+on1xdU+K7gf0Ct6F6HsYbXRC0wQ+9VqIB5X0bGb3Bcgbwz4/n62VpGzMeSl1J+E/HkJsBTIH3hoe2QthtLXkz5pcW8RU+aZ231Zw6Pwv4qMGeG9OMY8lIG5Mi09tBoOeQBAwqIG5CPIS9lAGHmoc1CntbN2s08tD3S9mPJixlQMSbUHhp5q9CYfDj+s6WkGktezIAcebYe2ioW0rr/qw5jPba8kAGZLVQ3SbWx+pcRfpOURxxHB1l2LXmhSbc6jC2MjKvIQ0/mXE8OxWvLc4VTyKuIJwt92Y0U/EvQlzOg0HwUVzPC8mSRUGBu8dDYo47XOnPdJHdh9a8Y8vZJo4WeXCLPwhIyA56DCuRZYN83nshE5HTbk1nMUOudijR2qaybGmdP82l+5PLQoEziSYsvR75MwENR+y7gMZHrlCpTawx54MdkMnkGPhS2Ep4nbO+4DKjTI/77Eq2pR5ESZFAo4InLUI8tiVcSbWh0U9RhG3DjDErCWrds5T3KvAU+KMqKOnwRkCyFWQ8eAhl9z2d54SFnew2QeJMi8AvkODlyOShdnrMBuA7N89wzgUuQo3TmSAJ1M8+Mcmc6UBHaRYbkgAIZWnngGiBdy2PkAHsrdfiU+eMaIF3L5xyQbKEWOjsKE63cGbqEzkrofpdPi54yS2yV+UMGiM8AxAO2e2ktZHjw30eQwZsDhPcgQL10dnVD9YzkRFXYmrJlCzJ0Dz7d/qg+F3TAxMBijn3ToLtl/tIdsHYGsTxqVYgKmNCJa8gAD6GKLlfLiBvGpHOpIhZvJZATvLacRvjeQRoK2z7b6AHbD4yxwfPGZ0DpMMVAtdBPkOPkzBGDyABJkUW71pAIcE5iMuC3S3gDw0DeMx/l1FfWz71bFGKSH6EbWUkEOrkWW0IK0vDVQAqaU9bGHPzLklNHKWxPLmEKA1B7+XZioe76giSfV6nvYdLGLQxALALJ7c2DVqXoYEjprbAtXUKvCOjLDxaF57A7YHvHVQL3+Pjh1JQPom1UQRhzpLeWCt42GCGt2wZ8D5XeZh5D/whh9DoHFPSYMMAfu73wjWfL65vEwW0Nmo8iOzr0foKR5XXOAbMMcE8/1x8QQT3Wp5Dx8idoG6CwPYwtLxSBEtIoE/12Iqd2oBL6yxsXVuXog+Sj5+9B+39jYH8kSfAH59pcMpQFQ70AAAAASUVORK5CYII=",alt:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(h.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})}),Object(h.jsx)(I.b,{to:"/cinema",children:Object(h.jsxs)("div",{className:"link-contain",children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"\u041a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"})}),Object(h.jsx)("p",{children:"\u041a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"})]})})]})},B=Object(u.b)((function(e){return{myUserName:e.myUserName,myWelcomeMessage:e.myWelcomeMessage,myProfilePhoto:e.myProfilePhoto}}),(function(e){return{setProfilePhoto:function(t){return e({type:"SET_MY_PROFILE_PHOTO",payload:t})},setUserName:function(t){return e({type:"SET_MY_USER_NAME",payload:t})},setWelcomeMessage:function(t){return e({type:"SET_MY_WELCOME_MESSAGE",payload:t})},clearState:function(){return e({type:"CLEAR_STATE"})}}}))((function(e){var t=e.myUserName,a=e.myWelcomeMessage,s=e.myProfilePhoto,n=e.setProfilePhoto,i=e.setUserName,c=e.setWelcomeMessage,r=e.clearState,o=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentTarget.closest("form"),e.next=3,x(t);case 3:return s=e.sent,e.t0=n,e.next=7,s;case 7:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=11,s;case 11:a.pictureUrl.value=e.sent;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.currentTarget,s={name:a.username.value,welcome_msg:a.message.value,image_link:a.pictureUrl.value},L.sendDataPost(s,"/edit"),i(s.name),c(s.welcome_msg);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"setting-page",children:[F(),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{name:"profileInfo",className:"profileInfo",onSubmit:l,children:[Object(h.jsxs)("label",{htmlFor:"picture",id:"upload-background",className:"upload-background-profile",children:[Object(h.jsx)("img",{src:s,alt:"Profile icon",className:"photo-settings"}),Object(h.jsx)("input",{className:"profile-photo-settings",type:"file",id:"picture",accept:"image/*",onChange:o})]}),Object(h.jsx)("input",{type:"text",name:"pictureUrl",hidden:!0}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"text",className:"username-field",name:"username",defaultValue:t,maxLength:"25"}),Object(h.jsx)("img",{src:D,alt:"edit",className:"settings-pencil"})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"text",className:"message-field",name:"message",defaultValue:a,maxLength:"200"}),Object(h.jsx)("img",{src:D,alt:"edit",className:"settings-pencil"})]}),Object(h.jsx)("button",{type:"submit",className:"profileInfo-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(h.jsx)(I.b,{to:"/",className:"profileInfo-button exit-button",onClick:r,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(h.jsx)("span",{className:"saby-gramm",children:"SABYgramm \xa9"})]})]})})),U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={slideGroup:0,itemsFound:null,dialogs:[]},e.slideSettings=function(){document.querySelector(".swiper-container").swiper.slideTo(0)},e.slideChanged=function(t){t&&e.setState({slideGroup:t.activeIndex-1})},e.renderSearchItems=function(t){e.setState({itemsFound:t})},e.addContact=function(){if(e.state.dialogs[0]&&0===e.state.dialogs[0].length)return Object(h.jsx)(T,{})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.service.sendDataGet("/dialogs").then((function(e){return e.json()})).then((function(t){e.setState({dialogs:t})}))}},{key:"render",value:function(){return Object(h.jsxs)(w.a,{className:"mySwiper",initialSlide:"1",onSlideChange:this.slideChanged,children:[Object(h.jsx)(P,{slot:"container-start",groupId:this.state.slideGroup,onSearch:this.renderSearchItems,dialogs:this.state.dialogs,onSettings:this.slideSettings}),Object(h.jsxs)("div",{className:"dialog-container",children:[Object(h.jsx)(S.a,{children:Object(h.jsx)(B,{})}),Object(h.jsxs)(S.a,{children:[this.addContact(),Object(h.jsx)(_,{dialogs:this.state.dialogs[0],itemsFound:this.state.itemsFound,groupId:0})]}),Object(h.jsxs)(S.a,{children:[this.addContact(),Object(h.jsx)(_,{dialogs:this.state.dialogs[1],itemsFound:this.state.itemsFound,groupId:1})]}),Object(h.jsxs)(S.a,{children:[this.addContact(),Object(h.jsx)(_,{dialogs:this.state.dialogs[2],itemsFound:this.state.itemsFound,groupId:2})]})]})]})}}]),a}(s.Component),_=function(e){var t=e.dialogs,a=e.itemsFound,s=void 0===a?null:a,n=e.groupId,i=void 0===n?null:n,c=null;return c=s||t,t?Object(h.jsx)("div",{children:c.map((function(e){return Object(h.jsx)(k,{dialog:e,groupId:i},e.id_pair)}))}):Object(h.jsx)("div",{})},Y=a(8),R=a(34),Q=a(35),H=a(37),G=a.n(H),W=function(e){var t=e.msgInput.current,a=function(){var t=Object(f.a)(b.a.mark((function t(a){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),s=a.target.message.value,(0,e.sendSocketMessage)(s),s.length>0&&(e.addNewMessage(s,"outgoing"),a.target.message.value="");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=Object(s.useState)(!1),i=Object(C.a)(n,2),c=i[0],r=i[1];return Object(h.jsxs)("form",{className:e.editMode?"message-form editing-input":"message-form",onSubmit:a,children:[Object(h.jsx)("div",{className:c?"emoji-picker":"hidden",children:Object(h.jsx)(G.a,{disableAutoFocus:!0,onEmojiClick:function(a,s){r(!1);var n=t.selectionStart,i=t.selectionEnd-t.selectionStart,c=t.value.split("");c.splice(n,i,s.emoji);var o=c.join("");e.setSavedMsg(o),t.focus(),t.selectionStart=t.selectionEnd=n+1}})}),Object(h.jsx)("button",{type:"button",className:"open-emojis",onClick:function(e){e.preventDefault(),r(!c)},children:Object(h.jsx)(R.a,{icon:Q.b})}),Object(h.jsx)("input",{name:"message",id:"message-input",type:"text",ref:e.msgInput,className:"message-input",placeholder:"Message",autoComplete:"off"}),Object(h.jsxs)("button",{type:"submit",className:"send-message",children:[Object(h.jsx)("span",{className:"sr-only",children:"send"}),Object(h.jsx)(R.a,{icon:Q.a})]})]},"MessageForm")},J=function(e){var t=function(e){return e.toString().split(" ")[1].split(":")[0]+":"+e.toString().split(" ")[1].split(":")[1]};return Object(h.jsx)(h.Fragment,{children:"outgoing"===e.message.direction?Object(h.jsx)("div",{className:"outgoing",children:Object(h.jsxs)("button",{className:e.editMode&&e.index===e.editIndex?"message editing":"message",onClick:function(){return e.enterEditMode(e.index)},children:[e.message.message,Object(h.jsx)("p",{className:"msg-date",children:e.message.edit?"\u0440\u0435\u0434. "+t(e.message.edit):t(e.message.time)})]})}):Object(h.jsx)("div",{className:"incoming",children:Object(h.jsxs)("div",{className:"message",children:[e.message.message,Object(h.jsx)("p",{className:"msg-date",children:e.message.edit?"\u0440\u0435\u0434. "+t(e.message.edit):t(e.message.time)})]})})})},Z=function(e){var t=e.messages.name,a=e.messages.messages,n=Object(s.useRef)(null);return Object(s.useEffect)((function(){n&&n.current.addEventListener("DOMNodeInserted",(function(e){var t=e.currentTarget;t.scroll({top:t.scrollHeight})}))}),[]),Object(h.jsxs)("div",{className:"chat-window",children:[Object(h.jsx)("ul",{className:"message-list",ref:n,children:0!==a.length?a.map((function(t,a){return Object(h.jsx)("li",{children:Object(h.jsx)(J,{message:t,enterEditMode:e.enterEditMode,index:a,editMode:e.editMode,editIndex:e.editIndex})},a)})):null}),0===a.length?Object(h.jsxs)("p",{className:"no-message",children:["This is the beginning of your conversation with"," ",t]}):null,Object(h.jsx)(W,{addNewMessage:e.addNewMessage,updateSaved:e.updateSaved,setSavedMsg:e.setSavedMsg,savedMsg:e.savedMsg,currentMessages:a,updateMessage:e.updateMessage,editMode:e.editMode,setEditMode:e.setEditMode,editIndex:e.editIndex,enterEditMode:e.enterEditMode,lastMessageIndex:a.length-1,msgInput:e.msgInput,sendSocketMessage:e.sendSocketMessage})]})},X=(a(61),a(62),function(e){var t=e.groupId,a=e.name,n=e.img,i=e.id,r=Object(s.useState)("none"),o=Object(C.a)(r,2),l=o[0],d=o[1],u=null,m=Object(c.f)();switch(t){case 0:u="\u041e\u0431\u0449\u0438\u0435";break;case 1:u="\u0413\u0440\u043e\u043c\u043a\u0438\u0435";break;case 2:u="\u0422\u0438\u0445\u0438\u0435";break;default:u=null}return Object(h.jsxs)("header",{className:"message-header",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"22",viewBox:"0 0 32 24",fill:"none",onClick:function(){return m.push("/dialogs")},children:Object(h.jsx)("path",{d:"M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807614 11.0711 0.807613 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z",fill:"white"})}),Object(h.jsx)("img",{src:n,alt:"dialogPicture",className:"message-dialog-img"}),Object(h.jsxs)("div",{className:"flex-names",children:[Object(h.jsx)("div",{className:"user-name",children:a}),Object(h.jsx)("div",{className:"group-name",children:u})]}),Object(h.jsx)("i",{className:"fas fa-ellipsis-v",onClick:function(){d("block"===l?"none":"block")}}),Object(h.jsx)(N,{display:l,groupId:t,id:i,margin:"85px"})]})}),z=new m,q=Object(u.b)((function(e){return{myId:e.myId}}))((function(e){var t=Object(s.useState)([]),a=Object(C.a)(t,2),n=(a[0],a[1]),i=Object(c.g)();if(i.state)var r=i.state,o=r.groupId,l=r.name,d=r.img,u=r.id_pair,m=r.id;var j=Object(s.useState)("0"),g=Object(C.a)(j,1)[0],p=Object(s.useState)(!1),b=Object(C.a)(p,2),f=b[0],O=b[1],x=Object(s.useState)(null),v=Object(C.a)(x,2),A=v[0],y=v[1],w=Object(s.useRef)(),S=Object(s.useState)({0:{name:l,messages:[],saved:"",editMode:!1,groupId:o,img:d}}),M=Object(C.a)(S,2),N=M[0],E=M[1],k=Object(s.useState)(""),I=Object(C.a)(k,2),P=I[0],T=I[1],D=function(e,t){var a=N[g],s=(new Date).toLocaleString();a.messages.push({message:e,time:s,direction:t}),console.log(a.messages);var n=Object(Y.a)({},N);n[g]=a,E(n)},L=new WebSocket("ws://"+window.location.host+"/ws/room/".concat(u,"/"));Object(s.useEffect)((function(){z.sendDataPost({id_pair:u,status:2},"/dialogs").then((function(e){return e.json()})).then((function(e){return n(e)})),L.onopen=function(){console.log("\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e. "+u)},L.onmessage=function(t){console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b: "+t.data);var a=JSON.parse(t.data);a.user_id.toString()!==e.myId.toString()&&D(a.message,"incoming")}}),[u]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{groupId:N[g].groupId,name:N[g].name,img:N[g].img}),Object(h.jsx)("div",{className:"chat-container",children:Object(h.jsx)(Z,{messages:N[g],addNewMessage:D,updateSaved:function(e){var t=N[g];t.saved=e;var a=Object(Y.a)({},N);a[g]=t,E(a)},setSavedMsg:T,savedMsg:P,editMode:f,setEditMode:O,editIndex:A,setEditIndex:y,updateMessage:function(e){if(e.trim().length>0){var t=N[g],a=(new Date).toLocaleString();t.messages[A].message=e,t.messages[A].edit=a;var s=Object(Y.a)({},N);s[g]=t,E(s)}O(!1),T("")},msgInput:w,enterEditMode:function(e){var t=N[g].messages[e].message;y(e),T(t),O(!0),w.current.focus()},sendSocketMessage:function(e){L.send(JSON.stringify({message:e,user2_id:m,id_pair:u}))}})})]})})),K=a(29),V=(a(63),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={slideGroup:"all",itemsFound:null,dialogs:[]},e.slideChanged=function(t){t&&1===t.activeIndex?e.setState({slideGroup:"all"}):e.setState({slideGroup:null})},e.renderSearchItems=function(t){e.setState({itemsFound:t})},e.addContact=function(){return Object(h.jsx)(T,{})},e.slideSettings=function(){document.querySelector(".swiper-container").swiper.slideTo(0)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.service.getDialogData().then((function(e){return e.json()})).then((function(t){e.setState({dialogs:t})}))}},{key:"render",value:function(){return Object(h.jsxs)(w.a,{className:"mySwiper",initialSlide:"1",onSlideChange:this.slideChanged,children:[Object(h.jsx)(P,{slot:"container-start",groupId:this.state.slideGroup,onSettings:this.slideSettings,onSearch:this.renderSearchItems,dialogs:this.state.dialogs}),Object(h.jsx)(S.a,{children:Object(h.jsx)(B,{})}),Object(h.jsxs)(S.a,{children:[this.addContact(),Object(h.jsx)($,{dialogs:this.state.dialogs,itemsFound:this.state.itemsFound})]})]})}}]),a}(s.Component)),$=function(e){var t=e.dialogs,a=e.itemsFound,s=void 0===a?null:a,n=null;return 0!==t.length&&(n=s||[].concat(Object(K.a)(t[0]),Object(K.a)(t[1]),Object(K.a)(t[2]))),n?Object(h.jsx)("div",{className:"dialog-container",children:n.map((function(e){return Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("img",{src:e.img,alt:"dialogPicture",className:"contacts-img"}),e.name]},e.id)}))}):Object(h.jsx)("div",{})},ee=(a(64),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).service=new m,e.state={placeholder:"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c",resultHidden:!0,defaultValue:null,result:{},loading:!0},e.changePlaceholderFocus=function(){e.setState({placeholder:"\u0418\u043c\u044f",defaultValue:""})},e.changePlaceholderBlur=function(){e.setState({placeholder:"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c",defaultValue:null})},e.changePhone=function(t){12===t.target.value.length&&(e.setState({loading:!0}),e.service.sendDataPost({status:1,phone:t.target.value.slice(2)},"/contacts").then((function(e){return e.json()})).then((function(t){e.setState({result:t,resultHidden:!1,loading:!1})})))},e.addContact=function(t){e.service.sendDataPost({status:2,user2_id:e.state.result.id},"/contacts").then((function(e){return e.json()})).then((function(e){void 0!==e.dialog_id&&alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432!")}))},e}return Object(o.a)(a,[{key:"renderResult",value:function(){return 1===this.state.result.status?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:this.state.result.image_link,alt:"avatar"}),Object(h.jsx)("span",{children:this.state.result.name}),Object(h.jsx)("i",{className:"fa fa-plus-circle","aria-hidden":"true",onClick:this.addContact})]}):0===this.state.result.status?Object(h.jsx)("p",{children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):this.state.loading?Object(h.jsx)("p",{children:"\u0418\u0434\u0451\u0442 \u043f\u043e\u0438\u0441\u043a..."}):void 0}},{key:"render",value:function(){return Object(h.jsxs)("form",{className:"add-friend-form",children:[Object(h.jsx)("input",{type:"tel",className:"add-friend",placeholder:this.state.placeholder,onFocus:this.changePlaceholderFocus,onBlur:this.changePlaceholderBlur,onChange:this.changePhone,maxLength:"12",defaultValue:this.state.defaultValue}),Object(h.jsx)("div",{className:"add-friend-result-container",hidden:this.state.resultHidden,children:Object(h.jsx)("div",{className:"add-friend-result",children:this.renderResult()})})]})}}]),a}(s.Component)),te=(a(65),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={link:"https://www.youtube.com/embed/dQw4w9WgXcQ"},e.changeLink=function(t){e.setState({link:"".concat(t.target.value)})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"cinema-page",children:[Object(h.jsx)("iframe",{className:"movie",width:"560",height:"315",src:"https://www.youtube.com/embed/3jT_q7dt-cM",frameborder:"0",allowfullscreen:!0}),Object(h.jsxs)("div",{className:"blue-div-link",children:[Object(h.jsx)("input",{className:"link",value:"https://www.youtube.com/embed/dQw4w9WgXcQ",placeholder:"https://www.youtube.com/embed/dQw4w9WgXcQ",onChange:this.changeLink}),Object(h.jsx)(ee,{}),Object(h.jsx)(q,{})]})]})}}]),a}(s.Component)),ae=(a(66),function(e){e.socket;return Object(h.jsx)("div",{children:"Test"})}),se=function(){return Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(c.a,{path:"/edit",component:y}),Object(h.jsx)(c.a,{path:"/dialogs",component:U}),Object(h.jsx)(c.a,{path:"/contacts",component:V}),Object(h.jsx)(c.a,{path:"/cinema",component:te}),Object(h.jsx)(c.a,{path:"/test",render:function(){return Object(h.jsx)(ae,{})}}),Object(h.jsx)(c.a,{path:"/chatapp/:id",render:function(e){var t=e.match.params,a=t.id,s=t.groupId;return Object(h.jsx)(q,{dialogId:s,id:a})}})]})},ne=a(38),ie={myId:"",myUserName:"",myWelcomeMessage:"",myProfilePhoto:null,myPassword:null,myPhone:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MY_ID":return Object(Y.a)(Object(Y.a)({},e),{},{myId:t.payload});case"SET_MY_PASSWORD":return Object(Y.a)(Object(Y.a)({},e),{},{myPassword:t.payload});case"SET_MY_PHONE":return Object(Y.a)(Object(Y.a)({},e),{},{myPhone:t.payload});case"SET_MY_PROFILE_PHOTO":return Object(Y.a)(Object(Y.a)({},e),{},{myProfilePhoto:t.payload});case"SET_MY_WELCOME_MESSAGE":return Object(Y.a)(Object(Y.a)({},e),{},{myWelcomeMessage:t.payload});case"SET_MY_USER_NAME":return Object(Y.a)(Object(Y.a)({},e),{},{myUserName:t.payload});case"CLEAR_STATE":return ie;default:return e}},re=Object(ne.a)(ce);i.a.render(Object(h.jsx)(u.a,{store:re,children:Object(h.jsx)(I.a,{children:Object(h.jsx)(se,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ea3a503c.chunk.js.map