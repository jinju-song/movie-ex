(this["webpackJsonpmovie-ex"]=this["webpackJsonpmovie-ex"]||[]).push([[0],{38:function(e,t,n){},59:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),s=n.n(a),c=n(29),o=n.n(c),r=(n(38),n(9)),u=n(2),l=n(17),j=n.n(l),m=n(30),d=n(11),v=n(12),b=n(14),h=n(13),p=n(31),O=n.n(p),x=n(8),g=n.n(x);n(59);function f(e){var t=e.id,n=e.title,a=e.rating,s=e.summary,c=e.poster;return Object(i.jsx)("div",{className:"movie",children:Object(i.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{title:n,rating:a,summary:s,poster:c}},children:[Object(i.jsx)("img",{src:c,alt:n,title:n}),Object(i.jsxs)("div",{className:"movie__data",children:[Object(i.jsx)("h3",{className:"movie__title",children:n}),Object(i.jsxs)("h5",{className:"movie__year",children:["\ud3c9\uc810 ",a]}),Object(i.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})})}f.prototype={title:g.a.string.isRequired,rating:g.a.number.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired};var y=f,_=(n(63),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(j.a.mark((function t(){var n,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,i=n.data.data.movies,e.setState({movies:i,isLoading:!1}),console.log(i);case 6:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return console.log(n),Object(i.jsx)("section",{className:"container",children:t?Object(i.jsx)("div",{className:"loader",children:Object(i.jsx)("span",{className:"loader-text",children:"Loading..."})}):Object(i.jsx)("div",{className:"movies",children:n.map((function(e){return Object(i.jsx)(y,{id:e.id,title:e.title,rating:e.rating,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),n}(s.a.Component));var N=function(){return Object(i.jsx)("span",{children:"About Movies"})},k=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;console.log("component did mount"),void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(i.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);n(64);var w=function(){return Object(i.jsxs)("div",{className:"nav",children:[Object(i.jsx)(r.b,{to:"/",children:"Home"}),Object(i.jsx)(r.b,{to:"/about",children:"About"})]})};n(65);var L=function(){return Object(i.jsxs)(r.a,{children:[Object(i.jsx)(w,{}),Object(i.jsx)(u.a,{path:"/",exact:!0,component:_}),Object(i.jsx)(u.a,{path:"/about",component:N}),Object(i.jsx)(u.a,{path:"/movie/:id",component:k})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),M()}},[[66,1,2]]]);
//# sourceMappingURL=main.94d77d24.chunk.js.map