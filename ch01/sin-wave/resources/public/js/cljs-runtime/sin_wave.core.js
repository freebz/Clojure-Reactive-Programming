goog.provide('sin_wave.core');
sin_wave.core.main = (function sin_wave$core$main(){
return null;
});
console.log("hello clojurescript");
sin_wave.core.canvas = document.getElementById("myCanvas");
sin_wave.core.ctx = sin_wave.core.canvas.getContext("2d");
sin_wave.core.ctx.clearRect((0),(0),sin_wave.core.canvas.width,sin_wave.core.canvas.height);
sin_wave.core.interval = Rx.Observable.interval;
sin_wave.core.time = (sin_wave.core.interval.cljs$core$IFn$_invoke$arity$1 ? sin_wave.core.interval.cljs$core$IFn$_invoke$arity$1((10)) : sin_wave.core.interval.call(null,(10)));
sin_wave.core.time.take((5)).subscribe((function (n){
return console.log(n);
}));
sin_wave.core.deg_to_rad = (function sin_wave$core$deg_to_rad(n){
return ((Math.PI / (180)) * n);
});
sin_wave.core.sine_coord = (function sin_wave$core$sine_coord(x){
var sin = Math.sin(sin_wave.core.deg_to_rad(x));
var y = ((100) - (sin * (90)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"sin","sin",80907862),sin], null);
});
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sin_wave.core.sine_coord((50))));
sin_wave.core.sine_wave = sin_wave.core.time.map(sin_wave.core.sine_coord);
sin_wave.core.sine_wave.take((5)).subscribe((function (xysin){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(xysin));
}));
sin_wave.core.fill_rect = (function sin_wave$core$fill_rect(x,y,colour){
(sin_wave.core.ctx.fillStyle = colour);

return sin_wave.core.ctx.fillRect(x,y,(2),(2));
});
sin_wave.core.sine_wave.take((600)).subscribe((function (p__20108){
var map__20109 = p__20108;
var map__20109__$1 = cljs.core.__destructure_map(map__20109);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20109__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20109__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return sin_wave.core.fill_rect(x,y,"orange");
}));
sin_wave.core.colour = sin_wave.core.sine_wave.map((function (p__20110){
var map__20111 = p__20110;
var map__20111__$1 = cljs.core.__destructure_map(map__20111);
var sin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,new cljs.core.Keyword(null,"sin","sin",80907862));
if((sin < (0))){
return "red";
} else {
return "blue";
}
}));
sin_wave.core.sine_wave.zip(sin_wave.core.colour,(function (p1__20112_SHARP_,p2__20113_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20112_SHARP_,p2__20113_SHARP_],null));
})).take((600)).subscribe((function (p__20114){
var vec__20115 = p__20114;
var map__20118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20115,(0),null);
var map__20118__$1 = cljs.core.__destructure_map(map__20118);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20118__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20118__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var colour = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20115,(1),null);
return sin_wave.core.fill_rect(x,y,colour);
}));
sin_wave.core.red = sin_wave.core.time.map((function (_){
return "red";
}));
sin_wave.core.blue = sin_wave.core.time.map((function (_){
return "blue";
}));
sin_wave.core.concat = Rx.Observable.concat;
sin_wave.core.defer = Rx.Observable.defer;
sin_wave.core.from_event = Rx.Observable.fromEvent;
sin_wave.core.mouse_click = (sin_wave.core.from_event.cljs$core$IFn$_invoke$arity$2 ? sin_wave.core.from_event.cljs$core$IFn$_invoke$arity$2(sin_wave.core.canvas,"click") : sin_wave.core.from_event.call(null,sin_wave.core.canvas,"click"));
sin_wave.core.cycle_colour = (function (){var G__20119 = sin_wave.core.red.takeUntil(sin_wave.core.mouse_click);
var G__20120 = (function (){var G__20121 = (function (){
var G__20122 = sin_wave.core.blue.takeUntil(sin_wave.core.mouse_click);
var G__20123 = sin_wave.core.cycle_colour;
return (sin_wave.core.concat.cljs$core$IFn$_invoke$arity$2 ? sin_wave.core.concat.cljs$core$IFn$_invoke$arity$2(G__20122,G__20123) : sin_wave.core.concat.call(null,G__20122,G__20123));
});
return (sin_wave.core.defer.cljs$core$IFn$_invoke$arity$1 ? sin_wave.core.defer.cljs$core$IFn$_invoke$arity$1(G__20121) : sin_wave.core.defer.call(null,G__20121));
})();
return (sin_wave.core.concat.cljs$core$IFn$_invoke$arity$2 ? sin_wave.core.concat.cljs$core$IFn$_invoke$arity$2(G__20119,G__20120) : sin_wave.core.concat.call(null,G__20119,G__20120));
})();
sin_wave.core.sine_wave.zip(sin_wave.core.cycle_colour,(function (p1__20124_SHARP_,p2__20125_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20124_SHARP_,p2__20125_SHARP_],null));
})).take((600)).subscribe((function (p__20126){
var vec__20127 = p__20126;
var map__20130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20127,(0),null);
var map__20130__$1 = cljs.core.__destructure_map(map__20130);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20130__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20130__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var colour = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20127,(1),null);
return sin_wave.core.fill_rect(x,y,colour);
}));

//# sourceMappingURL=sin_wave.core.js.map
