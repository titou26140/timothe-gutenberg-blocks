(window.webpackJsonp_timothe_gutenberg_blocks=window.webpackJsonp_timothe_gutenberg_blocks||[]).push([[1],{4:function(e,t,o){}}]),function(e){function t(t){for(var n,u,i=t[0],l=t[1],p=t[2],b=0,f=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,p||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},r={0:0},c=[];function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp_timothe_gutenberg_blocks=window.webpackJsonp_timothe_gutenberg_blocks||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var s=l;c.push([5,1]),o()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(4),o(0)),c=o(1),u=o(2);Object(n.registerBlockType)("create-block/timothe-gutenberg-blocks",{edit:function(){return Object(r.createElement)("p",Object(u.useBlockProps)(),Object(c.__)("Timothe Gutenberg Blocks – hello from the editor!","timothe-gutenberg-blocks"))},save:function(){return Object(r.createElement)("p",u.useBlockProps.save(),Object(c.__)("Timothe Gutenberg Blocks – hello from the saved content!","timothe-gutenberg-blocks"))}})}]);