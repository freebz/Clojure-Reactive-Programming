// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagi_game.core');
goog.require('cljs.core');
goog.require('monet.canvas');
goog.require('reagi.core');
goog.require('reagi_game.entities');
cljs.core.enable_console_print_BANG_.call(null);
reagi_game.core.canvas_dom = document.getElementById("canvas");
reagi_game.core.monet_canvas = monet.canvas.init.call(null,reagi_game.core.canvas_dom,"2d");
reagi_game.core.ship = reagi_game.entities.shape_data.call(null,(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(reagi_game.core.monet_canvas).width / (2)),(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(reagi_game.core.monet_canvas).height / (2)),(0));
reagi_game.core.ship_entity = reagi_game.entities.ship_entity.call(null,reagi_game.core.ship);
monet.canvas.add_entity.call(null,reagi_game.core.monet_canvas,new cljs.core.Keyword(null,"ship-entity","ship-entity",-575272857),reagi_game.core.ship_entity);
monet.canvas.draw_loop.call(null,reagi_game.core.monet_canvas);
reagi_game.core.UP = (38);
reagi_game.core.RIGHT = (39);
reagi_game.core.DOWN = (40);
reagi_game.core.LEFT = (37);
reagi_game.core.FIRE = (32);
reagi_game.core.PAUSE = (80);
reagi_game.core.keydown_stream = (function reagi_game$core$keydown_stream(){
var out = reagi.core.events.call(null);
document.onkeydown = ((function (out){
return (function (p1__30194_SHARP_){
return reagi.core.deliver.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reagi-game.core","down","reagi-game.core/down",-515240956),p1__30194_SHARP_.keyCode], null));
});})(out))
;

return out;
});
reagi_game.core.keyup_stream = (function reagi_game$core$keyup_stream(){
var out = reagi.core.events.call(null);
document.onkeyup = ((function (out){
return (function (p1__30195_SHARP_){
return reagi.core.deliver.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reagi-game.core","up","reagi-game.core/up",-873258867),p1__30195_SHARP_.keyCode], null));
});})(out))
;

return out;
});
reagi_game.core.active_keys_stream = reagi.core.sample.call(null,(25),reagi.core.reduce.call(null,(function (acc,p__30196){
var vec__30197 = p__30196;
var event_type = cljs.core.nth.call(null,vec__30197,(0),null);
var key_code = cljs.core.nth.call(null,vec__30197,(1),null);
var pred__30200 = cljs.core._EQ_;
var expr__30201 = event_type;
if(cljs.core.truth_(pred__30200.call(null,new cljs.core.Keyword("reagi-game.core","down","reagi-game.core/down",-515240956),expr__30201))){
return cljs.core.conj.call(null,acc,key_code);
} else {
if(cljs.core.truth_(pred__30200.call(null,new cljs.core.Keyword("reagi-game.core","up","reagi-game.core/up",-873258867),expr__30201))){
return cljs.core.disj.call(null,acc,key_code);
} else {
return acc;
}
}
}),cljs.core.PersistentHashSet.EMPTY,reagi.core.merge.call(null,reagi_game.core.keydown_stream.call(null),reagi_game.core.keyup_stream.call(null))));
reagi_game.core.filter_map = (function reagi_game$core$filter_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30206 = arguments.length;
var i__4500__auto___30207 = (0);
while(true){
if((i__4500__auto___30207 < len__4499__auto___30206)){
args__4502__auto__.push((arguments[i__4500__auto___30207]));

var G__30208 = (i__4500__auto___30207 + (1));
i__4500__auto___30207 = G__30208;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return reagi_game.core.filter_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

reagi_game.core.filter_map.cljs$core$IFn$_invoke$arity$variadic = (function (pred,f,args){
return reagi.core.map.call(null,(function (_){
return cljs.core.apply.call(null,f,args);
}),reagi.core.filter.call(null,cljs.core.partial.call(null,cljs.core.some,pred),reagi_game.core.active_keys_stream));
});

reagi_game.core.filter_map.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagi_game.core.filter_map.cljs$lang$applyTo = (function (seq30203){
var G__30204 = cljs.core.first.call(null,seq30203);
var seq30203__$1 = cljs.core.next.call(null,seq30203);
var G__30205 = cljs.core.first.call(null,seq30203__$1);
var seq30203__$2 = cljs.core.next.call(null,seq30203__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30204,G__30205,seq30203__$2);
});

reagi_game.core.filter_map.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([reagi_game.core.FIRE]),reagi_game.entities.fire_BANG_,reagi_game.core.monet_canvas,reagi_game.core.ship);
reagi_game.core.filter_map.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([reagi_game.core.UP]),reagi_game.entities.move_forward_BANG_,reagi_game.core.ship);
reagi_game.core.filter_map.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([reagi_game.core.DOWN]),reagi_game.entities.move_backward_BANG_,reagi_game.core.ship);
reagi_game.core.filter_map.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([reagi_game.core.RIGHT]),reagi_game.entities.rotate_right_BANG_,reagi_game.core.ship);
reagi_game.core.filter_map.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([reagi_game.core.LEFT]),reagi_game.entities.rotate_left_BANG_,reagi_game.core.ship);
reagi_game.core.pause_BANG_ = (function reagi_game$core$pause_BANG_(_){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(reagi_game.core.monet_canvas)))){
return monet.canvas.stop_updating.call(null,reagi_game.core.monet_canvas);
} else {
return monet.canvas.start_updating.call(null,reagi_game.core.monet_canvas);
}
});
reagi_game.core.start_game = (function reagi_game$core$start_game(){
return reagi.core.map.call(null,reagi_game.core.pause_BANG_,reagi.core.throttle.call(null,(100),reagi.core.filter.call(null,cljs.core.partial.call(null,cljs.core.some,cljs.core.PersistentHashSet.createAsIfByAssoc([reagi_game.core.PAUSE])),reagi_game.core.active_keys_stream)));
});
reagi_game.core.on_js_reload = (function reagi_game$core$on_js_reload(){
return reagi_game.core.start_game.call(null);
});

//# sourceMappingURL=core.js.map?rel=1672799494999
