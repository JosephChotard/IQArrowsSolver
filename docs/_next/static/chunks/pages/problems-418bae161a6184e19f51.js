_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"1Ip3":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return O}));var r=n("KQm4"),o=n("ODXe"),c=n("nKUr"),a=n("q1tI"),i=n.n(a),l=n("ulpj"),u=n("NAr4"),s=n("whm7"),f=n("20a2"),d=n.n(f),p=n("IUck"),b=n("VlDF"),h=n("Vjw5"),v=n.n(h),m=n("YFqc"),y=n.n(m);function O(){var t=i.a.useState(null),n=Object(o.a)(t,2),a=n[0],f=n[1],h=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];f(null);var n=new Array(3).fill(l.b.NONE).map((function(){return new Array(6).fill([l.b.NONE,""])})),r=Math.floor(3*Math.random())+3;fetch("".concat(e.env.basePath?e.env.basePath:"","/constraints/constraints-").concat(r,".txt")).then((function(e){return e.text()})).then((function(e){var r=e.split(/\r\n|\r|\n/),o=r[Math.floor(Math.random()*(r.length-1+1))],c=o.substring(1,o.length-2).split("), ").map((function(e){return e.substring(1).split("): (").map((function(e){return e.split(", ")}))})),a={};c.forEach((function(e){a["".concat(e[0][0],"c").concat(e[0][1])]=e[1][0]})),f(Object(u.a)(n,a));var i="/problems/".concat(Object(p.a)(a));t?d.a.replace(i,i,{shallow:!0}):d.a.push(i,i,{shallow:!0})}))};return i.a.useEffect((function(){if(0===window.location.search.length)h(!0);else{var e=new Array(3).fill(l.b.NONE).map((function(){return new Array(6).fill([l.b.NONE,""])})),t=Object(b.a)();f(Object(u.a)(e,t))}}),[]),Object(c.jsxs)("div",{className:v.a.problems,children:[Object(c.jsx)("h1",{children:"Here is a brand new puzzle for you to solve"}),Object(c.jsxs)("p",{children:["As always, there is only one possible solution. You can find it",Object(c.jsx)(y.a,{href:"/".concat(window.location.search),children:Object(c.jsx)("a",{className:v.a.solutionLink,children:"here"})})]}),Object(c.jsx)("div",{children:null===a?Object(c.jsx)("div",{className:"".concat(v.a.loading," ").concat(v.a.board),children:Object(r.a)(new Array(18)).map((function(e,t){return Object(c.jsx)("div",{className:v.a.cell},t)}))}):Object(c.jsx)("div",{children:Object(c.jsx)(s.a,{grid:a})})}),Object(c.jsx)("div",{className:v.a.generateNewPuzzle,children:Object(c.jsx)("button",{onClick:function(){return h()},className:v.a.generateNewPuzzleButton,children:"Generate puzzle"})})]})}}.call(this,n("8oxB"))},"20a2":function(e,t,n){e.exports=n("nOHt")},"8oxB":function(e,t){var n,r,o=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===c||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:c}catch(e){n=c}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,u=[],s=!1,f=-1;function d(){s&&l&&(s=!1,l.length?u=l.concat(u):f=-1,u.length&&p())}function p(){if(!s){var e=i(d);s=!0;for(var t=u.length;t;){for(l=u,u=[];++f<t;)l&&l[f].run();f=-1,t=u.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new b(e,t)),1!==u.length||s||i(p)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},IUck:function(e,t,n){"use strict";function r(e){var t=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return"/".concat(""!==t?"?".concat(t):"")}n.d(t,"a",(function(){return r}))},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("a3WO");var o=n("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.a.createContext&&o.a.createContext(c),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return o.a.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return o.a.createElement(f,i({attr:i({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var n,r=e.attr,c=e.size,a=e.title,u=l(e,["attr","size","title"]),s=c||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&o.a.createElement("title",null,a),e.children)};return void 0!==a?o.a.createElement(a.Consumer,null,(function(e){return t(e)})):t(c)}},NAr4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ulpj");function o(e,t){return e.map((function(e,n){return e.map((function(e,o){var c="".concat(n,"c").concat(o),a=parseInt(t[c]);return c in t&&a in r.b?[a,""]:e}))}))}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,c=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Vjw5:function(e,t,n){e.exports={board:"Problems_board__3Mcrg",cell:"Problems_cell__2dtxb",innerCell:"Problems_innerCell__3VYOw",generateNewPuzzle:"Problems_generateNewPuzzle__1iYZx",generateNewPuzzleButton:"Problems_generateNewPuzzleButton__3uiYi",solutionLink:"Problems_solutionLink__3_62m",loading:"Problems_loading___sThN",placeload:"Problems_placeload__3aC73"}},VlDF:function(e,t,n){"use strict";function r(){var e=window.location.search.substring(1);return JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}n.d(t,"a",(function(){return r}))},WRH7:function(e,t,n){e.exports={board:"Board_board__2OaJV",cell:"Board_cell__2K0ME",innerCell:"Board_innerCell__2FY5I"}},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),l=n("vNVm"),u={};function s(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,v=e.shallow,m=e.scroll,y=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var O=c.Children.only(b),_=O&&"object"===typeof O&&O.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),w=r(j,2),g=w[0],N=w[1],E=c.default.useCallback((function(e){g(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,g]);(0,c.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,N,y,t,n]);var x={ref:E,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:l}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,h,v,m,y)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};return(e.passHref||"a"===O.type&&!("href"in O.props))&&(x.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(O,x)};t.default=f},jnBS:function(e,t,n){e.exports={icon:"Cell_icon__3DM7Q",orange:"Cell_orange__3fpfc",blue:"Cell_blue__xE9B-",red:"Cell_red__3RSfU",yellow:"Cell_yellow__1Ffzp",green:"Cell_green__3u_4N",purple:"Cell_purple__3EDlI",none:"Cell_none__2RTh1",noDirection:"Cell_noDirection__dr6vZ"}},peDM:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/problems",function(){return n("1Ip3")}])},ulpj:function(e,t,n){"use strict";var r,o;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),function(e){e[e.NONE=0]="NONE",e[e.UP=1]="UP",e[e.RIGHT=2]="RIGHT",e[e.DOWN=3]="DOWN",e[e.LEFT=4]="LEFT"}(r||(r={})),function(e){e.ORANGE="orange",e.RED="red",e.YELLOW="yellow",e.BLUE="blue",e.GREEN="green",e.PURPLE="purple",e.NONE=""}(o||(o={}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,c.useRef)(),u=(0,c.useState)(!1),s=r(u,2),f=s[0],d=s[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){i||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=n("q1tI"),a=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var l=new Map},whm7:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("nKUr"),o=(n("q1tI"),n("WRH7")),c=n.n(o),a=n("33Fu"),i=n("ulpj"),l=n("jnBS"),u=n.n(l);function s(e){var t=e.direction,n=e.colour,o=null;switch(t){case i.b.NONE:o=Object(r.jsx)(a.e,{});break;case i.b.UP:o=Object(r.jsx)(a.d,{});break;case i.b.DOWN:o=Object(r.jsx)(a.a,{});break;case i.b.LEFT:o=Object(r.jsx)(a.b,{});break;case i.b.RIGHT:o=Object(r.jsx)(a.c,{})}return Object(r.jsx)("div",{className:"".concat(u.a[n||"none"]," ").concat(u.a.icon," ").concat(t===i.b.NONE?u.a.noDirection:""),children:o})}function f(e){var t=e.grid;return Object(r.jsx)("div",{className:c.a.board,children:t.map((function(e,t){return e.map((function(e,t){return Object(r.jsx)("div",{className:c.a.cell,children:Object(r.jsx)("div",{className:c.a.innerCell,children:Object(r.jsx)(s,{direction:e[0],colour:e[1]})})},t)}))}))})}}},[["peDM",0,2,3,1]]]);