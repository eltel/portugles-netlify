(window.webpackJsonp=window.webpackJsonp||[]).push([["7eb2"],{AGzW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){var e=n("eAkX");return{page:e.default||e}}])},eAkX:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),o=n("O40h"),u=n("0iUn"),c=n("sLSF"),l=n("MI3g"),i=n("a7VT"),p=n("Tit0"),s=n("q1tI"),f=n.n(s),d=n("vDqi"),h=n.n(d),b=n("nOHt"),w=n("ZfN1"),v=n("G1oq"),O=function(e){function t(){return Object(u.default)(this,t),Object(l.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(p.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props.portfolio;return f.a.createElement(w.a,this.props.auth,f.a.createElement(v.a,null,f.a.createElement("h1",null,"Portfolio Detail"),f.a.createElement("h1",null,e.title),f.a.createElement("p",null,"BODY: ",e.body),f.a.createElement("p",null,"ID: ",e.id)))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(r.a.mark(function e(t){var n,a,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,a=n.id,o={},e.prev=3,e.next=6,h.a.get("https://jsonplaceholder.typicode.com/posts/".concat(a));case 6:u=e.sent,o=u.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:return e.abrupt("return",{portfolio:o});case 14:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.a.Component);t.default=Object(b.withRouter)(O)}},[["AGzW","5d41","9da1"]]]);