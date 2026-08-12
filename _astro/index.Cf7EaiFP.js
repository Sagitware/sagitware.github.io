import{j as A}from"./jsx-runtime.D_zvdyIk.js";import{R as Ct,r as I}from"./index.CEDmf73i.js";import{R as Xt,Q as it,S as fr}from"./index.BTbRIblB.js";import{S as Rt}from"./index.BmZSPaUU.js";import{d as X}from"./styled-components.browser.esm.Df8ch1P-.js";import"./index.uzD7Kfck.js";function lr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function dr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var ur=(function(){function t(e){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=lr(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},t})(),_="-ms-",et="-moz-",w="-webkit-",Lt="comm",bt="rule",xt="decl",mr="@import",Vt="@keyframes",pr="@layer",yr=Math.abs,nt=String.fromCharCode,hr=Object.assign;function gr(t,r){return N(t,0)^45?(((r<<2^N(t,0))<<2^N(t,1))<<2^N(t,2))<<2^N(t,3):0}function Bt(t){return t.trim()}function br(t,r){return(t=r.exec(t))?t[0]:t}function S(t,r,e){return t.replace(r,e)}function mt(t,r){return t.indexOf(r)}function N(t,r){return t.charCodeAt(r)|0}function W(t,r,e){return t.slice(r,e)}function z(t){return t.length}function vt(t){return t.length}function J(t,r){return r.push(t),t}function xr(t,r){return t.map(r).join("")}var at=1,V=1,Dt=0,M=0,j=0,B="";function ot(t,r,e,n,a,o,s){return{value:t,root:r,parent:e,type:n,props:a,children:o,line:at,column:V,length:s,return:""}}function D(t,r){return hr(ot("",null,null,"",null,null,0),t,{length:-t.length},r)}function vr(){return j}function wr(){return j=M>0?N(B,--M):0,V--,j===10&&(V=1,at--),j}function k(){return j=M<Dt?N(B,M++):0,V++,j===10&&(V=1,at++),j}function F(){return N(B,M)}function Q(){return M}function H(t,r){return W(B,t,r)}function q(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(t){return at=V=1,Dt=z(B=t),M=0,[]}function qt(t){return B="",t}function tt(t){return Bt(H(M-1,pt(t===91?t+2:t===40?t+1:t)))}function Sr(t){for(;(j=F())&&j<33;)k();return q(t)>2||q(j)>3?"":" "}function $r(t,r){for(;--r&&k()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return H(t,Q()+(r<6&&F()==32&&k()==32))}function pt(t){for(;k();)switch(j){case t:return M;case 34:case 39:t!==34&&t!==39&&pt(j);break;case 40:t===41&&pt(t);break;case 92:k();break}return M}function Cr(t,r){for(;k()&&t+j!==57;)if(t+j===84&&F()===47)break;return"/*"+H(r,M-1)+"*"+nt(t===47?t:k())}function Rr(t){for(;!q(F());)k();return H(t,M)}function Or(t){return qt(rt("",null,null,null,[""],t=Wt(t),0,[0],t))}function rt(t,r,e,n,a,o,s,l,d){for(var m=0,p=0,y=s,v=0,R=0,h=0,u=1,c=1,x=1,g=0,b="",T=a,f=o,E=n,O=b;c;)switch(h=g,g=k()){case 40:if(h!=108&&N(O,y-1)==58){mt(O+=S(tt(g),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:O+=tt(g);break;case 9:case 10:case 13:case 32:O+=Sr(h);break;case 92:O+=$r(Q()-1,7);continue;case 47:switch(F()){case 42:case 47:J(Ir(Cr(k(),Q()),r,e),d);break;default:O+="/"}break;case 123*u:l[m++]=z(O)*x;case 125*u:case 59:case 0:switch(g){case 0:case 125:c=0;case 59+p:x==-1&&(O=S(O,/\f/g,"")),R>0&&z(O)-y&&J(R>32?It(O+";",n,e,y-1):It(S(O," ","")+";",n,e,y-2),d);break;case 59:O+=";";default:if(J(E=Ot(O,r,e,m,p,a,l,b,T=[],f=[],y),o),g===123)if(p===0)rt(O,r,E,E,T,o,y,l,f);else switch(v===99&&N(O,3)===110?100:v){case 100:case 108:case 109:case 115:rt(t,E,E,n&&J(Ot(t,E,E,0,0,a,l,b,a,T=[],y),f),a,f,y,l,n?T:f);break;default:rt(O,E,E,E,[""],f,0,l,f)}}m=p=R=0,u=x=1,b=O="",y=s;break;case 58:y=1+z(O),R=h;default:if(u<1){if(g==123)--u;else if(g==125&&u++==0&&wr()==125)continue}switch(O+=nt(g),g*u){case 38:x=p>0?1:(O+="\f",-1);break;case 44:l[m++]=(z(O)-1)*x,x=1;break;case 64:F()===45&&(O+=tt(k())),v=F(),p=y=z(b=O+=Rr(Q())),g++;break;case 45:h===45&&z(O)==2&&(u=0)}}return o}function Ot(t,r,e,n,a,o,s,l,d,m,p){for(var y=a-1,v=a===0?o:[""],R=vt(v),h=0,u=0,c=0;h<n;++h)for(var x=0,g=W(t,y+1,y=yr(u=s[h])),b=t;x<R;++x)(b=Bt(u>0?v[x]+" "+g:S(g,/&\f/g,v[x])))&&(d[c++]=b);return ot(t,r,e,a===0?bt:l,d,m,p)}function Ir(t,r,e){return ot(t,r,e,Lt,nt(vr()),W(t,2,-2),0)}function It(t,r,e,n){return ot(t,r,e,xt,W(t,0,n),W(t,n+1,-1),n)}function L(t,r){for(var e="",n=vt(t),a=0;a<n;a++)e+=r(t[a],a,t,r)||"";return e}function Er(t,r,e,n){switch(t.type){case pr:if(t.children.length)break;case mr:case xt:return t.return=t.return||t.value;case Lt:return"";case Vt:return t.return=t.value+"{"+L(t.children,n)+"}";case bt:t.value=t.props.join(",")}return z(e=L(t.children,n))?t.return=t.value+"{"+e+"}":""}function Ar(t){var r=vt(t);return function(e,n,a,o){for(var s="",l=0;l<r;l++)s+=t[l](e,n,a,o)||"";return s}}function jr(t){return function(r){r.root||(r=r.return)&&t(r)}}var Pr=function(r,e,n){for(var a=0,o=0;a=o,o=F(),a===38&&o===12&&(e[n]=1),!q(o);)k();return H(r,M)},Tr=function(r,e){var n=-1,a=44;do switch(q(a)){case 0:a===38&&F()===12&&(e[n]=1),r[n]+=Pr(M-1,e,n);break;case 2:r[n]+=tt(a);break;case 4:if(a===44){r[++n]=F()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=nt(a)}while(a=k());return r},Nr=function(r,e){return qt(Tr(Wt(r),e))},Et=new WeakMap,_r=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Et.get(n))&&!a){Et.set(r,!0);for(var o=[],s=Nr(e,o),l=n.props,d=0,m=0;d<s.length;d++)for(var p=0;p<l.length;p++,m++)r.props[m]=o[d]?s[d].replace(/&\f/g,l[p]):l[p]+" "+s[d]}}},Mr=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ut(t,r){switch(gr(t,r)){case 5103:return w+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return w+t+et+t+_+t+t;case 6828:case 4268:return w+t+_+t+t;case 6165:return w+t+_+"flex-"+t+t;case 5187:return w+t+S(t,/(\w+).+(:[^]+)/,w+"box-$1$2"+_+"flex-$1$2")+t;case 5443:return w+t+_+"flex-item-"+S(t,/flex-|-self/,"")+t;case 4675:return w+t+_+"flex-line-pack"+S(t,/align-content|flex-|-self/,"")+t;case 5548:return w+t+_+S(t,"shrink","negative")+t;case 5292:return w+t+_+S(t,"basis","preferred-size")+t;case 6060:return w+"box-"+S(t,"-grow","")+w+t+_+S(t,"grow","positive")+t;case 4554:return w+S(t,/([^-])(transform)/g,"$1"+w+"$2")+t;case 6187:return S(S(S(t,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),t,"")+t;case 5495:case 3959:return S(t,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return S(S(t,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+_+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+t+t;case 4095:case 3583:case 4068:case 2532:return S(t,/(.+)-inline(.+)/,w+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(t)-1-r>6)switch(N(t,r+1)){case 109:if(N(t,r+4)!==45)break;case 102:return S(t,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+et+(N(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~mt(t,"stretch")?Ut(S(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(N(t,r+1)!==115)break;case 6444:switch(N(t,z(t)-3-(~mt(t,"!important")&&10))){case 107:return S(t,":",":"+w)+t;case 101:return S(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(N(t,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+_+"$2box$3")+t}break;case 5936:switch(N(t,r+11)){case 114:return w+t+_+S(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return w+t+_+S(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return w+t+_+S(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return w+t+_+t+t}return t}var kr=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case xt:r.return=Ut(r.value,r.length);break;case Vt:return L([D(r,{value:S(r.value,"@","@"+w)})],a);case bt:if(r.length)return xr(r.props,function(o){switch(br(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return L([D(r,{props:[S(o,/:(read-\w+)/,":"+et+"$1")]})],a);case"::placeholder":return L([D(r,{props:[S(o,/:(plac\w+)/,":"+w+"input-$1")]}),D(r,{props:[S(o,/:(plac\w+)/,":"+et+"$1")]}),D(r,{props:[S(o,/:(plac\w+)/,_+"input-$1")]})],a)}return""})}},zr=[kr],Yr=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(u){var c=u.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var a=r.stylisPlugins||zr,o={},s,l=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(u){for(var c=u.getAttribute("data-emotion").split(" "),x=1;x<c.length;x++)o[c[x]]=!0;l.push(u)});var d,m=[_r,Mr];{var p,y=[Er,jr(function(u){p.insert(u)})],v=Ar(m.concat(a,y)),R=function(c){return L(Or(c),v)};d=function(c,x,g,b){p=g,R(c?c+"{"+x.styles+"}":x.styles),b&&(h.inserted[x.name]=!0)}}var h={key:e,sheet:new ur({key:e,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:d};return h.sheet.hydrate(l),h},ct={exports:{}},$={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var At;function Fr(){if(At)return $;At=1;var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,e=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,R=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,u=t?Symbol.for("react.block"):60121,c=t?Symbol.for("react.fundamental"):60117,x=t?Symbol.for("react.responder"):60118,g=t?Symbol.for("react.scope"):60119;function b(f){if(typeof f=="object"&&f!==null){var E=f.$$typeof;switch(E){case r:switch(f=f.type,f){case d:case m:case n:case o:case a:case y:return f;default:switch(f=f&&f.$$typeof,f){case l:case p:case h:case R:case s:return f;default:return E}}case e:return E}}}function T(f){return b(f)===m}return $.AsyncMode=d,$.ConcurrentMode=m,$.ContextConsumer=l,$.ContextProvider=s,$.Element=r,$.ForwardRef=p,$.Fragment=n,$.Lazy=h,$.Memo=R,$.Portal=e,$.Profiler=o,$.StrictMode=a,$.Suspense=y,$.isAsyncMode=function(f){return T(f)||b(f)===d},$.isConcurrentMode=T,$.isContextConsumer=function(f){return b(f)===l},$.isContextProvider=function(f){return b(f)===s},$.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===r},$.isForwardRef=function(f){return b(f)===p},$.isFragment=function(f){return b(f)===n},$.isLazy=function(f){return b(f)===h},$.isMemo=function(f){return b(f)===R},$.isPortal=function(f){return b(f)===e},$.isProfiler=function(f){return b(f)===o},$.isStrictMode=function(f){return b(f)===a},$.isSuspense=function(f){return b(f)===y},$.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===m||f===o||f===a||f===y||f===v||typeof f=="object"&&f!==null&&(f.$$typeof===h||f.$$typeof===R||f.$$typeof===s||f.$$typeof===l||f.$$typeof===p||f.$$typeof===c||f.$$typeof===x||f.$$typeof===g||f.$$typeof===u)},$.typeOf=b,$}var jt;function Xr(){return jt||(jt=1,ct.exports=Fr()),ct.exports}var ft,Pt;function Lr(){if(Pt)return ft;Pt=1;var t=Xr(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[t.ForwardRef]=n,o[t.Memo]=a;function s(h){return t.isMemo(h)?a:o[h.$$typeof]||r}var l=Object.defineProperty,d=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,v=Object.prototype;function R(h,u,c){if(typeof u!="string"){if(v){var x=y(u);x&&x!==v&&R(h,x,c)}var g=d(u);m&&(g=g.concat(m(u)));for(var b=s(h),T=s(u),f=0;f<g.length;++f){var E=g[f];if(!e[E]&&!(c&&c[E])&&!(T&&T[E])&&!(b&&b[E])){var O=p(u,E);try{l(h,E,O)}catch{}}}}return h}return ft=R,ft}Lr();var Vr=!0;function Gt(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):a&&(n+=a+" ")}),n}var wt=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||Vr===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},Ht=function(r,e,n){wt(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var o=e;do r.insert(e===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function Br(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Dr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Wr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var qr=/[A-Z]|^ms/g,Ur=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Jt=function(r){return r.charCodeAt(1)===45},Tt=function(r){return r!=null&&typeof r!="boolean"},lt=Wr(function(t){return Jt(t)?t:t.replace(qr,"-$&").toLowerCase()}),Nt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(Ur,function(n,a,o){return Y={name:a,styles:o,next:Y},a})}return Dr[r]!==1&&!Jt(r)&&typeof e=="number"&&e!==0?e+"px":e};function U(t,r,e){if(e==null)return"";var n=e;if(n.__emotion_styles!==void 0)return n;switch(typeof e){case"boolean":return"";case"object":{var a=e;if(a.anim===1)return Y={name:a.name,styles:a.styles,next:Y},a.name;var o=e;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)Y={name:s.name,styles:s.styles,next:Y},s=s.next;var l=o.styles+";";return l}return Gr(t,r,e)}case"function":{if(t!==void 0){var d=Y,m=e(t);return Y=d,U(t,r,m)}break}}var p=e;if(r==null)return p;var y=r[p];return y!==void 0?y:p}function Gr(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=U(t,r,e[a])+";";else for(var o in e){var s=e[o];if(typeof s!="object"){var l=s;r!=null&&r[l]!==void 0?n+=o+"{"+r[l]+"}":Tt(l)&&(n+=lt(o)+":"+Nt(o,l)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var d=0;d<s.length;d++)Tt(s[d])&&(n+=lt(o)+":"+Nt(o,s[d])+";");else{var m=U(t,r,s);switch(o){case"animation":case"animationName":{n+=lt(o)+":"+m+";";break}default:n+=o+"{"+m+"}"}}}return n}var _t=/label:\s*([^\s;{]+)\s*(;|$)/g,Y;function St(t,r,e){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";Y=void 0;var o=t[0];if(o==null||o.raw===void 0)n=!1,a+=U(e,r,o);else{var s=o;a+=s[0]}for(var l=1;l<t.length;l++)if(a+=U(e,r,t[l]),n){var d=o;a+=d[l]}_t.lastIndex=0;for(var m="",p;(p=_t.exec(a))!==null;)m+="-"+p[1];var y=Br(a)+m;return{name:y,styles:a,next:Y}}var Hr=function(r){return r()},Jr=Ct.useInsertionEffect?Ct.useInsertionEffect:!1,Kt=Jr||Hr,Zt=I.createContext(typeof HTMLElement<"u"?Yr({key:"css"}):null);Zt.Provider;var Qt=function(r){return I.forwardRef(function(e,n){var a=I.useContext(Zt);return r(e,a,n)})},tr=I.createContext({}),st={}.hasOwnProperty,yt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",rr=function(r,e){var n={};for(var a in e)st.call(e,a)&&(n[a]=e[a]);return n[yt]=r,n},Kr=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return wt(e,n,a),Kt(function(){return Ht(e,n,a)}),null},Zr=Qt(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[yt],o=[n],s="";typeof t.className=="string"?s=Gt(r.registered,o,t.className):t.className!=null&&(s=t.className+" ");var l=St(o,void 0,I.useContext(tr));s+=r.key+"-"+l.name;var d={};for(var m in t)st.call(t,m)&&m!=="css"&&m!==yt&&(d[m]=t[m]);return d.className=s,e&&(d.ref=e),I.createElement(I.Fragment,null,I.createElement(Kr,{cache:r,serialized:l,isStringTag:typeof a=="string"}),I.createElement(a,d))}),er=Zr,Qr=A.Fragment,P=function(r,e,n){return st.call(e,"css")?A.jsx(er,rr(r,e),n):A.jsx(r,e,n)},Mt=function(r,e){var n=arguments;if(e==null||!st.call(e,"css"))return I.createElement.apply(void 0,n);var a=n.length,o=new Array(a);o[0]=er,o[1]=rr(r,e);for(var s=2;s<a;s++)o[s]=n[s];return I.createElement.apply(null,o)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(Mt||(Mt={}));function nr(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return St(r)}function i(){var t=nr.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var te=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var o=r[n];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=t(o);else{s="";for(var l in o)o[l]&&l&&(s&&(s+=" "),s+=l)}break}default:s=o}s&&(a&&(a+=" "),a+=s)}}return a};function re(t,r,e){var n=[],a=Gt(t,n,e);return n.length<2?e:a+r(n)}var ee=function(r){var e=r.cache,n=r.serializedArr;return Kt(function(){for(var a=0;a<n.length;a++)Ht(e,n[a],!1)}),null},dt=Qt(function(t,r){var e=[],n=function(){for(var d=arguments.length,m=new Array(d),p=0;p<d;p++)m[p]=arguments[p];var y=St(m,r.registered);return e.push(y),wt(r,y,!1),r.key+"-"+y.name},a=function(){for(var d=arguments.length,m=new Array(d),p=0;p<d;p++)m[p]=arguments[p];return re(r.registered,n,te(m))},o={css:n,cx:a,theme:I.useContext(tr)},s=t.children(o);return I.createElement(I.Fragment,null,I.createElement(ee,{cache:r,serializedArr:e}),s)}),ne=Object.defineProperty,ae=(t,r,e)=>r in t?ne(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,K=(t,r,e)=>ae(t,typeof r!="symbol"?r+"":r,e),ht=new Map,Z=new WeakMap,kt=0,oe=void 0;function se(t){return t?(Z.has(t)||(kt+=1,Z.set(t,kt.toString())),Z.get(t)):"0"}function ie(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?se(t.root):t[r]}`).toString()}function ce(t){const r=ie(t);let e=ht.get(r);if(!e){const n=new Map;let a;const o=new IntersectionObserver(s=>{s.forEach(l=>{var d;const m=l.isIntersecting&&a.some(p=>l.intersectionRatio>=p);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=m),(d=n.get(l.target))==null||d.forEach(p=>{p(m,l)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:o,elements:n},ht.set(r,e)}return e}function ar(t,r,e={},n=oe){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const d=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:a,observer:o,elements:s}=ce(e),l=s.get(t)||[];return s.has(t)||s.set(t,l),l.push(r),o.observe(t),function(){l.splice(l.indexOf(r),1),l.length===0&&(s.delete(t),o.unobserve(t)),s.size===0&&(o.disconnect(),ht.delete(a))}}function fe(t){return typeof t.children!="function"}var zt=class extends I.Component{constructor(t){super(t),K(this,"node",null),K(this,"_unobserveCb",null),K(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),K(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),fe(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=ar(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:R,entry:h}=this.state;return t({inView:R,entry:h,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:d,delay:m,initialInView:p,fallbackInView:y,...v}=this.props;return I.createElement(r||"div",{ref:this.handleNode,...v},t)}};function or({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:d,onChange:m}={}){var p;const[y,v]=I.useState(null),R=I.useRef(m),[h,u]=I.useState({inView:!!l,entry:void 0});R.current=m,I.useEffect(()=>{if(s||!y)return;let b;return b=ar(y,(T,f)=>{u({inView:T,entry:f}),R.current&&R.current(T,f),f.isIntersecting&&o&&b&&(b(),b=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},d),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,y,a,n,o,s,e,d,r]);const c=(p=h.entry)==null?void 0:p.target,x=I.useRef(void 0);!y&&c&&!o&&!s&&x.current!==c&&(x.current=c,u({inView:!!l,entry:void 0}));const g=[v,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var ut={exports:{}},C={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt;function le(){if(Yt)return C;Yt=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),h;h=Symbol.for("react.module.reference");function u(c){if(typeof c=="object"&&c!==null){var x=c.$$typeof;switch(x){case t:switch(c=c.type,c){case e:case a:case n:case m:case p:return c;default:switch(c=c&&c.$$typeof,c){case l:case s:case d:case v:case y:case o:return c;default:return x}}case r:return x}}}return C.ContextConsumer=s,C.ContextProvider=o,C.Element=t,C.ForwardRef=d,C.Fragment=e,C.Lazy=v,C.Memo=y,C.Portal=r,C.Profiler=a,C.StrictMode=n,C.Suspense=m,C.SuspenseList=p,C.isAsyncMode=function(){return!1},C.isConcurrentMode=function(){return!1},C.isContextConsumer=function(c){return u(c)===s},C.isContextProvider=function(c){return u(c)===o},C.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},C.isForwardRef=function(c){return u(c)===d},C.isFragment=function(c){return u(c)===e},C.isLazy=function(c){return u(c)===v},C.isMemo=function(c){return u(c)===y},C.isPortal=function(c){return u(c)===r},C.isProfiler=function(c){return u(c)===a},C.isStrictMode=function(c){return u(c)===n},C.isSuspense=function(c){return u(c)===m},C.isSuspenseList=function(c){return u(c)===p},C.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===e||c===a||c===n||c===m||c===p||c===R||typeof c=="object"&&c!==null&&(c.$$typeof===v||c.$$typeof===y||c.$$typeof===o||c.$$typeof===s||c.$$typeof===d||c.$$typeof===h||c.getModuleId!==void 0)},C.typeOf=u,C}var Ft;function de(){return Ft||(Ft=1,ut.exports=le()),ut.exports}var ue=de();i`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;i`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;i`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;i`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;i`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;i`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const me=i`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,pe=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ye=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,he=i`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ge=i`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$t=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,be=i`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xe=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ve=i`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,we=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Se=i`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$e=i`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ce=i`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Re({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=$t,iterationCount:a=1}){return nr`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Oe(t){return t==null}function Ie(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function sr(t,r){return e=>e?t():r()}function G(t){return sr(t,()=>null)}function gt(t){return G(()=>({opacity:0}))(t)}const ir=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:s=$t,triggerOnce:l=!1,className:d,style:m,childClassName:p,childStyle:y,children:v,onVisibilityChange:R}=t,h=I.useMemo(()=>Re({keyframes:s,duration:a}),[a,s]);return Oe(v)?null:Ie(v)?P(Ae,{...t,animationStyles:h,children:String(v)}):ue.isFragment(v)?P(cr,{...t,animationStyles:h}):P(Qr,{children:I.Children.map(v,(u,c)=>{if(!I.isValidElement(u))return null;const x=n+(r?c*a*e:0);switch(u.type){case"ol":case"ul":return P(dt,{children:({cx:g})=>P(u.type,{...u.props,className:g(d,u.props.className),style:Object.assign({},m,u.props.style),children:P(ir,{...t,children:u.props.children})})});case"li":return P(zt,{threshold:o,triggerOnce:l,onChange:R,children:({inView:g,ref:b})=>P(dt,{children:({cx:T})=>P(u.type,{...u.props,ref:b,className:T(p,u.props.className),css:G(()=>h)(g),style:Object.assign({},y,u.props.style,gt(!g),{animationDelay:x+"ms"})})})});default:return P(zt,{threshold:o,triggerOnce:l,onChange:R,children:({inView:g,ref:b})=>P("div",{ref:b,className:d,css:G(()=>h)(g),style:Object.assign({},m,gt(!g),{animationDelay:x+"ms"}),children:P(dt,{children:({cx:T})=>P(u.type,{...u.props,className:T(p,u.props.className),style:Object.assign({},y,u.props.style)})})})})}})})},Ee={display:"inline-block",whiteSpace:"pre"},Ae=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:s=0,triggerOnce:l=!1,className:d,style:m,children:p,onVisibilityChange:y}=t,{ref:v,inView:R}=or({triggerOnce:l,threshold:s,onChange:y});return sr(()=>P("div",{ref:v,className:d,style:Object.assign({},m,Ee),children:p.split("").map((h,u)=>P("span",{css:G(()=>r)(R),style:{animationDelay:a+u*o*n+"ms"},children:h},u))}),()=>P(cr,{...t,children:p}))(e)},cr=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:o,children:s,onVisibilityChange:l}=t,{ref:d,inView:m}=or({triggerOnce:n,threshold:e,onChange:l});return P("div",{ref:d,className:a,css:G(()=>r)(m),style:Object.assign({},o,gt(!m)),children:s})};i`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;i`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;i`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;i`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;i`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const je=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Pe=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Te=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ne=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,_e=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Me=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ke=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ze=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ye=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Fe=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Xe=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Le=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ve=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Be(t,r,e){switch(e){case"bottom-left":return r?Pe:pe;case"bottom-right":return r?Te:ye;case"down":return t?r?_e:ge:r?Ne:he;case"left":return t?r?ke:be:r?Me:$t;case"right":return t?r?Ye:ve:r?ze:xe;case"top-left":return r?Fe:we;case"top-right":return r?Xe:Se;case"up":return t?r?Ve:Ce:r?Le:$e;default:return r?je:me}}const De=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,o=I.useMemo(()=>Be(r,n,e),[r,e,n]);return P(ir,{keyframes:o,...a})};i`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;i`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;i`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;i`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;i`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;i`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const We=X("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,qe=X("p")`
  margin: 1.5rem 0 2rem 0;
`,Ue=X(Xt)`
  flex-direction: ${({direction:t})=>t==="left"?"row":"row-reverse"};
`,Ge=X("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,He=X("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,Je=X("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,Ke=X("p")`
  font-size: 13px;
`,Ze=X("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,sn=({icon:t,title:r,content:e,section:n,button:a,id:o,direction:s})=>{const l=d=>{document.getElementById(d).scrollIntoView({behavior:"smooth"})};return A.jsx(We,{children:A.jsx(De,{direction:s,triggerOnce:!0,children:A.jsxs(Ue,{justify:"space-between",align:"middle",id:o,direction:s,children:[A.jsx(it,{lg:11,md:11,sm:12,xs:24,children:A.jsx(Rt,{src:t,width:"100%",height:"100%"})}),A.jsx(it,{lg:11,md:11,sm:11,xs:24,children:A.jsxs(Ge,{children:[A.jsx("h6",{children:r}),A.jsx(qe,{children:e}),s==="right"?A.jsx(Ze,{children:typeof a=="object"&&a.map((d,m)=>A.jsx(fr,{color:d.color,onClick:()=>l("about"),children:d.title},m))}):A.jsx(He,{children:A.jsx(Xt,{justify:"space-between",children:typeof n=="object"&&n.map((d,m)=>A.jsxs(it,{span:11,children:[A.jsx(Rt,{src:d.icon,width:"60px",height:"60px"}),A.jsx(Je,{children:d.title}),A.jsx(Ke,{children:d.content})]},m))})})]})})]})})})};export{sn as default};
