(this.webpackJsonpcovid19_india=this.webpackJsonpcovid19_india||[]).push([[0],{195:function(e,t,a){e.exports=a(408)},309:function(e,t,a){},310:function(e,t,a){},403:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),u=a(12),o=a.n(u),i=a(22),s=a(41),d=a(98),f=a.n(d),m="https://api.covid19india.org/data.json",p=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(m);case 3:return t=e.sent,a=t.data.cases_time_series,n=a.map((function(e){return{confirmed:e.dailyconfirmed,deaths:e.dailydeceased,date:e.date}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(m);case 3:return t=e.sent,a=t.data.statewise,n=a[0],e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(m);case 3:return t=e.sent,a=t.data.statewise,n=a.map((function(e){return{state:e.state,confirmed:e.confirmed,infected:e.active,deaths:e.deaths,recovered:e.recovered}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),b=a(166);a(309);var h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,p();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var l=0!==a.length?r.a.createElement(b.a,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Infected",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",null,l)},g=a(412),x=a(66),j=a(24),w=a(415);a(152),a(310),a(311);var O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,v();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var l=g.a.Meta;return r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(x.a,{gutter:16},r.a.createElement(j.a,{span:8},r.a.createElement(g.a,{hoverable:!0,title:"Total Confirmed",bordered:!1},r.a.createElement(l,{description:a.confirmed,avatar:r.a.createElement(w.a,null)}))),r.a.createElement(j.a,{span:8},r.a.createElement(g.a,{hoverable:!0,title:"Total Deaths",bordered:!1,headStyle:{color:"red"}},r.a.createElement(l,{description:a.deaths,avatar:r.a.createElement(w.a,null)}))),r.a.createElement(j.a,{span:8},r.a.createElement(g.a,{hoverable:!0,title:"Total Recovered",bordered:!1,headStyle:{color:"green"}},r.a.createElement(l,{description:a.recovered,avatar:r.a.createElement(w.a,null)})))))},y=a(413),I=a(411);var k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var l=y.a.Text,u=[{title:"State",dataIndex:"state",align:"center",render:function(e){return r.a.createElement(l,{style:{fontWeight:"bold"}},e)}},{title:"Confirmed",dataIndex:"confirmed",align:"center",render:function(e){return r.a.createElement(l,{style:{fontWeight:"bold"}},e)}},{title:"Infected",dataIndex:"infected",align:"center",render:function(e){return r.a.createElement(l,{style:{color:"blue",fontWeight:"bold"}},e)}},{title:"Deaths",dataIndex:"deaths",align:"center",render:function(e){return r.a.createElement(l,{style:{color:"red",fontWeight:"bold"}},e)}},{title:"Recovered",dataIndex:"recovered",align:"center",render:function(e){return r.a.createElement(l,{style:{color:"green",fontWeight:"bold"}},e)}}];return r.a.createElement("div",null,r.a.createElement(I.a,{columns:u,dataSource:a}))},S=a(414),C=a(416);a(403);var T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,v();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("div",{className:"site-page-header-ghost-wrapper"},r.a.createElement(S.a,{ghost:!1,title:"Covid-19 India Tracker"},r.a.createElement(C.a,{size:"small",column:3},r.a.createElement(C.a.Item,{label:"Created By:"},"David Nirmal"),r.a.createElement(C.a.Item,{label:"Last Updated"},a.lastupdatedtime))))},W=a(410);var _=function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(W.a,null),r.a.createElement(x.a,null,r.a.createElement(j.a,{span:24},r.a.createElement(O,null))),r.a.createElement(W.a,null),r.a.createElement(x.a,null,r.a.createElement(j.a,{span:6}),r.a.createElement(j.a,{span:12},r.a.createElement(h,null))),r.a.createElement(W.a,null),r.a.createElement(k,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.1560ff25.chunk.js.map