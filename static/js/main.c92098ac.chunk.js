(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(43),s=a(173),l=a(176),u=a(178),j=a(179),d=a(180),p=a(137),f=a(4),h=Object(s.a)((function(e){return{root:{flexGrow:1},active:{backgroundColor:"#39af63","&:hover":{backgroundColor:"#39af63"}}}}));function b(){var e=h();return Object(f.jsx)("header",{className:e.root,children:Object(f.jsx)(l.a,{position:"static",children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(j.a,{variant:"h6",className:e.root,children:"WezzerApp"}),Object(f.jsxs)(d.a,{variant:"contained",color:"primary",children:[Object(f.jsx)(p.a,{component:o.b,to:"/",exact:!0,activeClassName:e.active,children:"Weather"}),Object(f.jsx)(p.a,{component:o.b,to:"/favorites",activeClassName:e.active,children:"Favorites"})]})]})})})}var m=a(19),x=a(18),O=a(17),v=a(184),g=a(185),y=a(21),N=a(25),w=a.n(N),C=a(31),S=a(80),T=a.n(S),I="IT9XKTdAlNn4GBs05hARrhx2no5GeGlm",L="http://dataservice.accuweather.com";function W(e){return k.apply(this,arguments)}function k(){return(k=Object(C.a)(w.a.mark((function e(t){var a,n,r=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:"",e.prev=1,e.next=4,T.a.get("".concat(L,"/").concat(t,"apikey=").concat(I,"&language=en-us").concat(a));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",console.log(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var A={set:function(e,t){return localStorage.setItem(e,JSON.stringify(t)),t},get:function(e){return JSON.parse(localStorage.getItem(e))}},D="SET_LOCATION",K="SET_LOCATIONS",z="SET_WEATHER",E="SET_FORECAST",G="UPDATE_FAVORITES",F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Tel Aviv";return function(){var t=Object(C.a)(w.a.mark((function t(a,n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W("locations/v1/cities/search?q=".concat(e,"&"));case 2:r=t.sent,a({type:D,payload:r[0]});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(C.a)(w.a.mark((function t(a,n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W("locations/v1/cities/autocomplete?q=".concat(e,"&"));case 2:return r=t.sent,t.abrupt("return",a({type:K,payload:r}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"215854";return function(){var t=Object(C.a)(w.a.mark((function t(a,n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W("currentconditions/v1/".concat(e,"?"));case 2:r=t.sent,a({type:z,payload:r[0]});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"215854";return function(){var t=Object(C.a)(w.a.mark((function t(a,n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W("forecasts/v1/daily/5day/".concat(e,"?"),"&metric=true");case 2:r=t.sent,a({type:E,payload:r});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},_=function(e){return function(t,a){var n=a().favLocations,r=Object(y.a)(n);r=n.some((function(t){return t.Key===e.Key}))?r.filter((function(t){return t.Key!==e.Key})):[].concat(Object(y.a)(n),[e]),A.set("favorites",r),t({type:G,payload:r})}},H=r.a.useState,J=Object(s.a)({root:{background:"#39af63",border:0,color:"white",margin:"16px 0 8px 0","&:hover":{background:"#39af63"}}});function B(e){var t=e.onSearch,a=e.onGetWeather,n=H(""),r=Object(x.a)(n,2),c=r[0],i=r[1],o=Object(O.c)((function(e){return e.locations})),s=J(),l=function(e,t){if(e&&e.preventDefault(),t){var n=o.filter((function(e){return t.toLowerCase()===e.LocalizedName.toLowerCase()}));n[0]&&a(n[0])}};return Object(f.jsx)("div",{className:"search-bar",children:Object(f.jsxs)("form",{onSubmit:l,className:"flex",children:[Object(f.jsx)(g.a,{style:{width:300},freeSolo:!0,size:"small",options:o.map((function(e){return e.LocalizedName})),onChange:function(e,t){var a;(a=t)&&l(null,a)},onInputChange:function(e){var a=e.target.value;a&&(i(a),t(a))},renderInput:function(e){return Object(f.jsx)(v.a,Object(m.a)(Object(m.a)({},e),{},{label:"Search",margin:"normal",variant:"outlined"}))}}),Object(f.jsx)(p.a,{variant:"contained",className:s.root,onClick:function(e){l(e,c)},children:"Submit"})]})})}var q=a(182),P=a(183),U=a(136),X=a(51),Q=a.n(X),Y=a(60),Z=a.n(Y),$=(a(126),Object(s.a)({flex:{display:"inline-flex",padding:"0"},grid:{marginTop:"20px",justifyContent:"space-between"},paper:{textAlign:"center",height:"200px",width:"200px",borderRadius:"5px",margin:"10px auto",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"7px"},tempDisplay:{alignSelf:"center",minWidth:"70px"},btn:{padding:"0",margin:"0",minWidth:"40px",maxHeight:"40px",alignSelf:"center"},selfCenter:{textAlign:"center"},temperatureContainer:{display:"flex",justifyContent:"space-between",gap:"10px",marginBottom:"25px"},mainContainer:{textAlign:"center"},favoriteContainer:{display:"flex",justifyContent:"center",padding:"15px 30px"},favoriteIcon:{color:"red",fontSize:"1.8rem","&:hover":{cursor:"pointer"}},notFavorite:{color:"grey",fontSize:"1.8rem","&:hover":{cursor:"pointer"}},thumbnail:{maxWidth:"75px",alignSelf:"center"}}));function ee(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),a=t[0],r=t[1],c=$(),i=Object(O.c)((function(e){return e.currLocWeather})),o=Object(O.c)((function(e){return e.location})),s=Object(O.c)((function(e){return e.favLocations})),l=Object(O.c)((function(e){return e.forecast})),u=Object(O.b)();Object(n.useEffect)((function(){u(F(o.LocalizedName)),u(R(o.Key)),u(V(o.Key))}),[]);var h=s.some((function(e){return e.name===o.LocalizedName}));return Object(f.jsx)("div",{className:"location-details",children:i.Temperature&&Object(f.jsxs)(q.a,{maxWidth:"lg",children:[Object(f.jsxs)(P.a,{container:!0,children:[Object(f.jsxs)(P.a,{item:!0,xs:12,md:4,className:c.temperatureContainer,children:[Object(f.jsx)("img",{className:c.thumbnail,src:"https://developer.accuweather.com/sites/default/files/".concat(i.WeatherIcon<10?"0"+i.WeatherIcon:i.WeatherIcon,"-s.png")}),a?Object(f.jsxs)(j.a,{className:c.tempDisplay,variant:"h5",children:[i.Temperature.Metric.Value,"\u2103"]}):Object(f.jsxs)(j.a,{className:c.tempDisplay,variant:"h5",children:[i.Temperature.Imperial.Value,"\u2109"]}),Object(f.jsxs)(d.a,{children:[Object(f.jsx)(p.a,{className:c.btn,onClick:function(){return r(!0)},children:"\u2103"}),Object(f.jsx)(p.a,{className:c.btn,onClick:function(){return r(!1)},children:"\u2109"})]})]}),Object(f.jsxs)(P.a,{item:!0,xs:7,md:4,className:c.mainContainer,children:[Object(f.jsx)(j.a,{variant:"h4",children:o.LocalizedName}),Object(f.jsx)(j.a,{variant:"h5",children:Object(f.jsx)(Z.a,{format:"ddd, HH:mm ",children:i.LocalObservationDateTime})}),Object(f.jsx)(j.a,{children:i.WeatherText})]}),Object(f.jsx)(P.a,{item:!0,xs:5,md:4,className:c.favoriteContainer,children:Object(f.jsx)(Q.a,{className:h?c.favoriteIcon:c.notFavorite,onClick:function(){var e={Key:o.Key,name:o.LocalizedName,celsius:i.Temperature.Metric.Value,iconNumber:i.WeatherIcon};u(_(e))}})})]}),Object(f.jsx)(P.a,{container:!0,className:c.grid,direction:"row",children:l&&l.DailyForecasts.length?l.DailyForecasts.map((function(e,t){return Object(f.jsx)(P.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(f.jsxs)(U.a,{className:c.paper,children:[Object(f.jsx)(q.a,{className:c.flex,children:Object(f.jsx)(j.a,{variant:"h5",className:c.alignSelf,children:Object(f.jsx)(Z.a,{format:"dddd",children:e.Date})})}),Object(f.jsx)("img",{className:"thumbnail",src:"https://developer.accuweather.com/sites/default/files/".concat(e.Day.Icon<10?"0"+e.Day.Icon:e.Day.Icon,"-s.png")}),Object(f.jsxs)(j.a,{children:[e.Temperature.Minimum.Value,"-",e.Temperature.Maximum.Value,"\u2103"]})]})},t)})):Object(f.jsx)(j.a,{variant:"h6",style:{margin:"0 auto"},children:"No favorites yet"})})]})})}function te(){var e=Object(O.b)();return Object(f.jsxs)("div",{className:"weather-page",children:[Object(f.jsx)(B,{onSearch:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(a?F(t):M(t))},onGetWeather:function(t){var a;e((a=t,function(e,t){e({type:D,payload:a})})),e(R(t.Key)),e(V(t.Key))}}),Object(f.jsx)("div",{className:"weather-details",children:Object(f.jsx)(ee,{})})]})}var ae=Object(s.a)({grid:{marginTop:"20px"},paper:{textAlign:"center",height:"200px",width:"200px",borderRadius:"5px",margin:"10px auto",display:"flex",flexDirection:"column",justifyContent:"space-around"},alignCenter:{textAlign:"center"},flex:{display:"flex"},flexGrow:{flexGrow:"1"},favoriteIcon:{color:"red",alignSelf:"center","&:hover":{cursor:"pointer"}}});function ne(){var e=Object(O.c)((function(e){return e.favLocations})),t=Object(O.b)(),a=ae();return Object(f.jsx)("div",{className:"favorites-page",children:Object(f.jsx)(P.a,{container:!0,className:a.grid,direction:"row",children:e.length?e.map((function(e){return Object(f.jsx)(P.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(f.jsxs)(U.a,{className:a.paper,children:[Object(f.jsxs)(q.a,{className:a.flex,children:[Object(f.jsx)(j.a,{variant:"h5",className:a.flexGrow,children:e.name}),Object(f.jsx)(Q.a,{className:a.favoriteIcon,onClick:function(){return function(e){t(_(e))}(e)}})]}),Object(f.jsx)("img",{className:"thumbnail",src:"https://developer.accuweather.com/sites/default/files/".concat(e.iconNumber<10?"0"+e.iconNumber:e.iconNumber,"-s.png")}),Object(f.jsxs)(j.a,{children:[e.celsius,"\u2103"]})]})},e.Key)})):Object(f.jsx)(j.a,{variant:"h6",style:{margin:"0 auto"},children:"No favorites yet"})})})}var re=a(14);var ce=function(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(b,{}),Object(f.jsx)("section",{className:"main-content",children:Object(f.jsxs)(re.c,{children:[Object(f.jsx)(re.a,{exact:!0,path:"/",children:Object(f.jsx)(te,{})}),Object(f.jsx)(re.a,{path:"/favorites",children:Object(f.jsx)(ne,{})})]})})]})})},ie=(a(133),a(134),a(35)),oe=a(82),se=a(83),le={isLoading:!1,location:{},locations:[],currLocWeather:{},forcast:[],favLocations:A.get("favorites")||[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(m.a)(Object(m.a)({},e),{},{location:t.payload});case K:return Object(m.a)(Object(m.a)({},e),{},{locations:t.payload});case z:return Object(m.a)(Object(m.a)({},e),{},{currLocWeather:t.payload});case G:return Object(m.a)(Object(m.a)({},e),{},{favLocations:Object(y.a)(t.payload)});case E:return Object(m.a)(Object(m.a)({},e),{},{forecast:t.payload});default:return e}},je=Object(ie.createStore)(ue,Object(oe.composeWithDevTools)(Object(ie.applyMiddleware)(se.a)));i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O.a,{store:je,children:Object(f.jsx)(ce,{})})}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.c92098ac.chunk.js.map