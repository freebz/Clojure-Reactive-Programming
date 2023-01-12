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
var G__30659 = arguments.length;
switch (G__30659) {
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
if(typeof cljs.core.async.t_cljs$core$async30660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30660 = (function (f,blockable,meta30661){
this.f = f;
this.blockable = blockable;
this.meta30661 = meta30661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30662,meta30661__$1){
var self__ = this;
var _30662__$1 = this;
return (new cljs.core.async.t_cljs$core$async30660(self__.f,self__.blockable,meta30661__$1));
});


cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30662){
var self__ = this;
var _30662__$1 = this;
return self__.meta30661;
});


cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30661","meta30661",-525426580,null)], null);
});

cljs.core.async.t_cljs$core$async30660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30660";

cljs.core.async.t_cljs$core$async30660.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30660");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30660.
 */
cljs.core.async.__GT_t_cljs$core$async30660 = (function cljs$core$async$__GT_t_cljs$core$async30660(f__$1,blockable__$1,meta30661){
return (new cljs.core.async.t_cljs$core$async30660(f__$1,blockable__$1,meta30661));
});

}

return (new cljs.core.async.t_cljs$core$async30660(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30666 = arguments.length;
switch (G__30666) {
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
var G__30669 = arguments.length;
switch (G__30669) {
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
var G__30672 = arguments.length;
switch (G__30672) {
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
var val_30674 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30674);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30674,ret){
return (function (){
return fn1.call(null,val_30674);
});})(val_30674,ret))
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
var G__30676 = arguments.length;
switch (G__30676) {
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
var n__4376__auto___30678 = n;
var x_30679 = (0);
while(true){
if((x_30679 < n__4376__auto___30678)){
(a[x_30679] = (0));

var G__30680 = (x_30679 + (1));
x_30679 = G__30680;
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

var G__30681 = (i + (1));
i = G__30681;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30682 = (function (flag,meta30683){
this.flag = flag;
this.meta30683 = meta30683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async30682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30684,meta30683__$1){
var self__ = this;
var _30684__$1 = this;
return (new cljs.core.async.t_cljs$core$async30682(self__.flag,meta30683__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async30682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30684){
var self__ = this;
var _30684__$1 = this;
return self__.meta30683;
});})(flag))
;


cljs.core.async.t_cljs$core$async30682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async30682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async30682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async30682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30682.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30683","meta30683",759794392,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30682";

cljs.core.async.t_cljs$core$async30682.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30682");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30682.
 */
cljs.core.async.__GT_t_cljs$core$async30682 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30682(flag__$1,meta30683){
return (new cljs.core.async.t_cljs$core$async30682(flag__$1,meta30683));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30682(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30685 = (function (flag,cb,meta30686){
this.flag = flag;
this.cb = cb;
this.meta30686 = meta30686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30687,meta30686__$1){
var self__ = this;
var _30687__$1 = this;
return (new cljs.core.async.t_cljs$core$async30685(self__.flag,self__.cb,meta30686__$1));
});


cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30687){
var self__ = this;
var _30687__$1 = this;
return self__.meta30686;
});


cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30686","meta30686",2125380981,null)], null);
});

cljs.core.async.t_cljs$core$async30685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30685";

cljs.core.async.t_cljs$core$async30685.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30685");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30685.
 */
cljs.core.async.__GT_t_cljs$core$async30685 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30685(flag__$1,cb__$1,meta30686){
return (new cljs.core.async.t_cljs$core$async30685(flag__$1,cb__$1,meta30686));
});

}

return (new cljs.core.async.t_cljs$core$async30685(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30688_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30688_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30689_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30689_SHARP_,port], null));
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
var G__30690 = (i + (1));
i = G__30690;
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
var len__4499__auto___30696 = arguments.length;
var i__4500__auto___30697 = (0);
while(true){
if((i__4500__auto___30697 < len__4499__auto___30696)){
args__4502__auto__.push((arguments[i__4500__auto___30697]));

var G__30698 = (i__4500__auto___30697 + (1));
i__4500__auto___30697 = G__30698;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30693){
var map__30694 = p__30693;
var map__30694__$1 = ((((!((map__30694 == null)))?(((((map__30694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30694):map__30694);
var opts = map__30694__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30691){
var G__30692 = cljs.core.first.call(null,seq30691);
var seq30691__$1 = cljs.core.next.call(null,seq30691);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30692,seq30691__$1);
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
var G__30700 = arguments.length;
switch (G__30700) {
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
var c__30599__auto___30746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___30746){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___30746){
return (function (state_30724){
var state_val_30725 = (state_30724[(1)]);
if((state_val_30725 === (7))){
var inst_30720 = (state_30724[(2)]);
var state_30724__$1 = state_30724;
var statearr_30726_30747 = state_30724__$1;
(statearr_30726_30747[(2)] = inst_30720);

(statearr_30726_30747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (1))){
var state_30724__$1 = state_30724;
var statearr_30727_30748 = state_30724__$1;
(statearr_30727_30748[(2)] = null);

(statearr_30727_30748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (4))){
var inst_30703 = (state_30724[(7)]);
var inst_30703__$1 = (state_30724[(2)]);
var inst_30704 = (inst_30703__$1 == null);
var state_30724__$1 = (function (){var statearr_30728 = state_30724;
(statearr_30728[(7)] = inst_30703__$1);

return statearr_30728;
})();
if(cljs.core.truth_(inst_30704)){
var statearr_30729_30749 = state_30724__$1;
(statearr_30729_30749[(1)] = (5));

} else {
var statearr_30730_30750 = state_30724__$1;
(statearr_30730_30750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (13))){
var state_30724__$1 = state_30724;
var statearr_30731_30751 = state_30724__$1;
(statearr_30731_30751[(2)] = null);

(statearr_30731_30751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (6))){
var inst_30703 = (state_30724[(7)]);
var state_30724__$1 = state_30724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30724__$1,(11),to,inst_30703);
} else {
if((state_val_30725 === (3))){
var inst_30722 = (state_30724[(2)]);
var state_30724__$1 = state_30724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30724__$1,inst_30722);
} else {
if((state_val_30725 === (12))){
var state_30724__$1 = state_30724;
var statearr_30732_30752 = state_30724__$1;
(statearr_30732_30752[(2)] = null);

(statearr_30732_30752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (2))){
var state_30724__$1 = state_30724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30724__$1,(4),from);
} else {
if((state_val_30725 === (11))){
var inst_30713 = (state_30724[(2)]);
var state_30724__$1 = state_30724;
if(cljs.core.truth_(inst_30713)){
var statearr_30733_30753 = state_30724__$1;
(statearr_30733_30753[(1)] = (12));

} else {
var statearr_30734_30754 = state_30724__$1;
(statearr_30734_30754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (9))){
var state_30724__$1 = state_30724;
var statearr_30735_30755 = state_30724__$1;
(statearr_30735_30755[(2)] = null);

(statearr_30735_30755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (5))){
var state_30724__$1 = state_30724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30736_30756 = state_30724__$1;
(statearr_30736_30756[(1)] = (8));

} else {
var statearr_30737_30757 = state_30724__$1;
(statearr_30737_30757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (14))){
var inst_30718 = (state_30724[(2)]);
var state_30724__$1 = state_30724;
var statearr_30738_30758 = state_30724__$1;
(statearr_30738_30758[(2)] = inst_30718);

(statearr_30738_30758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (10))){
var inst_30710 = (state_30724[(2)]);
var state_30724__$1 = state_30724;
var statearr_30739_30759 = state_30724__$1;
(statearr_30739_30759[(2)] = inst_30710);

(statearr_30739_30759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (8))){
var inst_30707 = cljs.core.async.close_BANG_.call(null,to);
var state_30724__$1 = state_30724;
var statearr_30740_30760 = state_30724__$1;
(statearr_30740_30760[(2)] = inst_30707);

(statearr_30740_30760[(1)] = (10));


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
});})(c__30599__auto___30746))
;
return ((function (switch__30509__auto__,c__30599__auto___30746){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_30741 = [null,null,null,null,null,null,null,null];
(statearr_30741[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_30741[(1)] = (1));

return statearr_30741;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_30724){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_30724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e30742){if((e30742 instanceof Object)){
var ex__30513__auto__ = e30742;
var statearr_30743_30761 = state_30724;
(statearr_30743_30761[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30762 = state_30724;
state_30724 = G__30762;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_30724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_30724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___30746))
})();
var state__30601__auto__ = (function (){var statearr_30744 = f__30600__auto__.call(null);
(statearr_30744[(6)] = c__30599__auto___30746);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___30746))
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
return (function (p__30763){
var vec__30764 = p__30763;
var v = cljs.core.nth.call(null,vec__30764,(0),null);
var p = cljs.core.nth.call(null,vec__30764,(1),null);
var job = vec__30764;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30599__auto___30935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___30935,res,vec__30764,v,p,job,jobs,results){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___30935,res,vec__30764,v,p,job,jobs,results){
return (function (state_30771){
var state_val_30772 = (state_30771[(1)]);
if((state_val_30772 === (1))){
var state_30771__$1 = state_30771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30771__$1,(2),res,v);
} else {
if((state_val_30772 === (2))){
var inst_30768 = (state_30771[(2)]);
var inst_30769 = cljs.core.async.close_BANG_.call(null,res);
var state_30771__$1 = (function (){var statearr_30773 = state_30771;
(statearr_30773[(7)] = inst_30768);

return statearr_30773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30771__$1,inst_30769);
} else {
return null;
}
}
});})(c__30599__auto___30935,res,vec__30764,v,p,job,jobs,results))
;
return ((function (switch__30509__auto__,c__30599__auto___30935,res,vec__30764,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0 = (function (){
var statearr_30774 = [null,null,null,null,null,null,null,null];
(statearr_30774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__);

(statearr_30774[(1)] = (1));

return statearr_30774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1 = (function (state_30771){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_30771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e30775){if((e30775 instanceof Object)){
var ex__30513__auto__ = e30775;
var statearr_30776_30936 = state_30771;
(statearr_30776_30936[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30937 = state_30771;
state_30771 = G__30937;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = function(state_30771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1.call(this,state_30771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___30935,res,vec__30764,v,p,job,jobs,results))
})();
var state__30601__auto__ = (function (){var statearr_30777 = f__30600__auto__.call(null);
(statearr_30777[(6)] = c__30599__auto___30935);

return statearr_30777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___30935,res,vec__30764,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30778){
var vec__30779 = p__30778;
var v = cljs.core.nth.call(null,vec__30779,(0),null);
var p = cljs.core.nth.call(null,vec__30779,(1),null);
var job = vec__30779;
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
var n__4376__auto___30938 = n;
var __30939 = (0);
while(true){
if((__30939 < n__4376__auto___30938)){
var G__30782_30940 = type;
var G__30782_30941__$1 = (((G__30782_30940 instanceof cljs.core.Keyword))?G__30782_30940.fqn:null);
switch (G__30782_30941__$1) {
case "compute":
var c__30599__auto___30943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30939,c__30599__auto___30943,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (__30939,c__30599__auto___30943,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async){
return (function (state_30795){
var state_val_30796 = (state_30795[(1)]);
if((state_val_30796 === (1))){
var state_30795__$1 = state_30795;
var statearr_30797_30944 = state_30795__$1;
(statearr_30797_30944[(2)] = null);

(statearr_30797_30944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (2))){
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30795__$1,(4),jobs);
} else {
if((state_val_30796 === (3))){
var inst_30793 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30795__$1,inst_30793);
} else {
if((state_val_30796 === (4))){
var inst_30785 = (state_30795[(2)]);
var inst_30786 = process.call(null,inst_30785);
var state_30795__$1 = state_30795;
if(cljs.core.truth_(inst_30786)){
var statearr_30798_30945 = state_30795__$1;
(statearr_30798_30945[(1)] = (5));

} else {
var statearr_30799_30946 = state_30795__$1;
(statearr_30799_30946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (5))){
var state_30795__$1 = state_30795;
var statearr_30800_30947 = state_30795__$1;
(statearr_30800_30947[(2)] = null);

(statearr_30800_30947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (6))){
var state_30795__$1 = state_30795;
var statearr_30801_30948 = state_30795__$1;
(statearr_30801_30948[(2)] = null);

(statearr_30801_30948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (7))){
var inst_30791 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30802_30949 = state_30795__$1;
(statearr_30802_30949[(2)] = inst_30791);

(statearr_30802_30949[(1)] = (3));


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
});})(__30939,c__30599__auto___30943,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async))
;
return ((function (__30939,switch__30509__auto__,c__30599__auto___30943,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0 = (function (){
var statearr_30803 = [null,null,null,null,null,null,null];
(statearr_30803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__);

(statearr_30803[(1)] = (1));

return statearr_30803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1 = (function (state_30795){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_30795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e30804){if((e30804 instanceof Object)){
var ex__30513__auto__ = e30804;
var statearr_30805_30950 = state_30795;
(statearr_30805_30950[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30951 = state_30795;
state_30795 = G__30951;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = function(state_30795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1.call(this,state_30795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__;
})()
;})(__30939,switch__30509__auto__,c__30599__auto___30943,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async))
})();
var state__30601__auto__ = (function (){var statearr_30806 = f__30600__auto__.call(null);
(statearr_30806[(6)] = c__30599__auto___30943);

return statearr_30806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(__30939,c__30599__auto___30943,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async))
);


break;
case "async":
var c__30599__auto___30952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30939,c__30599__auto___30952,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (__30939,c__30599__auto___30952,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async){
return (function (state_30819){
var state_val_30820 = (state_30819[(1)]);
if((state_val_30820 === (1))){
var state_30819__$1 = state_30819;
var statearr_30821_30953 = state_30819__$1;
(statearr_30821_30953[(2)] = null);

(statearr_30821_30953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (2))){
var state_30819__$1 = state_30819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30819__$1,(4),jobs);
} else {
if((state_val_30820 === (3))){
var inst_30817 = (state_30819[(2)]);
var state_30819__$1 = state_30819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30819__$1,inst_30817);
} else {
if((state_val_30820 === (4))){
var inst_30809 = (state_30819[(2)]);
var inst_30810 = async.call(null,inst_30809);
var state_30819__$1 = state_30819;
if(cljs.core.truth_(inst_30810)){
var statearr_30822_30954 = state_30819__$1;
(statearr_30822_30954[(1)] = (5));

} else {
var statearr_30823_30955 = state_30819__$1;
(statearr_30823_30955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (5))){
var state_30819__$1 = state_30819;
var statearr_30824_30956 = state_30819__$1;
(statearr_30824_30956[(2)] = null);

(statearr_30824_30956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (6))){
var state_30819__$1 = state_30819;
var statearr_30825_30957 = state_30819__$1;
(statearr_30825_30957[(2)] = null);

(statearr_30825_30957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (7))){
var inst_30815 = (state_30819[(2)]);
var state_30819__$1 = state_30819;
var statearr_30826_30958 = state_30819__$1;
(statearr_30826_30958[(2)] = inst_30815);

(statearr_30826_30958[(1)] = (3));


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
});})(__30939,c__30599__auto___30952,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async))
;
return ((function (__30939,switch__30509__auto__,c__30599__auto___30952,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0 = (function (){
var statearr_30827 = [null,null,null,null,null,null,null];
(statearr_30827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__);

(statearr_30827[(1)] = (1));

return statearr_30827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1 = (function (state_30819){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_30819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e30828){if((e30828 instanceof Object)){
var ex__30513__auto__ = e30828;
var statearr_30829_30959 = state_30819;
(statearr_30829_30959[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30960 = state_30819;
state_30819 = G__30960;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = function(state_30819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1.call(this,state_30819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__;
})()
;})(__30939,switch__30509__auto__,c__30599__auto___30952,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async))
})();
var state__30601__auto__ = (function (){var statearr_30830 = f__30600__auto__.call(null);
(statearr_30830[(6)] = c__30599__auto___30952);

return statearr_30830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(__30939,c__30599__auto___30952,G__30782_30940,G__30782_30941__$1,n__4376__auto___30938,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30782_30941__$1)].join('')));

}

var G__30961 = (__30939 + (1));
__30939 = G__30961;
continue;
} else {
}
break;
}

var c__30599__auto___30962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___30962,jobs,results,process,async){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___30962,jobs,results,process,async){
return (function (state_30852){
var state_val_30853 = (state_30852[(1)]);
if((state_val_30853 === (1))){
var state_30852__$1 = state_30852;
var statearr_30854_30963 = state_30852__$1;
(statearr_30854_30963[(2)] = null);

(statearr_30854_30963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (2))){
var state_30852__$1 = state_30852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30852__$1,(4),from);
} else {
if((state_val_30853 === (3))){
var inst_30850 = (state_30852[(2)]);
var state_30852__$1 = state_30852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30852__$1,inst_30850);
} else {
if((state_val_30853 === (4))){
var inst_30833 = (state_30852[(7)]);
var inst_30833__$1 = (state_30852[(2)]);
var inst_30834 = (inst_30833__$1 == null);
var state_30852__$1 = (function (){var statearr_30855 = state_30852;
(statearr_30855[(7)] = inst_30833__$1);

return statearr_30855;
})();
if(cljs.core.truth_(inst_30834)){
var statearr_30856_30964 = state_30852__$1;
(statearr_30856_30964[(1)] = (5));

} else {
var statearr_30857_30965 = state_30852__$1;
(statearr_30857_30965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (5))){
var inst_30836 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30852__$1 = state_30852;
var statearr_30858_30966 = state_30852__$1;
(statearr_30858_30966[(2)] = inst_30836);

(statearr_30858_30966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (6))){
var inst_30838 = (state_30852[(8)]);
var inst_30833 = (state_30852[(7)]);
var inst_30838__$1 = cljs.core.async.chan.call(null,(1));
var inst_30839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30840 = [inst_30833,inst_30838__$1];
var inst_30841 = (new cljs.core.PersistentVector(null,2,(5),inst_30839,inst_30840,null));
var state_30852__$1 = (function (){var statearr_30859 = state_30852;
(statearr_30859[(8)] = inst_30838__$1);

return statearr_30859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30852__$1,(8),jobs,inst_30841);
} else {
if((state_val_30853 === (7))){
var inst_30848 = (state_30852[(2)]);
var state_30852__$1 = state_30852;
var statearr_30860_30967 = state_30852__$1;
(statearr_30860_30967[(2)] = inst_30848);

(statearr_30860_30967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (8))){
var inst_30838 = (state_30852[(8)]);
var inst_30843 = (state_30852[(2)]);
var state_30852__$1 = (function (){var statearr_30861 = state_30852;
(statearr_30861[(9)] = inst_30843);

return statearr_30861;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30852__$1,(9),results,inst_30838);
} else {
if((state_val_30853 === (9))){
var inst_30845 = (state_30852[(2)]);
var state_30852__$1 = (function (){var statearr_30862 = state_30852;
(statearr_30862[(10)] = inst_30845);

return statearr_30862;
})();
var statearr_30863_30968 = state_30852__$1;
(statearr_30863_30968[(2)] = null);

(statearr_30863_30968[(1)] = (2));


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
});})(c__30599__auto___30962,jobs,results,process,async))
;
return ((function (switch__30509__auto__,c__30599__auto___30962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0 = (function (){
var statearr_30864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__);

(statearr_30864[(1)] = (1));

return statearr_30864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1 = (function (state_30852){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_30852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e30865){if((e30865 instanceof Object)){
var ex__30513__auto__ = e30865;
var statearr_30866_30969 = state_30852;
(statearr_30866_30969[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30970 = state_30852;
state_30852 = G__30970;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = function(state_30852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1.call(this,state_30852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___30962,jobs,results,process,async))
})();
var state__30601__auto__ = (function (){var statearr_30867 = f__30600__auto__.call(null);
(statearr_30867[(6)] = c__30599__auto___30962);

return statearr_30867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___30962,jobs,results,process,async))
);


var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__,jobs,results,process,async){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__,jobs,results,process,async){
return (function (state_30905){
var state_val_30906 = (state_30905[(1)]);
if((state_val_30906 === (7))){
var inst_30901 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30907_30971 = state_30905__$1;
(statearr_30907_30971[(2)] = inst_30901);

(statearr_30907_30971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (20))){
var state_30905__$1 = state_30905;
var statearr_30908_30972 = state_30905__$1;
(statearr_30908_30972[(2)] = null);

(statearr_30908_30972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (1))){
var state_30905__$1 = state_30905;
var statearr_30909_30973 = state_30905__$1;
(statearr_30909_30973[(2)] = null);

(statearr_30909_30973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (4))){
var inst_30870 = (state_30905[(7)]);
var inst_30870__$1 = (state_30905[(2)]);
var inst_30871 = (inst_30870__$1 == null);
var state_30905__$1 = (function (){var statearr_30910 = state_30905;
(statearr_30910[(7)] = inst_30870__$1);

return statearr_30910;
})();
if(cljs.core.truth_(inst_30871)){
var statearr_30911_30974 = state_30905__$1;
(statearr_30911_30974[(1)] = (5));

} else {
var statearr_30912_30975 = state_30905__$1;
(statearr_30912_30975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (15))){
var inst_30883 = (state_30905[(8)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30905__$1,(18),to,inst_30883);
} else {
if((state_val_30906 === (21))){
var inst_30896 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30913_30976 = state_30905__$1;
(statearr_30913_30976[(2)] = inst_30896);

(statearr_30913_30976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (13))){
var inst_30898 = (state_30905[(2)]);
var state_30905__$1 = (function (){var statearr_30914 = state_30905;
(statearr_30914[(9)] = inst_30898);

return statearr_30914;
})();
var statearr_30915_30977 = state_30905__$1;
(statearr_30915_30977[(2)] = null);

(statearr_30915_30977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (6))){
var inst_30870 = (state_30905[(7)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30905__$1,(11),inst_30870);
} else {
if((state_val_30906 === (17))){
var inst_30891 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30891)){
var statearr_30916_30978 = state_30905__$1;
(statearr_30916_30978[(1)] = (19));

} else {
var statearr_30917_30979 = state_30905__$1;
(statearr_30917_30979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (3))){
var inst_30903 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30905__$1,inst_30903);
} else {
if((state_val_30906 === (12))){
var inst_30880 = (state_30905[(10)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30905__$1,(14),inst_30880);
} else {
if((state_val_30906 === (2))){
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30905__$1,(4),results);
} else {
if((state_val_30906 === (19))){
var state_30905__$1 = state_30905;
var statearr_30918_30980 = state_30905__$1;
(statearr_30918_30980[(2)] = null);

(statearr_30918_30980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (11))){
var inst_30880 = (state_30905[(2)]);
var state_30905__$1 = (function (){var statearr_30919 = state_30905;
(statearr_30919[(10)] = inst_30880);

return statearr_30919;
})();
var statearr_30920_30981 = state_30905__$1;
(statearr_30920_30981[(2)] = null);

(statearr_30920_30981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (9))){
var state_30905__$1 = state_30905;
var statearr_30921_30982 = state_30905__$1;
(statearr_30921_30982[(2)] = null);

(statearr_30921_30982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (5))){
var state_30905__$1 = state_30905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30922_30983 = state_30905__$1;
(statearr_30922_30983[(1)] = (8));

} else {
var statearr_30923_30984 = state_30905__$1;
(statearr_30923_30984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (14))){
var inst_30883 = (state_30905[(8)]);
var inst_30885 = (state_30905[(11)]);
var inst_30883__$1 = (state_30905[(2)]);
var inst_30884 = (inst_30883__$1 == null);
var inst_30885__$1 = cljs.core.not.call(null,inst_30884);
var state_30905__$1 = (function (){var statearr_30924 = state_30905;
(statearr_30924[(8)] = inst_30883__$1);

(statearr_30924[(11)] = inst_30885__$1);

return statearr_30924;
})();
if(inst_30885__$1){
var statearr_30925_30985 = state_30905__$1;
(statearr_30925_30985[(1)] = (15));

} else {
var statearr_30926_30986 = state_30905__$1;
(statearr_30926_30986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (16))){
var inst_30885 = (state_30905[(11)]);
var state_30905__$1 = state_30905;
var statearr_30927_30987 = state_30905__$1;
(statearr_30927_30987[(2)] = inst_30885);

(statearr_30927_30987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (10))){
var inst_30877 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30928_30988 = state_30905__$1;
(statearr_30928_30988[(2)] = inst_30877);

(statearr_30928_30988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (18))){
var inst_30888 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30929_30989 = state_30905__$1;
(statearr_30929_30989[(2)] = inst_30888);

(statearr_30929_30989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (8))){
var inst_30874 = cljs.core.async.close_BANG_.call(null,to);
var state_30905__$1 = state_30905;
var statearr_30930_30990 = state_30905__$1;
(statearr_30930_30990[(2)] = inst_30874);

(statearr_30930_30990[(1)] = (10));


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
});})(c__30599__auto__,jobs,results,process,async))
;
return ((function (switch__30509__auto__,c__30599__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0 = (function (){
var statearr_30931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__);

(statearr_30931[(1)] = (1));

return statearr_30931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1 = (function (state_30905){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_30905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e30932){if((e30932 instanceof Object)){
var ex__30513__auto__ = e30932;
var statearr_30933_30991 = state_30905;
(statearr_30933_30991[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30992 = state_30905;
state_30905 = G__30992;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__ = function(state_30905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1.call(this,state_30905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__,jobs,results,process,async))
})();
var state__30601__auto__ = (function (){var statearr_30934 = f__30600__auto__.call(null);
(statearr_30934[(6)] = c__30599__auto__);

return statearr_30934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__,jobs,results,process,async))
);

return c__30599__auto__;
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
var G__30994 = arguments.length;
switch (G__30994) {
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
var G__30997 = arguments.length;
switch (G__30997) {
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
var G__31000 = arguments.length;
switch (G__31000) {
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
var c__30599__auto___31049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___31049,tc,fc){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___31049,tc,fc){
return (function (state_31026){
var state_val_31027 = (state_31026[(1)]);
if((state_val_31027 === (7))){
var inst_31022 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31028_31050 = state_31026__$1;
(statearr_31028_31050[(2)] = inst_31022);

(statearr_31028_31050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (1))){
var state_31026__$1 = state_31026;
var statearr_31029_31051 = state_31026__$1;
(statearr_31029_31051[(2)] = null);

(statearr_31029_31051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (4))){
var inst_31003 = (state_31026[(7)]);
var inst_31003__$1 = (state_31026[(2)]);
var inst_31004 = (inst_31003__$1 == null);
var state_31026__$1 = (function (){var statearr_31030 = state_31026;
(statearr_31030[(7)] = inst_31003__$1);

return statearr_31030;
})();
if(cljs.core.truth_(inst_31004)){
var statearr_31031_31052 = state_31026__$1;
(statearr_31031_31052[(1)] = (5));

} else {
var statearr_31032_31053 = state_31026__$1;
(statearr_31032_31053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (13))){
var state_31026__$1 = state_31026;
var statearr_31033_31054 = state_31026__$1;
(statearr_31033_31054[(2)] = null);

(statearr_31033_31054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (6))){
var inst_31003 = (state_31026[(7)]);
var inst_31009 = p.call(null,inst_31003);
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_31009)){
var statearr_31034_31055 = state_31026__$1;
(statearr_31034_31055[(1)] = (9));

} else {
var statearr_31035_31056 = state_31026__$1;
(statearr_31035_31056[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (3))){
var inst_31024 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31026__$1,inst_31024);
} else {
if((state_val_31027 === (12))){
var state_31026__$1 = state_31026;
var statearr_31036_31057 = state_31026__$1;
(statearr_31036_31057[(2)] = null);

(statearr_31036_31057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (2))){
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31026__$1,(4),ch);
} else {
if((state_val_31027 === (11))){
var inst_31003 = (state_31026[(7)]);
var inst_31013 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31026__$1,(8),inst_31013,inst_31003);
} else {
if((state_val_31027 === (9))){
var state_31026__$1 = state_31026;
var statearr_31037_31058 = state_31026__$1;
(statearr_31037_31058[(2)] = tc);

(statearr_31037_31058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (5))){
var inst_31006 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31007 = cljs.core.async.close_BANG_.call(null,fc);
var state_31026__$1 = (function (){var statearr_31038 = state_31026;
(statearr_31038[(8)] = inst_31006);

return statearr_31038;
})();
var statearr_31039_31059 = state_31026__$1;
(statearr_31039_31059[(2)] = inst_31007);

(statearr_31039_31059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (14))){
var inst_31020 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
var statearr_31040_31060 = state_31026__$1;
(statearr_31040_31060[(2)] = inst_31020);

(statearr_31040_31060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (10))){
var state_31026__$1 = state_31026;
var statearr_31041_31061 = state_31026__$1;
(statearr_31041_31061[(2)] = fc);

(statearr_31041_31061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31027 === (8))){
var inst_31015 = (state_31026[(2)]);
var state_31026__$1 = state_31026;
if(cljs.core.truth_(inst_31015)){
var statearr_31042_31062 = state_31026__$1;
(statearr_31042_31062[(1)] = (12));

} else {
var statearr_31043_31063 = state_31026__$1;
(statearr_31043_31063[(1)] = (13));

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
});})(c__30599__auto___31049,tc,fc))
;
return ((function (switch__30509__auto__,c__30599__auto___31049,tc,fc){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_31044 = [null,null,null,null,null,null,null,null,null];
(statearr_31044[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_31044[(1)] = (1));

return statearr_31044;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_31026){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31045){if((e31045 instanceof Object)){
var ex__30513__auto__ = e31045;
var statearr_31046_31064 = state_31026;
(statearr_31046_31064[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31065 = state_31026;
state_31026 = G__31065;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_31026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_31026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___31049,tc,fc))
})();
var state__30601__auto__ = (function (){var statearr_31047 = f__30600__auto__.call(null);
(statearr_31047[(6)] = c__30599__auto___31049);

return statearr_31047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___31049,tc,fc))
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
var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__){
return (function (state_31086){
var state_val_31087 = (state_31086[(1)]);
if((state_val_31087 === (7))){
var inst_31082 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31088_31106 = state_31086__$1;
(statearr_31088_31106[(2)] = inst_31082);

(statearr_31088_31106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (1))){
var inst_31066 = init;
var state_31086__$1 = (function (){var statearr_31089 = state_31086;
(statearr_31089[(7)] = inst_31066);

return statearr_31089;
})();
var statearr_31090_31107 = state_31086__$1;
(statearr_31090_31107[(2)] = null);

(statearr_31090_31107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (4))){
var inst_31069 = (state_31086[(8)]);
var inst_31069__$1 = (state_31086[(2)]);
var inst_31070 = (inst_31069__$1 == null);
var state_31086__$1 = (function (){var statearr_31091 = state_31086;
(statearr_31091[(8)] = inst_31069__$1);

return statearr_31091;
})();
if(cljs.core.truth_(inst_31070)){
var statearr_31092_31108 = state_31086__$1;
(statearr_31092_31108[(1)] = (5));

} else {
var statearr_31093_31109 = state_31086__$1;
(statearr_31093_31109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (6))){
var inst_31066 = (state_31086[(7)]);
var inst_31069 = (state_31086[(8)]);
var inst_31073 = (state_31086[(9)]);
var inst_31073__$1 = f.call(null,inst_31066,inst_31069);
var inst_31074 = cljs.core.reduced_QMARK_.call(null,inst_31073__$1);
var state_31086__$1 = (function (){var statearr_31094 = state_31086;
(statearr_31094[(9)] = inst_31073__$1);

return statearr_31094;
})();
if(inst_31074){
var statearr_31095_31110 = state_31086__$1;
(statearr_31095_31110[(1)] = (8));

} else {
var statearr_31096_31111 = state_31086__$1;
(statearr_31096_31111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (3))){
var inst_31084 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31086__$1,inst_31084);
} else {
if((state_val_31087 === (2))){
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31086__$1,(4),ch);
} else {
if((state_val_31087 === (9))){
var inst_31073 = (state_31086[(9)]);
var inst_31066 = inst_31073;
var state_31086__$1 = (function (){var statearr_31097 = state_31086;
(statearr_31097[(7)] = inst_31066);

return statearr_31097;
})();
var statearr_31098_31112 = state_31086__$1;
(statearr_31098_31112[(2)] = null);

(statearr_31098_31112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (5))){
var inst_31066 = (state_31086[(7)]);
var state_31086__$1 = state_31086;
var statearr_31099_31113 = state_31086__$1;
(statearr_31099_31113[(2)] = inst_31066);

(statearr_31099_31113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (10))){
var inst_31080 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31100_31114 = state_31086__$1;
(statearr_31100_31114[(2)] = inst_31080);

(statearr_31100_31114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (8))){
var inst_31073 = (state_31086[(9)]);
var inst_31076 = cljs.core.deref.call(null,inst_31073);
var state_31086__$1 = state_31086;
var statearr_31101_31115 = state_31086__$1;
(statearr_31101_31115[(2)] = inst_31076);

(statearr_31101_31115[(1)] = (10));


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
});})(c__30599__auto__))
;
return ((function (switch__30509__auto__,c__30599__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30510__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30510__auto____0 = (function (){
var statearr_31102 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31102[(0)] = cljs$core$async$reduce_$_state_machine__30510__auto__);

(statearr_31102[(1)] = (1));

return statearr_31102;
});
var cljs$core$async$reduce_$_state_machine__30510__auto____1 = (function (state_31086){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31103){if((e31103 instanceof Object)){
var ex__30513__auto__ = e31103;
var statearr_31104_31116 = state_31086;
(statearr_31104_31116[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31117 = state_31086;
state_31086 = G__31117;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30510__auto__ = function(state_31086){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30510__auto____1.call(this,state_31086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30510__auto____0;
cljs$core$async$reduce_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30510__auto____1;
return cljs$core$async$reduce_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__))
})();
var state__30601__auto__ = (function (){var statearr_31105 = f__30600__auto__.call(null);
(statearr_31105[(6)] = c__30599__auto__);

return statearr_31105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__))
);

return c__30599__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__,f__$1){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__,f__$1){
return (function (state_31123){
var state_val_31124 = (state_31123[(1)]);
if((state_val_31124 === (1))){
var inst_31118 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(2),inst_31118);
} else {
if((state_val_31124 === (2))){
var inst_31120 = (state_31123[(2)]);
var inst_31121 = f__$1.call(null,inst_31120);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31123__$1,inst_31121);
} else {
return null;
}
}
});})(c__30599__auto__,f__$1))
;
return ((function (switch__30509__auto__,c__30599__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30510__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30510__auto____0 = (function (){
var statearr_31125 = [null,null,null,null,null,null,null];
(statearr_31125[(0)] = cljs$core$async$transduce_$_state_machine__30510__auto__);

(statearr_31125[(1)] = (1));

return statearr_31125;
});
var cljs$core$async$transduce_$_state_machine__30510__auto____1 = (function (state_31123){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31126){if((e31126 instanceof Object)){
var ex__30513__auto__ = e31126;
var statearr_31127_31129 = state_31123;
(statearr_31127_31129[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31130 = state_31123;
state_31123 = G__31130;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30510__auto__ = function(state_31123){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30510__auto____1.call(this,state_31123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30510__auto____0;
cljs$core$async$transduce_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30510__auto____1;
return cljs$core$async$transduce_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__,f__$1))
})();
var state__30601__auto__ = (function (){var statearr_31128 = f__30600__auto__.call(null);
(statearr_31128[(6)] = c__30599__auto__);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__,f__$1))
);

return c__30599__auto__;
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
var G__31132 = arguments.length;
switch (G__31132) {
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
var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__){
return (function (state_31157){
var state_val_31158 = (state_31157[(1)]);
if((state_val_31158 === (7))){
var inst_31139 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
var statearr_31159_31180 = state_31157__$1;
(statearr_31159_31180[(2)] = inst_31139);

(statearr_31159_31180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (1))){
var inst_31133 = cljs.core.seq.call(null,coll);
var inst_31134 = inst_31133;
var state_31157__$1 = (function (){var statearr_31160 = state_31157;
(statearr_31160[(7)] = inst_31134);

return statearr_31160;
})();
var statearr_31161_31181 = state_31157__$1;
(statearr_31161_31181[(2)] = null);

(statearr_31161_31181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (4))){
var inst_31134 = (state_31157[(7)]);
var inst_31137 = cljs.core.first.call(null,inst_31134);
var state_31157__$1 = state_31157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31157__$1,(7),ch,inst_31137);
} else {
if((state_val_31158 === (13))){
var inst_31151 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
var statearr_31162_31182 = state_31157__$1;
(statearr_31162_31182[(2)] = inst_31151);

(statearr_31162_31182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (6))){
var inst_31142 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
if(cljs.core.truth_(inst_31142)){
var statearr_31163_31183 = state_31157__$1;
(statearr_31163_31183[(1)] = (8));

} else {
var statearr_31164_31184 = state_31157__$1;
(statearr_31164_31184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (3))){
var inst_31155 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31157__$1,inst_31155);
} else {
if((state_val_31158 === (12))){
var state_31157__$1 = state_31157;
var statearr_31165_31185 = state_31157__$1;
(statearr_31165_31185[(2)] = null);

(statearr_31165_31185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (2))){
var inst_31134 = (state_31157[(7)]);
var state_31157__$1 = state_31157;
if(cljs.core.truth_(inst_31134)){
var statearr_31166_31186 = state_31157__$1;
(statearr_31166_31186[(1)] = (4));

} else {
var statearr_31167_31187 = state_31157__$1;
(statearr_31167_31187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (11))){
var inst_31148 = cljs.core.async.close_BANG_.call(null,ch);
var state_31157__$1 = state_31157;
var statearr_31168_31188 = state_31157__$1;
(statearr_31168_31188[(2)] = inst_31148);

(statearr_31168_31188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (9))){
var state_31157__$1 = state_31157;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31169_31189 = state_31157__$1;
(statearr_31169_31189[(1)] = (11));

} else {
var statearr_31170_31190 = state_31157__$1;
(statearr_31170_31190[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (5))){
var inst_31134 = (state_31157[(7)]);
var state_31157__$1 = state_31157;
var statearr_31171_31191 = state_31157__$1;
(statearr_31171_31191[(2)] = inst_31134);

(statearr_31171_31191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (10))){
var inst_31153 = (state_31157[(2)]);
var state_31157__$1 = state_31157;
var statearr_31172_31192 = state_31157__$1;
(statearr_31172_31192[(2)] = inst_31153);

(statearr_31172_31192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31158 === (8))){
var inst_31134 = (state_31157[(7)]);
var inst_31144 = cljs.core.next.call(null,inst_31134);
var inst_31134__$1 = inst_31144;
var state_31157__$1 = (function (){var statearr_31173 = state_31157;
(statearr_31173[(7)] = inst_31134__$1);

return statearr_31173;
})();
var statearr_31174_31193 = state_31157__$1;
(statearr_31174_31193[(2)] = null);

(statearr_31174_31193[(1)] = (2));


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
});})(c__30599__auto__))
;
return ((function (switch__30509__auto__,c__30599__auto__){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_31175 = [null,null,null,null,null,null,null,null];
(statearr_31175[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_31175[(1)] = (1));

return statearr_31175;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_31157){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31176){if((e31176 instanceof Object)){
var ex__30513__auto__ = e31176;
var statearr_31177_31194 = state_31157;
(statearr_31177_31194[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31195 = state_31157;
state_31157 = G__31195;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_31157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_31157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__))
})();
var state__30601__auto__ = (function (){var statearr_31178 = f__30600__auto__.call(null);
(statearr_31178[(6)] = c__30599__auto__);

return statearr_31178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__))
);

return c__30599__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async31196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31196 = (function (ch,cs,meta31197){
this.ch = ch;
this.cs = cs;
this.meta31197 = meta31197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31198,meta31197__$1){
var self__ = this;
var _31198__$1 = this;
return (new cljs.core.async.t_cljs$core$async31196(self__.ch,self__.cs,meta31197__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31198){
var self__ = this;
var _31198__$1 = this;
return self__.meta31197;
});})(cs))
;


cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async31196.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31196.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31197","meta31197",1636478357,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31196";

cljs.core.async.t_cljs$core$async31196.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31196");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31196.
 */
cljs.core.async.__GT_t_cljs$core$async31196 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31196(ch__$1,cs__$1,meta31197){
return (new cljs.core.async.t_cljs$core$async31196(ch__$1,cs__$1,meta31197));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31196(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30599__auto___31418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___31418,cs,m,dchan,dctr,done){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___31418,cs,m,dchan,dctr,done){
return (function (state_31333){
var state_val_31334 = (state_31333[(1)]);
if((state_val_31334 === (7))){
var inst_31329 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31335_31419 = state_31333__$1;
(statearr_31335_31419[(2)] = inst_31329);

(statearr_31335_31419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (20))){
var inst_31232 = (state_31333[(7)]);
var inst_31244 = cljs.core.first.call(null,inst_31232);
var inst_31245 = cljs.core.nth.call(null,inst_31244,(0),null);
var inst_31246 = cljs.core.nth.call(null,inst_31244,(1),null);
var state_31333__$1 = (function (){var statearr_31336 = state_31333;
(statearr_31336[(8)] = inst_31245);

return statearr_31336;
})();
if(cljs.core.truth_(inst_31246)){
var statearr_31337_31420 = state_31333__$1;
(statearr_31337_31420[(1)] = (22));

} else {
var statearr_31338_31421 = state_31333__$1;
(statearr_31338_31421[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (27))){
var inst_31281 = (state_31333[(9)]);
var inst_31274 = (state_31333[(10)]);
var inst_31201 = (state_31333[(11)]);
var inst_31276 = (state_31333[(12)]);
var inst_31281__$1 = cljs.core._nth.call(null,inst_31274,inst_31276);
var inst_31282 = cljs.core.async.put_BANG_.call(null,inst_31281__$1,inst_31201,done);
var state_31333__$1 = (function (){var statearr_31339 = state_31333;
(statearr_31339[(9)] = inst_31281__$1);

return statearr_31339;
})();
if(cljs.core.truth_(inst_31282)){
var statearr_31340_31422 = state_31333__$1;
(statearr_31340_31422[(1)] = (30));

} else {
var statearr_31341_31423 = state_31333__$1;
(statearr_31341_31423[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (1))){
var state_31333__$1 = state_31333;
var statearr_31342_31424 = state_31333__$1;
(statearr_31342_31424[(2)] = null);

(statearr_31342_31424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (24))){
var inst_31232 = (state_31333[(7)]);
var inst_31251 = (state_31333[(2)]);
var inst_31252 = cljs.core.next.call(null,inst_31232);
var inst_31210 = inst_31252;
var inst_31211 = null;
var inst_31212 = (0);
var inst_31213 = (0);
var state_31333__$1 = (function (){var statearr_31343 = state_31333;
(statearr_31343[(13)] = inst_31213);

(statearr_31343[(14)] = inst_31212);

(statearr_31343[(15)] = inst_31251);

(statearr_31343[(16)] = inst_31211);

(statearr_31343[(17)] = inst_31210);

return statearr_31343;
})();
var statearr_31344_31425 = state_31333__$1;
(statearr_31344_31425[(2)] = null);

(statearr_31344_31425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (39))){
var state_31333__$1 = state_31333;
var statearr_31348_31426 = state_31333__$1;
(statearr_31348_31426[(2)] = null);

(statearr_31348_31426[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (4))){
var inst_31201 = (state_31333[(11)]);
var inst_31201__$1 = (state_31333[(2)]);
var inst_31202 = (inst_31201__$1 == null);
var state_31333__$1 = (function (){var statearr_31349 = state_31333;
(statearr_31349[(11)] = inst_31201__$1);

return statearr_31349;
})();
if(cljs.core.truth_(inst_31202)){
var statearr_31350_31427 = state_31333__$1;
(statearr_31350_31427[(1)] = (5));

} else {
var statearr_31351_31428 = state_31333__$1;
(statearr_31351_31428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (15))){
var inst_31213 = (state_31333[(13)]);
var inst_31212 = (state_31333[(14)]);
var inst_31211 = (state_31333[(16)]);
var inst_31210 = (state_31333[(17)]);
var inst_31228 = (state_31333[(2)]);
var inst_31229 = (inst_31213 + (1));
var tmp31345 = inst_31212;
var tmp31346 = inst_31211;
var tmp31347 = inst_31210;
var inst_31210__$1 = tmp31347;
var inst_31211__$1 = tmp31346;
var inst_31212__$1 = tmp31345;
var inst_31213__$1 = inst_31229;
var state_31333__$1 = (function (){var statearr_31352 = state_31333;
(statearr_31352[(13)] = inst_31213__$1);

(statearr_31352[(14)] = inst_31212__$1);

(statearr_31352[(18)] = inst_31228);

(statearr_31352[(16)] = inst_31211__$1);

(statearr_31352[(17)] = inst_31210__$1);

return statearr_31352;
})();
var statearr_31353_31429 = state_31333__$1;
(statearr_31353_31429[(2)] = null);

(statearr_31353_31429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (21))){
var inst_31255 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31357_31430 = state_31333__$1;
(statearr_31357_31430[(2)] = inst_31255);

(statearr_31357_31430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (31))){
var inst_31281 = (state_31333[(9)]);
var inst_31285 = done.call(null,null);
var inst_31286 = cljs.core.async.untap_STAR_.call(null,m,inst_31281);
var state_31333__$1 = (function (){var statearr_31358 = state_31333;
(statearr_31358[(19)] = inst_31285);

return statearr_31358;
})();
var statearr_31359_31431 = state_31333__$1;
(statearr_31359_31431[(2)] = inst_31286);

(statearr_31359_31431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (32))){
var inst_31274 = (state_31333[(10)]);
var inst_31276 = (state_31333[(12)]);
var inst_31273 = (state_31333[(20)]);
var inst_31275 = (state_31333[(21)]);
var inst_31288 = (state_31333[(2)]);
var inst_31289 = (inst_31276 + (1));
var tmp31354 = inst_31274;
var tmp31355 = inst_31273;
var tmp31356 = inst_31275;
var inst_31273__$1 = tmp31355;
var inst_31274__$1 = tmp31354;
var inst_31275__$1 = tmp31356;
var inst_31276__$1 = inst_31289;
var state_31333__$1 = (function (){var statearr_31360 = state_31333;
(statearr_31360[(22)] = inst_31288);

(statearr_31360[(10)] = inst_31274__$1);

(statearr_31360[(12)] = inst_31276__$1);

(statearr_31360[(20)] = inst_31273__$1);

(statearr_31360[(21)] = inst_31275__$1);

return statearr_31360;
})();
var statearr_31361_31432 = state_31333__$1;
(statearr_31361_31432[(2)] = null);

(statearr_31361_31432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (40))){
var inst_31301 = (state_31333[(23)]);
var inst_31305 = done.call(null,null);
var inst_31306 = cljs.core.async.untap_STAR_.call(null,m,inst_31301);
var state_31333__$1 = (function (){var statearr_31362 = state_31333;
(statearr_31362[(24)] = inst_31305);

return statearr_31362;
})();
var statearr_31363_31433 = state_31333__$1;
(statearr_31363_31433[(2)] = inst_31306);

(statearr_31363_31433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (33))){
var inst_31292 = (state_31333[(25)]);
var inst_31294 = cljs.core.chunked_seq_QMARK_.call(null,inst_31292);
var state_31333__$1 = state_31333;
if(inst_31294){
var statearr_31364_31434 = state_31333__$1;
(statearr_31364_31434[(1)] = (36));

} else {
var statearr_31365_31435 = state_31333__$1;
(statearr_31365_31435[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (13))){
var inst_31222 = (state_31333[(26)]);
var inst_31225 = cljs.core.async.close_BANG_.call(null,inst_31222);
var state_31333__$1 = state_31333;
var statearr_31366_31436 = state_31333__$1;
(statearr_31366_31436[(2)] = inst_31225);

(statearr_31366_31436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (22))){
var inst_31245 = (state_31333[(8)]);
var inst_31248 = cljs.core.async.close_BANG_.call(null,inst_31245);
var state_31333__$1 = state_31333;
var statearr_31367_31437 = state_31333__$1;
(statearr_31367_31437[(2)] = inst_31248);

(statearr_31367_31437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (36))){
var inst_31292 = (state_31333[(25)]);
var inst_31296 = cljs.core.chunk_first.call(null,inst_31292);
var inst_31297 = cljs.core.chunk_rest.call(null,inst_31292);
var inst_31298 = cljs.core.count.call(null,inst_31296);
var inst_31273 = inst_31297;
var inst_31274 = inst_31296;
var inst_31275 = inst_31298;
var inst_31276 = (0);
var state_31333__$1 = (function (){var statearr_31368 = state_31333;
(statearr_31368[(10)] = inst_31274);

(statearr_31368[(12)] = inst_31276);

(statearr_31368[(20)] = inst_31273);

(statearr_31368[(21)] = inst_31275);

return statearr_31368;
})();
var statearr_31369_31438 = state_31333__$1;
(statearr_31369_31438[(2)] = null);

(statearr_31369_31438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (41))){
var inst_31292 = (state_31333[(25)]);
var inst_31308 = (state_31333[(2)]);
var inst_31309 = cljs.core.next.call(null,inst_31292);
var inst_31273 = inst_31309;
var inst_31274 = null;
var inst_31275 = (0);
var inst_31276 = (0);
var state_31333__$1 = (function (){var statearr_31370 = state_31333;
(statearr_31370[(27)] = inst_31308);

(statearr_31370[(10)] = inst_31274);

(statearr_31370[(12)] = inst_31276);

(statearr_31370[(20)] = inst_31273);

(statearr_31370[(21)] = inst_31275);

return statearr_31370;
})();
var statearr_31371_31439 = state_31333__$1;
(statearr_31371_31439[(2)] = null);

(statearr_31371_31439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (43))){
var state_31333__$1 = state_31333;
var statearr_31372_31440 = state_31333__$1;
(statearr_31372_31440[(2)] = null);

(statearr_31372_31440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (29))){
var inst_31317 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31373_31441 = state_31333__$1;
(statearr_31373_31441[(2)] = inst_31317);

(statearr_31373_31441[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (44))){
var inst_31326 = (state_31333[(2)]);
var state_31333__$1 = (function (){var statearr_31374 = state_31333;
(statearr_31374[(28)] = inst_31326);

return statearr_31374;
})();
var statearr_31375_31442 = state_31333__$1;
(statearr_31375_31442[(2)] = null);

(statearr_31375_31442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (6))){
var inst_31265 = (state_31333[(29)]);
var inst_31264 = cljs.core.deref.call(null,cs);
var inst_31265__$1 = cljs.core.keys.call(null,inst_31264);
var inst_31266 = cljs.core.count.call(null,inst_31265__$1);
var inst_31267 = cljs.core.reset_BANG_.call(null,dctr,inst_31266);
var inst_31272 = cljs.core.seq.call(null,inst_31265__$1);
var inst_31273 = inst_31272;
var inst_31274 = null;
var inst_31275 = (0);
var inst_31276 = (0);
var state_31333__$1 = (function (){var statearr_31376 = state_31333;
(statearr_31376[(29)] = inst_31265__$1);

(statearr_31376[(30)] = inst_31267);

(statearr_31376[(10)] = inst_31274);

(statearr_31376[(12)] = inst_31276);

(statearr_31376[(20)] = inst_31273);

(statearr_31376[(21)] = inst_31275);

return statearr_31376;
})();
var statearr_31377_31443 = state_31333__$1;
(statearr_31377_31443[(2)] = null);

(statearr_31377_31443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (28))){
var inst_31292 = (state_31333[(25)]);
var inst_31273 = (state_31333[(20)]);
var inst_31292__$1 = cljs.core.seq.call(null,inst_31273);
var state_31333__$1 = (function (){var statearr_31378 = state_31333;
(statearr_31378[(25)] = inst_31292__$1);

return statearr_31378;
})();
if(inst_31292__$1){
var statearr_31379_31444 = state_31333__$1;
(statearr_31379_31444[(1)] = (33));

} else {
var statearr_31380_31445 = state_31333__$1;
(statearr_31380_31445[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (25))){
var inst_31276 = (state_31333[(12)]);
var inst_31275 = (state_31333[(21)]);
var inst_31278 = (inst_31276 < inst_31275);
var inst_31279 = inst_31278;
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31279)){
var statearr_31381_31446 = state_31333__$1;
(statearr_31381_31446[(1)] = (27));

} else {
var statearr_31382_31447 = state_31333__$1;
(statearr_31382_31447[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (34))){
var state_31333__$1 = state_31333;
var statearr_31383_31448 = state_31333__$1;
(statearr_31383_31448[(2)] = null);

(statearr_31383_31448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (17))){
var state_31333__$1 = state_31333;
var statearr_31384_31449 = state_31333__$1;
(statearr_31384_31449[(2)] = null);

(statearr_31384_31449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (3))){
var inst_31331 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31333__$1,inst_31331);
} else {
if((state_val_31334 === (12))){
var inst_31260 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31385_31450 = state_31333__$1;
(statearr_31385_31450[(2)] = inst_31260);

(statearr_31385_31450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (2))){
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31333__$1,(4),ch);
} else {
if((state_val_31334 === (23))){
var state_31333__$1 = state_31333;
var statearr_31386_31451 = state_31333__$1;
(statearr_31386_31451[(2)] = null);

(statearr_31386_31451[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (35))){
var inst_31315 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31387_31452 = state_31333__$1;
(statearr_31387_31452[(2)] = inst_31315);

(statearr_31387_31452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (19))){
var inst_31232 = (state_31333[(7)]);
var inst_31236 = cljs.core.chunk_first.call(null,inst_31232);
var inst_31237 = cljs.core.chunk_rest.call(null,inst_31232);
var inst_31238 = cljs.core.count.call(null,inst_31236);
var inst_31210 = inst_31237;
var inst_31211 = inst_31236;
var inst_31212 = inst_31238;
var inst_31213 = (0);
var state_31333__$1 = (function (){var statearr_31388 = state_31333;
(statearr_31388[(13)] = inst_31213);

(statearr_31388[(14)] = inst_31212);

(statearr_31388[(16)] = inst_31211);

(statearr_31388[(17)] = inst_31210);

return statearr_31388;
})();
var statearr_31389_31453 = state_31333__$1;
(statearr_31389_31453[(2)] = null);

(statearr_31389_31453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (11))){
var inst_31232 = (state_31333[(7)]);
var inst_31210 = (state_31333[(17)]);
var inst_31232__$1 = cljs.core.seq.call(null,inst_31210);
var state_31333__$1 = (function (){var statearr_31390 = state_31333;
(statearr_31390[(7)] = inst_31232__$1);

return statearr_31390;
})();
if(inst_31232__$1){
var statearr_31391_31454 = state_31333__$1;
(statearr_31391_31454[(1)] = (16));

} else {
var statearr_31392_31455 = state_31333__$1;
(statearr_31392_31455[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (9))){
var inst_31262 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31393_31456 = state_31333__$1;
(statearr_31393_31456[(2)] = inst_31262);

(statearr_31393_31456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (5))){
var inst_31208 = cljs.core.deref.call(null,cs);
var inst_31209 = cljs.core.seq.call(null,inst_31208);
var inst_31210 = inst_31209;
var inst_31211 = null;
var inst_31212 = (0);
var inst_31213 = (0);
var state_31333__$1 = (function (){var statearr_31394 = state_31333;
(statearr_31394[(13)] = inst_31213);

(statearr_31394[(14)] = inst_31212);

(statearr_31394[(16)] = inst_31211);

(statearr_31394[(17)] = inst_31210);

return statearr_31394;
})();
var statearr_31395_31457 = state_31333__$1;
(statearr_31395_31457[(2)] = null);

(statearr_31395_31457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (14))){
var state_31333__$1 = state_31333;
var statearr_31396_31458 = state_31333__$1;
(statearr_31396_31458[(2)] = null);

(statearr_31396_31458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (45))){
var inst_31323 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31397_31459 = state_31333__$1;
(statearr_31397_31459[(2)] = inst_31323);

(statearr_31397_31459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (26))){
var inst_31265 = (state_31333[(29)]);
var inst_31319 = (state_31333[(2)]);
var inst_31320 = cljs.core.seq.call(null,inst_31265);
var state_31333__$1 = (function (){var statearr_31398 = state_31333;
(statearr_31398[(31)] = inst_31319);

return statearr_31398;
})();
if(inst_31320){
var statearr_31399_31460 = state_31333__$1;
(statearr_31399_31460[(1)] = (42));

} else {
var statearr_31400_31461 = state_31333__$1;
(statearr_31400_31461[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (16))){
var inst_31232 = (state_31333[(7)]);
var inst_31234 = cljs.core.chunked_seq_QMARK_.call(null,inst_31232);
var state_31333__$1 = state_31333;
if(inst_31234){
var statearr_31401_31462 = state_31333__$1;
(statearr_31401_31462[(1)] = (19));

} else {
var statearr_31402_31463 = state_31333__$1;
(statearr_31402_31463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (38))){
var inst_31312 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31403_31464 = state_31333__$1;
(statearr_31403_31464[(2)] = inst_31312);

(statearr_31403_31464[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (30))){
var state_31333__$1 = state_31333;
var statearr_31404_31465 = state_31333__$1;
(statearr_31404_31465[(2)] = null);

(statearr_31404_31465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (10))){
var inst_31213 = (state_31333[(13)]);
var inst_31211 = (state_31333[(16)]);
var inst_31221 = cljs.core._nth.call(null,inst_31211,inst_31213);
var inst_31222 = cljs.core.nth.call(null,inst_31221,(0),null);
var inst_31223 = cljs.core.nth.call(null,inst_31221,(1),null);
var state_31333__$1 = (function (){var statearr_31405 = state_31333;
(statearr_31405[(26)] = inst_31222);

return statearr_31405;
})();
if(cljs.core.truth_(inst_31223)){
var statearr_31406_31466 = state_31333__$1;
(statearr_31406_31466[(1)] = (13));

} else {
var statearr_31407_31467 = state_31333__$1;
(statearr_31407_31467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (18))){
var inst_31258 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31408_31468 = state_31333__$1;
(statearr_31408_31468[(2)] = inst_31258);

(statearr_31408_31468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (42))){
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31333__$1,(45),dchan);
} else {
if((state_val_31334 === (37))){
var inst_31292 = (state_31333[(25)]);
var inst_31301 = (state_31333[(23)]);
var inst_31201 = (state_31333[(11)]);
var inst_31301__$1 = cljs.core.first.call(null,inst_31292);
var inst_31302 = cljs.core.async.put_BANG_.call(null,inst_31301__$1,inst_31201,done);
var state_31333__$1 = (function (){var statearr_31409 = state_31333;
(statearr_31409[(23)] = inst_31301__$1);

return statearr_31409;
})();
if(cljs.core.truth_(inst_31302)){
var statearr_31410_31469 = state_31333__$1;
(statearr_31410_31469[(1)] = (39));

} else {
var statearr_31411_31470 = state_31333__$1;
(statearr_31411_31470[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (8))){
var inst_31213 = (state_31333[(13)]);
var inst_31212 = (state_31333[(14)]);
var inst_31215 = (inst_31213 < inst_31212);
var inst_31216 = inst_31215;
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31216)){
var statearr_31412_31471 = state_31333__$1;
(statearr_31412_31471[(1)] = (10));

} else {
var statearr_31413_31472 = state_31333__$1;
(statearr_31413_31472[(1)] = (11));

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
});})(c__30599__auto___31418,cs,m,dchan,dctr,done))
;
return ((function (switch__30509__auto__,c__30599__auto___31418,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30510__auto__ = null;
var cljs$core$async$mult_$_state_machine__30510__auto____0 = (function (){
var statearr_31414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31414[(0)] = cljs$core$async$mult_$_state_machine__30510__auto__);

(statearr_31414[(1)] = (1));

return statearr_31414;
});
var cljs$core$async$mult_$_state_machine__30510__auto____1 = (function (state_31333){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31415){if((e31415 instanceof Object)){
var ex__30513__auto__ = e31415;
var statearr_31416_31473 = state_31333;
(statearr_31416_31473[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31474 = state_31333;
state_31333 = G__31474;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30510__auto__ = function(state_31333){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30510__auto____1.call(this,state_31333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30510__auto____0;
cljs$core$async$mult_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30510__auto____1;
return cljs$core$async$mult_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___31418,cs,m,dchan,dctr,done))
})();
var state__30601__auto__ = (function (){var statearr_31417 = f__30600__auto__.call(null);
(statearr_31417[(6)] = c__30599__auto___31418);

return statearr_31417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___31418,cs,m,dchan,dctr,done))
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
var G__31476 = arguments.length;
switch (G__31476) {
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
var len__4499__auto___31488 = arguments.length;
var i__4500__auto___31489 = (0);
while(true){
if((i__4500__auto___31489 < len__4499__auto___31488)){
args__4502__auto__.push((arguments[i__4500__auto___31489]));

var G__31490 = (i__4500__auto___31489 + (1));
i__4500__auto___31489 = G__31490;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31482){
var map__31483 = p__31482;
var map__31483__$1 = ((((!((map__31483 == null)))?(((((map__31483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31483):map__31483);
var opts = map__31483__$1;
var statearr_31485_31491 = state;
(statearr_31485_31491[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__31483,map__31483__$1,opts){
return (function (val){
var statearr_31486_31492 = state;
(statearr_31486_31492[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31483,map__31483__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_31487_31493 = state;
(statearr_31487_31493[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31478){
var G__31479 = cljs.core.first.call(null,seq31478);
var seq31478__$1 = cljs.core.next.call(null,seq31478);
var G__31480 = cljs.core.first.call(null,seq31478__$1);
var seq31478__$2 = cljs.core.next.call(null,seq31478__$1);
var G__31481 = cljs.core.first.call(null,seq31478__$2);
var seq31478__$3 = cljs.core.next.call(null,seq31478__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31479,G__31480,G__31481,seq31478__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31494 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31495){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31495 = meta31495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31496,meta31495__$1){
var self__ = this;
var _31496__$1 = this;
return (new cljs.core.async.t_cljs$core$async31494(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31495__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31496){
var self__ = this;
var _31496__$1 = this;
return self__.meta31495;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31494.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31495","meta31495",-1530575937,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31494";

cljs.core.async.t_cljs$core$async31494.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31494");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31494.
 */
cljs.core.async.__GT_t_cljs$core$async31494 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31494(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31495){
return (new cljs.core.async.t_cljs$core$async31494(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31495));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31494(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30599__auto___31658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31598){
var state_val_31599 = (state_31598[(1)]);
if((state_val_31599 === (7))){
var inst_31513 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31600_31659 = state_31598__$1;
(statearr_31600_31659[(2)] = inst_31513);

(statearr_31600_31659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (20))){
var inst_31525 = (state_31598[(7)]);
var state_31598__$1 = state_31598;
var statearr_31601_31660 = state_31598__$1;
(statearr_31601_31660[(2)] = inst_31525);

(statearr_31601_31660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (27))){
var state_31598__$1 = state_31598;
var statearr_31602_31661 = state_31598__$1;
(statearr_31602_31661[(2)] = null);

(statearr_31602_31661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (1))){
var inst_31500 = (state_31598[(8)]);
var inst_31500__$1 = calc_state.call(null);
var inst_31502 = (inst_31500__$1 == null);
var inst_31503 = cljs.core.not.call(null,inst_31502);
var state_31598__$1 = (function (){var statearr_31603 = state_31598;
(statearr_31603[(8)] = inst_31500__$1);

return statearr_31603;
})();
if(inst_31503){
var statearr_31604_31662 = state_31598__$1;
(statearr_31604_31662[(1)] = (2));

} else {
var statearr_31605_31663 = state_31598__$1;
(statearr_31605_31663[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (24))){
var inst_31572 = (state_31598[(9)]);
var inst_31549 = (state_31598[(10)]);
var inst_31558 = (state_31598[(11)]);
var inst_31572__$1 = inst_31549.call(null,inst_31558);
var state_31598__$1 = (function (){var statearr_31606 = state_31598;
(statearr_31606[(9)] = inst_31572__$1);

return statearr_31606;
})();
if(cljs.core.truth_(inst_31572__$1)){
var statearr_31607_31664 = state_31598__$1;
(statearr_31607_31664[(1)] = (29));

} else {
var statearr_31608_31665 = state_31598__$1;
(statearr_31608_31665[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (4))){
var inst_31516 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31516)){
var statearr_31609_31666 = state_31598__$1;
(statearr_31609_31666[(1)] = (8));

} else {
var statearr_31610_31667 = state_31598__$1;
(statearr_31610_31667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (15))){
var inst_31543 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31543)){
var statearr_31611_31668 = state_31598__$1;
(statearr_31611_31668[(1)] = (19));

} else {
var statearr_31612_31669 = state_31598__$1;
(statearr_31612_31669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (21))){
var inst_31548 = (state_31598[(12)]);
var inst_31548__$1 = (state_31598[(2)]);
var inst_31549 = cljs.core.get.call(null,inst_31548__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31550 = cljs.core.get.call(null,inst_31548__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31551 = cljs.core.get.call(null,inst_31548__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31598__$1 = (function (){var statearr_31613 = state_31598;
(statearr_31613[(10)] = inst_31549);

(statearr_31613[(12)] = inst_31548__$1);

(statearr_31613[(13)] = inst_31550);

return statearr_31613;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31598__$1,(22),inst_31551);
} else {
if((state_val_31599 === (31))){
var inst_31580 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31580)){
var statearr_31614_31670 = state_31598__$1;
(statearr_31614_31670[(1)] = (32));

} else {
var statearr_31615_31671 = state_31598__$1;
(statearr_31615_31671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (32))){
var inst_31557 = (state_31598[(14)]);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31598__$1,(35),out,inst_31557);
} else {
if((state_val_31599 === (33))){
var inst_31548 = (state_31598[(12)]);
var inst_31525 = inst_31548;
var state_31598__$1 = (function (){var statearr_31616 = state_31598;
(statearr_31616[(7)] = inst_31525);

return statearr_31616;
})();
var statearr_31617_31672 = state_31598__$1;
(statearr_31617_31672[(2)] = null);

(statearr_31617_31672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (13))){
var inst_31525 = (state_31598[(7)]);
var inst_31532 = inst_31525.cljs$lang$protocol_mask$partition0$;
var inst_31533 = (inst_31532 & (64));
var inst_31534 = inst_31525.cljs$core$ISeq$;
var inst_31535 = (cljs.core.PROTOCOL_SENTINEL === inst_31534);
var inst_31536 = ((inst_31533) || (inst_31535));
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31536)){
var statearr_31618_31673 = state_31598__$1;
(statearr_31618_31673[(1)] = (16));

} else {
var statearr_31619_31674 = state_31598__$1;
(statearr_31619_31674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (22))){
var inst_31557 = (state_31598[(14)]);
var inst_31558 = (state_31598[(11)]);
var inst_31556 = (state_31598[(2)]);
var inst_31557__$1 = cljs.core.nth.call(null,inst_31556,(0),null);
var inst_31558__$1 = cljs.core.nth.call(null,inst_31556,(1),null);
var inst_31559 = (inst_31557__$1 == null);
var inst_31560 = cljs.core._EQ_.call(null,inst_31558__$1,change);
var inst_31561 = ((inst_31559) || (inst_31560));
var state_31598__$1 = (function (){var statearr_31620 = state_31598;
(statearr_31620[(14)] = inst_31557__$1);

(statearr_31620[(11)] = inst_31558__$1);

return statearr_31620;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31621_31675 = state_31598__$1;
(statearr_31621_31675[(1)] = (23));

} else {
var statearr_31622_31676 = state_31598__$1;
(statearr_31622_31676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (36))){
var inst_31548 = (state_31598[(12)]);
var inst_31525 = inst_31548;
var state_31598__$1 = (function (){var statearr_31623 = state_31598;
(statearr_31623[(7)] = inst_31525);

return statearr_31623;
})();
var statearr_31624_31677 = state_31598__$1;
(statearr_31624_31677[(2)] = null);

(statearr_31624_31677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (29))){
var inst_31572 = (state_31598[(9)]);
var state_31598__$1 = state_31598;
var statearr_31625_31678 = state_31598__$1;
(statearr_31625_31678[(2)] = inst_31572);

(statearr_31625_31678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (6))){
var state_31598__$1 = state_31598;
var statearr_31626_31679 = state_31598__$1;
(statearr_31626_31679[(2)] = false);

(statearr_31626_31679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (28))){
var inst_31568 = (state_31598[(2)]);
var inst_31569 = calc_state.call(null);
var inst_31525 = inst_31569;
var state_31598__$1 = (function (){var statearr_31627 = state_31598;
(statearr_31627[(7)] = inst_31525);

(statearr_31627[(15)] = inst_31568);

return statearr_31627;
})();
var statearr_31628_31680 = state_31598__$1;
(statearr_31628_31680[(2)] = null);

(statearr_31628_31680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (25))){
var inst_31594 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31629_31681 = state_31598__$1;
(statearr_31629_31681[(2)] = inst_31594);

(statearr_31629_31681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (34))){
var inst_31592 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31630_31682 = state_31598__$1;
(statearr_31630_31682[(2)] = inst_31592);

(statearr_31630_31682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (17))){
var state_31598__$1 = state_31598;
var statearr_31631_31683 = state_31598__$1;
(statearr_31631_31683[(2)] = false);

(statearr_31631_31683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (3))){
var state_31598__$1 = state_31598;
var statearr_31632_31684 = state_31598__$1;
(statearr_31632_31684[(2)] = false);

(statearr_31632_31684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (12))){
var inst_31596 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31598__$1,inst_31596);
} else {
if((state_val_31599 === (2))){
var inst_31500 = (state_31598[(8)]);
var inst_31505 = inst_31500.cljs$lang$protocol_mask$partition0$;
var inst_31506 = (inst_31505 & (64));
var inst_31507 = inst_31500.cljs$core$ISeq$;
var inst_31508 = (cljs.core.PROTOCOL_SENTINEL === inst_31507);
var inst_31509 = ((inst_31506) || (inst_31508));
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31509)){
var statearr_31633_31685 = state_31598__$1;
(statearr_31633_31685[(1)] = (5));

} else {
var statearr_31634_31686 = state_31598__$1;
(statearr_31634_31686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (23))){
var inst_31557 = (state_31598[(14)]);
var inst_31563 = (inst_31557 == null);
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31563)){
var statearr_31635_31687 = state_31598__$1;
(statearr_31635_31687[(1)] = (26));

} else {
var statearr_31636_31688 = state_31598__$1;
(statearr_31636_31688[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (35))){
var inst_31583 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31583)){
var statearr_31637_31689 = state_31598__$1;
(statearr_31637_31689[(1)] = (36));

} else {
var statearr_31638_31690 = state_31598__$1;
(statearr_31638_31690[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (19))){
var inst_31525 = (state_31598[(7)]);
var inst_31545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31525);
var state_31598__$1 = state_31598;
var statearr_31639_31691 = state_31598__$1;
(statearr_31639_31691[(2)] = inst_31545);

(statearr_31639_31691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (11))){
var inst_31525 = (state_31598[(7)]);
var inst_31529 = (inst_31525 == null);
var inst_31530 = cljs.core.not.call(null,inst_31529);
var state_31598__$1 = state_31598;
if(inst_31530){
var statearr_31640_31692 = state_31598__$1;
(statearr_31640_31692[(1)] = (13));

} else {
var statearr_31641_31693 = state_31598__$1;
(statearr_31641_31693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (9))){
var inst_31500 = (state_31598[(8)]);
var state_31598__$1 = state_31598;
var statearr_31642_31694 = state_31598__$1;
(statearr_31642_31694[(2)] = inst_31500);

(statearr_31642_31694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (5))){
var state_31598__$1 = state_31598;
var statearr_31643_31695 = state_31598__$1;
(statearr_31643_31695[(2)] = true);

(statearr_31643_31695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (14))){
var state_31598__$1 = state_31598;
var statearr_31644_31696 = state_31598__$1;
(statearr_31644_31696[(2)] = false);

(statearr_31644_31696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (26))){
var inst_31558 = (state_31598[(11)]);
var inst_31565 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31558);
var state_31598__$1 = state_31598;
var statearr_31645_31697 = state_31598__$1;
(statearr_31645_31697[(2)] = inst_31565);

(statearr_31645_31697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (16))){
var state_31598__$1 = state_31598;
var statearr_31646_31698 = state_31598__$1;
(statearr_31646_31698[(2)] = true);

(statearr_31646_31698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (38))){
var inst_31588 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31647_31699 = state_31598__$1;
(statearr_31647_31699[(2)] = inst_31588);

(statearr_31647_31699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (30))){
var inst_31549 = (state_31598[(10)]);
var inst_31550 = (state_31598[(13)]);
var inst_31558 = (state_31598[(11)]);
var inst_31575 = cljs.core.empty_QMARK_.call(null,inst_31549);
var inst_31576 = inst_31550.call(null,inst_31558);
var inst_31577 = cljs.core.not.call(null,inst_31576);
var inst_31578 = ((inst_31575) && (inst_31577));
var state_31598__$1 = state_31598;
var statearr_31648_31700 = state_31598__$1;
(statearr_31648_31700[(2)] = inst_31578);

(statearr_31648_31700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (10))){
var inst_31500 = (state_31598[(8)]);
var inst_31521 = (state_31598[(2)]);
var inst_31522 = cljs.core.get.call(null,inst_31521,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31523 = cljs.core.get.call(null,inst_31521,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31524 = cljs.core.get.call(null,inst_31521,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31525 = inst_31500;
var state_31598__$1 = (function (){var statearr_31649 = state_31598;
(statearr_31649[(7)] = inst_31525);

(statearr_31649[(16)] = inst_31523);

(statearr_31649[(17)] = inst_31524);

(statearr_31649[(18)] = inst_31522);

return statearr_31649;
})();
var statearr_31650_31701 = state_31598__$1;
(statearr_31650_31701[(2)] = null);

(statearr_31650_31701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (18))){
var inst_31540 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31651_31702 = state_31598__$1;
(statearr_31651_31702[(2)] = inst_31540);

(statearr_31651_31702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (37))){
var state_31598__$1 = state_31598;
var statearr_31652_31703 = state_31598__$1;
(statearr_31652_31703[(2)] = null);

(statearr_31652_31703[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (8))){
var inst_31500 = (state_31598[(8)]);
var inst_31518 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31500);
var state_31598__$1 = state_31598;
var statearr_31653_31704 = state_31598__$1;
(statearr_31653_31704[(2)] = inst_31518);

(statearr_31653_31704[(1)] = (10));


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
});})(c__30599__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30509__auto__,c__30599__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30510__auto__ = null;
var cljs$core$async$mix_$_state_machine__30510__auto____0 = (function (){
var statearr_31654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31654[(0)] = cljs$core$async$mix_$_state_machine__30510__auto__);

(statearr_31654[(1)] = (1));

return statearr_31654;
});
var cljs$core$async$mix_$_state_machine__30510__auto____1 = (function (state_31598){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31655){if((e31655 instanceof Object)){
var ex__30513__auto__ = e31655;
var statearr_31656_31705 = state_31598;
(statearr_31656_31705[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_31598;
state_31598 = G__31706;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30510__auto__ = function(state_31598){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30510__auto____1.call(this,state_31598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30510__auto____0;
cljs$core$async$mix_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30510__auto____1;
return cljs$core$async$mix_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30601__auto__ = (function (){var statearr_31657 = f__30600__auto__.call(null);
(statearr_31657[(6)] = c__30599__auto___31658);

return statearr_31657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__31708 = arguments.length;
switch (G__31708) {
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
var G__31712 = arguments.length;
switch (G__31712) {
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
return (function (p1__31710_SHARP_){
if(cljs.core.truth_(p1__31710_SHARP_.call(null,topic))){
return p1__31710_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31710_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31713 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31714){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31714 = meta31714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31715,meta31714__$1){
var self__ = this;
var _31715__$1 = this;
return (new cljs.core.async.t_cljs$core$async31713(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31714__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31715){
var self__ = this;
var _31715__$1 = this;
return self__.meta31714;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31714","meta31714",-270640725,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31713";

cljs.core.async.t_cljs$core$async31713.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31713");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31713.
 */
cljs.core.async.__GT_t_cljs$core$async31713 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31714){
return (new cljs.core.async.t_cljs$core$async31713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31714));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31713(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30599__auto___31833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___31833,mults,ensure_mult,p){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___31833,mults,ensure_mult,p){
return (function (state_31787){
var state_val_31788 = (state_31787[(1)]);
if((state_val_31788 === (7))){
var inst_31783 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31789_31834 = state_31787__$1;
(statearr_31789_31834[(2)] = inst_31783);

(statearr_31789_31834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (20))){
var state_31787__$1 = state_31787;
var statearr_31790_31835 = state_31787__$1;
(statearr_31790_31835[(2)] = null);

(statearr_31790_31835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (1))){
var state_31787__$1 = state_31787;
var statearr_31791_31836 = state_31787__$1;
(statearr_31791_31836[(2)] = null);

(statearr_31791_31836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (24))){
var inst_31766 = (state_31787[(7)]);
var inst_31775 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31766);
var state_31787__$1 = state_31787;
var statearr_31792_31837 = state_31787__$1;
(statearr_31792_31837[(2)] = inst_31775);

(statearr_31792_31837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (4))){
var inst_31718 = (state_31787[(8)]);
var inst_31718__$1 = (state_31787[(2)]);
var inst_31719 = (inst_31718__$1 == null);
var state_31787__$1 = (function (){var statearr_31793 = state_31787;
(statearr_31793[(8)] = inst_31718__$1);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31719)){
var statearr_31794_31838 = state_31787__$1;
(statearr_31794_31838[(1)] = (5));

} else {
var statearr_31795_31839 = state_31787__$1;
(statearr_31795_31839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (15))){
var inst_31760 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31796_31840 = state_31787__$1;
(statearr_31796_31840[(2)] = inst_31760);

(statearr_31796_31840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (21))){
var inst_31780 = (state_31787[(2)]);
var state_31787__$1 = (function (){var statearr_31797 = state_31787;
(statearr_31797[(9)] = inst_31780);

return statearr_31797;
})();
var statearr_31798_31841 = state_31787__$1;
(statearr_31798_31841[(2)] = null);

(statearr_31798_31841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (13))){
var inst_31742 = (state_31787[(10)]);
var inst_31744 = cljs.core.chunked_seq_QMARK_.call(null,inst_31742);
var state_31787__$1 = state_31787;
if(inst_31744){
var statearr_31799_31842 = state_31787__$1;
(statearr_31799_31842[(1)] = (16));

} else {
var statearr_31800_31843 = state_31787__$1;
(statearr_31800_31843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (22))){
var inst_31772 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
if(cljs.core.truth_(inst_31772)){
var statearr_31801_31844 = state_31787__$1;
(statearr_31801_31844[(1)] = (23));

} else {
var statearr_31802_31845 = state_31787__$1;
(statearr_31802_31845[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (6))){
var inst_31768 = (state_31787[(11)]);
var inst_31766 = (state_31787[(7)]);
var inst_31718 = (state_31787[(8)]);
var inst_31766__$1 = topic_fn.call(null,inst_31718);
var inst_31767 = cljs.core.deref.call(null,mults);
var inst_31768__$1 = cljs.core.get.call(null,inst_31767,inst_31766__$1);
var state_31787__$1 = (function (){var statearr_31803 = state_31787;
(statearr_31803[(11)] = inst_31768__$1);

(statearr_31803[(7)] = inst_31766__$1);

return statearr_31803;
})();
if(cljs.core.truth_(inst_31768__$1)){
var statearr_31804_31846 = state_31787__$1;
(statearr_31804_31846[(1)] = (19));

} else {
var statearr_31805_31847 = state_31787__$1;
(statearr_31805_31847[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (25))){
var inst_31777 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31806_31848 = state_31787__$1;
(statearr_31806_31848[(2)] = inst_31777);

(statearr_31806_31848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (17))){
var inst_31742 = (state_31787[(10)]);
var inst_31751 = cljs.core.first.call(null,inst_31742);
var inst_31752 = cljs.core.async.muxch_STAR_.call(null,inst_31751);
var inst_31753 = cljs.core.async.close_BANG_.call(null,inst_31752);
var inst_31754 = cljs.core.next.call(null,inst_31742);
var inst_31728 = inst_31754;
var inst_31729 = null;
var inst_31730 = (0);
var inst_31731 = (0);
var state_31787__$1 = (function (){var statearr_31807 = state_31787;
(statearr_31807[(12)] = inst_31731);

(statearr_31807[(13)] = inst_31729);

(statearr_31807[(14)] = inst_31728);

(statearr_31807[(15)] = inst_31753);

(statearr_31807[(16)] = inst_31730);

return statearr_31807;
})();
var statearr_31808_31849 = state_31787__$1;
(statearr_31808_31849[(2)] = null);

(statearr_31808_31849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (3))){
var inst_31785 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31787__$1,inst_31785);
} else {
if((state_val_31788 === (12))){
var inst_31762 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31809_31850 = state_31787__$1;
(statearr_31809_31850[(2)] = inst_31762);

(statearr_31809_31850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (2))){
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31787__$1,(4),ch);
} else {
if((state_val_31788 === (23))){
var state_31787__$1 = state_31787;
var statearr_31810_31851 = state_31787__$1;
(statearr_31810_31851[(2)] = null);

(statearr_31810_31851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (19))){
var inst_31768 = (state_31787[(11)]);
var inst_31718 = (state_31787[(8)]);
var inst_31770 = cljs.core.async.muxch_STAR_.call(null,inst_31768);
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31787__$1,(22),inst_31770,inst_31718);
} else {
if((state_val_31788 === (11))){
var inst_31742 = (state_31787[(10)]);
var inst_31728 = (state_31787[(14)]);
var inst_31742__$1 = cljs.core.seq.call(null,inst_31728);
var state_31787__$1 = (function (){var statearr_31811 = state_31787;
(statearr_31811[(10)] = inst_31742__$1);

return statearr_31811;
})();
if(inst_31742__$1){
var statearr_31812_31852 = state_31787__$1;
(statearr_31812_31852[(1)] = (13));

} else {
var statearr_31813_31853 = state_31787__$1;
(statearr_31813_31853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (9))){
var inst_31764 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31814_31854 = state_31787__$1;
(statearr_31814_31854[(2)] = inst_31764);

(statearr_31814_31854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (5))){
var inst_31725 = cljs.core.deref.call(null,mults);
var inst_31726 = cljs.core.vals.call(null,inst_31725);
var inst_31727 = cljs.core.seq.call(null,inst_31726);
var inst_31728 = inst_31727;
var inst_31729 = null;
var inst_31730 = (0);
var inst_31731 = (0);
var state_31787__$1 = (function (){var statearr_31815 = state_31787;
(statearr_31815[(12)] = inst_31731);

(statearr_31815[(13)] = inst_31729);

(statearr_31815[(14)] = inst_31728);

(statearr_31815[(16)] = inst_31730);

return statearr_31815;
})();
var statearr_31816_31855 = state_31787__$1;
(statearr_31816_31855[(2)] = null);

(statearr_31816_31855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (14))){
var state_31787__$1 = state_31787;
var statearr_31820_31856 = state_31787__$1;
(statearr_31820_31856[(2)] = null);

(statearr_31820_31856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (16))){
var inst_31742 = (state_31787[(10)]);
var inst_31746 = cljs.core.chunk_first.call(null,inst_31742);
var inst_31747 = cljs.core.chunk_rest.call(null,inst_31742);
var inst_31748 = cljs.core.count.call(null,inst_31746);
var inst_31728 = inst_31747;
var inst_31729 = inst_31746;
var inst_31730 = inst_31748;
var inst_31731 = (0);
var state_31787__$1 = (function (){var statearr_31821 = state_31787;
(statearr_31821[(12)] = inst_31731);

(statearr_31821[(13)] = inst_31729);

(statearr_31821[(14)] = inst_31728);

(statearr_31821[(16)] = inst_31730);

return statearr_31821;
})();
var statearr_31822_31857 = state_31787__$1;
(statearr_31822_31857[(2)] = null);

(statearr_31822_31857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (10))){
var inst_31731 = (state_31787[(12)]);
var inst_31729 = (state_31787[(13)]);
var inst_31728 = (state_31787[(14)]);
var inst_31730 = (state_31787[(16)]);
var inst_31736 = cljs.core._nth.call(null,inst_31729,inst_31731);
var inst_31737 = cljs.core.async.muxch_STAR_.call(null,inst_31736);
var inst_31738 = cljs.core.async.close_BANG_.call(null,inst_31737);
var inst_31739 = (inst_31731 + (1));
var tmp31817 = inst_31729;
var tmp31818 = inst_31728;
var tmp31819 = inst_31730;
var inst_31728__$1 = tmp31818;
var inst_31729__$1 = tmp31817;
var inst_31730__$1 = tmp31819;
var inst_31731__$1 = inst_31739;
var state_31787__$1 = (function (){var statearr_31823 = state_31787;
(statearr_31823[(12)] = inst_31731__$1);

(statearr_31823[(13)] = inst_31729__$1);

(statearr_31823[(17)] = inst_31738);

(statearr_31823[(14)] = inst_31728__$1);

(statearr_31823[(16)] = inst_31730__$1);

return statearr_31823;
})();
var statearr_31824_31858 = state_31787__$1;
(statearr_31824_31858[(2)] = null);

(statearr_31824_31858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (18))){
var inst_31757 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31825_31859 = state_31787__$1;
(statearr_31825_31859[(2)] = inst_31757);

(statearr_31825_31859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (8))){
var inst_31731 = (state_31787[(12)]);
var inst_31730 = (state_31787[(16)]);
var inst_31733 = (inst_31731 < inst_31730);
var inst_31734 = inst_31733;
var state_31787__$1 = state_31787;
if(cljs.core.truth_(inst_31734)){
var statearr_31826_31860 = state_31787__$1;
(statearr_31826_31860[(1)] = (10));

} else {
var statearr_31827_31861 = state_31787__$1;
(statearr_31827_31861[(1)] = (11));

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
});})(c__30599__auto___31833,mults,ensure_mult,p))
;
return ((function (switch__30509__auto__,c__30599__auto___31833,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_31828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31828[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_31828[(1)] = (1));

return statearr_31828;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_31787){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31829){if((e31829 instanceof Object)){
var ex__30513__auto__ = e31829;
var statearr_31830_31862 = state_31787;
(statearr_31830_31862[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31863 = state_31787;
state_31787 = G__31863;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_31787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_31787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___31833,mults,ensure_mult,p))
})();
var state__30601__auto__ = (function (){var statearr_31831 = f__30600__auto__.call(null);
(statearr_31831[(6)] = c__30599__auto___31833);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___31833,mults,ensure_mult,p))
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
var G__31865 = arguments.length;
switch (G__31865) {
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
var G__31868 = arguments.length;
switch (G__31868) {
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
var G__31871 = arguments.length;
switch (G__31871) {
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
var c__30599__auto___31938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___31938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___31938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31910){
var state_val_31911 = (state_31910[(1)]);
if((state_val_31911 === (7))){
var state_31910__$1 = state_31910;
var statearr_31912_31939 = state_31910__$1;
(statearr_31912_31939[(2)] = null);

(statearr_31912_31939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (1))){
var state_31910__$1 = state_31910;
var statearr_31913_31940 = state_31910__$1;
(statearr_31913_31940[(2)] = null);

(statearr_31913_31940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (4))){
var inst_31874 = (state_31910[(7)]);
var inst_31876 = (inst_31874 < cnt);
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31876)){
var statearr_31914_31941 = state_31910__$1;
(statearr_31914_31941[(1)] = (6));

} else {
var statearr_31915_31942 = state_31910__$1;
(statearr_31915_31942[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (15))){
var inst_31906 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31916_31943 = state_31910__$1;
(statearr_31916_31943[(2)] = inst_31906);

(statearr_31916_31943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (13))){
var inst_31899 = cljs.core.async.close_BANG_.call(null,out);
var state_31910__$1 = state_31910;
var statearr_31917_31944 = state_31910__$1;
(statearr_31917_31944[(2)] = inst_31899);

(statearr_31917_31944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (6))){
var state_31910__$1 = state_31910;
var statearr_31918_31945 = state_31910__$1;
(statearr_31918_31945[(2)] = null);

(statearr_31918_31945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (3))){
var inst_31908 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31910__$1,inst_31908);
} else {
if((state_val_31911 === (12))){
var inst_31896 = (state_31910[(8)]);
var inst_31896__$1 = (state_31910[(2)]);
var inst_31897 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31896__$1);
var state_31910__$1 = (function (){var statearr_31919 = state_31910;
(statearr_31919[(8)] = inst_31896__$1);

return statearr_31919;
})();
if(cljs.core.truth_(inst_31897)){
var statearr_31920_31946 = state_31910__$1;
(statearr_31920_31946[(1)] = (13));

} else {
var statearr_31921_31947 = state_31910__$1;
(statearr_31921_31947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (2))){
var inst_31873 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31874 = (0);
var state_31910__$1 = (function (){var statearr_31922 = state_31910;
(statearr_31922[(9)] = inst_31873);

(statearr_31922[(7)] = inst_31874);

return statearr_31922;
})();
var statearr_31923_31948 = state_31910__$1;
(statearr_31923_31948[(2)] = null);

(statearr_31923_31948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (11))){
var inst_31874 = (state_31910[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31910,(10),Object,null,(9));
var inst_31883 = chs__$1.call(null,inst_31874);
var inst_31884 = done.call(null,inst_31874);
var inst_31885 = cljs.core.async.take_BANG_.call(null,inst_31883,inst_31884);
var state_31910__$1 = state_31910;
var statearr_31924_31949 = state_31910__$1;
(statearr_31924_31949[(2)] = inst_31885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31910__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (9))){
var inst_31874 = (state_31910[(7)]);
var inst_31887 = (state_31910[(2)]);
var inst_31888 = (inst_31874 + (1));
var inst_31874__$1 = inst_31888;
var state_31910__$1 = (function (){var statearr_31925 = state_31910;
(statearr_31925[(7)] = inst_31874__$1);

(statearr_31925[(10)] = inst_31887);

return statearr_31925;
})();
var statearr_31926_31950 = state_31910__$1;
(statearr_31926_31950[(2)] = null);

(statearr_31926_31950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (5))){
var inst_31894 = (state_31910[(2)]);
var state_31910__$1 = (function (){var statearr_31927 = state_31910;
(statearr_31927[(11)] = inst_31894);

return statearr_31927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31910__$1,(12),dchan);
} else {
if((state_val_31911 === (14))){
var inst_31896 = (state_31910[(8)]);
var inst_31901 = cljs.core.apply.call(null,f,inst_31896);
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31910__$1,(16),out,inst_31901);
} else {
if((state_val_31911 === (16))){
var inst_31903 = (state_31910[(2)]);
var state_31910__$1 = (function (){var statearr_31928 = state_31910;
(statearr_31928[(12)] = inst_31903);

return statearr_31928;
})();
var statearr_31929_31951 = state_31910__$1;
(statearr_31929_31951[(2)] = null);

(statearr_31929_31951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (10))){
var inst_31878 = (state_31910[(2)]);
var inst_31879 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31910__$1 = (function (){var statearr_31930 = state_31910;
(statearr_31930[(13)] = inst_31878);

return statearr_31930;
})();
var statearr_31931_31952 = state_31910__$1;
(statearr_31931_31952[(2)] = inst_31879);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31910__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (8))){
var inst_31892 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31932_31953 = state_31910__$1;
(statearr_31932_31953[(2)] = inst_31892);

(statearr_31932_31953[(1)] = (5));


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
});})(c__30599__auto___31938,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30509__auto__,c__30599__auto___31938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_31933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31933[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_31933[(1)] = (1));

return statearr_31933;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_31910){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e31934){if((e31934 instanceof Object)){
var ex__30513__auto__ = e31934;
var statearr_31935_31954 = state_31910;
(statearr_31935_31954[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31955 = state_31910;
state_31910 = G__31955;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_31910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_31910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___31938,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30601__auto__ = (function (){var statearr_31936 = f__30600__auto__.call(null);
(statearr_31936[(6)] = c__30599__auto___31938);

return statearr_31936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___31938,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__31958 = arguments.length;
switch (G__31958) {
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
var c__30599__auto___32012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___32012,out){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___32012,out){
return (function (state_31990){
var state_val_31991 = (state_31990[(1)]);
if((state_val_31991 === (7))){
var inst_31969 = (state_31990[(7)]);
var inst_31970 = (state_31990[(8)]);
var inst_31969__$1 = (state_31990[(2)]);
var inst_31970__$1 = cljs.core.nth.call(null,inst_31969__$1,(0),null);
var inst_31971 = cljs.core.nth.call(null,inst_31969__$1,(1),null);
var inst_31972 = (inst_31970__$1 == null);
var state_31990__$1 = (function (){var statearr_31992 = state_31990;
(statearr_31992[(7)] = inst_31969__$1);

(statearr_31992[(9)] = inst_31971);

(statearr_31992[(8)] = inst_31970__$1);

return statearr_31992;
})();
if(cljs.core.truth_(inst_31972)){
var statearr_31993_32013 = state_31990__$1;
(statearr_31993_32013[(1)] = (8));

} else {
var statearr_31994_32014 = state_31990__$1;
(statearr_31994_32014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (1))){
var inst_31959 = cljs.core.vec.call(null,chs);
var inst_31960 = inst_31959;
var state_31990__$1 = (function (){var statearr_31995 = state_31990;
(statearr_31995[(10)] = inst_31960);

return statearr_31995;
})();
var statearr_31996_32015 = state_31990__$1;
(statearr_31996_32015[(2)] = null);

(statearr_31996_32015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (4))){
var inst_31960 = (state_31990[(10)]);
var state_31990__$1 = state_31990;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31990__$1,(7),inst_31960);
} else {
if((state_val_31991 === (6))){
var inst_31986 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_31997_32016 = state_31990__$1;
(statearr_31997_32016[(2)] = inst_31986);

(statearr_31997_32016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (3))){
var inst_31988 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31990__$1,inst_31988);
} else {
if((state_val_31991 === (2))){
var inst_31960 = (state_31990[(10)]);
var inst_31962 = cljs.core.count.call(null,inst_31960);
var inst_31963 = (inst_31962 > (0));
var state_31990__$1 = state_31990;
if(cljs.core.truth_(inst_31963)){
var statearr_31999_32017 = state_31990__$1;
(statearr_31999_32017[(1)] = (4));

} else {
var statearr_32000_32018 = state_31990__$1;
(statearr_32000_32018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (11))){
var inst_31960 = (state_31990[(10)]);
var inst_31979 = (state_31990[(2)]);
var tmp31998 = inst_31960;
var inst_31960__$1 = tmp31998;
var state_31990__$1 = (function (){var statearr_32001 = state_31990;
(statearr_32001[(10)] = inst_31960__$1);

(statearr_32001[(11)] = inst_31979);

return statearr_32001;
})();
var statearr_32002_32019 = state_31990__$1;
(statearr_32002_32019[(2)] = null);

(statearr_32002_32019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (9))){
var inst_31970 = (state_31990[(8)]);
var state_31990__$1 = state_31990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31990__$1,(11),out,inst_31970);
} else {
if((state_val_31991 === (5))){
var inst_31984 = cljs.core.async.close_BANG_.call(null,out);
var state_31990__$1 = state_31990;
var statearr_32003_32020 = state_31990__$1;
(statearr_32003_32020[(2)] = inst_31984);

(statearr_32003_32020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (10))){
var inst_31982 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32004_32021 = state_31990__$1;
(statearr_32004_32021[(2)] = inst_31982);

(statearr_32004_32021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (8))){
var inst_31960 = (state_31990[(10)]);
var inst_31969 = (state_31990[(7)]);
var inst_31971 = (state_31990[(9)]);
var inst_31970 = (state_31990[(8)]);
var inst_31974 = (function (){var cs = inst_31960;
var vec__31965 = inst_31969;
var v = inst_31970;
var c = inst_31971;
return ((function (cs,vec__31965,v,c,inst_31960,inst_31969,inst_31971,inst_31970,state_val_31991,c__30599__auto___32012,out){
return (function (p1__31956_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31956_SHARP_);
});
;})(cs,vec__31965,v,c,inst_31960,inst_31969,inst_31971,inst_31970,state_val_31991,c__30599__auto___32012,out))
})();
var inst_31975 = cljs.core.filterv.call(null,inst_31974,inst_31960);
var inst_31960__$1 = inst_31975;
var state_31990__$1 = (function (){var statearr_32005 = state_31990;
(statearr_32005[(10)] = inst_31960__$1);

return statearr_32005;
})();
var statearr_32006_32022 = state_31990__$1;
(statearr_32006_32022[(2)] = null);

(statearr_32006_32022[(1)] = (2));


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
});})(c__30599__auto___32012,out))
;
return ((function (switch__30509__auto__,c__30599__auto___32012,out){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_32007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32007[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_32007[(1)] = (1));

return statearr_32007;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_31990){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_31990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32008){if((e32008 instanceof Object)){
var ex__30513__auto__ = e32008;
var statearr_32009_32023 = state_31990;
(statearr_32009_32023[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32024 = state_31990;
state_31990 = G__32024;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_31990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_31990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___32012,out))
})();
var state__30601__auto__ = (function (){var statearr_32010 = f__30600__auto__.call(null);
(statearr_32010[(6)] = c__30599__auto___32012);

return statearr_32010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___32012,out))
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
var G__32026 = arguments.length;
switch (G__32026) {
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
var c__30599__auto___32071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___32071,out){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___32071,out){
return (function (state_32050){
var state_val_32051 = (state_32050[(1)]);
if((state_val_32051 === (7))){
var inst_32032 = (state_32050[(7)]);
var inst_32032__$1 = (state_32050[(2)]);
var inst_32033 = (inst_32032__$1 == null);
var inst_32034 = cljs.core.not.call(null,inst_32033);
var state_32050__$1 = (function (){var statearr_32052 = state_32050;
(statearr_32052[(7)] = inst_32032__$1);

return statearr_32052;
})();
if(inst_32034){
var statearr_32053_32072 = state_32050__$1;
(statearr_32053_32072[(1)] = (8));

} else {
var statearr_32054_32073 = state_32050__$1;
(statearr_32054_32073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (1))){
var inst_32027 = (0);
var state_32050__$1 = (function (){var statearr_32055 = state_32050;
(statearr_32055[(8)] = inst_32027);

return statearr_32055;
})();
var statearr_32056_32074 = state_32050__$1;
(statearr_32056_32074[(2)] = null);

(statearr_32056_32074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (4))){
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32050__$1,(7),ch);
} else {
if((state_val_32051 === (6))){
var inst_32045 = (state_32050[(2)]);
var state_32050__$1 = state_32050;
var statearr_32057_32075 = state_32050__$1;
(statearr_32057_32075[(2)] = inst_32045);

(statearr_32057_32075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (3))){
var inst_32047 = (state_32050[(2)]);
var inst_32048 = cljs.core.async.close_BANG_.call(null,out);
var state_32050__$1 = (function (){var statearr_32058 = state_32050;
(statearr_32058[(9)] = inst_32047);

return statearr_32058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32050__$1,inst_32048);
} else {
if((state_val_32051 === (2))){
var inst_32027 = (state_32050[(8)]);
var inst_32029 = (inst_32027 < n);
var state_32050__$1 = state_32050;
if(cljs.core.truth_(inst_32029)){
var statearr_32059_32076 = state_32050__$1;
(statearr_32059_32076[(1)] = (4));

} else {
var statearr_32060_32077 = state_32050__$1;
(statearr_32060_32077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (11))){
var inst_32027 = (state_32050[(8)]);
var inst_32037 = (state_32050[(2)]);
var inst_32038 = (inst_32027 + (1));
var inst_32027__$1 = inst_32038;
var state_32050__$1 = (function (){var statearr_32061 = state_32050;
(statearr_32061[(8)] = inst_32027__$1);

(statearr_32061[(10)] = inst_32037);

return statearr_32061;
})();
var statearr_32062_32078 = state_32050__$1;
(statearr_32062_32078[(2)] = null);

(statearr_32062_32078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (9))){
var state_32050__$1 = state_32050;
var statearr_32063_32079 = state_32050__$1;
(statearr_32063_32079[(2)] = null);

(statearr_32063_32079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (5))){
var state_32050__$1 = state_32050;
var statearr_32064_32080 = state_32050__$1;
(statearr_32064_32080[(2)] = null);

(statearr_32064_32080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (10))){
var inst_32042 = (state_32050[(2)]);
var state_32050__$1 = state_32050;
var statearr_32065_32081 = state_32050__$1;
(statearr_32065_32081[(2)] = inst_32042);

(statearr_32065_32081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (8))){
var inst_32032 = (state_32050[(7)]);
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32050__$1,(11),out,inst_32032);
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
});})(c__30599__auto___32071,out))
;
return ((function (switch__30509__auto__,c__30599__auto___32071,out){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_32066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32066[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_32066[(1)] = (1));

return statearr_32066;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_32050){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32067){if((e32067 instanceof Object)){
var ex__30513__auto__ = e32067;
var statearr_32068_32082 = state_32050;
(statearr_32068_32082[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32083 = state_32050;
state_32050 = G__32083;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_32050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_32050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___32071,out))
})();
var state__30601__auto__ = (function (){var statearr_32069 = f__30600__auto__.call(null);
(statearr_32069[(6)] = c__30599__auto___32071);

return statearr_32069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___32071,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32085 = (function (f,ch,meta32086){
this.f = f;
this.ch = ch;
this.meta32086 = meta32086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32087,meta32086__$1){
var self__ = this;
var _32087__$1 = this;
return (new cljs.core.async.t_cljs$core$async32085(self__.f,self__.ch,meta32086__$1));
});


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32087){
var self__ = this;
var _32087__$1 = this;
return self__.meta32086;
});


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32088 = (function (f,ch,meta32086,_,fn1,meta32089){
this.f = f;
this.ch = ch;
this.meta32086 = meta32086;
this._ = _;
this.fn1 = fn1;
this.meta32089 = meta32089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32090,meta32089__$1){
var self__ = this;
var _32090__$1 = this;
return (new cljs.core.async.t_cljs$core$async32088(self__.f,self__.ch,self__.meta32086,self__._,self__.fn1,meta32089__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32090){
var self__ = this;
var _32090__$1 = this;
return self__.meta32089;
});})(___$1))
;


cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32084_SHARP_){
return f1.call(null,(((p1__32084_SHARP_ == null))?null:self__.f.call(null,p1__32084_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32088.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32086","meta32086",1307443528,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32085","cljs.core.async/t_cljs$core$async32085",-1263363464,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32089","meta32089",-1635450389,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32088";

cljs.core.async.t_cljs$core$async32088.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32088");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32088.
 */
cljs.core.async.__GT_t_cljs$core$async32088 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32088(f__$1,ch__$1,meta32086__$1,___$2,fn1__$1,meta32089){
return (new cljs.core.async.t_cljs$core$async32088(f__$1,ch__$1,meta32086__$1,___$2,fn1__$1,meta32089));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32088(self__.f,self__.ch,self__.meta32086,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32086","meta32086",1307443528,null)], null);
});

cljs.core.async.t_cljs$core$async32085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32085";

cljs.core.async.t_cljs$core$async32085.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32085");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32085.
 */
cljs.core.async.__GT_t_cljs$core$async32085 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32085(f__$1,ch__$1,meta32086){
return (new cljs.core.async.t_cljs$core$async32085(f__$1,ch__$1,meta32086));
});

}

return (new cljs.core.async.t_cljs$core$async32085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32091 = (function (f,ch,meta32092){
this.f = f;
this.ch = ch;
this.meta32092 = meta32092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32093,meta32092__$1){
var self__ = this;
var _32093__$1 = this;
return (new cljs.core.async.t_cljs$core$async32091(self__.f,self__.ch,meta32092__$1));
});


cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32093){
var self__ = this;
var _32093__$1 = this;
return self__.meta32092;
});


cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32092","meta32092",362115543,null)], null);
});

cljs.core.async.t_cljs$core$async32091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32091";

cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32091");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32091.
 */
cljs.core.async.__GT_t_cljs$core$async32091 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32091(f__$1,ch__$1,meta32092){
return (new cljs.core.async.t_cljs$core$async32091(f__$1,ch__$1,meta32092));
});

}

return (new cljs.core.async.t_cljs$core$async32091(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32094 = (function (p,ch,meta32095){
this.p = p;
this.ch = ch;
this.meta32095 = meta32095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32096,meta32095__$1){
var self__ = this;
var _32096__$1 = this;
return (new cljs.core.async.t_cljs$core$async32094(self__.p,self__.ch,meta32095__$1));
});


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32096){
var self__ = this;
var _32096__$1 = this;
return self__.meta32095;
});


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32095","meta32095",-757880879,null)], null);
});

cljs.core.async.t_cljs$core$async32094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32094";

cljs.core.async.t_cljs$core$async32094.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32094");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32094.
 */
cljs.core.async.__GT_t_cljs$core$async32094 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32094(p__$1,ch__$1,meta32095){
return (new cljs.core.async.t_cljs$core$async32094(p__$1,ch__$1,meta32095));
});

}

return (new cljs.core.async.t_cljs$core$async32094(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32098 = arguments.length;
switch (G__32098) {
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
var c__30599__auto___32138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___32138,out){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___32138,out){
return (function (state_32119){
var state_val_32120 = (state_32119[(1)]);
if((state_val_32120 === (7))){
var inst_32115 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32121_32139 = state_32119__$1;
(statearr_32121_32139[(2)] = inst_32115);

(statearr_32121_32139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (1))){
var state_32119__$1 = state_32119;
var statearr_32122_32140 = state_32119__$1;
(statearr_32122_32140[(2)] = null);

(statearr_32122_32140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (4))){
var inst_32101 = (state_32119[(7)]);
var inst_32101__$1 = (state_32119[(2)]);
var inst_32102 = (inst_32101__$1 == null);
var state_32119__$1 = (function (){var statearr_32123 = state_32119;
(statearr_32123[(7)] = inst_32101__$1);

return statearr_32123;
})();
if(cljs.core.truth_(inst_32102)){
var statearr_32124_32141 = state_32119__$1;
(statearr_32124_32141[(1)] = (5));

} else {
var statearr_32125_32142 = state_32119__$1;
(statearr_32125_32142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (6))){
var inst_32101 = (state_32119[(7)]);
var inst_32106 = p.call(null,inst_32101);
var state_32119__$1 = state_32119;
if(cljs.core.truth_(inst_32106)){
var statearr_32126_32143 = state_32119__$1;
(statearr_32126_32143[(1)] = (8));

} else {
var statearr_32127_32144 = state_32119__$1;
(statearr_32127_32144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (3))){
var inst_32117 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32119__$1,inst_32117);
} else {
if((state_val_32120 === (2))){
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32119__$1,(4),ch);
} else {
if((state_val_32120 === (11))){
var inst_32109 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32128_32145 = state_32119__$1;
(statearr_32128_32145[(2)] = inst_32109);

(statearr_32128_32145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (9))){
var state_32119__$1 = state_32119;
var statearr_32129_32146 = state_32119__$1;
(statearr_32129_32146[(2)] = null);

(statearr_32129_32146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (5))){
var inst_32104 = cljs.core.async.close_BANG_.call(null,out);
var state_32119__$1 = state_32119;
var statearr_32130_32147 = state_32119__$1;
(statearr_32130_32147[(2)] = inst_32104);

(statearr_32130_32147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (10))){
var inst_32112 = (state_32119[(2)]);
var state_32119__$1 = (function (){var statearr_32131 = state_32119;
(statearr_32131[(8)] = inst_32112);

return statearr_32131;
})();
var statearr_32132_32148 = state_32119__$1;
(statearr_32132_32148[(2)] = null);

(statearr_32132_32148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (8))){
var inst_32101 = (state_32119[(7)]);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32119__$1,(11),out,inst_32101);
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
});})(c__30599__auto___32138,out))
;
return ((function (switch__30509__auto__,c__30599__auto___32138,out){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_32133 = [null,null,null,null,null,null,null,null,null];
(statearr_32133[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_32133[(1)] = (1));

return statearr_32133;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_32119){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32134){if((e32134 instanceof Object)){
var ex__30513__auto__ = e32134;
var statearr_32135_32149 = state_32119;
(statearr_32135_32149[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32150 = state_32119;
state_32119 = G__32150;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_32119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_32119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___32138,out))
})();
var state__30601__auto__ = (function (){var statearr_32136 = f__30600__auto__.call(null);
(statearr_32136[(6)] = c__30599__auto___32138);

return statearr_32136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___32138,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32152 = arguments.length;
switch (G__32152) {
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
var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__){
return (function (state_32215){
var state_val_32216 = (state_32215[(1)]);
if((state_val_32216 === (7))){
var inst_32211 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32217_32255 = state_32215__$1;
(statearr_32217_32255[(2)] = inst_32211);

(statearr_32217_32255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (20))){
var inst_32181 = (state_32215[(7)]);
var inst_32192 = (state_32215[(2)]);
var inst_32193 = cljs.core.next.call(null,inst_32181);
var inst_32167 = inst_32193;
var inst_32168 = null;
var inst_32169 = (0);
var inst_32170 = (0);
var state_32215__$1 = (function (){var statearr_32218 = state_32215;
(statearr_32218[(8)] = inst_32192);

(statearr_32218[(9)] = inst_32170);

(statearr_32218[(10)] = inst_32169);

(statearr_32218[(11)] = inst_32167);

(statearr_32218[(12)] = inst_32168);

return statearr_32218;
})();
var statearr_32219_32256 = state_32215__$1;
(statearr_32219_32256[(2)] = null);

(statearr_32219_32256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (1))){
var state_32215__$1 = state_32215;
var statearr_32220_32257 = state_32215__$1;
(statearr_32220_32257[(2)] = null);

(statearr_32220_32257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (4))){
var inst_32156 = (state_32215[(13)]);
var inst_32156__$1 = (state_32215[(2)]);
var inst_32157 = (inst_32156__$1 == null);
var state_32215__$1 = (function (){var statearr_32221 = state_32215;
(statearr_32221[(13)] = inst_32156__$1);

return statearr_32221;
})();
if(cljs.core.truth_(inst_32157)){
var statearr_32222_32258 = state_32215__$1;
(statearr_32222_32258[(1)] = (5));

} else {
var statearr_32223_32259 = state_32215__$1;
(statearr_32223_32259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (15))){
var state_32215__$1 = state_32215;
var statearr_32227_32260 = state_32215__$1;
(statearr_32227_32260[(2)] = null);

(statearr_32227_32260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (21))){
var state_32215__$1 = state_32215;
var statearr_32228_32261 = state_32215__$1;
(statearr_32228_32261[(2)] = null);

(statearr_32228_32261[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (13))){
var inst_32170 = (state_32215[(9)]);
var inst_32169 = (state_32215[(10)]);
var inst_32167 = (state_32215[(11)]);
var inst_32168 = (state_32215[(12)]);
var inst_32177 = (state_32215[(2)]);
var inst_32178 = (inst_32170 + (1));
var tmp32224 = inst_32169;
var tmp32225 = inst_32167;
var tmp32226 = inst_32168;
var inst_32167__$1 = tmp32225;
var inst_32168__$1 = tmp32226;
var inst_32169__$1 = tmp32224;
var inst_32170__$1 = inst_32178;
var state_32215__$1 = (function (){var statearr_32229 = state_32215;
(statearr_32229[(14)] = inst_32177);

(statearr_32229[(9)] = inst_32170__$1);

(statearr_32229[(10)] = inst_32169__$1);

(statearr_32229[(11)] = inst_32167__$1);

(statearr_32229[(12)] = inst_32168__$1);

return statearr_32229;
})();
var statearr_32230_32262 = state_32215__$1;
(statearr_32230_32262[(2)] = null);

(statearr_32230_32262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (22))){
var state_32215__$1 = state_32215;
var statearr_32231_32263 = state_32215__$1;
(statearr_32231_32263[(2)] = null);

(statearr_32231_32263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (6))){
var inst_32156 = (state_32215[(13)]);
var inst_32165 = f.call(null,inst_32156);
var inst_32166 = cljs.core.seq.call(null,inst_32165);
var inst_32167 = inst_32166;
var inst_32168 = null;
var inst_32169 = (0);
var inst_32170 = (0);
var state_32215__$1 = (function (){var statearr_32232 = state_32215;
(statearr_32232[(9)] = inst_32170);

(statearr_32232[(10)] = inst_32169);

(statearr_32232[(11)] = inst_32167);

(statearr_32232[(12)] = inst_32168);

return statearr_32232;
})();
var statearr_32233_32264 = state_32215__$1;
(statearr_32233_32264[(2)] = null);

(statearr_32233_32264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (17))){
var inst_32181 = (state_32215[(7)]);
var inst_32185 = cljs.core.chunk_first.call(null,inst_32181);
var inst_32186 = cljs.core.chunk_rest.call(null,inst_32181);
var inst_32187 = cljs.core.count.call(null,inst_32185);
var inst_32167 = inst_32186;
var inst_32168 = inst_32185;
var inst_32169 = inst_32187;
var inst_32170 = (0);
var state_32215__$1 = (function (){var statearr_32234 = state_32215;
(statearr_32234[(9)] = inst_32170);

(statearr_32234[(10)] = inst_32169);

(statearr_32234[(11)] = inst_32167);

(statearr_32234[(12)] = inst_32168);

return statearr_32234;
})();
var statearr_32235_32265 = state_32215__$1;
(statearr_32235_32265[(2)] = null);

(statearr_32235_32265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (3))){
var inst_32213 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32215__$1,inst_32213);
} else {
if((state_val_32216 === (12))){
var inst_32201 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32236_32266 = state_32215__$1;
(statearr_32236_32266[(2)] = inst_32201);

(statearr_32236_32266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (2))){
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32215__$1,(4),in$);
} else {
if((state_val_32216 === (23))){
var inst_32209 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32237_32267 = state_32215__$1;
(statearr_32237_32267[(2)] = inst_32209);

(statearr_32237_32267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (19))){
var inst_32196 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32238_32268 = state_32215__$1;
(statearr_32238_32268[(2)] = inst_32196);

(statearr_32238_32268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (11))){
var inst_32181 = (state_32215[(7)]);
var inst_32167 = (state_32215[(11)]);
var inst_32181__$1 = cljs.core.seq.call(null,inst_32167);
var state_32215__$1 = (function (){var statearr_32239 = state_32215;
(statearr_32239[(7)] = inst_32181__$1);

return statearr_32239;
})();
if(inst_32181__$1){
var statearr_32240_32269 = state_32215__$1;
(statearr_32240_32269[(1)] = (14));

} else {
var statearr_32241_32270 = state_32215__$1;
(statearr_32241_32270[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (9))){
var inst_32203 = (state_32215[(2)]);
var inst_32204 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32215__$1 = (function (){var statearr_32242 = state_32215;
(statearr_32242[(15)] = inst_32203);

return statearr_32242;
})();
if(cljs.core.truth_(inst_32204)){
var statearr_32243_32271 = state_32215__$1;
(statearr_32243_32271[(1)] = (21));

} else {
var statearr_32244_32272 = state_32215__$1;
(statearr_32244_32272[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (5))){
var inst_32159 = cljs.core.async.close_BANG_.call(null,out);
var state_32215__$1 = state_32215;
var statearr_32245_32273 = state_32215__$1;
(statearr_32245_32273[(2)] = inst_32159);

(statearr_32245_32273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (14))){
var inst_32181 = (state_32215[(7)]);
var inst_32183 = cljs.core.chunked_seq_QMARK_.call(null,inst_32181);
var state_32215__$1 = state_32215;
if(inst_32183){
var statearr_32246_32274 = state_32215__$1;
(statearr_32246_32274[(1)] = (17));

} else {
var statearr_32247_32275 = state_32215__$1;
(statearr_32247_32275[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (16))){
var inst_32199 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32248_32276 = state_32215__$1;
(statearr_32248_32276[(2)] = inst_32199);

(statearr_32248_32276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (10))){
var inst_32170 = (state_32215[(9)]);
var inst_32168 = (state_32215[(12)]);
var inst_32175 = cljs.core._nth.call(null,inst_32168,inst_32170);
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32215__$1,(13),out,inst_32175);
} else {
if((state_val_32216 === (18))){
var inst_32181 = (state_32215[(7)]);
var inst_32190 = cljs.core.first.call(null,inst_32181);
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32215__$1,(20),out,inst_32190);
} else {
if((state_val_32216 === (8))){
var inst_32170 = (state_32215[(9)]);
var inst_32169 = (state_32215[(10)]);
var inst_32172 = (inst_32170 < inst_32169);
var inst_32173 = inst_32172;
var state_32215__$1 = state_32215;
if(cljs.core.truth_(inst_32173)){
var statearr_32249_32277 = state_32215__$1;
(statearr_32249_32277[(1)] = (10));

} else {
var statearr_32250_32278 = state_32215__$1;
(statearr_32250_32278[(1)] = (11));

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
});})(c__30599__auto__))
;
return ((function (switch__30509__auto__,c__30599__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30510__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30510__auto____0 = (function (){
var statearr_32251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32251[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30510__auto__);

(statearr_32251[(1)] = (1));

return statearr_32251;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30510__auto____1 = (function (state_32215){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32252){if((e32252 instanceof Object)){
var ex__30513__auto__ = e32252;
var statearr_32253_32279 = state_32215;
(statearr_32253_32279[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32280 = state_32215;
state_32215 = G__32280;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30510__auto__ = function(state_32215){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30510__auto____1.call(this,state_32215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30510__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30510__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__))
})();
var state__30601__auto__ = (function (){var statearr_32254 = f__30600__auto__.call(null);
(statearr_32254[(6)] = c__30599__auto__);

return statearr_32254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__))
);

return c__30599__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32282 = arguments.length;
switch (G__32282) {
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
var G__32285 = arguments.length;
switch (G__32285) {
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
var G__32288 = arguments.length;
switch (G__32288) {
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
var c__30599__auto___32335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___32335,out){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___32335,out){
return (function (state_32312){
var state_val_32313 = (state_32312[(1)]);
if((state_val_32313 === (7))){
var inst_32307 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32314_32336 = state_32312__$1;
(statearr_32314_32336[(2)] = inst_32307);

(statearr_32314_32336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (1))){
var inst_32289 = null;
var state_32312__$1 = (function (){var statearr_32315 = state_32312;
(statearr_32315[(7)] = inst_32289);

return statearr_32315;
})();
var statearr_32316_32337 = state_32312__$1;
(statearr_32316_32337[(2)] = null);

(statearr_32316_32337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (4))){
var inst_32292 = (state_32312[(8)]);
var inst_32292__$1 = (state_32312[(2)]);
var inst_32293 = (inst_32292__$1 == null);
var inst_32294 = cljs.core.not.call(null,inst_32293);
var state_32312__$1 = (function (){var statearr_32317 = state_32312;
(statearr_32317[(8)] = inst_32292__$1);

return statearr_32317;
})();
if(inst_32294){
var statearr_32318_32338 = state_32312__$1;
(statearr_32318_32338[(1)] = (5));

} else {
var statearr_32319_32339 = state_32312__$1;
(statearr_32319_32339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (6))){
var state_32312__$1 = state_32312;
var statearr_32320_32340 = state_32312__$1;
(statearr_32320_32340[(2)] = null);

(statearr_32320_32340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (3))){
var inst_32309 = (state_32312[(2)]);
var inst_32310 = cljs.core.async.close_BANG_.call(null,out);
var state_32312__$1 = (function (){var statearr_32321 = state_32312;
(statearr_32321[(9)] = inst_32309);

return statearr_32321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32312__$1,inst_32310);
} else {
if((state_val_32313 === (2))){
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32312__$1,(4),ch);
} else {
if((state_val_32313 === (11))){
var inst_32292 = (state_32312[(8)]);
var inst_32301 = (state_32312[(2)]);
var inst_32289 = inst_32292;
var state_32312__$1 = (function (){var statearr_32322 = state_32312;
(statearr_32322[(7)] = inst_32289);

(statearr_32322[(10)] = inst_32301);

return statearr_32322;
})();
var statearr_32323_32341 = state_32312__$1;
(statearr_32323_32341[(2)] = null);

(statearr_32323_32341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (9))){
var inst_32292 = (state_32312[(8)]);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32312__$1,(11),out,inst_32292);
} else {
if((state_val_32313 === (5))){
var inst_32292 = (state_32312[(8)]);
var inst_32289 = (state_32312[(7)]);
var inst_32296 = cljs.core._EQ_.call(null,inst_32292,inst_32289);
var state_32312__$1 = state_32312;
if(inst_32296){
var statearr_32325_32342 = state_32312__$1;
(statearr_32325_32342[(1)] = (8));

} else {
var statearr_32326_32343 = state_32312__$1;
(statearr_32326_32343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (10))){
var inst_32304 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32327_32344 = state_32312__$1;
(statearr_32327_32344[(2)] = inst_32304);

(statearr_32327_32344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (8))){
var inst_32289 = (state_32312[(7)]);
var tmp32324 = inst_32289;
var inst_32289__$1 = tmp32324;
var state_32312__$1 = (function (){var statearr_32328 = state_32312;
(statearr_32328[(7)] = inst_32289__$1);

return statearr_32328;
})();
var statearr_32329_32345 = state_32312__$1;
(statearr_32329_32345[(2)] = null);

(statearr_32329_32345[(1)] = (2));


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
});})(c__30599__auto___32335,out))
;
return ((function (switch__30509__auto__,c__30599__auto___32335,out){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_32330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32330[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_32330[(1)] = (1));

return statearr_32330;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_32312){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32331){if((e32331 instanceof Object)){
var ex__30513__auto__ = e32331;
var statearr_32332_32346 = state_32312;
(statearr_32332_32346[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32347 = state_32312;
state_32312 = G__32347;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_32312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_32312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___32335,out))
})();
var state__30601__auto__ = (function (){var statearr_32333 = f__30600__auto__.call(null);
(statearr_32333[(6)] = c__30599__auto___32335);

return statearr_32333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___32335,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32349 = arguments.length;
switch (G__32349) {
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
var c__30599__auto___32415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___32415,out){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___32415,out){
return (function (state_32387){
var state_val_32388 = (state_32387[(1)]);
if((state_val_32388 === (7))){
var inst_32383 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
var statearr_32389_32416 = state_32387__$1;
(statearr_32389_32416[(2)] = inst_32383);

(statearr_32389_32416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (1))){
var inst_32350 = (new Array(n));
var inst_32351 = inst_32350;
var inst_32352 = (0);
var state_32387__$1 = (function (){var statearr_32390 = state_32387;
(statearr_32390[(7)] = inst_32351);

(statearr_32390[(8)] = inst_32352);

return statearr_32390;
})();
var statearr_32391_32417 = state_32387__$1;
(statearr_32391_32417[(2)] = null);

(statearr_32391_32417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (4))){
var inst_32355 = (state_32387[(9)]);
var inst_32355__$1 = (state_32387[(2)]);
var inst_32356 = (inst_32355__$1 == null);
var inst_32357 = cljs.core.not.call(null,inst_32356);
var state_32387__$1 = (function (){var statearr_32392 = state_32387;
(statearr_32392[(9)] = inst_32355__$1);

return statearr_32392;
})();
if(inst_32357){
var statearr_32393_32418 = state_32387__$1;
(statearr_32393_32418[(1)] = (5));

} else {
var statearr_32394_32419 = state_32387__$1;
(statearr_32394_32419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (15))){
var inst_32377 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
var statearr_32395_32420 = state_32387__$1;
(statearr_32395_32420[(2)] = inst_32377);

(statearr_32395_32420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (13))){
var state_32387__$1 = state_32387;
var statearr_32396_32421 = state_32387__$1;
(statearr_32396_32421[(2)] = null);

(statearr_32396_32421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (6))){
var inst_32352 = (state_32387[(8)]);
var inst_32373 = (inst_32352 > (0));
var state_32387__$1 = state_32387;
if(cljs.core.truth_(inst_32373)){
var statearr_32397_32422 = state_32387__$1;
(statearr_32397_32422[(1)] = (12));

} else {
var statearr_32398_32423 = state_32387__$1;
(statearr_32398_32423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (3))){
var inst_32385 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32387__$1,inst_32385);
} else {
if((state_val_32388 === (12))){
var inst_32351 = (state_32387[(7)]);
var inst_32375 = cljs.core.vec.call(null,inst_32351);
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32387__$1,(15),out,inst_32375);
} else {
if((state_val_32388 === (2))){
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32387__$1,(4),ch);
} else {
if((state_val_32388 === (11))){
var inst_32367 = (state_32387[(2)]);
var inst_32368 = (new Array(n));
var inst_32351 = inst_32368;
var inst_32352 = (0);
var state_32387__$1 = (function (){var statearr_32399 = state_32387;
(statearr_32399[(7)] = inst_32351);

(statearr_32399[(8)] = inst_32352);

(statearr_32399[(10)] = inst_32367);

return statearr_32399;
})();
var statearr_32400_32424 = state_32387__$1;
(statearr_32400_32424[(2)] = null);

(statearr_32400_32424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (9))){
var inst_32351 = (state_32387[(7)]);
var inst_32365 = cljs.core.vec.call(null,inst_32351);
var state_32387__$1 = state_32387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32387__$1,(11),out,inst_32365);
} else {
if((state_val_32388 === (5))){
var inst_32355 = (state_32387[(9)]);
var inst_32351 = (state_32387[(7)]);
var inst_32352 = (state_32387[(8)]);
var inst_32360 = (state_32387[(11)]);
var inst_32359 = (inst_32351[inst_32352] = inst_32355);
var inst_32360__$1 = (inst_32352 + (1));
var inst_32361 = (inst_32360__$1 < n);
var state_32387__$1 = (function (){var statearr_32401 = state_32387;
(statearr_32401[(11)] = inst_32360__$1);

(statearr_32401[(12)] = inst_32359);

return statearr_32401;
})();
if(cljs.core.truth_(inst_32361)){
var statearr_32402_32425 = state_32387__$1;
(statearr_32402_32425[(1)] = (8));

} else {
var statearr_32403_32426 = state_32387__$1;
(statearr_32403_32426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (14))){
var inst_32380 = (state_32387[(2)]);
var inst_32381 = cljs.core.async.close_BANG_.call(null,out);
var state_32387__$1 = (function (){var statearr_32405 = state_32387;
(statearr_32405[(13)] = inst_32380);

return statearr_32405;
})();
var statearr_32406_32427 = state_32387__$1;
(statearr_32406_32427[(2)] = inst_32381);

(statearr_32406_32427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (10))){
var inst_32371 = (state_32387[(2)]);
var state_32387__$1 = state_32387;
var statearr_32407_32428 = state_32387__$1;
(statearr_32407_32428[(2)] = inst_32371);

(statearr_32407_32428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32388 === (8))){
var inst_32351 = (state_32387[(7)]);
var inst_32360 = (state_32387[(11)]);
var tmp32404 = inst_32351;
var inst_32351__$1 = tmp32404;
var inst_32352 = inst_32360;
var state_32387__$1 = (function (){var statearr_32408 = state_32387;
(statearr_32408[(7)] = inst_32351__$1);

(statearr_32408[(8)] = inst_32352);

return statearr_32408;
})();
var statearr_32409_32429 = state_32387__$1;
(statearr_32409_32429[(2)] = null);

(statearr_32409_32429[(1)] = (2));


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
});})(c__30599__auto___32415,out))
;
return ((function (switch__30509__auto__,c__30599__auto___32415,out){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_32410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32410[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_32410[(1)] = (1));

return statearr_32410;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_32387){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32411){if((e32411 instanceof Object)){
var ex__30513__auto__ = e32411;
var statearr_32412_32430 = state_32387;
(statearr_32412_32430[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32431 = state_32387;
state_32387 = G__32431;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_32387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_32387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___32415,out))
})();
var state__30601__auto__ = (function (){var statearr_32413 = f__30600__auto__.call(null);
(statearr_32413[(6)] = c__30599__auto___32415);

return statearr_32413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___32415,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32433 = arguments.length;
switch (G__32433) {
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
var c__30599__auto___32503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___32503,out){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___32503,out){
return (function (state_32475){
var state_val_32476 = (state_32475[(1)]);
if((state_val_32476 === (7))){
var inst_32471 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32477_32504 = state_32475__$1;
(statearr_32477_32504[(2)] = inst_32471);

(statearr_32477_32504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (1))){
var inst_32434 = [];
var inst_32435 = inst_32434;
var inst_32436 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32475__$1 = (function (){var statearr_32478 = state_32475;
(statearr_32478[(7)] = inst_32436);

(statearr_32478[(8)] = inst_32435);

return statearr_32478;
})();
var statearr_32479_32505 = state_32475__$1;
(statearr_32479_32505[(2)] = null);

(statearr_32479_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (4))){
var inst_32439 = (state_32475[(9)]);
var inst_32439__$1 = (state_32475[(2)]);
var inst_32440 = (inst_32439__$1 == null);
var inst_32441 = cljs.core.not.call(null,inst_32440);
var state_32475__$1 = (function (){var statearr_32480 = state_32475;
(statearr_32480[(9)] = inst_32439__$1);

return statearr_32480;
})();
if(inst_32441){
var statearr_32481_32506 = state_32475__$1;
(statearr_32481_32506[(1)] = (5));

} else {
var statearr_32482_32507 = state_32475__$1;
(statearr_32482_32507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (15))){
var inst_32465 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32483_32508 = state_32475__$1;
(statearr_32483_32508[(2)] = inst_32465);

(statearr_32483_32508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (13))){
var state_32475__$1 = state_32475;
var statearr_32484_32509 = state_32475__$1;
(statearr_32484_32509[(2)] = null);

(statearr_32484_32509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (6))){
var inst_32435 = (state_32475[(8)]);
var inst_32460 = inst_32435.length;
var inst_32461 = (inst_32460 > (0));
var state_32475__$1 = state_32475;
if(cljs.core.truth_(inst_32461)){
var statearr_32485_32510 = state_32475__$1;
(statearr_32485_32510[(1)] = (12));

} else {
var statearr_32486_32511 = state_32475__$1;
(statearr_32486_32511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (3))){
var inst_32473 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32475__$1,inst_32473);
} else {
if((state_val_32476 === (12))){
var inst_32435 = (state_32475[(8)]);
var inst_32463 = cljs.core.vec.call(null,inst_32435);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32475__$1,(15),out,inst_32463);
} else {
if((state_val_32476 === (2))){
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32475__$1,(4),ch);
} else {
if((state_val_32476 === (11))){
var inst_32439 = (state_32475[(9)]);
var inst_32443 = (state_32475[(10)]);
var inst_32453 = (state_32475[(2)]);
var inst_32454 = [];
var inst_32455 = inst_32454.push(inst_32439);
var inst_32435 = inst_32454;
var inst_32436 = inst_32443;
var state_32475__$1 = (function (){var statearr_32487 = state_32475;
(statearr_32487[(7)] = inst_32436);

(statearr_32487[(11)] = inst_32453);

(statearr_32487[(12)] = inst_32455);

(statearr_32487[(8)] = inst_32435);

return statearr_32487;
})();
var statearr_32488_32512 = state_32475__$1;
(statearr_32488_32512[(2)] = null);

(statearr_32488_32512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (9))){
var inst_32435 = (state_32475[(8)]);
var inst_32451 = cljs.core.vec.call(null,inst_32435);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32475__$1,(11),out,inst_32451);
} else {
if((state_val_32476 === (5))){
var inst_32436 = (state_32475[(7)]);
var inst_32439 = (state_32475[(9)]);
var inst_32443 = (state_32475[(10)]);
var inst_32443__$1 = f.call(null,inst_32439);
var inst_32444 = cljs.core._EQ_.call(null,inst_32443__$1,inst_32436);
var inst_32445 = cljs.core.keyword_identical_QMARK_.call(null,inst_32436,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32446 = ((inst_32444) || (inst_32445));
var state_32475__$1 = (function (){var statearr_32489 = state_32475;
(statearr_32489[(10)] = inst_32443__$1);

return statearr_32489;
})();
if(cljs.core.truth_(inst_32446)){
var statearr_32490_32513 = state_32475__$1;
(statearr_32490_32513[(1)] = (8));

} else {
var statearr_32491_32514 = state_32475__$1;
(statearr_32491_32514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (14))){
var inst_32468 = (state_32475[(2)]);
var inst_32469 = cljs.core.async.close_BANG_.call(null,out);
var state_32475__$1 = (function (){var statearr_32493 = state_32475;
(statearr_32493[(13)] = inst_32468);

return statearr_32493;
})();
var statearr_32494_32515 = state_32475__$1;
(statearr_32494_32515[(2)] = inst_32469);

(statearr_32494_32515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (10))){
var inst_32458 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32495_32516 = state_32475__$1;
(statearr_32495_32516[(2)] = inst_32458);

(statearr_32495_32516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (8))){
var inst_32439 = (state_32475[(9)]);
var inst_32443 = (state_32475[(10)]);
var inst_32435 = (state_32475[(8)]);
var inst_32448 = inst_32435.push(inst_32439);
var tmp32492 = inst_32435;
var inst_32435__$1 = tmp32492;
var inst_32436 = inst_32443;
var state_32475__$1 = (function (){var statearr_32496 = state_32475;
(statearr_32496[(7)] = inst_32436);

(statearr_32496[(14)] = inst_32448);

(statearr_32496[(8)] = inst_32435__$1);

return statearr_32496;
})();
var statearr_32497_32517 = state_32475__$1;
(statearr_32497_32517[(2)] = null);

(statearr_32497_32517[(1)] = (2));


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
});})(c__30599__auto___32503,out))
;
return ((function (switch__30509__auto__,c__30599__auto___32503,out){
return (function() {
var cljs$core$async$state_machine__30510__auto__ = null;
var cljs$core$async$state_machine__30510__auto____0 = (function (){
var statearr_32498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32498[(0)] = cljs$core$async$state_machine__30510__auto__);

(statearr_32498[(1)] = (1));

return statearr_32498;
});
var cljs$core$async$state_machine__30510__auto____1 = (function (state_32475){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32499){if((e32499 instanceof Object)){
var ex__30513__auto__ = e32499;
var statearr_32500_32518 = state_32475;
(statearr_32500_32518[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32519 = state_32475;
state_32475 = G__32519;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
cljs$core$async$state_machine__30510__auto__ = function(state_32475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30510__auto____1.call(this,state_32475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30510__auto____0;
cljs$core$async$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30510__auto____1;
return cljs$core$async$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___32503,out))
})();
var state__30601__auto__ = (function (){var statearr_32501 = f__30600__auto__.call(null);
(statearr_32501[(6)] = c__30599__auto___32503);

return statearr_32501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___32503,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1673416717059
