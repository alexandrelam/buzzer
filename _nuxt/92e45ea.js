(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1185:function(t,e,n){var content=n(1203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(182).default)("401ca8bc",content,!0,{sourceMap:!1})},1186:function(t,e,n){var content=n(1205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(182).default)("064210b8",content,!0,{sourceMap:!1})},1191:function(t,e,n){"use strict";n.r(e);n(131);var r=n(65),o=n(126);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{name:"default_user",isAdmin:!1}},mounted:function(){this.$fire.database.ref("users")},methods:l(l({},Object(o.b)({setName:"setName"})),{},{handleCheckChange:function(t){this.isAdmin=t.target.checked},handleNameChange:function(t){this.name=t.target.value},submitData:function(){this.setName(this.name),localStorage.setItem("name",this.name),localStorage.setItem("isAdmin",this.isAdmin),this.$fire.database.ref("users/"+this.name).set({username:this.name,isAdmin:this.isAdmin,buzz_time:""})}})},m=(n(1202),n(78)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputs"},[n("p",[t._v("Prénom")]),t._v(" "),n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prenom",{rules:[{required:!0,message:"Rentrez un nom!"}]}],expression:"[\n      'prenom',\n      { rules: [{ required: true, message: 'Rentrez un nom!' }] },\n    ]"}],attrs:{placeholder:"Rentrez un prénom"},on:{change:t.handleNameChange}}),t._v(" "),n("a-checkbox",{staticClass:"checkbox",on:{change:t.handleCheckChange}},[t._v("\n    Je suis admin\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/app"}},[n("a-button",{attrs:{"html-type":"submit",type:"primary"},on:{click:t.submitData}},[t._v("\n      Go!\n    ")])],1)],1)}),[],!1,null,"4db79a3e",null);e.default=component.exports},1202:function(t,e,n){"use strict";n(1185)},1203:function(t,e,n){(e=n(181)(!1)).push([t.i,'.inputs[data-v-4db79a3e]{display:flex;flex-direction:column}.checkbox[data-v-4db79a3e]{margin-top:24px;font-family:"Cabin"}.checkbox[data-v-4db79a3e],p[data-v-4db79a3e]{font-size:17px;font-weight:700;color:#262626}input[data-v-4db79a3e]{width:400px;height:48px}a[data-v-4db79a3e]{margin-top:70px}a[data-v-4db79a3e],button[data-v-4db79a3e]{height:56px}button[data-v-4db79a3e]{width:400px}@media only screen and (max-width:400px){input[data-v-4db79a3e]{width:300px}}',""]),t.exports=e},1204:function(t,e,n){"use strict";n(1186)},1205:function(t,e,n){(e=n(181)(!1)).push([t.i,'html[data-v-44a87548]{font-family:"Cabin";margin:0;padding:0}.content[data-v-44a87548]{display:flex;flex-direction:column}h1[data-v-44a87548]{font-size:36px;font-weight:700;font-style:italic;margin:20vh auto auto}img[data-v-44a87548]{width:480px}.wrapper[data-v-44a87548]{display:flex;justify-content:center}.login-form[data-v-44a87548]{margin-top:55px}@media only screen and (max-width:800px){img[data-v-44a87548]{display:none}}@media only screen and (max-width:400px){h1[data-v-44a87548]{margin-top:100px}}',""]),t.exports=e},1213:function(t,e,n){"use strict";n.r(e);var r={components:{LoginForm:n(1191).default}},o=(n(1204),n(78)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("html",[this._m(0),this._v(" "),e("body",[e("section",{staticClass:"content"},[e("h1",[this._v("Buzzer!")]),this._v(" "),e("div",{staticClass:"wrapper"},[e("img",{attrs:{src:"/playing_games.svg",alt:"playing_games"}}),this._v(" "),e("LoginForm",{staticClass:"login-form"})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("head",[e("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com"}}),this._v(" "),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",rel:"stylesheet"}})])}],!1,null,"44a87548",null);e.default=component.exports;installComponents(component,{LoginForm:n(1191).default})}}]);