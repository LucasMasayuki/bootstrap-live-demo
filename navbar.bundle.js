!function(n){function a(a){for(var e,l,i=a[0],s=a[1],c=a[2],p=0,v=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e]);for(u&&u(a);v.length;)v.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,a=0;a<o.length;a++){for(var t=o[a],e=!0,i=1;i<t.length;i++){var s=t[i];0!==r[s]&&(e=!1)}e&&(o.splice(a--,1),n=l(l.s=t[0]))}return n}var e={},r={5:0},o=[];function l(a){if(e[a])return e[a].exports;var t=e[a]={i:a,l:!1,exports:{}};return n[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=e,l.d=function(n,a,t){l.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:t})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,a){if(1&a&&(n=l(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var e in n)l.d(t,e,function(a){return n[a]}.bind(null,e));return t},l.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(a,"a",a),a},l.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},l.p="/bootstrap-live-demo/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=s;o.push([9,0]),t()}({12:function(n,a,t){},7:function(n,a){n.exports='<template>\n    <nav \n        class="bg-dark bd-navbar navbar navbar-expand navbar-dark sticky-top">\n        <a class="navbar-brand" href="#">\n            <img src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">\n        </a>\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="navbarNav">\n            <ul class="navbar-nav">\n                <li class="nav-item active js-nav-item">\n                    <a class="nav-link" href="#introduction-section">Introdução</a>\n                </li>\n                <li class="nav-item active js-nav-item">\n                    <a class="nav-link" href="#instalation-section">Instalação</a>\n                </li>\n                <li class="nav-item active js-nav-item">\n                    <a class="nav-link" href="#responsive-section">Responsividade</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</template>'},9:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var e=t(0),r=t.n(e),o=t(7),l=t.n(o);t(12);class i{static render(){return r()(l.a).html()}}}});