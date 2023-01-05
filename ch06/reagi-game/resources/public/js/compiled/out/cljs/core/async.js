// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26499 = arguments.length;
switch (G__26499) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26500 = (function (f,blockable,meta26501){
this.f = f;
this.blockable = blockable;
this.meta26501 = meta26501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26502,meta26501__$1){
var self__ = this;
var _26502__$1 = this;
return (new cljs.core.async.t_cljs$core$async26500(self__.f,self__.blockable,meta26501__$1));
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26502){
var self__ = this;
var _26502__$1 = this;
return self__.meta26501;
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26501","meta26501",-2009945563,null)], null);
});

cljs.core.async.t_cljs$core$async26500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26500";

cljs.core.async.t_cljs$core$async26500.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26500");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26500.
 */
cljs.core.async.__GT_t_cljs$core$async26500 = (function cljs$core$async$__GT_t_cljs$core$async26500(f__$1,blockable__$1,meta26501){
return (new cljs.core.async.t_cljs$core$async26500(f__$1,blockable__$1,meta26501));
});

}

return (new cljs.core.async.t_cljs$core$async26500(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26506 = arguments.length;
switch (G__26506) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26509 = arguments.length;
switch (G__26509) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26512 = arguments.length;
switch (G__26512) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26514 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26514);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26514,ret){
return (function (){
return fn1.call(null,val_26514);
});})(val_26514,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26516 = arguments.length;
switch (G__26516) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___26518 = n;
var x_26519 = (0);
while(true){
if((x_26519 < n__4376__auto___26518)){
(a[x_26519] = (0));

var G__26520 = (x_26519 + (1));
x_26519 = G__26520;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26521 = (i + (1));
i = G__26521;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26522 = (function (flag,meta26523){
this.flag = flag;
this.meta26523 = meta26523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26524,meta26523__$1){
var self__ = this;
var _26524__$1 = this;
return (new cljs.core.async.t_cljs$core$async26522(self__.flag,meta26523__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26524){
var self__ = this;
var _26524__$1 = this;
return self__.meta26523;
});})(flag))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26522.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26523","meta26523",900032220,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26522";

cljs.core.async.t_cljs$core$async26522.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26522");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26522.
 */
cljs.core.async.__GT_t_cljs$core$async26522 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26522(flag__$1,meta26523){
return (new cljs.core.async.t_cljs$core$async26522(flag__$1,meta26523));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26522(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26525 = (function (flag,cb,meta26526){
this.flag = flag;
this.cb = cb;
this.meta26526 = meta26526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26527,meta26526__$1){
var self__ = this;
var _26527__$1 = this;
return (new cljs.core.async.t_cljs$core$async26525(self__.flag,self__.cb,meta26526__$1));
});

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26527){
var self__ = this;
var _26527__$1 = this;
return self__.meta26526;
});

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26526","meta26526",236771,null)], null);
});

cljs.core.async.t_cljs$core$async26525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26525";

cljs.core.async.t_cljs$core$async26525.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26525");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26525.
 */
cljs.core.async.__GT_t_cljs$core$async26525 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26525(flag__$1,cb__$1,meta26526){
return (new cljs.core.async.t_cljs$core$async26525(flag__$1,cb__$1,meta26526));
});

}

return (new cljs.core.async.t_cljs$core$async26525(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26528_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26528_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26529_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26529_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26530 = (i + (1));
i = G__26530;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26536 = arguments.length;
var i__4500__auto___26537 = (0);
while(true){
if((i__4500__auto___26537 < len__4499__auto___26536)){
args__4502__auto__.push((arguments[i__4500__auto___26537]));

var G__26538 = (i__4500__auto___26537 + (1));
i__4500__auto___26537 = G__26538;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26533){
var map__26534 = p__26533;
var map__26534__$1 = ((((!((map__26534 == null)))?(((((map__26534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26534):map__26534);
var opts = map__26534__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26531){
var G__26532 = cljs.core.first.call(null,seq26531);
var seq26531__$1 = cljs.core.next.call(null,seq26531);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26532,seq26531__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26540 = arguments.length;
switch (G__26540) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26439__auto___26586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___26586){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___26586){
return (function (state_26564){
var state_val_26565 = (state_26564[(1)]);
if((state_val_26565 === (7))){
var inst_26560 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26566_26587 = state_26564__$1;
(statearr_26566_26587[(2)] = inst_26560);

(statearr_26566_26587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (1))){
var state_26564__$1 = state_26564;
var statearr_26567_26588 = state_26564__$1;
(statearr_26567_26588[(2)] = null);

(statearr_26567_26588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (4))){
var inst_26543 = (state_26564[(7)]);
var inst_26543__$1 = (state_26564[(2)]);
var inst_26544 = (inst_26543__$1 == null);
var state_26564__$1 = (function (){var statearr_26568 = state_26564;
(statearr_26568[(7)] = inst_26543__$1);

return statearr_26568;
})();
if(cljs.core.truth_(inst_26544)){
var statearr_26569_26589 = state_26564__$1;
(statearr_26569_26589[(1)] = (5));

} else {
var statearr_26570_26590 = state_26564__$1;
(statearr_26570_26590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (13))){
var state_26564__$1 = state_26564;
var statearr_26571_26591 = state_26564__$1;
(statearr_26571_26591[(2)] = null);

(statearr_26571_26591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (6))){
var inst_26543 = (state_26564[(7)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26564__$1,(11),to,inst_26543);
} else {
if((state_val_26565 === (3))){
var inst_26562 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26564__$1,inst_26562);
} else {
if((state_val_26565 === (12))){
var state_26564__$1 = state_26564;
var statearr_26572_26592 = state_26564__$1;
(statearr_26572_26592[(2)] = null);

(statearr_26572_26592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (2))){
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(4),from);
} else {
if((state_val_26565 === (11))){
var inst_26553 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
if(cljs.core.truth_(inst_26553)){
var statearr_26573_26593 = state_26564__$1;
(statearr_26573_26593[(1)] = (12));

} else {
var statearr_26574_26594 = state_26564__$1;
(statearr_26574_26594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (9))){
var state_26564__$1 = state_26564;
var statearr_26575_26595 = state_26564__$1;
(statearr_26575_26595[(2)] = null);

(statearr_26575_26595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (5))){
var state_26564__$1 = state_26564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26576_26596 = state_26564__$1;
(statearr_26576_26596[(1)] = (8));

} else {
var statearr_26577_26597 = state_26564__$1;
(statearr_26577_26597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (14))){
var inst_26558 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26578_26598 = state_26564__$1;
(statearr_26578_26598[(2)] = inst_26558);

(statearr_26578_26598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (10))){
var inst_26550 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26579_26599 = state_26564__$1;
(statearr_26579_26599[(2)] = inst_26550);

(statearr_26579_26599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (8))){
var inst_26547 = cljs.core.async.close_BANG_.call(null,to);
var state_26564__$1 = state_26564;
var statearr_26580_26600 = state_26564__$1;
(statearr_26580_26600[(2)] = inst_26547);

(statearr_26580_26600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___26586))
;
return ((function (switch__26349__auto__,c__26439__auto___26586){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_26581 = [null,null,null,null,null,null,null,null];
(statearr_26581[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_26581[(1)] = (1));

return statearr_26581;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_26564){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26582){if((e26582 instanceof Object)){
var ex__26353__auto__ = e26582;
var statearr_26583_26601 = state_26564;
(statearr_26583_26601[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26602 = state_26564;
state_26564 = G__26602;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_26564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_26564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___26586))
})();
var state__26441__auto__ = (function (){var statearr_26584 = f__26440__auto__.call(null);
(statearr_26584[(6)] = c__26439__auto___26586);

return statearr_26584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___26586))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26603){
var vec__26604 = p__26603;
var v = cljs.core.nth.call(null,vec__26604,(0),null);
var p = cljs.core.nth.call(null,vec__26604,(1),null);
var job = vec__26604;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26439__auto___26775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___26775,res,vec__26604,v,p,job,jobs,results){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___26775,res,vec__26604,v,p,job,jobs,results){
return (function (state_26611){
var state_val_26612 = (state_26611[(1)]);
if((state_val_26612 === (1))){
var state_26611__$1 = state_26611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26611__$1,(2),res,v);
} else {
if((state_val_26612 === (2))){
var inst_26608 = (state_26611[(2)]);
var inst_26609 = cljs.core.async.close_BANG_.call(null,res);
var state_26611__$1 = (function (){var statearr_26613 = state_26611;
(statearr_26613[(7)] = inst_26608);

return statearr_26613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26611__$1,inst_26609);
} else {
return null;
}
}
});})(c__26439__auto___26775,res,vec__26604,v,p,job,jobs,results))
;
return ((function (switch__26349__auto__,c__26439__auto___26775,res,vec__26604,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0 = (function (){
var statearr_26614 = [null,null,null,null,null,null,null,null];
(statearr_26614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__);

(statearr_26614[(1)] = (1));

return statearr_26614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1 = (function (state_26611){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26615){if((e26615 instanceof Object)){
var ex__26353__auto__ = e26615;
var statearr_26616_26776 = state_26611;
(statearr_26616_26776[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26777 = state_26611;
state_26611 = G__26777;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = function(state_26611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1.call(this,state_26611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___26775,res,vec__26604,v,p,job,jobs,results))
})();
var state__26441__auto__ = (function (){var statearr_26617 = f__26440__auto__.call(null);
(statearr_26617[(6)] = c__26439__auto___26775);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___26775,res,vec__26604,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26618){
var vec__26619 = p__26618;
var v = cljs.core.nth.call(null,vec__26619,(0),null);
var p = cljs.core.nth.call(null,vec__26619,(1),null);
var job = vec__26619;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___26778 = n;
var __26779 = (0);
while(true){
if((__26779 < n__4376__auto___26778)){
var G__26622_26780 = type;
var G__26622_26781__$1 = (((G__26622_26780 instanceof cljs.core.Keyword))?G__26622_26780.fqn:null);
switch (G__26622_26781__$1) {
case "compute":
var c__26439__auto___26783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26779,c__26439__auto___26783,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (__26779,c__26439__auto___26783,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async){
return (function (state_26635){
var state_val_26636 = (state_26635[(1)]);
if((state_val_26636 === (1))){
var state_26635__$1 = state_26635;
var statearr_26637_26784 = state_26635__$1;
(statearr_26637_26784[(2)] = null);

(statearr_26637_26784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (2))){
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(4),jobs);
} else {
if((state_val_26636 === (3))){
var inst_26633 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26635__$1,inst_26633);
} else {
if((state_val_26636 === (4))){
var inst_26625 = (state_26635[(2)]);
var inst_26626 = process.call(null,inst_26625);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26626)){
var statearr_26638_26785 = state_26635__$1;
(statearr_26638_26785[(1)] = (5));

} else {
var statearr_26639_26786 = state_26635__$1;
(statearr_26639_26786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (5))){
var state_26635__$1 = state_26635;
var statearr_26640_26787 = state_26635__$1;
(statearr_26640_26787[(2)] = null);

(statearr_26640_26787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (6))){
var state_26635__$1 = state_26635;
var statearr_26641_26788 = state_26635__$1;
(statearr_26641_26788[(2)] = null);

(statearr_26641_26788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (7))){
var inst_26631 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26642_26789 = state_26635__$1;
(statearr_26642_26789[(2)] = inst_26631);

(statearr_26642_26789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26779,c__26439__auto___26783,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async))
;
return ((function (__26779,switch__26349__auto__,c__26439__auto___26783,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0 = (function (){
var statearr_26643 = [null,null,null,null,null,null,null];
(statearr_26643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__);

(statearr_26643[(1)] = (1));

return statearr_26643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1 = (function (state_26635){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26644){if((e26644 instanceof Object)){
var ex__26353__auto__ = e26644;
var statearr_26645_26790 = state_26635;
(statearr_26645_26790[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26791 = state_26635;
state_26635 = G__26791;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = function(state_26635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1.call(this,state_26635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__;
})()
;})(__26779,switch__26349__auto__,c__26439__auto___26783,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_26646 = f__26440__auto__.call(null);
(statearr_26646[(6)] = c__26439__auto___26783);

return statearr_26646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(__26779,c__26439__auto___26783,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async))
);


break;
case "async":
var c__26439__auto___26792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26779,c__26439__auto___26792,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (__26779,c__26439__auto___26792,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async){
return (function (state_26659){
var state_val_26660 = (state_26659[(1)]);
if((state_val_26660 === (1))){
var state_26659__$1 = state_26659;
var statearr_26661_26793 = state_26659__$1;
(statearr_26661_26793[(2)] = null);

(statearr_26661_26793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (2))){
var state_26659__$1 = state_26659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26659__$1,(4),jobs);
} else {
if((state_val_26660 === (3))){
var inst_26657 = (state_26659[(2)]);
var state_26659__$1 = state_26659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26659__$1,inst_26657);
} else {
if((state_val_26660 === (4))){
var inst_26649 = (state_26659[(2)]);
var inst_26650 = async.call(null,inst_26649);
var state_26659__$1 = state_26659;
if(cljs.core.truth_(inst_26650)){
var statearr_26662_26794 = state_26659__$1;
(statearr_26662_26794[(1)] = (5));

} else {
var statearr_26663_26795 = state_26659__$1;
(statearr_26663_26795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (5))){
var state_26659__$1 = state_26659;
var statearr_26664_26796 = state_26659__$1;
(statearr_26664_26796[(2)] = null);

(statearr_26664_26796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (6))){
var state_26659__$1 = state_26659;
var statearr_26665_26797 = state_26659__$1;
(statearr_26665_26797[(2)] = null);

(statearr_26665_26797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26660 === (7))){
var inst_26655 = (state_26659[(2)]);
var state_26659__$1 = state_26659;
var statearr_26666_26798 = state_26659__$1;
(statearr_26666_26798[(2)] = inst_26655);

(statearr_26666_26798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26779,c__26439__auto___26792,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async))
;
return ((function (__26779,switch__26349__auto__,c__26439__auto___26792,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0 = (function (){
var statearr_26667 = [null,null,null,null,null,null,null];
(statearr_26667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__);

(statearr_26667[(1)] = (1));

return statearr_26667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1 = (function (state_26659){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26668){if((e26668 instanceof Object)){
var ex__26353__auto__ = e26668;
var statearr_26669_26799 = state_26659;
(statearr_26669_26799[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26800 = state_26659;
state_26659 = G__26800;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = function(state_26659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1.call(this,state_26659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__;
})()
;})(__26779,switch__26349__auto__,c__26439__auto___26792,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_26670 = f__26440__auto__.call(null);
(statearr_26670[(6)] = c__26439__auto___26792);

return statearr_26670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(__26779,c__26439__auto___26792,G__26622_26780,G__26622_26781__$1,n__4376__auto___26778,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26622_26781__$1)].join('')));

}

var G__26801 = (__26779 + (1));
__26779 = G__26801;
continue;
} else {
}
break;
}

var c__26439__auto___26802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___26802,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___26802,jobs,results,process,async){
return (function (state_26692){
var state_val_26693 = (state_26692[(1)]);
if((state_val_26693 === (1))){
var state_26692__$1 = state_26692;
var statearr_26694_26803 = state_26692__$1;
(statearr_26694_26803[(2)] = null);

(statearr_26694_26803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (2))){
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26692__$1,(4),from);
} else {
if((state_val_26693 === (3))){
var inst_26690 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26692__$1,inst_26690);
} else {
if((state_val_26693 === (4))){
var inst_26673 = (state_26692[(7)]);
var inst_26673__$1 = (state_26692[(2)]);
var inst_26674 = (inst_26673__$1 == null);
var state_26692__$1 = (function (){var statearr_26695 = state_26692;
(statearr_26695[(7)] = inst_26673__$1);

return statearr_26695;
})();
if(cljs.core.truth_(inst_26674)){
var statearr_26696_26804 = state_26692__$1;
(statearr_26696_26804[(1)] = (5));

} else {
var statearr_26697_26805 = state_26692__$1;
(statearr_26697_26805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (5))){
var inst_26676 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26692__$1 = state_26692;
var statearr_26698_26806 = state_26692__$1;
(statearr_26698_26806[(2)] = inst_26676);

(statearr_26698_26806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (6))){
var inst_26673 = (state_26692[(7)]);
var inst_26678 = (state_26692[(8)]);
var inst_26678__$1 = cljs.core.async.chan.call(null,(1));
var inst_26679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26680 = [inst_26673,inst_26678__$1];
var inst_26681 = (new cljs.core.PersistentVector(null,2,(5),inst_26679,inst_26680,null));
var state_26692__$1 = (function (){var statearr_26699 = state_26692;
(statearr_26699[(8)] = inst_26678__$1);

return statearr_26699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26692__$1,(8),jobs,inst_26681);
} else {
if((state_val_26693 === (7))){
var inst_26688 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26700_26807 = state_26692__$1;
(statearr_26700_26807[(2)] = inst_26688);

(statearr_26700_26807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (8))){
var inst_26678 = (state_26692[(8)]);
var inst_26683 = (state_26692[(2)]);
var state_26692__$1 = (function (){var statearr_26701 = state_26692;
(statearr_26701[(9)] = inst_26683);

return statearr_26701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26692__$1,(9),results,inst_26678);
} else {
if((state_val_26693 === (9))){
var inst_26685 = (state_26692[(2)]);
var state_26692__$1 = (function (){var statearr_26702 = state_26692;
(statearr_26702[(10)] = inst_26685);

return statearr_26702;
})();
var statearr_26703_26808 = state_26692__$1;
(statearr_26703_26808[(2)] = null);

(statearr_26703_26808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___26802,jobs,results,process,async))
;
return ((function (switch__26349__auto__,c__26439__auto___26802,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0 = (function (){
var statearr_26704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__);

(statearr_26704[(1)] = (1));

return statearr_26704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1 = (function (state_26692){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26705){if((e26705 instanceof Object)){
var ex__26353__auto__ = e26705;
var statearr_26706_26809 = state_26692;
(statearr_26706_26809[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26810 = state_26692;
state_26692 = G__26810;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = function(state_26692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1.call(this,state_26692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___26802,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_26707 = f__26440__auto__.call(null);
(statearr_26707[(6)] = c__26439__auto___26802);

return statearr_26707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___26802,jobs,results,process,async))
);


var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,jobs,results,process,async){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__,jobs,results,process,async){
return (function (state_26745){
var state_val_26746 = (state_26745[(1)]);
if((state_val_26746 === (7))){
var inst_26741 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26747_26811 = state_26745__$1;
(statearr_26747_26811[(2)] = inst_26741);

(statearr_26747_26811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (20))){
var state_26745__$1 = state_26745;
var statearr_26748_26812 = state_26745__$1;
(statearr_26748_26812[(2)] = null);

(statearr_26748_26812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (1))){
var state_26745__$1 = state_26745;
var statearr_26749_26813 = state_26745__$1;
(statearr_26749_26813[(2)] = null);

(statearr_26749_26813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (4))){
var inst_26710 = (state_26745[(7)]);
var inst_26710__$1 = (state_26745[(2)]);
var inst_26711 = (inst_26710__$1 == null);
var state_26745__$1 = (function (){var statearr_26750 = state_26745;
(statearr_26750[(7)] = inst_26710__$1);

return statearr_26750;
})();
if(cljs.core.truth_(inst_26711)){
var statearr_26751_26814 = state_26745__$1;
(statearr_26751_26814[(1)] = (5));

} else {
var statearr_26752_26815 = state_26745__$1;
(statearr_26752_26815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (15))){
var inst_26723 = (state_26745[(8)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26745__$1,(18),to,inst_26723);
} else {
if((state_val_26746 === (21))){
var inst_26736 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26753_26816 = state_26745__$1;
(statearr_26753_26816[(2)] = inst_26736);

(statearr_26753_26816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (13))){
var inst_26738 = (state_26745[(2)]);
var state_26745__$1 = (function (){var statearr_26754 = state_26745;
(statearr_26754[(9)] = inst_26738);

return statearr_26754;
})();
var statearr_26755_26817 = state_26745__$1;
(statearr_26755_26817[(2)] = null);

(statearr_26755_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (6))){
var inst_26710 = (state_26745[(7)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(11),inst_26710);
} else {
if((state_val_26746 === (17))){
var inst_26731 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26731)){
var statearr_26756_26818 = state_26745__$1;
(statearr_26756_26818[(1)] = (19));

} else {
var statearr_26757_26819 = state_26745__$1;
(statearr_26757_26819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (3))){
var inst_26743 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26745__$1,inst_26743);
} else {
if((state_val_26746 === (12))){
var inst_26720 = (state_26745[(10)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(14),inst_26720);
} else {
if((state_val_26746 === (2))){
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(4),results);
} else {
if((state_val_26746 === (19))){
var state_26745__$1 = state_26745;
var statearr_26758_26820 = state_26745__$1;
(statearr_26758_26820[(2)] = null);

(statearr_26758_26820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (11))){
var inst_26720 = (state_26745[(2)]);
var state_26745__$1 = (function (){var statearr_26759 = state_26745;
(statearr_26759[(10)] = inst_26720);

return statearr_26759;
})();
var statearr_26760_26821 = state_26745__$1;
(statearr_26760_26821[(2)] = null);

(statearr_26760_26821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (9))){
var state_26745__$1 = state_26745;
var statearr_26761_26822 = state_26745__$1;
(statearr_26761_26822[(2)] = null);

(statearr_26761_26822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (5))){
var state_26745__$1 = state_26745;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26762_26823 = state_26745__$1;
(statearr_26762_26823[(1)] = (8));

} else {
var statearr_26763_26824 = state_26745__$1;
(statearr_26763_26824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (14))){
var inst_26725 = (state_26745[(11)]);
var inst_26723 = (state_26745[(8)]);
var inst_26723__$1 = (state_26745[(2)]);
var inst_26724 = (inst_26723__$1 == null);
var inst_26725__$1 = cljs.core.not.call(null,inst_26724);
var state_26745__$1 = (function (){var statearr_26764 = state_26745;
(statearr_26764[(11)] = inst_26725__$1);

(statearr_26764[(8)] = inst_26723__$1);

return statearr_26764;
})();
if(inst_26725__$1){
var statearr_26765_26825 = state_26745__$1;
(statearr_26765_26825[(1)] = (15));

} else {
var statearr_26766_26826 = state_26745__$1;
(statearr_26766_26826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (16))){
var inst_26725 = (state_26745[(11)]);
var state_26745__$1 = state_26745;
var statearr_26767_26827 = state_26745__$1;
(statearr_26767_26827[(2)] = inst_26725);

(statearr_26767_26827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (10))){
var inst_26717 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26768_26828 = state_26745__$1;
(statearr_26768_26828[(2)] = inst_26717);

(statearr_26768_26828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (18))){
var inst_26728 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26769_26829 = state_26745__$1;
(statearr_26769_26829[(2)] = inst_26728);

(statearr_26769_26829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (8))){
var inst_26714 = cljs.core.async.close_BANG_.call(null,to);
var state_26745__$1 = state_26745;
var statearr_26770_26830 = state_26745__$1;
(statearr_26770_26830[(2)] = inst_26714);

(statearr_26770_26830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto__,jobs,results,process,async))
;
return ((function (switch__26349__auto__,c__26439__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0 = (function (){
var statearr_26771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__);

(statearr_26771[(1)] = (1));

return statearr_26771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1 = (function (state_26745){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26772){if((e26772 instanceof Object)){
var ex__26353__auto__ = e26772;
var statearr_26773_26831 = state_26745;
(statearr_26773_26831[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26832 = state_26745;
state_26745 = G__26832;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__ = function(state_26745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1.call(this,state_26745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26350__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__,jobs,results,process,async))
})();
var state__26441__auto__ = (function (){var statearr_26774 = f__26440__auto__.call(null);
(statearr_26774[(6)] = c__26439__auto__);

return statearr_26774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,jobs,results,process,async))
);

return c__26439__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26834 = arguments.length;
switch (G__26834) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26837 = arguments.length;
switch (G__26837) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26840 = arguments.length;
switch (G__26840) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26439__auto___26889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___26889,tc,fc){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___26889,tc,fc){
return (function (state_26866){
var state_val_26867 = (state_26866[(1)]);
if((state_val_26867 === (7))){
var inst_26862 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
var statearr_26868_26890 = state_26866__$1;
(statearr_26868_26890[(2)] = inst_26862);

(statearr_26868_26890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (1))){
var state_26866__$1 = state_26866;
var statearr_26869_26891 = state_26866__$1;
(statearr_26869_26891[(2)] = null);

(statearr_26869_26891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (4))){
var inst_26843 = (state_26866[(7)]);
var inst_26843__$1 = (state_26866[(2)]);
var inst_26844 = (inst_26843__$1 == null);
var state_26866__$1 = (function (){var statearr_26870 = state_26866;
(statearr_26870[(7)] = inst_26843__$1);

return statearr_26870;
})();
if(cljs.core.truth_(inst_26844)){
var statearr_26871_26892 = state_26866__$1;
(statearr_26871_26892[(1)] = (5));

} else {
var statearr_26872_26893 = state_26866__$1;
(statearr_26872_26893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (13))){
var state_26866__$1 = state_26866;
var statearr_26873_26894 = state_26866__$1;
(statearr_26873_26894[(2)] = null);

(statearr_26873_26894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (6))){
var inst_26843 = (state_26866[(7)]);
var inst_26849 = p.call(null,inst_26843);
var state_26866__$1 = state_26866;
if(cljs.core.truth_(inst_26849)){
var statearr_26874_26895 = state_26866__$1;
(statearr_26874_26895[(1)] = (9));

} else {
var statearr_26875_26896 = state_26866__$1;
(statearr_26875_26896[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (3))){
var inst_26864 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26866__$1,inst_26864);
} else {
if((state_val_26867 === (12))){
var state_26866__$1 = state_26866;
var statearr_26876_26897 = state_26866__$1;
(statearr_26876_26897[(2)] = null);

(statearr_26876_26897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (2))){
var state_26866__$1 = state_26866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26866__$1,(4),ch);
} else {
if((state_val_26867 === (11))){
var inst_26843 = (state_26866[(7)]);
var inst_26853 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26866__$1,(8),inst_26853,inst_26843);
} else {
if((state_val_26867 === (9))){
var state_26866__$1 = state_26866;
var statearr_26877_26898 = state_26866__$1;
(statearr_26877_26898[(2)] = tc);

(statearr_26877_26898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (5))){
var inst_26846 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26847 = cljs.core.async.close_BANG_.call(null,fc);
var state_26866__$1 = (function (){var statearr_26878 = state_26866;
(statearr_26878[(8)] = inst_26846);

return statearr_26878;
})();
var statearr_26879_26899 = state_26866__$1;
(statearr_26879_26899[(2)] = inst_26847);

(statearr_26879_26899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (14))){
var inst_26860 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
var statearr_26880_26900 = state_26866__$1;
(statearr_26880_26900[(2)] = inst_26860);

(statearr_26880_26900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (10))){
var state_26866__$1 = state_26866;
var statearr_26881_26901 = state_26866__$1;
(statearr_26881_26901[(2)] = fc);

(statearr_26881_26901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26867 === (8))){
var inst_26855 = (state_26866[(2)]);
var state_26866__$1 = state_26866;
if(cljs.core.truth_(inst_26855)){
var statearr_26882_26902 = state_26866__$1;
(statearr_26882_26902[(1)] = (12));

} else {
var statearr_26883_26903 = state_26866__$1;
(statearr_26883_26903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___26889,tc,fc))
;
return ((function (switch__26349__auto__,c__26439__auto___26889,tc,fc){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_26884 = [null,null,null,null,null,null,null,null,null];
(statearr_26884[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_26884[(1)] = (1));

return statearr_26884;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_26866){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26885){if((e26885 instanceof Object)){
var ex__26353__auto__ = e26885;
var statearr_26886_26904 = state_26866;
(statearr_26886_26904[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26905 = state_26866;
state_26866 = G__26905;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_26866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_26866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___26889,tc,fc))
})();
var state__26441__auto__ = (function (){var statearr_26887 = f__26440__auto__.call(null);
(statearr_26887[(6)] = c__26439__auto___26889);

return statearr_26887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___26889,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__){
return (function (state_26926){
var state_val_26927 = (state_26926[(1)]);
if((state_val_26927 === (7))){
var inst_26922 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26928_26946 = state_26926__$1;
(statearr_26928_26946[(2)] = inst_26922);

(statearr_26928_26946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (1))){
var inst_26906 = init;
var state_26926__$1 = (function (){var statearr_26929 = state_26926;
(statearr_26929[(7)] = inst_26906);

return statearr_26929;
})();
var statearr_26930_26947 = state_26926__$1;
(statearr_26930_26947[(2)] = null);

(statearr_26930_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (4))){
var inst_26909 = (state_26926[(8)]);
var inst_26909__$1 = (state_26926[(2)]);
var inst_26910 = (inst_26909__$1 == null);
var state_26926__$1 = (function (){var statearr_26931 = state_26926;
(statearr_26931[(8)] = inst_26909__$1);

return statearr_26931;
})();
if(cljs.core.truth_(inst_26910)){
var statearr_26932_26948 = state_26926__$1;
(statearr_26932_26948[(1)] = (5));

} else {
var statearr_26933_26949 = state_26926__$1;
(statearr_26933_26949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (6))){
var inst_26913 = (state_26926[(9)]);
var inst_26909 = (state_26926[(8)]);
var inst_26906 = (state_26926[(7)]);
var inst_26913__$1 = f.call(null,inst_26906,inst_26909);
var inst_26914 = cljs.core.reduced_QMARK_.call(null,inst_26913__$1);
var state_26926__$1 = (function (){var statearr_26934 = state_26926;
(statearr_26934[(9)] = inst_26913__$1);

return statearr_26934;
})();
if(inst_26914){
var statearr_26935_26950 = state_26926__$1;
(statearr_26935_26950[(1)] = (8));

} else {
var statearr_26936_26951 = state_26926__$1;
(statearr_26936_26951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (3))){
var inst_26924 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26926__$1,inst_26924);
} else {
if((state_val_26927 === (2))){
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26926__$1,(4),ch);
} else {
if((state_val_26927 === (9))){
var inst_26913 = (state_26926[(9)]);
var inst_26906 = inst_26913;
var state_26926__$1 = (function (){var statearr_26937 = state_26926;
(statearr_26937[(7)] = inst_26906);

return statearr_26937;
})();
var statearr_26938_26952 = state_26926__$1;
(statearr_26938_26952[(2)] = null);

(statearr_26938_26952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (5))){
var inst_26906 = (state_26926[(7)]);
var state_26926__$1 = state_26926;
var statearr_26939_26953 = state_26926__$1;
(statearr_26939_26953[(2)] = inst_26906);

(statearr_26939_26953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (10))){
var inst_26920 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26940_26954 = state_26926__$1;
(statearr_26940_26954[(2)] = inst_26920);

(statearr_26940_26954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (8))){
var inst_26913 = (state_26926[(9)]);
var inst_26916 = cljs.core.deref.call(null,inst_26913);
var state_26926__$1 = state_26926;
var statearr_26941_26955 = state_26926__$1;
(statearr_26941_26955[(2)] = inst_26916);

(statearr_26941_26955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto__))
;
return ((function (switch__26349__auto__,c__26439__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26350__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26350__auto____0 = (function (){
var statearr_26942 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26942[(0)] = cljs$core$async$reduce_$_state_machine__26350__auto__);

(statearr_26942[(1)] = (1));

return statearr_26942;
});
var cljs$core$async$reduce_$_state_machine__26350__auto____1 = (function (state_26926){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26943){if((e26943 instanceof Object)){
var ex__26353__auto__ = e26943;
var statearr_26944_26956 = state_26926;
(statearr_26944_26956[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26957 = state_26926;
state_26926 = G__26957;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26350__auto__ = function(state_26926){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26350__auto____1.call(this,state_26926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26350__auto____0;
cljs$core$async$reduce_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26350__auto____1;
return cljs$core$async$reduce_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_26945 = f__26440__auto__.call(null);
(statearr_26945[(6)] = c__26439__auto__);

return statearr_26945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,f__$1){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__,f__$1){
return (function (state_26963){
var state_val_26964 = (state_26963[(1)]);
if((state_val_26964 === (1))){
var inst_26958 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26963__$1 = state_26963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26963__$1,(2),inst_26958);
} else {
if((state_val_26964 === (2))){
var inst_26960 = (state_26963[(2)]);
var inst_26961 = f__$1.call(null,inst_26960);
var state_26963__$1 = state_26963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26963__$1,inst_26961);
} else {
return null;
}
}
});})(c__26439__auto__,f__$1))
;
return ((function (switch__26349__auto__,c__26439__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26350__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26350__auto____0 = (function (){
var statearr_26965 = [null,null,null,null,null,null,null];
(statearr_26965[(0)] = cljs$core$async$transduce_$_state_machine__26350__auto__);

(statearr_26965[(1)] = (1));

return statearr_26965;
});
var cljs$core$async$transduce_$_state_machine__26350__auto____1 = (function (state_26963){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e26966){if((e26966 instanceof Object)){
var ex__26353__auto__ = e26966;
var statearr_26967_26969 = state_26963;
(statearr_26967_26969[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26970 = state_26963;
state_26963 = G__26970;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26350__auto__ = function(state_26963){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26350__auto____1.call(this,state_26963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26350__auto____0;
cljs$core$async$transduce_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26350__auto____1;
return cljs$core$async$transduce_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__,f__$1))
})();
var state__26441__auto__ = (function (){var statearr_26968 = f__26440__auto__.call(null);
(statearr_26968[(6)] = c__26439__auto__);

return statearr_26968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,f__$1))
);

return c__26439__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26972 = arguments.length;
switch (G__26972) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__){
return (function (state_26997){
var state_val_26998 = (state_26997[(1)]);
if((state_val_26998 === (7))){
var inst_26979 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_26999_27020 = state_26997__$1;
(statearr_26999_27020[(2)] = inst_26979);

(statearr_26999_27020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (1))){
var inst_26973 = cljs.core.seq.call(null,coll);
var inst_26974 = inst_26973;
var state_26997__$1 = (function (){var statearr_27000 = state_26997;
(statearr_27000[(7)] = inst_26974);

return statearr_27000;
})();
var statearr_27001_27021 = state_26997__$1;
(statearr_27001_27021[(2)] = null);

(statearr_27001_27021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (4))){
var inst_26974 = (state_26997[(7)]);
var inst_26977 = cljs.core.first.call(null,inst_26974);
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26997__$1,(7),ch,inst_26977);
} else {
if((state_val_26998 === (13))){
var inst_26991 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_27002_27022 = state_26997__$1;
(statearr_27002_27022[(2)] = inst_26991);

(statearr_27002_27022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (6))){
var inst_26982 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
if(cljs.core.truth_(inst_26982)){
var statearr_27003_27023 = state_26997__$1;
(statearr_27003_27023[(1)] = (8));

} else {
var statearr_27004_27024 = state_26997__$1;
(statearr_27004_27024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (3))){
var inst_26995 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26997__$1,inst_26995);
} else {
if((state_val_26998 === (12))){
var state_26997__$1 = state_26997;
var statearr_27005_27025 = state_26997__$1;
(statearr_27005_27025[(2)] = null);

(statearr_27005_27025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (2))){
var inst_26974 = (state_26997[(7)]);
var state_26997__$1 = state_26997;
if(cljs.core.truth_(inst_26974)){
var statearr_27006_27026 = state_26997__$1;
(statearr_27006_27026[(1)] = (4));

} else {
var statearr_27007_27027 = state_26997__$1;
(statearr_27007_27027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (11))){
var inst_26988 = cljs.core.async.close_BANG_.call(null,ch);
var state_26997__$1 = state_26997;
var statearr_27008_27028 = state_26997__$1;
(statearr_27008_27028[(2)] = inst_26988);

(statearr_27008_27028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (9))){
var state_26997__$1 = state_26997;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27009_27029 = state_26997__$1;
(statearr_27009_27029[(1)] = (11));

} else {
var statearr_27010_27030 = state_26997__$1;
(statearr_27010_27030[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (5))){
var inst_26974 = (state_26997[(7)]);
var state_26997__$1 = state_26997;
var statearr_27011_27031 = state_26997__$1;
(statearr_27011_27031[(2)] = inst_26974);

(statearr_27011_27031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (10))){
var inst_26993 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_27012_27032 = state_26997__$1;
(statearr_27012_27032[(2)] = inst_26993);

(statearr_27012_27032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (8))){
var inst_26974 = (state_26997[(7)]);
var inst_26984 = cljs.core.next.call(null,inst_26974);
var inst_26974__$1 = inst_26984;
var state_26997__$1 = (function (){var statearr_27013 = state_26997;
(statearr_27013[(7)] = inst_26974__$1);

return statearr_27013;
})();
var statearr_27014_27033 = state_26997__$1;
(statearr_27014_27033[(2)] = null);

(statearr_27014_27033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto__))
;
return ((function (switch__26349__auto__,c__26439__auto__){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_27015 = [null,null,null,null,null,null,null,null];
(statearr_27015[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_27015[(1)] = (1));

return statearr_27015;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_26997){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_26997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27016){if((e27016 instanceof Object)){
var ex__26353__auto__ = e27016;
var statearr_27017_27034 = state_26997;
(statearr_27017_27034[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27035 = state_26997;
state_26997 = G__27035;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_26997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_26997);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_27018 = f__26440__auto__.call(null);
(statearr_27018[(6)] = c__26439__auto__);

return statearr_27018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27036 = (function (ch,cs,meta27037){
this.ch = ch;
this.cs = cs;
this.meta27037 = meta27037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27038,meta27037__$1){
var self__ = this;
var _27038__$1 = this;
return (new cljs.core.async.t_cljs$core$async27036(self__.ch,self__.cs,meta27037__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27038){
var self__ = this;
var _27038__$1 = this;
return self__.meta27037;
});})(cs))
;

cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27036.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27037","meta27037",-1612193712,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27036";

cljs.core.async.t_cljs$core$async27036.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27036");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27036.
 */
cljs.core.async.__GT_t_cljs$core$async27036 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27036(ch__$1,cs__$1,meta27037){
return (new cljs.core.async.t_cljs$core$async27036(ch__$1,cs__$1,meta27037));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27036(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26439__auto___27258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___27258,cs,m,dchan,dctr,done){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___27258,cs,m,dchan,dctr,done){
return (function (state_27173){
var state_val_27174 = (state_27173[(1)]);
if((state_val_27174 === (7))){
var inst_27169 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27175_27259 = state_27173__$1;
(statearr_27175_27259[(2)] = inst_27169);

(statearr_27175_27259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (20))){
var inst_27072 = (state_27173[(7)]);
var inst_27084 = cljs.core.first.call(null,inst_27072);
var inst_27085 = cljs.core.nth.call(null,inst_27084,(0),null);
var inst_27086 = cljs.core.nth.call(null,inst_27084,(1),null);
var state_27173__$1 = (function (){var statearr_27176 = state_27173;
(statearr_27176[(8)] = inst_27085);

return statearr_27176;
})();
if(cljs.core.truth_(inst_27086)){
var statearr_27177_27260 = state_27173__$1;
(statearr_27177_27260[(1)] = (22));

} else {
var statearr_27178_27261 = state_27173__$1;
(statearr_27178_27261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (27))){
var inst_27121 = (state_27173[(9)]);
var inst_27116 = (state_27173[(10)]);
var inst_27114 = (state_27173[(11)]);
var inst_27041 = (state_27173[(12)]);
var inst_27121__$1 = cljs.core._nth.call(null,inst_27114,inst_27116);
var inst_27122 = cljs.core.async.put_BANG_.call(null,inst_27121__$1,inst_27041,done);
var state_27173__$1 = (function (){var statearr_27179 = state_27173;
(statearr_27179[(9)] = inst_27121__$1);

return statearr_27179;
})();
if(cljs.core.truth_(inst_27122)){
var statearr_27180_27262 = state_27173__$1;
(statearr_27180_27262[(1)] = (30));

} else {
var statearr_27181_27263 = state_27173__$1;
(statearr_27181_27263[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (1))){
var state_27173__$1 = state_27173;
var statearr_27182_27264 = state_27173__$1;
(statearr_27182_27264[(2)] = null);

(statearr_27182_27264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (24))){
var inst_27072 = (state_27173[(7)]);
var inst_27091 = (state_27173[(2)]);
var inst_27092 = cljs.core.next.call(null,inst_27072);
var inst_27050 = inst_27092;
var inst_27051 = null;
var inst_27052 = (0);
var inst_27053 = (0);
var state_27173__$1 = (function (){var statearr_27183 = state_27173;
(statearr_27183[(13)] = inst_27052);

(statearr_27183[(14)] = inst_27050);

(statearr_27183[(15)] = inst_27053);

(statearr_27183[(16)] = inst_27051);

(statearr_27183[(17)] = inst_27091);

return statearr_27183;
})();
var statearr_27184_27265 = state_27173__$1;
(statearr_27184_27265[(2)] = null);

(statearr_27184_27265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (39))){
var state_27173__$1 = state_27173;
var statearr_27188_27266 = state_27173__$1;
(statearr_27188_27266[(2)] = null);

(statearr_27188_27266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (4))){
var inst_27041 = (state_27173[(12)]);
var inst_27041__$1 = (state_27173[(2)]);
var inst_27042 = (inst_27041__$1 == null);
var state_27173__$1 = (function (){var statearr_27189 = state_27173;
(statearr_27189[(12)] = inst_27041__$1);

return statearr_27189;
})();
if(cljs.core.truth_(inst_27042)){
var statearr_27190_27267 = state_27173__$1;
(statearr_27190_27267[(1)] = (5));

} else {
var statearr_27191_27268 = state_27173__$1;
(statearr_27191_27268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (15))){
var inst_27052 = (state_27173[(13)]);
var inst_27050 = (state_27173[(14)]);
var inst_27053 = (state_27173[(15)]);
var inst_27051 = (state_27173[(16)]);
var inst_27068 = (state_27173[(2)]);
var inst_27069 = (inst_27053 + (1));
var tmp27185 = inst_27052;
var tmp27186 = inst_27050;
var tmp27187 = inst_27051;
var inst_27050__$1 = tmp27186;
var inst_27051__$1 = tmp27187;
var inst_27052__$1 = tmp27185;
var inst_27053__$1 = inst_27069;
var state_27173__$1 = (function (){var statearr_27192 = state_27173;
(statearr_27192[(13)] = inst_27052__$1);

(statearr_27192[(14)] = inst_27050__$1);

(statearr_27192[(18)] = inst_27068);

(statearr_27192[(15)] = inst_27053__$1);

(statearr_27192[(16)] = inst_27051__$1);

return statearr_27192;
})();
var statearr_27193_27269 = state_27173__$1;
(statearr_27193_27269[(2)] = null);

(statearr_27193_27269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (21))){
var inst_27095 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27197_27270 = state_27173__$1;
(statearr_27197_27270[(2)] = inst_27095);

(statearr_27197_27270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (31))){
var inst_27121 = (state_27173[(9)]);
var inst_27125 = done.call(null,null);
var inst_27126 = cljs.core.async.untap_STAR_.call(null,m,inst_27121);
var state_27173__$1 = (function (){var statearr_27198 = state_27173;
(statearr_27198[(19)] = inst_27125);

return statearr_27198;
})();
var statearr_27199_27271 = state_27173__$1;
(statearr_27199_27271[(2)] = inst_27126);

(statearr_27199_27271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (32))){
var inst_27113 = (state_27173[(20)]);
var inst_27116 = (state_27173[(10)]);
var inst_27114 = (state_27173[(11)]);
var inst_27115 = (state_27173[(21)]);
var inst_27128 = (state_27173[(2)]);
var inst_27129 = (inst_27116 + (1));
var tmp27194 = inst_27113;
var tmp27195 = inst_27114;
var tmp27196 = inst_27115;
var inst_27113__$1 = tmp27194;
var inst_27114__$1 = tmp27195;
var inst_27115__$1 = tmp27196;
var inst_27116__$1 = inst_27129;
var state_27173__$1 = (function (){var statearr_27200 = state_27173;
(statearr_27200[(20)] = inst_27113__$1);

(statearr_27200[(10)] = inst_27116__$1);

(statearr_27200[(11)] = inst_27114__$1);

(statearr_27200[(22)] = inst_27128);

(statearr_27200[(21)] = inst_27115__$1);

return statearr_27200;
})();
var statearr_27201_27272 = state_27173__$1;
(statearr_27201_27272[(2)] = null);

(statearr_27201_27272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (40))){
var inst_27141 = (state_27173[(23)]);
var inst_27145 = done.call(null,null);
var inst_27146 = cljs.core.async.untap_STAR_.call(null,m,inst_27141);
var state_27173__$1 = (function (){var statearr_27202 = state_27173;
(statearr_27202[(24)] = inst_27145);

return statearr_27202;
})();
var statearr_27203_27273 = state_27173__$1;
(statearr_27203_27273[(2)] = inst_27146);

(statearr_27203_27273[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (33))){
var inst_27132 = (state_27173[(25)]);
var inst_27134 = cljs.core.chunked_seq_QMARK_.call(null,inst_27132);
var state_27173__$1 = state_27173;
if(inst_27134){
var statearr_27204_27274 = state_27173__$1;
(statearr_27204_27274[(1)] = (36));

} else {
var statearr_27205_27275 = state_27173__$1;
(statearr_27205_27275[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (13))){
var inst_27062 = (state_27173[(26)]);
var inst_27065 = cljs.core.async.close_BANG_.call(null,inst_27062);
var state_27173__$1 = state_27173;
var statearr_27206_27276 = state_27173__$1;
(statearr_27206_27276[(2)] = inst_27065);

(statearr_27206_27276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (22))){
var inst_27085 = (state_27173[(8)]);
var inst_27088 = cljs.core.async.close_BANG_.call(null,inst_27085);
var state_27173__$1 = state_27173;
var statearr_27207_27277 = state_27173__$1;
(statearr_27207_27277[(2)] = inst_27088);

(statearr_27207_27277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (36))){
var inst_27132 = (state_27173[(25)]);
var inst_27136 = cljs.core.chunk_first.call(null,inst_27132);
var inst_27137 = cljs.core.chunk_rest.call(null,inst_27132);
var inst_27138 = cljs.core.count.call(null,inst_27136);
var inst_27113 = inst_27137;
var inst_27114 = inst_27136;
var inst_27115 = inst_27138;
var inst_27116 = (0);
var state_27173__$1 = (function (){var statearr_27208 = state_27173;
(statearr_27208[(20)] = inst_27113);

(statearr_27208[(10)] = inst_27116);

(statearr_27208[(11)] = inst_27114);

(statearr_27208[(21)] = inst_27115);

return statearr_27208;
})();
var statearr_27209_27278 = state_27173__$1;
(statearr_27209_27278[(2)] = null);

(statearr_27209_27278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (41))){
var inst_27132 = (state_27173[(25)]);
var inst_27148 = (state_27173[(2)]);
var inst_27149 = cljs.core.next.call(null,inst_27132);
var inst_27113 = inst_27149;
var inst_27114 = null;
var inst_27115 = (0);
var inst_27116 = (0);
var state_27173__$1 = (function (){var statearr_27210 = state_27173;
(statearr_27210[(27)] = inst_27148);

(statearr_27210[(20)] = inst_27113);

(statearr_27210[(10)] = inst_27116);

(statearr_27210[(11)] = inst_27114);

(statearr_27210[(21)] = inst_27115);

return statearr_27210;
})();
var statearr_27211_27279 = state_27173__$1;
(statearr_27211_27279[(2)] = null);

(statearr_27211_27279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (43))){
var state_27173__$1 = state_27173;
var statearr_27212_27280 = state_27173__$1;
(statearr_27212_27280[(2)] = null);

(statearr_27212_27280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (29))){
var inst_27157 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27213_27281 = state_27173__$1;
(statearr_27213_27281[(2)] = inst_27157);

(statearr_27213_27281[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (44))){
var inst_27166 = (state_27173[(2)]);
var state_27173__$1 = (function (){var statearr_27214 = state_27173;
(statearr_27214[(28)] = inst_27166);

return statearr_27214;
})();
var statearr_27215_27282 = state_27173__$1;
(statearr_27215_27282[(2)] = null);

(statearr_27215_27282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (6))){
var inst_27105 = (state_27173[(29)]);
var inst_27104 = cljs.core.deref.call(null,cs);
var inst_27105__$1 = cljs.core.keys.call(null,inst_27104);
var inst_27106 = cljs.core.count.call(null,inst_27105__$1);
var inst_27107 = cljs.core.reset_BANG_.call(null,dctr,inst_27106);
var inst_27112 = cljs.core.seq.call(null,inst_27105__$1);
var inst_27113 = inst_27112;
var inst_27114 = null;
var inst_27115 = (0);
var inst_27116 = (0);
var state_27173__$1 = (function (){var statearr_27216 = state_27173;
(statearr_27216[(29)] = inst_27105__$1);

(statearr_27216[(20)] = inst_27113);

(statearr_27216[(10)] = inst_27116);

(statearr_27216[(11)] = inst_27114);

(statearr_27216[(30)] = inst_27107);

(statearr_27216[(21)] = inst_27115);

return statearr_27216;
})();
var statearr_27217_27283 = state_27173__$1;
(statearr_27217_27283[(2)] = null);

(statearr_27217_27283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (28))){
var inst_27113 = (state_27173[(20)]);
var inst_27132 = (state_27173[(25)]);
var inst_27132__$1 = cljs.core.seq.call(null,inst_27113);
var state_27173__$1 = (function (){var statearr_27218 = state_27173;
(statearr_27218[(25)] = inst_27132__$1);

return statearr_27218;
})();
if(inst_27132__$1){
var statearr_27219_27284 = state_27173__$1;
(statearr_27219_27284[(1)] = (33));

} else {
var statearr_27220_27285 = state_27173__$1;
(statearr_27220_27285[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (25))){
var inst_27116 = (state_27173[(10)]);
var inst_27115 = (state_27173[(21)]);
var inst_27118 = (inst_27116 < inst_27115);
var inst_27119 = inst_27118;
var state_27173__$1 = state_27173;
if(cljs.core.truth_(inst_27119)){
var statearr_27221_27286 = state_27173__$1;
(statearr_27221_27286[(1)] = (27));

} else {
var statearr_27222_27287 = state_27173__$1;
(statearr_27222_27287[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (34))){
var state_27173__$1 = state_27173;
var statearr_27223_27288 = state_27173__$1;
(statearr_27223_27288[(2)] = null);

(statearr_27223_27288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (17))){
var state_27173__$1 = state_27173;
var statearr_27224_27289 = state_27173__$1;
(statearr_27224_27289[(2)] = null);

(statearr_27224_27289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (3))){
var inst_27171 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27173__$1,inst_27171);
} else {
if((state_val_27174 === (12))){
var inst_27100 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27225_27290 = state_27173__$1;
(statearr_27225_27290[(2)] = inst_27100);

(statearr_27225_27290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (2))){
var state_27173__$1 = state_27173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27173__$1,(4),ch);
} else {
if((state_val_27174 === (23))){
var state_27173__$1 = state_27173;
var statearr_27226_27291 = state_27173__$1;
(statearr_27226_27291[(2)] = null);

(statearr_27226_27291[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (35))){
var inst_27155 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27227_27292 = state_27173__$1;
(statearr_27227_27292[(2)] = inst_27155);

(statearr_27227_27292[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (19))){
var inst_27072 = (state_27173[(7)]);
var inst_27076 = cljs.core.chunk_first.call(null,inst_27072);
var inst_27077 = cljs.core.chunk_rest.call(null,inst_27072);
var inst_27078 = cljs.core.count.call(null,inst_27076);
var inst_27050 = inst_27077;
var inst_27051 = inst_27076;
var inst_27052 = inst_27078;
var inst_27053 = (0);
var state_27173__$1 = (function (){var statearr_27228 = state_27173;
(statearr_27228[(13)] = inst_27052);

(statearr_27228[(14)] = inst_27050);

(statearr_27228[(15)] = inst_27053);

(statearr_27228[(16)] = inst_27051);

return statearr_27228;
})();
var statearr_27229_27293 = state_27173__$1;
(statearr_27229_27293[(2)] = null);

(statearr_27229_27293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (11))){
var inst_27050 = (state_27173[(14)]);
var inst_27072 = (state_27173[(7)]);
var inst_27072__$1 = cljs.core.seq.call(null,inst_27050);
var state_27173__$1 = (function (){var statearr_27230 = state_27173;
(statearr_27230[(7)] = inst_27072__$1);

return statearr_27230;
})();
if(inst_27072__$1){
var statearr_27231_27294 = state_27173__$1;
(statearr_27231_27294[(1)] = (16));

} else {
var statearr_27232_27295 = state_27173__$1;
(statearr_27232_27295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (9))){
var inst_27102 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27233_27296 = state_27173__$1;
(statearr_27233_27296[(2)] = inst_27102);

(statearr_27233_27296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (5))){
var inst_27048 = cljs.core.deref.call(null,cs);
var inst_27049 = cljs.core.seq.call(null,inst_27048);
var inst_27050 = inst_27049;
var inst_27051 = null;
var inst_27052 = (0);
var inst_27053 = (0);
var state_27173__$1 = (function (){var statearr_27234 = state_27173;
(statearr_27234[(13)] = inst_27052);

(statearr_27234[(14)] = inst_27050);

(statearr_27234[(15)] = inst_27053);

(statearr_27234[(16)] = inst_27051);

return statearr_27234;
})();
var statearr_27235_27297 = state_27173__$1;
(statearr_27235_27297[(2)] = null);

(statearr_27235_27297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (14))){
var state_27173__$1 = state_27173;
var statearr_27236_27298 = state_27173__$1;
(statearr_27236_27298[(2)] = null);

(statearr_27236_27298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (45))){
var inst_27163 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27237_27299 = state_27173__$1;
(statearr_27237_27299[(2)] = inst_27163);

(statearr_27237_27299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (26))){
var inst_27105 = (state_27173[(29)]);
var inst_27159 = (state_27173[(2)]);
var inst_27160 = cljs.core.seq.call(null,inst_27105);
var state_27173__$1 = (function (){var statearr_27238 = state_27173;
(statearr_27238[(31)] = inst_27159);

return statearr_27238;
})();
if(inst_27160){
var statearr_27239_27300 = state_27173__$1;
(statearr_27239_27300[(1)] = (42));

} else {
var statearr_27240_27301 = state_27173__$1;
(statearr_27240_27301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (16))){
var inst_27072 = (state_27173[(7)]);
var inst_27074 = cljs.core.chunked_seq_QMARK_.call(null,inst_27072);
var state_27173__$1 = state_27173;
if(inst_27074){
var statearr_27241_27302 = state_27173__$1;
(statearr_27241_27302[(1)] = (19));

} else {
var statearr_27242_27303 = state_27173__$1;
(statearr_27242_27303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (38))){
var inst_27152 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27243_27304 = state_27173__$1;
(statearr_27243_27304[(2)] = inst_27152);

(statearr_27243_27304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (30))){
var state_27173__$1 = state_27173;
var statearr_27244_27305 = state_27173__$1;
(statearr_27244_27305[(2)] = null);

(statearr_27244_27305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (10))){
var inst_27053 = (state_27173[(15)]);
var inst_27051 = (state_27173[(16)]);
var inst_27061 = cljs.core._nth.call(null,inst_27051,inst_27053);
var inst_27062 = cljs.core.nth.call(null,inst_27061,(0),null);
var inst_27063 = cljs.core.nth.call(null,inst_27061,(1),null);
var state_27173__$1 = (function (){var statearr_27245 = state_27173;
(statearr_27245[(26)] = inst_27062);

return statearr_27245;
})();
if(cljs.core.truth_(inst_27063)){
var statearr_27246_27306 = state_27173__$1;
(statearr_27246_27306[(1)] = (13));

} else {
var statearr_27247_27307 = state_27173__$1;
(statearr_27247_27307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (18))){
var inst_27098 = (state_27173[(2)]);
var state_27173__$1 = state_27173;
var statearr_27248_27308 = state_27173__$1;
(statearr_27248_27308[(2)] = inst_27098);

(statearr_27248_27308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (42))){
var state_27173__$1 = state_27173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27173__$1,(45),dchan);
} else {
if((state_val_27174 === (37))){
var inst_27132 = (state_27173[(25)]);
var inst_27141 = (state_27173[(23)]);
var inst_27041 = (state_27173[(12)]);
var inst_27141__$1 = cljs.core.first.call(null,inst_27132);
var inst_27142 = cljs.core.async.put_BANG_.call(null,inst_27141__$1,inst_27041,done);
var state_27173__$1 = (function (){var statearr_27249 = state_27173;
(statearr_27249[(23)] = inst_27141__$1);

return statearr_27249;
})();
if(cljs.core.truth_(inst_27142)){
var statearr_27250_27309 = state_27173__$1;
(statearr_27250_27309[(1)] = (39));

} else {
var statearr_27251_27310 = state_27173__$1;
(statearr_27251_27310[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27174 === (8))){
var inst_27052 = (state_27173[(13)]);
var inst_27053 = (state_27173[(15)]);
var inst_27055 = (inst_27053 < inst_27052);
var inst_27056 = inst_27055;
var state_27173__$1 = state_27173;
if(cljs.core.truth_(inst_27056)){
var statearr_27252_27311 = state_27173__$1;
(statearr_27252_27311[(1)] = (10));

} else {
var statearr_27253_27312 = state_27173__$1;
(statearr_27253_27312[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___27258,cs,m,dchan,dctr,done))
;
return ((function (switch__26349__auto__,c__26439__auto___27258,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26350__auto__ = null;
var cljs$core$async$mult_$_state_machine__26350__auto____0 = (function (){
var statearr_27254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27254[(0)] = cljs$core$async$mult_$_state_machine__26350__auto__);

(statearr_27254[(1)] = (1));

return statearr_27254;
});
var cljs$core$async$mult_$_state_machine__26350__auto____1 = (function (state_27173){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_27173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27255){if((e27255 instanceof Object)){
var ex__26353__auto__ = e27255;
var statearr_27256_27313 = state_27173;
(statearr_27256_27313[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27314 = state_27173;
state_27173 = G__27314;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26350__auto__ = function(state_27173){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26350__auto____1.call(this,state_27173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26350__auto____0;
cljs$core$async$mult_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26350__auto____1;
return cljs$core$async$mult_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___27258,cs,m,dchan,dctr,done))
})();
var state__26441__auto__ = (function (){var statearr_27257 = f__26440__auto__.call(null);
(statearr_27257[(6)] = c__26439__auto___27258);

return statearr_27257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___27258,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27316 = arguments.length;
switch (G__27316) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27328 = arguments.length;
var i__4500__auto___27329 = (0);
while(true){
if((i__4500__auto___27329 < len__4499__auto___27328)){
args__4502__auto__.push((arguments[i__4500__auto___27329]));

var G__27330 = (i__4500__auto___27329 + (1));
i__4500__auto___27329 = G__27330;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27322){
var map__27323 = p__27322;
var map__27323__$1 = ((((!((map__27323 == null)))?(((((map__27323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323):map__27323);
var opts = map__27323__$1;
var statearr_27325_27331 = state;
(statearr_27325_27331[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27323,map__27323__$1,opts){
return (function (val){
var statearr_27326_27332 = state;
(statearr_27326_27332[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27323,map__27323__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27327_27333 = state;
(statearr_27327_27333[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27318){
var G__27319 = cljs.core.first.call(null,seq27318);
var seq27318__$1 = cljs.core.next.call(null,seq27318);
var G__27320 = cljs.core.first.call(null,seq27318__$1);
var seq27318__$2 = cljs.core.next.call(null,seq27318__$1);
var G__27321 = cljs.core.first.call(null,seq27318__$2);
var seq27318__$3 = cljs.core.next.call(null,seq27318__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27319,G__27320,G__27321,seq27318__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27334 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27335){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27335 = meta27335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27336,meta27335__$1){
var self__ = this;
var _27336__$1 = this;
return (new cljs.core.async.t_cljs$core$async27334(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27335__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27336){
var self__ = this;
var _27336__$1 = this;
return self__.meta27335;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27335","meta27335",-264573639,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27334";

cljs.core.async.t_cljs$core$async27334.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27334");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27334.
 */
cljs.core.async.__GT_t_cljs$core$async27334 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27334(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27335){
return (new cljs.core.async.t_cljs$core$async27334(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27335));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27334(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26439__auto___27498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___27498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___27498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27438){
var state_val_27439 = (state_27438[(1)]);
if((state_val_27439 === (7))){
var inst_27353 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27440_27499 = state_27438__$1;
(statearr_27440_27499[(2)] = inst_27353);

(statearr_27440_27499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (20))){
var inst_27365 = (state_27438[(7)]);
var state_27438__$1 = state_27438;
var statearr_27441_27500 = state_27438__$1;
(statearr_27441_27500[(2)] = inst_27365);

(statearr_27441_27500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (27))){
var state_27438__$1 = state_27438;
var statearr_27442_27501 = state_27438__$1;
(statearr_27442_27501[(2)] = null);

(statearr_27442_27501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (1))){
var inst_27340 = (state_27438[(8)]);
var inst_27340__$1 = calc_state.call(null);
var inst_27342 = (inst_27340__$1 == null);
var inst_27343 = cljs.core.not.call(null,inst_27342);
var state_27438__$1 = (function (){var statearr_27443 = state_27438;
(statearr_27443[(8)] = inst_27340__$1);

return statearr_27443;
})();
if(inst_27343){
var statearr_27444_27502 = state_27438__$1;
(statearr_27444_27502[(1)] = (2));

} else {
var statearr_27445_27503 = state_27438__$1;
(statearr_27445_27503[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (24))){
var inst_27398 = (state_27438[(9)]);
var inst_27389 = (state_27438[(10)]);
var inst_27412 = (state_27438[(11)]);
var inst_27412__$1 = inst_27389.call(null,inst_27398);
var state_27438__$1 = (function (){var statearr_27446 = state_27438;
(statearr_27446[(11)] = inst_27412__$1);

return statearr_27446;
})();
if(cljs.core.truth_(inst_27412__$1)){
var statearr_27447_27504 = state_27438__$1;
(statearr_27447_27504[(1)] = (29));

} else {
var statearr_27448_27505 = state_27438__$1;
(statearr_27448_27505[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (4))){
var inst_27356 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27356)){
var statearr_27449_27506 = state_27438__$1;
(statearr_27449_27506[(1)] = (8));

} else {
var statearr_27450_27507 = state_27438__$1;
(statearr_27450_27507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (15))){
var inst_27383 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27383)){
var statearr_27451_27508 = state_27438__$1;
(statearr_27451_27508[(1)] = (19));

} else {
var statearr_27452_27509 = state_27438__$1;
(statearr_27452_27509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (21))){
var inst_27388 = (state_27438[(12)]);
var inst_27388__$1 = (state_27438[(2)]);
var inst_27389 = cljs.core.get.call(null,inst_27388__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27390 = cljs.core.get.call(null,inst_27388__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27391 = cljs.core.get.call(null,inst_27388__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27438__$1 = (function (){var statearr_27453 = state_27438;
(statearr_27453[(13)] = inst_27390);

(statearr_27453[(10)] = inst_27389);

(statearr_27453[(12)] = inst_27388__$1);

return statearr_27453;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27438__$1,(22),inst_27391);
} else {
if((state_val_27439 === (31))){
var inst_27420 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27420)){
var statearr_27454_27510 = state_27438__$1;
(statearr_27454_27510[(1)] = (32));

} else {
var statearr_27455_27511 = state_27438__$1;
(statearr_27455_27511[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (32))){
var inst_27397 = (state_27438[(14)]);
var state_27438__$1 = state_27438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27438__$1,(35),out,inst_27397);
} else {
if((state_val_27439 === (33))){
var inst_27388 = (state_27438[(12)]);
var inst_27365 = inst_27388;
var state_27438__$1 = (function (){var statearr_27456 = state_27438;
(statearr_27456[(7)] = inst_27365);

return statearr_27456;
})();
var statearr_27457_27512 = state_27438__$1;
(statearr_27457_27512[(2)] = null);

(statearr_27457_27512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (13))){
var inst_27365 = (state_27438[(7)]);
var inst_27372 = inst_27365.cljs$lang$protocol_mask$partition0$;
var inst_27373 = (inst_27372 & (64));
var inst_27374 = inst_27365.cljs$core$ISeq$;
var inst_27375 = (cljs.core.PROTOCOL_SENTINEL === inst_27374);
var inst_27376 = ((inst_27373) || (inst_27375));
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27376)){
var statearr_27458_27513 = state_27438__$1;
(statearr_27458_27513[(1)] = (16));

} else {
var statearr_27459_27514 = state_27438__$1;
(statearr_27459_27514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (22))){
var inst_27397 = (state_27438[(14)]);
var inst_27398 = (state_27438[(9)]);
var inst_27396 = (state_27438[(2)]);
var inst_27397__$1 = cljs.core.nth.call(null,inst_27396,(0),null);
var inst_27398__$1 = cljs.core.nth.call(null,inst_27396,(1),null);
var inst_27399 = (inst_27397__$1 == null);
var inst_27400 = cljs.core._EQ_.call(null,inst_27398__$1,change);
var inst_27401 = ((inst_27399) || (inst_27400));
var state_27438__$1 = (function (){var statearr_27460 = state_27438;
(statearr_27460[(14)] = inst_27397__$1);

(statearr_27460[(9)] = inst_27398__$1);

return statearr_27460;
})();
if(cljs.core.truth_(inst_27401)){
var statearr_27461_27515 = state_27438__$1;
(statearr_27461_27515[(1)] = (23));

} else {
var statearr_27462_27516 = state_27438__$1;
(statearr_27462_27516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (36))){
var inst_27388 = (state_27438[(12)]);
var inst_27365 = inst_27388;
var state_27438__$1 = (function (){var statearr_27463 = state_27438;
(statearr_27463[(7)] = inst_27365);

return statearr_27463;
})();
var statearr_27464_27517 = state_27438__$1;
(statearr_27464_27517[(2)] = null);

(statearr_27464_27517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (29))){
var inst_27412 = (state_27438[(11)]);
var state_27438__$1 = state_27438;
var statearr_27465_27518 = state_27438__$1;
(statearr_27465_27518[(2)] = inst_27412);

(statearr_27465_27518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (6))){
var state_27438__$1 = state_27438;
var statearr_27466_27519 = state_27438__$1;
(statearr_27466_27519[(2)] = false);

(statearr_27466_27519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (28))){
var inst_27408 = (state_27438[(2)]);
var inst_27409 = calc_state.call(null);
var inst_27365 = inst_27409;
var state_27438__$1 = (function (){var statearr_27467 = state_27438;
(statearr_27467[(15)] = inst_27408);

(statearr_27467[(7)] = inst_27365);

return statearr_27467;
})();
var statearr_27468_27520 = state_27438__$1;
(statearr_27468_27520[(2)] = null);

(statearr_27468_27520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (25))){
var inst_27434 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27469_27521 = state_27438__$1;
(statearr_27469_27521[(2)] = inst_27434);

(statearr_27469_27521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (34))){
var inst_27432 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27470_27522 = state_27438__$1;
(statearr_27470_27522[(2)] = inst_27432);

(statearr_27470_27522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (17))){
var state_27438__$1 = state_27438;
var statearr_27471_27523 = state_27438__$1;
(statearr_27471_27523[(2)] = false);

(statearr_27471_27523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (3))){
var state_27438__$1 = state_27438;
var statearr_27472_27524 = state_27438__$1;
(statearr_27472_27524[(2)] = false);

(statearr_27472_27524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (12))){
var inst_27436 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27438__$1,inst_27436);
} else {
if((state_val_27439 === (2))){
var inst_27340 = (state_27438[(8)]);
var inst_27345 = inst_27340.cljs$lang$protocol_mask$partition0$;
var inst_27346 = (inst_27345 & (64));
var inst_27347 = inst_27340.cljs$core$ISeq$;
var inst_27348 = (cljs.core.PROTOCOL_SENTINEL === inst_27347);
var inst_27349 = ((inst_27346) || (inst_27348));
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27349)){
var statearr_27473_27525 = state_27438__$1;
(statearr_27473_27525[(1)] = (5));

} else {
var statearr_27474_27526 = state_27438__$1;
(statearr_27474_27526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (23))){
var inst_27397 = (state_27438[(14)]);
var inst_27403 = (inst_27397 == null);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27403)){
var statearr_27475_27527 = state_27438__$1;
(statearr_27475_27527[(1)] = (26));

} else {
var statearr_27476_27528 = state_27438__$1;
(statearr_27476_27528[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (35))){
var inst_27423 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
if(cljs.core.truth_(inst_27423)){
var statearr_27477_27529 = state_27438__$1;
(statearr_27477_27529[(1)] = (36));

} else {
var statearr_27478_27530 = state_27438__$1;
(statearr_27478_27530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (19))){
var inst_27365 = (state_27438[(7)]);
var inst_27385 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27365);
var state_27438__$1 = state_27438;
var statearr_27479_27531 = state_27438__$1;
(statearr_27479_27531[(2)] = inst_27385);

(statearr_27479_27531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (11))){
var inst_27365 = (state_27438[(7)]);
var inst_27369 = (inst_27365 == null);
var inst_27370 = cljs.core.not.call(null,inst_27369);
var state_27438__$1 = state_27438;
if(inst_27370){
var statearr_27480_27532 = state_27438__$1;
(statearr_27480_27532[(1)] = (13));

} else {
var statearr_27481_27533 = state_27438__$1;
(statearr_27481_27533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (9))){
var inst_27340 = (state_27438[(8)]);
var state_27438__$1 = state_27438;
var statearr_27482_27534 = state_27438__$1;
(statearr_27482_27534[(2)] = inst_27340);

(statearr_27482_27534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (5))){
var state_27438__$1 = state_27438;
var statearr_27483_27535 = state_27438__$1;
(statearr_27483_27535[(2)] = true);

(statearr_27483_27535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (14))){
var state_27438__$1 = state_27438;
var statearr_27484_27536 = state_27438__$1;
(statearr_27484_27536[(2)] = false);

(statearr_27484_27536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (26))){
var inst_27398 = (state_27438[(9)]);
var inst_27405 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27398);
var state_27438__$1 = state_27438;
var statearr_27485_27537 = state_27438__$1;
(statearr_27485_27537[(2)] = inst_27405);

(statearr_27485_27537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (16))){
var state_27438__$1 = state_27438;
var statearr_27486_27538 = state_27438__$1;
(statearr_27486_27538[(2)] = true);

(statearr_27486_27538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (38))){
var inst_27428 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27487_27539 = state_27438__$1;
(statearr_27487_27539[(2)] = inst_27428);

(statearr_27487_27539[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (30))){
var inst_27398 = (state_27438[(9)]);
var inst_27390 = (state_27438[(13)]);
var inst_27389 = (state_27438[(10)]);
var inst_27415 = cljs.core.empty_QMARK_.call(null,inst_27389);
var inst_27416 = inst_27390.call(null,inst_27398);
var inst_27417 = cljs.core.not.call(null,inst_27416);
var inst_27418 = ((inst_27415) && (inst_27417));
var state_27438__$1 = state_27438;
var statearr_27488_27540 = state_27438__$1;
(statearr_27488_27540[(2)] = inst_27418);

(statearr_27488_27540[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (10))){
var inst_27340 = (state_27438[(8)]);
var inst_27361 = (state_27438[(2)]);
var inst_27362 = cljs.core.get.call(null,inst_27361,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27363 = cljs.core.get.call(null,inst_27361,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27364 = cljs.core.get.call(null,inst_27361,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27365 = inst_27340;
var state_27438__$1 = (function (){var statearr_27489 = state_27438;
(statearr_27489[(7)] = inst_27365);

(statearr_27489[(16)] = inst_27363);

(statearr_27489[(17)] = inst_27362);

(statearr_27489[(18)] = inst_27364);

return statearr_27489;
})();
var statearr_27490_27541 = state_27438__$1;
(statearr_27490_27541[(2)] = null);

(statearr_27490_27541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (18))){
var inst_27380 = (state_27438[(2)]);
var state_27438__$1 = state_27438;
var statearr_27491_27542 = state_27438__$1;
(statearr_27491_27542[(2)] = inst_27380);

(statearr_27491_27542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (37))){
var state_27438__$1 = state_27438;
var statearr_27492_27543 = state_27438__$1;
(statearr_27492_27543[(2)] = null);

(statearr_27492_27543[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27439 === (8))){
var inst_27340 = (state_27438[(8)]);
var inst_27358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27340);
var state_27438__$1 = state_27438;
var statearr_27493_27544 = state_27438__$1;
(statearr_27493_27544[(2)] = inst_27358);

(statearr_27493_27544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___27498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26349__auto__,c__26439__auto___27498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26350__auto__ = null;
var cljs$core$async$mix_$_state_machine__26350__auto____0 = (function (){
var statearr_27494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27494[(0)] = cljs$core$async$mix_$_state_machine__26350__auto__);

(statearr_27494[(1)] = (1));

return statearr_27494;
});
var cljs$core$async$mix_$_state_machine__26350__auto____1 = (function (state_27438){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_27438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27495){if((e27495 instanceof Object)){
var ex__26353__auto__ = e27495;
var statearr_27496_27545 = state_27438;
(statearr_27496_27545[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27546 = state_27438;
state_27438 = G__27546;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26350__auto__ = function(state_27438){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26350__auto____1.call(this,state_27438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26350__auto____0;
cljs$core$async$mix_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26350__auto____1;
return cljs$core$async$mix_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___27498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26441__auto__ = (function (){var statearr_27497 = f__26440__auto__.call(null);
(statearr_27497[(6)] = c__26439__auto___27498);

return statearr_27497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___27498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27548 = arguments.length;
switch (G__27548) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27552 = arguments.length;
switch (G__27552) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__27550_SHARP_){
if(cljs.core.truth_(p1__27550_SHARP_.call(null,topic))){
return p1__27550_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27550_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27553 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27554){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27554 = meta27554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27555,meta27554__$1){
var self__ = this;
var _27555__$1 = this;
return (new cljs.core.async.t_cljs$core$async27553(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27554__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27555){
var self__ = this;
var _27555__$1 = this;
return self__.meta27554;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27554","meta27554",-2057043225,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27553";

cljs.core.async.t_cljs$core$async27553.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27553");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27553.
 */
cljs.core.async.__GT_t_cljs$core$async27553 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27553(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27554){
return (new cljs.core.async.t_cljs$core$async27553(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27554));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27553(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26439__auto___27673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___27673,mults,ensure_mult,p){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___27673,mults,ensure_mult,p){
return (function (state_27627){
var state_val_27628 = (state_27627[(1)]);
if((state_val_27628 === (7))){
var inst_27623 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27629_27674 = state_27627__$1;
(statearr_27629_27674[(2)] = inst_27623);

(statearr_27629_27674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (20))){
var state_27627__$1 = state_27627;
var statearr_27630_27675 = state_27627__$1;
(statearr_27630_27675[(2)] = null);

(statearr_27630_27675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (1))){
var state_27627__$1 = state_27627;
var statearr_27631_27676 = state_27627__$1;
(statearr_27631_27676[(2)] = null);

(statearr_27631_27676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (24))){
var inst_27606 = (state_27627[(7)]);
var inst_27615 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27606);
var state_27627__$1 = state_27627;
var statearr_27632_27677 = state_27627__$1;
(statearr_27632_27677[(2)] = inst_27615);

(statearr_27632_27677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (4))){
var inst_27558 = (state_27627[(8)]);
var inst_27558__$1 = (state_27627[(2)]);
var inst_27559 = (inst_27558__$1 == null);
var state_27627__$1 = (function (){var statearr_27633 = state_27627;
(statearr_27633[(8)] = inst_27558__$1);

return statearr_27633;
})();
if(cljs.core.truth_(inst_27559)){
var statearr_27634_27678 = state_27627__$1;
(statearr_27634_27678[(1)] = (5));

} else {
var statearr_27635_27679 = state_27627__$1;
(statearr_27635_27679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (15))){
var inst_27600 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27636_27680 = state_27627__$1;
(statearr_27636_27680[(2)] = inst_27600);

(statearr_27636_27680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (21))){
var inst_27620 = (state_27627[(2)]);
var state_27627__$1 = (function (){var statearr_27637 = state_27627;
(statearr_27637[(9)] = inst_27620);

return statearr_27637;
})();
var statearr_27638_27681 = state_27627__$1;
(statearr_27638_27681[(2)] = null);

(statearr_27638_27681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (13))){
var inst_27582 = (state_27627[(10)]);
var inst_27584 = cljs.core.chunked_seq_QMARK_.call(null,inst_27582);
var state_27627__$1 = state_27627;
if(inst_27584){
var statearr_27639_27682 = state_27627__$1;
(statearr_27639_27682[(1)] = (16));

} else {
var statearr_27640_27683 = state_27627__$1;
(statearr_27640_27683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (22))){
var inst_27612 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27612)){
var statearr_27641_27684 = state_27627__$1;
(statearr_27641_27684[(1)] = (23));

} else {
var statearr_27642_27685 = state_27627__$1;
(statearr_27642_27685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (6))){
var inst_27608 = (state_27627[(11)]);
var inst_27558 = (state_27627[(8)]);
var inst_27606 = (state_27627[(7)]);
var inst_27606__$1 = topic_fn.call(null,inst_27558);
var inst_27607 = cljs.core.deref.call(null,mults);
var inst_27608__$1 = cljs.core.get.call(null,inst_27607,inst_27606__$1);
var state_27627__$1 = (function (){var statearr_27643 = state_27627;
(statearr_27643[(11)] = inst_27608__$1);

(statearr_27643[(7)] = inst_27606__$1);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27608__$1)){
var statearr_27644_27686 = state_27627__$1;
(statearr_27644_27686[(1)] = (19));

} else {
var statearr_27645_27687 = state_27627__$1;
(statearr_27645_27687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (25))){
var inst_27617 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27646_27688 = state_27627__$1;
(statearr_27646_27688[(2)] = inst_27617);

(statearr_27646_27688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (17))){
var inst_27582 = (state_27627[(10)]);
var inst_27591 = cljs.core.first.call(null,inst_27582);
var inst_27592 = cljs.core.async.muxch_STAR_.call(null,inst_27591);
var inst_27593 = cljs.core.async.close_BANG_.call(null,inst_27592);
var inst_27594 = cljs.core.next.call(null,inst_27582);
var inst_27568 = inst_27594;
var inst_27569 = null;
var inst_27570 = (0);
var inst_27571 = (0);
var state_27627__$1 = (function (){var statearr_27647 = state_27627;
(statearr_27647[(12)] = inst_27593);

(statearr_27647[(13)] = inst_27568);

(statearr_27647[(14)] = inst_27570);

(statearr_27647[(15)] = inst_27569);

(statearr_27647[(16)] = inst_27571);

return statearr_27647;
})();
var statearr_27648_27689 = state_27627__$1;
(statearr_27648_27689[(2)] = null);

(statearr_27648_27689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (3))){
var inst_27625 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27627__$1,inst_27625);
} else {
if((state_val_27628 === (12))){
var inst_27602 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27649_27690 = state_27627__$1;
(statearr_27649_27690[(2)] = inst_27602);

(statearr_27649_27690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (2))){
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(4),ch);
} else {
if((state_val_27628 === (23))){
var state_27627__$1 = state_27627;
var statearr_27650_27691 = state_27627__$1;
(statearr_27650_27691[(2)] = null);

(statearr_27650_27691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (19))){
var inst_27608 = (state_27627[(11)]);
var inst_27558 = (state_27627[(8)]);
var inst_27610 = cljs.core.async.muxch_STAR_.call(null,inst_27608);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27627__$1,(22),inst_27610,inst_27558);
} else {
if((state_val_27628 === (11))){
var inst_27582 = (state_27627[(10)]);
var inst_27568 = (state_27627[(13)]);
var inst_27582__$1 = cljs.core.seq.call(null,inst_27568);
var state_27627__$1 = (function (){var statearr_27651 = state_27627;
(statearr_27651[(10)] = inst_27582__$1);

return statearr_27651;
})();
if(inst_27582__$1){
var statearr_27652_27692 = state_27627__$1;
(statearr_27652_27692[(1)] = (13));

} else {
var statearr_27653_27693 = state_27627__$1;
(statearr_27653_27693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (9))){
var inst_27604 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27654_27694 = state_27627__$1;
(statearr_27654_27694[(2)] = inst_27604);

(statearr_27654_27694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (5))){
var inst_27565 = cljs.core.deref.call(null,mults);
var inst_27566 = cljs.core.vals.call(null,inst_27565);
var inst_27567 = cljs.core.seq.call(null,inst_27566);
var inst_27568 = inst_27567;
var inst_27569 = null;
var inst_27570 = (0);
var inst_27571 = (0);
var state_27627__$1 = (function (){var statearr_27655 = state_27627;
(statearr_27655[(13)] = inst_27568);

(statearr_27655[(14)] = inst_27570);

(statearr_27655[(15)] = inst_27569);

(statearr_27655[(16)] = inst_27571);

return statearr_27655;
})();
var statearr_27656_27695 = state_27627__$1;
(statearr_27656_27695[(2)] = null);

(statearr_27656_27695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (14))){
var state_27627__$1 = state_27627;
var statearr_27660_27696 = state_27627__$1;
(statearr_27660_27696[(2)] = null);

(statearr_27660_27696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (16))){
var inst_27582 = (state_27627[(10)]);
var inst_27586 = cljs.core.chunk_first.call(null,inst_27582);
var inst_27587 = cljs.core.chunk_rest.call(null,inst_27582);
var inst_27588 = cljs.core.count.call(null,inst_27586);
var inst_27568 = inst_27587;
var inst_27569 = inst_27586;
var inst_27570 = inst_27588;
var inst_27571 = (0);
var state_27627__$1 = (function (){var statearr_27661 = state_27627;
(statearr_27661[(13)] = inst_27568);

(statearr_27661[(14)] = inst_27570);

(statearr_27661[(15)] = inst_27569);

(statearr_27661[(16)] = inst_27571);

return statearr_27661;
})();
var statearr_27662_27697 = state_27627__$1;
(statearr_27662_27697[(2)] = null);

(statearr_27662_27697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (10))){
var inst_27568 = (state_27627[(13)]);
var inst_27570 = (state_27627[(14)]);
var inst_27569 = (state_27627[(15)]);
var inst_27571 = (state_27627[(16)]);
var inst_27576 = cljs.core._nth.call(null,inst_27569,inst_27571);
var inst_27577 = cljs.core.async.muxch_STAR_.call(null,inst_27576);
var inst_27578 = cljs.core.async.close_BANG_.call(null,inst_27577);
var inst_27579 = (inst_27571 + (1));
var tmp27657 = inst_27568;
var tmp27658 = inst_27570;
var tmp27659 = inst_27569;
var inst_27568__$1 = tmp27657;
var inst_27569__$1 = tmp27659;
var inst_27570__$1 = tmp27658;
var inst_27571__$1 = inst_27579;
var state_27627__$1 = (function (){var statearr_27663 = state_27627;
(statearr_27663[(17)] = inst_27578);

(statearr_27663[(13)] = inst_27568__$1);

(statearr_27663[(14)] = inst_27570__$1);

(statearr_27663[(15)] = inst_27569__$1);

(statearr_27663[(16)] = inst_27571__$1);

return statearr_27663;
})();
var statearr_27664_27698 = state_27627__$1;
(statearr_27664_27698[(2)] = null);

(statearr_27664_27698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (18))){
var inst_27597 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27665_27699 = state_27627__$1;
(statearr_27665_27699[(2)] = inst_27597);

(statearr_27665_27699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (8))){
var inst_27570 = (state_27627[(14)]);
var inst_27571 = (state_27627[(16)]);
var inst_27573 = (inst_27571 < inst_27570);
var inst_27574 = inst_27573;
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27574)){
var statearr_27666_27700 = state_27627__$1;
(statearr_27666_27700[(1)] = (10));

} else {
var statearr_27667_27701 = state_27627__$1;
(statearr_27667_27701[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___27673,mults,ensure_mult,p))
;
return ((function (switch__26349__auto__,c__26439__auto___27673,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_27668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27668[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_27668[(1)] = (1));

return statearr_27668;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_27627){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_27627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27669){if((e27669 instanceof Object)){
var ex__26353__auto__ = e27669;
var statearr_27670_27702 = state_27627;
(statearr_27670_27702[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27703 = state_27627;
state_27627 = G__27703;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_27627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_27627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___27673,mults,ensure_mult,p))
})();
var state__26441__auto__ = (function (){var statearr_27671 = f__26440__auto__.call(null);
(statearr_27671[(6)] = c__26439__auto___27673);

return statearr_27671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___27673,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27705 = arguments.length;
switch (G__27705) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27708 = arguments.length;
switch (G__27708) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27711 = arguments.length;
switch (G__27711) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26439__auto___27778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___27778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___27778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27750){
var state_val_27751 = (state_27750[(1)]);
if((state_val_27751 === (7))){
var state_27750__$1 = state_27750;
var statearr_27752_27779 = state_27750__$1;
(statearr_27752_27779[(2)] = null);

(statearr_27752_27779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (1))){
var state_27750__$1 = state_27750;
var statearr_27753_27780 = state_27750__$1;
(statearr_27753_27780[(2)] = null);

(statearr_27753_27780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (4))){
var inst_27714 = (state_27750[(7)]);
var inst_27716 = (inst_27714 < cnt);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27716)){
var statearr_27754_27781 = state_27750__$1;
(statearr_27754_27781[(1)] = (6));

} else {
var statearr_27755_27782 = state_27750__$1;
(statearr_27755_27782[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (15))){
var inst_27746 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27756_27783 = state_27750__$1;
(statearr_27756_27783[(2)] = inst_27746);

(statearr_27756_27783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (13))){
var inst_27739 = cljs.core.async.close_BANG_.call(null,out);
var state_27750__$1 = state_27750;
var statearr_27757_27784 = state_27750__$1;
(statearr_27757_27784[(2)] = inst_27739);

(statearr_27757_27784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (6))){
var state_27750__$1 = state_27750;
var statearr_27758_27785 = state_27750__$1;
(statearr_27758_27785[(2)] = null);

(statearr_27758_27785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (3))){
var inst_27748 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27750__$1,inst_27748);
} else {
if((state_val_27751 === (12))){
var inst_27736 = (state_27750[(8)]);
var inst_27736__$1 = (state_27750[(2)]);
var inst_27737 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27736__$1);
var state_27750__$1 = (function (){var statearr_27759 = state_27750;
(statearr_27759[(8)] = inst_27736__$1);

return statearr_27759;
})();
if(cljs.core.truth_(inst_27737)){
var statearr_27760_27786 = state_27750__$1;
(statearr_27760_27786[(1)] = (13));

} else {
var statearr_27761_27787 = state_27750__$1;
(statearr_27761_27787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (2))){
var inst_27713 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27714 = (0);
var state_27750__$1 = (function (){var statearr_27762 = state_27750;
(statearr_27762[(9)] = inst_27713);

(statearr_27762[(7)] = inst_27714);

return statearr_27762;
})();
var statearr_27763_27788 = state_27750__$1;
(statearr_27763_27788[(2)] = null);

(statearr_27763_27788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (11))){
var inst_27714 = (state_27750[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27750,(10),Object,null,(9));
var inst_27723 = chs__$1.call(null,inst_27714);
var inst_27724 = done.call(null,inst_27714);
var inst_27725 = cljs.core.async.take_BANG_.call(null,inst_27723,inst_27724);
var state_27750__$1 = state_27750;
var statearr_27764_27789 = state_27750__$1;
(statearr_27764_27789[(2)] = inst_27725);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (9))){
var inst_27714 = (state_27750[(7)]);
var inst_27727 = (state_27750[(2)]);
var inst_27728 = (inst_27714 + (1));
var inst_27714__$1 = inst_27728;
var state_27750__$1 = (function (){var statearr_27765 = state_27750;
(statearr_27765[(7)] = inst_27714__$1);

(statearr_27765[(10)] = inst_27727);

return statearr_27765;
})();
var statearr_27766_27790 = state_27750__$1;
(statearr_27766_27790[(2)] = null);

(statearr_27766_27790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (5))){
var inst_27734 = (state_27750[(2)]);
var state_27750__$1 = (function (){var statearr_27767 = state_27750;
(statearr_27767[(11)] = inst_27734);

return statearr_27767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(12),dchan);
} else {
if((state_val_27751 === (14))){
var inst_27736 = (state_27750[(8)]);
var inst_27741 = cljs.core.apply.call(null,f,inst_27736);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27750__$1,(16),out,inst_27741);
} else {
if((state_val_27751 === (16))){
var inst_27743 = (state_27750[(2)]);
var state_27750__$1 = (function (){var statearr_27768 = state_27750;
(statearr_27768[(12)] = inst_27743);

return statearr_27768;
})();
var statearr_27769_27791 = state_27750__$1;
(statearr_27769_27791[(2)] = null);

(statearr_27769_27791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (10))){
var inst_27718 = (state_27750[(2)]);
var inst_27719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27750__$1 = (function (){var statearr_27770 = state_27750;
(statearr_27770[(13)] = inst_27718);

return statearr_27770;
})();
var statearr_27771_27792 = state_27750__$1;
(statearr_27771_27792[(2)] = inst_27719);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (8))){
var inst_27732 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27772_27793 = state_27750__$1;
(statearr_27772_27793[(2)] = inst_27732);

(statearr_27772_27793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___27778,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26349__auto__,c__26439__auto___27778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_27773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27773[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_27773[(1)] = (1));

return statearr_27773;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_27750){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_27750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27774){if((e27774 instanceof Object)){
var ex__26353__auto__ = e27774;
var statearr_27775_27794 = state_27750;
(statearr_27775_27794[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27795 = state_27750;
state_27750 = G__27795;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_27750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_27750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___27778,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26441__auto__ = (function (){var statearr_27776 = f__26440__auto__.call(null);
(statearr_27776[(6)] = c__26439__auto___27778);

return statearr_27776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___27778,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27798 = arguments.length;
switch (G__27798) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___27852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___27852,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___27852,out){
return (function (state_27830){
var state_val_27831 = (state_27830[(1)]);
if((state_val_27831 === (7))){
var inst_27810 = (state_27830[(7)]);
var inst_27809 = (state_27830[(8)]);
var inst_27809__$1 = (state_27830[(2)]);
var inst_27810__$1 = cljs.core.nth.call(null,inst_27809__$1,(0),null);
var inst_27811 = cljs.core.nth.call(null,inst_27809__$1,(1),null);
var inst_27812 = (inst_27810__$1 == null);
var state_27830__$1 = (function (){var statearr_27832 = state_27830;
(statearr_27832[(9)] = inst_27811);

(statearr_27832[(7)] = inst_27810__$1);

(statearr_27832[(8)] = inst_27809__$1);

return statearr_27832;
})();
if(cljs.core.truth_(inst_27812)){
var statearr_27833_27853 = state_27830__$1;
(statearr_27833_27853[(1)] = (8));

} else {
var statearr_27834_27854 = state_27830__$1;
(statearr_27834_27854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (1))){
var inst_27799 = cljs.core.vec.call(null,chs);
var inst_27800 = inst_27799;
var state_27830__$1 = (function (){var statearr_27835 = state_27830;
(statearr_27835[(10)] = inst_27800);

return statearr_27835;
})();
var statearr_27836_27855 = state_27830__$1;
(statearr_27836_27855[(2)] = null);

(statearr_27836_27855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (4))){
var inst_27800 = (state_27830[(10)]);
var state_27830__$1 = state_27830;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27830__$1,(7),inst_27800);
} else {
if((state_val_27831 === (6))){
var inst_27826 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27837_27856 = state_27830__$1;
(statearr_27837_27856[(2)] = inst_27826);

(statearr_27837_27856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (3))){
var inst_27828 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27830__$1,inst_27828);
} else {
if((state_val_27831 === (2))){
var inst_27800 = (state_27830[(10)]);
var inst_27802 = cljs.core.count.call(null,inst_27800);
var inst_27803 = (inst_27802 > (0));
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27803)){
var statearr_27839_27857 = state_27830__$1;
(statearr_27839_27857[(1)] = (4));

} else {
var statearr_27840_27858 = state_27830__$1;
(statearr_27840_27858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (11))){
var inst_27800 = (state_27830[(10)]);
var inst_27819 = (state_27830[(2)]);
var tmp27838 = inst_27800;
var inst_27800__$1 = tmp27838;
var state_27830__$1 = (function (){var statearr_27841 = state_27830;
(statearr_27841[(10)] = inst_27800__$1);

(statearr_27841[(11)] = inst_27819);

return statearr_27841;
})();
var statearr_27842_27859 = state_27830__$1;
(statearr_27842_27859[(2)] = null);

(statearr_27842_27859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (9))){
var inst_27810 = (state_27830[(7)]);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27830__$1,(11),out,inst_27810);
} else {
if((state_val_27831 === (5))){
var inst_27824 = cljs.core.async.close_BANG_.call(null,out);
var state_27830__$1 = state_27830;
var statearr_27843_27860 = state_27830__$1;
(statearr_27843_27860[(2)] = inst_27824);

(statearr_27843_27860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (10))){
var inst_27822 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27844_27861 = state_27830__$1;
(statearr_27844_27861[(2)] = inst_27822);

(statearr_27844_27861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (8))){
var inst_27811 = (state_27830[(9)]);
var inst_27800 = (state_27830[(10)]);
var inst_27810 = (state_27830[(7)]);
var inst_27809 = (state_27830[(8)]);
var inst_27814 = (function (){var cs = inst_27800;
var vec__27805 = inst_27809;
var v = inst_27810;
var c = inst_27811;
return ((function (cs,vec__27805,v,c,inst_27811,inst_27800,inst_27810,inst_27809,state_val_27831,c__26439__auto___27852,out){
return (function (p1__27796_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27796_SHARP_);
});
;})(cs,vec__27805,v,c,inst_27811,inst_27800,inst_27810,inst_27809,state_val_27831,c__26439__auto___27852,out))
})();
var inst_27815 = cljs.core.filterv.call(null,inst_27814,inst_27800);
var inst_27800__$1 = inst_27815;
var state_27830__$1 = (function (){var statearr_27845 = state_27830;
(statearr_27845[(10)] = inst_27800__$1);

return statearr_27845;
})();
var statearr_27846_27862 = state_27830__$1;
(statearr_27846_27862[(2)] = null);

(statearr_27846_27862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___27852,out))
;
return ((function (switch__26349__auto__,c__26439__auto___27852,out){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_27830){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_27830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__26353__auto__ = e27848;
var statearr_27849_27863 = state_27830;
(statearr_27849_27863[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27864 = state_27830;
state_27830 = G__27864;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_27830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_27830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___27852,out))
})();
var state__26441__auto__ = (function (){var statearr_27850 = f__26440__auto__.call(null);
(statearr_27850[(6)] = c__26439__auto___27852);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___27852,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27866 = arguments.length;
switch (G__27866) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___27911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___27911,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___27911,out){
return (function (state_27890){
var state_val_27891 = (state_27890[(1)]);
if((state_val_27891 === (7))){
var inst_27872 = (state_27890[(7)]);
var inst_27872__$1 = (state_27890[(2)]);
var inst_27873 = (inst_27872__$1 == null);
var inst_27874 = cljs.core.not.call(null,inst_27873);
var state_27890__$1 = (function (){var statearr_27892 = state_27890;
(statearr_27892[(7)] = inst_27872__$1);

return statearr_27892;
})();
if(inst_27874){
var statearr_27893_27912 = state_27890__$1;
(statearr_27893_27912[(1)] = (8));

} else {
var statearr_27894_27913 = state_27890__$1;
(statearr_27894_27913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (1))){
var inst_27867 = (0);
var state_27890__$1 = (function (){var statearr_27895 = state_27890;
(statearr_27895[(8)] = inst_27867);

return statearr_27895;
})();
var statearr_27896_27914 = state_27890__$1;
(statearr_27896_27914[(2)] = null);

(statearr_27896_27914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (4))){
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27890__$1,(7),ch);
} else {
if((state_val_27891 === (6))){
var inst_27885 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27897_27915 = state_27890__$1;
(statearr_27897_27915[(2)] = inst_27885);

(statearr_27897_27915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (3))){
var inst_27887 = (state_27890[(2)]);
var inst_27888 = cljs.core.async.close_BANG_.call(null,out);
var state_27890__$1 = (function (){var statearr_27898 = state_27890;
(statearr_27898[(9)] = inst_27887);

return statearr_27898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27890__$1,inst_27888);
} else {
if((state_val_27891 === (2))){
var inst_27867 = (state_27890[(8)]);
var inst_27869 = (inst_27867 < n);
var state_27890__$1 = state_27890;
if(cljs.core.truth_(inst_27869)){
var statearr_27899_27916 = state_27890__$1;
(statearr_27899_27916[(1)] = (4));

} else {
var statearr_27900_27917 = state_27890__$1;
(statearr_27900_27917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (11))){
var inst_27867 = (state_27890[(8)]);
var inst_27877 = (state_27890[(2)]);
var inst_27878 = (inst_27867 + (1));
var inst_27867__$1 = inst_27878;
var state_27890__$1 = (function (){var statearr_27901 = state_27890;
(statearr_27901[(8)] = inst_27867__$1);

(statearr_27901[(10)] = inst_27877);

return statearr_27901;
})();
var statearr_27902_27918 = state_27890__$1;
(statearr_27902_27918[(2)] = null);

(statearr_27902_27918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (9))){
var state_27890__$1 = state_27890;
var statearr_27903_27919 = state_27890__$1;
(statearr_27903_27919[(2)] = null);

(statearr_27903_27919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (5))){
var state_27890__$1 = state_27890;
var statearr_27904_27920 = state_27890__$1;
(statearr_27904_27920[(2)] = null);

(statearr_27904_27920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (10))){
var inst_27882 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27905_27921 = state_27890__$1;
(statearr_27905_27921[(2)] = inst_27882);

(statearr_27905_27921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (8))){
var inst_27872 = (state_27890[(7)]);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27890__$1,(11),out,inst_27872);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___27911,out))
;
return ((function (switch__26349__auto__,c__26439__auto___27911,out){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_27906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27906[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_27906[(1)] = (1));

return statearr_27906;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_27890){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_27890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27907){if((e27907 instanceof Object)){
var ex__26353__auto__ = e27907;
var statearr_27908_27922 = state_27890;
(statearr_27908_27922[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27923 = state_27890;
state_27890 = G__27923;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_27890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_27890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___27911,out))
})();
var state__26441__auto__ = (function (){var statearr_27909 = f__26440__auto__.call(null);
(statearr_27909[(6)] = c__26439__auto___27911);

return statearr_27909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___27911,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27925 = (function (f,ch,meta27926){
this.f = f;
this.ch = ch;
this.meta27926 = meta27926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27927,meta27926__$1){
var self__ = this;
var _27927__$1 = this;
return (new cljs.core.async.t_cljs$core$async27925(self__.f,self__.ch,meta27926__$1));
});

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27927){
var self__ = this;
var _27927__$1 = this;
return self__.meta27926;
});

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27928 = (function (f,ch,meta27926,_,fn1,meta27929){
this.f = f;
this.ch = ch;
this.meta27926 = meta27926;
this._ = _;
this.fn1 = fn1;
this.meta27929 = meta27929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27930,meta27929__$1){
var self__ = this;
var _27930__$1 = this;
return (new cljs.core.async.t_cljs$core$async27928(self__.f,self__.ch,self__.meta27926,self__._,self__.fn1,meta27929__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27930){
var self__ = this;
var _27930__$1 = this;
return self__.meta27929;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27924_SHARP_){
return f1.call(null,(((p1__27924_SHARP_ == null))?null:self__.f.call(null,p1__27924_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27928.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27926","meta27926",-395303289,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27925","cljs.core.async/t_cljs$core$async27925",47400089,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27929","meta27929",691600126,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27928";

cljs.core.async.t_cljs$core$async27928.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27928");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27928.
 */
cljs.core.async.__GT_t_cljs$core$async27928 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27928(f__$1,ch__$1,meta27926__$1,___$2,fn1__$1,meta27929){
return (new cljs.core.async.t_cljs$core$async27928(f__$1,ch__$1,meta27926__$1,___$2,fn1__$1,meta27929));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27928(self__.f,self__.ch,self__.meta27926,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27926","meta27926",-395303289,null)], null);
});

cljs.core.async.t_cljs$core$async27925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27925";

cljs.core.async.t_cljs$core$async27925.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27925");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27925.
 */
cljs.core.async.__GT_t_cljs$core$async27925 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27925(f__$1,ch__$1,meta27926){
return (new cljs.core.async.t_cljs$core$async27925(f__$1,ch__$1,meta27926));
});

}

return (new cljs.core.async.t_cljs$core$async27925(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27931 = (function (f,ch,meta27932){
this.f = f;
this.ch = ch;
this.meta27932 = meta27932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27933,meta27932__$1){
var self__ = this;
var _27933__$1 = this;
return (new cljs.core.async.t_cljs$core$async27931(self__.f,self__.ch,meta27932__$1));
});

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27933){
var self__ = this;
var _27933__$1 = this;
return self__.meta27932;
});

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27932","meta27932",-1467306892,null)], null);
});

cljs.core.async.t_cljs$core$async27931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27931";

cljs.core.async.t_cljs$core$async27931.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27931");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27931.
 */
cljs.core.async.__GT_t_cljs$core$async27931 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27931(f__$1,ch__$1,meta27932){
return (new cljs.core.async.t_cljs$core$async27931(f__$1,ch__$1,meta27932));
});

}

return (new cljs.core.async.t_cljs$core$async27931(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27934 = (function (p,ch,meta27935){
this.p = p;
this.ch = ch;
this.meta27935 = meta27935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27936,meta27935__$1){
var self__ = this;
var _27936__$1 = this;
return (new cljs.core.async.t_cljs$core$async27934(self__.p,self__.ch,meta27935__$1));
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27936){
var self__ = this;
var _27936__$1 = this;
return self__.meta27935;
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27935","meta27935",-666518583,null)], null);
});

cljs.core.async.t_cljs$core$async27934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27934";

cljs.core.async.t_cljs$core$async27934.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27934");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27934.
 */
cljs.core.async.__GT_t_cljs$core$async27934 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27934(p__$1,ch__$1,meta27935){
return (new cljs.core.async.t_cljs$core$async27934(p__$1,ch__$1,meta27935));
});

}

return (new cljs.core.async.t_cljs$core$async27934(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27938 = arguments.length;
switch (G__27938) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___27978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___27978,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___27978,out){
return (function (state_27959){
var state_val_27960 = (state_27959[(1)]);
if((state_val_27960 === (7))){
var inst_27955 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27961_27979 = state_27959__$1;
(statearr_27961_27979[(2)] = inst_27955);

(statearr_27961_27979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (1))){
var state_27959__$1 = state_27959;
var statearr_27962_27980 = state_27959__$1;
(statearr_27962_27980[(2)] = null);

(statearr_27962_27980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (4))){
var inst_27941 = (state_27959[(7)]);
var inst_27941__$1 = (state_27959[(2)]);
var inst_27942 = (inst_27941__$1 == null);
var state_27959__$1 = (function (){var statearr_27963 = state_27959;
(statearr_27963[(7)] = inst_27941__$1);

return statearr_27963;
})();
if(cljs.core.truth_(inst_27942)){
var statearr_27964_27981 = state_27959__$1;
(statearr_27964_27981[(1)] = (5));

} else {
var statearr_27965_27982 = state_27959__$1;
(statearr_27965_27982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (6))){
var inst_27941 = (state_27959[(7)]);
var inst_27946 = p.call(null,inst_27941);
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27946)){
var statearr_27966_27983 = state_27959__$1;
(statearr_27966_27983[(1)] = (8));

} else {
var statearr_27967_27984 = state_27959__$1;
(statearr_27967_27984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (3))){
var inst_27957 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27959__$1,inst_27957);
} else {
if((state_val_27960 === (2))){
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27959__$1,(4),ch);
} else {
if((state_val_27960 === (11))){
var inst_27949 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27968_27985 = state_27959__$1;
(statearr_27968_27985[(2)] = inst_27949);

(statearr_27968_27985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (9))){
var state_27959__$1 = state_27959;
var statearr_27969_27986 = state_27959__$1;
(statearr_27969_27986[(2)] = null);

(statearr_27969_27986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (5))){
var inst_27944 = cljs.core.async.close_BANG_.call(null,out);
var state_27959__$1 = state_27959;
var statearr_27970_27987 = state_27959__$1;
(statearr_27970_27987[(2)] = inst_27944);

(statearr_27970_27987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (10))){
var inst_27952 = (state_27959[(2)]);
var state_27959__$1 = (function (){var statearr_27971 = state_27959;
(statearr_27971[(8)] = inst_27952);

return statearr_27971;
})();
var statearr_27972_27988 = state_27959__$1;
(statearr_27972_27988[(2)] = null);

(statearr_27972_27988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (8))){
var inst_27941 = (state_27959[(7)]);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27959__$1,(11),out,inst_27941);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___27978,out))
;
return ((function (switch__26349__auto__,c__26439__auto___27978,out){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_27973 = [null,null,null,null,null,null,null,null,null];
(statearr_27973[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_27973[(1)] = (1));

return statearr_27973;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_27959){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_27959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e27974){if((e27974 instanceof Object)){
var ex__26353__auto__ = e27974;
var statearr_27975_27989 = state_27959;
(statearr_27975_27989[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27990 = state_27959;
state_27959 = G__27990;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___27978,out))
})();
var state__26441__auto__ = (function (){var statearr_27976 = f__26440__auto__.call(null);
(statearr_27976[(6)] = c__26439__auto___27978);

return statearr_27976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___27978,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27992 = arguments.length;
switch (G__27992) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__){
return (function (state_28055){
var state_val_28056 = (state_28055[(1)]);
if((state_val_28056 === (7))){
var inst_28051 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28057_28095 = state_28055__$1;
(statearr_28057_28095[(2)] = inst_28051);

(statearr_28057_28095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (20))){
var inst_28021 = (state_28055[(7)]);
var inst_28032 = (state_28055[(2)]);
var inst_28033 = cljs.core.next.call(null,inst_28021);
var inst_28007 = inst_28033;
var inst_28008 = null;
var inst_28009 = (0);
var inst_28010 = (0);
var state_28055__$1 = (function (){var statearr_28058 = state_28055;
(statearr_28058[(8)] = inst_28007);

(statearr_28058[(9)] = inst_28010);

(statearr_28058[(10)] = inst_28009);

(statearr_28058[(11)] = inst_28032);

(statearr_28058[(12)] = inst_28008);

return statearr_28058;
})();
var statearr_28059_28096 = state_28055__$1;
(statearr_28059_28096[(2)] = null);

(statearr_28059_28096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (1))){
var state_28055__$1 = state_28055;
var statearr_28060_28097 = state_28055__$1;
(statearr_28060_28097[(2)] = null);

(statearr_28060_28097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (4))){
var inst_27996 = (state_28055[(13)]);
var inst_27996__$1 = (state_28055[(2)]);
var inst_27997 = (inst_27996__$1 == null);
var state_28055__$1 = (function (){var statearr_28061 = state_28055;
(statearr_28061[(13)] = inst_27996__$1);

return statearr_28061;
})();
if(cljs.core.truth_(inst_27997)){
var statearr_28062_28098 = state_28055__$1;
(statearr_28062_28098[(1)] = (5));

} else {
var statearr_28063_28099 = state_28055__$1;
(statearr_28063_28099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (15))){
var state_28055__$1 = state_28055;
var statearr_28067_28100 = state_28055__$1;
(statearr_28067_28100[(2)] = null);

(statearr_28067_28100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (21))){
var state_28055__$1 = state_28055;
var statearr_28068_28101 = state_28055__$1;
(statearr_28068_28101[(2)] = null);

(statearr_28068_28101[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (13))){
var inst_28007 = (state_28055[(8)]);
var inst_28010 = (state_28055[(9)]);
var inst_28009 = (state_28055[(10)]);
var inst_28008 = (state_28055[(12)]);
var inst_28017 = (state_28055[(2)]);
var inst_28018 = (inst_28010 + (1));
var tmp28064 = inst_28007;
var tmp28065 = inst_28009;
var tmp28066 = inst_28008;
var inst_28007__$1 = tmp28064;
var inst_28008__$1 = tmp28066;
var inst_28009__$1 = tmp28065;
var inst_28010__$1 = inst_28018;
var state_28055__$1 = (function (){var statearr_28069 = state_28055;
(statearr_28069[(8)] = inst_28007__$1);

(statearr_28069[(14)] = inst_28017);

(statearr_28069[(9)] = inst_28010__$1);

(statearr_28069[(10)] = inst_28009__$1);

(statearr_28069[(12)] = inst_28008__$1);

return statearr_28069;
})();
var statearr_28070_28102 = state_28055__$1;
(statearr_28070_28102[(2)] = null);

(statearr_28070_28102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (22))){
var state_28055__$1 = state_28055;
var statearr_28071_28103 = state_28055__$1;
(statearr_28071_28103[(2)] = null);

(statearr_28071_28103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (6))){
var inst_27996 = (state_28055[(13)]);
var inst_28005 = f.call(null,inst_27996);
var inst_28006 = cljs.core.seq.call(null,inst_28005);
var inst_28007 = inst_28006;
var inst_28008 = null;
var inst_28009 = (0);
var inst_28010 = (0);
var state_28055__$1 = (function (){var statearr_28072 = state_28055;
(statearr_28072[(8)] = inst_28007);

(statearr_28072[(9)] = inst_28010);

(statearr_28072[(10)] = inst_28009);

(statearr_28072[(12)] = inst_28008);

return statearr_28072;
})();
var statearr_28073_28104 = state_28055__$1;
(statearr_28073_28104[(2)] = null);

(statearr_28073_28104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (17))){
var inst_28021 = (state_28055[(7)]);
var inst_28025 = cljs.core.chunk_first.call(null,inst_28021);
var inst_28026 = cljs.core.chunk_rest.call(null,inst_28021);
var inst_28027 = cljs.core.count.call(null,inst_28025);
var inst_28007 = inst_28026;
var inst_28008 = inst_28025;
var inst_28009 = inst_28027;
var inst_28010 = (0);
var state_28055__$1 = (function (){var statearr_28074 = state_28055;
(statearr_28074[(8)] = inst_28007);

(statearr_28074[(9)] = inst_28010);

(statearr_28074[(10)] = inst_28009);

(statearr_28074[(12)] = inst_28008);

return statearr_28074;
})();
var statearr_28075_28105 = state_28055__$1;
(statearr_28075_28105[(2)] = null);

(statearr_28075_28105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (3))){
var inst_28053 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28055__$1,inst_28053);
} else {
if((state_val_28056 === (12))){
var inst_28041 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28076_28106 = state_28055__$1;
(statearr_28076_28106[(2)] = inst_28041);

(statearr_28076_28106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (2))){
var state_28055__$1 = state_28055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28055__$1,(4),in$);
} else {
if((state_val_28056 === (23))){
var inst_28049 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28077_28107 = state_28055__$1;
(statearr_28077_28107[(2)] = inst_28049);

(statearr_28077_28107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (19))){
var inst_28036 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28078_28108 = state_28055__$1;
(statearr_28078_28108[(2)] = inst_28036);

(statearr_28078_28108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (11))){
var inst_28007 = (state_28055[(8)]);
var inst_28021 = (state_28055[(7)]);
var inst_28021__$1 = cljs.core.seq.call(null,inst_28007);
var state_28055__$1 = (function (){var statearr_28079 = state_28055;
(statearr_28079[(7)] = inst_28021__$1);

return statearr_28079;
})();
if(inst_28021__$1){
var statearr_28080_28109 = state_28055__$1;
(statearr_28080_28109[(1)] = (14));

} else {
var statearr_28081_28110 = state_28055__$1;
(statearr_28081_28110[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (9))){
var inst_28043 = (state_28055[(2)]);
var inst_28044 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28055__$1 = (function (){var statearr_28082 = state_28055;
(statearr_28082[(15)] = inst_28043);

return statearr_28082;
})();
if(cljs.core.truth_(inst_28044)){
var statearr_28083_28111 = state_28055__$1;
(statearr_28083_28111[(1)] = (21));

} else {
var statearr_28084_28112 = state_28055__$1;
(statearr_28084_28112[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (5))){
var inst_27999 = cljs.core.async.close_BANG_.call(null,out);
var state_28055__$1 = state_28055;
var statearr_28085_28113 = state_28055__$1;
(statearr_28085_28113[(2)] = inst_27999);

(statearr_28085_28113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (14))){
var inst_28021 = (state_28055[(7)]);
var inst_28023 = cljs.core.chunked_seq_QMARK_.call(null,inst_28021);
var state_28055__$1 = state_28055;
if(inst_28023){
var statearr_28086_28114 = state_28055__$1;
(statearr_28086_28114[(1)] = (17));

} else {
var statearr_28087_28115 = state_28055__$1;
(statearr_28087_28115[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (16))){
var inst_28039 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28088_28116 = state_28055__$1;
(statearr_28088_28116[(2)] = inst_28039);

(statearr_28088_28116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (10))){
var inst_28010 = (state_28055[(9)]);
var inst_28008 = (state_28055[(12)]);
var inst_28015 = cljs.core._nth.call(null,inst_28008,inst_28010);
var state_28055__$1 = state_28055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28055__$1,(13),out,inst_28015);
} else {
if((state_val_28056 === (18))){
var inst_28021 = (state_28055[(7)]);
var inst_28030 = cljs.core.first.call(null,inst_28021);
var state_28055__$1 = state_28055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28055__$1,(20),out,inst_28030);
} else {
if((state_val_28056 === (8))){
var inst_28010 = (state_28055[(9)]);
var inst_28009 = (state_28055[(10)]);
var inst_28012 = (inst_28010 < inst_28009);
var inst_28013 = inst_28012;
var state_28055__$1 = state_28055;
if(cljs.core.truth_(inst_28013)){
var statearr_28089_28117 = state_28055__$1;
(statearr_28089_28117[(1)] = (10));

} else {
var statearr_28090_28118 = state_28055__$1;
(statearr_28090_28118[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto__))
;
return ((function (switch__26349__auto__,c__26439__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26350__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26350__auto____0 = (function (){
var statearr_28091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28091[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26350__auto__);

(statearr_28091[(1)] = (1));

return statearr_28091;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26350__auto____1 = (function (state_28055){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_28055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e28092){if((e28092 instanceof Object)){
var ex__26353__auto__ = e28092;
var statearr_28093_28119 = state_28055;
(statearr_28093_28119[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28120 = state_28055;
state_28055 = G__28120;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26350__auto__ = function(state_28055){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26350__auto____1.call(this,state_28055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26350__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26350__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_28094 = f__26440__auto__.call(null);
(statearr_28094[(6)] = c__26439__auto__);

return statearr_28094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28122 = arguments.length;
switch (G__28122) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28125 = arguments.length;
switch (G__28125) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28128 = arguments.length;
switch (G__28128) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___28175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28175,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___28175,out){
return (function (state_28152){
var state_val_28153 = (state_28152[(1)]);
if((state_val_28153 === (7))){
var inst_28147 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28154_28176 = state_28152__$1;
(statearr_28154_28176[(2)] = inst_28147);

(statearr_28154_28176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (1))){
var inst_28129 = null;
var state_28152__$1 = (function (){var statearr_28155 = state_28152;
(statearr_28155[(7)] = inst_28129);

return statearr_28155;
})();
var statearr_28156_28177 = state_28152__$1;
(statearr_28156_28177[(2)] = null);

(statearr_28156_28177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (4))){
var inst_28132 = (state_28152[(8)]);
var inst_28132__$1 = (state_28152[(2)]);
var inst_28133 = (inst_28132__$1 == null);
var inst_28134 = cljs.core.not.call(null,inst_28133);
var state_28152__$1 = (function (){var statearr_28157 = state_28152;
(statearr_28157[(8)] = inst_28132__$1);

return statearr_28157;
})();
if(inst_28134){
var statearr_28158_28178 = state_28152__$1;
(statearr_28158_28178[(1)] = (5));

} else {
var statearr_28159_28179 = state_28152__$1;
(statearr_28159_28179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (6))){
var state_28152__$1 = state_28152;
var statearr_28160_28180 = state_28152__$1;
(statearr_28160_28180[(2)] = null);

(statearr_28160_28180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (3))){
var inst_28149 = (state_28152[(2)]);
var inst_28150 = cljs.core.async.close_BANG_.call(null,out);
var state_28152__$1 = (function (){var statearr_28161 = state_28152;
(statearr_28161[(9)] = inst_28149);

return statearr_28161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28152__$1,inst_28150);
} else {
if((state_val_28153 === (2))){
var state_28152__$1 = state_28152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28152__$1,(4),ch);
} else {
if((state_val_28153 === (11))){
var inst_28132 = (state_28152[(8)]);
var inst_28141 = (state_28152[(2)]);
var inst_28129 = inst_28132;
var state_28152__$1 = (function (){var statearr_28162 = state_28152;
(statearr_28162[(10)] = inst_28141);

(statearr_28162[(7)] = inst_28129);

return statearr_28162;
})();
var statearr_28163_28181 = state_28152__$1;
(statearr_28163_28181[(2)] = null);

(statearr_28163_28181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (9))){
var inst_28132 = (state_28152[(8)]);
var state_28152__$1 = state_28152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28152__$1,(11),out,inst_28132);
} else {
if((state_val_28153 === (5))){
var inst_28132 = (state_28152[(8)]);
var inst_28129 = (state_28152[(7)]);
var inst_28136 = cljs.core._EQ_.call(null,inst_28132,inst_28129);
var state_28152__$1 = state_28152;
if(inst_28136){
var statearr_28165_28182 = state_28152__$1;
(statearr_28165_28182[(1)] = (8));

} else {
var statearr_28166_28183 = state_28152__$1;
(statearr_28166_28183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (10))){
var inst_28144 = (state_28152[(2)]);
var state_28152__$1 = state_28152;
var statearr_28167_28184 = state_28152__$1;
(statearr_28167_28184[(2)] = inst_28144);

(statearr_28167_28184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28153 === (8))){
var inst_28129 = (state_28152[(7)]);
var tmp28164 = inst_28129;
var inst_28129__$1 = tmp28164;
var state_28152__$1 = (function (){var statearr_28168 = state_28152;
(statearr_28168[(7)] = inst_28129__$1);

return statearr_28168;
})();
var statearr_28169_28185 = state_28152__$1;
(statearr_28169_28185[(2)] = null);

(statearr_28169_28185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___28175,out))
;
return ((function (switch__26349__auto__,c__26439__auto___28175,out){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_28170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28170[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_28170[(1)] = (1));

return statearr_28170;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_28152){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_28152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e28171){if((e28171 instanceof Object)){
var ex__26353__auto__ = e28171;
var statearr_28172_28186 = state_28152;
(statearr_28172_28186[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28187 = state_28152;
state_28152 = G__28187;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_28152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_28152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___28175,out))
})();
var state__26441__auto__ = (function (){var statearr_28173 = f__26440__auto__.call(null);
(statearr_28173[(6)] = c__26439__auto___28175);

return statearr_28173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28175,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28189 = arguments.length;
switch (G__28189) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___28255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28255,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___28255,out){
return (function (state_28227){
var state_val_28228 = (state_28227[(1)]);
if((state_val_28228 === (7))){
var inst_28223 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28229_28256 = state_28227__$1;
(statearr_28229_28256[(2)] = inst_28223);

(statearr_28229_28256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (1))){
var inst_28190 = (new Array(n));
var inst_28191 = inst_28190;
var inst_28192 = (0);
var state_28227__$1 = (function (){var statearr_28230 = state_28227;
(statearr_28230[(7)] = inst_28191);

(statearr_28230[(8)] = inst_28192);

return statearr_28230;
})();
var statearr_28231_28257 = state_28227__$1;
(statearr_28231_28257[(2)] = null);

(statearr_28231_28257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (4))){
var inst_28195 = (state_28227[(9)]);
var inst_28195__$1 = (state_28227[(2)]);
var inst_28196 = (inst_28195__$1 == null);
var inst_28197 = cljs.core.not.call(null,inst_28196);
var state_28227__$1 = (function (){var statearr_28232 = state_28227;
(statearr_28232[(9)] = inst_28195__$1);

return statearr_28232;
})();
if(inst_28197){
var statearr_28233_28258 = state_28227__$1;
(statearr_28233_28258[(1)] = (5));

} else {
var statearr_28234_28259 = state_28227__$1;
(statearr_28234_28259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (15))){
var inst_28217 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28235_28260 = state_28227__$1;
(statearr_28235_28260[(2)] = inst_28217);

(statearr_28235_28260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (13))){
var state_28227__$1 = state_28227;
var statearr_28236_28261 = state_28227__$1;
(statearr_28236_28261[(2)] = null);

(statearr_28236_28261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (6))){
var inst_28192 = (state_28227[(8)]);
var inst_28213 = (inst_28192 > (0));
var state_28227__$1 = state_28227;
if(cljs.core.truth_(inst_28213)){
var statearr_28237_28262 = state_28227__$1;
(statearr_28237_28262[(1)] = (12));

} else {
var statearr_28238_28263 = state_28227__$1;
(statearr_28238_28263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (3))){
var inst_28225 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28227__$1,inst_28225);
} else {
if((state_val_28228 === (12))){
var inst_28191 = (state_28227[(7)]);
var inst_28215 = cljs.core.vec.call(null,inst_28191);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28227__$1,(15),out,inst_28215);
} else {
if((state_val_28228 === (2))){
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28227__$1,(4),ch);
} else {
if((state_val_28228 === (11))){
var inst_28207 = (state_28227[(2)]);
var inst_28208 = (new Array(n));
var inst_28191 = inst_28208;
var inst_28192 = (0);
var state_28227__$1 = (function (){var statearr_28239 = state_28227;
(statearr_28239[(10)] = inst_28207);

(statearr_28239[(7)] = inst_28191);

(statearr_28239[(8)] = inst_28192);

return statearr_28239;
})();
var statearr_28240_28264 = state_28227__$1;
(statearr_28240_28264[(2)] = null);

(statearr_28240_28264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (9))){
var inst_28191 = (state_28227[(7)]);
var inst_28205 = cljs.core.vec.call(null,inst_28191);
var state_28227__$1 = state_28227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28227__$1,(11),out,inst_28205);
} else {
if((state_val_28228 === (5))){
var inst_28191 = (state_28227[(7)]);
var inst_28200 = (state_28227[(11)]);
var inst_28195 = (state_28227[(9)]);
var inst_28192 = (state_28227[(8)]);
var inst_28199 = (inst_28191[inst_28192] = inst_28195);
var inst_28200__$1 = (inst_28192 + (1));
var inst_28201 = (inst_28200__$1 < n);
var state_28227__$1 = (function (){var statearr_28241 = state_28227;
(statearr_28241[(12)] = inst_28199);

(statearr_28241[(11)] = inst_28200__$1);

return statearr_28241;
})();
if(cljs.core.truth_(inst_28201)){
var statearr_28242_28265 = state_28227__$1;
(statearr_28242_28265[(1)] = (8));

} else {
var statearr_28243_28266 = state_28227__$1;
(statearr_28243_28266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (14))){
var inst_28220 = (state_28227[(2)]);
var inst_28221 = cljs.core.async.close_BANG_.call(null,out);
var state_28227__$1 = (function (){var statearr_28245 = state_28227;
(statearr_28245[(13)] = inst_28220);

return statearr_28245;
})();
var statearr_28246_28267 = state_28227__$1;
(statearr_28246_28267[(2)] = inst_28221);

(statearr_28246_28267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (10))){
var inst_28211 = (state_28227[(2)]);
var state_28227__$1 = state_28227;
var statearr_28247_28268 = state_28227__$1;
(statearr_28247_28268[(2)] = inst_28211);

(statearr_28247_28268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28228 === (8))){
var inst_28191 = (state_28227[(7)]);
var inst_28200 = (state_28227[(11)]);
var tmp28244 = inst_28191;
var inst_28191__$1 = tmp28244;
var inst_28192 = inst_28200;
var state_28227__$1 = (function (){var statearr_28248 = state_28227;
(statearr_28248[(7)] = inst_28191__$1);

(statearr_28248[(8)] = inst_28192);

return statearr_28248;
})();
var statearr_28249_28269 = state_28227__$1;
(statearr_28249_28269[(2)] = null);

(statearr_28249_28269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___28255,out))
;
return ((function (switch__26349__auto__,c__26439__auto___28255,out){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28250[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_28227){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_28227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object)){
var ex__26353__auto__ = e28251;
var statearr_28252_28270 = state_28227;
(statearr_28252_28270[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28271 = state_28227;
state_28227 = G__28271;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_28227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_28227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___28255,out))
})();
var state__26441__auto__ = (function (){var statearr_28253 = f__26440__auto__.call(null);
(statearr_28253[(6)] = c__26439__auto___28255);

return statearr_28253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28255,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28273 = arguments.length;
switch (G__28273) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26439__auto___28343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28343,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___28343,out){
return (function (state_28315){
var state_val_28316 = (state_28315[(1)]);
if((state_val_28316 === (7))){
var inst_28311 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28317_28344 = state_28315__$1;
(statearr_28317_28344[(2)] = inst_28311);

(statearr_28317_28344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (1))){
var inst_28274 = [];
var inst_28275 = inst_28274;
var inst_28276 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28315__$1 = (function (){var statearr_28318 = state_28315;
(statearr_28318[(7)] = inst_28276);

(statearr_28318[(8)] = inst_28275);

return statearr_28318;
})();
var statearr_28319_28345 = state_28315__$1;
(statearr_28319_28345[(2)] = null);

(statearr_28319_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (4))){
var inst_28279 = (state_28315[(9)]);
var inst_28279__$1 = (state_28315[(2)]);
var inst_28280 = (inst_28279__$1 == null);
var inst_28281 = cljs.core.not.call(null,inst_28280);
var state_28315__$1 = (function (){var statearr_28320 = state_28315;
(statearr_28320[(9)] = inst_28279__$1);

return statearr_28320;
})();
if(inst_28281){
var statearr_28321_28346 = state_28315__$1;
(statearr_28321_28346[(1)] = (5));

} else {
var statearr_28322_28347 = state_28315__$1;
(statearr_28322_28347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (15))){
var inst_28305 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28323_28348 = state_28315__$1;
(statearr_28323_28348[(2)] = inst_28305);

(statearr_28323_28348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (13))){
var state_28315__$1 = state_28315;
var statearr_28324_28349 = state_28315__$1;
(statearr_28324_28349[(2)] = null);

(statearr_28324_28349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (6))){
var inst_28275 = (state_28315[(8)]);
var inst_28300 = inst_28275.length;
var inst_28301 = (inst_28300 > (0));
var state_28315__$1 = state_28315;
if(cljs.core.truth_(inst_28301)){
var statearr_28325_28350 = state_28315__$1;
(statearr_28325_28350[(1)] = (12));

} else {
var statearr_28326_28351 = state_28315__$1;
(statearr_28326_28351[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (3))){
var inst_28313 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28315__$1,inst_28313);
} else {
if((state_val_28316 === (12))){
var inst_28275 = (state_28315[(8)]);
var inst_28303 = cljs.core.vec.call(null,inst_28275);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28315__$1,(15),out,inst_28303);
} else {
if((state_val_28316 === (2))){
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28315__$1,(4),ch);
} else {
if((state_val_28316 === (11))){
var inst_28279 = (state_28315[(9)]);
var inst_28283 = (state_28315[(10)]);
var inst_28293 = (state_28315[(2)]);
var inst_28294 = [];
var inst_28295 = inst_28294.push(inst_28279);
var inst_28275 = inst_28294;
var inst_28276 = inst_28283;
var state_28315__$1 = (function (){var statearr_28327 = state_28315;
(statearr_28327[(7)] = inst_28276);

(statearr_28327[(8)] = inst_28275);

(statearr_28327[(11)] = inst_28293);

(statearr_28327[(12)] = inst_28295);

return statearr_28327;
})();
var statearr_28328_28352 = state_28315__$1;
(statearr_28328_28352[(2)] = null);

(statearr_28328_28352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (9))){
var inst_28275 = (state_28315[(8)]);
var inst_28291 = cljs.core.vec.call(null,inst_28275);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28315__$1,(11),out,inst_28291);
} else {
if((state_val_28316 === (5))){
var inst_28276 = (state_28315[(7)]);
var inst_28279 = (state_28315[(9)]);
var inst_28283 = (state_28315[(10)]);
var inst_28283__$1 = f.call(null,inst_28279);
var inst_28284 = cljs.core._EQ_.call(null,inst_28283__$1,inst_28276);
var inst_28285 = cljs.core.keyword_identical_QMARK_.call(null,inst_28276,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28286 = ((inst_28284) || (inst_28285));
var state_28315__$1 = (function (){var statearr_28329 = state_28315;
(statearr_28329[(10)] = inst_28283__$1);

return statearr_28329;
})();
if(cljs.core.truth_(inst_28286)){
var statearr_28330_28353 = state_28315__$1;
(statearr_28330_28353[(1)] = (8));

} else {
var statearr_28331_28354 = state_28315__$1;
(statearr_28331_28354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (14))){
var inst_28308 = (state_28315[(2)]);
var inst_28309 = cljs.core.async.close_BANG_.call(null,out);
var state_28315__$1 = (function (){var statearr_28333 = state_28315;
(statearr_28333[(13)] = inst_28308);

return statearr_28333;
})();
var statearr_28334_28355 = state_28315__$1;
(statearr_28334_28355[(2)] = inst_28309);

(statearr_28334_28355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (10))){
var inst_28298 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28335_28356 = state_28315__$1;
(statearr_28335_28356[(2)] = inst_28298);

(statearr_28335_28356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (8))){
var inst_28279 = (state_28315[(9)]);
var inst_28275 = (state_28315[(8)]);
var inst_28283 = (state_28315[(10)]);
var inst_28288 = inst_28275.push(inst_28279);
var tmp28332 = inst_28275;
var inst_28275__$1 = tmp28332;
var inst_28276 = inst_28283;
var state_28315__$1 = (function (){var statearr_28336 = state_28315;
(statearr_28336[(7)] = inst_28276);

(statearr_28336[(8)] = inst_28275__$1);

(statearr_28336[(14)] = inst_28288);

return statearr_28336;
})();
var statearr_28337_28357 = state_28315__$1;
(statearr_28337_28357[(2)] = null);

(statearr_28337_28357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26439__auto___28343,out))
;
return ((function (switch__26349__auto__,c__26439__auto___28343,out){
return (function() {
var cljs$core$async$state_machine__26350__auto__ = null;
var cljs$core$async$state_machine__26350__auto____0 = (function (){
var statearr_28338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28338[(0)] = cljs$core$async$state_machine__26350__auto__);

(statearr_28338[(1)] = (1));

return statearr_28338;
});
var cljs$core$async$state_machine__26350__auto____1 = (function (state_28315){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_28315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e28339){if((e28339 instanceof Object)){
var ex__26353__auto__ = e28339;
var statearr_28340_28358 = state_28315;
(statearr_28340_28358[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28359 = state_28315;
state_28315 = G__28359;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
cljs$core$async$state_machine__26350__auto__ = function(state_28315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26350__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26350__auto____1.call(this,state_28315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26350__auto____0;
cljs$core$async$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26350__auto____1;
return cljs$core$async$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___28343,out))
})();
var state__26441__auto__ = (function (){var statearr_28341 = f__26440__auto__.call(null);
(statearr_28341[(6)] = c__26439__auto___28343);

return statearr_28341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28343,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1672621534286
