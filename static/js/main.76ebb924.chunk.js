(this.webpackJsonpwatcherlist=this.webpackJsonpwatcherlist||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c(28),s=c.n(a),n=(c(34),c(7)),r=c(2),l=(c(35),c(36),c(0)),b=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"dashboard content","data-testid":"main__dashboard",children:[Object(l.jsx)("div",{className:"dashboard-card-wrapper",children:Object(l.jsxs)(n.b,{to:"/nowplaying",children:[Object(l.jsx)("i",{className:"fa fa-ticket","aria-hidden":"true"}),Object(l.jsx)("h1",{children:"Now Playing"})]})}),Object(l.jsx)("div",{className:"dashboard-card-wrapper",children:Object(l.jsxs)(n.b,{to:"/upcoming",children:[Object(l.jsx)("i",{className:"fa fa-video-camera","aria-hidden":"true"}),Object(l.jsx)("h1",{children:"Upcoming Movies"})]})}),Object(l.jsx)("div",{className:"dashboard-card-wrapper",children:Object(l.jsxs)(n.b,{to:"/genres",children:[Object(l.jsx)("i",{className:"fa fa-film","aria-hidden":"true"}),Object(l.jsx)("h1",{children:"Genres"})]})})]})})},o=c(11),d=c.n(o),h=c(13),j=c(9),A=c(14),u=c.n(A),I=(c(62),function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"movie-details-mobile",children:Object(l.jsx)("h1",{className:"movie-title",children:e.title})}),Object(l.jsxs)("div",{className:"movie-component",children:[e.poster&&Object(l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/","w300/").concat(e.poster),alt:"movie poster",className:"movie-poster"}),Object(l.jsxs)("div",{className:"movie-details",children:[Object(l.jsx)("h1",{className:"movie-title",children:e.title}),Object(l.jsxs)("p",{className:"movie-overview",children:[Object(l.jsx)("strong",{children:"Synopsis:"})," ",e.overview]}),Object(l.jsxs)("p",{className:"movie-released",children:[Object(l.jsx)("strong",{children:"Release Date:"})," ",e.released]})]})]})]})}),g=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(!0),n=Object(j.a)(s,2),r=(n[0],n[1]),b=Object(i.useState)(!1),o=Object(j.a)(b,2),A=(o[0],o[1]),g=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat("https://api.themoviedb.org/3/movie/","now_playing?").concat("api_key=8c079aa9925b3fc45546af53c0d30371"));case 3:t=e.sent,a(t.data.results),r(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),A(!0),r(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){g()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Movies In Theatre Now"}),c.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(I,{title:e.title,overview:e.overview,poster:e.poster_path,released:e.release_date})})}))]})},x=(c(63),function(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(l.jsx)("nav",{className:"navbar-wrapper content",children:Object(l.jsxs)("ul",{className:"navbar-links",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("li",{className:"navbar-link-logo",onClick:function(){return a(!1)},children:Object(l.jsx)(n.b,{to:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"})})}),Object(l.jsx)("li",{className:"navbar-link bars",onClick:function(){a(!c)},children:Object(l.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})})]}),Object(l.jsxs)("div",{className:c?"":"hidden",children:[Object(l.jsx)("li",{className:"navbar-link",onClick:function(){return a(!1)},children:Object(l.jsx)(n.b,{to:"/nowplaying",children:"Now Playing"})}),Object(l.jsx)("li",{className:"navbar-link",onClick:function(){return a(!1)},children:Object(l.jsx)(n.b,{to:"/upcoming",children:"Coming Soon"})}),Object(l.jsx)("li",{className:"navbar-link",onClick:function(){return a(!1)},children:Object(l.jsx)(n.b,{to:"/search",children:"Movie Search"})}),Object(l.jsx)("li",{className:"navbar-link",onClick:function(){return a(!1)},children:Object(l.jsx)(n.b,{to:"/genres",children:"Genres"})})]})]})})}),O=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(!0),n=Object(j.a)(s,2),r=(n[0],n[1]),b=Object(i.useState)(!1),o=Object(j.a)(b,2),A=(o[0],o[1]),g=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat("https://api.themoviedb.org/3/movie/","upcoming?").concat("api_key=8c079aa9925b3fc45546af53c0d30371"));case 3:t=e.sent,console.log(t.data.results),a(t.data.results),r(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),A(!0),r(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){g()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Upcoming Movies"}),c.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(I,{title:e.title,overview:e.overview,poster:e.poster_path,released:e.release_date})})}))]})},m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(n.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(r.a,{exact:!0,path:"/nowplaying",component:g}),Object(l.jsx)(r.a,{exact:!0,path:"/upcoming",component:O})]})]})})})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.76ebb924.chunk.js.map