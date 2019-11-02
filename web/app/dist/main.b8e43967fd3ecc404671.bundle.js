!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=7)}([function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return m})),n.d(t,"bindActionCreators",(function(){return d})),n.d(t,"combineReducers",(function(){return l})),n.d(t,"compose",(function(){return g})),n.d(t,"createStore",(function(){return a}));var r=n(1),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,l=t,u=[],d=u,p=!1;function h(){d===u&&(d=u.slice())}function f(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return l}function g(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var n=d.indexOf(e);d.splice(n,1)}}}function m(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,l=c(l,e)}finally{p=!1}for(var t=u=d,n=0;n<t.length;n++){(0,t[n])()}return e}return m({type:i.INIT}),(o={dispatch:m,subscribe:g,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,m({type:i.REPLACE})}})[r.a]=function(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(f())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function l(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var s,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,o={},i=0;i<a.length;i++){var l=a[i],u=n[l],d=e[l],p=u(d,t);if(void 0===p){var h=c(l,t);throw new Error(h)}o[l]=p,r=r||p!==d}return r?o:e}}function u(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"==typeof e)return u(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=u(o,t))}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return f({},n,{dispatch:r=g.apply(void 0,i)(n.dispatch)})}}}},function(e,t,n){"use strict";(function(e,r){var o,i=n(3);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=Object(i.a)(o);t.a=s}).call(this,n(5),n(6)(e))},function(e,t,n){"use strict";var r=n(0).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},function(e,t,n){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";function r(e){return e=e||[],Array.isArray(e)?e:[e]}function o(e){return`[Vaadin.Router] ${e}`}n.r(t);const i="module",s="nomodule",a=[i,s];function c(e){if(!e.match(/.+\.[m]?js$/))throw new Error(o(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function l(e){if(!e||!g(e.path))throw new Error(o('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(f(e.action)||Array.isArray(e.children)||f(e.children)||h(t)||n.some(t=>g(e[t]))))throw new Error(o(`Expected route config "${e.path}" to include either "${n.join('", "')}" `+'or "action" function but none found.'));if(t)if(g(t))c(t);else{if(!a.some(e=>e in t))throw new Error(o('Expected route bundle to include either "'+s+'" or "'+i+'" keys, or both'));a.forEach(e=>e in t&&c(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(o(`Route config "${e.path}" has both "redirect" and "${t}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function u(e){r(e).forEach(e=>l(e))}function d(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||((n=document.createElement("script")).setAttribute("src",e),t===i?n.setAttribute("type",i):t===s&&n.setAttribute(s,""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function p(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function h(e){return"object"==typeof e&&!!e}function f(e){return"function"==typeof e}function g(e){return"string"==typeof e}function m(e){const t=new Error(o(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const v=new class{};function y(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:o,hash:i}=t;p("go",{pathname:r,search:o,hash:i})&&e.preventDefault()}const b={activate(){window.document.addEventListener("click",y)},inactivate(){window.document.removeEventListener("click",y)}};function _(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;p("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!f(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const S={activate(){window.addEventListener("popstate",_)},inactivate(){window.removeEventListener("popstate",_)}};var w=U,x=T,E=function(e,t){return A(T(e,t))},O=A,C=L,N="/",k="./",I=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function T(e,t){for(var n,r=[],o=0,i=0,s="",a=t&&t.delimiter||N,c=t&&t.delimiters||k,l=!1;null!==(n=I.exec(e));){var u=n[0],d=n[1],p=n.index;if(s+=e.slice(i,p),i=p+u.length,d)s+=d[1],l=!0;else{var h="",f=e[i],g=n[2],m=n[3],v=n[4],y=n[5];if(!l&&s.length){var b=s.length-1;c.indexOf(s[b])>-1&&(h=s[b],s=s.slice(0,b))}s&&(r.push(s),s="",l=!1);var _=""!==h&&void 0!==f&&f!==h,S="+"===y||"*"===y,w="?"===y||"*"===y,x=h||a,E=m||v;r.push({name:g||o++,prefix:h,delimiter:x,optional:w,repeat:S,partial:_,pattern:E?R(E):"[^"+P(x)+"]+?"})}}return(s||i<e.length)&&r.push(s+e.substr(i)),r}function A(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=n?n[a.name]:void 0;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(c=i(l[u],a),!t[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(0===u?a.prefix:a.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(o+=a.prefix)}else{if(c=i(String(l),a),!t[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');o+=a.prefix+c}}else o+=a}return o}}function P(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function R(e){return e.replace(/([=!:$/()])/g,"\\$1")}function j(e){return e&&e.sensitive?"":"i"}function L(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,s=P(n.delimiter||N),a=n.delimiters||k,c=[].concat(n.endsWith||[]).map(P).concat("$").join("|"),l=o?"^":"",u=0===e.length,d=0;d<e.length;d++){var p=e[d];if("string"==typeof p)l+=P(p),u=d===e.length-1&&a.indexOf(p[p.length-1])>-1;else{var h=p.repeat?"(?:"+p.pattern+")(?:"+P(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?l+=P(p.prefix)+"("+h+")?":l+="(?:"+P(p.prefix)+"("+h+"))?":l+=P(p.prefix)+"("+h+")"}}return i?(r||(l+="(?:"+s+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+s+"(?="+c+"))?"),u||(l+="(?="+s+"|"+c+")")),new RegExp(l,j(n))}function U(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(U(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",j(n))}(e,t,n):function(e,t,n){return L(T(e,n),t,n)}(e,t,n)}w.parse=x,w.compile=E,w.tokensToFunction=O,w.tokensToRegExp=C;const{hasOwnProperty:D}=Object.prototype,M=new Map;function z(e){try{return decodeURIComponent(e)}catch(t){return e}}function B(e,t,n,r,o){let i,s,a=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let s=M.get(i);if(!s){const t=[];s={keys:t,pattern:w(e,t,{end:n,strict:""===e})},M.set(i,s)}const a=s.pattern.exec(t);if(!a)return null;const c=Object.assign({},o);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,r=a[e];void 0===r&&D.call(c,n)||(t.repeat?c[n]=r?r.split(t.delimiter).map(z):[]:c[n]=r?z(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:c}}(c,t,!u,r,o)))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&u)for(;a<u.length;){if(!s){const r=u[a];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),s=B(r,t.substr(o),n,i.keys,i.params)}const r=s.next(l);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function $(e){if(f(e.route.action))return e.route.action(e)}M.set("|false",{keys:[],pattern:/(?:)/});class V{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||$,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){u(e);const t=[...r(e)];this.root.__children=t}addRoutes(e){return u(e),this.root.__children.push(...r(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,g(e)?{pathname:e}:e),n=B(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,s=t;function a(e,c=o.value.route,l){const u=null===l&&o.value.route;return o=i||n.next(u),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if((n=n.parent)===e)return!0;return!1}(c,o.value.route)?o.done?Promise.reject(m(t)):(function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};!function(e,t){return!t.parent||!e||!e.length||e[e.length-1].route!==t.parent}(e.chain,n)?e.chain.push(t):e.chain=[t]}}(t,o.value),s=Object.assign({},t,o.value),Promise.resolve(r(s)).then(t=>null!=t&&t!==v?(s.result=t.result||t,s):a(e,c,t))):(i=o,Promise.resolve(v))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}V.pathToRegexp=w;const{pathToRegexp:G}=V,F=new Map;function H(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function W(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}function K(e,t={}){if(!(e instanceof V))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=H(n,r);if(!(i||(n.clear(),function e(t,n,r){const o=n.name||n.component;if(o&&(t.has(o)?t.get(o).push(n):t.set(o,[n])),Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];i.parent=n,e(t,i,i.__children||i.children)}}(n,e.root,e.root.__children),i=H(n,r))))throw new Error(`Route "${r}" not found`);let s=F.get(i.fullPath);if(!s){let e=W(i),t=i.parent;for(;t;){const n=W(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=G.parse(e),r=G.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)g(n[e])||(o[n[e].name]=!0);s={toPath:r,keys:o},F.set(e,s),i.fullPath=e}let a=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];s.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let q=[];function J(e){q.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),q=e}const X=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},Y=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function Z(e,t){return e.classList.add(t),new Promise(n=>{if(X(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),Y(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const Q=256;function ee(e){return null!=e}function te({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:s},a){const c=r.map(e=>e.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:a||c.length&&c[c.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>se(ce.pathToRegexp.compile(ae(c))(Object.assign({},o,e)),s)}}function ne(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function re(e,t,n){if(f(e))return e.apply(n,t)}function oe(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?re(n[e],t,n):void 0}function ie(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function se(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ae(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class ce extends V{constructor(e,t){const n=document.head.querySelector("base");super([],Object.assign({baseUrl:n&&n.getAttribute("href")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const r=ce.NavigationTrigger;ce.setTriggers.apply(ce,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=te({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();f(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{ee(e)||f(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!h(e))throw new Error(o(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=r(e);for(let e=0;e<n.length;e++)l(n[e]),t.__children.push(n[e])}(e,t)}));const i={redirect:t=>ne(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return re(t.action,[e,i],t)}).then(e=>ee(e)&&(e instanceof HTMLElement||e.redirect||e===v)?e:g(t.redirect)?i.redirect(t.redirect):t.bundle?function(e){return g(e)?d(e):Promise.race(a.filter(t=>t in e).map(t=>d(e[t],t)))}(t.bundle).then(()=>{},()=>{throw new Error(o(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0).then(e=>ee(e)?e:g(t.component)?i.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},g(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const n=this.__previousContext;if(e===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=te(e),p("location-changed",{router:this,location:this.location}),t&&this.__updateBrowserHistory(e,e.redirectFrom),e.__skipAttach)return this.__copyUnchangedElements(e,n),this.__previousContext=e,this.location;this.__addAppearingContent(e,n);const r=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,n),r.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ie(this.__outlet&&this.__outlet.children),this.location=te(Object.assign(r,{resolver:this})),p("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e;return n.next().then(e=>{if(null===e||e===v){if(se(ae(n.chain),n.resolver)!==n.pathname)throw m(r)}return e&&e!==v?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=te(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(o(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),s=t=>ne(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=r.length-1;s>=0;s--)n[s].path===r[s].path&&e.search===t.search||(o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[s]));for(let a=0;a<r.length;a++)n[a].path===r[a].path&&e.search===t.search||(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[a])),n[a].element.location=te(e,n[a].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}for(let t=e.__divergedChainIndex;!e.__skipAttach&&t<r.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[t]);return o.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=te(t);return e.then(e=>{if(this.__isLatestRender(t)){return oe("onBeforeLeave",[o,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const o=te(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return oe("onBeforeEnter",[o,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Q)throw new Error(o(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(o(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&ie(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ie(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=te(e);re(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ie(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=te(e,e.chain[t].route);re(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&n&&i){const e=h(i)&&i.leave||"leaving",o=h(i)&&i.enter||"entering";r.push(Z(t,e)),r.push(Z(n,o))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;g(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){J(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=K(this)),se(this.__urlForName(e,t),this)}urlForPath(e,t){return se(ce.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=g(e)?this.__createUrl(e,"http://a"):e;return p("go",{pathname:t,search:n,hash:r})}}const le=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ue=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function de(e,t){if("function"!=typeof e)return;const n=le.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const pe=function(e,t){if(window.Vaadin.developmentMode)return de(e,t)};function he(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ue?!function(){if(ue){if(Object.keys(ue).map(e=>ue[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!de((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.5.0"}),pe(he),ce.NavigationTrigger={POPSTATE:S,CLICK:b};n(4);
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
 */const fe=new WeakMap,ge=e=>"function"==typeof e&&fe.has(e),me=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,ve=(e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}},ye=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},be={},_e={},Se=`{{lit-${String(Math.random()).slice(2)}}}`,we=`\x3c!--${Se}--\x3e`,xe=new RegExp(`${Se}|${we}`),Ee="$lit$";class Oe{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let i=0,s=-1,a=0;const{strings:c,values:{length:l}}=e;for(;a<l;){const e=o.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)Ce(t[e].name,Ee)&&r++;for(;r-- >0;){const t=c[a],n=Ie.exec(t)[2],r=n.toLowerCase()+Ee,o=e.getAttribute(r);e.removeAttribute(r);const i=o.split(xe);this.parts.push({type:"attribute",index:s,name:n,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Se)>=0){const r=e.parentNode,o=t.split(xe),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=ke();else{const e=Ie.exec(i);null!==e&&Ce(e[2],Ee)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-Ee.length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===o[i]?(r.insertBefore(ke(),e),n.push(e)):e.data=o[i],a+=i}}else if(8===e.nodeType)if(e.data===Se){const t=e.parentNode;null!==e.previousSibling&&s!==i||(s++,t.insertBefore(ke(),e)),i=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Se,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const Ce=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},Ne=e=>-1!==e.index,ke=()=>document.createComment(""),Ie=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class Te{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=me?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,i=0,s=0,a=r.nextNode();for(;i<n.length;)if(o=n[i],Ne(o)){for(;s<o.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),r.currentNode=a.content),null===(a=r.nextNode())&&(r.currentNode=t.pop(),a=r.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));i++}else this.__parts.push(void 0),i++;return me&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const Ae=` ${Se} `;class Pe{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const i=Ie.exec(e);t+=null===i?e+(n?Ae:we):e.substr(0,i.index)+i[1]+i[2]+Ee+i[3]+Se}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Re extends Pe{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),ve(t,n.firstChild),e}}
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
 */const je=e=>null===e||!("object"==typeof e||"function"==typeof e),Le=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Ue{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new De(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(je(e)||!Le(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class De{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===be||je(e)&&e===this.value||(this.value=e,ge(e)||(this.committer.dirty=!0))}commit(){for(;ge(this.value);){const e=this.value;this.value=be,e(this)}this.value!==be&&this.committer.commit()}}class Me{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ke()),this.endNode=e.appendChild(ke())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ke()),e.__insert(this.endNode=ke())}insertAfterPart(e){e.__insert(this.startNode=ke()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;ge(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=be,e(this)}const e=this.__pendingValue;e!==be&&(je(e)?e!==this.value&&this.__commitText(e):e instanceof Pe?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Le(e)?this.__commitIterable(e):e===_e?(this.value=_e,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Te&&this.value.template===t)this.value.update(e.values);else{const n=new Te(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Me(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){ye(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ze{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;ge(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=be,e(this)}if(this.__pendingValue===be)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=be}}class Be extends Ue{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new $e(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class $e extends De{}let Ve=!1;try{const e={get capture(){return Ve=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Ge{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;ge(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=be,e(this)}if(this.__pendingValue===be)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=Fe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=be}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Fe=e=>e&&(Ve?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const He=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new Be(e,t.slice(1),n).parts}return"@"===o?[new Ge(e,t.slice(1),r.eventContext)]:"?"===o?[new ze(e,t.slice(1),n)]:new Ue(e,t,n).parts}handleTextExpression(e){return new Me(e)}};
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
 */function We(e){let t=Ke.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ke.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Se);return void 0===(n=t.keyString.get(r))&&(n=new Oe(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Ke=new Map,qe=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const Je=(e,...t)=>new Pe(e,t,"html",He),Xe=(e,...t)=>new Re(e,t,"svg",He),Ye=133;function Ze(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,Ye,null,!1);let i=et(r),s=r[i],a=-1,c=0;const l=[];let u=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-c,s=r[i=et(r,i)]}l.forEach(e=>e.parentNode.removeChild(e))}const Qe=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,Ye,null,!1);for(;n.nextNode();)t++;return t},et=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Ne(t))return n}return-1};
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
const tt=(e,t)=>`${e}--${t}`;let nt=!0;void 0===window.ShadyCSS?nt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),nt=!1);const rt=e=>t=>{const n=tt(t.type,e);let r=Ke.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Ke.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Se);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();nt&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Oe(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o},ot=["html","svg"],it=new Set,st=(e,t,n)=>{it.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{ot.forEach(t=>{const n=Ke.get(tt(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),Ze(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,Ye,null,!1);let s=et(o),a=0,c=-1;for(;i.nextNode();){for(c++,i.currentNode===n&&(a=Qe(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=et(o,s);return}s=et(o,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),Ze(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const at={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ct=(e,t)=>t!==e&&(t==t||e==e),lt={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:ct},ut=Promise.resolve(!0),dt=1,pt=4,ht=8,ft=16,gt=32,mt="finalized";class vt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=ut,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=lt){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(mt)||e.finalize(),this[mt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=ct){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||at,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||at.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|gt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=lt){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|ht,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=this._updateState&~ht}}_attributeToProperty(e,t){if(this._updateState&ht)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||lt;this._updateState=this._updateState|ft,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ft}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r._classProperties.get(e)||lt;r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||this._updateState&ft||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|pt;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&gt}get _hasRequestedUpdate(){return this._updateState&pt}get hasUpdated(){return this._updateState&dt}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&dt||(this._updateState=this._updateState|dt,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~pt}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}vt[mt]=!0;
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
const yt=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),bt=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),_t=(e,t,n)=>{t.constructor.createProperty(n,e)};function St(e){return(t,n)=>void 0!==n?_t(e,t,n):bt(e,t)}function wt(e){return(t,n)=>{const r={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?xt(r,t,n):Et(r,t)}}const xt=(e,t,n)=>{Object.defineProperty(t,n,e)},Et=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),Ot="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol();class Nt{constructor(e,t){if(t!==Ct)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const kt=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof Nt)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new Nt(n,Ct)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const It=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,o=t.length;r<o;r++){const o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e);class Tt extends vt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){It(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ot?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof Pe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}Tt.finalized=!0,Tt.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=qe.has(t),i=nt&&11===t.nodeType&&!!t.host,s=i&&!it.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=qe.get(t);void 0===r&&(ye(t,t.firstChild),qe.set(t,r=new Me(Object.assign({templateFactory:We},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:rt(r)},n)),s){const e=qe.get(a);qe.delete(a);const n=e.value instanceof Te?e.value.template:void 0;st(r,a,n),ye(t,t.firstChild),t.appendChild(a),qe.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)};
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const At=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}});
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
var Pt,Rt=n(0),jt=n(2);function Lt(){let e=null;return t=>n=>r=>{switch(r.type){case Pt.SOCKETS_CONNECT:null!==e&&(console.log("SOCKETS_DISCONNECTING"),t.dispatch(Wo()),e.close()),console.log("SOCKETS_CONNECTING"),e=new WebSocket("ws://localhost:7072/v1/ws/private"),t.dispatch(Ho()),e.onmessage=((e,t)=>e=>{const n=e.data;t.dispatch(Jo(n))})(0,t),e.onclose=(e=>t=>{console.log("WS is onClose"),console.log("evt "+t.data),e.dispatch(Ko())})(t),e.onopen=(e=>t=>{console.log("WS is onOpen"),console.log("token "+e),console.log("evt "+t.data)})(r.token);break;case Pt.SOCKETS_DISCONNECT:null!==e&&(console.log("SOCKETS_DISCONNECTING"),t.dispatch(Wo()),e.close()),e=null;break;case Pt.SOCKETS_MESSAGE_SEND:console.log("There"),e.send(r.message_send),t.dispatch(qo(JSON.stringify(r.message_send)));break;default:return n(r)}}}!function(e){e.SOCKETS_CONNECTING="SOCKETS_CONNECTING",e.SOCKETS_CONNECT="SOCKETS_CONNECT",e.SOCKETS_DISCONNECTING="SOCKETS_DISCONNECTING",e.SOCKETS_DISCONNECT="SOCKETS_DISCONNECT",e.SOCKETS_MESSAGE_SENDING="SOCKETS_MESSAGE_SENDING",e.SOCKETS_MESSAGE_SEND="SOCKETS_MESSAGE_SEND",e.SOCKETS_MESSAGE_RECEIVING="SOCKETS_MESSAGE_RECEIVING",e.SOCKETS_MESSAGE_RECEIVE="SOCKETS_MESSAGE_RECEIVE"}(Pt||(Pt={}));var Ut=function(e){return"@@redux-saga/"+e},Dt=Ut("CANCEL_PROMISE"),Mt=Ut("CHANNEL_END"),zt=Ut("IO"),Bt=Ut("MATCH"),$t=Ut("MULTICAST"),Vt=Ut("SAGA_ACTION"),Gt=Ut("SELF_CANCELLATION"),Ft=Ut("TASK"),Ht=Ut("TASK_CANCEL"),Wt=Ut("TERMINATE"),Kt=Ut("LOCATION");function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Jt=function(e){return null==e},Xt=function(e){return null!=e},Yt=function(e){return"function"==typeof e},Zt=function(e){return"string"==typeof e},Qt=Array.isArray,en=function(e){return e&&Yt(e.then)},tn=function(e){return e&&Yt(e.next)&&Yt(e.throw)},nn=function e(t){return t&&(Zt(t)||sn(t)||Yt(t)||Qt(t)&&t.every(e))},rn=function(e){return e&&Yt(e.take)&&Yt(e.close)},on=function(e){return Yt(e)&&e.hasOwnProperty("toString")},sn=function(e){return Boolean(e)&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype},an=function(e){return rn(e)&&e[$t]};var cn=function(e){return function(){return e}}(!0),ln=function(){};var un=function(e){return e};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var dn=function(e,t){qt(e,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(n){e[n]=t[n]}))},pn=function(e,t){var n;return(n=[]).concat.apply(n,t.map(e))};function hn(e,t){var n=e.indexOf(t);n>=0&&e.splice(n,1)}function fn(e){var t=!1;return function(){t||(t=!0,e())}}var gn=function(e){throw e},mn=function(e){return{value:e,done:!0}};function vn(e,t,n){void 0===t&&(t=gn),void 0===n&&(n="iterator");var r={meta:{name:n},next:e,throw:t,return:mn,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function yn(e,t){var n=t.sagaStack;console.error(e),console.error(n)}var bn=function(e){return Array.apply(null,new Array(e))},_n=function(e){return function(t){return e(Object.defineProperty(t,Vt,{value:!0}))}},Sn=function(e){return e===Wt},wn=function(e){return e===Ht},xn=function(e){return Sn(e)||wn(e)};function En(e,t){var n=Object.keys(e),r=n.length;var o,i=0,s=Qt(e)?bn(r):{},a={};return n.forEach((function(e){var n=function(n,a){o||(a||xn(n)?(t.cancel(),t(n,a)):(s[e]=n,++i===r&&(o=!0,t(s))))};n.cancel=ln,a[e]=n})),t.cancel=function(){o||(o=!0,n.forEach((function(e){return a[e].cancel()})))},a}function On(e){return{name:e.name||"anonymous",location:Cn(e)}}function Cn(e){return e[Kt]}var Nn="Channel's Buffer overflow!",kn=1,In=3,Tn=4,An={isEmpty:cn,put:ln,take:ln};function Pn(e,t){void 0===e&&(e=10);var n=new Array(e),r=0,o=0,i=0,s=function(t){n[o]=t,o=(o+1)%e,r++},a=function(){if(0!=r){var t=n[i];return n[i]=null,r--,i=(i+1)%e,t}},c=function(){for(var e=[];r;)e.push(a());return e};return{isEmpty:function(){return 0==r},put:function(a){var l;if(r<e)s(a);else switch(t){case kn:throw new Error(Nn);case In:n[o]=a,i=o=(o+1)%e;break;case Tn:l=2*e,n=c(),r=n.length,o=n.length,i=0,n.length=l,e=l,s(a)}},take:a,flush:c}}var Rn=function(){return An},jn=function(e){return Pn(e,Tn)},Ln="TAKE",Un="PUT",Dn="ALL",Mn="RACE",zn="CALL",Bn="CPS",$n="FORK",Vn="JOIN",Gn="CANCEL",Fn="SELECT",Hn="ACTION_CHANNEL",Wn="CANCELLED",Kn="FLUSH",qn="GET_CONTEXT",Jn="SET_CONTEXT",Xn=function(e,t){var n;return(n={})[zt]=!0,n.combinator=!1,n.type=e,n.payload=t,n};function Yn(e,t){return void 0===e&&(e="*"),nn(e)?Xn(Ln,{pattern:e}):an(e)&&Xt(t)&&nn(t)?Xn(Ln,{channel:e,pattern:t}):rn(e)?Xn(Ln,{channel:e}):void 0}function Zn(e,t){return Jt(t)&&(t=e,e=void 0),Xn(Un,{channel:e,action:t})}function Qn(e,t){var n,r=null;return Yt(e)?n=e:(Qt(e)?(r=e[0],n=e[1]):(r=e.context,n=e.fn),r&&Zt(n)&&Yt(r[n])&&(n=r[n])),{context:r,fn:n,args:t}}function er(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xn(zn,Qn(e,n))}function tr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xn($n,Qn(e,n))}function nr(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}var rr=nr,or=[],ir=0;function sr(e){try{lr(),e()}finally{ur()}}function ar(e){or.push(e),ir||(lr(),dr())}function cr(e){try{return lr(),e()}finally{dr()}}function lr(){ir++}function ur(){ir--}function dr(){var e;for(ur();!ir&&void 0!==(e=or.shift());)sr(e)}var pr=function(e){return function(t){return e.some((function(e){return vr(e)(t)}))}},hr=function(e){return function(t){return e(t)}},fr=function(e){return function(t){return t.type===String(e)}},gr=function(e){return function(t){return t.type===e}},mr=function(){return cn};function vr(e){var t="*"===e?mr:Zt(e)?fr:Qt(e)?pr:on(e)?fr:Yt(e)?hr:sn(e)?gr:null;if(null===t)throw new Error("invalid pattern: "+e);return t(e)}var yr={type:Mt},br=function(e){return e&&e.type===Mt};function _r(e){void 0===e&&(e=jn());var t=!1,n=[];return{take:function(r){t&&e.isEmpty()?r(yr):e.isEmpty()?(n.push(r),r.cancel=function(){hn(n,r)}):r(e.take())},put:function(r){if(!t){if(0===n.length)return e.put(r);n.shift()(r)}},flush:function(n){t&&e.isEmpty()?n(yr):n(e.flush())},close:function(){if(!t){t=!0;var e=n;n=[];for(var r=0,o=e.length;r<o;r++){(0,e[r])(yr)}}}}}function Sr(){var e,t,n,r,o,i,s=(t=!1,r=n=[],o=function(){r===n&&(r=n.slice())},i=function(){t=!0;var e=n=r;r=[],e.forEach((function(e){e(yr)}))},(e={})[$t]=!0,e.put=function(e){if(!t)if(br(e))i();else for(var o=n=r,s=0,a=o.length;s<a;s++){var c=o[s];c[Bt](e)&&(c.cancel(),c(e))}},e.take=function(e,n){void 0===n&&(n=mr),t?e(yr):(e[Bt]=n,o(),r.push(e),e.cancel=fn((function(){o(),hn(r,e)})))},e.close=i,e),a=s.put;return s.put=function(e){e[Vt]?a(e):ar((function(){a(e)}))},s}var wr=0,xr=1,Er=2,Or=3;function Cr(e,t){var n=e[Dt];Yt(n)&&(t.cancel=n),e.then(t,(function(e){t(e,!0)}))}var Nr,kr=0,Ir=function(){return++kr};function Tr(e){e.isRunning()&&e.cancel()}var Ar=((Nr={})[Ln]=function(e,t,n){var r=t.channel,o=void 0===r?e.channel:r,i=t.pattern,s=t.maybe,a=function(e){e instanceof Error?n(e,!0):!br(e)||s?n(e):n(Wt)};try{o.take(a,Xt(i)?vr(i):null)}catch(e){return void n(e,!0)}n.cancel=a.cancel},Nr[Un]=function(e,t,n){var r=t.channel,o=t.action,i=t.resolve;ar((function(){var t;try{t=(r?r.put:e.dispatch)(o)}catch(e){return void n(e,!0)}i&&en(t)?Cr(t,n):n(t)}))},Nr[Dn]=function(e,t,n,r){var o=r.digestEffect,i=kr,s=Object.keys(t);if(0!==s.length){var a=En(t,n);s.forEach((function(e){o(t[e],i,a[e],e)}))}else n(Qt(t)?[]:{})},Nr[Mn]=function(e,t,n,r){var o=r.digestEffect,i=kr,s=Object.keys(t),a=Qt(t)?bn(s.length):{},c={},l=!1;s.forEach((function(e){var t=function(t,r){l||(r||xn(t)?(n.cancel(),n(t,r)):(n.cancel(),l=!0,a[e]=t,n(a)))};t.cancel=ln,c[e]=t})),n.cancel=function(){l||(l=!0,s.forEach((function(e){return c[e].cancel()})))},s.forEach((function(e){l||o(t[e],i,c[e],e)}))},Nr[zn]=function(e,t,n,r){var o=t.context,i=t.fn,s=t.args,a=r.task;try{var c=i.apply(o,s);if(en(c))return void Cr(c,n);if(tn(c))return void $r(e,c,a.context,kr,On(i),!1,n);n(c)}catch(e){n(e,!0)}},Nr[Bn]=function(e,t,n){var r=t.context,o=t.fn,i=t.args;try{var s=function(e,t){Jt(e)?n(t):n(e,!0)};o.apply(r,i.concat(s)),s.cancel&&(n.cancel=s.cancel)}catch(e){n(e,!0)}},Nr[$n]=function(e,t,n,r){var o=t.context,i=t.fn,s=t.args,a=t.detached,c=r.task,l=function(e){var t=e.context,n=e.fn,r=e.args;try{var o=n.apply(t,r);if(tn(o))return o;var i=!1;return vn((function(e){return i?{value:e,done:!0}:(i=!0,{value:o,done:!en(o)})}))}catch(e){return vn((function(){throw e}))}}({context:o,fn:i,args:s}),u=function(e,t){return e.isSagaIterator?{name:e.meta.name}:On(t)}(l,i);cr((function(){var t=$r(e,l,c.context,kr,u,a,void 0);a?n(t):t.isRunning()?(c.queue.addTask(t),n(t)):t.isAborted()?c.queue.abort(t.error()):n(t)}))},Nr[Vn]=function(e,t,n,r){var o=r.task,i=function(e,t){if(e.isRunning()){var n={task:o,cb:t};t.cancel=function(){e.isRunning()&&hn(e.joiners,n)},e.joiners.push(n)}else e.isAborted()?t(e.error(),!0):t(e.result())};if(Qt(t)){if(0===t.length)return void n([]);var s=En(t,n);t.forEach((function(e,t){i(e,s[t])}))}else i(t,n)},Nr[Gn]=function(e,t,n,r){var o=r.task;t===Gt?Tr(o):Qt(t)?t.forEach(Tr):Tr(t),n()},Nr[Fn]=function(e,t,n){var r=t.selector,o=t.args;try{n(r.apply(void 0,[e.getState()].concat(o)))}catch(e){n(e,!0)}},Nr[Hn]=function(e,t,n){var r=t.pattern,o=_r(t.buffer),i=vr(r),s=function t(n){br(n)||e.channel.take(t,i),o.put(n)},a=o.close;o.close=function(){s.cancel(),a()},e.channel.take(s,i),n(o)},Nr[Wn]=function(e,t,n,r){n(r.task.isCancelled())},Nr[Kn]=function(e,t,n){t.flush(n)},Nr[qn]=function(e,t,n,r){n(r.task.context[t])},Nr[Jn]=function(e,t,n,r){var o=r.task;dn(o.context,t),n()},Nr);function Pr(e,t){return e+"?"+t}function Rr(e){var t=e.name,n=e.location;return n?t+"  "+Pr(n.fileName,n.lineNumber):t}var jr=null,Lr=[],Ur=function(e){e.crashedEffect=jr,Lr.push(e)},Dr=function(){jr=null,Lr.length=0},Mr=function(e){jr=e},zr=function(){var e,t,n,r,o=Lr[0],i=Lr.slice(1),s=o.crashedEffect?(e=o.crashedEffect,(t=Cn(e))?t.code+"  "+Pr(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+Rr(o.meta)+(s?" \n when executing effect "+s:"")].concat(i.map((function(e){return"    created by "+Rr(e.meta)})),[(n=Lr,r=pn((function(e){return e.cancelledTasks}),n),r.length?["Tasks cancelled due to error:"].concat(r).join("\n"):"")]).join("\n")};function Br(e,t,n,r,o,i,s){var a;void 0===s&&(s=ln);var c,l,u=wr,d=null,p=[],h=Object.create(n),f=function(e,t,n){var r,o=[],i=!1;function s(e){t(),c(),n(e,!0)}function a(t){o.push(t),t.cont=function(a,c){i||(hn(o,t),t.cont=ln,c?s(a):(t===e&&(r=a),o.length||(i=!0,n(r))))}}function c(){i||(i=!0,o.forEach((function(e){e.cont=ln,e.cancel()})),o=[])}return a(e),{addTask:a,cancelAll:c,abort:s,getTasks:function(){return o}}}(t,(function(){p.push.apply(p,f.getTasks().map((function(e){return e.meta.name})))}),g);function g(t,n){if(n){if(u=Er,Ur({meta:o,cancelledTasks:p}),m.isRoot){var r=zr();Dr(),e.onError(t,{sagaStack:r})}l=t,d&&d.reject(t)}else t===Ht?u=xr:u!==xr&&(u=Or),c=t,d&&d.resolve(t);m.cont(t,n),m.joiners.forEach((function(e){e.cb(t,n)})),m.joiners=null}var m=((a={})[Ft]=!0,a.id=r,a.meta=o,a.isRoot=i,a.context=h,a.joiners=[],a.queue=f,a.cancel=function(){u===wr&&(u=xr,f.cancelAll(),g(Ht,!1))},a.cont=s,a.end=g,a.setContext=function(e){dn(h,e)},a.toPromise=function(){return d?d.promise:(d=rr(),u===Er?d.reject(l):u!==wr&&d.resolve(c),d.promise)},a.isRunning=function(){return u===wr},a.isCancelled=function(){return u===xr||u===wr&&t.status===xr},a.isAborted=function(){return u===Er},a.result=function(){return c},a.error=function(){return l},a);return m}function $r(e,t,n,r,o,i,s){var a=e.finalizeRunEffect((function(t,n,r){if(en(t))Cr(t,r);else if(tn(t))$r(e,t,l.context,n,o,!1,r);else if(t&&t[zt]){(0,Ar[t.type])(e,t.payload,r,u)}else r(t)}));d.cancel=ln;var c={meta:o,cancel:function(){c.status===wr&&(c.status=xr,d(Ht))},status:wr},l=Br(e,c,n,r,o,i,s),u={task:l,digestEffect:p};return s&&(s.cancel=l.cancel),d(),l;function d(e,n){try{var o;n?(o=t.throw(e),Dr()):wn(e)?(c.status=xr,d.cancel(),o=Yt(t.return)?t.return(Ht):{done:!0,value:Ht}):o=Sn(e)?Yt(t.return)?t.return():{done:!0}:t.next(e),o.done?(c.status!==xr&&(c.status=Or),c.cont(o.value)):p(o.value,r,d)}catch(e){if(c.status===xr)throw e;c.status=Er,c.cont(e,!0)}}function p(t,n,r,o){void 0===o&&(o="");var i,s=Ir();function c(n,o){i||(i=!0,r.cancel=ln,e.sagaMonitor&&(o?e.sagaMonitor.effectRejected(s,n):e.sagaMonitor.effectResolved(s,n)),o&&Mr(t),r(n,o))}e.sagaMonitor&&e.sagaMonitor.effectTriggered({effectId:s,parentEffectId:n,label:o,effect:t}),c.cancel=ln,r.cancel=function(){i||(i=!0,c.cancel(),c.cancel=ln,e.sagaMonitor&&e.sagaMonitor.effectCancelled(s))},a(t,s,c)}}function Vr(e,t){var n=e.channel,r=void 0===n?Sr():n,o=e.dispatch,i=e.getState,s=e.context,a=void 0===s?{}:s,c=e.sagaMonitor,l=e.effectMiddlewares,u=e.onError,d=void 0===u?yn:u;for(var p=arguments.length,h=new Array(p>2?p-2:0),f=2;f<p;f++)h[f-2]=arguments[f];var g=t.apply(void 0,h);var m,v=Ir();if(c&&(c.rootSagaStarted=c.rootSagaStarted||ln,c.effectTriggered=c.effectTriggered||ln,c.effectResolved=c.effectResolved||ln,c.effectRejected=c.effectRejected||ln,c.effectCancelled=c.effectCancelled||ln,c.actionDispatched=c.actionDispatched||ln,c.rootSagaStarted({effectId:v,saga:t,args:h})),l){var y=Rt.compose.apply(void 0,l);m=function(e){return function(t,n,r){return y((function(t){return e(t,n,r)}))(t)}}}else m=un;var b={channel:r,dispatch:_n(o),getState:i,sagaMonitor:c,onError:d,finalizeRunEffect:m};return cr((function(){var e=$r(b,g,a,v,On(t),!0,void 0);return c&&c.effectResolved(v,e),e}))}var Gr=function(e){void 0===e&&(e={});var t,n=e,r=n.context,o=void 0===r?{}:r,i=n.channel,s=void 0===i?Sr():i,a=n.sagaMonitor,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["context","channel","sagaMonitor"]);function l(e){var n=e.getState,r=e.dispatch;return t=Vr.bind(null,qt({},c,{context:o,channel:s,dispatch:r,getState:n,sagaMonitor:a})),function(e){return function(t){a&&a.actionDispatched&&a.actionDispatched(t);var n=e(t);return s.put(t),n}}}return l.run=function(){return t.apply(void 0,arguments)},l.setContext=function(e){dn(o,e)},l};var Fr,Hr=({getState:e,dispatch:t})=>e=>t=>{e(t)};!function(e){e.SUBMIT="SIGNUP_SUBMIT",e.SUBMIT_SUCCESS="SIGNUP_SUBMIT_SUCCESS",e.SUBMIT_FAIL="SIGNUP_SUBMIT_FAIL"}(Fr||(Fr={}));const Wr={data:{api:"",uuid:""},isLoading:!1};var Kr;!function(e){e.SESSION_SIGNIN="SESSION_SIGNIN",e.SESSION_SIGNIN_SUCCESS="SESSION_SIGNIN_SUCCESS",e.SESSION_SIGNIN_FAIL="SESSION_SIGNIN_FAIL",e.SESSION_SIGNOUT="SESSION_SIGNOUT",e.SESSION_SIGNOUT_SUCCESS="SESSION_SIGNOUT_SUCCESS",e.SESSION_SIGNOUT_FAIL="SESSION_SIGNOUT_FAIL"}(Kr||(Kr={}));const qr={session:{live:!1,email:""},isLoading:!1};var Jr;!function(e){e.TOGGLE="LAUNCHER_TOGGLE",e.SHOW="LAUNCHER_SHOW",e.HIDE="LAUNCHER_HIDE",e.SHOWN="LAUNCHER_SHOWN",e.HIDDEN="LAUNCHER_HIDDEN"}(Jr||(Jr={}));const Xr=()=>({type:Jr.HIDE}),Yr={isVisible:!1};const Zr={loaded:!1,message:"Just created",connected:!1,history:[],message_history:[]};const Qr={applications:{"e9a30119-d673-4978-b393-f608fe28ae07":{uuid:"e9a30119-d673-4978-b393-f608fe28ae07",title:"Home",type:"system",componentTag:"",default:!1,path:""},"54789c07-bb43-4db4-8b2d-1a8e1f8c67f1":{uuid:"54789c07-bb43-4db4-8b2d-1a8e1f8c67f1",title:"Desktop",type:"system",componentTag:"",default:!1,path:""},"c178025e-a209-4c50-8c34-36d35f36494c":{uuid:"c178025e-a209-4c50-8c34-36d35f36494c",title:"Sign in",type:"system",componentTag:"",default:!1,path:"signin"},"437642dd-7d74-4213-af76-b51fc24eff0":{uuid:"437642dd-7d74-4213-af76-b51fc24eff0",title:"Sign up",type:"system",componentTag:"",default:!1,path:"signup"},"5a2192a0-0051-46a1-85e7-17245ba24f55":{uuid:"5a2192a0-0051-46a1-85e7-17245ba24f55",title:"Restore Password",type:"system",componentTag:"",default:!1,path:"restore-password"},"59728db5-8284-42c5-8731-bdec7adab8d8":{uuid:"59728db5-8284-42c5-8731-bdec7adab8d8",title:"Shipping",type:"user",componentTag:"app-shipping",default:!0,path:"shipping"},"3096aa1f-a6ce-4130-8147-66f4bea35e16":{uuid:"3096aa1f-a6ce-4130-8147-66f4bea35e16",title:"Shipping Project",type:"user",componentTag:"app-shipping-project",default:!1,path:"shipping/project"},"c80626f6-2974-4091-813c-f217ce0b44d6":{uuid:"c80626f6-2974-4091-813c-f217ce0b44d6",title:"Accounts",type:"user",componentTag:"app-accounts",default:!1,path:"accounts"},"52386006-bf4a-4ddf-927c-41c395e877f5":{uuid:"52386006-bf4a-4ddf-927c-41c395e877f5",title:"Sales",type:"user",componentTag:"app-sales",default:!1,path:"sales"},"0e35396c-7a32-4b2f-8759-d1b09b9fce2c":{uuid:"0e35396c-7a32-4b2f-8759-d1b09b9fce2c",title:"Accounting",type:"user",componentTag:"app-accounting",default:!1,path:"accounting"}},publicApplications:["59728db5-8284-42c5-8731-bdec7adab8d8","3096aa1f-a6ce-4130-8147-66f4bea35e16","c80626f6-2974-4091-813c-f217ce0b44d6","52386006-bf4a-4ddf-927c-41c395e877f5","0e35396c-7a32-4b2f-8759-d1b09b9fce2c"],modules:{"71e3c25b-cce6-4256-8f3a-92e2f19cbf0d":{title:"Dashboard",application:"59728db5-8284-42c5-8731-bdec7adab8d8"},"21d416b5-72d5-4a8d-95ed-a5bba9d9155e":{title:"Projects",application:"59728db5-8284-42c5-8731-bdec7adab8d8"},"d4f2eda9-15ec-4a28-bdd6-f07ce116a5f4":{title:"Orders",application:"59728db5-8284-42c5-8731-bdec7adab8d8"},"5bcbfc1c-9cc3-433f-b4be-20104a36d104":{title:"Dashboard",application:"3096aa1f-a6ce-4130-8147-66f4bea35e16"},"c9b4baef-d339-4588-8436-050fbbe6b872":{title:"Dispatch",application:"3096aa1f-a6ce-4130-8147-66f4bea35e16"},"6b114c0f-0dcb-4e50-a6f7-361d65127cfd":{title:"Kanban",application:"3096aa1f-a6ce-4130-8147-66f4bea35e16"}},wsConnected:!1};var eo;!function(e){e.LOAD="WAYBILLS_LOAD",e.LOAD_SUCCESS="WAYBILLS_LOAD_SUCCESS",e.LOAD_FAIL="WAYBILLS_LOAD_FAIL",e.SELECT="WAYBILLS_SELECT"}(eo||(eo={}));const to={data:{},page:1,selectedWaybills:[],lastSelectedWaybill:""};var no=Object(Rt.combineReducers)({signup:(e=Wr,t)=>{switch(t.type){case Fr.SUBMIT:return{...e,isLoading:!0};case Fr.SUBMIT_SUCCESS:return{...e,data:t.payload,isLoading:!1};case Fr.SUBMIT_FAIL:default:return e}},session:(e=qr,t)=>{switch(t.type){case Kr.SESSION_SIGNIN:return console.log(t.payload),{...e,isLoading:!0};case Kr.SESSION_SIGNIN_SUCCESS:return{...e,session:t.payload,isLoading:!1};case Kr.SESSION_SIGNIN_FAIL:return e;case Kr.SESSION_SIGNOUT:return{...e,isLoading:!0};case Kr.SESSION_SIGNOUT_SUCCESS:return{...e,session:t.payload,isLoading:!1};case Kr.SESSION_SIGNOUT_FAIL:default:return e}},socket:(e=Zr,t)=>{switch(t.type){case Pt.SOCKETS_CONNECTING:return Object.assign({},e,{loaded:!0,message:"Connecting...",connected:!0,history:[...e.history,{loaded:!0,message:"Connecting...",connected:!0}]});case Pt.SOCKETS_DISCONNECTING:return Object.assign({},e,{loaded:!0,message:"Disconnecting...",connected:!1,history:[...e.history,{loaded:!0,message:"Disconnecting...",connected:!1}]});case Pt.SOCKETS_MESSAGE_SENDING:return Object.assign({},e,{loaded:!0,message:"Send message",connected:!0,message_history:[...e.message_history,{direction:"->",message:t.message_send}]});case Pt.SOCKETS_MESSAGE_RECEIVING:return Object.assign({},e,{loaded:!0,message:"Message receive",connected:!0,message_history:[...e.message_history,{direction:"<-",message:t.message_receive}]});default:return e}},launcher:(e=Yr,t)=>{switch(t.type){case Jr.TOGGLE:return{...e,isVisible:!e.isVisible};case Jr.SHOW:case Jr.SHOWN:return{...e,isVisible:!0};case Jr.HIDE:case Jr.HIDDEN:return{...e,isVisible:!1};default:return e}},system:(e=Qr,t)=>(t.type,e),waybills:(e=to,t)=>{switch(t.type){case eo.LOAD:return e;case eo.LOAD_SUCCESS:return{...e,data:t.payload,page:e.page+1};case eo.LOAD_FAIL:case eo.SELECT:default:return e}}}),ro=function(e){return{done:!0,value:e}},oo={};function io(e){return rn(e)?"channel":on(e)?String(e):Yt(e)?e.name:String(e)}function so(e,t,n){var r,o,i,s=t;function a(t,n){if(s===oo)return ro(t);if(n&&!o)throw s=oo,n;r&&r(t);var a=n?e[o](n):e[s]();return s=a.nextState,i=a.effect,r=a.stateUpdater,o=a.errorState,s===oo?ro(t):i}return vn(a,(function(e){return a(null,e)}),n)}function ao(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i,s={done:!1,value:Yn(e)},a=function(e){return i=e};return so({q1:function(){return{nextState:"q2",effect:s,stateUpdater:a}},q2:function(){return{nextState:"q1",effect:(e=i,{done:!1,value:tr.apply(void 0,[t].concat(r,[e]))})};var e}},"q1","takeEvery("+io(e)+", "+t.name+")")}var co;function lo(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return tr.apply(void 0,[ao,e,t].concat(r))}!function(e){e.FETCH_APPS="FETCH_APPS",e.INITIALIZE_WEB_SOCKETS_CHANNEL="INITIALIZE_WEB_SOCKETS_CHANNEL",e.WEBSOCKET_MESSAGE_RECEIVED="WEBSOCKET_MESSAGE_RECEIVED"}(co||(co={}));const uo=e=>({type:co.WEBSOCKET_MESSAGE_RECEIVED,payload:e});function*po(e){return console.log("createEventChannel"),function(e,t){void 0===t&&(t=Rn());var n,r=!1,o=_r(t),i=function(){r||(r=!0,Yt(n)&&n(),o.close())};return n=fn(n=e((function(e){br(e)?i():o.put(e)}))),r&&n(),{take:o.take,flush:o.flush,close:i}}(t=>(e.onmessage(e=>t(e.data)),()=>{e.close()}))}function*ho(){console.log("initializeWebSocketsChannel");const e=new WebSocket("ws://localhost:7070/v1/ws/public","protocol"),t=yield er(po,e);for(;;){const{message:e}=yield Yn(t);yield Zn(uo(e))}}function*fo(){yield lo(co.INITIALIZE_WEB_SOCKETS_CHANNEL,ho)}function go(e,t){return e===t}function mo(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function vo(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var yo=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=0,s=r.pop(),a=vo(r),c=e.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(n)),l=e((function(){for(var e=[],t=a.length,n=0;n<t;n++)e.push(a[n].apply(null,arguments));return c.apply(null,e)}));return l.resultFunc=s,l.dependencies=a,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:go,n=null,r=null;return function(){return mo(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));const bo=yo([e=>e.system.applications,e=>e.system.publicApplications],(e,t)=>t.map(t=>e[t])),_o=e=>({type:Fr.SUBMIT,payload:e}),So=e=>({type:Fr.SUBMIT_SUCCESS,payload:e}),wo=e=>({type:Fr.SUBMIT_FAIL,error:e}),xo=async()=>{const e=await fetch("http://localhost:8080/v1/signup",{method:"POST",headers:{Accept:"application/json","Content-type":"text/plain"},body:JSON.stringify({api:"v1",payload:{display_name:"string",email:"string",password:"string"}})}),t=await e.json();if(e.status>=400)throw new Error(t);return t};function*Eo(){try{const e=yield er(xo);yield Zn(So(e))}catch(e){yield Zn(wo(e.toString()))}}function*Oo(){yield lo(Fr.SUBMIT,Eo)}const Co=e=>({type:Kr.SESSION_SIGNIN_SUCCESS,payload:e}),No=e=>({type:Kr.SESSION_SIGNIN_FAIL,error:e}),ko=e=>({type:Kr.SESSION_SIGNOUT_SUCCESS,payload:e}),Io=e=>({type:Kr.SESSION_SIGNOUT_FAIL,error:e}),To=async e=>{const t=await fetch("http://localhost:8082/v1/session",{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json, text/plain; charset=utf-8"},body:JSON.stringify({email:e.payload.email,password:e.payload.password})}),n=await t.json();if(t.status>=400)throw new Error(n);return n},Ao=async e=>{console.log("Signout API",e);const t=await fetch("http://localhost:8082/v1/session",{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"include",headers:{Accept:"application/json","Content-type":"application/json, text/plain; charset=utf-8"}}),n=await t.json();if(t.status>=400)throw new Error(n);return n};function*Po(e){try{const t=yield er(To,e);yield Zn(Co(t))}catch(e){yield Zn(No(e.toString()))}}function*Ro(e){try{console.log("Signout saga:",e);const t=yield er(Ao,e);yield Zn(ko(t))}catch(e){yield Zn(Io(e.toString()))}}function*jo(){yield lo(Kr.SESSION_SIGNIN,Po)}function*Lo(){yield lo(Kr.SESSION_SIGNOUT,Ro)}const Uo=yo([e=>e.session.session],e=>e),Do=e=>({type:eo.LOAD_SUCCESS,payload:e}),Mo=e=>({type:eo.LOAD_FAIL,error:e}),zo=async e=>{console.log("Orders page requested:",e);const t=await fetch("https://api.oswee.com/v1/shipping/orders/0987914d-298e-443f-ad78-acf43eb2ec08"),n=await t.json();if(t.status>=400)throw new Error(n);return n.delivery_orders.reduce((e,t)=>(e[t.uuid]=t,e),{})},Bo=e=>e.waybills.page;function*$o(){try{const e=yield function(e){void 0===e&&(e=un);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xn(Fn,{selector:e,args:n})}(Bo),t=yield er(zo,e);yield Zn(Do(t))}catch(e){yield Zn(Mo(e.toString()))}}function*Vo(){yield lo(eo.LOAD,$o)}const Go=yo([e=>e.waybills.data],e=>e);function*Fo(){yield tr(fo),yield tr(Oo),yield tr(jo),yield tr(Lo),yield tr(Vo)}const Ho=()=>({type:Pt.SOCKETS_CONNECTING}),Wo=()=>({type:Pt.SOCKETS_DISCONNECTING}),Ko=()=>({type:Pt.SOCKETS_DISCONNECT}),qo=e=>({type:Pt.SOCKETS_MESSAGE_SENDING,message_send:e}),Jo=e=>({type:Pt.SOCKETS_MESSAGE_RECEIVING,message_receive:e}),Xo=yo([e=>e.launcher],e=>e.isVisible);var Yo=(()=>{const e={name:"Redux",realtime:!0,trace:!0,traceLimit:25},t=Object(jt.composeWithDevTools)(e),n=Gr(),r=Lt(),o=[Hr,r,n],i=Object(Rt.createStore)(no,t(Object(Rt.applyMiddleware)(...o)));return n.run(Fo),i})(),Zo=kt`
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
`,Qo=kt`
	* {
		box-sizing: border-box;
	}
    :host {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
`,ei=kt`
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
`;function ti(){return Je`
		<h1 @click=${()=>this.switchRoute("")}>Oswee</h1>
		<a href="/marketplace">Marketplace</a>
		<a href="/services">Services</a>
		<a href="/organizations">Organizations</a>
		<a href="/apps/routeplanner">Route Planner</a>
		<a href="/about">About</a>
	`}var ni=kt`
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

`,ri=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let oi=class extends(At(Yo)(Tt)){render(){return ti.call(this)}switchRoute(e){ce.go(`/${e}`)}};oi.styles=[Zo,ni],oi=ri([yt("main-navigation-public")],oi);const ii=()=>Xe`
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#000" stroke-width="16" stroke-linecap="round" d="M48 104h64M16 64h64M32 24h64"/>
    </svg>
`,si=(e,t)=>{const n=e.startNode.parentNode,r=void 0===t?e.endNode:t.startNode,o=n.insertBefore(ke(),r);n.insertBefore(ke(),r);const i=new Me(e.options);return i.insertAfterNode(o),i},ai=(e,t)=>(e.setValue(t),e.commit(),e),ci=(e,t,n)=>{const r=e.startNode.parentNode,o=n?n.startNode:e.endNode,i=t.endNode.nextSibling;i!==o&&ve(r,t.startNode,i,o)},li=e=>{ye(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},ui=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},di=new WeakMap,pi=new WeakMap,hi=(e=>(...t)=>{const n=e(...t);return fe.set(n,!0),n})((e,t,n)=>{let r;return void 0===n?n=t:void 0!==t&&(r=t),t=>{if(!(t instanceof Me))throw new Error("repeat can only be used in text bindings");const o=di.get(t)||[],i=pi.get(t)||[],s=[],a=[],c=[];let l,u,d=0;for(const t of e)c[d]=r?r(t,d):d,a[d]=n(t,d),d++;let p=0,h=o.length-1,f=0,g=a.length-1;for(;p<=h&&f<=g;)if(null===o[p])p++;else if(null===o[h])h--;else if(i[p]===c[f])s[f]=ai(o[p],a[f]),p++,f++;else if(i[h]===c[g])s[g]=ai(o[h],a[g]),h--,g--;else if(i[p]===c[g])s[g]=ai(o[p],a[g]),ci(t,o[p],s[g+1]),p++,g--;else if(i[h]===c[f])s[f]=ai(o[h],a[f]),ci(t,o[h],o[p]),h--,f++;else if(void 0===l&&(l=ui(c,f,g),u=ui(i,p,h)),l.has(i[p]))if(l.has(i[h])){const e=u.get(c[f]),n=void 0!==e?o[e]:null;if(null===n){const e=si(t,o[p]);ai(e,a[f]),s[f]=e}else s[f]=ai(n,a[f]),ci(t,n,o[p]),o[e]=null;f++}else li(o[h]),h--;else li(o[p]),p++;for(;f<=g;){const e=si(t,s[g+1]);ai(e,a[f]),s[f++]=e}for(;p<=h;){const e=o[p++];null!==e&&li(e)}di.set(t,s),pi.set(t,c)}});var fi=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let gi=class extends Tt{constructor(){super(...arguments),this.title=""}static get styles(){return[kt`
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
			`]}render(){return Je`
			<h3>${this.title}</h3>
		`}connectedCallback(){super.connectedCallback()}};fi([St({type:String})],gi.prototype,"title",void 0),gi=fi([yt("app-shortcut")],gi);let mi=class extends(At(Yo)(Tt)){constructor(){super(),this.isVisible=!1,this.setWrapperRef=this.setWrapperRef.bind(this),this.handleClickOutside=this.handleClickOutside.bind(this)}static get properties(){return{isVisible:{type:Boolean},apps:{type:Array}}}stateChanged(e){this.isVisible=Xo(e),this.apps=bo(e)}static get styles(){return[kt`
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
			`]}render(){return Je`
			${hi(this.apps,e=>e.uuid,e=>Je`
					<app-shortcut
						key="${e.uuid}"
						@click=${()=>this.switchRoute(`${e.path}`)}
						title="${e.title}"
					></app-shortcut>
				`)}
		`}switchRoute(e){Yo.dispatch(Xr()),ce.go(`/${e}`)}openApp(e){console.log("Clicked:",e.target.getAttribute("key"))}changeState(){Yo.dispatch(Xr())}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.handleClickOutside),Yo.dispatch((()=>({type:Jr.SHOWN}))())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.handleClickOutside),Yo.dispatch((()=>({type:Jr.HIDDEN}))())}setWrapperRef(e){this.wrapperRef=e}handleClickOutside(e){!this.getRootNode().contains(this)||e.composedPath().includes(this)||function(e,t){if(!e||!(e.path||e.composedPath&&e.composedPath()))return!1;const n=function(e){const t=e.startsWith("."),n=e.startsWith("#");return{key:t?"className":n?"id":"",val:e.substr(1)}}(t);return(e.path||e.composedPath&&e.composedPath()).some(e=>!!e[n.key]&&e[n.key].includes(n.val))}(e,"#launcher")||Yo.dispatch(Xr())}};function vi(){return Je`
		<button @click="${this.toggleLauncher}" id="launcher" class="launcher" title="Open Launcher">
			${ii()}
		</button>
		${this.launcherIsVisible?Je`
					<main-launcher></main-launcher>
				`:""}
	`}mi=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([yt("main-launcher")],mi);var yi=kt`
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
`,bi=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let _i=class extends(At(Yo)(Tt)){constructor(){super(...arguments),this.launcherIsVisible=!1}stateChanged(e){this.launcherIsVisible=Xo(e)}render(){return vi.call(this)}toggleLauncher(){Yo.dispatch((()=>({type:Jr.TOGGLE}))())}};_i.styles=[Zo,yi],bi([St({type:Boolean})],_i.prototype,"launcherIsVisible",void 0),_i=bi([yt("main-navigation-private")],_i);var Si=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let wi=class extends(At(Yo)(Tt)){constructor(){super(...arguments),this.session={live:!1}}stateChanged(e){this.session=Uo(e)}render(){return Je`
			<nav>
				${this.session.live?Je`
						<main-navigation-private></main-navigation-private>
						<div></div>
						<button @click=${()=>this.signOut()}>Sign Out</button>
					`:Je`
						<main-navigation-public></main-navigation-public>
						<div></div>
						<button id="btnSignin" @click=${()=>this.switchRoute("signin")}>Sign In</button>
					`}
			</nav>
		`}switchRoute(e){Yo.dispatch(Xr()),ce.go(`/${e}`)}signOut(){console.log("Sign out clicked!"),Yo.dispatch((()=>({type:Kr.SESSION_SIGNOUT}))())}};wi.styles=[Zo,ei],Si([St({type:Object})],wi.prototype,"session",void 0),wi=Si([yt("main-taskbar")],wi);var xi=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Ei=class extends(At(Yo)(Tt)){constructor(){super(...arguments),this.lastUsedApp="app-home",this.session={live:!1,email:""}}stateChanged(e){this.session=Uo(e)}render(){return Je`
			<main-taskbar></main-taskbar>
			<slot></slot>
		`}connectedCallback(){super.connectedCallback(),null!==localStorage.getItem("lastUsedApp")&&(this.lastUsedApp=localStorage.getItem("lastUsedApp"))}disconnectedCallback(){super.disconnectedCallback()}};Ei.styles=[Zo,Qo],xi([St({type:String})],Ei.prototype,"lastUsedApp",void 0),xi([St({type:Object})],Ei.prototype,"session",void 0),Ei=xi([yt("system-shell")],Ei);var Oi=kt`
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
`;function Ci(){return Je`
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
	`}var Ni=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ki=class extends(At(Yo)(Tt)){constructor(){super(...arguments),this.loaded=!1,this.message="",this.connected=!1,this.history=[],this.handleConnectButton=e=>{e.preventDefault(),Yo.dispatch((()=>({type:Pt.SOCKETS_CONNECT}))())},this.handleDisconnectButton=e=>{e.preventDefault(),Yo.dispatch(Ko())}}render(){return Ci.call(this)}};function Ii(){return Je`
		<div>
    <h3>Message log</h3>
        <ul>
          ${hi(this.message_history,e=>e.direction,(e,t)=>Je`
          <li>${t}: ${e.message}</li>`)}
        </ul>
        <form class="form-inline">
          <div class="form-group">
            ${this.loaded&&!0===this.connected?Je`
              <input
                class="form-control input-sm"
                type="text"
                id="message_text"
              >
              `:Je`
              <input
                class="form-control input-sm"
                type="text"
                id="message_text"
                readonly
              >
              `}
          </div>
          ${!0===this.connected?Je`
                <button
                  @click=${e=>this.handleSendButton(e)}>
                    <i class="fa fa-sign-in">Send</i>
                </button>
              `:Je`
                <button
                  @click=${e=>this.handleSendButton(e)} disabled>
                    <i class="fa fa-sign-in">Send</i>
                </button>
              `}
        </form>
      </div>
	`}ki.styles=[Zo,Oi],Ni([St({type:Boolean})],ki.prototype,"loaded",void 0),Ni([St({type:String})],ki.prototype,"message",void 0),Ni([St({type:Boolean})],ki.prototype,"connected",void 0),Ni([St({type:Array})],ki.prototype,"history",void 0),ki=Ni([yt("socket-connection-log")],ki);var Ti=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Ai=class extends(At(Yo)(Tt)){constructor(){super(...arguments),this.loaded=!1,this.connected=!1,this.message="",this.message_history=[]}stateChanged(e){this.loaded=e.socket.loaded,this.connected=e.socket.connected,this.message=e.socket.message,this.message_history=e.socket.message_history}render(){return Ii.call(this)}handleSendButton(e){e.preventDefault();const t={message:this.messageInput.value};Yo.dispatch((e=>({type:Pt.SOCKETS_MESSAGE_SEND,message_send:e}))(t)),this.messageInput.value=""}};function Pi(){return Je`
        <div class="container">

            <h1>Socket Example Page</h1>
            <p>Sockets not connected</p>

            <socket-connection-log .loaded=${this.loaded} .message=${this.message} .connected=${this.connected} .history=${this.history}></socket-connection-log>
            <socket-message-log></socket-message-log>
        </div>
    `}Ai.styles=[Zo],Ti([St({type:Boolean})],Ai.prototype,"loaded",void 0),Ti([St({type:Boolean})],Ai.prototype,"connected",void 0),Ti([St({type:String})],Ai.prototype,"message",void 0),Ti([St({type:Array})],Ai.prototype,"message_history",void 0),Ti([wt("#message_text")],Ai.prototype,"messageInput",void 0),Ai=Ti([yt("socket-message-log")],Ai);var Ri=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ji=class extends(At(Yo)(Tt)){constructor(){super(...arguments),this.loaded=!1,this.message="",this.connected=!1,this.history=[]}stateChanged(e){this.loaded=e.socket.loaded,this.message=e.socket.message,this.connected=e.socket.connected,this.history=e.socket.history}render(){return Pi.call(this)}};Ri([St({type:Boolean})],ji.prototype,"loaded",void 0),Ri([St({type:String})],ji.prototype,"message",void 0),Ri([St({type:Boolean})],ji.prototype,"connected",void 0),Ri([St({type:Boolean})],ji.prototype,"history",void 0),ji=Ri([yt("socket-example-page")],ji);var Li=kt`
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
`,Ui=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Di=class extends Ei{render(){return Je`
			<h1>Welcome to Oswee</h1>
			<h2>You have nothing to do there!</h2>
			<p>This page is under continous development. Your actions are tracked.</p>
		`}};Di.styles=[Zo,Li],Di=Ui([yt("app-home")],Di);var Mi=kt`
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
`;class zi extends Tt{static get is(){return"legal-info"}static get properties(){return{id:{type:String}}}constructor(){super(),this.id=""}static get styles(){return kt`
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
		`}render(){return Je`
			<div class="links">
				<a href="/help/conditions-of-use">Conditions of Use</a>
				<a href="/help/privacy-notice">Privacy Notice</a>
				<a href="/help">Help</a>
			</div>
			<span>© 2019, Oswee.com, Inc. or its affiliates</span>
			<slot></slot>
		`}}customElements.define(zi.is,zi);var Bi=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class $i extends(At(Yo)(Ei)){constructor(){super(...arguments),this.waybills={},this.payload={display_name:"Dzintars Saga",email:"dzintars@saga.com",password:"sagapass"}}static get is(){return"app-signup"}stateChanged(e){this.waybills=Go(e)}render(){return Je`
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
		`}fetchOrders(e){e.preventDefault(),Yo.dispatch(_o(this.payload))}}$i.styles=[Zo,Mi],Bi([St({type:Object})],$i.prototype,"waybills",void 0),customElements.define($i.is,$i);var Vi=kt`
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
`;function Gi(){return Je`
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
	`}var Fi=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Hi=class extends(At(Yo)(Ei)){constructor(){super(...arguments),this.signInForm={email:"",password:""}}render(){return Gi.call(this)}get formElement(){return this.shadowRoot.getElementById("signin-form")}signIn(e){e.preventDefault(),Yo.dispatch((e=>({type:Kr.SESSION_SIGNIN,payload:e}))(Object.assign(this.signInForm,{email:this.emailInput.value,password:this.passwordInput.value}))),this.clear()}clear(){this.formElement.reset(),this.signInForm={email:"",password:""}}};Hi.styles=[Zo,Vi],Fi([St({type:class{}})],Hi.prototype,"signInForm",void 0),Fi([wt("#email")],Hi.prototype,"emailInput",void 0),Fi([wt("#password")],Hi.prototype,"passwordInput",void 0),Hi=Fi([yt("app-signin")],Hi);var Wi=kt`
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

`,Ki=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let qi=class extends Ei{render(){return Je`
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
		`}};qi.styles=[Zo,Wi],qi=Ki([yt("app-restore-password")],qi);var Ji=kt`
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
	
`;function Xi(){return Je`
		<h1>Marketplace</h1>
	`}var Yi=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Zi=class extends(At(Yo)(Ei)){render(){return Xi.call(this)}};Zi.styles=[Zo,Ji],Zi=Yi([yt("app-marketplace")],Zi);var Qi=kt`
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
	
`;function es(){return Je`
		<h1>Services</h1>
	`}var ts=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ns=class extends(At(Yo)(Ei)){render(){return es.call(this)}};ns.styles=[Zo,Qi],ns=ts([yt("app-services")],ns);var rs=kt`
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
`,os=kt`
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
`;function is(){return Je`
		<h1>Restricted Access</h1>
		<p>Please <a href="/signin">Sign In</a> to access application</p>
	`}var ss=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let as=class extends(At(Yo)(Ei)){render(){return is.call(this)}};function cs(){return Je`
		${this.session.live?Je`
				<div>
					<h1>Shipping</h1>
					<button @click=${()=>this.sendMessage("Message")}>Send WS</button>
				</div>
			`:Je`
				<app-restricted-access></app-restricted-access>
			`}
	`}as.styles=[Zo,os],as=ss([yt("app-restricted-access")],as);var ls=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let us=class extends Ei{constructor(){super(...arguments),this.socket=new WebSocket("ws://localhost:7070/v1/ws/private")}sendMessage(e){this.socket;console.log(e),this.socket.send(e)}render(){return cs.call(this)}connectedCallback(){super.connectedCallback(),console.log("Connecting..."),this.socket.onopen=()=>{console.log("Connected!"),this.socket.send("Hello from client!")},this.socket.onclose=e=>{console.log("Socket Closed",e)},this.socket.onerror=e=>{console.log("Socket Error: ",e)},this.socket.onmessage=e=>{console.log(e)}}disconnectedCallback(){super.disconnectedCallback(),this.socket.close(1e3,"Work complete")}};us.styles=[Zo,rs],us=ls([yt("app-shipping")],us);var ds=kt`
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
`,ps=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let hs=class extends Ei{render(){return Je`
			<h1>404 : Not Found</h1>
			<a href="/">Go to the main page</a>
		`}};hs.styles=[Zo,ds],hs=ps([yt("app-not-found")],hs);var fs=kt`
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
	
`;function gs(){return Je`
		<h1>Apps</h1>
		<slot></slot>
	`}var ms=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let vs=class extends(At(Yo)(Ei)){render(){return gs.call(this)}};vs.styles=[Zo,fs],vs=ms([yt("app-apps")],vs);const ys=kt`
	* {
		box-sizing: border-box;
	}

	button {
		border: 2px solid dodgerblue;
	}
`;var bs=kt`
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
	.dz-button {
		margin: 1rem;
		border: 1px solid var(--color-dodgerblue-main);
		height: 24px;
		border-radius: 3px;
		background-color: var(--color-dodgerblue-6d);
		color: var(--color-dodgerblue-10l);
	}
`;function _s(){return Je`
		<div id="shortcuts"></div>
		<div id="workspace">
			<button class="dz-button">Create New</button>
			<p>Test</p>
		</div>
	`}var Ss=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let ws=class extends(At(Yo)(Ei)){render(){return _s.call(this)}};ws.styles=[Zo,ys,bs],ws=Ss([yt("app-route-planner")],ws),window.addEventListener("load",()=>{new ce(document.querySelector("main")).setRoutes([{path:"/",component:"system-shell",children:[{path:"/",component:"app-home"},{path:"/marketplace",component:"app-marketplace"},{path:"/apps",component:"app-apps"},{path:"/apps/routeplanner",component:"app-route-planner"},{path:"/services",component:"app-services"},{path:"/signin",component:"app-signin"},{path:"/signup",component:"app-signup"},{path:"/restore-password",component:"app-restore-password"},{path:"/shipping",component:"app-shipping"},{path:"/ws",component:"socket-example-page"},{path:"(.*)",component:"app-not-found"}]}])})}]);