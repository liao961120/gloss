(function(e){function t(t){for(var n,l,o=t[0],r=t[1],c=t[2],d=0,g=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&g.push(a[l][0]),a[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(g.length)g.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var r=s[o];0!==a[r]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=s[0]))}return e}var n={},a={app:0},i=[];function l(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=n,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(s,n,function(t){return e[t]}.bind(null,n));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"2cd3":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{color:"grey lighten-4"}},[s("Navbar"),s("v-content",{staticClass:"mx-4 mb-2 mt-2"},[s("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-app-bar",{attrs:{dense:"",app:"",height:"35"}},[s("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),s("v-toolbar-title",{staticClass:"grey--text darken-5"},[e._v("Leipzig.vue")]),s("v-spacer"),s("v-btn",{attrs:{icon:""}},[s("v-icon",[e._v("mdi-heart")])],1),s("v-btn",{attrs:{icon:""}},[s("v-icon",[e._v("mdi-magnify")])],1)],1),s("v-navigation-drawer",{staticClass:"primary",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[s("v-list",e._l(e.links,(function(t){return s("v-list-item",{key:t.text,attrs:{router:"",to:t.route}},[s("v-list-item-action",[s("v-icon",{staticClass:"white--text"},[e._v(e._s(t.icon))])],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"white--text"},[e._v(e._s(t.text))])],1)],1)})),1)],1)],1)},o=[],r={data:function(){return{drawer:!1,links:[{icon:"mdi-file-document-edit-outline",text:"Edit",route:"/"},{icon:"mdi-folder",text:"Reader",route:"/reader"}]}}},c=r,u=s("2877"),d=s("6544"),g=s.n(d),p=s("40dc"),f=s("5bc1"),v=s("8336"),h=s("132d"),m=s("8860"),b=s("da13"),_=s("1800"),G=s("5d23"),x=s("f774"),C=s("2fa4"),O=s("2a7f"),S=Object(u["a"])(c,l,o,!1,null,null,null),y=S.exports;g()(S,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VBtn:v["a"],VIcon:h["a"],VList:m["a"],VListItem:b["a"],VListItemAction:_["a"],VListItemContent:G["a"],VListItemTitle:G["b"],VNavigationDrawer:x["a"],VSpacer:C["a"],VToolbarTitle:O["a"]});var k={name:"App",components:{Navbar:y},data:function(){return{}}},E=k,P=s("7496"),N=s("a75b"),w=Object(u["a"])(E,a,i,!1,null,null,null),L=w.exports;g()(w,{VApp:P["a"],VContent:N["a"]});var A=s("8c4f"),M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"edit"},[s("v-container",{staticClass:"ma-0"},[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{xs:"12",sm:"12",md:e.hideGloss?12:7,lg:e.hideGloss?12:7,"order-xs":"2","order-sm":"2","order-lg":"1"}},[s("v-text-field",{staticClass:"caption",attrs:{height:"27",label:"Original Langauge",spellcheck:"false"},model:{value:e.gloss.original,callback:function(t){e.$set(e.gloss,"original",t)},expression:"gloss.original"}}),s("v-text-field",{staticClass:"caption",attrs:{height:"27",label:"Original Gloss",spellcheck:"false"},model:{value:e.gloss.gloss[0],callback:function(t){e.$set(e.gloss.gloss,0,t)},expression:"gloss.gloss[0]"}}),s("v-text-field",{staticClass:"caption",attrs:{height:"27",label:"English Gloss",spellcheck:"false"},model:{value:e.gloss.gloss[1],callback:function(t){e.$set(e.gloss.gloss,1,t)},expression:"gloss.gloss[1]"}}),s("v-text-field",{staticClass:"caption",attrs:{height:"27",label:"Chinese Gloss",spellcheck:"false"},model:{value:e.gloss.gloss[2],callback:function(t){e.$set(e.gloss.gloss,2,t)},expression:"gloss.gloss[2]"}}),s("v-text-field",{staticClass:"caption",attrs:{height:"27",label:"English Translation"},model:{value:e.gloss.free[0],callback:function(t){e.$set(e.gloss.free,0,t)},expression:"gloss.free[0]"}}),s("v-text-field",{staticClass:"caption",attrs:{height:"27",label:"Chinese Translation",spellcheck:"false"},model:{value:e.gloss.free[1],callback:function(t){e.$set(e.gloss.free,1,t)},expression:"gloss.free[1]"}}),s("v-text-field",{staticClass:"caption",attrs:{height:"27",label:"Comment",spellcheck:"false"},model:{value:e.gloss.free[2],callback:function(t){e.$set(e.gloss.free,2,t)},expression:"gloss.free[2]"}})],1),s("v-col",{staticClass:"pr-0 mr-0",style:e.hideGloss?"display:none;":"",attrs:{xs:"12",sm:"12",md:"5",lg:"5","order-xs":"1","order-sm":"1","order-lg":"2","align-self":"start"}},[s("Leipzig",{attrs:{gloss:e._f("removeEmptyGloss")(e.gloss)}})],1)],1)],1),s("v-bottom-navigation",{staticClass:"grey lighten-3 mt-1",attrs:{height:"38",app:""}},[s("span",{staticClass:"mx-1 pa-0"},[s("v-select",{attrs:{items:Object.keys(e.docInfo),label:"Document",height:"30",outlined:"",dense:""},model:{value:e.selectGloss.docid,callback:function(t){e.$set(e.selectGloss,"docid",t)},expression:"selectGloss.docid"}})],1),s("span",{staticClass:"mx-1 pa-0"},[s("v-select",{attrs:{items:e.docInfo[e.selectGloss.docid],label:"Gloss",height:"30",outlined:"",dense:""},model:{value:e.selectGloss.glossNum,callback:function(t){e.$set(e.selectGloss,"glossNum",t)},expression:"selectGloss.glossNum"}})],1),s("v-btn",[s("span",[e._v("New Doc")]),s("v-icon",[e._v("mdi-pencil")])],1),s("v-btn",[s("span",[e._v("Save")]),s("v-icon",[e._v("mdi-content-save-outline")])],1),s("v-btn",{on:{click:function(t){e.hideGloss=!e.hideGloss}}},[e.hideGloss?s("span",[e._v("Show")]):s("span",[e._v("Hide")]),s("v-icon",[e._v("mdi-monitor-screenshot")])],1)],1)],1)},T=[],D=(s("4160"),s("b64b"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"example gloss--glossed"},[e.gloss.original?s("p",{staticClass:"gloss__line--original gloss__line gloss__line--0"},[e._v(e._s(e.gloss.original))]):e._e(),s("div",{staticClass:"gloss__words"},e._l(e.tokenizeGlossLength,(function(t,n){return s("div",{key:n+Math.random(),staticClass:"gloss__word"},e._l(e.tokenizeGloss,(function(t,a){return s("p",{key:a+Math.random(),class:"gloss__line gloss__line--"+(a+1)},[t[n].length>1?[e._l(t[n],(function(a,i){return[RegExp("[A-Z1-3]+-[A-Z1-3]+").test(a)?[e._l(a.split("-"),(function(t,n){return[s("abbr",{key:t+Math.random(),staticClass:"gloss__abbr",attrs:{title:e.abbr[t]}},[e._v(e._s(t))]),n+1<a.split("-").length?[e._v("-")]:e._e()]}))]:[s("abbr",{key:a+Math.random(),staticClass:"gloss__abbr",attrs:{title:e.abbr[a]}},[e._v(e._s(a))])],i+1<t[n].length?[e._v(".")]:e._e()]}))]:[RegExp("^[A-Z1-3]+$").test(t[n][0])?[s("abbr",{staticClass:"gloss__abbr",attrs:{title:e.abbr[t[n][0]]}},[e._v(e._s(t[n][0]))])]:[e._v(e._s(t[n][0]))]]],2)})),0)})),0),e._l(e.gloss.free,(function(t,n){return s("p",{key:n+Math.random(),class:"gloss__line--free gloss__line gloss__line--"+(e.tokenizeGlossLength[0]+n)},[e._v(e._s(t))])}))],2)])}),I=[],R=(s("cb29"),s("c975"),s("d81d"),s("ac1f"),s("466d"),s("5319"),s("1276"),s("2909")),V={computed:{tokenizeGloss:function(){for(var e=this.gloss.gloss.map((function(e){return e.match(/{(.*?)}|([^\s]+)/g).map((function(e){return e.replace(/^{/,"").replace(/}$/,"").split(".")}))})),t=e.map((function(e){return e.length})),s=Math.max.apply(Math,Object(R["a"])(t)),n=0;n<e.length;n++)if(e[n].length<s){var a,i=new Array(s-e[n].length).fill(["___"]);(a=e[n]).push.apply(a,Object(R["a"])(i))}return e},tokenizeGlossLength:function(){if(0==this.gloss.gloss.length)return[[0]];var e=this.gloss.gloss.map((function(e){return e.match(/{(.*?)}|([^\s]+)/g).map((function(e){return e.replace(/^{/,"").replace(/}$/,"").split(".").length}))})),t=e.map((function(e){return e.length}));return e[t.indexOf(Math.max.apply(Math,Object(R["a"])(t)))]}},props:["gloss"],data:function(){return{abbr:{___:"placeholder",1:"first person",2:"second person",3:"third person","1SG":"first person singular","2SG":"second person singular","3SG":"third person singular","1PL":"first person plural","2PL":"second person plural","3PL":"third person plural",A:"agent-like argument of canonical transitive verb",ABL:"ablative",ABS:"absolutive",ACC:"accusative",ADJ:"adjective",ADV:"adverb(ial)",AGR:"agreement",ALL:"allative",ANTIP:"antipassive",APPL:"applicative",ART:"article",AUX:"auxiliary",BEN:"benefactive",CAUS:"causative",CLF:"classifier",COM:"comitative",COMP:"complementizer",COMPL:"completive",COND:"conditional",COP:"copula",CVB:"converb",DAT:"dative",DECL:"declarative",DEF:"definite",DEM:"demonstrative",DET:"determiner",DIST:"distal",DISTR:"distributive",DU:"dual",DUR:"durative",ERG:"ergative",EXCL:"exclusive",F:"feminine",FOC:"focus",FUT:"future",GEN:"genitive",IMP:"imperative",INCL:"inclusive",IND:"indicative",INDF:"indefinite",INF:"infinitive",INS:"instrumental",INTR:"intransitive",IPFV:"imperfective",IRR:"irrealis",LOC:"locative",M:"masculine",N:"neuter",NEG:"negation / negative",NMLZ:"nominalizer / nominalization",NOM:"nominative",OBJ:"object",OBL:"oblique",P:"patient-like argument of canonical transitive verb",PASS:"passive",PFV:"perfective",PL:"plural",POSS:"possessive",PRED:"predicative",PRF:"perfect",PRS:"present",PROG:"progressive",PROH:"prohibitive",PROX:"proximal / proximate",PST:"past",PTCP:"participle",PURP:"purposive",Q:"question particle / marker",QUOT:"quotative",RECP:"reciprocal",REFL:"reflexive",REL:"relative",RES:"resultative",S:"single argument of canonical intransitive verb",SBJ:"subject",SBJV:"subjunctive",SG:"singular",TOP:"topic",TR:"transitive",VOC:"vocative"}}}},j=V,$=(s("6dcf"),Object(u["a"])(j,D,I,!1,null,"e3dc94ba",null)),F=$.exports,B={name:"Edit",components:{Leipzig:F},computed:{gloss:function(){var e=this.selectGloss.docid.length>0?this.selectGloss.docid:"doc1",t=this.selectGloss.glossNum>0?this.selectGloss.glossNum-1:0;return this.$store.getters.getGloss(e,t)},docInfo:function(){return this.$store.getters.getDocInfo}},data:function(){return{selectGloss:{docid:"",glossNum:0},hideGloss:!1}},watch:{"selectGloss.docid":function(){this.docInfo[this.selectGloss.docid].length>0?this.selectGloss.glossNum=this.docInfo[this.selectGloss.docid][0]:this.selectGloss.glossNum=""}},created:function(){Object.keys(this.docInfo)[0]?(this.selectGloss.docid=Object.keys(this.docInfo)[0],this.docInfo[this.selectGloss.docid].length>0&&(this.selectGloss.glossNum=this.docInfo[this.selectGloss.docid][0])):this.selectGloss.docid=""},filters:{removeEmptyGloss:function(e){var t={original:"",gloss:[],free:[]};return t.original=e.original,e.gloss.forEach((function(e){""!=e&&t.gloss.push(e)})),e.free.forEach((function(e){""!=e&&t.free.push(e)})),t}}},z=B,q=s("b81c"),U=s("62ad"),J=s("a523"),Z=s("0fd9"),X=s("b974"),H=s("8654"),Q=Object(u["a"])(z,M,T,!1,null,null,null),K=Q.exports;g()(Q,{VBottomNavigation:q["a"],VBtn:v["a"],VCol:U["a"],VContainer:J["a"],VIcon:h["a"],VRow:Z["a"],VSelect:X["a"],VTextField:H["a"]});var W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("This is an about page")])])}],ee={},te=Object(u["a"])(ee,W,Y,!1,null,null,null),se=te.exports;n["a"].use(A["a"]);var ne=[{path:"/",name:"Edit",component:K},{path:"/reader",name:"Reader",component:se}],ae=new A["a"]({routes:ne}),ie=ae,le=(s("7db0"),s("a630"),s("d3b7"),s("3ca3"),s("ddb0"),s("2f62"));n["a"].use(le["a"]);var oe=new le["a"].Store({getters:{getGloss:function(e){return function(t,s){return e.documents.find((function(e){return e.id===t})).glosses[s]}},getDocInfo:function(e){for(var t=e.documents.map((function(e){return e.id})),s=e.documents.map((function(e){return e.glosses.length})),n={},a=0;a<t.length;a++)n[t[a]]=Array.from(Array(s[a]).keys()),n[t[a]]=n[t[a]].map((function(e){return e+1}));return n}},state:{todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}],documents:[{id:"doc1",date:"2020-02-11",glosses:[{original:"Die Umgangssprache ist ein Teil des menschlichen Organismus.",gloss:["die umgangssprache ist ein teil des mensch-lich-en organismus","DET.NOM.F.SG {colloquial language} be.3SG.PRS DET.NOM.M.SG part DET.GEN.M.SG human-ADJ-AGR.GEN.M.SG organism","the {colloquial language} is a part {of the} human organism"],free:["‘Colloquial language is a part of the human organism.’"]}]},{id:"doc2",date:"2020-02-11",glosses:[{original:"張三討厭李四",gloss:["張三 討厭 李四","{Zhang San} A {Li Si}","{Zhang San} hates {Li Si}"],free:["‘Zhang San hates Lee Si.’"]},{original:"Die Umgangssprache ist ein Teil des menschlichen Organismus.",gloss:["die umgangssprache ist ein teil des mensch-lich-en organismus","DET.NOM.F.SG {colloquial language} be.3SG.PRS DET.NOM.M.SG part DET.GEN.M.SG human-ADJ-AGR.GEN.M.SG organism","the {colloquial language} is a part {of the} human organism"],free:["‘Colloquial language is a part of the human organism.’"]}]}]},mutations:{},actions:{}}),re=s("f309");s("5363");n["a"].use(re["a"]);var ce=new re["a"]({iconfont:"mdi"});n["a"].config.productionTip=!1,new n["a"]({router:ie,store:oe,vuetify:ce,render:function(e){return e(L)}}).$mount("#app")},"6dcf":function(e,t,s){"use strict";var n=s("2cd3"),a=s.n(n);a.a}});
//# sourceMappingURL=app.b548dafd.js.map