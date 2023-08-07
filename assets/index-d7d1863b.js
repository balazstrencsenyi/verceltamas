(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var my={exports:{}},Pl={},gy={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),yI=Symbol.for("react.portal"),vI=Symbol.for("react.fragment"),_I=Symbol.for("react.strict_mode"),wI=Symbol.for("react.profiler"),EI=Symbol.for("react.provider"),II=Symbol.for("react.context"),TI=Symbol.for("react.forward_ref"),SI=Symbol.for("react.suspense"),AI=Symbol.for("react.memo"),RI=Symbol.for("react.lazy"),mp=Symbol.iterator;function CI(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vy=Object.assign,_y={};function Pi(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||yy}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wy(){}wy.prototype=Pi.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||yy}var Zh=Jh.prototype=new wy;Zh.constructor=Jh;vy(Zh,Pi.prototype);Zh.isPureReactComponent=!0;var gp=Array.isArray,Ey=Object.prototype.hasOwnProperty,ed={current:null},Iy={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ey.call(e,r)&&!Iy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:co,type:t,key:s,ref:o,props:i,_owner:ed.current}}function PI(t,e){return{$$typeof:co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===co}function kI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yp=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kI(""+t.key):e.toString(36)}function ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case co:case yI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Su(o,0):r,gp(i)?(n="",t!=null&&(n=t.replace(yp,"$&/")+"/"),ma(i,e,n,"",function(u){return u})):i!=null&&(td(i)&&(i=PI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Su(s,a);o+=ma(s,e,n,l,i)}else if(l=CI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Su(s,a++),o+=ma(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zo(t,e,n){if(t==null)return t;var r=[],i=0;return ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},ga={transition:null},xI={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ga,ReactCurrentOwner:ed};H.Children={map:zo,forEach:function(t,e,n){zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zo(t,function(){e++}),e},toArray:function(t){return zo(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Pi;H.Fragment=vI;H.Profiler=wI;H.PureComponent=Jh;H.StrictMode=_I;H.Suspense=SI;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xI;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ey.call(e,l)&&!Iy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:co,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:II,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:EI,_context:t},t.Consumer=t};H.createElement=Ty;H.createFactory=function(t){var e=Ty.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:TI,render:t}};H.isValidElement=td;H.lazy=function(t){return{$$typeof:RI,_payload:{_status:-1,_result:t},_init:NI}};H.memo=function(t,e){return{$$typeof:AI,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=ga.transition;ga.transition={};try{t()}finally{ga.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Xe.current.useCallback(t,e)};H.useContext=function(t){return Xe.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};H.useEffect=function(t,e){return Xe.current.useEffect(t,e)};H.useId=function(){return Xe.current.useId()};H.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Xe.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};H.useRef=function(t){return Xe.current.useRef(t)};H.useState=function(t){return Xe.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Xe.current.useTransition()};H.version="18.2.0";gy.exports=H;var B=gy.exports;const DI=gI(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OI=B,VI=Symbol.for("react.element"),LI=Symbol.for("react.fragment"),MI=Object.prototype.hasOwnProperty,FI=OI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$I={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MI.call(e,r)&&!$I.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VI,type:t,key:s,ref:o,props:i,_owner:FI.current}}Pl.Fragment=LI;Pl.jsx=Sy;Pl.jsxs=Sy;my.exports=Pl;var m=my.exports,Sc={},Ay={exports:{}},ct={},Ry={exports:{}},Cy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,U){var z=k.length;k.push(U);e:for(;0<z;){var de=z-1>>>1,Ee=k[de];if(0<i(Ee,U))k[de]=U,k[z]=Ee,z=de;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var U=k[0],z=k.pop();if(z!==U){k[0]=z;e:for(var de=0,Ee=k.length,Uo=Ee>>>1;de<Uo;){var Jn=2*(de+1)-1,Tu=k[Jn],Zn=Jn+1,jo=k[Zn];if(0>i(Tu,z))Zn<Ee&&0>i(jo,Tu)?(k[de]=jo,k[Zn]=z,de=Zn):(k[de]=Tu,k[Jn]=z,de=Jn);else if(Zn<Ee&&0>i(jo,z))k[de]=jo,k[Zn]=z,de=Zn;else break e}}return U}function i(k,U){var z=k.sortIndex-U.sortIndex;return z!==0?z:k.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,v=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=k)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function w(k){if(_=!1,g(k),!v)if(n(l)!==null)v=!0,Eu(A);else{var U=n(u);U!==null&&Iu(w,U.startTime-k)}}function A(k,U){v=!1,_&&(_=!1,p(O),O=-1),y=!0;var z=d;try{for(g(U),h=n(l);h!==null&&(!(h.expirationTime>U)||k&&!It());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Ee=de(h.expirationTime<=U);U=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),g(U)}else r(l);h=n(l)}if(h!==null)var Uo=!0;else{var Jn=n(u);Jn!==null&&Iu(w,Jn.startTime-U),Uo=!1}return Uo}finally{h=null,d=z,y=!1}}var R=!1,N=null,O=-1,J=5,j=-1;function It(){return!(t.unstable_now()-j<J)}function zi(){if(N!==null){var k=t.unstable_now();j=k;var U=!0;try{U=N(!0,k)}finally{U?Bi():(R=!1,N=null)}}else R=!1}var Bi;if(typeof f=="function")Bi=function(){f(zi)};else if(typeof MessageChannel<"u"){var pp=new MessageChannel,mI=pp.port2;pp.port1.onmessage=zi,Bi=function(){mI.postMessage(null)}}else Bi=function(){S(zi,0)};function Eu(k){N=k,R||(R=!0,Bi())}function Iu(k,U){O=S(function(){k(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Eu(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var z=d;d=U;try{return k()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,U){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var z=d;d=k;try{return U()}finally{d=z}},t.unstable_scheduleCallback=function(k,U,z){var de=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?de+z:de):z=de,k){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=z+Ee,k={id:c++,callback:U,priorityLevel:k,startTime:z,expirationTime:Ee,sortIndex:-1},z>de?(k.sortIndex=z,e(u,k),n(l)===null&&k===n(u)&&(_?(p(O),O=-1):_=!0,Iu(w,z-de))):(k.sortIndex=Ee,e(l,k),v||y||(v=!0,Eu(A))),k},t.unstable_shouldYield=It,t.unstable_wrapCallback=function(k){var U=d;return function(){var z=d;d=U;try{return k.apply(this,arguments)}finally{d=z}}}})(Cy);Ry.exports=Cy;var bI=Ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=B,lt=bI;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ky=new Set,Cs={};function Pr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(Cs[t]=e,t=0;t<e.length;t++)ky.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=Object.prototype.hasOwnProperty,UI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vp={},_p={};function jI(t){return Ac.call(_p,t)?!0:Ac.call(vp,t)?!1:UI.test(t)?_p[t]=!0:(vp[t]=!0,!1)}function zI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BI(t,e,n,r){if(e===null||typeof e>"u"||zI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,rd);Oe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,rd);Oe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,rd);Oe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BI(e,n,i,r)&&(n=null),r||i===null?jI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),$r=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),xy=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Dy=Symbol.for("react.offscreen"),wp=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Au;function es(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Ru=!1;function Cu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?es(t):""}function qI(t){switch(t.tag){case 5:return es(t.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 2:case 15:return t=Cu(t.type,!1),t;case 11:return t=Cu(t.type.render,!1),t;case 1:return t=Cu(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case $r:return"Portal";case Rc:return"Profiler";case sd:return"StrictMode";case Cc:return"Suspense";case Pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xy:return(t.displayName||"Context")+".Consumer";case Ny:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case vn:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function HI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WI(t){var e=Oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qo(t){t._valueTracker||(t._valueTracker=WI(t))}function Vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function La(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ly(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function xc(t,e){Ly(t,e);var n=jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dc(t,e.type,jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dc(t,e,n){(e!=="number"||La(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ts=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ts(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jn(n)}}function My(t,e){var n=jn(e.value),r=jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,$y=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KI=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(t){KI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hs[e]=hs[t]})});function by(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hs.hasOwnProperty(t)&&hs[t]?(""+e).trim():e+"px"}function Uy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=by(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var GI=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lc(t,e){if(e){if(GI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Mc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $c=null,ti=null,ni=null;function Ap(t){if(t=po(t)){if(typeof $c!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ol(e),$c(t.stateNode,t.type,e))}}function jy(t){ti?ni?ni.push(t):ni=[t]:ti=t}function zy(){if(ti){var t=ti,e=ni;if(ni=ti=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function By(t,e){return t(e)}function qy(){}var Pu=!1;function Hy(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return By(t,e,n)}finally{Pu=!1,(ti!==null||ni!==null)&&(qy(),zy())}}function ks(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var bc=!1;if(on)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{bc=!1}function QI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ds=!1,Ma=null,Fa=!1,Uc=null,XI={onError:function(t){ds=!0,Ma=t}};function YI(t,e,n,r,i,s,o,a,l){ds=!1,Ma=null,QI.apply(XI,arguments)}function JI(t,e,n,r,i,s,o,a,l){if(YI.apply(this,arguments),ds){if(ds){var u=Ma;ds=!1,Ma=null}else throw Error(I(198));Fa||(Fa=!0,Uc=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(t){if(kr(t)!==t)throw Error(I(188))}function ZI(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rp(i),t;if(s===r)return Rp(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Ky(t){return t=ZI(t),t!==null?Gy(t):null}function Gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gy(t);if(e!==null)return e;t=t.sibling}return null}var Qy=lt.unstable_scheduleCallback,Cp=lt.unstable_cancelCallback,e1=lt.unstable_shouldYield,t1=lt.unstable_requestPaint,fe=lt.unstable_now,n1=lt.unstable_getCurrentPriorityLevel,ud=lt.unstable_ImmediatePriority,Xy=lt.unstable_UserBlockingPriority,$a=lt.unstable_NormalPriority,r1=lt.unstable_LowPriority,Yy=lt.unstable_IdlePriority,kl=null,Bt=null;function i1(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:a1,s1=Math.log,o1=Math.LN2;function a1(t){return t>>>=0,t===0?32:31-(s1(t)/o1|0)|0}var Wo=64,Ko=4194304;function ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ns(a):(s&=o,s!==0&&(r=ns(s)))}else o=n&~i,o!==0?r=ns(o):s!==0&&(r=ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kt(e),i=1<<n,r|=t[n],e&=~i;return r}function l1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=l1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jy(){var t=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kt(e),t[e]=n}function c1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function Zy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ev,hd,tv,nv,rv,zc=!1,Go=[],kn=null,Nn=null,xn=null,Ns=new Map,xs=new Map,wn=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(e.pointerId)}}function Wi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=po(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function d1(t,e,n,r,i){switch(e){case"focusin":return kn=Wi(kn,t,e,n,r,i),!0;case"dragenter":return Nn=Wi(Nn,t,e,n,r,i),!0;case"mouseover":return xn=Wi(xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ns.set(s,Wi(Ns.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xs.set(s,Wi(xs.get(s)||null,t,e,n,r,i)),!0}return!1}function iv(t){var e=rr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wy(n),e!==null){t.blockedOn=e,rv(t.priority,function(){tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fc=r,n.target.dispatchEvent(r),Fc=null}else return e=po(n),e!==null&&hd(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){ya(t)&&n.delete(e)}function f1(){zc=!1,kn!==null&&ya(kn)&&(kn=null),Nn!==null&&ya(Nn)&&(Nn=null),xn!==null&&ya(xn)&&(xn=null),Ns.forEach(kp),xs.forEach(kp)}function Ki(t,e){t.blockedOn===e&&(t.blockedOn=null,zc||(zc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,f1)))}function Ds(t){function e(i){return Ki(i,t)}if(0<Go.length){Ki(Go[0],t);for(var n=1;n<Go.length;n++){var r=Go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kn!==null&&Ki(kn,t),Nn!==null&&Ki(Nn,t),xn!==null&&Ki(xn,t),Ns.forEach(e),xs.forEach(e),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)iv(n),n.blockedOn===null&&wn.shift()}var ri=mn.ReactCurrentBatchConfig,Ua=!0;function p1(t,e,n,r){var i=X,s=ri.transition;ri.transition=null;try{X=1,dd(t,e,n,r)}finally{X=i,ri.transition=s}}function m1(t,e,n,r){var i=X,s=ri.transition;ri.transition=null;try{X=4,dd(t,e,n,r)}finally{X=i,ri.transition=s}}function dd(t,e,n,r){if(Ua){var i=Bc(t,e,n,r);if(i===null)bu(t,e,r,ja,n),Pp(t,r);else if(d1(i,t,e,n,r))r.stopPropagation();else if(Pp(t,r),e&4&&-1<h1.indexOf(t)){for(;i!==null;){var s=po(i);if(s!==null&&ev(s),s=Bc(t,e,n,r),s===null&&bu(t,e,r,ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bu(t,e,r,null,n)}}var ja=null;function Bc(t,e,n,r){if(ja=null,t=ld(r),t=rr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ja=t,null}function sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case ud:return 1;case Xy:return 4;case $a:case r1:return 16;case Yy:return 536870912;default:return 16}default:return 16}}var Rn=null,fd=null,va=null;function ov(){if(va)return va;var t,e=fd,n=e.length,r,i="value"in Rn?Rn.value:Rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return va=i.slice(t,1<r?1-r:void 0)}function _a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function Np(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:Np,this.isPropagationStopped=Np,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=ht(ki),fo=le({},ki,{view:0,detail:0}),g1=ht(fo),Nu,xu,Gi,Nl=le({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(Nu=t.screenX-Gi.screenX,xu=t.screenY-Gi.screenY):xu=Nu=0,Gi=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),xp=ht(Nl),y1=le({},Nl,{dataTransfer:0}),v1=ht(y1),_1=le({},fo,{relatedTarget:0}),Du=ht(_1),w1=le({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),E1=ht(w1),I1=le({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T1=ht(I1),S1=le({},ki,{data:0}),Dp=ht(S1),A1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C1[t])?!!e[t]:!1}function md(){return P1}var k1=le({},fo,{key:function(t){if(t.key){var e=A1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?_a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N1=ht(k1),x1=le({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=ht(x1),D1=le({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),O1=ht(D1),V1=le({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=ht(V1),M1=le({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=ht(M1),$1=[9,13,27,32],gd=on&&"CompositionEvent"in window,fs=null;on&&"documentMode"in document&&(fs=document.documentMode);var b1=on&&"TextEvent"in window&&!fs,av=on&&(!gd||fs&&8<fs&&11>=fs),Vp=String.fromCharCode(32),Lp=!1;function lv(t,e){switch(t){case"keyup":return $1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function U1(t,e){switch(t){case"compositionend":return uv(e);case"keypress":return e.which!==32?null:(Lp=!0,Vp);case"textInput":return t=e.data,t===Vp&&Lp?null:t;default:return null}}function j1(t,e){if(Ur)return t==="compositionend"||!gd&&lv(t,e)?(t=ov(),va=fd=Rn=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return av&&e.locale!=="ko"?null:e.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z1[t.type]:e==="textarea"}function cv(t,e,n,r){jy(r),e=za(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ps=null,Os=null;function B1(t){Ev(t,0)}function xl(t){var e=Br(t);if(Vy(e))return t}function q1(t,e){if(t==="change")return e}var hv=!1;if(on){var Ou;if(on){var Vu="oninput"in document;if(!Vu){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Vu=typeof Fp.oninput=="function"}Ou=Vu}else Ou=!1;hv=Ou&&(!document.documentMode||9<document.documentMode)}function $p(){ps&&(ps.detachEvent("onpropertychange",dv),Os=ps=null)}function dv(t){if(t.propertyName==="value"&&xl(Os)){var e=[];cv(e,Os,t,ld(t)),Hy(B1,e)}}function H1(t,e,n){t==="focusin"?($p(),ps=e,Os=n,ps.attachEvent("onpropertychange",dv)):t==="focusout"&&$p()}function W1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Os)}function K1(t,e){if(t==="click")return xl(e)}function G1(t,e){if(t==="input"||t==="change")return xl(e)}function Q1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xt=typeof Object.is=="function"?Object.is:Q1;function Vs(t,e){if(xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ac.call(e,i)||!xt(t[i],e[i]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,e){var n=bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pv(){for(var t=window,e=La();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=La(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X1(t){var e=pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(r!==null&&yd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Up(n,s);var o=Up(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y1=on&&"documentMode"in document&&11>=document.documentMode,jr=null,qc=null,ms=null,Hc=!1;function jp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hc||jr==null||jr!==La(r)||(r=jr,"selectionStart"in r&&yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ms&&Vs(ms,r)||(ms=r,r=za(qc,"onSelect"),0<r.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jr)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Lu={},mv={};on&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Dl(t){if(Lu[t])return Lu[t];if(!zr[t])return t;var e=zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mv)return Lu[t]=e[n];return t}var gv=Dl("animationend"),yv=Dl("animationiteration"),vv=Dl("animationstart"),_v=Dl("transitionend"),wv=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){wv.set(t,e),Pr(e,[t])}for(var Mu=0;Mu<zp.length;Mu++){var Fu=zp[Mu],J1=Fu.toLowerCase(),Z1=Fu[0].toUpperCase()+Fu.slice(1);Kn(J1,"on"+Z1)}Kn(gv,"onAnimationEnd");Kn(yv,"onAnimationIteration");Kn(vv,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(_v,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eT=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function Bp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,JI(r,e,void 0,t),t.currentTarget=null}function Ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Bp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Bp(i,a,u),s=l}}}if(Fa)throw t=Uc,Fa=!1,Uc=null,t}function ee(t,e){var n=e[Xc];n===void 0&&(n=e[Xc]=new Set);var r=t+"__bubble";n.has(r)||(Iv(e,t,2,!1),n.add(r))}function $u(t,e,n){var r=0;e&&(r|=4),Iv(n,t,r,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Ls(t){if(!t[Yo]){t[Yo]=!0,ky.forEach(function(n){n!=="selectionchange"&&(eT.has(n)||$u(n,!1,t),$u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,$u("selectionchange",!1,e))}}function Iv(t,e,n,r){switch(sv(e)){case 1:var i=p1;break;case 4:i=m1;break;default:i=dd}n=i.bind(null,e,n,t),i=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Hy(function(){var u=s,c=ld(n),h=[];e:{var d=wv.get(t);if(d!==void 0){var y=pd,v=t;switch(t){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":y=N1;break;case"focusin":v="focus",y=Du;break;case"focusout":v="blur",y=Du;break;case"beforeblur":case"afterblur":y=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=v1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=O1;break;case gv:case yv:case vv:y=E1;break;case _v:y=L1;break;case"scroll":y=g1;break;case"wheel":y=F1;break;case"copy":case"cut":case"paste":y=T1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Op}var _=(e&4)!==0,S=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=ks(f,p),w!=null&&_.push(Ms(f,w,g)))),S)break;f=f.return}0<_.length&&(d=new y(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Fc&&(v=n.relatedTarget||n.fromElement)&&(rr(v)||v[an]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?rr(v):null,v!==null&&(S=kr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(_=xp,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Op,w="onPointerLeave",p="onPointerEnter",f="pointer"),S=y==null?d:Br(y),g=v==null?d:Br(v),d=new _(w,f+"leave",y,n,c),d.target=S,d.relatedTarget=g,w=null,rr(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=g,_.relatedTarget=S,w=_),S=w,y&&v)t:{for(_=y,p=v,f=0,g=_;g;g=Vr(g))f++;for(g=0,w=p;w;w=Vr(w))g++;for(;0<f-g;)_=Vr(_),f--;for(;0<g-f;)p=Vr(p),g--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=Vr(_),p=Vr(p)}_=null}else _=null;y!==null&&qp(h,d,y,_,!1),v!==null&&S!==null&&qp(h,S,v,_,!0)}}e:{if(d=u?Br(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var A=q1;else if(Mp(d))if(hv)A=G1;else{A=W1;var R=H1}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=K1);if(A&&(A=A(t,u))){cv(h,A,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Dc(d,"number",d.value)}switch(R=u?Br(u):window,t){case"focusin":(Mp(R)||R.contentEditable==="true")&&(jr=R,qc=u,ms=null);break;case"focusout":ms=qc=jr=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,jp(h,n,c);break;case"selectionchange":if(Y1)break;case"keydown":case"keyup":jp(h,n,c)}var N;if(gd)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ur?lv(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(av&&n.locale!=="ko"&&(Ur||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ur&&(N=ov()):(Rn=c,fd="value"in Rn?Rn.value:Rn.textContent,Ur=!0)),R=za(u,O),0<R.length&&(O=new Dp(O,t,null,n,c),h.push({event:O,listeners:R}),N?O.data=N:(N=uv(n),N!==null&&(O.data=N)))),(N=b1?U1(t,n):j1(t,n))&&(u=za(u,"onBeforeInput"),0<u.length&&(c=new Dp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Ev(h,e)})}function Ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ks(t,n),s!=null&&r.unshift(Ms(t,s,i)),s=ks(t,e),s!=null&&r.push(Ms(t,s,i))),t=t.return}return r}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ks(n,s),l!=null&&o.unshift(Ms(n,l,a))):i||(l=ks(n,s),l!=null&&o.push(Ms(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tT=/\r\n?/g,nT=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(tT,`
`).replace(nT,"")}function Jo(t,e,n){if(e=Hp(e),Hp(t)!==e&&n)throw Error(I(425))}function Ba(){}var Wc=null,Kc=null;function Gc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,rT=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,iT=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(t){return Wp.resolve(null).then(t).catch(sT)}:Qc;function sT(t){setTimeout(function(){throw t})}function Uu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ds(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ds(e)}function Dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ni,Fs="__reactProps$"+Ni,an="__reactContainer$"+Ni,Xc="__reactEvents$"+Ni,oT="__reactListeners$"+Ni,aT="__reactHandles$"+Ni;function rr(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[an]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kp(t);t!==null;){if(n=t[bt])return n;t=Kp(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[bt]||t[an],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ol(t){return t[Fs]||null}var Yc=[],qr=-1;function Gn(t){return{current:t}}function re(t){0>qr||(t.current=Yc[qr],Yc[qr]=null,qr--)}function Z(t,e){qr++,Yc[qr]=t.current,t.current=e}var zn={},qe=Gn(zn),et=Gn(!1),mr=zn;function pi(t,e){var n=t.type.contextTypes;if(!n)return zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tt(t){return t=t.childContextTypes,t!=null}function qa(){re(et),re(qe)}function Gp(t,e,n){if(qe.current!==zn)throw Error(I(168));Z(qe,e),Z(et,n)}function Tv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,HI(t)||"Unknown",i));return le({},n,r)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zn,mr=qe.current,Z(qe,t),Z(et,et.current),!0}function Qp(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Tv(t,e,mr),r.__reactInternalMemoizedMergedChildContext=t,re(et),re(qe),Z(qe,t)):re(et),Z(et,n)}var Jt=null,Vl=!1,ju=!1;function Sv(t){Jt===null?Jt=[t]:Jt.push(t)}function lT(t){Vl=!0,Sv(t)}function Qn(){if(!ju&&Jt!==null){ju=!0;var t=0,e=X;try{var n=Jt;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jt=null,Vl=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(t+1)),Qy(ud,Qn),i}finally{X=e,ju=!1}}return null}var Hr=[],Wr=0,Wa=null,Ka=0,dt=[],ft=0,gr=null,Zt=1,en="";function er(t,e){Hr[Wr++]=Ka,Hr[Wr++]=Wa,Wa=t,Ka=e}function Av(t,e,n){dt[ft++]=Zt,dt[ft++]=en,dt[ft++]=gr,gr=t;var r=Zt;t=en;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var s=32-kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zt=1<<32-kt(e)+i|n<<i|r,en=s+t}else Zt=1<<s|n<<i|r,en=t}function vd(t){t.return!==null&&(er(t,1),Av(t,1,0))}function _d(t){for(;t===Wa;)Wa=Hr[--Wr],Hr[Wr]=null,Ka=Hr[--Wr],Hr[Wr]=null;for(;t===gr;)gr=dt[--ft],dt[ft]=null,en=dt[--ft],dt[ft]=null,Zt=dt[--ft],dt[ft]=null}var ot=null,st=null,se=!1,Ct=null;function Rv(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,st=Dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,st=null,!0):!1;default:return!1}}function Jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zc(t){if(se){var e=st;if(e){var n=e;if(!Xp(t,e)){if(Jc(t))throw Error(I(418));e=Dn(n.nextSibling);var r=ot;e&&Xp(t,e)?Rv(r,n):(t.flags=t.flags&-4097|2,se=!1,ot=t)}}else{if(Jc(t))throw Error(I(418));t.flags=t.flags&-4097|2,se=!1,ot=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function Zo(t){if(t!==ot)return!1;if(!se)return Yp(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gc(t.type,t.memoizedProps)),e&&(e=st)){if(Jc(t))throw Cv(),Error(I(418));for(;e;)Rv(t,e),e=Dn(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=Dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=ot?Dn(t.stateNode.nextSibling):null;return!0}function Cv(){for(var t=st;t;)t=Dn(t.nextSibling)}function mi(){st=ot=null,se=!1}function wd(t){Ct===null?Ct=[t]:Ct.push(t)}var uT=mn.ReactCurrentBatchConfig;function At(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ga=Gn(null),Qa=null,Kr=null,Ed=null;function Id(){Ed=Kr=Qa=null}function Td(t){var e=Ga.current;re(Ga),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){Qa=t,Ed=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function wt(t){var e=t._currentValue;if(Ed!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(Qa===null)throw Error(I(308));Kr=t,Qa.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var ir=null;function Sd(t){ir===null?ir=[t]:ir.push(t)}function Pv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sd(e)):(n.next=i.next,i.next=n),e.interleaved=n,ln(t,r)}function ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _n=!1;function Ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function On(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Sd(r)):(e.next=i.next,i.next=e),r.interleaved=e,ln(t,n)}function wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}function Jp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xa(t,e,n,r){var i=t.updateQueue;_n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,y=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(y,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(y,h,d):v,d==null)break e;h=le({},h,d);break e;case 2:_n=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=h}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Nv=new Py.Component().refs;function th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Ln(t),s=sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Nt(e,t,i,r),wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Ln(t),s=sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Nt(e,t,i,r),wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=Ln(t),i=sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=On(t,i,r),e!==null&&(Nt(e,t,r,n),wa(e,t,r))}};function em(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vs(n,r)||!Vs(i,s):!0}function xv(t,e,n){var r=!1,i=zn,s=e.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=tt(e)?mr:qe.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):zn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Nv,Ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=tt(e)?mr:qe.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ll.enqueueReplaceState(i,i.state,null),Xa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Nv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nm(t){var e=t._init;return e(t._payload)}function Dv(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Mn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,w){return f===null||f.tag!==6?(f=Gu(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,w){var A=g.type;return A===br?c(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vn&&nm(A)===f.type)?(w=i(f,g.props),w.ref=Qi(p,f,g),w.return=p,w):(w=Ra(g.type,g.key,g.props,null,p.mode,w),w.ref=Qi(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Qu(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,w,A){return f===null||f.tag!==7?(f=hr(g,p.mode,w,A),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gu(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bo:return g=Ra(f.type,f.key,f.props,null,p.mode,g),g.ref=Qi(p,null,f),g.return=p,g;case $r:return f=Qu(f,p.mode,g),f.return=p,f;case vn:var w=f._init;return h(p,w(f._payload),g)}if(ts(f)||qi(f))return f=hr(f,p.mode,g,null),f.return=p,f;ea(p,f)}return null}function d(p,f,g,w){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bo:return g.key===A?l(p,f,g,w):null;case $r:return g.key===A?u(p,f,g,w):null;case vn:return A=g._init,d(p,f,A(g._payload),w)}if(ts(g)||qi(g))return A!==null?null:c(p,f,g,w,null);ea(p,g)}return null}function y(p,f,g,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,a(f,p,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bo:return p=p.get(w.key===null?g:w.key)||null,l(f,p,w,A);case $r:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,A);case vn:var R=w._init;return y(p,f,g,R(w._payload),A)}if(ts(w)||qi(w))return p=p.get(g)||null,c(f,p,w,A,null);ea(f,w)}return null}function v(p,f,g,w){for(var A=null,R=null,N=f,O=f=0,J=null;N!==null&&O<g.length;O++){N.index>O?(J=N,N=null):J=N.sibling;var j=d(p,N,g[O],w);if(j===null){N===null&&(N=J);break}t&&N&&j.alternate===null&&e(p,N),f=s(j,f,O),R===null?A=j:R.sibling=j,R=j,N=J}if(O===g.length)return n(p,N),se&&er(p,O),A;if(N===null){for(;O<g.length;O++)N=h(p,g[O],w),N!==null&&(f=s(N,f,O),R===null?A=N:R.sibling=N,R=N);return se&&er(p,O),A}for(N=r(p,N);O<g.length;O++)J=y(N,p,O,g[O],w),J!==null&&(t&&J.alternate!==null&&N.delete(J.key===null?O:J.key),f=s(J,f,O),R===null?A=J:R.sibling=J,R=J);return t&&N.forEach(function(It){return e(p,It)}),se&&er(p,O),A}function _(p,f,g,w){var A=qi(g);if(typeof A!="function")throw Error(I(150));if(g=A.call(g),g==null)throw Error(I(151));for(var R=A=null,N=f,O=f=0,J=null,j=g.next();N!==null&&!j.done;O++,j=g.next()){N.index>O?(J=N,N=null):J=N.sibling;var It=d(p,N,j.value,w);if(It===null){N===null&&(N=J);break}t&&N&&It.alternate===null&&e(p,N),f=s(It,f,O),R===null?A=It:R.sibling=It,R=It,N=J}if(j.done)return n(p,N),se&&er(p,O),A;if(N===null){for(;!j.done;O++,j=g.next())j=h(p,j.value,w),j!==null&&(f=s(j,f,O),R===null?A=j:R.sibling=j,R=j);return se&&er(p,O),A}for(N=r(p,N);!j.done;O++,j=g.next())j=y(N,p,O,j.value,w),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?O:j.key),f=s(j,f,O),R===null?A=j:R.sibling=j,R=j);return t&&N.forEach(function(zi){return e(p,zi)}),se&&er(p,O),A}function S(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Bo:e:{for(var A=g.key,R=f;R!==null;){if(R.key===A){if(A=g.type,A===br){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vn&&nm(A)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=Qi(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===br?(f=hr(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=Ra(g.type,g.key,g.props,null,p.mode,w),w.ref=Qi(p,f,g),w.return=p,p=w)}return o(p);case $r:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Qu(g,p.mode,w),f.return=p,p=f}return o(p);case vn:return R=g._init,S(p,f,R(g._payload),w)}if(ts(g))return v(p,f,g,w);if(qi(g))return _(p,f,g,w);ea(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Gu(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return S}var gi=Dv(!0),Ov=Dv(!1),mo={},qt=Gn(mo),$s=Gn(mo),bs=Gn(mo);function sr(t){if(t===mo)throw Error(I(174));return t}function Rd(t,e){switch(Z(bs,e),Z($s,t),Z(qt,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vc(e,t)}re(qt),Z(qt,e)}function yi(){re(qt),re($s),re(bs)}function Vv(t){sr(bs.current);var e=sr(qt.current),n=Vc(e,t.type);e!==n&&(Z($s,t),Z(qt,n))}function Cd(t){$s.current===t&&(re(qt),re($s))}var oe=Gn(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function Pd(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var Ea=mn.ReactCurrentDispatcher,Bu=mn.ReactCurrentBatchConfig,yr=0,ae=null,ve=null,Te=null,Ja=!1,gs=!1,Us=0,cT=0;function Ve(){throw Error(I(321))}function kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xt(t[n],e[n]))return!1;return!0}function Nd(t,e,n,r,i,s){if(yr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ea.current=t===null||t.memoizedState===null?pT:mT,t=n(r,i),gs){s=0;do{if(gs=!1,Us=0,25<=s)throw Error(I(301));s+=1,Te=ve=null,e.updateQueue=null,Ea.current=gT,t=n(r,i)}while(gs)}if(Ea.current=Za,e=ve!==null&&ve.next!==null,yr=0,Te=ve=ae=null,Ja=!1,e)throw Error(I(300));return t}function xd(){var t=Us!==0;return Us=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ae.memoizedState=Te=t:Te=Te.next=t,Te}function Et(){if(ve===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Te===null?ae.memoizedState:Te.next;if(e!==null)Te=e,ve=t;else{if(t===null)throw Error(I(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Te===null?ae.memoizedState=Te=t:Te=Te.next=t}return Te}function js(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=Et(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,vr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,xt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hu(t){var e=Et(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Lv(){}function Mv(t,e){var n=ae,r=Et(),i=e(),s=!xt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,Dd(bv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,zs(9,$v.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(I(349));yr&30||Fv(n,e,i)}return i}function Fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $v(t,e,n,r){e.value=n,e.getSnapshot=r,Uv(e)&&jv(t)}function bv(t,e,n){return n(function(){Uv(e)&&jv(t)})}function Uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xt(t,n)}catch{return!0}}function jv(t){var e=ln(t,1);e!==null&&Nt(e,t,1,-1)}function rm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},e.queue=t,t=t.dispatch=fT.bind(null,ae,t),[e.memoizedState,t]}function zs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zv(){return Et().memoizedState}function Ia(t,e,n,r){var i=$t();ae.flags|=t,i.memoizedState=zs(1|e,n,void 0,r===void 0?null:r)}function Ml(t,e,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&kd(r,o.deps)){i.memoizedState=zs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=zs(1|e,n,s,r)}function im(t,e){return Ia(8390656,8,t,e)}function Dd(t,e){return Ml(2048,8,t,e)}function Bv(t,e){return Ml(4,2,t,e)}function qv(t,e){return Ml(4,4,t,e)}function Hv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wv(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4,4,Hv.bind(null,e,t),n)}function Od(){}function Kv(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gv(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Qv(t,e,n){return yr&21?(xt(n,e)||(n=Jy(),ae.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function hT(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=Bu.transition;Bu.transition={};try{t(!1),e()}finally{X=n,Bu.transition=r}}function Xv(){return Et().memoizedState}function dT(t,e,n){var r=Ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yv(t))Jv(e,n);else if(n=Pv(t,e,n,r),n!==null){var i=Qe();Nt(n,t,r,i),Zv(n,e,r)}}function fT(t,e,n){var r=Ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yv(t))Jv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xt(a,o)){var l=e.interleaved;l===null?(i.next=i,Sd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Pv(t,e,i,r),n!==null&&(i=Qe(),Nt(n,t,r,i),Zv(n,e,r))}}function Yv(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Jv(t,e){gs=Ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}var Za={readContext:wt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},pT={readContext:wt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:wt,useEffect:im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4194308,4,Hv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ia(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dT.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:Od,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=hT.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=$t();if(se){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Se===null)throw Error(I(349));yr&30||Fv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,im(bv.bind(null,r,s,t),[t]),r.flags|=2048,zs(9,$v.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Se.identifierPrefix;if(se){var n=en,r=Zt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mT={readContext:wt,useCallback:Kv,useContext:wt,useEffect:Dd,useImperativeHandle:Wv,useInsertionEffect:Bv,useLayoutEffect:qv,useMemo:Gv,useReducer:qu,useRef:zv,useState:function(){return qu(js)},useDebugValue:Od,useDeferredValue:function(t){var e=Et();return Qv(e,ve.memoizedState,t)},useTransition:function(){var t=qu(js)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Mv,useId:Xv,unstable_isNewReconciler:!1},gT={readContext:wt,useCallback:Kv,useContext:wt,useEffect:Dd,useImperativeHandle:Wv,useInsertionEffect:Bv,useLayoutEffect:qv,useMemo:Gv,useReducer:Hu,useRef:zv,useState:function(){return Hu(js)},useDebugValue:Od,useDeferredValue:function(t){var e=Et();return ve===null?e.memoizedState=t:Qv(e,ve.memoizedState,t)},useTransition:function(){var t=Hu(js)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Mv,useId:Xv,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=qI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yT=typeof WeakMap=="function"?WeakMap:Map;function e_(t,e,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tl||(tl=!0,fh=r),rh(t,e)},n}function t_(t,e,n){n=sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rh(t,e),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xT.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sn(-1,1),e.tag=2,On(n,e,1))),n.lanes|=1),t)}var vT=mn.ReactCurrentOwner,Ze=!1;function Ke(t,e,n,r){e.child=t===null?Ov(e,null,n,r):gi(e,t.child,n,r)}function lm(t,e,n,r,i){n=n.render;var s=e.ref;return ii(e,i),r=Nd(t,e,n,r,s,i),n=xd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(se&&n&&vd(e),e.flags|=1,Ke(t,e,r,i),e.child)}function um(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,n_(t,e,s,r,i)):(t=Ra(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vs,n(o,r)&&t.ref===e.ref)return un(t,e,i)}return e.flags|=1,t=Mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function n_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vs(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,un(t,e,i)}return ih(t,e,n,r,i)}function r_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Qr,it),it|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Qr,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Qr,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Qr,it),it|=r;return Ke(t,e,i,n),e.child}function i_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,r,i){var s=tt(n)?mr:qe.current;return s=pi(e,s),ii(e,i),n=Nd(t,e,n,r,s,i),r=xd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(se&&r&&vd(e),e.flags|=1,Ke(t,e,n,i),e.child)}function cm(t,e,n,r,i){if(tt(n)){var s=!0;Ha(e)}else s=!1;if(ii(e,i),e.stateNode===null)Ta(t,e),xv(e,n,r),nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=tt(n)?mr:qe.current,u=pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&tm(e,o,r,u),_n=!1;var d=e.memoizedState;o.state=d,Xa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||et.current||_n?(typeof c=="function"&&(th(e,n,c,r),l=e.memoizedState),(a=_n||em(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:At(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=tt(n)?mr:qe.current,l=pi(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&tm(e,o,r,l),_n=!1,d=e.memoizedState,o.state=d,Xa(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||et.current||_n?(typeof y=="function"&&(th(e,n,y,r),v=e.memoizedState),(u=_n||em(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,s,i)}function sh(t,e,n,r,i,s){i_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qp(e,n,!1),un(t,e,s);r=e.stateNode,vT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&Qp(e,n,!0),e.child}function s_(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),Rd(t,e.containerInfo)}function hm(t,e,n,r,i){return mi(),wd(i),e.flags|=256,Ke(t,e,n,r),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function o_(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return Zc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,r,0,null),t=hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):Vd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _T(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mn(a,s):(s=hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,r}return s=t.child,t=s.sibling,r=Mn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vd(t,e){return e=bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,r){return r!==null&&wd(r),gi(e,t.child,null,n),t=Vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _T(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wu(Error(I(422))),ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bl({mode:"visible",children:r.children},i,0,null),s=hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gi(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Wu(s,r,void 0),ta(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ln(t,i),Nt(r,t,i,-1))}return Ud(),r=Wu(Error(I(421))),ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=Dn(i.nextSibling),ot=e,se=!0,Ct=null,t!==null&&(dt[ft++]=Zt,dt[ft++]=en,dt[ft++]=gr,Zt=t.id,en=t.overflow,gr=e),e=Vd(e,r.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),eh(t.return,e,n)}function Ku(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function a_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ku(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ya(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ku(e,!0,n,null,s);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wT(t,e,n){switch(e.tag){case 3:s_(e),mi();break;case 5:Vv(e);break;case 1:tt(e.type)&&Ha(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?o_(t,e,n):(Z(oe,oe.current&1),t=un(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return a_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,r_(t,e,n)}return un(t,e,n)}var l_,lh,u_,c_;l_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};u_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,sr(qt.current);var s=null;switch(n){case"input":i=Nc(t,i),r=Nc(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Oc(t,i),r=Oc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ba)}Lc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};c_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xi(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ET(t,e,n){var r=e.pendingProps;switch(_d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return tt(e.type)&&qa(),Le(e),null;case 3:return r=e.stateNode,yi(),re(et),re(qe),Pd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ct!==null&&(gh(Ct),Ct=null))),lh(t,e),Le(e),null;case 5:Cd(e);var i=sr(bs.current);if(n=e.type,t!==null&&e.stateNode!=null)u_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Le(e),null}if(t=sr(qt.current),Zo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[Fs]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<rs.length;i++)ee(rs[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Ep(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Tp(r,s),ee("invalid",r)}Lc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,a,t),i=["children",""+a]):Cs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":qo(r),Ip(r,s,!0);break;case"textarea":qo(r),Sp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ba)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[Fs]=r,l_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<rs.length;i++)ee(rs[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Ep(t,r),i=Nc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Tp(t,r),i=Oc(t,r),ee("invalid",t);break;default:i=r}Lc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Uy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$y(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ps(t,l):typeof l=="number"&&Ps(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&id(t,s,l,o))}switch(n){case"input":qo(t),Ip(t,r,!1);break;case"textarea":qo(t),Sp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)c_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=sr(bs.current),sr(qt.current),Zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:Jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return Le(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&st!==null&&e.mode&1&&!(e.flags&128))Cv(),mi(),e.flags|=98560,s=!1;else if(s=Zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[bt]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else Ct!==null&&(gh(Ct),Ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?_e===0&&(_e=3):Ud())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return yi(),lh(t,e),t===null&&Ls(e.stateNode.containerInfo),Le(e),null;case 10:return Td(e.type._context),Le(e),null;case 17:return tt(e.type)&&qa(),Le(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xi(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,Xi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>_i&&(e.flags|=128,r=!0,Xi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ya(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Le(e),null}else 2*fe()-s.renderingStartTime>_i&&n!==1073741824&&(e.flags|=128,r=!0,Xi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?it&1073741824&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function IT(t,e){switch(_d(e),e.tag){case 1:return tt(e.type)&&qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),re(et),re(qe),Pd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return yi(),null;case 10:return Td(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var na=!1,$e=!1,TT=typeof WeakSet=="function"?WeakSet:Set,P=null;function Gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function uh(t,e,n){try{n()}catch(r){ce(t,e,r)}}var fm=!1;function ST(t,e){if(Wc=Ua,t=pv(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kc={focusedElem:t,selectionRange:n},Ua=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,S=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:At(e.type,_),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=fm,fm=!1,v}function ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uh(e,n,s)}i=i.next}while(i!==r)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h_(t){var e=t.alternate;e!==null&&(t.alternate=null,h_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[Fs],delete e[Xc],delete e[oT],delete e[aT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function d_(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(r!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}var Pe=null,Rt=!1;function gn(t,e,n){for(n=n.child;n!==null;)f_(t,e,n),n=n.sibling}function f_(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:$e||Gr(n,e);case 6:var r=Pe,i=Rt;Pe=null,gn(t,e,n),Pe=r,Rt=i,Pe!==null&&(Rt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Rt?(t=Pe,n=n.stateNode,t.nodeType===8?Uu(t.parentNode,n):t.nodeType===1&&Uu(t,n),Ds(t)):Uu(Pe,n.stateNode));break;case 4:r=Pe,i=Rt,Pe=n.stateNode.containerInfo,Rt=!0,gn(t,e,n),Pe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(n,e,o),i=i.next}while(i!==r)}gn(t,e,n);break;case 1:if(!$e&&(Gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}gn(t,e,n);break;case 21:gn(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,gn(t,e,n),$e=r):gn(t,e,n);break;default:gn(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TT),e.forEach(function(r){var i=OT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Rt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Rt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(Pe===null)throw Error(I(160));f_(s,o,i),Pe=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p_(e,t),e=e.sibling}function p_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tt(e,t),Ft(t),r&4){try{ys(3,t,t.return),Fl(3,t)}catch(_){ce(t,t.return,_)}try{ys(5,t,t.return)}catch(_){ce(t,t.return,_)}}break;case 1:Tt(e,t),Ft(t),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(Tt(e,t),Ft(t),r&512&&n!==null&&Gr(n,n.return),t.flags&32){var i=t.stateNode;try{Ps(i,"")}catch(_){ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ly(i,s),Mc(a,o);var u=Mc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Uy(i,h):c==="dangerouslySetInnerHTML"?$y(i,h):c==="children"?Ps(i,h):id(i,c,h,u)}switch(a){case"input":xc(i,s);break;case"textarea":My(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ei(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fs]=s}catch(_){ce(t,t.return,_)}}break;case 6:if(Tt(e,t),Ft(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ce(t,t.return,_)}}break;case 3:if(Tt(e,t),Ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(e.containerInfo)}catch(_){ce(t,t.return,_)}break;case 4:Tt(e,t),Ft(t);break;case 13:Tt(e,t),Ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fd=fe())),r&4&&mm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($e=(u=$e)||c,Tt(e,t),$e=u):Tt(e,t),Ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,y=d.child,d.tag){case 0:case 11:case 14:case 15:ys(4,d,d.return);break;case 1:Gr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ce(r,n,_)}}break;case 5:Gr(d,d.return);break;case 22:if(d.memoizedState!==null){ym(h);continue}}y!==null?(y.return=d,P=y):ym(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=by("display",o))}catch(_){ce(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ce(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tt(e,t),Ft(t),r&4&&mm(t);break;case 21:break;default:Tt(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(d_(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ps(i,""),r.flags&=-33);var s=pm(t);dh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=pm(t);hh(t,a,o);break;default:throw Error(I(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AT(t,e,n){P=t,m_(t)}function m_(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||na;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=na;var u=$e;if(na=o,($e=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?vm(i):l!==null?(l.return=o,P=l):vm(i);for(;s!==null;)P=s,m_(s),s=s.sibling;P=i,na=a,$e=u}gm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):gm(t)}}function gm(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||Fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ds(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}$e||e.flags&512&&ch(e)}catch(d){ce(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function ym(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function vm(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{ch(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{ch(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var RT=Math.ceil,el=mn.ReactCurrentDispatcher,Ld=mn.ReactCurrentOwner,yt=mn.ReactCurrentBatchConfig,K=0,Se=null,ge=null,xe=0,it=0,Qr=Gn(0),_e=0,Bs=null,vr=0,$l=0,Md=0,vs=null,Je=null,Fd=0,_i=1/0,Yt=null,tl=!1,fh=null,Vn=null,ra=!1,Cn=null,nl=0,_s=0,ph=null,Sa=-1,Aa=0;function Qe(){return K&6?fe():Sa!==-1?Sa:Sa=fe()}function Ln(t){return t.mode&1?K&2&&xe!==0?xe&-xe:uT.transition!==null?(Aa===0&&(Aa=Jy()),Aa):(t=X,t!==0||(t=window.event,t=t===void 0?16:sv(t.type)),t):1}function Nt(t,e,n,r){if(50<_s)throw _s=0,ph=null,Error(I(185));ho(t,n,r),(!(K&2)||t!==Se)&&(t===Se&&(!(K&2)&&($l|=n),_e===4&&En(t,xe)),nt(t,r),n===1&&K===0&&!(e.mode&1)&&(_i=fe()+500,Vl&&Qn()))}function nt(t,e){var n=t.callbackNode;u1(t,e);var r=ba(t,t===Se?xe:0);if(r===0)n!==null&&Cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cp(n),e===1)t.tag===0?lT(_m.bind(null,t)):Sv(_m.bind(null,t)),iT(function(){!(K&6)&&Qn()}),n=null;else{switch(Zy(r)){case 1:n=ud;break;case 4:n=Xy;break;case 16:n=$a;break;case 536870912:n=Yy;break;default:n=$a}n=T_(n,g_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function g_(t,e){if(Sa=-1,Aa=0,K&6)throw Error(I(327));var n=t.callbackNode;if(si()&&t.callbackNode!==n)return null;var r=ba(t,t===Se?xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rl(t,r);else{e=r;var i=K;K|=2;var s=v_();(Se!==t||xe!==e)&&(Yt=null,_i=fe()+500,cr(t,e));do try{kT();break}catch(a){y_(t,a)}while(1);Id(),el.current=s,K=i,ge!==null?e=0:(Se=null,xe=0,e=_e)}if(e!==0){if(e===2&&(i=jc(t),i!==0&&(r=i,e=mh(t,i))),e===1)throw n=Bs,cr(t,0),En(t,r),nt(t,fe()),n;if(e===6)En(t,r);else{if(i=t.current.alternate,!(r&30)&&!CT(i)&&(e=rl(t,r),e===2&&(s=jc(t),s!==0&&(r=s,e=mh(t,s))),e===1))throw n=Bs,cr(t,0),En(t,r),nt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:tr(t,Je,Yt);break;case 3:if(En(t,r),(r&130023424)===r&&(e=Fd+500-fe(),10<e)){if(ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qc(tr.bind(null,t,Je,Yt),e);break}tr(t,Je,Yt);break;case 4:if(En(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RT(r/1960))-r,10<r){t.timeoutHandle=Qc(tr.bind(null,t,Je,Yt),r);break}tr(t,Je,Yt);break;case 5:tr(t,Je,Yt);break;default:throw Error(I(329))}}}return nt(t,fe()),t.callbackNode===n?g_.bind(null,t):null}function mh(t,e){var n=vs;return t.current.memoizedState.isDehydrated&&(cr(t,e).flags|=256),t=rl(t,e),t!==2&&(e=Je,Je=n,e!==null&&gh(e)),t}function gh(t){Je===null?Je=t:Je.push.apply(Je,t)}function CT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function En(t,e){for(e&=~Md,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kt(e),r=1<<n;t[n]=-1,e&=~r}}function _m(t){if(K&6)throw Error(I(327));si();var e=ba(t,0);if(!(e&1))return nt(t,fe()),null;var n=rl(t,e);if(t.tag!==0&&n===2){var r=jc(t);r!==0&&(e=r,n=mh(t,r))}if(n===1)throw n=Bs,cr(t,0),En(t,e),nt(t,fe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,Je,Yt),nt(t,fe()),null}function $d(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(_i=fe()+500,Vl&&Qn())}}function _r(t){Cn!==null&&Cn.tag===0&&!(K&6)&&si();var e=K;K|=1;var n=yt.transition,r=X;try{if(yt.transition=null,X=1,t)return t()}finally{X=r,yt.transition=n,K=e,!(K&6)&&Qn()}}function bd(){it=Qr.current,re(Qr)}function cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rT(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(_d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:yi(),re(et),re(qe),Pd();break;case 5:Cd(r);break;case 4:yi();break;case 13:re(oe);break;case 19:re(oe);break;case 10:Td(r.type._context);break;case 22:case 23:bd()}n=n.return}if(Se=t,ge=t=Mn(t.current,null),xe=it=e,_e=0,Bs=null,Md=$l=vr=0,Je=vs=null,ir!==null){for(e=0;e<ir.length;e++)if(n=ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ir=null}return t}function y_(t,e){do{var n=ge;try{if(Id(),Ea.current=Za,Ja){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ja=!1}if(yr=0,Te=ve=ae=null,gs=!1,Us=0,Ld.current=null,n===null||n.return===null){_e=1,Bs=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=om(o);if(y!==null){y.flags&=-257,am(y,o,a,s,e),y.mode&1&&sm(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){sm(s,u,e),Ud();break e}l=Error(I(426))}}else if(se&&a.mode&1){var S=om(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),am(S,o,a,s,e),wd(vi(l,a));break e}}s=l=vi(l,a),_e!==4&&(_e=2),vs===null?vs=[s]:vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=e_(s,l,e);Jp(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vn===null||!Vn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=t_(s,a,e);Jp(s,w);break e}}s=s.return}while(s!==null)}w_(n)}catch(A){e=A,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function v_(){var t=el.current;return el.current=Za,t===null?Za:t}function Ud(){(_e===0||_e===3||_e===2)&&(_e=4),Se===null||!(vr&268435455)&&!($l&268435455)||En(Se,xe)}function rl(t,e){var n=K;K|=2;var r=v_();(Se!==t||xe!==e)&&(Yt=null,cr(t,e));do try{PT();break}catch(i){y_(t,i)}while(1);if(Id(),K=n,el.current=r,ge!==null)throw Error(I(261));return Se=null,xe=0,_e}function PT(){for(;ge!==null;)__(ge)}function kT(){for(;ge!==null&&!e1();)__(ge)}function __(t){var e=I_(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?w_(t):ge=e,Ld.current=null}function w_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IT(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,ge=null;return}}else if(n=ET(n,e,it),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);_e===0&&(_e=5)}function tr(t,e,n){var r=X,i=yt.transition;try{yt.transition=null,X=1,NT(t,e,n,r)}finally{yt.transition=i,X=r}return null}function NT(t,e,n,r){do si();while(Cn!==null);if(K&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(c1(t,s),t===Se&&(ge=Se=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,T_($a,function(){return si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=X;X=1;var a=K;K|=4,Ld.current=null,ST(t,n),p_(n,t),X1(Kc),Ua=!!Wc,Kc=Wc=null,t.current=n,AT(n),t1(),K=a,X=o,yt.transition=s}else t.current=n;if(ra&&(ra=!1,Cn=t,nl=i),s=t.pendingLanes,s===0&&(Vn=null),i1(n.stateNode),nt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tl)throw tl=!1,t=fh,fh=null,t;return nl&1&&t.tag!==0&&si(),s=t.pendingLanes,s&1?t===ph?_s++:(_s=0,ph=t):_s=0,Qn(),null}function si(){if(Cn!==null){var t=Zy(nl),e=yt.transition,n=X;try{if(yt.transition=null,X=16>t?16:t,Cn===null)var r=!1;else{if(t=Cn,Cn=null,nl=0,K&6)throw Error(I(331));var i=K;for(K|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:ys(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,y=c.return;if(h_(c),c===u){P=null;break}if(d!==null){d.return=y,P=d;break}P=y}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ys(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fl(9,a)}}catch(A){ce(a,a.return,A)}if(a===o){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(K=i,Qn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(kl,t)}catch{}r=!0}return r}finally{X=n,yt.transition=e}}return!1}function wm(t,e,n){e=vi(n,e),e=e_(t,e,1),t=On(t,e,1),e=Qe(),t!==null&&(ho(t,1,e),nt(t,e))}function ce(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){t=vi(n,t),t=t_(e,t,1),e=On(e,t,1),t=Qe(),e!==null&&(ho(e,1,t),nt(e,t));break}}e=e.return}}function xT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(xe&n)===n&&(_e===4||_e===3&&(xe&130023424)===xe&&500>fe()-Fd?cr(t,0):Md|=n),nt(t,e)}function E_(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=Qe();t=ln(t,e),t!==null&&(ho(t,e,n),nt(t,n))}function DT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E_(t,n)}function OT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),E_(t,n)}var I_;I_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||et.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,wT(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,se&&e.flags&1048576&&Av(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ta(t,e),t=e.pendingProps;var i=pi(e,qe.current);ii(e,n),i=Nd(null,e,r,t,i,n);var s=xd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tt(r)?(s=!0,Ha(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ad(e),i.updater=Ll,e.stateNode=i,i._reactInternals=e,nh(e,r,t,n),e=sh(null,e,r,!0,s,n)):(e.tag=0,se&&s&&vd(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ta(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LT(r),t=At(r,t),i){case 0:e=ih(null,e,r,t,n);break e;case 1:e=cm(null,e,r,t,n);break e;case 11:e=lm(null,e,r,t,n);break e;case 14:e=um(null,e,r,At(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),cm(t,e,r,i,n);case 3:e:{if(s_(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kv(t,e),Xa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(I(423)),e),e=hm(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(I(424)),e),e=hm(t,e,r,n,i);break e}else for(st=Dn(e.stateNode.containerInfo.firstChild),ot=e,se=!0,Ct=null,n=Ov(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=un(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return Vv(e),t===null&&Zc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gc(r,i)?o=null:s!==null&&Gc(r,s)&&(e.flags|=32),i_(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Zc(e),null;case 13:return o_(t,e,n);case 4:return Rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),lm(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Ga,r._currentValue),r._currentValue=o,s!==null)if(xt(s.value,o)){if(s.children===i.children&&!et.current){e=un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ii(e,n),i=wt(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),um(t,e,r,i,n);case 15:return n_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Ta(t,e),e.tag=1,tt(r)?(t=!0,Ha(e)):t=!1,ii(e,n),xv(e,r,i),nh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return a_(t,e,n);case 22:return r_(t,e,n)}throw Error(I(156,e.tag))};function T_(t,e){return Qy(t,e)}function VT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new VT(t,e,n,r)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LT(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ad)return 14}return 2}function Mn(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ra(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case br:return hr(n.children,i,s,e);case sd:o=8,i|=8;break;case Rc:return t=gt(12,n,e,i|2),t.elementType=Rc,t.lanes=s,t;case Cc:return t=gt(13,n,e,i),t.elementType=Cc,t.lanes=s,t;case Pc:return t=gt(19,n,e,i),t.elementType=Pc,t.lanes=s,t;case Dy:return bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ny:o=10;break e;case xy:o=9;break e;case od:o=11;break e;case ad:o=14;break e;case vn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hr(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function bl(t,e,n,r){return t=gt(22,t,r,e),t.elementType=Dy,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function Qu(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zd(t,e,n,r,i,s,o,a,l){return t=new MT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(s),t}function FT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S_(t){if(!t)return zn;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(tt(n))return Tv(t,n,e)}return e}function A_(t,e,n,r,i,s,o,a,l){return t=zd(n,r,!0,t,i,s,o,a,l),t.context=S_(null),n=t.current,r=Qe(),i=Ln(n),s=sn(r,i),s.callback=e??null,On(n,s,i),t.current.lanes=i,ho(t,i,r),nt(t,r),t}function Ul(t,e,n,r){var i=e.current,s=Qe(),o=Ln(i);return n=S_(n),e.context===null?e.context=n:e.pendingContext=n,e=sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=On(i,e,o),t!==null&&(Nt(t,i,o,s),wa(t,i,o)),o}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bd(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function $T(){return null}var R_=typeof reportError=="function"?reportError:function(t){console.error(t)};function qd(t){this._internalRoot=t}jl.prototype.render=qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ul(t,e,null,null)};jl.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Ul(null,t,null,null)}),e[an]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wn.length&&e!==0&&e<wn[n].priority;n++);wn.splice(n,0,t),n===0&&iv(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Im(){}function bT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=il(o);s.call(u)}}var o=A_(e,r,t,0,null,!1,!1,"",Im);return t._reactRootContainer=o,t[an]=o.current,Ls(t.nodeType===8?t.parentNode:t),_r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=il(l);a.call(u)}}var l=zd(t,0,!1,null,null,!1,!1,"",Im);return t._reactRootContainer=l,t[an]=l.current,Ls(t.nodeType===8?t.parentNode:t),_r(function(){Ul(e,l,n,r)}),l}function Bl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=il(o);a.call(l)}}Ul(e,o,t,i)}else o=bT(n,e,t,i,r);return il(o)}ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ns(e.pendingLanes);n!==0&&(cd(e,n|1),nt(e,fe()),!(K&6)&&(_i=fe()+500,Qn()))}break;case 13:_r(function(){var r=ln(t,1);if(r!==null){var i=Qe();Nt(r,t,1,i)}}),Bd(t,1)}};hd=function(t){if(t.tag===13){var e=ln(t,134217728);if(e!==null){var n=Qe();Nt(e,t,134217728,n)}Bd(t,134217728)}};tv=function(t){if(t.tag===13){var e=Ln(t),n=ln(t,e);if(n!==null){var r=Qe();Nt(n,t,e,r)}Bd(t,e)}};nv=function(){return X};rv=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};$c=function(t,e,n){switch(e){case"input":if(xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ol(r);if(!i)throw Error(I(90));Vy(r),xc(r,i)}}}break;case"textarea":My(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};By=$d;qy=_r;var UT={usingClientEntryPoint:!1,Events:[po,Br,Ol,jy,zy,$d]},Yi={findFiberByHostInstance:rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jT={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ky(t),t===null?null:t.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||$T,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{kl=ia.inject(jT),Bt=ia}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UT;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(I(200));return FT(t,e,null,n)};ct.createRoot=function(t,e){if(!Hd(t))throw Error(I(299));var n=!1,r="",i=R_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zd(t,1,!1,null,null,n,!1,r,i),t[an]=e.current,Ls(t.nodeType===8?t.parentNode:t),new qd(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Ky(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return _r(t)};ct.hydrate=function(t,e,n){if(!zl(e))throw Error(I(200));return Bl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=R_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A_(e,null,t,1,n??null,i,!1,s,o),t[an]=e.current,Ls(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};ct.render=function(t,e,n){if(!zl(e))throw Error(I(200));return Bl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!zl(t))throw Error(I(40));return t._reactRootContainer?(_r(function(){Bl(null,null,t,!1,function(){t._reactRootContainer=null,t[an]=null})}),!0):!1};ct.unstable_batchedUpdates=$d;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Bl(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function C_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C_)}catch(t){console.error(t)}}C_(),Ay.exports=ct;var zT=Ay.exports,Tm=zT;Sc.createRoot=Tm.createRoot,Sc.hydrateRoot=Tm.hydrateRoot;function Sm(){return m.jsxs("div",{className:"biographyContainer",children:[m.jsxs("div",{className:"biographyText",children:[m.jsxs("div",{className:"biographyPhrase",children:["My paintings, in general, strive to present a deeply personal interpretation of the intricate relationship between human existence and the diverse wonders of the surrounding natural world. Whether it be the enchanting allure of the flora and fauna, with their often surreal and magical characteristics, or the very essence of being present in this world, I aim to capture the essence of our shared human experience, where our emotions and experiences find expression through creative action. My art is a testament to the peculiar spontaneity that resonates both within the natural world and the intricate connections we share as fellow beings. Each stroke of my brush is an authentic expression of life's beauty and ugliness, of distortion and grandeur, of the delicate balance between power and vulnerability, serenity and unrest."," "]}),m.jsxs("div",{className:"biographyPhrase",children:["Born in 1989 in Satu Mare, Romania, I currently call Budapest my home, where I live and passionately create. My journey in art has been enriched by an academic pursuit that culminated in the attainment of a PhD Doctorate from Kolozsvári Művészeti Egyetem (University of Art and Design Cluj-Napoca) in 2022. My educational pursuit in art commenced with my Master's Degree in the Painting Department at Kolozsvári Művészeti Egyetem, spanning from 2011 to 2013, which was preceded by my Bachelor's Degree in the same department, completed between 2008 and 2011."," "]}),m.jsxs("div",{className:"biographyPhrase",children:["Grateful for the enriching experiences that shaped my artistic vision, I had the privilege of receiving scholarships that broadened my horizons. Among these, the Erasmus Exchange Program at Accademia di Belle Arti e Restauro, San Martino delle Scale, Palermo, Italy, during 2012-2013, and another exchange at Universidad de Castilla-La Mancha, Cuenca, Spain in 2010, allowed me to immerse myself in diverse artistic cultures."," "]}),m.jsxs("div",{className:"biographyPhrase",children:["Throughout my artistic journey, I have been fortunate to showcase my work through various solo exhibitions, each one a milestone in my growth as an artist. In 2023, I presented my thought-provoking artwork titled 'OMEN' at the esteemed Art9 Galéria in Budapest. The year 2018 marked a humbling opportunity to exhibit 'Sora,' a collection of my pieces, at Quadro Galéria in Kolozsvár. Additionally, I am grateful to have had my work featured at the renowned Saatchi Gallery in London during the Start Art fair in 2016. Prior to that, in 2014, I held a solo exhibition titled 'Hátsóudvar' at Quadro Galéria in Kolozsvár, which was warmly received by art enthusiasts. My journey in art began to blossom with an earlier solo exhibition in 2013 at the Mátyás-ház Galéria in Kolozsvár."," "]})]}),m.jsx("div",{className:"BiographyImageContainer",children:m.jsx("img",{src:"prof.jpg",id:"BiographyImage",alt:""})})]})}function Am(){return m.jsxs("div",{className:"pressContainer",style:{height:"60vh"},children:[m.jsxs("div",{className:"pressCard",children:[m.jsx("img",{src:"press1.jpg",className:"press1",alt:""}),m.jsxs("div",{className:"pressTextContainer",children:[m.jsx("div",{className:"pressTitle",children:"OMEN EXHIBITION IN ART9 GALLERY "}),m.jsx("div",{className:"pressDate",children:"Todor Tamas, 2023.06.20. Budapest"})]})]}),m.jsxs("div",{className:"pressCard",children:[m.jsx("img",{src:"press2.jpeg",className:"press2",alt:""}),m.jsxs("div",{className:"pressTextContainer",children:[m.jsx("div",{className:"pressTitle",children:"OMEN EXHIBITION IN ART9 GALLERY "}),m.jsx("div",{className:"pressDate",children:"Todor Tamas, 2023.06.20. Budapest"})]})]})]})}function Rm(){return m.jsxs("div",{className:"pressContainer",children:[m.jsxs("div",{className:"pressCard",children:[m.jsx("img",{src:"press2.jpeg",className:"press2",alt:""}),m.jsxs("div",{className:"pressTextContainer",children:[m.jsx("div",{className:"pressTitle",children:"OMEN EXHIBITION IN ART9 GALLERY "}),m.jsx("div",{className:"pressDate",children:"Todor Tamas, 2023.06.20. Budapest"})]})]}),m.jsxs("div",{className:"pressCard",children:[m.jsx("img",{src:"exhibition2.jpeg",className:"press2",alt:""}),m.jsxs("div",{className:"pressTextContainer",children:[m.jsx("div",{className:"pressTitle",children:"SORA EXHIBITION IN QUADRO GALLERY "}),m.jsx("div",{className:"pressDate",children:"Todor Tamas, 2018. Kolozsvár"})]})]}),m.jsxs("div",{className:"pressCard",id:"bottomCard",children:[m.jsx("img",{src:"exhibition3.jpeg",className:"press2",alt:""}),m.jsxs("div",{className:"pressTextContainer",children:[m.jsx("div",{className:"pressTitle",children:" PRIVATE EXHIBITION IN SAATCHI GALLERY "}),m.jsx("div",{className:"pressDate",children:"Todor Tamas, 2016. London"})]})]}),m.jsxs("div",{className:"pressCard",id:"bottomCard",children:[m.jsx("img",{src:"exhibition4.jpeg",className:"press2",alt:""}),m.jsxs("div",{className:"pressTextContainer",children:[m.jsx("div",{className:"pressTitle",children:"BACKYARD EXHIBITION IN QUADRO GALLERY "}),m.jsx("div",{className:"pressDate",children:"Todor Tamas, 2014. Kolozsvár"})]})]})]})}function Cm(){return m.jsxs("div",{className:"contactContainer",children:[m.jsx("div",{className:"contactCardContainer",children:m.jsxs("div",{className:"contactCard",children:[m.jsxs("div",{className:"contactText",children:[" ",m.jsx("div",{className:"contactTitle",children:"Mobile:"})," +36 70 433 5399"," "]}),m.jsxs("div",{className:"contactText",children:[" ",m.jsx("div",{className:"contactTitle",children:"Mail:"})," tamastodor1@gmail.com"," "]}),m.jsxs("div",{className:"contactText",children:[" ",m.jsx("div",{className:"contactTitle",children:"Location:"})," Budapest, Hungary"," "]})]})}),m.jsxs("div",{className:"iconContainer",children:[m.jsxs("a",{href:"https://www.instagram.com/tamas_todor/",children:[" ",m.jsx("img",{src:"instagram.png",alt:"",className:"icons"})," "]}),m.jsxs("a",{href:"https://www.facebook.com/todor.tamas.1",children:[m.jsx("img",{src:"facebook.png",alt:"",className:"icons"})," "]})]})]})}function St(){return m.jsxs("div",{className:"FooterContainer",children:[m.jsx("div",{className:"FooterText",children:"COPYRIGHT © 2023 TODOR TAMAS SITE BY CODECOOL FINISHERS"}),m.jsxs("div",{className:"IconContainer",children:[m.jsx("a",{href:"https://www.instagram.com/tamas_todor/",children:m.jsx("img",{src:"instagram.png",alt:"",className:"FooterIcons"})}),m.jsx("a",{href:"https://www.facebook.com/todor.tamas.1",children:m.jsx("img",{src:"facebook.png",alt:"",className:"FooterIcons"})})]})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},k_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(P_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new qT;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HT=function(t){const e=P_(t);return k_.encodeByteArray(e,!0)},sl=function(t){return HT(t).replace(/\./g,"")},N_=function(t){try{return k_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=()=>WT().__FIREBASE_DEFAULTS__,GT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&N_(t[1]);return e&&JSON.parse(e)},Wd=()=>{try{return KT()||GT()||QT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x_=t=>{var e,n;return(n=(e=Wd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XT=t=>{const e=x_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},D_=()=>{var t;return(t=Wd())===null||t===void 0?void 0:t.config},O_=t=>{var e;return(e=Wd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sl(JSON.stringify(n)),sl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function V_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tS(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function M_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rS,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function iS(t,e){return t.replace(sS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sS=/\{\$([^}]+)}/g;function oS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pm(s)&&Pm(o)){if(!ol(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aS(t,e){const n=new lS(t,e);return n.subscribe.bind(n)}class lS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=1e3,hS=2,dS=4*60*60*1e3,fS=.5;function km(t,e=cS,n=hS){const r=e*Math.pow(n,t),i=Math.round(fS*r*(Math.random()-.5)*2);return Math.min(dS,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gS(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mS(t){return t===nr?void 0:t}function gS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const vS={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},_S=G.INFO,wS={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ES=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=_S,this._logHandler=ES,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const IS=(t,e)=>e.some(n=>t instanceof n);let Nm,xm;function TS(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SS(){return xm||(xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F_=new WeakMap,yh=new WeakMap,$_=new WeakMap,Yu=new WeakMap,Kd=new WeakMap;function AS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&F_.set(n,t)}).catch(()=>{}),Kd.set(e,t),e}function RS(t){if(yh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yh.set(t,e)}let vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CS(t){vh=t(vh)}function PS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ju(this),e,...n);return $_.set(r,e.sort?e.sort():[e]),Fn(r)}:SS().includes(t)?function(...e){return t.apply(Ju(this),e),Fn(F_.get(this))}:function(...e){return Fn(t.apply(Ju(this),e))}}function kS(t){return typeof t=="function"?PS(t):(t instanceof IDBTransaction&&RS(t),IS(t,TS())?new Proxy(t,vh):t)}function Fn(t){if(t instanceof IDBRequest)return AS(t);if(Yu.has(t))return Yu.get(t);const e=kS(t);return e!==t&&(Yu.set(t,e),Kd.set(e,t)),e}const Ju=t=>Kd.get(t);function NS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xS=["get","getKey","getAll","getAllKeys","count"],DS=["put","add","delete","clear"],Zu=new Map;function Dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zu.get(e))return Zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zu.set(e,s),s}CS(t=>({...t,get:(e,n,r)=>Dm(e,n)||t.get(e,n,r),has:(e,n)=>!!Dm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _h="@firebase/app",Om="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new ql("@firebase/app"),LS="@firebase/app-compat",MS="@firebase/analytics-compat",FS="@firebase/analytics",$S="@firebase/app-check-compat",bS="@firebase/app-check",US="@firebase/auth",jS="@firebase/auth-compat",zS="@firebase/database",BS="@firebase/database-compat",qS="@firebase/functions",HS="@firebase/functions-compat",WS="@firebase/installations",KS="@firebase/installations-compat",GS="@firebase/messaging",QS="@firebase/messaging-compat",XS="@firebase/performance",YS="@firebase/performance-compat",JS="@firebase/remote-config",ZS="@firebase/remote-config-compat",eA="@firebase/storage",tA="@firebase/storage-compat",nA="@firebase/firestore",rA="@firebase/firestore-compat",iA="firebase",sA="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="[DEFAULT]",oA={[_h]:"fire-core",[LS]:"fire-core-compat",[FS]:"fire-analytics",[MS]:"fire-analytics-compat",[bS]:"fire-app-check",[$S]:"fire-app-check-compat",[US]:"fire-auth",[jS]:"fire-auth-compat",[zS]:"fire-rtdb",[BS]:"fire-rtdb-compat",[qS]:"fire-fn",[HS]:"fire-fn-compat",[WS]:"fire-iid",[KS]:"fire-iid-compat",[GS]:"fire-fcm",[QS]:"fire-fcm-compat",[XS]:"fire-perf",[YS]:"fire-perf-compat",[JS]:"fire-rc",[ZS]:"fire-rc-compat",[eA]:"fire-gcs",[tA]:"fire-gcs-compat",[nA]:"fire-fst",[rA]:"fire-fst-compat","fire-js":"fire-js",[iA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map,Eh=new Map;function aA(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if(Eh.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Eh.set(e,t);for(const n of al.values())aA(n,t);return!0}function yo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new Nr("app","Firebase",lA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=sA;function b_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=D_()),!n)throw $n.create("no-options");const s=al.get(i);if(s){if(ol(n,s.options)&&ol(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new yS(i);for(const l of Eh.values())o.addComponent(l);const a=new uA(n,r,o);return al.set(i,a),a}function U_(t=wh){const e=al.get(t);if(!e&&t===wh&&D_())return b_();if(!e)throw $n.create("no-app",{appName:t});return e}function vt(t,e,n){var r;let i=(r=oA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}Qt(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="firebase-heartbeat-database",hA=1,qs="firebase-heartbeat-store";let ec=null;function j_(){return ec||(ec=NS(cA,hA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qs)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),ec}async function dA(t){try{return await(await j_()).transaction(qs).objectStore(qs).get(z_(t))}catch(e){if(e instanceof Mt)wr.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function Vm(t,e){try{const r=(await j_()).transaction(qs,"readwrite");await r.objectStore(qs).put(e,z_(t)),await r.done}catch(n){if(n instanceof Mt)wr.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function z_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=1024,pA=30*24*60*60*1e3;class mA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=pA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lm(),{heartbeatsToSend:n,unsentEntries:r}=gA(this._heartbeatsCache.heartbeats),i=sl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lm(){return new Date().toISOString().substring(0,10)}function gA(t,e=fA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?M_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mm(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t){Qt(new Dt("platform-logger",e=>new OS(e),"PRIVATE")),Qt(new Dt("heartbeat",e=>new mA(e),"PRIVATE")),vt(_h,Om,t),vt(_h,Om,"esm2017"),vt("fire-js","")}vA("");function Gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _A=B_,q_=new Nr("auth","Firebase",B_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new ql("@firebase/auth");function wA(t,...e){ll.logLevel<=G.WARN&&ll.warn(`Auth (${xi}): ${t}`,...e)}function Ca(t,...e){ll.logLevel<=G.ERROR&&ll.error(`Auth (${xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw Qd(t,...e)}function Ht(t,...e){return Qd(t,...e)}function EA(t,e,n){const r=Object.assign(Object.assign({},_A()),{[e]:n});return new Nr("auth","Firebase",r).create(e,{appName:t.name})}function Qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q_.create(t,...e)}function L(t,e,...n){if(!t)throw Qd(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ca(e),new Error(e)}function cn(t,e){t||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IA(){return Fm()==="http:"||Fm()==="https:"}function Fm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IA()||V_()||"connection"in navigator)?navigator.onLine:!0}function SA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZT()||eS()}get(){return TA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new vo(3e4,6e4);function Di(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oi(t,e,n,r,i={}){return W_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=go(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),H_.fetch()(K_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function W_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AA),e);try{const i=new CA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw sa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw sa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw EA(t,c,u);Ot(t,c)}}catch(i){if(i instanceof Mt)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function _o(t,e,n,r,i={}){const s=await Oi(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function K_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xd(t.config,i):`${t.config.apiScheme}://${i}`}class CA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),RA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function kA(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NA(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=Yd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ws(tc(i.auth_time)),issuedAtTime:ws(tc(i.iat)),expirationTime:ws(tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function Yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const i=N_(n);return i?JSON.parse(i):(Ca("Failed to decode base64 JWT payload"),null)}catch(i){return Ca("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xA(t){const e=Yd(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&DA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ws(this.lastLoginAt),this.creationTime=ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hs(t,kA(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MA(s.providerUserInfo):[],a=LA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new G_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function VA(t){const e=Ae(t);await ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MA(t){return t.map(e=>{var{providerId:n}=e,r=Gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){const n=await W_(t,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=K_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",H_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ws;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new G_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NA(this,e)}reload(){return VA(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hs(this,PA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:A,providerData:R,stsTokenManager:N}=n;L(g&&N,e,"internal-error");const O=Ws.fromJSON(this.name,N);L(typeof g=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof A=="boolean",e,"internal-error"),yn(y,e.name),yn(v,e.name),yn(_,e.name),yn(S,e.name),yn(p,e.name),yn(f,e.name);const J=new dr({uid:g,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:A,photoURL:v,phoneNumber:y,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(j=>Object.assign({},j))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ws;i.updateFromServerResponse(n);const s=new dr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ul(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Map;function nn(t){cn(t instanceof Function,"Expected a class definition");let e=$m.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$m.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Q_.type="NONE";const bm=Q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e,n){return`firebase:${t}:${e}:${n}`}class oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oi(nn(bm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nn(bm);const o=Pa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=dr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new oi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new oi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e0(e))return"Blackberry";if(t0(e))return"Webos";if(Jd(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(Z_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function X_(t=He()){return/firefox\//i.test(t)}function Jd(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(t=He()){return/crios\//i.test(t)}function J_(t=He()){return/iemobile/i.test(t)}function Z_(t=He()){return/android/i.test(t)}function e0(t=He()){return/blackberry/i.test(t)}function t0(t=He()){return/webos/i.test(t)}function Hl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $A(t=He()){var e;return Hl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bA(){return tS()&&document.documentMode===10}function n0(t=He()){return Hl(t)||Z_(t)||t0(t)||e0(t)||/windows phone/i.test(t)||J_(t)}function UA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e=[]){let n;switch(t){case"Browser":n=Um(He());break;case"Worker":n=`${Um(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}async function i0(t,e){return Oi(t,"GET","/v2/recaptchaConfig",Di(t,e))}function jm(t){return t!==void 0&&t.enterprise!==void 0}class s0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function o0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jA().appendChild(r)})}function zA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BA="https://www.google.com/recaptcha/enterprise.js?render=",qA="recaptcha-enterprise",HA="NO_RECAPTCHA";class a0{constructor(e){this.type=qA,this.auth=Vi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{i0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new s0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(HA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&jm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}o0(BA+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cl(t,e,n,r=!1){const i=new a0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new WA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await oi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}async initializeRecaptchaConfig(){const e=await i0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new s0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new a0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await oi.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vi(t){return Ae(t)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=aS(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e){const n=yo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ol(s,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function QA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XA(t,e,n){const r=Vi(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=l0(e),{host:o,port:a}=YA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||JA()}function l0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YA(t){const e=l0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bm(o)}}}function Bm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function ZA(t,e){return Oi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(t,e){return _o(t,"POST","/v1/accounts:signInWithPassword",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",Di(t,e))}async function tR(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Zd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ks(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ks(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await cl(e,r,"signInWithPassword");return nc(e,i)}else return nc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await cl(e,r,"signInWithPassword");return nc(e,s)}else return Promise.reject(i)});case"emailLink":return eR(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ZA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){return _o(t,"POST","/v1/accounts:signInWithIdp",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="http://localhost";class Er extends Zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:nR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iR(t){const e=is(ss(t)).link,n=e?is(ss(e)).deep_link_id:null,r=is(ss(t)).deep_link_id;return(r?is(ss(r)).link:null)||r||n||e||t}class ef{constructor(e){var n,r,i,s,o,a;const l=is(ss(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=rR((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iR(e);try{return new ef(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return Ks._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ef.parseLink(n);return L(r,"argument-error"),Ks._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends u0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends wo{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends wo{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends wo{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return An.credential(n,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t,e){return _o(t,"POST","/v1/accounts:signUp",Di(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dr._fromIdTokenResponse(e,r,i),o=qm(r);return new Ir({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qm(r);return new Ir({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Mt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hl(e,n,r,i)}}function c0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(t,s,e,r):s})}async function sR(t,e,n=!1){const r=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hs(t,c0(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Yd(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Ir._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t,e,n=!1){const r="signIn",i=await c0(t,r,e),s=await Ir._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aR(t,e){return h0(Vi(t),e)}async function lR(t,e,n){var r;const i=Vi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await cl(i,s,"signUpPassword");o=rc(i,u)}else o=rc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await cl(i,s,"signUpPassword");return rc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ir._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function uR(t,e,n){return aR(Ae(t),Li.credential(e,n))}function cR(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function hR(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function dR(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}const dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dl,"1"),this.storage.removeItem(dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){const t=He();return Jd(t)||Hl(t)}const pR=1e3,mR=10;class f0 extends d0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fR()&&UA(),this.fallbackToPolling=n0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}f0.type="LOCAL";const gR=f0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0 extends d0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}p0.type="SESSION";const m0=p0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=tf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function _R(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function wR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ER(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IR(){return g0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="firebaseLocalStorageDb",TR=1,fl="firebaseLocalStorage",v0="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(t,e){return t.transaction([fl],e?"readwrite":"readonly").objectStore(fl)}function SR(){const t=indexedDB.deleteDatabase(y0);return new Eo(t).toPromise()}function Th(){const t=indexedDB.open(y0,TR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fl,{keyPath:v0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fl)?e(r):(r.close(),await SR(),e(await Th()))})})}async function Hm(t,e,n){const r=Kl(t,!0).put({[v0]:e,value:n});return new Eo(r).toPromise()}async function AR(t,e){const n=Kl(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function Wm(t,e){const n=Kl(t,!0).delete(e);return new Eo(n).toPromise()}const RR=800,CR=3;class _0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return g0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(IR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wR(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ER()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Th();return await Hm(e,dl,"1"),await Wm(e,dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kl(i,!1).getAll();return new Eo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_0.type="LOCAL";const PR=_0;new vo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t,e){return e?nn(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NR(t){return h0(t.auth,new nf(t),t.bypassAuthState)}function xR(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),oR(n,new nf(t),t.bypassAuthState)}async function DR(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),sR(n,new nf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NR;case"linkViaPopup":case"linkViaRedirect":return DR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:Ot(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new vo(2e3,1e4);class Xr extends w0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OR.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="pendingRedirect",ka=new Map;class LR extends w0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await MR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MR(t,e){const n=bR(e),r=$R(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FR(t,e){ka.set(t._key(),e)}function $R(t){return nn(t._redirectPersistence)}function bR(t){return Pa(VR,t.config.apiKey,t.name)}async function UR(t,e,n=!1){const r=Vi(t),i=kR(r,e),o=await new LR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=10*60*1e3;class zR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!E0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Km(e))}saveEventToCache(e){this.cachedEventUids.add(Km(e)),this.lastProcessedEventTime=Date.now()}}function Km(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WR=/^https?/;async function KR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qR(t);for(const n of e)try{if(GR(n))return}catch{}Ot(t,"unauthorized-domain")}function GR(t){const e=Ih(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WR.test(n))return!1;if(HR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new vo(3e4,6e4);function Gm(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XR(t){return new Promise((e,n)=>{var r,i,s;function o(){Gm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gm(),n(Ht(t,"network-request-failed"))},timeout:QR.get()})}if(!((i=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)o();else{const a=zA("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},o0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Na=null,e})}let Na=null;function YR(t){return Na=Na||XR(t),Na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new vo(5e3,15e3),ZR="__/auth/iframe",eC="emulator/auth/iframe",tC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rC(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xd(e,eC):`https://${t.config.authDomain}/${ZR}`,r={apiKey:e.apiKey,appName:t.name,v:xi},i=nC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${go(r).slice(1)}`}async function iC(t){const e=await YR(t),n=Wt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:rC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=Wt().setTimeout(()=>{s(o)},JR.get());function l(){Wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oC=500,aC=600,lC="_blank",uC="http://localhost";class Qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cC(t,e,n,r=oC,i=aC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=Y_(u)?lC:n),X_(u)&&(e=e||uC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,v])=>`${d}${y}=${v},`,"");if($A(u)&&a!=="_self")return hC(e||"",a),new Qm(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new Qm(h)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="__/auth/handler",fC="emulator/auth/handler",pC=encodeURIComponent("fac");async function Xm(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(e instanceof u0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof wo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${pC}=${encodeURIComponent(l)}`:"";return`${mC(t)}?${go(a).slice(1)}${u}`}function mC({config:t}){return t.emulator?Xd(t,fC):`https://${t.authDomain}/${dC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="webStorageSupport";class gC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=m0,this._completeRedirectFn=UR,this._overrideRedirectResult=FR}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xm(e,n,r,Ih(),i);return cC(e,o,tf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xm(e,n,r,Ih(),i);return _R(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iC(e),r=new zR(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ic];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return n0()||Jd()||Hl()}}const yC=gC;var Ym="@firebase/auth",Jm="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wC(t){Qt(new Dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r0(t)},u=new KA(r,i,s,l);return QA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qt(new Dt("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(r=>new vC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Ym,Jm,_C(t)),vt(Ym,Jm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=5*60,IC=O_("authIdTokenMaxAge")||EC;let Zm=null;const TC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IC)return;const i=n==null?void 0:n.token;Zm!==i&&(Zm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SC(t=U_()){const e=yo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GA(t,{popupRedirectResolver:yC,persistence:[PR,gR,m0]}),r=O_("authTokenSyncURL");if(r){const s=TC(r);hR(n,s,()=>s(n.currentUser)),cR(n,o=>s(o))}const i=x_("auth");return i&&XA(n,`http://${i}`),n}wC("Browser");const AC=({auth:t})=>{const[e,n]=B.useState(""),[r,i]=B.useState(""),s=o=>{o.preventDefault(),uR(t,e,r).then(a=>{console.log(a)}).catch(a=>{console.log(a)})};return m.jsxs(m.Fragment,{children:[m.jsx("h1",{children:"Sign In"}),m.jsx("input",{type:"text",placeholder:"Type your Mail",value:e,onChange:o=>n(o.target.value)}),m.jsx("input",{type:"password",placeholder:"Type your Password",value:r,onChange:o=>i(o.target.value)}),m.jsx("button",{onClick:s,children:"Sign In"})]})};function eg({auth:t}){return m.jsx("div",{className:"LogInPageContainer",children:m.jsx(AC,{auth:t})})}const RC=({auth:t})=>{const[e,n]=B.useState(""),[r,i]=B.useState(""),s=o=>{o.preventDefault(),lR(t,e,r).then(a=>{console.log(a)}).catch(a=>{console.log(a)})};return m.jsx("div",{className:"register-container",children:m.jsxs("form",{onSubmit:s,children:[m.jsx("h1",{children:"Sign Up"}),m.jsx("input",{type:"email",placeholder:"Type your Mail",value:e,onChange:o=>n(o.target.value)}),m.jsx("input",{type:"password",placeholder:"Type your Password",value:r,onChange:o=>i(o.target.value)}),m.jsx("button",{type:"submit",children:"Sign Up"})]})})};function CC({auth:t}){return m.jsx("div",{className:"RegisterPageContainer",children:m.jsx(RC,{auth:t})})}const sc=[{id:1,name:"Delphyne",src:"1.jpeg",descr:"Oil on canvas, 2019",size:"90 x 70 cm",className:"painting-1"},{id:2,name:"Raw Life Livin'",src:"2.jpeg",descr:"Oil on canvas, 2021",size:"90 x 70 cm",className:"painting-2"},{id:3,name:"Dragon 2",src:"3.png",descr:"Oil on canvas, 2021",size:"120 x 100 cm",className:"painting-3"},{id:4,name:"Dragon 1",src:"4.jpg",descr:"Oil on canvas, 2021",size:"150 x 120 cm",className:"painting-4"},{id:5,name:"Savage Beauty 2",src:"5.jpg",descr:"Oil on canvas, 2021",size:"120 x 100 cm ",className:"painting-5"},{id:6,name:"Horsemen",src:"6.jpg",descr:"Oil on canvas, 2021",size:"140 x 140 cm",className:"painting-6"},{id:7,name:"After Goya's Nude Maya",src:"7.jpg",descr:"Oil on canvas, 2021",size:"150 x 110 cm",className:"painting-7"},{id:8,name:"Agony",src:"8.jpg",descr:"Oil on canvas, 2022",size:"150 x 110 cm",className:"painting-8"},{id:9,name:"Raphael - Pope Leo X with two cardinals",src:"9.jpg",descr:"Oil on canvas, 2021",size:"170 x 140 cm",className:"painting-9"},{id:10,name:"Warrior",src:"10.jpg",descr:"Oil on canvas, 2022",size:"170 x 140 cm",className:"painting-10"},{id:11,name:"Fleshy Flesh",src:"11.jpeg",descr:"Oil on canvas, 2022",size:"170 x 140 cm",className:"painting-11"},{id:12,name:"Taxonomy",src:"12.jpeg",descr:"Oil on canvas, 2021",size:"120 x 80 cm ",className:"painting-12"},{id:13,name:"Explosion of Dragon",src:"13.png",descr:"Oil on canvas, 2021",size:"120 x 100 cm ",className:"painting-13"},{id:14,name:"After Velasquez (Pope Innocent X)",src:"14.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-14"},{id:15,name:"Monster with fish",src:"15.png",descr:"Oil on wood panel, 2011",size:"40 x 35 cm ",className:"painting-15"},{id:16,name:"Bathing",src:"16.png",descr:"Oil on canvas, 2011",size:"70 x 50 cm ",className:"painting-16"},{id:17,name:"Monster with fish 2",src:"17.png",descr:"Oil on canvas, 2011",size:"200 x 150 cm ",className:"painting-17"},{id:18,name:"Metaphysical Landscape",src:"18.png",descr:"Oil on canvas, 2012",size:"8250 x 125 cm ",className:"painting-18"},{id:19,name:"Backyard",src:"19.png",descr:"Oil on canvas, 2013",size:"200 x 150 cm",className:"painting-19"},{id:20,name:"After Velasquez (Pope Innocent X)",src:"20.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-20"},{id:21,name:"After Velasquez (Pope Innocent X)",src:"21.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-21"},{id:22,name:"After Velasquez (Pope Innocent X)",src:"22.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-22"},{id:23,name:"After Velasquez (Pope Innocent X)",src:"23.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-23"},{id:24,name:"After Velasquez (Pope Innocent X)",src:"24.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-24"},{id:25,name:"After Velasquez (Pope Innocent X)",src:"25.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-25"},{id:26,name:"After Velasquez (Pope Innocent X)",src:"26.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-26"},{id:27,name:"After Velasquez (Pope Innocent X)",src:"27.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-27"},{id:28,name:"After Velasquez (Pope Innocent X)",src:"28.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-28"},{id:29,name:"After Velasquez (Pope Innocent X)",src:"29.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-29"},{id:30,name:"After Velasquez (Pope Innocent X)",src:"30.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-30"},{id:31,name:"After Velasquez (Pope Innocent X)",src:"31.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-31"},{id:32,name:"After Velasquez (Pope Innocent X)",src:"32.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-32"},{id:33,name:"After Velasquez (Pope Innocent X)",src:"33.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-33"},{id:34,name:"After Velasquez (Pope Innocent X)",src:"34.png",descr:"Oil on canvas, 2021",size:"80 x 120 cm ",className:"painting-34"}],Io=B.createContext(null),PC=t=>{const[e,n]=B.useState(sc),o={products:e,searchProduct:a=>{let l=[];sc.map(u=>{(u.name.toLowerCase().includes(a.toLowerCase())||u.descr.toLocaleLowerCase().includes(a.toLowerCase()))&&l.push(u)}),n(l)},getImage:a=>{let l="";return sc.map(u=>{u.id===a&&(l=u.src)}),l},searchFavProduct:(a,l)=>{let u=[];return l.map(c=>{c.name.toLowerCase().includes(a.toLowerCase())&&u.push(c)}),u}};return m.jsx(Io.Provider,{value:o,children:t.children})};var kC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,rf=rf||{},F=kC||self;function Gl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function To(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function NC(t){return Object.prototype.hasOwnProperty.call(t,oc)&&t[oc]||(t[oc]=++xC)}var oc="closure_uid_"+(1e9*Math.random()>>>0),xC=0;function DC(t,e,n){return t.call.apply(t.bind,arguments)}function OC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=DC:je=OC,je.apply(null,arguments)}function oa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xn(){this.s=this.s,this.o=this.o}var VC=0;Xn.prototype.s=!1;Xn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),VC!=0)&&NC(this)};Xn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function sf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function tg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Gl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var LC=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function Gs(t){return/^[\s\xa0]*$/.test(t)}function Ql(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return Ql().indexOf(t)!=-1}function of(t){return of[" "](t),t}of[" "]=function(){};function MC(t,e){var n=PP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var FC=Ut("Opera"),wi=Ut("Trident")||Ut("MSIE"),T0=Ut("Edge"),Sh=T0||wi,S0=Ut("Gecko")&&!(Ql().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),$C=Ql().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function A0(){var t=F.document;return t?t.documentMode:void 0}var Ah;e:{var ac="",lc=function(){var t=Ql();if(S0)return/rv:([^\);]+)(\)|;)/.exec(t);if(T0)return/Edge\/([\d\.]+)/.exec(t);if(wi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($C)return/WebKit\/(\S+)/.exec(t);if(FC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lc&&(ac=lc?lc[1]:""),wi){var uc=A0();if(uc!=null&&uc>parseFloat(ac)){Ah=String(uc);break e}}Ah=ac}var Rh;if(F.document&&wi){var ng=A0();Rh=ng||parseInt(Ah,10)||void 0}else Rh=void 0;var bC=Rh;function Qs(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(S0){e:{try{of(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Qs.$.h.call(this)}}Ce(Qs,ze);var UC={2:"touch",3:"pen",4:"mouse"};Qs.prototype.h=function(){Qs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var So="closure_listenable_"+(1e6*Math.random()|0),jC=0;function zC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++jC,this.fa=this.ia=!1}function Xl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function af(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function R0(t){const e={};for(const n in t)e[n]=t[n];return e}const rg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<rg.length;s++)n=rg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Yl(t){this.src=t,this.g={},this.h=0}Yl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ph(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ch(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=I0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ph(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var lf="closure_lm_"+(1e6*Math.random()|0),cc={};function P0(t,e,n,r,i){if(r&&r.once)return N0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)P0(t,e[s],n,r,i);return null}return n=hf(n),t&&t[So]?t.O(e,n,To(r)?!!r.capture:!!r,i):k0(t,e,n,!1,r,i)}function k0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=To(i)?!!i.capture:!!i,a=cf(t);if(a||(t[lf]=a=new Yl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=qC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)LC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(D0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qC(){function t(n){return e.call(t.src,t.listener,n)}const e=HC;return t}function N0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)N0(t,e[s],n,r,i);return null}return n=hf(n),t&&t[So]?t.P(e,n,To(r)?!!r.capture:!!r,i):k0(t,e,n,!0,r,i)}function x0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)x0(t,e[s],n,r,i);else r=To(r)?!!r.capture:!!r,n=hf(n),t&&t[So]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ph(s,n,r,i),-1<n&&(Xl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=cf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ph(e,n,r,i)),(n=-1<t?e[t]:null)&&uf(n))}function uf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[So])Ch(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(D0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=cf(e))?(Ch(n,t),n.h==0&&(n.src=null,e[lf]=null)):Xl(t)}}}function D0(t){return t in cc?cc[t]:cc[t]="on"+t}function HC(t,e){if(t.fa)t=!0;else{e=new Qs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&uf(t),t=n.call(r,e)}return t}function cf(t){return t=t[lf],t instanceof Yl?t:null}var hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function hf(t){return typeof t=="function"?t:(t[hc]||(t[hc]=function(e){return t.handleEvent(e)}),t[hc])}function Re(){Xn.call(this),this.i=new Yl(this),this.S=this,this.J=null}Ce(Re,Xn);Re.prototype[So]=!0;Re.prototype.removeEventListener=function(t,e,n,r){x0(this,t,e,n,r)};function De(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),C0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=aa(o,r,!0,e)&&i}if(o=e.g=t,i=aa(o,r,!0,e)&&i,i=aa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=aa(o,r,!1,e)&&i}Re.prototype.N=function(){if(Re.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xl(n[r]);delete t.g[e],t.h--}}this.J=null};Re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Re.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function aa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ch(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var df=F.JSON.stringify;class WC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function KC(){var t=ff;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GC{constructor(){this.h=this.g=null}add(e,n){const r=O0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var O0=new WC(()=>new QC,t=>t.reset());class QC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function YC(t){F.setTimeout(()=>{throw t},0)}let Xs,Ys=!1,ff=new GC,V0=()=>{const t=F.Promise.resolve(void 0);Xs=()=>{t.then(JC)}};var JC=()=>{for(var t;t=KC();){try{t.h.call(t.g)}catch(n){YC(n)}var e=O0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ys=!1};function Jl(t,e){Re.call(this),this.h=t||1,this.g=e||F,this.j=je(this.qb,this),this.l=Date.now()}Ce(Jl,Re);C=Jl.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),De(this,"tick"),this.ga&&(pf(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}C.N=function(){Jl.$.N.call(this),pf(this),delete this.g};function mf(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function L0(t){t.g=mf(()=>{t.g=null,t.i&&(t.i=!1,L0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ZC extends Xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:L0(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Js(t){Xn.call(this),this.h=t,this.g={}}Ce(Js,Xn);var ig=[];function M0(t,e,n,r){Array.isArray(n)||(n&&(ig[0]=n.toString()),n=ig);for(var i=0;i<n.length;i++){var s=P0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function F0(t){af(t.g,function(e,n){this.g.hasOwnProperty(n)&&uf(e)},t),t.g={}}Js.prototype.N=function(){Js.$.N.call(this),F0(this)};Js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zl(){this.g=!0}Zl.prototype.Ea=function(){this.g=!1};function eP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function tP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Yr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rP(t,n)+(r?" "+r:"")})}function nP(t,e){t.info(function(){return"TIMEOUT: "+e})}Zl.prototype.info=function(){};function rP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return df(n)}catch{return e}}var xr={},sg=null;function eu(){return sg=sg||new Re}xr.Ta="serverreachability";function $0(t){ze.call(this,xr.Ta,t)}Ce($0,ze);function Zs(t){const e=eu();De(e,new $0(e))}xr.STAT_EVENT="statevent";function b0(t,e){ze.call(this,xr.STAT_EVENT,t),this.stat=e}Ce(b0,ze);function Ge(t){const e=eu();De(e,new b0(e,t))}xr.Ua="timingevent";function U0(t,e){ze.call(this,xr.Ua,t),this.size=e}Ce(U0,ze);function Ao(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var tu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},j0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function gf(){}gf.prototype.h=null;function og(t){return t.h||(t.h=t.i())}function z0(){}var Ro={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yf(){ze.call(this,"d")}Ce(yf,ze);function vf(){ze.call(this,"c")}Ce(vf,ze);var kh;function nu(){}Ce(nu,gf);nu.prototype.g=function(){return new XMLHttpRequest};nu.prototype.i=function(){return{}};kh=new nu;function Co(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Js(this),this.P=iP,t=Sh?125:void 0,this.V=new Jl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new B0}function B0(){this.i=null,this.g="",this.h=!1}var iP=45e3,Nh={},pl={};C=Co.prototype;C.setTimeout=function(t){this.P=t};function xh(t,e,n){t.L=1,t.v=iu(hn(e)),t.s=n,t.S=!0,q0(t,null)}function q0(t,e){t.G=Date.now(),Po(t),t.A=hn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),J0(n.i,"t",r),t.C=0,n=t.l.J,t.h=new B0,t.g=_w(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ZC(je(t.Pa,t,t.g),t.O)),M0(t.U,t.g,"readystatechange",t.nb),e=t.I?R0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Zs(),eP(t.j,t.u,t.A,t.m,t.W,t.s)}C.nb=function(t){t=t.target;const e=this.M;e&&jt(t)==3?e.l():this.Pa(t)};C.Pa=function(t){try{if(t==this.g)e:{const c=jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Sh||this.g&&(this.h.h||this.g.ja()||cg(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Zs(3):Zs(2)),ru(this);var n=this.g.da();this.ca=n;t:if(H0(this)){var r=cg(this.g);t="";var i=r.length,s=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Es(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,tP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gs(a)){var u=a;break t}}u=null}if(n=u)Yr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dh(this,n);else{this.i=!1,this.o=3,Ge(12),or(this),Es(this);break e}}this.S?(W0(this,c,o),Sh&&this.i&&c==3&&(M0(this.U,this.V,"tick",this.mb),this.V.start())):(Yr(this.j,this.m,o,null),Dh(this,o)),c==4&&or(this),this.i&&!this.J&&(c==4?mw(this.l,this):(this.i=!1,Po(this)))}else AP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),or(this),Es(this)}}}catch{}finally{}};function H0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function W0(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=sP(t,n),i==pl){e==4&&(t.o=4,Ge(14),r=!1),Yr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Nh){t.o=4,Ge(15),Yr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Yr(t.j,t.m,i,null),Dh(t,i);H0(t)&&i!=pl&&i!=Nh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sf(e),e.M=!0,Ge(11))):(Yr(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),Es(t))}C.mb=function(){if(this.g){var t=jt(this.g),e=this.g.ja();this.C<e.length&&(ru(this),W0(this,t,e),this.i&&t!=4&&Po(this))}};function sP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pl:(n=Number(e.substring(n,r)),isNaN(n)?Nh:(r+=1,r+n>e.length?pl:(e=e.slice(r,r+n),t.C=r+n,e)))}C.cancel=function(){this.J=!0,or(this)};function Po(t){t.Y=Date.now()+t.P,K0(t,t.P)}function K0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ao(je(t.lb,t),e)}function ru(t){t.B&&(F.clearTimeout(t.B),t.B=null)}C.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(nP(this.j,this.A),this.L!=2&&(Zs(),Ge(17)),or(this),this.o=2,Es(this)):K0(this,this.Y-t)};function Es(t){t.l.H==0||t.J||mw(t.l,t)}function or(t){ru(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,pf(t.V),F0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Dh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Oh(n.i,t))){if(!t.K&&Oh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yl(n),au(n);else break e;Tf(n),Ge(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ao(je(n.ib,n),6e3));if(1>=tw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ar(n,11)}else if((t.K||n.g==t)&&yl(n),!Gs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(_f(s,s.h),s.h=null))}if(r.F){const _=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,te(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=vw(r,r.J?r.pa:null,r.Y),o.K){nw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ru(a),Po(a)),r.g=o}else fw(r);0<n.j.length&&lu(n)}else u[0]!="stop"&&u[0]!="close"||ar(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ar(n,7):If(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Zs(4)}catch{}}function oP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Gl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function aP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Gl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function G0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Gl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=aP(t),r=oP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Q0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fr){this.h=t.h,ml(this,t.j),this.s=t.s,this.g=t.g,gl(this,t.m),this.l=t.l;var e=t.i,n=new eo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ag(this,n),this.o=t.o}else t&&(e=String(t).match(Q0))?(this.h=!1,ml(this,e[1]||"",!0),this.s=os(e[2]||""),this.g=os(e[3]||"",!0),gl(this,e[4]),this.l=os(e[5]||"",!0),ag(this,e[6]||"",!0),this.o=os(e[7]||"")):(this.h=!1,this.i=new eo(null,this.h))}fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(as(e,lg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(as(e,lg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(as(n,n.charAt(0)=="/"?hP:cP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",as(n,fP)),t.join("")};function hn(t){return new fr(t)}function ml(t,e,n){t.j=n?os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ag(t,e,n){e instanceof eo?(t.i=e,pP(t.i,t.h)):(n||(e=as(e,dP)),t.i=new eo(e,t.h))}function te(t,e,n){t.i.set(e,n)}function iu(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function as(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lg=/[#\/\?@]/g,cP=/[#\?:]/g,hP=/[#\?]/g,dP=/[#\?@]/g,fP=/#/g;function eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yn(t){t.g||(t.g=new Map,t.h=0,t.i&&lP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=eo.prototype;C.add=function(t,e){Yn(this),this.i=null,t=Mi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function X0(t,e){Yn(t),e=Mi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Y0(t,e){return Yn(t),e=Mi(t,e),t.g.has(e)}C.forEach=function(t,e){Yn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};C.ta=function(){Yn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};C.Z=function(t){Yn(this);let e=[];if(typeof t=="string")Y0(this,t)&&(e=e.concat(this.g.get(Mi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return Yn(this),this.i=null,t=Mi(this,t),Y0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function J0(t,e,n){X0(t,e),0<n.length&&(t.i=null,t.g.set(Mi(t,e),sf(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Mi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pP(t,e){e&&!t.j&&(Yn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(X0(this,r),J0(this,i,n))},t)),t.j=e}var mP=class{constructor(t,e){this.g=t,this.map=e}};function Z0(t){this.l=t||gP,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gP=10;function ew(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tw(t){return t.h?1:t.g?t.g.size:0}function Oh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _f(t,e){t.g?t.g.add(e):t.h=e}function nw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Z0.prototype.cancel=function(){if(this.i=rw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return sf(t.i)}var yP=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function vP(){this.g=new yP}function _P(t,e,n){const r=n||"";try{G0(t,function(i,s){let o=i;To(i)&&(o=df(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wP(t,e){const n=new Zl;if(F.Image){const r=new Image;r.onload=oa(la,n,r,"TestLoadImage: loaded",!0,e),r.onerror=oa(la,n,r,"TestLoadImage: error",!1,e),r.onabort=oa(la,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=oa(la,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function la(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ko(t){this.l=t.fc||null,this.j=t.ob||!1}Ce(ko,gf);ko.prototype.g=function(){return new su(this.l,this.j)};ko.prototype.i=function(t){return function(){return t}}({});function su(t,e){Re.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=wf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(su,Re);var wf=0;C=su.prototype;C.open=function(t,e){if(this.readyState!=wf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,to(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=wf};C.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function iw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}C.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?No(this):to(this),this.readyState==3&&iw(this)}};C.Za=function(t){this.g&&(this.response=this.responseText=t,No(this))};C.Ya=function(t){this.g&&(this.response=t,No(this))};C.ka=function(){this.g&&No(this)};function No(t){t.readyState=4,t.l=null,t.j=null,t.A=null,to(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function to(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var EP=F.JSON.parse;function he(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sw,this.L=this.M=!1}Ce(he,Re);var sw="",IP=/^https?$/i,TP=["POST","PUT"];C=he.prototype;C.Oa=function(t){this.M=t};C.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():kh.g(),this.C=this.u?og(this.u):og(kh),this.g.onreadystatechange=je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ug(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=I0(TP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lw(this),0<this.B&&((this.L=SP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.ua,this)):this.A=mf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ug(this,s)}};function SP(t){return wi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.ua=function(){typeof rf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function ug(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ow(t),ou(t)}function ow(t){t.F||(t.F=!0,De(t,"complete"),De(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),ou(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ou(this,!0)),he.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?aw(this):this.kb())};C.kb=function(){aw(this)};function aw(t){if(t.h&&typeof rf<"u"&&(!t.C[1]||jt(t)!=4||t.da()!=2)){if(t.v&&jt(t)==4)mf(t.La,0,t);else if(De(t,"readystatechange"),jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Q0)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!IP.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var s=2<jt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ow(t)}}finally{ou(t)}}}}function ou(t,e){if(t.g){lw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function lw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}C.isActive=function(){return!!this.g};function jt(t){return t.g?t.g.readyState:0}C.da=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),EP(e)}};function cg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function AP(t){const e={};t=(t.g&&2<=jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Gs(t[r]))continue;var n=XC(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}BC(e,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uw(t){let e="";return af(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ef(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function Ji(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cw(t){this.Ga=0,this.j=[],this.l=new Zl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ji("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ji("baseRetryDelayMs",5e3,t),this.hb=Ji("retryDelaySeedMs",1e4,t),this.eb=Ji("forwardChannelMaxRetries",2,t),this.xa=Ji("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Z0(t&&t.concurrentRequestLimit),this.Ja=new vP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=cw.prototype;C.ra=8;C.H=1;function If(t){if(hw(t),t.H==3){var e=t.W++,n=hn(t.I);if(te(n,"SID",t.K),te(n,"RID",e),te(n,"TYPE","terminate"),xo(t,n),e=new Co(t,t.l,e),e.L=2,e.v=iu(hn(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=_w(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Po(e)}yw(t)}function au(t){t.g&&(Sf(t),t.g.cancel(),t.g=null)}function hw(t){au(t),t.u&&(F.clearTimeout(t.u),t.u=null),yl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function lu(t){if(!ew(t.i)&&!t.m){t.m=!0;var e=t.Na;Xs||V0(),Ys||(Xs(),Ys=!0),ff.add(e,t),t.C=0}}function RP(t,e){return tw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ao(je(t.Na,t,e),gw(t,t.C)),t.C++,!0)}C.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Co(this,this.l,t);let s=this.s;if(this.U&&(s?(s=R0(s),C0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dw(this,i,e),n=hn(this.I),te(n,"RID",t),te(n,"CVER",22),this.F&&te(n,"X-HTTP-Session-Id",this.F),xo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(uw(s)))+"&"+e:this.o&&Ef(n,this.o,s)),_f(this.i,i),this.bb&&te(n,"TYPE","init"),this.P?(te(n,"$req",e),te(n,"SID","null"),i.aa=!0,xh(i,n,null)):xh(i,n,e),this.H=2}}else this.H==3&&(t?hg(this,t):this.j.length==0||ew(this.i)||hg(this))};function hg(t,e){var n;e?n=e.m:n=t.W++;const r=hn(t.I);te(r,"SID",t.K),te(r,"RID",n),te(r,"AID",t.V),xo(t,r),t.o&&t.s&&Ef(r,t.o,t.s),n=new Co(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=dw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_f(t.i,n),xh(n,r,e)}function xo(t,e){t.na&&af(t.na,function(n,r){te(e,r,n)}),t.h&&G0({},function(n,r){te(e,r,n)})}function dw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?je(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{_P(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function fw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Xs||V0(),Ys||(Xs(),Ys=!0),ff.add(e,t),t.A=0}}function Tf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ao(je(t.Ma,t),gw(t,t.A)),t.A++,!0)}C.Ma=function(){if(this.u=null,pw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ao(je(this.jb,this),t)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ge(10),au(this),pw(this))};function Sf(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function pw(t){t.g=new Co(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=hn(t.wa);te(e,"RID","rpc"),te(e,"SID",t.K),te(e,"AID",t.V),te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&te(e,"TO",t.qa),te(e,"TYPE","xmlhttp"),xo(t,e),t.o&&t.s&&Ef(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=iu(hn(e)),n.s=null,n.S=!0,q0(n,t)}C.ib=function(){this.v!=null&&(this.v=null,au(this),Tf(this),Ge(19))};function yl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function mw(t,e){var n=null;if(t.g==e){yl(t),Sf(t),t.g=null;var r=2}else if(Oh(t.i,e))n=e.F,nw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=eu(),De(r,new U0(r,n)),lu(t)}else fw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&RP(t,e)||r==2&&Tf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function gw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ar(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=je(t.pb,t);n||(n=new fr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||ml(n,"https"),iu(n)),wP(n.toString(),r)}else Ge(2);t.H=0,t.h&&t.h.za(e),yw(t),hw(t)}C.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ge(2)):(this.l.info("Failed to ping google.com"),Ge(1))};function yw(t){if(t.H=0,t.ma=[],t.h){const e=rw(t.i);(e.length!=0||t.j.length!=0)&&(tg(t.ma,e),tg(t.ma,t.j),t.i.i.length=0,sf(t.j),t.j.length=0),t.h.ya()}}function vw(t,e,n){var r=n instanceof fr?hn(n):new fr(n);if(r.g!="")e&&(r.g=e+"."+r.g),gl(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fr(null);r&&ml(s,r),e&&(s.g=e),i&&gl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&te(r,n,e),te(r,"VER",t.ra),xo(t,r),r}function _w(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new ko({ob:!0})):new he(t.va),e.Oa(t.J),e}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function ww(){}C=ww.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function vl(){if(wi&&!(10<=Number(bC)))throw Error("Environmental error: no available transport.")}vl.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Re.call(this),this.g=new cw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fi(this)}Ce(ut,Re);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=vw(t,null,t.Y),lu(t)};ut.prototype.close=function(){If(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=df(t),t=n);e.j.push(new mP(e.fb++,t)),e.H==3&&lu(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,If(this.g),delete this.g,ut.$.N.call(this)};function Ew(t){yf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(Ew,yf);function Iw(){vf.call(this),this.status=1}Ce(Iw,vf);function Fi(t){this.g=t}Ce(Fi,ww);Fi.prototype.Ba=function(){De(this.g,"a")};Fi.prototype.Aa=function(t){De(this.g,new Ew(t))};Fi.prototype.za=function(t){De(this.g,new Iw)};Fi.prototype.ya=function(){De(this.g,"b")};function CP(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ce(Vt,CP);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function dc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Vt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)dc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){dc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){dc(this,r),i=0;break}}this.h=i,this.i+=e};Vt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Y(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var PP={};function Af(t){return-128<=t&&128>t?MC(t,function(e){return new Y([e|0],0>e?-1:0)}):new Y([t|0],0>t?-1:0)}function zt(t){if(isNaN(t)||!isFinite(t))return li;if(0>t)return Ne(zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Vh;return new Y(e,0)}function Tw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ne(Tw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zt(Math.pow(e,8)),r=li,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=zt(Math.pow(e,s)),r=r.R(s).add(zt(o))):(r=r.R(n),r=r.add(zt(o)))}return r}var Vh=4294967296,li=Af(0),Lh=Af(1),dg=Af(16777216);C=Y.prototype;C.ea=function(){if(pt(this))return-Ne(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Vh+r)*e,e*=Vh}return t};C.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(rn(this))return"0";if(pt(this))return"-"+Ne(this).toString(t);for(var e=zt(Math.pow(t,6)),n=this,r="";;){var i=wl(n,e).g;n=_l(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,rn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};C.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pt(t){return t.h==-1}C.X=function(t){return t=_l(this,t),pt(t)?-1:rn(t)?0:1};function Ne(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Y(n,~t.h).add(Lh)}C.abs=function(){return pt(this)?Ne(this):this};C.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Y(n,n[n.length-1]&-2147483648?-1:0)};function _l(t,e){return t.add(Ne(e))}C.R=function(t){if(rn(this)||rn(t))return li;if(pt(this))return pt(t)?Ne(this).R(Ne(t)):Ne(Ne(this).R(t));if(pt(t))return Ne(this.R(Ne(t)));if(0>this.X(dg)&&0>t.X(dg))return zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ua(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ua(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ua(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ua(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Y(n,0)};function ua(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Zi(t,e){this.g=t,this.h=e}function wl(t,e){if(rn(e))throw Error("division by zero");if(rn(t))return new Zi(li,li);if(pt(t))return e=wl(Ne(t),e),new Zi(Ne(e.g),Ne(e.h));if(pt(e))return e=wl(t,Ne(e)),new Zi(Ne(e.g),e.h);if(30<t.g.length){if(pt(t)||pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lh,r=e;0>=r.X(t);)n=fg(n),r=fg(r);var i=Lr(n,1),s=Lr(r,1);for(r=Lr(r,2),n=Lr(n,2);!rn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Lr(r,1),n=Lr(n,1)}return e=_l(t,i.R(e)),new Zi(i,e)}for(i=li;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=zt(n),o=s.R(e);pt(o)||0<o.X(t);)n-=r,s=zt(n),o=s.R(e);rn(s)&&(s=Lh),i=i.add(s),t=_l(t,o)}return new Zi(i,t)}C.gb=function(t){return wl(this,t).h};C.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Y(n,this.h&t.h)};C.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Y(n,this.h|t.h)};C.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Y(n,this.h^t.h)};function fg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Y(n,t.h)}function Lr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Y(i,t.h)}vl.prototype.createWebChannel=vl.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;tu.NO_ERROR=0;tu.TIMEOUT=8;tu.HTTP_ERROR=6;j0.COMPLETE="complete";z0.EventType=Ro;Ro.OPEN="a";Ro.CLOSE="b";Ro.ERROR="c";Ro.MESSAGE="d";Re.prototype.listen=Re.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=zt;Y.fromString=Tw;var kP=function(){return new vl},NP=function(){return eu()},fc=tu,xP=j0,DP=xr,pg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},OP=ko,ca=z0,VP=he,LP=Vt,ui=Y;const mg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new ql("@firebase/firestore");function gg(){return Tr.logLevel}function D(t,...e){if(Tr.logLevel<=G.DEBUG){const n=e.map(Rf);Tr.debug(`Firestore (${$i}): ${t}`,...n)}}function dn(t,...e){if(Tr.logLevel<=G.ERROR){const n=e.map(Rf);Tr.error(`Firestore (${$i}): ${t}`,...n)}}function Ei(t,...e){if(Tr.logLevel<=G.WARN){const n=e.map(Rf);Tr.warn(`Firestore (${$i}): ${t}`,...n)}}function Rf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: `+t;throw dn(e),new Error(e)}function ie(t,e){t||M()}function b(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class FP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $P{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Sw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Fe(e)}}class bP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class UP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new jP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=BP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Ii(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new we(0,0))}static max(){return new $(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return no.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends no{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const qP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends no{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return qP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ne.fromString(e))}static fromName(e){return new V(ne.fromString(e).popFirst(5))}static empty(){return new V(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ne(e.slice()))}}function HP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Bn(i,V.empty(),e)}function WP(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bn($.min(),V.empty(),-1)}static max(){return new Bn($.max(),V.empty(),-1)}}function KP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==GP)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Oo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Cf.ae=-1;function uu(t){return t==null}function El(t){return t===0&&1/t==-1/0}function XP(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ha(this.root,e,this.comparator,!0)}}class ha{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??ke.EMPTY,this.right=s??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vg(this.data.getIterator())}getIteratorFrom(e){return new vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Be(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Cw("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const YP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(ie(!!t),typeof t=="string"){let e=0;const n=YP.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kf(t){const e=t.mapValue.fields.__previous_value__;return Pf(e)?kf(e):e}function ro(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:ZP(t)?9007199254740991:10:M()}function Xt(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qn(i.timestampValue),a=qn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Sr(i.bytesValue).isEqual(Sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return me(i.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(i.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return me(i.integerValue)===me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=me(i.doubleValue),a=me(s.doubleValue);return o===a?El(o)===El(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ii(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(yg(o)!==yg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xt(o[l],a[l])))return!1;return!0}(t,e);default:return M()}}function so(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=me(s.integerValue||s.doubleValue),l=me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return _g(t.timestampValue,e.timestampValue);case 4:return _g(ro(t),ro(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Sr(s),l=Sr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(me(s.latitude),me(o.latitude));return a!==0?a:Q(me(s.longitude),me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ti(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===da.mapValue&&o===da.mapValue)return 0;if(s===da.mapValue)return 1;if(o===da.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Q(l[h],c[h]);if(d!==0)return d;const y=Ti(a[l[h]],u[c[h]]);if(y!==0)return y}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw M()}}function _g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=qn(t),r=qn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Si(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mh(n.fields[o])}`;return i+"}"}(t.mapValue):M()}function wg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fh(t){return!!t&&"integerValue"in t}function Nf(t){return!!t&&"arrayValue"in t}function Eg(t){return!!t&&"nullValue"in t}function Ig(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function Is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Is(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Is(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Is(this.value))}}function Pw(t){const e=[];return bi(t.fields,(n,r)=>{const i=new Ue([n]);if(xa(r)){const s=Pw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,$.min(),$.min(),$.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new be(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new be(e,2,n,$.min(),$.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,$.min(),$.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.position=e,this.inclusive=n}}function Tg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Ti(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n="asc"){this.field=e,this.dir=n}}function ek(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{}class ye extends kw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nk(e,n,r):n==="array-contains"?new sk(e,r):n==="in"?new ok(e,r):n==="not-in"?new ak(e,r):n==="array-contains-any"?new lk(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rk(e,r):new ik(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ti(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lt extends kw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Lt(e,n)}matches(e){return Nw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Nw(t){return t.op==="and"}function xw(t){return tk(t)&&Nw(t)}function tk(t){for(const e of t.filters)if(e instanceof Lt)return!1;return!0}function $h(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(xw(t))return t.filters.map(e=>$h(e)).join(",");{const e=t.filters.map(n=>$h(n)).join(",");return`${t.op}(${e})`}}function Dw(t,e){return t instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof Lt?function(r,i){return i instanceof Lt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Dw(o,i.filters[a]),!0):!1}(t,e):void M()}function Ow(t){return t instanceof ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Si(n.value)}`}(t):t instanceof Lt?function(n){return n.op.toString()+" {"+n.getFilters().map(Ow).join(" ,")+"}"}(t):"Filter"}class nk extends ye{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class rk extends ye{constructor(e,n){super(e,"in",n),this.keys=Vw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ik extends ye{constructor(e,n){super(e,"not-in",n),this.keys=Vw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class sk extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nf(n)&&so(n.arrayValue,this.value)}}class ok extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class ak extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!so(this.value.arrayValue,n)}}class lk extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>so(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ag(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uk(t,e,n,r,i,s,o)}function xf(t){const e=b(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$h(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Si(r)).join(",")),e.he=n}return e.he}function Df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ek(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function bh(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function ck(t,e,n,r,i,s,o,a){return new Vo(t,e,n,r,i,s,o,a)}function Of(t){return new Vo(t)}function Rg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Lw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Mw(t){return t.collectionGroup!==null}function ci(t){const e=b(t);if(e.Pe===null){e.Pe=[];const n=Vf(e),r=Lw(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ts(n)),e.Pe.push(new Ts(Ue.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ts(Ue.keyField(),s))}}}return e.Pe}function fn(t){const e=b(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Ag(e.path,e.collectionGroup,ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ci(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ts(s.field,o))}const r=e.endAt?new Il(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Il(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ag(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Uh(t,e){e.getFirstInequalityField(),Vf(t);const n=t.filters.concat([e]);return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jh(t,e,n){return new Vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lo(t,e){return Df(fn(t),fn(e))&&t.limitType===e.limitType}function Fw(t){return`${xf(fn(t))}|lt:${t.limitType}`}function zh(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ow(i)).join(", ")}]`),uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Si(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Si(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function cu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ci(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Tg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ci(r),i)||r.endAt&&!function(o,a,l){const u=Tg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ci(r),i))}(t,e)}function hk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $w(t){return(e,n)=>{let r=!1;for(const i of ci(t)){const s=dk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dk(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ti(l,u):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Rw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=new ue(V.comparator);function pn(){return fk}const bw=new ue(V.comparator);function ls(...t){let e=bw;for(const n of t)e=e.insert(n.key,n);return e}function Uw(t){let e=bw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return Ss()}function jw(){return Ss()}function Ss(){return new Ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const pk=new ue(V.comparator),mk=new Be(V.comparator);function q(...t){let e=mk;for(const n of t)e=e.add(n);return e}const gk=new Be(Q);function yk(){return gk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function Bw(t){return{integerValue:""+t}}function vk(t,e){return XP(e)?Bw(e):zw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this._=void 0}}function _k(t,e,n){return t instanceof oo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pf(s)&&(s=kf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ao?Hw(t,e):t instanceof lo?Ww(t,e):function(i,s){const o=qw(i,s),a=Cg(o)+Cg(i.Te);return Fh(o)&&Fh(i.Te)?Bw(a):zw(i.serializer,a)}(t,e)}function wk(t,e,n){return t instanceof ao?Hw(t,e):t instanceof lo?Ww(t,e):n}function qw(t,e){return t instanceof Tl?function(r){return Fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class oo extends hu{}class ao extends hu{constructor(e){super(),this.elements=e}}function Hw(t,e){const n=Kw(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class lo extends hu{constructor(e){super(),this.elements=e}}function Ww(t,e){let n=Kw(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class Tl extends hu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Cg(t){return me(t.integerValue||t.doubleValue)}function Kw(t){return Nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n){this.field=e,this.transform=n}}function Ik(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ao&&i instanceof ao||r instanceof lo&&i instanceof lo?Ii(r.elements,i.elements,Xt):r instanceof Tl&&i instanceof Tl?Xt(r.Te,i.Te):r instanceof oo&&i instanceof oo}(t.transform,e.transform)}class Tk{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class du{}function Gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lf(t.key,Kt.none()):new Mo(t.key,t.data,Kt.none());{const n=t.data,r=mt.empty();let i=new Be(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new Pt(i.toArray()),Kt.none())}}function Sk(t,e,n){t instanceof Mo?function(i,s,o){const a=i.value.clone(),l=kg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,o){if(!Da(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=kg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Qw(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function As(t,e,n,r){return t instanceof Mo?function(s,o,a,l){if(!Da(s.precondition,o))return a;const u=s.value.clone(),c=Ng(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,o,a,l){if(!Da(s.precondition,o))return a;const u=Ng(s.fieldTransforms,l,o),c=o.data;return c.setAll(Qw(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Da(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Ak(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qw(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ii(r,i,(s,o)=>Ik(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends du{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends du{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kg(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wk(o,a,n[i]))}return r}function Ng(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_k(s,o,e))}return r}class Lf extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rk extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Sk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Gw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&Ii(this.mutations,e.mutations,(n,r)=>Pg(n,r))&&Ii(this.baseMutations,e.baseMutations,(n,r)=>Pg(n,r))}}class Mf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=function(){return pk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Mf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,W;function Nk(t){switch(t){default:return M();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Xw(t){if(t===void 0)return dn("GRPC error has no .code"),E.UNKNOWN;switch(t){case pe.OK:return E.OK;case pe.CANCELLED:return E.CANCELLED;case pe.UNKNOWN:return E.UNKNOWN;case pe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case pe.INTERNAL:return E.INTERNAL;case pe.UNAVAILABLE:return E.UNAVAILABLE;case pe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case pe.NOT_FOUND:return E.NOT_FOUND;case pe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case pe.ABORTED:return E.ABORTED;case pe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case pe.DATA_LOSS:return E.DATA_LOSS;default:return M()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fa}static getOrCreateInstance(){return fa===null&&(fa=new Ff),fa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fa=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new ui([4294967295,4294967295],0);function xg(t){const e=xk().encode(t),n=new LP;return n.update(e),new Uint8Array(n.digest())}function Dg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ui([n,r],0),new ui([i,s],0)]}class $f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new us(`Invalid padding: ${n}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new us(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=ui.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(ui.fromNumber(r)));return i.compare(Dk)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=xg(e),[r,i]=Dg(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $f(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=xg(e),[r,i]=Dg(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fu($.min(),i,new ue(Q),pn(),q())}}class Fo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fo(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class Yw{constructor(e,n){this.targetId=e,this.pe=n}}class Jw{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Og{constructor(){this.ye=0,this.we=Lg(),this.Se=We.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=q(),n=q(),r=q();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Fo(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Lg()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Ok{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=pn(),this.$e=Vg(),this.Ue=new ue(Q)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(bh(a))if(s===0){const l=new V(a.path);this.ze(i,l,be.newNoDocument(l,$.min()))}else ie(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Ff.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,y,v){var _,S,p,f,g,w;const A={localCacheCount:y,existenceFilterCount:v.count},R=v.unchangedNames;return R&&(A.bloomFilter={applied:h===0,hashCount:(_=R==null?void 0:R.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(p=(S=R==null?void 0:R.bits)===null||S===void 0?void 0:S.bitmap)===null||p===void 0?void 0:p.length)!==null&&f!==void 0?f:0,padding:(w=(g=R==null?void 0:R.bits)===null||g===void 0?void 0:g.padding)!==null&&w!==void 0?w:0},d&&(A.bloomFilter.mightContain=d)),A}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Sr(s).toUint8Array()}catch(h){if(h instanceof Cw)return Ei("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new $f(l,o,a)}catch(h){return Ei(h instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&bh(a.target)){const l=new V(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,be.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=q();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new fu(e,n,this.Ue,this.Ke,r);return this.Ke=pn(),this.$e=Vg(),this.Ue=new ue(Q),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Og,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Be(Q),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Og),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Vg(){return new ue(V.comparator)}function Lg(){return new ue(V.comparator)}const Vk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Mk=(()=>({and:"AND",or:"OR"}))();class Fk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||uu(e)?e:{value:e}}function Sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $k(t,e){return Sl(t,e.toTimestamp())}function Gt(t){return ie(!!t),$.fromTimestamp(function(n){const r=qn(n);return new we(r.seconds,r.nanos)}(t))}function bf(t,e){return function(r){return new ne(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function eE(t){const e=ne.fromString(t);return ie(iE(e)),e}function qh(t,e){return bf(t.databaseId,e.path)}function pc(t,e){const n=eE(e);if(n.get(1)!==t.databaseId.projectId)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(tE(n))}function Hh(t,e){return bf(t.databaseId,e)}function bk(t){const e=eE(t);return e.length===4?ne.emptyPath():tE(e)}function Wh(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tE(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mg(t,e,n){return{name:qh(t,e),fields:n.value.mapValue.fields}}function Uk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ie(c===void 0||typeof c=="string"),We.fromBase64String(c||"")):(ie(c===void 0||c instanceof Uint8Array),We.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:Xw(u.code);return new x(c,u.message||"")}(o);n=new Jw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pc(t,r.document.name),s=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):$.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Oa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pc(t,r.document),s=r.readTime?Gt(r.readTime):$.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pc(t,r.document),s=r.removedTargetIds||[];n=new Oa([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kk(i,s),a=r.targetId;n=new Yw(a,o)}}return n}function jk(t,e){let n;if(e instanceof Mo)n={update:Mg(t,e.key,e.value)};else if(e instanceof Lf)n={delete:qh(t,e.key)};else if(e instanceof Dr)n={update:Mg(t,e.key,e.data),updateMask:Xk(e.fieldMask)};else{if(!(e instanceof Rk))return M();n={verify:qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Tl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$k(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(t,e.precondition)),n}function zk(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gt(i.updateTime):Gt(s);return o.isEqual($.min())&&(o=Gt(s)),new Tk(o,i.transformResults||[])}(n,e))):[]}function Bk(t,e){return{documents:[Hh(t,e.path)]}}function qk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return rE(Lt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Mr(h.field),direction:Kk(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Bh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Hk(t){let e=bk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=nE(h);return d instanceof Lt&&xw(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ts(Fr(v.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,uu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,y=h.values||[];return new Il(y,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,y=h.values||[];return new Il(y,d)}(n.endAt)),ck(e,i,o,s,a,"F",l,u)}function Wk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fr(n.unaryFilter.field);return ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fr(n.unaryFilter.field);return ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(n){return ye.create(Fr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Lt.create(n.compositeFilter.filters.map(r=>nE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(t):M()}function Kk(t){return Vk[t]}function Gk(t){return Lk[t]}function Qk(t){return Mk[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return Ue.fromServerFormat(t.fieldPath)}function rE(t){return t instanceof ye?function(n){if(n.op==="=="){if(Ig(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NAN"}};if(Eg(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ig(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NAN"}};if(Eg(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(n.field),op:Gk(n.op),value:n.value}}}(t):t instanceof Lt?function(n){const r=n.getFilters().map(i=>rE(i));return r.length===1?r[0]:{compositeFilter:{op:Qk(n.op),filters:r}}}(t):M()}function Xk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,r,i,s=$.min(),o=$.min(),a=We.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.ct=e}}function Jk(t){const e=Hk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.sn=new eN}addToCollectionParentIndex(e,n){return this.sn.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Bn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class eN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Ai(0)}static On(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.changes=new Ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&As(r.mutation,i,Pt.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ls();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=pn();const o=Ss(),a=function(){return Ss()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Dr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),As(c.mutation,u,c.mutation.getFieldMask(),we.now())):o.set(u.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new nN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ss();let i=new ue((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Pt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=jw();c.forEach(d=>{if(!s.has(d)){const y=Gw(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return V.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(lr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:Uw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ls();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(c,h){return new Vo(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,be.newInvalidDocument(u)))});let o=ls();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&As(u.mutation,l,Pt.empty(),we.now()),cu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return T.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:Jk(i.bundledQuery),readTime:Gt(i.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.overlays=new ue(V.comparator),this.cr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=lr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=lr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=lr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pk(n,r));let s=this.cr.get(n);s===void 0&&(s=q(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.lr=new Be(Ie.hr),this.Pr=new Be(Ie.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ie(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new V(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new V(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=q();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return V.comparator(e.key,n.key)||Q(e.mr,n.mr)}static Ir(e,n){return Q(e.mr,n.mr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Be(Ie.hr)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ck(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(Q);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),T.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new V(s),0);let a=new Be(Q);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),T.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return T.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ie(n,0),i=this.pr.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.Dr=e,this.docs=function(){return new ue(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=pn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||KP(WP(c),r)<=0||(i.has(c.key)||cu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}vr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lN(this)}getSize(e){return T.resolve(this.size)}}class lN extends tN{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.persistence=e,this.Cr=new Ui(n=>xf(n),Df),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Uf,this.targetCount=0,this.Or=Ai.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),T.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Ln(n),T.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Cf(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new uN(this),this.indexManager=new Zk,this.remoteDocumentCache=function(i){return new aN(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Yk(n),this.Qr=new iN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new oN(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new hN(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return T.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class hN extends QP{constructor(e){super(),this.currentSequenceNumber=e}}class jf{constructor(e){this.persistence=e,this.Wr=new Uf,this.Gr=null}static zr(e){return new jf(e)}get jr(){if(this.Gr)return this.Gr;throw M()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),T.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.jr,r=>{const i=V.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return T.or([()=>T.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(Rg(n))return T.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jh(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,jh(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return Rg(n)||i.isEqual($.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(gg()<=G.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zh(n)),this.ji(e,o,n,HP(i,-1)))})}Gi(e,n){let r=new Be($w(e));return n.forEach((i,s)=>{cu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return gg()<=G.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",zh(n)),this.Ki.getDocumentsMatchingQuery(e,n,Bn.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ue(Q),this.Yi=new Ui(s=>xf(s),Df),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rN(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function pN(t,e,n,r){return new fN(t,e,n,r)}async function sE(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function mN(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let y=T.resolve();return d.forEach(v=>{y=y.next(()=>c.getEntry(l,v)).next(_=>{const S=u.docVersions.get(v);ie(S!==null),_.version.compareTo(S)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oE(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function gN(t,e){const n=b(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let y=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?y=y.withResumeToken(We.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(_,S,p){return _.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,y,c)&&a.push(n.kr.updateTargetData(s,y))});let l=pn(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(yN(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual($.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function yN(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=pn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function vN(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _N(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Pn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Kh(t,e,n){const r=b(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Oo(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Fg(t,e,n){const r=b(t);let i=$.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=b(l),d=h.Yi.get(c);return d!==void 0?T.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:q())).next(a=>(wN(r,hk(e),a),{documents:a,ss:s})))}function wN(t,e,n){let r=t.Zi.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class $g{constructor(){this.activeTargetIds=yk()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EN{constructor(){this.Hs=new $g,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa=null;function mc(){return pa===null?pa=function(){return 268435456+Math.round(2147483648*Math.random())}():pa++,"0x"+pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class AN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=mc(),l=this.mo(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ei("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$i}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=TN[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=mc();return new Promise((o,a)=>{const l=new VP;l.setWithCredentials(!0),l.listenOnce(xP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fc.NO_ERROR:const c=l.getResponseJson();D(Me,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case fc.TIMEOUT:D(Me,`RPC '${e}' ${s} timed out`),a(new x(E.DEADLINE_EXCEEDED,"Request time out"));break;case fc.HTTP_ERROR:const h=l.getStatus();if(D(Me,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const y=d==null?void 0:d.error;if(y&&y.status&&y.message){const v=function(S){const p=S.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(p)>=0?p:E.UNKNOWN}(y.status);a(new x(v,y.message))}else a(new x(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(E.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(Me,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);D(Me,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=mc(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kP(),a=NP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new OP({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(Me,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,y=!1;const v=new SN({so:S=>{y?D(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(d||(D(Me,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),D(Me,`RPC '${e}' stream ${i} sending:`,S),h.send(S))},oo:()=>h.close()}),_=(S,p,f)=>{S.listen(p,g=>{try{f(g)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,ca.EventType.OPEN,()=>{y||D(Me,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ca.EventType.CLOSE,()=>{y||(y=!0,D(Me,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,ca.EventType.ERROR,S=>{y||(y=!0,Ei(Me,`RPC '${e}' stream ${i} transport errored:`,S),v.Po(new x(E.UNAVAILABLE,"The operation could not be completed")))}),_(h,ca.EventType.MESSAGE,S=>{var p;if(!y){const f=S.data[0];ie(!!f);const g=f,w=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(w){D(Me,`RPC '${e}' stream ${i} received error:`,w);const A=w.status;let R=function(J){const j=pe[J];if(j!==void 0)return Xw(j)}(A),N=w.message;R===void 0&&(R=E.INTERNAL,N="Unknown error status: "+A+" with message "+w.message),y=!0,v.Po(new x(R,N)),h.close()}else D(Me,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,DP.STAT_EVENT,S=>{S.stat===pg.PROXY?D(Me,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===pg.NOPROXY&&D(Me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return new Fk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new aE(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(dn(n.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new x(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RN extends lE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=Uk(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Gt(o.readTime):$.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Wh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=bh(l)?{documents:Bk(s,l)}:{query:qk(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Zw(s,o.resumeToken);const u=Bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=Sl(s,o.snapshotVersion.toTimestamp());const u=Bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Wk(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Wh(this.serializer),n.removeTarget=e,this.Ho(n)}}class CN extends lE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=zk(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.u_(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Wh(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jk(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(E.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(E.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class kN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(dn(n),this.d_=!1):D("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Or(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=b(l);u.y_.add(4),await $o(u),u.b_.set("Unknown"),u.y_.delete(4),await mu(u)}(this))})}),this.b_=new kN(r,i)}}async function mu(t){if(Or(t))for(const e of t.w_)await e(!0)}async function $o(t){for(const e of t.w_)await e(!1)}function uE(t,e){const n=b(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Hf(n)?qf(n):ji(n).Uo()&&Bf(n,e))}function cE(t,e){const n=b(t),r=ji(n);n.p_.delete(e),r.Uo()&&hE(n,e),n.p_.size===0&&(r.Uo()?r.zo():Or(n)&&n.b_.set("Unknown"))}function Bf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ji(t).i_(e)}function hE(t,e){t.D_.Be(e),ji(t).s_(e)}function qf(t){t.D_=new Ok({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ji(t).start(),t.b_.A_()}function Hf(t){return Or(t)&&!ji(t).$o()&&t.p_.size>0}function Or(t){return b(t).y_.size===0}function dE(t){t.D_=void 0}async function xN(t){t.p_.forEach((e,n)=>{Bf(t,e)})}async function DN(t,e){dE(t),Hf(t)?(t.b_.m_(e),qf(t)):t.b_.set("Unknown")}async function ON(t,e,n){if(t.b_.set("Online"),e instanceof Jw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Al(t,r)}else if(e instanceof Oa?t.D_.We(e):e instanceof Yw?t.D_.Ze(e):t.D_.je(e),!n.isEqual($.min()))try{const r=await oE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(We.EMPTY_BYTE_STRING,c.snapshotVersion)),hE(s,l);const h=new Pn(c.target,l,u,c.sequenceNumber);Bf(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Al(t,r)}}async function Al(t,e,n){if(!Oo(e))throw e;t.y_.add(1),await $o(t),t.b_.set("Offline"),n||(n=()=>oE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await mu(t)})}function fE(t,e){return e().catch(n=>Al(t,n,e))}async function gu(t){const e=b(t),n=Hn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;VN(e);)try{const i=await vN(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,LN(e,i)}catch(i){await Al(e,i)}pE(e)&&mE(e)}function VN(t){return Or(t)&&t.g_.length<10}function LN(t,e){t.g_.push(e);const n=Hn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function pE(t){return Or(t)&&!Hn(t).$o()&&t.g_.length>0}function mE(t){Hn(t).start()}async function MN(t){Hn(t).l_()}async function FN(t){const e=Hn(t);for(const n of t.g_)e.a_(n.mutations)}async function $N(t,e,n){const r=t.g_.shift(),i=Mf.from(r,e,n);await fE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gu(t)}async function bN(t,e){e&&Hn(t).__&&await async function(r,i){if(function(o){return Nk(o)&&o!==E.ABORTED}(i.code)){const s=r.g_.shift();Hn(r).Go(),await fE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gu(r)}}(t,e),pE(t)&&mE(t)}async function Ug(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Or(n);n.y_.add(3),await $o(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await mu(n)}async function UN(t,e){const n=b(t);e?(n.y_.delete(2),await mu(n)):e||(n.y_.add(2),await $o(n),n.b_.set("Unknown"))}function ji(t){return t.v_||(t.v_=function(n,r,i){const s=b(n);return s.P_(),new RN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:xN.bind(null,t),uo:DN.bind(null,t),r_:ON.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Hf(t)?qf(t):t.b_.set("Unknown")):(await t.v_.stop(),dE(t))})),t.v_}function Hn(t){return t.C_||(t.C_=function(n,r,i){const s=b(n);return s.P_(),new CN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:MN.bind(null,t),uo:bN.bind(null,t),c_:FN.bind(null,t),u_:$N.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await gu(t)):(await t.C_.stop(),t.g_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Wf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kf(t,e){if(dn("AsyncQueue",`${e}: ${t}`),Oo(t))return new x(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=ls(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.F_=new ue(V.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):M():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ri{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ri(e,n,hi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.x_=void 0,this.listeners=[]}}class zN{constructor(){this.queries=new Ui(e=>Fw(e),Lo),this.onlineState="Unknown",this.O_=new Set}}async function BN(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jN),i)try{s.x_=await n.onListen(r)}catch(o){const a=Kf(o,`Initialization of query '${zh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Gf(n)}async function qN(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function HN(t,e){const n=b(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Gf(n)}function WN(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Gf(t){t.O_.forEach(e=>{e.next()})}class KN{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.key=e}}class yE{constructor(e){this.key=e}}class GN{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=q(),this.mutatedKeys=q(),this.na=$w(e),this.ra=new hi(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new jg,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=cu(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let S=!1;d&&y?d.data.isEqual(y.data)?v!==_&&(r.track({type:3,doc:y}),S=!0):this._a(d,y)||(r.track({type:2,doc:y}),S=!0,(l&&this.na(y,l)>0||u&&this.na(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),S=!0):d&&!y&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(y?(o=o.add(y),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,y){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return v(d)-v(y)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Ri(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new jg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=q(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new yE(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new gE(r))}),n}ha(e){this.X_=e.ss,this.ta=q();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Ri.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class QN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XN{constructor(e){this.key=e,this.Ia=!1}}class YN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Ui(a=>Fw(a),Lo),this.da=new Map,this.Aa=new Set,this.Ra=new ue(V.comparator),this.Va=new Map,this.ma=new Uf,this.fa={},this.ga=new Map,this.pa=Ai.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function JN(t,e){const n=l2(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await _N(n.localStore,fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ZN(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&uE(n.remoteStore,o)}return i}async function ZN(t,e,n,r,i){t.wa=(h,d,y)=>async function(_,S,p,f){let g=S.view.sa(p);g.zi&&(g=await Fg(_.localStore,S.query,!1).then(({documents:R})=>S.view.sa(R,g)));const w=f&&f.targetChanges.get(S.targetId),A=S.view.applyChanges(g,_.isPrimaryClient,w);return Bg(_,S.targetId,A.ca),A.snapshot}(t,h,d,y);const s=await Fg(t.localStore,e,!0),o=new GN(e,s.ss),a=o.sa(s.documents),l=Fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Bg(t,n,u.ca);const c=new QN(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function e2(t,e){const n=b(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Lo(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cE(n.remoteStore,r.targetId),Gh(n,r.targetId)}).catch(Do)):(Gh(n,r.targetId),await Kh(n.localStore,r.targetId,!0))}async function t2(t,e,n){const r=u2(t);try{const i=await function(o,a){const l=b(o),u=we.now(),c=a.reduce((y,v)=>y.add(v.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let v=pn(),_=q();return l.Xi.getEntries(y,c).next(S=>{v=S,v.forEach((p,f)=>{f.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,v)).next(S=>{h=S;const p=[];for(const f of a){const g=Ak(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new Dr(f.key,g,Pw(g.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,p,a)}).next(S=>{d=S;const p=S.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(y,S.batchId,p)})}).then(()=>({batchId:d.batchId,changes:Uw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new ue(Q)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await bo(r,i.changes),await gu(r.remoteStore)}catch(i){const s=Kf(i,"Failed to persist write");n.reject(s)}}async function vE(t,e){const n=b(t);try{const r=await gN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?ie(o.Ia):i.removedDocuments.size>0&&(ie(o.Ia),o.Ia=!1))}),await bo(n,r,e)}catch(r){await Do(r)}}function zg(t,e,n){const r=b(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=b(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Gf(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function n2(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new ue(V.comparator);o=o.insert(s,be.newNoDocument(s,$.min()));const a=q().add(s),l=new fu($.min(),new Map,new ue(Q),o,a);await vE(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),Qf(r)}else await Kh(r.localStore,e,!1).then(()=>Gh(r,e,n)).catch(Do)}async function r2(t,e){const n=b(t),r=e.batch.batchId;try{const i=await mN(n.localStore,e);wE(n,r,null),_E(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,i)}catch(i){await Do(i)}}async function i2(t,e,n){const r=b(t);try{const i=await function(o,a){const l=b(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ie(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);wE(r,e,n),_E(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,i)}catch(i){await Do(i)}}function _E(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function wE(t,e,n){const r=b(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||EE(t,r)})}function EE(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(cE(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Qf(t))}function Bg(t,e,n){for(const r of n)r instanceof gE?(t.ma.addReference(r.key,e),s2(t,r)):r instanceof yE?(D("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||EE(t,r.key)):M()}function s2(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(D("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Qf(t))}function Qf(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new V(ne.fromString(e)),r=t.pa.next();t.Va.set(r,new XN(n)),t.Ra=t.Ra.insert(n,r),uE(t.remoteStore,new Pn(fn(Of(n.path)),r,"TargetPurposeLimboResolution",Cf.ae))}}async function bo(t,e,n){const r=b(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=zf.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=b(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(u,d=>T.forEach(d.Li,y=>c.persistence.referenceDelegate.addReference(h,d.targetId,y)).next(()=>T.forEach(d.ki,y=>c.persistence.referenceDelegate.removeReference(h,d.targetId,y)))))}catch(h){if(!Oo(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const y=c.Ji.get(d),v=y.snapshotVersion,_=y.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function o2(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await sE(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new x(E.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.ts)}}function a2(t,e){const n=b(t),r=n.Va.get(e);if(r&&r.Ia)return q().add(r.key);{let i=q();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function l2(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n2.bind(null,e),e.Ta.r_=HN.bind(null,e.eventManager),e.Ta.Sa=WN.bind(null,e.eventManager),e}function u2(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=r2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=i2.bind(null,e),e}class qg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pN(this.persistence,new dN,e.initialUser,this.serializer)}createPersistence(e){return new cN(jf.zr,this.serializer)}createSharedClientState(e){return new EN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class c2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=o2.bind(null,this.syncEngine),await UN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zN}()}createDatastore(e){const n=pu(e.databaseInfo.databaseId),r=function(s){return new AN(s)}(e.databaseInfo);return function(s,o,a,l){return new PN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new NN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>zg(this.syncEngine,n,0),function(){return bg.v()?new bg:new IN}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new YN(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=b(n);D("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await $o(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=Aw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await p2(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Ug(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Ug(e.remoteStore,s)),t._onlineComponents=e}function f2(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function p2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!f2(n))throw n;Ei("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new qg)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await yc(t,new qg);return t._offlineComponents}async function IE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Hg(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Hg(t,new c2))),t._onlineComponents}function m2(t){return IE(t).then(e=>e.syncEngine)}async function Wg(t){const e=await IE(t),n=e.eventManager;return n.onListen=JN.bind(null,e.syncEngine),n.onUnlisten=e2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e,n){if(!n)throw new x(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function g2(t,e,n,r){if(e===!0&&r===!0)throw new x(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gg(t){if(!V.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qg(t){if(V.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function di(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yu(t);throw new x(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}g2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MP;switch(r.type){case"firstParty":return new UP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kg.get(n);r&&(D("ComponentProvider","Removing Datastore"),Kg.delete(n),r.terminate())}(this),Promise.resolve()}}function y2(t,e,n,r={}){var i;const s=(t=di(t,vu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Fe.MOCK_USER;else{a=JT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Fe(u)}t._authCredentials=new FP(new Sw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wn(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class bn extends Wn{constructor(e,n,r){super(e,n,Of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new V(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function AE(t,e,...n){if(t=Ae(t),SE("collection","path",e),t instanceof vu){const r=ne.fromString(e,...n);return Qg(r),new bn(t,null,r)}{if(!(t instanceof at||t instanceof bn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Qg(r),new bn(t.firestore,null,r)}}function RE(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=Aw.V()),SE("doc","path",e),t instanceof vu){const r=ne.fromString(e,...n);return Gg(r),new at(t,null,new V(r))}{if(!(t instanceof at||t instanceof bn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Gg(r),new at(t.firestore,t instanceof bn?t.converter:null,new V(r))}}function v2(t,e){return t=Ae(t),e=Ae(e),t instanceof Wn&&e instanceof Wn&&t.firestore===e.firestore&&Lo(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new aE(this,"async_queue_retry"),this.Xa=()=>{const n=gc();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new pr;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Oo(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Wf.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&M()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class uo extends vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new _2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kE(this),this._firestoreClient.terminate()}}function CE(t,e){const n=typeof t=="object"?t:U_(),r=typeof t=="string"?t:e||"(default)",i=yo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XT("firestore");s&&y2(i,...s)}return i}function PE(t){return t._firestoreClient||kE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kE(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new JP(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,TE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new d2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ci(We.fromBase64String(e))}catch(n){throw new x(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ci(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=/^__.*__$/;class E2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}function NE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Zf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Zf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Rl(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(NE(this.uu)&&w2.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class I2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pu(e)}Ru(e,n,r,i=!1){return new Zf({uu:e,methodName:n,Au:r,path:Ue.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xE(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new I2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T2(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);VE("Data must be an object, but it was:",o,r);const a=DE(r,o);let l,u;if(s.merge)l=new Pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=A2(e,h,n);if(!o.contains(d))throw new x(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);C2(c,d)||c.push(d)}l=new Pt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new E2(new mt(a),l,u)}class ep extends Yf{_toFieldTransform(e){return new Ek(e.path,new oo)}isEqual(e){return e instanceof ep}}function S2(t,e,n,r=!1){return tp(n,t.Ru(r?4:3,e))}function tp(t,e){if(OE(t=Ae(t)))return VE("Unsupported field value:",e,t),DE(t,e);if(t instanceof Yf)return function(r,i){if(!NE(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=tp(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:Sl(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sl(i.serializer,s)}}if(r instanceof Jf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ci)return{bytesValue:Zw(i.serializer,r._byteString)};if(r instanceof at){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${yu(r)}`)}(t,e)}function DE(t,e){const n={};return Rw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,i)=>{const s=tp(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Jf||t instanceof Ci||t instanceof at||t instanceof Yf)}function VE(t,e,n){if(!OE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=yu(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function A2(t,e,n){if((e=Ae(e))instanceof Xf)return e._internalPath;if(typeof e=="string")return LE(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const R2=new RegExp("[~\\*/\\[\\]]");function LE(t,e,n){if(e.search(R2)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xf(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(E.INVALID_ARGUMENT,a+t+l)}function C2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new P2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(FE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class P2 extends ME{data(){return super.data()}}function FE(t,e){return typeof e=="string"?LE(t,e):e instanceof Xf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class np{}class N2 extends np{}function x2(t,e,...n){let r=[];e instanceof np&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ip).length,a=s.filter(l=>l instanceof rp).length;if(o>1||o>0&&a>0)throw new x(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rp extends N2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rp(e,n,r)}_apply(e){const n=this._parse(e);return $E(e._query,n),new Wn(e.firestore,e.converter,Uh(e._query,n))}_parse(e){const n=xE(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Zg(h,c);const y=[];for(const v of h)y.push(Jg(l,s,v));d={arrayValue:{values:y}}}else d=Jg(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Zg(h,c),d=S2(a,o,h,c==="in"||c==="not-in");return ye.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ip extends np{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ip(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Lt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)$E(o,l),o=Uh(o,l)}(e._query,n),new Wn(e.firestore,e.converter,Uh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jg(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new x(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mw(e)&&n.indexOf("/")!==-1)throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!V.isDocumentKey(r))throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wg(t,new V(r))}if(n instanceof at)return wg(t,n._key);throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yu(n)}.`)}function Zg(t,e){if(!Array.isArray(t)||t.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $E(t,e){if(e.isInequality()){const r=Vf(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new x(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Lw(t);s!==null&&D2(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function D2(t,e,n){if(!n.isEqual(e))throw new x(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class O2{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Jf(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const n=qn(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ie(iE(r));const i=new io(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bE extends ME{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(FE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends bE{data(e={}){return super.data(e)}}class L2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:M2(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function M2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class UE extends O2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ci(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function F2(t){return jE(di(t.firestore,uo),[new Lf(t._key,Kt.none())])}function $2(t,e){const n=di(t.firestore,uo),r=RE(t),i=V2(t.converter,e);return jE(n,[T2(xE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function ey(t,...e){var n,r,i;t=Ae(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Yg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof at)u=di(t.firestore,uo),c=Of(t._key.path),l={next:h=>{e[o]&&e[o](b2(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=di(t,Wn);u=di(h.firestore,uo),c=h._query;const d=new UE(u);l={next:y=>{e[o]&&e[o](new L2(u,d,h,y))},error:e[o+1],complete:e[o+2]},k2(t._query)}return function(d,y,v,_){const S=new h2(_),p=new KN(y,S,v);return d.asyncQueue.enqueueAndForget(async()=>BN(await Wg(d),p)),()=>{S.Ca(),d.asyncQueue.enqueueAndForget(async()=>qN(await Wg(d),p))}}(PE(u),c,a,l)}function jE(t,e){return function(r,i){const s=new pr;return r.asyncQueue.enqueueAndForget(async()=>t2(await m2(r),i,s)),s.promise}(PE(t),e)}function b2(t,e,n){const r=n.docs.get(e._key),i=new UE(t);return new bE(t,i,e._key,r,new cs(n.hasPendingWrites,n.fromCache),e.converter)}function U2(){return new ep("serverTimestamp")}(function(e,n=!0){(function(i){$i=i})(xi),Qt(new Dt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new uo(new $P(r.getProvider("auth-internal")),new zP(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),vt(mg,"4.1.0",e),vt(mg,"4.1.0","esm2017")})();const j2=(t,e)=>e.some(n=>t instanceof n);let ty,ny;function z2(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B2(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zE=new WeakMap,Qh=new WeakMap,BE=new WeakMap,vc=new WeakMap,sp=new WeakMap;function q2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zE.set(n,t)}).catch(()=>{}),sp.set(e,t),e}function H2(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W2(t){Xh=t(Xh)}function K2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return BE.set(r,e.sort?e.sort():[e]),Un(r)}:B2().includes(t)?function(...e){return t.apply(_c(this),e),Un(zE.get(this))}:function(...e){return Un(t.apply(_c(this),e))}}function G2(t){return typeof t=="function"?K2(t):(t instanceof IDBTransaction&&H2(t),j2(t,z2())?new Proxy(t,Xh):t)}function Un(t){if(t instanceof IDBRequest)return q2(t);if(vc.has(t))return vc.get(t);const e=G2(t);return e!==t&&(vc.set(t,e),sp.set(e,t)),e}const _c=t=>sp.get(t);function Q2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const X2=["get","getKey","getAll","getAllKeys","count"],Y2=["put","add","delete","clear"],wc=new Map;function ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||X2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wc.set(e,s),s}W2(t=>({...t,get:(e,n,r)=>ry(e,n)||t.get(e,n,r),has:(e,n)=>!!ry(e,n)||t.has(e,n)}));const qE="@firebase/installations",op="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=1e4,WE=`w:${op}`,KE="FIS_v2",J2="https://firebaseinstallations.googleapis.com/v1",Z2=60*60*1e3,ex="installations",tx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rr=new Nr(ex,tx,nx);function GE(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE({projectId:t}){return`${J2}/projects/${t}/installations`}function XE(t){return{token:t.token,requestStatus:2,expiresIn:ix(t.expiresIn),creationTime:Date.now()}}async function YE(t,e){const r=(await e.json()).error;return Rr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function JE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rx(t,{refreshToken:e}){const n=JE(t);return n.append("Authorization",sx(e)),n}async function ZE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ix(t){return Number(t.replace("s","000"))}function sx(t){return`${KE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=QE(t),i=JE(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:KE,appId:t.appId,sdkVersion:WE},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ZE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:XE(u.authToken)}}else throw await YE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/^[cdef][\w-]{21}$/,Yh="";function ux(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cx(t);return lx.test(n)?n:Yh}catch{return Yh}}function cx(t){return ax(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=new Map;function nI(t,e){const n=_u(t);rI(n,e),hx(n,e)}function rI(t,e){const n=tI.get(t);if(n)for(const r of n)r(e)}function hx(t,e){const n=dx();n&&n.postMessage({key:t,fid:e}),fx()}let ur=null;function dx(){return!ur&&"BroadcastChannel"in self&&(ur=new BroadcastChannel("[Firebase] FID Change"),ur.onmessage=t=>{rI(t.data.key,t.data.fid)}),ur}function fx(){tI.size===0&&ur&&(ur.close(),ur=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="firebase-installations-database",mx=1,Cr="firebase-installations-store";let Ec=null;function ap(){return Ec||(Ec=Q2(px,mx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cr)}}})),Ec}async function Cl(t,e){const n=_u(t),i=(await ap()).transaction(Cr,"readwrite"),s=i.objectStore(Cr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&nI(t,e.fid),e}async function iI(t){const e=_u(t),r=(await ap()).transaction(Cr,"readwrite");await r.objectStore(Cr).delete(e),await r.done}async function wu(t,e){const n=_u(t),i=(await ap()).transaction(Cr,"readwrite"),s=i.objectStore(Cr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&nI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(t){let e;const n=await wu(t.appConfig,r=>{const i=gx(r),s=yx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Yh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gx(t){const e=t||{fid:ux(),registrationStatus:0};return sI(e)}function yx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_x(t)}:{installationEntry:e}}async function vx(t,e){try{const n=await ox(t,e);return Cl(t.appConfig,n)}catch(n){throw GE(n)&&n.customData.serverCode===409?await iI(t.appConfig):await Cl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _x(t){let e=await iy(t.appConfig);for(;e.registrationStatus===1;)await eI(100),e=await iy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lp(t);return r||n}return e}function iy(t){return wu(t,e=>{if(!e)throw Rr.create("installation-not-found");return sI(e)})}function sI(t){return wx(t)?{fid:t.fid,registrationStatus:0}:t}function wx(t){return t.registrationStatus===1&&t.registrationTime+HE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex({appConfig:t,heartbeatServiceProvider:e},n){const r=Ix(t,n),i=rx(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:WE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ZE(()=>fetch(r,a));if(l.ok){const u=await l.json();return XE(u)}else throw await YE("Generate Auth Token",l)}function Ix(t,{fid:e}){return`${QE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e=!1){let n;const r=await wu(t.appConfig,s=>{if(!oI(s))throw Rr.create("not-registered");const o=s.authToken;if(!e&&Ax(o))return s;if(o.requestStatus===1)return n=Tx(t,e),s;{if(!navigator.onLine)throw Rr.create("app-offline");const a=Cx(s);return n=Sx(t,a),a}});return n?await n:r.authToken}async function Tx(t,e){let n=await sy(t.appConfig);for(;n.authToken.requestStatus===1;)await eI(100),n=await sy(t.appConfig);const r=n.authToken;return r.requestStatus===0?up(t,e):r}function sy(t){return wu(t,e=>{if(!oI(e))throw Rr.create("not-registered");const n=e.authToken;return Px(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Sx(t,e){try{const n=await Ex(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Cl(t.appConfig,r),n}catch(n){if(GE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cl(t.appConfig,r)}throw n}}function oI(t){return t!==void 0&&t.registrationStatus===2}function Ax(t){return t.requestStatus===2&&!Rx(t)}function Rx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Z2}function Cx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Px(t){return t.requestStatus===1&&t.requestTime+HE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t){const e=t,{installationEntry:n,registrationPromise:r}=await lp(e);return r?r.catch(console.error):up(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(t,e=!1){const n=t;return await xx(n),(await up(n,e)).token}async function xx(t){const{registrationPromise:e}=await lp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){if(!t||!t.options)throw Ic("App Configuration");if(!t.name)throw Ic("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ic(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ic(t){return Rr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="installations",Ox="installations-internal",Vx=t=>{const e=t.getProvider("app").getImmediate(),n=Dx(e),r=yo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lx=t=>{const e=t.getProvider("app").getImmediate(),n=yo(e,aI).getImmediate();return{getId:()=>kx(n),getToken:i=>Nx(n,i)}};function Mx(){Qt(new Dt(aI,Vx,"PUBLIC")),Qt(new Dt(Ox,Lx,"PRIVATE"))}Mx();vt(qE,op);vt(qE,op,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="analytics",Fx="firebase_id",$x="origin",bx=60*1e3,Ux="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new ql("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_t=new Nr("analytics","Analytics",jx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t){if(!t.startsWith(cp)){const e=_t.create("invalid-gtag-resource",{gtagURL:t});return rt.warn(e.message),""}return t}function lI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Bx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function qx(t,e){const n=Bx("firebase-js-sdk-policy",{createScriptURL:zx}),r=document.createElement("script"),i=`${cp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Hx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Wx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await lI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){rt.error(a)}t("config",i,s)}async function Kx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await lI(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){rt.error(s)}}function Gx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Kx(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Wx(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){rt.error(a)}}return i}function Qx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Gx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Xx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=30,Jx=1e3;class Zx{constructor(e={},n=Jx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uI=new Zx;function eD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:eD(r)},s=Ux.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw _t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function nD(t,e=uI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw _t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw _t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sD;return setTimeout(async()=>{a.abort()},n!==void 0?n:bx),cI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function cI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=uI){var s;const{appId:o,measurementId:a}=t;try{await rD(r,e)}catch(l){if(a)return rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await tD(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!iD(u)){if(i.deleteThrottleMetadata(o),a)return rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?km(n,i.intervalMillis,Yx):km(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),rt.debug(`Calling attemptFetch again in ${c} millis`),cI(t,h,r,i)}}function rD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(_t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iD(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(){if(L_())try{await M_()}catch(t){return rt.warn(_t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return rt.warn(_t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lD(t,e,n,r,i,s,o){var a;const l=nD(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&rt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>rt.error(y)),e.push(l);const u=aD().then(y=>{if(y)return r.getId()}),[c,h]=await Promise.all([l,u]);Xx(s)||qx(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[$x]="firebase",d.update=!0,h!=null&&(d[Fx]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.app=e}_delete(){return delete Rs[this.app.options.appId],Promise.resolve()}}let Rs={},ay=[];const ly={};let Tc="dataLayer",cD="gtag",uy,hI,cy=!1;function hD(){const t=[];if(V_()&&t.push("This is a browser extension environment."),nS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=_t.create("invalid-analytics-context",{errorInfo:e});rt.warn(n.message)}}function dD(t,e,n){hD();const r=t.options.appId;if(!r)throw _t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _t.create("no-api-key");if(Rs[r]!=null)throw _t.create("already-exists",{id:r});if(!cy){Hx(Tc);const{wrappedGtag:s,gtagCore:o}=Qx(Rs,ay,ly,Tc,cD);hI=s,uy=o,cy=!0}return Rs[r]=lD(t,ay,ly,e,uy,Tc,n),new uD(t)}function fD(t,e,n,r){t=Ae(t),oD(hI,Rs[t.app.options.appId],e,n,r).catch(i=>rt.error(i))}const hy="@firebase/analytics",dy="0.10.0";function pD(){Qt(new Dt(oy,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dD(r,i,n)},"PUBLIC")),Qt(new Dt("analytics-internal",t,"PRIVATE")),vt(hy,dy),vt(hy,dy,"esm2017");function t(e){try{const n=e.getProvider(oy).getImmediate();return{logEvent:(r,i,s)=>fD(n,r,i,s)}}catch(n){throw _t.create("interop-component-reg-failed",{reason:n})}}}pD();var mD="firebase",gD="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(mD,gD,"app");const yD={apiKey:"AIzaSyB3qimFVDkLCpLtnmCaifOX8f0TfFbtBho",authDomain:"todortamas1-1c90a.firebaseapp.com",projectId:"todortamas1-1c90a",storageBucket:"todortamas1-1c90a.appspot.com",messagingSenderId:"508770170497",appId:"1:508770170497:web:4bb890b4cd77d595d0bf80",measurementId:"G-7KL331QW3W"},hp=b_(yD),dp=SC(hp);CE(hp);const fp=CE(hp);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function vD(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function _D(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Jr=function(){return Jr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Jr.apply(this,arguments)},dI=function(t){return{loading:t==null,value:t}},wD=function(){return function(t,e){switch(e.type){case"error":return Jr(Jr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return dI(e.defaultValue);case"value":return Jr(Jr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},ED=function(t){var e=t?t():void 0,n=B.useReducer(wD(),dI(e)),r=n[0],i=n[1],s=B.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=B.useCallback(function(l){i({type:"error",error:l})},[]),a=B.useCallback(function(l){i({type:"value",value:l})},[]);return B.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},fI=function(t,e){var n=ED(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return B.useEffect(function(){var l=dR(t,function(u){return vD(void 0,void 0,void 0,function(){var c;return _D(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};const ID=AE(fp,"favorites");function fy(t){const e=t.paintings,n=t.loggedin,[r,i]=B.useState(!1),[s,o,a]=fI(dp),l=async(u,c)=>{i(!0),await $2(ID,{created:U2(),name:u,prodId:c,uid:s.uid}),i(!1)};return m.jsx(m.Fragment,{children:e.map(u=>m.jsxs("div",{className:"imageCard",children:[m.jsx("img",{src:u.src,className:`paintings ${u.className}`,alt:"Image of the painting"}),m.jsxs("div",{className:"imageText",children:[m.jsx("div",{className:"imageTitle",children:u.name}),m.jsx("div",{className:"imageDescription",children:u.descr}),m.jsxs("div",{className:"imageSize",children:["Size: ",u.size]})]}),n?m.jsx("div",{className:"favDiv",children:m.jsxs("button",{onClick:c=>{c.preventDefault(),l(u.name,u.id)},children:[" ",m.jsx("img",{className:"favIcon",src:"favorite.svg",alt:""})]})}):m.jsx("p",{children:"Log in to add to favories"})]},u.id))})}function TD(){const{searchProduct:t}=B.useContext(Io);return m.jsxs("form",{id:"searchForm",children:[m.jsx("input",{id:"searchField",type:"text",placeholder:"Search for painting",onChange:e=>{e.preventDefault(),t(e.target.value)}}),m.jsx("div",{children:m.jsx("img",{id:"searchIcon",src:"src/images/icons/search.svg",alt:""})})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zr=function(){return Zr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Zr.apply(this,arguments)},pI=function(t){return{loading:t==null,value:t}},SD=function(){return function(t,e){switch(e.type){case"error":return Zr(Zr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return pI(e.defaultValue);case"value":return Zr(Zr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},AD=function(t){var e=t?t():void 0,n=B.useReducer(SD(),pI(e)),r=n[0],i=n[1],s=B.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=B.useCallback(function(l){i({type:"error",error:l})},[]),a=B.useCallback(function(l){i({type:"value",value:l})},[]);return B.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},RD=function(t,e,n){var r=B.useRef(t);return B.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},CD=function(t,e){var n=!t&&!e,r=!!t&&!!e&&v2(t,e);return n||r},PD=function(t,e){return RD(t,CD,e)},kD=function(t,e){var n=AD(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=PD(t,s);return B.useEffect(function(){if(!u.current){a(void 0);return}var c=e!=null&&e.snapshotListenOptions?ey(u.current,e.snapshotListenOptions,a,o):ey(u.current,a,o);return function(){c()}},[u.current]),[l,i,r]},ND=function(t,e){var n=kD(t,e),r=n[0],i=n[1],s=n[2],o=xD(r,e==null?void 0:e.snapshotOptions,e==null?void 0:e.initialValue);return[o,i,s,r]},xD=function(t,e,n){return B.useMemo(function(){var r;return(r=t==null?void 0:t.docs.map(function(i){return i.data(e)}))!==null&&r!==void 0?r:n},[t,e])};function py(t){const e=t.favorites,n=t.loading,{getImage:r}=B.useContext(Io),[i,s,o]=fI(dp),a=async l=>{await F2(RE(fp,"favorites",l))};return m.jsxs("div",{children:[" ",n?"Favorites loading":e.map(l=>{if(l.uid===i.uid)return m.jsxs("div",{className:"favItem",children:[m.jsx("img",{className:"favImg",src:r(l.prodId),alt:""}),m.jsx("p",{children:l.name}),m.jsx("button",{onClick:()=>{a(l.id)},children:"Remove from favorites"})]},l.id)})]})}const DD=AE(fp,"favorites").withConverter({fromFirestore(t){return{id:t.id,...t.data()}},toFirestore(t){return t}}),OD=x2(DD);function VD(){const[t,e]=ND(OD),{searchFavProduct:n}=B.useContext(Io),[r,i]=B.useState(t),[s,o]=B.useState(!0),[a,l]=B.useState();return m.jsxs(m.Fragment,{children:[m.jsx("h1",{id:"h1Profile",children:"My profile"}),m.jsxs("div",{children:[m.jsx("h4",{id:"h4Profile",children:"My favorite paintings:"})," ",m.jsxs("form",{id:"searchForm",children:[m.jsx("input",{id:"searchField",type:"text",placeholder:"Search for painting",onChange:u=>{i(n(u.target.value,t)),o(),l(!0)}}),m.jsx("div",{children:m.jsx("img",{id:"searchIcon",src:"search.svg",alt:""})})]})]}),s&&m.jsx(py,{favorites:t,loading:e}),r&&a&&m.jsx(py,{favorites:r,loading:e})]})}function LD({auth:t}){const[e,n]=B.useState("WORKS"),[r,i]=B.useState(!1),[s,o]=B.useState(!1),[a,l]=B.useState(!1),{products:u,searchProduct:c}=B.useContext(Io),h=f=>{console.log("Selected Menu Item:",f),n(f)},d=()=>{i(!0),o(!1)},y=()=>{a?t.signOut().then(()=>{console.log("Sign-out successful."),l(!1),n("WORKS")}).catch(f=>{console.error("Error signing out:",f.message)}):(i(!1),o(!0))},v=()=>{n("PROFILE")},_=()=>{switch(e){case"WORKS":return m.jsxs("div",{id:"gallerySection",children:[m.jsx("div",{className:"imageContainer",children:m.jsx(fy,{paintings:u,loggedin:a})}),m.jsx(St,{})]});case"BIOGRAPHY":return m.jsxs(m.Fragment,{children:[m.jsx(Sm,{}),m.jsx(St,{})]});case"PRESS":return m.jsxs(m.Fragment,{children:[m.jsx(Am,{}),m.jsx(St,{})]});case"EXHIBITIONS":return u.length>0?m.jsxs(m.Fragment,{children:[m.jsx(Rm,{})," ",m.jsx(St,{})]}):m.jsx("p",{children:"Loading..."});case"CONTACT":return m.jsxs(m.Fragment,{children:[m.jsx(Cm,{}),m.jsx(St,{})]});case"PROFILE":return m.jsxs(m.Fragment,{children:[a?m.jsx(VD,{}):m.jsx(eg,{auth:t}),m.jsx(St,{})]});default:return null}},S=m.jsx("div",{style:{height:"40px",width:"340px"}});B.useEffect(()=>{const f=t.onAuthStateChanged(g=>{p(g)});return()=>f()},[t]);const p=f=>{l(!!f);const g=document.getElementById("userStatus");f?g.textContent="You are logged in as "+f.email:g.textContent="You are not logged in."};return m.jsxs(m.Fragment,{children:[m.jsx("img",{src:"background.jpeg",id:"header-pic",alt:""}),m.jsxs("div",{className:"homeContainer",children:[r&&m.jsx(CC,{auth:t}),s&&m.jsx(eg,{auth:t}),m.jsxs("div",{className:"transparentContainer",children:[m.jsxs("div",{className:"authenticationContainer",children:[a?m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"authButtons",onClick:v,children:"My profile"}),m.jsx("button",{className:"authButtons",onClick:y,children:"Sign Out"})]}):m.jsx("button",{className:"authButtons",onClick:y,children:"Sign In"}),m.jsx("button",{className:"authButtons",onClick:d,children:"Sign Up"})]}),m.jsx("div",{id:"userStatus"}),m.jsx("h1",{className:"TitleName",children:"Todor Tamas"})]}),m.jsxs("div",{className:"ImagesContainer",children:[m.jsxs("div",{className:"menuContainer",children:[m.jsxs("ul",{children:[m.jsx("li",{onClick:()=>h("WORKS"),children:"WORKS"}),m.jsx("li",{onClick:()=>h("BIOGRAPHY"),children:"BIOGRAPHY"}),m.jsx("li",{onClick:()=>h("PRESS"),children:"PRESS"}),m.jsx("li",{onClick:()=>h("EXHIBITIONS"),children:"EXHIBITIONS"}),m.jsx("li",{onClick:()=>h("CONTACT"),children:"CONTACT"})]}),m.jsx("img",{src:"signature.png",id:"signature",alt:""}),e==="WORKS"?m.jsx(TD,{searchProduct:c}):S]}),a?_():m.jsxs(m.Fragment,{children:[e==="WORKS"&&m.jsxs("div",{id:"gallerySection",children:[m.jsx("div",{className:"imageContainer",children:m.jsx(fy,{paintings:u,loggedin:a})}),m.jsx(St,{})]}),e==="BIOGRAPHY"&&m.jsxs(m.Fragment,{children:[m.jsx(Sm,{}),m.jsx(St,{})]}),e==="PRESS"&&m.jsxs(m.Fragment,{children:[m.jsx(Am,{}),m.jsx(St,{})]}),e==="EXHIBITIONS"&&(u.length>0?m.jsxs(m.Fragment,{children:[m.jsx(Rm,{}),m.jsx(St,{})]}):m.jsx("p",{children:"Loading..."})),e==="CONTACT"&&m.jsxs(m.Fragment,{children:[m.jsx(Cm,{}),m.jsx(St,{})]})]})]})]})]})}function MD(){return m.jsx(m.Fragment,{children:m.jsx(PC,{children:m.jsx(LD,{auth:dp})})})}Sc.createRoot(document.getElementById("root")).render(m.jsx(DI.StrictMode,{children:m.jsx(MD,{})}));
