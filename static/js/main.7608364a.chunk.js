(this["webpackJsonpmovie-ex"]=this["webpackJsonpmovie-ex"]||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(2),a=n.n(i),r=n(14),c=n.n(r),o=(n(26),n(5)),l=n.n(o),m=n(15),u=n(16),d=n(17),j=n(20),v=n(19),g=n(18),h=n.n(g),b=n(3),p=n.n(b);n(47);function x(e){var t=e.title,n=e.rating,i=e.summary,a=e.poster;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:a,alt:t,title:t}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:t}),Object(s.jsxs)("h5",{className:"movie__year",children:["\ud3c9\uc810 ",n]}),Object(s.jsxs)("p",{className:"movie__summary",children:[i.slice(0,180),"..."]})]})]})}x.prototype={title:p.a.string.isRequired,rating:p.a.number.isRequired,summary:p.a.string.isRequired,poster:p.a.string.isRequired};var O=x,f=(n(48),function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return console.log(n),Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader-text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(O,{title:e.title,rating:e.rating,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),n}(a.a.Component)),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.7608364a.chunk.js.map