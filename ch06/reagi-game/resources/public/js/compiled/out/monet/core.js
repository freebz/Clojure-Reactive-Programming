// Compiled by ClojureScript 1.10.238 {}
goog.provide('monet.core');
goog.require('cljs.core');
monet.core.animation_frame = (function (){var or__3922__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
var or__3922__auto____$3 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$3)){
return or__3922__auto____$3;
} else {
var or__3922__auto____$4 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$4)){
return or__3922__auto____$4;
} else {
return ((function (or__3922__auto____$4,or__3922__auto____$3,or__3922__auto____$2,or__3922__auto____$1,or__3922__auto__){
return (function (callback){
return setTimeout(callback,(17));
});
;})(or__3922__auto____$4,or__3922__auto____$3,or__3922__auto____$2,or__3922__auto____$1,or__3922__auto__))
}
}
}
}
}
})();

//# sourceMappingURL=core.js.map?rel=1672795886417
