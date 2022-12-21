goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16371,res){
var map__16372 = p__16371;
var map__16372__$1 = cljs.core.__destructure_map(map__16372);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16372__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16372__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16373 = res;
var G__16373__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16373,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16373);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16373__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16373__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16375 = arguments.length;
switch (G__16375) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16376,msg,handlers,timeout_after_ms){
var map__16377 = p__16376;
var map__16377__$1 = cljs.core.__destructure_map(map__16377);
var runtime = map__16377__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16377__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16438 = arguments.length;
var i__5770__auto___16439 = (0);
while(true){
if((i__5770__auto___16439 < len__5769__auto___16438)){
args__5775__auto__.push((arguments[i__5770__auto___16439]));

var G__16440 = (i__5770__auto___16439 + (1));
i__5770__auto___16439 = G__16440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16381,ev,args){
var map__16382 = p__16381;
var map__16382__$1 = cljs.core.__destructure_map(map__16382);
var runtime = map__16382__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16382__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16383 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16386 = null;
var count__16387 = (0);
var i__16388 = (0);
while(true){
if((i__16388 < count__16387)){
var ext = chunk__16386.cljs$core$IIndexed$_nth$arity$2(null,i__16388);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16441 = seq__16383;
var G__16442 = chunk__16386;
var G__16443 = count__16387;
var G__16444 = (i__16388 + (1));
seq__16383 = G__16441;
chunk__16386 = G__16442;
count__16387 = G__16443;
i__16388 = G__16444;
continue;
} else {
var G__16445 = seq__16383;
var G__16446 = chunk__16386;
var G__16447 = count__16387;
var G__16448 = (i__16388 + (1));
seq__16383 = G__16445;
chunk__16386 = G__16446;
count__16387 = G__16447;
i__16388 = G__16448;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16383);
if(temp__5804__auto__){
var seq__16383__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16383__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16383__$1);
var G__16449 = cljs.core.chunk_rest(seq__16383__$1);
var G__16450 = c__5568__auto__;
var G__16451 = cljs.core.count(c__5568__auto__);
var G__16452 = (0);
seq__16383 = G__16449;
chunk__16386 = G__16450;
count__16387 = G__16451;
i__16388 = G__16452;
continue;
} else {
var ext = cljs.core.first(seq__16383__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16453 = cljs.core.next(seq__16383__$1);
var G__16454 = null;
var G__16455 = (0);
var G__16456 = (0);
seq__16383 = G__16453;
chunk__16386 = G__16454;
count__16387 = G__16455;
i__16388 = G__16456;
continue;
} else {
var G__16457 = cljs.core.next(seq__16383__$1);
var G__16458 = null;
var G__16459 = (0);
var G__16460 = (0);
seq__16383 = G__16457;
chunk__16386 = G__16458;
count__16387 = G__16459;
i__16388 = G__16460;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16378){
var G__16379 = cljs.core.first(seq16378);
var seq16378__$1 = cljs.core.next(seq16378);
var G__16380 = cljs.core.first(seq16378__$1);
var seq16378__$2 = cljs.core.next(seq16378__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16379,G__16380,seq16378__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16392,p__16393){
var map__16394 = p__16392;
var map__16394__$1 = cljs.core.__destructure_map(map__16394);
var runtime = map__16394__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16394__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16395 = p__16393;
var map__16395__$1 = cljs.core.__destructure_map(map__16395);
var msg = map__16395__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16395__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16396 = cljs.core.deref(state_ref);
var map__16396__$1 = cljs.core.__destructure_map(map__16396);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16396__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16396__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16397){
var map__16398 = p__16397;
var map__16398__$1 = cljs.core.__destructure_map(map__16398);
var runtime = map__16398__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16398__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16399,msg){
var map__16400 = p__16399;
var map__16400__$1 = cljs.core.__destructure_map(map__16400);
var runtime = map__16400__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16400__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16401,key,p__16402){
var map__16403 = p__16401;
var map__16403__$1 = cljs.core.__destructure_map(map__16403);
var state = map__16403__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16403__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16404 = p__16402;
var map__16404__$1 = cljs.core.__destructure_map(map__16404);
var spec = map__16404__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16404__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16405,key,spec){
var map__16406 = p__16405;
var map__16406__$1 = cljs.core.__destructure_map(map__16406);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16407_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16407_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16408_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16408_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16409_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16409_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16410_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16410_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16411_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16411_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16412,key){
var map__16413 = p__16412;
var map__16413__$1 = cljs.core.__destructure_map(map__16413);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16413__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16414,msg){
var map__16415 = p__16414;
var map__16415__$1 = cljs.core.__destructure_map(map__16415);
var runtime = map__16415__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16415__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16416,p__16417){
var map__16418 = p__16416;
var map__16418__$1 = cljs.core.__destructure_map(map__16418);
var runtime = map__16418__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16418__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16419 = p__16417;
var map__16419__$1 = cljs.core.__destructure_map(map__16419);
var msg = map__16419__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16419__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16419__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16420 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16422 = null;
var count__16423 = (0);
var i__16424 = (0);
while(true){
if((i__16424 < count__16423)){
var map__16428 = chunk__16422.cljs$core$IIndexed$_nth$arity$2(null,i__16424);
var map__16428__$1 = cljs.core.__destructure_map(map__16428);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16428__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16469 = seq__16420;
var G__16470 = chunk__16422;
var G__16471 = count__16423;
var G__16472 = (i__16424 + (1));
seq__16420 = G__16469;
chunk__16422 = G__16470;
count__16423 = G__16471;
i__16424 = G__16472;
continue;
} else {
var G__16473 = seq__16420;
var G__16474 = chunk__16422;
var G__16475 = count__16423;
var G__16476 = (i__16424 + (1));
seq__16420 = G__16473;
chunk__16422 = G__16474;
count__16423 = G__16475;
i__16424 = G__16476;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16420);
if(temp__5804__auto__){
var seq__16420__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16420__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16420__$1);
var G__16477 = cljs.core.chunk_rest(seq__16420__$1);
var G__16478 = c__5568__auto__;
var G__16479 = cljs.core.count(c__5568__auto__);
var G__16480 = (0);
seq__16420 = G__16477;
chunk__16422 = G__16478;
count__16423 = G__16479;
i__16424 = G__16480;
continue;
} else {
var map__16430 = cljs.core.first(seq__16420__$1);
var map__16430__$1 = cljs.core.__destructure_map(map__16430);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16430__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16481 = cljs.core.next(seq__16420__$1);
var G__16482 = null;
var G__16483 = (0);
var G__16484 = (0);
seq__16420 = G__16481;
chunk__16422 = G__16482;
count__16423 = G__16483;
i__16424 = G__16484;
continue;
} else {
var G__16485 = cljs.core.next(seq__16420__$1);
var G__16486 = null;
var G__16487 = (0);
var G__16488 = (0);
seq__16420 = G__16485;
chunk__16422 = G__16486;
count__16423 = G__16487;
i__16424 = G__16488;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
