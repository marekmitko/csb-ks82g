(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),i=n(3),o=n(0);function u(e){var t=e.title;return Object(o.jsx)("h1",{children:t})}n(10);function l(e){var t=e.song,n=e.isCurrent,c=e.onSelect;return Object(o.jsxs)("li",{className:"SongListItem ".concat(n?"selected":""),onClick:function(){c(t)},children:[n&&"*"," ",t.title," by ",t.artist," ",n&&"*"]})}n(11);function a(e){var t=e.showControls,n=void 0!==t&&t,r=e.song,s=Object(c.useRef)(),i=r.audioUrl,l=r.coverUrl;return Object(o.jsxs)("section",{className:"SongPlayer",children:[Object(o.jsx)(u,{title:"Music Player"}),Object(o.jsx)("img",{width:"250",height:"250",src:l,alt:"Song cover"}),Object(o.jsx)("audio",{ref:s,controls:n,children:Object(o.jsx)("source",{src:i})},i),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return s.current.play()},children:"Play"}),Object(o.jsx)("button",{onClick:function(){return s.current.pause()},children:"Pause"})]})]})}n(12);function j(e){var t=e.children;return Object(o.jsx)("section",{className:"Songs",children:t})}n(13);function d(){Object(c.useEffect)((function(){fetch("https://examples.devmastery.pl/songs-api/songs").then((function(e){e.ok&&e.json().then(r)}))}),[]);var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(0),d=Object(i.a)(s,2),b=d[0],h=d[1],O=n[b];function f(e){var t=n.findIndex((function(t){return t.audioUrl===e.audioUrl}));t>=0&&h(t)}return Object(o.jsx)("div",{className:"App",children:0===n.length?"Loading...":Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a,{song:O}),Object(o.jsxs)(j,{children:[Object(o.jsx)(u,{title:"Playlist"}),Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)(l,{song:e,isCurrent:O.audioUrl===e.audioUrl,onSelect:f},e.audioUrl)}))})]})]})})}n(14);var b=document.getElementById("root");s.a.render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(d,{})}),b)}],[[15,1,2]]]);
//# sourceMappingURL=main.b9ee90ff.chunk.js.map