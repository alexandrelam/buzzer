(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1183:function(t,e,n){var content=n(1198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(182).default)("16d3cf84",content,!0,{sourceMap:!1})},1184:function(t,e,n){var content=n(1200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(182).default)("44009a0b",content,!0,{sourceMap:!1})},1185:function(t,e,n){var content=n(1202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(182).default)("04a39150",content,!0,{sourceMap:!1})},1186:function(t,e,n){var content=n(1204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(182).default)("0e271128",content,!0,{sourceMap:!1})},1187:function(t,e,n){var content=n(1206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(182).default)("7512cb74",content,!0,{sourceMap:!1})},1191:function(t,e,n){"use strict";n.r(e);n(131);var r=n(65),o=n(1195),c=n(126);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{ConnectedUserList:o.default},methods:f(f({},Object(c.b)({setName:"setName"})),{},{handleQuit:function(){localStorage.setItem("name","default_username"),localStorage.setItem("isAdmin",!1),this.$fire.database.ref("users").child(this.$store.state.name).remove(),this.setName("default_username")}})},m=(n(1199),n(78)),component=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-wrapper"},[e("ConnectedUserList"),this._v(" "),e("NuxtLink",{attrs:{to:"/"}},[e("a-button",{attrs:{type:"danger"},on:{click:this.handleQuit}},[this._v("\n      Quitter\n    ")])],1)],1)}),[],!1,null,"1109eec4",null);e.default=component.exports;installComponents(component,{ConnectedUserList:n(1195).default})},1192:function(t,e,n){"use strict";n.r(e);n(131);var r={data:function(){return{name:localStorage.getItem("name")||this.$store.state.name,isAdmin:localStorage.getItem("isAdmin")||this.$store.state.isAdmin}},methods:{handleBuzzer:function(){this.getTime();this.$fire.database.ref("users/"+localStorage.getItem("name")).set({username:this.name,isAdmin:this.isAdmin,buzz_time:this.getTime()})},getTime:function(){return(new Date).toISOString()}}},o=(n(1201),n(78)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("a-button",{attrs:{type:"primary",shape:"circle",icon:"bell"},on:{click:this.handleBuzzer}})}),[],!1,null,"800106aa",null);e.default=component.exports},1193:function(t,e,n){"use strict";n.r(e);n(183),n(79),n(631);var r=[{dataIndex:"username",key:"username",slots:{title:"customTitle"},scopedSlots:{customRender:"username"}},{title:"Time",dataIndex:"buzz_time",key:"buzz_time"}],o={data:function(){return{columns:r,data:[]}},mounted:function(){var t=this;this.$fire.database.ref("users").on("value",(function(e){return t.processData(e)}))},methods:{processData:function(t){this.convert_to_data(t),this.sortDate(),this.reformatDate()},reformatDate:function(){var t=this;this.data.map((function(e){t.ISOtoTime(e.buzz_time),e.buzz_time=t.ISOtoTime(e.buzz_time)}))},sortDate:function(){this.data.sort((function(a,b){return a.buzz_time<b.buzz_time?-1:a.buzz_time>b.buzz_time?1:0}))},convert_to_data:function(t){var e=this;this.data=[];var n=t.val();Object.entries(n).map((function(t,n){var r={key:t[1].username,username:t[1].username,buzz_time:t[1].buzz_time};e.data.push(r)}))},ISOtoTime:function(t){var time=t.substr(11,12),e=time.substr(0,2),n=time.substr(3,2),r=time.substr(6,2),o=time.substr(9,3);return"".concat(e,"h").concat(n,"min    ---     ").concat(r,"sec ").concat(o,"ms")}}},c=(n(1203),n(78)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-table",{attrs:{columns:t.columns,"data-source":t.data},scopedSlots:t._u([{key:"name",fn:function(text){return n("span",{},[t._v(t._s(text))])}}])},[t._v(" "),n("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[n("a-icon",{attrs:{type:"smile-o"}}),t._v(" Name")],1)])}),[],!1,null,null,null);e.default=component.exports},1195:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{users:[]}},mounted:function(){var t=this;this.$fire.database.ref("users").on("value",(function(e){return t.users=e.val()}))}},o=(n(1197),n(78)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"connected-user-wrapper"},[n("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),n("p",[t._v("Connecté :")]),t._v(" "),t._l(t.users,(function(e){return n("a-button",{key:e.name},[t._v(t._s(e.username))])}))],2)}),[],!1,null,"0f853c59",null);e.default=component.exports},1197:function(t,e,n){"use strict";n(1183)},1198:function(t,e,n){(e=n(181)(!1)).push([t.i,"p[data-v-0f853c59]{margin:0 0 0 10px}.connected-user-wrapper[data-v-0f853c59]{display:flex;align-items:center;flex-wrap:wrap}button[data-v-0f853c59]{margin-left:10px;cursor:default}",""]),t.exports=e},1199:function(t,e,n){"use strict";n(1184)},1200:function(t,e,n){(e=n(181)(!1)).push([t.i,".header-wrapper[data-v-1109eec4]{display:flex;justify-content:space-between}",""]),t.exports=e},1201:function(t,e,n){"use strict";n(1185)},1202:function(t,e,n){(e=n(181)(!1)).push([t.i,"button[data-v-800106aa]{width:100px;height:100px}",""]),t.exports=e},1203:function(t,e,n){"use strict";n(1186)},1204:function(t,e,n){(e=n(181)(!1)).push([t.i,".ant-table-pagination.ant-pagination{display:none!important}",""]),t.exports=e},1205:function(t,e,n){"use strict";n(1187)},1206:function(t,e,n){(e=n(181)(!1)).push([t.i,"h1[data-v-75c10162]{display:flex;justify-content:center;padding-top:10vh}.header[data-v-75c10162]{padding:15px 25px}.app-wrapper[data-v-75c10162]{margin-top:50px;display:flex;grid-gap:65px;gap:65px;justify-content:center;align-items:center;flex-wrap:wrap-reverse}",""]),t.exports=e},1217:function(t,e,n){"use strict";n.r(e);var r=n(1191),o=n(1192),c=n(1193),l={components:{Header:r.default,BuzzerButton:o.default,BuzzerLeaderboard:c.default}},f=(n(1205),n(78)),component=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{staticClass:"header"}),this._v(" "),e("h1",[this._v("Bienvenue "+this._s(this.$store.state.name))]),this._v(" "),e("div",{staticClass:"app-wrapper"},[e("BuzzerLeaderboard"),this._v(" "),e("BuzzerButton")],1)],1)}),[],!1,null,"75c10162",null);e.default=component.exports;installComponents(component,{Header:n(1191).default,BuzzerLeaderboard:n(1193).default,BuzzerButton:n(1192).default})}}]);