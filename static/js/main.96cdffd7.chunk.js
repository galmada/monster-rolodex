(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=(n(13),n(4)),l=n(5),i=n(1),u=n(6),m=n(7),h=(n(14),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),o.a.createElement("h2",null," ",e.monster.name),o.a.createElement("p",null,e.monster.email))}),d=(n(15),function(e){return o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(h,{key:e.id,monster:e})})))}),f=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(17),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){console.log(Object(i.a)(e)),e.setState({searchField:t.target.value},(function(){console.log(e.state)}))},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monster Rolodex"),o.a.createElement(f,{placeholder:"Search Monsters",handleChange:this.handleChange}),o.a.createElement(d,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.96cdffd7.chunk.js.map