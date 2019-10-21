!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=7)}([function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return s}),n.d(t,"combineReducers",function(){return l}),n.d(t,"bindActionCreators",function(){return d}),n.d(t,"applyMiddleware",function(){return f}),n.d(t,"compose",function(){return h}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return i});var r=n(1),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,l=t,u=[],d=u,p=!1;function h(){d===u&&(d=u.slice())}function f(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return l}function g(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var n=d.indexOf(e);d.splice(n,1)}}}function m(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,l=c(l,e)}finally{p=!1}for(var t=u=d,n=0;n<t.length;n++){(0,t[n])()}return e}return m({type:i.INIT}),(o={dispatch:m,subscribe:g,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,m({type:i.REPLACE})}})[r.a]=function(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(f())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function l(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var a,s=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){a=e}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<s.length;i++){var l=s[i],u=n[l],d=e[l],p=u(d,t);if(void 0===p){var h=c(l,t);throw new Error(h)}o[l]=p,r=r||p!==d}return r?o:e}}function u(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"==typeof e)return u(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=u(a,t))}return r}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},function(e,t,n){"use strict";(function(e,r){var o,i=n(3);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(5),n(6)(e))},function(e,t,n){"use strict";var r=n(0).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";function r(e){return e=e||[],Array.isArray(e)?e:[e]}function o(e){return`[Vaadin.Router] ${e}`}n.r(t);const i="module",a="nomodule",s=[i,a];function c(e){if(!e.match(/.+\.[m]?js$/))throw new Error(o(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function l(e){if(!e||!g(e.path))throw new Error(o('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(f(e.action)||Array.isArray(e.children)||f(e.children)||h(t)||n.some(t=>g(e[t]))))throw new Error(o(`Expected route config "${e.path}" to include either "${n.join('", "')}" `+'or "action" function but none found.'));if(t)if(g(t))c(t);else{if(!s.some(e=>e in t))throw new Error(o('Expected route bundle to include either "'+a+'" or "'+i+'" keys, or both'));s.forEach(e=>e in t&&c(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(o(`Route config "${e.path}" has both "redirect" and "${t}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function u(e){r(e).forEach(e=>l(e))}function d(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||((n=document.createElement("script")).setAttribute("src",e),t===i?n.setAttribute("type",i):t===a&&n.setAttribute(a,""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=(t=>{n.__dynamicImportLoaded=!0,e(t)}),n.onerror=(e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)}),null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function p(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function h(e){return"object"==typeof e&&!!e}function f(e){return"function"==typeof e}function g(e){return"string"==typeof e}function m(e){const t=new Error(o(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const v=new class{};function y(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;t&&"a"===t.nodeName.toLowerCase()&&(t.target&&"_self"!==t.target.toLowerCase()||t.hasAttribute("download")||t.pathname===window.location.pathname&&""!==t.hash||(t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))===window.location.origin&&p("go",{pathname:t.pathname})&&e.preventDefault())}const b={activate(){window.document.addEventListener("click",y)},inactivate(){window.document.removeEventListener("click",y)}};function S(e){"vaadin-router-ignore"!==e.state&&p("go",{pathname:window.location.pathname})}/Trident/.test(navigator.userAgent)&&!f(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const _={activate(){window.addEventListener("popstate",S)},inactivate(){window.removeEventListener("popstate",S)}};var w=U,x=T,E=function(e,t){return A(T(e,t))},O=A,C=L,N="/",k="./",I=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function T(e,t){for(var n,r=[],o=0,i=0,a="",s=t&&t.delimiter||N,c=t&&t.delimiters||k,l=!1;null!==(n=I.exec(e));){var u=n[0],d=n[1],p=n.index;if(a+=e.slice(i,p),i=p+u.length,d)a+=d[1],l=!0;else{var h="",f=e[i],g=n[2],m=n[3],v=n[4],y=n[5];if(!l&&a.length){var b=a.length-1;c.indexOf(a[b])>-1&&(h=a[b],a=a.slice(0,b))}a&&(r.push(a),a="",l=!1);var S=""!==h&&void 0!==f&&f!==h,_="+"===y||"*"===y,w="?"===y||"*"===y,x=h||s,E=m||v;r.push({name:g||o++,prefix:h,delimiter:x,optional:w,repeat:_,partial:S,pattern:E?j(E):"[^"+P(x)+"]+?"})}}return(a||i<e.length)&&r.push(a+e.substr(i)),r}function A(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var c,l=n?n[s.name]:void 0;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(c=i(l[u],s),!t[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===u?s.prefix:s.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(o+=s.prefix)}else{if(c=i(String(l),s),!t[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function P(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function j(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function R(e){return e&&e.sensitive?"":"i"}function L(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.end,i=P(n.delimiter||N),a=n.delimiters||k,s=[].concat(n.endsWith||[]).map(P).concat("$").join("|"),c="",l=0===e.length,u=0;u<e.length;u++){var d=e[u];if("string"==typeof d)c+=P(d),l=u===e.length-1&&a.indexOf(d[d.length-1])>-1;else{var p=P(d.prefix),h=d.repeat?"(?:"+d.pattern+")(?:"+p+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?c+=p+"("+h+")?":c+="(?:"+p+"("+h+"))?":c+=p+"("+h+")"}}return o?(r||(c+="(?:"+i+")?"),c+="$"===s?"$":"(?="+s+")"):(r||(c+="(?:"+i+"(?="+s+"))?"),l||(c+="(?="+i+"|"+s+")")),new RegExp("^"+c,R(n))}function U(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(U(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",R(n))}(e,t,n):function(e,t,n){return L(T(e,n),t,n)}(e,t,n)}w.parse=x,w.compile=E,w.tokensToFunction=O,w.tokensToRegExp=C;const{hasOwnProperty:D}=Object.prototype,M=new Map;function z(e){try{return decodeURIComponent(e)}catch(t){return e}}function V(e,t,n,r,o){let i,a,s=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let a=M.get(i);if(!a){const t=[];a={keys:t,pattern:w(e,t,{end:n,strict:""===e})},M.set(i,a)}const s=a.pattern.exec(t);if(!s)return null;const c=Object.assign({},o);for(let e=1;e<s.length;e++){const t=a.keys[e-1],n=t.name,r=s[e];void 0===r&&D.call(c,n)||(t.repeat?c[n]=r?r.split(t.delimiter).map(z):[]:c[n]=r?z(r):r)}return{path:s[0],keys:(r||[]).concat(a.keys),params:c}}(c,t,!u,r,o)))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&u)for(;s<u.length;){if(!a){const r=u[s];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),a=V(r,t.substr(o),n,i.keys,i.params)}const r=a.next(l);if(!r.done)return{done:!1,value:r.value};a=null,s++}return{done:!0}}}}function $(e){if(f(e.route.action))return e.route.action(e)}M.set("|false",{keys:[],pattern:/(?:)/});class G{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||$,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){u(e);const t=[...r(e)];this.root.__children=t}addRoutes(e){return u(e),this.root.__children.push(...r(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,g(e)?{pathname:e}:e),n=V(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,a=t;function s(e,c=o.value.route,l){const u=null===l&&o.value.route;return o=i||n.next(u),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if((n=n.parent)===e)return!0;return!1}(c,o.value.route)?o.done?Promise.reject(m(t)):(function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};!function(e,t){return!t.parent||!e||!e.length||e[e.length-1].route!==t.parent}(e.chain,n)?e.chain.push(t):e.chain=[t]}}(t,o.value),a=Object.assign({},t,o.value),Promise.resolve(r(a)).then(t=>null!=t&&t!==v?(a.result=t.result||t,a):s(e,c,t))):(i=o,Promise.resolve(v))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}G.pathToRegexp=w;const{pathToRegexp:B}=G,F=new Map;function W(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function H(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}function K(e,t={}){if(!(e instanceof G))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=W(n,r);if(!(i||(n.clear(),function e(t,n,r){const o=n.name||n.component;if(o&&(t.has(o)?t.get(o).push(n):t.set(o,[n])),Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];i.parent=n,e(t,i,i.__children||i.children)}}(n,e.root,e.root.__children),i=W(n,r))))throw new Error(`Route "${r}" not found`);let a=F.get(i.fullPath);if(!a){let e=H(i),t=i.parent;for(;t;){const n=H(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=B.parse(e),r=B.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)g(n[e])||(o[n[e].name]=!0);a={toPath:r,keys:o},F.set(e,a),i.fullPath=e}let s=a.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(s+="?"===r.charAt(0)?r:`?${r}`)}return s}}let q=[];function J(e){q.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),q=e}const X=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},Y=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function Z(e,t){return e.classList.add(t),new Promise(n=>{if(X(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),Y(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const Q=256;function ee(e){return null!=e}function te({pathname:e="",chain:t=[],params:n={},redirectFrom:r,resolver:o},i){const a=t.map(e=>e.route);return{baseUrl:o&&o.baseUrl||"",pathname:e,routes:a,route:i||a.length&&a[a.length-1]||null,params:n,redirectFrom:r,getUrl:(e={})=>ae(ce.pathToRegexp.compile(se(a))(Object.assign({},n,e)),o)}}function ne(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function re(e,t,n){if(f(e))return e.apply(n,t)}function oe(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?re(n[e],t,n):void 0}function ie(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function ae(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function se(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class ce extends G{constructor(e,t){const n=document.head.querySelector("base");super([],Object.assign({baseUrl:n&&n.getAttribute("href")},t)),this.resolveRoute=(e=>this.__resolveRoute(e));const r=ce.NavigationTrigger;ce.setTriggers.apply(ce,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=te({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe()}__resolveRoute(e){const t=e.route;let n=Promise.resolve();f(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{ee(e)||f(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!h(e))throw new Error(o(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=r(e);for(let e=0;e<n.length;e++)l(n[e]),t.__children.push(n[e])}(e,t)}));const i={redirect:t=>ne(e,t),component:t=>(function(e,t){const n=document.createElement(t);n.location=te(e);const r=e.chain.map(e=>e.route).indexOf(e.route);return e.chain[r].element=n,n})(e,t)};return n.then(()=>re(t.action,[e,i],t)).then(e=>ee(e)&&(e instanceof HTMLElement||e.redirect||e===v)?e:g(t.redirect)?i.redirect(t.redirect):t.bundle?function(e){return g(e)?d(e):Promise.race(s.filter(t=>t in e).map(t=>d(e[t],t)))}(t.bundle).then(()=>{},()=>{throw new Error(o(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0).then(e=>ee(e)?e:g(t.component)?i.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e){this.__urlForName=void 0,super.setRoutes(e),this.__onNavigationEvent()}render(e,t){const n=++this.__lastStartedRenderId,r=e.pathname||e;return this.ready=this.resolve(e).then(e=>this.__fullyResolveChain(e)).then(e=>{if(n===this.__lastStartedRenderId){const r=this.__previousContext;if(e===r)return this.location;this.location=te(e),p("location-changed",{router:this,location:this.location}),t&&this.__updateBrowserHistory(e.pathname,e.redirectFrom),this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then(()=>{if(n===this.__lastStartedRenderId)return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ie(this.__outlet&&this.__outlet.children),this.location=te({pathname:r,resolver:this}),p("error",{router:this,error:e,pathname:r}),e}),this.ready}__fullyResolveChain(e,t=e){return this.__amendWithResolutionResult(t).then(n=>{const r=n!==t?n:e;return n.next().then(e=>{if(null===e||e===v){if(ae(se(n.chain),n.resolver)!==n.pathname)throw m(r)}return e&&e!==v?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(r)})})}__amendWithResolutionResult(e){const t=e.result;return t instanceof HTMLElement?Promise.resolve(e):t.redirect?this.__redirect(t.redirect,e.__redirectCount).then(e=>this.__amendWithResolutionResult(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(o(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=(this.__previousContext||{}).chain||[],n=e.chain;let r=Promise.resolve();const o=()=>({cancel:!0}),i=t=>ne(e,t);if(e.__divergedChainIndex=0,t.length){for(let r=0;r<Math.min(t.length,n.length)&&(t[r].route===n[r].route&&t[r].path===n[r].path&&(t[r].element&&t[r].element.localName)===(n[r].element&&n[r].element.localName));r=++e.__divergedChainIndex);for(let n=t.length-1;n>=e.__divergedChainIndex;n--){const i=te(e);r=r.then(oe("onBeforeLeave",[i,{prevent:o},this],t[n].element)).then(e=>{if(!(e||{}).redirect)return e})}}for(let t=e.__divergedChainIndex;t<n.length;t++){const a=te(e,n[t].route);r=r.then(oe("onBeforeEnter",[a,{prevent:o,redirect:i},this],n[t].element))}return r.then(t=>{if(t){if(t.cancel)return this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount)}return e})}__redirect(e,t){if(t>Q)throw new Error(o(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(o(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory(e,t){if(window.location.pathname!==e){const n=t?"replaceState":"pushState";window.history[n](null,document.title,e),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}this.__disappearingContent=Array.from(n.children),this.__appearingContent=[];let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(r.appendChild(o),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&ie(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ie(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex;n--){const r=t.chain[n].element;if(r)try{const n=te(e);re(r.onAfterLeave,[n,{},t.resolver],r)}finally{ie(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const n=e.chain[t].element||{},r=te(e,e.chain[t].route);re(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&n&&i){const e=h(i)&&i.leave||"leaving",o=h(i)&&i.enter||"entering";r.push(Z(t,e)),r.push(Z(n,o))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const t=e?e.detail.pathname:window.location.pathname;g(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render(t,!0))}static setTriggers(...e){J(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=K(this)),ae(this.__urlForName(e,t),this)}urlForPath(e,t){return ae(ce.pathToRegexp.compile(e)(t),this)}static go(e){return p("go",{pathname:e})}}const le=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function ue(e,t){if("function"!=typeof e)return;const n=le.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const de=function(e,t){if(window.Vaadin.developmentMode)return ue(e,t)};function pe(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&!ue(function(){return!0})&&!function(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const e=Object.keys(window.Vaadin.Flow.clients).map(e=>window.Vaadin.Flow.clients[e]).filter(e=>e.productionMode);if(e.length>0)return!0}return!1}()}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.2.0"}),de(pe),ce.NavigationTrigger={POPSTATE:_,CLICK:b};n(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const he=new WeakMap,fe=e=>"function"==typeof e&&he.has(e),ge=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,me=(e,t,n=null,r=null)=>{let o=t;for(;o!==n;){const t=o.nextSibling;e.insertBefore(o,r),o=t}},ve=(e,t,n=null)=>{let r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},ye={},be={},Se=`{{lit-${String(Math.random()).slice(2)}}}`,_e=`\x3c!--${Se}--\x3e`,we=new RegExp(`${Se}|${_e}`),xe="$lit$";class Ee{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const a=t.content,s=document.createTreeWalker(a,133,null,!1);let c=0;for(;s.nextNode();){n++;const t=s.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Se)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=Ne.exec(o)[2],a=i.toLowerCase()+xe,s=t.getAttribute(a).split(we);this.parts.push({type:"attribute",index:n,name:i,strings:s}),t.removeAttribute(a),r+=s.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(Se)>=0){const i=t.parentNode,a=e.split(we),s=a.length-1;for(let e=0;e<s;e++)i.insertBefore(""===a[e]?Ce():document.createTextNode(a[e]),t),this.parts.push({type:"node",index:++n});""===a[s]?(i.insertBefore(Ce(),t),o.push(t)):t.data=a[s],r+=s}}else if(8===t.nodeType)if(t.data===Se){const e=t.parentNode;null!==t.previousSibling&&n!==c||(n++,e.insertBefore(Ce(),t)),c=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(o.push(t),n--),r++}else{let e=-1;for(;-1!==(e=t.data.indexOf(Se,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const Oe=e=>-1!==e.index,Ce=()=>document.createComment(""),Ne=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ke{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=ge?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let a=i.nextNode();for(;n<t.length&&null!==a;){const e=t[n];if(Oe(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===a.nodeName&&o(a.content),a=i.nextNode();else this._parts.push(void 0),n++}};return o(e),ge&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ie{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],r=Ne.exec(e);t+=r?e.substr(0,r.index)+r[1]+r[2]+xe+r[3]+Se:e+_e}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Te extends Ie{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),me(t,n.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ae=e=>null===e||!("object"==typeof e||"function"==typeof e);class Pe{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new je(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class je{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===ye||Ae(e)&&e===this.value||(this.value=e,fe(e)||(this.committer.dirty=!0))}commit(){for(;fe(this.value);){const e=this.value;this.value=ye,e(this)}this.value!==ye&&this.committer.commit()}}class Re{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ce()),this.endNode=e.appendChild(Ce())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Ce()),e._insert(this.endNode=Ce())}insertAfterPart(e){e._insert(this.startNode=Ce()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;fe(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ye,e(this)}const e=this._pendingValue;e!==ye&&(Ae(e)?e!==this.value&&this._commitText(e):e instanceof Ie?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===be?(this.value=be,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof ke&&this.value.template===t)this.value.update(e.values);else{const n=new ke(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Re(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){ve(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Le{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;fe(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ye,e(this)}if(this._pendingValue===ye)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=ye}}class Ue extends Pe{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new De(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class De extends je{}let Me=!1;try{const e={get capture(){return Me=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ze{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;fe(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ye,e(this)}if(this._pendingValue===ye)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=Ve(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=ye}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Ve=e=>e&&(Me?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $e=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Ue(e,t.slice(1),n).parts:"@"===o?[new ze(e,t.slice(1),r.eventContext)]:"?"===o?[new Le(e,t.slice(1),n)]:new Pe(e,t,n).parts}handleTextExpression(e){return new Re(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Ge(e){let t=Be.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Be.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Se);return void 0===(n=t.keyString.get(r))&&(n=new Ee(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Be=new Map,Fe=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const We=(e,...t)=>new Ie(e,t,"html",$e),He=(e,...t)=>new Te(e,t,"svg",$e),Ke=133;function qe(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,Ke,null,!1);let i=Xe(r),a=r[i],s=-1,c=0;const l=[];let u=null;for(;o.nextNode();){s++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==a&&a.index===s;)a.index=null!==u?-1:a.index-c,a=r[i=Xe(r,i)]}l.forEach(e=>e.parentNode.removeChild(e))}const Je=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,Ke,null,!1);for(;n.nextNode();)t++;return t},Xe=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Oe(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ye=(e,t)=>`${e}--${t}`;let Ze=!0;void 0===window.ShadyCSS?Ze=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),Ze=!1);const Qe=e=>t=>{const n=Ye(t.type,e);let r=Be.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Be.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Se);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();Ze&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Ee(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o},et=["html","svg"],tt=new Set,nt=(e,t,n)=>{tt.add(n);const r=e.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{et.forEach(t=>{const n=Be.get(Ye(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),qe(e,n)})})})(n),function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,Ke,null,!1);let a=Xe(o),s=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(s=Je(t),n.parentNode.insertBefore(t,n));-1!==a&&o[a].index===c;){if(s>0){for(;-1!==a;)o[a].index+=s,a=Xe(o,a);return}a=Xe(o,a)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),qe(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((e,t)=>e);const rt={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ot=(e,t)=>t!==e&&(t==t||e==e),it={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:ot},at=Promise.resolve(!0),st=1,ct=4,lt=8,ut=16,dt=32;class pt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=at,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=it){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=ot){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||rt,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||rt.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|dt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=it){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|lt,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=this._updateState&~lt}}_attributeToProperty(e,t){if(this._updateState&lt)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||it;this._updateState=this._updateState|ut,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ut}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r._classProperties.get(e)||it;r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||this._updateState&ut||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|ct;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&dt}get _hasRequestedUpdate(){return this._updateState&ct}get hasUpdated(){return this._updateState&st}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&st||(this._updateState=this._updateState|st,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ct}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}pt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ht=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),ft=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),gt=(e,t,n)=>{t.constructor.createProperty(n,e)};function mt(e){return(t,n)=>void 0!==n?gt(e,t,n):ft(e,t)}function vt(e){return(t,n)=>{const r={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?yt(r,t,n):bt(r,t)}}const yt=(e,t,n)=>{Object.defineProperty(t,n,e)},bt=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),St="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol();class wt{constructor(e,t){if(t!==_t)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(St?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const xt=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof wt)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new wt(n,_t)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const Et=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,o=t.length;r<o;r++){const o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e);class Ot extends pt{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){Et(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?St?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof Ie&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}Ot.finalized=!0,Ot.render=((e,t,n)=>{const r=n.scopeName,o=Fe.has(t),i=t instanceof ShadowRoot&&Ze&&e instanceof Ie,a=i&&!tt.has(r),s=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Fe.get(t);void 0===r&&(ve(t,t.firstChild),Fe.set(t,r=new Re(Object.assign({templateFactory:Ge},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,s,Object.assign({templateFactory:Qe(r)},n)),a){const e=Fe.get(s);Fe.delete(s),e.value instanceof ke&&nt(s,e.value.template,r),ve(t,t.firstChild),t.appendChild(s),Fe.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ct=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Nt,kt=n(0),It=n(2);function Tt(){let e=null;return t=>n=>r=>{switch(r.type){case Nt.SOCKETS_CONNECT:null!==e&&(console.log("SOCKETS_DISCONNECTING"),t.dispatch(Mo()),e.close()),console.log("SOCKETS_CONNECTING"),e=new WebSocket("ws://localhost:7072/v1/ws/private"),t.dispatch(Do()),e.onmessage=((e,t)=>e=>{const n=e.data;t.dispatch($o(n))})(0,t),e.onclose=(e=>t=>{console.log("WS is onClose"),console.log("evt "+t.data),e.dispatch(zo())})(t),e.onopen=(e=>t=>{console.log("WS is onOpen"),console.log("token "+e),console.log("evt "+t.data)})(r.token);break;case Nt.SOCKETS_DISCONNECT:null!==e&&(console.log("SOCKETS_DISCONNECTING"),t.dispatch(Mo()),e.close()),e=null;break;case Nt.SOCKETS_MESSAGE_SEND:console.log("There"),e.send(r.message_send),t.dispatch(Vo(JSON.stringify(r.message_send)));break;default:return n(r)}}}!function(e){e.SOCKETS_CONNECTING="SOCKETS_CONNECTING",e.SOCKETS_CONNECT="SOCKETS_CONNECT",e.SOCKETS_DISCONNECTING="SOCKETS_DISCONNECTING",e.SOCKETS_DISCONNECT="SOCKETS_DISCONNECT",e.SOCKETS_MESSAGE_SENDING="SOCKETS_MESSAGE_SENDING",e.SOCKETS_MESSAGE_SEND="SOCKETS_MESSAGE_SEND",e.SOCKETS_MESSAGE_RECEIVING="SOCKETS_MESSAGE_RECEIVING",e.SOCKETS_MESSAGE_RECEIVE="SOCKETS_MESSAGE_RECEIVE"}(Nt||(Nt={}));var At=function(e){return"@@redux-saga/"+e},Pt=At("CANCEL_PROMISE"),jt=At("CHANNEL_END"),Rt=At("IO"),Lt=At("MATCH"),Ut=At("MULTICAST"),Dt=At("SAGA_ACTION"),Mt=At("SELF_CANCELLATION"),zt=At("TASK"),Vt=At("TASK_CANCEL"),$t=At("TERMINATE"),Gt=At("LOCATION");function Bt(){return(Bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ft=function(e){return null==e},Wt=function(e){return null!=e},Ht=function(e){return"function"==typeof e},Kt=function(e){return"string"==typeof e},qt=Array.isArray,Jt=function(e){return e&&Ht(e.then)},Xt=function(e){return e&&Ht(e.next)&&Ht(e.throw)},Yt=function e(t){return t&&(Kt(t)||en(t)||Ht(t)||qt(t)&&t.every(e))},Zt=function(e){return e&&Ht(e.take)&&Ht(e.close)},Qt=function(e){return Ht(e)&&e.hasOwnProperty("toString")},en=function(e){return Boolean(e)&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype},tn=function(e){return Zt(e)&&e[Ut]};var nn=function(e){return function(){return e}}(!0),rn=function(){},on=function(e){return e};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var an=function(e,t){Bt(e,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(function(n){e[n]=t[n]})},sn=function(e,t){var n;return(n=[]).concat.apply(n,t.map(e))};function cn(e,t){var n=e.indexOf(t);n>=0&&e.splice(n,1)}function ln(e){var t=!1;return function(){t||(t=!0,e())}}var un=function(e){throw e},dn=function(e){return{value:e,done:!0}};function pn(e,t,n){void 0===t&&(t=un),void 0===n&&(n="iterator");var r={meta:{name:n},next:e,throw:t,return:dn,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function hn(e,t){var n=t.sagaStack;console.error(e),console.error(n)}var fn=function(e){return Array.apply(null,new Array(e))},gn=function(e){return function(t){return e(Object.defineProperty(t,Dt,{value:!0}))}},mn=function(e){return e===$t},vn=function(e){return e===Vt},yn=function(e){return mn(e)||vn(e)};function bn(e,t){var n=Object.keys(e),r=n.length;var o,i=0,a=qt(e)?fn(r):{},s={};return n.forEach(function(e){var n=function(n,s){o||(s||yn(n)?(t.cancel(),t(n,s)):(a[e]=n,++i===r&&(o=!0,t(a))))};n.cancel=rn,s[e]=n}),t.cancel=function(){o||(o=!0,n.forEach(function(e){return s[e].cancel()}))},s}function Sn(e){return{name:e.name||"anonymous",location:_n(e)}}function _n(e){return e[Gt]}var wn="Channel's Buffer overflow!",xn=1,En=3,On=4,Cn={isEmpty:nn,put:rn,take:rn};function Nn(e,t){void 0===e&&(e=10);var n=new Array(e),r=0,o=0,i=0,a=function(t){n[o]=t,o=(o+1)%e,r++},s=function(){if(0!=r){var t=n[i];return n[i]=null,r--,i=(i+1)%e,t}},c=function(){for(var e=[];r;)e.push(s());return e};return{isEmpty:function(){return 0==r},put:function(s){var l;if(r<e)a(s);else switch(t){case xn:throw new Error(wn);case En:n[o]=s,i=o=(o+1)%e;break;case On:l=2*e,n=c(),r=n.length,o=n.length,i=0,n.length=l,e=l,a(s)}},take:s,flush:c}}var kn=function(){return Cn},In=function(e){return Nn(e,On)},Tn="TAKE",An="PUT",Pn="ALL",jn="RACE",Rn="CALL",Ln="CPS",Un="FORK",Dn="JOIN",Mn="CANCEL",zn="SELECT",Vn="ACTION_CHANNEL",$n="CANCELLED",Gn="FLUSH",Bn="GET_CONTEXT",Fn="SET_CONTEXT",Wn=function(e,t){var n;return(n={})[Rt]=!0,n.combinator=!1,n.type=e,n.payload=t,n};function Hn(e,t){return void 0===e&&(e="*"),Yt(e)?Wn(Tn,{pattern:e}):tn(e)&&Wt(t)&&Yt(t)?Wn(Tn,{channel:e,pattern:t}):Zt(e)?Wn(Tn,{channel:e}):void 0}function Kn(e,t){return Ft(t)&&(t=e,e=void 0),Wn(An,{channel:e,action:t})}function qn(e,t){var n,r=null;return Ht(e)?n=e:(qt(e)?(r=e[0],n=e[1]):(r=e.context,n=e.fn),r&&Kt(n)&&Ht(r[n])&&(n=r[n])),{context:r,fn:n,args:t}}function Jn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Wn(Rn,qn(e,n))}function Xn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Wn(Un,qn(e,n))}function Yn(){var e={};return e.promise=new Promise(function(t,n){e.resolve=t,e.reject=n}),e}var Zn=Yn,Qn=[],er=0;function tr(e){try{or(),e()}finally{ir()}}function nr(e){Qn.push(e),er||(or(),ar())}function rr(e){try{return or(),e()}finally{ar()}}function or(){er++}function ir(){er--}function ar(){var e;for(ir();!er&&void 0!==(e=Qn.shift());)tr(e)}var sr=function(e){return function(t){return e.some(function(e){return pr(e)(t)})}},cr=function(e){return function(t){return e(t)}},lr=function(e){return function(t){return t.type===String(e)}},ur=function(e){return function(t){return t.type===e}},dr=function(){return nn};function pr(e){var t="*"===e?dr:Kt(e)?lr:qt(e)?sr:Qt(e)?lr:Ht(e)?cr:en(e)?ur:null;if(null===t)throw new Error("invalid pattern: "+e);return t(e)}var hr={type:jt},fr=function(e){return e&&e.type===jt};function gr(e){void 0===e&&(e=In());var t=!1,n=[];return{take:function(r){t&&e.isEmpty()?r(hr):e.isEmpty()?(n.push(r),r.cancel=function(){cn(n,r)}):r(e.take())},put:function(r){if(!t){if(0===n.length)return e.put(r);n.shift()(r)}},flush:function(n){t&&e.isEmpty()?n(hr):n(e.flush())},close:function(){if(!t){t=!0;var e=n;n=[];for(var r=0,o=e.length;r<o;r++)(0,e[r])(hr)}}}}function mr(){var e,t,n,r,o,i,a=(t=!1,r=n=[],o=function(){r===n&&(r=n.slice())},i=function(){t=!0;var e=n=r;r=[],e.forEach(function(e){e(hr)})},(e={})[Ut]=!0,e.put=function(e){if(!t)if(fr(e))i();else for(var o=n=r,a=0,s=o.length;a<s;a++){var c=o[a];c[Lt](e)&&(c.cancel(),c(e))}},e.take=function(e,n){void 0===n&&(n=dr),t?e(hr):(e[Lt]=n,o(),r.push(e),e.cancel=ln(function(){o(),cn(r,e)}))},e.close=i,e),s=a.put;return a.put=function(e){e[Dt]?s(e):nr(function(){s(e)})},a}var vr=0,yr=1,br=2,Sr=3;function _r(e,t){var n=e[Pt];Ht(n)&&(t.cancel=n),e.then(t,function(e){t(e,!0)})}var wr,xr=0,Er=function(){return++xr};function Or(e){e.isRunning()&&e.cancel()}var Cr=((wr={})[Tn]=function(e,t,n){var r=t.channel,o=void 0===r?e.channel:r,i=t.pattern,a=t.maybe,s=function(e){e instanceof Error?n(e,!0):!fr(e)||a?n(e):n($t)};try{o.take(s,Wt(i)?pr(i):null)}catch(e){return void n(e,!0)}n.cancel=s.cancel},wr[An]=function(e,t,n){var r=t.channel,o=t.action,i=t.resolve;nr(function(){var t;try{t=(r?r.put:e.dispatch)(o)}catch(e){return void n(e,!0)}i&&Jt(t)?_r(t,n):n(t)})},wr[Pn]=function(e,t,n,r){var o=r.digestEffect,i=xr,a=Object.keys(t);if(0!==a.length){var s=bn(t,n);a.forEach(function(e){o(t[e],i,s[e],e)})}else n(qt(t)?[]:{})},wr[jn]=function(e,t,n,r){var o=r.digestEffect,i=xr,a=Object.keys(t),s=qt(t)?fn(a.length):{},c={},l=!1;a.forEach(function(e){var t=function(t,r){l||(r||yn(t)?(n.cancel(),n(t,r)):(n.cancel(),l=!0,s[e]=t,n(s)))};t.cancel=rn,c[e]=t}),n.cancel=function(){l||(l=!0,a.forEach(function(e){return c[e].cancel()}))},a.forEach(function(e){l||o(t[e],i,c[e],e)})},wr[Rn]=function(e,t,n,r){var o=t.context,i=t.fn,a=t.args,s=r.task;try{var c=i.apply(o,a);if(Jt(c))return void _r(c,n);if(Xt(c))return void Ur(e,c,s.context,xr,Sn(i),!1,n);n(c)}catch(e){n(e,!0)}},wr[Ln]=function(e,t,n){var r=t.context,o=t.fn,i=t.args;try{var a=function(e,t){Ft(e)?n(t):n(e,!0)};o.apply(r,i.concat(a)),a.cancel&&(n.cancel=a.cancel)}catch(e){n(e,!0)}},wr[Un]=function(e,t,n,r){var o=t.context,i=t.fn,a=t.args,s=t.detached,c=r.task,l=function(e){var t=e.context,n=e.fn,r=e.args;try{var o=n.apply(t,r);if(Xt(o))return o;var i=!1;return pn(function(e){return i?{value:e,done:!0}:(i=!0,{value:o,done:!Jt(o)})})}catch(e){return pn(function(){throw e})}}({context:o,fn:i,args:a}),u=function(e,t){return e.isSagaIterator?{name:e.meta.name}:Sn(t)}(l,i);rr(function(){var t=Ur(e,l,c.context,xr,u,s,rn);s?n(t):t.isRunning()?(c.queue.addTask(t),n(t)):t.isAborted()?c.queue.abort(t.error()):n(t)})},wr[Dn]=function(e,t,n,r){var o=r.task,i=function(e,t){if(e.isRunning()){var n={task:o,cb:t};t.cancel=function(){e.isRunning()&&cn(e.joiners,n)},e.joiners.push(n)}else e.isAborted()?t(e.error(),!0):t(e.result())};if(qt(t)){if(0===t.length)return void n([]);var a=bn(t,n);t.forEach(function(e,t){i(e,a[t])})}else i(t,n)},wr[Mn]=function(e,t,n,r){var o=r.task;t===Mt?Or(o):qt(t)?t.forEach(Or):Or(t),n()},wr[zn]=function(e,t,n){var r=t.selector,o=t.args;try{n(r.apply(void 0,[e.getState()].concat(o)))}catch(e){n(e,!0)}},wr[Vn]=function(e,t,n){var r=t.pattern,o=gr(t.buffer),i=pr(r),a=function t(n){fr(n)||e.channel.take(t,i),o.put(n)},s=o.close;o.close=function(){a.cancel(),s()},e.channel.take(a,i),n(o)},wr[$n]=function(e,t,n,r){n(r.task.isCancelled())},wr[Gn]=function(e,t,n){t.flush(n)},wr[Bn]=function(e,t,n,r){n(r.task.context[t])},wr[Fn]=function(e,t,n,r){var o=r.task;an(o.context,t),n()},wr);function Nr(e,t){return e+"?"+t}function kr(e){var t=e.name,n=e.location;return n?t+"  "+Nr(n.fileName,n.lineNumber):t}var Ir=null,Tr=[],Ar=function(e){e.crashedEffect=Ir,Tr.push(e)},Pr=function(){Ir=null,Tr.length=0},jr=function(e){Ir=e},Rr=function(){var e,t,n,r,o=Tr[0],i=Tr.slice(1),a=o.crashedEffect?(e=o.crashedEffect,(t=_n(e))?t.code+"  "+Nr(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+kr(o.meta)+(a?" \n when executing effect "+a:"")].concat(i.map(function(e){return"    created by "+kr(e.meta)}),[(n=Tr,r=sn(function(e){return e.cancelledTasks},n),r.length?["Tasks cancelled due to error:"].concat(r).join("\n"):"")]).join("\n")};function Lr(e,t,n,r,o,i,a){var s,c,l,u=vr,d=null,p=[],h=Object.create(n),f=function(e,t,n){var r,o=[],i=!1;function a(e){t(),c(),n(e,!0)}function s(t){o.push(t),t.cont=function(s,c){i||(cn(o,t),t.cont=rn,c?a(s):(t===e&&(r=s),o.length||(i=!0,n(r))))}}function c(){i||(i=!0,o.forEach(function(e){e.cont=rn,e.cancel()}),o=[])}return s(e),{addTask:s,cancelAll:c,abort:a,getTasks:function(){return o}}}(t,function(){p.push.apply(p,f.getTasks().map(function(e){return e.meta.name}))},g);function g(t,n){if(n){if(u=br,Ar({meta:o,cancelledTasks:p}),m.isRoot){var r=Rr();Pr(),e.onError(t,{sagaStack:r})}l=t,d&&d.reject(t)}else t===Vt?u=yr:u!==yr&&(u=Sr),c=t,d&&d.resolve(t);m.cont(t,n),m.joiners.forEach(function(e){e.cb(t,n)}),m.joiners=null}var m=((s={})[zt]=!0,s.id=r,s.meta=o,s.isRoot=i,s.context=h,s.joiners=[],s.queue=f,s.cancel=function(){u===vr&&(u=yr,f.cancelAll(),g(Vt,!1))},s.cont=a,s.end=g,s.setContext=function(e){an(h,e)},s.toPromise=function(){return d?d.promise:(d=Zn(),u===br?d.reject(l):u!==vr&&d.resolve(c),d.promise)},s.isRunning=function(){return u===vr},s.isCancelled=function(){return u===yr||u===vr&&t.status===yr},s.isAborted=function(){return u===br},s.result=function(){return c},s.error=function(){return l},s);return m}function Ur(e,t,n,r,o,i,a){var s=e.finalizeRunEffect(function(t,n,r){if(Jt(t))_r(t,r);else if(Xt(t))Ur(e,t,l.context,n,o,!1,r);else if(t&&t[Rt]){var i=Cr[t.type];i(e,t.payload,r,u)}else r(t)});d.cancel=rn;var c={meta:o,cancel:function(){c.status===vr&&(c.status=yr,d(Vt))},status:vr},l=Lr(e,c,n,r,o,i,a),u={task:l,digestEffect:p};return a.cancel=l.cancel,d(),l;function d(e,n){try{var o;n?(o=t.throw(e),Pr()):vn(e)?(c.status=yr,d.cancel(),o=Ht(t.return)?t.return(Vt):{done:!0,value:Vt}):o=mn(e)?Ht(t.return)?t.return():{done:!0}:t.next(e),o.done?(c.status!==yr&&(c.status=Sr),c.cont(o.value)):p(o.value,r,d)}catch(e){if(c.status===yr)throw e;c.status=br,c.cont(e,!0)}}function p(t,n,r,o){void 0===o&&(o="");var i,a=Er();function c(n,o){i||(i=!0,r.cancel=rn,e.sagaMonitor&&(o?e.sagaMonitor.effectRejected(a,n):e.sagaMonitor.effectResolved(a,n)),o&&jr(t),r(n,o))}e.sagaMonitor&&e.sagaMonitor.effectTriggered({effectId:a,parentEffectId:n,label:o,effect:t}),c.cancel=rn,r.cancel=function(){i||(i=!0,c.cancel(),c.cancel=rn,e.sagaMonitor&&e.sagaMonitor.effectCancelled(a))},s(t,a,c)}}var Dr=function(e){void 0===e&&(e={});var t,n=e,r=n.context,o=void 0===r?{}:r,i=n.channel,a=void 0===i?mr():i,s=n.sagaMonitor,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["context","channel","sagaMonitor"]);function l(e){var n=e.getState,r=e.dispatch;return t=function(e,t){for(var n=e.channel,r=void 0===n?mr():n,o=e.dispatch,i=e.getState,a=e.context,s=void 0===a?{}:a,c=e.sagaMonitor,l=e.effectMiddlewares,u=e.onError,d=void 0===u?hn:u,p=arguments.length,h=new Array(p>2?p-2:0),f=2;f<p;f++)h[f-2]=arguments[f];var g,m=t.apply(void 0,h),v=Er();if(c&&(c.rootSagaStarted=c.rootSagaStarted||rn,c.effectTriggered=c.effectTriggered||rn,c.effectResolved=c.effectResolved||rn,c.effectRejected=c.effectRejected||rn,c.effectCancelled=c.effectCancelled||rn,c.actionDispatched=c.actionDispatched||rn,c.rootSagaStarted({effectId:v,saga:t,args:h})),l){var y=kt.compose.apply(void 0,l);g=function(e){return function(t,n,r){return y(function(t){return e(t,n,r)})(t)}}}else g=on;var b={channel:r,dispatch:gn(o),getState:i,sagaMonitor:c,onError:d,finalizeRunEffect:g};return rr(function(){var e=Ur(b,m,s,v,Sn(t),!0,rn);return c&&c.effectResolved(v,e),e})}.bind(null,Bt({},c,{context:o,channel:a,dispatch:r,getState:n,sagaMonitor:s})),function(e){return function(t){s&&s.actionDispatched&&s.actionDispatched(t);var n=e(t);return a.put(t),n}}}return l.run=function(){return t.apply(void 0,arguments)},l.setContext=function(e){an(o,e)},l};var Mr,zr=({getState:e,dispatch:t})=>e=>t=>{e(t)};!function(e){e.SUBMIT="SIGNUP_SUBMIT",e.SUBMIT_SUCCESS="SIGNUP_SUBMIT_SUCCESS",e.SUBMIT_FAIL="SIGNUP_SUBMIT_FAIL"}(Mr||(Mr={}));const Vr={data:{api:"",uuid:""},isLoading:!1};var $r;!function(e){e.SESSION_SIGNIN="SESSION_SIGNIN",e.SESSION_SIGNIN_SUCCESS="SESSION_SIGNIN_SUCCESS",e.SESSION_SIGNIN_FAIL="SESSION_SIGNIN_FAIL",e.SESSION_SIGNOUT="SESSION_SIGNOUT",e.SESSION_SIGNOUT_SUCCESS="SESSION_SIGNOUT_SUCCESS",e.SESSION_SIGNOUT_FAIL="SESSION_SIGNOUT_FAIL"}($r||($r={}));const Gr={session:{live:!1,email:""},isLoading:!1};var Br;!function(e){e.TOGGLE="LAUNCHER_TOGGLE",e.SHOW="LAUNCHER_SHOW",e.HIDE="LAUNCHER_HIDE",e.SHOWN="LAUNCHER_SHOWN",e.HIDDEN="LAUNCHER_HIDDEN"}(Br||(Br={}));const Fr=()=>({type:Br.HIDE}),Wr={isVisible:!1};const Hr={loaded:!1,message:"Just created",connected:!1,history:[],message_history:[]};const Kr={applications:{"e9a30119-d673-4978-b393-f608fe28ae07":{uuid:"e9a30119-d673-4978-b393-f608fe28ae07",title:"Home",type:"system",componentTag:"",default:!1,path:""},"54789c07-bb43-4db4-8b2d-1a8e1f8c67f1":{uuid:"54789c07-bb43-4db4-8b2d-1a8e1f8c67f1",title:"Desktop",type:"system",componentTag:"",default:!1,path:""},"c178025e-a209-4c50-8c34-36d35f36494c":{uuid:"c178025e-a209-4c50-8c34-36d35f36494c",title:"Sign in",type:"system",componentTag:"",default:!1,path:"signin"},"437642dd-7d74-4213-af76-b51fc24eff0":{uuid:"437642dd-7d74-4213-af76-b51fc24eff0",title:"Sign up",type:"system",componentTag:"",default:!1,path:"signup"},"5a2192a0-0051-46a1-85e7-17245ba24f55":{uuid:"5a2192a0-0051-46a1-85e7-17245ba24f55",title:"Restore Password",type:"system",componentTag:"",default:!1,path:"restore-password"},"59728db5-8284-42c5-8731-bdec7adab8d8":{uuid:"59728db5-8284-42c5-8731-bdec7adab8d8",title:"Shipping",type:"user",componentTag:"app-shipping",default:!0,path:"shipping"},"3096aa1f-a6ce-4130-8147-66f4bea35e16":{uuid:"3096aa1f-a6ce-4130-8147-66f4bea35e16",title:"Shipping Project",type:"user",componentTag:"app-shipping-project",default:!1,path:"shipping/project"},"c80626f6-2974-4091-813c-f217ce0b44d6":{uuid:"c80626f6-2974-4091-813c-f217ce0b44d6",title:"Accounts",type:"user",componentTag:"app-accounts",default:!1,path:"accounts"},"52386006-bf4a-4ddf-927c-41c395e877f5":{uuid:"52386006-bf4a-4ddf-927c-41c395e877f5",title:"Sales",type:"user",componentTag:"app-sales",default:!1,path:"sales"},"0e35396c-7a32-4b2f-8759-d1b09b9fce2c":{uuid:"0e35396c-7a32-4b2f-8759-d1b09b9fce2c",title:"Accounting",type:"user",componentTag:"app-accounting",default:!1,path:"accounting"}},publicApplications:["59728db5-8284-42c5-8731-bdec7adab8d8","3096aa1f-a6ce-4130-8147-66f4bea35e16","c80626f6-2974-4091-813c-f217ce0b44d6","52386006-bf4a-4ddf-927c-41c395e877f5","0e35396c-7a32-4b2f-8759-d1b09b9fce2c"],modules:{"71e3c25b-cce6-4256-8f3a-92e2f19cbf0d":{title:"Dashboard",application:"59728db5-8284-42c5-8731-bdec7adab8d8"},"21d416b5-72d5-4a8d-95ed-a5bba9d9155e":{title:"Projects",application:"59728db5-8284-42c5-8731-bdec7adab8d8"},"d4f2eda9-15ec-4a28-bdd6-f07ce116a5f4":{title:"Orders",application:"59728db5-8284-42c5-8731-bdec7adab8d8"},"5bcbfc1c-9cc3-433f-b4be-20104a36d104":{title:"Dashboard",application:"3096aa1f-a6ce-4130-8147-66f4bea35e16"},"c9b4baef-d339-4588-8436-050fbbe6b872":{title:"Dispatch",application:"3096aa1f-a6ce-4130-8147-66f4bea35e16"},"6b114c0f-0dcb-4e50-a6f7-361d65127cfd":{title:"Kanban",application:"3096aa1f-a6ce-4130-8147-66f4bea35e16"}},wsConnected:!1};var qr;!function(e){e.LOAD="WAYBILLS_LOAD",e.LOAD_SUCCESS="WAYBILLS_LOAD_SUCCESS",e.LOAD_FAIL="WAYBILLS_LOAD_FAIL",e.SELECT="WAYBILLS_SELECT"}(qr||(qr={}));const Jr={data:{},page:1,selectedWaybills:[],lastSelectedWaybill:""};var Xr=Object(kt.combineReducers)({signup:(e=Vr,t)=>{switch(t.type){case Mr.SUBMIT:return{...e,isLoading:!0};case Mr.SUBMIT_SUCCESS:return{...e,data:t.payload,isLoading:!1};case Mr.SUBMIT_FAIL:default:return e}},session:(e=Gr,t)=>{switch(t.type){case $r.SESSION_SIGNIN:return console.log(t.payload),{...e,isLoading:!0};case $r.SESSION_SIGNIN_SUCCESS:return{...e,session:t.payload,isLoading:!1};case $r.SESSION_SIGNIN_FAIL:return e;case $r.SESSION_SIGNOUT:return{...e,isLoading:!0};case $r.SESSION_SIGNOUT_SUCCESS:return{...e,session:t.payload,isLoading:!1};case $r.SESSION_SIGNOUT_FAIL:default:return e}},socket:(e=Hr,t)=>{switch(t.type){case Nt.SOCKETS_CONNECTING:return Object.assign({},e,{loaded:!0,message:"Connecting...",connected:!0,history:[...e.history,{loaded:!0,message:"Connecting...",connected:!0}]});case Nt.SOCKETS_DISCONNECTING:return Object.assign({},e,{loaded:!0,message:"Disconnecting...",connected:!1,history:[...e.history,{loaded:!0,message:"Disconnecting...",connected:!1}]});case Nt.SOCKETS_MESSAGE_SENDING:return Object.assign({},e,{loaded:!0,message:"Send message",connected:!0,message_history:[...e.message_history,{direction:"->",message:t.message_send}]});case Nt.SOCKETS_MESSAGE_RECEIVING:return Object.assign({},e,{loaded:!0,message:"Message receive",connected:!0,message_history:[...e.message_history,{direction:"<-",message:t.message_receive}]});default:return e}},launcher:(e=Wr,t)=>{switch(t.type){case Br.TOGGLE:return{...e,isVisible:!e.isVisible};case Br.SHOW:case Br.SHOWN:return{...e,isVisible:!0};case Br.HIDE:case Br.HIDDEN:return{...e,isVisible:!1};default:return e}},system:(e=Kr,t)=>(t.type,e),waybills:(e=Jr,t)=>{switch(t.type){case qr.LOAD:return e;case qr.LOAD_SUCCESS:return{...e,data:t.payload,page:e.page+1};case qr.LOAD_FAIL:case qr.SELECT:default:return e}}}),Yr=function(e){return{done:!0,value:e}},Zr={};function Qr(e){return Zt(e)?"channel":Qt(e)?String(e):Ht(e)?e.name:String(e)}function eo(e,t,n){var r,o,i,a=t;function s(t,n){if(a===Zr)return Yr(t);if(n&&!o)throw a=Zr,n;r&&r(t);var s=n?e[o](n):e[a]();return a=s.nextState,i=s.effect,r=s.stateUpdater,o=s.errorState,a===Zr?Yr(t):i}return pn(s,function(e){return s(null,e)},n)}function to(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i,a={done:!1,value:Hn(e)},s=function(e){return i=e};return eo({q1:function(){return{nextState:"q2",effect:a,stateUpdater:s}},q2:function(){return{nextState:"q1",effect:(e=i,{done:!1,value:Xn.apply(void 0,[t].concat(r,[e]))})};var e}},"q1","takeEvery("+Qr(e)+", "+t.name+")")}var no;function ro(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return Xn.apply(void 0,[to,e,t].concat(r))}!function(e){e.FETCH_APPS="FETCH_APPS",e.INITIALIZE_WEB_SOCKETS_CHANNEL="INITIALIZE_WEB_SOCKETS_CHANNEL",e.WEBSOCKET_MESSAGE_RECEIVED="WEBSOCKET_MESSAGE_RECEIVED"}(no||(no={}));const oo=e=>({type:no.WEBSOCKET_MESSAGE_RECEIVED,payload:e});function*io(e){return console.log("createEventChannel"),function(e,t){void 0===t&&(t=kn());var n,r=!1,o=gr(t),i=function(){r||(r=!0,Ht(n)&&n(),o.close())};return n=ln(n=e(function(e){fr(e)?i():o.put(e)})),r&&n(),{take:o.take,flush:o.flush,close:i}}(t=>(e.onmessage(e=>t(e.data)),()=>{e.close()}))}function*ao(){console.log("initializeWebSocketsChannel");const e=new WebSocket("ws://localhost:7070/v1/ws/public","protocol"),t=yield Jn(io,e);for(;;){const{message:e}=yield Hn(t);yield Kn(oo(e))}}function*so(){yield ro(no.INITIALIZE_WEB_SOCKETS_CHANNEL,ao)}function co(e,t){return e===t}var lo=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=0,a=r.pop(),s=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(r),c=e.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(n)),l=e(function(){for(var e=[],t=s.length,n=0;n<t;n++)e.push(s[n].apply(null,arguments));return c.apply(null,e)});return l.resultFunc=a,l.dependencies=s,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:co,n=null,r=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}});const uo=lo([e=>e.system.applications,e=>e.system.publicApplications],(e,t)=>t.map(t=>e[t])),po=e=>({type:Mr.SUBMIT,payload:e}),ho=e=>({type:Mr.SUBMIT_SUCCESS,payload:e}),fo=e=>({type:Mr.SUBMIT_FAIL,error:e}),go=async()=>{const e=await fetch("http://localhost:8080/v1/signup",{method:"POST",headers:{Accept:"application/json","Content-type":"text/plain"},body:JSON.stringify({api:"v1",payload:{display_name:"string",email:"string",password:"string"}})}),t=await e.json();if(e.status>=400)throw new Error(t);return t};function*mo(){try{const e=yield Jn(go);yield Kn(ho(e))}catch(e){yield Kn(fo(e.toString()))}}function*vo(){yield ro(Mr.SUBMIT,mo)}const yo=e=>({type:$r.SESSION_SIGNIN_SUCCESS,payload:e}),bo=e=>({type:$r.SESSION_SIGNIN_FAIL,error:e}),So=e=>({type:$r.SESSION_SIGNOUT_SUCCESS,payload:e}),_o=e=>({type:$r.SESSION_SIGNOUT_FAIL,error:e}),wo=async e=>{const t=await fetch("http://localhost:8082/v1/session",{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json, text/plain; charset=utf-8"},body:JSON.stringify({email:e.payload.email,password:e.payload.password})}),n=await t.json();if(t.status>=400)throw new Error(n);return n},xo=async e=>{console.log("Signout API",e);const t=await fetch("http://localhost:8082/v1/session",{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json, text/plain; charset=utf-8"}}),n=await t.json();if(t.status>=400)throw new Error(n);return n};function*Eo(e){try{const t=yield Jn(wo,e);yield Kn(yo(t))}catch(e){yield Kn(bo(e.toString()))}}function*Oo(e){try{console.log("Signout saga:",e);const t=yield Jn(xo,e);yield Kn(So(t))}catch(e){yield Kn(_o(e.toString()))}}function*Co(){yield ro($r.SESSION_SIGNIN,Eo)}function*No(){yield ro($r.SESSION_SIGNOUT,Oo)}const ko=lo([e=>e.session.session],e=>e),Io=e=>({type:qr.LOAD_SUCCESS,payload:e}),To=e=>({type:qr.LOAD_FAIL,error:e}),Ao=async e=>{console.log("Orders page requested:",e);const t=await fetch("https://api.oswee.com/v1/shipping/orders/0987914d-298e-443f-ad78-acf43eb2ec08"),n=await t.json();if(t.status>=400)throw new Error(n);return n.delivery_orders.reduce((e,t)=>(e[t.uuid]=t,e),{})},Po=e=>e.waybills.page;function*jo(){try{const e=yield function(e){void 0===e&&(e=on);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Wn(zn,{selector:e,args:n})}(Po),t=yield Jn(Ao,e);yield Kn(Io(t))}catch(e){yield Kn(To(e.toString()))}}function*Ro(){yield ro(qr.LOAD,jo)}const Lo=lo([e=>e.waybills.data],e=>e);function*Uo(){yield Xn(so),yield Xn(vo),yield Xn(Co),yield Xn(No),yield Xn(Ro)}const Do=()=>({type:Nt.SOCKETS_CONNECTING}),Mo=()=>({type:Nt.SOCKETS_DISCONNECTING}),zo=()=>({type:Nt.SOCKETS_DISCONNECT}),Vo=e=>({type:Nt.SOCKETS_MESSAGE_SENDING,message_send:e}),$o=e=>({type:Nt.SOCKETS_MESSAGE_RECEIVING,message_receive:e}),Go=lo([e=>e.launcher],e=>e.isVisible);var Bo=(()=>{const e={name:"Redux",realtime:!0,trace:!0,traceLimit:25},t=Object(It.composeWithDevTools)(e),n=Dr(),r=Tt(),o=[zr,r,n],i=Object(kt.createStore)(Xr,t(Object(kt.applyMiddleware)(...o)));return n.run(Uo),i})(),Fo=xt`
	* {
		box-sizing: border-box;
	}

	input[type='text'],
	input[type='password'] {
		border: 1px solid var(--color-dodgerblue-6l);
		background-color: var(--color-dodgerblue-10l, hsla(215, 100%, 95%, 1));
	}

	input[type='text']:focus,
	input[type='password']:focus {
		border: 1px solid var(--color-dodgerblue-main);
	}

	input[type='submit'] {
		border: none;
	}
`,Wo=xt`
	* {
		box-sizing: border-box;
	}
    :host {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
`,Ho=xt`
	:host {
		/* width: 100%; */
		min-height: var(--size-sl);
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: var(--color-dodgerblue-10d);
		border-bottom: 1px solid var(--color-dodgerblue-6d);
		box-shadow: 0 0 4px rgba(0, 11, 26, 0.32), 0 4px 8px rgba(0, 11, 26, 0.46); // barely visible
	}

	nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	div {
		flex: 1;
	}

	button {
		height: var(--size-s);
		font-family: var(--font-main);
		font-size: 1rem;
		background-color: var(--color-dodgerblue-main);
		color: var(--color-dodgerblue-10l);
		border: none;
		border-radius: 2px;
		margin: 0 0.5rem;
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;var Ko=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}
	a {
		color: var(--color-dodgerblue-10l);
		text-decoration: none;
		padding-left: 1rem;
		font-size: 1.1rem;
	}
	a:active {
		color: red;
	}
	h1 {
		margin: 0 1rem;
		color: var(--color-dodgerblue-10l);
		cursor: pointer;
		font-weight: 700;
		font-size: 1.8rem;
	}

`,qo=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Jo=class extends(Ct(Bo)(Ot)){render(){return function(){return We`
		<h1 @click=${()=>this.switchRoute("")}>Oswee</h1>
		<a href="/marketplace">Marketplace</a>
		<a href="/services">Services</a>
		<a href="/organizations">Organizations</a>
		<a href="/apps/routeplanner">Route Planner</a>
		<a href="/about">About</a>
	`}.call(this)}switchRoute(e){ce.go(`/${e}`)}};Jo.styles=[Fo,Ko],Jo=qo([ht("main-navigation-public")],Jo);const Xo=()=>He`
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#000" stroke-width="16" stroke-linecap="round" d="M48 104h64M16 64h64M32 24h64"/>
    </svg>
`,Yo=(e,t)=>{const n=e.startNode.parentNode,r=void 0===t?e.endNode:t.startNode,o=n.insertBefore(Ce(),r);n.insertBefore(Ce(),r);const i=new Re(e.options);return i.insertAfterNode(o),i},Zo=(e,t)=>(e.setValue(t),e.commit(),e),Qo=(e,t,n)=>{const r=e.startNode.parentNode,o=n?n.startNode:e.endNode,i=t.endNode.nextSibling;i!==o&&me(r,t.startNode,i,o)},ei=e=>{ve(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},ti=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},ni=new WeakMap,ri=new WeakMap,oi=(e=>(...t)=>{const n=e(...t);return he.set(n,!0),n})((e,t,n)=>{let r;return void 0===n?n=t:void 0!==t&&(r=t),t=>{if(!(t instanceof Re))throw new Error("repeat can only be used in text bindings");const o=ni.get(t)||[],i=ri.get(t)||[],a=[],s=[],c=[];let l,u,d=0;for(const t of e)c[d]=r?r(t,d):d,s[d]=n(t,d),d++;let p=0,h=o.length-1,f=0,g=s.length-1;for(;p<=h&&f<=g;)if(null===o[p])p++;else if(null===o[h])h--;else if(i[p]===c[f])a[f]=Zo(o[p],s[f]),p++,f++;else if(i[h]===c[g])a[g]=Zo(o[h],s[g]),h--,g--;else if(i[p]===c[g])a[g]=Zo(o[p],s[g]),Qo(t,o[p],a[g+1]),p++,g--;else if(i[h]===c[f])a[f]=Zo(o[h],s[f]),Qo(t,o[h],o[p]),h--,f++;else if(void 0===l&&(l=ti(c,f,g),u=ti(i,p,h)),l.has(i[p]))if(l.has(i[h])){const e=u.get(c[f]),n=void 0!==e?o[e]:null;if(null===n){const e=Yo(t,o[p]);Zo(e,s[f]),a[f]=e}else a[f]=Zo(n,s[f]),Qo(t,n,o[p]),o[e]=null;f++}else ei(o[h]),h--;else ei(o[p]),p++;for(;f<=g;){const e=Yo(t,a[g+1]);Zo(e,s[f]),a[f++]=e}for(;p<=h;){const e=o[p++];null!==e&&ei(e)}ni.set(t,a),ri.set(t,c)}});var ii=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let ai=class extends Ot{constructor(){super(...arguments),this.title=""}static get styles(){return[xt`
				:host {
					height: 140px;
					width: 300px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					background-color: var(--color-dodgerblue-6d);
					box-sizing: border-box;
					color: var(--color-dodgerblue-8l);
					padding: 1rem;
				}
			`]}render(){return We`
			<h3>${this.title}</h3>
		`}connectedCallback(){super.connectedCallback()}};ii([mt({type:String})],ai.prototype,"title",void 0),ai=ii([ht("app-shortcut")],ai);let si=class extends(Ct(Bo)(Ot)){constructor(){super(),this.isVisible=!1,this.setWrapperRef=this.setWrapperRef.bind(this),this.handleClickOutside=this.handleClickOutside.bind(this)}static get properties(){return{isVisible:{type:Boolean},apps:{type:Array}}}stateChanged(e){this.isVisible=Go(e),this.apps=uo(e)}static get styles(){return[xt`
				:host {
					height: auto;
					max-height: calc(100vh - var(--size-sl));
					width: 100%;
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					background-color: var(--color-dodgerblue-9d);
					box-sizing: border-box;
					// align-items: center;
					// justify-content: center;
					color: var(--color-dodgerblue-8l);
					overflow: auto;
					flex-wrap: wrap;
				}
				app-shortcut {
					margin: 1rem;
				}
			`]}render(){return We`
			${oi(this.apps,e=>e.uuid,e=>We`
					<app-shortcut
						key="${e.uuid}"
						@click=${()=>this.switchRoute(`${e.path}`)}
						title="${e.title}"
					></app-shortcut>
				`)}
		`}switchRoute(e){Bo.dispatch(Fr()),ce.go(`/${e}`)}openApp(e){console.log("Clicked:",e.target.getAttribute("key"))}changeState(){Bo.dispatch(Fr())}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.handleClickOutside),Bo.dispatch((()=>({type:Br.SHOWN}))())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.handleClickOutside),Bo.dispatch((()=>({type:Br.HIDDEN}))())}setWrapperRef(e){this.wrapperRef=e}handleClickOutside(e){!this.getRootNode().contains(this)||e.composedPath().includes(this)||function(e,t){if(!e||!(e.path||e.composedPath&&e.composedPath()))return!1;const n=function(e){const t=e.startsWith("."),n=e.startsWith("#");return{key:t?"className":n?"id":"",val:e.substr(1)}}(t);return(e.path||e.composedPath&&e.composedPath()).some(e=>!!e[n.key]&&e[n.key].includes(n.val))}(e,"#launcher")||Bo.dispatch(Fr())}};si=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([ht("main-launcher")],si);var ci=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	button {
		height: var(--size-s);
		font-family: var(--font-main);
		font-size: 1rem;
		background-color: var(--color-dodgerblue-main);
		color: var(--color-dodgerblue-10l);
		border: none;
		border-radius: 2px;
		margin: 0 0.5rem;
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--color-dodgerblue-10l);
	}

	.launcher {
		height: var(--size-m);
		width: var(--size-m);
		padding: 0;
		justify-content: center;
		border-radius: 50%;
		color: white;
		outline: none;
	}
	#btnSignin {
		font-weight: 500;
		color: white;
	}
	
	main-launcher {
        position: fixed;
        top: var(--size-sl);
    }
`,li=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let ui=class extends(Ct(Bo)(Ot)){constructor(){super(...arguments),this.launcherIsVisible=!1}stateChanged(e){this.launcherIsVisible=Go(e)}render(){return function(){return We`
		<button @click="${this.toggleLauncher}" id="launcher" class="launcher" title="Open Launcher">
			${Xo()}
		</button>
		${this.launcherIsVisible?We`
					<main-launcher></main-launcher>
				`:""}
	`}.call(this)}toggleLauncher(){Bo.dispatch((()=>({type:Br.TOGGLE}))())}};ui.styles=[Fo,ci],li([mt({type:Boolean})],ui.prototype,"launcherIsVisible",void 0),ui=li([ht("main-navigation-private")],ui);var di=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let pi=class extends(Ct(Bo)(Ot)){constructor(){super(...arguments),this.session={live:!1}}stateChanged(e){this.session=ko(e)}render(){return We`
			<nav>
				${this.session.live?We`
						<main-navigation-private></main-navigation-private>
						<div></div>
						<button @click=${()=>this.signOut()}>Sign Out</button>
					`:We`
						<main-navigation-public></main-navigation-public>
						<div></div>
						<button id="btnSignin" @click=${()=>this.switchRoute("signin")}>Sign In</button>
					`}
			</nav>
		`}switchRoute(e){Bo.dispatch(Fr()),ce.go(`/${e}`)}signOut(){console.log("Sign out clicked!"),Bo.dispatch((()=>({type:$r.SESSION_SIGNOUT}))())}};pi.styles=[Fo,Ho],di([mt({type:Object})],pi.prototype,"session",void 0),pi=di([ht("main-taskbar")],pi);var hi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let fi=class extends(Ct(Bo)(Ot)){constructor(){super(...arguments),this.lastUsedApp="app-home",this.session={live:!1,email:""}}stateChanged(e){this.session=ko(e)}render(){return We`
			<main-taskbar></main-taskbar>
			<slot></slot>
		`}connectedCallback(){super.connectedCallback(),null!==localStorage.getItem("lastUsedApp")&&(this.lastUsedApp=localStorage.getItem("lastUsedApp"))}disconnectedCallback(){super.disconnectedCallback()}};fi.styles=[Fo,Wo],hi([mt({type:String})],fi.prototype,"lastUsedApp",void 0),hi([mt({type:Object})],fi.prototype,"session",void 0),fi=hi([ht("system-shell")],fi);var gi=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
    textarea {
        display: block;
        height: 3rem;
        width: 600px;
    }
    button {
        margin: 1rem 1rem 1rem 0;
    }
`;var mi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let vi=class extends(Ct(Bo)(Ot)){constructor(){super(...arguments),this.loaded=!1,this.message="",this.connected=!1,this.history=[],this.handleConnectButton=(e=>{e.preventDefault(),Bo.dispatch((()=>({type:Nt.SOCKETS_CONNECT}))())}),this.handleDisconnectButton=(e=>{e.preventDefault(),Bo.dispatch(zo())})}render(){return function(){return We`
		<div>
        <h3>Socket connection log</h3>
        <textarea
          class="form-control"
          rows="1"
          readOnly
          placeholder="Waiting ..."
          .value=${this.history.map((e,t)=>"index = "+t+" loaded = "+e.loaded.toString()+" message = "+e.message.toString()+" connected = "+e.connected.toString()+" \n").reverse()}>
        </textarea>
        <button class="btn btn-primary btn-sm"
        @click=${e=>this.handleConnectButton(e)}>
        	<i class="fa fa-sign-in">Connect</i>
        </button>
        <button class="btn btn-danger btn-sm"
        @click=${e=>this.handleDisconnectButton(e)}>
        	<i class="fa fa-sign-out">Disconnect</i>
        </button>
      </div>
	`}.call(this)}};vi.styles=[Fo,gi],mi([mt({type:Boolean})],vi.prototype,"loaded",void 0),mi([mt({type:String})],vi.prototype,"message",void 0),mi([mt({type:Boolean})],vi.prototype,"connected",void 0),mi([mt({type:Array})],vi.prototype,"history",void 0),vi=mi([ht("socket-connection-log")],vi);var yi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let bi=class extends(Ct(Bo)(Ot)){constructor(){super(...arguments),this.loaded=!1,this.connected=!1,this.message="",this.message_history=[]}stateChanged(e){this.loaded=e.socket.loaded,this.connected=e.socket.connected,this.message=e.socket.message,this.message_history=e.socket.message_history}render(){return function(){return We`
		<div>
    <h3>Message log</h3>
        <ul>
          ${oi(this.message_history,e=>e.direction,(e,t)=>We`
          <li>${t}: ${e.message}</li>`)}
        </ul>
        <form class="form-inline">
          <div class="form-group">
            ${this.loaded&&!0===this.connected?We`
              <input
                class="form-control input-sm"
                type="text"
                id="message_text"
              >
              `:We`
              <input
                class="form-control input-sm"
                type="text"
                id="message_text"
                readonly
              >
              `}
          </div>
          ${!0===this.connected?We`
                <button
                  @click=${e=>this.handleSendButton(e)}>
                    <i class="fa fa-sign-in">Send</i>
                </button>
              `:We`
                <button
                  @click=${e=>this.handleSendButton(e)} disabled>
                    <i class="fa fa-sign-in">Send</i>
                </button>
              `}
        </form>
      </div>
	`}.call(this)}handleSendButton(e){e.preventDefault();const t={message:this.messageInput.value};Bo.dispatch((e=>({type:Nt.SOCKETS_MESSAGE_SEND,message_send:e}))(t)),this.messageInput.value=""}};bi.styles=[Fo],yi([mt({type:Boolean})],bi.prototype,"loaded",void 0),yi([mt({type:Boolean})],bi.prototype,"connected",void 0),yi([mt({type:String})],bi.prototype,"message",void 0),yi([mt({type:Array})],bi.prototype,"message_history",void 0),yi([vt("#message_text")],bi.prototype,"messageInput",void 0),bi=yi([ht("socket-message-log")],bi);var Si=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let _i=class extends(Ct(Bo)(Ot)){constructor(){super(...arguments),this.loaded=!1,this.message="",this.connected=!1,this.history=[]}stateChanged(e){this.loaded=e.socket.loaded,this.message=e.socket.message,this.connected=e.socket.connected,this.history=e.socket.history}render(){return function(){return We`
        <div class="container">

            <h1>Socket Example Page</h1>
            <p>Sockets not connected</p>

            <socket-connection-log .loaded=${this.loaded} .message=${this.message} .connected=${this.connected} .history=${this.history}></socket-connection-log>
            <socket-message-log></socket-message-log>
        </div>
    `}.call(this)}};Si([mt({type:Boolean})],_i.prototype,"loaded",void 0),Si([mt({type:String})],_i.prototype,"message",void 0),Si([mt({type:Boolean})],_i.prototype,"connected",void 0),Si([mt({type:Boolean})],_i.prototype,"history",void 0),_i=Si([ht("socket-example-page")],_i);var wi=xt`
	* {
		box-sizing: border-box;
	}
    :host {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: var(--color-dodgerblue-8d);
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        color: var(--color-dodgerblue-8l);
    }
`,xi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Ei=class extends fi{render(){return We`
			<h1>Welcome to Oswee</h1>
			<h2>You have nothing to do there!</h2>
			<p>This page is under continous development. Your actions are tracked.</p>
		`}};Ei.styles=[Fo,wi],Ei=xi([ht("app-home")],Ei);var Oi=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		transition: all 5s linear;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
	.container {
		width: 370px;
		padding: var(--size-xs);
		border-radius: 5px;
		box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
			0 9px 46px 8px rgba(0, 0, 0, 0.12);
		margin-bottom: var(--size-xl);
		background-color: var(--color-base-light);
	}
	.fieldset {
		display: flex;
		flex-direction: column;
		margin-bottom: 1.1rem;
	}
	label {
		font-size: var(--text-md);
		font-weight: 500;
	}
	input {
		height: 2rem;
		width: 100%;
		border-radius: 3px;
		background: var(--color-dodgerblue-10l);
		border: 1px solid var(--color-dodgerblue-6l);
		padding: 0 6px;
		outline: none;
		box-sizing: border-box;
	}
	input:focus {
		border: 1px solid var(--lt-color-primary, hsl(215 100% 50%));
	}
	#continue {
		color: white;
		background-color: var(--lt-color-primary, hsl(215 100% 50%));
		font-family: var(--font-main);
		font-size: var(--text-md);
		margin-bottom: 1.1rem;
		cursor: pointer;
	}
	p {
		margin: 0;
		font-size: var(--text-sm);
	}
	.have-account {
		font-size: var(--text-md);
		font-weight: 500;
	}
	.have-account a {
		text-decoration: none;
	}
	h1,
	p,
	input,
	label {
		color: var(--lt-color-light-10d);
	}
	h1 {
		margin-top: 0;
	}
	a {
		color: var(--color-dodgerblue-main);
	}
	@media only screen and (max-width: 600px) {
		.container {
			width: 280px;
		}
	}
`;class Ci extends Ot{static get is(){return"legal-info"}static get properties(){return{id:{type:String}}}constructor(){super(),this.id=""}static get styles(){return xt`
			:host {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.links {
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
			.links a {
				text-decoration: none;
				color: var(--lt-color-primary);
				font-size: var(--text-sm);
				line-height: 1.5rem;
				margin-right: 2em;
			}
			.links a:last-child {
				margin-right: 0;
			}
			.links a:hover {
				text-decoration: underline;
				cursor: pointer;
			}
			span {
				font-size: var(--text-sm);
				text-align: center;
				color: var(--lt-color-light-10d);
			}
		`}render(){return We`
			<div class="links">
				<a href="/help/conditions-of-use">Conditions of Use</a>
				<a href="/help/privacy-notice">Privacy Notice</a>
				<a href="/help">Help</a>
			</div>
			<span>© 2019, Oswee.com, Inc. or its affiliates</span>
			<slot></slot>
		`}}customElements.define(Ci.is,Ci);var Ni=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};class ki extends(Ct(Bo)(fi)){constructor(){super(...arguments),this.waybills={},this.payload={display_name:"Dzintars Saga",email:"dzintars@saga.com",password:"sagapass"}}static get is(){return"app-signup"}stateChanged(e){this.waybills=Lo(e)}render(){return We`
			<div>
				<div class="container">
					<form id="signup_form" name="signup" method="POST" novalidate action="">
						<h1>Create account</h1>
						<input type="hidden" name="appActionToken" value="JpvLfj2FzMZj2FoVvEDKWR29i80dN5cj3D" />
						<div class="fieldset">
							<label for="customer_name">Your name</label>
							<input id="customer_name" name="customerName" type="text" autofocus />
						</div>
						<div class="fieldset">
							<label for="email">Email</label>
							<input id="email" name="email" type="text" />
						</div>
						<div class="fieldset">
							<label for="password">Password</label>
							<input id="password" name="password" type="password" />
						</div>
						<div class="fieldset">
							<input
								id="continue"
								type="submit"
								value="Create your Oswee account"
								@click=${this.fetchOrders}
							/>
							<p>By creating an account, you agree to Oswee's</p>
							<p>
								<a href="/help/conditions_of_use">Conditions of Use</a> and
								<a href="/help/privacy_notice">Privacy Notice</a>
							</p>
						</div>
						<div>
							<p class="have-account">Already have an account?<a href="/signin"> Sign in</a></p>
						</div>
					</form>
				</div>
				<legal-info></legal-info>
			</div>
		`}fetchOrders(e){e.preventDefault(),Bo.dispatch(po(this.payload))}}ki.styles=[Fo,Oi],Ni([mt({type:Object})],ki.prototype,"waybills",void 0),customElements.define(ki.is,ki);var Ii=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		transition: all 5s linear;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
	.container {
		width: 370px;
		padding: var(--size-xs);
		border-radius: 5px;
		box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
			0 9px 46px 8px rgba(0, 0, 0, 0.12);
		margin-bottom: var(--size-xl);
		background-color: var(--color-base-light);
	}
	.fieldset {
		display: flex;
		flex-direction: column;
		margin-bottom: 1.1rem;
	}
	label {
		font-size: var(--text-md);
		font-weight: 500;
	}
	h1,
	p,
	input,
	label {
		color: var(--color-dodgerblue-10d, hsla(0, 0%, 0%, 1));
	}
	h1 {
		margin-top: 0;
	}

	.input {
		height: 2rem;
		border-radius: 3px;
		padding: 0 6px;
		outline: none;
		box-sizing: border-box;
		font-family: var(--font-main);
	}

	#signin {
		color: white;
		background-color: var(--lt-color-primary, hsl(215 100% 50%));
		font-family: var(--font-main);
		font-size: var(--text-md);
		margin: 1.1rem 0;
		cursor: pointer;
	}
	.new-client {
		width: 100%;
		height: auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		justify-items: center;
	}
	.new-client a {
		color: white;
		background: var(--color-lawngreen-main);
	}
	.signup {
		display: inline-block;
		width: 100%;
		height: var(--size-xm);
		line-height: var(--size-xm);
		font-size: var(--text-md);
		text-align: center;
		text-decoration: none;
		border-radius: 3px;
		border: 1px solid var(--lt-color-success);
		color: var(--color-light);
		background-color: var(--color-success);
	}
	.signup:hover {
		cursor: pointer;
		background-color: var(--color-success-2l);
	}
	p {
		margin: 0;
		font-size: var(--text-sm);
	}
	.have-account {
		font-size: var(--text-md);
		font-weight: 500;
	}
	.keepin {
		width: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.restore-pass {
		display: flex;
		flex-direction: row;
	}
	.restore-pass label {
		flex: 1;
	}
	.restore-pass a {
		font-size: var(--text-md);
		text-decoration: none;
		color: var(--lt-color-primary);
	}
	@media only screen and (max-width: 600px) {
		.container {
			width: 280px;
		}
	}
`;var Ti=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Ai=class extends(Ct(Bo)(fi)){constructor(){super(...arguments),this.signInForm={email:"",password:""}}render(){return function(){return We`
		<div>
			<div class="container">
				<form id="signin-form" name="signup" novalidate action="">
					<h1>Sign in</h1>
					<div class="fieldset">
						<label for="email">Email</label>
						<input id="email" class="input txt" name="email" type="text" />
					</div>
					<div class="fieldset">
						<div class="restore-pass">
							<label for="password">Password</label>
							<a href="/restore-password">Forgot your password?</a>
						</div>
						<input
							id="password"
							class="input txt"
							name="password"
							type="password"
						/>
					</div>
					<div class="fieldset">
						<input @click=${e=>this.signIn(e)} id="signin" class="input btn" type="submit" value="Sign in" />
						<label class="keepin">
							<input class="input chk" type="checkbox" value="" />			
							<span>Keep me signed in.</span>
						</label>
					</div>
					<div class="new-client">
						<p>New to Oswee?</p>
						<a class="signup" href="/signup">Create your Oswee account</a>
					</div>
				</form>
			</div>
			<legal-info></legal-info>
		</div>
	`}.call(this)}get formElement(){return this.shadowRoot.getElementById("signin-form")}signIn(e){e.preventDefault(),Bo.dispatch((e=>({type:$r.SESSION_SIGNIN,payload:e}))(Object.assign(this.signInForm,{email:this.emailInput.value,password:this.passwordInput.value}))),this.clear()}clear(){this.formElement.reset(),this.signInForm={email:"",password:""}}};Ai.styles=[Fo,Ii],Ti([mt({type:class{}})],Ai.prototype,"signInForm",void 0),Ti([vt("#email")],Ai.prototype,"emailInput",void 0),Ti([vt("#password")],Ai.prototype,"passwordInput",void 0),Ai=Ti([ht("app-signin")],Ai);var Pi=xt`
	* {
		box-sizing: border-box;
	}
    :host {
        flex: 1;
        display: grid;
        place-items: center center;
        transition: all 5s linear;
        background-color: var(--color-dodgerblue-10l);
        overflow: auto;
    }
    .container {
        width: 370px;
        padding: var(--size-xs);
        border-radius: 5px;
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
            0 9px 46px 8px rgba(0, 0, 0, 0.12);
        margin-bottom: var(--size-xl);
        background-color: var(--color-base-light);
    }
    .fieldset {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.1rem;
    }
    label {
        font-size: var(--text-md);
        font-weight: 500;
    }

    h1,
    p,
    input,
    label {
        color: var(--color-dodgerblue-10d, hsla(0, 0%, 0%, 1));
    }

    h1 {
        margin-top: 0;
    }
    
    .input {
        height: 2rem;
        border-radius: 3px;
        padding: 0 6px;
        outline: none;
        box-sizing: border-box;
        font-family: var(--font-main);
    }

    #signin {
        color: white;
        background-color: var(--lt-color-primary, hsl(215 100% 50%));
        font-family: var(--font-main);
        font-size: var(--text-md);
        margin: 1.1rem 0;
        cursor: pointer;
    }
    .new_client {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        justify-items: center;
    }
    .signup {
        display: inline-block;
        width: 100%;
        height: var(--size-xm);
        line-height: var(--size-xm);
        font-size: var(--text-md);
        text-align: center;
        text-decoration: none;
        border-radius: 3px;
        border: 1px solid var(--lt-color-success);
        color: var(--color-light);
        background-color: var(--color-success);
    }
    .signup:hover {
        cursor: pointer;
        background-color: var(--color-success-2l);
    }
    p {
        margin: 0;
        font-size: var(--text-sm);
    }
    .have-account {
        font-size: var(--text-md);
        font-weight: 500;
    }
    .keepin {
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .footer {
        width: 350px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        grid-gap: 0.5rem;
        margin: 0 auto;
    }
    .footer a {
        text-decoration: none;
        color: var(--lt-color-primary);
        font-size: var(--text-sm);
    }
    .footer a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    .footer span {
        grid-column-start: 1;
        grid-column-end: 4;
        font-size: var(--text-sm);
    }
    .restore-pass {
        display: flex;
        flex-direction: row;
    }
    .restore-pass label {
        flex: 1;
    }
    .restore-pass a {
        font-size: var(--text-md);
        text-decoration: none;
        color: var(--lt-color-primary);
    }
    h1,
    p,
    input,
    label {
        color: var(--lt-color-light-10d);
    }
    h1 {
        margin-top: 0;
    }
    @media only screen and (max-width: 600px) {
        .container {
            width: 280px;
        }
    }

`,ji=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Ri=class extends fi{render(){return We`
			<div>
				<div class="container">
					<form id="signup_form" name="signup" method="GET" novalidate action="">
						<div class="fieldset">
							<h1>Password assistance</h1>
							<p>Enter the email address associated with your Hooli account.</p>
						</div>
						<input type="hidden" name="appActionToken" value="JpvLfj2FzMZj2FoVvEDKWR29i80dN5cj3D" />
						<div class="fieldset">
							<label for="email">Email</label>
							<input id="email" class="input txt" name="email" type="text" />
						</div>
						<div class="fieldset">
							<input id="signin" class="input btn" type="submit" value="Continue" />
						</div>
					</form>
				</div>
				<legal-info></legal-info>
			</div>
		`}};Ri.styles=[Fo,Pi],Ri=ji([ht("app-restore-password")],Ri);var Li=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		transition: all 5s linear;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
	
`;var Ui=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Di=class extends(Ct(Bo)(fi)){render(){return function(){return We`
		<h1>Marketplace</h1>
	`}.call(this)}};Di.styles=[Fo,Li],Di=Ui([ht("app-marketplace")],Di);var Mi=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		transition: all 5s linear;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
	
`;var zi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Vi=class extends(Ct(Bo)(fi)){render(){return function(){return We`
		<h1>Services</h1>
	`}.call(this)}};Vi.styles=[Fo,Mi],Vi=zi([ht("app-services")],Vi);var $i=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		transition: all 5s linear;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
`,Gi=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
	h1 {
		color: var(--color-dodgerblue-10d);
	}
`;var Bi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Fi=class extends(Ct(Bo)(fi)){render(){return function(){return We`
		<h1>Restricted Access</h1>
		<p>Please <a href="/signin">Sign In</a> to access application</p>
	`}.call(this)}};Fi.styles=[Fo,Gi],Fi=Bi([ht("app-restricted-access")],Fi);var Wi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Hi=class extends fi{constructor(){super(...arguments),this.socket=new WebSocket("ws://localhost:7070/v1/ws/private")}sendMessage(e){this.socket;console.log(e),this.socket.send(e)}render(){return function(){return We`
		${this.session.live?We`
				<div>
					<h1>Shipping</h1>
					<button @click=${()=>this.sendMessage("Message")}>Send WS</button>
				</div>
			`:We`
				<app-restricted-access></app-restricted-access>
			`}
	`}.call(this)}connectedCallback(){super.connectedCallback(),console.log("Connecting..."),this.socket.onopen=(()=>{console.log("Connected!"),this.socket.send("Hello from client!")}),this.socket.onclose=(e=>{console.log("Socket Closed",e)}),this.socket.onerror=(e=>{console.log("Socket Error: ",e)}),this.socket.onmessage=(e=>{console.log(e)})}disconnectedCallback(){super.disconnectedCallback(),this.socket.close(1e3,"Work complete")}};Hi.styles=[Fo,$i],Hi=Wi([ht("app-shipping")],Hi);var Ki=xt`
	* {
		box-sizing: border-box;
	}
    :host {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: var(--color-dodgerblue-8d);
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        color: var(--color-dodgerblue-8l);
    }
    a {
        color: var(--color-dodgerblue-10l);
    }
`,qi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Ji=class extends fi{render(){return We`
			<h1>404 : Not Found</h1>
			<a href="/">Go to the main page</a>
		`}};Ji.styles=[Fo,Ki],Ji=qi([ht("app-not-found")],Ji);var Xi=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		transition: all 5s linear;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
	
`;var Yi=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let Zi=class extends(Ct(Bo)(fi)){render(){return function(){return We`
		<h1>Apps</h1>
		<slot></slot>
	`}.call(this)}};Zi.styles=[Fo,Xi],Zi=Yi([ht("app-apps")],Zi);const Qi=xt`
	* {
		box-sizing: border-box;
	}

	button {
		border: 2px solid dodgerblue;
	}
`;var ea=xt`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	#shortcuts {
		width: 3rem;
		background-color: orange;
	}
	#workspace {
		flex: 1;
		border: 10px solid green;
	}
`;var ta=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let na=class extends(Ct(Bo)(fi)){render(){return function(){return We`
		<div id="shortcuts"></div>
		<div id="workspace">
			<button>Crea...te</button>
		</div>
	`}.call(this)}};na.styles=[Fo,Qi,ea],na=ta([ht("app-route-planner")],na),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/dist/sw.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)}),new ce(document.querySelector("main")).setRoutes([{path:"/",component:"system-shell",children:[{path:"/",component:"app-home"},{path:"/marketplace",component:"app-marketplace"},{path:"/apps",component:"app-apps"},{path:"/apps/routeplanner",component:"app-route-planner"},{path:"/services",component:"app-services"},{path:"/signin",component:"app-signin",animate:!1},{path:"/signup",component:"app-signup"},{path:"/restore-password",component:"app-restore-password"},{path:"/shipping",component:"app-shipping"},{path:"/ws",component:"socket-example-page"},{path:"(.*)",component:"app-not-found"}]}])})}]);