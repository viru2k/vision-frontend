!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";
/** @license
   * jsPDF - PDF Document creation from JavaScript
   * Version 1.5.3 Built on 2018-12-27T14:11:42.696Z
   *                      CommitID d93d28db14
   *
   * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
   *               2010 Aaron Spike, https://github.com/acspike
   *               2012 Willow Systems Corporation, willow-systems.com
   *               2012 Pablo Hess, https://github.com/pablohess
   *               2012 Florian Jenett, https://github.com/fjenett
   *               2013 Warren Weckesser, https://github.com/warrenweckesser
   *               2013 Youssef Beddad, https://github.com/lifof
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2013 Stefan Slonevskiy, https://github.com/stefslon
   *               2013 Jeremy Morel, https://github.com/jmorel
   *               2013 Christoph Hartmann, https://github.com/chris-rock
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Makes, https://github.com/dollaruw
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Steven Spungin, https://github.com/Flamenco
   *               2014 Kenneth Glassey, https://github.com/Gavvers
   *
   * Licensed under the MIT License
   *
   * Contributor(s):
   *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
   *    kim3er, mfo, alnorth, Flamenco
   */function se(t){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){if("object"!==se(t.console)){t.console={};for(var e,n,r=t.console,i=function(){},o=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");e=o.pop();)r[e]||(r[e]={});for(;n=a.pop();)r[n]||(r[n]=i)}var s,l,h,u,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";void 0===t.btoa&&(t.btoa=function(t){var e,n,r,i,o,a=0,s=0,l="",h=[];if(!t)return t;for(;e=(o=t.charCodeAt(a++)<<16|t.charCodeAt(a++)<<8|t.charCodeAt(a++))>>18&63,n=o>>12&63,r=o>>6&63,i=63&o,h[s++]=c.charAt(e)+c.charAt(n)+c.charAt(r)+c.charAt(i),a<t.length;);l=h.join("");var u=t.length%3;return(u?l.slice(0,u-3):l)+"===".slice(u||3)}),void 0===t.atob&&(t.atob=function(t){var e,n,r,i,o,a,s=0,l=0,h=[];if(!t)return t;for(t+="";e=(a=c.indexOf(t.charAt(s++))<<18|c.indexOf(t.charAt(s++))<<12|(i=c.indexOf(t.charAt(s++)))<<6|(o=c.indexOf(t.charAt(s++))))>>16&255,n=a>>8&255,r=255&a,h[l++]=64==i?String.fromCharCode(e):64==o?String.fromCharCode(e,n):String.fromCharCode(e,n,r),s<t.length;);return h.join("")}),Array.prototype.map||(Array.prototype.map=function(t){if(null==this||"function"!=typeof t)throw new TypeError;for(var e=Object(this),n=e.length>>>0,r=new Array(n),i=1<arguments.length?arguments[1]:void 0,o=0;o<n;o++)o in e&&(r[o]=t.call(i,e[o],o,e));return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){if(null==this||"function"!=typeof t)throw new TypeError;for(var n=Object(this),r=n.length>>>0,i=0;i<r;i++)i in n&&t.call(e,n[i],i,n)}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var r=arguments[1],i=0;i<n;){var o=e[i];if(t.call(r,o,i,e))return o;i++}},configurable:!0,writable:!0}),Object.keys||(Object.keys=(s=Object.prototype.hasOwnProperty,l=!{toString:null}.propertyIsEnumerable("toString"),u=(h=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("object"!==se(t)&&("function"!=typeof t||null===t))throw new TypeError;var e,n,r=[];for(e in t)s.call(t,e)&&r.push(e);if(l)for(n=0;n<u;n++)s.call(t,h[n])&&r.push(h[n]);return r})),"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var n=arguments[e];if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}),String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")}),Number.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")());var t,e,n,_,l,F,P,p,d,k,a,o,s,h,u,c,r,i,f,g,m,y,v,w,b,x,I,C,B,N,L,A,S,j,E,M,O,q,T,R,D,U,z,H,W,V,G,Y,J,X,K,Z,Q,$,tt,et,nt,rt,it,ot,at,st,lt=function(ie){function oe(o){if("object"!==se(o))throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var a={};this.subscribe=function(t,e,n){if(n=n||!1,"string"!=typeof t||"function"!=typeof e||"boolean"!=typeof n)throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");a.hasOwnProperty(t)||(a[t]={});var r=Math.random().toString(35);return a[t][r]=[e,!!n],r},this.unsubscribe=function(t){for(var e in a)if(a[e][t])return delete a[e][t],0===Object.keys(a[e]).length&&delete a[e],!0;return!1},this.publish=function(t){if(a.hasOwnProperty(t)){var e=Array.prototype.slice.call(arguments,1),n=[];for(var r in a[t]){var i=a[t][r];try{i[0].apply(o,e)}catch(t){ie.console&&console.error("jsPDF PubSub Error",t.message,t)}i[1]&&n.push(r)}n.length&&n.forEach(this.unsubscribe)}},this.getTopics=function(){return a}}function ae(t,e,i,n){var r={},o=[],a=1;"object"===se(t)&&(t=(r=t).orientation,e=r.unit||e,i=r.format||i,n=r.compress||r.compressPdf||n,o=r.filters||(!0===n?["FlateEncode"]:o),a="number"==typeof r.userUnit?Math.abs(r.userUnit):1),e=e||"mm",t=(""+(t||"P")).toLowerCase();var s=r.putOnlyUsedFonts||!0,K={},l={internal:{},__private__:{}};l.__private__.PubSub=oe;var h="1.3",u=l.__private__.getPdfVersion=function(){return h},c=(l.__private__.setPdfVersion=function(t){h=t},{a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]}),f=(l.__private__.getPageFormats=function(){return c},l.__private__.getPageFormat=function(t){return c[t]});"string"==typeof i&&(i=f(i)),i=i||f("a4");var p,Z=l.f2=l.__private__.f2=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return t.toFixed(2)},Q=l.__private__.f3=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f3");return t.toFixed(3)},d="00000000000000000000000000000000",g=l.__private__.getFileId=function(){return d},m=l.__private__.setFileId=function(t){return t=t||"12345678901234567890123456789012".split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),d=t};l.setFileId=function(t){return m(t),this},l.getFileId=function(){return g()};var y=l.__private__.convertDateToPDFDate=function(t){var e=t.getTimezoneOffset(),n=e<0?"+":"-",r=Math.floor(Math.abs(e/60)),i=Math.abs(e%60),o=[n,P(r),"'",P(i),"'"].join("");return["D:",t.getFullYear(),P(t.getMonth()+1),P(t.getDate()),P(t.getHours()),P(t.getMinutes()),P(t.getSeconds()),o].join("")},v=l.__private__.convertPDFDateToDate=function(t){var e=parseInt(t.substr(2,4),10),n=parseInt(t.substr(6,2),10)-1,r=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),o=parseInt(t.substr(12,2),10),a=parseInt(t.substr(14,2),10);parseInt(t.substr(16,2),10),parseInt(t.substr(20,2),10);return new Date(e,n,r,i,o,a,0)},w=l.__private__.setCreationDate=function(t){var e;if(void 0===t&&(t=new Date),"object"===se(t)&&"[object Date]"===Object.prototype.toString.call(t))e=y(t);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t))throw new Error("Invalid argument passed to jsPDF.setCreationDate");e=t}return p=e},b=l.__private__.getCreationDate=function(t){var e=p;return"jsDate"===t&&(e=v(p)),e};l.setCreationDate=function(t){return w(t),this},l.getCreationDate=function(t){return b(t)};var x,N,L,A,S,$,_,F,P=l.__private__.padd2=function(t){return("0"+parseInt(t)).slice(-2)},k=!1,I=[],C=[],B=0,tt=(l.__private__.setCustomOutputDestination=function(t){N=t},l.__private__.resetCustomOutputDestination=function(t){N=void 0},l.__private__.out=function(t){var e;return t="string"==typeof t?t:t.toString(),(e=void 0===N?k?I[x]:C:N).push(t),k||(B+=t.length+1),e}),j=l.__private__.write=function(t){return tt(1===arguments.length?t.toString():Array.prototype.join.call(arguments," "))},E=l.__private__.getArrayBuffer=function(t){for(var e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},M=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]],et=(l.__private__.getStandardFonts=function(t){return M},r.fontSize||16),O=(l.__private__.setFontSize=l.setFontSize=function(t){return et=t,this},l.__private__.getFontSize=l.getFontSize=function(){return et}),nt=r.R2L||!1,q=(l.__private__.setR2L=l.setR2L=function(t){return nt=t,this},l.__private__.getR2L=l.getR2L=function(t){return nt},l.__private__.setZoomMode=function(t){var e=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^\d*\.?\d*\%$/.test(t))L=t;else if(isNaN(t)){if(-1===e.indexOf(t))throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+t+'" is not recognized.');L=t}else L=parseInt(t,10)}),T=(l.__private__.getZoomMode=function(){return L},l.__private__.setPageMode=function(t){if(-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(t))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+t+'" is not recognized.');A=t}),R=(l.__private__.getPageMode=function(){return A},l.__private__.setLayoutMode=function(t){if(-1==[void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(t))throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+t+'" is not recognized.');S=t}),D=(l.__private__.getLayoutMode=function(){return S},l.__private__.setDisplayMode=l.setDisplayMode=function(t,e,n){return q(t),R(e),T(n),this},{title:"",subject:"",author:"",keywords:"",creator:""}),U=(l.__private__.getDocumentProperty=function(t){if(-1===Object.keys(D).indexOf(t))throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return D[t]},l.__private__.getDocumentProperties=function(t){return D},l.__private__.setDocumentProperties=l.setProperties=l.setDocumentProperties=function(t){for(var e in D)D.hasOwnProperty(e)&&t[e]&&(D[e]=t[e]);return this},l.__private__.setDocumentProperty=function(t,e){if(-1===Object.keys(D).indexOf(t))throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return D[t]=e},0),z=[],rt={},H={},W=0,V=[],G=[],it=new oe(l),Y=r.hotfixes||[],J=l.__private__.newObject=function(){var t=X();return ot(t,!0),t},X=l.__private__.newObjectDeferred=function(){return z[++U]=function(){return B},U},ot=function(t,e){return e="boolean"==typeof e&&e,z[t]=B,e&&tt(t+" 0 obj"),t},at=l.__private__.newAdditionalObject=function(){var t={objId:X(),content:""};return G.push(t),t},st=X(),lt=X(),ht=l.__private__.decodeColorString=function(t){var e=t.split(" ");if(2===e.length&&("g"===e[1]||"G"===e[1])){var n=parseFloat(e[0]);e=[n,n,n,"r"]}for(var r="#",i=0;i<3;i++)r+=("0"+Math.floor(255*parseFloat(e[i])).toString(16)).slice(-2);return r},ut=l.__private__.encodeColorString=function(t){var e;"string"==typeof t&&(t={ch1:t});var n=t.ch1,r=t.ch2,i=t.ch3,o=t.ch4,a=(t.precision,"draw"===t.pdfColorType?["G","RG","K"]:["g","rg","k"]);if("string"==typeof n&&"#"!==n.charAt(0)){var s=new RGBColor(n);if(s.ok)n=s.toHex();else if(!/^\d*\.?\d*$/.test(n))throw new Error('Invalid color "'+n+'" passed to jsPDF.encodeColorString.')}if("string"==typeof n&&/^#[0-9A-Fa-f]{3}$/.test(n)&&(n="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),"string"==typeof n&&/^#[0-9A-Fa-f]{6}$/.test(n)){var l=parseInt(n.substr(1),16);n=l>>16&255,r=l>>8&255,i=255&l}if(void 0===r||void 0===o&&n===r&&r===i)if("string"==typeof n)e=n+" "+a[0];else switch(t.precision){case 2:e=Z(n/255)+" "+a[0];break;case 3:default:e=Q(n/255)+" "+a[0]}else if(void 0===o||"object"===se(o)){if(o&&!isNaN(o.a)&&0===o.a)return e=["1.000","1.000","1.000",a[1]].join(" ");if("string"==typeof n)e=[n,r,i,a[1]].join(" ");else switch(t.precision){case 2:e=[Z(n/255),Z(r/255),Z(i/255),a[1]].join(" ");break;default:case 3:e=[Q(n/255),Q(r/255),Q(i/255),a[1]].join(" ")}}else if("string"==typeof n)e=[n,r,i,o,a[2]].join(" ");else switch(t.precision){case 2:e=[Z(n/255),Z(r/255),Z(i/255),Z(o/255),a[2]].join(" ");break;case 3:default:e=[Q(n/255),Q(r/255),Q(i/255),Q(o/255),a[2]].join(" ")}return e},ct=l.__private__.getFilters=function(){return o},ft=l.__private__.putStream=function(t){var e=(t=t||{}).data||"",n=t.filters||ct(),r=t.alreadyAppliedFilters||[],i=t.addLength1||!1,o=e.length,a={};!0===n&&(n=["FlateEncode"]);var s=t.additionalKeyValues||[],l=(a=void 0!==ae.API.processDataByFilters?ae.API.processDataByFilters(e,n):{data:e,reverseChain:[]}).reverseChain+(Array.isArray(r)?r.join(" "):r.toString());0!==a.data.length&&(s.push({key:"Length",value:a.data.length}),!0===i&&s.push({key:"Length1",value:o})),0!=l.length&&(l.split("/").length-1==1?s.push({key:"Filter",value:l}):s.push({key:"Filter",value:"["+l+"]"})),tt("<<");for(var h=0;h<s.length;h++)tt("/"+s[h].key+" "+s[h].value);tt(">>"),0!==a.data.length&&(tt("stream"),tt(a.data),tt("endstream"))},pt=l.__private__.putPage=function(t){t.mediaBox;var e=t.number,n=t.data,r=t.objId,i=t.contentsObjId;ot(r,!0);V[x].mediaBox.topRightX,V[x].mediaBox.bottomLeftX,V[x].mediaBox.topRightY,V[x].mediaBox.bottomLeftY;tt("<</Type /Page"),tt("/Parent "+t.rootDictionaryObjId+" 0 R"),tt("/Resources "+t.resourceDictionaryObjId+" 0 R"),tt("/MediaBox ["+parseFloat(Z(t.mediaBox.bottomLeftX))+" "+parseFloat(Z(t.mediaBox.bottomLeftY))+" "+Z(t.mediaBox.topRightX)+" "+Z(t.mediaBox.topRightY)+"]"),null!==t.cropBox&&tt("/CropBox ["+Z(t.cropBox.bottomLeftX)+" "+Z(t.cropBox.bottomLeftY)+" "+Z(t.cropBox.topRightX)+" "+Z(t.cropBox.topRightY)+"]"),null!==t.bleedBox&&tt("/BleedBox ["+Z(t.bleedBox.bottomLeftX)+" "+Z(t.bleedBox.bottomLeftY)+" "+Z(t.bleedBox.topRightX)+" "+Z(t.bleedBox.topRightY)+"]"),null!==t.trimBox&&tt("/TrimBox ["+Z(t.trimBox.bottomLeftX)+" "+Z(t.trimBox.bottomLeftY)+" "+Z(t.trimBox.topRightX)+" "+Z(t.trimBox.topRightY)+"]"),null!==t.artBox&&tt("/ArtBox ["+Z(t.artBox.bottomLeftX)+" "+Z(t.artBox.bottomLeftY)+" "+Z(t.artBox.topRightX)+" "+Z(t.artBox.topRightY)+"]"),"number"==typeof t.userUnit&&1!==t.userUnit&&tt("/UserUnit "+t.userUnit),it.publish("putPage",{objId:r,pageContext:V[e],pageNumber:e,page:n}),tt("/Contents "+i+" 0 R"),tt(">>"),tt("endobj");var o=n.join("\n");return ot(i,!0),ft({data:o,filters:ct()}),tt("endobj"),r},dt=l.__private__.putPages=function(){var t,e,n=[];for(t=1;t<=W;t++)V[t].objId=X(),V[t].contentsObjId=X();for(t=1;t<=W;t++)n.push(pt({number:t,data:I[t],objId:V[t].objId,contentsObjId:V[t].contentsObjId,mediaBox:V[t].mediaBox,cropBox:V[t].cropBox,bleedBox:V[t].bleedBox,trimBox:V[t].trimBox,artBox:V[t].artBox,userUnit:V[t].userUnit,rootDictionaryObjId:st,resourceDictionaryObjId:lt}));ot(st,!0),tt("<</Type /Pages");var r="/Kids [";for(e=0;e<W;e++)r+=n[e]+" 0 R ";tt(r+"]"),tt("/Count "+W),tt(">>"),tt("endobj"),it.publish("postPutPages")},gt=function(){!function(){for(var t in rt)rt.hasOwnProperty(t)&&(!1===s||!0===s&&K.hasOwnProperty(t))&&(e=rt[t],it.publish("putFont",{font:e,out:tt,newObject:J,putStream:ft}),!0!==e.isAlreadyPutted&&(e.objectNumber=J(),tt("<<"),tt("/Type /Font"),tt("/BaseFont /"+e.postScriptName),tt("/Subtype /Type1"),"string"==typeof e.encoding&&tt("/Encoding /"+e.encoding),tt("/FirstChar 32"),tt("/LastChar 255"),tt(">>"),tt("endobj")));var e}(),it.publish("putResources"),ot(lt,!0),tt("<<"),function(){for(var t in tt("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),tt("/Font <<"),rt)rt.hasOwnProperty(t)&&(!1===s||!0===s&&K.hasOwnProperty(t))&&tt("/"+t+" "+rt[t].objectNumber+" 0 R");tt(">>"),tt("/XObject <<"),it.publish("putXobjectDict"),tt(">>")}(),tt(">>"),tt("endobj"),it.publish("postPutResources")},mt=function(t,e,n){H.hasOwnProperty(e)||(H[e]={}),H[e][n]=t},yt=function(t,e,n,r,i){i=i||!1;var o="F"+(Object.keys(rt).length+1).toString(10),a={id:o,postScriptName:t,fontName:e,fontStyle:n,encoding:r,isStandardFont:i,metadata:{}};return it.publish("addFont",{font:a,instance:this}),void 0!==o&&(rt[o]=a,mt(o,e,n)),o},vt=l.__private__.pdfEscape=l.pdfEscape=function(t,e){return function(t,e){var n,r,i,o,a,s,l,h,u;if(i=(e=e||{}).sourceEncoding||"Unicode",a=e.outputEncoding,(e.autoencode||a)&&rt[$].metadata&&rt[$].metadata[i]&&rt[$].metadata[i].encoding&&(o=rt[$].metadata[i].encoding,!a&&rt[$].encoding&&(a=rt[$].encoding),!a&&o.codePages&&(a=o.codePages[0]),"string"==typeof a&&(a=o[a]),a)){for(l=!1,s=[],n=0,r=t.length;n<r;n++)(h=a[t.charCodeAt(n)])?s.push(String.fromCharCode(h)):s.push(t[n]),s[n].charCodeAt(0)>>8&&(l=!0);t=s.join("")}for(n=t.length;void 0===l&&0!==n;)t.charCodeAt(n-1)>>8&&(l=!0),n--;if(!l)return t;for(s=e.noBOM?[]:[254,255],n=0,r=t.length;n<r;n++){if((u=(h=t.charCodeAt(n))>>8)>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(u),s.push(h-(u<<8))}return String.fromCharCode.apply(void 0,s)}(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},wt=l.__private__.beginPage=function(t,e){var n,r="string"==typeof e&&e.toLowerCase();if("string"==typeof t&&(n=f(t.toLowerCase()))&&(t=n[0],e=n[1]),Array.isArray(t)&&(e=t[1],t=t[0]),(isNaN(t)||isNaN(e))&&(t=i[0],e=i[1]),r){switch(r.substr(0,1)){case"l":t<e&&(r="s");break;case"p":e<t&&(r="s")}"s"===r&&(n=t,t=e,e=n)}(14400<t||14400<e)&&(console.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),t=Math.min(14400,t),e=Math.min(14400,e)),i=[t,e],k=!0,I[++W]=[],V[W]={objId:0,contentsObjId:0,userUnit:Number(a),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(t),topRightY:Number(e)}},xt(W)},bt=function(){wt.apply(this,arguments),Dt(Rt),tt(Jt),0!==te&&tt(te+" J"),0!==ne&&tt(ne+" j"),it.publish("addPage",{pageNumber:W})},xt=function(t){0<t&&t<=W&&(x=t)},Nt=l.__private__.getNumberOfPages=l.getNumberOfPages=function(){return I.length-1},Lt=function(t,e,n){var r,i=void 0;return n=n||{},t=void 0!==t?t:rt[$].fontName,e=void 0!==e?e:rt[$].fontStyle,r=t.toLowerCase(),void 0!==H[r]&&void 0!==H[r][e]?i=H[r][e]:void 0!==H[t]&&void 0!==H[t][e]?i=H[t][e]:!1===n.disableWarning&&console.warn("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts."),i||n.noFallback||null==(i=H.times[e])&&(i=H.times.normal),i},At=l.__private__.putInfo=function(){for(var t in J(),tt("<<"),tt("/Producer (jsPDF "+ae.version+")"),D)D.hasOwnProperty(t)&&D[t]&&tt("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+vt(D[t])+")");tt("/CreationDate ("+p+")"),tt(">>"),tt("endobj")},St=l.__private__.putCatalog=function(t){var e=(t=t||{}).rootDictionaryObjId||st;switch(J(),tt("<<"),tt("/Type /Catalog"),tt("/Pages "+e+" 0 R"),L||(L="fullwidth"),L){case"fullwidth":tt("/OpenAction [3 0 R /FitH null]");break;case"fullheight":tt("/OpenAction [3 0 R /FitV null]");break;case"fullpage":tt("/OpenAction [3 0 R /Fit]");break;case"original":tt("/OpenAction [3 0 R /XYZ null null 1]");break;default:var n=""+L;"%"===n.substr(n.length-1)&&(L=parseInt(L)/100),"number"==typeof L&&tt("/OpenAction [3 0 R /XYZ null null "+Z(L)+"]")}switch(S||(S="continuous"),S){case"continuous":tt("/PageLayout /OneColumn");break;case"single":tt("/PageLayout /SinglePage");break;case"two":case"twoleft":tt("/PageLayout /TwoColumnLeft");break;case"tworight":tt("/PageLayout /TwoColumnRight")}A&&tt("/PageMode /"+A),it.publish("putCatalog"),tt(">>"),tt("endobj")},_t=l.__private__.putTrailer=function(){tt("trailer"),tt("<<"),tt("/Size "+(U+1)),tt("/Root "+U+" 0 R"),tt("/Info "+(U-1)+" 0 R"),tt("/ID [ <"+d+"> <"+d+"> ]"),tt(">>")},Ft=l.__private__.putHeader=function(){tt("%PDF-"+h),tt("%ºß¬à")},Pt=l.__private__.putXRef=function(){var t=1,e="0000000000";for(tt("xref"),tt("0 "+(U+1)),tt("0000000000 65535 f "),t=1;t<=U;t++){"function"==typeof z[t]?tt((e+z[t]()).slice(-10)+" 00000 n "):void 0!==z[t]?tt((e+z[t]).slice(-10)+" 00000 n "):tt("0000000000 00000 n ")}},kt=l.__private__.buildDocument=function(){k=!1,B=U=0,C=[],z=[],G=[],st=X(),lt=X(),it.publish("buildDocument"),Ft(),dt(),function(){it.publish("putAdditionalObjects");for(var t=0;t<G.length;t++){var e=G[t];ot(e.objId,!0),tt(e.content),tt("endobj")}it.publish("postPutAdditionalObjects")}(),gt(),At(),St();var t=B;return Pt(),_t(),tt("startxref"),tt(""+t),tt("%%EOF"),k=!0,C.join("\n")},It=l.__private__.getBlob=function(t){return new Blob([E(t)],{type:"application/pdf"})},Ct=l.output=l.__private__.output=((F=function(t,e){e=e||{};var n=kt();switch("string"==typeof e?e={filename:e}:e.filename=e.filename||"generated.pdf",t){case void 0:return n;case"save":l.save(e.filename);break;case"arraybuffer":return E(n);case"blob":return It(n);case"bloburi":case"bloburl":if(void 0!==ie.URL&&"function"==typeof ie.URL.createObjectURL)return ie.URL&&ie.URL.createObjectURL(It(n))||void 0;console.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":return"data:application/pdf;filename="+e.filename+";base64,"+btoa(n);case"dataurlnewwindow":var r='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring")+'"></iframe></body></html>',i=ie.open();if(null!==i&&i.document.write(r),i||"undefined"==typeof safari)return i;case"datauri":case"dataurl":return ie.document.location.href="data:application/pdf;filename="+e.filename+";base64,"+btoa(n);default:return null}}).foo=function(){try{return F.apply(this,arguments)}catch(t){var e=t.stack||"";~e.indexOf(" at ")&&(e=e.split(" at ")[1]);var n="Error in function "+e.split("\n")[0].split("<")[0]+": "+t.message;if(!ie.console)throw new Error(n);ie.console.error(n,t),ie.alert&&alert(n)}},(F.foo.bar=F).foo),Bt=function(t){return!0===Array.isArray(Y)&&-1<Y.indexOf(t)};switch(e){case"pt":_=1;break;case"mm":_=72/25.4;break;case"cm":_=72/2.54;break;case"in":_=72;break;case"px":_=1==Bt("px_scaling")?.75:96/72;break;case"pc":case"em":_=12;break;case"ex":_=6;break;default:throw new Error("Invalid unit: "+e)}w(),m();var jt=l.__private__.getPageInfo=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:V[t].objId,pageNumber:t,pageContext:V[t]}},Et=l.__private__.getPageInfoByObjId=function(t){for(var e in V)if(V[e].objId===t)break;if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");return jt(e)},Mt=l.__private__.getCurrentPageInfo=function(){return{objId:V[x].objId,pageNumber:x,pageContext:V[x]}};l.addPage=function(){return bt.apply(this,arguments),this},l.setPage=function(){return xt.apply(this,arguments),this},l.insertPage=function(t){return this.addPage(),this.movePage(x,t),this},l.movePage=function(t,e){if(e<t){for(var n=I[t],r=V[t],i=t;e<i;i--)I[i]=I[i-1],V[i]=V[i-1];I[e]=n,V[e]=r,this.setPage(e)}else if(t<e){for(n=I[t],r=V[t],i=t;i<e;i++)I[i]=I[i+1],V[i]=V[i+1];I[e]=n,V[e]=r,this.setPage(e)}return this},l.deletePage=function(){return function(t){0<t&&t<=W&&(I.splice(t,1),--W<x&&(x=W),this.setPage(x))}.apply(this,arguments),this};l.__private__.text=l.text=function(t,e,n,i){var r;"number"!=typeof t||"number"!=typeof e||"string"!=typeof n&&!Array.isArray(n)||(r=n,n=e,e=t,t=r);var o=arguments[3],a=arguments[4],s=arguments[5];if("object"===se(o)&&null!==o||("string"==typeof a&&(s=a,a=null),"string"==typeof o&&(s=o,o=null),"number"==typeof o&&(a=o,o=null),i={flags:o,angle:a,align:s}),(o=o||{}).noBOM=o.noBOM||!0,o.autoencode=o.autoencode||!0,isNaN(e)||isNaN(n)||null==t)throw new Error("Invalid arguments passed to jsPDF.text");if(0===t.length)return c;var l,h="",u="number"==typeof i.lineHeightFactor?i.lineHeightFactor:Tt,c=i.scope||this;function f(t){for(var e,n=t.concat(),r=[],i=n.length;i--;)"string"==typeof(e=n.shift())?r.push(e):Array.isArray(t)&&1===e.length?r.push(e[0]):r.push([e[0],e[1],e[2]]);return r}function p(t,e){var n;if("string"==typeof t)n=e(t)[0];else if(Array.isArray(t)){for(var r,i,o=t.concat(),a=[],s=o.length;s--;)"string"==typeof(r=o.shift())?a.push(e(r)[0]):Array.isArray(r)&&"string"===r[0]&&(i=e(r[0],r[1],r[2]),a.push([i[0],i[1],i[2]]));n=a}return n}var d=!1,g=!0;if("string"==typeof t)d=!0;else if(Array.isArray(t)){for(var m,y=t.concat(),v=[],w=y.length;w--;)("string"!=typeof(m=y.shift())||Array.isArray(m)&&"string"!=typeof m[0])&&(g=!1);d=g}if(!1===d)throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');var b=rt[$].encoding;"WinAnsiEncoding"!==b&&"StandardEncoding"!==b||(t=p(t,function(t,e,n){return[(r=t,r=r.split("\t").join(Array(i.TabLen||9).join(" ")),vt(r,o)),e,n];var r})),"string"==typeof t&&(t=t.match(/[\r?\n]/)?t.split(/\r\n|\r|\n/g):[t]);var x=et/c.internal.scaleFactor,N=x*(Tt-1);switch(i.baseline){case"bottom":n-=N;break;case"top":n+=x-N;break;case"hanging":n+=x-2*N;break;case"middle":n+=x/2-N}0<(O=i.maxWidth||0)&&("string"==typeof t?t=c.splitTextToSize(t,O):"[object Array]"===Object.prototype.toString.call(t)&&(t=c.splitTextToSize(t.join(" "),O)));var L={text:t,x:e,y:n,options:i,mutex:{pdfEscape:vt,activeFontKey:$,fonts:rt,activeFontSize:et}};it.publish("preProcessText",L),t=L.text;a=(i=L.options).angle;var A=c.internal.scaleFactor,S=[];if(a){a*=Math.PI/180;var _=Math.cos(a),F=Math.sin(a);S=[Z(_),Z(F),Z(-1*F),Z(_)]}void 0!==(M=i.charSpace)&&(h+=Q(M*A)+" Tc\n");i.lang;var P=-1,k=void 0!==i.renderingMode?i.renderingMode:i.stroke,I=c.internal.getCurrentPageInfo().pageContext;switch(k){case 0:case!1:case"fill":P=0;break;case 1:case!0:case"stroke":P=1;break;case 2:case"fillThenStroke":P=2;break;case 3:case"invisible":P=3;break;case 4:case"fillAndAddForClipping":P=4;break;case 5:case"strokeAndAddPathForClipping":P=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":P=6;break;case 7:case"addToPathForClipping":P=7}var C=void 0!==I.usedRenderingMode?I.usedRenderingMode:-1;-1!==P?h+=P+" Tr\n":-1!==C&&(h+="0 Tr\n"),-1!==P&&(I.usedRenderingMode=P);s=i.align||"left";var B=et*u,j=c.internal.pageSize.getWidth(),E=(A=c.internal.scaleFactor,rt[$]),M=i.charSpace||Qt,O=i.maxWidth||0,q=(o={},[]);if("[object Array]"===Object.prototype.toString.call(t)){var T,R;v=f(t);"left"!==s&&(R=v.map(function(t){return c.getStringUnitWidth(t,{font:E,charSpace:M,fontSize:et})*et/A}));var D,U=Math.max.apply(Math,R),z=0;if("right"===s){e-=R[0],t=[];var H=0;for(w=v.length;H<w;H++)U-R[H],T=0===H?(D=Wt(e),Vt(n)):(D=(z-R[H])*A,-B),t.push([v[H],D,T]),z=R[H]}else if("center"===s){e-=R[0]/2,t=[];for(H=0,w=v.length;H<w;H++)(U-R[H])/2,T=0===H?(D=Wt(e),Vt(n)):(D=(z-R[H])/2*A,-B),t.push([v[H],D,T]),z=R[H]}else if("left"===s){t=[];for(H=0,w=v.length;H<w;H++)T=0===H?Vt(n):-B,D=0===H?Wt(e):0,t.push(v[H])}else{if("justify"!==s)throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');t=[];for(O=0!==O?O:j,H=0,w=v.length;H<w;H++)T=0===H?Vt(n):-B,D=0===H?Wt(e):0,H<w-1&&q.push(((O-R[H])/(v[H].split(" ").length-1)*A).toFixed(2)),t.push([v[H],D,T])}}!0===("boolean"==typeof i.R2L?i.R2L:nt)&&(t=p(t,function(t,e,n){return[t.split("").reverse().join(""),e,n]}));L={text:t,x:e,y:n,options:i,mutex:{pdfEscape:vt,activeFontKey:$,fonts:rt,activeFontSize:et}};it.publish("postProcessText",L),t=L.text,l=L.mutex.isHex;v=f(t);t=[];var W,V,G,Y=0,J=(w=v.length,"");for(H=0;H<w;H++)J="",Array.isArray(v[H])?(W=parseFloat(v[H][1]),V=parseFloat(v[H][2]),G=(l?"<":"(")+v[H][0]+(l?">":")"),Y=1):(W=Wt(e),V=Vt(n),G=(l?"<":"(")+v[H]+(l?">":")")),void 0!==q&&void 0!==q[H]&&(J=q[H]+" Tw\n"),0!==S.length&&0===H?t.push(J+S.join(" ")+" "+W.toFixed(2)+" "+V.toFixed(2)+" Tm\n"+G):1===Y||0===Y&&0===H?t.push(J+W.toFixed(2)+" "+V.toFixed(2)+" Td\n"+G):t.push(J+G);t=0===Y?t.join(" Tj\nT* "):t.join(" Tj\n"),t+=" Tj\n";var X="BT\n/"+$+" "+et+" Tf\n"+(et*u).toFixed(2)+" TL\n"+Kt+"\n";return X+=h,X+=t,tt(X+="ET"),K[$]=!0,c},l.__private__.lstext=l.lstext=function(t,e,n,r){return console.warn("jsPDF.lstext is deprecated"),this.text(t,e,n,{charSpace:r})},l.__private__.clip=l.clip=function(t){tt("evenodd"===t?"W*":"W"),tt("n")},l.__private__.clip_fixed=l.clip_fixed=function(t){console.log("clip_fixed is deprecated"),l.clip(t)};var Ot=l.__private__.isValidStyle=function(t){var e=!1;return-1!==[void 0,null,"S","F","DF","FD","f","f*","B","B*"].indexOf(t)&&(e=!0),e},qt=l.__private__.getStyle=function(t){var e="S";return"F"===t?e="f":"FD"===t||"DF"===t?e="B":"f"!==t&&"f*"!==t&&"B"!==t&&"B*"!==t||(e=t),e};l.__private__.line=l.line=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw new Error("Invalid arguments passed to jsPDF.line");return this.lines([[n-t,r-e]],t,e)},l.__private__.lines=l.lines=function(t,e,n,r,i,o){var a,s,l,h,u,c,f,p,d,g,m,y;if("number"==typeof t&&(y=n,n=e,e=t,t=y),r=r||[1,1],o=o||!1,isNaN(e)||isNaN(n)||!Array.isArray(t)||!Array.isArray(r)||!Ot(i)||"boolean"!=typeof o)throw new Error("Invalid arguments passed to jsPDF.lines");for(tt(Q(Wt(e))+" "+Q(Vt(n))+" m "),a=r[0],s=r[1],h=t.length,g=e,m=n,l=0;l<h;l++)2===(u=t[l]).length?(g=u[0]*a+g,m=u[1]*s+m,tt(Q(Wt(g))+" "+Q(Vt(m))+" l")):(c=u[0]*a+g,f=u[1]*s+m,p=u[2]*a+g,d=u[3]*s+m,g=u[4]*a+g,m=u[5]*s+m,tt(Q(Wt(c))+" "+Q(Vt(f))+" "+Q(Wt(p))+" "+Q(Vt(d))+" "+Q(Wt(g))+" "+Q(Vt(m))+" c"));return o&&tt(" h"),null!==i&&tt(qt(i)),this},l.__private__.rect=l.rect=function(t,e,n,r,i){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||!Ot(i))throw new Error("Invalid arguments passed to jsPDF.rect");return tt([Z(Wt(t)),Z(Vt(e)),Z(n*_),Z(-r*_),"re"].join(" ")),null!==i&&tt(qt(i)),this},l.__private__.triangle=l.triangle=function(t,e,n,r,i,o,a){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(o)||!Ot(a))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[n-t,r-e],[i-n,o-r],[t-i,e-o]],t,e,[1,1],a,!0),this},l.__private__.roundedRect=l.roundedRect=function(t,e,n,r,i,o,a){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(o)||!Ot(a))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var s=4/3*(Math.SQRT2-1);return this.lines([[n-2*i,0],[i*s,0,i,o-o*s,i,o],[0,r-2*o],[0,o*s,-i*s,o,-i,o],[2*i-n,0],[-i*s,0,-i,-o*s,-i,-o],[0,2*o-r],[0,-o*s,i*s,-o,i,-o]],t+i,e,[1,1],a),this},l.__private__.ellipse=l.ellipse=function(t,e,n,r,i){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||!Ot(i))throw new Error("Invalid arguments passed to jsPDF.ellipse");var o=4/3*(Math.SQRT2-1)*n,a=4/3*(Math.SQRT2-1)*r;return tt([Z(Wt(t+n)),Z(Vt(e)),"m",Z(Wt(t+n)),Z(Vt(e-a)),Z(Wt(t+o)),Z(Vt(e-r)),Z(Wt(t)),Z(Vt(e-r)),"c"].join(" ")),tt([Z(Wt(t-o)),Z(Vt(e-r)),Z(Wt(t-n)),Z(Vt(e-a)),Z(Wt(t-n)),Z(Vt(e)),"c"].join(" ")),tt([Z(Wt(t-n)),Z(Vt(e+a)),Z(Wt(t-o)),Z(Vt(e+r)),Z(Wt(t)),Z(Vt(e+r)),"c"].join(" ")),tt([Z(Wt(t+o)),Z(Vt(e+r)),Z(Wt(t+n)),Z(Vt(e+a)),Z(Wt(t+n)),Z(Vt(e)),"c"].join(" ")),null!==i&&tt(qt(i)),this},l.__private__.circle=l.circle=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||!Ot(r))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(t,e,n,n,r)};l.setFont=function(t,e){return $=Lt(t,e,{disableWarning:!1}),this},l.setFontStyle=l.setFontType=function(t){return $=Lt(void 0,t),this};l.__private__.getFontList=l.getFontList=function(){var t,e,n,r={};for(t in H)if(H.hasOwnProperty(t))for(e in r[t]=n=[],H[t])H[t].hasOwnProperty(e)&&n.push(e);return r};l.addFont=function(t,e,n,r){yt.call(this,t,e,n,r=r||"Identity-H")};var Tt,Rt=r.lineWidth||.200025,Dt=l.__private__.setLineWidth=l.setLineWidth=function(t){return tt((t*_).toFixed(2)+" w"),this},Ut=(l.__private__.setLineDash=ae.API.setLineDash=function(t,e){if(t=t||[],e=e||0,isNaN(e)||!Array.isArray(t))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return t=t.map(function(t){return(t*_).toFixed(3)}).join(" "),e=parseFloat((e*_).toFixed(3)),tt("["+t+"] "+e+" d"),this},l.__private__.getLineHeight=l.getLineHeight=function(){return et*Tt}),zt=(Ut=l.__private__.getLineHeight=l.getLineHeight=function(){return et*Tt},l.__private__.setLineHeightFactor=l.setLineHeightFactor=function(t){return"number"==typeof(t=t||1.15)&&(Tt=t),this}),Ht=l.__private__.getLineHeightFactor=l.getLineHeightFactor=function(){return Tt};zt(r.lineHeight);var Wt=l.__private__.getHorizontalCoordinate=function(t){return t*_},Vt=l.__private__.getVerticalCoordinate=function(t){return V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY-t*_},Gt=l.__private__.getHorizontalCoordinateString=function(t){return Z(t*_)},Yt=l.__private__.getVerticalCoordinateString=function(t){return Z(V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY-t*_)},Jt=r.strokeColor||"0 G",Xt=(l.__private__.getStrokeColor=l.getDrawColor=function(){return ht(Jt)},l.__private__.setStrokeColor=l.setDrawColor=function(t,e,n,r){return Jt=ut({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"draw",precision:2}),tt(Jt),this},r.fillColor||"0 g"),Kt=(l.__private__.getFillColor=l.getFillColor=function(){return ht(Xt)},l.__private__.setFillColor=l.setFillColor=function(t,e,n,r){return Xt=ut({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"fill",precision:2}),tt(Xt),this},r.textColor||"0 g"),Zt=l.__private__.getTextColor=l.getTextColor=function(){return ht(Kt)},Qt=(l.__private__.setTextColor=l.setTextColor=function(t,e,n,r){return Kt=ut({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"text",precision:3}),this},r.charSpace||0),$t=l.__private__.getCharSpace=l.getCharSpace=function(){return Qt},te=(l.__private__.setCharSpace=l.setCharSpace=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Qt=t,this},0);l.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2};l.__private__.setLineCap=l.setLineCap=function(t){var e=l.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return tt((te=e)+" J"),this};var ee,ne=0;l.__private__.setLineJoin=l.setLineJoin=function(t){var e=l.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return tt((ne=e)+" j"),this},l.__private__.setMiterLimit=l.setMiterLimit=function(t){if(t=t||0,isNaN(t))throw new Error("Invalid argument passed to jsPDF.setMiterLimit");return ee=parseFloat(Z(t*_)),tt(ee+" M"),this};for(var re in l.save=function(r,t){if(r=r||"generated.pdf",(t=t||{}).returnPromise=t.returnPromise||!1,!1!==t.returnPromise)return new Promise(function(t,e){try{var n=le(It(kt()),r);"function"==typeof le.unload&&ie.setTimeout&&setTimeout(le.unload,911),t(n)}catch(t){e(t.message)}});le(It(kt()),r),"function"==typeof le.unload&&ie.setTimeout&&setTimeout(le.unload,911)},ae.API)ae.API.hasOwnProperty(re)&&("events"===re&&ae.API.events.length?function(t,e){var n,r,i;for(i=e.length-1;-1!==i;i--)n=e[i][0],r=e[i][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(it,ae.API.events):l[re]=ae.API[re]);return l.internal={pdfEscape:vt,getStyle:qt,getFont:function(){return rt[Lt.apply(l,arguments)]},getFontSize:O,getCharSpace:$t,getTextColor:Zt,getLineHeight:Ut,getLineHeightFactor:Ht,write:j,getHorizontalCoordinate:Wt,getVerticalCoordinate:Vt,getCoordinateString:Gt,getVerticalCoordinateString:Yt,collections:{},newObject:J,newAdditionalObject:at,newObjectDeferred:X,newObjectDeferredBegin:ot,getFilters:ct,putStream:ft,events:it,scaleFactor:_,pageSize:{getWidth:function(){return(V[x].mediaBox.topRightX-V[x].mediaBox.bottomLeftX)/_},setWidth:function(t){V[x].mediaBox.topRightX=t*_+V[x].mediaBox.bottomLeftX},getHeight:function(){return(V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY)/_},setHeight:function(t){V[x].mediaBox.topRightY=t*_+V[x].mediaBox.bottomLeftY}},output:Ct,getNumberOfPages:Nt,pages:I,out:tt,f2:Z,f3:Q,getPageInfo:jt,getPageInfoByObjId:Et,getCurrentPageInfo:Mt,getPDFVersion:u,hasHotfix:Bt},Object.defineProperty(l.internal.pageSize,"width",{get:function(){return(V[x].mediaBox.topRightX-V[x].mediaBox.bottomLeftX)/_},set:function(t){V[x].mediaBox.topRightX=t*_+V[x].mediaBox.bottomLeftX},enumerable:!0,configurable:!0}),Object.defineProperty(l.internal.pageSize,"height",{get:function(){return(V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY)/_},set:function(t){V[x].mediaBox.topRightY=t*_+V[x].mediaBox.bottomLeftY},enumerable:!0,configurable:!0}),function(t){for(var e=0,n=M.length;e<n;e++){var r=yt(t[e][0],t[e][1],t[e][2],M[e][3],!0);K[r]=!0;var i=t[e][0].split("-");mt(r,i[0],i[1]||"")}it.publish("addFonts",{fonts:rt,dictionary:H})}(M),$="F1",bt(i,t),it.publish("initialized"),l}return ae.API={events:[]},ae.version="1.5.3","function"==typeof define&&define.amd?define("jsPDF",function(){return ae}):"undefined"!=typeof module&&module.exports?(module.exports=ae,module.exports.jsPDF=ae):ie.jsPDF=ae,ae}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")());
/**
   * @license
   * Copyright (c) 2016 Alexander Weidt,
   * https://github.com/BiggA94
   * 
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
(function(t,e){var A,n=1,S=function(t){return t.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},y=function(t){return t.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},_=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return t.toFixed(2)},s=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return t.toFixed(5)};t.__acroform__={};var r=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},v=function(t){return t*n},w=function(t){return t/n},l=function(t){var e=new j,n=Y.internal.getHeight(t)||0,r=Y.internal.getWidth(t)||0;return e.BBox=[0,0,Number(_(r)),Number(_(n))],e},i=t.__acroform__.setBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return t|=1<<e},o=t.__acroform__.clearBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return t&=~(1<<e)},a=t.__acroform__.getBit=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return 0==(t&1<<e)?0:1},b=t.__acroform__.getBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return a(t,e-1)},x=t.__acroform__.setBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return i(t,e-1)},N=t.__acroform__.clearBitForPdf=function(t,e,n){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return o(t,e-1)},c=t.__acroform__.calculateCoordinates=function(t){var e=this.internal.getHorizontalCoordinate,n=this.internal.getVerticalCoordinate,r=t[0],i=t[1],o=t[2],a=t[3],s={};return s.lowerLeft_X=e(r)||0,s.lowerLeft_Y=n(i+a)||0,s.upperRight_X=e(r+o)||0,s.upperRight_Y=n(i)||0,[Number(_(s.lowerLeft_X)),Number(_(s.lowerLeft_Y)),Number(_(s.upperRight_X)),Number(_(s.upperRight_Y))]},f=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],n=t.V||t.DV,r=h(t,n),i=A.internal.getFont(t.fontName,t.fontStyle).id;e.push("/Tx BMC"),e.push("q"),e.push("BT"),e.push(A.__private__.encodeColorString(t.color)),e.push("/"+i+" "+_(r.fontSize)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push(r.text),e.push("ET"),e.push("Q"),e.push("EMC");var o=new l(t);return o.stream=e.join("\n"),o}},h=function(i,t){var e=i.maxFontSize||12,n=(i.fontName,{text:"",fontSize:""}),o=(t=")"==(t="("==t.substr(0,1)?t.substr(1):t).substr(t.length-1)?t.substr(0,t.length-1):t).split(" "),r=(A.__private__.encodeColorString(i.color),e),a=Y.internal.getHeight(i)||0;a=a<0?-a:a;var s=Y.internal.getWidth(i)||0;s=s<0?-s:s;var l=function(t,e,n){if(t+1<o.length){var r=e+" "+o[t+1];return F(r,i,n).width<=s-4}return!1};r++;t:for(;;){t="";var h=F("3",i,--r).height,u=i.multiline?a-r:(a-h)/2,c=-2,f=u+=2,p=0,d=0,g=0;if(r<=0){t="(...) Tj\n",t+="% Width of Text: "+F(t,i,r=12).width+", FieldWidth:"+s+"\n";break}g=F(o[0]+" ",i,r).width;var m="",y=0;for(var v in o)if(o.hasOwnProperty(v)){m=" "==(m+=o[v]+" ").substr(m.length-1)?m.substr(0,m.length-1):m;var w=parseInt(v);g=F(m+" ",i,r).width;var b=l(w,m,r),x=v>=o.length-1;if(b&&!x){m+=" ";continue}if(b||x){if(x)d=w;else if(i.multiline&&a<(h+2)*(y+2)+2)continue t}else{if(!i.multiline)continue t;if(a<(h+2)*(y+2)+2)continue t;d=w}for(var N="",L=p;L<=d;L++)N+=o[L]+" ";switch(N=" "==N.substr(N.length-1)?N.substr(0,N.length-1):N,g=F(N,i,r).width,i.textAlign){case"right":c=s-g-2;break;case"center":c=(s-g)/2;break;case"left":default:c=2}t+=_(c)+" "+_(f)+" Td\n",t+="("+S(N)+") Tj\n",t+=-_(c)+" 0 Td\n",f=-(r+2),g=0,p=d+1,y++,m=""}else;break}return n.text=t,n.fontSize=r,n},F=function(t,e,n){var r=A.internal.getFont(e.fontName,e.fontStyle),i=A.getStringUnitWidth(t,{font:r,fontSize:parseFloat(n),charSpace:0})*parseFloat(n);return{height:A.getStringUnitWidth("3",{font:r,fontSize:parseFloat(n),charSpace:0})*parseFloat(n)*1.5,width:i}},u={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},p=function(){A.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var t=A.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var e in t)if(t.hasOwnProperty(e)){var n=t[e];n.objId=void 0,n.hasAnnotation&&d.call(A,n)}},d=function(t){var e={type:"reference",object:t};void 0===A.internal.getPageInfo(t.page).pageContext.annotations.find(function(t){return t.type===e.type&&t.object===e.object})&&A.internal.getPageInfo(t.page).pageContext.annotations.push(e)},g=function(){if(void 0===A.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("putCatalogCallback: Root missing.");A.internal.write("/AcroForm "+A.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")},m=function(){A.internal.events.unsubscribe(A.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete A.internal.acroformPlugin.acroFormDictionaryRoot._eventID,A.internal.acroformPlugin.printedOut=!0},L=function(t){var e=!t;t||(A.internal.newObjectDeferredBegin(A.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),A.internal.acroformPlugin.acroFormDictionaryRoot.putStream());t=t||A.internal.acroformPlugin.acroFormDictionaryRoot.Kids;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n],i=[],o=r.Rect;if(r.Rect&&(r.Rect=c.call(this,r.Rect)),A.internal.newObjectDeferredBegin(r.objId,!0),r.DA=Y.createDefaultAppearanceStream(r),"object"===se(r)&&"function"==typeof r.getKeyValueListForStream&&(i=r.getKeyValueListForStream()),r.Rect=o,r.hasAppearanceStream&&!r.appearanceStreamContent){var a=f.call(this,r);i.push({key:"AP",value:"<</N "+a+">>"}),A.internal.acroformPlugin.xForms.push(a)}if(r.appearanceStreamContent){var s="";for(var l in r.appearanceStreamContent)if(r.appearanceStreamContent.hasOwnProperty(l)){var h=r.appearanceStreamContent[l];if(s+="/"+l+" ",s+="<<",1<=Object.keys(h).length||Array.isArray(h))for(var n in h){var u;if(h.hasOwnProperty(n))"function"==typeof(u=h[n])&&(u=u.call(this,r)),s+="/"+n+" "+u+" ",0<=A.internal.acroformPlugin.xForms.indexOf(u)||A.internal.acroformPlugin.xForms.push(u)}else"function"==typeof(u=h)&&(u=u.call(this,r)),s+="/"+n+" "+u,0<=A.internal.acroformPlugin.xForms.indexOf(u)||A.internal.acroformPlugin.xForms.push(u);s+=">>"}i.push({key:"AP",value:"<<\n"+s+">>"})}A.internal.putStream({additionalKeyValues:i}),A.internal.out("endobj")}e&&P.call(this,A.internal.acroformPlugin.xForms)},P=function(t){for(var e in t)if(t.hasOwnProperty(e)){var n=e,r=t[e];A.internal.newObjectDeferredBegin(r&&r.objId,!0),"object"===se(r)&&"function"==typeof r.putStream&&r.putStream(),delete t[n]}},k=function(){if(void 0!==this.internal&&(void 0===this.internal.acroformPlugin||!1===this.internal.acroformPlugin.isInitialized)){if(A=this,M.FieldNum=0,this.internal.acroformPlugin=JSON.parse(JSON.stringify(u)),this.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");n=A.internal.scaleFactor,A.internal.acroformPlugin.acroFormDictionaryRoot=new E,A.internal.acroformPlugin.acroFormDictionaryRoot._eventID=A.internal.events.subscribe("postPutResources",m),A.internal.events.subscribe("buildDocument",p),A.internal.events.subscribe("putCatalog",g),A.internal.events.subscribe("postPutPages",L),A.internal.acroformPlugin.isInitialized=!0}},I=t.__acroform__.arrayToPdfArray=function(t){if(Array.isArray(t)){for(var e="[",n=0;n<t.length;n++)switch(0!==n&&(e+=" "),se(t[n])){case"boolean":case"number":case"object":e+=t[n].toString();break;case"string":"/"!==t[n].substr(0,1)?e+="("+S(t[n].toString())+")":e+=t[n].toString()}return e+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")};var C=function(t){return(t=t||"").toString(),t="("+S(t)+")"},B=function(){var e;Object.defineProperty(this,"objId",{configurable:!0,get:function(){if(e||(e=A.internal.newObjectDeferred()),!e)throw new Error("AcroFormPDFObject: Couldn't create Object ID");return e},set:function(t){e=t}})};B.prototype.toString=function(){return this.objId+" 0 R"},B.prototype.putStream=function(){var t=this.getKeyValueListForStream();A.internal.putStream({data:this.stream,additionalKeyValues:t}),A.internal.out("endobj")},B.prototype.getKeyValueListForStream=function(){return function(t){var e=[],n=Object.getOwnPropertyNames(t).filter(function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"_"!=t.substring(0,1)});for(var r in n)if(!1===Object.getOwnPropertyDescriptor(t,n[r]).configurable){var i=n[r],o=t[i];o&&(Array.isArray(o)?e.push({key:i,value:I(o)}):o instanceof B?e.push({key:i,value:o.objId+" 0 R"}):"function"!=typeof o&&e.push({key:i,value:o}))}return e}(this)};var j=function(){B.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writeable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writeable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writeable:!0});var e,n=[];Object.defineProperty(this,"BBox",{configurable:!1,writeable:!0,get:function(){return n},set:function(t){n=t}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writeable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(t){e=t.trim()},get:function(){return e||null}})};r(j,B);var E=function(){B.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return 0<t.length?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e)return"("+e+")"},set:function(t){e=t}})};r(E,B);var M=function t(){B.call(this);var e=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute F supplied.');e=t}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(e,3))},set:function(t){!0===Boolean(t)?this.F=x(e,3):this.F=N(e,3)}});var n=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return n},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute Ff supplied.');n=t}});var r=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(0!==r.length)return r},set:function(t){r=void 0!==t?t:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[0])?0:w(r[0])},set:function(t){r[0]=v(t)}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[1])?0:w(r[1])},set:function(t){r[1]=v(t)}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[2])?0:w(r[2])},set:function(t){r[2]=v(t)}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[3])?0:w(r[3])},set:function(t){r[3]=v(t)}});var i="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return i},set:function(t){switch(t){case"/Btn":case"/Tx":case"/Ch":case"/Sig":i=t;break;default:throw new Error('Invalid value "'+t+'" for attribute FT supplied.')}}});var o=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!o||o.length<1){if(this instanceof H)return;o="FieldObject"+t.FieldNum++}return"("+S(o)+")"},set:function(t){o=t.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return o},set:function(t){o=t}});var a="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return a},set:function(t){a=t}});var s="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return s},set:function(t){s=t}});var l=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return w(l)},set:function(t){l=v(t)}});var h=50;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return w(h)},set:function(t){h=v(t)}});var u="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return u},set:function(t){u=t}});var c="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!c||this instanceof H||this instanceof V))return C(c)},set:function(t){t=t.toString(),c=t}});var f=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(f)return this instanceof D==!1?C(f):f},set:function(t){t=t.toString(),f=this instanceof D==!1?"("===t.substr(0,1)?y(t.substr(1,t.length-2)):y(t):t}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof D==!0?y(f.substr(1,f.length-1)):f},set:function(t){t=t.toString(),f=this instanceof D==!0?"/"+t:t}});var p=null;Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(p)return this instanceof D==!1?C(p):p},set:function(t){t=t.toString(),p=this instanceof D==!1?"("===t.substr(0,1)?y(t.substr(1,t.length-2)):y(t):t}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof D==!0?y(p.substr(1,p.length-1)):p},set:function(t){t=t.toString(),p=this instanceof D==!0?"/"+t:t}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var d,g=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,writeable:!0,get:function(){return g},set:function(t){t=Boolean(t),g=t}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writeable:!0,get:function(){if(d)return d},set:function(t){d=t}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,1))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,1):this.Ff=N(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,2))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,2):this.Ff=N(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,3))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,3):this.Ff=N(this.Ff,3)}});var m=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(null!==m)return m},set:function(t){if(-1===[0,1,2].indexOf(t))throw new Error('Invalid value "'+t+'" for attribute Q supplied.');m=t}}),Object.defineProperty(this,"textAlign",{get:function(){var t="left";switch(m){case 0:default:t="left";break;case 1:t="center";break;case 2:t="right"}return t},configurable:!0,enumerable:!0,set:function(t){switch(t){case"right":case 2:m=2;break;case"center":case 1:m=1;break;case"left":case 0:default:m=0}}})};r(M,B);var O=function(){M.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){e=t}});var r=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return I(r)},set:function(t){var e,n;n=[],"string"==typeof(e=t)&&(n=function(t,e,n){n||(n=1);for(var r,i=[];r=e.exec(t);)i.push(r[n]);return i}(e,/\((.*?)\)/g)),r=n}}),this.getOptions=function(){return r},this.setOptions=function(t){r=t,this.sort&&r.sort()},this.addOption=function(t){t=(t=t||"").toString(),r.push(t),this.sort&&r.sort()},this.removeOption=function(t,e){for(e=e||!1,t=(t=t||"").toString();-1!==r.indexOf(t)&&(r.splice(r.indexOf(t),1),!1!==e););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,18))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,18):this.Ff=N(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,19))},set:function(t){!0===this.combo&&(!0===Boolean(t)?this.Ff=x(this.Ff,19):this.Ff=N(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,20))},set:function(t){!0===Boolean(t)?(this.Ff=x(this.Ff,20),r.sort()):this.Ff=N(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,22))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,22):this.Ff=N(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,23):this.Ff=N(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,27))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,27):this.Ff=N(this.Ff,27)}}),this.hasAppearanceStream=!1};r(O,M);var q=function(){O.call(this),this.fontName="helvetica",this.combo=!1};r(q,O);var T=function(){q.call(this),this.combo=!0};r(T,q);var R=function(){T.call(this),this.edit=!0};r(R,T);var D=function(){M.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,15))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,15):this.Ff=N(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,16))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,16):this.Ff=N(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,17))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,17):this.Ff=N(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,26):this.Ff=N(this.Ff,26)}});var e,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){if(0!==Object.keys(n).length){var t,e=[];for(t in e.push("<<"),n)e.push("/"+t+" ("+n[t]+")");return e.push(">>"),e.join("\n")}},set:function(t){"object"===se(t)&&(n=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(t){"string"==typeof t&&(n.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(t){e="/"+t}})};r(D,M);var U=function(){D.call(this),this.pushButton=!0};r(U,D);var z=function(){D.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=void 0!==t?t:[]}})};r(z,D);var H=function(){var e,n;M.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t}});var r,i={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t,e=[];for(t in e.push("<<"),i)e.push("/"+t+" ("+i[t]+")");return e.push(">>"),e.join("\n")},set:function(t){"object"===se(t)&&(i=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return i.CA||""},set:function(t){"string"==typeof t&&(i.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(t){r=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(t){r="/"+t}}),this.optionName=name,this.caption="l",this.appearanceState="Off",this._AppearanceType=Y.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(name)};r(H,M),z.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t&&"getCA"in t))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.Kids)if(this.Kids.hasOwnProperty(e)){var n=this.Kids[e];n.appearanceStreamContent=t.createAppearanceStream(n.optionName),n.caption=t.getCA()}},z.prototype.createOption=function(t){this.Kids.length;var e=new H;return e.Parent=this,e.optionName=t,this.Kids.push(e),J.call(this,e),e};var W=function(){D.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Y.CheckBox.createAppearanceStream()};r(W,D);var V=function(){M.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,13))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,13):this.Ff=N(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,21))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,21):this.Ff=N(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,23):this.Ff=N(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,24))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,24):this.Ff=N(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,25))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,25):this.Ff=N(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,26):this.Ff=N(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};r(V,M);var G=function(){V.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,14))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,14):this.Ff=N(this.Ff,14)}}),this.password=!0};r(G,V);var Y={CheckBox:{createAppearanceStream:function(){return{N:{On:Y.CheckBox.YesNormal},D:{On:Y.CheckBox.YesPushDown,Off:Y.CheckBox.OffPushDown}}},YesPushDown:function(t){var e=l(t),n=[],r=A.internal.getFont(t.fontName,t.fontStyle).id,i=A.__private__.encodeColorString(t.color),o=h(t,t.caption);return n.push("0.749023 g"),n.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),n.push("f"),n.push("BMC"),n.push("q"),n.push("0 0 1 rg"),n.push("/"+r+" "+_(o.fontSize)+" Tf "+i),n.push("BT"),n.push(o.text),n.push("ET"),n.push("Q"),n.push("EMC"),e.stream=n.join("\n"),e},YesNormal:function(t){var e=l(t),n=A.internal.getFont(t.fontName,t.fontStyle).id,r=A.__private__.encodeColorString(t.color),i=[],o=Y.internal.getHeight(t),a=Y.internal.getWidth(t),s=h(t,t.caption);return i.push("1 g"),i.push("0 0 "+_(a)+" "+_(o)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+_(a-1)+" "+_(o-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+n+" "+_(s.fontSize)+" Tf "+r),i.push(s.text),i.push("ET"),i.push("Q"),e.stream=i.join("\n"),e},OffPushDown:function(t){var e=l(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),n.push("f"),e.stream=n.join("\n"),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:Y.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=Y.RadioButton.Circle.YesNormal,e.D[t]=Y.RadioButton.Circle.YesPushDown,e},getCA:function(){return"l"},YesNormal:function(t){var e=l(t),n=[],r=Y.internal.getWidth(t)<=Y.internal.getHeight(t)?Y.internal.getWidth(t)/4:Y.internal.getHeight(t)/4;r=Number((.9*r).toFixed(5));var i=Y.internal.Bezier_C,o=Number((r*i).toFixed(5));return n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(r+" 0 m"),n.push(r+" "+o+" "+o+" "+r+" 0 "+r+" c"),n.push("-"+o+" "+r+" -"+r+" "+o+" -"+r+" 0 c"),n.push("-"+r+" -"+o+" -"+o+" -"+r+" 0 -"+r+" c"),n.push(o+" -"+r+" "+r+" -"+o+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=l(t),n=[],r=Y.internal.getWidth(t)<=Y.internal.getHeight(t)?Y.internal.getWidth(t)/4:Y.internal.getHeight(t)/4,i=(r=Number((.9*r).toFixed(5)),Number((2*r).toFixed(5))),o=Number((i*Y.internal.Bezier_C).toFixed(5)),a=Number((r*Y.internal.Bezier_C).toFixed(5));return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+o+" "+o+" "+i+" 0 "+i+" c"),n.push("-"+o+" "+i+" -"+i+" "+o+" -"+i+" 0 c"),n.push("-"+i+" -"+o+" -"+o+" -"+i+" 0 -"+i+" c"),n.push(o+" -"+i+" "+i+" -"+o+" "+i+" 0 c"),n.push("f"),n.push("Q"),n.push("0 g"),n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(r+" 0 m"),n.push(r+" "+a+" "+a+" "+r+" 0 "+r+" c"),n.push("-"+a+" "+r+" -"+r+" "+a+" -"+r+" 0 c"),n.push("-"+r+" -"+a+" -"+a+" -"+r+" 0 -"+r+" c"),n.push(a+" -"+r+" "+r+" -"+a+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},OffPushDown:function(t){var e=l(t),n=[],r=Y.internal.getWidth(t)<=Y.internal.getHeight(t)?Y.internal.getWidth(t)/4:Y.internal.getHeight(t)/4,i=(r=Number((.9*r).toFixed(5)),Number((2*r).toFixed(5))),o=Number((i*Y.internal.Bezier_C).toFixed(5));return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+o+" "+o+" "+i+" 0 "+i+" c"),n.push("-"+o+" "+i+" -"+i+" "+o+" -"+i+" 0 c"),n.push("-"+i+" -"+o+" -"+o+" -"+i+" 0 -"+i+" c"),n.push(o+" -"+i+" "+i+" -"+o+" "+i+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:Y.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=Y.RadioButton.Cross.YesNormal,e.D[t]=Y.RadioButton.Cross.YesPushDown,e},getCA:function(){return"8"},YesNormal:function(t){var e=l(t),n=[],r=Y.internal.calculateCross(t);return n.push("q"),n.push("1 1 "+_(Y.internal.getWidth(t)-2)+" "+_(Y.internal.getHeight(t)-2)+" re"),n.push("W"),n.push("n"),n.push(_(r.x1.x)+" "+_(r.x1.y)+" m"),n.push(_(r.x2.x)+" "+_(r.x2.y)+" l"),n.push(_(r.x4.x)+" "+_(r.x4.y)+" m"),n.push(_(r.x3.x)+" "+_(r.x3.y)+" l"),n.push("s"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=l(t),n=Y.internal.calculateCross(t),r=[];return r.push("0.749023 g"),r.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),r.push("f"),r.push("q"),r.push("1 1 "+_(Y.internal.getWidth(t)-2)+" "+_(Y.internal.getHeight(t)-2)+" re"),r.push("W"),r.push("n"),r.push(_(n.x1.x)+" "+_(n.x1.y)+" m"),r.push(_(n.x2.x)+" "+_(n.x2.y)+" l"),r.push(_(n.x4.x)+" "+_(n.x4.y)+" m"),r.push(_(n.x3.x)+" "+_(n.x3.y)+" l"),r.push("s"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=l(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),n.push("f"),e.stream=n.join("\n"),e}}},createDefaultAppearanceStream:function(t){var e=A.internal.getFont(t.fontName,t.fontStyle).id,n=A.__private__.encodeColorString(t.color);return"/"+e+" "+t.fontSize+" Tf "+n}};Y.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=Y.internal.getWidth(t),n=Y.internal.getHeight(t),r=Math.min(e,n);return{x1:{x:(e-r)/2,y:(n-r)/2+r},x2:{x:(e-r)/2+r,y:(n-r)/2},x3:{x:(e-r)/2,y:(n-r)/2},x4:{x:(e-r)/2+r,y:(n-r)/2+r}}}},Y.internal.getWidth=function(t){var e=0;return"object"===se(t)&&(e=v(t.Rect[2])),e},Y.internal.getHeight=function(t){var e=0;return"object"===se(t)&&(e=v(t.Rect[3])),e};var J=t.addField=function(t){if(k.call(this),!(t instanceof M))throw new Error("Invalid argument passed to jsPDF.addField.");return function(t){A.internal.acroformPlugin.printedOut&&(A.internal.acroformPlugin.printedOut=!1,A.internal.acroformPlugin.acroFormDictionaryRoot=null),A.internal.acroformPlugin.acroFormDictionaryRoot||k.call(A),A.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)}.call(this,t),t.page=A.internal.getCurrentPageInfo().pageNumber,this};t.addButton=function(t){if(t instanceof D==!1)throw new Error("Invalid argument passed to jsPDF.addButton.");return J.call(this,t)},t.addTextField=function(t){if(t instanceof V==!1)throw new Error("Invalid argument passed to jsPDF.addTextField.");return J.call(this,t)},t.addChoiceField=function(t){if(t instanceof O==!1)throw new Error("Invalid argument passed to jsPDF.addChoiceField.");return J.call(this,t)};"object"==se(e)&&void 0===e.ChoiceField&&void 0===e.ListBox&&void 0===e.ComboBox&&void 0===e.EditBox&&void 0===e.Button&&void 0===e.PushButton&&void 0===e.RadioButton&&void 0===e.CheckBox&&void 0===e.TextField&&void 0===e.PasswordField?(e.ChoiceField=O,e.ListBox=q,e.ComboBox=T,e.EditBox=R,e.Button=D,e.PushButton=U,e.RadioButton=z,e.CheckBox=W,e.TextField=V,e.PasswordField=G,e.AcroForm={Appearance:Y}):console.warn("AcroForm-Classes are not populated into global-namespace, because the class-Names exist already."),t.AcroFormChoiceField=O,t.AcroFormListBox=q,t.AcroFormComboBox=T,t.AcroFormEditBox=R,t.AcroFormButton=D,t.AcroFormPushButton=U,t.AcroFormRadioButton=z,t.AcroFormCheckBox=W,t.AcroFormTextField=V,t.AcroFormPasswordField=G,t.AcroFormAppearance=Y,t.AcroForm={ChoiceField:O,ListBox:q,ComboBox:T,EditBox:R,Button:D,PushButton:U,RadioButton:z,CheckBox:W,TextField:V,PasswordField:G,Appearance:Y}})((window.tmp=lt).API,"undefined"!=typeof window&&window||"undefined"!=typeof global&&global),
/** @license
   * jsPDF addImage plugin
   * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
   *               2013 Chris Dowling, https://github.com/gingerchris
   *               2013 Trinh Ho, https://github.com/ineedfat
   *               2013 Edwin Alejandro Perez, https://github.com/eaparango
   *               2013 Norah Smith, https://github.com/burnburnrocket
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   */
function(x){var N="addImage_",l={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},h=x.getImageFileTypeByImageData=function(t,e){var n,r;e=e||"UNKNOWN";var i,o,a,s="UNKNOWN";for(a in x.isArrayBufferView(t)&&(t=x.arrayBufferToBinaryString(t)),l)for(i=l[a],n=0;n<i.length;n+=1){for(o=!0,r=0;r<i[n].length;r+=1)if(void 0!==i[n][r]&&i[n][r]!==t.charCodeAt(r)){o=!1;break}if(!0===o){s=a;break}}return"UNKNOWN"===s&&"UNKNOWN"!==e&&(console.warn('FileType of Image not recognized. Processing image as "'+e+'".'),s=e),s},n=function t(e){for(var n=this.internal.newObject(),r=this.internal.write,i=this.internal.putStream,o=(0,this.internal.getFilters)();-1!==o.indexOf("FlateEncode");)o.splice(o.indexOf("FlateEncode"),1);e.n=n;var a=[];if(a.push({key:"Type",value:"/XObject"}),a.push({key:"Subtype",value:"/Image"}),a.push({key:"Width",value:e.w}),a.push({key:"Height",value:e.h}),e.cs===this.color_spaces.INDEXED?a.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(e.pal.length/3-1)+" "+("smask"in e?n+2:n+1)+" 0 R]"}):(a.push({key:"ColorSpace",value:"/"+e.cs}),e.cs===this.color_spaces.DEVICE_CMYK&&a.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),a.push({key:"BitsPerComponent",value:e.bpc}),"dp"in e&&a.push({key:"DecodeParms",value:"<<"+e.dp+">>"}),"trns"in e&&e.trns.constructor==Array){for(var s="",l=0,h=e.trns.length;l<h;l++)s+=e.trns[l]+" "+e.trns[l]+" ";a.push({key:"Mask",value:"["+s+"]"})}"smask"in e&&a.push({key:"SMask",value:n+1+" 0 R"});var u=void 0!==e.f?["/"+e.f]:void 0;if(i({data:e.data,additionalKeyValues:a,alreadyAppliedFilters:u}),r("endobj"),"smask"in e){var c="/Predictor "+e.p+" /Colors 1 /BitsPerComponent "+e.bpc+" /Columns "+e.w,f={w:e.w,h:e.h,cs:"DeviceGray",bpc:e.bpc,dp:c,data:e.smask};"f"in e&&(f.f=e.f),t.call(this,f)}e.cs===this.color_spaces.INDEXED&&(this.internal.newObject(),i({data:this.arrayBufferToBinaryString(new Uint8Array(e.pal))}),r("endobj"))},L=function(){var t=this.internal.collections[N+"images"];for(var e in t)n.call(this,t[e])},A=function(){var t,e=this.internal.collections[N+"images"],n=this.internal.write;for(var r in e)n("/I"+(t=e[r]).i,t.n,"0","R")},S=function(t){return"function"==typeof x["process"+t.toUpperCase()]},_=function(t){return"object"===se(t)&&1===t.nodeType},F=function(t,e){if("IMG"===t.nodeName&&t.hasAttribute("src")){var n=""+t.getAttribute("src");if(0===n.indexOf("data:image/"))return unescape(n);var r=x.loadFile(n);if(void 0!==r)return btoa(r)}if("CANVAS"===t.nodeName){var i=t;return t.toDataURL("image/jpeg",1)}(i=document.createElement("canvas")).width=t.clientWidth||t.width,i.height=t.clientHeight||t.height;var o=i.getContext("2d");if(!o)throw"addImage requires canvas to be supported by browser.";return o.drawImage(t,0,0,i.width,i.height),i.toDataURL("png"==(""+e).toLowerCase()?"image/png":"image/jpeg")},P=function(t,e){var n;if(e)for(var r in e)if(t===e[r].alias){n=e[r];break}return n};x.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"},x.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"},x.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},x.sHashCode=function(t){var e,n=0;if(0===(t=t||"").length)return n;for(e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return n},x.isString=function(t){return"string"==typeof t},x.validateStringAsBase64=function(t){(t=t||"").toString().trim();var e=!0;return 0===t.length&&(e=!1),t.length%4!=0&&(e=!1),!1===/^[A-Za-z0-9+\/]+$/.test(t.substr(0,t.length-2))&&(e=!1),!1===/^[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==$/.test(t.substr(-2))&&(e=!1),e},x.extractInfoFromBase64DataURI=function(t){return/^data:([\w]+?\/([\w]+?));\S*;*base64,(.+)$/g.exec(t)},x.extractImageFromDataUrl=function(t){var e=(t=t||"").split("base64,"),n=null;if(2===e.length){var r=/^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);Array.isArray(r)&&(n={mimeType:r[1],charset:r[2],data:e[1]})}return n},x.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array},x.isArrayBuffer=function(t){return!!this.supportsArrayBuffer()&&t instanceof ArrayBuffer},x.isArrayBufferView=function(t){return!!this.supportsArrayBuffer()&&("undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array))},x.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},x.arrayBufferToBinaryString=function(t){if("function"==typeof atob)return atob(this.arrayBufferToBase64(t))},x.arrayBufferToBase64=function(t){for(var e,n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Uint8Array(t),o=i.byteLength,a=o%3,s=o-a,l=0;l<s;l+=3)n+=r[(16515072&(e=i[l]<<16|i[l+1]<<8|i[l+2]))>>18]+r[(258048&e)>>12]+r[(4032&e)>>6]+r[63&e];return 1==a?n+=r[(252&(e=i[s]))>>2]+r[(3&e)<<4]+"==":2==a&&(n+=r[(64512&(e=i[s]<<8|i[s+1]))>>10]+r[(1008&e)>>4]+r[(15&e)<<2]+"="),n},x.createImageInfo=function(t,e,n,r,i,o,a,s,l,h,u,c,f){var p={alias:s,w:e,h:n,cs:r,bpc:i,i:a,data:t};return o&&(p.f=o),l&&(p.dp=l),h&&(p.trns=h),u&&(p.pal=u),c&&(p.smask=c),f&&(p.p=f),p},x.addImage=function(t,e,n,r,i,o,a,s,l){var h="";if("string"!=typeof e){var u=o;o=i,i=r,r=n,n=e,e=u}if("object"===se(t)&&!_(t)&&"imageData"in t){var c=t;t=c.imageData,e=c.format||e||"UNKNOWN",n=c.x||n||0,r=c.y||r||0,i=c.w||i,o=c.h||o,a=c.alias||a,s=c.compression||s,l=c.rotation||c.angle||l}var f=this.internal.getFilters();if(void 0===s&&-1!==f.indexOf("FlateEncode")&&(s="SLOW"),"string"==typeof t&&(t=unescape(t)),isNaN(n)||isNaN(r))throw console.error("jsPDF.addImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addImage");var p,d,g,m,y,v,w,b=function(){var t=this.internal.collections[N+"images"];return t||(this.internal.collections[N+"images"]=t={},this.internal.events.subscribe("putResources",L),this.internal.events.subscribe("putXobjectDict",A)),t}.call(this);if(!((p=P(t,b))||(_(t)&&(t=F(t,e)),(null==(w=a)||0===w.length)&&(a="string"==typeof(v=t)?x.sHashCode(v):x.isArrayBufferView(v)?x.sHashCode(x.arrayBufferToBinaryString(v)):null),p=P(a,b)))){if(this.isString(t)&&(""!==(h=this.convertStringToImageData(t))?t=h:void 0!==(h=x.loadFile(t))&&(t=h)),e=this.getImageFileTypeByImageData(t,e),!S(e))throw new Error("addImage does not support files of type '"+e+"', please ensure that a plugin for '"+e+"' support is added.");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(d=t,t=this.binaryStringToUint8Array(t))),!(p=this["process"+e.toUpperCase()](t,(y=0,(m=b)&&(y=Object.keys?Object.keys(m).length:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}(m)),y),a,((g=s)&&"string"==typeof g&&(g=g.toUpperCase()),g in x.image_compression?g:x.image_compression.NONE),d)))throw new Error("An unknown error occurred whilst processing the image")}return function(t,e,n,r,i,o,a,s){var l=function(t,e,n){return t||e||(e=t=-96),t<0&&(t=-1*n.w*72/t/this.internal.scaleFactor),e<0&&(e=-1*n.h*72/e/this.internal.scaleFactor),0===t&&(t=e*n.w/n.h),0===e&&(e=t*n.h/n.w),[t,e]}.call(this,n,r,i),h=this.internal.getCoordinateString,u=this.internal.getVerticalCoordinateString;if(n=l[0],r=l[1],a[o]=i,s){s*=Math.PI/180;var c=Math.cos(s),f=Math.sin(s),p=function(t){return t.toFixed(4)},d=[p(c),p(f),p(-1*f),p(c),0,0,"cm"]}this.internal.write("q"),s?(this.internal.write([1,"0","0",1,h(t),u(e+r),"cm"].join(" ")),this.internal.write(d.join(" ")),this.internal.write([h(n),"0","0",h(r),"0","0","cm"].join(" "))):this.internal.write([h(n),"0","0",h(r),h(t),u(e+r),"cm"].join(" ")),this.internal.write("/I"+i.i+" Do"),this.internal.write("Q")}.call(this,n,r,i,o,p,p.i,b,l),this},x.convertStringToImageData=function(t){var e,n="";if(this.isString(t)){var r;e=null!==(r=this.extractImageFromDataUrl(t))?r.data:t;try{n=atob(e)}catch(t){throw x.validateStringAsBase64(e)?new Error("atob-Error in jsPDF.convertStringToImageData "+t.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertStringToImageData ")}}return n};var u=function(t,e){return t.subarray(e,e+5)};x.processJPEG=function(t,e,n,r,i,o){var a,s=this.decode.DCT_DECODE;if(!this.isString(t)&&!this.isArrayBuffer(t)&&!this.isArrayBufferView(t))return null;if(this.isString(t)&&(a=function(t){var e;if("JPEG"!==h(t))throw new Error("getJpegSize requires a binary string jpeg file");for(var n=256*t.charCodeAt(4)+t.charCodeAt(5),r=4,i=t.length;r<i;){if(r+=n,255!==t.charCodeAt(r))throw new Error("getJpegSize could not find the size of the image");if(192===t.charCodeAt(r+1)||193===t.charCodeAt(r+1)||194===t.charCodeAt(r+1)||195===t.charCodeAt(r+1)||196===t.charCodeAt(r+1)||197===t.charCodeAt(r+1)||198===t.charCodeAt(r+1)||199===t.charCodeAt(r+1))return e=256*t.charCodeAt(r+5)+t.charCodeAt(r+6),[256*t.charCodeAt(r+7)+t.charCodeAt(r+8),e,t.charCodeAt(r+9)];r+=2,n=256*t.charCodeAt(r)+t.charCodeAt(r+1)}}(t)),this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)&&(a=function(t){if(65496!=(t[0]<<8|t[1]))throw new Error("Supplied data is not a JPEG");for(var e,n=t.length,r=(t[4]<<8)+t[5],i=4;i<n;){if(r=((e=u(t,i+=r))[2]<<8)+e[3],(192===e[1]||194===e[1])&&255===e[0]&&7<r)return{width:((e=u(t,i+5))[2]<<8)+e[3],height:(e[0]<<8)+e[1],numcomponents:e[4]};i+=2}throw new Error("getJpegSizeFromBytes could not find the size of the image")}(t),t=i||this.arrayBufferToBinaryString(t)),void 0===o)switch(a.numcomponents){case 1:o=this.color_spaces.DEVICE_GRAY;break;case 4:o=this.color_spaces.DEVICE_CMYK;break;default:case 3:o=this.color_spaces.DEVICE_RGB}return this.createImageInfo(t,a.width,a.height,o,8,s,e,n)},x.processJPG=function(){return this.processJPEG.apply(this,arguments)},x.getImageProperties=function(t){var e,n,r="";if(_(t)&&(t=F(t)),this.isString(t)&&(""!==(r=this.convertStringToImageData(t))?t=r:void 0!==(r=x.loadFile(t))&&(t=r)),n=this.getImageFileTypeByImageData(t),!S(n))throw new Error("addImage does not support files of type '"+n+"', please ensure that a plugin for '"+n+"' support is added.");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(t=this.binaryStringToUint8Array(t))),!(e=this["process"+n.toUpperCase()](t)))throw new Error("An unknown error occurred whilst processing the image");return{fileType:n,width:e.w,height:e.h,colorSpace:e.cs,compressionMode:e.f,bitsPerComponent:e.bpc}}}(lt.API),
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
t=lt.API,lt.API.events.push(["addPage",function(t){this.internal.getPageInfo(t.pageNumber).pageContext.annotations=[]}]),t.events.push(["putPage",function(t){for(var e=this.internal.getPageInfoByObjId(t.objId),n=t.pageContext.annotations,r=function(t){if(void 0!==t&&""!=t)return!0},i=!1,o=0;o<n.length&&!i;o++)switch((l=n[o]).type){case"link":if(r(l.options.url)||r(l.options.pageNumber)){i=!0;break}case"reference":case"text":case"freetext":i=!0}if(0!=i){this.internal.write("/Annots ["),this.internal.pageSize.height;var a=this.internal.getCoordinateString,s=this.internal.getVerticalCoordinateString;for(o=0;o<n.length;o++){var l;switch((l=n[o]).type){case"reference":this.internal.write(" "+l.object.objId+" 0 R ");break;case"text":var h=this.internal.newAdditionalObject(),u=this.internal.newAdditionalObject(),c=l.title||"Note";m="<</Type /Annot /Subtype /Text "+(p="/Rect ["+a(l.bounds.x)+" "+s(l.bounds.y+l.bounds.h)+" "+a(l.bounds.x+l.bounds.w)+" "+s(l.bounds.y)+"] ")+"/Contents ("+l.contents+")",m+=" /Popup "+u.objId+" 0 R",m+=" /P "+e.objId+" 0 R",m+=" /T ("+c+") >>",h.content=m;var f=h.objId+" 0 R";m="<</Type /Annot /Subtype /Popup "+(p="/Rect ["+a(l.bounds.x+30)+" "+s(l.bounds.y+l.bounds.h)+" "+a(l.bounds.x+l.bounds.w+30)+" "+s(l.bounds.y)+"] ")+" /Parent "+f,l.open&&(m+=" /Open true"),m+=" >>",u.content=m,this.internal.write(h.objId,"0 R",u.objId,"0 R");break;case"freetext":var p="/Rect ["+a(l.bounds.x)+" "+s(l.bounds.y)+" "+a(l.bounds.x+l.bounds.w)+" "+s(l.bounds.y+l.bounds.h)+"] ",d=l.color||"#000000";m="<</Type /Annot /Subtype /FreeText "+p+"/Contents ("+l.contents+")",m+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+d+")",m+=" /Border [0 0 0]",m+=" >>",this.internal.write(m);break;case"link":if(l.options.name){var g=this.annotations._nameMap[l.options.name];l.options.pageNumber=g.page,l.options.top=g.y}else l.options.top||(l.options.top=0);p="/Rect ["+a(l.x)+" "+s(l.y)+" "+a(l.x+l.w)+" "+s(l.y+l.h)+"] ";var m="";if(l.options.url)m="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /A <</S /URI /URI ("+l.options.url+") >>";else if(l.options.pageNumber)switch(m="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(l.options.pageNumber).objId+" 0 R",l.options.magFactor=l.options.magFactor||"XYZ",l.options.magFactor){case"Fit":m+=" /Fit]";break;case"FitH":m+=" /FitH "+l.options.top+"]";break;case"FitV":l.options.left=l.options.left||0,m+=" /FitV "+l.options.left+"]";break;case"XYZ":default:var y=s(l.options.top);l.options.left=l.options.left||0,void 0===l.options.zoom&&(l.options.zoom=0),m+=" /XYZ "+l.options.left+" "+y+" "+l.options.zoom+"]"}""!=m&&(m+=" >>",this.internal.write(m))}}this.internal.write("]")}}]),t.createAnnotation=function(t){var e=this.internal.getCurrentPageInfo();switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":e.pageContext.annotations.push(t)}},t.link=function(t,e,n,r,i){this.internal.getCurrentPageInfo().pageContext.annotations.push({x:t,y:e,w:n,h:r,options:i,type:"link"})},t.textWithLink=function(t,e,n,r){var i=this.getTextWidth(t),o=this.internal.getLineHeight()/this.internal.scaleFactor;return this.text(t,e,n),n+=.2*o,this.link(e,n-o,i,o,r),i},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor},
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var h={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},a={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},e={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},n=[1570,1571,1573,1575];t.__arabicParser__={};var r=t.__arabicParser__.isInArabicSubstitutionA=function(t){return void 0!==h[t.charCodeAt(0)]},u=t.__arabicParser__.isArabicLetter=function(t){return"string"==typeof t&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)},i=t.__arabicParser__.isArabicEndLetter=function(t){return u(t)&&r(t)&&h[t.charCodeAt(0)].length<=2},o=t.__arabicParser__.isArabicAlfLetter=function(t){return u(t)&&0<=n.indexOf(t.charCodeAt(0))},s=(t.__arabicParser__.arabicLetterHasIsolatedForm=function(t){return u(t)&&r(t)&&1<=h[t.charCodeAt(0)].length},t.__arabicParser__.arabicLetterHasFinalForm=function(t){return u(t)&&r(t)&&2<=h[t.charCodeAt(0)].length}),l=(t.__arabicParser__.arabicLetterHasInitialForm=function(t){return u(t)&&r(t)&&3<=h[t.charCodeAt(0)].length},t.__arabicParser__.arabicLetterHasMedialForm=function(t){return u(t)&&r(t)&&4==h[t.charCodeAt(0)].length}),c=t.__arabicParser__.resolveLigatures=function(t){var e=0,n=a,r=0,i="",o=0;for(e=0;e<t.length;e+=1)void 0!==n[t.charCodeAt(e)]?(o++,"number"==typeof(n=n[t.charCodeAt(e)])&&(r=-1!==(r=f(t.charAt(e),t.charAt(e-o),t.charAt(e+1)))?r:0,i+=String.fromCharCode(n),n=a,o=0),e===t.length-1&&(n=a,i+=t.charAt(e-(o-1)),e-=o-1,o=0)):(n=a,i+=t.charAt(e-o),e-=o,o=0);return i},f=(t.__arabicParser__.isArabicDiacritic=function(t){return void 0!==t&&void 0!==e[t.charCodeAt(0)]},t.__arabicParser__.getCorrectForm=function(t,e,n){return u(t)?!1===r(t)?-1:!s(t)||!u(e)&&!u(n)||!u(n)&&i(e)||i(t)&&!u(e)||i(t)&&o(e)||i(t)&&i(e)?0:l(t)&&u(e)&&!i(e)&&u(n)&&s(n)?3:i(t)||!u(n)?1:2:-1}),p=t.__arabicParser__.processArabic=t.processArabic=function(t){var e=0,n=0,r=0,i="",o="",a="",s=(t=t||"").split("\\s+"),l=[];for(e=0;e<s.length;e+=1){for(l.push(""),n=0;n<s[e].length;n+=1)i=s[e][n],o=s[e][n-1],a=s[e][n+1],u(i)?(r=f(i,o,a),l[e]+=-1!==r?String.fromCharCode(h[i.charCodeAt(0)][r]):i):l[e]+=i;l[e]=c(l[e])}return l.join(" ")};t.events.push(["preProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),r=(t.mutex,n.lang,[]);if("[object Array]"===Object.prototype.toString.call(e)){var i=0;for(r=[],i=0;i<e.length;i+=1)"[object Array]"===Object.prototype.toString.call(e[i])?r.push([p(e[i][0]),e[i][1],e[i][2]]):r.push([p(e[i])]);t.text=r}else t.text=p(e)}])}(lt.API),lt.API.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+e+" 0 R")})}return this},
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
e=lt.API,(n=function(){var e=void 0;Object.defineProperty(this,"pdf",{get:function(){return e},set:function(t){e=t}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(t){n=isNaN(t)||!1===Number.isInteger(t)||t<0?150:t,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var r=300;Object.defineProperty(this,"height",{get:function(){return r},set:function(t){r=isNaN(t)||!1===Number.isInteger(t)||t<0?300:t,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=r+1)}});var i=[];Object.defineProperty(this,"childNodes",{get:function(){return i},set:function(t){i=t}});var o={};Object.defineProperty(this,"style",{get:function(){return o},set:function(t){o=t}}),Object.defineProperty(this,"parentNode",{get:function(){return!1}})}).prototype.getContext=function(t,e){var n;if("2d"!==(t=t||"2d"))return null;for(n in e)this.pdf.context2d.hasOwnProperty(n)&&(this.pdf.context2d[n]=e[n]);return(this.pdf.context2d._canvas=this).pdf.context2d},n.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new n,this.canvas.pdf=this}]),
/** 
   * @license
   * ====================================================================
   * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
   *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Hall, james@parall.ax
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
_=lt.API,F={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},P=1,p=function(t,e,n,r,i){F={x:t,y:e,w:n,h:r,ln:i}},d=function(){return F},k={left:0,top:0,bottom:0},_.setHeaderFunction=function(t){l=t},_.getTextDimensions=function(t,e){var n=this.table_font_size||this.internal.getFontSize(),r=(this.internal.getFont().fontStyle,(e=e||{}).scaleFactor||this.internal.scaleFactor),i=0,o=0,a=0;if("string"==typeof t)0!=(i=this.getStringUnitWidth(t)*n)&&(o=1);else{if("[object Array]"!==Object.prototype.toString.call(t))throw new Error("getTextDimensions expects text-parameter to be of type String or an Array of Strings.");for(var s=0;s<t.length;s++)i<(a=this.getStringUnitWidth(t[s])*n)&&(i=a);0!==i&&(o=t.length)}return{w:i/=r,h:Math.max((o*n*this.getLineHeightFactor()-n*(this.getLineHeightFactor()-1))/r,0)}},_.cellAddPage=function(){var t=this.margins||k;this.addPage(),p(t.left,t.top,void 0,void 0),P+=1},_.cellInitialize=function(){F={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},P=1},_.cell=function(t,e,n,r,i,o,a){var s=d(),l=!1;if(void 0!==s.ln)if(s.ln===o)t=s.x+s.w,e=s.y;else{var h=this.margins||k;s.y+s.h+r+13>=this.internal.pageSize.getHeight()-h.bottom&&(this.cellAddPage(),l=!0,this.printHeaders&&this.tableHeaderRow&&this.printHeaderRow(o,!0)),e=d().y+d().h,l&&(e=23)}if(void 0!==i[0])if(this.printingHeaderRow?this.rect(t,e,n,r,"FD"):this.rect(t,e,n,r),"right"===a){i instanceof Array||(i=[i]);for(var u=0;u<i.length;u++){var c=i[u],f=this.getStringUnitWidth(c)*this.internal.getFontSize()/this.internal.scaleFactor;this.text(c,t+n-f-3,e+this.internal.getLineHeight()*(u+1))}}else this.text(i,t+3,e+this.internal.getLineHeight());return p(t,e,n,r,o),this},_.arrayMax=function(t,e){var n,r,i,o=t[0];for(n=0,r=t.length;n<r;n+=1)i=t[n],e?-1===e(o,i)&&(o=i):o<i&&(o=i);return o},_.table=function(t,e,n,r,i){if(!n)throw"No data for PDF table";var o,a,s,l,h,u,c,f,p,d,g=[],m=[],y={},v={},w=[],b=[],x=!1,N=!0,L=12,A=k;if(A.width=this.internal.pageSize.getWidth(),i&&(!0===i.autoSize&&(x=!0),!1===i.printHeaders&&(N=!1),i.fontSize&&(L=i.fontSize),i.css&&void 0!==i.css["font-size"]&&(L=16*i.css["font-size"]),i.margins&&(A=i.margins)),this.lnMod=0,F={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},P=1,this.printHeaders=N,this.margins=A,this.setFontSize(L),this.table_font_size=L,null==r)g=Object.keys(n[0]);else if(r[0]&&"string"!=typeof r[0])for(a=0,s=r.length;a<s;a+=1)o=r[a],g.push(o.name),m.push(o.prompt),v[o.name]=o.width*(19.049976/25.4);else g=r;if(x)for(d=function(t){return t[o]},a=0,s=g.length;a<s;a+=1){for(y[o=g[a]]=n.map(d),w.push(this.getTextDimensions(m[a]||o,{scaleFactor:1}).w),c=0,l=(u=y[o]).length;c<l;c+=1)h=u[c],w.push(this.getTextDimensions(h,{scaleFactor:1}).w);v[o]=_.arrayMax(w),w=[]}if(N){var S=this.calculateLineHeight(g,v,m.length?m:g);for(a=0,s=g.length;a<s;a+=1)o=g[a],b.push([t,e,v[o],S,String(m.length?m[a]:o)]);this.setTableHeaderRow(b),this.printHeaderRow(1,!1)}for(a=0,s=n.length;a<s;a+=1)for(f=n[a],S=this.calculateLineHeight(g,v,f),c=0,p=g.length;c<p;c+=1)o=g[c],this.cell(t,e,v[o],S,f[o],a+2,o.align);return this.lastCellPos=F,this.table_x=t,this.table_y=e,this},_.calculateLineHeight=function(t,e,n){for(var r,i=0,o=0;o<t.length;o++){n[r=t[o]]=this.splitTextToSize(String(n[r]),e[r]-3);var a=this.internal.getLineHeight()*n[r].length+3;i<a&&(i=a)}return i},_.setTableHeaderRow=function(t){this.tableHeaderRow=t},_.printHeaderRow=function(t,e){if(!this.tableHeaderRow)throw"Property tableHeaderRow does not exist.";var n,r,i,o;if(this.printingHeaderRow=!0,void 0!==l){var a=l(this,P);p(a[0],a[1],a[2],a[3],-1)}this.setFontStyle("bold");var s=[];for(i=0,o=this.tableHeaderRow.length;i<o;i+=1)this.setFillColor(200,200,200),n=this.tableHeaderRow[i],e&&(this.margins.top=13,n[1]=this.margins&&this.margins.top||0,s.push(n)),r=[].concat(n),this.cell.apply(this,r.concat(t));0<s.length&&this.setTableHeaderRow(s),this.setFontStyle("normal"),this.printingHeaderRow=!1},
/**
   * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
   *
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
function(t,e){var l,i,o,h,u,c=function(t){return t=t||{},this.isStrokeTransparent=t.isStrokeTransparent||!1,this.strokeOpacity=t.strokeOpacity||1,this.strokeStyle=t.strokeStyle||"#000000",this.fillStyle=t.fillStyle||"#000000",this.isFillTransparent=t.isFillTransparent||!1,this.fillOpacity=t.fillOpacity||1,this.font=t.font||"10px sans-serif",this.textBaseline=t.textBaseline||"alphabetic",this.textAlign=t.textAlign||"left",this.lineWidth=t.lineWidth||1,this.lineJoin=t.lineJoin||"miter",this.lineCap=t.lineCap||"butt",this.path=t.path||[],this.transform=void 0!==t.transform?t.transform.clone():new M,this.globalCompositeOperation=t.globalCompositeOperation||"normal",this.globalAlpha=t.globalAlpha||1,this.clip_path=t.clip_path||[],this.currentPoint=t.currentPoint||new j,this.miterLimit=t.miterLimit||10,this.lastPoint=t.lastPoint||new j,this.ignoreClearRect="boolean"!=typeof t.ignoreClearRect||t.ignoreClearRect,this};t.events.push(["initialized",function(){this.context2d=new n(this),l=this.internal.f2,this.internal.f3,i=this.internal.getCoordinateString,o=this.internal.getVerticalCoordinateString,h=this.internal.getHorizontalCoordinate,u=this.internal.getVerticalCoordinate}]);var n=function(t){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}}),Object.defineProperty(this,"pdf",{get:function(){return t}});var e=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return e},set:function(t){e=Boolean(t)}});var n=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return n},set:function(t){n=Boolean(t)}});var r=0;Object.defineProperty(this,"posX",{get:function(){return r},set:function(t){isNaN(t)||(r=t)}});var i=0;Object.defineProperty(this,"posY",{get:function(){return i},set:function(t){isNaN(t)||(i=t)}});var o=!1;Object.defineProperty(this,"autoPaging",{get:function(){return o},set:function(t){o=Boolean(t)}});var a=0;Object.defineProperty(this,"lastBreak",{get:function(){return a},set:function(t){a=t}});var s=[];Object.defineProperty(this,"pageBreaks",{get:function(){return s},set:function(t){s=t}});var l=new c;Object.defineProperty(this,"ctx",{get:function(){return l},set:function(t){t instanceof c&&(l=t)}}),Object.defineProperty(this,"path",{get:function(){return l.path},set:function(t){l.path=t}});var h=[];Object.defineProperty(this,"ctxStack",{get:function(){return h},set:function(t){h=t}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(t){var e;e=f(t),this.ctx.fillStyle=e.style,this.ctx.isFillTransparent=0===e.a,this.ctx.fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(t){var e=f(t);this.ctx.strokeStyle=e.style,this.ctx.isStrokeTransparent=0===e.a,this.ctx.strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(t){-1!==["butt","round","square"].indexOf(t)&&(this.ctx.lineCap=t,this.pdf.setLineCap(t))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(t){isNaN(t)||(this.ctx.lineWidth=t,this.pdf.setLineWidth(t))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(t){-1!==["bevel","round","miter"].indexOf(t)&&(this.ctx.lineJoin=t,this.pdf.setLineJoin(t))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(t){isNaN(t)||(this.ctx.miterLimit=t,this.pdf.setMiterLimit(t))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(t){this.ctx.textBaseline=t}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(t){-1!==["right","end","center","left","start"].indexOf(t)&&(this.ctx.textAlign=t)}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(t){var e;if(this.ctx.font=t,null!==(e=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))){var n=e[1],r=(e[2],e[3]),i=e[4],o=e[5],a=e[6];i="px"===o?Math.floor(parseFloat(i)):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)),this.pdf.setFontSize(i);var s="";("bold"===r||700<=parseInt(r,10)||"bold"===n)&&(s="bold"),"italic"===n&&(s+="italic"),0===s.length&&(s="normal");for(var l="",h=a.toLowerCase().replace(/"|'/g,"").split(/\s*,\s*/),u={arial:"Helvetica",verdana:"Helvetica",helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",courier:"Courier",times:"Times",cursive:"Times",fantasy:"Times",serif:"Times"},c=0;c<h.length;c++){if(void 0!==this.pdf.internal.getFont(h[c],s,{noFallback:!0,disableWarning:!0})){l=h[c];break}if("bolditalic"===s&&void 0!==this.pdf.internal.getFont(h[c],"bold",{noFallback:!0,disableWarning:!0}))l=h[c],s="bold";else if(void 0!==this.pdf.internal.getFont(h[c],"normal",{noFallback:!0,disableWarning:!0})){l=h[c],s="normal";break}}if(""===l)for(c=0;c<h.length;c++)if(u[h[c]]){l=u[h[c]];break}l=""===l?"Times":l,this.pdf.setFont(l,s)}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(t){this.ctx.globalCompositeOperation=t}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(t){this.ctx.globalAlpha=t}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(t){this.ctx.ignoreClearRect=Boolean(t)}})};n.prototype.fill=function(){r.call(this,"fill",!1)},n.prototype.stroke=function(){r.call(this,"stroke",!1)},n.prototype.beginPath=function(){this.path=[{type:"begin"}]},n.prototype.moveTo=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var n=this.ctx.transform.applyToPoint(new j(t,e));this.path.push({type:"mt",x:n.x,y:n.y}),this.ctx.lastPoint=new j(t,e)},n.prototype.closePath=function(){var t=new j(0,0),e=0;for(e=this.path.length-1;-1!==e;e--)if("begin"===this.path[e].type&&"object"===se(this.path[e+1])&&"number"==typeof this.path[e+1].x){t=new j(this.path[e+1].x,this.path[e+1].y),this.path.push({type:"lt",x:t.x,y:t.y});break}"object"===se(this.path[e+2])&&"number"==typeof this.path[e+2].x&&this.path.push(JSON.parse(JSON.stringify(this.path[e+2]))),this.path.push({type:"close"}),this.ctx.lastPoint=new j(t.x,t.y)},n.prototype.lineTo=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var n=this.ctx.transform.applyToPoint(new j(t,e));this.path.push({type:"lt",x:n.x,y:n.y}),this.ctx.lastPoint=new j(n.x,n.y)},n.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),r.call(this,null,!0)},n.prototype.quadraticCurveTo=function(t,e,n,r){if(isNaN(n)||isNaN(r)||isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var i=this.ctx.transform.applyToPoint(new j(n,r)),o=this.ctx.transform.applyToPoint(new j(t,e));this.path.push({type:"qct",x1:o.x,y1:o.y,x:i.x,y:i.y}),this.ctx.lastPoint=new j(i.x,i.y)},n.prototype.bezierCurveTo=function(t,e,n,r,i,o){if(isNaN(i)||isNaN(o)||isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var a=this.ctx.transform.applyToPoint(new j(i,o)),s=this.ctx.transform.applyToPoint(new j(t,e)),l=this.ctx.transform.applyToPoint(new j(n,r));this.path.push({type:"bct",x1:s.x,y1:s.y,x2:l.x,y2:l.y,x:a.x,y:a.y}),this.ctx.lastPoint=new j(a.x,a.y)},n.prototype.arc=function(t,e,n,r,i,o){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i))throw console.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(o=Boolean(o),!this.ctx.transform.isIdentity){var a=this.ctx.transform.applyToPoint(new j(t,e));t=a.x,e=a.y;var s=this.ctx.transform.applyToPoint(new j(0,n)),l=this.ctx.transform.applyToPoint(new j(0,0));n=Math.sqrt(Math.pow(s.x-l.x,2)+Math.pow(s.y-l.y,2))}Math.abs(i-r)>=2*Math.PI&&(r=0,i=2*Math.PI),this.path.push({type:"arc",x:t,y:e,radius:n,startAngle:r,endAngle:i,counterclockwise:o})},n.prototype.arcTo=function(t,e,n,r,i){throw new Error("arcTo not implemented.")},n.prototype.rect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(t,e),this.lineTo(t+n,e),this.lineTo(t+n,e+r),this.lineTo(t,e+r),this.lineTo(t,e),this.lineTo(t+n,e),this.lineTo(t,e)},n.prototype.fillRect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!N.call(this)){var i={};"butt"!==this.lineCap&&(i.lineCap=this.lineCap,this.lineCap="butt"),"miter"!==this.lineJoin&&(i.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(t,e,n,r),this.fill(),i.hasOwnProperty("lineCap")&&(this.lineCap=i.lineCap),i.hasOwnProperty("lineJoin")&&(this.lineJoin=i.lineJoin)}},n.prototype.strokeRect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");L.call(this)||(this.beginPath(),this.rect(t,e,n,r),this.stroke())},n.prototype.clearRect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(t,e,n,r))},n.prototype.save=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,n=0;n<this.pdf.internal.getNumberOfPages();n++)this.pdf.setPage(n+1),this.pdf.internal.out("q");if(this.pdf.setPage(e),t){this.ctx.fontSize=this.pdf.internal.getFontSize();var r=new c(this.ctx);this.ctxStack.push(this.ctx),this.ctx=r}},n.prototype.restore=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,n=0;n<this.pdf.internal.getNumberOfPages();n++)this.pdf.setPage(n+1),this.pdf.internal.out("Q");this.pdf.setPage(e),t&&0!==this.ctxStack.length&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin)},n.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var f=function(t){var e,n,r,i;if(!0===t.isCanvasGradient&&(t=t.getColor()),!t)return{r:0,g:0,b:0,a:0,style:t};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))i=r=n=e=0;else{var o=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);if(null!==o)e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3]),i=1;else if(null!==(o=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/.exec(t)))e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3]),i=parseFloat(o[4]);else{if(i=1,"string"==typeof t&&"#"!==t.charAt(0)){var a=new RGBColor(t);t=a.ok?a.toHex():"#000000"}4===t.length?(e=t.substring(1,2),e+=e,n=t.substring(2,3),n+=n,r=t.substring(3,4),r+=r):(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7)),e=parseInt(e,16),n=parseInt(n,16),r=parseInt(r,16)}}return{r:e,g:n,b:r,a:i,style:t}},N=function(){return this.ctx.isFillTransparent||0==this.globalAlpha},L=function(){return Boolean(this.ctx.isStrokeTransparent||0==this.globalAlpha)};n.prototype.fillText=function(t,e,n,r){if(isNaN(e)||isNaN(n)||"string"!=typeof t)throw console.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(r=isNaN(r)?void 0:r,!N.call(this)){n=a.call(this,n);var i=B(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;s.call(this,{text:t,x:e,y:n,scale:o,angle:i,align:this.textAlign,maxWidth:r})}},n.prototype.strokeText=function(t,e,n,r){if(isNaN(e)||isNaN(n)||"string"!=typeof t)throw console.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!L.call(this)){r=isNaN(r)?void 0:r,n=a.call(this,n);var i=B(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;s.call(this,{text:t,x:e,y:n,scale:o,renderingMode:"stroke",angle:i,align:this.textAlign,maxWidth:r})}},n.prototype.measureText=function(t){if("string"!=typeof t)throw console.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var e=this.pdf,n=this.pdf.internal.scaleFactor,r=e.internal.getFontSize(),i=e.getStringUnitWidth(t)*r/e.internal.scaleFactor;return new function(t){var e=(t=t||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return e}}),this}({width:i*=Math.round(96*n/72*1e4)/1e4})},n.prototype.scale=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var n=new M(t,0,0,e,0,0);this.ctx.transform=this.ctx.transform.multiply(n)},n.prototype.rotate=function(t){if(isNaN(t))throw console.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var e=new M(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);this.ctx.transform=this.ctx.transform.multiply(e)},n.prototype.translate=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var n=new M(1,0,0,1,t,e);this.ctx.transform=this.ctx.transform.multiply(n)},n.prototype.transform=function(t,e,n,r,i,o){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(o))throw console.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var a=new M(t,e,n,r,i,o);this.ctx.transform=this.ctx.transform.multiply(a)},n.prototype.setTransform=function(t,e,n,r,i,o){t=isNaN(t)?1:t,e=isNaN(e)?0:e,n=isNaN(n)?0:n,r=isNaN(r)?1:r,i=isNaN(i)?0:i,o=isNaN(o)?0:o,this.ctx.transform=new M(t,e,n,r,i,o)},n.prototype.drawImage=function(t,e,n,r,i,o,a,s,l){var h=this.pdf.getImageProperties(t),u=1,c=1,f=1,p=1;void 0!==r&&void 0!==s&&(f=s/r,p=l/i,u=h.width/r*s/r,c=h.height/i*l/i),void 0===o&&(o=e,a=n,n=e=0),void 0!==r&&void 0===s&&(s=r,l=i),void 0===r&&void 0===s&&(s=h.width,l=h.height);var d=this.ctx.transform.decompose(),g=B(d.rotate.shx);d.scale.sx,d.scale.sy;for(var m,y=new M,v=((y=(y=(y=y.multiply(d.translate)).multiply(d.skew)).multiply(d.scale)).applyToPoint(new j(s,l)),y.applyToRectangle(new E(o-e*f,a-n*p,r*u,i*c))),w=F.call(this,v),b=[],x=0;x<w.length;x+=1)-1===b.indexOf(w[x])&&b.push(w[x]);if(b.sort(),this.autoPaging)for(var N=b[0],L=b[b.length-1],A=N;A<L+1;A++){if(this.pdf.setPage(A),0!==this.ctx.clip_path.length){var S=this.path;m=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=P(m,this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY),k.call(this,"fill",!0),this.path=S}var _=JSON.parse(JSON.stringify(v));_=P([_],this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY)[0],this.pdf.addImage(t,"jpg",_.x,_.y,_.w,_.h,null,null,g)}else this.pdf.addImage(t,"jpg",v.x,v.y,v.w,v.h,null,null,g)};var F=function(t,e,n){var r=[];switch(e=e||this.pdf.internal.pageSize.width,n=n||this.pdf.internal.pageSize.height,t.type){default:case"mt":case"lt":r.push(Math.floor((t.y+this.posY)/n)+1);break;case"arc":r.push(Math.floor((t.y+this.posY-t.radius)/n)+1),r.push(Math.floor((t.y+this.posY+t.radius)/n)+1);break;case"qct":var i=w(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x,t.y);r.push(Math.floor(i.y/n)+1),r.push(Math.floor((i.y+i.h)/n)+1);break;case"bct":var o=b(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x2,t.y2,t.x,t.y);r.push(Math.floor(o.y/n)+1),r.push(Math.floor((o.y+o.h)/n)+1);break;case"rect":r.push(Math.floor((t.y+this.posY)/n)+1),r.push(Math.floor((t.y+t.h+this.posY)/n)+1)}for(var a=0;a<r.length;a+=1)for(;this.pdf.internal.getNumberOfPages()<r[a];)v.call(this);return r},v=function(){var t=this.fillStyle,e=this.strokeStyle,n=this.font,r=this.lineCap,i=this.lineWidth,o=this.lineJoin;this.pdf.addPage(),this.fillStyle=t,this.strokeStyle=e,this.font=n,this.lineCap=r,this.lineWidth=i,this.lineJoin=o},P=function(t,e,n){for(var r=0;r<t.length;r++)switch(t[r].type){case"bct":t[r].x2+=e,t[r].y2+=n;case"qct":t[r].x1+=e,t[r].y1+=n;case"mt":case"lt":case"arc":default:t[r].x+=e,t[r].y+=n}return t},r=function(t,e){for(var n,r,i=this.fillStyle,o=this.strokeStyle,a=(this.font,this.lineCap),s=this.lineWidth,l=this.lineJoin,h=JSON.parse(JSON.stringify(this.path)),u=JSON.parse(JSON.stringify(this.path)),c=[],f=0;f<u.length;f++)if(void 0!==u[f].x)for(var p=F.call(this,u[f]),d=0;d<p.length;d+=1)-1===c.indexOf(p[d])&&c.push(p[d]);for(f=0;f<c.length;f++)for(;this.pdf.internal.getNumberOfPages()<c[f];)v.call(this);if(c.sort(),this.autoPaging){var g=c[0],m=c[c.length-1];for(f=g;f<m+1;f++){if(this.pdf.setPage(f),this.fillStyle=i,this.strokeStyle=o,this.lineCap=a,this.lineWidth=s,this.lineJoin=l,0!==this.ctx.clip_path.length){var y=this.path;n=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=P(n,this.posX,-1*this.pdf.internal.pageSize.height*(f-1)+this.posY),k.call(this,t,!0),this.path=y}r=JSON.parse(JSON.stringify(h)),this.path=P(r,this.posX,-1*this.pdf.internal.pageSize.height*(f-1)+this.posY),!1!==e&&0!==f||k.call(this,t,e)}}else k.call(this,t,e);this.path=h},k=function(t,e){if(("stroke"!==t||e||!L.call(this))&&("stroke"===t||e||!N.call(this))){var n=[];this.ctx.globalAlpha;this.ctx.fillOpacity<1&&this.ctx.fillOpacity;for(var r,i=this.path,o=0;o<i.length;o++){var a=i[o];switch(a.type){case"begin":n.push({begin:!0});break;case"close":n.push({close:!0});break;case"mt":n.push({start:a,deltas:[],abs:[]});break;case"lt":var s=n.length;if(!isNaN(i[o-1].x)){var l=[a.x-i[o-1].x,a.y-i[o-1].y];if(0<s)for(;0<=s;s--)if(!0!==n[s-1].close&&!0!==n[s-1].begin){n[s-1].deltas.push(l),n[s-1].abs.push(a);break}}break;case"bct":l=[a.x1-i[o-1].x,a.y1-i[o-1].y,a.x2-i[o-1].x,a.y2-i[o-1].y,a.x-i[o-1].x,a.y-i[o-1].y];n[n.length-1].deltas.push(l);break;case"qct":var h=i[o-1].x+2/3*(a.x1-i[o-1].x),u=i[o-1].y+2/3*(a.y1-i[o-1].y),c=a.x+2/3*(a.x1-a.x),f=a.y+2/3*(a.y1-a.y),p=a.x,d=a.y;l=[h-i[o-1].x,u-i[o-1].y,c-i[o-1].x,f-i[o-1].y,p-i[o-1].x,d-i[o-1].y];n[n.length-1].deltas.push(l);break;case"arc":n.push({deltas:[],abs:[],arc:!0}),Array.isArray(n[n.length-1].abs)&&n[n.length-1].abs.push(a)}}r=e?null:"stroke"===t?"stroke":"fill";for(o=0;o<n.length;o++){if(n[o].arc)for(var g=n[o].abs,m=0;m<g.length;m++){var y=g[m];if(void 0!==y.startAngle){var v=B(y.startAngle),w=B(y.endAngle),b=y.x,x=y.y;A.call(this,b,x,y.radius,v,w,y.counterclockwise,r,e)}else I.call(this,y.x,y.y)}if(!n[o].arc&&!0!==n[o].close&&!0!==n[o].begin){b=n[o].start.x,x=n[o].start.y;C.call(this,n[o].deltas,b,x,null,null)}}r&&S.call(this,r),e&&_.call(this)}},a=function(t){var e=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,n=e*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return t-n;case"top":return t+e-n;case"hanging":return t+e-2*n;case"middle":return t+e/2-n;case"ideographic":return t;case"alphabetic":default:return t}};n.prototype.createLinearGradient=function(){var t=function(){};return t.colorStops=[],t.addColorStop=function(t,e){this.colorStops.push([t,e])},t.getColor=function(){return 0===this.colorStops.length?"#000000":this.colorStops[0][1]},t.isCanvasGradient=!0,t},n.prototype.createPattern=function(){return this.createLinearGradient()},n.prototype.createRadialGradient=function(){return this.createLinearGradient()};var A=function(t,e,n,r,i,o,a,s){this.pdf.internal.scaleFactor;for(var l=y(r),h=y(i),u=g.call(this,n,l,h,o),c=0;c<u.length;c++){var f=u[c];0===c&&p.call(this,f.x1+t,f.y1+e),d.call(this,t,e,f.x2,f.y2,f.x3,f.y3,f.x4,f.y4)}s?_.call(this):S.call(this,a)},S=function(t){switch(t){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},_=function(){this.pdf.clip()},p=function(t,e){this.pdf.internal.out(i(t)+" "+o(e)+" m")},s=function(t){var e;switch(t.align){case"right":case"end":e="right";break;case"center":e="center";break;case"left":case"start":default:e="left"}var n=this.ctx.transform.applyToPoint(new j(t.x,t.y)),r=this.ctx.transform.decompose(),i=new M;i=(i=(i=i.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);for(var o,a=this.pdf.getTextDimensions(t.text),s=this.ctx.transform.applyToRectangle(new E(t.x,t.y,a.w,a.h)),l=i.applyToRectangle(new E(t.x,t.y-a.h,a.w,a.h)),h=F.call(this,l),u=[],c=0;c<h.length;c+=1)-1===u.indexOf(h[c])&&u.push(h[c]);if(u.sort(),!0===this.autoPaging)for(var f=u[0],p=u[u.length-1],d=f;d<p+1;d++){if(this.pdf.setPage(d),0!==this.ctx.clip_path.length){var g=this.path;o=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=P(o,this.posX,-1*this.pdf.internal.pageSize.height*(d-1)+this.posY),k.call(this,"fill",!0),this.path=g}var m=JSON.parse(JSON.stringify(s));if(m=P([m],this.posX,-1*this.pdf.internal.pageSize.height*(d-1)+this.posY)[0],.01<=t.scale){var y=this.pdf.internal.getFontSize();this.pdf.setFontSize(y*t.scale)}this.pdf.text(t.text,m.x,m.y,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),.01<=t.scale&&this.pdf.setFontSize(y)}else{if(.01<=t.scale){y=this.pdf.internal.getFontSize();this.pdf.setFontSize(y*t.scale)}this.pdf.text(t.text,n.x+this.posX,n.y+this.posY,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),.01<=t.scale&&this.pdf.setFontSize(y)}},I=function(t,e,n,r){n=n||0,r=r||0,this.pdf.internal.out(i(t+n)+" "+o(e+r)+" l")},C=function(t,e,n){return this.pdf.lines(t,e,n,null,null)},d=function(t,e,n,r,i,o,a,s){this.pdf.internal.out([l(h(n+t)),l(u(r+e)),l(h(i+t)),l(u(o+e)),l(h(a+t)),l(u(s+e)),"c"].join(" "))},g=function(t,e,n,r){var i=2*Math.PI,o=e;(o<i||i<o)&&(o%=i);var a=n;(a<i||i<a)&&(a%=i);for(var s=[],l=Math.PI/2,h=r?-1:1,u=e,c=Math.min(i,Math.abs(a-o));1e-5<c;){var f=u+h*Math.min(c,l);s.push(m.call(this,t,u,f)),c-=Math.abs(f-u),u=f}return s},m=function(t,e,n){var r=(n-e)/2,i=t*Math.cos(r),o=t*Math.sin(r),a=i,s=-o,l=a*a+s*s,h=l+a*i+s*o,u=4/3*(Math.sqrt(2*l*h)-h)/(a*o-s*i),c=a-u*s,f=s+u*a,p=c,d=-f,g=r+e,m=Math.cos(g),y=Math.sin(g);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:c*m-f*y,y2:c*y+f*m,x3:p*m-d*y,y3:p*y+d*m,x4:t*Math.cos(n),y4:t*Math.sin(n)}},B=function(t){return 180*t/Math.PI},y=function(t){return t*Math.PI/180},w=function(t,e,n,r,i,o){var a=t+.5*(n-t),s=e+.5*(r-e),l=i+.5*(n-i),h=o+.5*(r-o),u=Math.min(t,i,a,l),c=Math.max(t,i,a,l),f=Math.min(e,o,s,h),p=Math.max(e,o,s,h);return new E(u,f,c-u,p-f)},b=function(t,e,n,r,i,o,a,s){for(var l,h,u,c,f,p,d,g,m,y,v,w,b,x=n-t,N=r-e,L=i-n,A=o-r,S=a-i,_=s-o,F=0;F<41;F++)g=(p=(h=t+(l=F/40)*x)+l*((c=n+l*L)-h))+l*(c+l*(i+l*S-c)-p),m=(d=(u=e+l*N)+l*((f=r+l*A)-u))+l*(f+l*(o+l*_-f)-d),b=0==F?(w=y=g,v=m):(y=Math.min(y,g),v=Math.min(v,m),w=Math.max(w,g),Math.max(b,m));return new E(Math.round(y),Math.round(v),Math.round(w-y),Math.round(b-v))},j=function(t,e){var n=t||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return n},set:function(t){isNaN(t)||(n=parseFloat(t))}});var r=e||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return r},set:function(t){isNaN(t)||(r=parseFloat(t))}});var i="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return i},set:function(t){i=t.toString()}}),this},E=function(t,e,n,r){j.call(this,t,e),this.type="rect";var i=n||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return i},set:function(t){isNaN(t)||(i=parseFloat(t))}});var o=r||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return o},set:function(t){isNaN(t)||(o=parseFloat(t))}}),this},M=function(t,e,n,r,i,o){var a=[];return Object.defineProperty(this,"sx",{get:function(){return a[0]},set:function(t){a[0]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"shy",{get:function(){return a[1]},set:function(t){a[1]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"shx",{get:function(){return a[2]},set:function(t){a[2]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"sy",{get:function(){return a[3]},set:function(t){a[3]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"tx",{get:function(){return a[4]},set:function(t){a[4]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"ty",{get:function(){return a[5]},set:function(t){a[5]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(this,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(this,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(this,"isIdentity",{get:function(){return 1===this.sx&&(0===this.shy&&(0===this.shx&&(1===this.sy&&(0===this.tx&&0===this.ty))))}}),this.sx=isNaN(t)?1:t,this.shy=isNaN(e)?0:e,this.shx=isNaN(n)?0:n,this.sy=isNaN(r)?1:r,this.tx=isNaN(i)?0:i,this.ty=isNaN(o)?0:o,this};M.prototype.multiply=function(t){var e=t.sx*this.sx+t.shy*this.shx,n=t.sx*this.shy+t.shy*this.sy,r=t.shx*this.sx+t.sy*this.shx,i=t.shx*this.shy+t.sy*this.sy,o=t.tx*this.sx+t.ty*this.shx+this.tx,a=t.tx*this.shy+t.ty*this.sy+this.ty;return new M(e,n,r,i,o,a)},M.prototype.decompose=function(){var t=this.sx,e=this.shy,n=this.shx,r=this.sy,i=this.tx,o=this.ty,a=Math.sqrt(t*t+e*e),s=(t/=a)*n+(e/=a)*r;n-=t*s,r-=e*s;var l=Math.sqrt(n*n+r*r);return s/=l,t*(r/=l)<e*(n/=l)&&(t=-t,e=-e,s=-s,a=-a),{scale:new M(a,0,0,l,0,0),translate:new M(1,0,0,1,i,o),rotate:new M(t,e,-e,t,0,0),skew:new M(1,0,s,1,0,0)}},M.prototype.applyToPoint=function(t){var e=t.x*this.sx+t.y*this.shx+this.tx,n=t.x*this.shy+t.y*this.sy+this.ty;return new j(e,n)},M.prototype.applyToRectangle=function(t){var e=this.applyToPoint(t),n=this.applyToPoint(new j(t.x+t.w,t.y+t.h));return new E(e.x,e.y,n.x-e.x,n.y-e.y)},M.prototype.clone=function(){var t=this.sx,e=this.shy,n=this.shx,r=this.sy,i=this.tx,o=this.ty;return new M(t,e,n,r,i,o)}}(lt.API,"undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")()),
/**
   * jsPDF filters PlugIn
   * Copyright (c) 2014 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
a=lt.API,o=function(t){var r,e,n,i,o,a,s,l,h,u;for(/[^\x00-\xFF]/.test(t),e=[],n=0,i=(t+=r="\0\0\0\0".slice(t.length%4||4)).length;n<i;n+=4)0!==(o=(t.charCodeAt(n)<<24)+(t.charCodeAt(n+1)<<16)+(t.charCodeAt(n+2)<<8)+t.charCodeAt(n+3))?(a=(o=((o=((o=((o=(o-(u=o%85))/85)-(h=o%85))/85)-(l=o%85))/85)-(s=o%85))/85)%85,e.push(a+33,s+33,l+33,h+33,u+33)):e.push(122);return function(t,e){for(var n=r.length;0<n;n--)t.pop()}(e),String.fromCharCode.apply(String,e)+"~>"},s=function(t){var r,e,n,i,o,a=String,s="length",l="charCodeAt",h="slice",u="replace";for(t[h](-2),t=t[h](0,-2)[u](/\s/g,"")[u]("z","!!!!!"),n=[],i=0,o=(t+=r="uuuuu"[h](t[s]%5||5))[s];i<o;i+=5)e=52200625*(t[l](i)-33)+614125*(t[l](i+1)-33)+7225*(t[l](i+2)-33)+85*(t[l](i+3)-33)+(t[l](i+4)-33),n.push(255&e>>24,255&e>>16,255&e>>8,255&e);return function(t,e){for(var n=r[s];0<n;n--)t.pop()}(n),a.fromCharCode.apply(a,n)},h=function(t){for(var e="",n=0;n<t.length;n+=1)e+=("0"+t.charCodeAt(n).toString(16)).slice(-2);return e+=">"},u=function(t){var e=new RegExp(/^([0-9A-Fa-f]{2})+$/);if(-1!==(t=t.replace(/\s/g,"")).indexOf(">")&&(t=t.substr(0,t.indexOf(">"))),t.length%2&&(t+="0"),!1===e.test(t))return"";for(var n="",r=0;r<t.length;r+=2)n+=String.fromCharCode("0x"+(t[r]+t[r+1]));return n},c=function(t,e){e=Object.assign({predictor:1,colors:1,bitsPerComponent:8,columns:1},e);for(var n,r,i=[],o=t.length;o--;)i[o]=t.charCodeAt(o);return n=a.adler32cs.from(t),(r=new Deflater(6)).append(new Uint8Array(i)),t=r.flush(),(i=new Uint8Array(t.length+6)).set(new Uint8Array([120,156])),i.set(t,2),i.set(new Uint8Array([255&n,n>>8&255,n>>16&255,n>>24&255]),t.length+2),t=String.fromCharCode.apply(null,i)},a.processDataByFilters=function(t,e){var n=0,r=t||"",i=[];for("string"==typeof(e=e||[])&&(e=[e]),n=0;n<e.length;n+=1)switch(e[n]){case"ASCII85Decode":case"/ASCII85Decode":r=s(r),i.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":r=o(r),i.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":r=u(r),i.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":r=h(r),i.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":r=c(r),i.push("/FlateDecode");break;default:throw'The filter: "'+e[n]+'" is not implemented'}return{data:r,reverseChain:i.reverse().join(" ")}},(
/**
   * jsPDF fileloading PlugIn
   * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
r=lt.API).loadFile=function(t,e,n){var r;e=e||!0,n=n||function(){};try{r=function(t,e,n){var r=new XMLHttpRequest,i=[],o=0,a=function(t){var e=t.length,n=String.fromCharCode;for(o=0;o<e;o+=1)i.push(n(255&t.charCodeAt(o)));return i.join("")};if(r.open("GET",t,!e),r.overrideMimeType("text/plain; charset=x-user-defined"),!1===e&&(r.onload=function(){return a(this.responseText)}),r.send(null),200===r.status)return e?a(r.responseText):void 0;console.warn('Unable to load file "'+t+'"')}(t,e)}catch(t){r=void 0}return r},r.loadImageFile=r.loadFile,
/**
   * Copyright (c) 2018 Erik Koopmans
   * Released under the MIT License.
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
i=lt.API,f="undefined"!=typeof window&&window||"undefined"!=typeof global&&global,g=function(t){var e=se(t);return"undefined"===e?"undefined":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?"function":t&&t.constructor===Array?"array":t&&1===t.nodeType?"element":"object"===e?"object":"unknown"},m=function(t,e){var n=document.createElement(t);if(e.className&&(n.className=e.className),e.innerHTML){n.innerHTML=e.innerHTML;for(var r=n.getElementsByTagName("script"),i=r.length;0<i--;null)r[i].parentNode.removeChild(r[i])}for(var o in e.style)n.style[o]=e.style[o];return n},(((y=function t(e){var n=Object.assign(t.convert(Promise.resolve()),JSON.parse(JSON.stringify(t.template))),r=t.convert(Promise.resolve(),n);return r=(r=r.setProgress(1,t,1,[t])).set(e)}).prototype=Object.create(Promise.prototype)).constructor=y).convert=function(t,e){return t.__proto__=e||y.prototype,t},y.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{}}},y.prototype.from=function(t,e){return this.then(function(){switch(e=e||function(t){switch(g(t)){case"string":return"string";case"element":return"canvas"===t.nodeName.toLowerCase?"canvas":"element";default:return"unknown"}}(t)){case"string":return this.set({src:m("div",{innerHTML:t})});case"element":return this.set({src:t});case"canvas":return this.set({canvas:t});case"img":return this.set({img:t});default:return this.error("Unknown source type.")}})},y.prototype.to=function(t){switch(t){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},y.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var t={position:"relative",display:"inline-block",width:Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:"white"},e=function t(e,n){for(var r=3===e.nodeType?document.createTextNode(e.nodeValue):e.cloneNode(!1),i=e.firstChild;i;i=i.nextSibling)!0!==n&&1===i.nodeType&&"SCRIPT"===i.nodeName||r.appendChild(t(i,n));return 1===e.nodeType&&("CANVAS"===e.nodeName?(r.width=e.width,r.height=e.height,r.getContext("2d").drawImage(e,0,0)):"TEXTAREA"!==e.nodeName&&"SELECT"!==e.nodeName||(r.value=e.value),r.addEventListener("load",function(){r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft},!0)),r}(this.prop.src,this.opt.html2canvas.javascriptEnabled);"BODY"===e.tagName&&(t.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=m("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=m("div",{className:"html2pdf__container",style:t}),this.prop.container.appendChild(e),this.prop.container.firstChild.appendChild(m("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},y.prototype.toCanvas=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(function(){var t=Object.assign({},this.opt.html2canvas);if(delete t.onrendered,this.isHtml2CanvasLoaded())return html2canvas(this.prop.container,t)}).then(function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)})},y.prototype.toContext2d=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(function(){var t=this.opt.jsPDF,e=Object.assign({async:!0,allowTaint:!0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete e.onrendered,t.context2d.autoPaging=!0,t.context2d.posX=this.opt.x,t.context2d.posY=this.opt.y,e.windowHeight=e.windowHeight||0,e.windowHeight=0==e.windowHeight?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):e.windowHeight,this.isHtml2CanvasLoaded())return html2canvas(this.prop.container,e)}).then(function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)})},y.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var t=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=t})},y.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},y.prototype.output=function(t,e,n){return"img"===(n=n||"pdf").toLowerCase()||"image"===n.toLowerCase()?this.outputImg(t,e):this.outputPdf(t,e)},y.prototype.outputPdf=function(t,e){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(t,e)})},y.prototype.outputImg=function(t,e){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(t){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+t+'" is not supported.'}})},y.prototype.isHtml2CanvasLoaded=function(){var t=void 0!==f.html2canvas;return t||console.error("html2canvas not loaded."),t},y.prototype.save=function(t){if(this.isHtml2CanvasLoaded())return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(t?{filename:t}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},y.prototype.doCallback=function(t){if(this.isHtml2CanvasLoaded())return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},y.prototype.set=function(e){if("object"!==g(e))return this;var t=Object.keys(e||{}).map(function(t){if(t in y.template.prop)return function(){this.prop[t]=e[t]};switch(t){case"margin":return this.setMargin.bind(this,e.margin);case"jsPDF":return function(){return this.opt.jsPDF=e.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,e.pageSize);default:return function(){this.opt[t]=e[t]}}},this);return this.then(function(){return this.thenList(t)})},y.prototype.get=function(e,n){return this.then(function(){var t=e in y.template.prop?this.prop[e]:this.opt[e];return n?n(t):t})},y.prototype.setMargin=function(t){return this.then(function(){switch(g(t)){case"number":t=[t,t,t,t];case"array":if(2===t.length&&(t=[t[0],t[1],t[0],t[1]]),4===t.length)break;default:return this.error("Invalid margin array.")}this.opt.margin=t}).then(this.setPageSize)},y.prototype.setPageSize=function(t){function e(t,e){return Math.floor(t*e/72*96)}return this.then(function(){(t=t||lt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(t.inner={width:t.width-this.opt.margin[1]-this.opt.margin[3],height:t.height-this.opt.margin[0]-this.opt.margin[2]},t.inner.px={width:e(t.inner.width,t.k),height:e(t.inner.height,t.k)},t.inner.ratio=t.inner.height/t.inner.width),this.prop.pageSize=t})},y.prototype.setProgress=function(t,e,n,r){return null!=t&&(this.progress.val=t),null!=e&&(this.progress.state=e),null!=n&&(this.progress.n=n),null!=r&&(this.progress.stack=r),this.progress.ratio=this.progress.val/this.progress.state,this},y.prototype.updateProgress=function(t,e,n,r){return this.setProgress(t?this.progress.val+t:null,e||null,n?this.progress.n+n:null,r?this.progress.stack.concat(r):null)},y.prototype.then=function(t,e){var n=this;return this.thenCore(t,e,function(e,t){return n.updateProgress(null,null,1,[e]),Promise.prototype.then.call(this,function(t){return n.updateProgress(null,e),t}).then(e,t).then(function(t){return n.updateProgress(1),t})})},y.prototype.thenCore=function(t,e,n){n=n||Promise.prototype.then;var r=this;t&&(t=t.bind(r)),e&&(e=e.bind(r));var i=-1!==Promise.toString().indexOf("[native code]")&&"Promise"===Promise.name?r:y.convert(Object.assign({},r),Promise.prototype),o=n.call(i,t,e);return y.convert(o,r.__proto__)},y.prototype.thenExternal=function(t,e){return Promise.prototype.then.call(this,t,e)},y.prototype.thenList=function(t){var e=this;return t.forEach(function(t){e=e.thenCore(t)}),e},y.prototype.catch=function(t){t&&(t=t.bind(this));var e=Promise.prototype.catch.call(this,t);return y.convert(e,this)},y.prototype.catchExternal=function(t){return Promise.prototype.catch.call(this,t)},y.prototype.error=function(t){return this.then(function(){throw new Error(t)})},y.prototype.using=y.prototype.set,y.prototype.saveAs=y.prototype.save,y.prototype.export=y.prototype.output,y.prototype.run=y.prototype.then,lt.getPageSize=function(t,e,n){if("object"===se(t)){var r=t;t=r.orientation,e=r.unit||e,n=r.format||n}e=e||"mm",n=n||"a4",t=(""+(t||"P")).toLowerCase();var i=(""+n).toLowerCase(),o={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(e){case"pt":var a=1;break;case"mm":a=72/25.4;break;case"cm":a=72/2.54;break;case"in":a=72;break;case"px":a=.75;break;case"pc":case"em":a=12;break;case"ex":a=6;break;default:throw"Invalid unit: "+e}if(o.hasOwnProperty(i))var s=o[i][1]/a,l=o[i][0]/a;else try{s=n[1],l=n[0]}catch(t){throw new Error("Invalid format: "+n)}if("p"===t||"portrait"===t){if(t="p",s<l){var h=l;l=s,s=h}}else{if("l"!==t&&"landscape"!==t)throw"Invalid orientation: "+t;t="l",l<s&&(h=l,l=s,s=h)}return{width:l,height:s,unit:e,k:a}},i.html=function(t,e){(e=e||{}).callback=e.callback||function(){},e.html2canvas=e.html2canvas||{},e.html2canvas.canvas=e.html2canvas.canvas||this.canvas,e.jsPDF=e.jsPDF||this,e.jsPDF;var n=new y(e);return e.worker?n:n.from(t).doCallback()},lt.API.addJS=function(t){return b=t,this.internal.events.subscribe("postPutResources",function(t){v=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(v+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),w=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+b+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){void 0!==v&&void 0!==w&&this.internal.out("/Names <</JavaScript "+v+" 0 R>>")}),this},(
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
x=lt.API).events.push(["postPutResources",function(){var t=this,e=/^(\d+) 0 obj$/;if(0<this.outline.root.children.length)for(var n=t.outline.render().split(/\r\n/),r=0;r<n.length;r++){var i=n[r],o=e.exec(i);if(null!=o){var a=o[1];t.internal.newObjectDeferredBegin(a,!1)}t.internal.write(i)}if(this.outline.createNamedDestinations){var s=this.internal.pages.length,l=[];for(r=0;r<s;r++){var h=t.internal.newObject();l.push(h);var u=t.internal.getPageInfo(r+1);t.internal.write("<< /D["+u.objId+" 0 R /XYZ null null null]>> endobj")}var c=t.internal.newObject();for(t.internal.write("<< /Names [ "),r=0;r<l.length;r++)t.internal.write("(page_"+(r+1)+")"+l[r]+" 0 R");t.internal.write(" ] >>","endobj"),t.internal.newObject(),t.internal.write("<< /Dests "+c+" 0 R"),t.internal.write(">>","endobj")}}]),x.events.push(["putCatalog",function(){0<this.outline.root.children.length&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+namesOid+" 0 R"))}]),x.events.push(["initialized",function(){var a=this;a.outline={createNamedDestinations:!1,root:{children:[]}},a.outline.add=function(t,e,n){var r={title:e,options:n,children:[]};return null==t&&(t=this.root),t.children.push(r),r},a.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=a,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},a.outline.genIds_r=function(t){t.id=a.internal.newObjectDeferred();for(var e=0;e<t.children.length;e++)this.genIds_r(t.children[e])},a.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),0<t.children.length&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},a.outline.renderItems=function(t){this.ctx.pdf.internal.getCoordinateString;for(var e=this.ctx.pdf.internal.getVerticalCoordinateString,n=0;n<t.children.length;n++){var r=t.children[n];this.objStart(r),this.line("/Title "+this.makeString(r.title)),this.line("/Parent "+this.makeRef(t)),0<n&&this.line("/Prev "+this.makeRef(t.children[n-1])),n<t.children.length-1&&this.line("/Next "+this.makeRef(t.children[n+1])),0<r.children.length&&(this.line("/First "+this.makeRef(r.children[0])),this.line("/Last "+this.makeRef(r.children[r.children.length-1])));var i=this.count=this.count_r({count:0},r);if(0<i&&this.line("/Count "+i),r.options&&r.options.pageNumber){var o=a.internal.getPageInfo(r.options.pageNumber);this.line("/Dest ["+o.objId+" 0 R /XYZ 0 "+e(0)+" 0]")}this.objEnd()}for(n=0;n<t.children.length;n++)r=t.children[n],this.renderItems(r)},a.outline.line=function(t){this.ctx.val+=t+"\r\n"},a.outline.makeRef=function(t){return t.id+" 0 R"},a.outline.makeString=function(t){return"("+a.internal.pdfEscape(t)+")"},a.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},a.outline.objEnd=function(t){this.ctx.val+=">> \r\nendobj\r\n"},a.outline.count_r=function(t,e){for(var n=0;n<e.children.length;n++)t.count++,this.count_r(t,e.children[n]);return t.count}}]),
/**
   * @license
   * 
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   * ====================================================================
   */
I=lt.API,C=function(){var t="function"==typeof Deflater;if(!t)throw new Error("requires deflate.js for compression");return t},B=function(t,e,n,r){var i=5,o=E;switch(r){case I.image_compression.FAST:i=3,o=j;break;case I.image_compression.MEDIUM:i=6,o=M;break;case I.image_compression.SLOW:i=9,o=O}t=A(t,e,n,o);var a=new Uint8Array(N(i)),s=L(t),l=new Deflater(i),h=l.append(t),u=l.flush(),c=a.length+h.length+u.length,f=new Uint8Array(c+4);return f.set(a),f.set(h,a.length),f.set(u,a.length+h.length),f[c++]=s>>>24&255,f[c++]=s>>>16&255,f[c++]=s>>>8&255,f[c++]=255&s,I.arrayBufferToBinaryString(f)},N=function(t,e){var n=Math.LOG2E*Math.log(32768)-8<<4|8,r=n<<8;return r|=Math.min(3,(e-1&255)>>1)<<6,r|=0,[n,255&(r+=31-r%31)]},L=function(t,e){for(var n,r=1,i=0,o=t.length,a=0;0<o;){for(o-=n=e<o?e:o;i+=r+=t[a++],--n;);r%=65521,i%=65521}return(i<<16|r)>>>0},A=function(t,e,n,r){for(var i,o,a,s=t.length/e,l=new Uint8Array(t.length+s),h=T(),u=0;u<s;u++){if(a=u*e,i=t.subarray(a,a+e),r)l.set(r(i,n,o),a+u);else{for(var c=0,f=h.length,p=[];c<f;c++)p[c]=h[c](i,n,o);var d=R(p.concat());l.set(p[d],a+u)}o=i}return l},S=function(t,e,n){var r=Array.apply([],t);return r.unshift(0),r},j=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=1;o<a;o++)r=t[o-e]||0,i[o+1]=t[o]-r+256&255;return i},E=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=2;o<a;o++)r=n&&n[o]||0,i[o+1]=t[o]-r+256&255;return i},M=function(t,e,n){var r,i,o=[],a=0,s=t.length;for(o[0]=3;a<s;a++)r=t[a-e]||0,i=n&&n[a]||0,o[a+1]=t[a]+256-(r+i>>>1)&255;return o},O=function(t,e,n){var r,i,o,a,s=[],l=0,h=t.length;for(s[0]=4;l<h;l++)r=t[l-e]||0,i=n&&n[l]||0,o=n&&n[l-e]||0,a=q(r,i,o),s[l+1]=t[l]-a+256&255;return s},q=function(t,e,n){var r=t+e-n,i=Math.abs(r-t),o=Math.abs(r-e),a=Math.abs(r-n);return i<=o&&i<=a?t:o<=a?e:n},T=function(){return[S,j,E,M,O]},R=function(t){for(var e,n,r,i=0,o=t.length;i<o;)((e=D(t[i].slice(1)))<n||!n)&&(n=e,r=i),i++;return r},D=function(t){for(var e=0,n=t.length,r=0;e<n;)r+=Math.abs(t[e++]);return r},I.processPNG=function(t,e,n,r,i){var o,a,s,l,h,u,c=this.color_spaces.DEVICE_RGB,f=this.decode.FLATE_DECODE,p=8;if(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)){if("function"!=typeof PNG||"function"!=typeof kt)throw new Error("PNG support requires png.js and zlib.js");if(t=(o=new PNG(t)).imgData,p=o.bits,c=o.colorSpace,l=o.colors,-1!==[4,6].indexOf(o.colorType)){if(8===o.bits)for(var d,g=(_=32==o.pixelBitlength?new Uint32Array(o.decodePixels().buffer):16==o.pixelBitlength?new Uint16Array(o.decodePixels().buffer):new Uint8Array(o.decodePixels().buffer)).length,m=new Uint8Array(g*o.colors),y=new Uint8Array(g),v=o.pixelBitlength-o.bits,w=0,b=0;w<g;w++){for(x=_[w],d=0;d<v;)m[b++]=x>>>d&255,d+=o.bits;y[w]=x>>>d&255}if(16===o.bits){g=(_=new Uint32Array(o.decodePixels().buffer)).length,m=new Uint8Array(g*(32/o.pixelBitlength)*o.colors),y=new Uint8Array(g*(32/o.pixelBitlength));for(var x,N=1<o.colors,L=b=w=0;w<g;)x=_[w++],m[b++]=x>>>0&255,N&&(m[b++]=x>>>16&255,x=_[w++],m[b++]=x>>>0&255),y[L++]=x>>>16&255;p=8}r!==I.image_compression.NONE&&C()?(t=B(m,o.width*o.colors,o.colors,r),u=B(y,o.width,1,r)):(t=m,u=y,f=null)}if(3===o.colorType&&(c=this.color_spaces.INDEXED,h=o.palette,o.transparency.indexed)){var A=o.transparency.indexed,S=0;for(w=0,g=A.length;w<g;++w)S+=A[w];if((S/=255)==g-1&&-1!==A.indexOf(0))s=[A.indexOf(0)];else if(S!==g){var _=o.decodePixels();for(y=new Uint8Array(_.length),w=0,g=_.length;w<g;w++)y[w]=A[_[w]];u=B(y,o.width,1)}}var F=function(t){var e;switch(t){case I.image_compression.FAST:e=11;break;case I.image_compression.MEDIUM:e=13;break;case I.image_compression.SLOW:e=14;break;default:e=12}return e}(r);return a=f===this.decode.FLATE_DECODE?"/Predictor "+F+" /Colors "+l+" /BitsPerComponent "+p+" /Columns "+o.width:"/Colors "+l+" /BitsPerComponent "+p+" /Columns "+o.width,(this.isArrayBuffer(t)||this.isArrayBufferView(t))&&(t=this.arrayBufferToBinaryString(t)),(u&&this.isArrayBuffer(u)||this.isArrayBufferView(u))&&(u=this.arrayBufferToBinaryString(u)),this.createImageInfo(t,o.width,o.height,c,p,f,e,n,a,s,h,u,F)}throw new Error("Unsupported PNG image data, try using JPEG instead.")},(
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
U=lt.API).processGIF89A=function(t,e,n,r,i){var o=new At(t),a=o.width,s=o.height,l=[];o.decodeAndBlitFrameRGBA(0,l);var h={data:l,width:a,height:s},u=new _t(100).encode(h,100);return U.processJPEG.call(this,u,e,n,r)},U.processGIF87A=U.processGIF89A,(
/**
   * Copyright (c) 2018 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
z=lt.API).processBMP=function(t,e,n,r,i){var o=new Ft(t,!1),a=o.width,s=o.height,l={data:o.getData(),width:a,height:s},h=new _t(100).encode(l,100);return z.processJPEG.call(this,h,e,n,r)},lt.API.setLanguage=function(t){return void 0===this.internal.languageSettings&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),void 0!=={af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"FYRO Macedonian",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]&&(this.internal.languageSettings.languageCode=t,!1===this.internal.languageSettings.isSubscribed&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},
/** @license
   * MIT license.
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
H=lt.API,W=H.getCharWidthsArray=function(t,e){var n,r,i,o=(e=e||{}).font||this.internal.getFont(),a=e.fontSize||this.internal.getFontSize(),s=e.charSpace||this.internal.getCharSpace(),l=e.widths?e.widths:o.metadata.Unicode.widths,h=l.fof?l.fof:1,u=e.kerning?e.kerning:o.metadata.Unicode.kerning,c=u.fof?u.fof:1,f=0,p=l[0]||h,d=[];for(n=0,r=t.length;n<r;n++)i=t.charCodeAt(n),"function"==typeof o.metadata.widthOfString?d.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(i))+s*(1e3/a)||0)/1e3):d.push((l[i]||p)/h+(u[i]&&u[i][f]||0)/c),f=i;return d},V=H.getArraySum=function(t){for(var e=t.length,n=0;e;)n+=t[--e];return n},G=H.getStringUnitWidth=function(t,e){var n=(e=e||{}).fontSize||this.internal.getFontSize(),r=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return"function"==typeof r.metadata.widthOfString?r.metadata.widthOfString(t,n,i)/n:V(W.apply(this,arguments))},Y=function(t,e,n,r){for(var i=[],o=0,a=t.length,s=0;o!==a&&s+e[o]<n;)s+=e[o],o++;i.push(t.slice(0,o));var l=o;for(s=0;o!==a;)s+e[o]>r&&(i.push(t.slice(l,o)),s=0,l=o),s+=e[o],o++;return l!==o&&i.push(t.slice(l,o)),i},J=function(t,e,n){n||(n={});var r,i,o,a,s,l,h=[],u=[h],c=n.textIndent||0,f=0,p=0,d=t.split(" "),g=W.apply(this,[" ",n])[0];if(l=-1===n.lineIndent?d[0].length+2:n.lineIndent||0){var m=Array(l).join(" "),y=[];d.map(function(t){1<(t=t.split(/\s*\n/)).length?y=y.concat(t.map(function(t,e){return(e&&t.length?"\n":"")+t})):y.push(t[0])}),d=y,l=G.apply(this,[m,n])}for(o=0,a=d.length;o<a;o++){var v=0;if(r=d[o],l&&"\n"==r[0]&&(r=r.substr(1),v=1),i=W.apply(this,[r,n]),e<c+f+(p=V(i))||v){if(e<p){for(s=Y.apply(this,[r,i,e-(c+f),e]),h.push(s.shift()),h=[s.pop()];s.length;)u.push([s.shift()]);p=V(i.slice(r.length-(h[0]?h[0].length:0)))}else h=[r];u.push(h),c=p+l,f=g}else h.push(r),c+=f+p,f=g}if(l)var w=function(t,e){return(e?m:"")+t.join(" ")};else w=function(t){return t.join(" ")};return u.map(w)},H.splitTextToSize=function(t,e,n){var r,i=(n=n||{}).fontSize||this.internal.getFontSize(),o=function(t){var e={0:1},n={};if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var r=this.internal.getFont(t.fontName,t.fontStyle),i="Unicode";return r.metadata[i]?{widths:r.metadata[i].widths||e,kerning:r.metadata[i].kerning||n}:{font:r.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}.call(this,n);r=Array.isArray(t)?t:t.split(/\r?\n/);var a=1*this.internal.scaleFactor*e/i;o.textIndent=n.textIndent?1*n.textIndent*this.internal.scaleFactor/i:0,o.lineIndent=n.lineIndent;var s,l,h=[];for(s=0,l=r.length;s<l;s++)h=h.concat(J.apply(this,[r[s],a,o]));return h},
/** @license
   jsPDF standard_fonts_metrics plugin
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   * MIT license.
   * 
   * ====================================================================
   */
X=lt.API,Z={codePages:["WinAnsiEncoding"],WinAnsiEncoding:(K=function(t){for(var e="klmnopqrstuvwxyz",n={},r=0;r<e.length;r++)n[e[r]]="0123456789abcdef"[r];var i,o,a,s,l,h={},u=1,c=h,f=[],p="",d="",g=t.length-1;for(r=1;r!=g;)l=t[r],r+=1,"'"==l?o=o?(s=o.join(""),i):[]:o?o.push(l):"{"==l?(f.push([c,s]),c={},s=i):"}"==l?((a=f.pop())[0][a[1]]=c,s=i,c=a[0]):"-"==l?u=-1:s===i?n.hasOwnProperty(l)?(p+=n[l],s=parseInt(p,16)*u,u=1,p=""):p+=l:n.hasOwnProperty(l)?(d+=n[l],c[s]=parseInt(d,16)*u,u=1,s=i,d=""):d+=l;return h})("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},Q={Unicode:{Courier:Z,"Courier-Bold":Z,"Courier-BoldOblique":Z,"Courier-Oblique":Z,Helvetica:Z,"Helvetica-Bold":Z,"Helvetica-BoldOblique":Z,"Helvetica-Oblique":Z,"Times-Roman":Z,"Times-Bold":Z,"Times-BoldItalic":Z,"Times-Italic":Z}},$={Unicode:{"Courier-Oblique":K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":K("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":K("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:K("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:K("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":K("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":K("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}},X.events.push(["addFont",function(t){var e,n,r,i=t.font,o="Unicode";(e=$[o][i.postScriptName])&&((n=i.metadata[o]?i.metadata[o]:i.metadata[o]={}).widths=e.widths,n.kerning=e.kerning),(r=Q[o][i.postScriptName])&&((n=i.metadata[o]?i.metadata[o]:i.metadata[o]={}).encoding=r).codePages&&r.codePages.length&&(i.encoding=r.codePages[0])}]),
/**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
tt=lt,"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||Function("return this")(),tt.API.events.push(["addFont",function(t){var e=t.font,n=t.instance;if(void 0!==n&&n.existsFileInVFS(e.postScriptName)){var r=n.getFileFromVFS(e.postScriptName);if("string"!=typeof r)throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+e.postScriptName+"').");e.metadata=tt.API.TTFFont.open(e.postScriptName,e.fontName,r,e.encoding),e.metadata.Unicode=e.metadata.Unicode||{encoding:{},kerning:{},widths:[]},e.metadata.glyIdsUsed=[0]}else if(!1===e.isStandardFont)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+e.postScriptName+"').")}]),(
/** @license
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   * 
   * 
   * ====================================================================
   */
et=lt.API).addSvg=function(t,e,n,r,i){if(void 0===e||void 0===n)throw new Error("addSVG needs values for 'x' and 'y'");function o(t){for(var e=parseFloat(t[1]),n=parseFloat(t[2]),r=[],i=3,o=t.length;i<o;)"c"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2]),parseFloat(t[i+3]),parseFloat(t[i+4]),parseFloat(t[i+5]),parseFloat(t[i+6])]),i+=7):"l"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2])]),i+=3):i+=1;return[e,n,r]}var a,s,l,h,u,c,f,p,d=(h=document,p=h.createElement("iframe"),u=".jsPDF_sillysvg_iframe {display:none;position:absolute;}",(f=(c=h).createElement("style")).type="text/css",f.styleSheet?f.styleSheet.cssText=u:f.appendChild(c.createTextNode(u)),c.getElementsByTagName("head")[0].appendChild(f),p.name="childframe",p.setAttribute("width",0),p.setAttribute("height",0),p.setAttribute("frameborder","0"),p.setAttribute("scrolling","no"),p.setAttribute("seamless","seamless"),p.setAttribute("class","jsPDF_sillysvg_iframe"),h.body.appendChild(p),p),g=(a=t,(l=((s=d).contentWindow||s.contentDocument).document).write(a),l.close(),l.getElementsByTagName("svg")[0]),m=[1,1],y=parseFloat(g.getAttribute("width")),v=parseFloat(g.getAttribute("height"));y&&v&&(r&&i?m=[r/y,i/v]:r?m=[r/y,r/y]:i&&(m=[i/v,i/v]));var w,b,x,N,L=g.childNodes;for(w=0,b=L.length;w<b;w++)(x=L[w]).tagName&&"PATH"===x.tagName.toUpperCase()&&((N=o(x.getAttribute("d").split(" ")))[0]=N[0]*m[0]+e,N[1]=N[1]*m[1]+n,this.lines.call(this,N[2],N[0],N[1],m));return this},et.addSVG=et.addSvg,et.addSvgAsImage=function(t,e,n,r,i,o,a,s){if(isNaN(e)||isNaN(n))throw console.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(r)||isNaN(i))throw console.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var l=document.createElement("canvas");l.width=r,l.height=i;var h=l.getContext("2d");return h.fillStyle="#fff",h.fillRect(0,0,l.width,l.height),canvg(l,t,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0}),this.addImage(l.toDataURL("image/jpeg",1),e,n,r,i,a,s),this},lt.API.putTotalPages=function(t){var e,n=0;n=parseInt(this.internal.getFont().id.substr(1),10)<15?(e=new RegExp(t,"g"),this.internal.getNumberOfPages()):(e=new RegExp(this.pdfEscape16(t,this.internal.getFont()),"g"),this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var r=1;r<=this.internal.getNumberOfPages();r++)for(var i=0;i<this.internal.pages[r].length;i++)this.internal.pages[r][i]=this.internal.pages[r][i].replace(e,n);return this},lt.API.viewerPreferences=function(t,e){var n;t=t||{},e=e||!1;var r,i,o={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},a=Object.keys(o),s=[],l=0,h=0,u=0,c=!0;function f(t,e){var n,r=!1;for(n=0;n<t.length;n+=1)t[n]===e&&(r=!0);return r}if(void 0===this.internal.viewerpreferences&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(o)),this.internal.viewerpreferences.isSubscribed=!1),n=this.internal.viewerpreferences.configuration,"reset"===t||!0===e){var p=a.length;for(u=0;u<p;u+=1)n[a[u]].value=n[a[u]].defaultValue,n[a[u]].explicitSet=!1}if("object"===se(t))for(r in t)if(i=t[r],f(a,r)&&void 0!==i){if("boolean"===n[r].type&&"boolean"==typeof i)n[r].value=i;else if("name"===n[r].type&&f(n[r].valueSet,i))n[r].value=i;else if("integer"===n[r].type&&Number.isInteger(i))n[r].value=i;else if("array"===n[r].type){for(l=0;l<i.length;l+=1)if(c=!0,1===i[l].length&&"number"==typeof i[l][0])s.push(String(i[l]-1));else if(1<i[l].length){for(h=0;h<i[l].length;h+=1)"number"!=typeof i[l][h]&&(c=!1);!0===c&&s.push([i[l][0]-1,i[l][1]-1].join(" "))}n[r].value="["+s.join(" ")+"]"}else n[r].value=n[r].defaultValue;n[r].explicitSet=!0}return!1===this.internal.viewerpreferences.isSubscribed&&(this.internal.events.subscribe("putCatalog",function(){var t,e=[];for(t in n)!0===n[t].explicitSet&&("name"===n[t].type?e.push("/"+t+" /"+n[t].value):e.push("/"+t+" "+n[t].value));0!==e.length&&this.internal.write("/ViewerPreferences\n<<\n"+e.join("\n")+"\n>>")}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=n,this},
/** ==================================================================== 
   * jsPDF XMP metadata plugin
   * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
   * 
   * 
   * ====================================================================
   */
nt=lt.API,ot=it=rt="",nt.addMetadata=function(t,e){return it=e||"http://jspdf.default.namespaceuri/",rt=t,this.internal.events.subscribe("postPutResources",function(){if(rt){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+it+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),n=unescape(encodeURIComponent(t)),r=unescape(encodeURIComponent(rt)),i=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),o=unescape(encodeURIComponent("</x:xmpmeta>")),a=n.length+r.length+i.length+e.length+o.length;ot=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+a+" >>"),this.internal.write("stream"),this.internal.write(e+n+r+i+o),this.internal.write("endstream"),this.internal.write("endobj")}else ot=""}),this.internal.events.subscribe("putCatalog",function(){ot&&this.internal.write("/Metadata "+ot+" 0 R")}),this},function(f,t){var e=f.API;var m=e.pdfEscape16=function(t,e){for(var n,r=e.metadata.Unicode.widths,i=["","0","00","000","0000"],o=[""],a=0,s=t.length;a<s;++a){if(n=e.metadata.characterToGlyph(t.charCodeAt(a)),e.metadata.glyIdsUsed.push(n),e.metadata.toUnicode[n]=t.charCodeAt(a),-1==r.indexOf(n)&&(r.push(n),r.push([parseInt(e.metadata.widthOfGlyph(n),10)])),"0"==n)return o.join("");n=n.toString(16),o.push(i[4-n.length],n)}return o.join("")},p=function(t){var e,n,r,i,o,a,s;for(o="/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",r=[],a=0,s=(n=Object.keys(t).sort(function(t,e){return t-e})).length;a<s;a++)e=n[a],100<=r.length&&(o+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar",r=[]),i=("0000"+t[e].toString(16)).slice(-4),e=("0000"+(+e).toString(16)).slice(-4),r.push("<"+e+"><"+i+">");return r.length&&(o+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar\n"),o+="endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"};e.events.push(["putFont",function(t){!function(t,e,n,r){if(t.metadata instanceof f.API.TTFFont&&"Identity-H"===t.encoding){for(var i=t.metadata.Unicode.widths,o=t.metadata.subset.encode(t.metadata.glyIdsUsed,1),a="",s=0;s<o.length;s++)a+=String.fromCharCode(o[s]);var l=n();r({data:a,addLength1:!0}),e("endobj");var h=n();r({data:p(t.metadata.toUnicode),addLength1:!0}),e("endobj");var u=n();e("<<"),e("/Type /FontDescriptor"),e("/FontName /"+t.fontName),e("/FontFile2 "+l+" 0 R"),e("/FontBBox "+f.API.PDFObject.convert(t.metadata.bbox)),e("/Flags "+t.metadata.flags),e("/StemV "+t.metadata.stemV),e("/ItalicAngle "+t.metadata.italicAngle),e("/Ascent "+t.metadata.ascender),e("/Descent "+t.metadata.decender),e("/CapHeight "+t.metadata.capHeight),e(">>"),e("endobj");var c=n();e("<<"),e("/Type /Font"),e("/BaseFont /"+t.fontName),e("/FontDescriptor "+u+" 0 R"),e("/W "+f.API.PDFObject.convert(i)),e("/CIDToGIDMap /Identity"),e("/DW 1000"),e("/Subtype /CIDFontType2"),e("/CIDSystemInfo"),e("<<"),e("/Supplement 0"),e("/Registry (Adobe)"),e("/Ordering ("+t.encoding+")"),e(">>"),e(">>"),e("endobj"),t.objectNumber=n(),e("<<"),e("/Type /Font"),e("/Subtype /Type0"),e("/ToUnicode "+h+" 0 R"),e("/BaseFont /"+t.fontName),e("/Encoding /"+t.encoding),e("/DescendantFonts ["+c+" 0 R]"),e(">>"),e("endobj"),t.isAlreadyPutted=!0}}(t.font,t.out,t.newObject,t.putStream)}]);e.events.push(["putFont",function(t){!function(t,e,n,r){if(t.metadata instanceof f.API.TTFFont&&"WinAnsiEncoding"===t.encoding){t.metadata.Unicode.widths;for(var i=t.metadata.rawData,o="",a=0;a<i.length;a++)o+=String.fromCharCode(i[a]);var s=n();r({data:o,addLength1:!0}),e("endobj");var l=n();r({data:p(t.metadata.toUnicode),addLength1:!0}),e("endobj");var h=n();for(e("<<"),e("/Descent "+t.metadata.decender),e("/CapHeight "+t.metadata.capHeight),e("/StemV "+t.metadata.stemV),e("/Type /FontDescriptor"),e("/FontFile2 "+s+" 0 R"),e("/Flags 96"),e("/FontBBox "+f.API.PDFObject.convert(t.metadata.bbox)),e("/FontName /"+t.fontName),e("/ItalicAngle "+t.metadata.italicAngle),e("/Ascent "+t.metadata.ascender),e(">>"),e("endobj"),t.objectNumber=n(),a=0;a<t.metadata.hmtx.widths.length;a++)t.metadata.hmtx.widths[a]=parseInt(t.metadata.hmtx.widths[a]*(1e3/t.metadata.head.unitsPerEm));e("<</Subtype/TrueType/Type/Font/ToUnicode "+l+" 0 R/BaseFont/"+t.fontName+"/FontDescriptor "+h+" 0 R/Encoding/"+t.encoding+" /FirstChar 29 /LastChar 255 /Widths "+f.API.PDFObject.convert(t.metadata.hmtx.widths)+">>"),e("endobj"),t.isAlreadyPutted=!0}}(t.font,t.out,t.newObject,t.putStream)}]);var h=function(t){var e,n,r=t.text||"",i=t.x,o=t.y,a=t.options||{},s=t.mutex||{},l=s.pdfEscape,h=s.activeFontKey,u=s.fonts,c=(s.activeFontSize,""),f=0,p="",d=u[n=h].encoding;if("Identity-H"!==u[n].encoding)return{text:r,x:i,y:o,options:a,mutex:s};for(p=r,n=h,"[object Array]"===Object.prototype.toString.call(r)&&(p=r[0]),f=0;f<p.length;f+=1)u[n].metadata.hasOwnProperty("cmap")&&(e=u[n].metadata.cmap.unicode.codeMap[p[f].charCodeAt(0)]),e?c+=p[f]:p[f].charCodeAt(0)<256&&u[n].metadata.hasOwnProperty("Unicode")?c+=p[f]:c+="";var g="";return parseInt(n.slice(1))<14||"WinAnsiEncoding"===d?g=function(t){for(var e="",n=0;n<t.length;n++)e+=""+t.charCodeAt(n).toString(16);return e}(l(c,n)):"Identity-H"===d&&(g=m(c,u[n])),s.isHex=!0,{text:g,x:i,y:o,options:a,mutex:s}};e.events.push(["postProcessText",function(t){var e=t.text||"",n=t.x,r=t.y,i=t.options,o=t.mutex,a=(i.lang,[]),s={text:e,x:n,y:r,options:i,mutex:o};if("[object Array]"===Object.prototype.toString.call(e)){var l=0;for(l=0;l<e.length;l+=1)"[object Array]"===Object.prototype.toString.call(e[l])&&3===e[l].length?a.push([h(Object.assign({},s,{text:e[l][0]})).text,e[l][1],e[l][2]]):a.push(h(Object.assign({},s,{text:e[l]})).text);t.text=a}else t.text=h(Object.assign({},s,{text:e})).text}])}(lt,"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||Function("return this")()),at=lt.API,st=function(t){return void 0!==t&&(void 0===t.vFS&&(t.vFS={}),!0)},at.existsFileInVFS=function(t){return!!st(this.internal)&&void 0!==this.internal.vFS[t]},at.addFileToVFS=function(t,e){return st(this.internal),this.internal.vFS[t]=e,this},at.getFileFromVFS=function(t){return st(this.internal),void 0!==this.internal.vFS[t]?this.internal.vFS[t]:null},lt.API.addHTML=function(t,d,g,s,m){if("undefined"==typeof html2canvas&&"undefined"==typeof rasterizeHTML)throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");"number"!=typeof d&&(s=d,m=g),"function"==typeof s&&(m=s,s=null),"function"!=typeof m&&(m=function(){});var e=this.internal,y=e.scaleFactor,v=e.pageSize.getWidth(),w=e.pageSize.getHeight();if((s=s||{}).onrendered=function(l){d=parseInt(d)||0,g=parseInt(g)||0;var t=s.dim||{},h=Object.assign({top:0,right:0,bottom:0,left:0,useFor:"content"},s.margin),e=t.h||Math.min(w,l.height/y),u=t.w||Math.min(v,l.width/y)-d,c=s.format||"JPEG",f=s.imageCompression||"SLOW";if(l.height>w-h.top-h.bottom&&s.pagesplit){var p=function(t,e,n,r,i){var o=document.createElement("canvas");o.height=i,o.width=r;var a=o.getContext("2d");return a.mozImageSmoothingEnabled=!1,a.webkitImageSmoothingEnabled=!1,a.msImageSmoothingEnabled=!1,a.imageSmoothingEnabled=!1,a.fillStyle=s.backgroundColor||"#ffffff",a.fillRect(0,0,r,i),a.drawImage(t,e,n,r,i,0,0,r,i),o},n=function(){for(var t,e,n=0,r=0,i={},o=!1;;){var a;if(r=0,i.top=0!==n?h.top:g,i.left=0!==n?h.left:d,o=(v-h.left-h.right)*y<l.width,"content"===h.useFor?0===n?(t=Math.min((v-h.left)*y,l.width),e=Math.min((w-h.top)*y,l.height-n)):(t=Math.min(v*y,l.width),e=Math.min(w*y,l.height-n),i.top=0):(t=Math.min((v-h.left-h.right)*y,l.width),e=Math.min((w-h.bottom-h.top)*y,l.height-n)),o)for(;;){"content"===h.useFor&&(0===r?t=Math.min((v-h.left)*y,l.width):(t=Math.min(v*y,l.width-r),i.left=0));var s=[a=p(l,r,n,t,e),i.left,i.top,a.width/y,a.height/y,c,null,f];if(this.addImage.apply(this,s),(r+=t)>=l.width)break;this.addPage()}else s=[a=p(l,0,n,t,e),i.left,i.top,a.width/y,a.height/y,c,null,f],this.addImage.apply(this,s);if((n+=e)>=l.height)break;this.addPage()}m(u,n,null,s)}.bind(this);if("CANVAS"===l.nodeName){var r=new Image;r.onload=n,r.src=l.toDataURL("image/png"),l=r}else n()}else{var i=Math.random().toString(35),o=[l,d,g,u,e,c,i,f];this.addImage.apply(this,o),m(u,e,i,o)}}.bind(this),"undefined"!=typeof html2canvas&&!s.rstz)return html2canvas(t,s);if("undefined"==typeof rasterizeHTML)return null;var n="drawDocument";return"string"==typeof t&&(n=/^http/.test(t)?"drawURL":"drawHTML"),s.width=s.width||v*y,rasterizeHTML[n](t,void 0,s).then(function(t){s.onrendered(t.image)},function(t){m(null,t)})},
/**
   * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Daniel Husar, https://github.com/danielhusar
   *               2014 Wolfgang Gassler, https://github.com/woolfg
   *               2014 Steven Spungin, https://github.com/flamenco
   *
   * @license
   * 
   * ====================================================================
   */
function(t){var P,k,i,a,s,l,h,u,I,w,f,c,p,n,C,B,d,g,m,j;P=function(){return function(t){return e.prototype=t,new e};function e(){}}(),w=function(t){var e,n,r,i,o,a,s;for(n=0,r=t.length,e=void 0,a=i=!1;!i&&n!==r;)(e=t[n]=t[n].trimLeft())&&(i=!0),n++;for(n=r-1;r&&!a&&-1!==n;)(e=t[n]=t[n].trimRight())&&(a=!0),n--;for(o=/\s+$/g,s=!0,n=0;n!==r;)"\u2028"!=t[n]&&(e=t[n].replace(/\s+/g," "),s&&(e=e.trimLeft()),e&&(s=o.test(e)),t[n]=e),n++;return t},c=function(t){var e,n,r;for(e=void 0,n=(r=t.split(",")).shift();!e&&n;)e=i[n.trim().toLowerCase()],n=r.shift();return e},p=function(t){var e;return-1<(t="auto"===t?"0px":t).indexOf("em")&&!isNaN(Number(t.replace("em","")))&&(t=18.719*Number(t.replace("em",""))+"px"),-1<t.indexOf("pt")&&!isNaN(Number(t.replace("pt","")))&&(t=1.333*Number(t.replace("pt",""))+"px"),void 0,16,(e=n[t])?e:void 0!==(e={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[t])?n[t]=e/16:(e=parseFloat(t))?n[t]=e/16:(e=t.match(/([\d\.]+)(px)/),Array.isArray(e)&&3===e.length?n[t]=parseFloat(e[1])/16:n[t]=1)},I=function(t){var e,n,r,i,o;return o=t,i=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(o,null):o.currentStyle?o.currentStyle:o.style,n=void 0,(e={})["font-family"]=c((r=function(t){return t=t.replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()}),i[t]})("font-family"))||"times",e["font-style"]=a[r("font-style")]||"normal",e["text-align"]=s[r("text-align")]||"left","bold"===(n=l[r("font-weight")]||"normal")&&("normal"===e["font-style"]?e["font-style"]=n:e["font-style"]=n+e["font-style"]),e["font-size"]=p(r("font-size"))||1,e["line-height"]=p(r("line-height"))||1,e.display="inline"===r("display")?"inline":"block",n="block"===e.display,e["margin-top"]=n&&p(r("margin-top"))||0,e["margin-bottom"]=n&&p(r("margin-bottom"))||0,e["padding-top"]=n&&p(r("padding-top"))||0,e["padding-bottom"]=n&&p(r("padding-bottom"))||0,e["margin-left"]=n&&p(r("margin-left"))||0,e["margin-right"]=n&&p(r("margin-right"))||0,e["padding-left"]=n&&p(r("padding-left"))||0,e["padding-right"]=n&&p(r("padding-right"))||0,e["page-break-before"]=r("page-break-before")||"auto",e.float=h[r("cssFloat")]||"none",e.clear=u[r("clear")]||"none",e.color=r("color"),e},C=function(t,e,n){var r,i,o,a,s;if(o=!1,a=i=void 0,r=n["#"+t.id])if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;if(r=n[t.nodeName],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;for(s="string"==typeof t.className?t.className.split(" "):[],i=0;i<s.length;i++)if(r=n["."+s[i]],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;return o},j=function(t,e){var n,r,i,o,a,s,l,h,u;for(n=[],r=[],i=0,u=t.rows[0].cells.length,l=t.clientWidth;i<u;)h=t.rows[0].cells[i],r[i]={name:h.textContent.toLowerCase().replace(/\s+/g,""),prompt:h.textContent.replace(/\r?\n/g,""),width:h.clientWidth/l*e.pdf.internal.pageSize.getWidth()},i++;for(i=1;i<t.rows.length;){for(s=t.rows[i],a={},o=0;o<s.cells.length;)a[r[o].name]=s.cells[o].textContent.replace(/\r?\n/g,""),o++;n.push(a),i++}return{rows:n,headers:r}};var E={SCRIPT:1,STYLE:1,NOSCRIPT:1,OBJECT:1,EMBED:1,SELECT:1},M=1;k=function(t,i,e){var n,r,o,a,s,l,h,u;for(r=t.childNodes,n=void 0,(s="block"===(o=I(t)).display)&&(i.setBlockBoundary(),i.setBlockStyle(o)),a=0,l=r.length;a<l;){if("object"===se(n=r[a])){if(i.executeWatchFunctions(n),1===n.nodeType&&"HEADER"===n.nodeName){var c=n,f=i.pdf.margins_doc.top;i.pdf.internal.events.subscribe("addPage",function(t){i.y=f,k(c,i,e),i.pdf.margins_doc.top=i.y+10,i.y+=10},!1)}if(8===n.nodeType&&"#comment"===n.nodeName)~n.textContent.indexOf("ADD_PAGE")&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top);else if(1!==n.nodeType||E[n.nodeName])if(3===n.nodeType){var p=n.nodeValue;if(n.nodeValue&&"LI"===n.parentNode.nodeName)if("OL"===n.parentNode.parentNode.nodeName)p=M+++". "+p;else{var d=o["font-size"],g=(3-.75*d)*i.pdf.internal.scaleFactor,m=.75*d*i.pdf.internal.scaleFactor,y=1.74*d/i.pdf.internal.scaleFactor;u=function(t,e){this.pdf.circle(t+g,e+m,y,"FD")}}16&n.ownerDocument.body.compareDocumentPosition(n)&&i.addText(p,o)}else"string"==typeof n&&i.addText(n,o);else{var v;if("IMG"===n.nodeName){var w=n.getAttribute("src");v=B[i.pdf.sHashCode(w)||w]}if(v){i.pdf.internal.pageSize.getHeight()-i.pdf.margins_doc.bottom<i.y+n.height&&i.y>i.pdf.margins_doc.top&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top,i.executeWatchFunctions(n));var b=I(n),x=i.x,N=12/i.pdf.internal.scaleFactor,L=(b["margin-left"]+b["padding-left"])*N,A=(b["margin-right"]+b["padding-right"])*N,S=(b["margin-top"]+b["padding-top"])*N,_=(b["margin-bottom"]+b["padding-bottom"])*N;void 0!==b.float&&"right"===b.float?x+=i.settings.width-n.width-A:x+=L,i.pdf.addImage(v,x,i.y+S,n.width,n.height),v=void 0,"right"===b.float||"left"===b.float?(i.watchFunctions.push(function(t,e,n,r){return i.y>=e?(i.x+=t,i.settings.width+=n,!0):!!(r&&1===r.nodeType&&!E[r.nodeName]&&i.x+r.width>i.pdf.margins_doc.left+i.pdf.margins_doc.width)&&(i.x+=t,i.y=e,i.settings.width+=n,!0)}.bind(this,"left"===b.float?-n.width-L-A:0,i.y+n.height+S+_,n.width)),i.watchFunctions.push(function(t,e,n){return!(i.y<t&&e===i.pdf.internal.getNumberOfPages())||1===n.nodeType&&"both"===I(n).clear&&(i.y=t,!0)}.bind(this,i.y+n.height,i.pdf.internal.getNumberOfPages())),i.settings.width-=n.width+L+A,"left"===b.float&&(i.x+=n.width+L+A)):i.y+=n.height+S+_}else if("TABLE"===n.nodeName)h=j(n,i),i.y+=10,i.pdf.table(i.x,i.y,h.rows,h.headers,{autoSize:!1,printHeaders:e.printHeaders,margins:i.pdf.margins_doc,css:I(n)}),i.y=i.pdf.lastCellPos.y+i.pdf.lastCellPos.h+20;else if("OL"===n.nodeName||"UL"===n.nodeName)M=1,C(n,i,e)||k(n,i,e),i.y+=10;else if("LI"===n.nodeName){var F=i.x;i.x+=20/i.pdf.internal.scaleFactor,i.y+=3,C(n,i,e)||k(n,i,e),i.x=F}else"BR"===n.nodeName?(i.y+=o["font-size"]*i.pdf.internal.scaleFactor,i.addText("\u2028",P(o))):C(n,i,e)||k(n,i,e)}}a++}if(e.outY=i.y,s)return i.setBlockBoundary(u)},B={},d=function(t,o,e,n){var a,r=t.getElementsByTagName("img"),i=r.length,s=0;function l(){o.pdf.internal.events.publish("imagesLoaded"),n(a)}function h(e,n,r){if(e){var i=new Image;a=++s,i.crossOrigin="",i.onerror=i.onload=function(){if(i.complete&&(0===i.src.indexOf("data:image/")&&(i.width=n||i.width||0,i.height=r||i.height||0),i.width+i.height)){var t=o.pdf.sHashCode(e)||e;B[t]=B[t]||i}--s||l()},i.src=e}}for(;i--;)h(r[i].getAttribute("src"),r[i].width,r[i].height);return s||l()},g=function(t,o,a){var s=t.getElementsByTagName("footer");if(0<s.length){s=s[0];var e=o.pdf.internal.write,n=o.y;o.pdf.internal.write=function(){},k(s,o,a);var l=Math.ceil(o.y-n)+5;o.y=n,o.pdf.internal.write=e,o.pdf.margins_doc.bottom+=l;for(var r=function(t){var e=void 0!==t?t.pageNumber:1,n=o.y;o.y=o.pdf.internal.pageSize.getHeight()-o.pdf.margins_doc.bottom,o.pdf.margins_doc.bottom-=l;for(var r=s.getElementsByTagName("span"),i=0;i<r.length;++i)-1<(" "+r[i].className+" ").replace(/[\n\t]/g," ").indexOf(" pageCounter ")&&(r[i].innerHTML=e),-1<(" "+r[i].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")&&(r[i].innerHTML="###jsPDFVarTotalPages###");k(s,o,a),o.pdf.margins_doc.bottom+=l,o.y=n},i=s.getElementsByTagName("span"),h=0;h<i.length;++h)-1<(" "+i[h].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")&&o.pdf.internal.events.subscribe("htmlRenderingFinished",o.pdf.putTotalPages.bind(o.pdf,"###jsPDFVarTotalPages###"),!0);o.pdf.internal.events.subscribe("addPage",r,!1),r(),E.FOOTER=1}},m=function(t,e,n,r,i,o){if(!e)return!1;var a,s,l,h;"string"==typeof e||e.parentNode||(e=""+e.innerHTML),"string"==typeof e&&(a=e.replace(/<\/?script[^>]*?>/gi,""),h="jsPDFhtmlText"+Date.now().toString()+(1e3*Math.random()).toFixed(0),(l=document.createElement("div")).style.cssText="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",l.innerHTML='<iframe style="height:1px;width:1px" name="'+h+'" />',document.body.appendChild(l),(s=window.frames[h]).document.open(),s.document.writeln(a),s.document.close(),e=s.document.body);var u,c=new f(t,n,r,i);return d.call(this,e,c,i.elementHandlers,function(t){g(e,c,i.elementHandlers),k(e,c,i.elementHandlers),c.pdf.internal.events.publish("htmlRenderingFinished"),u=c.dispose(),"function"==typeof o?o(u):t&&console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")}),u||{x:c.x,y:c.y}},(f=function(t,e,n,r){return this.pdf=t,this.x=e,this.y=n,this.settings=r,this.watchFunctions=[],this.init(),this}).prototype.init=function(){return this.paragraph={text:[],style:[]},this.pdf.internal.write("q")},f.prototype.dispose=function(){return this.pdf.internal.write("Q"),{x:this.x,y:this.y,ready:!0}},f.prototype.executeWatchFunctions=function(t){var e=!1,n=[];if(0<this.watchFunctions.length){for(var r=0;r<this.watchFunctions.length;++r)!0===this.watchFunctions[r](t)?e=!0:n.push(this.watchFunctions[r]);this.watchFunctions=n}return e},f.prototype.splitFragmentsIntoLines=function(t,e){var n,r,i,o,a,s,l,h,u,c,f,p,d,g;for(12,c=this.pdf.internal.scaleFactor,o={},s=l=h=g=a=i=u=r=void 0,p=[f=[]],n=0,d=this.settings.width;t.length;)if(a=t.shift(),g=e.shift(),a)if((i=o[(r=g["font-family"])+(u=g["font-style"])])||(i=this.pdf.internal.getFont(r,u).metadata.Unicode,o[r+u]=i),h={widths:i.widths,kerning:i.kerning,fontSize:12*g["font-size"],textIndent:n},l=this.pdf.getStringUnitWidth(a,h)*h.fontSize/c,"\u2028"==a)f=[],p.push(f);else if(d<n+l){for(s=this.pdf.splitTextToSize(a,d,h),f.push([s.shift(),g]);s.length;)f=[[s.shift(),g]],p.push(f);n=this.pdf.getStringUnitWidth(f[0][0],h)*h.fontSize/c}else f.push([a,g]),n+=l;if(void 0!==g["text-align"]&&("center"===g["text-align"]||"right"===g["text-align"]||"justify"===g["text-align"]))for(var m=0;m<p.length;++m){var y=this.pdf.getStringUnitWidth(p[m][0][0],h)*h.fontSize/c;0<m&&(p[m][0][1]=P(p[m][0][1]));var v=d-y;if("right"===g["text-align"])p[m][0][1]["margin-left"]=v;else if("center"===g["text-align"])p[m][0][1]["margin-left"]=v/2;else if("justify"===g["text-align"]){var w=p[m][0][0].split(" ").length-1;p[m][0][1]["word-spacing"]=v/w,m===p.length-1&&(p[m][0][1]["word-spacing"]=0)}}return p},f.prototype.RenderTextFragment=function(t,e){var n,r;r=0,this.pdf.internal.pageSize.getHeight()-this.pdf.margins_doc.bottom<this.y+this.pdf.internal.getFontSize()&&(this.pdf.internal.write("ET","Q"),this.pdf.addPage(),this.y=this.pdf.margins_doc.top,this.pdf.internal.write("q","BT",this.getPdfColor(e.color),this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td"),r=Math.max(r,e["line-height"],e["font-size"]),this.pdf.internal.write(0,(-12*r).toFixed(2),"Td")),n=this.pdf.internal.getFont(e["font-family"],e["font-style"]);var i=this.getPdfColor(e.color);i!==this.lastTextColor&&(this.pdf.internal.write(i),this.lastTextColor=i),void 0!==e["word-spacing"]&&0<e["word-spacing"]&&this.pdf.internal.write(e["word-spacing"].toFixed(2),"Tw"),this.pdf.internal.write("/"+n.id,(12*e["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(t)+") Tj"),void 0!==e["word-spacing"]&&this.pdf.internal.write(0,"Tw")},f.prototype.getPdfColor=function(t){var e,n,r,i=/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);if(null!=i)e=parseInt(i[1]),n=parseInt(i[2]),r=parseInt(i[3]);else{if("string"==typeof t&&"#"!=t.charAt(0)){var o=new RGBColor(t);t=o.ok?o.toHex():"#000000"}e=t.substring(1,3),e=parseInt(e,16),n=t.substring(3,5),n=parseInt(n,16),r=t.substring(5,7),r=parseInt(r,16)}if("string"==typeof e&&/^#[0-9A-Fa-f]{6}$/.test(e)){var a=parseInt(e.substr(1),16);e=a>>16&255,n=a>>8&255,r=255&a}var s=this.f3;return 0===e&&0===n&&0===r||void 0===n?s(e/255)+" g":[s(e/255),s(n/255),s(r/255),"rg"].join(" ")},f.prototype.f3=function(t){return t.toFixed(3)},f.prototype.renderParagraph=function(t){var e,n,r,i,o,a,s,l,h,u,c,f,p;if(r=w(this.paragraph.text),f=this.paragraph.style,e=this.paragraph.blockstyle,this.paragraph.priorblockstyle||{},this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:e},r.join("").trim()){s=this.splitFragmentsIntoLines(r,f),l=a=void 0,n=12/this.pdf.internal.scaleFactor,this.priorMarginBottom=this.priorMarginBottom||0,c=(Math.max((e["margin-top"]||0)-this.priorMarginBottom,0)+(e["padding-top"]||0))*n,u=((e["margin-bottom"]||0)+(e["padding-bottom"]||0))*n,this.priorMarginBottom=e["margin-bottom"]||0,"always"===e["page-break-before"]&&(this.pdf.addPage(),this.y=0,c=((e["margin-top"]||0)+(e["padding-top"]||0))*n),h=this.pdf.internal.write,o=i=void 0,this.y+=c,h("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");for(var d=0;s.length;){for(i=l=0,o=(a=s.shift()).length;i!==o;)a[i][0].trim()&&(l=Math.max(l,a[i][1]["line-height"],a[i][1]["font-size"]),p=7*a[i][1]["font-size"]),i++;var g=0,m=0;for(void 0!==a[0][1]["margin-left"]&&0<a[0][1]["margin-left"]&&(g=(m=this.pdf.internal.getCoordinateString(a[0][1]["margin-left"]))-d,d=m),h(g+Math.max(e["margin-left"]||0,0)*n,(-12*l).toFixed(2),"Td"),i=0,o=a.length;i!==o;)a[i][0]&&this.RenderTextFragment(a[i][0],a[i][1]),i++;if(this.y+=l*n,this.executeWatchFunctions(a[0][1])&&0<s.length){var y=[],v=[];s.forEach(function(t){for(var e=0,n=t.length;e!==n;)t[e][0]&&(y.push(t[e][0]+" "),v.push(t[e][1])),++e}),s=this.splitFragmentsIntoLines(w(y),v),h("ET","Q"),h("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td")}}return t&&"function"==typeof t&&t.call(this,this.x-9,this.y-p/2),h("ET","Q"),this.y+=u}},f.prototype.setBlockBoundary=function(t){return this.renderParagraph(t)},f.prototype.setBlockStyle=function(t){return this.paragraph.blockstyle=t},f.prototype.addText=function(t,e){return this.paragraph.text.push(t),this.paragraph.style.push(e)},i={helvetica:"helvetica","sans-serif":"helvetica","times new roman":"times",serif:"times",times:"times",monospace:"courier",courier:"courier"},l={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},a={normal:"normal",italic:"italic",oblique:"italic"},s={left:"left",right:"right",center:"center",justify:"justify"},h={none:"none",right:"right",left:"left"},u={none:"none",both:"both"},n={normal:1},t.fromHTML=function(t,e,n,r,i,o){return this.margins_doc=o||{top:0,bottom:0},r||(r={}),r.elementHandlers||(r.elementHandlers={}),m(this,t,isNaN(e)?4:e,isNaN(n)?4:n,r,i)}}(lt.API),lt.API,("undefined"!=typeof window&&window||"undefined"!=typeof global&&global).html2pdf=function(t,a,e){var n=a.canvas;if(n){var r,i;if((n.pdf=a).annotations={_nameMap:[],createAnnotation:function(t,e){var n,r=a.context2d._wrapX(e.left),i=a.context2d._wrapY(e.top),o=(a.context2d._page(e.top),t.indexOf("#"));n=0<=o?{name:t.substring(o+1)}:{url:t},a.link(r,i,e.right-e.left,e.bottom-e.top,n)},setName:function(t,e){var n=a.context2d._wrapX(e.left),r=a.context2d._wrapY(e.top),i=a.context2d._page(e.top);this._nameMap[t]={page:i,x:n,y:r}}},n.annotations=a.annotations,a.context2d._pageBreakAt=function(t){this.pageBreaks.push(t)},a.context2d._gotoPage=function(t){for(;a.internal.getNumberOfPages()<t;)a.addPage();a.setPage(t)},"string"==typeof t){t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");var o,s,l=document.createElement("iframe");document.body.appendChild(l),null!=(o=l.contentDocument)&&null!=o||(o=l.contentWindow.document),o.open(),o.write(t),o.close(),r=o.body,s=o.body||{},t=o.documentElement||{},i=Math.max(s.scrollHeight,s.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}else s=(r=t).body||{},i=Math.max(s.scrollHeight,s.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight);var h={async:!0,allowTaint:!0,backgroundColor:"#ffffff",canvas:n,imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1,windowHeight:i=a.internal.pageSize.getHeight(),scrollY:i};a.context2d.pageWrapYEnabled=!0,a.context2d.pageWrapY=a.internal.pageSize.getHeight(),html2canvas(r,h).then(function(t){e&&(l&&l.parentElement.removeChild(l),e(a))})}else alert("jsPDF canvas plugin not installed")},window.tmp=html2pdf,function(f){var r=f.BlobBuilder||f.WebKitBlobBuilder||f.MSBlobBuilder||f.MozBlobBuilder;f.URL=f.URL||f.webkitURL||function(t,e){return(e=document.createElement("a")).href=t,e};var n=f.Blob,p=URL.createObjectURL,d=URL.revokeObjectURL,o=f.Symbol&&f.Symbol.toStringTag,t=!1,e=!1,g=!!f.ArrayBuffer,i=r&&r.prototype.append&&r.prototype.getBlob;try{t=2===new Blob(["ä"]).size,e=2===new Blob([new Uint8Array([1,2])]).size}catch(t){}function a(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function s(t,e){e=e||{};var n=new r;return a(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function l(t,e){return new n(a(t),e||{})}if(f.Blob&&(s.prototype=Blob.prototype,l.prototype=Blob.prototype),o)try{File.prototype[o]="File",Blob.prototype[o]="Blob",FileReader.prototype[o]="FileReader"}catch(t){}function h(){var t=!!f.ActiveXObject||"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,e=f.XMLHttpRequest&&f.XMLHttpRequest.prototype.send;t&&e&&(XMLHttpRequest.prototype.send=function(t){t instanceof Blob&&this.setRequestHeader("Content-Type",t.type),e.call(this,t)});try{new File([],"")}catch(t){try{var n=new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name;this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')();f.File=n}catch(t){n=function(t,e,n){var r=new Blob(t,n),i=n&&void 0!==n.lastModified?new Date(n.lastModified):new Date;return r.name=e,r.lastModifiedDate=i,r.lastModified=+i,r.toString=function(){return"[object File]"},o&&(r[o]="File"),r};f.File=n}}}t?(h(),f.Blob=e?f.Blob:l):i?(h(),f.Blob=s):function(){function a(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e.push(r):r<2048?e.push(192|r>>6,128|63&r):r<55296||57344<=r?e.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&t.charCodeAt(n)),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return e}function e(t){var e,n,r,i,o,a;for(e="",r=t.length,n=0;n<r;)switch((i=t[n++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=String.fromCharCode(i);break;case 12:case 13:o=t[n++],e+=String.fromCharCode((31&i)<<6|63&o);break;case 14:o=t[n++],a=t[n++],e+=String.fromCharCode((15&i)<<12|(63&o)<<6|(63&a)<<0)}return e}function s(t){for(var e=new Array(t.byteLength),n=new Uint8Array(t),r=e.length;r--;)e[r]=n[r];return e}function n(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[],r=0;r<t.length;r+=3){var i=t[r],o=r+1<t.length,a=o?t[r+1]:0,s=r+2<t.length,l=s?t[r+2]:0,h=i>>2,u=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;s||(f=64,o||(c=64)),n.push(e[h],e[u],e[c],e[f])}return n.join("")}var t=Object.create||function(t){function e(){}return e.prototype=t,new e};if(g)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(t){return t&&-1<r.indexOf(Object.prototype.toString.call(t))};function h(t,e){for(var n=0,r=(t=t||[]).length;n<r;n++){var i=t[n];i instanceof h?t[n]=i._buffer:"string"==typeof i?t[n]=a(i):g&&(ArrayBuffer.prototype.isPrototypeOf(i)||l(i))?t[n]=s(i):g&&(o=i)&&DataView.prototype.isPrototypeOf(o)?t[n]=s(i.buffer):t[n]=a(String(i))}var o;this._buffer=[].concat.apply([],t),this.size=this._buffer.length,this.type=e&&e.type||""}function i(t,e,n){var r=h.call(this,t,n=n||{})||this;return r.name=e,r.lastModifiedDate=n.lastModified?new Date(n.lastModified):new Date,r.lastModified=+r.lastModifiedDate,r}if(h.prototype.slice=function(t,e,n){return new h([this._buffer.slice(t||0,e||this._buffer.length)],{type:n})},h.prototype.toString=function(){return"[object Blob]"},(i.prototype=t(h.prototype)).constructor=i,Object.setPrototypeOf)Object.setPrototypeOf(i,h);else try{i.__proto__=h}catch(t){}function o(){if(!(this instanceof o))throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");var n=document.createDocumentFragment();this.addEventListener=n.addEventListener,this.dispatchEvent=function(t){var e=this["on"+t.type];"function"==typeof e&&e(t),n.dispatchEvent(t)},this.removeEventListener=n.removeEventListener}function u(t,e,n){if(!(e instanceof h))throw new TypeError("Failed to execute '"+n+"' on 'FileReader': parameter 1 is not of type 'Blob'.");t.result="",setTimeout(function(){this.readyState=o.LOADING,t.dispatchEvent(new Event("load")),t.dispatchEvent(new Event("loadend"))})}i.prototype.toString=function(){return"[object File]"},o.EMPTY=0,o.LOADING=1,o.DONE=2,o.prototype.error=null,o.prototype.onabort=null,o.prototype.onerror=null,o.prototype.onload=null,o.prototype.onloadend=null,o.prototype.onloadstart=null,o.prototype.onprogress=null,o.prototype.readAsDataURL=function(t){u(this,t,"readAsDataURL"),this.result="data:"+t.type+";base64,"+n(t._buffer)},o.prototype.readAsText=function(t){u(this,t,"readAsText"),this.result=e(t._buffer)},o.prototype.readAsArrayBuffer=function(t){u(this,t,"readAsText"),this.result=t._buffer.slice()},o.prototype.abort=function(){},URL.createObjectURL=function(t){return t instanceof h?"data:"+t.type+";base64,"+n(t._buffer):p.call(URL,t)},URL.revokeObjectURL=function(t){d&&d.call(URL,t)};var c=f.XMLHttpRequest&&f.XMLHttpRequest.prototype.send;c&&(XMLHttpRequest.prototype.send=function(t){t instanceof h?(this.setRequestHeader("Content-Type",t.type),c.call(this,e(t._buffer))):c.call(this,t)}),f.FileReader=o,f.File=i,f.Blob=h}()}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")());var ht,ut,ct,ft,pt,dt,gt,mt,yt,vt,wt,bt,xt,Nt,Lt,le=le||function(s){if(!(void 0===s||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=s.document,l=function(){return s.URL||s.webkitURL||s},h=t.createElementNS("http://www.w3.org/1999/xhtml","a"),u="download"in h,c=/constructor/i.test(s.HTMLElement)||s.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),p=s.setImmediate||s.setTimeout,d=function(t){p(function(){throw t},0)},g=function(t){setTimeout(function(){"string"==typeof t?l().revokeObjectURL(t):t.remove()},4e4)},m=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},r=function(t,n,e){e||(t=m(t));var r,i=this,o="application/octet-stream"===t.type,a=function(){!function(t,e,n){for(var r=(e=[].concat(e)).length;r--;){var i=t["on"+e[r]];if("function"==typeof i)try{i.call(t,n||t)}catch(t){d(t)}}}(i,"writestart progress write writeend".split(" "))};if(i.readyState=i.INIT,u)return r=l().createObjectURL(t),void p(function(){var t,e;h.href=r,h.download=n,t=h,e=new MouseEvent("click"),t.dispatchEvent(e),a(),g(r),i.readyState=i.DONE},0);!function(){if((f||o&&c)&&s.FileReader){var e=new FileReader;return e.onloadend=function(){var t=f?e.result:e.result.replace(/^data:[^;]*;/,"data:attachment/file;");s.open(t,"_blank")||(s.location.href=t),t=void 0,i.readyState=i.DONE,a()},e.readAsDataURL(t),i.readyState=i.INIT}r||(r=l().createObjectURL(t)),o?s.location.href=r:s.open(r,"_blank")||(s.location.href=r);i.readyState=i.DONE,a(),g(r)}()},e=r.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=m(t)),navigator.msSaveOrOpenBlob(t,e)}:(e.abort=function(){},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(t,e,n){return new r(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||void 0);function At(x){var t=0;if(71!==x[t++]||73!==x[t++]||70!==x[t++]||56!==x[t++]||56!=(x[t++]+1&253)||97!==x[t++])throw"Invalid GIF 87a/89a header.";var N=x[t++]|x[t++]<<8,e=x[t++]|x[t++]<<8,n=x[t++],r=n>>7,i=1<<(7&n)+1;x[t++];x[t++];var o=null;r&&(o=t,t+=3*i);var a=!0,s=[],l=0,h=null,u=0,c=null;for(this.width=N,this.height=e;a&&t<x.length;)switch(x[t++]){case 33:switch(x[t++]){case 255:if(11!==x[t]||78==x[t+1]&&69==x[t+2]&&84==x[t+3]&&83==x[t+4]&&67==x[t+5]&&65==x[t+6]&&80==x[t+7]&&69==x[t+8]&&50==x[t+9]&&46==x[t+10]&&48==x[t+11]&&3==x[t+12]&&1==x[t+13]&&0==x[t+16])t+=14,c=x[t++]|x[t++]<<8,t++;else for(t+=12;;){if(0===(A=x[t++]))break;t+=A}break;case 249:if(4!==x[t++]||0!==x[t+4])throw"Invalid graphics extension block.";var f=x[t++];l=x[t++]|x[t++]<<8,h=x[t++],0==(1&f)&&(h=null),u=f>>2&7,t++;break;case 254:for(;;){if(0===(A=x[t++]))break;t+=A}break;default:throw"Unknown graphic control label: 0x"+x[t-1].toString(16)}break;case 44:var p=x[t++]|x[t++]<<8,d=x[t++]|x[t++]<<8,g=x[t++]|x[t++]<<8,m=x[t++]|x[t++]<<8,y=x[t++],v=y>>6&1,w=o,b=!1;if(y>>7){b=!0;w=t,t+=3*(1<<(7&y)+1)}var L=t;for(t++;;){var A;if(0===(A=x[t++]))break;t+=A}s.push({x:p,y:d,width:g,height:m,has_local_palette:b,palette_offset:w,data_offset:L,data_length:t-L,transparent_index:h,interlaced:!!v,delay:l,disposal:u});break;case 59:a=!1;break;default:throw"Unknown gif block: 0x"+x[t-1].toString(16)}this.numFrames=function(){return s.length},this.loopCount=function(){return c},this.frameInfo=function(t){if(t<0||t>=s.length)throw"Frame index out of range.";return s[t]},this.decodeAndBlitFrameBGRA=function(t,e){var n=this.frameInfo(t),r=n.width*n.height,i=new Uint8Array(r);St(x,n.data_offset,i,r);var o=n.palette_offset,a=n.transparent_index;null===a&&(a=256);var s=n.width,l=N-s,h=s,u=4*(n.y*N+n.x),c=4*((n.y+n.height)*N+n.x),f=u,p=4*l;!0===n.interlaced&&(p+=4*(s+l)*7);for(var d=8,g=0,m=i.length;g<m;++g){var y=i[g];if(0===h&&(h=s,c<=(f+=p)&&(p=l+4*(s+l)*(d-1),f=u+(s+l)*(d<<1),d>>=1)),y===a)f+=4;else{var v=x[o+3*y],w=x[o+3*y+1],b=x[o+3*y+2];e[f++]=b,e[f++]=w,e[f++]=v,e[f++]=255}--h}},this.decodeAndBlitFrameRGBA=function(t,e){var n=this.frameInfo(t),r=n.width*n.height,i=new Uint8Array(r);St(x,n.data_offset,i,r);var o=n.palette_offset,a=n.transparent_index;null===a&&(a=256);var s=n.width,l=N-s,h=s,u=4*(n.y*N+n.x),c=4*((n.y+n.height)*N+n.x),f=u,p=4*l;!0===n.interlaced&&(p+=4*(s+l)*7);for(var d=8,g=0,m=i.length;g<m;++g){var y=i[g];if(0===h&&(h=s,c<=(f+=p)&&(p=l+4*(s+l)*(d-1),f=u+(s+l)*(d<<1),d>>=1)),y===a)f+=4;else{var v=x[o+3*y],w=x[o+3*y+1],b=x[o+3*y+2];e[f++]=v,e[f++]=w,e[f++]=b,e[f++]=255}--h}}}function St(t,e,n,r){for(var i=t[e++],o=1<<i,a=o+1,s=a+1,l=i+1,h=(1<<l)-1,u=0,c=0,f=0,p=t[e++],d=new Int32Array(4096),g=null;;){for(;u<16&&0!==p;)c|=t[e++]<<u,u+=8,1===p?p=t[e++]:--p;if(u<l)break;var m=c&h;if(c>>=l,u-=l,m!==o){if(m===a)break;for(var y=m<s?m:g,v=0,w=y;o<w;)w=d[w]>>8,++v;var b=w;if(r<f+v+(y!==m?1:0))return void console.log("Warning, gif stream longer than expected.");n[f++]=b;var x=f+=v;for(y!==m&&(n[f++]=b),w=y;v--;)w=d[w],n[--x]=255&w,w>>=8;null!==g&&s<4096&&(d[s++]=g<<8|b,h+1<=s&&l<12&&(++l,h=h<<1|1)),g=m}else s=a+1,h=(1<<(l=i+1))-1,g=null}return f!==r&&console.log("Warning, gif stream shorter than expected."),n}try{exports.GifWriter=function(y,t,e,n){var v=0,r=void 0===(n=void 0===n?{}:n).loop?null:n.loop,w=void 0===n.palette?null:n.palette;if(t<=0||e<=0||65535<t||65535<e)throw"Width/Height invalid.";function b(t){var e=t.length;if(e<2||256<e||e&e-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return e}y[v++]=71,y[v++]=73,y[v++]=70,y[v++]=56,y[v++]=57,y[v++]=97;var i=0,o=0;if(null!==w){for(var a=b(w);a>>=1;)++i;if(a=1<<i,--i,void 0!==n.background){if(a<=(o=n.background))throw"Background index out of range.";if(0===o)throw"Background index explicitly passed as 0."}}if(y[v++]=255&t,y[v++]=t>>8&255,y[v++]=255&e,y[v++]=e>>8&255,y[v++]=(null!==w?128:0)|i,y[v++]=o,y[v++]=0,null!==w)for(var s=0,l=w.length;s<l;++s){var h=w[s];y[v++]=h>>16&255,y[v++]=h>>8&255,y[v++]=255&h}if(null!==r){if(r<0||65535<r)throw"Loop count invalid.";y[v++]=33,y[v++]=255,y[v++]=11,y[v++]=78,y[v++]=69,y[v++]=84,y[v++]=83,y[v++]=67,y[v++]=65,y[v++]=80,y[v++]=69,y[v++]=50,y[v++]=46,y[v++]=48,y[v++]=3,y[v++]=1,y[v++]=255&r,y[v++]=r>>8&255,y[v++]=0}var x=!1;this.addFrame=function(t,e,n,r,i,o){if(!0===x&&(--v,x=!1),o=void 0===o?{}:o,t<0||e<0||65535<t||65535<e)throw"x/y invalid.";if(n<=0||r<=0||65535<n||65535<r)throw"Width/Height invalid.";if(i.length<n*r)throw"Not enough pixels for the frame size.";var a=!0,s=o.palette;if(null==s&&(a=!1,s=w),null==s)throw"Must supply either a local or global palette.";for(var l=b(s),h=0;l>>=1;)++h;l=1<<h;var u=void 0===o.delay?0:o.delay,c=void 0===o.disposal?0:o.disposal;if(c<0||3<c)throw"Disposal out of range.";var f=!1,p=0;if(void 0!==o.transparent&&null!==o.transparent&&(f=!0,(p=o.transparent)<0||l<=p))throw"Transparent color index.";if((0!==c||f||0!==u)&&(y[v++]=33,y[v++]=249,y[v++]=4,y[v++]=c<<2|(!0===f?1:0),y[v++]=255&u,y[v++]=u>>8&255,y[v++]=p,y[v++]=0),y[v++]=44,y[v++]=255&t,y[v++]=t>>8&255,y[v++]=255&e,y[v++]=e>>8&255,y[v++]=255&n,y[v++]=n>>8&255,y[v++]=255&r,y[v++]=r>>8&255,y[v++]=!0===a?128|h-1:0,!0===a)for(var d=0,g=s.length;d<g;++d){var m=s[d];y[v++]=m>>16&255,y[v++]=m>>8&255,y[v++]=255&m}v=function(e,n,t,r){e[n++]=t;var i=n++,o=1<<t,a=o-1,s=o+1,l=s+1,h=t+1,u=0,c=0;function f(t){for(;t<=u;)e[n++]=255&c,c>>=8,u-=8,n===i+256&&(e[i]=255,i=n++)}function p(t){c|=t<<u,u+=h,f(8)}var d=r[0]&a,g={};p(o);for(var m=1,y=r.length;m<y;++m){var v=r[m]&a,w=d<<8|v,b=g[w];if(void 0===b){for(c|=d<<u,u+=h;8<=u;)e[n++]=255&c,c>>=8,u-=8,n===i+256&&(e[i]=255,i=n++);4096===l?(p(o),l=s+1,h=t+1,g={}):(1<<h<=l&&++h,g[w]=l++),d=v}else d=b}return p(d),p(s),f(1),i+1===n?e[i]=0:(e[i]=n-i-1,e[n++]=0),n}(y,v,h<2?2:h,i)},this.end=function(){return!1===x&&(y[v++]=59,x=!0),v}},exports.GifReader=At}catch(t){}
/*
    Copyright (c) 2008, Adobe Systems Incorporated
    All rights reserved.

    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are
    met:

    * Redistributions of source code must retain the above copyright notice, 
      this list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the 
      documentation and/or other materials provided with the distribution.
    
    * Neither the name of Adobe Systems Incorporated nor the names of its 
      contributors may be used to endorse or promote products derived from 
      this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
    IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
    THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
function _t(t){var N,L,A,S,e,c=Math.floor,_=new Array(64),F=new Array(64),P=new Array(64),k=new Array(64),y=new Array(65535),v=new Array(65535),Z=new Array(64),w=new Array(64),I=[],C=0,B=7,j=new Array(64),E=new Array(64),M=new Array(64),n=new Array(256),O=new Array(2048),b=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],q=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],T=[0,1,2,3,4,5,6,7,8,9,10,11],R=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],D=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],U=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],z=[0,1,2,3,4,5,6,7,8,9,10,11],H=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],W=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function r(t,e){for(var n=0,r=0,i=new Array,o=1;o<=16;o++){for(var a=1;a<=t[o];a++)i[e[r]]=[],i[e[r]][0]=n,i[e[r]][1]=o,r++,n++;n*=2}return i}function V(t){for(var e=t[0],n=t[1]-1;0<=n;)e&1<<n&&(C|=1<<B),n--,--B<0&&(255==C?(G(255),G(0)):G(C),B=7,C=0)}function G(t){I.push(t)}function Y(t){G(t>>8&255),G(255&t)}function J(t,e,n,r,i){for(var o,a=i[0],s=i[240],l=function(t,e){var n,r,i,o,a,s,l,h,u,c,f=0;for(u=0;u<8;++u){n=t[f],r=t[f+1],i=t[f+2],o=t[f+3],a=t[f+4],s=t[f+5],l=t[f+6];var p=n+(h=t[f+7]),d=n-h,g=r+l,m=r-l,y=i+s,v=i-s,w=o+a,b=o-a,x=p+w,N=p-w,L=g+y,A=g-y;t[f]=x+L,t[f+4]=x-L;var S=.707106781*(A+N);t[f+2]=N+S,t[f+6]=N-S;var _=.382683433*((x=b+v)-(A=m+d)),F=.5411961*x+_,P=1.306562965*A+_,k=.707106781*(L=v+m),I=d+k,C=d-k;t[f+5]=C+F,t[f+3]=C-F,t[f+1]=I+P,t[f+7]=I-P,f+=8}for(u=f=0;u<8;++u){n=t[f],r=t[f+8],i=t[f+16],o=t[f+24],a=t[f+32],s=t[f+40],l=t[f+48];var B=n+(h=t[f+56]),j=n-h,E=r+l,M=r-l,O=i+s,q=i-s,T=o+a,R=o-a,D=B+T,U=B-T,z=E+O,H=E-O;t[f]=D+z,t[f+32]=D-z;var W=.707106781*(H+U);t[f+16]=U+W,t[f+48]=U-W;var V=.382683433*((D=R+q)-(H=M+j)),G=.5411961*D+V,Y=1.306562965*H+V,J=.707106781*(z=q+M),X=j+J,K=j-J;t[f+40]=K+G,t[f+24]=K-G,t[f+8]=X+Y,t[f+56]=X-Y,f++}for(u=0;u<64;++u)c=t[u]*e[u],Z[u]=0<c?c+.5|0:c-.5|0;return Z}(t,e),h=0;h<64;++h)w[b[h]]=l[h];var u=w[0]-n;n=w[0],0==u?V(r[0]):(V(r[v[o=32767+u]]),V(y[o]));for(var c=63;0<c&&0==w[c];c--);if(0==c)return V(a),n;for(var f,p=1;p<=c;){for(var d=p;0==w[p]&&p<=c;++p);var g=p-d;if(16<=g){f=g>>4;for(var m=1;m<=f;++m)V(s);g&=15}o=32767+w[p],V(i[(g<<4)+v[o]]),V(y[o]),p++}return 63!=c&&V(a),n}function X(t){if(t<=0&&(t=1),100<t&&(t=100),e!=t){(function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;n<64;n++){var r=c((e[n]*t+50)/100);r<1?r=1:255<r&&(r=255),_[b[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;o<64;o++){var a=c((i[o]*t+50)/100);a<1?a=1:255<a&&(a=255),F[b[o]]=a}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],l=0,h=0;h<8;h++)for(var u=0;u<8;u++)P[l]=1/(_[b[l]]*s[h]*s[u]*8),k[l]=1/(F[b[l]]*s[h]*s[u]*8),l++})(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),e=t}}this.encode=function(t,e){var n,r;(new Date).getTime();e&&X(e),I=new Array,C=0,B=7,Y(65496),Y(65504),Y(16),G(74),G(70),G(73),G(70),G(0),G(1),G(1),G(0),Y(1),Y(1),G(0),G(0),function(){Y(65499),Y(132),G(0);for(var t=0;t<64;t++)G(_[t]);G(1);for(var e=0;e<64;e++)G(F[e])}(),n=t.width,r=t.height,Y(65472),Y(17),G(8),Y(r),Y(n),G(3),G(1),G(17),G(0),G(2),G(17),G(1),G(3),G(17),G(1),function(){Y(65476),Y(418),G(0);for(var t=0;t<16;t++)G(q[t+1]);for(var e=0;e<=11;e++)G(T[e]);G(16);for(var n=0;n<16;n++)G(R[n+1]);for(var r=0;r<=161;r++)G(D[r]);G(1);for(var i=0;i<16;i++)G(U[i+1]);for(var o=0;o<=11;o++)G(z[o]);G(17);for(var a=0;a<16;a++)G(H[a+1]);for(var s=0;s<=161;s++)G(W[s])}(),Y(65498),Y(12),G(3),G(1),G(0),G(2),G(17),G(3),G(17),G(0),G(63),G(0);var i=0,o=0,a=0;C=0,B=7,this.encode.displayName="_encode_";for(var s,l,h,u,c,f,p,d,g,m=t.data,y=t.width,v=t.height,w=4*y,b=0;b<v;){for(s=0;s<w;){for(f=c=w*b+s,p=-1,g=d=0;g<64;g++)f=c+(d=g>>3)*w+(p=4*(7&g)),v<=b+d&&(f-=w*(b+1+d-v)),w<=s+p&&(f-=s+p-w+4),l=m[f++],h=m[f++],u=m[f++],j[g]=(O[l]+O[h+256>>0]+O[u+512>>0]>>16)-128,E[g]=(O[l+768>>0]+O[h+1024>>0]+O[u+1280>>0]>>16)-128,M[g]=(O[l+1280>>0]+O[h+1536>>0]+O[u+1792>>0]>>16)-128;i=J(j,P,i,N,A),o=J(E,k,o,L,S),a=J(M,k,a,L,S),s+=32}b+=8}if(0<=B){var x=[];x[1]=B+1,x[0]=(1<<B+1)-1,V(x)}return Y(65497),new Uint8Array(I)},function(){(new Date).getTime();t||(t=50),function(){for(var t=String.fromCharCode,e=0;e<256;e++)n[e]=t(e)}(),N=r(q,T),L=r(U,z),A=r(R,D),S=r(H,W),function(){for(var t=1,e=2,n=1;n<=15;n++){for(var r=t;r<e;r++)v[32767+r]=n,y[32767+r]=[],y[32767+r][1]=n,y[32767+r][0]=r;for(var i=-(e-1);i<=-t;i++)v[32767+i]=n,y[32767+i]=[],y[32767+i][1]=n,y[32767+i][0]=e-1+i;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)O[t]=19595*t,O[t+256>>0]=38470*t,O[t+512>>0]=7471*t+32768,O[t+768>>0]=-11059*t,O[t+1024>>0]=-21709*t,O[t+1280>>0]=32768*t+8421375,O[t+1536>>0]=-27439*t,O[t+1792>>0]=-5329*t}(),X(t),(new Date).getTime()}()}function Ft(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,-1===["BM","BA","CI","CP","IC","PT"].indexOf(this.flag))throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}window.tmp=At,lt.API.adler32cs=(dt="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,gt=null,mt=function(){if(!dt)return function(){return!1};try{var t={};"function"==typeof t.Buffer&&(gt=t.Buffer)}catch(t){}return function(t){return t instanceof ArrayBuffer||null!==gt&&t instanceof gt}}(),yt=null!==gt?function(t){return new gt(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))},vt=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)n=(n+(255&e.charCodeAt(i)))%65521,r=(r+n)%65521;return(r<<16|n)>>>0},wt=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)n=(n+e[i])%65521,r=(r+n)%65521;return(r<<16|n)>>>0},xt=(bt={}).Adler32=(((pt=(ft=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(t=null==t?1:+t))throw new Error("First arguments needs to be a finite number.");this.checksum=t>>>0}).prototype={}).constructor=ft).from=((ht=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");this.checksum=vt(1,t.toString())}).prototype=pt,ht),ft.fromUtf8=((ut=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");var e=yt(t.toString());this.checksum=vt(1,e)}).prototype=pt,ut),dt&&(ft.fromBuffer=((ct=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(!mt(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=wt(1,e)}).prototype=pt,ct)),pt.update=function(t){if(null==t)throw new Error("First argument needs to be a string.");return t=t.toString(),this.checksum=vt(this.checksum,t)},pt.updateUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=yt(t.toString());return this.checksum=vt(this.checksum,e)},dt&&(pt.updateBuffer=function(t){if(!mt(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=wt(this.checksum,e)}),pt.clone=function(){return new xt(this.checksum)},ft),bt.from=function(t){if(null==t)throw new Error("First argument needs to be a string.");return vt(1,t.toString())},bt.fromUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=yt(t.toString());return vt(1,e)},dt&&(bt.fromBuffer=function(t){if(!mt(t))throw new Error("First argument need to be ArrayBuffer.");var e=new Uint8Array(t);return wt(1,e)}),bt),function(t){t.__bidiEngine__=t.prototype.__bidiEngine__=function(t){var d,g,c,f,i,o,a,s=e,m=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],y=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],v={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},l={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},h=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],u=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),w=!1,b=0;this.__bidiEngine__={};var x=function(t){var e=t.charCodeAt(),n=e>>8,r=l[n];return void 0!==r?s[256*r+(255&e)]:252===n||253===n?"AL":u.test(n)?"L":8===n?"R":"N"},p=function(t){for(var e,n=0;n<t.length;n++){if("L"===(e=x(t.charAt(n))))return!1;if("R"===e)return!0}return!1},N=function(t,e,n,r){var i,o,a,s,l=e[r];switch(l){case"L":case"R":w=!1;break;case"N":case"AN":break;case"EN":w&&(l="AN");break;case"AL":w=!0,l="R";break;case"WS":l="N";break;case"CS":r<1||r+1>=e.length||"EN"!==(i=n[r-1])&&"AN"!==i||"EN"!==(o=e[r+1])&&"AN"!==o?l="N":w&&(o="AN"),l=o===i?o:"N";break;case"ES":l="EN"===(i=0<r?n[r-1]:"B")&&r+1<e.length&&"EN"===e[r+1]?"EN":"N";break;case"ET":if(0<r&&"EN"===n[r-1]){l="EN";break}if(w){l="N";break}for(a=r+1,s=e.length;a<s&&"ET"===e[a];)a++;l=a<s&&"EN"===e[a]?"EN":"N";break;case"NSM":if(c&&!f){for(s=e.length,a=r+1;a<s&&"NSM"===e[a];)a++;if(a<s){var h=t[r],u=1425<=h&&h<=2303||64286===h;if(i=e[a],u&&("R"===i||"AL"===i)){l="R";break}}}l=r<1||"B"===(i=e[r-1])?"N":n[r-1];break;case"B":d=!(w=!1),l=b;break;case"S":g=!0,l="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":w=!1;break;case"BN":l="N"}return l},L=function(t,e,n){var r=t.split("");return n&&A(r,n,{hiLevel:b}),r.reverse(),e&&e.reverse(),r.join("")},A=function(t,e,n){var r,i,o,a,s,l=-1,h=t.length,u=0,c=[],f=b?y:m,p=[];for(g=d=w=!1,i=0;i<h;i++)p[i]=x(t[i]);for(o=0;o<h;o++){if(s=u,c[o]=N(t,p,c,o),r=240&(u=f[s][v[c[o]]]),u&=15,e[o]=a=f[u][5],0<r)if(16===r){for(i=l;i<o;i++)e[i]=1;l=-1}else l=-1;if(f[u][6])-1===l&&(l=o);else if(-1<l){for(i=l;i<o;i++)e[i]=a;l=-1}"B"===p[o]&&(e[o]=0),n.hiLevel|=a}g&&function(t,e,n){for(var r=0;r<n;r++)if("S"===t[r]){e[r]=b;for(var i=r-1;0<=i&&"WS"===t[i];i--)e[i]=b}}(p,e,h)},S=function(t,e,n,r,i){if(!(i.hiLevel<t)){if(1===t&&1===b&&!d)return e.reverse(),void(n&&n.reverse());for(var o,a,s,l,h=e.length,u=0;u<h;){if(r[u]>=t){for(s=u+1;s<h&&r[s]>=t;)s++;for(l=u,a=s-1;l<a;l++,a--)o=e[l],e[l]=e[a],e[a]=o,n&&(o=n[l],n[l]=n[a],n[a]=o);u=s}u++}}},_=function(t,e,n){var r=t.split(""),i={hiLevel:b};return n||(n=[]),A(r,n,i),function(t,e,n){if(0!==n.hiLevel&&a)for(var r,i=0;i<t.length;i++)1===e[i]&&0<=(r=h.indexOf(t[i]))&&(t[i]=h[r+1])}(r,n,i),S(2,r,e,n,i),S(1,r,e,n,i),r.join("")};return this.__bidiEngine__.doBidiReorder=function(t,e,n){if(function(t,e){if(e)for(var n=0;n<t.length;n++)e[n]=n;void 0===f&&(f=p(t)),void 0===o&&(o=p(t))}(t,e),c||!i||o)if(c&&i&&f^o)b=f?1:0,t=L(t,e,n);else if(!c&&i&&o)b=f?1:0,t=_(t,e,n),t=L(t,e);else if(!c||f||i||o){if(c&&!i&&f^o)t=L(t,e),t=f?(b=0,_(t,e,n)):(b=1,t=_(t,e,n),L(t,e));else if(c&&f&&!i&&o)b=1,t=_(t,e,n),t=L(t,e);else if(!c&&!i&&f^o){var r=a;f?(b=1,t=_(t,e,n),b=0,a=!1,t=_(t,e,n),a=r):(b=0,t=_(t,e,n),t=L(t,e),a=!(b=1),t=_(t,e,n),a=r,t=L(t,e))}}else b=0,t=_(t,e,n);else b=f?1:0,t=_(t,e,n);return t},this.__bidiEngine__.setOptions=function(t){t&&(c=t.isInputVisual,i=t.isOutputVisual,f=t.isInputRtl,o=t.isOutputRtl,a=t.isSymmetricSwapping)},this.__bidiEngine__.setOptions(t),this.__bidiEngine__};var e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],o=new t.__bidiEngine__({isInputVisual:!0});t.API.events.push(["postProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),r=(t.mutex,n.lang,[]);if("[object Array]"===Object.prototype.toString.call(e)){var i=0;for(r=[],i=0;i<e.length;i+=1)"[object Array]"===Object.prototype.toString.call(e[i])?r.push([o.doBidiReorder(e[i][0]),e[i][1],e[i][2]]):r.push([o.doBidiReorder(e[i])]);t.text=r}else t.text=o.doBidiReorder(e)}])}(lt),window.tmp=_t,Ft.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var n=this.datav.getUint8(this.pos++,!0),r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:r,blue:n,quad:o}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},Ft.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(t){console.log("bit decode error:"+t)}},Ft.prototype.bit1=function(){var t=Math.ceil(this.width/8),e=t%4,n=0<=this.height?this.height-1:-this.height;for(n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++)for(var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+8*i*4,s=0;s<8&&8*i+s<this.width;s++){var l=this.palette[o>>7-s&1];this.data[a+4*s]=l.blue,this.data[a+4*s+1]=l.green,this.data[a+4*s+2]=l.red,this.data[a+4*s+3]=255}0!=e&&(this.pos+=4-e)}},Ft.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+2*i*4,s=o>>4,l=15&o,h=this.palette[s];if(this.data[a]=h.blue,this.data[a+1]=h.green,this.data[a+2]=h.red,this.data[a+3]=255,2*i+1>=this.width)break;h=this.palette[l],this.data[a+4]=h.blue,this.data[a+4+1]=h.green,this.data[a+4+2]=h.red,this.data[a+4+3]=255}0!=e&&(this.pos+=4-e)}},Ft.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;0<=e;e--){for(var n=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var i=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+4*r;if(i<this.palette.length){var a=this.palette[i];this.data[o]=a.red,this.data[o+1]=a.green,this.data[o+2]=a.blue,this.data[o+3]=255}else this.data[o]=255,this.data[o+1]=255,this.data[o+2]=255,this.data[o+3]=255}0!=t&&(this.pos+=4-t)}},Ft.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<this.width;i++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var a=(o&e)/e*255|0,s=(o>>5&e)/e*255|0,l=(o>>10&e)/e*255|0,h=o>>15?255:0,u=r*this.width*4+4*i;this.data[u]=l,this.data[u+1]=s,this.data[u+2]=a,this.data[u+3]=h}this.pos+=t}},Ft.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),n=parseInt("111111",2),r=this.height-1;0<=r;r--){for(var i=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var s=(a&e)/e*255|0,l=(a>>5&n)/n*255|0,h=(a>>11)/e*255|0,u=i*this.width*4+4*o;this.data[u]=h,this.data[u+1]=l,this.data[u+2]=s,this.data[u+3]=255}this.pos+=t}},Ft.prototype.bit24=function(){for(var t=this.height-1;0<=t;t--){for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=e*this.width*4+4*n;this.data[a]=o,this.data[a+1]=i,this.data[a+2]=r,this.data[a+3]=255}this.pos+=this.width%4}},Ft.prototype.bit32=function(){for(var t=this.height-1;0<=t;t--)for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*n;this.data[s]=o,this.data[s+1]=i,this.data[s+2]=r,this.data[s+3]=a}},Ft.prototype.getData=function(){return this.data},window.tmp=Ft,
/*
   Copyright (c) 2013 Gildas Lormeau. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright 
   notice, this list of conditions and the following disclaimer in 
   the documentation and/or other materials provided with the distribution.

   3. The names of the authors may not be used to endorse or promote products
   derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
   INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
   INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
   INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
   OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */
function(t){var d=15,g=573,e=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function ct(){var p=this;function l(t,e){for(var n=0;n|=1&t,t>>>=1,n<<=1,0<--e;);return n>>>1}p.build_tree=function(t){var e,n,r,i=p.dyn_tree,o=p.stat_desc.static_tree,a=p.stat_desc.elems,s=-1;for(t.heap_len=0,t.heap_max=g,e=0;e<a;e++)0!==i[2*e]?(t.heap[++t.heap_len]=s=e,t.depth[e]=0):i[2*e+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=s<2?++s:0)]=1,t.depth[r]=0,t.opt_len--,o&&(t.static_len-=o[2*r+1]);for(p.max_code=s,e=Math.floor(t.heap_len/2);1<=e;e--)t.pqdownheap(i,e);for(r=a;e=t.heap[1],t.heap[1]=t.heap[t.heap_len--],t.pqdownheap(i,1),n=t.heap[1],t.heap[--t.heap_max]=e,t.heap[--t.heap_max]=n,i[2*r]=i[2*e]+i[2*n],t.depth[r]=Math.max(t.depth[e],t.depth[n])+1,i[2*e+1]=i[2*n+1]=r,t.heap[1]=r++,t.pqdownheap(i,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t){var e,n,r,i,o,a,s=p.dyn_tree,l=p.stat_desc.static_tree,h=p.stat_desc.extra_bits,u=p.stat_desc.extra_base,c=p.stat_desc.max_length,f=0;for(i=0;i<=d;i++)t.bl_count[i]=0;for(s[2*t.heap[t.heap_max]+1]=0,e=t.heap_max+1;e<g;e++)c<(i=s[2*s[2*(n=t.heap[e])+1]+1]+1)&&(i=c,f++),s[2*n+1]=i,n>p.max_code||(t.bl_count[i]++,o=0,u<=n&&(o=h[n-u]),a=s[2*n],t.opt_len+=a*(i+o),l&&(t.static_len+=a*(l[2*n+1]+o)));if(0!==f){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,f-=2}while(0<f);for(i=c;0!==i;i--)for(n=t.bl_count[i];0!==n;)(r=t.heap[--e])>p.max_code||(s[2*r+1]!=i&&(t.opt_len+=(i-s[2*r+1])*s[2*r],s[2*r+1]=i),n--)}}(t),function(t,e,n){var r,i,o,a=[],s=0;for(r=1;r<=d;r++)a[r]=s=s+n[r-1]<<1;for(i=0;i<=e;i++)0!==(o=t[2*i+1])&&(t[2*i]=l(a[o]++,o))}(i,p.max_code,t.bl_count)}}function ft(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i}ct._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],ct.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],ct.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],ct.d_code=function(t){return t<256?e[t]:e[256+(t>>>7)]},ct.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ct.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ct.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ct.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ft.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],ft.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],ft.static_l_desc=new ft(ft.static_ltree,ct.extra_lbits,257,286,d),ft.static_d_desc=new ft(ft.static_dtree,ct.extra_dbits,0,30,d),ft.static_bl_desc=new ft(null,ct.extra_blbits,0,19,7);function n(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}var pt=[new n(0,0,0,0,0),new n(4,4,8,4,1),new n(4,5,16,8,1),new n(4,6,32,32,1),new n(4,4,16,16,2),new n(8,16,32,32,2),new n(8,16,128,128,2),new n(8,32,128,256,2),new n(32,128,258,1024,2),new n(32,258,258,4096,2)],dt=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function gt(t,e,n,r){var i=t[2*e],o=t[2*n];return i<o||i==o&&r[e]<=r[n]}function r(){var l,h,u,c,f,p,d,g,i,m,y,v,w,a,b,x,N,L,A,S,_,F,P,k,I,C,B,j,E,M,s,O,q,T,R,D,U,o,z,H,W,V=this,G=new ct,Y=new ct,J=new ct;function X(){var t;for(t=0;t<286;t++)s[2*t]=0;for(t=0;t<30;t++)O[2*t]=0;for(t=0;t<19;t++)q[2*t]=0;s[512]=1,V.opt_len=V.static_len=0,D=o=0}function K(t,e){var n,r,i=-1,o=t[1],a=0,s=7,l=4;for(0===o&&(s=138,l=3),t[2*(e+1)+1]=65535,n=0;n<=e;n++)r=o,o=t[2*(n+1)+1],++a<s&&r==o||(a<l?q[2*r]+=a:0!==r?(r!=i&&q[2*r]++,q[32]++):a<=10?q[34]++:q[36]++,i=r,l=(a=0)===o?(s=138,3):r==o?(s=6,3):(s=7,4))}function Z(t){V.pending_buf[V.pending++]=t}function Q(t){Z(255&t),Z(t>>>8&255)}function $(t,e){var n,r=e;16-r<W?(Q(H|=(n=t)<<W&65535),H=n>>>16-W,W+=r-16):(H|=t<<W&65535,W+=r)}function tt(t,e){var n=2*t;$(65535&e[n],65535&e[n+1])}function et(t,e){var n,r,i=-1,o=t[1],a=0,s=7,l=4;for(0===o&&(s=138,l=3),n=0;n<=e;n++)if(r=o,o=t[2*(n+1)+1],!(++a<s&&r==o)){if(a<l)for(;tt(r,q),0!=--a;);else 0!==r?(r!=i&&(tt(r,q),a--),tt(16,q),$(a-3,2)):a<=10?(tt(17,q),$(a-3,3)):(tt(18,q),$(a-11,7));i=r,l=(a=0)===o?(s=138,3):r==o?(s=6,3):(s=7,4)}}function nt(){16==W?(Q(H),W=H=0):8<=W&&(Z(255&H),H>>>=8,W-=8)}function rt(t,e){var n,r,i;if(V.pending_buf[U+2*D]=t>>>8&255,V.pending_buf[U+2*D+1]=255&t,V.pending_buf[T+D]=255&e,D++,0===t?s[2*e]++:(o++,t--,s[2*(ct._length_code[e]+256+1)]++,O[2*ct.d_code(t)]++),0==(8191&D)&&2<B){for(n=8*D,r=_-N,i=0;i<30;i++)n+=O[2*i]*(5+ct.extra_dbits[i]);if(n>>>=3,o<Math.floor(D/2)&&n<Math.floor(r/2))return!0}return D==R-1}function it(t,e){var n,r,i,o,a=0;if(0!==D)for(;n=V.pending_buf[U+2*a]<<8&65280|255&V.pending_buf[U+2*a+1],r=255&V.pending_buf[T+a],a++,0===n?tt(r,t):(tt((i=ct._length_code[r])+256+1,t),0!==(o=ct.extra_lbits[i])&&$(r-=ct.base_length[i],o),tt(i=ct.d_code(--n),e),0!==(o=ct.extra_dbits[i])&&$(n-=ct.base_dist[i],o)),a<D;);tt(256,t),z=t[513]}function ot(){8<W?Q(H):0<W&&Z(255&H),W=H=0}function at(t,e,n){var r,i,o;$(0+(n?1:0),3),r=t,i=e,o=!0,ot(),z=8,o&&(Q(i),Q(~i)),V.pending_buf.set(g.subarray(r,r+i),V.pending),V.pending+=i}function e(t,e,n){var r,i,o=0;0<B?(G.build_tree(V),Y.build_tree(V),o=function(){var t;for(K(s,G.max_code),K(O,Y.max_code),J.build_tree(V),t=18;3<=t&&0===q[2*ct.bl_order[t]+1];t--);return V.opt_len+=3*(t+1)+5+5+4,t}(),r=V.opt_len+3+7>>>3,(i=V.static_len+3+7>>>3)<=r&&(r=i)):r=i=e+5,e+4<=r&&-1!=t?at(t,e,n):i==r?($(2+(n?1:0),3),it(ft.static_ltree,ft.static_dtree)):($(4+(n?1:0),3),function(t,e,n){var r;for($(t-257,5),$(e-1,5),$(n-4,4),r=0;r<n;r++)$(q[2*ct.bl_order[r]+1],3);et(s,t-1),et(O,e-1)}(G.max_code+1,Y.max_code+1,o+1),it(s,O)),X(),n&&ot()}function st(t){e(0<=N?N:-1,_-N,t),N=_,l.flush_pending()}function lt(){var t,e,n,r;do{if(0===(r=i-P-_)&&0===_&&0===P)r=f;else if(-1==r)r--;else if(f+f-262<=_){for(g.set(g.subarray(f,f+f),0),F-=f,_-=f,N-=f,n=t=w;e=65535&y[--n],y[n]=f<=e?e-f:0,0!=--t;);for(n=t=f;e=65535&m[--n],m[n]=f<=e?e-f:0,0!=--t;);r+=f}if(0===l.avail_in)return;t=l.read_buf(g,_+P,r),3<=(P+=t)&&(v=((v=255&g[_])<<x^255&g[_+1])&b)}while(P<262&&0!==l.avail_in)}function ht(t){var e,n,r=I,i=_,o=k,a=f-262<_?_-(f-262):0,s=M,l=d,h=_+258,u=g[i+o-1],c=g[i+o];E<=k&&(r>>=2),P<s&&(s=P);do{if(g[(e=t)+o]==c&&g[e+o-1]==u&&g[e]==g[i]&&g[++e]==g[i+1]){i+=2,e++;do{}while(g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&i<h);if(n=258-(h-i),i=h-258,o<n){if(F=t,s<=(o=n))break;u=g[i+o-1],c=g[i+o]}}}while((t=65535&m[t&l])>a&&0!=--r);return o<=P?o:P}function ut(t){return t.total_in=t.total_out=0,t.msg=null,V.pending=0,V.pending_out=0,h=113,c=0,G.dyn_tree=s,G.stat_desc=ft.static_l_desc,Y.dyn_tree=O,Y.stat_desc=ft.static_d_desc,J.dyn_tree=q,J.stat_desc=ft.static_bl_desc,W=H=0,z=8,X(),function(){var t;for(i=2*f,t=y[w-1]=0;t<w-1;t++)y[t]=0;C=pt[B].max_lazy,E=pt[B].good_length,M=pt[B].nice_length,I=pt[B].max_chain,L=k=2,v=S=P=N=_=0}(),0}V.depth=[],V.bl_count=[],V.heap=[],s=[],O=[],q=[],V.pqdownheap=function(t,e){for(var n=V.heap,r=n[e],i=e<<1;i<=V.heap_len&&(i<V.heap_len&&gt(t,n[i+1],n[i],V.depth)&&i++,!gt(t,r,n[i],V.depth));)n[e]=n[i],e=i,i<<=1;n[e]=r},V.deflateInit=function(t,e,n,r,i,o){return r||(r=8),i||(i=8),o||(o=0),t.msg=null,-1==e&&(e=6),i<1||9<i||8!=r||n<9||15<n||e<0||9<e||o<0||2<o?-2:(t.dstate=V,d=(f=1<<(p=n))-1,b=(w=1<<(a=i+7))-1,x=Math.floor((a+3-1)/3),g=new Uint8Array(2*f),m=[],y=[],R=1<<i+6,V.pending_buf=new Uint8Array(4*R),u=4*R,U=Math.floor(R/2),T=3*R,B=e,j=o,ut(t))},V.deflateEnd=function(){return 42!=h&&113!=h&&666!=h?-2:(V.pending_buf=null,g=m=y=null,V.dstate=null,113==h?-3:0)},V.deflateParams=function(t,e,n){var r=0;return-1==e&&(e=6),e<0||9<e||n<0||2<n?-2:(pt[B].func!=pt[e].func&&0!==t.total_in&&(r=t.deflate(1)),B!=e&&(C=pt[B=e].max_lazy,E=pt[B].good_length,M=pt[B].nice_length,I=pt[B].max_chain),j=n,r)},V.deflateSetDictionary=function(t,e,n){var r,i=n,o=0;if(!e||42!=h)return-2;if(i<3)return 0;for(f-262<i&&(o=n-(i=f-262)),g.set(e.subarray(o,o+i),0),N=_=i,v=((v=255&g[0])<<x^255&g[1])&b,r=0;r<=i-3;r++)v=(v<<x^255&g[r+2])&b,m[r&d]=y[v],y[v]=r;return 0},V.deflate=function(t,e){var n,r,i,o,a,s;if(4<e||e<0)return-2;if(!t.next_out||!t.next_in&&0!==t.avail_in||666==h&&4!=e)return t.msg=dt[4],-2;if(0===t.avail_out)return t.msg=dt[7],-5;if(l=t,o=c,c=e,42==h&&(r=8+(p-8<<4)<<8,3<(i=(B-1&255)>>1)&&(i=3),r|=i<<6,0!==_&&(r|=32),h=113,Z((s=r+=31-r%31)>>8&255),Z(255&s)),0!==V.pending){if(l.flush_pending(),0===l.avail_out)return c=-1,0}else if(0===l.avail_in&&e<=o&&4!=e)return l.msg=dt[7],-5;if(666==h&&0!==l.avail_in)return t.msg=dt[7],-5;if(0!==l.avail_in||0!==P||0!=e&&666!=h){switch(a=-1,pt[B].func){case 0:a=function(t){var e,n=65535;for(u-5<n&&(n=u-5);;){if(P<=1){if(lt(),0===P&&0==t)return 0;if(0===P)break}if(_+=P,e=N+n,((P=0)===_||e<=_)&&(P=_-e,_=e,st(!1),0===l.avail_out))return 0;if(f-262<=_-N&&(st(!1),0===l.avail_out))return 0}return st(4==t),0===l.avail_out?4==t?2:0:4==t?3:1}(e);break;case 1:a=function(t){for(var e,n=0;;){if(P<262){if(lt(),P<262&&0==t)return 0;if(0===P)break}if(3<=P&&(v=(v<<x^255&g[_+2])&b,n=65535&y[v],m[_&d]=y[v],y[v]=_),0!==n&&(_-n&65535)<=f-262&&2!=j&&(L=ht(n)),3<=L)if(e=rt(_-F,L-3),P-=L,L<=C&&3<=P){for(L--;v=(v<<x^255&g[++_+2])&b,n=65535&y[v],m[_&d]=y[v],y[v]=_,0!=--L;);_++}else _+=L,L=0,v=((v=255&g[_])<<x^255&g[_+1])&b;else e=rt(0,255&g[_]),P--,_++;if(e&&(st(!1),0===l.avail_out))return 0}return st(4==t),0===l.avail_out?4==t?2:0:4==t?3:1}(e);break;case 2:a=function(t){for(var e,n,r=0;;){if(P<262){if(lt(),P<262&&0==t)return 0;if(0===P)break}if(3<=P&&(v=(v<<x^255&g[_+2])&b,r=65535&y[v],m[_&d]=y[v],y[v]=_),k=L,A=F,L=2,0!==r&&k<C&&(_-r&65535)<=f-262&&(2!=j&&(L=ht(r)),L<=5&&(1==j||3==L&&4096<_-F)&&(L=2)),3<=k&&L<=k){for(n=_+P-3,e=rt(_-1-A,k-3),P-=k-1,k-=2;++_<=n&&(v=(v<<x^255&g[_+2])&b,r=65535&y[v],m[_&d]=y[v],y[v]=_),0!=--k;);if(S=0,L=2,_++,e&&(st(!1),0===l.avail_out))return 0}else if(0!==S){if((e=rt(0,255&g[_-1]))&&st(!1),_++,P--,0===l.avail_out)return 0}else S=1,_++,P--}return 0!==S&&(e=rt(0,255&g[_-1]),S=0),st(4==t),0===l.avail_out?4==t?2:0:4==t?3:1}(e)}if(2!=a&&3!=a||(h=666),0==a||2==a)return 0===l.avail_out&&(c=-1),0;if(1==a){if(1==e)$(2,3),tt(256,ft.static_ltree),nt(),1+z+10-W<9&&($(2,3),tt(256,ft.static_ltree),nt()),z=7;else if(at(0,0,!1),3==e)for(n=0;n<w;n++)y[n]=0;if(l.flush_pending(),0===l.avail_out)return c=-1,0}}return 4!=e?0:1}}function i(){this.next_in_index=0,this.next_out_index=0,this.avail_in=0,this.total_in=0,this.avail_out=0,this.total_out=0}i.prototype={deflateInit:function(t,e){return this.dstate=new r,e||(e=d),this.dstate.deflateInit(this,t,e)},deflate:function(t){return this.dstate?this.dstate.deflate(this,t):-2},deflateEnd:function(){if(!this.dstate)return-2;var t=this.dstate.deflateEnd();return this.dstate=null,t},deflateParams:function(t,e){return this.dstate?this.dstate.deflateParams(this,t,e):-2},deflateSetDictionary:function(t,e){return this.dstate?this.dstate.deflateSetDictionary(this,t,e):-2},read_buf:function(t,e,n){var r=this.avail_in;return n<r&&(r=n),0===r?0:(this.avail_in-=r,t.set(this.next_in.subarray(this.next_in_index,this.next_in_index+r),e),this.next_in_index+=r,this.total_in+=r,r)},flush_pending:function(){var t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}};var o=t.zip||t;o.Deflater=o._jzlib_Deflater=function(t){var s=new i,l=new Uint8Array(512),e=t?t.level:-1;void 0===e&&(e=-1),s.deflateInit(e),s.next_out=l,this.append=function(t,e){var n,r=[],i=0,o=0,a=0;if(t.length){s.next_in_index=0,s.next_in=t,s.avail_in=t.length;do{if(s.next_out_index=0,s.avail_out=512,0!=s.deflate(0))throw new Error("deflating: "+s.msg);s.next_out_index&&(512==s.next_out_index?r.push(new Uint8Array(l)):r.push(new Uint8Array(l.subarray(0,s.next_out_index)))),a+=s.next_out_index,e&&0<s.next_in_index&&s.next_in_index!=i&&(e(s.next_in_index),i=s.next_in_index)}while(0<s.avail_in||0===s.avail_out);return n=new Uint8Array(a),r.forEach(function(t){n.set(t,o),o+=t.length}),n}},this.flush=function(){var t,e,n=[],r=0,i=0;do{if(s.next_out_index=0,s.avail_out=512,1!=(t=s.deflate(4))&&0!=t)throw new Error("deflating: "+s.msg);0<512-s.avail_out&&n.push(new Uint8Array(l.subarray(0,s.next_out_index))),i+=s.next_out_index}while(0<s.avail_in||0===s.avail_out);return s.deflateEnd(),e=new Uint8Array(i),n.forEach(function(t){e.set(t,r),r+=t.length}),e}}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")()),("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")()).RGBColor=function(t){var e;t=t||"",this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6)),t=(t=t.replace(/ /g,"")).toLowerCase();var n={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var r in n)t==r&&(t=n[r]);for(var i=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],o=0;o<i.length;o++){var a=i[o].re,s=i[o].process,l=a.exec(t);l&&(e=s(l),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:255<this.r?255:this.r,this.g=this.g<0||isNaN(this.g)?0:255<this.g?255:this.g,this.b=this.b<0||isNaN(this.b)?0:255<this.b?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),n=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==n.length&&(n="0"+n),"#"+t+e+n}},function(t){var n="+".charCodeAt(0),r="/".charCodeAt(0),i="0".charCodeAt(0),o="a".charCodeAt(0),a="A".charCodeAt(0),s="-".charCodeAt(0),l="_".charCodeAt(0),u=function(t){var e=t.charCodeAt(0);return e===n||e===s?62:e===r||e===l?63:e<i?-1:e<i+10?e-i+26+26:e<a+26?e-a:e<o+26?e-o+26:void 0};t.API.TTFFont=function(){function i(t,e,n){var r;if(this.rawData=t,r=this.contents=new J(t),this.contents.pos=4,"ttcf"===r.readString(4)){if(!e)throw new Error("Must specify a font name for TTC files.");throw new Error("Font "+e+" not found in TTC file.")}r.pos=0,this.parse(),this.subset=new P(this),this.registerTTF()}return i.open=function(t,e,n,r){if("string"!=typeof n)throw new Error("Invalid argument supplied in TTFFont.open");return new i(function(t){var e,n,r,i,o,a;if(0<t.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var s=t.length;o="="===t.charAt(s-2)?2:"="===t.charAt(s-1)?1:0,a=new Uint8Array(3*t.length/4-o),r=0<o?t.length-4:t.length;var l=0;function h(t){a[l++]=t}for(n=e=0;e<r;e+=4,n+=3)h((16711680&(i=u(t.charAt(e))<<18|u(t.charAt(e+1))<<12|u(t.charAt(e+2))<<6|u(t.charAt(e+3))))>>16),h((65280&i)>>8),h(255&i);return 2===o?h(255&(i=u(t.charAt(e))<<2|u(t.charAt(e+1))>>4)):1===o&&(h((i=u(t.charAt(e))<<10|u(t.charAt(e+1))<<4|u(t.charAt(e+2))>>2)>>8&255),h(255&i)),a}(n),e,r)},i.prototype.parse=function(){return this.directory=new e(this.contents),this.head=new p(this),this.name=new b(this),this.cmap=new y(this),this.toUnicode=new Map,this.hhea=new g(this),this.maxp=new x(this),this.hmtx=new N(this),this.post=new v(this),this.os2=new m(this),this.loca=new F(this),this.glyf=new A(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},i.prototype.registerTTF=function(){var i,t,e,n,r;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=function(){var t,e,n,r;for(r=[],t=0,e=(n=this.bbox).length;t<e;t++)i=n[t],r.push(Math.round(i*this.scaleFactor));return r}.call(this),this.stemV=0,this.post.exists?(e=255&(n=this.post.italic_angle),!0&(t=n>>16)&&(t=-(1+(65535^t))),this.italicAngle=+(t+"."+e)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=1===(r=this.familyClass)||2===r||3===r||4===r||5===r||7===r,this.isScript=10===this.familyClass,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},i.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},i.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},i.prototype.widthOfString=function(t,e,n){var r,i,o,a,s;for(i=a=o=0,s=(t=""+t).length;0<=s?a<s:s<a;i=0<=s?++a:--a)r=t.charCodeAt(i),o+=this.widthOfGlyph(this.characterToGlyph(r))+n*(1e3/e)||0;return o*(e/1e3)},i.prototype.lineHeight=function(t,e){var n;return null==e&&(e=!1),n=e?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},i}();var h,J=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return 2147483648<=(t=this.readUInt32())?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return 32768<=(t=this.readUInt16())?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,n,r;for(n=[],e=r=0;0<=t?r<t:t<r;e=0<=t?++r:--r)n[e]=String.fromCharCode(this.readByte());return n.join("")},t.prototype.writeString=function(t){var e,n,r,i;for(i=[],e=n=0,r=t.length;0<=r?n<r:r<n;e=0<=r?++n:--n)i.push(this.writeByte(t.charCodeAt(e)));return i},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,n,r,i,o,a,s;return t=this.readByte(),e=this.readByte(),n=this.readByte(),r=this.readByte(),i=this.readByte(),o=this.readByte(),a=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^n)+4294967296*(255^r)+16777216*(255^i)+65536*(255^o)+256*(255^a)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*n+4294967296*r+16777216*i+65536*o+256*a+s},t.prototype.writeLongLong=function(t){var e,n;return e=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.read=function(t){var e,n;for(e=[],n=0;0<=t?n<t:t<n;0<=t?++n:--n)e.push(this.readByte());return e},t.prototype.write=function(t){var e,n,r,i;for(i=[],n=0,r=t.length;n<r;n++)e=t[n],i.push(this.writeByte(e));return i},t}(),e=function(){var d;function t(t){var e,n,r;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},n=0,r=this.tableCount;0<=r?n<r:r<n;0<=r?++n:--n)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}return t.prototype.encode=function(t){var e,n,r,i,o,a,s,l,h,u,c,f,p;for(p in c=Object.keys(t).length,a=Math.log(2),h=16*Math.floor(Math.log(c)/a),i=Math.floor(h/a),l=16*c-h,(n=new J).writeInt(this.scalarType),n.writeShort(c),n.writeShort(h),n.writeShort(i),n.writeShort(l),r=16*c,s=n.pos+r,o=null,f=[],t)for(u=t[p],n.writeString(p),n.writeInt(d(u)),n.writeInt(s),n.writeInt(u.length),f=f.concat(u),"head"===p&&(o=s),s+=u.length;s%4;)f.push(0),s++;return n.write(f),e=2981146554-d(n.data),n.pos=o+8,n.writeUInt32(e),n.data},d=function(t){var e,n,r,i;for(t=L.call(t);t.length%4;)t.push(0);for(n=new J(t),r=e=0,i=t.length;r<i;r+=4)e+=n.readUInt32();return 4294967295&e},t}(),c={}.hasOwnProperty,f=function(t,e){for(var n in e)c.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t};h=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}();var p=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var e;return(e=new J).writeInt(this.version),e.writeInt(this.revision),e.writeInt(this.checkSumAdjustment),e.writeInt(this.magicNumber),e.writeShort(this.flags),e.writeShort(this.unitsPerEm),e.writeLongLong(this.created),e.writeLongLong(this.modified),e.writeShort(this.xMin),e.writeShort(this.yMin),e.writeShort(this.xMax),e.writeShort(this.yMax),e.writeShort(this.macStyle),e.writeShort(this.lowestRecPPEM),e.writeShort(this.fontDirectionHint),e.writeShort(t),e.writeShort(this.glyphDataFormat),e.data},e}(),d=function(){function t(n,t){var e,r,i,o,a,s,l,h,u,c,f,p,d,g,m,y,v,w;switch(this.platformID=n.readUInt16(),this.encodingID=n.readShort(),this.offset=t+n.readInt(),u=n.pos,n.pos=this.offset,this.format=n.readUInt16(),this.length=n.readUInt16(),this.language=n.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=m=0;m<256;s=++m)this.codeMap[s]=n.readByte();break;case 4:for(f=n.readUInt16(),c=f/2,n.pos+=6,i=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),n.pos+=2,d=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),l=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),h=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),r=(this.length-n.pos+this.offset)/2,a=function(){var t,e;for(e=[],s=t=0;0<=r?t<r:r<t;s=0<=r?++t:--t)e.push(n.readUInt16());return e}(),s=y=0,w=i.length;y<w;s=++y)for(g=i[s],e=v=p=d[s];p<=g?v<=g:g<=v;e=p<=g?++v:--v)0===h[s]?o=e+l[s]:0!==(o=a[h[s]/2+(e-p)-(c-s)]||0)&&(o+=l[s]),this.codeMap[e]=65535&o}n.pos=u}return t.encode=function(t,e){var n,r,i,o,a,s,l,h,u,c,f,p,d,g,m,y,v,w,b,x,N,L,A,S,_,F,P,k,I,C,B,j,E,M,O,q,T,R,D,U,z,H,W,V,G,Y;switch(k=new J,o=Object.keys(t).sort(function(t,e){return t-e}),e){case"macroman":for(d=0,g=function(){var t,e;for(e=[],p=t=0;t<256;p=++t)e.push(0);return e}(),y={0:0},i={},I=0,E=o.length;I<E;I++)null==y[W=t[r=o[I]]]&&(y[W]=++d),i[r]={old:t[r],new:y[t[r]]},g[r]=y[t[r]];return k.writeUInt16(1),k.writeUInt16(0),k.writeUInt32(12),k.writeUInt16(0),k.writeUInt16(262),k.writeUInt16(0),k.write(g),{charMap:i,subtable:k.data,maxGlyphID:d+1};case"unicode":for(F=[],u=[],y={},n={},m=l=null,C=v=0,M=o.length;C<M;C++)null==y[b=t[r=o[C]]]&&(y[b]=++v),n[r]={old:b,new:y[b]},a=y[b]-r,null!=m&&a===l||(m&&u.push(m),F.push(r),l=a),m=r;for(m&&u.push(m),u.push(65535),F.push(65535),S=2*(A=F.length),L=2*Math.pow(Math.log(A)/Math.LN2,2),c=Math.log(L/2)/Math.LN2,N=2*A-L,s=[],x=[],f=[],p=B=0,O=F.length;B<O;p=++B){if(_=F[p],h=u[p],65535===_){s.push(0),x.push(0);break}if(32768<=_-(P=n[_].new))for(s.push(0),x.push(2*(f.length+A-p)),r=j=_;_<=h?j<=h:h<=j;r=_<=h?++j:--j)f.push(n[r].new);else s.push(P-_),x.push(0)}for(k.writeUInt16(3),k.writeUInt16(1),k.writeUInt32(12),k.writeUInt16(4),k.writeUInt16(16+8*A+2*f.length),k.writeUInt16(0),k.writeUInt16(S),k.writeUInt16(L),k.writeUInt16(c),k.writeUInt16(N),z=0,q=u.length;z<q;z++)r=u[z],k.writeUInt16(r);for(k.writeUInt16(0),H=0,T=F.length;H<T;H++)r=F[H],k.writeUInt16(r);for(V=0,R=s.length;V<R;V++)a=s[V],k.writeUInt16(a);for(G=0,D=x.length;G<D;G++)w=x[G],k.writeUInt16(w);for(Y=0,U=f.length;Y<U;Y++)d=f[Y],k.writeUInt16(d);return{charMap:n,subtable:k.data,maxGlyphID:v+1}}},t}(),y=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="cmap",e.prototype.parse=function(t){var e,n,r;for(t.pos=this.offset,this.version=t.readUInt16(),n=t.readUInt16(),this.tables=[],this.unicode=null,r=0;0<=n?r<n:n<r;0<=n?++r:--r)e=new d(t,this.offset),this.tables.push(e),e.isUnicode&&null==this.unicode&&(this.unicode=e);return!0},e.encode=function(t,e){var n,r;return null==e&&(e="macroman"),n=d.encode(t,e),(r=new J).writeUInt16(0),r.writeUInt16(1),n.table=r.data.concat(n.subtable),n},e}(),g=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),m=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="OS/2",e.prototype.parse=function(n){if(n.pos=this.offset,this.version=n.readUInt16(),this.averageCharWidth=n.readShort(),this.weightClass=n.readUInt16(),this.widthClass=n.readUInt16(),this.type=n.readShort(),this.ySubscriptXSize=n.readShort(),this.ySubscriptYSize=n.readShort(),this.ySubscriptXOffset=n.readShort(),this.ySubscriptYOffset=n.readShort(),this.ySuperscriptXSize=n.readShort(),this.ySuperscriptYSize=n.readShort(),this.ySuperscriptXOffset=n.readShort(),this.ySuperscriptYOffset=n.readShort(),this.yStrikeoutSize=n.readShort(),this.yStrikeoutPosition=n.readShort(),this.familyClass=n.readShort(),this.panose=function(){var t,e;for(e=[],t=0;t<10;++t)e.push(n.readByte());return e}(),this.charRange=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(n.readInt());return e}(),this.vendorID=n.readString(4),this.selection=n.readShort(),this.firstCharIndex=n.readShort(),this.lastCharIndex=n.readShort(),0<this.version&&(this.ascent=n.readShort(),this.descent=n.readShort(),this.lineGap=n.readShort(),this.winAscent=n.readShort(),this.winDescent=n.readShort(),this.codePageRange=function(){var t,e;for(e=[],t=0;t<2;++t)e.push(n.readInt());return e}(),1<this.version))return this.xHeight=n.readShort(),this.capHeight=n.readShort(),this.defaultChar=n.readShort(),this.breakChar=n.readShort(),this.maxContext=n.readShort()},e}(),v=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="post",e.prototype.parse=function(r){var t,e,n,i;switch(r.pos=this.offset,this.format=r.readInt(),this.italicAngle=r.readInt(),this.underlinePosition=r.readShort(),this.underlineThickness=r.readShort(),this.isFixedPitch=r.readInt(),this.minMemType42=r.readInt(),this.maxMemType42=r.readInt(),this.minMemType1=r.readInt(),this.maxMemType1=r.readInt(),this.format){case 65536:break;case 131072:for(e=r.readUInt16(),this.glyphNameIndex=[],n=0;0<=e?n<e:e<n;0<=e?++n:--n)this.glyphNameIndex.push(r.readUInt16());for(this.names=[],i=[];r.pos<this.offset+this.length;)t=r.readByte(),i.push(this.names.push(r.readString(t)));return i;case 151552:return e=r.readUInt16(),this.offsets=r.read(e);case 196608:break;case 262144:return this.map=function(){var t,e,n;for(n=[],t=0,e=this.file.maxp.numGlyphs;0<=e?t<e:e<t;0<=e?++t:--t)n.push(r.readUInt32());return n}.call(this)}},e}(),w=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},b=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="name",e.prototype.parse=function(t){var e,n,r,i,o,a,s,l,h,u,c,f;for(t.pos=this.offset,t.readShort(),e=t.readShort(),a=t.readShort(),n=[],i=h=0;0<=e?h<e:e<h;i=0<=e?++h:--h)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+a+t.readShort()});for(s={},i=u=0,c=n.length;u<c;i=++u)r=n[i],t.pos=r.offset,l=t.readString(r.length),o=new w(l,r),null==s[f=r.nameID]&&(s[f]=[]),s[r.nameID].push(o);this.strings=s,this.copyright=s[0],this.fontFamily=s[1],this.fontSubfamily=s[2],this.uniqueSubfamily=s[3],this.fontName=s[4],this.version=s[5];try{this.postscriptName=s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch(t){this.postscriptName=s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=s[7],this.manufacturer=s[8],this.designer=s[9],this.description=s[10],this.vendorUrl=s[11],this.designerUrl=s[12],this.license=s[13],this.licenseUrl=s[14],this.preferredFamily=s[15],this.preferredSubfamily=s[17],this.compatibleFull=s[18],this.sampleText=s[19]},e}(),x=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),N=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="hmtx",e.prototype.parse=function(n){var t,r,i,e,o,a,s;for(n.pos=this.offset,this.metrics=[],e=0,a=this.file.hhea.numberOfMetrics;0<=a?e<a:a<e;0<=a?++e:--e)this.metrics.push({advance:n.readUInt16(),lsb:n.readInt16()});for(r=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var t,e;for(e=[],t=0;0<=r?t<r:r<t;0<=r?++t:--t)e.push(n.readInt16());return e}(),this.widths=function(){var t,e,n,r;for(r=[],t=0,e=(n=this.metrics).length;t<e;t++)i=n[t],r.push(i.advance);return r}.call(this),t=this.widths[this.widths.length-1],s=[],o=0;0<=r?o<r:r<o;0<=r?++o:--o)s.push(this.widths.push(t));return s},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),L=[].slice,A=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="glyf",e.prototype.parse=function(t){return this.cache={}},e.prototype.glyphFor=function(t){var e,n,r,i,o,a,s,l,h,u;return(t=t)in this.cache?this.cache[t]:(i=this.file.loca,e=this.file.contents,n=i.indexOf(t),0===(r=i.lengthOf(t))?this.cache[t]=null:(e.pos=this.offset+n,o=(a=new J(e.read(r))).readShort(),l=a.readShort(),u=a.readShort(),s=a.readShort(),h=a.readShort(),this.cache[t]=-1===o?new _(a,l,u,s,h):new S(a,o,l,u,s,h),this.cache[t]))},e.prototype.encode=function(t,e,n){var r,i,o,a,s;for(o=[],i=[],a=0,s=e.length;a<s;a++)r=t[e[a]],i.push(o.length),r&&(o=o.concat(r.encode(n)));return i.push(o.length),{table:o,offsets:i}},e}(),S=function(){function t(t,e,n,r,i,o){this.raw=t,this.numberOfContours=e,this.xMin=n,this.yMin=r,this.xMax=i,this.yMax=o,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),_=function(){function t(t,e,n,r,i){var o,a;for(this.raw=t,this.xMin=e,this.yMin=n,this.xMax=r,this.yMax=i,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],o=this.raw;a=o.readShort(),this.glyphOffsets.push(o.pos),this.glyphIDs.push(o.readShort()),32&a;)o.pos+=1&a?4:2,128&a?o.pos+=8:64&a?o.pos+=4:8&a&&(o.pos+=2)}return 1,8,32,64,128,t.prototype.encode=function(t){var e,n,r,i,o;for(n=new J(L.call(this.raw.data)),e=r=0,i=(o=this.glyphIDs).length;r<i;e=++r)o[e],n.pos=this.glyphOffsets[e];return n.data},t}(),F=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="loca",e.prototype.parse=function(r){var t;return r.pos=this.offset,t=this.file.head.indexToLocFormat,this.offsets=0===t?function(){var t,e,n;for(n=[],t=0,e=this.length;t<e;t+=2)n.push(2*r.readUInt16());return n}.call(this):function(){var t,e,n;for(n=[],t=0,e=this.length;t<e;t+=4)n.push(r.readUInt32());return n}.call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,e){for(var n=new Uint32Array(this.offsets.length),r=0,i=0,o=0;o<n.length;++o)if(n[o]=r,i<e.length&&e[i]==o){++i,n[o]=r;var a=this.offsets[o],s=this.offsets[o+1]-a;0<s&&(r+=s)}for(var l=new Array(4*n.length),h=0;h<n.length;++h)l[4*h+3]=255&n[h],l[4*h+2]=(65280&n[h])>>8,l[4*h+1]=(16711680&n[h])>>16,l[4*h]=(4278190080&n[h])>>24;return l},e}(),P=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var t,e,n,r,i;for(e in r=this.font.cmap.tables[0].codeMap,t={},i=this.subset)n=i[e],t[e]=r[n];return t},t.prototype.glyphsFor=function(t){var e,n,r,i,o,a,s;for(r={},o=0,a=t.length;o<a;o++)r[i=t[o]]=this.font.glyf.glyphFor(i);for(i in e=[],r)(null!=(n=r[i])?n.compound:void 0)&&e.push.apply(e,n.glyphIDs);if(0<e.length)for(i in s=this.glyphsFor(e))n=s[i],r[i]=n;return r},t.prototype.encode=function(t,e){var n,r,i,o,a,s,l,h,u,c,f,p,d,g,m;for(r in n=y.encode(this.generateCmap(),"unicode"),o=this.glyphsFor(t),f={0:0},m=n.charMap)f[(s=m[r]).old]=s.new;for(p in c=n.maxGlyphID,o)p in f||(f[p]=c++);return h=function(t){var e,n;for(e in n={},t)n[t[e]]=e;return n}(f),u=Object.keys(h).sort(function(t,e){return t-e}),d=function(){var t,e,n;for(n=[],t=0,e=u.length;t<e;t++)a=u[t],n.push(h[a]);return n}(),i=this.font.glyf.encode(o,d,f),l=this.font.loca.encode(i.offsets,d),g={cmap:this.font.cmap.raw(),glyf:i.table,loca:l,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(e)},this.font.os2.exists&&(g["OS/2"]=this.font.os2.raw()),this.font.directory.encode(g)},t}();t.API.PDFObject=function(){var o;function a(){}return o=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},a.convert=function(r){var i,t,e,n;if(Array.isArray(r))return"["+function(){var t,e,n;for(n=[],t=0,e=r.length;t<e;t++)i=r[t],n.push(a.convert(i));return n}().join(" ")+"]";if("string"==typeof r)return"/"+r;if(null!=r?r.isString:void 0)return"("+r+")";if(r instanceof Date)return"(D:"+o(r.getUTCFullYear(),4)+o(r.getUTCMonth(),2)+o(r.getUTCDate(),2)+o(r.getUTCHours(),2)+o(r.getUTCMinutes(),2)+o(r.getUTCSeconds(),2)+"Z)";if("[object Object]"!=={}.toString.call(r))return""+r;for(t in e=["<<"],r)n=r[t],e.push("/"+t+" "+a.convert(n));return e.push(">>"),e.join("\n")},a}()}(lt),
/*
  # PNG.js
  # Copyright (c) 2011 Devon Govett
  # MIT LICENSE
  # 
  # 
  */
Nt="undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")(),Lt=function(){var h,n,r;function i(t){var e,n,r,i,o,a,s,l,h,u,c,f,p,d;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},a=null;;){switch(e=this.readUInt32(),h=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":a&&this.animation.frames.push(a),this.pos+=4,a={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},o=this.readUInt16(),i=this.readUInt16()||100,a.delay=1e3*o/i,a.disposeOp=this.data[this.pos++],a.blendOp=this.data[this.pos++],a.data=[];break;case"IDAT":case"fdAT":for("fdAT"===h&&(this.pos+=4,e-=4),t=(null!=a?a.data:void 0)||this.imgData,f=0;0<=e?f<e:e<f;0<=e?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(r=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>r)throw new Error("More transparent colors than palette size");if(0<(u=r-this.transparency.indexed.length))for(p=0;0<=u?p<u:u<p;0<=u?++p:--p)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":s=(c=this.read(e)).indexOf(0),l=String.fromCharCode.apply(String,c.slice(0,s)),this.text[l]=String.fromCharCode.apply(String,c.slice(s+1));break;case"IEND":return a&&this.animation.frames.push(a),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(d=this.colorType)||6===d,n=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*n,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}i.load=function(t,e,n){var r;return"function"==typeof e&&(n=e),(r=new XMLHttpRequest).open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){var t;return t=new i(new Uint8Array(r.response||r.mozResponseArrayBuffer)),"function"==typeof(null!=e?e.getContext:void 0)&&t.render(e),"function"==typeof n?n(t):void 0},r.send(null)},i.prototype.read=function(t){var e,n;for(n=[],e=0;0<=t?e<t:t<e;0<=t?++e:--e)n.push(this.data[this.pos++]);return n},i.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.decodePixels=function(C){var B=this.pixelBitlength/8,j=new Uint8Array(this.width*this.height*B),E=0,M=this;if(null==C&&(C=this.imgData),0===C.length)return new Uint8Array(0);function t(t,e,n,r){var i,o,a,s,l,h,u,c,f,p,d,g,m,y,v,w,b,x,N,L,A,S=Math.ceil((M.width-t)/n),_=Math.ceil((M.height-e)/r),F=M.width==S&&M.height==_;for(y=B*S,g=F?j:new Uint8Array(y*_),h=C.length,o=m=0;m<_&&E<h;){switch(C[E++]){case 0:for(s=b=0;b<y;s=b+=1)g[o++]=C[E++];break;case 1:for(s=x=0;x<y;s=x+=1)i=C[E++],l=s<B?0:g[o-B],g[o++]=(i+l)%256;break;case 2:for(s=N=0;N<y;s=N+=1)i=C[E++],a=(s-s%B)/B,v=m&&g[(m-1)*y+a*B+s%B],g[o++]=(v+i)%256;break;case 3:for(s=L=0;L<y;s=L+=1)i=C[E++],a=(s-s%B)/B,l=s<B?0:g[o-B],v=m&&g[(m-1)*y+a*B+s%B],g[o++]=(i+Math.floor((l+v)/2))%256;break;case 4:for(s=A=0;A<y;s=A+=1)i=C[E++],a=(s-s%B)/B,l=s<B?0:g[o-B],0===m?v=w=0:(v=g[(m-1)*y+a*B+s%B],w=a&&g[(m-1)*y+(a-1)*B+s%B]),u=l+v-w,c=Math.abs(u-l),p=Math.abs(u-v),d=Math.abs(u-w),f=c<=p&&c<=d?l:p<=d?v:w,g[o++]=(i+f)%256;break;default:throw new Error("Invalid filter algorithm: "+C[E-1])}if(!F){var P=((e+m*r)*M.width+t)*B,k=m*y;for(s=0;s<S;s+=1){for(var I=0;I<B;I+=1)j[P++]=g[k++];P+=(n-1)*B}}m++}}return C=(C=new kt(C)).getBytes(),1==M.interlaceMethod?(t(0,0,8,8),t(4,0,8,8),t(0,4,4,8),t(2,0,4,4),t(0,2,2,4),t(1,0,2,2),t(0,1,1,2)):t(0,0,1,1),j},i.prototype.decodePalette=function(){var t,e,n,r,i,o,a,s,l;for(n=this.palette,o=this.transparency.indexed||[],i=new Uint8Array((o.length||0)+n.length),r=0,n.length,e=a=t=0,s=n.length;a<s;e=a+=3)i[r++]=n[e],i[r++]=n[e+1],i[r++]=n[e+2],i[r++]=null!=(l=o[t++])?l:255;return i},i.prototype.copyToImageData=function(t,e){var n,r,i,o,a,s,l,h,u,c,f;if(r=this.colors,u=null,n=this.hasAlphaChannel,this.palette.length&&(u=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),r=4,n=!0),h=(i=t.data||t).length,a=u||e,o=s=0,1===r)for(;o<h;)l=u?4*e[o/4]:s,c=a[l++],i[o++]=c,i[o++]=c,i[o++]=c,i[o++]=n?a[l++]:255,s=l;else for(;o<h;)l=u?4*e[o/4]:s,i[o++]=a[l++],i[o++]=a[l++],i[o++]=a[l++],i[o++]=n?a[l++]:255,s=l},i.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};try{n=Nt.document.createElement("canvas"),r=n.getContext("2d")}catch(t){return-1}return h=function(t){var e;return r.width=t.width,r.height=t.height,r.clearRect(0,0,t.width,t.height),r.putImageData(t,0,0),(e=new Image).src=n.toDataURL(),e},i.prototype.decodeFrames=function(t){var e,n,r,i,o,a,s,l;if(this.animation){for(l=[],n=o=0,a=(s=this.animation.frames).length;o<a;n=++o)e=s[n],r=t.createImageData(e.width,e.height),i=this.decodePixels(new Uint8Array(e.data)),this.copyToImageData(r,i),e.imageData=r,l.push(e.image=h(r));return l}},i.prototype.renderFrame=function(t,e){var n,r,i;return n=(r=this.animation.frames)[e],i=r[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===n.blendOp&&t.clearRect(n.xOffset,n.yOffset,n.width,n.height),t.drawImage(n.image,n.xOffset,n.yOffset)},i.prototype.animate=function(n){var r,i,o,a,s,t,l=this;return i=0,t=this.animation,a=t.numFrames,o=t.frames,s=t.numPlays,(r=function(){var t,e;if(t=i++%a,e=o[t],l.renderFrame(n,t),1<a&&i/a<s)return l.animation._timeout=setTimeout(r,e.delay)})()},i.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},i.prototype.render=function(t){var e,n;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(n=e.createImageData(this.width,this.height),this.copyToImageData(n,this.decodePixels()),e.putImageData(n,0,0))},i}(),Nt.PNG=Lt;
/*
   * Extracted from pdf.js
   * https://github.com/andreasgal/pdf.js
   *
   * Copyright (c) 2011 Mozilla Foundation
   *
   * Contributors: Andreas Gal <gal@mozilla.com>
   *               Chris G Jones <cjones@mozilla.com>
   *               Shaon Barman <shaon.barman@gmail.com>
   *               Vivien Nicolas <21@vingtetun.org>
   *               Justin D'Arcangelo <justindarc@gmail.com>
   *               Yury Delendik
   *
   * 
   */
var Pt=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,n=e?e.byteLength:0;if(t<n)return e;for(var r=512;r<t;)r<<=1;for(var i=new Uint8Array(r),o=0;o<n;++o)i[o]=e[o];return this.buffer=i},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var n=e+t;!this.eof&&this.bufferLength<n;)this.readBlock();var r=this.bufferLength;r<n&&(n=r)}else{for(;!this.eof;)this.readBlock();n=this.bufferLength}return this.pos=n,this.buffer.subarray(e,n)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,n){for(var r=t+e;this.bufferLength<=r&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),kt=function(){if("undefined"!=typeof Uint32Array){var k=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),I=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),C=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),B=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],j=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return(t.prototype=Object.create(Pt.prototype)).getBits=function(t){for(var e,n=this.codeSize,r=this.codeBuf,i=this.bytes,o=this.bytesPos;n<t;)void 0===(e=i[o++])&&E("Bad encoding in flate stream"),r|=e<<n,n+=8;return e=r&(1<<t)-1,this.codeBuf=r>>t,this.codeSize=n-=t,this.bytesPos=o,e},t.prototype.getCode=function(t){for(var e=t[0],n=t[1],r=this.codeSize,i=this.codeBuf,o=this.bytes,a=this.bytesPos;r<n;){var s;void 0===(s=o[a++])&&E("Bad encoding in flate stream"),i|=s<<r,r+=8}var l=e[i&(1<<n)-1],h=l>>16,u=65535&l;return(0==r||r<h||0==h)&&E("Bad encoding in flate stream"),this.codeBuf=i>>h,this.codeSize=r-h,this.bytesPos=a,u},t.prototype.generateHuffmanTable=function(t){for(var e=t.length,n=0,r=0;r<e;++r)t[r]>n&&(n=t[r]);for(var i=1<<n,o=new Uint32Array(i),a=1,s=0,l=2;a<=n;++a,s<<=1,l<<=1)for(var h=0;h<e;++h)if(t[h]==a){var u=0,c=s;for(r=0;r<a;++r)u=u<<1|1&c,c>>=1;for(r=u;r<i;r+=l)o[r]=a<<16|h;++s}return[o,n]},t.prototype.readBlock=function(){function t(t,e,n,r,i){for(var o=t.getBits(n)+r;0<o--;)e[l++]=i}var e=this.getBits(3);if(1&e&&(this.eof=!0),0!=(e>>=1)){var n,r;if(1==e)n=B,r=j;else if(2==e){for(var i=this.getBits(5)+257,o=this.getBits(5)+1,a=this.getBits(4)+4,s=Array(k.length),l=0;l<a;)s[k[l++]]=this.getBits(3);for(var h=this.generateHuffmanTable(s),u=0,c=(l=0,i+o),f=new Array(c);l<c;){var p=this.getCode(h);16==p?t(this,f,2,3,u):17==p?t(this,f,3,3,u=0):18==p?t(this,f,7,11,u=0):f[l++]=u=p}n=this.generateHuffmanTable(f.slice(0,i)),r=this.generateHuffmanTable(f.slice(i,c))}else E("Unknown block type in flate stream");for(var d=(_=this.buffer)?_.length:0,g=this.bufferLength;;){var m=this.getCode(n);if(m<256)d<=g+1&&(d=(_=this.ensureBuffer(g+1)).length),_[g++]=m;else{if(256==m)return void(this.bufferLength=g);var y=(m=I[m-=257])>>16;0<y&&(y=this.getBits(y));u=(65535&m)+y;m=this.getCode(r),0<(y=(m=C[m])>>16)&&(y=this.getBits(y));var v=(65535&m)+y;d<=g+u&&(d=(_=this.ensureBuffer(g+u)).length);for(var w=0;w<u;++w,++g)_[g]=_[g-v]}}}else{var b,x=this.bytes,N=this.bytesPos;void 0===(b=x[N++])&&E("Bad block header in flate stream");var L=b;void 0===(b=x[N++])&&E("Bad block header in flate stream"),L|=b<<8,void 0===(b=x[N++])&&E("Bad block header in flate stream");var A=b;void 0===(b=x[N++])&&E("Bad block header in flate stream"),(A|=b<<8)!=(65535&~L)&&E("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var S=this.bufferLength,_=this.ensureBuffer(S+L),F=S+L;this.bufferLength=F;for(var P=S;P<F;++P){if(void 0===(b=x[N++])){this.eof=!0;break}_[P]=b}this.bytesPos=N}},t}function E(t){throw new Error(t)}function t(t){var e=0,n=t[e++],r=t[e++];-1!=n&&-1!=r||E("Invalid header in flate stream"),8!=(15&n)&&E("Unknown compression method in flate stream"),((n<<8)+r)%31!=0&&E("Bad FCHECK in flate stream"),32&r&&E("FDICT bit set in flate stream"),this.bytes=t,this.bytesPos=2,this.codeSize=0,this.codeBuf=0,Pt.call(this)}}();window.tmp=kt});try{module.exports=jsPDF}catch(t){}
;/*!
 * jsPDF AutoTable plugin v2.3.5
 * Copyright (c) 2014 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable 
 * 
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * 
 * * /if (typeof window === 'object') window.jspdfAutoTableVersion = '2.3.5';/*
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jspdf"));
	else if(typeof define === 'function' && define.amd)
		define(["jspdf"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jspdf")) : factory(root["jsPDF"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
exports.FONT_ROW_RATIO = 1.15;
var models_1 = __webpack_require__(4);
var table = null;
var assign = __webpack_require__(5);
var entries = __webpack_require__(19);
/**
 * Styles for the themes (overriding the default styles)
 */
exports.getTheme = function (name) {
    var themes = {
        'striped': {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
            header: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            body: {},
            alternateRow: { fillColor: 245 }
        },
        'grid': {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal', lineWidth: 0.1 },
            header: { textColor: 255, fillColor: [26, 188, 156], fontStyle: 'bold', lineWidth: 0 },
            body: {},
            alternateRow: {}
        },
        'plain': {
            header: { fontStyle: 'bold' }
        }
    };
    return themes[name];
};
function getDefaults() {
    var scaleFactor = Config.scaleFactor();
    return {
        // Styling
        theme: 'striped',
        styles: {},
        headerStyles: {},
        bodyStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
        // Properties
        startY: false,
        margin: 40 / scaleFactor,
        pageBreak: 'auto',
        tableWidth: 'auto',
        showHeader: 'everyPage',
        tableLineWidth: 0,
        tableLineColor: 200,
        // Hooks
        createdHeaderCell: function (cell, data) { },
        createdCell: function (cell, data) { },
        drawHeaderRow: function (row, data) { },
        drawRow: function (row, data) { },
        drawHeaderCell: function (cell, data) { },
        drawCell: function (cell, data) { },
        addPageContent: function (data) { }
    };
}
exports.getDefaults = getDefaults;
// Base style for all themes
function defaultStyles() {
    var scaleFactor = Config.scaleFactor();
    return {
        font: "helvetica",
        fontStyle: 'normal',
        overflow: 'ellipsize',
        fillColor: false,
        textColor: 20,
        halign: 'left',
        valign: 'top',
        fontSize: 10,
        cellPadding: 5 / scaleFactor,
        lineColor: 200,
        lineWidth: 0 / scaleFactor,
        columnWidth: 'auto'
    };
}
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.pageSize = function () {
        var pageSize = table.doc.internal.pageSize;
        // JSPDF 1.4 uses get functions instead of properties on pageSize
        if (pageSize.width == null) {
            pageSize = {
                width: pageSize.getWidth(),
                height: pageSize.getHeight()
            };
        }
        return pageSize;
    };
    Config.applyUserStyles = function () {
        Config.applyStyles(table.userStyles);
    };
    Config.createTable = function (doc) {
        table = new models_1.Table(doc);
        return table;
    };
    Config.tableInstance = function () {
        return table;
    };
    Config.scaleFactor = function () {
        return table.doc.internal.scaleFactor;
    };
    Config.hooksData = function (additionalData) {
        if (additionalData === void 0) { additionalData = {}; }
        return assign({
            pageCount: table.pageCount,
            settings: table.settings,
            table: table,
            doc: table.doc,
            cursor: table.cursor
        }, additionalData || {});
    };
    Config.initSettings = function (table, allOptions) {
        var _loop_1 = function (styleProp) {
            var styles = allOptions.map(function (opts) { return opts[styleProp] || {}; });
            table.styles[styleProp] = assign.apply(void 0, [{}].concat(styles));
        };
        // Merge styles one level deeper
        for (var _i = 0, _a = Object.keys(table.styles); _i < _a.length; _i++) {
            var styleProp = _a[_i];
            _loop_1(styleProp);
        }
        // Append event handlers instead of replacing them
        for (var _b = 0, _c = entries(table.hooks); _b < _c.length; _b++) {
            var _d = _c[_b], hookName = _d[0], list = _d[1];
            for (var _e = 0, allOptions_1 = allOptions; _e < allOptions_1.length; _e++) {
                var opts = allOptions_1[_e];
                if (opts && opts[hookName]) {
                    list.push(opts[hookName]);
                }
            }
        }
        // Merge all other options one level
        table.settings = assign.apply(void 0, [getDefaults()].concat(allOptions));
    };
    // This is messy, only keep array and number format the next major version
    Config.marginOrPadding = function (value, defaultValue) {
        var newValue = {};
        if (Array.isArray(value)) {
            if (value.length >= 4) {
                newValue = { 'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[3] };
            }
            else if (value.length === 3) {
                newValue = { 'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[1] };
            }
            else if (value.length === 2) {
                newValue = { 'top': value[0], 'right': value[1], 'bottom': value[0], 'left': value[1] };
            }
            else if (value.length === 1) {
                value = value[0];
            }
            else {
                value = defaultValue;
            }
        }
        else if (typeof value === 'object') {
            if (value['vertical']) {
                value['top'] = value['vertical'];
                value['bottom'] = value['vertical'];
            }
            else if (value['horizontal']) {
                value['right'] = value['horizontal'];
                value['left'] = value['horizontal'];
            }
            for (var _i = 0, _a = ['top', 'right', 'bottom', 'left']; _i < _a.length; _i++) {
                var side = _a[_i];
                newValue[side] = value[side] || value[side] === 0 ? value[side] : defaultValue;
            }
        }
        if (typeof value === 'number') {
            newValue = { 'top': value, 'right': value, 'bottom': value, 'left': value };
        }
        return newValue;
    };
    Config.styles = function (styles) {
        styles = Array.isArray(styles) ? styles : [styles];
        return assign.apply(void 0, [defaultStyles()].concat(styles));
    };
    Config.applyStyles = function (styles) {
        var doc = table.doc;
        var styleModifiers = {
            fillColor: doc.setFillColor,
            textColor: doc.setTextColor,
            fontStyle: doc.setFontStyle,
            lineColor: doc.setDrawColor,
            lineWidth: doc.setLineWidth,
            font: doc.setFont,
            fontSize: doc.setFontSize
        };
        Object.keys(styleModifiers).forEach(function (name) {
            var style = styles[name];
            var modifier = styleModifiers[name];
            if (typeof style !== 'undefined') {
                if (Array.isArray(style)) {
                    modifier.apply(this, style);
                }
                else {
                    modifier(style);
                }
            }
        });
    };
    return Config;
}());
exports.Config = Config;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var implementation = __webpack_require__(29);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
var painter_1 = __webpack_require__(16);
function getStringWidth(text, styles) {
    var k = config_1.Config.scaleFactor();
    var fontSize = styles.fontSize / k;
    config_1.Config.applyStyles(styles);
    text = Array.isArray(text) ? text : [text];
    var maxWidth = 0;
    text.forEach(function (line) {
        var width = config_1.Config.tableInstance().doc.getStringUnitWidth(line);
        if (width > maxWidth) {
            maxWidth = width;
        }
    });
    var precision = 10000 * k;
    maxWidth = Math.floor(maxWidth * precision) / precision;
    return maxWidth * fontSize;
}
exports.getStringWidth = getStringWidth;
/**
 * Ellipsize the text to fit in the width
 */
function ellipsize(text, width, styles, ellipsizeStr) {
    if (ellipsizeStr === void 0) { ellipsizeStr = '...'; }
    if (Array.isArray(text)) {
        var value_1 = [];
        text.forEach(function (str, i) {
            value_1[i] = ellipsize(str, width, styles, ellipsizeStr);
        });
        return value_1;
    }
    var precision = 10000 * config_1.Config.scaleFactor();
    width = Math.ceil(width * precision) / precision;
    if (width >= getStringWidth(text, styles)) {
        return text;
    }
    while (width < getStringWidth(text + ellipsizeStr, styles)) {
        if (text.length <= 1) {
            break;
        }
        text = text.substring(0, text.length - 1);
    }
    return text.trim() + ellipsizeStr;
}
exports.ellipsize = ellipsize;
function addTableBorder() {
    var table = config_1.Config.tableInstance();
    var styles = { lineWidth: table.settings.tableLineWidth, lineColor: table.settings.tableLineColor };
    config_1.Config.applyStyles(styles);
    var fs = getFillStyle(styles);
    if (fs) {
        table.doc.rect(table.pageStartX, table.pageStartY, table.width, table.cursor.y - table.pageStartY, fs);
    }
}
exports.addTableBorder = addTableBorder;
function addPage() {
    var table = config_1.Config.tableInstance();
    table.finalY = table.cursor.y;
    // Add user content just before adding new page ensure it will 
    // be drawn above other things on the page
    addContentHooks();
    addTableBorder();
    nextPage(table.doc);
    table.pageCount++;
    table.cursor = { x: table.margin('left'), y: table.margin('top') };
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    if (table.settings.showHeader === true || table.settings.showHeader === 'everyPage') {
        painter_1.printRow(table.headerRow, table.hooks.drawHeaderRow, table.hooks.drawHeaderCell);
    }
}
exports.addPage = addPage;
function addContentHooks() {
    for (var _i = 0, _a = config_1.Config.tableInstance().hooks.addPageContent; _i < _a.length; _i++) {
        var hook = _a[_i];
        config_1.Config.applyUserStyles();
        hook(config_1.Config.hooksData());
    }
    config_1.Config.applyUserStyles();
}
exports.addContentHooks = addContentHooks;
function getFillStyle(styles) {
    var drawLine = styles.lineWidth > 0;
    var drawBackground = styles.fillColor || styles.fillColor === 0;
    if (drawLine && drawBackground) {
        return 'DF'; // Fill then stroke
    }
    else if (drawLine) {
        return 'S'; // Only stroke (transparent background)
    }
    else if (drawBackground) {
        return 'F'; // Only fill, no stroke
    }
    else {
        return false;
    }
}
exports.getFillStyle = getFillStyle;
function nextPage(doc) {
    var current = doc.internal.getCurrentPageInfo().pageNumber;
    doc.setPage(current + 1);
    var newCurrent = doc.internal.getCurrentPageInfo().pageNumber;
    if (newCurrent === current) {
        doc.addPage();
    }
}
exports.nextPage = nextPage;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
exports.table = {};
var Table = /** @class */ (function () {
    function Table(doc) {
        this.height = 0;
        this.width = 0;
        this.contentWidth = 0;
        this.preferredWidth = 0;
        this.rows = [];
        this.columns = [];
        this.headerRow = null;
        this.pageCount = 1;
        this.hooks = {
            createdHeaderCell: [],
            createdCell: [],
            drawHeaderRow: [],
            drawRow: [],
            drawHeaderCell: [],
            drawCell: [],
            addPageContent: []
        };
        this.styles = {
            styles: {},
            headerStyles: {},
            bodyStyles: {},
            alternateRowStyles: {},
            columnStyles: {}
        };
        this.doc = doc;
        this.userStyles = {
            textColor: 30,
            fontSize: doc.internal.getFontSize(),
            fontStyle: doc.internal.getFont().fontStyle
        };
    }
    Table.prototype.margin = function (side) {
        return config_1.Config.marginOrPadding(this.settings.margin, config_1.getDefaults().margin)[side];
    };
    return Table;
}());
exports.Table = Table;
var Row = /** @class */ (function () {
    function Row(raw, index) {
        this.cells = {};
        this.spansMultiplePages = false;
        this.pageCount = 1;
        this.height = 0;
        this.y = 0;
        this.maxLineCount = 1;
        this.raw = raw;
        this.index = index;
    }
    return Row;
}());
exports.Row = Row;
var Cell = /** @class */ (function () {
    function Cell(raw) {
        this.styles = {};
        this.text = '';
        this.contentWidth = 0;
        this.textPos = {};
        this.height = 0;
        this.width = 0;
        this.x = 0;
        this.y = 0;
        this.raw = raw;
    }
    Cell.prototype.padding = function (name) {
        var padding = config_1.Config.marginOrPadding(this.styles.cellPadding, config_1.Config.styles([]).cellPadding);
        if (name === 'vertical') {
            return padding.top + padding.bottom;
        }
        else if (name === 'horizontal') {
            return padding.left + padding.right;
        }
        else {
            return padding[name];
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Column = /** @class */ (function () {
    function Column(dataKey, index) {
        this.options = {};
        this.contentWidth = 0;
        this.preferredWidth = 0;
        this.widthStyle = 'auto';
        this.width = 0;
        this.x = 0;
        this.dataKey = dataKey;
        this.index = index;
    }
    return Column;
}());
exports.Column = Column;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(20);
var foreach = __webpack_require__(22);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(23);
var has = __webpack_require__(14);
var bind = __webpack_require__(2);
var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

module.exports = function entries(O) {
	var obj = ES.RequireObjectCoercible(O);
	var entrys = [];
	for (var key in obj) {
		if (has(obj, key) && isEnumerable(obj, key)) {
			entrys.push([key, obj[key]]);
		}
	}
	return entrys;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var has = Object.prototype.hasOwnProperty;
module.exports = Object.assign || function assign(target, source) {
	for (var key in source) {
		if (has.call(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(2);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(7);

module.exports = function getPolyfill() {
	return typeof Object.entries === 'function' ? Object.entries : implementation;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
function printFullRow(row, drawRowHooks, drawCellHooks) {
    var remainingRowHeight = 0;
    var remainingTexts = {};
    var table = config_1.Config.tableInstance();
    if (!canFitOnPage(row.height)) {
        if (row.maxLineCount <= 1) {
            common_1.addPage();
        }
        else {
            // Modify the row to fit the current page and calculate text and height of partial row
            row.spansMultiplePages = true;
            var pageHeight = config_1.Config.pageSize().height;
            var maxCellHeight = 0;
            for (var j = 0; j < table.columns.length; j++) {
                var col = table.columns[j];
                var cell = row.cells[col.dataKey];
                var fontHeight = cell.styles.fontSize / config_1.Config.scaleFactor() * config_1.FONT_ROW_RATIO;
                var vPadding = cell.padding('vertical');
                var remainingPageSpace = pageHeight - table.cursor.y - table.margin('bottom');
                var remainingLineCount = Math.floor((remainingPageSpace - vPadding) / fontHeight);
                // Splice with negative values results in unexpected results, therefore eliminate
                // scenarios where less than one line is remaining, but are shown
                if (remainingLineCount < 0) {
                    remainingLineCount = 0;
                }
                if (Array.isArray(cell.text) && cell.text.length > remainingLineCount) {
                    var remainingLines = cell.text.splice(remainingLineCount, cell.text.length);
                    remainingTexts[col.dataKey] = remainingLines;
                    var cellHeight = cell.text.length * fontHeight + vPadding;
                    if (cellHeight > maxCellHeight) {
                        maxCellHeight = cellHeight;
                    }
                    var rCellHeight = remainingLines.length * fontHeight + vPadding;
                    if (rCellHeight > remainingRowHeight) {
                        remainingRowHeight = rCellHeight;
                    }
                }
            }
            // Reset row height since text are now removed
            row.height = maxCellHeight;
        }
    }
    printRow(row, drawRowHooks, drawCellHooks);
    // Parts of the row is now printed. Time for adding a new page, prune 
    // the text and start over
    if (Object.keys(remainingTexts).length > 0) {
        for (var j = 0; j < table.columns.length; j++) {
            var col = table.columns[j];
            var cell = row.cells[col.dataKey];
            cell.text = remainingTexts[col.dataKey] || '';
        }
        common_1.addPage();
        row.pageCount++;
        row.height = remainingRowHeight;
        printFullRow(row, drawRowHooks, drawCellHooks);
    }
}
exports.printFullRow = printFullRow;
function printRow(row, drawRowHooks, drawCellHooks) {
    var table = config_1.Config.tableInstance();
    row.y = table.cursor.y;
    for (var _i = 0, drawRowHooks_1 = drawRowHooks; _i < drawRowHooks_1.length; _i++) {
        var hook = drawRowHooks_1[_i];
        if (hook(row, config_1.Config.hooksData({ row: row, addPage: common_1.addPage })) === false) {
            return;
        }
    }
    table.cursor.x = table.margin('left');
    for (var i = 0; i < table.columns.length; i++) {
        var column = table.columns[i];
        var cell = row.cells[column.dataKey];
        if (!cell) {
            continue;
        }
        config_1.Config.applyStyles(cell.styles);
        cell.x = table.cursor.x;
        cell.y = table.cursor.y;
        cell.height = row.height;
        cell.width = column.width;
        if (cell.styles.valign === 'top') {
            cell.textPos.y = table.cursor.y + cell.padding('top');
        }
        else if (cell.styles.valign === 'bottom') {
            cell.textPos.y = table.cursor.y + row.height - cell.padding('bottom');
        }
        else {
            cell.textPos.y = table.cursor.y + row.height / 2;
        }
        if (cell.styles.halign === 'right') {
            cell.textPos.x = cell.x + cell.width - cell.padding('right');
        }
        else if (cell.styles.halign === 'center') {
            cell.textPos.x = cell.x + cell.width / 2;
        }
        else {
            cell.textPos.x = cell.x + cell.padding('left');
        }
        var shouldDrawCell = true;
        var data = config_1.Config.hooksData({ column: column, row: row, addPage: common_1.addPage });
        for (var _a = 0, drawCellHooks_1 = drawCellHooks; _a < drawCellHooks_1.length; _a++) {
            var hook = drawCellHooks_1[_a];
            if (hook(cell, data) === false) {
                shouldDrawCell = false;
            }
        }
        if (shouldDrawCell) {
            var fillStyle = common_1.getFillStyle(cell.styles);
            if (fillStyle) {
                table.doc.rect(cell.x, cell.y, cell.width, cell.height, fillStyle);
            }
            table.doc.autoTableText(cell.text, cell.textPos.x, cell.textPos.y, {
                halign: cell.styles.halign,
                valign: cell.styles.valign
            });
        }
        table.cursor.x += cell.width;
    }
    table.cursor.y += row.height;
}
exports.printRow = printRow;
function canFitOnPage(rowHeight) {
    var table = config_1.Config.tableInstance();
    var pos = rowHeight + table.cursor.y + table.margin('bottom');
    return pos < config_1.Config.pageSize().height;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var jsPDF = __webpack_require__(18);
var config_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var painter_1 = __webpack_require__(16);
var calculator_1 = __webpack_require__(34);
var creator_1 = __webpack_require__(35);
/**
 * Create a table from a set of rows and columns.
 *
 * @param {Object[]|String[]} headers Either as an array of objects or array of strings
 * @param {Object[][]|String[][]} data Either as an array of objects or array of strings
 * @param {Object} [tableOptions={}] Options that will override the default ones
 */
jsPDF.API.autoTable = function (headers, data, tableOptions) {
    if (tableOptions === void 0) { tableOptions = {}; }
    this.autoTableState = this.autoTableState || {};
    jsPDF.autoTableState = jsPDF.autoTableState || {};
    var allOptions = [jsPDF.autoTableState.defaults || {}, this.autoTableState.defaults || {}, tableOptions || {}];
    creator_1.validateInput(headers, data, allOptions);
    var table = config_1.Config.createTable(this);
    config_1.Config.initSettings(table, allOptions);
    var settings = table.settings;
    // Create the table model with its columns, rows and cells
    creator_1.createModels(headers, data);
    settings.margin = config_1.Config.marginOrPadding(settings.margin, config_1.getDefaults().margin);
    calculator_1.calculateWidths(this, config_1.Config.pageSize().width);
    table.cursor = {
        x: table.margin('left'),
        y: settings.startY === false ? table.margin('top') : settings.startY
    };
    var minTableBottomPos = settings.startY + table.margin('bottom') + table.headerRow.height;
    if (settings.pageBreak === 'avoid') {
        minTableBottomPos += table.height;
    }
    var pageHeight = config_1.Config.pageSize().height;
    if ((settings.pageBreak === 'always' && settings.startY !== false) ||
        (settings.startY !== false && minTableBottomPos > pageHeight)) {
        common_1.nextPage(table.doc);
        table.cursor.y = table.margin('top');
    }
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    config_1.Config.applyUserStyles();
    if (settings.showHeader === true || settings.showHeader === 'firstPage' || settings.showHeader === 'everyPage') {
        painter_1.printRow(table.headerRow, table.hooks.drawHeaderRow, table.hooks.drawHeaderCell);
    }
    config_1.Config.applyUserStyles();
    table.rows.forEach(function (row) {
        painter_1.printFullRow(row, table.hooks.drawRow, table.hooks.drawCell);
    });
    common_1.addTableBorder();
    // Don't call global and document addPageContent more than once for each page
    var pageNumber = this.internal.getCurrentPageInfo().pageNumber;
    if (this.autoTableState.addPageHookPages && this.autoTableState.addPageHookPages[pageNumber]) {
        if (typeof tableOptions['addPageContent'] === 'function') {
            tableOptions['addPageContent'](config_1.Config.hooksData());
        }
    }
    else {
        if (!this.autoTableState.addPageHookPages)
            this.autoTableState.addPageHookPages = {};
        this.autoTableState.addPageHookPages[pageNumber] = true;
        common_1.addContentHooks();
    }
    table.finalY = table.cursor.y;
    this.autoTable.previous = table;
    config_1.Config.applyUserStyles();
    return this;
};
// Enables doc.autoTable.previous.finalY || 40;
jsPDF.API.autoTable.previous = false;
jsPDF.API.autoTableSetDefaults = function (defaults) {
    if (!this.autoTableState)
        this.autoTableState = {};
    if (defaults && typeof defaults === 'object') {
        this.autoTableState.defaults = defaults;
    }
    else {
        delete this.autoTableState.defaults;
    }
    return this;
};
jsPDF.autoTableSetDefaults = function (defaults) {
    if (!jsPDF.autoTableState)
        jsPDF.autoTableState = {};
    if (defaults && typeof defaults === 'object') {
        this.autoTableState.defaults = defaults;
    }
    else {
        delete this.autoTableState.defaults;
    }
    jsPDF.autoTableState.defaults = defaults;
};
/**
 * Parses an html table
 *
 * @param tableElem Html table element
 * @param includeHiddenElements If to include hidden rows and columns (defaults to false)
 * @returns Object Object with two properties, columns and rows
 */
jsPDF.API.autoTableHtmlToJson = function (tableElem, includeHiddenElements) {
    includeHiddenElements = includeHiddenElements || false;
    if (!tableElem || !(tableElem instanceof HTMLTableElement)) {
        console.error("A HTMLTableElement has to be sent to autoTableHtmlToJson");
        return null;
    }
    var columns = {}, rows = [];
    var header = tableElem.rows[0];
    for (var i = 0; i < header.cells.length; i++) {
        var cell = header.cells[i];
        var style = window.getComputedStyle(cell);
        if (includeHiddenElements || style.display !== 'none') {
            columns[i] = cell;
        }
    }
    var _loop_1 = function (i) {
        var tableRow = tableElem.rows[i];
        var style = window.getComputedStyle(tableRow);
        if (includeHiddenElements || style.display !== 'none') {
            var rowData_1 = [];
            Object.keys(columns).forEach(function (key) {
                var cell = tableRow.cells[key];
                rowData_1.push(cell);
            });
            rows.push(rowData_1);
        }
    };
    for (var i = 1; i < tableElem.rows.length; i++) {
        _loop_1(i);
    }
    var values = Object.keys(columns).map(function (key) { return columns[key]; });
    return { columns: values, rows: rows, data: rows };
};
/**
 * Improved text function with halign and valign support
 * Inspiration from: http://stackoverflow.com/questions/28327510/align-text-right-using-jspdf/28433113#28433113
 */
jsPDF.API.autoTableText = function (text, x, y, styles) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.error('The x and y parameters are required. Missing for the text: ', text);
    }
    var k = this.internal.scaleFactor;
    var fontSize = this.internal.getFontSize() / k;
    var splitRegex = /\r\n|\r|\n/g;
    var splitText = null;
    var lineCount = 1;
    if (styles.valign === 'middle' || styles.valign === 'bottom' || styles.halign === 'center' || styles.halign === 'right') {
        splitText = typeof text === 'string' ? text.split(splitRegex) : text;
        lineCount = splitText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - config_1.FONT_ROW_RATIO);
    if (styles.valign === 'middle')
        y -= (lineCount / 2) * fontSize * config_1.FONT_ROW_RATIO;
    else if (styles.valign === 'bottom')
        y -= lineCount * fontSize * config_1.FONT_ROW_RATIO;
    if (styles.halign === 'center' || styles.halign === 'right') {
        var alignSize = fontSize;
        if (styles.halign === 'center')
            alignSize *= 0.5;
        if (lineCount >= 1) {
            for (var iLine = 0; iLine < splitText.length; iLine++) {
                this.text(splitText[iLine], x - this.getStringUnitWidth(splitText[iLine]) * alignSize, y);
                y += fontSize;
            }
            return this;
        }
        x -= this.getStringUnitWidth(text) * alignSize;
    }
    this.text(text, x, y);
    return this;
};
/**
 * @deprecated Use doc.autoTable.previous.finalY instead
 */
jsPDF.API.autoTableEndPosY = function () {
    var prev = this.autoTable.previous;
    if (prev.cursor && typeof prev.cursor.y === 'number') {
        return prev.cursor.y;
    }
    else {
        return 0;
    }
};
/**
 * @deprecated Use jsPDF.autoTableSetDefaults({addPageContent: function() {}}) instead
 */
jsPDF.API.autoTableAddPageContent = function (hook) {
    if (!jsPDF.API.autoTable.globalDefaults) {
        jsPDF.API.autoTable.globalDefaults = {};
    }
    jsPDF.API.autoTable.globalDefaults.addPageContent = hook;
    return this;
};
/**
 * @deprecated Use data.addPage in hooks instead
 */
jsPDF.API.autoTableAddPage = function () {
    common_1.addPage();
    return this;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(6);

var implementation = __webpack_require__(7);
var getPolyfill = __webpack_require__(15);
var shim = __webpack_require__(33);

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(21);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES6 = __webpack_require__(24);
var assign = __webpack_require__(10);

var ES7 = assign(ES6, {
	// https://github.com/tc39/ecma262/pull/60
	SameValueNonNumber: function SameValueNonNumber(x, y) {
		if (typeof x === 'number' || typeof x !== typeof y) {
			throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
		}
		return this.SameValue(x, y);
	}
});

module.exports = ES7;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;

var $isNaN = __webpack_require__(8);
var $isFinite = __webpack_require__(9);
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(10);
var sign = __webpack_require__(11);
var mod = __webpack_require__(12);
var isPrimitive = __webpack_require__(25);
var toPrimitive = __webpack_require__(26);
var parseInteger = parseInt;
var bind = __webpack_require__(2);
var strSlice = bind.call(Function.call, String.prototype.slice);
var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, String.prototype.replace);
var trim = function (value) {
	return replace(value, trimRegex, '');
};

var ES5 = __webpack_require__(30);

var hasRegExpMatcher = __webpack_require__(32);

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
		if (typeof value === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = Math.floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a string');
		}
		return String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, String);
		return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr.call(argument) !== '[object String]') {
			throw new TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: Array.isArray || function IsArray(argument) {
		return toStr.call(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: function IsExtensible(obj) {
		if (!Object.preventExtensions) { return true; }
		if (isPrimitive(obj)) {
			return false;
		}
		return Object.isExtensible(obj);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = Math.abs(argument);
		return Math.floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return undefined;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && Symbol.species ? C[Symbol.species] : undefined;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new TypeError('no constructor found');
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(13);
var isCallable = __webpack_require__(1);
var isDate = __webpack_require__(27);
var isSymbol = __webpack_require__(28);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (PreferredType === String) {
			hint = 'string';
		} else if (PreferredType === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(8);
var $isFinite = __webpack_require__(9);

var sign = __webpack_require__(11);
var mod = __webpack_require__(12);

var IsCallable = __webpack_require__(1);
var toPrimitive = __webpack_require__(31);

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return Boolean(value);
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	}
};

module.exports = ES5;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(13);

var isCallable = __webpack_require__(1);

// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function (O, hint) {
		var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(14);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(15);
var define = __webpack_require__(6);

module.exports = function shimEntries() {
	var polyfill = getPolyfill();
	define(Object, { entries: polyfill }, {
		entries: function testEntries() {
			return Object.entries !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
/**
 * Calculate the column widths
 */
function calculateWidths(doc, pageWidth) {
    var table = config_1.Config.tableInstance();
    // Column and table content width
    var fixedWidth = 0;
    var autoWidth = 0;
    var dynamicColumns = [];
    table.columns.forEach(function (column) {
        column.contentWidth = 0;
        table.rows.concat(table.headerRow).forEach(function (row) {
            var cell = row.cells[column.dataKey];
            cell.contentWidth = cell.padding('horizontal') + common_1.getStringWidth(cell.text, cell.styles);
            if (cell.contentWidth > column.contentWidth) {
                column.contentWidth = cell.contentWidth;
            }
        });
        table.contentWidth += column.contentWidth;
        if (typeof column.widthStyle === 'number') {
            column.preferredWidth = column.widthStyle;
            fixedWidth += column.preferredWidth;
            column.width = column.preferredWidth;
        }
        else if (column.widthStyle === 'wrap') {
            column.preferredWidth = column.contentWidth;
            fixedWidth += column.preferredWidth;
            column.width = column.preferredWidth;
        }
        else {
            column.preferredWidth = column.contentWidth;
            autoWidth += column.contentWidth;
            dynamicColumns.push(column);
        }
        table.preferredWidth += column.preferredWidth;
    });
    if (typeof table.settings.tableWidth === 'number') {
        table.width = table.settings.tableWidth;
    }
    else if (table.settings.tableWidth === 'wrap') {
        table.width = table.preferredWidth;
    }
    else {
        table.width = pageWidth - table.margin('left') - table.margin('right');
    }
    distributeWidth(dynamicColumns, fixedWidth, autoWidth, 0);
    // Row height, table height and text overflow
    var all = table.rows.concat(table.headerRow);
    all.forEach(function (row) {
        table.columns.forEach(function (col) {
            var cell = row.cells[col.dataKey];
            config_1.Config.applyStyles(cell.styles);
            var textSpace = col.width - cell.padding('horizontal');
            var k = config_1.Config.scaleFactor();
            if (cell.styles.overflow === 'linebreak') {
                // Add one pt to textSpace to fix rounding error
                try {
                    cell.text = doc.splitTextToSize(cell.text, textSpace + 1 / k, { fontSize: cell.styles.fontSize });
                }
                catch (e) {
                    if (e instanceof TypeError && Array.isArray(cell.text)) {
                        cell.text = doc.splitTextToSize(cell.text.join(' '), textSpace + 1 / k, { fontSize: cell.styles.fontSize });
                    }
                    else {
                        throw e;
                    }
                }
            }
            else if (cell.styles.overflow === 'ellipsize') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles);
            }
            else if (cell.styles.overflow === 'visible') {
                // Do nothing
            }
            else if (cell.styles.overflow === 'hidden') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles, '');
            }
            else if (typeof cell.styles.overflow === 'function') {
                cell.text = cell.styles.overflow(cell.text, textSpace);
            }
            else {
                console.error("Unrecognized overflow type: " + cell.styles.overflow);
            }
            var lineCount = Array.isArray(cell.text) ? cell.text.length : 1;
            var fontHeight = cell.styles.fontSize / k * config_1.FONT_ROW_RATIO;
            cell.contentHeight = lineCount * fontHeight + cell.padding('vertical');
            if (cell.contentHeight > row.height) {
                row.height = cell.contentHeight;
                row.maxLineCount = lineCount;
            }
        });
        table.height += row.height;
    });
}
exports.calculateWidths = calculateWidths;
function distributeWidth(dynamicColumns, staticWidth, dynamicColumnsContentWidth, fairWidth) {
    var table = config_1.Config.tableInstance();
    var extraWidth = table.width - staticWidth - dynamicColumnsContentWidth;
    for (var i = 0; i < dynamicColumns.length; i++) {
        var col = dynamicColumns[i];
        var ratio = col.contentWidth / dynamicColumnsContentWidth;
        // A column turned out to be none dynamic, start over recursively
        var isNoneDynamic = col.contentWidth + extraWidth * ratio < fairWidth;
        if (extraWidth < 0 && isNoneDynamic) {
            dynamicColumns.splice(i, 1);
            dynamicColumnsContentWidth -= col.contentWidth;
            col.width = fairWidth;
            staticWidth += col.width;
            distributeWidth(dynamicColumns, staticWidth, dynamicColumnsContentWidth, fairWidth);
            break;
        }
        else {
            col.width = col.contentWidth + extraWidth * ratio;
        }
    }
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var models_1 = __webpack_require__(4);
var config_1 = __webpack_require__(0);
var assign = __webpack_require__(5);
function validateInput(headers, data, allOptions) {
    if (!headers || typeof headers !== 'object') {
        console.error("The headers should be an object or array, is: " + typeof headers);
    }
    if (!data || typeof data !== 'object') {
        console.error("The data should be an object or array, is: " + typeof data);
    }
    var _loop_1 = function (settings) {
        if (settings && typeof settings !== 'object') {
            console.error("The options parameter should be of type object, is: " + typeof settings);
        }
        if (typeof settings.extendWidth !== 'undefined') {
            settings.tableWidth = settings.extendWidth ? 'auto' : 'wrap';
            console.error("Use of deprecated option: extendWidth, use tableWidth instead.");
        }
        if (typeof settings.margins !== 'undefined') {
            if (typeof settings.margin === 'undefined')
                settings.margin = settings.margins;
            console.error("Use of deprecated option: margins, use margin instead.");
        }
        if (typeof settings.afterPageContent !== 'undefined' || typeof settings.beforePageContent !== 'undefined' || typeof settings.afterPageAdd !== 'undefined') {
            console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use addPageContent instead");
            if (typeof settings.addPageContent === 'undefined') {
                settings.addPageContent = function (data) {
                    config_1.Config.applyUserStyles();
                    if (settings.beforePageContent)
                        settings.beforePageContent(data);
                    config_1.Config.applyUserStyles();
                    if (settings.afterPageContent)
                        settings.afterPageContent(data);
                    config_1.Config.applyUserStyles();
                    if (settings.afterPageAdd && data.pageCount > 1) {
                        data.afterPageAdd(data);
                    }
                    config_1.Config.applyUserStyles();
                };
            }
        }
        [['padding', 'cellPadding'], ['lineHeight', 'rowHeight'], 'fontSize', 'overflow'].forEach(function (o) {
            var deprecatedOption = typeof o === 'string' ? o : o[0];
            var style = typeof o === 'string' ? o : o[1];
            if (typeof settings[deprecatedOption] !== 'undefined') {
                if (typeof settings.styles[style] === 'undefined') {
                    settings.styles[style] = settings[deprecatedOption];
                }
                console.error("Use of deprecated option: " + deprecatedOption + ", use the style " + style + " instead.");
            }
        });
        for (var _i = 0, _a = ['styles', 'bodyStyles', 'headerStyles', 'columnStyles']; _i < _a.length; _i++) {
            var styleProp = _a[_i];
            if (settings[styleProp] && typeof settings[styleProp] !== 'object') {
                console.error("The " + styleProp + " style should be of type object, is: " + typeof settings[styleProp]);
            }
            else if (settings[styleProp] && settings[styleProp].rowHeight) {
                console.error("Use of deprecated style: rowHeight, use vertical cell padding instead");
            }
        }
    };
    for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
        var settings = allOptions_1[_i];
        _loop_1(settings);
    }
}
exports.validateInput = validateInput;
/**
 * Create models from the user input
 *
 * @param inputHeaders
 * @param inputData
 */
function createModels(inputHeaders, inputData) {
    var splitRegex = /\r\n|\r|\n/g;
    var table = config_1.Config.tableInstance();
    var settings = table.settings;
    var theme = config_1.getTheme(settings.theme);
    // Header row and columns
    var headerRow = new models_1.Row(inputHeaders, -1);
    headerRow.index = -1;
    // Columns and header row
    inputHeaders.forEach(function (rawColumn, index) {
        var dataKey = index;
        if (typeof rawColumn.dataKey !== 'undefined') {
            dataKey = rawColumn.dataKey;
        }
        else if (typeof rawColumn.key !== 'undefined') {
            console.error("Deprecation warning: Use dataKey instead of key");
            dataKey = rawColumn.key; // deprecated since 2.x
        }
        var col = new models_1.Column(dataKey, index);
        col.raw = rawColumn;
        col.widthStyle = config_1.Config.styles([theme.table, theme.header, table.styles.styles, table.styles.columnStyles[col.dataKey] || {}]).columnWidth;
        table.columns.push(col);
        var cell = new models_1.Cell(rawColumn);
        cell.styles = config_1.Config.styles([theme.table, theme.header, table.styles.styles, table.styles.headerStyles]);
        if (cell.raw instanceof HTMLElement) {
            cell.text = (cell.raw.innerText || '').trim();
        }
        else {
            var text = typeof cell.raw === 'object' ? cell.raw.title : cell.raw;
            // Stringify 0 and false, but not undefined
            cell.text = typeof cell.raw !== 'undefined' ? '' + text : '';
        }
        cell.text = cell.text.split(splitRegex);
        headerRow.cells[dataKey] = cell;
        for (var _i = 0, _a = table.hooks.createdHeaderCell; _i < _a.length; _i++) {
            var hook = _a[_i];
            hook(cell, { cell: cell, column: col, row: headerRow, settings: settings });
        }
    });
    table.headerRow = headerRow;
    // Rows och cells
    inputData.forEach(function (rawRow, i) {
        var row = new models_1.Row(rawRow, i);
        var rowStyles = i % 2 === 0 ? assign({}, theme.alternateRow, table.styles.alternateRowStyles) : {};
        table.columns.forEach(function (column) {
            var cell = new models_1.Cell(rawRow[column.dataKey]);
            var colStyles = table.styles.columnStyles[column.dataKey] || {};
            cell.styles = config_1.Config.styles([theme.table, theme.body, table.styles.styles, table.styles.bodyStyles, rowStyles, colStyles]);
            if (cell.raw && cell.raw instanceof HTMLElement) {
                cell.text = (cell.raw.innerText || '').trim();
            }
            else {
                // Stringify 0 and false, but not undefined
                cell.text = typeof cell.raw !== 'undefined' ? '' + cell.raw : '';
            }
            cell.text = cell.text.split(splitRegex);
            row.cells[column.dataKey] = cell;
            for (var _i = 0, _a = table.hooks.createdCell; _i < _a.length; _i++) {
                var hook = _a[_i];
                hook(cell, config_1.Config.hooksData({ cell: cell, column: column, row: row }));
            }
        });
        table.rows.push(row);
    });
}
exports.createModels = createModels;


/***/ })
/******/ ]);
});
;/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */for(var e='undefined'!=typeof window&&'undefined'!=typeof document,t=['Edge','Trident','Firefox'],o=0,n=0;n<t.length;n+=1)if(e&&0<=navigator.userAgent.indexOf(t[n])){o=1;break}function i(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function r(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},o))}}var p=e&&window.Promise,s=p?i:r;function d(e){return e&&'[object Function]'==={}.toString.call(e)}function a(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function l(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function f(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var t=a(e),o=t.overflow,n=t.overflowX,i=t.overflowY;return /(auto|scroll|overlay)/.test(o+i+n)?e:f(l(e))}var m=e&&!!(window.MSInputMethodContext&&document.documentMode),h=e&&/MSIE 10/.test(navigator.userAgent);function c(e){return 11===e?m:10===e?h:m||h}function g(e){if(!e)return document.documentElement;for(var t=c(10)?document.body:null,o=e.offsetParent||null;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&'BODY'!==n&&'HTML'!==n?-1!==['TH','TD','TABLE'].indexOf(o.nodeName)&&'static'===a(o,'position')?g(o):o:e?e.ownerDocument.documentElement:document.documentElement}function u(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||g(e.firstElementChild)===e)}function b(e){return null===e.parentNode?e:b(e.parentNode)}function w(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var p=r.commonAncestorContainer;if(e!==p&&t!==p||n.contains(i))return u(p)?p:g(p);var s=b(e);return s.host?w(s.host,t):w(e,b(t).host)}function y(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function E(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=y(t,'top'),i=y(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function x(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function v(e,t,o,n){return Math.max(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],c(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function O(e){var t=e.body,o=e.documentElement,n=c(10)&&getComputedStyle(o);return{height:v('Height',t,o,n),width:v('Width',t,o,n)}}var L=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},S=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),T=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},C=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};function D(e){return C({},e,{right:e.left+e.width,bottom:e.top+e.height})}function N(e){var t={};try{if(c(10)){t=e.getBoundingClientRect();var o=y(e,'top'),n=y(e,'left');t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(t){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r='HTML'===e.nodeName?O(e.ownerDocument):{},p=r.width||e.clientWidth||i.right-i.left,s=r.height||e.clientHeight||i.bottom-i.top,d=e.offsetWidth-p,l=e.offsetHeight-s;if(d||l){var f=a(e);d-=x(f,'x'),l-=x(f,'y'),i.width-=d,i.height-=l}return D(i)}function P(e,t){var o=Math.max,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=c(10),r='HTML'===t.nodeName,p=N(e),s=N(t),d=f(e),l=a(t),m=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&r&&(s.top=o(s.top,0),s.left=o(s.left,0));var g=D({top:p.top-s.top-m,left:p.left-s.left-h,width:p.width,height:p.height});if(g.marginTop=0,g.marginLeft=0,!i&&r){var u=parseFloat(l.marginTop,10),b=parseFloat(l.marginLeft,10);g.top-=m-u,g.bottom-=m-u,g.left-=h-b,g.right-=h-b,g.marginTop=u,g.marginLeft=b}return(i&&!n?t.contains(d):t===d&&'BODY'!==d.nodeName)&&(g=E(g,t)),g}function k(e){var t=Math.max,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=P(e,n),r=t(n.clientWidth,window.innerWidth||0),p=t(n.clientHeight,window.innerHeight||0),s=o?0:y(n),d=o?0:y(n,'left'),a={top:s-i.top+i.marginTop,left:d-i.left+i.marginLeft,width:r,height:p};return D(a)}function W(e){var t=e.nodeName;if('BODY'===t||'HTML'===t)return!1;if('fixed'===a(e,'position'))return!0;var o=l(e);return!!o&&W(o)}function B(e){if(!e||!e.parentElement||c())return document.documentElement;for(var t=e.parentElement;t&&'none'===a(t,'transform');)t=t.parentElement;return t||document.documentElement}function H(e,t,o,n){var i=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},p=i?B(e):w(e,t);if('viewport'===n)r=k(p,i);else{var s;'scrollParent'===n?(s=f(l(t)),'BODY'===s.nodeName&&(s=e.ownerDocument.documentElement)):'window'===n?s=e.ownerDocument.documentElement:s=n;var d=P(s,p,i);if('HTML'===s.nodeName&&!W(p)){var a=O(e.ownerDocument),m=a.height,h=a.width;r.top+=d.top-d.marginTop,r.bottom=m+d.top,r.left+=d.left-d.marginLeft,r.right=h+d.left}else r=d}o=o||0;var c='number'==typeof o;return r.left+=c?o:o.left||0,r.top+=c?o:o.top||0,r.right-=c?o:o.right||0,r.bottom-=c?o:o.bottom||0,r}function A(e){var t=e.width,o=e.height;return t*o}function M(e,t,o,n,i){var r=5<arguments.length&&arguments[5]!==void 0?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=H(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return C({key:e},s[e],{area:A(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function F(e,t,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null,i=n?B(t):w(t,o);return P(o,i,n)}function I(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function R(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function U(e,t,o){o=o.split('-')[0];var n=I(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[R(s)],i}function Y(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function V(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=Y(e,function(e){return e[t]===o});return e.indexOf(n)}function j(e,t,o){var n=void 0===o?e:e.slice(0,V(e,'name',o));return n.forEach(function(e){e['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var o=e['function']||e.fn;e.enabled&&d(o)&&(t.offsets.popper=D(t.offsets.popper),t.offsets.reference=D(t.offsets.reference),t=o(t,e))}),t}function q(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=F(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=M(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=U(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=j(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function K(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function z(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function G(){return this.state.isDestroyed=!0,K(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[z('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function _(e){var t=e.ownerDocument;return t?t.defaultView:window}function X(e,t,o,n){var i='BODY'===e.nodeName,r=i?e.ownerDocument.defaultView:e;r.addEventListener(t,o,{passive:!0}),i||X(f(r.parentNode),t,o,n),n.push(r)}function J(e,t,o,n){o.updateBound=n,_(e).addEventListener('resize',o.updateBound,{passive:!0});var i=f(e);return X(i,'scroll',o.updateBound,o.scrollParents),o.scrollElement=i,o.eventsEnabled=!0,o}function Q(){this.state.eventsEnabled||(this.state=J(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(e,t){return _(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function $(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function ee(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function te(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&ee(t[o])&&(n='px'),e.style[o]=t[o]+n})}function oe(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function ne(e){return te(e.instance.popper,e.styles),oe(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&te(e.arrowElement,e.arrowStyles),e}function ie(e,t,o,n,i){var r=F(i,t,e,o.positionFixed),p=M(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),te(t,{position:o.positionFixed?'fixed':'absolute'}),o}function re(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=Math.round,p=Math.floor,s=function(e){return e},d=r(i.width),a=r(n.width),l=-1!==['left','right'].indexOf(e.placement),f=-1!==e.placement.indexOf('-'),m=t?l||f||d%2==a%2?r:p:s,h=t?r:s;return{left:m(1==d%2&&1==a%2&&!f&&t?n.left-1:n.left),top:h(n.top),bottom:h(n.bottom),right:m(n.right)}}var pe=e&&/Firefox/i.test(navigator.userAgent);function se(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=Y(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var p,s,d=void 0===r?t.gpuAcceleration:r,a=g(e.instance.popper),l=N(a),f={position:i.position},m=re(e,2>window.devicePixelRatio||!pe),h='bottom'===o?'top':'bottom',c='right'===n?'left':'right',u=z('transform');if(s='bottom'==h?'HTML'===a.nodeName?-a.clientHeight+m.bottom:-l.height+m.bottom:m.top,p='right'==c?'HTML'===a.nodeName?-a.clientWidth+m.right:-l.width+m.right:m.left,d&&u)f[u]='translate3d('+p+'px, '+s+'px, 0)',f[h]=0,f[c]=0,f.willChange='transform';else{var b='bottom'==h?-1:1,w='right'==c?-1:1;f[h]=s*b,f[c]=p*w,f.willChange=h+', '+c}var y={"x-placement":e.placement};return e.attributes=C({},y,e.attributes),e.styles=C({},f,e.styles),e.arrowStyles=C({},e.offsets.arrow,e.arrowStyles),e}function de(e,t,o){var n=Y(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function ae(e,t){var o;if(!de(e.instance.modifiers,'arrow','keepTogether'))return e;var n=t.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(i),l=d?'height':'width',f=d?'Top':'Left',m=f.toLowerCase(),h=d?'left':'top',c=d?'bottom':'right',g=I(n)[l];s[c]-g<p[m]&&(e.offsets.popper[m]-=p[m]-(s[c]-g)),s[m]+g>p[c]&&(e.offsets.popper[m]+=s[m]+g-p[c]),e.offsets.popper=D(e.offsets.popper);var u=s[m]+s[l]/2-g/2,b=a(e.instance.popper),w=parseFloat(b['margin'+f],10),y=parseFloat(b['border'+f+'Width'],10),E=u-e.offsets.popper[m]-w-y;return E=Math.max(Math.min(p[l]-g,E),0),e.arrowElement=n,e.offsets.arrow=(o={},T(o,m,Math.round(E)),T(o,h,''),o),e}function le(e){if('end'===e)return'start';return'start'===e?'end':e}var fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3);function he(e){var t=1<arguments.length&&arguments[1]!==void 0&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}var ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};function ge(e,t){if(K(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=H(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=R(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=he(n);break;case ce.COUNTERCLOCKWISE:p=he(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=R(n);var a=e.offsets.popper,l=e.offsets.reference,f=Math.floor,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),x=y||E;(m||b||x)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),x&&(r=le(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=C({},e.offsets.popper,U(e.instance.popper,e.offsets.reference,e.placement)),e=j(e.instance.modifiers,e,'flip'))}),e}function ue(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Math.floor,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}function be(e,t,o,n){var i=Math.max,r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),p=+r[1],s=r[2];if(!p)return e;if(0===s.indexOf('%')){var d;switch(s){case'%p':d=o;break;case'%':case'%r':default:d=n;}var a=D(d);return a[t]/100*p}if('vh'===s||'vw'===s){var l;return l='vh'===s?i(document.documentElement.clientHeight,window.innerHeight||0):i(document.documentElement.clientWidth,window.innerWidth||0),l/100*p}return p}function we(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(Y(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return be(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){ee(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function ye(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=ee(+n)?[+n,0]:we(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}function Ee(e,t){var o=t.boundariesElement||g(e.instance.popper);e.instance.reference===o&&(o=g(o));var n=z('transform'),i=e.instance.popper.style,r=i.top,p=i.left,s=i[n];i.top='',i.left='',i[n]='';var d=H(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=p,i[n]=s,t.boundaries=d;var a=t.priority,l=e.offsets.popper,f={primary:function(e){var o=l[e];return l[e]<d[e]&&!t.escapeWithReference&&(o=Math.max(l[e],d[e])),T({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=l[o];return l[e]>d[e]&&!t.escapeWithReference&&(n=Math.min(l[o],d[e]-('right'===e?l.width:l.height))),T({},o,n)}};return a.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';l=C({},l,f[t](e))}),e.offsets.popper=l,e}function xe(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:T({},d,r[d]),end:T({},d,r[d]+r[a]-p[a])};e.offsets.popper=C({},p,l[n])}return e}function ve(e){if(!de(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=Y(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}function Oe(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=R(t),e.offsets.popper=D(i),e}var Le={shift:{order:100,enabled:!0,fn:xe},offset:{order:200,enabled:!0,fn:ye,offset:0},preventOverflow:{order:300,enabled:!0,fn:Ee,priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:ue},arrow:{order:500,enabled:!0,fn:ae,element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:ge,behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Oe},hide:{order:800,enabled:!0,fn:ve},computeStyle:{order:850,enabled:!0,fn:se,gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:ne,onLoad:ie,gpuAcceleration:void 0}},Se={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Le},Te=function(){function e(t,o){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};L(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=s(this.update.bind(this)),this.options=C({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(C({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=C({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return C({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&d(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return S(e,[{key:'update',value:function(){return q.call(this)}},{key:'destroy',value:function(){return G.call(this)}},{key:'enableEventListeners',value:function(){return Q.call(this)}},{key:'disableEventListeners',value:function(){return $.call(this)}}]),e}();Te.Utils=('undefined'==typeof window?global:window).PopperUtils,Te.placements=fe,Te.Defaults=Se;export default Te;
//# sourceMappingURL=popper.min.js.map

;/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;/*!
 * Chart.js v2.8.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(function() { try { return require('moment'); } catch(e) { } }()) :
typeof define === 'function' && define.amd ? define(['require'], function(require) { return factory(function() { try { return require('moment'); } catch(e) { } }()); }) :
(global.Chart = factory(global.moment));
}(this, (function (moment) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

/* MIT license */

var conversions = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
};


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

var convert = function() {
   return new Converter();
};

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   };
});

var colorConvert = convert;

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */


var colorString = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
};

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3,4})$/i,
       hex =  /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr),
       hexAlpha = "";
   if (match) {
      match = match[1];
      hexAlpha = match[3];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorName[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgba, a) {
   var a = (a !== undefined && rgba.length === 3) ? a : rgba[3];
   return "#" + hexDouble(rgba[0]) 
              + hexDouble(rgba[1])
              + hexDouble(rgba[2])
              + (
                 (a >= 0 && a < 1)
                 ? hexDouble(Math.round(a * 255))
                 : ""
              );
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorName) {
   reverseNames[colorName[name]] = name;
}

/* MIT license */



var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.valid = false;
	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = colorString.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = colorString.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = colorString.getHwb(obj)) {
			this.setValues('hwb', vals);
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		}
	}
};

Color.prototype = {
	isValid: function () {
		return this.valid;
	},
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return colorString.hexString(this.values.rgb);
	},
	rgbString: function () {
		return colorString.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return colorString.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return colorString.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return colorString.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return colorString.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return colorString.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return colorString.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	this.valid = true;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = colorConvert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

var chartjsColor = Color;

/**
 * @namespace Chart.helpers
 */
var helpers = {
	/**
	 * An empty function that can be used, for example, for optional callback.
	 */
	noop: function() {},

	/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {number}
	 * @function
	 */
	uid: (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}()),

	/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isNullOrUndef: function(value) {
		return value === null || typeof value === 'undefined';
	},

	/**
	 * Returns true if `value` is an array (including typed arrays), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @function
	 */
	isArray: function(value) {
		if (Array.isArray && Array.isArray(value)) {
			return true;
		}
		var type = Object.prototype.toString.call(value);
		if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
			return true;
		}
		return false;
	},

	/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isObject: function(value) {
		return value !== null && Object.prototype.toString.call(value) === '[object Object]';
	},

	/**
	 * Returns true if `value` is a finite number, else returns false
	 * @param {*} value  - The value to test.
	 * @returns {boolean}
	 */
	isFinite: function(value) {
		return (typeof value === 'number' || value instanceof Number) && isFinite(value);
	},

	/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
	valueOrDefault: function(value, defaultValue) {
		return typeof value === 'undefined' ? defaultValue : value;
	},

	/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
	valueAtIndexOrDefault: function(value, index, defaultValue) {
		return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
	},

	/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
	callback: function(fn, args, thisArg) {
		if (fn && typeof fn.call === 'function') {
			return fn.apply(thisArg, args);
		}
	},

	/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {object|Array} loopable - The object or array to be iterated.
	 * @param {function} fn - The function to call for each item.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {boolean} [reverse] - If true, iterates backward on the loopable.
	 */
	each: function(loopable, fn, thisArg, reverse) {
		var i, len, keys;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					fn.call(thisArg, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					fn.call(thisArg, loopable[i], i);
				}
			}
		} else if (helpers.isObject(loopable)) {
			keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				fn.call(thisArg, loopable[keys[i]], keys[i]);
			}
		}
	},

	/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see https://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {boolean}
	 */
	arrayEquals: function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen = a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	},

	/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
	clone: function(source) {
		if (helpers.isArray(source)) {
			return source.map(helpers.clone);
		}

		if (helpers.isObject(source)) {
			var target = {};
			var keys = Object.keys(source);
			var klen = keys.length;
			var k = 0;

			for (; k < klen; ++k) {
				target[keys[k]] = helpers.clone(source[keys[k]]);
			}

			return target;
		}

		return source;
	},

	/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
	 * @private
	 */
	_merger: function(key, target, source, options) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.merge(tval, sval, options);
		} else {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
	_mergerIf: function(key, target, source) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.mergeIf(tval, sval);
		} else if (!target.hasOwnProperty(key)) {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @param {object} [options] - Merging options:
	 * @param {function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {object} The `target` object.
	 */
	merge: function(target, source, options) {
		var sources = helpers.isArray(source) ? source : [source];
		var ilen = sources.length;
		var merge, i, keys, klen, k;

		if (!helpers.isObject(target)) {
			return target;
		}

		options = options || {};
		merge = options.merger || helpers._merger;

		for (i = 0; i < ilen; ++i) {
			source = sources[i];
			if (!helpers.isObject(source)) {
				continue;
			}

			keys = Object.keys(source);
			for (k = 0, klen = keys.length; k < klen; ++k) {
				merge(keys[k], target, source, options);
			}
		}

		return target;
	},

	/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @returns {object} The `target` object.
	 */
	mergeIf: function(target, source) {
		return helpers.merge(target, source, {merger: helpers._mergerIf});
	},

	/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {object} target - The target object in which all objects are merged into.
	 * @param {object} arg1 - Object containing additional properties to merge in target.
	 * @param {object} argN - Additional objects containing properties to merge in target.
	 * @returns {object} The `target` object.
	 */
	extend: function(target) {
		var setFn = function(value, key) {
			target[key] = value;
		};
		for (var i = 1, ilen = arguments.length; i < ilen; ++i) {
			helpers.each(arguments[i], setFn);
		}
		return target;
	},

	/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
	inherits: function(extensions) {
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};

		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();
		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;
		return ChartElement;
	}
};

var helpers_core = helpers;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
helpers.callCallback = helpers.callback;

/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.indexOf = function(array, item, fromIndex) {
	return Array.prototype.indexOf.call(array, item, fromIndex);
};

/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueOrDefault = helpers.valueOrDefault;

/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */
var effects = {
	linear: function(t) {
		return t;
	},

	easeInQuad: function(t) {
		return t * t;
	},

	easeOutQuad: function(t) {
		return -t * (t - 2);
	},

	easeInOutQuad: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t;
		}
		return -0.5 * ((--t) * (t - 2) - 1);
	},

	easeInCubic: function(t) {
		return t * t * t;
	},

	easeOutCubic: function(t) {
		return (t = t - 1) * t * t + 1;
	},

	easeInOutCubic: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t + 2);
	},

	easeInQuart: function(t) {
		return t * t * t * t;
	},

	easeOutQuart: function(t) {
		return -((t = t - 1) * t * t * t - 1);
	},

	easeInOutQuart: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t;
		}
		return -0.5 * ((t -= 2) * t * t * t - 2);
	},

	easeInQuint: function(t) {
		return t * t * t * t * t;
	},

	easeOutQuint: function(t) {
		return (t = t - 1) * t * t * t * t + 1;
	},

	easeInOutQuint: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t * t * t + 2);
	},

	easeInSine: function(t) {
		return -Math.cos(t * (Math.PI / 2)) + 1;
	},

	easeOutSine: function(t) {
		return Math.sin(t * (Math.PI / 2));
	},

	easeInOutSine: function(t) {
		return -0.5 * (Math.cos(Math.PI * t) - 1);
	},

	easeInExpo: function(t) {
		return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
	},

	easeOutExpo: function(t) {
		return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
	},

	easeInOutExpo: function(t) {
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if ((t /= 0.5) < 1) {
			return 0.5 * Math.pow(2, 10 * (t - 1));
		}
		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	},

	easeInCirc: function(t) {
		if (t >= 1) {
			return t;
		}
		return -(Math.sqrt(1 - t * t) - 1);
	},

	easeOutCirc: function(t) {
		return Math.sqrt(1 - (t = t - 1) * t);
	},

	easeInOutCirc: function(t) {
		if ((t /= 0.5) < 1) {
			return -0.5 * (Math.sqrt(1 - t * t) - 1);
		}
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	},

	easeInElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	},

	easeOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
	},

	easeInOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if ((t /= 0.5) === 2) {
			return 1;
		}
		if (!p) {
			p = 0.45;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
	},
	easeInBack: function(t) {
		var s = 1.70158;
		return t * t * ((s + 1) * t - s);
	},

	easeOutBack: function(t) {
		var s = 1.70158;
		return (t = t - 1) * t * ((s + 1) * t + s) + 1;
	},

	easeInOutBack: function(t) {
		var s = 1.70158;
		if ((t /= 0.5) < 1) {
			return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
		}
		return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
	},

	easeInBounce: function(t) {
		return 1 - effects.easeOutBounce(1 - t);
	},

	easeOutBounce: function(t) {
		if (t < (1 / 2.75)) {
			return 7.5625 * t * t;
		}
		if (t < (2 / 2.75)) {
			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		}
		if (t < (2.5 / 2.75)) {
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		}
		return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
	},

	easeInOutBounce: function(t) {
		if (t < 0.5) {
			return effects.easeInBounce(t * 2) * 0.5;
		}
		return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
};

var helpers_easing = {
	effects: effects
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.easingEffects = effects;

var PI = Math.PI;
var RAD_PER_DEG = PI / 180;
var DOUBLE_PI = PI * 2;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;

/**
 * @namespace Chart.helpers.canvas
 */
var exports$1 = {
	/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
	clear: function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	},

	/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {number} width - The rectangle's width.
	 * @param {number} height - The rectangle's height.
	 * @param {number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
	roundedRect: function(ctx, x, y, width, height, radius) {
		if (radius) {
			var r = Math.min(radius, height / 2, width / 2);
			var left = x + r;
			var top = y + r;
			var right = x + width - r;
			var bottom = y + height - r;

			ctx.moveTo(x, top);
			if (left < right && top < bottom) {
				ctx.arc(left, top, r, -PI, -HALF_PI);
				ctx.arc(right, top, r, -HALF_PI, 0);
				ctx.arc(right, bottom, r, 0, HALF_PI);
				ctx.arc(left, bottom, r, HALF_PI, PI);
			} else if (left < right) {
				ctx.moveTo(left, y);
				ctx.arc(right, top, r, -HALF_PI, HALF_PI);
				ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
			} else if (top < bottom) {
				ctx.arc(left, top, r, -PI, 0);
				ctx.arc(left, bottom, r, 0, PI);
			} else {
				ctx.arc(left, top, r, -PI, PI);
			}
			ctx.closePath();
			ctx.moveTo(x, y);
		} else {
			ctx.rect(x, y, width, height);
		}
	},

	drawPoint: function(ctx, style, radius, x, y, rotation) {
		var type, xOffset, yOffset, size, cornerRadius;
		var rad = (rotation || 0) * RAD_PER_DEG;

		if (style && typeof style === 'object') {
			type = style.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.drawImage(style, x - style.width / 2, y - style.height / 2, style.width, style.height);
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		ctx.beginPath();

		switch (style) {
		// Default includes circle
		default:
			ctx.arc(x, y, radius, 0, DOUBLE_PI);
			ctx.closePath();
			break;
		case 'triangle':
			ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			ctx.closePath();
			break;
		case 'rectRounded':
			// NOTE: the rounded rect implementation changed to use `arc` instead of
			// `quadraticCurveTo` since it generates better results when rect is
			// almost a circle. 0.516 (instead of 0.5) produces results with visually
			// closer proportion to the previous impl and it is inscribed in the
			// circle with `radius`. For more details, see the following PRs:
			// https://github.com/chartjs/Chart.js/issues/5597
			// https://github.com/chartjs/Chart.js/issues/5858
			cornerRadius = radius * 0.516;
			size = radius - cornerRadius;
			xOffset = Math.cos(rad + QUARTER_PI) * size;
			yOffset = Math.sin(rad + QUARTER_PI) * size;
			ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
			ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
			ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
			ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
			ctx.closePath();
			break;
		case 'rect':
			if (!rotation) {
				size = Math.SQRT1_2 * radius;
				ctx.rect(x - size, y - size, 2 * size, 2 * size);
				break;
			}
			rad += QUARTER_PI;
			/* falls through */
		case 'rectRot':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + yOffset, y - xOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			ctx.closePath();
			break;
		case 'crossRot':
			rad += QUARTER_PI;
			/* falls through */
		case 'cross':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'star':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			rad += QUARTER_PI;
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'line':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			break;
		case 'dash':
			ctx.moveTo(x, y);
			ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
			break;
		}

		ctx.fill();
		ctx.stroke();
	},

	/**
	 * Returns true if the point is inside the rectangle
	 * @param {object} point - The point to test
	 * @param {object} area - The rectangle
	 * @returns {boolean}
	 * @private
	 */
	_isPointInArea: function(point, area) {
		var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

		return point.x > area.left - epsilon && point.x < area.right + epsilon &&
			point.y > area.top - epsilon && point.y < area.bottom + epsilon;
	},

	clipArea: function(ctx, area) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
		ctx.clip();
	},

	unclipArea: function(ctx) {
		ctx.restore();
	},

	lineTo: function(ctx, previous, target, flip) {
		var stepped = target.steppedLine;
		if (stepped) {
			if (stepped === 'middle') {
				var midpoint = (previous.x + target.x) / 2.0;
				ctx.lineTo(midpoint, flip ? target.y : previous.y);
				ctx.lineTo(midpoint, flip ? previous.y : target.y);
			} else if ((stepped === 'after' && !flip) || (stepped !== 'after' && flip)) {
				ctx.lineTo(previous.x, target.y);
			} else {
				ctx.lineTo(target.x, previous.y);
			}
			ctx.lineTo(target.x, target.y);
			return;
		}

		if (!target.tension) {
			ctx.lineTo(target.x, target.y);
			return;
		}

		ctx.bezierCurveTo(
			flip ? previous.controlPointPreviousX : previous.controlPointNextX,
			flip ? previous.controlPointPreviousY : previous.controlPointNextY,
			flip ? target.controlPointNextX : target.controlPointPreviousX,
			flip ? target.controlPointNextY : target.controlPointPreviousY,
			target.x,
			target.y);
	}
};

var helpers_canvas = exports$1;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.clear = exports$1.clear;

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.drawRoundedRectangle = function(ctx) {
	ctx.beginPath();
	exports$1.roundedRect.apply(exports$1, arguments);
};

var defaults = {
	/**
	 * @private
	 */
	_set: function(scope, values) {
		return helpers_core.merge(this[scope] || (this[scope] = {}), values);
	}
};

defaults._set('global', {
	defaultColor: 'rgba(0,0,0,0.1)',
	defaultFontColor: '#666',
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	defaultFontSize: 12,
	defaultFontStyle: 'normal',
	defaultLineHeight: 1.2,
	showLines: true
});

var core_defaults = defaults;

var valueOrDefault = helpers_core.valueOrDefault;

/**
 * Converts the given font object into a CSS font string.
 * @param {object} font - A font object.
 * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */
function toFontString(font) {
	if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
		return null;
	}

	return (font.style ? font.style + ' ' : '')
		+ (font.weight ? font.weight + ' ' : '')
		+ font.size + 'px '
		+ font.family;
}

/**
 * @alias Chart.helpers.options
 * @namespace
 */
var helpers_options = {
	/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
	toLineHeight: function(value, size) {
		var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
		if (!matches || matches[1] === 'normal') {
			return size * 1.2;
		}

		value = +matches[2];

		switch (matches[3]) {
		case 'px':
			return value;
		case '%':
			value /= 100;
			break;
		default:
			break;
		}

		return size * value;
	},

	/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {number|object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
	toPadding: function(value) {
		var t, r, b, l;

		if (helpers_core.isObject(value)) {
			t = +value.top || 0;
			r = +value.right || 0;
			b = +value.bottom || 0;
			l = +value.left || 0;
		} else {
			t = r = b = l = +value || 0;
		}

		return {
			top: t,
			right: r,
			bottom: b,
			left: l,
			height: t + b,
			width: l + r
		};
	},

	/**
	 * Parses font options and returns the font object.
	 * @param {object} options - A object that contains font options to be parsed.
	 * @return {object} The font object.
	 * @todo Support font.* options and renamed to toFont().
	 * @private
	 */
	_parseFont: function(options) {
		var globalDefaults = core_defaults.global;
		var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var font = {
			family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
			lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
			size: size,
			style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
			weight: null,
			string: ''
		};

		font.string = toFontString(font);
		return font;
	},

	/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array} inputs - An array of values, falling back to the last value.
	 * @param {object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @since 2.7.0
	 */
	resolve: function(inputs, context, index) {
		var i, ilen, value;

		for (i = 0, ilen = inputs.length; i < ilen; ++i) {
			value = inputs[i];
			if (value === undefined) {
				continue;
			}
			if (context !== undefined && typeof value === 'function') {
				value = value(context);
			}
			if (index !== undefined && helpers_core.isArray(value)) {
				value = value[index];
			}
			if (value !== undefined) {
				return value;
			}
		}
	}
};

var helpers$1 = helpers_core;
var easing = helpers_easing;
var canvas = helpers_canvas;
var options = helpers_options;
helpers$1.easing = easing;
helpers$1.canvas = canvas;
helpers$1.options = options;

function interpolate(start, view, model, ease) {
	var keys = Object.keys(model);
	var i, ilen, key, actual, origin, target, type, c0, c1;

	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		key = keys[i];

		target = model[key];

		// if a value is added to the model after pivot() has been called, the view
		// doesn't contain it, so let's initialize the view to the target value.
		if (!view.hasOwnProperty(key)) {
			view[key] = target;
		}

		actual = view[key];

		if (actual === target || key[0] === '_') {
			continue;
		}

		if (!start.hasOwnProperty(key)) {
			start[key] = actual;
		}

		origin = start[key];

		type = typeof target;

		if (type === typeof origin) {
			if (type === 'string') {
				c0 = chartjsColor(origin);
				if (c0.valid) {
					c1 = chartjsColor(target);
					if (c1.valid) {
						view[key] = c1.mix(c0, ease).rgbString();
						continue;
					}
				}
			} else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
				view[key] = origin + (target - origin) * ease;
				continue;
			}
		}

		view[key] = target;
	}
}

var Element = function(configuration) {
	helpers$1.extend(this, configuration);
	this.initialize.apply(this, arguments);
};

helpers$1.extend(Element.prototype, {

	initialize: function() {
		this.hidden = false;
	},

	pivot: function() {
		var me = this;
		if (!me._view) {
			me._view = helpers$1.clone(me._model);
		}
		me._start = {};
		return me;
	},

	transition: function(ease) {
		var me = this;
		var model = me._model;
		var start = me._start;
		var view = me._view;

		// No animation -> No Transition
		if (!model || ease === 1) {
			me._view = model;
			me._start = null;
			return me;
		}

		if (!view) {
			view = me._view = {};
		}

		if (!start) {
			start = me._start = {};
		}

		interpolate(start, view, model, ease);

		return me;
	},

	tooltipPosition: function() {
		return {
			x: this._model.x,
			y: this._model.y
		};
	},

	hasValue: function() {
		return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
	}
});

Element.extend = helpers$1.inherits;

var core_element = Element;

var exports$2 = core_element.extend({
	chart: null, // the animation associated chart instance
	currentStep: 0, // the current animation step
	numSteps: 60, // default number of steps
	easing: '', // the easing to use for this animation
	render: null, // render function used by the animation service

	onAnimationProgress: null, // user specified callback to fire on each step of the animation
	onAnimationComplete: null, // user specified callback to fire when the animation finishes
});

var core_animation = exports$2;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.Animation instead
 * @prop Chart.Animation#animationObject
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$2.prototype, 'animationObject', {
	get: function() {
		return this;
	}
});

/**
 * Provided for backward compatibility, use Chart.Animation#chart instead
 * @prop Chart.Animation#chartInstance
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$2.prototype, 'chartInstance', {
	get: function() {
		return this.chart;
	},
	set: function(value) {
		this.chart = value;
	}
});

core_defaults._set('global', {
	animation: {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers$1.noop,
		onComplete: helpers$1.noop
	}
});

var core_animations = {
	animations: [],
	request: null,

	/**
	 * @param {Chart} chart - The chart to animate.
	 * @param {Chart.Animation} animation - The animation that we will animate.
	 * @param {number} duration - The animation duration in ms.
	 * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
	 */
	addAnimation: function(chart, animation, duration, lazy) {
		var animations = this.animations;
		var i, ilen;

		animation.chart = chart;
		animation.startTime = Date.now();
		animation.duration = duration;

		if (!lazy) {
			chart.animating = true;
		}

		for (i = 0, ilen = animations.length; i < ilen; ++i) {
			if (animations[i].chart === chart) {
				animations[i] = animation;
				return;
			}
		}

		animations.push(animation);

		// If there are no animations queued, manually kickstart a digest, for lack of a better word
		if (animations.length === 1) {
			this.requestAnimationFrame();
		}
	},

	cancelAnimation: function(chart) {
		var index = helpers$1.findIndex(this.animations, function(animation) {
			return animation.chart === chart;
		});

		if (index !== -1) {
			this.animations.splice(index, 1);
			chart.animating = false;
		}
	},

	requestAnimationFrame: function() {
		var me = this;
		if (me.request === null) {
			// Skip animation frame requests until the active one is executed.
			// This can happen when processing mouse events, e.g. 'mousemove'
			// and 'mouseout' events will trigger multiple renders.
			me.request = helpers$1.requestAnimFrame.call(window, function() {
				me.request = null;
				me.startDigest();
			});
		}
	},

	/**
	 * @private
	 */
	startDigest: function() {
		var me = this;

		me.advance();

		// Do we have more stuff to animate?
		if (me.animations.length > 0) {
			me.requestAnimationFrame();
		}
	},

	/**
	 * @private
	 */
	advance: function() {
		var animations = this.animations;
		var animation, chart, numSteps, nextStep;
		var i = 0;

		// 1 animation per chart, so we are looping charts here
		while (i < animations.length) {
			animation = animations[i];
			chart = animation.chart;
			numSteps = animation.numSteps;

			// Make sure that currentStep starts at 1
			// https://github.com/chartjs/Chart.js/issues/6104
			nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
			animation.currentStep = Math.min(nextStep, numSteps);

			helpers$1.callback(animation.render, [chart, animation], chart);
			helpers$1.callback(animation.onAnimationProgress, [animation], chart);

			if (animation.currentStep >= numSteps) {
				helpers$1.callback(animation.onAnimationComplete, [animation], chart);
				chart.animating = false;
				animations.splice(i, 1);
			} else {
				++i;
			}
		}
	}
};

var resolve = helpers$1.options.resolve;

var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
 */
function listenArrayEvents(array, listener) {
	if (array._chartjs) {
		array._chartjs.listeners.push(listener);
		return;
	}

	Object.defineProperty(array, '_chartjs', {
		configurable: true,
		enumerable: false,
		value: {
			listeners: [listener]
		}
	});

	arrayEvents.forEach(function(key) {
		var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
		var base = array[key];

		Object.defineProperty(array, key, {
			configurable: true,
			enumerable: false,
			value: function() {
				var args = Array.prototype.slice.call(arguments);
				var res = base.apply(this, args);

				helpers$1.each(array._chartjs.listeners, function(object) {
					if (typeof object[method] === 'function') {
						object[method].apply(object, args);
					}
				});

				return res;
			}
		});
	});
}

/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */
function unlistenArrayEvents(array, listener) {
	var stub = array._chartjs;
	if (!stub) {
		return;
	}

	var listeners = stub.listeners;
	var index = listeners.indexOf(listener);
	if (index !== -1) {
		listeners.splice(index, 1);
	}

	if (listeners.length > 0) {
		return;
	}

	arrayEvents.forEach(function(key) {
		delete array[key];
	});

	delete array._chartjs;
}

// Base class for all dataset controllers (line, bar, etc)
var DatasetController = function(chart, datasetIndex) {
	this.initialize(chart, datasetIndex);
};

helpers$1.extend(DatasetController.prototype, {

	/**
	 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
	 * @type {Chart.core.element}
	 */
	datasetElementType: null,

	/**
	 * Element type used to generate a meta data (e.g. Chart.element.Point).
	 * @type {Chart.core.element}
	 */
	dataElementType: null,

	initialize: function(chart, datasetIndex) {
		var me = this;
		me.chart = chart;
		me.index = datasetIndex;
		me.linkScales();
		me.addElements();
	},

	updateIndex: function(datasetIndex) {
		this.index = datasetIndex;
	},

	linkScales: function() {
		var me = this;
		var meta = me.getMeta();
		var dataset = me.getDataset();

		if (meta.xAxisID === null || !(meta.xAxisID in me.chart.scales)) {
			meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
		}
		if (meta.yAxisID === null || !(meta.yAxisID in me.chart.scales)) {
			meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
		}
	},

	getDataset: function() {
		return this.chart.data.datasets[this.index];
	},

	getMeta: function() {
		return this.chart.getDatasetMeta(this.index);
	},

	getScaleForId: function(scaleID) {
		return this.chart.scales[scaleID];
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().yAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getValueScale: function() {
		return this.getScaleForId(this._getValueScaleId());
	},

	/**
	 * @private
	 */
	_getIndexScale: function() {
		return this.getScaleForId(this._getIndexScaleId());
	},

	reset: function() {
		this.update(true);
	},

	/**
	 * @private
	 */
	destroy: function() {
		if (this._data) {
			unlistenArrayEvents(this._data, this);
		}
	},

	createMetaDataset: function() {
		var me = this;
		var type = me.datasetElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index
		});
	},

	createMetaData: function(index) {
		var me = this;
		var type = me.dataElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index,
			_index: index
		});
	},

	addElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data || [];
		var metaData = meta.data;
		var i, ilen;

		for (i = 0, ilen = data.length; i < ilen; ++i) {
			metaData[i] = metaData[i] || me.createMetaData(i);
		}

		meta.dataset = meta.dataset || me.createMetaDataset();
	},

	addElementAndReset: function(index) {
		var element = this.createMetaData(index);
		this.getMeta().data.splice(index, 0, element);
		this.updateElement(element, index, true);
	},

	buildOrUpdateElements: function() {
		var me = this;
		var dataset = me.getDataset();
		var data = dataset.data || (dataset.data = []);

		// In order to correctly handle data addition/deletion animation (an thus simulate
		// real-time charts), we need to monitor these data modifications and synchronize
		// the internal meta data accordingly.
		if (me._data !== data) {
			if (me._data) {
				// This case happens when the user replaced the data array instance.
				unlistenArrayEvents(me._data, me);
			}

			if (data && Object.isExtensible(data)) {
				listenArrayEvents(data, me);
			}
			me._data = data;
		}

		// Re-sync meta data in case the user replaced the data array or if we missed
		// any updates and so make sure that we handle number of datapoints changing.
		me.resyncElements();
	},

	update: helpers$1.noop,

	transition: function(easingValue) {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		for (; i < ilen; ++i) {
			elements[i].transition(easingValue);
		}

		if (meta.dataset) {
			meta.dataset.transition(easingValue);
		}
	},

	draw: function() {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		if (meta.dataset) {
			meta.dataset.draw();
		}

		for (; i < ilen; ++i) {
			elements[i].draw();
		}
	},

	removeHoverStyle: function(element) {
		helpers$1.merge(element._model, element.$previousStyle || {});
		delete element.$previousStyle;
	},

	setHoverStyle: function(element) {
		var dataset = this.chart.data.datasets[element._datasetIndex];
		var index = element._index;
		var custom = element.custom || {};
		var model = element._model;
		var getHoverColor = helpers$1.getHoverColor;

		element.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth
		};

		model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
		model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
		model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
	},

	/**
	 * @private
	 */
	resyncElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data;
		var numMeta = meta.data.length;
		var numData = data.length;

		if (numData < numMeta) {
			meta.data.splice(numData, numMeta - numData);
		} else if (numData > numMeta) {
			me.insertElements(numMeta, numData - numMeta);
		}
	},

	/**
	 * @private
	 */
	insertElements: function(start, count) {
		for (var i = 0; i < count; ++i) {
			this.addElementAndReset(start + i);
		}
	},

	/**
	 * @private
	 */
	onDataPush: function() {
		var count = arguments.length;
		this.insertElements(this.getDataset().data.length - count, count);
	},

	/**
	 * @private
	 */
	onDataPop: function() {
		this.getMeta().data.pop();
	},

	/**
	 * @private
	 */
	onDataShift: function() {
		this.getMeta().data.shift();
	},

	/**
	 * @private
	 */
	onDataSplice: function(start, count) {
		this.getMeta().data.splice(start, count);
		this.insertElements(start, arguments.length - 2);
	},

	/**
	 * @private
	 */
	onDataUnshift: function() {
		this.insertElements(0, arguments.length);
	}
});

DatasetController.extend = helpers$1.inherits;

var core_datasetController = DatasetController;

core_defaults._set('global', {
	elements: {
		arc: {
			backgroundColor: core_defaults.global.defaultColor,
			borderColor: '#fff',
			borderWidth: 2,
			borderAlign: 'center'
		}
	}
});

var element_arc = core_element.extend({
	inLabelRange: function(mouseX) {
		var vm = this._view;

		if (vm) {
			return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
		}
		return false;
	},

	inRange: function(chartX, chartY) {
		var vm = this._view;

		if (vm) {
			var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {x: chartX, y: chartY});
			var	angle = pointRelativePosition.angle;
			var distance = pointRelativePosition.distance;

			// Sanitise angle range
			var startAngle = vm.startAngle;
			var endAngle = vm.endAngle;
			while (endAngle < startAngle) {
				endAngle += 2.0 * Math.PI;
			}
			while (angle > endAngle) {
				angle -= 2.0 * Math.PI;
			}
			while (angle < startAngle) {
				angle += 2.0 * Math.PI;
			}

			// Check if within the range of the open/close angle
			var betweenAngles = (angle >= startAngle && angle <= endAngle);
			var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

			return (betweenAngles && withinRadius);
		}
		return false;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var halfAngle = (vm.startAngle + vm.endAngle) / 2;
		var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
		return {
			x: vm.x + Math.cos(halfAngle) * halfRadius,
			y: vm.y + Math.sin(halfAngle) * halfRadius
		};
	},

	getArea: function() {
		var vm = this._view;
		return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
	},

	tooltipPosition: function() {
		var vm = this._view;
		var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
		var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

		return {
			x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
			y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
		};
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var sA = vm.startAngle;
		var eA = vm.endAngle;
		var pixelMargin = (vm.borderAlign === 'inner') ? 0.33 : 0;
		var angleMargin;

		ctx.save();

		ctx.beginPath();
		ctx.arc(vm.x, vm.y, Math.max(vm.outerRadius - pixelMargin, 0), sA, eA);
		ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
		ctx.closePath();

		ctx.fillStyle = vm.backgroundColor;
		ctx.fill();

		if (vm.borderWidth) {
			if (vm.borderAlign === 'inner') {
				// Draw an inner border by cliping the arc and drawing a double-width border
				// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
				ctx.beginPath();
				angleMargin = pixelMargin / vm.outerRadius;
				ctx.arc(vm.x, vm.y, vm.outerRadius, sA - angleMargin, eA + angleMargin);
				if (vm.innerRadius > pixelMargin) {
					angleMargin = pixelMargin / vm.innerRadius;
					ctx.arc(vm.x, vm.y, vm.innerRadius - pixelMargin, eA + angleMargin, sA - angleMargin, true);
				} else {
					ctx.arc(vm.x, vm.y, pixelMargin, eA + Math.PI / 2, sA - Math.PI / 2);
				}
				ctx.closePath();
				ctx.clip();

				ctx.beginPath();
				ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
				ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
				ctx.closePath();

				ctx.lineWidth = vm.borderWidth * 2;
				ctx.lineJoin = 'round';
			} else {
				ctx.lineWidth = vm.borderWidth;
				ctx.lineJoin = 'bevel';
			}

			ctx.strokeStyle = vm.borderColor;
			ctx.stroke();
		}

		ctx.restore();
	}
});

var valueOrDefault$1 = helpers$1.valueOrDefault;

var defaultColor = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		line: {
			tension: 0.4,
			backgroundColor: defaultColor,
			borderWidth: 3,
			borderColor: defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		}
	}
});

var element_line = core_element.extend({
	draw: function() {
		var me = this;
		var vm = me._view;
		var ctx = me._chart.ctx;
		var spanGaps = vm.spanGaps;
		var points = me._children.slice(); // clone array
		var globalDefaults = core_defaults.global;
		var globalOptionLineElements = globalDefaults.elements.line;
		var lastDrawnIndex = -1;
		var index, current, previous, currentVM;

		// If we are looping, adding the first point again
		if (me._loop && points.length) {
			points.push(points[0]);
		}

		ctx.save();

		// Stroke Line Options
		ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

		// IE 9 and 10 do not support line dash
		if (ctx.setLineDash) {
			ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
		}

		ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
		ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
		ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
		ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

		// Stroke Line
		ctx.beginPath();
		lastDrawnIndex = -1;

		for (index = 0; index < points.length; ++index) {
			current = points[index];
			previous = helpers$1.previousItem(points, index);
			currentVM = current._view;

			// First point moves to it's starting position no matter what
			if (index === 0) {
				if (!currentVM.skip) {
					ctx.moveTo(currentVM.x, currentVM.y);
					lastDrawnIndex = index;
				}
			} else {
				previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

				if (!currentVM.skip) {
					if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
						// There was a gap and this is the first point after the gap
						ctx.moveTo(currentVM.x, currentVM.y);
					} else {
						// Line to next point
						helpers$1.canvas.lineTo(ctx, previous._view, current._view);
					}
					lastDrawnIndex = index;
				}
			}
		}

		ctx.stroke();
		ctx.restore();
	}
});

var valueOrDefault$2 = helpers$1.valueOrDefault;

var defaultColor$1 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		point: {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor$1,
			borderColor: defaultColor$1,
			borderWidth: 1,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		}
	}
});

function xRange(mouseX) {
	var vm = this._view;
	return vm ? (Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius) : false;
}

function yRange(mouseY) {
	var vm = this._view;
	return vm ? (Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius) : false;
}

var element_point = core_element.extend({
	inRange: function(mouseX, mouseY) {
		var vm = this._view;
		return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
	},

	inLabelRange: xRange,
	inXRange: xRange,
	inYRange: yRange,

	getCenterPoint: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	},

	getArea: function() {
		return Math.PI * Math.pow(this._view.radius, 2);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y,
			padding: vm.radius + vm.borderWidth
		};
	},

	draw: function(chartArea) {
		var vm = this._view;
		var ctx = this._chart.ctx;
		var pointStyle = vm.pointStyle;
		var rotation = vm.rotation;
		var radius = vm.radius;
		var x = vm.x;
		var y = vm.y;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

		if (vm.skip) {
			return;
		}

		// Clipping for Points.
		if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
			ctx.strokeStyle = vm.borderColor || defaultColor;
			ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
			ctx.fillStyle = vm.backgroundColor || defaultColor;
			helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
		}
	}
});

var defaultColor$2 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		rectangle: {
			backgroundColor: defaultColor$2,
			borderColor: defaultColor$2,
			borderSkipped: 'bottom',
			borderWidth: 0
		}
	}
});

function isVertical(vm) {
	return vm && vm.width !== undefined;
}

/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function getBarBounds(vm) {
	var x1, x2, y1, y2, half;

	if (isVertical(vm)) {
		half = vm.width / 2;
		x1 = vm.x - half;
		x2 = vm.x + half;
		y1 = Math.min(vm.y, vm.base);
		y2 = Math.max(vm.y, vm.base);
	} else {
		half = vm.height / 2;
		x1 = Math.min(vm.x, vm.base);
		x2 = Math.max(vm.x, vm.base);
		y1 = vm.y - half;
		y2 = vm.y + half;
	}

	return {
		left: x1,
		top: y1,
		right: x2,
		bottom: y2
	};
}

function swap(orig, v1, v2) {
	return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}

function parseBorderSkipped(vm) {
	var edge = vm.borderSkipped;
	var res = {};

	if (!edge) {
		return res;
	}

	if (vm.horizontal) {
		if (vm.base > vm.x) {
			edge = swap(edge, 'left', 'right');
		}
	} else if (vm.base < vm.y) {
		edge = swap(edge, 'bottom', 'top');
	}

	res[edge] = true;
	return res;
}

function parseBorderWidth(vm, maxW, maxH) {
	var value = vm.borderWidth;
	var skip = parseBorderSkipped(vm);
	var t, r, b, l;

	if (helpers$1.isObject(value)) {
		t = +value.top || 0;
		r = +value.right || 0;
		b = +value.bottom || 0;
		l = +value.left || 0;
	} else {
		t = r = b = l = +value || 0;
	}

	return {
		t: skip.top || (t < 0) ? 0 : t > maxH ? maxH : t,
		r: skip.right || (r < 0) ? 0 : r > maxW ? maxW : r,
		b: skip.bottom || (b < 0) ? 0 : b > maxH ? maxH : b,
		l: skip.left || (l < 0) ? 0 : l > maxW ? maxW : l
	};
}

function boundingRects(vm) {
	var bounds = getBarBounds(vm);
	var width = bounds.right - bounds.left;
	var height = bounds.bottom - bounds.top;
	var border = parseBorderWidth(vm, width / 2, height / 2);

	return {
		outer: {
			x: bounds.left,
			y: bounds.top,
			w: width,
			h: height
		},
		inner: {
			x: bounds.left + border.l,
			y: bounds.top + border.t,
			w: width - border.l - border.r,
			h: height - border.t - border.b
		}
	};
}

function inRange(vm, x, y) {
	var skipX = x === null;
	var skipY = y === null;
	var bounds = !vm || (skipX && skipY) ? false : getBarBounds(vm);

	return bounds
		&& (skipX || x >= bounds.left && x <= bounds.right)
		&& (skipY || y >= bounds.top && y <= bounds.bottom);
}

var element_rectangle = core_element.extend({
	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var rects = boundingRects(vm);
		var outer = rects.outer;
		var inner = rects.inner;

		ctx.fillStyle = vm.backgroundColor;
		ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

		if (outer.w === inner.w && outer.h === inner.h) {
			return;
		}

		ctx.save();
		ctx.beginPath();
		ctx.rect(outer.x, outer.y, outer.w, outer.h);
		ctx.clip();
		ctx.fillStyle = vm.borderColor;
		ctx.rect(inner.x, inner.y, inner.w, inner.h);
		ctx.fill('evenodd');
		ctx.restore();
	},

	height: function() {
		var vm = this._view;
		return vm.base - vm.y;
	},

	inRange: function(mouseX, mouseY) {
		return inRange(this._view, mouseX, mouseY);
	},

	inLabelRange: function(mouseX, mouseY) {
		var vm = this._view;
		return isVertical(vm)
			? inRange(vm, mouseX, null)
			: inRange(vm, null, mouseY);
	},

	inXRange: function(mouseX) {
		return inRange(this._view, mouseX, null);
	},

	inYRange: function(mouseY) {
		return inRange(this._view, null, mouseY);
	},

	getCenterPoint: function() {
		var vm = this._view;
		var x, y;
		if (isVertical(vm)) {
			x = vm.x;
			y = (vm.y + vm.base) / 2;
		} else {
			x = (vm.x + vm.base) / 2;
			y = vm.y;
		}

		return {x: x, y: y};
	},

	getArea: function() {
		var vm = this._view;

		return isVertical(vm)
			? vm.width * Math.abs(vm.y - vm.base)
			: vm.height * Math.abs(vm.x - vm.base);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	}
});

var elements = {};
var Arc = element_arc;
var Line = element_line;
var Point = element_point;
var Rectangle = element_rectangle;
elements.Arc = Arc;
elements.Line = Line;
elements.Point = Point;
elements.Rectangle = Rectangle;

var resolve$1 = helpers$1.options.resolve;

core_defaults._set('bar', {
	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			categoryPercentage: 0.8,
			barPercentage: 0.9,
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}],

		yAxes: [{
			type: 'linear'
		}]
	}
});

/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */
function computeMinSampleSize(scale, pixels) {
	var min = scale.isHorizontal() ? scale.width : scale.height;
	var ticks = scale.getTicks();
	var prev, curr, i, ilen;

	for (i = 1, ilen = pixels.length; i < ilen; ++i) {
		min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
	}

	for (i = 0, ilen = ticks.length; i < ilen; ++i) {
		curr = scale.getPixelForTick(i);
		min = i > 0 ? Math.min(min, curr - prev) : min;
		prev = curr;
	}

	return min;
}

/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */
function computeFitCategoryTraits(index, ruler, options) {
	var thickness = options.barThickness;
	var count = ruler.stackCount;
	var curr = ruler.pixels[index];
	var size, ratio;

	if (helpers$1.isNullOrUndef(thickness)) {
		size = ruler.min * options.categoryPercentage;
		ratio = options.barPercentage;
	} else {
		// When bar thickness is enforced, category and bar percentages are ignored.
		// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
		// and deprecate barPercentage since this value is ignored when thickness is absolute.
		size = thickness * count;
		ratio = 1;
	}

	return {
		chunk: size / count,
		ratio: ratio,
		start: curr - (size / 2)
	};
}

/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */
function computeFlexCategoryTraits(index, ruler, options) {
	var pixels = ruler.pixels;
	var curr = pixels[index];
	var prev = index > 0 ? pixels[index - 1] : null;
	var next = index < pixels.length - 1 ? pixels[index + 1] : null;
	var percent = options.categoryPercentage;
	var start, size;

	if (prev === null) {
		// first data: its size is double based on the next point or,
		// if it's also the last data, we use the scale size.
		prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
	}

	if (next === null) {
		// last data: its size is also double based on the previous point.
		next = curr + curr - prev;
	}

	start = curr - (curr - Math.min(prev, next)) / 2 * percent;
	size = Math.abs(next - prev) / 2 * percent;

	return {
		chunk: size / ruler.stackCount,
		ratio: options.barPercentage,
		start: start
	};
}

var controller_bar = core_datasetController.extend({

	dataElementType: elements.Rectangle,

	initialize: function() {
		var me = this;
		var meta;

		core_datasetController.prototype.initialize.apply(me, arguments);

		meta = me.getMeta();
		meta.stack = me.getDataset().stack;
		meta.bar = true;
	},

	update: function(reset) {
		var me = this;
		var rects = me.getMeta().data;
		var i, ilen;

		me._ruler = me.getRuler();

		for (i = 0, ilen = rects.length; i < ilen; ++i) {
			me.updateElement(rects[i], i, reset);
		}
	},

	updateElement: function(rectangle, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var dataset = me.getDataset();
		var options = me._resolveElementOptions(rectangle, index);

		rectangle._xScale = me.getScaleForId(meta.xAxisID);
		rectangle._yScale = me.getScaleForId(meta.yAxisID);
		rectangle._datasetIndex = me.index;
		rectangle._index = index;
		rectangle._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderSkipped: options.borderSkipped,
			borderWidth: options.borderWidth,
			datasetLabel: dataset.label,
			label: me.chart.data.labels[index]
		};

		me._updateElementGeometry(rectangle, index, reset);

		rectangle.pivot();
	},

	/**
	 * @private
	 */
	_updateElementGeometry: function(rectangle, index, reset) {
		var me = this;
		var model = rectangle._model;
		var vscale = me._getValueScale();
		var base = vscale.getBasePixel();
		var horizontal = vscale.isHorizontal();
		var ruler = me._ruler || me.getRuler();
		var vpixels = me.calculateBarValuePixels(me.index, index);
		var ipixels = me.calculateBarIndexPixels(me.index, index, ruler);

		model.horizontal = horizontal;
		model.base = reset ? base : vpixels.base;
		model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
		model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
		model.height = horizontal ? ipixels.size : undefined;
		model.width = horizontal ? undefined : ipixels.size;
	},

	/**
	 * Returns the stacks based on groups and bar visibility.
	 * @param {number} [last] - The dataset index
	 * @returns {string[]} The list of stack IDs
	 * @private
	 */
	_getStacks: function(last) {
		var me = this;
		var chart = me.chart;
		var scale = me._getIndexScale();
		var stacked = scale.options.stacked;
		var ilen = last === undefined ? chart.data.datasets.length : last + 1;
		var stacks = [];
		var i, meta;

		for (i = 0; i < ilen; ++i) {
			meta = chart.getDatasetMeta(i);
			if (meta.bar && chart.isDatasetVisible(i) &&
				(stacked === false ||
				(stacked === true && stacks.indexOf(meta.stack) === -1) ||
				(stacked === undefined && (meta.stack === undefined || stacks.indexOf(meta.stack) === -1)))) {
				stacks.push(meta.stack);
			}
		}

		return stacks;
	},

	/**
	 * Returns the effective number of stacks based on groups and bar visibility.
	 * @private
	 */
	getStackCount: function() {
		return this._getStacks().length;
	},

	/**
	 * Returns the stack index for the given dataset based on groups and bar visibility.
	 * @param {number} [datasetIndex] - The dataset index
	 * @param {string} [name] - The stack name to find
	 * @returns {number} The stack index
	 * @private
	 */
	getStackIndex: function(datasetIndex, name) {
		var stacks = this._getStacks(datasetIndex);
		var index = (name !== undefined)
			? stacks.indexOf(name)
			: -1; // indexOf returns -1 if element is not present

		return (index === -1)
			? stacks.length - 1
			: index;
	},

	/**
	 * @private
	 */
	getRuler: function() {
		var me = this;
		var scale = me._getIndexScale();
		var stackCount = me.getStackCount();
		var datasetIndex = me.index;
		var isHorizontal = scale.isHorizontal();
		var start = isHorizontal ? scale.left : scale.top;
		var end = start + (isHorizontal ? scale.width : scale.height);
		var pixels = [];
		var i, ilen, min;

		for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
			pixels.push(scale.getPixelForValue(null, i, datasetIndex));
		}

		min = helpers$1.isNullOrUndef(scale.options.barThickness)
			? computeMinSampleSize(scale, pixels)
			: -1;

		return {
			min: min,
			pixels: pixels,
			start: start,
			end: end,
			stackCount: stackCount,
			scale: scale
		};
	},

	/**
	 * Note: pixel values are not clamped to the scale area.
	 * @private
	 */
	calculateBarValuePixels: function(datasetIndex, index) {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var scale = me._getValueScale();
		var isHorizontal = scale.isHorizontal();
		var datasets = chart.data.datasets;
		var value = +scale.getRightValue(datasets[datasetIndex].data[index]);
		var minBarLength = scale.options.minBarLength;
		var stacked = scale.options.stacked;
		var stack = meta.stack;
		var start = 0;
		var i, imeta, ivalue, base, head, size;

		if (stacked || (stacked === undefined && stack !== undefined)) {
			for (i = 0; i < datasetIndex; ++i) {
				imeta = chart.getDatasetMeta(i);

				if (imeta.bar &&
					imeta.stack === stack &&
					imeta.controller._getValueScaleId() === scale.id &&
					chart.isDatasetVisible(i)) {

					ivalue = +scale.getRightValue(datasets[i].data[index]);
					if ((value < 0 && ivalue < 0) || (value >= 0 && ivalue > 0)) {
						start += ivalue;
					}
				}
			}
		}

		base = scale.getPixelForValue(start);
		head = scale.getPixelForValue(start + value);
		size = head - base;

		if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
			size = minBarLength;
			if (value >= 0 && !isHorizontal || value < 0 && isHorizontal) {
				head = base - minBarLength;
			} else {
				head = base + minBarLength;
			}
		}

		return {
			size: size,
			base: base,
			head: head,
			center: head + size / 2
		};
	},

	/**
	 * @private
	 */
	calculateBarIndexPixels: function(datasetIndex, index, ruler) {
		var me = this;
		var options = ruler.scale.options;
		var range = options.barThickness === 'flex'
			? computeFlexCategoryTraits(index, ruler, options)
			: computeFitCategoryTraits(index, ruler, options);

		var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
		var center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
		var size = Math.min(
			helpers$1.valueOrDefault(options.maxBarThickness, Infinity),
			range.chunk * range.ratio);

		return {
			base: center - size / 2,
			head: center + size / 2,
			center: center,
			size: size
		};
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var scale = me._getValueScale();
		var rects = me.getMeta().data;
		var dataset = me.getDataset();
		var ilen = rects.length;
		var i = 0;

		helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

		for (; i < ilen; ++i) {
			if (!isNaN(scale.getRightValue(dataset.data[i]))) {
				rects[i].draw();
			}
		}

		helpers$1.canvas.unclipArea(chart.ctx);
	},

	/**
	 * @private
	 */
	_resolveElementOptions: function(rectangle, index) {
		var me = this;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var dataset = datasets[me.index];
		var custom = rectangle.custom || {};
		var options = chart.options.elements.rectangle;
		var values = {};
		var i, ilen, key;

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		var keys = [
			'backgroundColor',
			'borderColor',
			'borderSkipped',
			'borderWidth'
		];

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$1([
				custom[key],
				dataset[key],
				options[key]
			], context, index);
		}

		return values;
	}
});

var valueOrDefault$3 = helpers$1.valueOrDefault;
var resolve$2 = helpers$1.options.resolve;

core_defaults._set('bubble', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			type: 'linear', // bubble should probably use a linear scale by default
			position: 'bottom',
			id: 'x-axis-0' // need an ID so datasets can reference the scale
		}],
		yAxes: [{
			type: 'linear',
			position: 'left',
			id: 'y-axis-0'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				// Title doesn't make sense for scatter since we format the data as a point
				return '';
			},
			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				var dataPoint = data.datasets[item.datasetIndex].data[item.index];
				return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
			}
		}
	}
});

var controller_bubble = core_datasetController.extend({
	/**
	 * @protected
	 */
	dataElementType: elements.Point,

	/**
	 * @protected
	 */
	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var points = meta.data;

		// Update Points
		helpers$1.each(points, function(point, index) {
			me.updateElement(point, index, reset);
		});
	},

	/**
	 * @protected
	 */
	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var xScale = me.getScaleForId(meta.xAxisID);
		var yScale = me.getScaleForId(meta.yAxisID);
		var options = me._resolveElementOptions(point, index);
		var data = me.getDataset().data[index];
		var dsIndex = me.index;

		var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
		var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);

		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = dsIndex;
		point._index = index;
		point._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			hitRadius: options.hitRadius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			radius: reset ? 0 : options.radius,
			skip: custom.skip || isNaN(x) || isNaN(y),
			x: x,
			y: y,
		};

		point.pivot();
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$3(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$3(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$3(options.hoverBorderWidth, options.borderWidth);
		model.radius = options.radius + options.hoverRadius;
	},

	/**
	 * @private
	 */
	_resolveElementOptions: function(point, index) {
		var me = this;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var dataset = datasets[me.index];
		var custom = point.custom || {};
		var options = chart.options.elements.point;
		var data = dataset.data[index];
		var values = {};
		var i, ilen, key;

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		var keys = [
			'backgroundColor',
			'borderColor',
			'borderWidth',
			'hoverBackgroundColor',
			'hoverBorderColor',
			'hoverBorderWidth',
			'hoverRadius',
			'hitRadius',
			'pointStyle',
			'rotation'
		];

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$2([
				custom[key],
				dataset[key],
				options[key]
			], context, index);
		}

		// Custom radius resolution
		values.radius = resolve$2([
			custom.radius,
			data ? data.r : undefined,
			dataset.radius,
			options.radius
		], context, index);

		return values;
	}
});

var resolve$3 = helpers$1.options.resolve;
var valueOrDefault$4 = helpers$1.valueOrDefault;

core_defaults._set('doughnut', {
	animation: {
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false
	},
	hover: {
		mode: 'single'
	},
	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');

		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;

		if (datasets.length) {
			for (var i = 0; i < datasets[0].data.length; ++i) {
				text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
				if (labels[i]) {
					text.push(labels[i]);
				}
				text.push('</li>');
			}
		}

		text.push('</ul>');
		return text.join('');
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var ds = data.datasets[0];
						var arc = meta.data[i];
						var custom = arc && arc.custom || {};
						var arcOpts = chart.options.elements.arc;
						var fill = resolve$3([custom.backgroundColor, ds.backgroundColor, arcOpts.backgroundColor], undefined, i);
						var stroke = resolve$3([custom.borderColor, ds.borderColor, arcOpts.borderColor], undefined, i);
						var bw = resolve$3([custom.borderWidth, ds.borderWidth, arcOpts.borderWidth], undefined, i);

						return {
							text: label,
							fillStyle: fill,
							strokeStyle: stroke,
							lineWidth: bw,
							hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				// toggle visibility of index if exists
				if (meta.data[index]) {
					meta.data[index].hidden = !meta.data[index].hidden;
				}
			}

			chart.update();
		}
	},

	// The percentage of the chart that we cut out of the middle.
	cutoutPercentage: 50,

	// The rotation of the chart, where the first data arc begins.
	rotation: Math.PI * -0.5,

	// The total circumference of the chart.
	circumference: Math.PI * 2.0,

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(tooltipItem, data) {
				var dataLabel = data.labels[tooltipItem.index];
				var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

				if (helpers$1.isArray(dataLabel)) {
					// show value on first line of multiline label
					// need to clone because we are changing the value
					dataLabel = dataLabel.slice();
					dataLabel[0] += value;
				} else {
					dataLabel += value;
				}

				return dataLabel;
			}
		}
	}
});

var controller_doughnut = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
	getRingIndex: function(datasetIndex) {
		var ringIndex = 0;

		for (var j = 0; j < datasetIndex; ++j) {
			if (this.chart.isDatasetVisible(j)) {
				++ringIndex;
			}
		}

		return ringIndex;
	},

	update: function(reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var availableWidth = chartArea.right - chartArea.left;
		var availableHeight = chartArea.bottom - chartArea.top;
		var minSize = Math.min(availableWidth, availableHeight);
		var offset = {x: 0, y: 0};
		var meta = me.getMeta();
		var arcs = meta.data;
		var cutoutPercentage = opts.cutoutPercentage;
		var circumference = opts.circumference;
		var chartWeight = me._getRingWeight(me.index);
		var i, ilen;

		// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
		if (circumference < Math.PI * 2.0) {
			var startAngle = opts.rotation % (Math.PI * 2.0);
			startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
			var endAngle = startAngle + circumference;
			var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
			var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
			var contains0 = (startAngle <= 0 && endAngle >= 0) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
			var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
			var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
			var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
			var cutout = cutoutPercentage / 100.0;
			var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
			var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
			var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
			minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
			offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveElementOptions(arcs[i], i);
		}

		chart.borderWidth = me.getMaxBorderWidth();
		chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
		chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
		chart.offsetX = offset.x * chart.outerRadius;
		chart.offsetY = offset.y * chart.outerRadius;

		meta.total = me.calculateTotal();

		me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
		me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			me.updateElement(arcs[i], i, reset);
		}
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var animationOpts = opts.animation;
		var centerX = (chartArea.left + chartArea.right) / 2;
		var centerY = (chartArea.top + chartArea.bottom) / 2;
		var startAngle = opts.rotation; // non reset case handled later
		var endAngle = opts.rotation; // non reset case handled later
		var dataset = me.getDataset();
		var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI));
		var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
		var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX + chart.offsetX,
				y: centerY + chart.offsetY,
				startAngle: startAngle,
				endAngle: endAngle,
				circumference: circumference,
				outerRadius: outerRadius,
				innerRadius: innerRadius,
				label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
			}
		});

		var model = arc._model;

		// Set correct angles if not resetting
		if (!reset || !animationOpts.animateRotate) {
			if (index === 0) {
				model.startAngle = opts.rotation;
			} else {
				model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
			}

			model.endAngle = model.startAngle + model.circumference;
		}

		arc.pivot();
	},

	calculateTotal: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var total = 0;
		var value;

		helpers$1.each(meta.data, function(element, index) {
			value = dataset.data[index];
			if (!isNaN(value) && !element.hidden) {
				total += Math.abs(value);
			}
		});

		/* if (total === 0) {
			total = NaN;
		}*/

		return total;
	},

	calculateCircumference: function(value) {
		var total = this.getMeta().total;
		if (total > 0 && !isNaN(value)) {
			return (Math.PI * 2.0) * (Math.abs(value) / total);
		}
		return 0;
	},

	// gets the max border or hover width to properly scale pie charts
	getMaxBorderWidth: function(arcs) {
		var me = this;
		var max = 0;
		var chart = me.chart;
		var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

		if (!arcs) {
			// Find the outmost visible dataset
			for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
				if (chart.isDatasetVisible(i)) {
					meta = chart.getDatasetMeta(i);
					arcs = meta.data;
					if (i !== me.index) {
						controller = meta.controller;
					}
					break;
				}
			}
		}

		if (!arcs) {
			return 0;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arc = arcs[i];
			options = controller ? controller._resolveElementOptions(arc, i) : arc._options;
			if (options.borderAlign !== 'inner') {
				borderWidth = options.borderWidth;
				hoverWidth = options.hoverBorderWidth;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
		}
		return max;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * @private
	 */
	_resolveElementOptions: function(arc, index) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var custom = arc.custom || {};
		var options = chart.options.elements.arc;
		var values = {};
		var i, ilen, key;

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		var keys = [
			'backgroundColor',
			'borderColor',
			'borderWidth',
			'borderAlign',
			'hoverBackgroundColor',
			'hoverBorderColor',
			'hoverBorderWidth',
		];

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$3([
				custom[key],
				dataset[key],
				options[key]
			], context, index);
		}

		return values;
	},

	/**
	 * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
	 * @private
	 */
	_getRingWeightOffset: function(datasetIndex) {
		var ringWeightOffset = 0;

		for (var i = 0; i < datasetIndex; ++i) {
			if (this.chart.isDatasetVisible(i)) {
				ringWeightOffset += this._getRingWeight(i);
			}
		}

		return ringWeightOffset;
	},

	/**
	 * @private
	 */
	_getRingWeight: function(dataSetIndex) {
		return Math.max(valueOrDefault$4(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
	},

	/**
	 * Returns the sum of all visibile data set weights.  This value can be 0.
	 * @private
	 */
	_getVisibleDatasetWeightTotal: function() {
		return this._getRingWeightOffset(this.chart.data.datasets.length);
	}
});

core_defaults._set('horizontalBar', {
	hover: {
		mode: 'index',
		axis: 'y'
	},

	scales: {
		xAxes: [{
			type: 'linear',
			position: 'bottom'
		}],

		yAxes: [{
			type: 'category',
			position: 'left',
			categoryPercentage: 0.8,
			barPercentage: 0.9,
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}]
	},

	elements: {
		rectangle: {
			borderSkipped: 'left'
		}
	},

	tooltips: {
		mode: 'index',
		axis: 'y'
	}
});

var controller_horizontalBar = controller_bar.extend({
	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().yAxisID;
	}
});

var valueOrDefault$5 = helpers$1.valueOrDefault;
var resolve$4 = helpers$1.options.resolve;
var isPointInArea = helpers$1.canvas._isPointInArea;

core_defaults._set('line', {
	showLines: true,
	spanGaps: false,

	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			id: 'x-axis-0'
		}],
		yAxes: [{
			type: 'linear',
			id: 'y-axis-0'
		}]
	}
});

function lineEnabled(dataset, options) {
	return valueOrDefault$5(dataset.showLine, options.showLines);
}

var controller_line = core_datasetController.extend({

	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var scale = me.getScaleForId(meta.yAxisID);
		var dataset = me.getDataset();
		var showLine = lineEnabled(dataset, me.chart.options);
		var i, ilen;

		// Update Line
		if (showLine) {
			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
				dataset.lineTension = dataset.tension;
			}

			// Utility
			line._scale = scale;
			line._datasetIndex = me.index;
			// Data
			line._children = points;
			// Model
			line._model = me._resolveLineOptions(line);

			line.pivot();
		}

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		if (showLine && line._model.tension !== 0) {
			me.updateBezierControlPoints();
		}

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var datasetIndex = me.index;
		var value = dataset.data[index];
		var yScale = me.getScaleForId(meta.yAxisID);
		var xScale = me.getScaleForId(meta.xAxisID);
		var lineModel = meta.dataset._model;
		var x, y;

		var options = me._resolvePointOptions(point, index);

		x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
		y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

		// Utility
		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = datasetIndex;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x,
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$5(custom.tension, lineModel ? lineModel.tension : 0),
			steppedLine: lineModel ? lineModel.steppedLine : false,
			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolvePointOptions: function(element, index) {
		var me = this;
		var chart = me.chart;
		var dataset = chart.data.datasets[me.index];
		var custom = element.custom || {};
		var options = chart.options.elements.point;
		var values = {};
		var i, ilen, key;

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		var ELEMENT_OPTIONS = {
			backgroundColor: 'pointBackgroundColor',
			borderColor: 'pointBorderColor',
			borderWidth: 'pointBorderWidth',
			hitRadius: 'pointHitRadius',
			hoverBackgroundColor: 'pointHoverBackgroundColor',
			hoverBorderColor: 'pointHoverBorderColor',
			hoverBorderWidth: 'pointHoverBorderWidth',
			hoverRadius: 'pointHoverRadius',
			pointStyle: 'pointStyle',
			radius: 'pointRadius',
			rotation: 'pointRotation'
		};
		var keys = Object.keys(ELEMENT_OPTIONS);

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$4([
				custom[key],
				dataset[ELEMENT_OPTIONS[key]],
				dataset[key],
				options[key]
			], context, index);
		}

		return values;
	},

	/**
	 * @private
	 */
	_resolveLineOptions: function(element) {
		var me = this;
		var chart = me.chart;
		var dataset = chart.data.datasets[me.index];
		var custom = element.custom || {};
		var options = chart.options;
		var elementOptions = options.elements.line;
		var values = {};
		var i, ilen, key;

		var keys = [
			'backgroundColor',
			'borderWidth',
			'borderColor',
			'borderCapStyle',
			'borderDash',
			'borderDashOffset',
			'borderJoinStyle',
			'fill',
			'cubicInterpolationMode'
		];

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$4([
				custom[key],
				dataset[key],
				elementOptions[key]
			]);
		}

		// The default behavior of lines is to break at null values, according
		// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
		// This option gives lines the ability to span gaps
		values.spanGaps = valueOrDefault$5(dataset.spanGaps, options.spanGaps);
		values.tension = valueOrDefault$5(dataset.lineTension, elementOptions.tension);
		values.steppedLine = resolve$4([custom.steppedLine, dataset.steppedLine, elementOptions.stepped]);

		return values;
	},

	calculatePointY: function(value, index, datasetIndex) {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var yScale = me.getScaleForId(meta.yAxisID);
		var sumPos = 0;
		var sumNeg = 0;
		var i, ds, dsMeta;

		if (yScale.options.stacked) {
			for (i = 0; i < datasetIndex; i++) {
				ds = chart.data.datasets[i];
				dsMeta = chart.getDatasetMeta(i);
				if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
					var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
					if (stackedRightValue < 0) {
						sumNeg += stackedRightValue || 0;
					} else {
						sumPos += stackedRightValue || 0;
					}
				}
			}

			var rightValue = Number(yScale.getRightValue(value));
			if (rightValue < 0) {
				return yScale.getPixelForValue(sumNeg + rightValue);
			}
			return yScale.getPixelForValue(sumPos + rightValue);
		}

		return yScale.getPixelForValue(value);
	},

	updateBezierControlPoints: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var lineModel = meta.dataset._model;
		var area = chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		// Only consider points that are drawn in case the spanGaps option is used
		if (lineModel.spanGaps) {
			points = points.filter(function(pt) {
				return !pt._model.skip;
			});
		}

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		if (lineModel.cubicInterpolationMode === 'monotone') {
			helpers$1.splineCurveMonotone(points);
		} else {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				controlPoints = helpers$1.splineCurve(
					helpers$1.previousItem(points, i)._model,
					model,
					helpers$1.nextItem(points, i)._model,
					lineModel.tension
				);
				model.controlPointPreviousX = controlPoints.previous.x;
				model.controlPointPreviousY = controlPoints.previous.y;
				model.controlPointNextX = controlPoints.next.x;
				model.controlPointNextY = controlPoints.next.y;
			}
		}

		if (chart.options.elements.line.capBezierPoints) {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				if (isPointInArea(model, area)) {
					if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
						model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
						model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					}
					if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
						model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
						model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
					}
				}
			}
		}
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var points = meta.data || [];
		var area = chart.chartArea;
		var ilen = points.length;
		var halfBorderWidth;
		var i = 0;

		if (lineEnabled(me.getDataset(), chart.options)) {
			halfBorderWidth = (meta.dataset._model.borderWidth || 0) / 2;

			helpers$1.canvas.clipArea(chart.ctx, {
				left: area.left,
				right: area.right,
				top: area.top - halfBorderWidth,
				bottom: area.bottom + halfBorderWidth
			});

			meta.dataset.draw();

			helpers$1.canvas.unclipArea(chart.ctx);
		}

		// Draw the points
		for (; i < ilen; ++i) {
			points[i].draw(area);
		}
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$5(options.hoverRadius, options.radius);
	},
});

var resolve$5 = helpers$1.options.resolve;

core_defaults._set('polarArea', {
	scale: {
		type: 'radialLinear',
		angleLines: {
			display: false
		},
		gridLines: {
			circular: true
		},
		pointLabels: {
			display: false
		},
		ticks: {
			beginAtZero: true
		}
	},

	// Boolean - Whether to animate the rotation of the chart
	animation: {
		animateRotate: true,
		animateScale: true
	},

	startAngle: -0.5 * Math.PI,
	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');

		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;

		if (datasets.length) {
			for (var i = 0; i < datasets[0].data.length; ++i) {
				text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
				if (labels[i]) {
					text.push(labels[i]);
				}
				text.push('</li>');
			}
		}

		text.push('</ul>');
		return text.join('');
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var ds = data.datasets[0];
						var arc = meta.data[i];
						var custom = arc.custom || {};
						var arcOpts = chart.options.elements.arc;
						var fill = resolve$5([custom.backgroundColor, ds.backgroundColor, arcOpts.backgroundColor], undefined, i);
						var stroke = resolve$5([custom.borderColor, ds.borderColor, arcOpts.borderColor], undefined, i);
						var bw = resolve$5([custom.borderWidth, ds.borderWidth, arcOpts.borderWidth], undefined, i);

						return {
							text: label,
							fillStyle: fill,
							strokeStyle: stroke,
							lineWidth: bw,
							hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				meta.data[index].hidden = !meta.data[index].hidden;
			}

			chart.update();
		}
	},

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(item, data) {
				return data.labels[item.index] + ': ' + item.yLabel;
			}
		}
	}
});

var controller_polarArea = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	update: function(reset) {
		var me = this;
		var dataset = me.getDataset();
		var meta = me.getMeta();
		var start = me.chart.options.startAngle || 0;
		var starts = me._starts = [];
		var angles = me._angles = [];
		var arcs = meta.data;
		var i, ilen, angle;

		me._updateRadius();

		meta.count = me.countVisibleElements();

		for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
			starts[i] = start;
			angle = me._computeAngle(i);
			angles[i] = angle;
			start += angle;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveElementOptions(arcs[i], i);
			me.updateElement(arcs[i], i, reset);
		}
	},

	/**
	 * @private
	 */
	_updateRadius: function() {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);

		chart.outerRadius = Math.max(minSize / 2, 0);
		chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

		me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
		me.innerRadius = me.outerRadius - chart.radiusLength;
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var opts = chart.options;
		var animationOpts = opts.animation;
		var scale = chart.scale;
		var labels = chart.data.labels;

		var centerX = scale.xCenter;
		var centerY = scale.yCenter;

		// var negHalfPI = -0.5 * Math.PI;
		var datasetStartAngle = opts.startAngle;
		var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var startAngle = me._starts[index];
		var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);

		var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,
			_scale: scale,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX,
				y: centerY,
				innerRadius: 0,
				outerRadius: reset ? resetRadius : distance,
				startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
				endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
				label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
			}
		});

		arc.pivot();
	},

	countVisibleElements: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var count = 0;

		helpers$1.each(meta.data, function(element, index) {
			if (!isNaN(dataset.data[index]) && !element.hidden) {
				count++;
			}
		});

		return count;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;
		var valueOrDefault = helpers$1.valueOrDefault;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * @private
	 */
	_resolveElementOptions: function(arc, index) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var custom = arc.custom || {};
		var options = chart.options.elements.arc;
		var values = {};
		var i, ilen, key;

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		var keys = [
			'backgroundColor',
			'borderColor',
			'borderWidth',
			'borderAlign',
			'hoverBackgroundColor',
			'hoverBorderColor',
			'hoverBorderWidth',
		];

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$5([
				custom[key],
				dataset[key],
				options[key]
			], context, index);
		}

		return values;
	},

	/**
	 * @private
	 */
	_computeAngle: function(index) {
		var me = this;
		var count = this.getMeta().count;
		var dataset = me.getDataset();
		var meta = me.getMeta();

		if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
			return 0;
		}

		// Scriptable options
		var context = {
			chart: me.chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		return resolve$5([
			me.chart.options.elements.arc.angle,
			(2 * Math.PI) / count
		], context, index);
	}
});

core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));
core_defaults._set('pie', {
	cutoutPercentage: 0
});

// Pie charts are Doughnut chart with different defaults
var controller_pie = controller_doughnut;

var valueOrDefault$6 = helpers$1.valueOrDefault;
var resolve$6 = helpers$1.options.resolve;

core_defaults._set('radar', {
	scale: {
		type: 'radialLinear'
	},
	elements: {
		line: {
			tension: 0 // no bezier in radar
		}
	}
});

var controller_radar = core_datasetController.extend({

	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	linkScales: helpers$1.noop,

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var scale = me.chart.scale;
		var dataset = me.getDataset();
		var i, ilen;

		// Compatibility: If the properties are defined with only the old name, use those values
		if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
			dataset.lineTension = dataset.tension;
		}

		// Utility
		line._scale = scale;
		line._datasetIndex = me.index;
		// Data
		line._children = points;
		line._loop = true;
		// Model
		line._model = me._resolveLineOptions(line);

		line.pivot();

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		// Update bezier control points
		me.updateBezierControlPoints();

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var scale = me.chart.scale;
		var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
		var options = me._resolvePointOptions(point, index);
		var lineModel = me.getMeta().dataset._model;
		var x = reset ? scale.xCenter : pointPosition.x;
		var y = reset ? scale.yCenter : pointPosition.y;

		// Utility
		point._scale = scale;
		point._options = options;
		point._datasetIndex = me.index;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x, // value not used in dataset scale, but we want a consistent API between scales
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),

			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolvePointOptions: function(element, index) {
		var me = this;
		var chart = me.chart;
		var dataset = chart.data.datasets[me.index];
		var custom = element.custom || {};
		var options = chart.options.elements.point;
		var values = {};
		var i, ilen, key;

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		var ELEMENT_OPTIONS = {
			backgroundColor: 'pointBackgroundColor',
			borderColor: 'pointBorderColor',
			borderWidth: 'pointBorderWidth',
			hitRadius: 'pointHitRadius',
			hoverBackgroundColor: 'pointHoverBackgroundColor',
			hoverBorderColor: 'pointHoverBorderColor',
			hoverBorderWidth: 'pointHoverBorderWidth',
			hoverRadius: 'pointHoverRadius',
			pointStyle: 'pointStyle',
			radius: 'pointRadius',
			rotation: 'pointRotation'
		};
		var keys = Object.keys(ELEMENT_OPTIONS);

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$6([
				custom[key],
				dataset[ELEMENT_OPTIONS[key]],
				dataset[key],
				options[key]
			], context, index);
		}

		return values;
	},

	/**
	 * @private
	 */
	_resolveLineOptions: function(element) {
		var me = this;
		var chart = me.chart;
		var dataset = chart.data.datasets[me.index];
		var custom = element.custom || {};
		var options = chart.options.elements.line;
		var values = {};
		var i, ilen, key;

		var keys = [
			'backgroundColor',
			'borderWidth',
			'borderColor',
			'borderCapStyle',
			'borderDash',
			'borderDashOffset',
			'borderJoinStyle',
			'fill'
		];

		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			values[key] = resolve$6([
				custom[key],
				dataset[key],
				options[key]
			]);
		}

		values.tension = valueOrDefault$6(dataset.lineTension, options.tension);

		return values;
	},

	updateBezierControlPoints: function() {
		var me = this;
		var meta = me.getMeta();
		var area = me.chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		for (i = 0, ilen = points.length; i < ilen; ++i) {
			model = points[i]._model;
			controlPoints = helpers$1.splineCurve(
				helpers$1.previousItem(points, i, true)._model,
				model,
				helpers$1.nextItem(points, i, true)._model,
				model.tension
			);

			// Prevent the bezier going outside of the bounds of the graph
			model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
			model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
			model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
			model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
		}
	},

	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
	}
});

core_defaults._set('scatter', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			id: 'x-axis-1',    // need an ID so datasets can reference the scale
			type: 'linear',    // scatter should not use a category axis
			position: 'bottom'
		}],
		yAxes: [{
			id: 'y-axis-1',
			type: 'linear',
			position: 'left'
		}]
	},

	showLines: false,

	tooltips: {
		callbacks: {
			title: function() {
				return '';     // doesn't make sense for scatter since data are formatted as a point
			},
			label: function(item) {
				return '(' + item.xLabel + ', ' + item.yLabel + ')';
			}
		}
	}
});

// Scatter charts use line controllers
var controller_scatter = controller_line;

// NOTE export a map in which the key represents the controller type, not
// the class, and so must be CamelCase in order to be correctly retrieved
// by the controller in core.controller.js (`controllers[meta.type]`).

var controllers = {
	bar: controller_bar,
	bubble: controller_bubble,
	doughnut: controller_doughnut,
	horizontalBar: controller_horizontalBar,
	line: controller_line,
	polarArea: controller_polarArea,
	pie: controller_pie,
	radar: controller_radar,
	scatter: controller_scatter
};

/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {object} the event position
 */
function getRelativePosition(e, chart) {
	if (e.native) {
		return {
			x: e.x,
			y: e.y
		};
	}

	return helpers$1.getRelativePosition(e, chart);
}

/**
 * Helper function to traverse all of the visible elements in the chart
 * @param {Chart} chart - the chart
 * @param {function} handler - the callback to execute for each visible item
 */
function parseVisibleItems(chart, handler) {
	var datasets = chart.data.datasets;
	var meta, i, j, ilen, jlen;

	for (i = 0, ilen = datasets.length; i < ilen; ++i) {
		if (!chart.isDatasetVisible(i)) {
			continue;
		}

		meta = chart.getDatasetMeta(i);
		for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
			var element = meta.data[j];
			if (!element._view.skip) {
				handler(element);
			}
		}
	}
}

/**
 * Helper function to get the items that intersect the event position
 * @param {ChartElement[]} items - elements to filter
 * @param {object} position - the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function getIntersectItems(chart, position) {
	var elements = [];

	parseVisibleItems(chart, function(element) {
		if (element.inRange(position.x, position.y)) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param {Chart} chart - the chart to look at elements from
 * @param {object} position - the point to be nearest to
 * @param {boolean} intersect - if true, only consider items that intersect the position
 * @param {function} distanceMetric - function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function getNearestItems(chart, position, intersect, distanceMetric) {
	var minDistance = Number.POSITIVE_INFINITY;
	var nearestItems = [];

	parseVisibleItems(chart, function(element) {
		if (intersect && !element.inRange(position.x, position.y)) {
			return;
		}

		var center = element.getCenterPoint();
		var distance = distanceMetric(position, center);
		if (distance < minDistance) {
			nearestItems = [element];
			minDistance = distance;
		} else if (distance === minDistance) {
			// Can have multiple items at the same distance in which case we sort by size
			nearestItems.push(element);
		}
	});

	return nearestItems;
}

/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {string} axis - the axis mode. x|y|xy
 */
function getDistanceMetricForAxis(axis) {
	var useX = axis.indexOf('x') !== -1;
	var useY = axis.indexOf('y') !== -1;

	return function(pt1, pt2) {
		var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
		var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	};
}

function indexMode(chart, e, options) {
	var position = getRelativePosition(e, chart);
	// Default axis for index mode is 'x' to match old behaviour
	options.axis = options.axis || 'x';
	var distanceMetric = getDistanceMetricForAxis(options.axis);
	var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
	var elements = [];

	if (!items.length) {
		return [];
	}

	chart.data.datasets.forEach(function(dataset, datasetIndex) {
		if (chart.isDatasetVisible(datasetIndex)) {
			var meta = chart.getDatasetMeta(datasetIndex);
			var element = meta.data[items[0]._index];

			// don't count items that are skipped (null data)
			if (element && !element._view.skip) {
				elements.push(element);
			}
		}
	});

	return elements;
}

/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */

/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
var core_interaction = {
	// Helper function for different modes
	modes: {
		single: function(chart, e) {
			var position = getRelativePosition(e, chart);
			var elements = [];

			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
					return elements;
				}
			});

			return elements.slice(0, 1);
		},

		/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
		label: indexMode,

		/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		index: indexMode,

		/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		dataset: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

			if (items.length > 0) {
				items = chart.getDatasetMeta(items[0]._datasetIndex).data;
			}

			return items;
		},

		/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
		'x-axis': function(chart, e) {
			return indexMode(chart, e, {intersect: false});
		},

		/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		point: function(chart, e) {
			var position = getRelativePosition(e, chart);
			return getIntersectItems(chart, position);
		},

		/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		nearest: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			return getNearestItems(chart, position, options.intersect, distanceMetric);
		},

		/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		x: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inXRange(position.x)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		},

		/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		y: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inYRange(position.y)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		}
	}
};

function filterByPosition(array, position) {
	return helpers$1.where(array, function(v) {
		return v.position === position;
	});
}

function sortByWeight(array, reverse) {
	array.forEach(function(v, i) {
		v._tmpIndex_ = i;
		return v;
	});
	array.sort(function(a, b) {
		var v0 = reverse ? b : a;
		var v1 = reverse ? a : b;
		return v0.weight === v1.weight ?
			v0._tmpIndex_ - v1._tmpIndex_ :
			v0.weight - v1.weight;
	});
	array.forEach(function(v) {
		delete v._tmpIndex_;
	});
}

function findMaxPadding(boxes) {
	var top = 0;
	var left = 0;
	var bottom = 0;
	var right = 0;
	helpers$1.each(boxes, function(box) {
		if (box.getPadding) {
			var boxPadding = box.getPadding();
			top = Math.max(top, boxPadding.top);
			left = Math.max(left, boxPadding.left);
			bottom = Math.max(bottom, boxPadding.bottom);
			right = Math.max(right, boxPadding.right);
		}
	});
	return {
		top: top,
		left: left,
		bottom: bottom,
		right: right
	};
}

function addSizeByPosition(boxes, size) {
	helpers$1.each(boxes, function(box) {
		size[box.position] += box.isHorizontal() ? box.height : box.width;
	});
}

core_defaults._set('global', {
	layout: {
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
});

/**
 * @interface ILayoutItem
 * @prop {string} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {function} update - Takes two parameters: width and height. Returns size of item
 * @prop {function} getPadding -  Returns an object with padding on the edges
 * @prop {number} width - Width of item. Must be valid after update()
 * @prop {number} height - Height of item. Must be valid after update()
 * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */

// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
var core_layouts = {
	defaults: {},

	/**
	 * Register a box to a chart.
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
	 * @param {Chart} chart - the chart to use
	 * @param {ILayoutItem} item - the item to add to be layed out
	 */
	addBox: function(chart, item) {
		if (!chart.boxes) {
			chart.boxes = [];
		}

		// initialize item with default values
		item.fullWidth = item.fullWidth || false;
		item.position = item.position || 'top';
		item.weight = item.weight || 0;

		chart.boxes.push(item);
	},

	/**
	 * Remove a layoutItem from a chart
	 * @param {Chart} chart - the chart to remove the box from
	 * @param {ILayoutItem} layoutItem - the item to remove from the layout
	 */
	removeBox: function(chart, layoutItem) {
		var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
		if (index !== -1) {
			chart.boxes.splice(index, 1);
		}
	},

	/**
	 * Sets (or updates) options on the given `item`.
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	 * @param {ILayoutItem} item - the item to configure with the given options
	 * @param {object} options - the new item options.
	 */
	configure: function(chart, item, options) {
		var props = ['fullWidth', 'position', 'weight'];
		var ilen = props.length;
		var i = 0;
		var prop;

		for (; i < ilen; ++i) {
			prop = props[i];
			if (options.hasOwnProperty(prop)) {
				item[prop] = options[prop];
			}
		}
	},

	/**
	 * Fits boxes of the given chart into the given size by having each box measure itself
	 * then running a fitting algorithm
	 * @param {Chart} chart - the chart
	 * @param {number} width - the width to fit into
	 * @param {number} height - the height to fit into
	 */
	update: function(chart, width, height) {
		if (!chart) {
			return;
		}

		var layoutOptions = chart.options.layout || {};
		var padding = helpers$1.options.toPadding(layoutOptions.padding);
		var leftPadding = padding.left;
		var rightPadding = padding.right;
		var topPadding = padding.top;
		var bottomPadding = padding.bottom;

		var leftBoxes = filterByPosition(chart.boxes, 'left');
		var rightBoxes = filterByPosition(chart.boxes, 'right');
		var topBoxes = filterByPosition(chart.boxes, 'top');
		var bottomBoxes = filterByPosition(chart.boxes, 'bottom');
		var chartAreaBoxes = filterByPosition(chart.boxes, 'chartArea');

		// Sort boxes by weight. A higher weight is further away from the chart area
		sortByWeight(leftBoxes, true);
		sortByWeight(rightBoxes, false);
		sortByWeight(topBoxes, true);
		sortByWeight(bottomBoxes, false);

		var verticalBoxes = leftBoxes.concat(rightBoxes);
		var horizontalBoxes = topBoxes.concat(bottomBoxes);
		var outerBoxes = verticalBoxes.concat(horizontalBoxes);

		// Essentially we now have any number of boxes on each of the 4 sides.
		// Our canvas looks like the following.
		// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
		// B1 is the bottom axis
		// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
		// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
		// an error will be thrown.
		//
		// |----------------------------------------------------|
		// |                  T1 (Full Width)                   |
		// |----------------------------------------------------|
		// |    |    |                 T2                  |    |
		// |    |----|-------------------------------------|----|
		// |    |    | C1 |                           | C2 |    |
		// |    |    |----|                           |----|    |
		// |    |    |                                     |    |
		// | L1 | L2 |           ChartArea (C0)            | R1 |
		// |    |    |                                     |    |
		// |    |    |----|                           |----|    |
		// |    |    | C3 |                           | C4 |    |
		// |    |----|-------------------------------------|----|
		// |    |    |                 B1                  |    |
		// |----------------------------------------------------|
		// |                  B2 (Full Width)                   |
		// |----------------------------------------------------|
		//
		// What we do to find the best sizing, we do the following
		// 1. Determine the minimum size of the chart area.
		// 2. Split the remaining width equally between each vertical axis
		// 3. Split the remaining height equally between each horizontal axis
		// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
		// 5. Adjust the sizes of each axis based on it's minimum reported size.
		// 6. Refit each axis
		// 7. Position each axis in the final location
		// 8. Tell the chart the final location of the chart area
		// 9. Tell any axes that overlay the chart area the positions of the chart area

		// Step 1
		var chartWidth = width - leftPadding - rightPadding;
		var chartHeight = height - topPadding - bottomPadding;
		var chartAreaWidth = chartWidth / 2; // min 50%

		// Step 2
		var verticalBoxWidth = (width - chartAreaWidth) / verticalBoxes.length;

		// Step 3
		// TODO re-limit horizontal axis height (this limit has affected only padding calculation since PR 1837)
		// var horizontalBoxHeight = (height - chartAreaHeight) / horizontalBoxes.length;

		// Step 4
		var maxChartAreaWidth = chartWidth;
		var maxChartAreaHeight = chartHeight;
		var outerBoxSizes = {top: topPadding, left: leftPadding, bottom: bottomPadding, right: rightPadding};
		var minBoxSizes = [];
		var maxPadding;

		function getMinimumBoxSize(box) {
			var minSize;
			var isHorizontal = box.isHorizontal();

			if (isHorizontal) {
				minSize = box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2);
				maxChartAreaHeight -= minSize.height;
			} else {
				minSize = box.update(verticalBoxWidth, maxChartAreaHeight);
				maxChartAreaWidth -= minSize.width;
			}

			minBoxSizes.push({
				horizontal: isHorizontal,
				width: minSize.width,
				box: box,
			});
		}

		helpers$1.each(outerBoxes, getMinimumBoxSize);

		// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
		maxPadding = findMaxPadding(outerBoxes);

		// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
		// be if the axes are drawn at their minimum sizes.
		// Steps 5 & 6

		// Function to fit a box
		function fitBox(box) {
			var minBoxSize = helpers$1.findNextWhere(minBoxSizes, function(minBox) {
				return minBox.box === box;
			});

			if (minBoxSize) {
				if (minBoxSize.horizontal) {
					var scaleMargin = {
						left: Math.max(outerBoxSizes.left, maxPadding.left),
						right: Math.max(outerBoxSizes.right, maxPadding.right),
						top: 0,
						bottom: 0
					};

					// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
					// on the margin. Sometimes they need to increase in size slightly
					box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
				} else {
					box.update(minBoxSize.width, maxChartAreaHeight);
				}
			}
		}

		// Update, and calculate the left and right margins for the horizontal boxes
		helpers$1.each(verticalBoxes, fitBox);
		addSizeByPosition(verticalBoxes, outerBoxSizes);

		// Set the Left and Right margins for the horizontal boxes
		helpers$1.each(horizontalBoxes, fitBox);
		addSizeByPosition(horizontalBoxes, outerBoxSizes);

		function finalFitVerticalBox(box) {
			var minBoxSize = helpers$1.findNextWhere(minBoxSizes, function(minSize) {
				return minSize.box === box;
			});

			var scaleMargin = {
				left: 0,
				right: 0,
				top: outerBoxSizes.top,
				bottom: outerBoxSizes.bottom
			};

			if (minBoxSize) {
				box.update(minBoxSize.width, maxChartAreaHeight, scaleMargin);
			}
		}

		// Let the left layout know the final margin
		helpers$1.each(verticalBoxes, finalFitVerticalBox);

		// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
		outerBoxSizes = {top: topPadding, left: leftPadding, bottom: bottomPadding, right: rightPadding};
		addSizeByPosition(outerBoxes, outerBoxSizes);

		// We may be adding some padding to account for rotated x axis labels
		var leftPaddingAddition = Math.max(maxPadding.left - outerBoxSizes.left, 0);
		outerBoxSizes.left += leftPaddingAddition;
		outerBoxSizes.right += Math.max(maxPadding.right - outerBoxSizes.right, 0);

		var topPaddingAddition = Math.max(maxPadding.top - outerBoxSizes.top, 0);
		outerBoxSizes.top += topPaddingAddition;
		outerBoxSizes.bottom += Math.max(maxPadding.bottom - outerBoxSizes.bottom, 0);

		// Figure out if our chart area changed. This would occur if the dataset layout label rotation
		// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
		// without calling `fit` again
		var newMaxChartAreaHeight = height - outerBoxSizes.top - outerBoxSizes.bottom;
		var newMaxChartAreaWidth = width - outerBoxSizes.left - outerBoxSizes.right;

		if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
			helpers$1.each(verticalBoxes, function(box) {
				box.height = newMaxChartAreaHeight;
			});

			helpers$1.each(horizontalBoxes, function(box) {
				if (!box.fullWidth) {
					box.width = newMaxChartAreaWidth;
				}
			});

			maxChartAreaHeight = newMaxChartAreaHeight;
			maxChartAreaWidth = newMaxChartAreaWidth;
		}

		// Step 7 - Position the boxes
		var left = leftPadding + leftPaddingAddition;
		var top = topPadding + topPaddingAddition;

		function placeBox(box) {
			if (box.isHorizontal()) {
				box.left = box.fullWidth ? leftPadding : outerBoxSizes.left;
				box.right = box.fullWidth ? width - rightPadding : outerBoxSizes.left + maxChartAreaWidth;
				box.top = top;
				box.bottom = top + box.height;

				// Move to next point
				top = box.bottom;

			} else {

				box.left = left;
				box.right = left + box.width;
				box.top = outerBoxSizes.top;
				box.bottom = outerBoxSizes.top + maxChartAreaHeight;

				// Move to next point
				left = box.right;
			}
		}

		helpers$1.each(leftBoxes.concat(topBoxes), placeBox);

		// Account for chart width and height
		left += maxChartAreaWidth;
		top += maxChartAreaHeight;

		helpers$1.each(rightBoxes, placeBox);
		helpers$1.each(bottomBoxes, placeBox);

		// Step 8
		chart.chartArea = {
			left: outerBoxSizes.left,
			top: outerBoxSizes.top,
			right: outerBoxSizes.left + maxChartAreaWidth,
			bottom: outerBoxSizes.top + maxChartAreaHeight
		};

		// Step 9
		helpers$1.each(chartAreaBoxes, function(box) {
			box.left = chart.chartArea.left;
			box.top = chart.chartArea.top;
			box.right = chart.chartArea.right;
			box.bottom = chart.chartArea.bottom;

			box.update(maxChartAreaWidth, maxChartAreaHeight);
		});
	}
};

/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */

var platform_basic = {
	acquireContext: function(item) {
		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		return item && item.getContext('2d') || null;
	}
};

var platform_dom = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n";

var platform_dom$1 = /*#__PURE__*/Object.freeze({
default: platform_dom
});

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var stylesheet = getCjsExportFromNamespace(platform_dom$1);

var EXPANDO_KEY = '$chartjs';
var CSS_PREFIX = 'chartjs-';
var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];

/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
var EVENT_TYPES = {
	touchstart: 'mousedown',
	touchmove: 'mousemove',
	touchend: 'mouseup',
	pointerenter: 'mouseenter',
	pointerdown: 'mousedown',
	pointermove: 'mousemove',
	pointerup: 'mouseup',
	pointerleave: 'mouseout',
	pointerout: 'mouseout'
};

/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {number} Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
	var value = helpers$1.getStyle(element, property);
	var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? Number(matches[1]) : undefined;
}

/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function initCanvas(canvas, config) {
	var style = canvas.style;

	// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
	// returns null or '' if no explicit value has been set to the canvas attribute.
	var renderHeight = canvas.getAttribute('height');
	var renderWidth = canvas.getAttribute('width');

	// Chart.js modifies some canvas values that we want to restore on destroy
	canvas[EXPANDO_KEY] = {
		initial: {
			height: renderHeight,
			width: renderWidth,
			style: {
				display: style.display,
				height: style.height,
				width: style.width
			}
		}
	};

	// Force canvas to display as block to avoid extra space caused by inline
	// elements, which would interfere with the responsive resize process.
	// https://github.com/chartjs/Chart.js/issues/2538
	style.display = style.display || 'block';

	if (renderWidth === null || renderWidth === '') {
		var displayWidth = readUsedSize(canvas, 'width');
		if (displayWidth !== undefined) {
			canvas.width = displayWidth;
		}
	}

	if (renderHeight === null || renderHeight === '') {
		if (canvas.style.height === '') {
			// If no explicit render height and style height, let's apply the aspect ratio,
			// which one can be specified by the user but also by charts as default option
			// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
			canvas.height = canvas.width / (config.options.aspectRatio || 2);
		} else {
			var displayHeight = readUsedSize(canvas, 'height');
			if (displayWidth !== undefined) {
				canvas.height = displayHeight;
			}
		}
	}

	return canvas;
}

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = (function() {
	var supports = false;
	try {
		var options = Object.defineProperty({}, 'passive', {
			// eslint-disable-next-line getter-return
			get: function() {
				supports = true;
			}
		});
		window.addEventListener('e', null, options);
	} catch (e) {
		// continue regardless of error
	}
	return supports;
}());

// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;

function addListener(node, type, listener) {
	node.addEventListener(type, listener, eventListenerOptions);
}

function removeListener(node, type, listener) {
	node.removeEventListener(type, listener, eventListenerOptions);
}

function createEvent(type, chart, x, y, nativeEvent) {
	return {
		type: type,
		chart: chart,
		native: nativeEvent || null,
		x: x !== undefined ? x : null,
		y: y !== undefined ? y : null,
	};
}

function fromNativeEvent(event, chart) {
	var type = EVENT_TYPES[event.type] || event.type;
	var pos = helpers$1.getRelativePosition(event, chart);
	return createEvent(type, chart, pos.x, pos.y, event);
}

function throttled(fn, thisArg) {
	var ticking = false;
	var args = [];

	return function() {
		args = Array.prototype.slice.call(arguments);
		thisArg = thisArg || this;

		if (!ticking) {
			ticking = true;
			helpers$1.requestAnimFrame.call(window, function() {
				ticking = false;
				fn.apply(thisArg, args);
			});
		}
	};
}

function createDiv(cls) {
	var el = document.createElement('div');
	el.className = cls || '';
	return el;
}

// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler) {
	var maxSize = 1000000;

	// NOTE(SB) Don't use innerHTML because it could be considered unsafe.
	// https://github.com/chartjs/Chart.js/issues/5902
	var resizer = createDiv(CSS_SIZE_MONITOR);
	var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
	var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');

	expand.appendChild(createDiv());
	shrink.appendChild(createDiv());

	resizer.appendChild(expand);
	resizer.appendChild(shrink);
	resizer._reset = function() {
		expand.scrollLeft = maxSize;
		expand.scrollTop = maxSize;
		shrink.scrollLeft = maxSize;
		shrink.scrollTop = maxSize;
	};

	var onScroll = function() {
		resizer._reset();
		handler();
	};

	addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
	addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));

	return resizer;
}

// https://davidwalsh.name/detect-node-insertion
function watchForRender(node, handler) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	var proxy = expando.renderProxy = function(e) {
		if (e.animationName === CSS_RENDER_ANIMATION) {
			handler();
		}
	};

	helpers$1.each(ANIMATION_START_EVENTS, function(type) {
		addListener(node, type, proxy);
	});

	// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
	// is removed then added back immediately (same animation frame?). Accessing the
	// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
	// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
	// https://github.com/chartjs/Chart.js/issues/4737
	expando.reflow = !!node.offsetParent;

	node.classList.add(CSS_RENDER_MONITOR);
}

function unwatchForRender(node) {
	var expando = node[EXPANDO_KEY] || {};
	var proxy = expando.renderProxy;

	if (proxy) {
		helpers$1.each(ANIMATION_START_EVENTS, function(type) {
			removeListener(node, type, proxy);
		});

		delete expando.renderProxy;
	}

	node.classList.remove(CSS_RENDER_MONITOR);
}

function addResizeListener(node, listener, chart) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

	// Let's keep track of this added resizer and thus avoid DOM query when removing it.
	var resizer = expando.resizer = createResizer(throttled(function() {
		if (expando.resizer) {
			var container = chart.options.maintainAspectRatio && node.parentNode;
			var w = container ? container.clientWidth : 0;
			listener(createEvent('resize', chart));
			if (container && container.clientWidth < w && chart.canvas) {
				// If the container size shrank during chart resize, let's assume
				// scrollbar appeared. So we resize again with the scrollbar visible -
				// effectively making chart smaller and the scrollbar hidden again.
				// Because we are inside `throttled`, and currently `ticking`, scroll
				// events are ignored during this whole 2 resize process.
				// If we assumed wrong and something else happened, we are resizing
				// twice in a frame (potential performance issue)
				listener(createEvent('resize', chart));
			}
		}
	}));

	// The resizer needs to be attached to the node parent, so we first need to be
	// sure that `node` is attached to the DOM before injecting the resizer element.
	watchForRender(node, function() {
		if (expando.resizer) {
			var container = node.parentNode;
			if (container && container !== resizer.parentNode) {
				container.insertBefore(resizer, container.firstChild);
			}

			// The container size might have changed, let's reset the resizer state.
			resizer._reset();
		}
	});
}

function removeResizeListener(node) {
	var expando = node[EXPANDO_KEY] || {};
	var resizer = expando.resizer;

	delete expando.resizer;
	unwatchForRender(node);

	if (resizer && resizer.parentNode) {
		resizer.parentNode.removeChild(resizer);
	}
}

function injectCSS(platform, css) {
	// https://stackoverflow.com/q/3922139
	var style = platform._style || document.createElement('style');
	if (!platform._style) {
		platform._style = style;
		css = '/* Chart.js */\n' + css;
		style.setAttribute('type', 'text/css');
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	style.appendChild(document.createTextNode(css));
}

var platform_dom$2 = {
	/**
	 * When `true`, prevents the automatic injection of the stylesheet required to
	 * correctly detect when the chart is added to the DOM and then resized. This
	 * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
	 * to be manually imported to make this library compatible with any CSP.
	 * See https://github.com/chartjs/Chart.js/issues/5208
	 */
	disableCSSInjection: false,

	/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
	_enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

	/**
	 * @private
	 */
	_ensureLoaded: function() {
		if (this._loaded) {
			return;
		}

		this._loaded = true;

		// https://github.com/chartjs/Chart.js/issues/5208
		if (!this.disableCSSInjection) {
			injectCSS(this, stylesheet);
		}
	},

	acquireContext: function(item, config) {
		if (typeof item === 'string') {
			item = document.getElementById(item);
		} else if (item.length) {
			// Support for array based queries (such as jQuery)
			item = item[0];
		}

		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		// To prevent canvas fingerprinting, some add-ons undefine the getContext
		// method, for example: https://github.com/kkapsner/CanvasBlocker
		// https://github.com/chartjs/Chart.js/issues/2807
		var context = item && item.getContext && item.getContext('2d');

		// Load platform resources on first chart creation, to make possible to change
		// platform options after importing the library (e.g. `disableCSSInjection`).
		this._ensureLoaded();

		// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
		// inside an iframe or when running in a protected environment. We could guess the
		// types from their toString() value but let's keep things flexible and assume it's
		// a sufficient condition if the item has a context2D which has item as `canvas`.
		// https://github.com/chartjs/Chart.js/issues/3887
		// https://github.com/chartjs/Chart.js/issues/4102
		// https://github.com/chartjs/Chart.js/issues/4152
		if (context && context.canvas === item) {
			initCanvas(item, config);
			return context;
		}

		return null;
	},

	releaseContext: function(context) {
		var canvas = context.canvas;
		if (!canvas[EXPANDO_KEY]) {
			return;
		}

		var initial = canvas[EXPANDO_KEY].initial;
		['height', 'width'].forEach(function(prop) {
			var value = initial[prop];
			if (helpers$1.isNullOrUndef(value)) {
				canvas.removeAttribute(prop);
			} else {
				canvas.setAttribute(prop, value);
			}
		});

		helpers$1.each(initial.style || {}, function(value, key) {
			canvas.style[key] = value;
		});

		// The canvas render size might have been changed (and thus the state stack discarded),
		// we can't use save() and restore() to restore the initial state. So make sure that at
		// least the canvas context is reset to the default state by setting the canvas width.
		// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
		// eslint-disable-next-line no-self-assign
		canvas.width = canvas.width;

		delete canvas[EXPANDO_KEY];
	},

	addEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			addResizeListener(canvas, listener, chart);
			return;
		}

		var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
		var proxies = expando.proxies || (expando.proxies = {});
		var proxy = proxies[chart.id + '_' + type] = function(event) {
			listener(fromNativeEvent(event, chart));
		};

		addListener(canvas, type, proxy);
	},

	removeEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			removeResizeListener(canvas);
			return;
		}

		var expando = listener[EXPANDO_KEY] || {};
		var proxies = expando.proxies || {};
		var proxy = proxies[chart.id + '_' + type];
		if (!proxy) {
			return;
		}

		removeListener(canvas, type, proxy);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.addEvent = addListener;

/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.removeEvent = removeListener;

// @TODO Make possible to select another platform at build time.
var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;

/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
var platform = helpers$1.extend({
	/**
	 * @since 2.7.0
	 */
	initialize: function() {},

	/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
	acquireContext: function() {},

	/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {boolean} true if the method succeeded, else false
	 */
	releaseContext: function() {},

	/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {string} type - The ({@link IEvent}) type to listen for
	 * @param {function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
	addEventListener: function() {},

	/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart - Chart from which to remove the listener
	 * @param {string} type - The ({@link IEvent}) type to remove
	 * @param {function} listener - The listener function to remove from the event target.
	 */
	removeEventListener: function() {}

}, implementation);

core_defaults._set('global', {
	plugins: {}
});

/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */
var core_plugins = {
	/**
	 * Globally registered plugins.
	 * @private
	 */
	_plugins: [],

	/**
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
	 * incremented and descriptors are regenerated during following API calls.
	 * @private
	 */
	_cacheId: 0,

	/**
	 * Registers the given plugin(s) if not already registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	register: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			if (p.indexOf(plugin) === -1) {
				p.push(plugin);
			}
		});

		this._cacheId++;
	},

	/**
	 * Unregisters the given plugin(s) only if registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	unregister: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			var idx = p.indexOf(plugin);
			if (idx !== -1) {
				p.splice(idx, 1);
			}
		});

		this._cacheId++;
	},

	/**
	 * Remove all registered plugins.
	 * @since 2.1.5
	 */
	clear: function() {
		this._plugins = [];
		this._cacheId++;
	},

	/**
	 * Returns the number of registered plugins?
	 * @returns {number}
	 * @since 2.1.5
	 */
	count: function() {
		return this._plugins.length;
	},

	/**
	 * Returns all registered plugin instances.
	 * @returns {IPlugin[]} array of plugin objects.
	 * @since 2.1.5
	 */
	getAll: function() {
		return this._plugins;
	},

	/**
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	 * This method immediately returns as soon as a plugin explicitly returns false. The
	 * returned value can be used, for instance, to interrupt the current action.
	 * @param {Chart} chart - The chart instance for which plugins should be called.
	 * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
	 * @param {Array} [args] - Extra arguments to apply to the hook call.
	 * @returns {boolean} false if any of the plugins return false, else returns true.
	 */
	notify: function(chart, hook, args) {
		var descriptors = this.descriptors(chart);
		var ilen = descriptors.length;
		var i, descriptor, plugin, params, method;

		for (i = 0; i < ilen; ++i) {
			descriptor = descriptors[i];
			plugin = descriptor.plugin;
			method = plugin[hook];
			if (typeof method === 'function') {
				params = [chart].concat(args || []);
				params.push(descriptor.options);
				if (method.apply(plugin, params) === false) {
					return false;
				}
			}
		}

		return true;
	},

	/**
	 * Returns descriptors of enabled plugins for the given chart.
	 * @returns {object[]} [{ plugin, options }]
	 * @private
	 */
	descriptors: function(chart) {
		var cache = chart.$plugins || (chart.$plugins = {});
		if (cache.id === this._cacheId) {
			return cache.descriptors;
		}

		var plugins = [];
		var descriptors = [];
		var config = (chart && chart.config) || {};
		var options = (config.options && config.options.plugins) || {};

		this._plugins.concat(config.plugins || []).forEach(function(plugin) {
			var idx = plugins.indexOf(plugin);
			if (idx !== -1) {
				return;
			}

			var id = plugin.id;
			var opts = options[id];
			if (opts === false) {
				return;
			}

			if (opts === true) {
				opts = helpers$1.clone(core_defaults.global.plugins[id]);
			}

			plugins.push(plugin);
			descriptors.push({
				plugin: plugin,
				options: opts || {}
			});
		});

		cache.descriptors = descriptors;
		cache.id = this._cacheId;
		return descriptors;
	},

	/**
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
	 * but in some cases, this reference can be changed by the user when updating options.
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	 * @private
	 */
	_invalidate: function(chart) {
		delete chart.$plugins;
	}
};

var core_scaleService = {
	// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
	// use the new chart options to grab the correct scale
	constructors: {},
	// Use a registration function so that we can move to an ES6 map when we no longer need to support
	// old browsers

	// Scale config defaults
	defaults: {},
	registerScaleType: function(type, scaleConstructor, scaleDefaults) {
		this.constructors[type] = scaleConstructor;
		this.defaults[type] = helpers$1.clone(scaleDefaults);
	},
	getScaleConstructor: function(type) {
		return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
	},
	getScaleDefaults: function(type) {
		// Return the scale defaults merged with the global settings so that we always use the latest ones
		return this.defaults.hasOwnProperty(type) ? helpers$1.merge({}, [core_defaults.scale, this.defaults[type]]) : {};
	},
	updateScaleDefaults: function(type, additions) {
		var me = this;
		if (me.defaults.hasOwnProperty(type)) {
			me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
		}
	},
	addScalesToLayout: function(chart) {
		// Adds each scale to the chart.boxes array to be sized accordingly
		helpers$1.each(chart.scales, function(scale) {
			// Set ILayoutItem parameters for backwards compatibility
			scale.fullWidth = scale.options.fullWidth;
			scale.position = scale.options.position;
			scale.weight = scale.options.weight;
			core_layouts.addBox(chart, scale);
		});
	}
};

var valueOrDefault$7 = helpers$1.valueOrDefault;

core_defaults._set('global', {
	tooltips: {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		borderColor: 'rgba(0,0,0,0)',
		borderWidth: 0,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers$1.noop,
			title: function(tooltipItems, data) {
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];
					if (item.label) {
						title = item.label;
					} else if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers$1.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers$1.noop,
			label: function(tooltipItem, data) {
				var label = data.datasets[tooltipItem.datasetIndex].label || '';

				if (label) {
					label += ': ';
				}
				if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
					label += tooltipItem.value;
				} else {
					label += tooltipItem.yLabel;
				}
				return label;
			},
			labelColor: function(tooltipItem, chart) {
				var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			labelTextColor: function() {
				return this._options.bodyFontColor;
			},
			afterLabel: helpers$1.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers$1.noop,
			footer: helpers$1.noop,
			afterFooter: helpers$1.noop
		}
	}
});

var positioners = {
	/**
	 * Average mode places the tooltip at the average position of the elements shown
	 * @function Chart.Tooltip.positioners.average
	 * @param elements {ChartElement[]} the elements being displayed in the tooltip
	 * @returns {object} tooltip position
	 */
	average: function(elements) {
		if (!elements.length) {
			return false;
		}

		var i, len;
		var x = 0;
		var y = 0;
		var count = 0;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var pos = el.tooltipPosition();
				x += pos.x;
				y += pos.y;
				++count;
			}
		}

		return {
			x: x / count,
			y: y / count
		};
	},

	/**
	 * Gets the tooltip position nearest of the item nearest to the event position
	 * @function Chart.Tooltip.positioners.nearest
	 * @param elements {Chart.Element[]} the tooltip elements
	 * @param eventPosition {object} the position of the event in canvas coordinates
	 * @returns {object} the tooltip position
	 */
	nearest: function(elements, eventPosition) {
		var x = eventPosition.x;
		var y = eventPosition.y;
		var minDistance = Number.POSITIVE_INFINITY;
		var i, len, nearestElement;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var center = el.getCenterPoint();
				var d = helpers$1.distanceBetweenPoints(eventPosition, center);

				if (d < minDistance) {
					minDistance = d;
					nearestElement = el;
				}
			}
		}

		if (nearestElement) {
			var tp = nearestElement.tooltipPosition();
			x = tp.x;
			y = tp.y;
		}

		return {
			x: x,
			y: y
		};
	}
};

// Helper to push or concat based on if the 2nd parameter is an array or not
function pushOrConcat(base, toPush) {
	if (toPush) {
		if (helpers$1.isArray(toPush)) {
			// base = base.concat(toPush);
			Array.prototype.push.apply(base, toPush);
		} else {
			base.push(toPush);
		}
	}

	return base;
}

/**
 * Returns array of strings split by newline
 * @param {string} value - The value to split by newline.
 * @returns {string[]} value if newline present - Returned from String split() method
 * @function
 */
function splitNewlines(str) {
	if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
		return str.split('\n');
	}
	return str;
}


/**
 * Private helper to create a tooltip item model
 * @param element - the chart element (point, arc, bar) to create the tooltip item for
 * @return new tooltip item
 */
function createTooltipItem(element) {
	var xScale = element._xScale;
	var yScale = element._yScale || element._scale; // handle radar || polarArea charts
	var index = element._index;
	var datasetIndex = element._datasetIndex;
	var controller = element._chart.getDatasetMeta(datasetIndex).controller;
	var indexScale = controller._getIndexScale();
	var valueScale = controller._getValueScale();

	return {
		xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
		yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
		label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
		value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
		index: index,
		datasetIndex: datasetIndex,
		x: element._model.x,
		y: element._model.y
	};
}

/**
 * Helper to get the reset model for the tooltip
 * @param tooltipOpts {object} the tooltip options
 */
function getBaseModel(tooltipOpts) {
	var globalDefaults = core_defaults.global;

	return {
		// Positioning
		xPadding: tooltipOpts.xPadding,
		yPadding: tooltipOpts.yPadding,
		xAlign: tooltipOpts.xAlign,
		yAlign: tooltipOpts.yAlign,

		// Body
		bodyFontColor: tooltipOpts.bodyFontColor,
		_bodyFontFamily: valueOrDefault$7(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
		_bodyFontStyle: valueOrDefault$7(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
		_bodyAlign: tooltipOpts.bodyAlign,
		bodyFontSize: valueOrDefault$7(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
		bodySpacing: tooltipOpts.bodySpacing,

		// Title
		titleFontColor: tooltipOpts.titleFontColor,
		_titleFontFamily: valueOrDefault$7(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
		_titleFontStyle: valueOrDefault$7(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
		titleFontSize: valueOrDefault$7(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
		_titleAlign: tooltipOpts.titleAlign,
		titleSpacing: tooltipOpts.titleSpacing,
		titleMarginBottom: tooltipOpts.titleMarginBottom,

		// Footer
		footerFontColor: tooltipOpts.footerFontColor,
		_footerFontFamily: valueOrDefault$7(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
		_footerFontStyle: valueOrDefault$7(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
		footerFontSize: valueOrDefault$7(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
		_footerAlign: tooltipOpts.footerAlign,
		footerSpacing: tooltipOpts.footerSpacing,
		footerMarginTop: tooltipOpts.footerMarginTop,

		// Appearance
		caretSize: tooltipOpts.caretSize,
		cornerRadius: tooltipOpts.cornerRadius,
		backgroundColor: tooltipOpts.backgroundColor,
		opacity: 0,
		legendColorBackground: tooltipOpts.multiKeyBackground,
		displayColors: tooltipOpts.displayColors,
		borderColor: tooltipOpts.borderColor,
		borderWidth: tooltipOpts.borderWidth
	};
}

/**
 * Get the size of the tooltip
 */
function getTooltipSize(tooltip, model) {
	var ctx = tooltip._chart.ctx;

	var height = model.yPadding * 2; // Tooltip Padding
	var width = 0;

	// Count of all lines in the body
	var body = model.body;
	var combinedBodyLength = body.reduce(function(count, bodyItem) {
		return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
	}, 0);
	combinedBodyLength += model.beforeBody.length + model.afterBody.length;

	var titleLineCount = model.title.length;
	var footerLineCount = model.footer.length;
	var titleFontSize = model.titleFontSize;
	var bodyFontSize = model.bodyFontSize;
	var footerFontSize = model.footerFontSize;

	height += titleLineCount * titleFontSize; // Title Lines
	height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
	height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
	height += combinedBodyLength * bodyFontSize; // Body Lines
	height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
	height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
	height += footerLineCount * (footerFontSize); // Footer Lines
	height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

	// Title width
	var widthPadding = 0;
	var maxLineWidth = function(line) {
		width = Math.max(width, ctx.measureText(line).width + widthPadding);
	};

	ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
	helpers$1.each(model.title, maxLineWidth);

	// Body width
	ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
	helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

	// Body lines may include some extra width due to the color box
	widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
	helpers$1.each(body, function(bodyItem) {
		helpers$1.each(bodyItem.before, maxLineWidth);
		helpers$1.each(bodyItem.lines, maxLineWidth);
		helpers$1.each(bodyItem.after, maxLineWidth);
	});

	// Reset back to 0
	widthPadding = 0;

	// Footer width
	ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
	helpers$1.each(model.footer, maxLineWidth);

	// Add padding
	width += 2 * model.xPadding;

	return {
		width: width,
		height: height
	};
}

/**
 * Helper to get the alignment of a tooltip given the size
 */
function determineAlignment(tooltip, size) {
	var model = tooltip._model;
	var chart = tooltip._chart;
	var chartArea = tooltip._chart.chartArea;
	var xAlign = 'center';
	var yAlign = 'center';

	if (model.y < size.height) {
		yAlign = 'top';
	} else if (model.y > (chart.height - size.height)) {
		yAlign = 'bottom';
	}

	var lf, rf; // functions to determine left, right alignment
	var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
	var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
	var midX = (chartArea.left + chartArea.right) / 2;
	var midY = (chartArea.top + chartArea.bottom) / 2;

	if (yAlign === 'center') {
		lf = function(x) {
			return x <= midX;
		};
		rf = function(x) {
			return x > midX;
		};
	} else {
		lf = function(x) {
			return x <= (size.width / 2);
		};
		rf = function(x) {
			return x >= (chart.width - (size.width / 2));
		};
	}

	olf = function(x) {
		return x + size.width + model.caretSize + model.caretPadding > chart.width;
	};
	orf = function(x) {
		return x - size.width - model.caretSize - model.caretPadding < 0;
	};
	yf = function(y) {
		return y <= midY ? 'top' : 'bottom';
	};

	if (lf(model.x)) {
		xAlign = 'left';

		// Is tooltip too wide and goes over the right side of the chart.?
		if (olf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	} else if (rf(model.x)) {
		xAlign = 'right';

		// Is tooltip too wide and goes outside left edge of canvas?
		if (orf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	}

	var opts = tooltip._options;
	return {
		xAlign: opts.xAlign ? opts.xAlign : xAlign,
		yAlign: opts.yAlign ? opts.yAlign : yAlign
	};
}

/**
 * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
 */
function getBackgroundPoint(vm, size, alignment, chart) {
	// Background Position
	var x = vm.x;
	var y = vm.y;

	var caretSize = vm.caretSize;
	var caretPadding = vm.caretPadding;
	var cornerRadius = vm.cornerRadius;
	var xAlign = alignment.xAlign;
	var yAlign = alignment.yAlign;
	var paddingAndSize = caretSize + caretPadding;
	var radiusAndPadding = cornerRadius + caretPadding;

	if (xAlign === 'right') {
		x -= size.width;
	} else if (xAlign === 'center') {
		x -= (size.width / 2);
		if (x + size.width > chart.width) {
			x = chart.width - size.width;
		}
		if (x < 0) {
			x = 0;
		}
	}

	if (yAlign === 'top') {
		y += paddingAndSize;
	} else if (yAlign === 'bottom') {
		y -= size.height + paddingAndSize;
	} else {
		y -= (size.height / 2);
	}

	if (yAlign === 'center') {
		if (xAlign === 'left') {
			x += paddingAndSize;
		} else if (xAlign === 'right') {
			x -= paddingAndSize;
		}
	} else if (xAlign === 'left') {
		x -= radiusAndPadding;
	} else if (xAlign === 'right') {
		x += radiusAndPadding;
	}

	return {
		x: x,
		y: y
	};
}

function getAlignedX(vm, align) {
	return align === 'center'
		? vm.x + vm.width / 2
		: align === 'right'
			? vm.x + vm.width - vm.xPadding
			: vm.x + vm.xPadding;
}

/**
 * Helper to build before and after body lines
 */
function getBeforeAfterBodyLines(callback) {
	return pushOrConcat([], splitNewlines(callback));
}

var exports$3 = core_element.extend({
	initialize: function() {
		this._model = getBaseModel(this._options);
		this._lastActive = [];
	},

	// Get the title
	// Args are: (tooltipItem, data)
	getTitle: function() {
		var me = this;
		var opts = me._options;
		var callbacks = opts.callbacks;

		var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
		var title = callbacks.title.apply(me, arguments);
		var afterTitle = callbacks.afterTitle.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeTitle));
		lines = pushOrConcat(lines, splitNewlines(title));
		lines = pushOrConcat(lines, splitNewlines(afterTitle));

		return lines;
	},

	// Args are: (tooltipItem, data)
	getBeforeBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
	},

	// Args are: (tooltipItem, data)
	getBody: function(tooltipItems, data) {
		var me = this;
		var callbacks = me._options.callbacks;
		var bodyItems = [];

		helpers$1.each(tooltipItems, function(tooltipItem) {
			var bodyItem = {
				before: [],
				lines: [],
				after: []
			};
			pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
			pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
			pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));

			bodyItems.push(bodyItem);
		});

		return bodyItems;
	},

	// Args are: (tooltipItem, data)
	getAfterBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
	},

	// Get the footer and beforeFooter and afterFooter lines
	// Args are: (tooltipItem, data)
	getFooter: function() {
		var me = this;
		var callbacks = me._options.callbacks;

		var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
		var footer = callbacks.footer.apply(me, arguments);
		var afterFooter = callbacks.afterFooter.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeFooter));
		lines = pushOrConcat(lines, splitNewlines(footer));
		lines = pushOrConcat(lines, splitNewlines(afterFooter));

		return lines;
	},

	update: function(changed) {
		var me = this;
		var opts = me._options;

		// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
		// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
		// which breaks any animations.
		var existingModel = me._model;
		var model = me._model = getBaseModel(opts);
		var active = me._active;

		var data = me._data;

		// In the case where active.length === 0 we need to keep these at existing values for good animations
		var alignment = {
			xAlign: existingModel.xAlign,
			yAlign: existingModel.yAlign
		};
		var backgroundPoint = {
			x: existingModel.x,
			y: existingModel.y
		};
		var tooltipSize = {
			width: existingModel.width,
			height: existingModel.height
		};
		var tooltipPosition = {
			x: existingModel.caretX,
			y: existingModel.caretY
		};

		var i, len;

		if (active.length) {
			model.opacity = 1;

			var labelColors = [];
			var labelTextColors = [];
			tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);

			var tooltipItems = [];
			for (i = 0, len = active.length; i < len; ++i) {
				tooltipItems.push(createTooltipItem(active[i]));
			}

			// If the user provided a filter function, use it to modify the tooltip items
			if (opts.filter) {
				tooltipItems = tooltipItems.filter(function(a) {
					return opts.filter(a, data);
				});
			}

			// If the user provided a sorting function, use it to modify the tooltip items
			if (opts.itemSort) {
				tooltipItems = tooltipItems.sort(function(a, b) {
					return opts.itemSort(a, b, data);
				});
			}

			// Determine colors for boxes
			helpers$1.each(tooltipItems, function(tooltipItem) {
				labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
				labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
			});


			// Build the Text Lines
			model.title = me.getTitle(tooltipItems, data);
			model.beforeBody = me.getBeforeBody(tooltipItems, data);
			model.body = me.getBody(tooltipItems, data);
			model.afterBody = me.getAfterBody(tooltipItems, data);
			model.footer = me.getFooter(tooltipItems, data);

			// Initial positioning and colors
			model.x = tooltipPosition.x;
			model.y = tooltipPosition.y;
			model.caretPadding = opts.caretPadding;
			model.labelColors = labelColors;
			model.labelTextColors = labelTextColors;

			// data points
			model.dataPoints = tooltipItems;

			// We need to determine alignment of the tooltip
			tooltipSize = getTooltipSize(this, model);
			alignment = determineAlignment(this, tooltipSize);
			// Final Size and Position
			backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
		} else {
			model.opacity = 0;
		}

		model.xAlign = alignment.xAlign;
		model.yAlign = alignment.yAlign;
		model.x = backgroundPoint.x;
		model.y = backgroundPoint.y;
		model.width = tooltipSize.width;
		model.height = tooltipSize.height;

		// Point where the caret on the tooltip points to
		model.caretX = tooltipPosition.x;
		model.caretY = tooltipPosition.y;

		me._model = model;

		if (changed && opts.custom) {
			opts.custom.call(me, model);
		}

		return me;
	},

	drawCaret: function(tooltipPoint, size) {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

		ctx.lineTo(caretPosition.x1, caretPosition.y1);
		ctx.lineTo(caretPosition.x2, caretPosition.y2);
		ctx.lineTo(caretPosition.x3, caretPosition.y3);
	},
	getCaretPosition: function(tooltipPoint, size, vm) {
		var x1, x2, x3, y1, y2, y3;
		var caretSize = vm.caretSize;
		var cornerRadius = vm.cornerRadius;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var ptX = tooltipPoint.x;
		var ptY = tooltipPoint.y;
		var width = size.width;
		var height = size.height;

		if (yAlign === 'center') {
			y2 = ptY + (height / 2);

			if (xAlign === 'left') {
				x1 = ptX;
				x2 = x1 - caretSize;
				x3 = x1;

				y1 = y2 + caretSize;
				y3 = y2 - caretSize;
			} else {
				x1 = ptX + width;
				x2 = x1 + caretSize;
				x3 = x1;

				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			}
		} else {
			if (xAlign === 'left') {
				x2 = ptX + cornerRadius + (caretSize);
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else if (xAlign === 'right') {
				x2 = ptX + width - cornerRadius - caretSize;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else {
				x2 = vm.caretX;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			}
			if (yAlign === 'top') {
				y1 = ptY;
				y2 = y1 - caretSize;
				y3 = y1;
			} else {
				y1 = ptY + height;
				y2 = y1 + caretSize;
				y3 = y1;
				// invert drawing order
				var tmp = x3;
				x3 = x1;
				x1 = tmp;
			}
		}
		return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
	},

	drawTitle: function(pt, vm, ctx) {
		var title = vm.title;

		if (title.length) {
			pt.x = getAlignedX(vm, vm._titleAlign);

			ctx.textAlign = vm._titleAlign;
			ctx.textBaseline = 'top';

			var titleFontSize = vm.titleFontSize;
			var titleSpacing = vm.titleSpacing;

			ctx.fillStyle = vm.titleFontColor;
			ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

			var i, len;
			for (i = 0, len = title.length; i < len; ++i) {
				ctx.fillText(title[i], pt.x, pt.y);
				pt.y += titleFontSize + titleSpacing; // Line Height and spacing

				if (i + 1 === title.length) {
					pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
				}
			}
		}
	},

	drawBody: function(pt, vm, ctx) {
		var bodyFontSize = vm.bodyFontSize;
		var bodySpacing = vm.bodySpacing;
		var bodyAlign = vm._bodyAlign;
		var body = vm.body;
		var drawColorBoxes = vm.displayColors;
		var labelColors = vm.labelColors;
		var xLinePadding = 0;
		var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;
		var textColor;

		ctx.textAlign = bodyAlign;
		ctx.textBaseline = 'top';
		ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

		pt.x = getAlignedX(vm, bodyAlign);

		// Before Body
		var fillLineOfText = function(line) {
			ctx.fillText(line, pt.x + xLinePadding, pt.y);
			pt.y += bodyFontSize + bodySpacing;
		};

		// Before body lines
		ctx.fillStyle = vm.bodyFontColor;
		helpers$1.each(vm.beforeBody, fillLineOfText);

		xLinePadding = drawColorBoxes && bodyAlign !== 'right'
			? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
			: 0;

		// Draw body lines now
		helpers$1.each(body, function(bodyItem, i) {
			textColor = vm.labelTextColors[i];
			ctx.fillStyle = textColor;
			helpers$1.each(bodyItem.before, fillLineOfText);

			helpers$1.each(bodyItem.lines, function(line) {
				// Draw Legend-like boxes if needed
				if (drawColorBoxes) {
					// Fill a white rect so that colours merge nicely if the opacity is < 1
					ctx.fillStyle = vm.legendColorBackground;
					ctx.fillRect(colorX, pt.y, bodyFontSize, bodyFontSize);

					// Border
					ctx.lineWidth = 1;
					ctx.strokeStyle = labelColors[i].borderColor;
					ctx.strokeRect(colorX, pt.y, bodyFontSize, bodyFontSize);

					// Inner square
					ctx.fillStyle = labelColors[i].backgroundColor;
					ctx.fillRect(colorX + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
					ctx.fillStyle = textColor;
				}

				fillLineOfText(line);
			});

			helpers$1.each(bodyItem.after, fillLineOfText);
		});

		// Reset back to 0 for after body
		xLinePadding = 0;

		// After body lines
		helpers$1.each(vm.afterBody, fillLineOfText);
		pt.y -= bodySpacing; // Remove last body spacing
	},

	drawFooter: function(pt, vm, ctx) {
		var footer = vm.footer;

		if (footer.length) {
			pt.x = getAlignedX(vm, vm._footerAlign);
			pt.y += vm.footerMarginTop;

			ctx.textAlign = vm._footerAlign;
			ctx.textBaseline = 'top';

			ctx.fillStyle = vm.footerFontColor;
			ctx.font = helpers$1.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

			helpers$1.each(footer, function(line) {
				ctx.fillText(line, pt.x, pt.y);
				pt.y += vm.footerFontSize + vm.footerSpacing;
			});
		}
	},

	drawBackground: function(pt, vm, ctx, tooltipSize) {
		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = vm.borderWidth;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var x = pt.x;
		var y = pt.y;
		var width = tooltipSize.width;
		var height = tooltipSize.height;
		var radius = vm.cornerRadius;

		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		if (yAlign === 'top') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		if (yAlign === 'center' && xAlign === 'right') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		if (yAlign === 'bottom') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		if (yAlign === 'center' && xAlign === 'left') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();

		ctx.fill();

		if (vm.borderWidth > 0) {
			ctx.stroke();
		}
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;

		if (vm.opacity === 0) {
			return;
		}

		var tooltipSize = {
			width: vm.width,
			height: vm.height
		};
		var pt = {
			x: vm.x,
			y: vm.y
		};

		// IE11/Edge does not like very small opacities, so snap to 0
		var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

		// Truthy/falsey value for empty tooltip
		var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

		if (this._options.enabled && hasTooltipContent) {
			ctx.save();
			ctx.globalAlpha = opacity;

			// Draw Background
			this.drawBackground(pt, vm, ctx, tooltipSize);

			// Draw Title, Body, and Footer
			pt.y += vm.yPadding;

			// Titles
			this.drawTitle(pt, vm, ctx);

			// Body
			this.drawBody(pt, vm, ctx);

			// Footer
			this.drawFooter(pt, vm, ctx);

			ctx.restore();
		}
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 * @returns {boolean} true if the tooltip changed
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me._options;
		var changed = false;

		me._lastActive = me._lastActive || [];

		// Find Active Elements for tooltips
		if (e.type === 'mouseout') {
			me._active = [];
		} else {
			me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
		}

		// Remember Last Actives
		changed = !helpers$1.arrayEquals(me._active, me._lastActive);

		// Only handle target event on tooltip change
		if (changed) {
			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				me.update(true);
				me.pivot();
			}
		}

		return changed;
	}
});

/**
 * @namespace Chart.Tooltip.positioners
 */
var positioners_1 = positioners;

var core_tooltip = exports$3;
core_tooltip.positioners = positioners_1;

var valueOrDefault$8 = helpers$1.valueOrDefault;

core_defaults._set('global', {
	elements: {},
	events: [
		'mousemove',
		'mouseout',
		'click',
		'touchstart',
		'touchmove'
	],
	hover: {
		onHover: null,
		mode: 'nearest',
		intersect: true,
		animationDuration: 400
	},
	onClick: null,
	maintainAspectRatio: true,
	responsive: true,
	responsiveAnimationDuration: 0
});

/**
 * Recursively merge the given config objects representing the `scales` option
 * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
 * returns a deep copy of the result, thus doesn't alter inputs.
 */
function mergeScaleConfig(/* config objects ... */) {
	return helpers$1.merge({}, [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			if (key === 'xAxes' || key === 'yAxes') {
				var slen = source[key].length;
				var i, type, scale;

				if (!target[key]) {
					target[key] = [];
				}

				for (i = 0; i < slen; ++i) {
					scale = source[key][i];
					type = valueOrDefault$8(scale.type, key === 'xAxes' ? 'category' : 'linear');

					if (i >= target[key].length) {
						target[key].push({});
					}

					if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
						// new/untyped scale or type changed: let's apply the new defaults
						// then merge source scale to correctly overwrite the defaults.
						helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
					} else {
						// scales type are the same
						helpers$1.merge(target[key][i], scale);
					}
				}
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

/**
 * Recursively merge the given config objects as the root options by handling
 * default scale options for the `scales` and `scale` properties, then returns
 * a deep copy of the result, thus doesn't alter inputs.
 */
function mergeConfig(/* config objects ... */) {
	return helpers$1.merge({}, [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			var tval = target[key] || {};
			var sval = source[key];

			if (key === 'scales') {
				// scale config merging is complex. Add our own function here for that
				target[key] = mergeScaleConfig(tval, sval);
			} else if (key === 'scale') {
				// used in polar area & radar charts since there is only one scale
				target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

function initConfig(config) {
	config = config || {};

	// Do NOT use mergeConfig for the data object because this method merges arrays
	// and so would change references to labels and datasets, preventing data updates.
	var data = config.data = config.data || {};
	data.datasets = data.datasets || [];
	data.labels = data.labels || [];

	config.options = mergeConfig(
		core_defaults.global,
		core_defaults[config.type],
		config.options || {});

	return config;
}

function updateConfig(chart) {
	var newOptions = chart.options;

	helpers$1.each(chart.scales, function(scale) {
		core_layouts.removeBox(chart, scale);
	});

	newOptions = mergeConfig(
		core_defaults.global,
		core_defaults[chart.config.type],
		newOptions);

	chart.options = chart.config.options = newOptions;
	chart.ensureScalesHaveIDs();
	chart.buildOrUpdateScales();

	// Tooltip
	chart.tooltip._options = newOptions.tooltips;
	chart.tooltip.initialize();
}

function positionIsHorizontal(position) {
	return position === 'top' || position === 'bottom';
}

var Chart = function(item, config) {
	this.construct(item, config);
	return this;
};

helpers$1.extend(Chart.prototype, /** @lends Chart */ {
	/**
	 * @private
	 */
	construct: function(item, config) {
		var me = this;

		config = initConfig(config);

		var context = platform.acquireContext(item, config);
		var canvas = context && context.canvas;
		var height = canvas && canvas.height;
		var width = canvas && canvas.width;

		me.id = helpers$1.uid();
		me.ctx = context;
		me.canvas = canvas;
		me.config = config;
		me.width = width;
		me.height = height;
		me.aspectRatio = height ? width / height : null;
		me.options = config.options;
		me._bufferedRender = false;

		/**
		 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
		 * the "instance" still need to be defined since it might be called from plugins.
		 * @prop Chart#chart
		 * @deprecated since version 2.6.0
		 * @todo remove at version 3
		 * @private
		 */
		me.chart = me;
		me.controller = me; // chart.chart.controller #inception

		// Add the chart instance to the global namespace
		Chart.instances[me.id] = me;

		// Define alias to the config data: `chart.data === chart.config.data`
		Object.defineProperty(me, 'data', {
			get: function() {
				return me.config.data;
			},
			set: function(value) {
				me.config.data = value;
			}
		});

		if (!context || !canvas) {
			// The given item is not a compatible context2d element, let's return before finalizing
			// the chart initialization but after setting basic chart / controller properties that
			// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
			// https://github.com/chartjs/Chart.js/issues/2807
			console.error("Failed to create chart: can't acquire context from the given item");
			return;
		}

		me.initialize();
		me.update();
	},

	/**
	 * @private
	 */
	initialize: function() {
		var me = this;

		// Before init plugin notification
		core_plugins.notify(me, 'beforeInit');

		helpers$1.retinaScale(me, me.options.devicePixelRatio);

		me.bindEvents();

		if (me.options.responsive) {
			// Initial resize before chart draws (must be silent to preserve initial animations).
			me.resize(true);
		}

		// Make sure scales have IDs and are built before we build any controllers.
		me.ensureScalesHaveIDs();
		me.buildOrUpdateScales();
		me.initToolTip();

		// After init plugin notification
		core_plugins.notify(me, 'afterInit');

		return me;
	},

	clear: function() {
		helpers$1.canvas.clear(this);
		return this;
	},

	stop: function() {
		// Stops any current animation loop occurring
		core_animations.cancelAnimation(this);
		return this;
	},

	resize: function(silent) {
		var me = this;
		var options = me.options;
		var canvas = me.canvas;
		var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;

		// the canvas render width and height will be casted to integers so make sure that
		// the canvas display style uses the same integer values to avoid blurring effect.

		// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed
		var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
		var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

		if (me.width === newWidth && me.height === newHeight) {
			return;
		}

		canvas.width = me.width = newWidth;
		canvas.height = me.height = newHeight;
		canvas.style.width = newWidth + 'px';
		canvas.style.height = newHeight + 'px';

		helpers$1.retinaScale(me, options.devicePixelRatio);

		if (!silent) {
			// Notify any plugins about the resize
			var newSize = {width: newWidth, height: newHeight};
			core_plugins.notify(me, 'resize', [newSize]);

			// Notify of resize
			if (options.onResize) {
				options.onResize(me, newSize);
			}

			me.stop();
			me.update({
				duration: options.responsiveAnimationDuration
			});
		}
	},

	ensureScalesHaveIDs: function() {
		var options = this.options;
		var scalesOptions = options.scales || {};
		var scaleOptions = options.scale;

		helpers$1.each(scalesOptions.xAxes, function(xAxisOptions, index) {
			xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
		});

		helpers$1.each(scalesOptions.yAxes, function(yAxisOptions, index) {
			yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
		});

		if (scaleOptions) {
			scaleOptions.id = scaleOptions.id || 'scale';
		}
	},

	/**
	 * Builds a map of scale ID to scale object for future lookup.
	 */
	buildOrUpdateScales: function() {
		var me = this;
		var options = me.options;
		var scales = me.scales || {};
		var items = [];
		var updated = Object.keys(scales).reduce(function(obj, id) {
			obj[id] = false;
			return obj;
		}, {});

		if (options.scales) {
			items = items.concat(
				(options.scales.xAxes || []).map(function(xAxisOptions) {
					return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
				}),
				(options.scales.yAxes || []).map(function(yAxisOptions) {
					return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
				})
			);
		}

		if (options.scale) {
			items.push({
				options: options.scale,
				dtype: 'radialLinear',
				isDefault: true,
				dposition: 'chartArea'
			});
		}

		helpers$1.each(items, function(item) {
			var scaleOptions = item.options;
			var id = scaleOptions.id;
			var scaleType = valueOrDefault$8(scaleOptions.type, item.dtype);

			if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
				scaleOptions.position = item.dposition;
			}

			updated[id] = true;
			var scale = null;
			if (id in scales && scales[id].type === scaleType) {
				scale = scales[id];
				scale.options = scaleOptions;
				scale.ctx = me.ctx;
				scale.chart = me;
			} else {
				var scaleClass = core_scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}
				scale = new scaleClass({
					id: id,
					type: scaleType,
					options: scaleOptions,
					ctx: me.ctx,
					chart: me
				});
				scales[scale.id] = scale;
			}

			scale.mergeTicksOptions();

			// TODO(SB): I think we should be able to remove this custom case (options.scale)
			// and consider it as a regular scale part of the "scales"" map only! This would
			// make the logic easier and remove some useless? custom code.
			if (item.isDefault) {
				me.scale = scale;
			}
		});
		// clear up discarded scales
		helpers$1.each(updated, function(hasUpdated, id) {
			if (!hasUpdated) {
				delete scales[id];
			}
		});

		me.scales = scales;

		core_scaleService.addScalesToLayout(this);
	},

	buildOrUpdateControllers: function() {
		var me = this;
		var newControllers = [];

		helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
			var meta = me.getDatasetMeta(datasetIndex);
			var type = dataset.type || me.config.type;

			if (meta.type && meta.type !== type) {
				me.destroyDatasetMeta(datasetIndex);
				meta = me.getDatasetMeta(datasetIndex);
			}
			meta.type = type;

			if (meta.controller) {
				meta.controller.updateIndex(datasetIndex);
				meta.controller.linkScales();
			} else {
				var ControllerClass = controllers[meta.type];
				if (ControllerClass === undefined) {
					throw new Error('"' + meta.type + '" is not a chart type.');
				}

				meta.controller = new ControllerClass(me, datasetIndex);
				newControllers.push(meta.controller);
			}
		}, me);

		return newControllers;
	},

	/**
	 * Reset the elements of all datasets
	 * @private
	 */
	resetElements: function() {
		var me = this;
		helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
			me.getDatasetMeta(datasetIndex).controller.reset();
		}, me);
	},

	/**
	* Resets the chart back to it's state before the initial animation
	*/
	reset: function() {
		this.resetElements();
		this.tooltip.initialize();
	},

	update: function(config) {
		var me = this;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		updateConfig(me);

		// plugins options references might have change, let's invalidate the cache
		// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
		core_plugins._invalidate(me);

		if (core_plugins.notify(me, 'beforeUpdate') === false) {
			return;
		}

		// In case the entire data object changed
		me.tooltip._data = me.data;

		// Make sure dataset controllers are updated and new controllers are reset
		var newControllers = me.buildOrUpdateControllers();

		// Make sure all dataset controllers have correct meta data counts
		helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
			me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
		}, me);

		me.updateLayout();

		// Can only reset the new controllers after the scales have been updated
		if (me.options.animation && me.options.animation.duration) {
			helpers$1.each(newControllers, function(controller) {
				controller.reset();
			});
		}

		me.updateDatasets();

		// Need to reset tooltip in case it is displayed with elements that are removed
		// after update.
		me.tooltip.initialize();

		// Last active contains items that were previously in the tooltip.
		// When we reset the tooltip, we need to clear it
		me.lastActive = [];

		// Do this before render so that any plugins that need final scale updates can use it
		core_plugins.notify(me, 'afterUpdate');

		if (me._bufferedRender) {
			me._bufferedRequest = {
				duration: config.duration,
				easing: config.easing,
				lazy: config.lazy
			};
		} else {
			me.render(config);
		}
	},

	/**
	 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
	 * hook, in which case, plugins will not be called on `afterLayout`.
	 * @private
	 */
	updateLayout: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeLayout') === false) {
			return;
		}

		core_layouts.update(this, this.width, this.height);

		/**
		 * Provided for backward compatibility, use `afterLayout` instead.
		 * @method IPlugin#afterScaleUpdate
		 * @deprecated since version 2.5.0
		 * @todo remove at version 3
		 * @private
		 */
		core_plugins.notify(me, 'afterScaleUpdate');
		core_plugins.notify(me, 'afterLayout');
	},

	/**
	 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
	 * @private
	 */
	updateDatasets: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
			return;
		}

		for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.updateDataset(i);
		}

		core_plugins.notify(me, 'afterDatasetsUpdate');
	},

	/**
	 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
	 * @private
	 */
	updateDataset: function(index) {
		var me = this;
		var meta = me.getDatasetMeta(index);
		var args = {
			meta: meta,
			index: index
		};

		if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
			return;
		}

		meta.controller.update();

		core_plugins.notify(me, 'afterDatasetUpdate', [args]);
	},

	render: function(config) {
		var me = this;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		var animationOptions = me.options.animation;
		var duration = valueOrDefault$8(config.duration, animationOptions && animationOptions.duration);
		var lazy = config.lazy;

		if (core_plugins.notify(me, 'beforeRender') === false) {
			return;
		}

		var onComplete = function(animation) {
			core_plugins.notify(me, 'afterRender');
			helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
		};

		if (animationOptions && duration) {
			var animation = new core_animation({
				numSteps: duration / 16.66, // 60 fps
				easing: config.easing || animationOptions.easing,

				render: function(chart, animationObject) {
					var easingFunction = helpers$1.easing.effects[animationObject.easing];
					var currentStep = animationObject.currentStep;
					var stepDecimal = currentStep / animationObject.numSteps;

					chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
				},

				onAnimationProgress: animationOptions.onProgress,
				onAnimationComplete: onComplete
			});

			core_animations.addAnimation(me, animation, duration, lazy);
		} else {
			me.draw();

			// See https://github.com/chartjs/Chart.js/issues/3781
			onComplete(new core_animation({numSteps: 0, chart: me}));
		}

		return me;
	},

	draw: function(easingValue) {
		var me = this;

		me.clear();

		if (helpers$1.isNullOrUndef(easingValue)) {
			easingValue = 1;
		}

		me.transition(easingValue);

		if (me.width <= 0 || me.height <= 0) {
			return;
		}

		if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
			return;
		}

		// Draw all the scales
		helpers$1.each(me.boxes, function(box) {
			box.draw(me.chartArea);
		}, me);

		me.drawDatasets(easingValue);
		me._drawTooltip(easingValue);

		core_plugins.notify(me, 'afterDraw', [easingValue]);
	},

	/**
	 * @private
	 */
	transition: function(easingValue) {
		var me = this;

		for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
			if (me.isDatasetVisible(i)) {
				me.getDatasetMeta(i).controller.transition(easingValue);
			}
		}

		me.tooltip.transition(easingValue);
	},

	/**
	 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
	 * @private
	 */
	drawDatasets: function(easingValue) {
		var me = this;

		if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
			return;
		}

		// Draw datasets reversed to support proper line stacking
		for (var i = (me.data.datasets || []).length - 1; i >= 0; --i) {
			if (me.isDatasetVisible(i)) {
				me.drawDataset(i, easingValue);
			}
		}

		core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
	},

	/**
	 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
	 * @private
	 */
	drawDataset: function(index, easingValue) {
		var me = this;
		var meta = me.getDatasetMeta(index);
		var args = {
			meta: meta,
			index: index,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
			return;
		}

		meta.controller.draw(easingValue);

		core_plugins.notify(me, 'afterDatasetDraw', [args]);
	},

	/**
	 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
	 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
	 * @private
	 */
	_drawTooltip: function(easingValue) {
		var me = this;
		var tooltip = me.tooltip;
		var args = {
			tooltip: tooltip,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
			return;
		}

		tooltip.draw();

		core_plugins.notify(me, 'afterTooltipDraw', [args]);
	},

	/**
	 * Get the single element that was clicked on
	 * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
	 */
	getElementAtEvent: function(e) {
		return core_interaction.modes.single(this, e);
	},

	getElementsAtEvent: function(e) {
		return core_interaction.modes.label(this, e, {intersect: true});
	},

	getElementsAtXAxis: function(e) {
		return core_interaction.modes['x-axis'](this, e, {intersect: true});
	},

	getElementsAtEventForMode: function(e, mode, options) {
		var method = core_interaction.modes[mode];
		if (typeof method === 'function') {
			return method(this, e, options);
		}

		return [];
	},

	getDatasetAtEvent: function(e) {
		return core_interaction.modes.dataset(this, e, {intersect: true});
	},

	getDatasetMeta: function(datasetIndex) {
		var me = this;
		var dataset = me.data.datasets[datasetIndex];
		if (!dataset._meta) {
			dataset._meta = {};
		}

		var meta = dataset._meta[me.id];
		if (!meta) {
			meta = dataset._meta[me.id] = {
				type: null,
				data: [],
				dataset: null,
				controller: null,
				hidden: null,			// See isDatasetVisible() comment
				xAxisID: null,
				yAxisID: null
			};
		}

		return meta;
	},

	getVisibleDatasetCount: function() {
		var count = 0;
		for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
			if (this.isDatasetVisible(i)) {
				count++;
			}
		}
		return count;
	},

	isDatasetVisible: function(datasetIndex) {
		var meta = this.getDatasetMeta(datasetIndex);

		// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
		// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
		return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
	},

	generateLegend: function() {
		return this.options.legendCallback(this);
	},

	/**
	 * @private
	 */
	destroyDatasetMeta: function(datasetIndex) {
		var id = this.id;
		var dataset = this.data.datasets[datasetIndex];
		var meta = dataset._meta && dataset._meta[id];

		if (meta) {
			meta.controller.destroy();
			delete dataset._meta[id];
		}
	},

	destroy: function() {
		var me = this;
		var canvas = me.canvas;
		var i, ilen;

		me.stop();

		// dataset controllers need to cleanup associated data
		for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.destroyDatasetMeta(i);
		}

		if (canvas) {
			me.unbindEvents();
			helpers$1.canvas.clear(me);
			platform.releaseContext(me.ctx);
			me.canvas = null;
			me.ctx = null;
		}

		core_plugins.notify(me, 'destroy');

		delete Chart.instances[me.id];
	},

	toBase64Image: function() {
		return this.canvas.toDataURL.apply(this.canvas, arguments);
	},

	initToolTip: function() {
		var me = this;
		me.tooltip = new core_tooltip({
			_chart: me,
			_chartInstance: me, // deprecated, backward compatibility
			_data: me.data,
			_options: me.options.tooltips
		}, me);
	},

	/**
	 * @private
	 */
	bindEvents: function() {
		var me = this;
		var listeners = me._listeners = {};
		var listener = function() {
			me.eventHandler.apply(me, arguments);
		};

		helpers$1.each(me.options.events, function(type) {
			platform.addEventListener(me, type, listener);
			listeners[type] = listener;
		});

		// Elements used to detect size change should not be injected for non responsive charts.
		// See https://github.com/chartjs/Chart.js/issues/2210
		if (me.options.responsive) {
			listener = function() {
				me.resize();
			};

			platform.addEventListener(me, 'resize', listener);
			listeners.resize = listener;
		}
	},

	/**
	 * @private
	 */
	unbindEvents: function() {
		var me = this;
		var listeners = me._listeners;
		if (!listeners) {
			return;
		}

		delete me._listeners;
		helpers$1.each(listeners, function(listener, type) {
			platform.removeEventListener(me, type, listener);
		});
	},

	updateHoverStyle: function(elements, mode, enabled) {
		var method = enabled ? 'setHoverStyle' : 'removeHoverStyle';
		var element, i, ilen;

		for (i = 0, ilen = elements.length; i < ilen; ++i) {
			element = elements[i];
			if (element) {
				this.getDatasetMeta(element._datasetIndex).controller[method](element);
			}
		}
	},

	/**
	 * @private
	 */
	eventHandler: function(e) {
		var me = this;
		var tooltip = me.tooltip;

		if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
			return;
		}

		// Buffer any update calls so that renders do not occur
		me._bufferedRender = true;
		me._bufferedRequest = null;

		var changed = me.handleEvent(e);
		// for smooth tooltip animations issue #4989
		// the tooltip should be the source of change
		// Animation check workaround:
		// tooltip._start will be null when tooltip isn't animating
		if (tooltip) {
			changed = tooltip._start
				? tooltip.handleEvent(e)
				: changed | tooltip.handleEvent(e);
		}

		core_plugins.notify(me, 'afterEvent', [e]);

		var bufferedRequest = me._bufferedRequest;
		if (bufferedRequest) {
			// If we have an update that was triggered, we need to do a normal render
			me.render(bufferedRequest);
		} else if (changed && !me.animating) {
			// If entering, leaving, or changing elements, animate the change via pivot
			me.stop();

			// We only need to render at this point. Updating will cause scales to be
			// recomputed generating flicker & using more memory than necessary.
			me.render({
				duration: me.options.hover.animationDuration,
				lazy: true
			});
		}

		me._bufferedRender = false;
		me._bufferedRequest = null;

		return me;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event the event to handle
	 * @return {boolean} true if the chart needs to re-render
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me.options || {};
		var hoverOptions = options.hover;
		var changed = false;

		me.lastActive = me.lastActive || [];

		// Find Active Elements for hover and tooltips
		if (e.type === 'mouseout') {
			me.active = [];
		} else {
			me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
		}

		// Invoke onHover hook
		// Need to call with native event here to not break backwards compatibility
		helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

		if (e.type === 'mouseup' || e.type === 'click') {
			if (options.onClick) {
				// Use e.native here for backwards compatibility
				options.onClick.call(me, e.native, me.active);
			}
		}

		// Remove styling for last active (even if it may still be active)
		if (me.lastActive.length) {
			me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
		}

		// Built in hover styling
		if (me.active.length && hoverOptions.mode) {
			me.updateHoverStyle(me.active, hoverOptions.mode, true);
		}

		changed = !helpers$1.arrayEquals(me.active, me.lastActive);

		// Remember Last Actives
		me.lastActive = me.active;

		return changed;
	}
});

/**
 * NOTE(SB) We actually don't use this container anymore but we need to keep it
 * for backward compatibility. Though, it can still be useful for plugins that
 * would need to work on multiple charts?!
 */
Chart.instances = {};

var core_controller = Chart;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart instead.
 * @class Chart.Controller
 * @deprecated since version 2.6
 * @todo remove at version 3
 * @private
 */
Chart.Controller = Chart;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
Chart.types = {};

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.configMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.configMerge = mergeConfig;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.scaleMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.scaleMerge = mergeScaleConfig;

var core_helpers = function() {

	// -- Basic js utility methods

	helpers$1.where = function(collection, filterCallback) {
		if (helpers$1.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers$1.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers$1.findIndex = Array.prototype.findIndex ?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined ? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers$1.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers$1.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};

	// -- Math methods
	helpers$1.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers$1.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers$1.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
	};
	helpers$1.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers$1.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers$1.sign = Math.sign ?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers$1.log10 = Math.log10 ?
		function(x) {
			return Math.log10(x);
		} :
		function(x) {
			var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
			// Check for whole powers of 10,
			// which due to floating point rounding error should be corrected.
			var powerOf10 = Math.round(exponent);
			var isPowerOf10 = x === Math.pow(10, powerOf10);

			return isPowerOf10 ? powerOf10 : exponent;
		};
	helpers$1.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers$1.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};

	/**
	 * Returns the number of decimal places
	 * i.e. the number of digits after the decimal point, of the value of this Number.
	 * @param {number} x - A number.
	 * @returns {number} The number of decimal places.
	 * @private
	 */
	helpers$1._decimalPlaces = function(x) {
		if (!helpers$1.isFinite(x)) {
			return;
		}
		var e = 1;
		var p = 0;
		while (Math.round(x * e) / e !== x) {
			e *= 10;
			p++;
		}
		return p;
	};

	// Gets the angle from vertical upright to the point about a centre.
	helpers$1.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x;
		var distanceFromYCenter = anglePoint.y - centrePoint.y;
		var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers$1.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};

	/**
	 * Provided for backward compatibility, not available anymore
	 * @function Chart.helpers.aliasPixel
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 */
	helpers$1.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};

	/**
	 * Returns the aligned pixel value to avoid anti-aliasing blur
	 * @param {Chart} chart - The chart instance.
	 * @param {number} pixel - A pixel value.
	 * @param {number} width - The width of the element.
	 * @returns {number} The aligned pixel value.
	 * @private
	 */
	helpers$1._alignPixel = function(chart, pixel, width) {
		var devicePixelRatio = chart.currentDevicePixelRatio;
		var halfWidth = width / 2;
		return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
	};

	helpers$1.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint;
		var current = middlePoint;
		var next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers$1.EPSILON = Number.EPSILON || 1e-14;
	helpers$1.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers$1.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers$1.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers$1.niceNum = function(range, round) {
		var exponent = Math.floor(helpers$1.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers$1.requestAnimFrame = (function() {
		if (typeof window === 'undefined') {
			return function(callback) {
				callback();
			};
		}
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers$1.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt;
		var canvas = evt.target || evt.srcElement;
		var boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof styleValue === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	/**
	 * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
	 * @param {HTMLElement} domNode - the node to check the constraint on
	 * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
	 * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
	 * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
	 */
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = helpers$1._getParentNode(domNode);
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers$1.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers$1.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	/**
	 * @private
 	 */
	helpers$1._calculatePadding = function(container, padding, parentDimension) {
		padding = helpers$1.getStyle(container, padding);

		return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
	};
	/**
	 * @private
	 */
	helpers$1._getParentNode = function(domNode) {
		var parent = domNode.parentNode;
		if (parent && parent.toString() === '[object ShadowRoot]') {
			parent = parent.host;
		}
		return parent;
	};
	helpers$1.getMaximumWidth = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientWidth;
		}

		var clientWidth = container.clientWidth;
		var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);
		var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

		var w = clientWidth - paddingLeft - paddingRight;
		var cw = helpers$1.getConstraintWidth(domNode);
		return isNaN(cw) ? w : Math.min(w, cw);
	};
	helpers$1.getMaximumHeight = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientHeight;
		}

		var clientHeight = container.clientHeight;
		var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);
		var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

		var h = clientHeight - paddingTop - paddingBottom;
		var ch = helpers$1.getConstraintHeight(domNode);
		return isNaN(ch) ? h : Math.min(h, ch);
	};
	helpers$1.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers$1.retinaScale = function(chart, forceRatio) {
		var pixelRatio = chart.currentDevicePixelRatio = forceRatio || (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		if (!canvas.style.height && !canvas.style.width) {
			canvas.style.height = height + 'px';
			canvas.style.width = width + 'px';
		}
	};
	// -- Canvas methods
	helpers$1.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers$1.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		helpers$1.each(arrayOfThings, function(thing) {
			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
				longest = helpers$1.measureText(ctx, data, gc, longest, thing);
			} else if (helpers$1.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				helpers$1.each(thing, function(nestedThing) {
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
						longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
					}
				});
			}
		});

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (var i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers$1.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};
	helpers$1.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers$1.each(arrayOfThings, function(thing) {
			if (helpers$1.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};

	helpers$1.color = !chartjsColor ?
		function(value) {
			console.error('Color.js not found!');
			return value;
		} :
		function(value) {
			/* global CanvasGradient */
			if (value instanceof CanvasGradient) {
				value = core_defaults.global.defaultColor;
			}

			return chartjsColor(value);
		};

	helpers$1.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient) ?
			colorValue :
			helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

function abstract() {
	throw new Error(
		'This method is not implemented: either no adapter can ' +
		'be found or an incomplete integration was provided.'
	);
}

/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */

/**
 * Currently supported unit string values.
 * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
 * @memberof Chart._adapters._date
 * @name Unit
 */

/**
 * @class
 */
function DateAdapter(options) {
	this.options = options || {};
}

helpers$1.extend(DateAdapter.prototype, /** @lends DateAdapter */ {
	/**
	 * Returns a map of time formats for the supported formatting units defined
	 * in Unit as well as 'datetime' representing a detailed date/time string.
	 * @returns {{string: string}}
	 */
	formats: abstract,

	/**
	 * Parses the given `value` and return the associated timestamp.
	 * @param {any} value - the value to parse (usually comes from the data)
	 * @param {string} [format] - the expected data format
	 * @returns {(number|null)}
	 * @function
	 */
	parse: abstract,

	/**
	 * Returns the formatted date in the specified `format` for a given `timestamp`.
	 * @param {number} timestamp - the timestamp to format
	 * @param {string} format - the date/time token
	 * @return {string}
	 * @function
	 */
	format: abstract,

	/**
	 * Adds the specified `amount` of `unit` to the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {number} amount - the amount to add
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	add: abstract,

	/**
	 * Returns the number of `unit` between the given timestamps.
	 * @param {number} max - the input timestamp (reference)
	 * @param {number} min - the timestamp to substract
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	diff: abstract,

	/**
	 * Returns start of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @param {number} [weekday] - the ISO day of the week with 1 being Monday
	 * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
	 * @function
	 */
	startOf: abstract,

	/**
	 * Returns end of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @function
	 */
	endOf: abstract,

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility for scale.getValueForPixel(),
	 * this method should be overridden only by the moment adapter.
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(value) {
		return value;
	}
});

DateAdapter.override = function(members) {
	helpers$1.extend(DateAdapter.prototype, members);
};

var _date = DateAdapter;

var core_adapters = {
	_date: _date
};

/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
var core_ticks = {
	/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
	formatters: {
		/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {string|string[]} the label to display
		 */
		values: function(value) {
			return helpers$1.isArray(value) ? value : '' + value;
		},

		/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {number} the value to be formatted
		 * @param index {number} the position of the tickValue parameter in the ticks array
		 * @param ticks {number[]} the list of ticks being converted
		 * @return {string} string representation of the tickValue parameter
		 */
		linear: function(tickValue, index, ticks) {
			// If we have lots of ticks, don't use the ones
			var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

			// If we have a number like 2.5 as the delta, figure out how many decimal places we need
			if (Math.abs(delta) > 1) {
				if (tickValue !== Math.floor(tickValue)) {
					// not an integer
					delta = tickValue - Math.floor(tickValue);
				}
			}

			var logDelta = helpers$1.log10(Math.abs(delta));
			var tickString = '';

			if (tickValue !== 0) {
				var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));
				if (maxTick < 1e-4) { // all ticks are small numbers; use scientific notation
					var logTick = helpers$1.log10(Math.abs(tickValue));
					tickString = tickValue.toExponential(Math.floor(logTick) - Math.floor(logDelta));
				} else {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				}
			} else {
				tickString = '0'; // never show decimal places for 0
			}

			return tickString;
		},

		logarithmic: function(tickValue, index, ticks) {
			var remain = tickValue / (Math.pow(10, Math.floor(helpers$1.log10(tickValue))));

			if (tickValue === 0) {
				return '0';
			} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
				return tickValue.toExponential();
			}
			return '';
		}
	}
};

var valueOrDefault$9 = helpers$1.valueOrDefault;
var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

core_defaults._set('scale', {
	display: true,
	position: 'left',
	offset: false,

	// grid line settings
	gridLines: {
		display: true,
		color: 'rgba(0, 0, 0, 0.1)',
		lineWidth: 1,
		drawBorder: true,
		drawOnChartArea: true,
		drawTicks: true,
		tickMarkLength: 10,
		zeroLineWidth: 1,
		zeroLineColor: 'rgba(0,0,0,0.25)',
		zeroLineBorderDash: [],
		zeroLineBorderDashOffset: 0.0,
		offsetGridLines: false,
		borderDash: [],
		borderDashOffset: 0.0
	},

	// scale label
	scaleLabel: {
		// display property
		display: false,

		// actual label
		labelString: '',

		// top/bottom padding
		padding: {
			top: 4,
			bottom: 4
		}
	},

	// label settings
	ticks: {
		beginAtZero: false,
		minRotation: 0,
		maxRotation: 50,
		mirror: false,
		padding: 0,
		reverse: false,
		display: true,
		autoSkip: true,
		autoSkipPadding: 0,
		labelOffset: 0,
		// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
		callback: core_ticks.formatters.values,
		minor: {},
		major: {}
	}
});

function labelsFromTicks(ticks) {
	var labels = [];
	var i, ilen;

	for (i = 0, ilen = ticks.length; i < ilen; ++i) {
		labels.push(ticks[i].label);
	}

	return labels;
}

function getPixelForGridLine(scale, index, offsetGridLines) {
	var lineValue = scale.getPixelForTick(index);

	if (offsetGridLines) {
		if (scale.getTicks().length === 1) {
			lineValue -= scale.isHorizontal() ?
				Math.max(lineValue - scale.left, scale.right - lineValue) :
				Math.max(lineValue - scale.top, scale.bottom - lineValue);
		} else if (index === 0) {
			lineValue -= (scale.getPixelForTick(1) - lineValue) / 2;
		} else {
			lineValue -= (lineValue - scale.getPixelForTick(index - 1)) / 2;
		}
	}
	return lineValue;
}

function computeTextSize(context, tick, font) {
	return helpers$1.isArray(tick) ?
		helpers$1.longestText(context, font, tick) :
		context.measureText(tick).width;
}

var core_scale = core_element.extend({
	/**
	 * Get the padding needed for the scale
	 * @method getPadding
	 * @private
	 * @returns {Padding} the necessary padding
	 */
	getPadding: function() {
		var me = this;
		return {
			left: me.paddingLeft || 0,
			top: me.paddingTop || 0,
			right: me.paddingRight || 0,
			bottom: me.paddingBottom || 0
		};
	},

	/**
	 * Returns the scale tick objects ({label, major})
	 * @since 2.7
	 */
	getTicks: function() {
		return this._ticks;
	},

	// These methods are ordered by lifecyle. Utilities then follow.
	// Any function defined here is inherited by all scale types.
	// Any function can be extended by the scale type

	mergeTicksOptions: function() {
		var ticks = this.options.ticks;
		if (ticks.minor === false) {
			ticks.minor = {
				display: false
			};
		}
		if (ticks.major === false) {
			ticks.major = {
				display: false
			};
		}
		for (var key in ticks) {
			if (key !== 'major' && key !== 'minor') {
				if (typeof ticks.minor[key] === 'undefined') {
					ticks.minor[key] = ticks[key];
				}
				if (typeof ticks.major[key] === 'undefined') {
					ticks.major[key] = ticks[key];
				}
			}
		}
	},
	beforeUpdate: function() {
		helpers$1.callback(this.options.beforeUpdate, [this]);
	},

	update: function(maxWidth, maxHeight, margins) {
		var me = this;
		var i, ilen, labels, label, ticks, tick;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = helpers$1.extend({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, margins);

		me._maxLabelLines = 0;
		me.longestLabelWidth = 0;
		me.longestTextCache = me.longestTextCache || {};

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();

		// Data min/max
		me.beforeDataLimits();
		me.determineDataLimits();
		me.afterDataLimits();

		// Ticks - `this.ticks` is now DEPRECATED!
		// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
		// and must not be accessed directly from outside this class. `this.ticks` being
		// around for long time and not marked as private, we can't change its structure
		// without unexpected breaking changes. If you need to access the scale ticks,
		// use scale.getTicks() instead.

		me.beforeBuildTicks();

		// New implementations should return an array of objects but for BACKWARD COMPAT,
		// we still support no return (`this.ticks` internally set by calling this method).
		ticks = me.buildTicks() || [];

		// Allow modification of ticks in callback.
		ticks = me.afterBuildTicks(ticks) || ticks;

		me.beforeTickToLabelConversion();

		// New implementations should return the formatted tick labels but for BACKWARD
		// COMPAT, we still support no return (`this.ticks` internally changed by calling
		// this method and supposed to contain only string values).
		labels = me.convertTicksToLabels(ticks) || me.ticks;

		me.afterTickToLabelConversion();

		me.ticks = labels;   // BACKWARD COMPATIBILITY

		// IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!

		// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
		for (i = 0, ilen = labels.length; i < ilen; ++i) {
			label = labels[i];
			tick = ticks[i];
			if (!tick) {
				ticks.push(tick = {
					label: label,
					major: false
				});
			} else {
				tick.label = label;
			}
		}

		me._ticks = ticks;

		// Tick Rotation
		me.beforeCalculateTickRotation();
		me.calculateTickRotation();
		me.afterCalculateTickRotation();
		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;

	},
	afterUpdate: function() {
		helpers$1.callback(this.options.afterUpdate, [this]);
	},

	//

	beforeSetDimensions: function() {
		helpers$1.callback(this.options.beforeSetDimensions, [this]);
	},
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;
	},
	afterSetDimensions: function() {
		helpers$1.callback(this.options.afterSetDimensions, [this]);
	},

	// Data limits
	beforeDataLimits: function() {
		helpers$1.callback(this.options.beforeDataLimits, [this]);
	},
	determineDataLimits: helpers$1.noop,
	afterDataLimits: function() {
		helpers$1.callback(this.options.afterDataLimits, [this]);
	},

	//
	beforeBuildTicks: function() {
		helpers$1.callback(this.options.beforeBuildTicks, [this]);
	},
	buildTicks: helpers$1.noop,
	afterBuildTicks: function(ticks) {
		var me = this;
		// ticks is empty for old axis implementations here
		if (helpers$1.isArray(ticks) && ticks.length) {
			return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
		}
		// Support old implementations (that modified `this.ticks` directly in buildTicks)
		me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
		return ticks;
	},

	beforeTickToLabelConversion: function() {
		helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
	},
	convertTicksToLabels: function() {
		var me = this;
		// Convert ticks to strings
		var tickOpts = me.options.ticks;
		me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
	},
	afterTickToLabelConversion: function() {
		helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
	},

	//

	beforeCalculateTickRotation: function() {
		helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
	},
	calculateTickRotation: function() {
		var me = this;
		var context = me.ctx;
		var tickOpts = me.options.ticks;
		var labels = labelsFromTicks(me._ticks);

		// Get the width of each grid by calculating the difference
		// between x offsets between 0 and 1.
		var tickFont = helpers$1.options._parseFont(tickOpts);
		context.font = tickFont.string;

		var labelRotation = tickOpts.minRotation || 0;

		if (labels.length && me.options.display && me.isHorizontal()) {
			var originalLabelWidth = helpers$1.longestText(context, tickFont.string, labels, me.longestTextCache);
			var labelWidth = originalLabelWidth;
			var cosRotation, sinRotation;

			// Allow 3 pixels x2 padding either side for label readability
			var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

			// Max label rotation can be set or default to 90 - also act as a loop counter
			while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
				var angleRadians = helpers$1.toRadians(labelRotation);
				cosRotation = Math.cos(angleRadians);
				sinRotation = Math.sin(angleRadians);

				if (sinRotation * originalLabelWidth > me.maxHeight) {
					// go back one step
					labelRotation--;
					break;
				}

				labelRotation++;
				labelWidth = cosRotation * originalLabelWidth;
			}
		}

		me.labelRotation = labelRotation;
	},
	afterCalculateTickRotation: function() {
		helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
	},

	//

	beforeFit: function() {
		helpers$1.callback(this.options.beforeFit, [this]);
	},
	fit: function() {
		var me = this;
		// Reset
		var minSize = me.minSize = {
			width: 0,
			height: 0
		};

		var labels = labelsFromTicks(me._ticks);

		var opts = me.options;
		var tickOpts = opts.ticks;
		var scaleLabelOpts = opts.scaleLabel;
		var gridLineOpts = opts.gridLines;
		var display = me._isVisible();
		var position = opts.position;
		var isHorizontal = me.isHorizontal();

		var parseFont = helpers$1.options._parseFont;
		var tickFont = parseFont(tickOpts);
		var tickMarkLength = opts.gridLines.tickMarkLength;

		// Width
		if (isHorizontal) {
			// subtract the margins to line up with the chartArea if we are a full width scale
			minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
		} else {
			minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
		}

		// height
		if (isHorizontal) {
			minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
		} else {
			minSize.height = me.maxHeight; // fill all the height
		}

		// Are we showing a title for the scale?
		if (scaleLabelOpts.display && display) {
			var scaleLabelFont = parseFont(scaleLabelOpts);
			var scaleLabelPadding = helpers$1.options.toPadding(scaleLabelOpts.padding);
			var deltaHeight = scaleLabelFont.lineHeight + scaleLabelPadding.height;

			if (isHorizontal) {
				minSize.height += deltaHeight;
			} else {
				minSize.width += deltaHeight;
			}
		}

		// Don't bother fitting the ticks if we are not showing the labels
		if (tickOpts.display && display) {
			var largestTextWidth = helpers$1.longestText(me.ctx, tickFont.string, labels, me.longestTextCache);
			var tallestLabelHeightInLines = helpers$1.numberOfLabelLines(labels);
			var lineSpace = tickFont.size * 0.5;
			var tickPadding = me.options.ticks.padding;

			// Store max number of lines and widest label for _autoSkip
			me._maxLabelLines = tallestLabelHeightInLines;
			me.longestLabelWidth = largestTextWidth;

			if (isHorizontal) {
				var angleRadians = helpers$1.toRadians(me.labelRotation);
				var cosRotation = Math.cos(angleRadians);
				var sinRotation = Math.sin(angleRadians);

				// TODO - improve this calculation
				var labelHeight = (sinRotation * largestTextWidth)
					+ (tickFont.lineHeight * tallestLabelHeightInLines)
					+ lineSpace; // padding

				minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);

				me.ctx.font = tickFont.string;
				var firstLabelWidth = computeTextSize(me.ctx, labels[0], tickFont.string);
				var lastLabelWidth = computeTextSize(me.ctx, labels[labels.length - 1], tickFont.string);
				var offsetLeft = me.getPixelForTick(0) - me.left;
				var offsetRight = me.right - me.getPixelForTick(labels.length - 1);
				var paddingLeft, paddingRight;

				// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
				// which means that the right padding is dominated by the font height
				if (me.labelRotation !== 0) {
					paddingLeft = position === 'bottom' ? (cosRotation * firstLabelWidth) : (cosRotation * lineSpace);
					paddingRight = position === 'bottom' ? (cosRotation * lineSpace) : (cosRotation * lastLabelWidth);
				} else {
					paddingLeft = firstLabelWidth / 2;
					paddingRight = lastLabelWidth / 2;
				}
				me.paddingLeft = Math.max(paddingLeft - offsetLeft, 0) + 3; // add 3 px to move away from canvas edges
				me.paddingRight = Math.max(paddingRight - offsetRight, 0) + 3;
			} else {
				// A vertical axis is more constrained by the width. Labels are the
				// dominant factor here, so get that length first and account for padding
				if (tickOpts.mirror) {
					largestTextWidth = 0;
				} else {
					// use lineSpace for consistency with horizontal axis
					// tickPadding is not implemented for horizontal
					largestTextWidth += tickPadding + lineSpace;
				}

				minSize.width = Math.min(me.maxWidth, minSize.width + largestTextWidth);

				me.paddingTop = tickFont.size / 2;
				me.paddingBottom = tickFont.size / 2;
			}
		}

		me.handleMargins();

		me.width = minSize.width;
		me.height = minSize.height;
	},

	/**
	 * Handle margins and padding interactions
	 * @private
	 */
	handleMargins: function() {
		var me = this;
		if (me.margins) {
			me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
			me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
			me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
			me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
		}
	},

	afterFit: function() {
		helpers$1.callback(this.options.afterFit, [this]);
	},

	// Shared Methods
	isHorizontal: function() {
		return this.options.position === 'top' || this.options.position === 'bottom';
	},
	isFullWidth: function() {
		return (this.options.fullWidth);
	},

	// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
	getRightValue: function(rawValue) {
		// Null and undefined values first
		if (helpers$1.isNullOrUndef(rawValue)) {
			return NaN;
		}
		// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
		if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
			return NaN;
		}
		// If it is in fact an object, dive in one more level
		if (rawValue) {
			if (this.isHorizontal()) {
				if (rawValue.x !== undefined) {
					return this.getRightValue(rawValue.x);
				}
			} else if (rawValue.y !== undefined) {
				return this.getRightValue(rawValue.y);
			}
		}

		// Value is good, return it
		return rawValue;
	},

	/**
	 * Used to get the value to display in the tooltip for the data at the given index
	 * @param index
	 * @param datasetIndex
	 */
	getLabelForIndex: helpers$1.noop,

	/**
	 * Returns the location of the given data point. Value can either be an index or a numerical value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param value
	 * @param index
	 * @param datasetIndex
	 */
	getPixelForValue: helpers$1.noop,

	/**
	 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param pixel
	 */
	getValueForPixel: helpers$1.noop,

	/**
	 * Returns the location of the tick at the given index
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForTick: function(index) {
		var me = this;
		var offset = me.options.offset;
		if (me.isHorizontal()) {
			var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
			var tickWidth = innerWidth / Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
			var pixel = (tickWidth * index) + me.paddingLeft;

			if (offset) {
				pixel += tickWidth / 2;
			}

			var finalVal = me.left + pixel;
			finalVal += me.isFullWidth() ? me.margins.left : 0;
			return finalVal;
		}
		var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
		return me.top + (index * (innerHeight / (me._ticks.length - 1)));
	},

	/**
	 * Utility for getting the pixel location of a percentage of scale
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForDecimal: function(decimal) {
		var me = this;
		if (me.isHorizontal()) {
			var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
			var valueOffset = (innerWidth * decimal) + me.paddingLeft;

			var finalVal = me.left + valueOffset;
			finalVal += me.isFullWidth() ? me.margins.left : 0;
			return finalVal;
		}
		return me.top + (decimal * me.height);
	},

	/**
	 * Returns the pixel for the minimum chart value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getBasePixel: function() {
		return this.getPixelForValue(this.getBaseValue());
	},

	getBaseValue: function() {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0;
	},

	/**
	 * Returns a subset of ticks to be plotted to avoid overlapping labels.
	 * @private
	 */
	_autoSkip: function(ticks) {
		var me = this;
		var isHorizontal = me.isHorizontal();
		var optionTicks = me.options.ticks.minor;
		var tickCount = ticks.length;
		var skipRatio = false;
		var maxTicks = optionTicks.maxTicksLimit;

		// Total space needed to display all ticks. First and last ticks are
		// drawn as their center at end of axis, so tickCount-1
		var ticksLength = me._tickSize() * (tickCount - 1);

		// Axis length
		var axisLength = isHorizontal
			? me.width - (me.paddingLeft + me.paddingRight)
			: me.height - (me.paddingTop + me.PaddingBottom);

		var result = [];
		var i, tick;

		if (ticksLength > axisLength) {
			skipRatio = 1 + Math.floor(ticksLength / axisLength);
		}

		// if they defined a max number of optionTicks,
		// increase skipRatio until that number is met
		if (tickCount > maxTicks) {
			skipRatio = Math.max(skipRatio, 1 + Math.floor(tickCount / maxTicks));
		}

		for (i = 0; i < tickCount; i++) {
			tick = ticks[i];

			if (skipRatio > 1 && i % skipRatio > 0) {
				// leave tick in place but make sure it's not displayed (#4635)
				delete tick.label;
			}
			result.push(tick);
		}
		return result;
	},

	/**
	 * @private
	 */
	_tickSize: function() {
		var me = this;
		var isHorizontal = me.isHorizontal();
		var optionTicks = me.options.ticks.minor;

		// Calculate space needed by label in axis direction.
		var rot = helpers$1.toRadians(me.labelRotation);
		var cos = Math.abs(Math.cos(rot));
		var sin = Math.abs(Math.sin(rot));

		var padding = optionTicks.autoSkipPadding || 0;
		var w = (me.longestLabelWidth + padding) || 0;

		var tickFont = helpers$1.options._parseFont(optionTicks);
		var h = (me._maxLabelLines * tickFont.lineHeight + padding) || 0;

		// Calculate space needed for 1 tick in axis direction.
		return isHorizontal
			? h * cos > w * sin ? w / cos : h / sin
			: h * sin < w * cos ? h / cos : w / sin;
	},

	/**
	 * @private
	 */
	_isVisible: function() {
		var me = this;
		var chart = me.chart;
		var display = me.options.display;
		var i, ilen, meta;

		if (display !== 'auto') {
			return !!display;
		}

		// When 'auto', the scale is visible if at least one associated dataset is visible.
		for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				meta = chart.getDatasetMeta(i);
				if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
					return true;
				}
			}
		}

		return false;
	},

	/**
	 * Actually draw the scale on the canvas
	 * @param {object} chartArea - the area of the chart to draw full grid lines on
	 */
	draw: function(chartArea) {
		var me = this;
		var options = me.options;

		if (!me._isVisible()) {
			return;
		}

		var chart = me.chart;
		var context = me.ctx;
		var globalDefaults = core_defaults.global;
		var defaultFontColor = globalDefaults.defaultFontColor;
		var optionTicks = options.ticks.minor;
		var optionMajorTicks = options.ticks.major || optionTicks;
		var gridLines = options.gridLines;
		var scaleLabel = options.scaleLabel;
		var position = options.position;

		var isRotated = me.labelRotation !== 0;
		var isMirrored = optionTicks.mirror;
		var isHorizontal = me.isHorizontal();

		var parseFont = helpers$1.options._parseFont;
		var ticks = optionTicks.display && optionTicks.autoSkip ? me._autoSkip(me.getTicks()) : me.getTicks();
		var tickFontColor = valueOrDefault$9(optionTicks.fontColor, defaultFontColor);
		var tickFont = parseFont(optionTicks);
		var lineHeight = tickFont.lineHeight;
		var majorTickFontColor = valueOrDefault$9(optionMajorTicks.fontColor, defaultFontColor);
		var majorTickFont = parseFont(optionMajorTicks);
		var tickPadding = optionTicks.padding;
		var labelOffset = optionTicks.labelOffset;

		var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;

		var scaleLabelFontColor = valueOrDefault$9(scaleLabel.fontColor, defaultFontColor);
		var scaleLabelFont = parseFont(scaleLabel);
		var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
		var labelRotationRadians = helpers$1.toRadians(me.labelRotation);

		var itemsToDraw = [];

		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		var alignPixel = helpers$1._alignPixel;
		var borderValue, tickStart, tickEnd;

		if (position === 'top') {
			borderValue = alignPixel(chart, me.bottom, axisWidth);
			tickStart = me.bottom - tl;
			tickEnd = borderValue - axisWidth / 2;
		} else if (position === 'bottom') {
			borderValue = alignPixel(chart, me.top, axisWidth);
			tickStart = borderValue + axisWidth / 2;
			tickEnd = me.top + tl;
		} else if (position === 'left') {
			borderValue = alignPixel(chart, me.right, axisWidth);
			tickStart = me.right - tl;
			tickEnd = borderValue - axisWidth / 2;
		} else {
			borderValue = alignPixel(chart, me.left, axisWidth);
			tickStart = borderValue + axisWidth / 2;
			tickEnd = me.left + tl;
		}

		var epsilon = 0.0000001; // 0.0000001 is margin in pixels for Accumulated error.

		helpers$1.each(ticks, function(tick, index) {
			// autoskipper skipped this tick (#4635)
			if (helpers$1.isNullOrUndef(tick.label)) {
				return;
			}

			var label = tick.label;
			var lineWidth, lineColor, borderDash, borderDashOffset;
			if (index === me.zeroLineIndex && options.offset === gridLines.offsetGridLines) {
				// Draw the first index specially
				lineWidth = gridLines.zeroLineWidth;
				lineColor = gridLines.zeroLineColor;
				borderDash = gridLines.zeroLineBorderDash || [];
				borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
			} else {
				lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, index);
				lineColor = valueAtIndexOrDefault(gridLines.color, index);
				borderDash = gridLines.borderDash || [];
				borderDashOffset = gridLines.borderDashOffset || 0.0;
			}

			// Common properties
			var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY, textOffset, textAlign;
			var labelCount = helpers$1.isArray(label) ? label.length : 1;
			var lineValue = getPixelForGridLine(me, index, gridLines.offsetGridLines);

			if (isHorizontal) {
				var labelYOffset = tl + tickPadding;

				if (lineValue < me.left - epsilon) {
					lineColor = 'rgba(0,0,0,0)';
				}

				tx1 = tx2 = x1 = x2 = alignPixel(chart, lineValue, lineWidth);
				ty1 = tickStart;
				ty2 = tickEnd;
				labelX = me.getPixelForTick(index) + labelOffset; // x values for optionTicks (need to consider offsetLabel option)

				if (position === 'top') {
					y1 = alignPixel(chart, chartArea.top, axisWidth) + axisWidth / 2;
					y2 = chartArea.bottom;
					textOffset = ((!isRotated ? 0.5 : 1) - labelCount) * lineHeight;
					textAlign = !isRotated ? 'center' : 'left';
					labelY = me.bottom - labelYOffset;
				} else {
					y1 = chartArea.top;
					y2 = alignPixel(chart, chartArea.bottom, axisWidth) - axisWidth / 2;
					textOffset = (!isRotated ? 0.5 : 0) * lineHeight;
					textAlign = !isRotated ? 'center' : 'right';
					labelY = me.top + labelYOffset;
				}
			} else {
				var labelXOffset = (isMirrored ? 0 : tl) + tickPadding;

				if (lineValue < me.top - epsilon) {
					lineColor = 'rgba(0,0,0,0)';
				}

				tx1 = tickStart;
				tx2 = tickEnd;
				ty1 = ty2 = y1 = y2 = alignPixel(chart, lineValue, lineWidth);
				labelY = me.getPixelForTick(index) + labelOffset;
				textOffset = (1 - labelCount) * lineHeight / 2;

				if (position === 'left') {
					x1 = alignPixel(chart, chartArea.left, axisWidth) + axisWidth / 2;
					x2 = chartArea.right;
					textAlign = isMirrored ? 'left' : 'right';
					labelX = me.right - labelXOffset;
				} else {
					x1 = chartArea.left;
					x2 = alignPixel(chart, chartArea.right, axisWidth) - axisWidth / 2;
					textAlign = isMirrored ? 'right' : 'left';
					labelX = me.left + labelXOffset;
				}
			}

			itemsToDraw.push({
				tx1: tx1,
				ty1: ty1,
				tx2: tx2,
				ty2: ty2,
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				labelX: labelX,
				labelY: labelY,
				glWidth: lineWidth,
				glColor: lineColor,
				glBorderDash: borderDash,
				glBorderDashOffset: borderDashOffset,
				rotation: -1 * labelRotationRadians,
				label: label,
				major: tick.major,
				textOffset: textOffset,
				textAlign: textAlign
			});
		});

		// Draw all of the tick labels, tick marks, and grid lines at the correct places
		helpers$1.each(itemsToDraw, function(itemToDraw) {
			var glWidth = itemToDraw.glWidth;
			var glColor = itemToDraw.glColor;

			if (gridLines.display && glWidth && glColor) {
				context.save();
				context.lineWidth = glWidth;
				context.strokeStyle = glColor;
				if (context.setLineDash) {
					context.setLineDash(itemToDraw.glBorderDash);
					context.lineDashOffset = itemToDraw.glBorderDashOffset;
				}

				context.beginPath();

				if (gridLines.drawTicks) {
					context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
					context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
				}

				if (gridLines.drawOnChartArea) {
					context.moveTo(itemToDraw.x1, itemToDraw.y1);
					context.lineTo(itemToDraw.x2, itemToDraw.y2);
				}

				context.stroke();
				context.restore();
			}

			if (optionTicks.display) {
				// Make sure we draw text in the correct color and font
				context.save();
				context.translate(itemToDraw.labelX, itemToDraw.labelY);
				context.rotate(itemToDraw.rotation);
				context.font = itemToDraw.major ? majorTickFont.string : tickFont.string;
				context.fillStyle = itemToDraw.major ? majorTickFontColor : tickFontColor;
				context.textBaseline = 'middle';
				context.textAlign = itemToDraw.textAlign;

				var label = itemToDraw.label;
				var y = itemToDraw.textOffset;
				if (helpers$1.isArray(label)) {
					for (var i = 0; i < label.length; ++i) {
						// We just make sure the multiline element is a string here..
						context.fillText('' + label[i], 0, y);
						y += lineHeight;
					}
				} else {
					context.fillText(label, 0, y);
				}
				context.restore();
			}
		});

		if (scaleLabel.display) {
			// Draw the scale label
			var scaleLabelX;
			var scaleLabelY;
			var rotation = 0;
			var halfLineHeight = scaleLabelFont.lineHeight / 2;

			if (isHorizontal) {
				scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
				scaleLabelY = position === 'bottom'
					? me.bottom - halfLineHeight - scaleLabelPadding.bottom
					: me.top + halfLineHeight + scaleLabelPadding.top;
			} else {
				var isLeft = position === 'left';
				scaleLabelX = isLeft
					? me.left + halfLineHeight + scaleLabelPadding.top
					: me.right - halfLineHeight - scaleLabelPadding.top;
				scaleLabelY = me.top + ((me.bottom - me.top) / 2);
				rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
			}

			context.save();
			context.translate(scaleLabelX, scaleLabelY);
			context.rotate(rotation);
			context.textAlign = 'center';
			context.textBaseline = 'middle';
			context.fillStyle = scaleLabelFontColor; // render in correct colour
			context.font = scaleLabelFont.string;
			context.fillText(scaleLabel.labelString, 0, 0);
			context.restore();
		}

		if (axisWidth) {
			// Draw the line at the edge of the axis
			var firstLineWidth = axisWidth;
			var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, ticks.length - 1, 0);
			var x1, x2, y1, y2;

			if (isHorizontal) {
				x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
				x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
				y1 = y2 = borderValue;
			} else {
				y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
				y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
				x1 = x2 = borderValue;
			}

			context.lineWidth = axisWidth;
			context.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
			context.beginPath();
			context.moveTo(x1, y1);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}
});

var defaultConfig = {
	position: 'bottom'
};

var scale_category = core_scale.extend({
	/**
	* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
	* else fall back to data.labels
	* @private
	*/
	getLabels: function() {
		var data = this.chart.data;
		return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
	},

	determineDataLimits: function() {
		var me = this;
		var labels = me.getLabels();
		me.minIndex = 0;
		me.maxIndex = labels.length - 1;
		var findIndex;

		if (me.options.ticks.min !== undefined) {
			// user specified min value
			findIndex = labels.indexOf(me.options.ticks.min);
			me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
		}

		if (me.options.ticks.max !== undefined) {
			// user specified max value
			findIndex = labels.indexOf(me.options.ticks.max);
			me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
		}

		me.min = labels[me.minIndex];
		me.max = labels[me.maxIndex];
	},

	buildTicks: function() {
		var me = this;
		var labels = me.getLabels();
		// If we are viewing some subset of labels, slice the original array
		me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var chart = me.chart;

		if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
			return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
		}

		return me.ticks[index - me.minIndex];
	},

	// Used to get data value locations.  Value can either be an index or a numerical value
	getPixelForValue: function(value, index) {
		var me = this;
		var offset = me.options.offset;
		// 1 is added because we need the length but we have the indexes
		var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - (offset ? 0 : 1)), 1);

		// If value is a data object, then index is the index in the data array,
		// not the index of the scale. We need to change that.
		var valueCategory;
		if (value !== undefined && value !== null) {
			valueCategory = me.isHorizontal() ? value.x : value.y;
		}
		if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
			var labels = me.getLabels();
			value = valueCategory || value;
			var idx = labels.indexOf(value);
			index = idx !== -1 ? idx : index;
		}

		if (me.isHorizontal()) {
			var valueWidth = me.width / offsetAmt;
			var widthOffset = (valueWidth * (index - me.minIndex));

			if (offset) {
				widthOffset += (valueWidth / 2);
			}

			return me.left + widthOffset;
		}
		var valueHeight = me.height / offsetAmt;
		var heightOffset = (valueHeight * (index - me.minIndex));

		if (offset) {
			heightOffset += (valueHeight / 2);
		}

		return me.top + heightOffset;
	},

	getPixelForTick: function(index) {
		return this.getPixelForValue(this.ticks[index], index + this.minIndex, null);
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var offset = me.options.offset;
		var value;
		var offsetAmt = Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
		var horz = me.isHorizontal();
		var valueDimension = (horz ? me.width : me.height) / offsetAmt;

		pixel -= horz ? me.left : me.top;

		if (offset) {
			pixel -= (valueDimension / 2);
		}

		if (pixel <= 0) {
			value = 0;
		} else {
			value = Math.round(pixel / valueDimension);
		}

		return value + me.minIndex;
	},

	getBasePixel: function() {
		return this.bottom;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults = defaultConfig;
scale_category._defaults = _defaults;

var noop = helpers$1.noop;
var isNullOrUndef = helpers$1.isNullOrUndef;

/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks(generationOptions, dataRange) {
	var ticks = [];
	// To get a "nice" value for the tick spacing, we will use the appropriately named
	// "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
	// for details.

	var MIN_SPACING = 1e-14;
	var stepSize = generationOptions.stepSize;
	var unit = stepSize || 1;
	var maxNumSpaces = generationOptions.maxTicks - 1;
	var min = generationOptions.min;
	var max = generationOptions.max;
	var precision = generationOptions.precision;
	var rmin = dataRange.min;
	var rmax = dataRange.max;
	var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
	var factor, niceMin, niceMax, numSpaces;

	// Beyond MIN_SPACING floating point numbers being to lose precision
	// such that we can't do the math necessary to generate ticks
	if (spacing < MIN_SPACING && isNullOrUndef(min) && isNullOrUndef(max)) {
		return [rmin, rmax];
	}

	numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
	if (numSpaces > maxNumSpaces) {
		// If the calculated num of spaces exceeds maxNumSpaces, recalculate it
		spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
	}

	if (stepSize || isNullOrUndef(precision)) {
		// If a precision is not specified, calculate factor based on spacing
		factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
	} else {
		// If the user specified a precision, round to that number of decimal places
		factor = Math.pow(10, precision);
		spacing = Math.ceil(spacing * factor) / factor;
	}

	niceMin = Math.floor(rmin / spacing) * spacing;
	niceMax = Math.ceil(rmax / spacing) * spacing;

	// If min, max and stepSize is set and they make an evenly spaced scale use it.
	if (stepSize) {
		// If very close to our whole number, use it.
		if (!isNullOrUndef(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
			niceMin = min;
		}
		if (!isNullOrUndef(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
			niceMax = max;
		}
	}

	numSpaces = (niceMax - niceMin) / spacing;
	// If very close to our rounded value, use it.
	if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
		numSpaces = Math.round(numSpaces);
	} else {
		numSpaces = Math.ceil(numSpaces);
	}

	niceMin = Math.round(niceMin * factor) / factor;
	niceMax = Math.round(niceMax * factor) / factor;
	ticks.push(isNullOrUndef(min) ? niceMin : min);
	for (var j = 1; j < numSpaces; ++j) {
		ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
	}
	ticks.push(isNullOrUndef(max) ? niceMax : max);

	return ticks;
}

var scale_linearbase = core_scale.extend({
	getRightValue: function(value) {
		if (typeof value === 'string') {
			return +value;
		}
		return core_scale.prototype.getRightValue.call(this, value);
	},

	handleTickRangeOptions: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
		// do nothing since that would make the chart weird. If the user really wants a weird chart
		// axis, they can manually override it
		if (tickOpts.beginAtZero) {
			var minSign = helpers$1.sign(me.min);
			var maxSign = helpers$1.sign(me.max);

			if (minSign < 0 && maxSign < 0) {
				// move the top up to 0
				me.max = 0;
			} else if (minSign > 0 && maxSign > 0) {
				// move the bottom down to 0
				me.min = 0;
			}
		}

		var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
		var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

		if (tickOpts.min !== undefined) {
			me.min = tickOpts.min;
		} else if (tickOpts.suggestedMin !== undefined) {
			if (me.min === null) {
				me.min = tickOpts.suggestedMin;
			} else {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
			}
		}

		if (tickOpts.max !== undefined) {
			me.max = tickOpts.max;
		} else if (tickOpts.suggestedMax !== undefined) {
			if (me.max === null) {
				me.max = tickOpts.suggestedMax;
			} else {
				me.max = Math.max(me.max, tickOpts.suggestedMax);
			}
		}

		if (setMin !== setMax) {
			// We set the min or the max but not both.
			// So ensure that our range is good
			// Inverted or 0 length range can happen when
			// ticks.min is set, and no datasets are visible
			if (me.min >= me.max) {
				if (setMin) {
					me.max = me.min + 1;
				} else {
					me.min = me.max - 1;
				}
			}
		}

		if (me.min === me.max) {
			me.max++;

			if (!tickOpts.beginAtZero) {
				me.min--;
			}
		}
	},

	getTickLimit: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var stepSize = tickOpts.stepSize;
		var maxTicksLimit = tickOpts.maxTicksLimit;
		var maxTicks;

		if (stepSize) {
			maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
		} else {
			maxTicks = me._computeTickLimit();
			maxTicksLimit = maxTicksLimit || 11;
		}

		if (maxTicksLimit) {
			maxTicks = Math.min(maxTicksLimit, maxTicks);
		}

		return maxTicks;
	},

	_computeTickLimit: function() {
		return Number.POSITIVE_INFINITY;
	},

	handleDirectionalChanges: noop,

	buildTicks: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// Figure out what the max number of ticks we can support it is based on the size of
		// the axis area. For now, we say that the minimum tick spacing in pixels must be 40
		// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
		// the graph. Make sure we always have at least 2 ticks
		var maxTicks = me.getTickLimit();
		maxTicks = Math.max(2, maxTicks);

		var numericGeneratorOptions = {
			maxTicks: maxTicks,
			min: tickOpts.min,
			max: tickOpts.max,
			precision: tickOpts.precision,
			stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
		};
		var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);

		me.handleDirectionalChanges();

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			ticks.reverse();

			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
	},

	convertTicksToLabels: function() {
		var me = this;
		me.ticksAsNumbers = me.ticks.slice();
		me.zeroLineIndex = me.ticks.indexOf(0);

		core_scale.prototype.convertTicksToLabels.call(me);
	}
});

var defaultConfig$1 = {
	position: 'left',
	ticks: {
		callback: core_ticks.formatters.linear
	}
};

var scale_linear = scale_linearbase.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var data = chart.data;
		var datasets = data.datasets;
		var isHorizontal = me.isHorizontal();
		var DEFAULT_MIN = 0;
		var DEFAULT_MAX = 1;

		function IDMatches(meta) {
			return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
		}

		// First Calculate the range
		me.min = null;
		me.max = null;

		var hasStacks = opts.stacked;
		if (hasStacks === undefined) {
			helpers$1.each(datasets, function(dataset, datasetIndex) {
				if (hasStacks) {
					return;
				}

				var meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
					meta.stack !== undefined) {
					hasStacks = true;
				}
			});
		}

		if (opts.stacked || hasStacks) {
			var valuesPerStack = {};

			helpers$1.each(datasets, function(dataset, datasetIndex) {
				var meta = chart.getDatasetMeta(datasetIndex);
				var key = [
					meta.type,
					// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
					((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
					meta.stack
				].join('.');

				if (valuesPerStack[key] === undefined) {
					valuesPerStack[key] = {
						positiveValues: [],
						negativeValues: []
					};
				}

				// Store these per type
				var positiveValues = valuesPerStack[key].positiveValues;
				var negativeValues = valuesPerStack[key].negativeValues;

				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					helpers$1.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						if (isNaN(value) || meta.data[index].hidden) {
							return;
						}

						positiveValues[index] = positiveValues[index] || 0;
						negativeValues[index] = negativeValues[index] || 0;

						if (opts.relativePoints) {
							positiveValues[index] = 100;
						} else if (value < 0) {
							negativeValues[index] += value;
						} else {
							positiveValues[index] += value;
						}
					});
				}
			});

			helpers$1.each(valuesPerStack, function(valuesForType) {
				var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
				var minVal = helpers$1.min(values);
				var maxVal = helpers$1.max(values);
				me.min = me.min === null ? minVal : Math.min(me.min, minVal);
				me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
			});

		} else {
			helpers$1.each(datasets, function(dataset, datasetIndex) {
				var meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					helpers$1.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						if (isNaN(value) || meta.data[index].hidden) {
							return;
						}

						if (me.min === null) {
							me.min = value;
						} else if (value < me.min) {
							me.min = value;
						}

						if (me.max === null) {
							me.max = value;
						} else if (value > me.max) {
							me.max = value;
						}
					});
				}
			});
		}

		me.min = isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
		me.max = isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		this.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		var me = this;
		var tickFont;

		if (me.isHorizontal()) {
			return Math.ceil(me.width / 40);
		}
		tickFont = helpers$1.options._parseFont(me.options.ticks);
		return Math.ceil(me.height / tickFont.lineHeight);
	},

	// Called after the ticks are built. We need
	handleDirectionalChanges: function() {
		if (!this.isHorizontal()) {
			// We are in a vertical orientation. The top value is the highest. So reverse the array
			this.ticks.reverse();
		}
	},

	getLabelForIndex: function(index, datasetIndex) {
		return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
	},

	// Utils
	getPixelForValue: function(value) {
		// This must be called after fit has been run so that
		// this.left, this.top, this.right, and this.bottom have been defined
		var me = this;
		var start = me.start;

		var rightValue = +me.getRightValue(value);
		var pixel;
		var range = me.end - start;

		if (me.isHorizontal()) {
			pixel = me.left + (me.width / range * (rightValue - start));
		} else {
			pixel = me.bottom - (me.height / range * (rightValue - start));
		}
		return pixel;
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var isHorizontal = me.isHorizontal();
		var innerDimension = isHorizontal ? me.width : me.height;
		var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
		return me.start + ((me.end - me.start) * offset);
	},

	getPixelForTick: function(index) {
		return this.getPixelForValue(this.ticksAsNumbers[index]);
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$1 = defaultConfig$1;
scale_linear._defaults = _defaults$1;

var valueOrDefault$a = helpers$1.valueOrDefault;

/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks$1(generationOptions, dataRange) {
	var ticks = [];

	var tickVal = valueOrDefault$a(generationOptions.min, Math.pow(10, Math.floor(helpers$1.log10(dataRange.min))));

	var endExp = Math.floor(helpers$1.log10(dataRange.max));
	var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
	var exp, significand;

	if (tickVal === 0) {
		exp = Math.floor(helpers$1.log10(dataRange.minNotZero));
		significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

		ticks.push(tickVal);
		tickVal = significand * Math.pow(10, exp);
	} else {
		exp = Math.floor(helpers$1.log10(tickVal));
		significand = Math.floor(tickVal / Math.pow(10, exp));
	}
	var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

	do {
		ticks.push(tickVal);

		++significand;
		if (significand === 10) {
			significand = 1;
			++exp;
			precision = exp >= 0 ? 1 : precision;
		}

		tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
	} while (exp < endExp || (exp === endExp && significand < endSignificand));

	var lastTick = valueOrDefault$a(generationOptions.max, tickVal);
	ticks.push(lastTick);

	return ticks;
}

var defaultConfig$2 = {
	position: 'left',

	// label settings
	ticks: {
		callback: core_ticks.formatters.logarithmic
	}
};

// TODO(v3): change this to positiveOrDefault
function nonNegativeOrDefault(value, defaultValue) {
	return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
}

var scale_logarithmic = core_scale.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var data = chart.data;
		var datasets = data.datasets;
		var isHorizontal = me.isHorizontal();
		function IDMatches(meta) {
			return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
		}

		// Calculate Range
		me.min = null;
		me.max = null;
		me.minNotZero = null;

		var hasStacks = opts.stacked;
		if (hasStacks === undefined) {
			helpers$1.each(datasets, function(dataset, datasetIndex) {
				if (hasStacks) {
					return;
				}

				var meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
					meta.stack !== undefined) {
					hasStacks = true;
				}
			});
		}

		if (opts.stacked || hasStacks) {
			var valuesPerStack = {};

			helpers$1.each(datasets, function(dataset, datasetIndex) {
				var meta = chart.getDatasetMeta(datasetIndex);
				var key = [
					meta.type,
					// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
					((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
					meta.stack
				].join('.');

				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = [];
					}

					helpers$1.each(dataset.data, function(rawValue, index) {
						var values = valuesPerStack[key];
						var value = +me.getRightValue(rawValue);
						// invalid, hidden and negative values are ignored
						if (isNaN(value) || meta.data[index].hidden || value < 0) {
							return;
						}
						values[index] = values[index] || 0;
						values[index] += value;
					});
				}
			});

			helpers$1.each(valuesPerStack, function(valuesForType) {
				if (valuesForType.length > 0) {
					var minVal = helpers$1.min(valuesForType);
					var maxVal = helpers$1.max(valuesForType);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				}
			});

		} else {
			helpers$1.each(datasets, function(dataset, datasetIndex) {
				var meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					helpers$1.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						// invalid, hidden and negative values are ignored
						if (isNaN(value) || meta.data[index].hidden || value < 0) {
							return;
						}

						if (me.min === null) {
							me.min = value;
						} else if (value < me.min) {
							me.min = value;
						}

						if (me.max === null) {
							me.max = value;
						} else if (value > me.max) {
							me.max = value;
						}

						if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
							me.minNotZero = value;
						}
					});
				}
			});
		}

		// Common base implementation to handle ticks.min, ticks.max
		this.handleTickRangeOptions();
	},

	handleTickRangeOptions: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var DEFAULT_MIN = 1;
		var DEFAULT_MAX = 10;

		me.min = nonNegativeOrDefault(tickOpts.min, me.min);
		me.max = nonNegativeOrDefault(tickOpts.max, me.max);

		if (me.min === me.max) {
			if (me.min !== 0 && me.min !== null) {
				me.min = Math.pow(10, Math.floor(helpers$1.log10(me.min)) - 1);
				me.max = Math.pow(10, Math.floor(helpers$1.log10(me.max)) + 1);
			} else {
				me.min = DEFAULT_MIN;
				me.max = DEFAULT_MAX;
			}
		}
		if (me.min === null) {
			me.min = Math.pow(10, Math.floor(helpers$1.log10(me.max)) - 1);
		}
		if (me.max === null) {
			me.max = me.min !== 0
				? Math.pow(10, Math.floor(helpers$1.log10(me.min)) + 1)
				: DEFAULT_MAX;
		}
		if (me.minNotZero === null) {
			if (me.min > 0) {
				me.minNotZero = me.min;
			} else if (me.max < 1) {
				me.minNotZero = Math.pow(10, Math.floor(helpers$1.log10(me.max)));
			} else {
				me.minNotZero = DEFAULT_MIN;
			}
		}
	},

	buildTicks: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var reverse = !me.isHorizontal();

		var generationOptions = {
			min: nonNegativeOrDefault(tickOpts.min),
			max: nonNegativeOrDefault(tickOpts.max)
		};
		var ticks = me.ticks = generateTicks$1(generationOptions, me);

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			reverse = !reverse;
			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
		if (reverse) {
			ticks.reverse();
		}
	},

	convertTicksToLabels: function() {
		this.tickValues = this.ticks.slice();

		core_scale.prototype.convertTicksToLabels.call(this);
	},

	// Get the correct tooltip label
	getLabelForIndex: function(index, datasetIndex) {
		return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
	},

	getPixelForTick: function(index) {
		return this.getPixelForValue(this.tickValues[index]);
	},

	/**
	 * Returns the value of the first tick.
	 * @param {number} value - The minimum not zero value.
	 * @return {number} The first tick value.
	 * @private
	 */
	_getFirstTickValue: function(value) {
		var exp = Math.floor(helpers$1.log10(value));
		var significand = Math.floor(value / Math.pow(10, exp));

		return significand * Math.pow(10, exp);
	},

	getPixelForValue: function(value) {
		var me = this;
		var tickOpts = me.options.ticks;
		var reverse = tickOpts.reverse;
		var log10 = helpers$1.log10;
		var firstTickValue = me._getFirstTickValue(me.minNotZero);
		var offset = 0;
		var innerDimension, pixel, start, end, sign;

		value = +me.getRightValue(value);
		if (reverse) {
			start = me.end;
			end = me.start;
			sign = -1;
		} else {
			start = me.start;
			end = me.end;
			sign = 1;
		}
		if (me.isHorizontal()) {
			innerDimension = me.width;
			pixel = reverse ? me.right : me.left;
		} else {
			innerDimension = me.height;
			sign *= -1; // invert, since the upper-left corner of the canvas is at pixel (0, 0)
			pixel = reverse ? me.top : me.bottom;
		}
		if (value !== start) {
			if (start === 0) { // include zero tick
				offset = valueOrDefault$a(tickOpts.fontSize, core_defaults.global.defaultFontSize);
				innerDimension -= offset;
				start = firstTickValue;
			}
			if (value !== 0) {
				offset += innerDimension / (log10(end) - log10(start)) * (log10(value) - log10(start));
			}
			pixel += sign * offset;
		}
		return pixel;
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var tickOpts = me.options.ticks;
		var reverse = tickOpts.reverse;
		var log10 = helpers$1.log10;
		var firstTickValue = me._getFirstTickValue(me.minNotZero);
		var innerDimension, start, end, value;

		if (reverse) {
			start = me.end;
			end = me.start;
		} else {
			start = me.start;
			end = me.end;
		}
		if (me.isHorizontal()) {
			innerDimension = me.width;
			value = reverse ? me.right - pixel : pixel - me.left;
		} else {
			innerDimension = me.height;
			value = reverse ? pixel - me.top : me.bottom - pixel;
		}
		if (value !== start) {
			if (start === 0) { // include zero tick
				var offset = valueOrDefault$a(tickOpts.fontSize, core_defaults.global.defaultFontSize);
				value -= offset;
				innerDimension -= offset;
				start = firstTickValue;
			}
			value *= log10(end) - log10(start);
			value /= innerDimension;
			value = Math.pow(10, log10(start) + value);
		}
		return value;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$2 = defaultConfig$2;
scale_logarithmic._defaults = _defaults$2;

var valueOrDefault$b = helpers$1.valueOrDefault;
var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
var resolve$7 = helpers$1.options.resolve;

var defaultConfig$3 = {
	display: true,

	// Boolean - Whether to animate scaling the chart from the centre
	animate: true,
	position: 'chartArea',

	angleLines: {
		display: true,
		color: 'rgba(0, 0, 0, 0.1)',
		lineWidth: 1,
		borderDash: [],
		borderDashOffset: 0.0
	},

	gridLines: {
		circular: false
	},

	// label settings
	ticks: {
		// Boolean - Show a backdrop to the scale label
		showLabelBackdrop: true,

		// String - The colour of the label backdrop
		backdropColor: 'rgba(255,255,255,0.75)',

		// Number - The backdrop padding above & below the label in pixels
		backdropPaddingY: 2,

		// Number - The backdrop padding to the side of the label in pixels
		backdropPaddingX: 2,

		callback: core_ticks.formatters.linear
	},

	pointLabels: {
		// Boolean - if true, show point labels
		display: true,

		// Number - Point label font size in pixels
		fontSize: 10,

		// Function - Used to convert point labels
		callback: function(label) {
			return label;
		}
	}
};

function getValueCount(scale) {
	var opts = scale.options;
	return opts.angleLines.display || opts.pointLabels.display ? scale.chart.data.labels.length : 0;
}

function getTickBackdropHeight(opts) {
	var tickOpts = opts.ticks;

	if (tickOpts.display && opts.display) {
		return valueOrDefault$b(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
	}
	return 0;
}

function measureLabelSize(ctx, lineHeight, label) {
	if (helpers$1.isArray(label)) {
		return {
			w: helpers$1.longestText(ctx, ctx.font, label),
			h: label.length * lineHeight
		};
	}

	return {
		w: ctx.measureText(label).width,
		h: lineHeight
	};
}

function determineLimits(angle, pos, size, min, max) {
	if (angle === min || angle === max) {
		return {
			start: pos - (size / 2),
			end: pos + (size / 2)
		};
	} else if (angle < min || angle > max) {
		return {
			start: pos - size,
			end: pos
		};
	}

	return {
		start: pos,
		end: pos + size
	};
}

/**
 * Helper function to fit a radial linear scale with point labels
 */
function fitWithPointLabels(scale) {

	// Right, this is really confusing and there is a lot of maths going on here
	// The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
	//
	// Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
	//
	// Solution:
	//
	// We assume the radius of the polygon is half the size of the canvas at first
	// at each index we check if the text overlaps.
	//
	// Where it does, we store that angle and that index.
	//
	// After finding the largest index and angle we calculate how much we need to remove
	// from the shape radius to move the point inwards by that x.
	//
	// We average the left and right distances to get the maximum shape radius that can fit in the box
	// along with labels.
	//
	// Once we have that, we can find the centre point for the chart, by taking the x text protrusion
	// on each side, removing that from the size, halving it and adding the left x protrusion width.
	//
	// This will mean we have a shape fitted to the canvas, as large as it can be with the labels
	// and position it in the most space efficient manner
	//
	// https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif

	var plFont = helpers$1.options._parseFont(scale.options.pointLabels);

	// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
	// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
	var furthestLimits = {
		l: 0,
		r: scale.width,
		t: 0,
		b: scale.height - scale.paddingTop
	};
	var furthestAngles = {};
	var i, textSize, pointPosition;

	scale.ctx.font = plFont.string;
	scale._pointLabelSizes = [];

	var valueCount = getValueCount(scale);
	for (i = 0; i < valueCount; i++) {
		pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
		textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i] || '');
		scale._pointLabelSizes[i] = textSize;

		// Add quarter circle to make degree 0 mean top of circle
		var angleRadians = scale.getIndexAngle(i);
		var angle = helpers$1.toDegrees(angleRadians) % 360;
		var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
		var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

		if (hLimits.start < furthestLimits.l) {
			furthestLimits.l = hLimits.start;
			furthestAngles.l = angleRadians;
		}

		if (hLimits.end > furthestLimits.r) {
			furthestLimits.r = hLimits.end;
			furthestAngles.r = angleRadians;
		}

		if (vLimits.start < furthestLimits.t) {
			furthestLimits.t = vLimits.start;
			furthestAngles.t = angleRadians;
		}

		if (vLimits.end > furthestLimits.b) {
			furthestLimits.b = vLimits.end;
			furthestAngles.b = angleRadians;
		}
	}

	scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
}

function getTextAlignForAngle(angle) {
	if (angle === 0 || angle === 180) {
		return 'center';
	} else if (angle < 180) {
		return 'left';
	}

	return 'right';
}

function fillText(ctx, text, position, lineHeight) {
	var y = position.y + lineHeight / 2;
	var i, ilen;

	if (helpers$1.isArray(text)) {
		for (i = 0, ilen = text.length; i < ilen; ++i) {
			ctx.fillText(text[i], position.x, y);
			y += lineHeight;
		}
	} else {
		ctx.fillText(text, position.x, y);
	}
}

function adjustPointPositionForLabelHeight(angle, textSize, position) {
	if (angle === 90 || angle === 270) {
		position.y -= (textSize.h / 2);
	} else if (angle > 270 || angle < 90) {
		position.y -= textSize.h;
	}
}

function drawPointLabels(scale) {
	var ctx = scale.ctx;
	var opts = scale.options;
	var angleLineOpts = opts.angleLines;
	var gridLineOpts = opts.gridLines;
	var pointLabelOpts = opts.pointLabels;
	var lineWidth = valueOrDefault$b(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
	var lineColor = valueOrDefault$b(angleLineOpts.color, gridLineOpts.color);
	var tickBackdropHeight = getTickBackdropHeight(opts);

	ctx.save();
	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = lineColor;
	if (ctx.setLineDash) {
		ctx.setLineDash(resolve$7([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
		ctx.lineDashOffset = resolve$7([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
	}

	var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

	// Point Label Font
	var plFont = helpers$1.options._parseFont(pointLabelOpts);

	ctx.font = plFont.string;
	ctx.textBaseline = 'middle';

	for (var i = getValueCount(scale) - 1; i >= 0; i--) {
		if (angleLineOpts.display && lineWidth && lineColor) {
			var outerPosition = scale.getPointPosition(i, outerDistance);
			ctx.beginPath();
			ctx.moveTo(scale.xCenter, scale.yCenter);
			ctx.lineTo(outerPosition.x, outerPosition.y);
			ctx.stroke();
		}

		if (pointLabelOpts.display) {
			// Extra pixels out for some label spacing
			var extra = (i === 0 ? tickBackdropHeight / 2 : 0);
			var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5);

			// Keep this in loop since we may support array properties here
			var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
			ctx.fillStyle = pointLabelFontColor;

			var angleRadians = scale.getIndexAngle(i);
			var angle = helpers$1.toDegrees(angleRadians);
			ctx.textAlign = getTextAlignForAngle(angle);
			adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
			fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.lineHeight);
		}
	}
	ctx.restore();
}

function drawRadiusLine(scale, gridLineOpts, radius, index) {
	var ctx = scale.ctx;
	var circular = gridLineOpts.circular;
	var valueCount = getValueCount(scale);
	var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
	var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
	var pointPosition;

	if ((!circular && !valueCount) || !lineColor || !lineWidth) {
		return;
	}

	ctx.save();
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	if (ctx.setLineDash) {
		ctx.setLineDash(gridLineOpts.borderDash || []);
		ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
	}

	ctx.beginPath();
	if (circular) {
		// Draw circular arcs between the points
		ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
	} else {
		// Draw straight lines connecting each index
		pointPosition = scale.getPointPosition(0, radius);
		ctx.moveTo(pointPosition.x, pointPosition.y);

		for (var i = 1; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, radius);
			ctx.lineTo(pointPosition.x, pointPosition.y);
		}
	}
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}

function numberOrZero(param) {
	return helpers$1.isNumber(param) ? param : 0;
}

var scale_radialLinear = scale_linearbase.extend({
	setDimensions: function() {
		var me = this;

		// Set the unconstrained dimension before label rotation
		me.width = me.maxWidth;
		me.height = me.maxHeight;
		me.paddingTop = getTickBackdropHeight(me.options) / 2;
		me.xCenter = Math.floor(me.width / 2);
		me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
		me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;

		helpers$1.each(chart.data.datasets, function(dataset, datasetIndex) {
			if (chart.isDatasetVisible(datasetIndex)) {
				var meta = chart.getDatasetMeta(datasetIndex);

				helpers$1.each(dataset.data, function(rawValue, index) {
					var value = +me.getRightValue(rawValue);
					if (isNaN(value) || meta.data[index].hidden) {
						return;
					}

					min = Math.min(value, min);
					max = Math.max(value, max);
				});
			}
		});

		me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
		me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		me.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
	},

	convertTicksToLabels: function() {
		var me = this;

		scale_linearbase.prototype.convertTicksToLabels.call(me);

		// Point labels
		me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
	},

	getLabelForIndex: function(index, datasetIndex) {
		return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
	},

	fit: function() {
		var me = this;
		var opts = me.options;

		if (opts.display && opts.pointLabels.display) {
			fitWithPointLabels(me);
		} else {
			me.setCenterPoint(0, 0, 0, 0);
		}
	},

	/**
	 * Set radius reductions and determine new radius and center point
	 * @private
	 */
	setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
		var me = this;
		var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
		var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
		var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
		var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);

		radiusReductionLeft = numberOrZero(radiusReductionLeft);
		radiusReductionRight = numberOrZero(radiusReductionRight);
		radiusReductionTop = numberOrZero(radiusReductionTop);
		radiusReductionBottom = numberOrZero(radiusReductionBottom);

		me.drawingArea = Math.min(
			Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
			Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
		me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
	},

	setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
		var me = this;
		var maxRight = me.width - rightMovement - me.drawingArea;
		var maxLeft = leftMovement + me.drawingArea;
		var maxTop = topMovement + me.drawingArea;
		var maxBottom = (me.height - me.paddingTop) - bottomMovement - me.drawingArea;

		me.xCenter = Math.floor(((maxLeft + maxRight) / 2) + me.left);
		me.yCenter = Math.floor(((maxTop + maxBottom) / 2) + me.top + me.paddingTop);
	},

	getIndexAngle: function(index) {
		var angleMultiplier = (Math.PI * 2) / getValueCount(this);
		var startAngle = this.chart.options && this.chart.options.startAngle ?
			this.chart.options.startAngle :
			0;

		var startAngleRadians = startAngle * Math.PI * 2 / 360;

		// Start from the top instead of right, so remove a quarter of the circle
		return index * angleMultiplier + startAngleRadians;
	},

	getDistanceFromCenterForValue: function(value) {
		var me = this;

		if (value === null) {
			return 0; // null always in center
		}

		// Take into account half font size + the yPadding of the top value
		var scalingFactor = me.drawingArea / (me.max - me.min);
		if (me.options.ticks.reverse) {
			return (me.max - value) * scalingFactor;
		}
		return (value - me.min) * scalingFactor;
	},

	getPointPosition: function(index, distanceFromCenter) {
		var me = this;
		var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
		return {
			x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
			y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
		};
	},

	getPointPositionForValue: function(index, value) {
		return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
	},

	getBasePosition: function() {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.getPointPositionForValue(0,
			me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0);
	},

	draw: function() {
		var me = this;
		var opts = me.options;
		var gridLineOpts = opts.gridLines;
		var tickOpts = opts.ticks;

		if (opts.display) {
			var ctx = me.ctx;
			var startAngle = this.getIndexAngle(0);
			var tickFont = helpers$1.options._parseFont(tickOpts);

			if (opts.angleLines.display || opts.pointLabels.display) {
				drawPointLabels(me);
			}

			helpers$1.each(me.ticks, function(label, index) {
				// Don't draw a centre value (if it is minimum)
				if (index > 0 || tickOpts.reverse) {
					var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

					// Draw circular lines around the scale
					if (gridLineOpts.display && index !== 0) {
						drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
					}

					if (tickOpts.display) {
						var tickFontColor = valueOrDefault$b(tickOpts.fontColor, core_defaults.global.defaultFontColor);
						ctx.font = tickFont.string;

						ctx.save();
						ctx.translate(me.xCenter, me.yCenter);
						ctx.rotate(startAngle);

						if (tickOpts.showLabelBackdrop) {
							var labelWidth = ctx.measureText(label).width;
							ctx.fillStyle = tickOpts.backdropColor;
							ctx.fillRect(
								-labelWidth / 2 - tickOpts.backdropPaddingX,
								-yCenterOffset - tickFont.size / 2 - tickOpts.backdropPaddingY,
								labelWidth + tickOpts.backdropPaddingX * 2,
								tickFont.size + tickOpts.backdropPaddingY * 2
							);
						}

						ctx.textAlign = 'center';
						ctx.textBaseline = 'middle';
						ctx.fillStyle = tickFontColor;
						ctx.fillText(label, 0, -yCenterOffset);
						ctx.restore();
					}
				}
			});
		}
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$3 = defaultConfig$3;
scale_radialLinear._defaults = _defaults$3;

var valueOrDefault$c = helpers$1.valueOrDefault;

// Integer constants are from the ES6 spec.
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

var INTERVALS = {
	millisecond: {
		common: true,
		size: 1,
		steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
	},
	second: {
		common: true,
		size: 1000,
		steps: [1, 2, 5, 10, 15, 30]
	},
	minute: {
		common: true,
		size: 60000,
		steps: [1, 2, 5, 10, 15, 30]
	},
	hour: {
		common: true,
		size: 3600000,
		steps: [1, 2, 3, 6, 12]
	},
	day: {
		common: true,
		size: 86400000,
		steps: [1, 2, 5]
	},
	week: {
		common: false,
		size: 604800000,
		steps: [1, 2, 3, 4]
	},
	month: {
		common: true,
		size: 2.628e9,
		steps: [1, 2, 3]
	},
	quarter: {
		common: false,
		size: 7.884e9,
		steps: [1, 2, 3, 4]
	},
	year: {
		common: true,
		size: 3.154e10
	}
};

var UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
	return a - b;
}

function arrayUnique(items) {
	var hash = {};
	var out = [];
	var i, ilen, item;

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		item = items[i];
		if (!hash[item]) {
			hash[item] = true;
			out.push(item);
		}
	}

	return out;
}

/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function buildLookupTable(timestamps, min, max, distribution) {
	if (distribution === 'linear' || !timestamps.length) {
		return [
			{time: min, pos: 0},
			{time: max, pos: 1}
		];
	}

	var table = [];
	var items = [min];
	var i, ilen, prev, curr, next;

	for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
		curr = timestamps[i];
		if (curr > min && curr < max) {
			items.push(curr);
		}
	}

	items.push(max);

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		next = items[i + 1];
		prev = items[i - 1];
		curr = items[i];

		// only add points that breaks the scale linearity
		if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
			table.push({time: curr, pos: i / (ilen - 1)});
		}
	}

	return table;
}

// @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table, key, value) {
	var lo = 0;
	var hi = table.length - 1;
	var mid, i0, i1;

	while (lo >= 0 && lo <= hi) {
		mid = (lo + hi) >> 1;
		i0 = table[mid - 1] || null;
		i1 = table[mid];

		if (!i0) {
			// given value is outside table (before first item)
			return {lo: null, hi: i1};
		} else if (i1[key] < value) {
			lo = mid + 1;
		} else if (i0[key] > value) {
			hi = mid - 1;
		} else {
			return {lo: i0, hi: i1};
		}
	}

	// given value is outside table (after last item)
	return {lo: i1, hi: null};
}

/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function interpolate$1(table, skey, sval, tkey) {
	var range = lookup(table, skey, sval);

	// Note: the lookup table ALWAYS contains at least 2 items (min and max)
	var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
	var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;

	var span = next[skey] - prev[skey];
	var ratio = span ? (sval - prev[skey]) / span : 0;
	var offset = (next[tkey] - prev[tkey]) * ratio;

	return prev[tkey] + offset;
}

function toTimestamp(scale, input) {
	var adapter = scale._adapter;
	var options = scale.options.time;
	var parser = options.parser;
	var format = parser || options.format;
	var value = input;

	if (typeof parser === 'function') {
		value = parser(value);
	}

	// Only parse if its not a timestamp already
	if (!helpers$1.isFinite(value)) {
		value = typeof format === 'string'
			? adapter.parse(value, format)
			: adapter.parse(value);
	}

	if (value !== null) {
		return +value;
	}

	// Labels are in an incompatible format and no `parser` has been provided.
	// The user might still use the deprecated `format` option for parsing.
	if (!parser && typeof format === 'function') {
		value = format(input);

		// `format` could return something else than a timestamp, if so, parse it
		if (!helpers$1.isFinite(value)) {
			value = adapter.parse(value);
		}
	}

	return value;
}

function parse(scale, input) {
	if (helpers$1.isNullOrUndef(input)) {
		return null;
	}

	var options = scale.options.time;
	var value = toTimestamp(scale, scale.getRightValue(input));
	if (value === null) {
		return value;
	}

	if (options.round) {
		value = +scale._adapter.startOf(value, options.round);
	}

	return value;
}

/**
 * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
 * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
 */
function determineStepSize(min, max, unit, capacity) {
	var range = max - min;
	var interval = INTERVALS[unit];
	var milliseconds = interval.size;
	var steps = interval.steps;
	var i, ilen, factor;

	if (!steps) {
		return Math.ceil(range / (capacity * milliseconds));
	}

	for (i = 0, ilen = steps.length; i < ilen; ++i) {
		factor = steps[i];
		if (Math.ceil(range / (milliseconds * factor)) <= capacity) {
			break;
		}
	}

	return factor;
}

/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
	var ilen = UNITS.length;
	var i, interval, factor;

	for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
		interval = INTERVALS[UNITS[i]];
		factor = interval.steps ? interval.steps[interval.steps.length - 1] : MAX_INTEGER;

		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
			return UNITS[i];
		}
	}

	return UNITS[ilen - 1];
}

/**
 * Figures out what unit to format a set of ticks with
 */
function determineUnitForFormatting(scale, ticks, minUnit, min, max) {
	var ilen = UNITS.length;
	var i, unit;

	for (i = ilen - 1; i >= UNITS.indexOf(minUnit); i--) {
		unit = UNITS[i];
		if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= ticks.length) {
			return unit;
		}
	}

	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
	for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
		if (INTERVALS[UNITS[i]].common) {
			return UNITS[i];
		}
	}
}

/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function generate(scale, min, max, capacity) {
	var adapter = scale._adapter;
	var options = scale.options;
	var timeOpts = options.time;
	var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
	var major = determineMajorUnit(minor);
	var stepSize = valueOrDefault$c(timeOpts.stepSize, timeOpts.unitStepSize);
	var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
	var majorTicksEnabled = options.ticks.major.enabled;
	var interval = INTERVALS[minor];
	var first = min;
	var last = max;
	var ticks = [];
	var time;

	if (!stepSize) {
		stepSize = determineStepSize(min, max, minor, capacity);
	}

	// For 'week' unit, handle the first day of week option
	if (weekday) {
		first = +adapter.startOf(first, 'isoWeek', weekday);
		last = +adapter.startOf(last, 'isoWeek', weekday);
	}

	// Align first/last ticks on unit
	first = +adapter.startOf(first, weekday ? 'day' : minor);
	last = +adapter.startOf(last, weekday ? 'day' : minor);

	// Make sure that the last tick include max
	if (last < max) {
		last = +adapter.add(last, 1, minor);
	}

	time = first;

	if (majorTicksEnabled && major && !weekday && !timeOpts.round) {
		// Align the first tick on the previous `minor` unit aligned on the `major` unit:
		// we first aligned time on the previous `major` unit then add the number of full
		// stepSize there is between first and the previous major time.
		time = +adapter.startOf(time, major);
		time = +adapter.add(time, ~~((first - time) / (interval.size * stepSize)) * stepSize, minor);
	}

	for (; time < last; time = +adapter.add(time, stepSize, minor)) {
		ticks.push(+time);
	}

	ticks.push(+time);

	return ticks;
}

/**
 * Returns the start and end offsets from edges in the form of {start, end}
 * where each value is a relative width to the scale and ranges between 0 and 1.
 * They add extra margins on the both sides by scaling down the original scale.
 * Offsets are added when the `offset` option is true.
 */
function computeOffsets(table, ticks, min, max, options) {
	var start = 0;
	var end = 0;
	var first, last;

	if (options.offset && ticks.length) {
		if (!options.time.min) {
			first = interpolate$1(table, 'time', ticks[0], 'pos');
			if (ticks.length === 1) {
				start = 1 - first;
			} else {
				start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
			}
		}
		if (!options.time.max) {
			last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');
			if (ticks.length === 1) {
				end = last;
			} else {
				end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
			}
		}
	}

	return {start: start, end: end};
}

function ticksFromTimestamps(scale, values, majorUnit) {
	var ticks = [];
	var i, ilen, value, major;

	for (i = 0, ilen = values.length; i < ilen; ++i) {
		value = values[i];
		major = majorUnit ? value === +scale._adapter.startOf(value, majorUnit) : false;

		ticks.push({
			value: value,
			major: major
		});
	}

	return ticks;
}

var defaultConfig$4 = {
	position: 'bottom',

	/**
	 * Data distribution along the scale:
	 * - 'linear': data are spread according to their time (distances can vary),
	 * - 'series': data are spread at the same distance from each other.
	 * @see https://github.com/chartjs/Chart.js/pull/4507
	 * @since 2.7.0
	 */
	distribution: 'linear',

	/**
	 * Scale boundary strategy (bypassed by min/max time options)
	 * - `data`: make sure data are fully visible, ticks outside are removed
	 * - `ticks`: make sure ticks are fully visible, data outside are truncated
	 * @see https://github.com/chartjs/Chart.js/pull/4556
	 * @since 2.7.0
	 */
	bounds: 'data',

	adapters: {},
	time: {
		parser: false, // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
		format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from https://momentjs.com/docs/#/parsing/string-format/
		unit: false, // false == automatic or override with week, month, year, etc.
		round: false, // none, or override with week, month, year, etc.
		displayFormat: false, // DEPRECATED
		isoWeekday: false, // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
		minUnit: 'millisecond',
		displayFormats: {}
	},
	ticks: {
		autoSkip: false,

		/**
		 * Ticks generation input values:
		 * - 'auto': generates "optimal" ticks based on scale size and time options.
		 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
		 * - 'labels': generates ticks from user given `data.labels` values ONLY.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
		source: 'auto',

		major: {
			enabled: false
		}
	}
};

var scale_time = core_scale.extend({
	initialize: function() {
		this.mergeTicksOptions();
		core_scale.prototype.initialize.call(this);
	},

	update: function() {
		var me = this;
		var options = me.options;
		var time = options.time || (options.time = {});
		var adapter = me._adapter = new core_adapters._date(options.adapters.date);

		// DEPRECATIONS: output a message only one time per update
		if (time.format) {
			console.warn('options.time.format is deprecated and replaced by options.time.parser.');
		}

		// Backward compatibility: before introducing adapter, `displayFormats` was
		// supposed to contain *all* unit/string pairs but this can't be resolved
		// when loading the scale (adapters are loaded afterward), so let's populate
		// missing formats on update
		helpers$1.mergeIf(time.displayFormats, adapter.formats());

		return core_scale.prototype.update.apply(me, arguments);
	},

	/**
	 * Allows data to be referenced via 't' attribute
	 */
	getRightValue: function(rawValue) {
		if (rawValue && rawValue.t !== undefined) {
			rawValue = rawValue.t;
		}
		return core_scale.prototype.getRightValue.call(this, rawValue);
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var adapter = me._adapter;
		var timeOpts = me.options.time;
		var unit = timeOpts.unit || 'day';
		var min = MAX_INTEGER;
		var max = MIN_INTEGER;
		var timestamps = [];
		var datasets = [];
		var labels = [];
		var i, j, ilen, jlen, data, timestamp;
		var dataLabels = chart.data.labels || [];

		// Convert labels to timestamps
		for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
			labels.push(parse(me, dataLabels[i]));
		}

		// Convert data to timestamps
		for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				data = chart.data.datasets[i].data;

				// Let's consider that all data have the same format.
				if (helpers$1.isObject(data[0])) {
					datasets[i] = [];

					for (j = 0, jlen = data.length; j < jlen; ++j) {
						timestamp = parse(me, data[j]);
						timestamps.push(timestamp);
						datasets[i][j] = timestamp;
					}
				} else {
					for (j = 0, jlen = labels.length; j < jlen; ++j) {
						timestamps.push(labels[j]);
					}
					datasets[i] = labels.slice(0);
				}
			} else {
				datasets[i] = [];
			}
		}

		if (labels.length) {
			// Sort labels **after** data have been converted
			labels = arrayUnique(labels).sort(sorter);
			min = Math.min(min, labels[0]);
			max = Math.max(max, labels[labels.length - 1]);
		}

		if (timestamps.length) {
			timestamps = arrayUnique(timestamps).sort(sorter);
			min = Math.min(min, timestamps[0]);
			max = Math.max(max, timestamps[timestamps.length - 1]);
		}

		min = parse(me, timeOpts.min) || min;
		max = parse(me, timeOpts.max) || max;

		// In case there is no valid min/max, set limits based on unit time option
		min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
		max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max;

		// Make sure that max is strictly higher than min (required by the lookup table)
		me.min = Math.min(min, max);
		me.max = Math.max(min + 1, max);

		// PRIVATE
		me._horizontal = me.isHorizontal();
		me._table = [];
		me._timestamps = {
			data: timestamps,
			datasets: datasets,
			labels: labels
		};
	},

	buildTicks: function() {
		var me = this;
		var min = me.min;
		var max = me.max;
		var options = me.options;
		var timeOpts = options.time;
		var timestamps = [];
		var ticks = [];
		var i, ilen, timestamp;

		switch (options.ticks.source) {
		case 'data':
			timestamps = me._timestamps.data;
			break;
		case 'labels':
			timestamps = me._timestamps.labels;
			break;
		case 'auto':
		default:
			timestamps = generate(me, min, max, me.getLabelCapacity(min), options);
		}

		if (options.bounds === 'ticks' && timestamps.length) {
			min = timestamps[0];
			max = timestamps[timestamps.length - 1];
		}

		// Enforce limits with user min/max options
		min = parse(me, timeOpts.min) || min;
		max = parse(me, timeOpts.max) || max;

		// Remove ticks outside the min/max range
		for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
			timestamp = timestamps[i];
			if (timestamp >= min && timestamp <= max) {
				ticks.push(timestamp);
			}
		}

		me.min = min;
		me.max = max;

		// PRIVATE
		me._unit = timeOpts.unit || determineUnitForFormatting(me, ticks, timeOpts.minUnit, me.min, me.max);
		me._majorUnit = determineMajorUnit(me._unit);
		me._table = buildLookupTable(me._timestamps.data, min, max, options.distribution);
		me._offsets = computeOffsets(me._table, ticks, min, max, options);

		if (options.ticks.reverse) {
			ticks.reverse();
		}

		return ticksFromTimestamps(me, ticks, me._majorUnit);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var adapter = me._adapter;
		var data = me.chart.data;
		var timeOpts = me.options.time;
		var label = data.labels && index < data.labels.length ? data.labels[index] : '';
		var value = data.datasets[datasetIndex].data[index];

		if (helpers$1.isObject(value)) {
			label = me.getRightValue(value);
		}
		if (timeOpts.tooltipFormat) {
			return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
		}
		if (typeof label === 'string') {
			return label;
		}
		return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
	},

	/**
	 * Function to format an individual tick mark
	 * @private
	 */
	tickFormatFunction: function(time, index, ticks, format) {
		var me = this;
		var adapter = me._adapter;
		var options = me.options;
		var formats = options.time.displayFormats;
		var minorFormat = formats[me._unit];
		var majorUnit = me._majorUnit;
		var majorFormat = formats[majorUnit];
		var majorTime = +adapter.startOf(time, majorUnit);
		var majorTickOpts = options.ticks.major;
		var major = majorTickOpts.enabled && majorUnit && majorFormat && time === majorTime;
		var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
		var tickOpts = major ? majorTickOpts : options.ticks.minor;
		var formatter = valueOrDefault$c(tickOpts.callback, tickOpts.userCallback);

		return formatter ? formatter(label, index, ticks) : label;
	},

	convertTicksToLabels: function(ticks) {
		var labels = [];
		var i, ilen;

		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
		}

		return labels;
	},

	/**
	 * @private
	 */
	getPixelForOffset: function(time) {
		var me = this;
		var isReverse = me.options.ticks.reverse;
		var size = me._horizontal ? me.width : me.height;
		var start = me._horizontal ? isReverse ? me.right : me.left : isReverse ? me.bottom : me.top;
		var pos = interpolate$1(me._table, 'time', time, 'pos');
		var offset = size * (me._offsets.start + pos) / (me._offsets.start + 1 + me._offsets.end);

		return isReverse ? start - offset : start + offset;
	},

	getPixelForValue: function(value, index, datasetIndex) {
		var me = this;
		var time = null;

		if (index !== undefined && datasetIndex !== undefined) {
			time = me._timestamps.datasets[datasetIndex][index];
		}

		if (time === null) {
			time = parse(me, value);
		}

		if (time !== null) {
			return me.getPixelForOffset(time);
		}
	},

	getPixelForTick: function(index) {
		var ticks = this.getTicks();
		return index >= 0 && index < ticks.length ?
			this.getPixelForOffset(ticks[index].value) :
			null;
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var size = me._horizontal ? me.width : me.height;
		var start = me._horizontal ? me.left : me.top;
		var pos = (size ? (pixel - start) / size : 0) * (me._offsets.start + 1 + me._offsets.start) - me._offsets.end;
		var time = interpolate$1(me._table, 'pos', pos, 'time');

		// DEPRECATION, we should return time directly
		return me._adapter._create(time);
	},

	/**
	 * Crude approximation of what the label width might be
	 * @private
	 */
	getLabelWidth: function(label) {
		var me = this;
		var ticksOpts = me.options.ticks;
		var tickLabelWidth = me.ctx.measureText(label).width;
		var angle = helpers$1.toRadians(ticksOpts.maxRotation);
		var cosRotation = Math.cos(angle);
		var sinRotation = Math.sin(angle);
		var tickFontSize = valueOrDefault$c(ticksOpts.fontSize, core_defaults.global.defaultFontSize);

		return (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
	},

	/**
	 * @private
	 */
	getLabelCapacity: function(exampleTime) {
		var me = this;

		// pick the longest format (milliseconds) for guestimation
		var format = me.options.time.displayFormats.millisecond;
		var exampleLabel = me.tickFormatFunction(exampleTime, 0, [], format);
		var tickLabelWidth = me.getLabelWidth(exampleLabel);
		var innerWidth = me.isHorizontal() ? me.width : me.height;
		var capacity = Math.floor(innerWidth / tickLabelWidth);

		return capacity > 0 ? capacity : 1;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$4 = defaultConfig$4;
scale_time._defaults = _defaults$4;

var scales = {
	category: scale_category,
	linear: scale_linear,
	logarithmic: scale_logarithmic,
	radialLinear: scale_radialLinear,
	time: scale_time
};

var FORMATS = {
	datetime: 'MMM D, YYYY, h:mm:ss a',
	millisecond: 'h:mm:ss.SSS a',
	second: 'h:mm:ss a',
	minute: 'h:mm a',
	hour: 'hA',
	day: 'MMM D',
	week: 'll',
	month: 'MMM YYYY',
	quarter: '[Q]Q - YYYY',
	year: 'YYYY'
};

core_adapters._date.override(typeof moment === 'function' ? {
	_id: 'moment', // DEBUG ONLY

	formats: function() {
		return FORMATS;
	},

	parse: function(value, format) {
		if (typeof value === 'string' && typeof format === 'string') {
			value = moment(value, format);
		} else if (!(value instanceof moment)) {
			value = moment(value);
		}
		return value.isValid() ? value.valueOf() : null;
	},

	format: function(time, format) {
		return moment(time).format(format);
	},

	add: function(time, amount, unit) {
		return moment(time).add(amount, unit).valueOf();
	},

	diff: function(max, min, unit) {
		return moment.duration(moment(max).diff(moment(min))).as(unit);
	},

	startOf: function(time, unit, weekday) {
		time = moment(time);
		if (unit === 'isoWeek') {
			return time.isoWeekday(weekday).valueOf();
		}
		return time.startOf(unit).valueOf();
	},

	endOf: function(time, unit) {
		return moment(time).endOf(unit).valueOf();
	},

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility with scale.getValueForPixel().
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(time) {
		return moment(time);
	},
} : {});

core_defaults._set('global', {
	plugins: {
		filler: {
			propagate: true
		}
	}
});

var mappers = {
	dataset: function(source) {
		var index = source.fill;
		var chart = source.chart;
		var meta = chart.getDatasetMeta(index);
		var visible = meta && chart.isDatasetVisible(index);
		var points = (visible && meta.dataset._children) || [];
		var length = points.length || 0;

		return !length ? null : function(point, i) {
			return (i < length && points[i]._view) || null;
		};
	},

	boundary: function(source) {
		var boundary = source.boundary;
		var x = boundary ? boundary.x : null;
		var y = boundary ? boundary.y : null;

		return function(point) {
			return {
				x: x === null ? point.x : x,
				y: y === null ? point.y : y,
			};
		};
	}
};

// @todo if (fill[0] === '#')
function decodeFill(el, index, count) {
	var model = el._model || {};
	var fill = model.fill;
	var target;

	if (fill === undefined) {
		fill = !!model.backgroundColor;
	}

	if (fill === false || fill === null) {
		return false;
	}

	if (fill === true) {
		return 'origin';
	}

	target = parseFloat(fill, 10);
	if (isFinite(target) && Math.floor(target) === target) {
		if (fill[0] === '-' || fill[0] === '+') {
			target = index + target;
		}

		if (target === index || target < 0 || target >= count) {
			return false;
		}

		return target;
	}

	switch (fill) {
	// compatibility
	case 'bottom':
		return 'start';
	case 'top':
		return 'end';
	case 'zero':
		return 'origin';
	// supported boundaries
	case 'origin':
	case 'start':
	case 'end':
		return fill;
	// invalid fill values
	default:
		return false;
	}
}

function computeBoundary(source) {
	var model = source.el._model || {};
	var scale = source.el._scale || {};
	var fill = source.fill;
	var target = null;
	var horizontal;

	if (isFinite(fill)) {
		return null;
	}

	// Backward compatibility: until v3, we still need to support boundary values set on
	// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
	// controllers might still use it (e.g. the Smith chart).

	if (fill === 'start') {
		target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
	} else if (fill === 'end') {
		target = model.scaleTop === undefined ? scale.top : model.scaleTop;
	} else if (model.scaleZero !== undefined) {
		target = model.scaleZero;
	} else if (scale.getBasePosition) {
		target = scale.getBasePosition();
	} else if (scale.getBasePixel) {
		target = scale.getBasePixel();
	}

	if (target !== undefined && target !== null) {
		if (target.x !== undefined && target.y !== undefined) {
			return target;
		}

		if (helpers$1.isFinite(target)) {
			horizontal = scale.isHorizontal();
			return {
				x: horizontal ? target : null,
				y: horizontal ? null : target
			};
		}
	}

	return null;
}

function resolveTarget(sources, index, propagate) {
	var source = sources[index];
	var fill = source.fill;
	var visited = [index];
	var target;

	if (!propagate) {
		return fill;
	}

	while (fill !== false && visited.indexOf(fill) === -1) {
		if (!isFinite(fill)) {
			return fill;
		}

		target = sources[fill];
		if (!target) {
			return false;
		}

		if (target.visible) {
			return fill;
		}

		visited.push(fill);
		fill = target.fill;
	}

	return false;
}

function createMapper(source) {
	var fill = source.fill;
	var type = 'dataset';

	if (fill === false) {
		return null;
	}

	if (!isFinite(fill)) {
		type = 'boundary';
	}

	return mappers[type](source);
}

function isDrawable(point) {
	return point && !point.skip;
}

function drawArea(ctx, curve0, curve1, len0, len1) {
	var i;

	if (!len0 || !len1) {
		return;
	}

	// building first area curve (normal)
	ctx.moveTo(curve0[0].x, curve0[0].y);
	for (i = 1; i < len0; ++i) {
		helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
	}

	// joining the two area curves
	ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

	// building opposite area curve (reverse)
	for (i = len1 - 1; i > 0; --i) {
		helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
	}
}

function doFill(ctx, points, mapper, view, color, loop) {
	var count = points.length;
	var span = view.spanGaps;
	var curve0 = [];
	var curve1 = [];
	var len0 = 0;
	var len1 = 0;
	var i, ilen, index, p0, p1, d0, d1;

	ctx.beginPath();

	for (i = 0, ilen = (count + !!loop); i < ilen; ++i) {
		index = i % count;
		p0 = points[index]._view;
		p1 = mapper(p0, index, view);
		d0 = isDrawable(p0);
		d1 = isDrawable(p1);

		if (d0 && d1) {
			len0 = curve0.push(p0);
			len1 = curve1.push(p1);
		} else if (len0 && len1) {
			if (!span) {
				drawArea(ctx, curve0, curve1, len0, len1);
				len0 = len1 = 0;
				curve0 = [];
				curve1 = [];
			} else {
				if (d0) {
					curve0.push(p0);
				}
				if (d1) {
					curve1.push(p1);
				}
			}
		}
	}

	drawArea(ctx, curve0, curve1, len0, len1);

	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}

var plugin_filler = {
	id: 'filler',

	afterDatasetsUpdate: function(chart, options) {
		var count = (chart.data.datasets || []).length;
		var propagate = options.propagate;
		var sources = [];
		var meta, i, el, source;

		for (i = 0; i < count; ++i) {
			meta = chart.getDatasetMeta(i);
			el = meta.dataset;
			source = null;

			if (el && el._model && el instanceof elements.Line) {
				source = {
					visible: chart.isDatasetVisible(i),
					fill: decodeFill(el, i, count),
					chart: chart,
					el: el
				};
			}

			meta.$filler = source;
			sources.push(source);
		}

		for (i = 0; i < count; ++i) {
			source = sources[i];
			if (!source) {
				continue;
			}

			source.fill = resolveTarget(sources, i, propagate);
			source.boundary = computeBoundary(source);
			source.mapper = createMapper(source);
		}
	},

	beforeDatasetDraw: function(chart, args) {
		var meta = args.meta.$filler;
		if (!meta) {
			return;
		}

		var ctx = chart.ctx;
		var el = meta.el;
		var view = el._view;
		var points = el._children || [];
		var mapper = meta.mapper;
		var color = view.backgroundColor || core_defaults.global.defaultColor;

		if (mapper && color && points.length) {
			helpers$1.canvas.clipArea(ctx, chart.chartArea);
			doFill(ctx, points, mapper, view, color, el._loop);
			helpers$1.canvas.unclipArea(ctx);
		}
	}
};

var noop$1 = helpers$1.noop;
var valueOrDefault$d = helpers$1.valueOrDefault;

core_defaults._set('global', {
	legend: {
		display: true,
		position: 'top',
		fullWidth: true,
		reverse: false,
		weight: 1000,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,
		onLeave: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var data = chart.data;
				return helpers$1.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
					return {
						text: dataset.label,
						fillStyle: (!helpers$1.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
						hidden: !chart.isDatasetVisible(i),
						lineCap: dataset.borderCapStyle,
						lineDash: dataset.borderDash,
						lineDashOffset: dataset.borderDashOffset,
						lineJoin: dataset.borderJoinStyle,
						lineWidth: dataset.borderWidth,
						strokeStyle: dataset.borderColor,
						pointStyle: dataset.pointStyle,

						// Below is extra data used for toggling the datasets
						datasetIndex: i
					};
				}, this) : [];
			}
		}
	},

	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');
		for (var i = 0; i < chart.data.datasets.length; i++) {
			text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
			if (chart.data.datasets[i].label) {
				text.push(chart.data.datasets[i].label);
			}
			text.push('</li>');
		}
		text.push('</ul>');
		return text.join('');
	}
});

/**
 * Helper function to get the box width based on the usePointStyle option
 * @param {object} labelopts - the label options on the legend
 * @param {number} fontSize - the label font size
 * @return {number} width of the color box area
 */
function getBoxWidth(labelOpts, fontSize) {
	return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
		fontSize :
		labelOpts.boxWidth;
}

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Legend = core_element.extend({

	initialize: function(config) {
		helpers$1.extend(this, config);

		// Contains hit boxes for each dataset (in dataset order)
		this.legendHitBoxes = [];

		/**
 		 * @private
 		 */
		this._hoveredItem = null;

		// Are we in doughnut mode which has a different data type
		this.doughnutMode = false;
	},

	// These methods are ordered by lifecycle. Utilities then follow.
	// Any function defined here is inherited by all legend types.
	// Any function can be extended by the legend type

	beforeUpdate: noop$1,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;
	},
	afterUpdate: noop$1,

	//

	beforeSetDimensions: noop$1,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$1,

	//

	beforeBuildLabels: noop$1,
	buildLabels: function() {
		var me = this;
		var labelOpts = me.options.labels || {};
		var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

		if (labelOpts.filter) {
			legendItems = legendItems.filter(function(item) {
				return labelOpts.filter(item, me.chart.data);
			});
		}

		if (me.options.reverse) {
			legendItems.reverse();
		}

		me.legendItems = legendItems;
	},
	afterBuildLabels: noop$1,

	//

	beforeFit: noop$1,
	fit: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var display = opts.display;

		var ctx = me.ctx;

		var labelFont = helpers$1.options._parseFont(labelOpts);
		var fontSize = labelFont.size;

		// Reset hit boxes
		var hitboxes = me.legendHitBoxes = [];

		var minSize = me.minSize;
		var isHorizontal = me.isHorizontal();

		if (isHorizontal) {
			minSize.width = me.maxWidth; // fill all the width
			minSize.height = display ? 10 : 0;
		} else {
			minSize.width = display ? 10 : 0;
			minSize.height = me.maxHeight; // fill all the height
		}

		// Increase sizes here
		if (display) {
			ctx.font = labelFont.string;

			if (isHorizontal) {
				// Labels

				// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
				var lineWidths = me.lineWidths = [0];
				var totalHeight = 0;

				ctx.textAlign = 'left';
				ctx.textBaseline = 'top';

				helpers$1.each(me.legendItems, function(legendItem, i) {
					var boxWidth = getBoxWidth(labelOpts, fontSize);
					var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

					if (i === 0 || lineWidths[lineWidths.length - 1] + width + labelOpts.padding > minSize.width) {
						totalHeight += fontSize + labelOpts.padding;
						lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = labelOpts.padding;
					}

					// Store the hitbox width and height here. Final position will be updated in `draw`
					hitboxes[i] = {
						left: 0,
						top: 0,
						width: width,
						height: fontSize
					};

					lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
				});

				minSize.height += totalHeight;

			} else {
				var vPadding = labelOpts.padding;
				var columnWidths = me.columnWidths = [];
				var totalWidth = labelOpts.padding;
				var currentColWidth = 0;
				var currentColHeight = 0;
				var itemHeight = fontSize + vPadding;

				helpers$1.each(me.legendItems, function(legendItem, i) {
					var boxWidth = getBoxWidth(labelOpts, fontSize);
					var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

					// If too tall, go to new column
					if (i > 0 && currentColHeight + itemHeight > minSize.height - vPadding) {
						totalWidth += currentColWidth + labelOpts.padding;
						columnWidths.push(currentColWidth); // previous column width

						currentColWidth = 0;
						currentColHeight = 0;
					}

					// Get max width
					currentColWidth = Math.max(currentColWidth, itemWidth);
					currentColHeight += itemHeight;

					// Store the hitbox width and height here. Final position will be updated in `draw`
					hitboxes[i] = {
						left: 0,
						top: 0,
						width: itemWidth,
						height: fontSize
					};
				});

				totalWidth += currentColWidth;
				columnWidths.push(currentColWidth);
				minSize.width += totalWidth;
			}
		}

		me.width = minSize.width;
		me.height = minSize.height;
	},
	afterFit: noop$1,

	// Shared Methods
	isHorizontal: function() {
		return this.options.position === 'top' || this.options.position === 'bottom';
	},

	// Actually draw the legend on the canvas
	draw: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor;
		var lineDefault = globalDefaults.elements.line;
		var legendWidth = me.width;
		var lineWidths = me.lineWidths;

		if (opts.display) {
			var ctx = me.ctx;
			var fontColor = valueOrDefault$d(labelOpts.fontColor, globalDefaults.defaultFontColor);
			var labelFont = helpers$1.options._parseFont(labelOpts);
			var fontSize = labelFont.size;
			var cursor;

			// Canvas setup
			ctx.textAlign = 'left';
			ctx.textBaseline = 'middle';
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = fontColor; // for strikethrough effect
			ctx.fillStyle = fontColor; // render in correct colour
			ctx.font = labelFont.string;

			var boxWidth = getBoxWidth(labelOpts, fontSize);
			var hitboxes = me.legendHitBoxes;

			// current position
			var drawLegendBox = function(x, y, legendItem) {
				if (isNaN(boxWidth) || boxWidth <= 0) {
					return;
				}

				// Set the ctx for the box
				ctx.save();

				var lineWidth = valueOrDefault$d(legendItem.lineWidth, lineDefault.borderWidth);
				ctx.fillStyle = valueOrDefault$d(legendItem.fillStyle, defaultColor);
				ctx.lineCap = valueOrDefault$d(legendItem.lineCap, lineDefault.borderCapStyle);
				ctx.lineDashOffset = valueOrDefault$d(legendItem.lineDashOffset, lineDefault.borderDashOffset);
				ctx.lineJoin = valueOrDefault$d(legendItem.lineJoin, lineDefault.borderJoinStyle);
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = valueOrDefault$d(legendItem.strokeStyle, defaultColor);

				if (ctx.setLineDash) {
					// IE 9 and 10 do not support line dash
					ctx.setLineDash(valueOrDefault$d(legendItem.lineDash, lineDefault.borderDash));
				}

				if (opts.labels && opts.labels.usePointStyle) {
					// Recalculate x and y for drawPoint() because its expecting
					// x and y to be center of figure (instead of top left)
					var radius = boxWidth * Math.SQRT2 / 2;
					var centerX = x + boxWidth / 2;
					var centerY = y + fontSize / 2;

					// Draw pointStyle as legend symbol
					helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
				} else {
					// Draw box as legend symbol
					if (lineWidth !== 0) {
						ctx.strokeRect(x, y, boxWidth, fontSize);
					}
					ctx.fillRect(x, y, boxWidth, fontSize);
				}

				ctx.restore();
			};
			var fillText = function(x, y, legendItem, textWidth) {
				var halfFontSize = fontSize / 2;
				var xLeft = boxWidth + halfFontSize + x;
				var yMiddle = y + halfFontSize;

				ctx.fillText(legendItem.text, xLeft, yMiddle);

				if (legendItem.hidden) {
					// Strikethrough the text if hidden
					ctx.beginPath();
					ctx.lineWidth = 2;
					ctx.moveTo(xLeft, yMiddle);
					ctx.lineTo(xLeft + textWidth, yMiddle);
					ctx.stroke();
				}
			};

			// Horizontal
			var isHorizontal = me.isHorizontal();
			if (isHorizontal) {
				cursor = {
					x: me.left + ((legendWidth - lineWidths[0]) / 2) + labelOpts.padding,
					y: me.top + labelOpts.padding,
					line: 0
				};
			} else {
				cursor = {
					x: me.left + labelOpts.padding,
					y: me.top + labelOpts.padding,
					line: 0
				};
			}

			var itemHeight = fontSize + labelOpts.padding;
			helpers$1.each(me.legendItems, function(legendItem, i) {
				var textWidth = ctx.measureText(legendItem.text).width;
				var width = boxWidth + (fontSize / 2) + textWidth;
				var x = cursor.x;
				var y = cursor.y;

				// Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
				// instead of me.right and me.bottom because me.width and me.height
				// may have been changed since me.minSize was calculated
				if (isHorizontal) {
					if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
						y = cursor.y += itemHeight;
						cursor.line++;
						x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2) + labelOpts.padding;
					}
				} else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
					x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
					y = cursor.y = me.top + labelOpts.padding;
					cursor.line++;
				}

				drawLegendBox(x, y, legendItem);

				hitboxes[i].left = x;
				hitboxes[i].top = y;

				// Fill the actual label
				fillText(x, y, legendItem, textWidth);

				if (isHorizontal) {
					cursor.x += width + labelOpts.padding;
				} else {
					cursor.y += itemHeight;
				}

			});
		}
	},

	/**
	 * @private
	 */
	_getLegendItemAt: function(x, y) {
		var me = this;
		var i, hitBox, lh;

		if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
			// See if we are touching one of the dataset boxes
			lh = me.legendHitBoxes;
			for (i = 0; i < lh.length; ++i) {
				hitBox = lh[i];

				if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
					// Touching an element
					return me.legendItems[i];
				}
			}
		}

		return null;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 */
	handleEvent: function(e) {
		var me = this;
		var opts = me.options;
		var type = e.type === 'mouseup' ? 'click' : e.type;
		var hoveredItem;

		if (type === 'mousemove') {
			if (!opts.onHover && !opts.onLeave) {
				return;
			}
		} else if (type === 'click') {
			if (!opts.onClick) {
				return;
			}
		} else {
			return;
		}

		// Chart event already has relative position in it
		hoveredItem = me._getLegendItemAt(e.x, e.y);

		if (type === 'click') {
			if (hoveredItem && opts.onClick) {
				// use e.native for backwards compatibility
				opts.onClick.call(me, e.native, hoveredItem);
			}
		} else {
			if (opts.onLeave && hoveredItem !== me._hoveredItem) {
				if (me._hoveredItem) {
					opts.onLeave.call(me, e.native, me._hoveredItem);
				}
				me._hoveredItem = hoveredItem;
			}

			if (opts.onHover && hoveredItem) {
				// use e.native for backwards compatibility
				opts.onHover.call(me, e.native, hoveredItem);
			}
		}
	}
});

function createNewLegendAndAttach(chart, legendOpts) {
	var legend = new Legend({
		ctx: chart.ctx,
		options: legendOpts,
		chart: chart
	});

	core_layouts.configure(chart, legend, legendOpts);
	core_layouts.addBox(chart, legend);
	chart.legend = legend;
}

var plugin_legend = {
	id: 'legend',

	/**
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Legend,

	beforeInit: function(chart) {
		var legendOpts = chart.options.legend;

		if (legendOpts) {
			createNewLegendAndAttach(chart, legendOpts);
		}
	},

	beforeUpdate: function(chart) {
		var legendOpts = chart.options.legend;
		var legend = chart.legend;

		if (legendOpts) {
			helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

			if (legend) {
				core_layouts.configure(chart, legend, legendOpts);
				legend.options = legendOpts;
			} else {
				createNewLegendAndAttach(chart, legendOpts);
			}
		} else if (legend) {
			core_layouts.removeBox(chart, legend);
			delete chart.legend;
		}
	},

	afterEvent: function(chart, e) {
		var legend = chart.legend;
		if (legend) {
			legend.handleEvent(e);
		}
	}
};

var noop$2 = helpers$1.noop;

core_defaults._set('global', {
	title: {
		display: false,
		fontStyle: 'bold',
		fullWidth: true,
		padding: 10,
		position: 'top',
		text: '',
		weight: 2000         // by default greater than legend (1000) to be above
	}
});

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Title = core_element.extend({
	initialize: function(config) {
		var me = this;
		helpers$1.extend(me, config);

		// Contains hit boxes for each dataset (in dataset order)
		me.legendHitBoxes = [];
	},

	// These methods are ordered by lifecycle. Utilities then follow.

	beforeUpdate: noop$2,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;

	},
	afterUpdate: noop$2,

	//

	beforeSetDimensions: noop$2,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$2,

	//

	beforeBuildLabels: noop$2,
	buildLabels: noop$2,
	afterBuildLabels: noop$2,

	//

	beforeFit: noop$2,
	fit: function() {
		var me = this;
		var opts = me.options;
		var display = opts.display;
		var minSize = me.minSize;
		var lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
		var fontOpts = helpers$1.options._parseFont(opts);
		var textSize = display ? (lineCount * fontOpts.lineHeight) + (opts.padding * 2) : 0;

		if (me.isHorizontal()) {
			minSize.width = me.maxWidth; // fill all the width
			minSize.height = textSize;
		} else {
			minSize.width = textSize;
			minSize.height = me.maxHeight; // fill all the height
		}

		me.width = minSize.width;
		me.height = minSize.height;

	},
	afterFit: noop$2,

	// Shared Methods
	isHorizontal: function() {
		var pos = this.options.position;
		return pos === 'top' || pos === 'bottom';
	},

	// Actually draw the title block on the canvas
	draw: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;

		if (opts.display) {
			var fontOpts = helpers$1.options._parseFont(opts);
			var lineHeight = fontOpts.lineHeight;
			var offset = lineHeight / 2 + opts.padding;
			var rotation = 0;
			var top = me.top;
			var left = me.left;
			var bottom = me.bottom;
			var right = me.right;
			var maxWidth, titleX, titleY;

			ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour
			ctx.font = fontOpts.string;

			// Horizontal
			if (me.isHorizontal()) {
				titleX = left + ((right - left) / 2); // midpoint of the width
				titleY = top + offset;
				maxWidth = right - left;
			} else {
				titleX = opts.position === 'left' ? left + offset : right - offset;
				titleY = top + ((bottom - top) / 2);
				maxWidth = bottom - top;
				rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
			}

			ctx.save();
			ctx.translate(titleX, titleY);
			ctx.rotate(rotation);
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';

			var text = opts.text;
			if (helpers$1.isArray(text)) {
				var y = 0;
				for (var i = 0; i < text.length; ++i) {
					ctx.fillText(text[i], 0, y, maxWidth);
					y += lineHeight;
				}
			} else {
				ctx.fillText(text, 0, 0, maxWidth);
			}

			ctx.restore();
		}
	}
});

function createNewTitleBlockAndAttach(chart, titleOpts) {
	var title = new Title({
		ctx: chart.ctx,
		options: titleOpts,
		chart: chart
	});

	core_layouts.configure(chart, title, titleOpts);
	core_layouts.addBox(chart, title);
	chart.titleBlock = title;
}

var plugin_title = {
	id: 'title',

	/**
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Title,

	beforeInit: function(chart) {
		var titleOpts = chart.options.title;

		if (titleOpts) {
			createNewTitleBlockAndAttach(chart, titleOpts);
		}
	},

	beforeUpdate: function(chart) {
		var titleOpts = chart.options.title;
		var titleBlock = chart.titleBlock;

		if (titleOpts) {
			helpers$1.mergeIf(titleOpts, core_defaults.global.title);

			if (titleBlock) {
				core_layouts.configure(chart, titleBlock, titleOpts);
				titleBlock.options = titleOpts;
			} else {
				createNewTitleBlockAndAttach(chart, titleOpts);
			}
		} else if (titleBlock) {
			core_layouts.removeBox(chart, titleBlock);
			delete chart.titleBlock;
		}
	}
};

var plugins = {};
var filler = plugin_filler;
var legend = plugin_legend;
var title = plugin_title;
plugins.filler = filler;
plugins.legend = legend;
plugins.title = title;

/**
 * @namespace Chart
 */


core_controller.helpers = helpers$1;

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
core_helpers(core_controller);

core_controller._adapters = core_adapters;
core_controller.Animation = core_animation;
core_controller.animationService = core_animations;
core_controller.controllers = controllers;
core_controller.DatasetController = core_datasetController;
core_controller.defaults = core_defaults;
core_controller.Element = core_element;
core_controller.elements = elements;
core_controller.Interaction = core_interaction;
core_controller.layouts = core_layouts;
core_controller.platform = platform;
core_controller.plugins = core_plugins;
core_controller.Scale = core_scale;
core_controller.scaleService = core_scaleService;
core_controller.Ticks = core_ticks;
core_controller.Tooltip = core_tooltip;

// Register built-in scales

core_controller.helpers.each(scales, function(scale, type) {
	core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
});

// Load to register built-in adapters (as side effects)


// Loading built-in plugins

for (var k in plugins) {
	if (plugins.hasOwnProperty(k)) {
		core_controller.plugins.register(plugins[k]);
	}
}

core_controller.platform.initialize();

var src = core_controller;
if (typeof window !== 'undefined') {
	window.Chart = core_controller;
}

// DEPRECATIONS

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Chart
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
core_controller.Chart = core_controller;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Legend = plugins.legend._element;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Title = plugins.title._element;

/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.pluginService = core_controller.plugins;

/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */
core_controller.PluginBase = core_controller.Element.extend({});

/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
core_controller.canvasHelpers = core_controller.helpers.canvas;

/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.7.3
 * @todo remove at version 3
 * @private
 */
core_controller.layoutService = core_controller.layouts;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.LinearScaleBase
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
core_controller.LinearScaleBase = scale_linearbase;

/**
 * Provided for backward compatibility, instead we should create a new Chart
 * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 */
core_controller.helpers.each(
	[
		'Bar',
		'Bubble',
		'Doughnut',
		'Line',
		'PolarArea',
		'Radar',
		'Scatter'
	],
	function(klass) {
		core_controller[klass] = function(ctx, cfg) {
			return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
				type: klass.charAt(0).toLowerCase() + klass.slice(1)
			}));
		};
	}
);

return src;

})));

;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map
;
//# sourceMappingURL=scripts.js.map