/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)
},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()
},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n)){for(i in n){x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2]){return r.find(e)
}this.length=1,this[0]=o
}return this.context=a,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
},selector:"",length:0,toArray:function(){return g.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=x.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return x.each(this,e,t)
},ready:function(e){return x.ready.promise().done(e),this
},slice:function(){return this.pushStack(g.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)
}))},end:function(){return this.prevObject||this.constructor(null)
},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);
u>l;l++){if(null!=(o=arguments[l])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)
},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body){return setTimeout(x.ready)
}x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===x.type(e)
},isArray:Array.isArray||function(e){return"array"===x.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
},isPlainObject:function(e){var n;
if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e)){return !1
}try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(r){return !1
}if(x.support.ownLast){for(n in e){return v.call(e,n)
}}for(n in e){}return n===t||v.call(e,n)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||a;
var r=k.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)
}:function(e){return null==e?"":(e+"").replace(C,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(m){return m.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return d.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))
},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;
if("object"===x.type(r)){o=!0;
for(l in r){x.access(e,n,l,r[l],!0,a,s)
}}else{if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)
})),n)){for(;
u>l;l++){n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)))
}}}return o?e:c?n.call(e):u?n(e[0],r):a
},now:function(){return(new Date).getTime()
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),x.ready.promise=function(t){if(!n){if(n=x.Deferred(),"complete"===a.readyState){setTimeout(x.ready)
}else{if(a.addEventListener){a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1)
}else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
var r=!1;
try{r=null==e.frameElement&&a.documentElement
}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(o,50)
}_(),x.ready()
}}()}}}return n.promise(t)
},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()
});function M(e){var t=e.length,n=x.type(e);
return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0
},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;
for(;n>t;
t++){if(this[t]===e){return t
}}return -1
},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;
if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(l=t.nodeType)&&9!==l){return[]
}if(h&&!i){if(o=Z.exec(e)){if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode){return n
}if(a.id===s){return n.push(a),n
}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s){return n.push(a),n
}}}else{if(o[2]){return M.apply(n,t.getElementsByTagName(e)),n
}if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName){return M.apply(n,t.getElementsByClassName(s)),n
}}}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
while(u--){c[u]=m+xt(c[u])
}y=V.test(e)&&t.parentNode||t,x=c.join(",")
}if(x){try{return M.apply(n,y.querySelectorAll(x)),n
}catch(T){}finally{d||t.removeAttribute("id")
}}}}return At(e.replace(z,"$1"),t,n,i)
}function st(e){return K.test(e+"")
}function lt(){var e=[];
function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
}return t
}function ut(e){return e[b]=!0,e
}function ct(e){var t=f.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function pt(e,t,n){e=e.split("|");
var r,i=e.length,a=n?null:t;
while(i--){(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)
}}function ft(e,t){var n=e.getAttributeNode(t);
return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null
}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)
}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t
}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function mt(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;
return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()
}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")
}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){return e.getAttribute("id")===t
}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
return n&&n.value===t
}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
}),ct(function(e){var t=n.createElement("input");
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))
}),A=d.compareDocumentPosition?function(e,t){if(e===t){return S=!0,0
}var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return S=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0
}if(o===a){return gt(e,t)
}r=e;while(r=r.parentNode){s.unshift(r)
}r=t;while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},n):f
},at.matches=function(e,t){return at(e,null,null,t)
},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t))){try{var n=y.call(e,t);
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(i){}}return at(t,f,null,[e]).length>0
},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)
},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);
var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},at.uniqueSort=function(e){var t,n=[],i=0,o=0;
if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++]){t===e[o]&&(i=n.push(o))
}while(i--){e.splice(n[i],1)
}}return e
},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;e=e.nextSibling){n+=a(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=a(t)
}}return n
},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();
return"*"===e?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}},CLASS:function(e){var t=N[e+" "];
return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];
break}}}else{if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T){f=u[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));
return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}}),has:ut(function(e){return function(t){return at(e,t).length>0
}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;
do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===d
},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !o.pseudos.empty(e)
},header:function(e){return tt.test(e.nodeName)
},input:function(e){return et.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:vt(function(){return[0]
}),last:vt(function(e,t){return[t-1]
}),eq:vt(function(e,t,n){return[0>n?n+t:n]
}),even:vt(function(e,t){var n=0;
for(;t>n;
n+=2){e.push(n)
}return e
}),odd:vt(function(e,t){var n=1;
for(;t>n;
n+=2){e.push(n)
}return e
}),lt:vt(function(e,t,n){var r=0>n?n+t:n;
for(;--r>=0;
){e.push(r)
}return e
}),gt:vt(function(e,t,n){var r=0>n?n+t:n;
for(;t>++r;
){e.push(r)
}return e
})}};for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){o.pseudos[n]=mt(n)
}for(n in {submit:!0,reset:!0}){o.pseudos[n]=yt(n)
}function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];
if(c){return t?0:c.slice(0)
}s=e,l=[],u=o.preFilter;
while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));
for(a in o.filter){!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?at.error(e):k(e,l).slice(0)
}function xt(e){var t=0,n=e.length,r="";
for(;n>t;
t++){r+=e[t].value
}return r
}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;
return t.first?function(t,n,i){while(t=t[r]){if(1===t.nodeType||o){return e(t,n,i)
}}}:function(t,n,s){var l,u,c,p=T+" "+a;
if(s){while(t=t[r]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[r]){if(1===t.nodeType||o){if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i){return l===!0
}}else{if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0){return !0
}}}}}}
}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;
for(;l>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s))
}return a
}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;
while(c--){(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){u=[],c=y.length;
while(c--){(p=y[c])&&u.push(m[c]=p)
}i(null,y=[],u,l)
}c=y.length;
while(c--){(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
}}}else{y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
}})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t
},s,!0),p=wt(function(e){return F.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];for(;
i>l;l++){if(n=o.relative[e[l].type]){f=[wt(Tt(f),n)]
}else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;
i>r;r++){if(o.relative[e[r].type]){break
}}return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))
}f.push(n)
}}return Tt(f)
}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||0.1;
for(w&&(u=l!==f&&l,i=n);
null!=(h=N[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,l,c)){p.push(h);
break}}w&&(T=k,i=++n)
}r&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,r&&b!==v){g=0;
while(m=t[g++]){m(x,y,l,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=q.call(p))
}}y=Ct(y)
}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
}return w&&(T=k,u=C),x
};return r?ut(s):s
}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];
if(!o){t||(t=bt(e)),n=t.length;
while(n--){o=kt(t[n]),o[b]?r.push(o):i.push(o)
}o=E(e,Et(i,r))
}return o
};function St(e,t,n){var r=0,i=t.length;
for(;i>r;
r++){at(e,t[r],n)
}return n
}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);
if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t){return n
}e=e.slice(s.shift().value.length)
}a=Q.needsContext.test(e)?0:s.length;
while(a--){if(u=s[a],o.relative[c=u.type]){break
}if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e){return M.apply(n,i),n
}break
}}}return l(e,f)(i,t,!h,n,V.test(e)),n
}o.pseudos.nth=o.pseudos.eq;
function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);var O={};
function F(e){var t=O[e]={};
return x.each(e.match(T)||[],function(e,n){t[n]=!0
}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);
var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;
l&&o>a;
a++){if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break}}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
},p={add:function(){if(l){var t=l.length;
(function i(t){x.each(t,function(t,n){var r=x.type(n);
"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
})})(arguments),n?o=l.length:r&&(s=t,c(r))
}return this
},remove:function(){return l&&x.each(arguments,function(e,t){var r;
while((r=x.inArray(t,l,r))>-1){l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)
},empty:function(){return l=[],o=0,this
},disable:function(){return l=u=r=t,this
},disabled:function(){return !l
},lock:function(){return u=t,r||p.disable(),this
},locked:function(){return !u
},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};return p
},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})}),e=null
}).promise()
},promise:function(e){return null!=e?x.extend(e,r):r
}},i={};
return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}},s,l,u;
if(r>1){for(s=Array(r),l=Array(r),u=Array(r);
r>t;t++){n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i
}}return i||o.resolveWith(u,n),o.promise()
}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length){return t
}s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
for(f in x(t)){break
}return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth
}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t
}({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n){return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
}}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
while(i--){delete r[t[i]]
}if(n?!I(r):!x.isEmptyObject(r)){return
}}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
},data:function(e,t,n){return R(e,t,n)
},removeData:function(e,t){return W(e,t)
},_data:function(e,t,n){return R(e,t,n,!0)
},_removeData:function(e,t){return W(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];
if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;
r.length>a;
a++){i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]))
}x._data(s,"parsedAttrs",!0)
}return o
}return"object"==typeof e?this.each(function(){x.data(this,e)
}):arguments.length>1?this.each(function(){x.data(this,e,n)
}):s?$(s,e,x.data(s,e)):null
},removeData:function(e){return this.each(function(){x.removeData(this,e)
})}});
function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
}catch(o){}x.data(e,n,r)
}else{r=t
}}return r
}function I(e){var t;
for(t in e){if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}x.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)
})})}}),x.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)
})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}})},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l))
}return l(),o.promise(n)
}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)
})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).addClass(e.call(this,t,this.className))
})}if(l){for(t=(e||"").match(T)||[];
s>a;a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=x.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))
})}if(l){for(t=(e||"").match(T)||[];
s>a;a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?x.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;
return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];
while(o=u[a++]){l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)
}}else{(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
}})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=x.isFunction(e),this.each(function(n){var o;
1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""
})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})}if(o){return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");
return null!=t?t:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
for(;s>l;
l++){if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;
while(a--){r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0)
}return n||(e.selectedIndex=-1),o
}}},attr:function(e,n,r){var o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get" in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set" in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);
if(o&&1===e.nodeType){while(n=o[i++]){r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");
return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;
x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
return x.expr.attrHandle[n]=o,a
}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&r.specified?r.value:t
},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)
}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this
}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}function at(){try{return a.activeElement
}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(T)||[""],u=n.length;
while(u--){s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0)
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;
while(u--){if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){x.event.remove(e,d+t[u],n,r,!0)
}}}x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);
u;u=u.parentNode){h.push(u),f=u
}f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;while((u=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault()
}if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;
try{i[g]()
}catch(y){}x.event.triggered=t,f&&(i[l]=f)
}return n.result
}},dispatch:function(e){e=x.event.fix(e);
var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
if(l&&u.nodeType&&(!e.button||"click"!==e.type)){for(;
u!=this;
u=u.parentNode||this){if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
l>a;a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:u,handlers:o})
}}}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(e){if(e[x.expando]){return e
}var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
while(t--){n=r[t],e[n]=o[n]
}return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
},_default:function(e){return x.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),x._data(r,"submitBubbles",!0))
}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
}),x._data(t,"changeBubbles",!0))
}),t)},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)
};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)
},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)
}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)
})},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)
})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)
})},triggerHandler:function(e,n){var r=this[0];
return r?x.event.trigger(e,n,r,!0):t
}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if("string"!=typeof e){return this.pushStack(x(e).filter(function(){for(t=0;
i>t;t++){if(x.contains(r[t],this)){return !0
}}}))}for(t=0;
i>t;t++){x.find(e,r[t],n)
}return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t,n=x(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;t++){if(x.contains(this,n[t])){return !0
}}})},not:function(e){return this.pushStack(ft(this,e||[],!0))
},filter:function(e){return this.pushStack(ft(this,e||[],!1))
},is:function(e){return !!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
for(;i>r;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);
break}}}return this.pushStack(o.length>1?x.unique(o):o)
},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
return this.pushStack(x.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}x.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return x.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return x.dir(e,"nextSibling")
},prevAll:function(e){return x.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)
},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return x.sibling(e.firstChild)
},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
}}),x.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType
}))},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});function ft(e,t,n){if(x.isFunction(t)){return x.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})}if(t.nodeType){return x.grep(e,function(e){return e===t!==n
})}if("string"==typeof t){if(st.test(t)){return x.filter(t,e,n)
}t=x.filter(t,e)
}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n
})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.appendChild(e)
}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.insertBefore(e,t.firstChild)
}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;
for(;null!=(n=r[i]);
i++){t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;null!=(e=this[t]);
t++){1===e.nodeType&&x.cleanData(Ft(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&x.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)
})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;r++){n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e)
}n=0}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];
i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=d.apply([],e);
var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h)){return this.each(function(r){var i=p.eq(r);
g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
})}if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;
c>u;u++){i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u)
}if(o){for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;
o>u;u++){i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")))
}}l=r=null
}return this
}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function _t(e,t){var n,r=0;
for(;null!=(n=e[r]);
r++){x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
}}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;r++){x.event.add(t,n,s[n][r])
}}}a.data&&(a.data=x.extend({},a.data))
}}function Ot(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);
for(r in i.events){x.removeEvent(t,r,i.handle)
}t.removeAttribute(x.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;
for(;a>=r;
r++){n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get())
}return this.pushStack(i)
}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n))
}}return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)
}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e))){for(r=Ft(o),s=Ft(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ot(i,r[a])
}}if(t){if(n){for(s=s||Ft(e),r=r||Ft(o),a=0;
null!=(i=s[a]);
a++){Mt(i,r[a])
}}else{Mt(e,o)
}}return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
for(;p>h;
h++){if(o=e[h],o||0===o){if("object"===x.type(o)){x.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}}x.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
for(;null!=(n=e[s]);
s++){if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events){for(r in a.events){f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle)
}}u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
}}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e)){return this.each(function(t){x(this).wrapAll(e.call(this,t))
})}if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=x(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})},wrap:function(e){var t=x.isFunction(e);
return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)
})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
}).end()
}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;s>a;
a++){r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))))
}for(a=0;
s>a;a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;
if(x.isArray(n)){for(o=Rt(e),i=n.length;
i>s;s++){a[n[s]]=x.css(e,n[s],!1,o)
}return a
}return r!==t?x.style(e,n,r):x.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){var t="boolean"==typeof e;
return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()
})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;
if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:u[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{u[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);
return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
});function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;4>o;
o+=2){"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function ln(e){var t=a,n=Gt[e];
return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
return n.remove(),r
}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
},x.expr.filters.visible=function(e){return !x.expr.filters.hidden(e)
}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(x.cssHooks[e+t].set=on)
});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({serialize:function(){return x.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");
return e?x.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
}).map(function(e,t){var n=x(this).val();
return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e)){x.each(e,function(){o(this.name,this.value)
})}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};function gn(e,t,n,r){var i;
if(x.isArray(t)){x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})}else{if(n||"object"!==x.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=o.href
}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(T)||[];
if(x.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}}function qn(e,n,r,i){var o={},a=e===jn;
function s(l){var u;
return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&x.extend(!0,e,r),e
}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,l=e.indexOf(" ");
return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)
}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===b){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===b?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return b||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>b){for(t in e){m[t]=[m[t],e[t]]
}}else{C.always(e[C.status])
}}return this
},abort:function(e){var t=e||w;
return u&&u.abort(t),k(0,t),this
}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b){return C
}l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){C.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b)){return C.abort()
}w="abort";
for(i in {success:1,error:1,complete:1}){C[i](p[i])
}if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")
},p.timeout));
try{b=1,u.send(y,k)
}catch(N){if(!(2>b)){throw N
}k(-1,N)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,N=n;
2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
}return C
},getJSON:function(e,t,n){return x.get(e,t,n,"json")
},getScript:function(e,n){return x.get(e,t,n,"script")
}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})
}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;
while("*"===u[0]){u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in l){if(l[s]&&l[s].test(o)){u.unshift(s);
break}}}if(u[0] in r){a=u[0]
}else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;
break}i||(i=s)
}a=a||i
}return a?(a!==u[0]&&u.unshift(a),r[a]):t
}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();
if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]
}}o=c.shift();
while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()){if("*"===o){o=l
}else{if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a){for(i in u){if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break}}}if(a!==!0){if(a&&e["throws"]){t=a(t)
}else{try{t=a(t)
}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}
}}}}}}}return{state:"success",data:t}
}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e
}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;
return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}}});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;
return this[e]=!0,e
}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials" in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){l[s]=n.xhrFields[s]
}}n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){l.setRequestHeader(s,i[s])
}}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;
try{if(r&&(i||4===l.readyState)){if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i){4!==l.readyState&&l.abort()
}else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
try{c=l.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,u)
},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;
do{s=s||".5",a/=s,x.style(n.elem,e,a+o)
}while(s!==(s=n.cur()/r)&&1!==s&&--l)
}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};function Kn(){return setTimeout(function(){Xn=t
}),Xn=x.now()
}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
for(;a>o;
o++){if(r=i[o].call(n,t,e)){return r
}}}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem
}),l=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
for(;l>a;
a++){u.tweens[a].run(o)
}return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
return u.tweens.push(r),r
},stop:function(t){var n=0,r=t?u.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;n++){u.tweens[n].run(1)
}return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
}}),c=u.props;
for(tr(c,u.opts.specialEasing);
a>o;o++){if(r=Gn[o].call(u,e,c,u.opts)){return r
}}return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(n in e){if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand" in a){o=a.expand(o),delete e[r];
for(n in o){n in e||(e[n]=o[n],t[n]=i)
}}else{t[r]=i
}}}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
})})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));for(r in t){if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){continue
}c[r]=d&&d[r]||x.style(e,r)
}}if(!x.isEmptyObject(c)){d?"hidden" in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()
}),u.done(function(){var t;
x._removeData(e,"fxshow");
for(t in c){x.style(e,t,c[t])
}});for(r in c){a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];
x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);
(i||x._data(this,"finish"))&&t.stop(!0)
};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&x.dequeue(this,e)
})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;
t--;){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};
return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
},r},x.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;
for(Xn=x.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||x.fx.stop(),Xn=t
},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()
},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))
},x.fx.stop=function(){clearInterval(Un),Un=null
},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem
}).length
}),x.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)
})}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using" in t?t.using.call(e,u):i.css(u)
}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;
while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position")){e=e.offsetParent
}return e||s
})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return x.access(this,function(n,r,i){var o;
return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
},n,a?i:t,a,null)
}})}),x.fn.size=function(){return this.length
},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x
}))})(window);
jQuery(document).ready(function(){$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var $target=$(this.hash);
$target=$target.length&&$target||$("[name="+this.hash.slice(1)+"]");
if($target.length){var targetOffset=$target.offset().top;
$("html,body").animate({scrollTop:targetOffset},800);
return false
}}});var offset=300,offset_opacity=1200,scroll_top_duration=700,$back_to_top=$(".cd-top");
$(window).scroll(function(){($(this).scrollTop()>offset)?$back_to_top.addClass("cd-is-visible"):$back_to_top.removeClass("cd-is-visible cd-fade-out");
if($(this).scrollTop()>offset_opacity){$back_to_top.addClass("cd-fade-out")
}});$back_to_top.on("click",function(event){event.preventDefault();
$("body,html").animate({scrollTop:0},scroll_top_duration)
});$("#hireMe").click(function(){window.open("/kartheekgj/resume/raw/master/img/JayendraKartheek.pdf","_blank")
})});(function(W,O,s){function F(b){return function(){for(var a=arguments[0],c=1,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.1/"+(b?b+"/":"")+a;
c<arguments.length;
c++){a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c])
}return Error(a)
}}function ob(b){if(null==b||za(b)){return !1
}var a=b.length;
return 1===b.nodeType&&a?!0:D(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b
}function p(b,a,c){var d;
if(b){if(E(b)){for(d in b){"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d)
}}else{if(b.forEach&&b.forEach!==p){b.forEach(a,c)
}else{if(ob(b)){for(d=0;
d<b.length;
d++){a.call(c,b[d],d)
}}else{for(d in b){b.hasOwnProperty(d)&&a.call(c,b[d],d)
}}}}}return b
}function Ob(b){var a=[],c;
for(c in b){b.hasOwnProperty(c)&&a.push(c)
}return a.sort()
}function Mc(b,a,c){for(var d=Ob(b),e=0;
e<d.length;
e++){a.call(c,b[d[e]],d[e])
}return d
}function Pb(b){return function(a,c){b(c,a)
}}function Xa(){for(var b=ka.length,a;
b;){b--;
a=ka[b].charCodeAt(0);
if(57==a){return ka[b]="A",ka.join("")
}if(90==a){ka[b]="0"
}else{return ka[b]=String.fromCharCode(a+1),ka.join("")
}}ka.unshift("0");
return ka.join("")
}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey
}function A(b){var a=b.$$hashKey;
p(arguments,function(a){a!==b&&p(a,function(a,c){b[c]=a
})});Qb(b,a);
return b
}function R(b){return parseInt(b,10)
}function Rb(b,a){return A(new (A(function(){},{prototype:b})),a)
}function w(){}function Aa(b){return b
}function ca(b){return function(){return b
}}function y(b){return"undefined"==typeof b
}function C(b){return"undefined"!=typeof b
}function U(b){return null!=b&&"object"==typeof b
}function D(b){return"string"==typeof b
}function pb(b){return"number"==typeof b
}function Ja(b){return"[object Date]"==Ya.apply(b)
}function K(b){return"[object Array]"==Ya.apply(b)
}function E(b){return"function"==typeof b
}function Za(b){return"[object RegExp]"==Ya.apply(b)
}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval
}function Nc(b){return b&&(b.nodeName||b.on&&b.find)
}function Oc(b,a,c){var d=[];
p(b,function(b,f,g){d.push(a.call(c,b,f,g))
});return d
}function $a(b,a){if(b.indexOf){return b.indexOf(a)
}for(var c=0;
c<b.length;
c++){if(a===b[c]){return c
}}return -1
}function Ka(b,a){var c=$a(b,a);
0<=c&&b.splice(c,1);
return a
}function fa(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch){throw La("cpws")
}if(a){if(b===a){throw La("cpi")
}if(K(b)){for(var c=a.length=0;
c<b.length;
c++){a.push(fa(b[c]))
}}else{c=a.$$hashKey;
p(a,function(b,c){delete a[c]
});for(var d in b){a[d]=fa(b[d])
}Qb(a,c)
}}else{(a=b)&&(K(b)?a=fa(b,[]):Ja(b)?a=new Date(b.getTime()):Za(b)?a=RegExp(b.source):U(b)&&(a=fa(b,{})))
}return a
}function Pc(b,a){a=a||{};
for(var c in b){b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c])
}return a
}function Ba(b,a){if(b===a){return !0
}if(null===b||null===a){return !1
}if(b!==b&&a!==a){return !0
}var c=typeof b,d;
if(c==typeof a&&"object"==c){if(K(b)){if(!K(a)){return !1
}if((c=b.length)==a.length){for(d=0;
d<c;d++){if(!Ba(b[d],a[d])){return !1
}}return !0
}}else{if(Ja(b)){return Ja(a)&&b.getTime()==a.getTime()
}if(Za(b)&&Za(a)){return b.toString()==a.toString()
}if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||K(a)){return !1
}c={};
for(d in b){if("$"!==d.charAt(0)&&!E(b[d])){if(!Ba(b[d],a[d])){return !1
}c[d]=!0
}}for(d in a){if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!E(a[d])){return !1
}}return !0
}}return !1
}function Sb(){return O.securityPolicy&&O.securityPolicy.isActive||O.querySelector&&!(!O.querySelector("[ng-csp]")&&!O.querySelector("[data-ng-csp]"))
}function qb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];
return !E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)
}:function(){return arguments.length?a.apply(b,arguments):a.call(b)
}}function Qc(b,a){var c=a;
"string"===typeof b&&"$"===b.charAt(0)?c=s:za(a)?c="$WINDOW":a&&O===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");
return c
}function oa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Qc,a?"  ":null)
}function Tb(b){return D(b)?JSON.parse(b):b
}function Ma(b){b&&0!==b.length?(b=u(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b
}function ga(b){b=x(b).clone();
try{b.html("")
}catch(a){}var c=x("<div>").append(b).html();
try{return 3===b[0].nodeType?u(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+u(b)
})}catch(d){return u(c)
}}function Ub(b){try{return decodeURIComponent(b)
}catch(a){}}function Vb(b){var a={},c,d;
p((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),C(d)&&(b=C(c[1])?Ub(c[1]):!0,a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))
});return a
}function Wb(b){var a=[];
p(b,function(b,d){K(b)?p(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))
}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))
});return a.length?a.join("&"):""
}function rb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")
}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")
}function Rc(b,a){function c(a){a&&d.push(a)
}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
p(g,function(a){g[a]=!0;
c(O.getElementById(a));
a=a.replace(":","\\:");
b.querySelectorAll&&(p(b.querySelectorAll("."+a),c),p(b.querySelectorAll("."+a+"\\:"),c),p(b.querySelectorAll("["+a+"]"),c))
});p(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");
b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):p(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)
})}});
e&&a(e,f?[f]:[])
}function Xb(b,a){var c=function(){b=x(b);
if(b.injector()){var c=b[0]===O?"document":ga(b);
throw La("btstrpd",c)
}a=a||[];
a.unshift(["$provide",function(a){a.value("$rootElement",b)
}]);a.unshift("ng");
c=Yb(a);
c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);
c(b)(a)
})}]);
return c
},d=/^NG_DEFER_BOOTSTRAP!/;
if(W&&!d.test(W.name)){return c()
}W.name=W.name.replace(d,"");
ab.resumeBootstrap=function(b){p(b,function(b){a.push(b)
});c()
}}function bb(b,a){a=a||"_";
return b.replace(Sc,function(b,d){return(d?a:"")+b.toLowerCase()
})}function sb(b,a,c){if(!b){throw La("areq",a||"?",c||"required")
}return b
}function Na(b,a,c){c&&K(b)&&(b=b[b.length-1]);
sb(E(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));
return b
}function va(b,a){if("hasOwnProperty"===b){throw La("badname",a)
}}function tb(b,a,c){if(!a){return b
}a=a.split(".");
for(var d,e=b,f=a.length,g=0;
g<f;g++){d=a[g],b&&(b=(e=b)[d])
}return !c&&E(b)?qb(e,b):b
}function ub(b){if(b.startNode===b.endNode){return x(b.startNode)
}var a=b.startNode,c=[a];
do{a=a.nextSibling;
if(!a){break
}c.push(a)
}while(a!==b.endNode);
return x(c)
}function Tc(b){function a(a,b,c){return a[b]||(a[b]=c())
}var c=F("$injector"),d=F("ng");
return a(a(b,"angular",Object),"module",function(){var b={};
return function(f,g,h){if("hasOwnProperty"===f){throw d("badname","module")
}g&&b.hasOwnProperty(f)&&(b[f]=null);
return a(b,f,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);
return r
}}if(!g){throw c("nomod",f)
}var b=[],d=[],e=a("$injector","invoke"),r={_invokeQueue:b,_runBlocks:d,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:e,run:function(a){d.push(a);
return this
}};h&&e(h);
return r
})}})}function Oa(b){return b.replace(Uc,function(a,b,d,e){return e?d.toUpperCase():d
}).replace(Vc,"Moz$1")
}function vb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,r,q,z;
if(!d||null!=b){for(;
e.length;
){for(k=e.shift(),l=0,n=k.length;
l<n;l++){for(r=x(k[l]),m?r.triggerHandler("$destroy"):m=!m,q=0,r=(z=r.children()).length;
q<r;q++){e.push(Ca(z[q]))
}}}}return f.apply(this,arguments)
}var f=Ca.fn[b],f=f.$original||f;
e.$original=f;
Ca.fn[b]=e
}function L(b){if(b instanceof L){return b
}if(!(this instanceof L)){if(D(b)&&"<"!=b.charAt(0)){throw wb("nosel")
}return new L(b)
}if(D(b)){var a=O.createElement("div");
a.innerHTML="<div>&#160;</div>"+b;
a.removeChild(a.firstChild);
xb(this,a.childNodes);
x(O.createDocumentFragment()).append(this)
}else{xb(this,b)
}}function yb(b){return b.cloneNode(!0)
}function Pa(b){Zb(b);
var a=0;
for(b=b.childNodes||[];
a<b.length;
a++){Pa(b[a])
}}function $b(b,a,c,d){if(C(d)){throw wb("offargs")
}var e=la(b,"events");
la(b,"handle")&&(y(a)?p(e,function(a,c){zb(b,c,a);
delete e[c]
}):p(a.split(" "),function(a){y(c)?(zb(b,a,e[a]),delete e[a]):Ka(e[a]||[],c)
}))}function Zb(b,a){var c=b[cb],d=Qa[c];
d&&(a?delete Qa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),$b(b)),delete Qa[c],b[cb]=s))
}function la(b,a,c){var d=b[cb],d=Qa[d||-1];
if(C(c)){d||(b[cb]=d=++Wc,d=Qa[d]={}),d[a]=c
}else{return d&&d[a]
}}function ac(b,a,c){var d=la(b,"data"),e=C(c),f=!e&&C(a),g=f&&!U(a);
d||g||la(b,"data",d={});
if(e){d[a]=c
}else{if(f){if(g){return d&&d[a]
}A(d,a)
}else{return d
}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1
}function Bb(b,a){a&&b.setAttribute&&p(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))
})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
p(a.split(" "),function(a){a=aa(a);
-1===c.indexOf(" "+a+" ")&&(c+=a+" ")
});b.setAttribute("class",aa(c))
}}function xb(b,a){if(a){a=a.nodeName||!C(a.length)||za(a)?[a]:a;
for(var c=0;
c<a.length;
c++){b.push(a[c])
}}}function bc(b,a){return db(b,"$"+(a||"ngController")+"Controller")
}function db(b,a,c){b=x(b);
9==b[0].nodeType&&(b=b.find("html"));
for(a=K(a)?a:[a];
b.length;
){for(var d=0,e=a.length;
d<e;d++){if((c=b.data(a[d]))!==s){return c
}}b=b.parent()
}}function cc(b,a){var c=eb[a.toLowerCase()];
return c&&dc[b.nodeName]&&c
}function Xc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1
});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0
});c.target||(c.target=c.srcElement||O);
if(y(c.defaultPrevented)){var f=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;
f.call(c)
};c.defaultPrevented=!1
}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue
};p(a[e||c.type],function(a){a.call(b,c)
});8>=N?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)
};c.elem=b;
return c
}function Da(b){var a=typeof b,c;
"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=Xa()):c=b;
return a+":"+c
}function Ra(b){p(b,this.put,this)
}function ec(b){var a,c;
"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Yc,""),c=c.match(Zc),p(c[1].split($c),function(b){b.replace(ad,function(b,c,d){a.push(d)
})})),b.$inject=a):K(b)?(c=b.length-1,Na(b[c],"fn"),a=b.slice(0,c)):Na(b,"fn",!0);
return a
}function Yb(b){function a(a){return function(b,c){if(U(b)){p(b,Pb(a))
}else{return a(b,c)
}}}function c(a,b){va(a,"service");
if(E(b)||K(b)){b=n.instantiate(b)
}if(!b.$get){throw Sa("pget",a)
}return l[a+h]=b
}function d(a,b){return c(a,{$get:b})
}function e(a){var b=[],c,d,f,h;
p(a,function(a){if(!k.get(a)){k.put(a,!0);
try{if(D(a)){for(c=Ta(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;
f<h;f++){var g=d[f],m=n.get(g[0]);
m[g[1]].apply(m,g[2])
}}else{E(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Na(a,"module")
}}catch(l){throw K(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Sa("modulerr",a,l.stack||l.message||l)
}}});return b
}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g){throw Sa("cdep",m.join(" <- "))
}return a[d]
}try{return m.unshift(d),a[d]=g,a[d]=b(d)
}finally{m.shift()
}}function d(a,b,e){var f=[],h=ec(a),g,k,l;
k=0;for(g=h.length;
k<g;k++){l=h[k];
if("string"!==typeof l){throw Sa("itkn",l)
}f.push(e&&e.hasOwnProperty(l)?e[l]:c(l))
}a.$inject||(a=a[g]);
switch(b?-1:f.length){case 0:return a();
case 1:return a(f[0]);
case 2:return a(f[0],f[1]);
case 3:return a(f[0],f[1],f[2]);
case 4:return a(f[0],f[1],f[2],f[3]);
case 5:return a(f[0],f[1],f[2],f[3],f[4]);
case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);
case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);
case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);
case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);
case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);
default:return a.apply(b,f)
}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;
c.prototype=(K(a)?a[a.length-1]:a).prototype;
c=new c;
e=d(a,c,b);
return U(e)||E(e)?e:c
},get:c,annotate:ec,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)
}}}var g={},h="Provider",m=[],k=new Ra,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)
}])}),value:a(function(a,b){return d(a,ca(b))
}),constant:a(function(a,b){va(a,"constant");
l[a]=b;
r[a]=b
}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;
c.$get=function(){var a=q.invoke(d,c);
return q.invoke(b,null,{$delegate:a})
}}}},n=l.$injector=f(l,function(){throw Sa("unpr",m.join(" <- "))
}),r={},q=r.$injector=f(r,function(a){a=n.get(a+h);
return q.invoke(a.$get,a)
});p(e(b),function(a){q.invoke(a||w)
});return q
}function bd(){var b=!0;
this.disableAutoScrolling=function(){b=!1
};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
p(a,function(a){b||"a"!==u(a.nodeName)||(b=a)
});return b
}function f(){var b=c.hash(),d;
b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)
}var g=a.document;
b&&d.$watch(function(){return c.hash()
},function(){d.$evalAsync(f)
});return f
}]}function cd(b,a,c,d){function e(a){try{a.apply(null,ta.call(arguments,1))
}finally{if(z--,0===z){for(;
J.length;
){try{J.pop()()
}catch(b){c.error(b)
}}}}}function f(a,b){(function ia(){p(Q,function(a){a()
});v=b(ia,a)
})()}function g(){t=null;
B!=h.url()&&(B=h.url(),p(ha,function(a){a(h.url())
}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,r=b.clearTimeout,q={};
h.isMock=!1;
var z=0,J=[];
h.$$completeOutstandingRequest=e;
h.$$incOutstandingRequestCount=function(){z++
};h.notifyWhenNoOutstandingRequests=function(a){p(Q,function(a){a()
});0===z?a():J.push(a)
};var Q=[],v;
h.addPollFn=function(a){y(v)&&f(100,n);
Q.push(a);
return a
};var B=k.href,G=a.find("base"),t=null;
h.url=function(a,c){k!==b.location&&(k=b.location);
if(a){if(B!=a){return B=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),G.attr("href",G.attr("href"))):(t=a,c?k.replace(a):k.href=a),h
}}else{return t||k.href.replace(/%27/g,"'")
}};var ha=[],Z=!1;
h.onUrlChange=function(a){if(!Z){if(d.history){x(b).on("popstate",g)
}if(d.hashchange){x(b).on("hashchange",g)
}else{h.addPollFn(g)
}Z=!0}ha.push(a);
return a
};h.baseHref=function(){var a=G.attr("href");
return a?a.replace(/^https?\:\/\/[^\/]*/,""):""
};var Y={},X="",ba=h.baseHref();
h.cookies=function(a,b){var d,e,f,h;
if(a){b===s?m.cookie=escape(a)+"=;path="+ba+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+ba).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"))
}else{if(m.cookie!==X){for(X=m.cookie,d=X.split("; "),Y={},f=0;
f<d.length;
f++){e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Y[a]===s&&(Y[a]=unescape(e.substring(h+1))))
}}return Y
}};h.defer=function(a,b){var c;
z++;c=n(function(){delete q[c];
e(a)},b||0);
q[c]=!0;
return c
};h.defer.cancel=function(a){return q[a]?(delete q[a],r(a),e(w),!0):!1
}}function dd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new cd(b,d,a,c)
}]}function ed(){this.$get=function(){function b(b,d){function e(a){a!=n&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,n),n=a,n.n=null)
}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))
}if(b in a){throw F("$cacheFactory")("iid",b)
}var g=0,h=A({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,r=null;
return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});
e(c);if(!y(b)){return a in m||g++,m[a]=b,g>k&&this.remove(r.key),b
}},get:function(a){var b=l[a];
if(b){return e(b),m[a]
}},remove:function(a){var b=l[a];
b&&(b==n&&(n=b.p),b==r&&(r=b.n),f(b.n,b.p),delete l[a],delete m[a],g--)
},removeAll:function(){m={};
g=0;l={};
n=r=null
},destroy:function(){l=h=m=null;
delete a[b]
},info:function(){return A({},h,{size:g})
}}}var a={};
b.info=function(){var b={};
p(a,function(a,e){b[e]=a.info()
});return b
};b.get=function(b){return a[b]
};return b
}}function fd(){this.$get=["$cacheFactory",function(b){return b("templates")
}]}function gc(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^\s*(https?|ftp|mailto|tel|file):/,g=/^\s*(https?|ftp|file):|data:image\//,h=/^(on[a-z]+|formaction)$/;
this.directive=function k(d,e){va(d,"directive");
D(d)?(sb(e,"directiveFactory"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];
p(a[d],function(a,f){try{var h=b.invoke(a);
E(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));
h.priority=h.priority||0;
h.index=f;
h.name=h.name||d;
h.require=h.require||h.controller&&h.name;
h.restrict=h.restrict||"A";
e.push(h)
}catch(g){c(g)
}});return e
}])),a[d].push(e)):p(d,Pb(k));
return this
};this.aHrefSanitizationWhitelist=function(a){return C(a)?(f=a,this):f
};this.imgSrcSanitizationWhitelist=function(a){return C(a)?(g=a,this):g
};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate",function(b,l,n,r,q,z,J,Q,v,B,G){function t(a,b,c,d,e){a instanceof x||(a=x(a));
p(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=x(b).wrap("<span></span>").parent()[0])
});var f=Z(a,b,a,c,d,e);
return function(b,c,d){sb(b,"scope");
var e=c?Ea.clone.call(a):a;
p(d,function(a,b){e.data("$"+b+"Controller",a)
});d=0;
for(var h=e.length;
d<h;d++){var g=e[d];
1!=g.nodeType&&9!=g.nodeType||e.eq(d).data("$scope",b)
}ha(e,"ng-scope");
c&&c(e,b);
f&&f(b,e,e);
return e
}}function ha(a,b){try{a.addClass(b)
}catch(c){}}function Z(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,q,r,z,da=[];
q=0;for(r=c.length;
q<r;q++){da.push(c[q])
}z=q=0;
for(r=g.length;
q<r;z++){k=da[z],c=g[q++],f=g[q++],l=x(k),c?(c.scope?(n=a.$new(),l.data("$scope",n),ha(l,"ng-scope")):n=a,(l=c.transclude)||!e&&b?c(f,n,k,d,Y(a,l||b)):c(f,n,k,s,e)):f&&f(a,k.childNodes,s,e)
}}for(var g=[],k,l,n,q=0;
q<a.length;
q++){l=new Db,k=X(a[q],[],l,0===q?d:s,e),k=(f=k.length?wa(k,a[q],l,b,c,null,[],[],f):null)&&f.terminal||!a[q].childNodes||!a[q].childNodes.length?null:Z(a[q].childNodes,f?f.transclude:b),g.push(f),g.push(k),n=n||f||k,f=null
}return n?h:null
}function Y(a,b){return function(c,d,e){var f=!1;
c||(c=a.$new(),f=c.$$transcluded=!0);
d=b(c,d,e);
if(f){d.on("$destroy",qb(c,c.$destroy))
}return d
}}function X(a,b,c,f,h){var g=c.$attr,k;
switch(a.nodeType){case 1:ia(b,ma(Fa(a).toLowerCase()),"E",f,h);
var l,n,q;
k=a.attributes;
for(var r=0,z=k&&k.length;
r<z;r++){var t=!1,J=!1;
l=k[r];
if(!N||8<=N||l.specified){n=l.name;
q=ma(n);
Eb.test(q)&&(n=bb(q.substr(6),"-"));
var B=q.replace(/(Start|End)$/,"");
q===B+"Start"&&(t=n,J=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));
q=ma(n.toLowerCase());
g[q]=n;
c[q]=l=aa(N&&"href"==n?decodeURIComponent(a.getAttribute(n,2)):l.value);
cc(a,q)&&(c[q]=!0);
L(a,b,l,q);
ia(b,q,"A",f,h,t,J)
}}a=a.className;
if(D(a)&&""!==a){for(;
k=e.exec(a);
){q=ma(k[2]),ia(b,q,"C",f,h)&&(c[q]=aa(k[3])),a=a.substr(k.index+k[0].length)
}}break;
case 3:u(b,a.nodeValue);
break;
case 8:try{if(k=d.exec(a.nodeValue)){q=ma(k[1]),ia(b,q,"M",f,h)&&(c[q]=aa(k[2]))
}}catch(p){}}b.sort(w);
return b
}function ba(a,b,c){var d=[],e=0;
if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a){throw ja("uterdir",b,c)
}1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);
d.push(a);
a=a.nextSibling
}while(0<e)
}else{d.push(a)
}return x(d)
}function P(a,b,c){return function(d,e,f,h,g){e=ba(e[0],b,c);
return a(d,e,f,h,g)
}}function wa(a,b,c,d,e,f,h,g,k){function q(a,b,c,d){if(a){c&&(a=P(a,c,d));
a.require=H.require;
if(v===H||H.$$isolateScope){a=T(a,{isolateScope:!0})
}h.push(a)
}if(b){c&&(b=P(b,c,d));
b.require=H.require;
if(v===H||H.$$isolateScope){b=T(b,{isolateScope:!0})
}g.push(b)
}}function r(a,b,c){var d,e="data",f=!1;
if(D(a)){for(;
"^"==(d=a.charAt(0))||"?"==d;
){a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d
}d=null;
c&&"data"===e&&(d=c[a]);
d=d||b[e]("$"+a+"Controller");
if(!d&&!f){throw ja("ctreq",a,w)
}}else{K(a)&&(d=[],p(a,function(a){d.push(r(a,b,c))
}))}return d
}function B(a,d,e,f,k){function q(a,b){var c;
2>arguments.length&&(b=a,a=s);
ia&&(c=P);
return k(a,b,c)
}var t,da,Q,G,ba,I,P={},X;
t=b===e?c:Pc(c,new Db(x(e),c.$attr));
da=t.$$element;
if(v){var S=/^\s*([@=&])(\??)\s*(\w*)\s*$/;
f=x(e);
I=d.$new(!0);
Y&&Y===v.$$originalDirective?f.data("$isolateScope",I):f.data("$isolateScopeNoTemplate",I);
ha(f,"ng-isolate-scope");
p(v.scope,function(a,b){var c=a.match(S)||[],e=c[3]||b,f="?"==c[2],c=c[1],h,k,g;
I.$$isolateBindings[b]=c+e;
switch(c){case"@":t.$observe(e,function(a){I[b]=a
});t.$$observers[e].$$scope=d;
t[e]&&(I[b]=l(t[e])(d));
break;
case"=":if(f&&!t[e]){break
}k=z(t[e]);
g=k.assign||function(){h=I[b]=k(d);
throw ja("nonassign",t[e],v.name)
};h=I[b]=k(d);
I.$watch(function(){var a=k(d);
a!==I[b]&&(a!==h?h=I[b]=a:g(d,a=h=I[b]));
return a
});break;
case"&":k=z(t[e]);
I[b]=function(a){return k(d,a)
};break;
default:throw ja("iscp",v.name,b,a)
}})}X=k&&q;
Z&&p(Z,function(a){var b={$scope:a===v||a.$$isolateScope?I:d,$element:da,$attrs:t,$transclude:X},c;
ba=a.controller;
"@"==ba&&(ba=t[a.name]);
c=J(ba,b);
P[a.name]=c;
ia||da.data("$"+a.name+"Controller",c);
a.controllerAs&&(b.$scope[a.controllerAs]=c)
});f=0;
for(Q=h.length;
f<Q;f++){try{G=h[f],G(G.isolateScope?I:d,da,t,G.require&&r(G.require,da,P),X)
}catch(M){n(M,ga(da))
}}f=d;
v&&(v.template||null===v.templateUrl)&&(f=I);
a&&a(f,e.childNodes,s,k);
for(f=g.length-1;
0<=f;f--){try{G=g[f],G(G.isolateScope?I:d,da,t,G.require&&r(G.require,da,P),X)
}catch(wa){n(wa,ga(da))
}}}k=k||{};
var Q=-Number.MAX_VALUE,G,Z=k.controllerDirectives,v=k.newIsolateScopeDirective,Y=k.templateDirective;
k=k.nonTlbTranscludeDirective;
for(var wa=!1,ia=!1,V=c.$$element=x(b),H,w,M,u=d,A,F=0,L=a.length;
F<L;F++){H=a[F];
var N=H.$$start,fb=H.$$end;
N&&(V=ba(b,N,fb));
M=s;if(Q>H.priority){break
}if(M=H.scope){G=G||H,H.templateUrl||(y("new/isolated scope",v,H,V),U(M)&&(v=H))
}w=H.name;
!H.templateUrl&&H.controller&&(M=H.controller,Z=Z||{},y("'"+w+"' controller",Z[w],H,V),Z[w]=H);
if(M=H.transclude){wa=!0,H.$$tlb||(y("transclusion",k,H,V),k=H),"element"==M?(ia=!0,Q=H.priority,M=ba(b,N,fb),V=c.$$element=x(O.createComment(" "+w+": "+c[w]+" ")),b=V[0],R(e,x(ta.call(M,0)),b),u=t(M,d,Q,f&&f.name,{nonTlbTranscludeDirective:k})):(M=x(yb(b)).contents(),V.html(""),u=t(M,d))
}if(H.template){if(y("template",Y,H,V),Y=H,M=E(H.template)?H.template(V,c):H.template,M=hc(M),H.replace){f=H;
M=x("<div>"+aa(M)+"</div>").contents();
b=M[0];
if(1!=M.length||1!==b.nodeType){throw ja("tplrt",w,"")
}R(e,V,b);
L={$attr:{}};
M=X(b,[],L);
var Eb=a.splice(F+1,a.length-(F+1));
v&&S(M);
a=a.concat(M).concat(Eb);
fc(c,L);
L=a.length
}else{V.html(M)
}}if(H.templateUrl){y("template",Y,H,V),Y=H,H.replace&&(f=H),B=C(a.splice(F,a.length-F),V,c,e,u,h,g,{controllerDirectives:Z,newIsolateScopeDirective:v,templateDirective:Y,nonTlbTranscludeDirective:k}),L=a.length
}else{if(H.compile){try{A=H.compile(V,c,u),E(A)?q(null,A,N,fb):A&&q(A.pre,A.post,N,fb)
}catch(W){n(W,ga(V))
}}}H.terminal&&(B.terminal=!0,Q=Math.max(Q,H.priority))
}B.scope=G&&!0===G.scope;
B.transclude=wa&&u;
return B
}function S(a){for(var b=0,c=a.length;
b<c;b++){a[b]=Rb(a[b],{$$isolateScope:!0})
}}function ia(d,e,f,h,g,l,q){if(e===g){return null
}g=null;
if(a.hasOwnProperty(e)){var r;
e=b.get(e+c);
for(var z=0,t=e.length;
z<t;z++){try{r=e[z],(h===s||h>r.priority)&&-1!=r.restrict.indexOf(f)&&(l&&(r=Rb(r,{$$start:l,$$end:q})),d.push(r),g=r)
}catch(J){n(J)
}}}return g
}function fc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;
p(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))
});p(b,function(b,f){"class"==f?(ha(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])
})}function C(a,b,c,d,e,f,h,k){var g=[],l,n,z=b[0],t=a.shift(),J=A({},t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),Q=E(t.templateUrl)?t.templateUrl(b,c):t.templateUrl;
b.html("");
r.get(B.getTrustedResourceUrl(Q),{cache:q}).success(function(q){var r,B;
q=hc(q);
if(t.replace){q=x("<div>"+aa(q)+"</div>").contents();
r=q[0];
if(1!=q.length||1!==r.nodeType){throw ja("tplrt",t.name,Q)
}q={$attr:{}};
R(d,b,r);
var G=X(r,[],q);
U(t.scope)&&S(G);
a=G.concat(a);
fc(c,q)
}else{r=z,b.html(q)
}a.unshift(J);
l=wa(a,r,c,e,b,t,f,h,k);
p(d,function(a,c){a==r&&(d[c]=b[0])
});for(n=Z(b[0].childNodes,e);
g.length;
){q=g.shift();
B=g.shift();
var ha=g.shift(),v=g.shift(),G=b[0];
B!==z&&(G=yb(r),R(ha,x(B),G));
B=l.transclude?Y(q,l.transclude):v;
l(n,q,G,d,B)
}g=null
}).error(function(a,b,c,d){throw ja("tpload",d.url)
});return function(a,b,c,d,e){g?(g.push(b),g.push(c),g.push(d),g.push(e)):l(n,b,c,d,e)
}}function w(a,b){var c=b.priority-a.priority;
return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index
}function y(a,b,c,d){if(b){throw ja("multidir",b.name,c.name,a,ga(d))
}}function u(a,b){var c=l(b,!0);
c&&a.push({priority:0,compile:ca(function(a,b){var d=b.parent(),e=d.data("$binding")||[];
e.push(c);
ha(d.data("$binding",e),"ng-binding");
a.$watch(c,function(a){b[0].nodeValue=a
})})})
}function F(a,b){if("xlinkHref"==b||"IMG"!=Fa(a)&&("src"==b||"ngSrc"==b)){return B.RESOURCE_URL
}}function L(a,b,c,d){var e=l(c,!0);
if(e){if("multiple"===d&&"SELECT"===Fa(a)){throw ja("selmulti",ga(a))
}b.push({priority:100,compile:function(){return{pre:function(b,c,f){c=f.$$observers||(f.$$observers={});
if(h.test(d)){throw ja("nodomevents")
}if(e=l(f[d],!0,F(a,d))){f[d]=e(b),(c[d]||(c[d]=[])).$$inter=!0,(f.$$observers&&f.$$observers[d].$$scope||b).$watch(e,function(a){f.$set(d,a)
})}}}}})
}}function R(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;
if(a){for(h=0,g=a.length;
h<g;h++){if(a[h]==d){a[h++]=c;
g=h+e-1;
for(var k=a.length;
h<k;h++,g++){g<k?a[h]=a[g]:delete a[h]
}a.length-=e-1;
break}}}f&&f.replaceChild(c,d);
a=O.createDocumentFragment();
a.appendChild(d);
c[x.expando]=d[x.expando];
d=1;for(e=b.length;
d<e;d++){f=b[d],x(f).remove(),a.appendChild(f),delete b[d]
}b[0]=c;
b.length=1
}function T(a,b){return A(function(){return a.apply(null,arguments)
},a,b)
}var Db=function(a,b){this.$$element=a;
this.$attr=b||{}
};Db.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&G.addClass(this.$$element,a)
},$removeClass:function(a){a&&0<a.length&&G.removeClass(this.$$element,a)
},$set:function(a,b,c,d){function e(a,b){var c=[],d=a.split(/\s+/),f=b.split(/\s+/),h=0;
a:for(;
h<d.length;
h++){for(var g=d[h],k=0;
k<f.length;
k++){if(g==f[k]){continue a
}}c.push(g)
}return c
}if("class"==a){b=b||"",c=this.$$element.attr("class")||"",this.$removeClass(e(c,b).join(" ")),this.$addClass(e(b,c).join(" "))
}else{var h=cc(this.$$element[0],a);
h&&(this.$$element.prop(a,b),d=h);
this[a]=b;
d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=bb(a,"-"));
h=Fa(this.$$element);
if("A"===h&&"href"===a||"IMG"===h&&"src"===a){if(!N||8<=N){h=xa(b).href,""!==h&&("href"===a&&!h.match(f)||"src"===a&&!h.match(g))&&(this[a]=b="unsafe:"+h)
}}!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b))
}(c=this.$$observers)&&p(c[a],function(a){try{a(b)
}catch(c){n(c)
}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);
e.push(b);
Q.$evalAsync(function(){e.$$inter||b(c[a])
});return b
}};var M=l.startSymbol(),V=l.endSymbol(),hc="{{"==M||"}}"==V?Aa:function(a){return a.replace(/\{\{/g,M).replace(/}}/g,V)
},Eb=/^ngAttr[A-Z]/;
return t
}]}function ma(b){return Oa(b.replace(gd,""))
}function hd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;
this.register=function(a,d){va(a,"controller");
U(a)?A(b,a):b[a]=d
};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;
D(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:tb(f.$scope,h,!0)||tb(d,h,!0),Na(e,h,!0));
g=c.instantiate(e,f);
if(m){if(!f||"object"!=typeof f.$scope){throw F("$controller")("noscp",h||e.name,m)
}f.$scope[m]=g
}return g
}}]}function id(){this.$get=["$window",function(b){return x(b.document)
}]}function jd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)
}}]}function ic(b){var a={},c,d,e;
if(!b){return a
}p(b.split("\n"),function(b){e=b.indexOf(":");
c=u(aa(b.substr(0,e)));
d=aa(b.substr(e+1));
c&&(a[c]=a[c]?a[c]+(", "+d):d)
});return a
}function jc(b){var a=U(b)?b:s;
return function(c){a||(a=ic(b));
return c?a[u(c)]||null:a
}}function kc(b,a,c){if(E(c)){return c(b,a)
}p(c,function(c){b=c(b,a)
});return b
}function kd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));
return d
}],transformRequest:[function(a){return U(a)&&"[object File]"!==Ya.apply(a)?oa(a):a
}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];
this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,r){function q(a){function c(a){var b=A({},a,{data:kc(a.data,a.headers,d.transformResponse)});
return 200<=a.status&&300>a.status?b:n.reject(b)
}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
p(a,function(b,d){E(b)&&(c=b(),null!=c?a[d]=c:delete a[d])
})}var c=e.headers,d=A({},a.headers),f,h,c=A({},c.common,c[u(a.method)]);
b(c);b(d);
a:for(f in c){a=u(f);
for(h in d){if(u(h)===a){continue a
}}d[f]=c[f]
}return d
}(a);A(d,a);
d.headers=f;
d.method=Ga(d.method);
(a=Fb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);
var h=[function(a){f=a.headers;
var b=kc(a.data,jc(f),a.transformRequest);
y(a.data)&&p(f,function(a,b){"content-type"===u(b)&&delete f[b]
});y(a.withCredentials)&&!y(e.withCredentials)&&(a.withCredentials=e.withCredentials);
return z(a,b,f).then(c,c)
},s],g=n.when(d);
for(p(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);
(a.response||a.responseError)&&h.push(a.response,a.responseError)
});h.length;
){a=h.shift();
var k=h.shift(),g=g.then(a,k)
}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)
});return g
};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)
});return g
};return g
}function z(b,c,f){function g(a,b,c){p&&(200<=a&&300>a?p.put(s,[a,b,ic(c)]):p.remove(s));
k(b,a,c);
d.$$phase||d.$apply()
}function k(a,c,d){c=Math.max(c,0);
(200<=c&&300>c?r.resolve:r.reject)({data:a,status:c,headers:jc(d),config:b})
}function m(){var a=$a(q.pendingRequests,b);
-1!==a&&q.pendingRequests.splice(a,1)
}var r=n.defer(),z=r.promise,p,v,s=J(b.url,b.params);
q.pendingRequests.push(b);
z.then(m,m);
(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(p=U(b.cache)?b.cache:U(e.cache)?e.cache:Q);
if(p){if(v=p.get(s),C(v)){if(v.then){return v.then(m,m),v
}K(v)?k(v[1],v[0],fa(v[2])):k(v,200,{})
}else{p.put(s,z)
}}y(v)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);
return z
}function J(a,b){if(!b){return a
}var c=[];
Mc(b,function(a,b){null===a||y(a)||(K(a)||(a=[a]),p(a,function(a){U(a)&&(a=oa(a));
c.push(ua(b)+"="+ua(a))
}))});
return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")
}var Q=c("$http"),v=[];
p(f,function(a){v.unshift(D(a)?r.get(a):r.invoke(a))
});p(g,function(a,b){var c=D(a)?r.get(a):r.invoke(a);
v.splice(b,0,{response:function(a){return c(n.when(a))
},responseError:function(a){return c(n.reject(a))
}})});
q.pendingRequests=[];
(function(a){p(arguments,function(a){q[a]=function(b,c){return q(A(c||{},{method:a,url:b}))
}})})("get","delete","head","jsonp");
(function(a){p(arguments,function(a){q[a]=function(b,c,d){return q(A(d||{},{method:a,url:b,data:c}))
}})})("post","put");
q.defaults=e;
return q
}]}function ld(){this.$get=["$browser","$window","$document",function(b,a,c){return md(b,nd,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))
}]}function md(b,a,c,d,e,f){function g(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);
b&&b()
};c.type="text/javascript";
c.src=a;
N?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()
}:c.onload=c.onerror=d;
e.body.appendChild(c);
return d
}return function(e,m,k,l,n,r,q,z){function J(){v=-1;
G&&G();
t&&t.abort()
}function Q(a,d,e,h){var g=f||xa(m).protocol;
s&&c.cancel(s);
G=t=null;
d="file"==g?e?200:404:d;
a(1223==d?204:d,e,h);
b.$$completeOutstandingRequest(w)
}var v;
b.$$incOutstandingRequestCount();
m=m||b.url();
if("jsonp"==u(e)){var B="_"+(d.counter++).toString(36);
d[B]=function(a){d[B].data=a
};var G=g(m.replace("JSON_CALLBACK","angular.callbacks."+B),function(){d[B].data?Q(l,200,d[B].data):Q(l,v||-2);
delete d[B]
})}else{var t=new a;
t.open(e,m,!0);
p(n,function(a,b){C(a)&&t.setRequestHeader(b,a)
});t.onreadystatechange=function(){if(4==t.readyState){var a=t.getAllResponseHeaders();
Q(l,v||t.status,t.responseType?t.response:t.responseText,a)
}};q&&(t.withCredentials=!0);
z&&(t.responseType=z);
t.send(k||null)
}if(0<r){var s=c(J,r)
}else{r&&r.then&&r.then(J)
}}}function od(){var b="{{",a="}}";
this.startSymbol=function(a){return a?(b=a,this):b
};this.endSymbol=function(b){return b?(a=b,this):a
};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,r,q=0,z=[],J=f.length,p=!1,v=[];
q<J;){-1!=(n=f.indexOf(b,q))&&-1!=(r=f.indexOf(a,n+g))?(q!=n&&z.push(f.substring(q,n)),z.push(q=c(p=f.substring(n+g,r))),q.exp=p,q=r+h,p=!0):(q!=J&&z.push(f.substring(q)),q=J)
}(J=z.length)||(z.push(""),J=1);
if(l&&1<z.length){throw lc("noconcat",f)
}if(!k||p){return v.length=J,q=function(a){try{for(var b=0,c=J,h;
b<c;b++){"function"==typeof(h=z[b])&&(h=h(a),h=l?e.getTrusted(l,h):e.valueOf(h),null===h||y(h)?h="":"string"!=typeof h&&(h=oa(h))),v[b]=h
}return v.join("")
}catch(g){a=lc("interr",f,g.toString()),d(a)
}},q.exp=f,q.parts=z,q
}}var g=b.length,h=a.length;
f.startSymbol=function(){return b
};f.endSymbol=function(){return a
};return f
}]}function pd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),r=n.promise,q=0,z=C(m)&&!m;
h=C(h)?h:0;
r.then(null,null,d);
r.$$intervalId=k(function(){n.notify(q++);
0<h&&q>=h&&(n.resolve(q),l(r.$$intervalId),delete e[r.$$intervalId]);
z||b.$apply()
},g);e[r.$$intervalId]=n;
return r
}var e={};
d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1
};return d
}]}function qd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"
}}}}function mc(b){b=b.split("/");
for(var a=b.length;
a--;){b[a]=rb(b[a])
}return b.join("/")
}function nc(b,a,c){b=xa(b,c);
a.$$protocol=b.protocol;
a.$$host=b.hostname;
a.$$port=R(b.port)||rd[b.protocol]||null
}function oc(b,a,c){var d="/"!==b.charAt(0);
d&&(b="/"+b);
b=xa(b,c);
a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);
a.$$search=Vb(b.search);
a.$$hash=decodeURIComponent(b.hash);
a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)
}function na(b,a){if(0===a.indexOf(b)){return a.substr(b.length)
}}function Ua(b){var a=b.indexOf("#");
return -1==a?b:b.substr(0,a)
}function Gb(b){return b.substr(0,Ua(b).lastIndexOf("/")+1)
}function pc(b,a){this.$$html5=!0;
a=a||"";
var c=Gb(b);
nc(b,this,b);
this.$$parse=function(a){var e=na(c,a);
if(!D(e)){throw Hb("ipthprfx",a,c)
}oc(e,this,b);
this.$$path||(this.$$path="/");
this.$$compose()
};this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?"#"+rb(this.$$hash):"";
this.$$url=mc(this.$$path)+(a?"?"+a:"")+b;
this.$$absUrl=c+this.$$url.substr(1)
};this.$$rewrite=function(d){var e;
if((e=na(b,d))!==s){return d=e,(e=na(a,e))!==s?c+(na("/",e)||e):b+d
}if((e=na(c,d))!==s){return c+e
}if(c==d+"/"){return c
}}}function Ib(b,a){var c=Gb(b);
nc(b,this,b);
this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";
if(!D(e)){throw Hb("ihshprfx",d,a)
}oc(e,this,b);
this.$$compose()
};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+rb(this.$$hash):"";
this.$$url=mc(this.$$path)+(c?"?"+c:"")+e;
this.$$absUrl=b+(this.$$url?a+this.$$url:"")
};this.$$rewrite=function(a){if(Ua(b)==Ua(a)){return a
}}}function qc(b,a){this.$$html5=!0;
Ib.apply(this,arguments);
var c=Gb(b);
this.$$rewrite=function(d){var e;
if(b==Ua(d)){return d
}if(e=na(c,d)){return b+a+e
}if(c===d+"/"){return c
}}}function gb(b){return function(){return this[b]
}}function rc(b,a){return function(c){if(y(c)){return this[b]
}this[b]=a(c);
this.$$compose();
return this
}}function sd(){var b="",a=!1;
this.hashPrefix=function(a){return C(a)?(b=a,this):b
};this.html5Mode=function(b){return C(b)?(a=b,this):a
};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)
}var h,m=d.baseHref(),k=d.url();
a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?pc:qc):(m=Ua(k),e=Ib);
h=new e(m,"#"+b);
h.$$parse(h.$$rewrite(k));
f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=x(a.target);
"a"!==u(b[0].nodeName);
){if(b[0]===f[0]||!(b=b.parent())[0]){return
}}var e=b.prop("href"),g=h.$$rewrite(e);
e&&(!b.attr("target")&&g&&!a.isDefaultPrevented())&&(a.preventDefault(),g!=d.url()&&(h.$$parse(g),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))
}});h.absUrl()!=k&&d.url(h.absUrl(),!0);
d.onUrlChange(function(a){h.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,h.absUrl()).defaultPrevented?d.url(h.absUrl()):(c.$evalAsync(function(){var b=h.absUrl();
h.$$parse(a);
g(b)}),c.$$phase||c.$digest()))
});var l=0;
c.$watch(function(){var a=d.url(),b=h.$$replace;
l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))
}));h.$$replace=!1;
return l
});return h
}]}function td(){var b=!0,a=this;
this.debugEnabled=function(a){return C(a)?(b=a,this):b
};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));
return a
}function e(a){var b=c.console||{},e=b[a]||b.log||w;
return e.apply?function(){var a=[];
p(arguments,function(b){a.push(d(b))
});return e.apply(b,a)
}:function(a,b){e(a,null==b?"":b)
}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");
return function(){b&&c.apply(a,arguments)
}}()}}]
}function pa(b,a){if("constructor"===b){throw ya("isecfld",a)
}return b
}function Va(b,a){if(b&&b.constructor===b){throw ya("isecfn",a)
}if(b&&b.document&&b.location&&b.alert&&b.setInterval){throw ya("isecwindow",a)
}if(b&&(b.nodeName||b.on&&b.find)){throw ya("isecdom",a)
}return b
}function hb(b,a,c,d,e){e=e||{};
a=a.split(".");
for(var f,g=0;
1<a.length;
g++){f=pa(a.shift(),d);
var h=b[f];
h||(h={},b[f]=h);
b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v" in b||function(a){a.then(function(b){a.$$v=b
})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)
}f=pa(a.shift(),d);
return b[f]=c
}function sc(b,a,c,d,e,f,g){pa(b,f);
pa(a,f);
pa(c,f);
pa(d,f);
pa(e,f);
return g.unwrapPromises?function(h,g){var k=g&&g.hasOwnProperty(b)?g:h,l;
if(null===k||k===s){return k
}(k=k[b])&&k.then&&(qa(f),"$$v" in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a
})),k=k.$$v);
if(!a||null===k||k===s){return k
}(k=k[a])&&k.then&&(qa(f),"$$v" in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a
})),k=k.$$v);
if(!c||null===k||k===s){return k
}(k=k[c])&&k.then&&(qa(f),"$$v" in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a
})),k=k.$$v);
if(!d||null===k||k===s){return k
}(k=k[d])&&k.then&&(qa(f),"$$v" in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a
})),k=k.$$v);
if(!e||null===k||k===s){return k
}(k=k[e])&&k.then&&(qa(f),"$$v" in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a
})),k=k.$$v);
return k
}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;
if(null===k||k===s){return k
}k=k[b];
if(!a||null===k||k===s){return k
}k=k[a];
if(!c||null===k||k===s){return k
}k=k[c];
if(!d||null===k||k===s){return k
}k=k[d];
return e&&null!==k&&k!==s?k=k[e]:k
}}function tc(b,a,c){if(Jb.hasOwnProperty(b)){return Jb[b]
}var d=b.split("."),e=d.length,f;
if(a.csp){f=6>e?sc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;
do{g=sc(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g
}while(h<e);
return g
}}else{var g="var l, fn, p;\n";
p(d,function(b,d){pa(b,c);
g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/\"/g,'\\"')+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")
});var g=g+"return s;",h=new Function("s","k","pw",g);
h.toString=function(){return g
};f=function(a,b){return h(a,b,qa)
}}"hasOwnProperty"!==b&&(Jb[b]=f);
return f
}function ud(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};
this.unwrapPromises=function(b){return C(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises
};this.logPromiseWarnings=function(b){return C(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings
};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;
qa=function(b){a.logPromiseWarnings&&!uc.hasOwnProperty(b)&&(uc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))
};return function(d){var e;
switch(typeof d){case"string":if(b.hasOwnProperty(d)){return b[d]
}e=new Kb(a);
e=(new Wa(e,c,a)).parse(d,!1);
"hasOwnProperty"!==d&&(b[d]=e);
return e;
case"function":return d;
default:return w
}}}]}function vd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return wd(function(a){b.$evalAsync(a)
},a)}]
}function wd(b,a){function c(a){return a
}function d(a){return g(a)
}var e=function(){var h=[],m,k;
return k={resolve:function(a){if(h){var c=h;
h=s;m=f(a);
c.length&&b(function(){for(var a,b=0,d=c.length;
b<d;b++){a=c[b],m.then(a[0],a[1],a[2])
}})}},reject:function(a){k.resolve(g(a))
},notify:function(a){if(h){var c=h;
h.length&&b(function(){for(var b,d=0,e=c.length;
d<e;d++){b=c[d],b[2](a)
}})}},promise:{then:function(b,f,g){var k=e(),z=function(d){try{k.resolve((E(b)?b:c)(d))
}catch(e){k.reject(e),a(e)
}},J=function(b){try{k.resolve((E(f)?f:d)(b))
}catch(c){k.reject(c),a(c)
}},p=function(b){try{k.notify((E(g)?g:c)(b))
}catch(d){a(d)
}};h?h.push([z,J,p]):m.then(z,J,p);
return k.promise
},"catch":function(a){return this.then(null,a)
},"finally":function(a){function b(a,c){var d=e();
c?d.resolve(a):d.reject(a);
return d.promise
}function d(e,f){var h=null;
try{h=(a||c)()
}catch(g){return b(g,!1)
}return h&&E(h.then)?h.then(function(){return b(e,f)
},function(a){return b(a,!1)
}):b(e,f)
}return this.then(function(a){return d(a,!0)
},function(a){return d(a,!1)
})}}}},f=function(a){return a&&E(a.then)?a:{then:function(c){var d=e();
b(function(){d.resolve(c(a))
});return d.promise
}}},g=function(c){return{then:function(f,g){var l=e();
b(function(){try{l.resolve((E(g)?g:d)(c))
}catch(b){l.reject(b),a(b)
}});return l.promise
}}};return{defer:e,reject:g,when:function(h,m,k,l){var n=e(),r,q=function(b){try{return(E(m)?m:c)(b)
}catch(d){return a(d),g(d)
}},z=function(b){try{return(E(k)?k:d)(b)
}catch(c){return a(c),g(c)
}},p=function(b){try{return(E(l)?l:c)(b)
}catch(d){a(d)
}};b(function(){f(h).then(function(a){r||(r=!0,n.resolve(f(a).then(q,z,p)))
},function(a){r||(r=!0,n.resolve(z(a)))
},function(a){r||n.notify(p(a))
})});return n.promise
},all:function(a){var b=e(),c=0,d=K(a)?[]:{};
p(a,function(a,e){c++;
f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))
},function(a){d.hasOwnProperty(e)||b.reject(a)
})});0===c&&b.resolve(d);
return b.promise
}}}function xd(){var b=10,a=F("$rootScope");
this.digestTtl=function(a){arguments.length&&(b=a);
return b
};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(c,d,e,f){function g(){this.$id=Xa();
this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;
this["this"]=this.$root=this;
this.$$destroyed=!1;
this.$$asyncQueue=[];
this.$$postDigestQueue=[];
this.$$listeners={};
this.$$isolateBindings={}
}function h(b){if(l.$$phase){throw a("inprog",l.$$phase)
}l.$$phase=b
}function m(a,b){var c=e(a);
Na(c,b);
return c
}function k(){}g.prototype={constructor:g,$new:function(a){a?(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Xa());
a["this"]=a;
a.$$listeners={};
a.$parent=this;
a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;
a.$$prevSibling=this.$$childTail;
this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;
return a
},$watch:function(a,b,c){var d=m(a,"watch"),e=this.$$watchers,f={fn:b,last:k,get:d,exp:a,eq:!!c};
if(!E(b)){var h=m(b||w,"listener");
f.fn=function(a,b,c){h(c)
}}if("string"==typeof a&&d.constant){var g=f.fn;
f.fn=function(a,b,c){g.call(this,a,b,c);
Ka(e,f)
}}e||(e=this.$$watchers=[]);
e.unshift(f);
return function(){Ka(e,f)
}},$watchCollection:function(a,b){var c=this,d,f,h=0,g=e(a),k=[],l={},m=0;
return this.$watch(function(){f=g(c);
var a,b;
if(U(f)){if(ob(f)){for(d!==k&&(d=k,m=d.length=0,h++),a=f.length,m!==a&&(h++,d.length=m=a),b=0;
b<a;b++){d[b]!==f[b]&&(h++,d[b]=f[b])
}}else{d!==l&&(d=l={},m=0,h++);
a=0;for(b in f){f.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==f[b]&&(h++,d[b]=f[b]):(m++,d[b]=f[b],h++))
}if(m>a){for(b in h++,d){d.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(m--,delete d[b])
}}}}else{d!==f&&(d=f,h++)
}return h
},function(){b(f,d,c)
})},$digest:function(){var c,e,f,g,m=this.$$asyncQueue,p=this.$$postDigestQueue,s,B,G=b,t,x=[],w,C,X;
h("$digest");
do{B=!1;
for(t=this;
m.length;
){try{X=m.shift(),X.scope.$eval(X.expression)
}catch(ba){d(ba)
}}do{if(g=t.$$watchers){for(s=g.length;
s--;){try{(c=g[s])&&((e=c.get(t))!==(f=c.last)&&!(c.eq?Ba(e,f):"number"==typeof e&&"number"==typeof f&&isNaN(e)&&isNaN(f)))&&(B=!0,c.last=c.eq?fa(e):e,c.fn(e,f===k?e:f,t),5>G&&(w=4-G,x[w]||(x[w]=[]),C=E(c.exp)?"fn: "+(c.exp.name||c.exp.toString()):c.exp,C+="; newVal: "+oa(e)+"; oldVal: "+oa(f),x[w].push(C)))
}catch(P){d(P)
}}}if(!(g=t.$$childHead||t!==this&&t.$$nextSibling)){for(;
t!==this&&!(g=t.$$nextSibling);
){t=t.$parent
}}}while(t=g);
if(B&&!G--){throw l.$$phase=null,a("infdig",b,oa(x))
}}while(B||m.length);
for(l.$$phase=null;
p.length;
){try{p.shift()()
}catch(y){d(y)
}}},$destroy:function(){if(l!=this&&!this.$$destroyed){var a=this.$parent;
this.$broadcast("$destroy");
this.$$destroyed=!0;
a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);
a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);
this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null
}},$eval:function(a,b){return e(a)(this,b)
},$evalAsync:function(a){l.$$phase||l.$$asyncQueue.length||f.defer(function(){l.$$asyncQueue.length&&l.$digest()
});this.$$asyncQueue.push({scope:this,expression:a})
},$$postDigest:function(a){this.$$postDigestQueue.push(a)
},$apply:function(a){try{return h("$apply"),this.$eval(a)
}catch(b){d(b)
}finally{l.$$phase=null;
try{l.$digest()
}catch(c){throw d(c),c
}}},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);
c.push(b);
return function(){c[$a(c,b)]=null
}},$emit:function(a,b){var c=[],e,f=this,h=!1,g={name:a,targetScope:f,stopPropagation:function(){h=!0
},preventDefault:function(){g.defaultPrevented=!0
},defaultPrevented:!1},k=[g].concat(ta.call(arguments,1)),l,m;
do{e=f.$$listeners[a]||c;
g.currentScope=f;
l=0;for(m=e.length;
l<m;l++){if(e[l]){try{e[l].apply(null,k)
}catch(p){d(p)
}}else{e.splice(l,1),l--,m--
}}if(h){break
}f=f.$parent
}while(f);
return g
},$broadcast:function(a,b){var c=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0
},defaultPrevented:!1},h=[f].concat(ta.call(arguments,1)),g,k;
do{c=e;
f.currentScope=c;
e=c.$$listeners[a]||[];
g=0;for(k=e.length;
g<k;g++){if(e[g]){try{e[g].apply(null,h)
}catch(l){d(l)
}}else{e.splice(g,1),g--,k--
}}if(!(e=c.$$childHead||c!==this&&c.$$nextSibling)){for(;
c!==this&&!(e=c.$$nextSibling);
){c=c.$parent
}}}while(c=e);
return f
}};var l=new g;
return l
}]}function yd(b){if("self"===b){return b
}if(D(b)){if(-1<b.indexOf("***")){throw ra("iwcard",b)
}b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");
return RegExp("^"+b+"$")
}if(Za(b)){return RegExp("^"+b.source+"$")
}throw ra("imatcher")
}function vc(b){var a=[];
C(b)&&p(b,function(b){a.push(yd(b))
});return a
}function zd(){this.SCE_CONTEXTS=ea;
var b=["self"],a=[];
this.resourceUrlWhitelist=function(a){arguments.length&&(b=vc(a));
return b
};this.resourceUrlBlacklist=function(b){arguments.length&&(a=vc(b));
return a
};this.$get=["$log","$document","$injector",function(c,d,e){function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a
}};a&&(b.prototype=new a);
b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()
};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()
};return b
}var g=function(a){throw ra("unsafe")
};e.has("$sanitize")&&(g=e.get("$sanitize"));
var h=f(),m={};
m[ea.HTML]=f(h);
m[ea.CSS]=f(h);
m[ea.URL]=f(h);
m[ea.JS]=f(h);
m[ea.RESOURCE_URL]=f(m[ea.URL]);
return{trustAs:function(a,b){var c=m.hasOwnProperty(a)?m[a]:null;
if(!c){throw ra("icontext",a,b)
}if(null===b||b===s||""===b){return b
}if("string"!==typeof b){throw ra("itype",a)
}return new c(b)
},getTrusted:function(c,d){if(null===d||d===s||""===d){return d
}var e=m.hasOwnProperty(c)?m[c]:null;
if(e&&d instanceof e){return d.$$unwrapTrustedValue()
}if(c===ea.RESOURCE_URL){var e=xa(d.toString()),f,h,p=!1;
f=0;for(h=b.length;
f<h;f++){if("self"===b[f]?Fb(e):b[f].exec(e.href)){p=!0;
break}}if(p){for(f=0,h=a.length;
f<h;f++){if("self"===a[f]?Fb(e):a[f].exec(e.href)){p=!1;
break}}}if(p){return d
}throw ra("insecurl",d.toString())
}if(c===ea.HTML){return g(d)
}throw ra("unsafe")
},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a
}}}]}function Ad(){var b=!0;
this.enabled=function(a){arguments.length&&(b=!!a);
return b
};this.$get=["$parse","$document","$sceDelegate",function(a,c,d){if(b&&N&&(c=c[0].documentMode,c!==s&&8>c)){throw ra("iequirks")
}var e=fa(ea);
e.isEnabled=function(){return b
};e.trustAs=d.trustAs;
e.getTrusted=d.getTrusted;
e.valueOf=d.valueOf;
b||(e.trustAs=e.getTrusted=function(a,b){return b
},e.valueOf=Aa);
e.parseAs=function(b,c){var d=a(c);
return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))
}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;
p(ea,function(a,b){var c=u(b);
e[Oa("parse_as_"+c)]=function(b){return f(a,b)
};e[Oa("get_trusted_"+c)]=function(b){return g(a,b)
};e[Oa("trust_as_"+c)]=function(b){return h(a,b)
}});return e
}]}function Bd(){this.$get=["$window","$document",function(b,a){var c={},d=R((/android (\d+)/.exec(u((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,k=!1,l=!1;
if(m){for(var n in m){if(k=h.exec(n)){g=k[0];
g=g.substr(0,1).toUpperCase()+g.substr(1);
break}}g||(g="WebkitOpacity" in m&&"webkit");
k=!!("transition" in m||g+"Transition" in m);
l=!!("animation" in m||g+"Animation" in m);
!d||k&&l||(k=D(f.body.style.webkitTransition),l=D(f.body.style.webkitAnimation))
}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange" in b&&(!f.documentMode||7<f.documentMode),hasEvent:function(a){if("input"==a&&9==N){return !1
}if(y(c[a])){var b=f.createElement("div");
c[a]="on"+a in b
}return c[a]
},csp:Sb(),vendorPrefix:g,transitions:k,animations:l,msie:N}
}]}function Cd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=C(m)&&!m;
h=a.defer(function(){try{k.resolve(e())
}catch(a){k.reject(a),d(a)
}finally{delete f[l.$$timeoutId]
}n||b.$apply()
},h);l.$$timeoutId=h;
f[h]=k;
return l
}var f={};
e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1
};return e
}]}function xa(b,a){var c=b;
N&&($.setAttribute("href",c),c=$.href);
$.setAttribute("href",c);
var c=$.pathname,d=b;
0===d.indexOf(a)&&(d=d.replace(a,""));
wc.exec(d)||(c=(d=wc.exec(c))?d[1]:c);
c="/"===c.charAt(0)?c:"/"+c;
return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:c}
}function Fb(b){b=D(b)?xa(b):b;
return b.protocol===xc.protocol&&b.host===xc.host
}function Dd(){this.$get=ca(W)
}function yc(b){function a(d,e){if(U(d)){var f={};
p(d,function(b,c){f[c]=a(c,b)
});return f
}return b.factory(d+c,e)
}var c="Filter";
this.register=a;
this.$get=["$injector",function(a){return function(b){return a.get(b+c)
}}];a("currency",zc);
a("date",Ac);
a("filter",Ed);
a("json",Fd);
a("limitTo",Gd);
a("lowercase",Hd);
a("number",Bc);
a("orderBy",Cc);
a("uppercase",Id)
}function Ed(){return function(b,a,c){if(!K(b)){return b
}var d=typeof c,e=[];
e.check=function(a){for(var b=0;
b<e.length;
b++){if(!e[b](a)){return !1
}}return !0
};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ab.equals(a,b)
}:function(a,b){b=(""+b).toLowerCase();
return -1<(""+a).toLowerCase().indexOf(b)
});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0)){return !f(a,b.substr(1))
}switch(typeof a){case"boolean":case"number":case"string":return c(a,b);
case"object":switch(typeof b){case"object":return c(a,b);
default:for(var d in a){if("$"!==d.charAt(0)&&f(a[d],b)){return !0
}}}return !1;
case"array":for(d=0;
d<a.length;
d++){if(f(a[d],b)){return !0
}}return !1;
default:return !1
}};switch(typeof a){case"boolean":case"number":case"string":a={$:a};
case"object":for(var g in a){"$"==g?function(){if(a[g]){var b=g;
e.push(function(c){return f(c,a[b])
})}}():function(){if("undefined"!=typeof a[g]){var b=g;
e.push(function(c){return f(tb(c,b),a[b])
})}}()
}break;
case"function":e.push(a);
break;
default:return b
}for(var d=[],h=0;
h<b.length;
h++){var m=b[h];
e.check(m)&&d.push(m)
}return d
}}function zc(b){var a=b.NUMBER_FORMATS;
return function(b,d){y(d)&&(d=a.CURRENCY_SYM);
return Dc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)
}}function Bc(b){var a=b.NUMBER_FORMATS;
return function(b,d){return Dc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)
}}function Dc(b,a,c,d,e){if(isNaN(b)||!isFinite(b)){return""
}var f=0>b;
b=Math.abs(b);
var g=b+"",h="",m=[],k=!1;
if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);
l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)
}if(k){0<e&&(-1<b&&1>b)&&(h=b.toFixed(e))
}else{g=(g.split(Ec)[1]||"").length;
y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));
g=Math.pow(10,e);
b=Math.round(b*g)/g;
b=(""+b).split(Ec);
g=b[0];
b=b[1]||"";
var l=0,n=a.lgSize,r=a.gSize;
if(g.length>=n+r){for(l=g.length-n,k=0;
k<l;k++){0===(l-k)%r&&0!==k&&(h+=c),h+=g.charAt(k)
}}for(k=l;
k<g.length;
k++){0===(g.length-k)%n&&0!==k&&(h+=c),h+=g.charAt(k)
}for(;
b.length<e;
){b+="0"
}e&&"0"!==e&&(h+=d+b.substr(0,e))
}m.push(f?a.negPre:a.posPre);
m.push(h);
m.push(f?a.negSuf:a.posSuf);
return m.join("")
}function Lb(b,a,c){var d="";
0>b&&(d="-",b=-b);
for(b=""+b;
b.length<a;
){b="0"+b
}c&&(b=b.substr(b.length-a));
return d+b
}function T(b,a,c,d){c=c||0;
return function(e){e=e["get"+b]();
if(0<c||e>-c){e+=c
}0===e&&-12==c&&(e=12);
return Lb(e,a,d)
}}function ib(b,a){return function(c,d){var e=c["get"+b](),f=Ga(a?"SHORT"+b:b);
return d[f][e]
}}function Ac(b){function a(a){var b;
if(b=a.match(c)){a=new Date(0);
var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;
b[9]&&(f=R(b[9]+b[10]),g=R(b[9]+b[11]));
h.call(a,R(b[1]),R(b[2])-1,R(b[3]));
f=R(b[4]||0)-f;
g=R(b[5]||0)-g;
h=R(b[6]||0);
b=Math.round(1000*parseFloat("0."+(b[7]||0)));
m.call(a,f,g,h,b)
}return a
}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e){var f="",g=[],h,m;
e=e||"mediumDate";
e=b.DATETIME_FORMATS[e]||e;
D(c)&&(c=Jd.test(c)?R(c):a(c));
pb(c)&&(c=new Date(c));
if(!Ja(c)){return c
}for(;
e;){(m=Kd.exec(e))?(g=g.concat(ta.call(m,1)),e=g.pop()):(g.push(e),e=null)
}p(g,function(a){h=Ld[a];
f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")
});return f
}}function Fd(){return function(b){return oa(b,!0)
}}function Gd(){return function(b,a){if(!K(b)&&!D(b)){return b
}a=R(a);
if(D(b)){return a?0<=a?b.slice(0,a):b.slice(a,b.length):""
}var c=[],d,e;
a>b.length?a=b.length:a<-b.length&&(a=-b.length);
0<a?(d=0,e=a):(d=b.length+a,e=b.length);
for(;d<e;
d++){c.push(b[d])
}return c
}}function Cc(b){return function(a,c,d){function e(a,b){return Ma(b)?function(b,c){return a(c,b)
}:a}if(!K(a)||!c){return a
}c=K(c)?c:[c];
c=Oc(c,function(a){var c=!1,d=a||Aa;
if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0)){c="-"==a.charAt(0),a=a.substring(1)
}d=b(a)
}return e(function(a,b){var c;
c=d(a);
var e=d(b),f=typeof c,g=typeof e;
f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;
return c
},c)});
for(var f=[],g=0;
g<a.length;
g++){f.push(a[g])
}return f.sort(e(function(a,b){for(var d=0;
d<c.length;
d++){var e=c[d](a,b);
if(0!==e){return e
}}return 0
},d))}
}function sa(b){E(b)&&(b={link:b});
b.restrict=b.restrict||"AC";
return ca(b)
}function Fc(b,a){function c(a,c){c=c?"-"+bb(c,"-"):"";
b.removeClass((a?jb:kb)+c).addClass((a?kb:jb)+c)
}var d=this,e=b.parent().controller("form")||lb,f=0,g=d.$error={},h=[];
d.$name=a.name||a.ngForm;
d.$dirty=!1;
d.$pristine=!0;
d.$valid=!0;
d.$invalid=!1;
e.$addControl(d);
b.addClass(Ha);
c(!0);
d.$addControl=function(a){va(a.$name,"input");
h.push(a);
a.$name&&(d[a.$name]=a)
};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];
p(g,function(b,c){d.$setValidity(c,!0,a)
});Ka(h,a)
};d.$setValidity=function(a,b,h){var n=g[a];
if(b){n&&(Ka(n,h),n.length||(f--,f||(c(b),d.$valid=!0,d.$invalid=!1),g[a]=!1,c(!0,a),e.$setValidity(a,!0,d)))
}else{f||c(b);
if(n){if(-1!=$a(n,h)){return
}}else{g[a]=n=[],f++,c(!1,a),e.$setValidity(a,!1,d)
}n.push(h);
d.$valid=!1;
d.$invalid=!0
}};d.$setDirty=function(){b.removeClass(Ha).addClass(mb);
d.$dirty=!0;
d.$pristine=!1;
e.$setDirty()
};d.$setPristine=function(){b.removeClass(mb).addClass(Ha);
d.$dirty=!1;
d.$pristine=!0;
p(h,function(a){a.$setPristine()
})}}function nb(b,a,c,d,e,f){var g=function(){var e=a.val();
Ma(c.ngTrim||"T")&&(e=aa(e));
d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)
})};if(e.hasEvent("input")){a.on("input",g)
}else{var h,m=function(){h||(h=f.defer(function(){g();
h=null
}))};a.on("keydown",function(a){a=a.keyCode;
91===a||(15<a&&19>a||37<=a&&40>=a)||m()
});a.on("change",g);
if(e.hasEvent("paste")){a.on("paste cut",m)
}}d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)
};var k=c.ngPattern,l=function(a,b){if(d.$isEmpty(b)||a.test(b)){return d.$setValidity("pattern",!0),b
}d.$setValidity("pattern",!1);
return s
};k&&((e=k.match(/^\/(.*)\/([gim]*)$/))?(k=RegExp(e[1],e[2]),e=function(a){return l(k,a)
}):e=function(c){var d=b.$eval(k);
if(!d||!d.test){throw F("ngPattern")("noregexp",k,d,ga(a))
}return l(d,c)
},d.$formatters.push(e),d.$parsers.push(e));
if(c.ngMinlength){var n=R(c.ngMinlength);
e=function(a){if(!d.$isEmpty(a)&&a.length<n){return d.$setValidity("minlength",!1),s
}d.$setValidity("minlength",!0);
return a
};d.$parsers.push(e);
d.$formatters.push(e)
}if(c.ngMaxlength){var r=R(c.ngMaxlength);
e=function(a){if(!d.$isEmpty(a)&&a.length>r){return d.$setValidity("maxlength",!1),s
}d.$setValidity("maxlength",!0);
return a
};d.$parsers.push(e);
d.$formatters.push(e)
}}function Mb(b,a){b="ngClass"+b;
return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a){h&&!Ba(b,h)&&e.$removeClass(g(h)),e.$addClass(g(b))
}h=fa(b)
}function g(a){if(K(a)){return a.join(" ")
}if(U(a)){var b=[];
p(a,function(a,c){a&&b.push(c)
});return b.join(" ")
}return a
}var h;
c.$watch(e[b],f,!0);
e.$observe("class",function(a){f(c.$eval(e[b]))
});"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;
h!==f&1&&(h===a?(h=c.$eval(e[b]),e.$addClass(g(h))):(h=c.$eval(e[b]),e.$removeClass(g(h))))
})}}}}var u=function(b){return D(b)?b.toLowerCase():b
},Ga=function(b){return D(b)?b.toUpperCase():b
},N,x,Ca,ta=[].slice,Md=[].push,Ya=Object.prototype.toString,La=F("ng"),ab=W.angular||(W.angular={}),Ta,Fa,ka=["0","0","0"];
N=R((/msie (\d+)/.exec(u(navigator.userAgent))||[])[1]);
isNaN(N)&&(N=R((/trident\/.*; rv:(\d+)/.exec(u(navigator.userAgent))||[])[1]));
w.$inject=[];
Aa.$inject=[];
var aa=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b
}:function(b){return D(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b
}}();Fa=9>N?function(b){b=b.nodeName?b:b[0];
return b.scopeName&&"HTML"!=b.scopeName?Ga(b.scopeName+":"+b.nodeName):b.nodeName
}:function(b){return b.nodeName?b.nodeName:b[0].nodeName
};var Sc=/[A-Z]/g,Nd={full:"1.2.1",major:1,minor:2,dot:1,codeName:"underscore-empathy"},Qa=L.cache={},cb=L.expando="ng-"+(new Date).getTime(),Wc=1,Gc=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)
}:function(b,a,c){b.attachEvent("on"+a,c)
},zb=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)
}:function(b,a,c){b.detachEvent("on"+a,c)
},Uc=/([\:\-\_]+(.))/g,Vc=/^moz([A-Z])/,wb=F("jqLite"),Ea=L.prototype={ready:function(b){function a(){c||(c=!0,b())
}var c=!1;
"complete"===O.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),L(W).on("load",a))
},toString:function(){var b=[];
p(this,function(a){b.push(""+a)
});return"["+b.join(", ")+"]"
},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])
},length:0,push:Md,sort:[].sort,splice:[].splice},eb={};
p("multiple selected checked disabled readOnly required open".split(" "),function(b){eb[u(b)]=b
});var dc={};
p("input select option textarea button form details".split(" "),function(b){dc[Ga(b)]=!0
});p({data:ac,inheritedData:db,scope:function(b){return x(b).data("$scope")||db(b.parentNode||b,["$isolateScope","$scope"])
},isolateScope:function(b){return x(b).data("$isolateScope")||x(b).data("$isolateScopeNoTemplate")
},controller:bc,injector:function(b){return db(b,"$injector")
},removeAttr:function(b,a){b.removeAttribute(a)
},hasClass:Ab,css:function(b,a,c){a=Oa(a);
if(C(c)){b.style[a]=c
}else{var d;
8>=N&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));
d=d||b.style[a];
8>=N&&(d=""===d?s:d);
return d
}},attr:function(b,a,c){var d=u(a);
if(eb[d]){if(C(c)){c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d))
}else{return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:s
}}else{if(C(c)){b.setAttribute(a,c)
}else{if(b.getAttribute){return b=b.getAttribute(a,2),null===b?s:b
}}}},prop:function(b,a,c){if(C(c)){b[a]=c
}else{return b[a]
}},text:function(){function b(b,d){var e=a[b.nodeType];
if(y(d)){return e?b[e]:""
}b[e]=d
}var a=[];
9>N?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";
b.$dv="";
return b
}(),val:function(b,a){if(y(a)){if("SELECT"===Fa(b)&&b.multiple){var c=[];
p(b.options,function(a){a.selected&&c.push(a.value||a.text)
});return 0===c.length?null:c
}return b.value
}b.value=a
},html:function(b,a){if(y(a)){return b.innerHTML
}for(var c=0,d=b.childNodes;
c<d.length;
c++){Pa(d[c])
}b.innerHTML=a
}},function(b,a){L.prototype[a]=function(a,d){var e,f;
if((2==b.length&&b!==Ab&&b!==bc?a:d)===s){if(U(a)){for(e=0;
e<this.length;
e++){if(b===ac){b(this[e],a)
}else{for(f in a){b(this[e],f,a[f])
}}}return this
}e=b.$dv;
f=e===s?Math.min(this.length,1):this.length;
for(var g=0;
g<f;g++){var h=b(this[g],a,d);
e=e?e+h:h
}return e
}for(e=0;
e<this.length;
e++){b(this[e],a,d)
}return this
}});p({removeData:Zb,dealoc:Pa,on:function a(c,d,e,f){if(C(f)){throw wb("onargs")
}var g=la(c,"events"),h=la(c,"handle");
g||la(c,"events",g={});
h||la(c,"handle",h=Xc(c,g));
p(d.split(" "),function(d){var f=g[d];
if(!f){if("mouseenter"==d||"mouseleave"==d){var l=O.body.contains||O.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;
return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))
}:function(a,c){if(c){for(;
c=c.parentNode;
){if(c===a){return !0
}}}return !1
};g[d]=[];
a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;
c&&(c===this||l(this,c))||h(a,d)
})}else{Gc(c,d,h),g[d]=[]
}f=g[d]
}f.push(e)
})},off:$b,replaceWith:function(a,c){var d,e=a.parentNode;
Pa(a);
p(new L(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);
d=c})},children:function(a){var c=[];
p(a.childNodes,function(a){1===a.nodeType&&c.push(a)
});return c
},contents:function(a){return a.childNodes||[]
},append:function(a,c){p(new L(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)
})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;
p(new L(c),function(c){a.insertBefore(c,d)
})}},wrap:function(a,c){c=x(c)[0];
var d=a.parentNode;
d&&d.replaceChild(c,a);
c.appendChild(a)
},remove:function(a){Pa(a);
var c=a.parentNode;
c&&c.removeChild(a)
},after:function(a,c){var d=a,e=a.parentNode;
p(new L(c),function(a){e.insertBefore(a,d.nextSibling);
d=a})},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){y(d)&&(d=!Ab(a,c));
(d?Cb:Bb)(a,c)
},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null
},next:function(a){if(a.nextElementSibling){return a.nextElementSibling
}for(a=a.nextSibling;
null!=a&&1!==a.nodeType;
){a=a.nextSibling
}return a
},find:function(a,c){return a.getElementsByTagName(c)
},clone:yb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];
d=d||[];
var e=[{preventDefault:w,stopPropagation:w}];
p(c,function(c){c.apply(a,e.concat(d))
})}},function(a,c){L.prototype[c]=function(c,e,f){for(var g,h=0;
h<this.length;
h++){y(g)?(g=a(this[h],c,e,f),C(g)&&(g=x(g))):xb(g,a(this[h],c,e,f))
}return C(g)?g:this
};L.prototype.bind=L.prototype.on;
L.prototype.unbind=L.prototype.off
});Ra.prototype={put:function(a,c){this[Da(a)]=c
},get:function(a){return this[Da(a)]
},remove:function(a){var c=this[a=Da(a)];
delete this[a];
return c
}};var Zc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,$c=/,/,ad=/^\s*(_?)(\S+?)\1\s*$/,Yc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Sa=F("$injector"),Od=F("$animate"),Pd=["$provide",function(a){this.$$selectors={};
this.register=function(c,d){var e=c+"-animation";
if(c&&"."!=c.charAt(0)){throw Od("notcsel",c)
}this.$$selectors[c.substr(1)]=e;
a.factory(e,d)
};this.$get=["$timeout",function(a){return{enter:function(d,e,f,g){f=f&&f[f.length-1];
var h=e&&e[0]||f&&f.parentNode,m=f&&f.nextSibling||null;
p(d,function(a){h.insertBefore(a,m)
});g&&a(g,0,!1)
},leave:function(d,e){d.remove();
e&&a(e,0,!1)
},move:function(a,c,f,g){this.enter(a,c,f,g)
},addClass:function(d,e,f){e=D(e)?e:K(e)?e.join(" "):"";
p(d,function(a){Cb(a,e)
});f&&a(f,0,!1)
},removeClass:function(d,e,f){e=D(e)?e:K(e)?e.join(" "):"";
p(d,function(a){Bb(a,e)
});f&&a(f,0,!1)
},enabled:w}
}]}],ja=F("$compile");
gc.$inject=["$provide"];
var gd=/^(x[\:\-_]|data[\:\-_])/i,nd=W.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")
}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")
}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")
}catch(d){}throw F("$httpBackend")("noxhr")
},lc=F("$interpolate"),Qd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,rd={http:80,https:443,ftp:21},Hb=F("$location");
qc.prototype=Ib.prototype=pc.prototype={$$html5:!1,$$replace:!1,absUrl:gb("$$absUrl"),url:function(a,c){if(y(a)){return this.$$url
}var d=Qd.exec(a);
d[1]&&this.path(decodeURIComponent(d[1]));
(d[2]||d[1])&&this.search(d[3]||"");
this.hash(d[5]||"",c);
return this
},protocol:gb("$$protocol"),host:gb("$$host"),port:gb("$$port"),path:rc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a
}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(D(a)){this.$$search=Vb(a)
}else{if(U(a)){this.$$search=a
}else{throw Hb("isrcharg")
}}break;
default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c
}this.$$compose();
return this
},hash:rc("$$hash",Aa),replace:function(){this.$$replace=!0;
return this
}};var ya=F("$parse"),uc={},qa,Ia={"null":function(){return null
},"true":function(){return !0
},"false":function(){return !1
},undefined:w,"+":function(a,c,d,e){d=d(a,c);
e=e(a,c);
return C(d)?C(e)?d+e:d:C(e)?e:s
},"-":function(a,c,d,e){d=d(a,c);
e=e(a,c);
return(C(d)?d:0)-(C(e)?e:0)
},"*":function(a,c,d,e){return d(a,c)*e(a,c)
},"/":function(a,c,d,e){return d(a,c)/e(a,c)
},"%":function(a,c,d,e){return d(a,c)%e(a,c)
},"^":function(a,c,d,e){return d(a,c)^e(a,c)
},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)
},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)
},"==":function(a,c,d,e){return d(a,c)==e(a,c)
},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)
},"<":function(a,c,d,e){return d(a,c)<e(a,c)
},">":function(a,c,d,e){return d(a,c)>e(a,c)
},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)
},">=":function(a,c,d,e){return d(a,c)>=e(a,c)
},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)
},"||":function(a,c,d,e){return d(a,c)||e(a,c)
},"&":function(a,c,d,e){return d(a,c)&e(a,c)
},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))
},"!":function(a,c,d){return !d(a,c)
}},Rd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Kb=function(a){this.options=a
};Kb.prototype={constructor:Kb,lex:function(a){this.text=a;
this.index=0;
this.ch=s;
this.lastCh=":";
this.tokens=[];
var c;
for(a=[];
this.index<this.text.length;
){this.ch=this.text.charAt(this.index);
if(this.is("\"'")){this.readString(this.ch)
}else{if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek())){this.readNumber()
}else{if(this.isIdent(this.ch)){this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."))
}else{if(this.is("(){}[].,;:?")){this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++
}else{if(this.isWhitespace(this.ch)){this.index++;
continue
}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Ia[this.ch],g=Ia[d],h=Ia[e];
h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)
}}}}}this.lastCh=this.ch
}return this.tokens
},is:function(a){return -1!==a.indexOf(this.ch)
},was:function(a){return -1!==a.indexOf(this.lastCh)
},peek:function(a){a=a||1;
return this.index+a<this.text.length?this.text.charAt(this.index+a):!1
},isNumber:function(a){return"0"<=a&&"9">=a
},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a
},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a
},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)
},throwError:function(a,c,d){d=d||this.index;
c=C(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;
throw ya("lexerr",a,c,this.text)
},readNumber:function(){for(var a="",c=this.index;
this.index<this.text.length;
){var d=u(this.text.charAt(this.index));
if("."==d||this.isNumber(d)){a+=d
}else{var e=this.peek();
if("e"==d&&this.isExpOperator(e)){a+=d
}else{if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1)){a+=d
}else{if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1)){break
}else{this.throwError("Invalid exponent")
}}}}this.index++
}a*=1;
this.tokens.push({index:c,text:a,json:!0,fn:function(){return a
}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;
this.index<this.text.length;
){h=this.text.charAt(this.index);
if("."===h||this.isIdent(h)||this.isNumber(h)){"."===h&&(e=this.index),c+=h
}else{break
}this.index++
}if(e){for(f=this.index;
f<this.text.length;
){h=this.text.charAt(f);
if("("===h){g=c.substr(e-d+1);
c=c.substr(0,e-d);
this.index=f;
break}if(this.isWhitespace(h)){f++
}else{break
}}}d={index:d,text:c};
if(Ia.hasOwnProperty(c)){d.fn=Ia[c],d.json=Ia[c]
}else{var m=tc(c,this.options,this.text);
d.fn=A(function(a,c){return m(a,c)
},{assign:function(d,e){return hb(d,c,e,a.text,a.options)
}})}this.tokens.push(d);
g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))
},readString:function(a){var c=this.index;
this.index++;
for(var d="",e=a,f=!1;
this.index<this.text.length;
){var g=this.text.charAt(this.index),e=e+g;
if(f){"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Rd[g])?d+f:d+g,f=!1
}else{if("\\"===g){f=!0
}else{if(g===a){this.index++;
this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d
}});return
}d+=g}}this.index++
}this.throwError("Unterminated quote",c)
}};var Wa=function(a,c,d){this.lexer=a;
this.$filter=c;
this.options=d
};Wa.ZERO=function(){return 0
};Wa.prototype={constructor:Wa,parse:function(a,c){this.text=a;
this.json=c;
this.tokens=this.lexer.lex(a);
c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})
});var d=c?this.primary():this.statements();
0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
d.literal=!!d.literal;
d.constant=!!d.constant;
return d
},primary:function(){var a;
if(this.expect("(")){a=this.filterChain(),this.consume(")")
}else{if(this.expect("[")){a=this.arrayDeclaration()
}else{if(this.expect("{")){a=this.object()
}else{var c=this.expect();
(a=c.fn)||this.throwError("not a primary expression",c);
c.json&&(a.constant=!0,a.literal=!0)
}}}for(var d;
c=this.expect("(","[",".");
){"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE")
}return a
},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index))
},peekToken:function(){if(0===this.tokens.length){throw ya("ueoe",this.text)
}return this.tokens[0]
},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;
if(g===a||g===c||g===d||g===e||!(a||c||d||e)){return f
}}return !1
},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1
},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())
},unaryFn:function(a,c){return A(function(d,e){return a(d,e,c)
},{constant:c.constant})
},ternaryFn:function(a,c,d){return A(function(e,f){return a(e,f)?c(e,f):d(e,f)
},{constant:a.constant&&c.constant&&d.constant})
},binaryFn:function(a,c,d){return A(function(e,f){return c(e,f,a,d)
},{constant:a.constant&&d.constant})
},statements:function(){for(var a=[];
;){if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";")){return 1===a.length?a[0]:function(c,d){for(var e,f=0;
f<a.length;
f++){var g=a[f];
g&&(e=g(c,d))
}return e
}}}},filterChain:function(){for(var a=this.expression(),c;
;){if(c=this.expect("|")){a=this.binaryFn(a,c.fn,this.filter())
}else{return a
}}},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];
;){if(a=this.expect(":")){d.push(this.expression())
}else{var e=function(a,e,h){h=[h];
for(var m=0;
m<d.length;
m++){h.push(d[m](a,e))
}return c.apply(a,h)
};return function(){return e
}}}},expression:function(){return this.assignment()
},assignment:function(){var a=this.ternary(),c,d;
return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)
}):a},ternary:function(){var a=this.logicalOR(),c,d;
if(this.expect("?")){c=this.ternary();
if(d=this.expect(":")){return this.ternaryFn(a,c,this.ternary())
}this.throwError("expected :",d)
}else{return a
}},logicalOR:function(){for(var a=this.logicalAND(),c;
;){if(c=this.expect("||")){a=this.binaryFn(a,c.fn,this.logicalAND())
}else{return a
}}},logicalAND:function(){var a=this.equality(),c;
if(c=this.expect("&&")){a=this.binaryFn(a,c.fn,this.logicalAND())
}return a
},equality:function(){var a=this.relational(),c;
if(c=this.expect("==","!=","===","!==")){a=this.binaryFn(a,c.fn,this.equality())
}return a
},relational:function(){var a=this.additive(),c;
if(c=this.expect("<",">","<=",">=")){a=this.binaryFn(a,c.fn,this.relational())
}return a
},additive:function(){for(var a=this.multiplicative(),c;
c=this.expect("+","-");
){a=this.binaryFn(a,c.fn,this.multiplicative())
}return a
},multiplicative:function(){for(var a=this.unary(),c;
c=this.expect("*","/","%");
){a=this.binaryFn(a,c.fn,this.unary())
}return a
},unary:function(){var a;
return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Wa.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()
},fieldAccess:function(a){var c=this,d=this.expect().text,e=tc(d,this.options,this.text);
return A(function(c,d,h){return e(h||a(c,d),d)
},{assign:function(e,g,h){return hb(a(e,h),d,g,c.text,c.options)
}})},objectIndex:function(a){var c=this,d=this.expression();
this.consume("]");
return A(function(e,f){var g=a(e,f),h=d(e,f),m;
if(!g){return s
}(g=Va(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v" in g||(m.$$v=s,m.then(function(a){m.$$v=a
})),g=g.$$v);
return g
},{assign:function(e,f,g){var h=d(e,g);
return Va(a(e,g),c.text)[h]=f
}})},functionCall:function(a,c){var d=[];
if(")"!==this.peekToken().text){do{d.push(this.expression())
}while(this.expect(","))
}this.consume(")");
var e=this;
return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;
k<d.length;
k++){h.push(d[k](f,g))
}k=a(f,g,m)||w;
Va(m,e.text);
Va(k,e.text);
h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);
return Va(h,e.text)
}},arrayDeclaration:function(){var a=[],c=!0;
if("]"!==this.peekToken().text){do{var d=this.expression();
a.push(d);
d.constant||(c=!1)
}while(this.expect(","))
}this.consume("]");
return A(function(c,d){for(var g=[],h=0;
h<a.length;
h++){g.push(a[h](c,d))
}return g
},{literal:!0,constant:c})
},object:function(){var a=[],c=!0;
if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;
this.consume(":");
var e=this.expression();
a.push({key:d,value:e});
e.constant||(c=!1)
}while(this.expect(","))
}this.consume("}");
return A(function(c,d){for(var e={},m=0;
m<a.length;
m++){var k=a[m];
e[k.key]=k.value(c,d)
}return e
},{literal:!0,constant:c})
}};var Jb={},ra=F("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},$=O.createElement("a"),wc=/^\/?.*?:(\/.*)/,xc=xa(W.location.href,!0);
yc.$inject=["$provide"];
zc.$inject=["$locale"];
Bc.$inject=["$locale"];
var Ec=".",Ld={yyyy:T("FullYear",4),yy:T("FullYear",2,0,!0),y:T("FullYear",1),MMMM:ib("Month"),MMM:ib("Month",!0),MM:T("Month",2,1),M:T("Month",1,1),dd:T("Date",2),d:T("Date",1),HH:T("Hours",2),H:T("Hours",1),hh:T("Hours",2,-12),h:T("Hours",1,-12),mm:T("Minutes",2),m:T("Minutes",1),ss:T("Seconds",2),s:T("Seconds",1),sss:T("Milliseconds",3),EEEE:ib("Day"),EEE:ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]
},Z:function(a){a=-1*a.getTimezoneOffset();
return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))
}},Kd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Jd=/^\-?\d+$/;
Ac.$inject=["$locale"];
var Hd=ca(u),Id=ca(Ga);
Cc.$inject=["$parse"];
var Sd=ca({restrict:"E",compile:function(a,c){8>=N&&(c.href||c.name||c.$set("href",""),a.append(O.createComment("IE fix")));
return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()
})}}}),Nb={};
p(eb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);
Nb[d]=function(){return{priority:100,compile:function(){return function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)
})}}}}
}});p(["src","srcset","href"],function(a){var c=ma("ng-"+a);
Nb[c]=function(){return{priority:99,link:function(d,e,f){f.$observe(c,function(c){c&&(f.$set(a,c),N&&e.prop(a,f[a]))
})}}}});
var lb={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};
Fc.$inject=["$element","$attrs","$scope"];
var Hc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Fc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1
};Gc(e[0],"submit",h);
e.on("$destroy",function(){c(function(){zb(e[0],"submit",h)
},0,!1)
})}var m=e.parent().controller("form"),k=f.name||f.ngForm;
k&&hb(a,k,g,k);
if(m){e.on("$destroy",function(){m.$removeControl(g);
k&&hb(a,k,s,k);
A(g,lb)
})}}}}}
}]},Td=Hc(),Ud=Hc(!0),Vd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Wd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Xd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Ic={text:nb,number:function(a,c,d,e,f,g){nb(a,c,d,e,f,g);
e.$parsers.push(function(a){var c=e.$isEmpty(a);
if(c||Xd.test(a)){return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a)
}e.$setValidity("number",!1);
return s
});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a
});d.min&&(a=function(a){var c=parseFloat(d.min);
if(!e.$isEmpty(a)&&a<c){return e.$setValidity("min",!1),s
}e.$setValidity("min",!0);
return a
},e.$parsers.push(a),e.$formatters.push(a));
d.max&&(a=function(a){var c=parseFloat(d.max);
if(!e.$isEmpty(a)&&a>c){return e.$setValidity("max",!1),s
}e.$setValidity("max",!0);
return a
},e.$parsers.push(a),e.$formatters.push(a));
e.$formatters.push(function(a){if(e.$isEmpty(a)||pb(a)){return e.$setValidity("number",!0),a
}e.$setValidity("number",!1);
return s
})},url:function(a,c,d,e,f,g){nb(a,c,d,e,f,g);
a=function(a){if(e.$isEmpty(a)||Vd.test(a)){return e.$setValidity("url",!0),a
}e.$setValidity("url",!1);
return s
};e.$formatters.push(a);
e.$parsers.push(a)
},email:function(a,c,d,e,f,g){nb(a,c,d,e,f,g);
a=function(a){if(e.$isEmpty(a)||Wd.test(a)){return e.$setValidity("email",!0),a
}e.$setValidity("email",!1);
return s
};e.$formatters.push(a);
e.$parsers.push(a)
},radio:function(a,c,d,e){y(d.name)&&c.attr("name",Xa());
c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)
})});e.$render=function(){c[0].checked=d.value==e.$viewValue
};d.$observe("value",e.$render)
},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;
D(f)||(f=!0);
D(g)||(g=!1);
c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)
})});e.$render=function(){c[0].checked=e.$viewValue
};e.$isEmpty=function(a){return a!==f
};e.$formatters.push(function(a){return a===f
});e.$parsers.push(function(a){return a?f:g
})},hidden:w,button:w,submit:w,reset:w},Jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Ic[u(f.type)]||Ic.text)(d,e,f,g,c,a)
}}}],kb="ng-valid",jb="ng-invalid",Ha="ng-pristine",mb="ng-dirty",Yd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,f){function g(a,c){c=c?"-"+bb(c,"-"):"";
e.removeClass((a?jb:kb)+c).addClass((a?kb:jb)+c)
}this.$modelValue=this.$viewValue=Number.NaN;
this.$parsers=[];
this.$formatters=[];
this.$viewChangeListeners=[];
this.$pristine=!0;
this.$dirty=!1;
this.$valid=!0;
this.$invalid=!1;
this.$name=d.name;
var h=f(d.ngModel),m=h.assign;
if(!m){throw F("ngModel")("nonassign",d.ngModel,ga(e))
}this.$render=w;
this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a
};var k=e.inheritedData("$formController")||lb,l=0,n=this.$error={};
e.addClass(Ha);
g(!0);
this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(g(!0),this.$valid=!0,this.$invalid=!1)):(g(!1),this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,g(c,a),k.$setValidity(a,c,this))
};this.$setPristine=function(){this.$dirty=!1;
this.$pristine=!0;
e.removeClass(mb).addClass(Ha)
};this.$setViewValue=function(d){this.$viewValue=d;
this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ha).addClass(mb),k.$setDirty());
p(this.$parsers,function(a){d=a(d)
});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),p(this.$viewChangeListeners,function(a){try{a()
}catch(d){c(d)
}}))};
var r=this;
a.$watch(function(){var c=h(a);
if(r.$modelValue!==c){var d=r.$formatters,e=d.length;
for(r.$modelValue=c;
e--;){c=d[e](c)
}r.$viewValue!==c&&(r.$viewValue=c,r.$render())
}})}],Zd=function(){return{require:["ngModel","^?form"],controller:Yd,link:function(a,c,d,e){var f=e[0],g=e[1]||lb;
g.$addControl(f);
a.$on("$destroy",function(){g.$removeControl(f)
})}}},$d=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)
})}}),Kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;
var f=function(a){if(d.required&&e.$isEmpty(a)){e.$setValidity("required",!1)
}else{return e.$setValidity("required",!0),a
}};e.$formatters.push(f);
e.$parsers.unshift(f);
d.$observe("required",function(){f(e.$viewValue)
})}}}},ae=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";
e.$parsers.push(function(a){if(!y(a)){var c=[];
a&&p(a.split(f),function(a){a&&c.push(aa(a))
});return c
}});e.$formatters.push(function(a){return K(a)?a.join(", "):s
});e.$isEmpty=function(a){return !a||!a.length
}}}},be=/^(true|false|\d+)$/,ce=function(){return{priority:100,compile:function(a,c){return be.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))
}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)
})}}}},de=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);
a.$watch(d.ngBind,function(a){c.text(a==s?"":a)
})}),ee=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));
d.addClass("ng-binding").data("$binding",c);
e.$observe("ngBindTemplate",function(a){d.text(a)
})}}],fe=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);
var g=c(f.ngBindHtml);
d.$watch(function(){return(g(d)||"").toString()
},function(c){e.html(a.getTrustedHtml(g(d))||"")
})}}],ge=Mb("",!0),he=Mb("Odd",0),ie=Mb("Even",1),je=sa({compile:function(a,c){c.$set("ngCloak",s);
a.removeClass("ng-cloak")
}}),ke=[function(){return{scope:!0,controller:"@"}
}],Lc={};
p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);
Lc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);
return function(c,d,e){d.on(u(a),function(a){c.$apply(function(){g(c,{$event:a})
})})}}}
}]});var le=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m;
c.$watch(e.ngIf,function(f){Ma(f)?m||(m=c.$new(),g(m,function(c){h={startNode:c[0],endNode:c[c.length++]=O.createComment(" end ngIf: "+e.ngIf+" ")};
a.enter(c,d.parent(),d)
})):(m&&(m.$destroy(),m=null),h&&(a.leave(ub(h)),h=null))
})}}}],me=["$http","$templateCache","$anchorScroll","$compile","$animate","$sce",function(a,c,d,e,f,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",compile:function(h,m){var k=m.ngInclude||m.src,l=m.onload||"",n=m.autoscroll;
return function(h,m,p,s,x){var v=0,B,G,t=function(){B&&(B.$destroy(),B=null);
G&&(f.leave(G),G=null)
};h.$watch(g.parseAsResourceUrl(k),function(g){var k=function(){!C(n)||n&&!h.$eval(n)||d()
},p=++v;
g?(a.get(g,{cache:c}).success(function(a){if(p===v){var c=h.$new();
x(c,function(d){t();
B=c;G=d;
G.html(a);
f.enter(G,null,m,k);
e(G.contents())(B);
B.$emit("$includeContentLoaded");
h.$eval(l)
})}}).error(function(){p===v&&t()
}),h.$emit("$includeContentRequested")):t()
})}}}}],ne=sa({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)
}}}}),oe=sa({terminal:!0,priority:1000}),pe=["$locale","$interpolate",function(a,c){var d=/{}/g;
return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(m)||{},n={},r=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;
p(g,function(a,c){s.test(c)&&(l[u(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))
});p(l,function(a,e){n[e]=c(a.replace(d,r+h+"-"+k+q))
});e.$watch(function(){var c=parseFloat(e.$eval(h));
if(isNaN(c)){return""
}c in l||(c=a.pluralCat(c-k));
return n[c](e,f,!0)
},function(a){f.text(a)
})}}}],qe=["$parse","$animate",function(a,c){var d=F("ngRepeat");
return{transclude:"element",priority:1000,terminal:!0,$$tlb:!0,link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),n,r,q,s,w,C,v={$id:Da};
if(!l){throw d("iexp",k)
}g=l[1];
h=l[2];
(l=l[4])?(n=a(l),r=function(a,c,d){C&&(v[C]=a);
v[w]=c;
v.$index=d;
return n(e,v)
}):(q=function(a,c){return Da(c)
},s=function(a){return a
});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
if(!l){throw d("iidexp",g)
}w=l[3]||l[1];
C=l[2];
var B={};
e.$watchCollection(h,function(a){var g,h,l=f[0],n,v={},y,P,D,S,A,u,F=[];
if(ob(a)){A=a,n=r||q
}else{n=r||s;
A=[];for(D in a){a.hasOwnProperty(D)&&"$"!=D.charAt(0)&&A.push(D)
}A.sort()
}y=A.length;
h=F.length=A.length;
for(g=0;
g<h;g++){if(D=a===A?g:A[g],S=a[D],S=n(D,S,g),va(S,"`track by` id"),B.hasOwnProperty(S)){u=B[S],delete B[S],v[S]=u,F[g]=u
}else{if(v.hasOwnProperty(S)){throw p(F,function(a){a&&a.startNode&&(B[a.id]=a)
}),d("dupes",k,S)
}F[g]={id:S};
v[S]=!1
}}for(D in B){B.hasOwnProperty(D)&&(u=B[D],g=ub(u),c.leave(g),p(g,function(a){a.$$NG_REMOVED=!0
}),u.scope.$destroy())
}g=0;for(h=A.length;
g<h;g++){D=a===A?g:A[g];
S=a[D];
u=F[g];
F[g-1]&&(l=F[g-1].endNode);
if(u.startNode){P=u.scope;
n=l;do{n=n.nextSibling
}while(n&&n.$$NG_REMOVED);
u.startNode!=n&&c.move(ub(u),null,x(l));
l=u.endNode
}else{P=e.$new()
}P[w]=S;
C&&(P[C]=D);
P.$index=g;
P.$first=0===g;
P.$last=g===y-1;
P.$middle=!(P.$first||P.$last);
P.$odd=!(P.$even=0===(g&1));
u.startNode||m(P,function(a){a[a.length++]=O.createComment(" end ngRepeat: "+k+" ");
c.enter(a,null,x(l));
l=a;u.scope=P;
u.startNode=l&&l.endNode?l.endNode:a[0];
u.endNode=a[a.length-1];
v[u.id]=u
})}B=v
})}}}],re=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ma(c)?"removeClass":"addClass"](d,"ng-hide")
})}}],se=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ma(c)?"addClass":"removeClass"](d,"ng-hide")
})}}],te=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,d){c.css(d,"")
});a&&c.css(a)
},!0)}),ue=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}
}],link:function(c,d,e,f){var g,h,m=[];
c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;
l<n;l++){m[l].$destroy(),a.leave(h[l])
}h=[];
m=[];if(g=f.cases["!"+d]||f.cases["?"]){c.$eval(e.change),p(g,function(d){var e=c.$new();
m.push(e);
d.transclude(e,function(c){var e=d.element;
h.push(c);
a.enter(c,e.parent(),e)
})})}})
}}}],ve=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c){return function(a,e,f,g,h){g.cases["!"+c.ngSwitchWhen]=g.cases["!"+c.ngSwitchWhen]||[];
g.cases["!"+c.ngSwitchWhen].push({transclude:h,element:e})
}}}),we=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];
e.cases["?"].push({transclude:f,element:c})
}}),xe=sa({controller:["$element","$transclude",function(a,c){if(!c){throw F("ngTransclude")("orphan",ga(a))
}this.$transclude=c
}],link:function(a,c,d,e){e.$transclude(function(a){c.html("");
c.append(a)
})}}),ye=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)
}}}],ze=F("ngOptions"),Ae=ca({terminal:!0}),Be=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:w};
return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;
m.databound=d.ngModel;
m.init=function(a,c,d){l=a;
n=d};m.addOption=function(c){va(c,'"option value"');
k[c]=!0;
l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())
};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))
};m.renderUnknownOption=function(c){c="? "+Da(c)+" ?";
n.val(c);
a.prepend(n);
a.val(c);
n.prop("selected",!0)
};m.hasOption=function(a){return k.hasOwnProperty(a)
};c.$on("$destroy",function(){m.renderUnknownOption=w
})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;
e.hasOption(a)?(t.parent()&&t.remove(),c.val(a),""===a&&v.prop("selected",!0)):y(a)&&v?c.val(""):e.renderUnknownOption(a)
};c.on("change",function(){a.$apply(function(){t.parent()&&t.remove();
d.$setViewValue(c.val())
})})}function l(a,c,d){var e;
d.$render=function(){var a=new Ra(d.$viewValue);
p(c.find("option"),function(c){c.selected=C(a.get(c.value))
})};a.$watch(function(){Ba(e,d.$viewValue)||(e=fa(d.$viewValue),d.$render())
});c.on("change",function(){a.$apply(function(){var a=[];
p(c.find("option"),function(c){c.selected&&a.push(c.value)
});d.$setViewValue(a)
})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,u,x;
u=g.$modelValue;
x=r(e)||[];
var A=n?Ob(x):x,F,y,I;
y={};s=!1;
var E,J;
if(z){if(t&&K(u)){for(s=new Ra([]),I=0;
I<u.length;
I++){y[m]=u[I],s.put(t(e,y),u[I])
}}else{s=new Ra(u)
}}for(I=0;
F=A.length,I<F;
I++){k=I;
if(n){k=A[I];
if("$"===k.charAt(0)){continue
}y[n]=k
}y[m]=x[k];
d=p(e,y)||"";
(k=a[d])||(k=a[d]=[],c.push(d));
z?d=C(s.remove(t?t(e,y):q(e,y))):(t?(d={},d[m]=u,d=t(e,d)===t(e,y)):d=u===q(e,y),s=s||d);
E=l(e,y);
E=C(E)?E:"";
k.push({id:t?t(e,y):n?A[I]:I,label:E,selected:d})
}z||(w||null===u?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));
y=0;for(A=c.length;
y<A;y++){d=c[y];
k=a[d];
v.length<=y?(u={element:D.clone().attr("label",d),label:k.label},x=[u],v.push(x),f.append(u.element)):(x=v[y],u=x[0],u.label!=d&&u.element.attr("label",u.label=d));
E=null;
I=0;for(F=k.length;
I<F;I++){s=k[I],(d=x[I+1])?(E=d.element,d.label!==s.label&&E.text(d.label=s.label),d.id!==s.id&&E.val(d.id=s.id),E[0].selected!==s.selected&&E.prop("selected",d.selected=s.selected)):(""===s.id&&w?J=w:(J=B.clone()).val(s.id).attr("selected",s.selected).text(s.label),x.push({element:J,label:s.label,id:s.id,selected:s.selected}),E?E.after(J):u.element.append(J),E=J)
}for(I++;
x.length>I;
){x.pop().element.remove()
}}for(;
v.length>y;
){v.pop()[0].element.remove()
}}var k;
if(!(k=u.match(d))){throw ze("iexp",u,ga(f))
}var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),r=c(k[7]),t=k[8]?c(k[8]):null,v=[[{element:f,label:""}]];
w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());
f.html("");
f.on("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},h,k,l,p,u,x,w;
if(z){for(k=[],p=0,x=v.length;
p<x;p++){for(a=v[p],l=1,u=a.length;
l<u;l++){if((h=a[l].element)[0].selected){h=h.val();
n&&(d[n]=h);
if(t){for(w=0;
w<c.length&&(d[m]=c[w],t(e,d)!=h);
w++){}}else{d[m]=c[h]
}k.push(q(e,d))
}}}}else{if(h=f.val(),"?"==h){k=s
}else{if(""===h){k=null
}else{if(t){for(w=0;
w<c.length;
w++){if(d[m]=c[w],t(e,d)==h){k=q(e,d);
break}}}else{d[m]=c[h],n&&(d[n]=h),k=q(e,d)
}}}}g.$setViewValue(k)
})});g.$render=h;
e.$watch(h)
}if(m[1]){var r=m[0],q=m[1],z=h.multiple,u=h.ngOptions,w=!1,v,B=x(O.createElement("option")),D=x(O.createElement("optgroup")),t=B.clone();
m=0;for(var A=g.children(),F=A.length;
m<F;m++){if(""===A[m].value){v=w=A.eq(m);
break}}r.init(q,w,t);
if(z&&(h.required||h.ngRequired)){var E=function(a){q.$setValidity("required",!h.required||a&&a.length);
return a
};q.$parsers.push(E);
q.$formatters.unshift(E);
h.$observe("required",function(){E(q.$viewValue)
})}u?n(e,g,q):z?l(e,g,q):k(e,g,q,r)
}}}}],Ce=["$interpolate",function(a){var c={addOption:w,removeOption:w};
return{restrict:"E",priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);
f||e.$set("value",d.text())
}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");
l&&l.databound?d.prop("selected",!1):l=c;
f?a.$watch(f,function(a,c){e.$set("value",a);
a!==c&&l.removeOption(c);
l.addOption(a)
}):l.addOption(e.value);
d.on("$destroy",function(){l.removeOption(e.value)
})}}}}],De=ca({restrict:"E",terminal:!0});
(Ca=W.jQuery)?(x=Ca,A(Ca.fn,{scope:Ea.scope,isolateScope:Ea.isolateScope,controller:Ea.controller,injector:Ea.injector,inheritedData:Ea.inheritedData}),vb("remove",!0,!0,!1),vb("empty",!1,!1,!1),vb("html",!1,!1,!0)):x=L;
ab.element=x;
(function(a){A(a,{bootstrap:Xb,copy:fa,extend:A,equals:Ba,element:x,forEach:p,injector:Yb,noop:w,bind:qb,toJson:oa,fromJson:Tb,identity:Aa,isUndefined:y,isDefined:C,isString:D,isFunction:E,isObject:U,isNumber:pb,isElement:Nc,isArray:K,version:Nd,isDate:Ja,lowercase:u,uppercase:Ga,callbacks:{counter:0},$$minErr:F,$$csp:Sb});
Ta=Tc(W);
try{Ta("ngLocale")
}catch(c){Ta("ngLocale",[]).provider("$locale",qd)
}Ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",gc).directive({a:Sd,input:Jc,textarea:Jc,form:Td,script:ye,select:Be,style:De,option:Ce,ngBind:de,ngBindHtml:fe,ngBindTemplate:ee,ngClass:ge,ngClassEven:ie,ngClassOdd:he,ngCloak:je,ngController:ke,ngForm:Ud,ngHide:se,ngIf:le,ngInclude:me,ngInit:ne,ngNonBindable:oe,ngPluralize:pe,ngRepeat:qe,ngShow:re,ngStyle:te,ngSwitch:ue,ngSwitchWhen:ve,ngSwitchDefault:we,ngOptions:Ae,ngTransclude:xe,ngModel:Zd,ngList:ae,ngChange:$d,required:Kc,ngRequired:Kc,ngValue:ce}).directive(Nb).directive(Lc);
a.provider({$anchorScroll:bd,$animate:Pd,$browser:dd,$cacheFactory:ed,$controller:hd,$document:id,$exceptionHandler:jd,$filter:yc,$interpolate:od,$interval:pd,$http:kd,$httpBackend:ld,$location:sd,$log:td,$parse:ud,$rootScope:xd,$q:vd,$sce:Ad,$sceDelegate:zd,$sniffer:Bd,$templateCache:fd,$timeout:Cd,$window:Dd})
}])})(ab);
x(O).ready(function(){Rc(O,Xb)
})})(window,document);
!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{clip:rect(0,auto,auto,0);-ms-zoom:1.0001;}.ng-animate-active{clip:rect(-1px,auto,auto,0);-ms-zoom:1;}</style>');
(function(v,c,B){function y(t,q,l,b,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(k,A,n,C,x){function w(){g&&(g.$destroy(),g=null);
p&&(f.leave(p),p=null)
}function d(){var a=t.current&&t.current.locals,e=a&&a.$template;
if(e){var z=k.$new();
x(z,function(u){u.html(e);
f.enter(u,null,p||A,function(){!c.isDefined(r)||r&&!k.$eval(r)||q()
});w();
var h=l(u.contents()),m=t.current;
g=m.scope=z;
p=u;if(m.controller){a.$scope=g;
var d=b(m.controller,a);
m.controllerAs&&(g[m.controllerAs]=d);
u.data("$ngControllerController",d);
u.children().data("$ngControllerController",d)
}h(g);
g.$emit("$viewContentLoaded");
g.$eval(s)
})}else{w()
}}var g,p,r=n.autoscroll,s=n.onload||"";
k.$on("$routeChangeSuccess",d);
d()}}}v=c.module("ngRoute",["ng"]).provider("$route",function(){function t(b,f){return c.extend(new (c.extend(function(){},{prototype:b})),f)
}function q(b,c){var k=c.caseInsensitiveMatch,l={originalPath:b,regexp:b},n=l.keys=[];
b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(b,c,f,d){b="?"===d?d:null;
d="*"===d?d:null;
n.push({name:f,optional:!!b});
c=c||"";
return""+(b?"":c)+"(?:"+(b?c:"")+(d&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")
}).replace(/([\/$\*])/g,"\\$1");
l.regexp=RegExp("^"+b+"$",k?"i":"");
return l
}var l={};
this.when=function(b,f){l[b]=c.extend({reloadOnSearch:!0},f,b&&q(b,f));
if(b){var k="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";
l[k]=c.extend({redirectTo:b},q(k,f))
}return this
};this.otherwise=function(b){this.when(null,b);
return this
};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,f,k,q,n,v,x,w){function d(){var a=g(),e=s.current;
if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!r){e.params=a.params,c.copy(e.params,k),b.$broadcast("$routeUpdate",e)
}else{if(a||e){r=!1,b.$broadcast("$routeChangeStart",a,e),(s.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?f.path(p(a.redirectTo,a.params)).search(a.params).replace():f.url(a.redirectTo(a.pathParams,f.path(),f.search())).replace()),q.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,h;
c.forEach(b,function(a,e){b[e]=c.isString(a)?n.get(a):n.invoke(a)
});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(h=a.templateUrl)&&(c.isFunction(h)&&(h=h(a.params)),h=w.getTrustedResourceUrl(h),c.isDefined(h)&&(a.loadedTemplateUrl=h,e=v.get(h,{cache:x}).then(function(a){return a.data
})));c.isDefined(e)&&(b.$template=e);
return q.all(b)
}}).then(function(f){a==s.current&&(a&&(a.locals=f,c.copy(a.params,k)),b.$broadcast("$routeChangeSuccess",a,e))
},function(c){a==s.current&&b.$broadcast("$routeChangeError",a,e,c)
})}}}function g(){var a,b;
c.forEach(l,function(d,l){var h;
if(h=!b){var m=f.path();
h=d.keys;
var k={};
if(d.regexp){if(m=d.regexp.exec(m)){for(var g=1,q=m.length;
g<q;++g){var n=h[g-1],p="string"==typeof m[g]?decodeURIComponent(m[g]):m[g];
n&&p&&(k[n.name]=p)
}h=k}else{h=null
}}else{h=null
}h=a=h
}h&&(b=t(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)
});return b||l[null]&&t(l[null],{params:{},pathParams:{}})
}function p(a,b){var d=[];
c.forEach((a||"").split(":"),function(a,c){if(0===c){d.push(a)
}else{var f=a.match(/(\w+)(.*)/),g=f[1];
d.push(b[g]);
d.push(f[2]||"");
delete b[g]
}});return d.join("")
}var r=!1,s={routes:l,reload:function(){r=!0;
b.$evalAsync(d)
}};b.$on("$locationChangeSuccess",d);
return s
}]});v.provider("$routeParams",function(){this.$get=function(){return{}
}});v.directive("ngView",y);
y.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]
})(window,window.angular);
var myApp=angular.module("recruiterApp",["ngRoute"]);
myApp.config(["$routeProvider",function($routeProvider){$routeProvider.when("/:pagename",{templateUrl:"router/template.html",controller:"tabController"}).otherwise({redirectTo:"/",templateUrl:"router/template.html",controller:"tabController"})
}]);myApp.controller("tabController",function($scope,$routeParams,$http){$scope.page=(typeof $routeParams.pagename==="undefined")?$("#nav").children("li:first").attr("id"):$routeParams.pagename;
$("#nav").children("li").removeClass("active");
$("#"+$scope.page).addClass("active");
$http({url:"router/"+$scope.page+".html",method:"POST"}).success(function(html){$scope.data=html
})});myApp.directive("template",function($compile){return{restrict:"A",replace:true,link:function(scope,ele,attrs){scope.$watch(attrs.template,function(html){ele.html(html);
$compile(ele.contents())(scope)
})}}});
myApp.controller("mainController",function($scope){$scope.tabCompanies=[{name: 'Cognizant Technology Solutions', fromTo : 'Aug ’14 – tillDate', urlParam:'cts', idParam:'cts'},{name:"KRDS Pvt LTD",fromTo:"Mar ’14 – Jun ’14",urlParam:"krds",idParam:"krds"},{name:"BookMyShow",fromTo:"Jun ’12 – Mar ’14",urlParam:"bookmyshow",idParam:"bookmyshow"},{name:"ChangeRepublic.com",fromTo:"July’11 – July ’12",urlParam:"cr",idParam:"cr"}];
$scope.url="test.html"
});
