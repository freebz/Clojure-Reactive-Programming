// Compiled by ClojureScript 1.10.238 {}
goog.provide('monet.geometry');
goog.require('cljs.core');
monet.geometry.distance = (function monet$geometry$distance(origin,target){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(target) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(target) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin));
var dir_x = ((cljs.core._EQ_.call(null,(0),dx))?dx:(dx / Math.abs(dx)));
var dir_y = ((cljs.core._EQ_.call(null,(0),dy))?dy:(dy / Math.abs(dy)));
var dist = Math.sqrt((Math.pow(dx,(2)) + Math.pow(dy,(2))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),dy], null),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),dir_x,new cljs.core.Keyword(null,"y","y",-1757859776),dir_y], null),new cljs.core.Keyword(null,"dist","dist",-1401837144),dist], null);
});
monet.geometry.bottom_right = (function monet$geometry$bottom_right(p__21733){
var map__21734 = p__21733;
var map__21734__$1 = ((((!((map__21734 == null)))?(((((map__21734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21734):map__21734);
var x = cljs.core.get.call(null,map__21734__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21734__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__21734__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__21734__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__21734__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_(r)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + r),new cljs.core.Keyword(null,"y","y",-1757859776),(y + r)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + w),new cljs.core.Keyword(null,"y","y",-1757859776),(y + h)], null);
}
});
monet.geometry.top_left = (function monet$geometry$top_left(p__21736){
var map__21737 = p__21736;
var map__21737__$1 = ((((!((map__21737 == null)))?(((((map__21737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21737):map__21737);
var x = cljs.core.get.call(null,map__21737__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21737__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__21737__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_(r)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - r),new cljs.core.Keyword(null,"y","y",-1757859776),(y - r)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
}
});
monet.geometry.in_radius_QMARK_ = (function monet$geometry$in_radius_QMARK_(origin,obj,radius){
var map__21739 = monet.geometry.distance.call(null,origin,obj);
var map__21739__$1 = ((((!((map__21739 == null)))?(((((map__21739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21739):map__21739);
var dist = cljs.core.get.call(null,map__21739__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
return (dist < radius);
});
monet.geometry.collision_QMARK_ = (function monet$geometry$collision_QMARK_(obj,obj2){
var br = monet.geometry.bottom_right.call(null,obj);
var tl = monet.geometry.top_left.call(null,obj);
var br2 = monet.geometry.bottom_right.call(null,obj2);
var tl2 = monet.geometry.top_left.call(null,obj2);
return (((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br2))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl2) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br))))) && ((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br2))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl2) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br))))));
});
monet.geometry.contained_QMARK_ = (function monet$geometry$contained_QMARK_(container,obj){
var cbr = monet.geometry.bottom_right.call(null,container);
var ctl = monet.geometry.top_left.call(null,container);
var br = monet.geometry.bottom_right.call(null,obj);
var tl = monet.geometry.top_left.call(null,obj);
return (((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ctl) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ctl) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl))))) && ((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cbr) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cbr) > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br))))));
});
monet.geometry.in_bounds_QMARK_ = (function monet$geometry$in_bounds_QMARK_(obj,x2,y2){
var br = monet.geometry.bottom_right.call(null,obj);
var tl = monet.geometry.top_left.call(null,obj);
return (((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tl) < x2)) && ((x2 < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(br))))) && ((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tl) < y2)) && ((y2 < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(br))))));
});

//# sourceMappingURL=geometry.js.map?rel=1672795886342
