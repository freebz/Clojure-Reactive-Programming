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
var G__6492 = arguments.length;
switch (G__6492) {
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
if(typeof cljs.core.async.t_cljs$core$async6493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6493 = (function (f,blockable,meta6494){
this.f = f;
this.blockable = blockable;
this.meta6494 = meta6494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6495,meta6494__$1){
var self__ = this;
var _6495__$1 = this;
return (new cljs.core.async.t_cljs$core$async6493(self__.f,self__.blockable,meta6494__$1));
});

cljs.core.async.t_cljs$core$async6493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6495){
var self__ = this;
var _6495__$1 = this;
return self__.meta6494;
});

cljs.core.async.t_cljs$core$async6493.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6493.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6494","meta6494",-727383166,null)], null);
});

cljs.core.async.t_cljs$core$async6493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6493";

cljs.core.async.t_cljs$core$async6493.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async6493");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6493.
 */
cljs.core.async.__GT_t_cljs$core$async6493 = (function cljs$core$async$__GT_t_cljs$core$async6493(f__$1,blockable__$1,meta6494){
return (new cljs.core.async.t_cljs$core$async6493(f__$1,blockable__$1,meta6494));
});

}

return (new cljs.core.async.t_cljs$core$async6493(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__6499 = arguments.length;
switch (G__6499) {
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
var G__6502 = arguments.length;
switch (G__6502) {
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
var G__6505 = arguments.length;
switch (G__6505) {
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
var val_6507 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6507);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6507,ret){
return (function (){
return fn1.call(null,val_6507);
});})(val_6507,ret))
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
var G__6509 = arguments.length;
switch (G__6509) {
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
var n__4376__auto___6511 = n;
var x_6512 = (0);
while(true){
if((x_6512 < n__4376__auto___6511)){
(a[x_6512] = (0));

var G__6513 = (x_6512 + (1));
x_6512 = G__6513;
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

var G__6514 = (i + (1));
i = G__6514;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async6515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6515 = (function (flag,meta6516){
this.flag = flag;
this.meta6516 = meta6516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6517,meta6516__$1){
var self__ = this;
var _6517__$1 = this;
return (new cljs.core.async.t_cljs$core$async6515(self__.flag,meta6516__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6517){
var self__ = this;
var _6517__$1 = this;
return self__.meta6516;
});})(flag))
;

cljs.core.async.t_cljs$core$async6515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6515.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6516","meta6516",986643738,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6515";

cljs.core.async.t_cljs$core$async6515.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async6515");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6515.
 */
cljs.core.async.__GT_t_cljs$core$async6515 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6515(flag__$1,meta6516){
return (new cljs.core.async.t_cljs$core$async6515(flag__$1,meta6516));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6515(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async6518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6518 = (function (flag,cb,meta6519){
this.flag = flag;
this.cb = cb;
this.meta6519 = meta6519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6520,meta6519__$1){
var self__ = this;
var _6520__$1 = this;
return (new cljs.core.async.t_cljs$core$async6518(self__.flag,self__.cb,meta6519__$1));
});

cljs.core.async.t_cljs$core$async6518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6520){
var self__ = this;
var _6520__$1 = this;
return self__.meta6519;
});

cljs.core.async.t_cljs$core$async6518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async6518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6519","meta6519",1534731155,null)], null);
});

cljs.core.async.t_cljs$core$async6518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6518";

cljs.core.async.t_cljs$core$async6518.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async6518");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6518.
 */
cljs.core.async.__GT_t_cljs$core$async6518 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6518(flag__$1,cb__$1,meta6519){
return (new cljs.core.async.t_cljs$core$async6518(flag__$1,cb__$1,meta6519));
});

}

return (new cljs.core.async.t_cljs$core$async6518(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__6521_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6521_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6522_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6522_SHARP_,port], null));
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
var G__6523 = (i + (1));
i = G__6523;
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
var len__4499__auto___6529 = arguments.length;
var i__4500__auto___6530 = (0);
while(true){
if((i__4500__auto___6530 < len__4499__auto___6529)){
args__4502__auto__.push((arguments[i__4500__auto___6530]));

var G__6531 = (i__4500__auto___6530 + (1));
i__4500__auto___6530 = G__6531;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6526){
var map__6527 = p__6526;
var map__6527__$1 = ((((!((map__6527 == null)))?(((((map__6527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6527):map__6527);
var opts = map__6527__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6524){
var G__6525 = cljs.core.first.call(null,seq6524);
var seq6524__$1 = cljs.core.next.call(null,seq6524);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6525,seq6524__$1);
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
var G__6533 = arguments.length;
switch (G__6533) {
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
var c__6432__auto___6579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___6579){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___6579){
return (function (state_6557){
var state_val_6558 = (state_6557[(1)]);
if((state_val_6558 === (7))){
var inst_6553 = (state_6557[(2)]);
var state_6557__$1 = state_6557;
var statearr_6559_6580 = state_6557__$1;
(statearr_6559_6580[(2)] = inst_6553);

(statearr_6559_6580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (1))){
var state_6557__$1 = state_6557;
var statearr_6560_6581 = state_6557__$1;
(statearr_6560_6581[(2)] = null);

(statearr_6560_6581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (4))){
var inst_6536 = (state_6557[(7)]);
var inst_6536__$1 = (state_6557[(2)]);
var inst_6537 = (inst_6536__$1 == null);
var state_6557__$1 = (function (){var statearr_6561 = state_6557;
(statearr_6561[(7)] = inst_6536__$1);

return statearr_6561;
})();
if(cljs.core.truth_(inst_6537)){
var statearr_6562_6582 = state_6557__$1;
(statearr_6562_6582[(1)] = (5));

} else {
var statearr_6563_6583 = state_6557__$1;
(statearr_6563_6583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (13))){
var state_6557__$1 = state_6557;
var statearr_6564_6584 = state_6557__$1;
(statearr_6564_6584[(2)] = null);

(statearr_6564_6584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (6))){
var inst_6536 = (state_6557[(7)]);
var state_6557__$1 = state_6557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6557__$1,(11),to,inst_6536);
} else {
if((state_val_6558 === (3))){
var inst_6555 = (state_6557[(2)]);
var state_6557__$1 = state_6557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6557__$1,inst_6555);
} else {
if((state_val_6558 === (12))){
var state_6557__$1 = state_6557;
var statearr_6565_6585 = state_6557__$1;
(statearr_6565_6585[(2)] = null);

(statearr_6565_6585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (2))){
var state_6557__$1 = state_6557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6557__$1,(4),from);
} else {
if((state_val_6558 === (11))){
var inst_6546 = (state_6557[(2)]);
var state_6557__$1 = state_6557;
if(cljs.core.truth_(inst_6546)){
var statearr_6566_6586 = state_6557__$1;
(statearr_6566_6586[(1)] = (12));

} else {
var statearr_6567_6587 = state_6557__$1;
(statearr_6567_6587[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (9))){
var state_6557__$1 = state_6557;
var statearr_6568_6588 = state_6557__$1;
(statearr_6568_6588[(2)] = null);

(statearr_6568_6588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (5))){
var state_6557__$1 = state_6557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6569_6589 = state_6557__$1;
(statearr_6569_6589[(1)] = (8));

} else {
var statearr_6570_6590 = state_6557__$1;
(statearr_6570_6590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (14))){
var inst_6551 = (state_6557[(2)]);
var state_6557__$1 = state_6557;
var statearr_6571_6591 = state_6557__$1;
(statearr_6571_6591[(2)] = inst_6551);

(statearr_6571_6591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (10))){
var inst_6543 = (state_6557[(2)]);
var state_6557__$1 = state_6557;
var statearr_6572_6592 = state_6557__$1;
(statearr_6572_6592[(2)] = inst_6543);

(statearr_6572_6592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6558 === (8))){
var inst_6540 = cljs.core.async.close_BANG_.call(null,to);
var state_6557__$1 = state_6557;
var statearr_6573_6593 = state_6557__$1;
(statearr_6573_6593[(2)] = inst_6540);

(statearr_6573_6593[(1)] = (10));


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
});})(c__6432__auto___6579))
;
return ((function (switch__6342__auto__,c__6432__auto___6579){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_6574 = [null,null,null,null,null,null,null,null];
(statearr_6574[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_6574[(1)] = (1));

return statearr_6574;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_6557){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6575){if((e6575 instanceof Object)){
var ex__6346__auto__ = e6575;
var statearr_6576_6594 = state_6557;
(statearr_6576_6594[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6595 = state_6557;
state_6557 = G__6595;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_6557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_6557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___6579))
})();
var state__6434__auto__ = (function (){var statearr_6577 = f__6433__auto__.call(null);
(statearr_6577[(6)] = c__6432__auto___6579);

return statearr_6577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___6579))
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
return (function (p__6596){
var vec__6597 = p__6596;
var v = cljs.core.nth.call(null,vec__6597,(0),null);
var p = cljs.core.nth.call(null,vec__6597,(1),null);
var job = vec__6597;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6432__auto___6768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___6768,res,vec__6597,v,p,job,jobs,results){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___6768,res,vec__6597,v,p,job,jobs,results){
return (function (state_6604){
var state_val_6605 = (state_6604[(1)]);
if((state_val_6605 === (1))){
var state_6604__$1 = state_6604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6604__$1,(2),res,v);
} else {
if((state_val_6605 === (2))){
var inst_6601 = (state_6604[(2)]);
var inst_6602 = cljs.core.async.close_BANG_.call(null,res);
var state_6604__$1 = (function (){var statearr_6606 = state_6604;
(statearr_6606[(7)] = inst_6601);

return statearr_6606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6604__$1,inst_6602);
} else {
return null;
}
}
});})(c__6432__auto___6768,res,vec__6597,v,p,job,jobs,results))
;
return ((function (switch__6342__auto__,c__6432__auto___6768,res,vec__6597,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0 = (function (){
var statearr_6607 = [null,null,null,null,null,null,null,null];
(statearr_6607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__);

(statearr_6607[(1)] = (1));

return statearr_6607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1 = (function (state_6604){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6608){if((e6608 instanceof Object)){
var ex__6346__auto__ = e6608;
var statearr_6609_6769 = state_6604;
(statearr_6609_6769[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6770 = state_6604;
state_6604 = G__6770;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = function(state_6604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1.call(this,state_6604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___6768,res,vec__6597,v,p,job,jobs,results))
})();
var state__6434__auto__ = (function (){var statearr_6610 = f__6433__auto__.call(null);
(statearr_6610[(6)] = c__6432__auto___6768);

return statearr_6610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___6768,res,vec__6597,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6611){
var vec__6612 = p__6611;
var v = cljs.core.nth.call(null,vec__6612,(0),null);
var p = cljs.core.nth.call(null,vec__6612,(1),null);
var job = vec__6612;
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
var n__4376__auto___6771 = n;
var __6772 = (0);
while(true){
if((__6772 < n__4376__auto___6771)){
var G__6615_6773 = type;
var G__6615_6774__$1 = (((G__6615_6773 instanceof cljs.core.Keyword))?G__6615_6773.fqn:null);
switch (G__6615_6774__$1) {
case "compute":
var c__6432__auto___6776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6772,c__6432__auto___6776,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (__6772,c__6432__auto___6776,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async){
return (function (state_6628){
var state_val_6629 = (state_6628[(1)]);
if((state_val_6629 === (1))){
var state_6628__$1 = state_6628;
var statearr_6630_6777 = state_6628__$1;
(statearr_6630_6777[(2)] = null);

(statearr_6630_6777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6629 === (2))){
var state_6628__$1 = state_6628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6628__$1,(4),jobs);
} else {
if((state_val_6629 === (3))){
var inst_6626 = (state_6628[(2)]);
var state_6628__$1 = state_6628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6628__$1,inst_6626);
} else {
if((state_val_6629 === (4))){
var inst_6618 = (state_6628[(2)]);
var inst_6619 = process.call(null,inst_6618);
var state_6628__$1 = state_6628;
if(cljs.core.truth_(inst_6619)){
var statearr_6631_6778 = state_6628__$1;
(statearr_6631_6778[(1)] = (5));

} else {
var statearr_6632_6779 = state_6628__$1;
(statearr_6632_6779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6629 === (5))){
var state_6628__$1 = state_6628;
var statearr_6633_6780 = state_6628__$1;
(statearr_6633_6780[(2)] = null);

(statearr_6633_6780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6629 === (6))){
var state_6628__$1 = state_6628;
var statearr_6634_6781 = state_6628__$1;
(statearr_6634_6781[(2)] = null);

(statearr_6634_6781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6629 === (7))){
var inst_6624 = (state_6628[(2)]);
var state_6628__$1 = state_6628;
var statearr_6635_6782 = state_6628__$1;
(statearr_6635_6782[(2)] = inst_6624);

(statearr_6635_6782[(1)] = (3));


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
});})(__6772,c__6432__auto___6776,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async))
;
return ((function (__6772,switch__6342__auto__,c__6432__auto___6776,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0 = (function (){
var statearr_6636 = [null,null,null,null,null,null,null];
(statearr_6636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__);

(statearr_6636[(1)] = (1));

return statearr_6636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1 = (function (state_6628){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6637){if((e6637 instanceof Object)){
var ex__6346__auto__ = e6637;
var statearr_6638_6783 = state_6628;
(statearr_6638_6783[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6784 = state_6628;
state_6628 = G__6784;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = function(state_6628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1.call(this,state_6628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__;
})()
;})(__6772,switch__6342__auto__,c__6432__auto___6776,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async))
})();
var state__6434__auto__ = (function (){var statearr_6639 = f__6433__auto__.call(null);
(statearr_6639[(6)] = c__6432__auto___6776);

return statearr_6639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(__6772,c__6432__auto___6776,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async))
);


break;
case "async":
var c__6432__auto___6785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6772,c__6432__auto___6785,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (__6772,c__6432__auto___6785,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async){
return (function (state_6652){
var state_val_6653 = (state_6652[(1)]);
if((state_val_6653 === (1))){
var state_6652__$1 = state_6652;
var statearr_6654_6786 = state_6652__$1;
(statearr_6654_6786[(2)] = null);

(statearr_6654_6786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (2))){
var state_6652__$1 = state_6652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6652__$1,(4),jobs);
} else {
if((state_val_6653 === (3))){
var inst_6650 = (state_6652[(2)]);
var state_6652__$1 = state_6652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6652__$1,inst_6650);
} else {
if((state_val_6653 === (4))){
var inst_6642 = (state_6652[(2)]);
var inst_6643 = async.call(null,inst_6642);
var state_6652__$1 = state_6652;
if(cljs.core.truth_(inst_6643)){
var statearr_6655_6787 = state_6652__$1;
(statearr_6655_6787[(1)] = (5));

} else {
var statearr_6656_6788 = state_6652__$1;
(statearr_6656_6788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (5))){
var state_6652__$1 = state_6652;
var statearr_6657_6789 = state_6652__$1;
(statearr_6657_6789[(2)] = null);

(statearr_6657_6789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (6))){
var state_6652__$1 = state_6652;
var statearr_6658_6790 = state_6652__$1;
(statearr_6658_6790[(2)] = null);

(statearr_6658_6790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6653 === (7))){
var inst_6648 = (state_6652[(2)]);
var state_6652__$1 = state_6652;
var statearr_6659_6791 = state_6652__$1;
(statearr_6659_6791[(2)] = inst_6648);

(statearr_6659_6791[(1)] = (3));


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
});})(__6772,c__6432__auto___6785,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async))
;
return ((function (__6772,switch__6342__auto__,c__6432__auto___6785,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0 = (function (){
var statearr_6660 = [null,null,null,null,null,null,null];
(statearr_6660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__);

(statearr_6660[(1)] = (1));

return statearr_6660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1 = (function (state_6652){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6661){if((e6661 instanceof Object)){
var ex__6346__auto__ = e6661;
var statearr_6662_6792 = state_6652;
(statearr_6662_6792[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6793 = state_6652;
state_6652 = G__6793;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = function(state_6652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1.call(this,state_6652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__;
})()
;})(__6772,switch__6342__auto__,c__6432__auto___6785,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async))
})();
var state__6434__auto__ = (function (){var statearr_6663 = f__6433__auto__.call(null);
(statearr_6663[(6)] = c__6432__auto___6785);

return statearr_6663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(__6772,c__6432__auto___6785,G__6615_6773,G__6615_6774__$1,n__4376__auto___6771,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6615_6774__$1)].join('')));

}

var G__6794 = (__6772 + (1));
__6772 = G__6794;
continue;
} else {
}
break;
}

var c__6432__auto___6795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___6795,jobs,results,process,async){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___6795,jobs,results,process,async){
return (function (state_6685){
var state_val_6686 = (state_6685[(1)]);
if((state_val_6686 === (1))){
var state_6685__$1 = state_6685;
var statearr_6687_6796 = state_6685__$1;
(statearr_6687_6796[(2)] = null);

(statearr_6687_6796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (2))){
var state_6685__$1 = state_6685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6685__$1,(4),from);
} else {
if((state_val_6686 === (3))){
var inst_6683 = (state_6685[(2)]);
var state_6685__$1 = state_6685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6685__$1,inst_6683);
} else {
if((state_val_6686 === (4))){
var inst_6666 = (state_6685[(7)]);
var inst_6666__$1 = (state_6685[(2)]);
var inst_6667 = (inst_6666__$1 == null);
var state_6685__$1 = (function (){var statearr_6688 = state_6685;
(statearr_6688[(7)] = inst_6666__$1);

return statearr_6688;
})();
if(cljs.core.truth_(inst_6667)){
var statearr_6689_6797 = state_6685__$1;
(statearr_6689_6797[(1)] = (5));

} else {
var statearr_6690_6798 = state_6685__$1;
(statearr_6690_6798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (5))){
var inst_6669 = cljs.core.async.close_BANG_.call(null,jobs);
var state_6685__$1 = state_6685;
var statearr_6691_6799 = state_6685__$1;
(statearr_6691_6799[(2)] = inst_6669);

(statearr_6691_6799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (6))){
var inst_6671 = (state_6685[(8)]);
var inst_6666 = (state_6685[(7)]);
var inst_6671__$1 = cljs.core.async.chan.call(null,(1));
var inst_6672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6673 = [inst_6666,inst_6671__$1];
var inst_6674 = (new cljs.core.PersistentVector(null,2,(5),inst_6672,inst_6673,null));
var state_6685__$1 = (function (){var statearr_6692 = state_6685;
(statearr_6692[(8)] = inst_6671__$1);

return statearr_6692;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6685__$1,(8),jobs,inst_6674);
} else {
if((state_val_6686 === (7))){
var inst_6681 = (state_6685[(2)]);
var state_6685__$1 = state_6685;
var statearr_6693_6800 = state_6685__$1;
(statearr_6693_6800[(2)] = inst_6681);

(statearr_6693_6800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6686 === (8))){
var inst_6671 = (state_6685[(8)]);
var inst_6676 = (state_6685[(2)]);
var state_6685__$1 = (function (){var statearr_6694 = state_6685;
(statearr_6694[(9)] = inst_6676);

return statearr_6694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6685__$1,(9),results,inst_6671);
} else {
if((state_val_6686 === (9))){
var inst_6678 = (state_6685[(2)]);
var state_6685__$1 = (function (){var statearr_6695 = state_6685;
(statearr_6695[(10)] = inst_6678);

return statearr_6695;
})();
var statearr_6696_6801 = state_6685__$1;
(statearr_6696_6801[(2)] = null);

(statearr_6696_6801[(1)] = (2));


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
});})(c__6432__auto___6795,jobs,results,process,async))
;
return ((function (switch__6342__auto__,c__6432__auto___6795,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0 = (function (){
var statearr_6697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__);

(statearr_6697[(1)] = (1));

return statearr_6697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1 = (function (state_6685){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6698){if((e6698 instanceof Object)){
var ex__6346__auto__ = e6698;
var statearr_6699_6802 = state_6685;
(statearr_6699_6802[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6803 = state_6685;
state_6685 = G__6803;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = function(state_6685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1.call(this,state_6685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___6795,jobs,results,process,async))
})();
var state__6434__auto__ = (function (){var statearr_6700 = f__6433__auto__.call(null);
(statearr_6700[(6)] = c__6432__auto___6795);

return statearr_6700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___6795,jobs,results,process,async))
);


var c__6432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto__,jobs,results,process,async){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto__,jobs,results,process,async){
return (function (state_6738){
var state_val_6739 = (state_6738[(1)]);
if((state_val_6739 === (7))){
var inst_6734 = (state_6738[(2)]);
var state_6738__$1 = state_6738;
var statearr_6740_6804 = state_6738__$1;
(statearr_6740_6804[(2)] = inst_6734);

(statearr_6740_6804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (20))){
var state_6738__$1 = state_6738;
var statearr_6741_6805 = state_6738__$1;
(statearr_6741_6805[(2)] = null);

(statearr_6741_6805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (1))){
var state_6738__$1 = state_6738;
var statearr_6742_6806 = state_6738__$1;
(statearr_6742_6806[(2)] = null);

(statearr_6742_6806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (4))){
var inst_6703 = (state_6738[(7)]);
var inst_6703__$1 = (state_6738[(2)]);
var inst_6704 = (inst_6703__$1 == null);
var state_6738__$1 = (function (){var statearr_6743 = state_6738;
(statearr_6743[(7)] = inst_6703__$1);

return statearr_6743;
})();
if(cljs.core.truth_(inst_6704)){
var statearr_6744_6807 = state_6738__$1;
(statearr_6744_6807[(1)] = (5));

} else {
var statearr_6745_6808 = state_6738__$1;
(statearr_6745_6808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (15))){
var inst_6716 = (state_6738[(8)]);
var state_6738__$1 = state_6738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6738__$1,(18),to,inst_6716);
} else {
if((state_val_6739 === (21))){
var inst_6729 = (state_6738[(2)]);
var state_6738__$1 = state_6738;
var statearr_6746_6809 = state_6738__$1;
(statearr_6746_6809[(2)] = inst_6729);

(statearr_6746_6809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (13))){
var inst_6731 = (state_6738[(2)]);
var state_6738__$1 = (function (){var statearr_6747 = state_6738;
(statearr_6747[(9)] = inst_6731);

return statearr_6747;
})();
var statearr_6748_6810 = state_6738__$1;
(statearr_6748_6810[(2)] = null);

(statearr_6748_6810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (6))){
var inst_6703 = (state_6738[(7)]);
var state_6738__$1 = state_6738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6738__$1,(11),inst_6703);
} else {
if((state_val_6739 === (17))){
var inst_6724 = (state_6738[(2)]);
var state_6738__$1 = state_6738;
if(cljs.core.truth_(inst_6724)){
var statearr_6749_6811 = state_6738__$1;
(statearr_6749_6811[(1)] = (19));

} else {
var statearr_6750_6812 = state_6738__$1;
(statearr_6750_6812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (3))){
var inst_6736 = (state_6738[(2)]);
var state_6738__$1 = state_6738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6738__$1,inst_6736);
} else {
if((state_val_6739 === (12))){
var inst_6713 = (state_6738[(10)]);
var state_6738__$1 = state_6738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6738__$1,(14),inst_6713);
} else {
if((state_val_6739 === (2))){
var state_6738__$1 = state_6738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6738__$1,(4),results);
} else {
if((state_val_6739 === (19))){
var state_6738__$1 = state_6738;
var statearr_6751_6813 = state_6738__$1;
(statearr_6751_6813[(2)] = null);

(statearr_6751_6813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (11))){
var inst_6713 = (state_6738[(2)]);
var state_6738__$1 = (function (){var statearr_6752 = state_6738;
(statearr_6752[(10)] = inst_6713);

return statearr_6752;
})();
var statearr_6753_6814 = state_6738__$1;
(statearr_6753_6814[(2)] = null);

(statearr_6753_6814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (9))){
var state_6738__$1 = state_6738;
var statearr_6754_6815 = state_6738__$1;
(statearr_6754_6815[(2)] = null);

(statearr_6754_6815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (5))){
var state_6738__$1 = state_6738;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6755_6816 = state_6738__$1;
(statearr_6755_6816[(1)] = (8));

} else {
var statearr_6756_6817 = state_6738__$1;
(statearr_6756_6817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (14))){
var inst_6718 = (state_6738[(11)]);
var inst_6716 = (state_6738[(8)]);
var inst_6716__$1 = (state_6738[(2)]);
var inst_6717 = (inst_6716__$1 == null);
var inst_6718__$1 = cljs.core.not.call(null,inst_6717);
var state_6738__$1 = (function (){var statearr_6757 = state_6738;
(statearr_6757[(11)] = inst_6718__$1);

(statearr_6757[(8)] = inst_6716__$1);

return statearr_6757;
})();
if(inst_6718__$1){
var statearr_6758_6818 = state_6738__$1;
(statearr_6758_6818[(1)] = (15));

} else {
var statearr_6759_6819 = state_6738__$1;
(statearr_6759_6819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (16))){
var inst_6718 = (state_6738[(11)]);
var state_6738__$1 = state_6738;
var statearr_6760_6820 = state_6738__$1;
(statearr_6760_6820[(2)] = inst_6718);

(statearr_6760_6820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (10))){
var inst_6710 = (state_6738[(2)]);
var state_6738__$1 = state_6738;
var statearr_6761_6821 = state_6738__$1;
(statearr_6761_6821[(2)] = inst_6710);

(statearr_6761_6821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (18))){
var inst_6721 = (state_6738[(2)]);
var state_6738__$1 = state_6738;
var statearr_6762_6822 = state_6738__$1;
(statearr_6762_6822[(2)] = inst_6721);

(statearr_6762_6822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6739 === (8))){
var inst_6707 = cljs.core.async.close_BANG_.call(null,to);
var state_6738__$1 = state_6738;
var statearr_6763_6823 = state_6738__$1;
(statearr_6763_6823[(2)] = inst_6707);

(statearr_6763_6823[(1)] = (10));


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
});})(c__6432__auto__,jobs,results,process,async))
;
return ((function (switch__6342__auto__,c__6432__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0 = (function (){
var statearr_6764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__);

(statearr_6764[(1)] = (1));

return statearr_6764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1 = (function (state_6738){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6765){if((e6765 instanceof Object)){
var ex__6346__auto__ = e6765;
var statearr_6766_6824 = state_6738;
(statearr_6766_6824[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6825 = state_6738;
state_6738 = G__6825;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__ = function(state_6738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1.call(this,state_6738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto__,jobs,results,process,async))
})();
var state__6434__auto__ = (function (){var statearr_6767 = f__6433__auto__.call(null);
(statearr_6767[(6)] = c__6432__auto__);

return statearr_6767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto__,jobs,results,process,async))
);

return c__6432__auto__;
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
var G__6827 = arguments.length;
switch (G__6827) {
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
var G__6830 = arguments.length;
switch (G__6830) {
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
var G__6833 = arguments.length;
switch (G__6833) {
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
var c__6432__auto___6882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___6882,tc,fc){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___6882,tc,fc){
return (function (state_6859){
var state_val_6860 = (state_6859[(1)]);
if((state_val_6860 === (7))){
var inst_6855 = (state_6859[(2)]);
var state_6859__$1 = state_6859;
var statearr_6861_6883 = state_6859__$1;
(statearr_6861_6883[(2)] = inst_6855);

(statearr_6861_6883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (1))){
var state_6859__$1 = state_6859;
var statearr_6862_6884 = state_6859__$1;
(statearr_6862_6884[(2)] = null);

(statearr_6862_6884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (4))){
var inst_6836 = (state_6859[(7)]);
var inst_6836__$1 = (state_6859[(2)]);
var inst_6837 = (inst_6836__$1 == null);
var state_6859__$1 = (function (){var statearr_6863 = state_6859;
(statearr_6863[(7)] = inst_6836__$1);

return statearr_6863;
})();
if(cljs.core.truth_(inst_6837)){
var statearr_6864_6885 = state_6859__$1;
(statearr_6864_6885[(1)] = (5));

} else {
var statearr_6865_6886 = state_6859__$1;
(statearr_6865_6886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (13))){
var state_6859__$1 = state_6859;
var statearr_6866_6887 = state_6859__$1;
(statearr_6866_6887[(2)] = null);

(statearr_6866_6887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (6))){
var inst_6836 = (state_6859[(7)]);
var inst_6842 = p.call(null,inst_6836);
var state_6859__$1 = state_6859;
if(cljs.core.truth_(inst_6842)){
var statearr_6867_6888 = state_6859__$1;
(statearr_6867_6888[(1)] = (9));

} else {
var statearr_6868_6889 = state_6859__$1;
(statearr_6868_6889[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (3))){
var inst_6857 = (state_6859[(2)]);
var state_6859__$1 = state_6859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6859__$1,inst_6857);
} else {
if((state_val_6860 === (12))){
var state_6859__$1 = state_6859;
var statearr_6869_6890 = state_6859__$1;
(statearr_6869_6890[(2)] = null);

(statearr_6869_6890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (2))){
var state_6859__$1 = state_6859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6859__$1,(4),ch);
} else {
if((state_val_6860 === (11))){
var inst_6836 = (state_6859[(7)]);
var inst_6846 = (state_6859[(2)]);
var state_6859__$1 = state_6859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6859__$1,(8),inst_6846,inst_6836);
} else {
if((state_val_6860 === (9))){
var state_6859__$1 = state_6859;
var statearr_6870_6891 = state_6859__$1;
(statearr_6870_6891[(2)] = tc);

(statearr_6870_6891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (5))){
var inst_6839 = cljs.core.async.close_BANG_.call(null,tc);
var inst_6840 = cljs.core.async.close_BANG_.call(null,fc);
var state_6859__$1 = (function (){var statearr_6871 = state_6859;
(statearr_6871[(8)] = inst_6839);

return statearr_6871;
})();
var statearr_6872_6892 = state_6859__$1;
(statearr_6872_6892[(2)] = inst_6840);

(statearr_6872_6892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (14))){
var inst_6853 = (state_6859[(2)]);
var state_6859__$1 = state_6859;
var statearr_6873_6893 = state_6859__$1;
(statearr_6873_6893[(2)] = inst_6853);

(statearr_6873_6893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (10))){
var state_6859__$1 = state_6859;
var statearr_6874_6894 = state_6859__$1;
(statearr_6874_6894[(2)] = fc);

(statearr_6874_6894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6860 === (8))){
var inst_6848 = (state_6859[(2)]);
var state_6859__$1 = state_6859;
if(cljs.core.truth_(inst_6848)){
var statearr_6875_6895 = state_6859__$1;
(statearr_6875_6895[(1)] = (12));

} else {
var statearr_6876_6896 = state_6859__$1;
(statearr_6876_6896[(1)] = (13));

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
});})(c__6432__auto___6882,tc,fc))
;
return ((function (switch__6342__auto__,c__6432__auto___6882,tc,fc){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_6877 = [null,null,null,null,null,null,null,null,null];
(statearr_6877[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_6877[(1)] = (1));

return statearr_6877;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_6859){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6878){if((e6878 instanceof Object)){
var ex__6346__auto__ = e6878;
var statearr_6879_6897 = state_6859;
(statearr_6879_6897[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6898 = state_6859;
state_6859 = G__6898;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_6859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_6859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___6882,tc,fc))
})();
var state__6434__auto__ = (function (){var statearr_6880 = f__6433__auto__.call(null);
(statearr_6880[(6)] = c__6432__auto___6882);

return statearr_6880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___6882,tc,fc))
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
var c__6432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto__){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto__){
return (function (state_6919){
var state_val_6920 = (state_6919[(1)]);
if((state_val_6920 === (7))){
var inst_6915 = (state_6919[(2)]);
var state_6919__$1 = state_6919;
var statearr_6921_6939 = state_6919__$1;
(statearr_6921_6939[(2)] = inst_6915);

(statearr_6921_6939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6920 === (1))){
var inst_6899 = init;
var state_6919__$1 = (function (){var statearr_6922 = state_6919;
(statearr_6922[(7)] = inst_6899);

return statearr_6922;
})();
var statearr_6923_6940 = state_6919__$1;
(statearr_6923_6940[(2)] = null);

(statearr_6923_6940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6920 === (4))){
var inst_6902 = (state_6919[(8)]);
var inst_6902__$1 = (state_6919[(2)]);
var inst_6903 = (inst_6902__$1 == null);
var state_6919__$1 = (function (){var statearr_6924 = state_6919;
(statearr_6924[(8)] = inst_6902__$1);

return statearr_6924;
})();
if(cljs.core.truth_(inst_6903)){
var statearr_6925_6941 = state_6919__$1;
(statearr_6925_6941[(1)] = (5));

} else {
var statearr_6926_6942 = state_6919__$1;
(statearr_6926_6942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6920 === (6))){
var inst_6906 = (state_6919[(9)]);
var inst_6899 = (state_6919[(7)]);
var inst_6902 = (state_6919[(8)]);
var inst_6906__$1 = f.call(null,inst_6899,inst_6902);
var inst_6907 = cljs.core.reduced_QMARK_.call(null,inst_6906__$1);
var state_6919__$1 = (function (){var statearr_6927 = state_6919;
(statearr_6927[(9)] = inst_6906__$1);

return statearr_6927;
})();
if(inst_6907){
var statearr_6928_6943 = state_6919__$1;
(statearr_6928_6943[(1)] = (8));

} else {
var statearr_6929_6944 = state_6919__$1;
(statearr_6929_6944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6920 === (3))){
var inst_6917 = (state_6919[(2)]);
var state_6919__$1 = state_6919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6919__$1,inst_6917);
} else {
if((state_val_6920 === (2))){
var state_6919__$1 = state_6919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6919__$1,(4),ch);
} else {
if((state_val_6920 === (9))){
var inst_6906 = (state_6919[(9)]);
var inst_6899 = inst_6906;
var state_6919__$1 = (function (){var statearr_6930 = state_6919;
(statearr_6930[(7)] = inst_6899);

return statearr_6930;
})();
var statearr_6931_6945 = state_6919__$1;
(statearr_6931_6945[(2)] = null);

(statearr_6931_6945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6920 === (5))){
var inst_6899 = (state_6919[(7)]);
var state_6919__$1 = state_6919;
var statearr_6932_6946 = state_6919__$1;
(statearr_6932_6946[(2)] = inst_6899);

(statearr_6932_6946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6920 === (10))){
var inst_6913 = (state_6919[(2)]);
var state_6919__$1 = state_6919;
var statearr_6933_6947 = state_6919__$1;
(statearr_6933_6947[(2)] = inst_6913);

(statearr_6933_6947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6920 === (8))){
var inst_6906 = (state_6919[(9)]);
var inst_6909 = cljs.core.deref.call(null,inst_6906);
var state_6919__$1 = state_6919;
var statearr_6934_6948 = state_6919__$1;
(statearr_6934_6948[(2)] = inst_6909);

(statearr_6934_6948[(1)] = (10));


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
});})(c__6432__auto__))
;
return ((function (switch__6342__auto__,c__6432__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6343__auto____0 = (function (){
var statearr_6935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6935[(0)] = cljs$core$async$reduce_$_state_machine__6343__auto__);

(statearr_6935[(1)] = (1));

return statearr_6935;
});
var cljs$core$async$reduce_$_state_machine__6343__auto____1 = (function (state_6919){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6936){if((e6936 instanceof Object)){
var ex__6346__auto__ = e6936;
var statearr_6937_6949 = state_6919;
(statearr_6937_6949[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6950 = state_6919;
state_6919 = G__6950;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6343__auto__ = function(state_6919){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6343__auto____1.call(this,state_6919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6343__auto____0;
cljs$core$async$reduce_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6343__auto____1;
return cljs$core$async$reduce_$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto__))
})();
var state__6434__auto__ = (function (){var statearr_6938 = f__6433__auto__.call(null);
(statearr_6938[(6)] = c__6432__auto__);

return statearr_6938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto__))
);

return c__6432__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__6432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto__,f__$1){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto__,f__$1){
return (function (state_6956){
var state_val_6957 = (state_6956[(1)]);
if((state_val_6957 === (1))){
var inst_6951 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_6956__$1 = state_6956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6956__$1,(2),inst_6951);
} else {
if((state_val_6957 === (2))){
var inst_6953 = (state_6956[(2)]);
var inst_6954 = f__$1.call(null,inst_6953);
var state_6956__$1 = state_6956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6956__$1,inst_6954);
} else {
return null;
}
}
});})(c__6432__auto__,f__$1))
;
return ((function (switch__6342__auto__,c__6432__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6343__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6343__auto____0 = (function (){
var statearr_6958 = [null,null,null,null,null,null,null];
(statearr_6958[(0)] = cljs$core$async$transduce_$_state_machine__6343__auto__);

(statearr_6958[(1)] = (1));

return statearr_6958;
});
var cljs$core$async$transduce_$_state_machine__6343__auto____1 = (function (state_6956){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e6959){if((e6959 instanceof Object)){
var ex__6346__auto__ = e6959;
var statearr_6960_6962 = state_6956;
(statearr_6960_6962[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6963 = state_6956;
state_6956 = G__6963;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6343__auto__ = function(state_6956){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6343__auto____1.call(this,state_6956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6343__auto____0;
cljs$core$async$transduce_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6343__auto____1;
return cljs$core$async$transduce_$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto__,f__$1))
})();
var state__6434__auto__ = (function (){var statearr_6961 = f__6433__auto__.call(null);
(statearr_6961[(6)] = c__6432__auto__);

return statearr_6961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto__,f__$1))
);

return c__6432__auto__;
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
var G__6965 = arguments.length;
switch (G__6965) {
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
var c__6432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto__){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto__){
return (function (state_6990){
var state_val_6991 = (state_6990[(1)]);
if((state_val_6991 === (7))){
var inst_6972 = (state_6990[(2)]);
var state_6990__$1 = state_6990;
var statearr_6992_7013 = state_6990__$1;
(statearr_6992_7013[(2)] = inst_6972);

(statearr_6992_7013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (1))){
var inst_6966 = cljs.core.seq.call(null,coll);
var inst_6967 = inst_6966;
var state_6990__$1 = (function (){var statearr_6993 = state_6990;
(statearr_6993[(7)] = inst_6967);

return statearr_6993;
})();
var statearr_6994_7014 = state_6990__$1;
(statearr_6994_7014[(2)] = null);

(statearr_6994_7014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (4))){
var inst_6967 = (state_6990[(7)]);
var inst_6970 = cljs.core.first.call(null,inst_6967);
var state_6990__$1 = state_6990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6990__$1,(7),ch,inst_6970);
} else {
if((state_val_6991 === (13))){
var inst_6984 = (state_6990[(2)]);
var state_6990__$1 = state_6990;
var statearr_6995_7015 = state_6990__$1;
(statearr_6995_7015[(2)] = inst_6984);

(statearr_6995_7015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (6))){
var inst_6975 = (state_6990[(2)]);
var state_6990__$1 = state_6990;
if(cljs.core.truth_(inst_6975)){
var statearr_6996_7016 = state_6990__$1;
(statearr_6996_7016[(1)] = (8));

} else {
var statearr_6997_7017 = state_6990__$1;
(statearr_6997_7017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (3))){
var inst_6988 = (state_6990[(2)]);
var state_6990__$1 = state_6990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6990__$1,inst_6988);
} else {
if((state_val_6991 === (12))){
var state_6990__$1 = state_6990;
var statearr_6998_7018 = state_6990__$1;
(statearr_6998_7018[(2)] = null);

(statearr_6998_7018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (2))){
var inst_6967 = (state_6990[(7)]);
var state_6990__$1 = state_6990;
if(cljs.core.truth_(inst_6967)){
var statearr_6999_7019 = state_6990__$1;
(statearr_6999_7019[(1)] = (4));

} else {
var statearr_7000_7020 = state_6990__$1;
(statearr_7000_7020[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (11))){
var inst_6981 = cljs.core.async.close_BANG_.call(null,ch);
var state_6990__$1 = state_6990;
var statearr_7001_7021 = state_6990__$1;
(statearr_7001_7021[(2)] = inst_6981);

(statearr_7001_7021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (9))){
var state_6990__$1 = state_6990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7002_7022 = state_6990__$1;
(statearr_7002_7022[(1)] = (11));

} else {
var statearr_7003_7023 = state_6990__$1;
(statearr_7003_7023[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (5))){
var inst_6967 = (state_6990[(7)]);
var state_6990__$1 = state_6990;
var statearr_7004_7024 = state_6990__$1;
(statearr_7004_7024[(2)] = inst_6967);

(statearr_7004_7024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (10))){
var inst_6986 = (state_6990[(2)]);
var state_6990__$1 = state_6990;
var statearr_7005_7025 = state_6990__$1;
(statearr_7005_7025[(2)] = inst_6986);

(statearr_7005_7025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6991 === (8))){
var inst_6967 = (state_6990[(7)]);
var inst_6977 = cljs.core.next.call(null,inst_6967);
var inst_6967__$1 = inst_6977;
var state_6990__$1 = (function (){var statearr_7006 = state_6990;
(statearr_7006[(7)] = inst_6967__$1);

return statearr_7006;
})();
var statearr_7007_7026 = state_6990__$1;
(statearr_7007_7026[(2)] = null);

(statearr_7007_7026[(1)] = (2));


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
});})(c__6432__auto__))
;
return ((function (switch__6342__auto__,c__6432__auto__){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_7008 = [null,null,null,null,null,null,null,null];
(statearr_7008[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_7008[(1)] = (1));

return statearr_7008;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_6990){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_6990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7009){if((e7009 instanceof Object)){
var ex__6346__auto__ = e7009;
var statearr_7010_7027 = state_6990;
(statearr_7010_7027[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7028 = state_6990;
state_6990 = G__7028;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_6990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_6990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto__))
})();
var state__6434__auto__ = (function (){var statearr_7011 = f__6433__auto__.call(null);
(statearr_7011[(6)] = c__6432__auto__);

return statearr_7011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto__))
);

return c__6432__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async7029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7029 = (function (ch,cs,meta7030){
this.ch = ch;
this.cs = cs;
this.meta7030 = meta7030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7031,meta7030__$1){
var self__ = this;
var _7031__$1 = this;
return (new cljs.core.async.t_cljs$core$async7029(self__.ch,self__.cs,meta7030__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7031){
var self__ = this;
var _7031__$1 = this;
return self__.meta7030;
});})(cs))
;

cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7029.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7029.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7030","meta7030",844413578,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7029";

cljs.core.async.t_cljs$core$async7029.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7029");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7029.
 */
cljs.core.async.__GT_t_cljs$core$async7029 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7029(ch__$1,cs__$1,meta7030){
return (new cljs.core.async.t_cljs$core$async7029(ch__$1,cs__$1,meta7030));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7029(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6432__auto___7251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___7251,cs,m,dchan,dctr,done){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___7251,cs,m,dchan,dctr,done){
return (function (state_7166){
var state_val_7167 = (state_7166[(1)]);
if((state_val_7167 === (7))){
var inst_7162 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7168_7252 = state_7166__$1;
(statearr_7168_7252[(2)] = inst_7162);

(statearr_7168_7252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (20))){
var inst_7065 = (state_7166[(7)]);
var inst_7077 = cljs.core.first.call(null,inst_7065);
var inst_7078 = cljs.core.nth.call(null,inst_7077,(0),null);
var inst_7079 = cljs.core.nth.call(null,inst_7077,(1),null);
var state_7166__$1 = (function (){var statearr_7169 = state_7166;
(statearr_7169[(8)] = inst_7078);

return statearr_7169;
})();
if(cljs.core.truth_(inst_7079)){
var statearr_7170_7253 = state_7166__$1;
(statearr_7170_7253[(1)] = (22));

} else {
var statearr_7171_7254 = state_7166__$1;
(statearr_7171_7254[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (27))){
var inst_7109 = (state_7166[(9)]);
var inst_7114 = (state_7166[(10)]);
var inst_7034 = (state_7166[(11)]);
var inst_7107 = (state_7166[(12)]);
var inst_7114__$1 = cljs.core._nth.call(null,inst_7107,inst_7109);
var inst_7115 = cljs.core.async.put_BANG_.call(null,inst_7114__$1,inst_7034,done);
var state_7166__$1 = (function (){var statearr_7172 = state_7166;
(statearr_7172[(10)] = inst_7114__$1);

return statearr_7172;
})();
if(cljs.core.truth_(inst_7115)){
var statearr_7173_7255 = state_7166__$1;
(statearr_7173_7255[(1)] = (30));

} else {
var statearr_7174_7256 = state_7166__$1;
(statearr_7174_7256[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (1))){
var state_7166__$1 = state_7166;
var statearr_7175_7257 = state_7166__$1;
(statearr_7175_7257[(2)] = null);

(statearr_7175_7257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (24))){
var inst_7065 = (state_7166[(7)]);
var inst_7084 = (state_7166[(2)]);
var inst_7085 = cljs.core.next.call(null,inst_7065);
var inst_7043 = inst_7085;
var inst_7044 = null;
var inst_7045 = (0);
var inst_7046 = (0);
var state_7166__$1 = (function (){var statearr_7176 = state_7166;
(statearr_7176[(13)] = inst_7046);

(statearr_7176[(14)] = inst_7044);

(statearr_7176[(15)] = inst_7045);

(statearr_7176[(16)] = inst_7084);

(statearr_7176[(17)] = inst_7043);

return statearr_7176;
})();
var statearr_7177_7258 = state_7166__$1;
(statearr_7177_7258[(2)] = null);

(statearr_7177_7258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (39))){
var state_7166__$1 = state_7166;
var statearr_7181_7259 = state_7166__$1;
(statearr_7181_7259[(2)] = null);

(statearr_7181_7259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (4))){
var inst_7034 = (state_7166[(11)]);
var inst_7034__$1 = (state_7166[(2)]);
var inst_7035 = (inst_7034__$1 == null);
var state_7166__$1 = (function (){var statearr_7182 = state_7166;
(statearr_7182[(11)] = inst_7034__$1);

return statearr_7182;
})();
if(cljs.core.truth_(inst_7035)){
var statearr_7183_7260 = state_7166__$1;
(statearr_7183_7260[(1)] = (5));

} else {
var statearr_7184_7261 = state_7166__$1;
(statearr_7184_7261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (15))){
var inst_7046 = (state_7166[(13)]);
var inst_7044 = (state_7166[(14)]);
var inst_7045 = (state_7166[(15)]);
var inst_7043 = (state_7166[(17)]);
var inst_7061 = (state_7166[(2)]);
var inst_7062 = (inst_7046 + (1));
var tmp7178 = inst_7044;
var tmp7179 = inst_7045;
var tmp7180 = inst_7043;
var inst_7043__$1 = tmp7180;
var inst_7044__$1 = tmp7178;
var inst_7045__$1 = tmp7179;
var inst_7046__$1 = inst_7062;
var state_7166__$1 = (function (){var statearr_7185 = state_7166;
(statearr_7185[(13)] = inst_7046__$1);

(statearr_7185[(18)] = inst_7061);

(statearr_7185[(14)] = inst_7044__$1);

(statearr_7185[(15)] = inst_7045__$1);

(statearr_7185[(17)] = inst_7043__$1);

return statearr_7185;
})();
var statearr_7186_7262 = state_7166__$1;
(statearr_7186_7262[(2)] = null);

(statearr_7186_7262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (21))){
var inst_7088 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7190_7263 = state_7166__$1;
(statearr_7190_7263[(2)] = inst_7088);

(statearr_7190_7263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (31))){
var inst_7114 = (state_7166[(10)]);
var inst_7118 = done.call(null,null);
var inst_7119 = cljs.core.async.untap_STAR_.call(null,m,inst_7114);
var state_7166__$1 = (function (){var statearr_7191 = state_7166;
(statearr_7191[(19)] = inst_7118);

return statearr_7191;
})();
var statearr_7192_7264 = state_7166__$1;
(statearr_7192_7264[(2)] = inst_7119);

(statearr_7192_7264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (32))){
var inst_7109 = (state_7166[(9)]);
var inst_7108 = (state_7166[(20)]);
var inst_7107 = (state_7166[(12)]);
var inst_7106 = (state_7166[(21)]);
var inst_7121 = (state_7166[(2)]);
var inst_7122 = (inst_7109 + (1));
var tmp7187 = inst_7108;
var tmp7188 = inst_7107;
var tmp7189 = inst_7106;
var inst_7106__$1 = tmp7189;
var inst_7107__$1 = tmp7188;
var inst_7108__$1 = tmp7187;
var inst_7109__$1 = inst_7122;
var state_7166__$1 = (function (){var statearr_7193 = state_7166;
(statearr_7193[(9)] = inst_7109__$1);

(statearr_7193[(22)] = inst_7121);

(statearr_7193[(20)] = inst_7108__$1);

(statearr_7193[(12)] = inst_7107__$1);

(statearr_7193[(21)] = inst_7106__$1);

return statearr_7193;
})();
var statearr_7194_7265 = state_7166__$1;
(statearr_7194_7265[(2)] = null);

(statearr_7194_7265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (40))){
var inst_7134 = (state_7166[(23)]);
var inst_7138 = done.call(null,null);
var inst_7139 = cljs.core.async.untap_STAR_.call(null,m,inst_7134);
var state_7166__$1 = (function (){var statearr_7195 = state_7166;
(statearr_7195[(24)] = inst_7138);

return statearr_7195;
})();
var statearr_7196_7266 = state_7166__$1;
(statearr_7196_7266[(2)] = inst_7139);

(statearr_7196_7266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (33))){
var inst_7125 = (state_7166[(25)]);
var inst_7127 = cljs.core.chunked_seq_QMARK_.call(null,inst_7125);
var state_7166__$1 = state_7166;
if(inst_7127){
var statearr_7197_7267 = state_7166__$1;
(statearr_7197_7267[(1)] = (36));

} else {
var statearr_7198_7268 = state_7166__$1;
(statearr_7198_7268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (13))){
var inst_7055 = (state_7166[(26)]);
var inst_7058 = cljs.core.async.close_BANG_.call(null,inst_7055);
var state_7166__$1 = state_7166;
var statearr_7199_7269 = state_7166__$1;
(statearr_7199_7269[(2)] = inst_7058);

(statearr_7199_7269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (22))){
var inst_7078 = (state_7166[(8)]);
var inst_7081 = cljs.core.async.close_BANG_.call(null,inst_7078);
var state_7166__$1 = state_7166;
var statearr_7200_7270 = state_7166__$1;
(statearr_7200_7270[(2)] = inst_7081);

(statearr_7200_7270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (36))){
var inst_7125 = (state_7166[(25)]);
var inst_7129 = cljs.core.chunk_first.call(null,inst_7125);
var inst_7130 = cljs.core.chunk_rest.call(null,inst_7125);
var inst_7131 = cljs.core.count.call(null,inst_7129);
var inst_7106 = inst_7130;
var inst_7107 = inst_7129;
var inst_7108 = inst_7131;
var inst_7109 = (0);
var state_7166__$1 = (function (){var statearr_7201 = state_7166;
(statearr_7201[(9)] = inst_7109);

(statearr_7201[(20)] = inst_7108);

(statearr_7201[(12)] = inst_7107);

(statearr_7201[(21)] = inst_7106);

return statearr_7201;
})();
var statearr_7202_7271 = state_7166__$1;
(statearr_7202_7271[(2)] = null);

(statearr_7202_7271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (41))){
var inst_7125 = (state_7166[(25)]);
var inst_7141 = (state_7166[(2)]);
var inst_7142 = cljs.core.next.call(null,inst_7125);
var inst_7106 = inst_7142;
var inst_7107 = null;
var inst_7108 = (0);
var inst_7109 = (0);
var state_7166__$1 = (function (){var statearr_7203 = state_7166;
(statearr_7203[(9)] = inst_7109);

(statearr_7203[(20)] = inst_7108);

(statearr_7203[(12)] = inst_7107);

(statearr_7203[(21)] = inst_7106);

(statearr_7203[(27)] = inst_7141);

return statearr_7203;
})();
var statearr_7204_7272 = state_7166__$1;
(statearr_7204_7272[(2)] = null);

(statearr_7204_7272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (43))){
var state_7166__$1 = state_7166;
var statearr_7205_7273 = state_7166__$1;
(statearr_7205_7273[(2)] = null);

(statearr_7205_7273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (29))){
var inst_7150 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7206_7274 = state_7166__$1;
(statearr_7206_7274[(2)] = inst_7150);

(statearr_7206_7274[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (44))){
var inst_7159 = (state_7166[(2)]);
var state_7166__$1 = (function (){var statearr_7207 = state_7166;
(statearr_7207[(28)] = inst_7159);

return statearr_7207;
})();
var statearr_7208_7275 = state_7166__$1;
(statearr_7208_7275[(2)] = null);

(statearr_7208_7275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (6))){
var inst_7098 = (state_7166[(29)]);
var inst_7097 = cljs.core.deref.call(null,cs);
var inst_7098__$1 = cljs.core.keys.call(null,inst_7097);
var inst_7099 = cljs.core.count.call(null,inst_7098__$1);
var inst_7100 = cljs.core.reset_BANG_.call(null,dctr,inst_7099);
var inst_7105 = cljs.core.seq.call(null,inst_7098__$1);
var inst_7106 = inst_7105;
var inst_7107 = null;
var inst_7108 = (0);
var inst_7109 = (0);
var state_7166__$1 = (function (){var statearr_7209 = state_7166;
(statearr_7209[(9)] = inst_7109);

(statearr_7209[(20)] = inst_7108);

(statearr_7209[(12)] = inst_7107);

(statearr_7209[(30)] = inst_7100);

(statearr_7209[(21)] = inst_7106);

(statearr_7209[(29)] = inst_7098__$1);

return statearr_7209;
})();
var statearr_7210_7276 = state_7166__$1;
(statearr_7210_7276[(2)] = null);

(statearr_7210_7276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (28))){
var inst_7125 = (state_7166[(25)]);
var inst_7106 = (state_7166[(21)]);
var inst_7125__$1 = cljs.core.seq.call(null,inst_7106);
var state_7166__$1 = (function (){var statearr_7211 = state_7166;
(statearr_7211[(25)] = inst_7125__$1);

return statearr_7211;
})();
if(inst_7125__$1){
var statearr_7212_7277 = state_7166__$1;
(statearr_7212_7277[(1)] = (33));

} else {
var statearr_7213_7278 = state_7166__$1;
(statearr_7213_7278[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (25))){
var inst_7109 = (state_7166[(9)]);
var inst_7108 = (state_7166[(20)]);
var inst_7111 = (inst_7109 < inst_7108);
var inst_7112 = inst_7111;
var state_7166__$1 = state_7166;
if(cljs.core.truth_(inst_7112)){
var statearr_7214_7279 = state_7166__$1;
(statearr_7214_7279[(1)] = (27));

} else {
var statearr_7215_7280 = state_7166__$1;
(statearr_7215_7280[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (34))){
var state_7166__$1 = state_7166;
var statearr_7216_7281 = state_7166__$1;
(statearr_7216_7281[(2)] = null);

(statearr_7216_7281[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (17))){
var state_7166__$1 = state_7166;
var statearr_7217_7282 = state_7166__$1;
(statearr_7217_7282[(2)] = null);

(statearr_7217_7282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (3))){
var inst_7164 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7166__$1,inst_7164);
} else {
if((state_val_7167 === (12))){
var inst_7093 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7218_7283 = state_7166__$1;
(statearr_7218_7283[(2)] = inst_7093);

(statearr_7218_7283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (2))){
var state_7166__$1 = state_7166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7166__$1,(4),ch);
} else {
if((state_val_7167 === (23))){
var state_7166__$1 = state_7166;
var statearr_7219_7284 = state_7166__$1;
(statearr_7219_7284[(2)] = null);

(statearr_7219_7284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (35))){
var inst_7148 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7220_7285 = state_7166__$1;
(statearr_7220_7285[(2)] = inst_7148);

(statearr_7220_7285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (19))){
var inst_7065 = (state_7166[(7)]);
var inst_7069 = cljs.core.chunk_first.call(null,inst_7065);
var inst_7070 = cljs.core.chunk_rest.call(null,inst_7065);
var inst_7071 = cljs.core.count.call(null,inst_7069);
var inst_7043 = inst_7070;
var inst_7044 = inst_7069;
var inst_7045 = inst_7071;
var inst_7046 = (0);
var state_7166__$1 = (function (){var statearr_7221 = state_7166;
(statearr_7221[(13)] = inst_7046);

(statearr_7221[(14)] = inst_7044);

(statearr_7221[(15)] = inst_7045);

(statearr_7221[(17)] = inst_7043);

return statearr_7221;
})();
var statearr_7222_7286 = state_7166__$1;
(statearr_7222_7286[(2)] = null);

(statearr_7222_7286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (11))){
var inst_7065 = (state_7166[(7)]);
var inst_7043 = (state_7166[(17)]);
var inst_7065__$1 = cljs.core.seq.call(null,inst_7043);
var state_7166__$1 = (function (){var statearr_7223 = state_7166;
(statearr_7223[(7)] = inst_7065__$1);

return statearr_7223;
})();
if(inst_7065__$1){
var statearr_7224_7287 = state_7166__$1;
(statearr_7224_7287[(1)] = (16));

} else {
var statearr_7225_7288 = state_7166__$1;
(statearr_7225_7288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (9))){
var inst_7095 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7226_7289 = state_7166__$1;
(statearr_7226_7289[(2)] = inst_7095);

(statearr_7226_7289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (5))){
var inst_7041 = cljs.core.deref.call(null,cs);
var inst_7042 = cljs.core.seq.call(null,inst_7041);
var inst_7043 = inst_7042;
var inst_7044 = null;
var inst_7045 = (0);
var inst_7046 = (0);
var state_7166__$1 = (function (){var statearr_7227 = state_7166;
(statearr_7227[(13)] = inst_7046);

(statearr_7227[(14)] = inst_7044);

(statearr_7227[(15)] = inst_7045);

(statearr_7227[(17)] = inst_7043);

return statearr_7227;
})();
var statearr_7228_7290 = state_7166__$1;
(statearr_7228_7290[(2)] = null);

(statearr_7228_7290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (14))){
var state_7166__$1 = state_7166;
var statearr_7229_7291 = state_7166__$1;
(statearr_7229_7291[(2)] = null);

(statearr_7229_7291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (45))){
var inst_7156 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7230_7292 = state_7166__$1;
(statearr_7230_7292[(2)] = inst_7156);

(statearr_7230_7292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (26))){
var inst_7098 = (state_7166[(29)]);
var inst_7152 = (state_7166[(2)]);
var inst_7153 = cljs.core.seq.call(null,inst_7098);
var state_7166__$1 = (function (){var statearr_7231 = state_7166;
(statearr_7231[(31)] = inst_7152);

return statearr_7231;
})();
if(inst_7153){
var statearr_7232_7293 = state_7166__$1;
(statearr_7232_7293[(1)] = (42));

} else {
var statearr_7233_7294 = state_7166__$1;
(statearr_7233_7294[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (16))){
var inst_7065 = (state_7166[(7)]);
var inst_7067 = cljs.core.chunked_seq_QMARK_.call(null,inst_7065);
var state_7166__$1 = state_7166;
if(inst_7067){
var statearr_7234_7295 = state_7166__$1;
(statearr_7234_7295[(1)] = (19));

} else {
var statearr_7235_7296 = state_7166__$1;
(statearr_7235_7296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (38))){
var inst_7145 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7236_7297 = state_7166__$1;
(statearr_7236_7297[(2)] = inst_7145);

(statearr_7236_7297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (30))){
var state_7166__$1 = state_7166;
var statearr_7237_7298 = state_7166__$1;
(statearr_7237_7298[(2)] = null);

(statearr_7237_7298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (10))){
var inst_7046 = (state_7166[(13)]);
var inst_7044 = (state_7166[(14)]);
var inst_7054 = cljs.core._nth.call(null,inst_7044,inst_7046);
var inst_7055 = cljs.core.nth.call(null,inst_7054,(0),null);
var inst_7056 = cljs.core.nth.call(null,inst_7054,(1),null);
var state_7166__$1 = (function (){var statearr_7238 = state_7166;
(statearr_7238[(26)] = inst_7055);

return statearr_7238;
})();
if(cljs.core.truth_(inst_7056)){
var statearr_7239_7299 = state_7166__$1;
(statearr_7239_7299[(1)] = (13));

} else {
var statearr_7240_7300 = state_7166__$1;
(statearr_7240_7300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (18))){
var inst_7091 = (state_7166[(2)]);
var state_7166__$1 = state_7166;
var statearr_7241_7301 = state_7166__$1;
(statearr_7241_7301[(2)] = inst_7091);

(statearr_7241_7301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (42))){
var state_7166__$1 = state_7166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7166__$1,(45),dchan);
} else {
if((state_val_7167 === (37))){
var inst_7034 = (state_7166[(11)]);
var inst_7134 = (state_7166[(23)]);
var inst_7125 = (state_7166[(25)]);
var inst_7134__$1 = cljs.core.first.call(null,inst_7125);
var inst_7135 = cljs.core.async.put_BANG_.call(null,inst_7134__$1,inst_7034,done);
var state_7166__$1 = (function (){var statearr_7242 = state_7166;
(statearr_7242[(23)] = inst_7134__$1);

return statearr_7242;
})();
if(cljs.core.truth_(inst_7135)){
var statearr_7243_7302 = state_7166__$1;
(statearr_7243_7302[(1)] = (39));

} else {
var statearr_7244_7303 = state_7166__$1;
(statearr_7244_7303[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7167 === (8))){
var inst_7046 = (state_7166[(13)]);
var inst_7045 = (state_7166[(15)]);
var inst_7048 = (inst_7046 < inst_7045);
var inst_7049 = inst_7048;
var state_7166__$1 = state_7166;
if(cljs.core.truth_(inst_7049)){
var statearr_7245_7304 = state_7166__$1;
(statearr_7245_7304[(1)] = (10));

} else {
var statearr_7246_7305 = state_7166__$1;
(statearr_7246_7305[(1)] = (11));

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
});})(c__6432__auto___7251,cs,m,dchan,dctr,done))
;
return ((function (switch__6342__auto__,c__6432__auto___7251,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6343__auto__ = null;
var cljs$core$async$mult_$_state_machine__6343__auto____0 = (function (){
var statearr_7247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7247[(0)] = cljs$core$async$mult_$_state_machine__6343__auto__);

(statearr_7247[(1)] = (1));

return statearr_7247;
});
var cljs$core$async$mult_$_state_machine__6343__auto____1 = (function (state_7166){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_7166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7248){if((e7248 instanceof Object)){
var ex__6346__auto__ = e7248;
var statearr_7249_7306 = state_7166;
(statearr_7249_7306[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7307 = state_7166;
state_7166 = G__7307;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6343__auto__ = function(state_7166){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6343__auto____1.call(this,state_7166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6343__auto____0;
cljs$core$async$mult_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6343__auto____1;
return cljs$core$async$mult_$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___7251,cs,m,dchan,dctr,done))
})();
var state__6434__auto__ = (function (){var statearr_7250 = f__6433__auto__.call(null);
(statearr_7250[(6)] = c__6432__auto___7251);

return statearr_7250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___7251,cs,m,dchan,dctr,done))
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
var G__7309 = arguments.length;
switch (G__7309) {
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
var len__4499__auto___7321 = arguments.length;
var i__4500__auto___7322 = (0);
while(true){
if((i__4500__auto___7322 < len__4499__auto___7321)){
args__4502__auto__.push((arguments[i__4500__auto___7322]));

var G__7323 = (i__4500__auto___7322 + (1));
i__4500__auto___7322 = G__7323;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7315){
var map__7316 = p__7315;
var map__7316__$1 = ((((!((map__7316 == null)))?(((((map__7316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7316):map__7316);
var opts = map__7316__$1;
var statearr_7318_7324 = state;
(statearr_7318_7324[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__7316,map__7316__$1,opts){
return (function (val){
var statearr_7319_7325 = state;
(statearr_7319_7325[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7316,map__7316__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_7320_7326 = state;
(statearr_7320_7326[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7311){
var G__7312 = cljs.core.first.call(null,seq7311);
var seq7311__$1 = cljs.core.next.call(null,seq7311);
var G__7313 = cljs.core.first.call(null,seq7311__$1);
var seq7311__$2 = cljs.core.next.call(null,seq7311__$1);
var G__7314 = cljs.core.first.call(null,seq7311__$2);
var seq7311__$3 = cljs.core.next.call(null,seq7311__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7312,G__7313,G__7314,seq7311__$3);
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
if(typeof cljs.core.async.t_cljs$core$async7327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7327 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta7328){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta7328 = meta7328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7329,meta7328__$1){
var self__ = this;
var _7329__$1 = this;
return (new cljs.core.async.t_cljs$core$async7327(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta7328__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7329){
var self__ = this;
var _7329__$1 = this;
return self__.meta7328;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async7327.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta7328","meta7328",-1060373105,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7327";

cljs.core.async.t_cljs$core$async7327.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7327");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7327.
 */
cljs.core.async.__GT_t_cljs$core$async7327 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7327(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7328){
return (new cljs.core.async.t_cljs$core$async7327(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7328));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7327(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6432__auto___7491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___7491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___7491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7431){
var state_val_7432 = (state_7431[(1)]);
if((state_val_7432 === (7))){
var inst_7346 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
var statearr_7433_7492 = state_7431__$1;
(statearr_7433_7492[(2)] = inst_7346);

(statearr_7433_7492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (20))){
var inst_7358 = (state_7431[(7)]);
var state_7431__$1 = state_7431;
var statearr_7434_7493 = state_7431__$1;
(statearr_7434_7493[(2)] = inst_7358);

(statearr_7434_7493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (27))){
var state_7431__$1 = state_7431;
var statearr_7435_7494 = state_7431__$1;
(statearr_7435_7494[(2)] = null);

(statearr_7435_7494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (1))){
var inst_7333 = (state_7431[(8)]);
var inst_7333__$1 = calc_state.call(null);
var inst_7335 = (inst_7333__$1 == null);
var inst_7336 = cljs.core.not.call(null,inst_7335);
var state_7431__$1 = (function (){var statearr_7436 = state_7431;
(statearr_7436[(8)] = inst_7333__$1);

return statearr_7436;
})();
if(inst_7336){
var statearr_7437_7495 = state_7431__$1;
(statearr_7437_7495[(1)] = (2));

} else {
var statearr_7438_7496 = state_7431__$1;
(statearr_7438_7496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (24))){
var inst_7405 = (state_7431[(9)]);
var inst_7391 = (state_7431[(10)]);
var inst_7382 = (state_7431[(11)]);
var inst_7405__$1 = inst_7382.call(null,inst_7391);
var state_7431__$1 = (function (){var statearr_7439 = state_7431;
(statearr_7439[(9)] = inst_7405__$1);

return statearr_7439;
})();
if(cljs.core.truth_(inst_7405__$1)){
var statearr_7440_7497 = state_7431__$1;
(statearr_7440_7497[(1)] = (29));

} else {
var statearr_7441_7498 = state_7431__$1;
(statearr_7441_7498[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (4))){
var inst_7349 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
if(cljs.core.truth_(inst_7349)){
var statearr_7442_7499 = state_7431__$1;
(statearr_7442_7499[(1)] = (8));

} else {
var statearr_7443_7500 = state_7431__$1;
(statearr_7443_7500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (15))){
var inst_7376 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
if(cljs.core.truth_(inst_7376)){
var statearr_7444_7501 = state_7431__$1;
(statearr_7444_7501[(1)] = (19));

} else {
var statearr_7445_7502 = state_7431__$1;
(statearr_7445_7502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (21))){
var inst_7381 = (state_7431[(12)]);
var inst_7381__$1 = (state_7431[(2)]);
var inst_7382 = cljs.core.get.call(null,inst_7381__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7383 = cljs.core.get.call(null,inst_7381__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7384 = cljs.core.get.call(null,inst_7381__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7431__$1 = (function (){var statearr_7446 = state_7431;
(statearr_7446[(11)] = inst_7382);

(statearr_7446[(13)] = inst_7383);

(statearr_7446[(12)] = inst_7381__$1);

return statearr_7446;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_7431__$1,(22),inst_7384);
} else {
if((state_val_7432 === (31))){
var inst_7413 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
if(cljs.core.truth_(inst_7413)){
var statearr_7447_7503 = state_7431__$1;
(statearr_7447_7503[(1)] = (32));

} else {
var statearr_7448_7504 = state_7431__$1;
(statearr_7448_7504[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (32))){
var inst_7390 = (state_7431[(14)]);
var state_7431__$1 = state_7431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7431__$1,(35),out,inst_7390);
} else {
if((state_val_7432 === (33))){
var inst_7381 = (state_7431[(12)]);
var inst_7358 = inst_7381;
var state_7431__$1 = (function (){var statearr_7449 = state_7431;
(statearr_7449[(7)] = inst_7358);

return statearr_7449;
})();
var statearr_7450_7505 = state_7431__$1;
(statearr_7450_7505[(2)] = null);

(statearr_7450_7505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (13))){
var inst_7358 = (state_7431[(7)]);
var inst_7365 = inst_7358.cljs$lang$protocol_mask$partition0$;
var inst_7366 = (inst_7365 & (64));
var inst_7367 = inst_7358.cljs$core$ISeq$;
var inst_7368 = (cljs.core.PROTOCOL_SENTINEL === inst_7367);
var inst_7369 = ((inst_7366) || (inst_7368));
var state_7431__$1 = state_7431;
if(cljs.core.truth_(inst_7369)){
var statearr_7451_7506 = state_7431__$1;
(statearr_7451_7506[(1)] = (16));

} else {
var statearr_7452_7507 = state_7431__$1;
(statearr_7452_7507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (22))){
var inst_7391 = (state_7431[(10)]);
var inst_7390 = (state_7431[(14)]);
var inst_7389 = (state_7431[(2)]);
var inst_7390__$1 = cljs.core.nth.call(null,inst_7389,(0),null);
var inst_7391__$1 = cljs.core.nth.call(null,inst_7389,(1),null);
var inst_7392 = (inst_7390__$1 == null);
var inst_7393 = cljs.core._EQ_.call(null,inst_7391__$1,change);
var inst_7394 = ((inst_7392) || (inst_7393));
var state_7431__$1 = (function (){var statearr_7453 = state_7431;
(statearr_7453[(10)] = inst_7391__$1);

(statearr_7453[(14)] = inst_7390__$1);

return statearr_7453;
})();
if(cljs.core.truth_(inst_7394)){
var statearr_7454_7508 = state_7431__$1;
(statearr_7454_7508[(1)] = (23));

} else {
var statearr_7455_7509 = state_7431__$1;
(statearr_7455_7509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (36))){
var inst_7381 = (state_7431[(12)]);
var inst_7358 = inst_7381;
var state_7431__$1 = (function (){var statearr_7456 = state_7431;
(statearr_7456[(7)] = inst_7358);

return statearr_7456;
})();
var statearr_7457_7510 = state_7431__$1;
(statearr_7457_7510[(2)] = null);

(statearr_7457_7510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (29))){
var inst_7405 = (state_7431[(9)]);
var state_7431__$1 = state_7431;
var statearr_7458_7511 = state_7431__$1;
(statearr_7458_7511[(2)] = inst_7405);

(statearr_7458_7511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (6))){
var state_7431__$1 = state_7431;
var statearr_7459_7512 = state_7431__$1;
(statearr_7459_7512[(2)] = false);

(statearr_7459_7512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (28))){
var inst_7401 = (state_7431[(2)]);
var inst_7402 = calc_state.call(null);
var inst_7358 = inst_7402;
var state_7431__$1 = (function (){var statearr_7460 = state_7431;
(statearr_7460[(7)] = inst_7358);

(statearr_7460[(15)] = inst_7401);

return statearr_7460;
})();
var statearr_7461_7513 = state_7431__$1;
(statearr_7461_7513[(2)] = null);

(statearr_7461_7513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (25))){
var inst_7427 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
var statearr_7462_7514 = state_7431__$1;
(statearr_7462_7514[(2)] = inst_7427);

(statearr_7462_7514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (34))){
var inst_7425 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
var statearr_7463_7515 = state_7431__$1;
(statearr_7463_7515[(2)] = inst_7425);

(statearr_7463_7515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (17))){
var state_7431__$1 = state_7431;
var statearr_7464_7516 = state_7431__$1;
(statearr_7464_7516[(2)] = false);

(statearr_7464_7516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (3))){
var state_7431__$1 = state_7431;
var statearr_7465_7517 = state_7431__$1;
(statearr_7465_7517[(2)] = false);

(statearr_7465_7517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (12))){
var inst_7429 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7431__$1,inst_7429);
} else {
if((state_val_7432 === (2))){
var inst_7333 = (state_7431[(8)]);
var inst_7338 = inst_7333.cljs$lang$protocol_mask$partition0$;
var inst_7339 = (inst_7338 & (64));
var inst_7340 = inst_7333.cljs$core$ISeq$;
var inst_7341 = (cljs.core.PROTOCOL_SENTINEL === inst_7340);
var inst_7342 = ((inst_7339) || (inst_7341));
var state_7431__$1 = state_7431;
if(cljs.core.truth_(inst_7342)){
var statearr_7466_7518 = state_7431__$1;
(statearr_7466_7518[(1)] = (5));

} else {
var statearr_7467_7519 = state_7431__$1;
(statearr_7467_7519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (23))){
var inst_7390 = (state_7431[(14)]);
var inst_7396 = (inst_7390 == null);
var state_7431__$1 = state_7431;
if(cljs.core.truth_(inst_7396)){
var statearr_7468_7520 = state_7431__$1;
(statearr_7468_7520[(1)] = (26));

} else {
var statearr_7469_7521 = state_7431__$1;
(statearr_7469_7521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (35))){
var inst_7416 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
if(cljs.core.truth_(inst_7416)){
var statearr_7470_7522 = state_7431__$1;
(statearr_7470_7522[(1)] = (36));

} else {
var statearr_7471_7523 = state_7431__$1;
(statearr_7471_7523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (19))){
var inst_7358 = (state_7431[(7)]);
var inst_7378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7358);
var state_7431__$1 = state_7431;
var statearr_7472_7524 = state_7431__$1;
(statearr_7472_7524[(2)] = inst_7378);

(statearr_7472_7524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (11))){
var inst_7358 = (state_7431[(7)]);
var inst_7362 = (inst_7358 == null);
var inst_7363 = cljs.core.not.call(null,inst_7362);
var state_7431__$1 = state_7431;
if(inst_7363){
var statearr_7473_7525 = state_7431__$1;
(statearr_7473_7525[(1)] = (13));

} else {
var statearr_7474_7526 = state_7431__$1;
(statearr_7474_7526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (9))){
var inst_7333 = (state_7431[(8)]);
var state_7431__$1 = state_7431;
var statearr_7475_7527 = state_7431__$1;
(statearr_7475_7527[(2)] = inst_7333);

(statearr_7475_7527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (5))){
var state_7431__$1 = state_7431;
var statearr_7476_7528 = state_7431__$1;
(statearr_7476_7528[(2)] = true);

(statearr_7476_7528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (14))){
var state_7431__$1 = state_7431;
var statearr_7477_7529 = state_7431__$1;
(statearr_7477_7529[(2)] = false);

(statearr_7477_7529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (26))){
var inst_7391 = (state_7431[(10)]);
var inst_7398 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7391);
var state_7431__$1 = state_7431;
var statearr_7478_7530 = state_7431__$1;
(statearr_7478_7530[(2)] = inst_7398);

(statearr_7478_7530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (16))){
var state_7431__$1 = state_7431;
var statearr_7479_7531 = state_7431__$1;
(statearr_7479_7531[(2)] = true);

(statearr_7479_7531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (38))){
var inst_7421 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
var statearr_7480_7532 = state_7431__$1;
(statearr_7480_7532[(2)] = inst_7421);

(statearr_7480_7532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (30))){
var inst_7391 = (state_7431[(10)]);
var inst_7382 = (state_7431[(11)]);
var inst_7383 = (state_7431[(13)]);
var inst_7408 = cljs.core.empty_QMARK_.call(null,inst_7382);
var inst_7409 = inst_7383.call(null,inst_7391);
var inst_7410 = cljs.core.not.call(null,inst_7409);
var inst_7411 = ((inst_7408) && (inst_7410));
var state_7431__$1 = state_7431;
var statearr_7481_7533 = state_7431__$1;
(statearr_7481_7533[(2)] = inst_7411);

(statearr_7481_7533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (10))){
var inst_7333 = (state_7431[(8)]);
var inst_7354 = (state_7431[(2)]);
var inst_7355 = cljs.core.get.call(null,inst_7354,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7356 = cljs.core.get.call(null,inst_7354,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7357 = cljs.core.get.call(null,inst_7354,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7358 = inst_7333;
var state_7431__$1 = (function (){var statearr_7482 = state_7431;
(statearr_7482[(16)] = inst_7357);

(statearr_7482[(7)] = inst_7358);

(statearr_7482[(17)] = inst_7356);

(statearr_7482[(18)] = inst_7355);

return statearr_7482;
})();
var statearr_7483_7534 = state_7431__$1;
(statearr_7483_7534[(2)] = null);

(statearr_7483_7534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (18))){
var inst_7373 = (state_7431[(2)]);
var state_7431__$1 = state_7431;
var statearr_7484_7535 = state_7431__$1;
(statearr_7484_7535[(2)] = inst_7373);

(statearr_7484_7535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (37))){
var state_7431__$1 = state_7431;
var statearr_7485_7536 = state_7431__$1;
(statearr_7485_7536[(2)] = null);

(statearr_7485_7536[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7432 === (8))){
var inst_7333 = (state_7431[(8)]);
var inst_7351 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7333);
var state_7431__$1 = state_7431;
var statearr_7486_7537 = state_7431__$1;
(statearr_7486_7537[(2)] = inst_7351);

(statearr_7486_7537[(1)] = (10));


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
});})(c__6432__auto___7491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6342__auto__,c__6432__auto___7491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6343__auto__ = null;
var cljs$core$async$mix_$_state_machine__6343__auto____0 = (function (){
var statearr_7487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7487[(0)] = cljs$core$async$mix_$_state_machine__6343__auto__);

(statearr_7487[(1)] = (1));

return statearr_7487;
});
var cljs$core$async$mix_$_state_machine__6343__auto____1 = (function (state_7431){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_7431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7488){if((e7488 instanceof Object)){
var ex__6346__auto__ = e7488;
var statearr_7489_7538 = state_7431;
(statearr_7489_7538[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7539 = state_7431;
state_7431 = G__7539;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6343__auto__ = function(state_7431){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6343__auto____1.call(this,state_7431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6343__auto____0;
cljs$core$async$mix_$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6343__auto____1;
return cljs$core$async$mix_$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___7491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6434__auto__ = (function (){var statearr_7490 = f__6433__auto__.call(null);
(statearr_7490[(6)] = c__6432__auto___7491);

return statearr_7490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___7491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__7541 = arguments.length;
switch (G__7541) {
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
var G__7545 = arguments.length;
switch (G__7545) {
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
return (function (p1__7543_SHARP_){
if(cljs.core.truth_(p1__7543_SHARP_.call(null,topic))){
return p1__7543_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__7543_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async7546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7546 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta7547){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta7547 = meta7547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_7548,meta7547__$1){
var self__ = this;
var _7548__$1 = this;
return (new cljs.core.async.t_cljs$core$async7546(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta7547__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_7548){
var self__ = this;
var _7548__$1 = this;
return self__.meta7547;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7546.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta7547","meta7547",-497723697,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7546";

cljs.core.async.t_cljs$core$async7546.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7546");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7546.
 */
cljs.core.async.__GT_t_cljs$core$async7546 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async7546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7547){
return (new cljs.core.async.t_cljs$core$async7546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7547));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async7546(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6432__auto___7666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___7666,mults,ensure_mult,p){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___7666,mults,ensure_mult,p){
return (function (state_7620){
var state_val_7621 = (state_7620[(1)]);
if((state_val_7621 === (7))){
var inst_7616 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
var statearr_7622_7667 = state_7620__$1;
(statearr_7622_7667[(2)] = inst_7616);

(statearr_7622_7667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (20))){
var state_7620__$1 = state_7620;
var statearr_7623_7668 = state_7620__$1;
(statearr_7623_7668[(2)] = null);

(statearr_7623_7668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (1))){
var state_7620__$1 = state_7620;
var statearr_7624_7669 = state_7620__$1;
(statearr_7624_7669[(2)] = null);

(statearr_7624_7669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (24))){
var inst_7599 = (state_7620[(7)]);
var inst_7608 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_7599);
var state_7620__$1 = state_7620;
var statearr_7625_7670 = state_7620__$1;
(statearr_7625_7670[(2)] = inst_7608);

(statearr_7625_7670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (4))){
var inst_7551 = (state_7620[(8)]);
var inst_7551__$1 = (state_7620[(2)]);
var inst_7552 = (inst_7551__$1 == null);
var state_7620__$1 = (function (){var statearr_7626 = state_7620;
(statearr_7626[(8)] = inst_7551__$1);

return statearr_7626;
})();
if(cljs.core.truth_(inst_7552)){
var statearr_7627_7671 = state_7620__$1;
(statearr_7627_7671[(1)] = (5));

} else {
var statearr_7628_7672 = state_7620__$1;
(statearr_7628_7672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (15))){
var inst_7593 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
var statearr_7629_7673 = state_7620__$1;
(statearr_7629_7673[(2)] = inst_7593);

(statearr_7629_7673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (21))){
var inst_7613 = (state_7620[(2)]);
var state_7620__$1 = (function (){var statearr_7630 = state_7620;
(statearr_7630[(9)] = inst_7613);

return statearr_7630;
})();
var statearr_7631_7674 = state_7620__$1;
(statearr_7631_7674[(2)] = null);

(statearr_7631_7674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (13))){
var inst_7575 = (state_7620[(10)]);
var inst_7577 = cljs.core.chunked_seq_QMARK_.call(null,inst_7575);
var state_7620__$1 = state_7620;
if(inst_7577){
var statearr_7632_7675 = state_7620__$1;
(statearr_7632_7675[(1)] = (16));

} else {
var statearr_7633_7676 = state_7620__$1;
(statearr_7633_7676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (22))){
var inst_7605 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
if(cljs.core.truth_(inst_7605)){
var statearr_7634_7677 = state_7620__$1;
(statearr_7634_7677[(1)] = (23));

} else {
var statearr_7635_7678 = state_7620__$1;
(statearr_7635_7678[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (6))){
var inst_7551 = (state_7620[(8)]);
var inst_7601 = (state_7620[(11)]);
var inst_7599 = (state_7620[(7)]);
var inst_7599__$1 = topic_fn.call(null,inst_7551);
var inst_7600 = cljs.core.deref.call(null,mults);
var inst_7601__$1 = cljs.core.get.call(null,inst_7600,inst_7599__$1);
var state_7620__$1 = (function (){var statearr_7636 = state_7620;
(statearr_7636[(11)] = inst_7601__$1);

(statearr_7636[(7)] = inst_7599__$1);

return statearr_7636;
})();
if(cljs.core.truth_(inst_7601__$1)){
var statearr_7637_7679 = state_7620__$1;
(statearr_7637_7679[(1)] = (19));

} else {
var statearr_7638_7680 = state_7620__$1;
(statearr_7638_7680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (25))){
var inst_7610 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
var statearr_7639_7681 = state_7620__$1;
(statearr_7639_7681[(2)] = inst_7610);

(statearr_7639_7681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (17))){
var inst_7575 = (state_7620[(10)]);
var inst_7584 = cljs.core.first.call(null,inst_7575);
var inst_7585 = cljs.core.async.muxch_STAR_.call(null,inst_7584);
var inst_7586 = cljs.core.async.close_BANG_.call(null,inst_7585);
var inst_7587 = cljs.core.next.call(null,inst_7575);
var inst_7561 = inst_7587;
var inst_7562 = null;
var inst_7563 = (0);
var inst_7564 = (0);
var state_7620__$1 = (function (){var statearr_7640 = state_7620;
(statearr_7640[(12)] = inst_7586);

(statearr_7640[(13)] = inst_7564);

(statearr_7640[(14)] = inst_7563);

(statearr_7640[(15)] = inst_7561);

(statearr_7640[(16)] = inst_7562);

return statearr_7640;
})();
var statearr_7641_7682 = state_7620__$1;
(statearr_7641_7682[(2)] = null);

(statearr_7641_7682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (3))){
var inst_7618 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7620__$1,inst_7618);
} else {
if((state_val_7621 === (12))){
var inst_7595 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
var statearr_7642_7683 = state_7620__$1;
(statearr_7642_7683[(2)] = inst_7595);

(statearr_7642_7683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (2))){
var state_7620__$1 = state_7620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7620__$1,(4),ch);
} else {
if((state_val_7621 === (23))){
var state_7620__$1 = state_7620;
var statearr_7643_7684 = state_7620__$1;
(statearr_7643_7684[(2)] = null);

(statearr_7643_7684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (19))){
var inst_7551 = (state_7620[(8)]);
var inst_7601 = (state_7620[(11)]);
var inst_7603 = cljs.core.async.muxch_STAR_.call(null,inst_7601);
var state_7620__$1 = state_7620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7620__$1,(22),inst_7603,inst_7551);
} else {
if((state_val_7621 === (11))){
var inst_7575 = (state_7620[(10)]);
var inst_7561 = (state_7620[(15)]);
var inst_7575__$1 = cljs.core.seq.call(null,inst_7561);
var state_7620__$1 = (function (){var statearr_7644 = state_7620;
(statearr_7644[(10)] = inst_7575__$1);

return statearr_7644;
})();
if(inst_7575__$1){
var statearr_7645_7685 = state_7620__$1;
(statearr_7645_7685[(1)] = (13));

} else {
var statearr_7646_7686 = state_7620__$1;
(statearr_7646_7686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (9))){
var inst_7597 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
var statearr_7647_7687 = state_7620__$1;
(statearr_7647_7687[(2)] = inst_7597);

(statearr_7647_7687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (5))){
var inst_7558 = cljs.core.deref.call(null,mults);
var inst_7559 = cljs.core.vals.call(null,inst_7558);
var inst_7560 = cljs.core.seq.call(null,inst_7559);
var inst_7561 = inst_7560;
var inst_7562 = null;
var inst_7563 = (0);
var inst_7564 = (0);
var state_7620__$1 = (function (){var statearr_7648 = state_7620;
(statearr_7648[(13)] = inst_7564);

(statearr_7648[(14)] = inst_7563);

(statearr_7648[(15)] = inst_7561);

(statearr_7648[(16)] = inst_7562);

return statearr_7648;
})();
var statearr_7649_7688 = state_7620__$1;
(statearr_7649_7688[(2)] = null);

(statearr_7649_7688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (14))){
var state_7620__$1 = state_7620;
var statearr_7653_7689 = state_7620__$1;
(statearr_7653_7689[(2)] = null);

(statearr_7653_7689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (16))){
var inst_7575 = (state_7620[(10)]);
var inst_7579 = cljs.core.chunk_first.call(null,inst_7575);
var inst_7580 = cljs.core.chunk_rest.call(null,inst_7575);
var inst_7581 = cljs.core.count.call(null,inst_7579);
var inst_7561 = inst_7580;
var inst_7562 = inst_7579;
var inst_7563 = inst_7581;
var inst_7564 = (0);
var state_7620__$1 = (function (){var statearr_7654 = state_7620;
(statearr_7654[(13)] = inst_7564);

(statearr_7654[(14)] = inst_7563);

(statearr_7654[(15)] = inst_7561);

(statearr_7654[(16)] = inst_7562);

return statearr_7654;
})();
var statearr_7655_7690 = state_7620__$1;
(statearr_7655_7690[(2)] = null);

(statearr_7655_7690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (10))){
var inst_7564 = (state_7620[(13)]);
var inst_7563 = (state_7620[(14)]);
var inst_7561 = (state_7620[(15)]);
var inst_7562 = (state_7620[(16)]);
var inst_7569 = cljs.core._nth.call(null,inst_7562,inst_7564);
var inst_7570 = cljs.core.async.muxch_STAR_.call(null,inst_7569);
var inst_7571 = cljs.core.async.close_BANG_.call(null,inst_7570);
var inst_7572 = (inst_7564 + (1));
var tmp7650 = inst_7563;
var tmp7651 = inst_7561;
var tmp7652 = inst_7562;
var inst_7561__$1 = tmp7651;
var inst_7562__$1 = tmp7652;
var inst_7563__$1 = tmp7650;
var inst_7564__$1 = inst_7572;
var state_7620__$1 = (function (){var statearr_7656 = state_7620;
(statearr_7656[(17)] = inst_7571);

(statearr_7656[(13)] = inst_7564__$1);

(statearr_7656[(14)] = inst_7563__$1);

(statearr_7656[(15)] = inst_7561__$1);

(statearr_7656[(16)] = inst_7562__$1);

return statearr_7656;
})();
var statearr_7657_7691 = state_7620__$1;
(statearr_7657_7691[(2)] = null);

(statearr_7657_7691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (18))){
var inst_7590 = (state_7620[(2)]);
var state_7620__$1 = state_7620;
var statearr_7658_7692 = state_7620__$1;
(statearr_7658_7692[(2)] = inst_7590);

(statearr_7658_7692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7621 === (8))){
var inst_7564 = (state_7620[(13)]);
var inst_7563 = (state_7620[(14)]);
var inst_7566 = (inst_7564 < inst_7563);
var inst_7567 = inst_7566;
var state_7620__$1 = state_7620;
if(cljs.core.truth_(inst_7567)){
var statearr_7659_7693 = state_7620__$1;
(statearr_7659_7693[(1)] = (10));

} else {
var statearr_7660_7694 = state_7620__$1;
(statearr_7660_7694[(1)] = (11));

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
});})(c__6432__auto___7666,mults,ensure_mult,p))
;
return ((function (switch__6342__auto__,c__6432__auto___7666,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_7661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7661[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_7661[(1)] = (1));

return statearr_7661;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_7620){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_7620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7662){if((e7662 instanceof Object)){
var ex__6346__auto__ = e7662;
var statearr_7663_7695 = state_7620;
(statearr_7663_7695[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7696 = state_7620;
state_7620 = G__7696;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_7620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_7620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___7666,mults,ensure_mult,p))
})();
var state__6434__auto__ = (function (){var statearr_7664 = f__6433__auto__.call(null);
(statearr_7664[(6)] = c__6432__auto___7666);

return statearr_7664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___7666,mults,ensure_mult,p))
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
var G__7698 = arguments.length;
switch (G__7698) {
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
var G__7701 = arguments.length;
switch (G__7701) {
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
var G__7704 = arguments.length;
switch (G__7704) {
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
var c__6432__auto___7771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___7771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___7771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_7743){
var state_val_7744 = (state_7743[(1)]);
if((state_val_7744 === (7))){
var state_7743__$1 = state_7743;
var statearr_7745_7772 = state_7743__$1;
(statearr_7745_7772[(2)] = null);

(statearr_7745_7772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (1))){
var state_7743__$1 = state_7743;
var statearr_7746_7773 = state_7743__$1;
(statearr_7746_7773[(2)] = null);

(statearr_7746_7773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (4))){
var inst_7707 = (state_7743[(7)]);
var inst_7709 = (inst_7707 < cnt);
var state_7743__$1 = state_7743;
if(cljs.core.truth_(inst_7709)){
var statearr_7747_7774 = state_7743__$1;
(statearr_7747_7774[(1)] = (6));

} else {
var statearr_7748_7775 = state_7743__$1;
(statearr_7748_7775[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (15))){
var inst_7739 = (state_7743[(2)]);
var state_7743__$1 = state_7743;
var statearr_7749_7776 = state_7743__$1;
(statearr_7749_7776[(2)] = inst_7739);

(statearr_7749_7776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (13))){
var inst_7732 = cljs.core.async.close_BANG_.call(null,out);
var state_7743__$1 = state_7743;
var statearr_7750_7777 = state_7743__$1;
(statearr_7750_7777[(2)] = inst_7732);

(statearr_7750_7777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (6))){
var state_7743__$1 = state_7743;
var statearr_7751_7778 = state_7743__$1;
(statearr_7751_7778[(2)] = null);

(statearr_7751_7778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (3))){
var inst_7741 = (state_7743[(2)]);
var state_7743__$1 = state_7743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7743__$1,inst_7741);
} else {
if((state_val_7744 === (12))){
var inst_7729 = (state_7743[(8)]);
var inst_7729__$1 = (state_7743[(2)]);
var inst_7730 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_7729__$1);
var state_7743__$1 = (function (){var statearr_7752 = state_7743;
(statearr_7752[(8)] = inst_7729__$1);

return statearr_7752;
})();
if(cljs.core.truth_(inst_7730)){
var statearr_7753_7779 = state_7743__$1;
(statearr_7753_7779[(1)] = (13));

} else {
var statearr_7754_7780 = state_7743__$1;
(statearr_7754_7780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (2))){
var inst_7706 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_7707 = (0);
var state_7743__$1 = (function (){var statearr_7755 = state_7743;
(statearr_7755[(9)] = inst_7706);

(statearr_7755[(7)] = inst_7707);

return statearr_7755;
})();
var statearr_7756_7781 = state_7743__$1;
(statearr_7756_7781[(2)] = null);

(statearr_7756_7781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (11))){
var inst_7707 = (state_7743[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_7743,(10),Object,null,(9));
var inst_7716 = chs__$1.call(null,inst_7707);
var inst_7717 = done.call(null,inst_7707);
var inst_7718 = cljs.core.async.take_BANG_.call(null,inst_7716,inst_7717);
var state_7743__$1 = state_7743;
var statearr_7757_7782 = state_7743__$1;
(statearr_7757_7782[(2)] = inst_7718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (9))){
var inst_7707 = (state_7743[(7)]);
var inst_7720 = (state_7743[(2)]);
var inst_7721 = (inst_7707 + (1));
var inst_7707__$1 = inst_7721;
var state_7743__$1 = (function (){var statearr_7758 = state_7743;
(statearr_7758[(10)] = inst_7720);

(statearr_7758[(7)] = inst_7707__$1);

return statearr_7758;
})();
var statearr_7759_7783 = state_7743__$1;
(statearr_7759_7783[(2)] = null);

(statearr_7759_7783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (5))){
var inst_7727 = (state_7743[(2)]);
var state_7743__$1 = (function (){var statearr_7760 = state_7743;
(statearr_7760[(11)] = inst_7727);

return statearr_7760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7743__$1,(12),dchan);
} else {
if((state_val_7744 === (14))){
var inst_7729 = (state_7743[(8)]);
var inst_7734 = cljs.core.apply.call(null,f,inst_7729);
var state_7743__$1 = state_7743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7743__$1,(16),out,inst_7734);
} else {
if((state_val_7744 === (16))){
var inst_7736 = (state_7743[(2)]);
var state_7743__$1 = (function (){var statearr_7761 = state_7743;
(statearr_7761[(12)] = inst_7736);

return statearr_7761;
})();
var statearr_7762_7784 = state_7743__$1;
(statearr_7762_7784[(2)] = null);

(statearr_7762_7784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (10))){
var inst_7711 = (state_7743[(2)]);
var inst_7712 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_7743__$1 = (function (){var statearr_7763 = state_7743;
(statearr_7763[(13)] = inst_7711);

return statearr_7763;
})();
var statearr_7764_7785 = state_7743__$1;
(statearr_7764_7785[(2)] = inst_7712);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7744 === (8))){
var inst_7725 = (state_7743[(2)]);
var state_7743__$1 = state_7743;
var statearr_7765_7786 = state_7743__$1;
(statearr_7765_7786[(2)] = inst_7725);

(statearr_7765_7786[(1)] = (5));


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
});})(c__6432__auto___7771,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6342__auto__,c__6432__auto___7771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_7766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7766[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_7766[(1)] = (1));

return statearr_7766;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_7743){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_7743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7767){if((e7767 instanceof Object)){
var ex__6346__auto__ = e7767;
var statearr_7768_7787 = state_7743;
(statearr_7768_7787[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7788 = state_7743;
state_7743 = G__7788;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_7743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_7743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___7771,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6434__auto__ = (function (){var statearr_7769 = f__6433__auto__.call(null);
(statearr_7769[(6)] = c__6432__auto___7771);

return statearr_7769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___7771,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__7791 = arguments.length;
switch (G__7791) {
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
var c__6432__auto___7845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___7845,out){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___7845,out){
return (function (state_7823){
var state_val_7824 = (state_7823[(1)]);
if((state_val_7824 === (7))){
var inst_7802 = (state_7823[(7)]);
var inst_7803 = (state_7823[(8)]);
var inst_7802__$1 = (state_7823[(2)]);
var inst_7803__$1 = cljs.core.nth.call(null,inst_7802__$1,(0),null);
var inst_7804 = cljs.core.nth.call(null,inst_7802__$1,(1),null);
var inst_7805 = (inst_7803__$1 == null);
var state_7823__$1 = (function (){var statearr_7825 = state_7823;
(statearr_7825[(7)] = inst_7802__$1);

(statearr_7825[(8)] = inst_7803__$1);

(statearr_7825[(9)] = inst_7804);

return statearr_7825;
})();
if(cljs.core.truth_(inst_7805)){
var statearr_7826_7846 = state_7823__$1;
(statearr_7826_7846[(1)] = (8));

} else {
var statearr_7827_7847 = state_7823__$1;
(statearr_7827_7847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7824 === (1))){
var inst_7792 = cljs.core.vec.call(null,chs);
var inst_7793 = inst_7792;
var state_7823__$1 = (function (){var statearr_7828 = state_7823;
(statearr_7828[(10)] = inst_7793);

return statearr_7828;
})();
var statearr_7829_7848 = state_7823__$1;
(statearr_7829_7848[(2)] = null);

(statearr_7829_7848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7824 === (4))){
var inst_7793 = (state_7823[(10)]);
var state_7823__$1 = state_7823;
return cljs.core.async.ioc_alts_BANG_.call(null,state_7823__$1,(7),inst_7793);
} else {
if((state_val_7824 === (6))){
var inst_7819 = (state_7823[(2)]);
var state_7823__$1 = state_7823;
var statearr_7830_7849 = state_7823__$1;
(statearr_7830_7849[(2)] = inst_7819);

(statearr_7830_7849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7824 === (3))){
var inst_7821 = (state_7823[(2)]);
var state_7823__$1 = state_7823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7823__$1,inst_7821);
} else {
if((state_val_7824 === (2))){
var inst_7793 = (state_7823[(10)]);
var inst_7795 = cljs.core.count.call(null,inst_7793);
var inst_7796 = (inst_7795 > (0));
var state_7823__$1 = state_7823;
if(cljs.core.truth_(inst_7796)){
var statearr_7832_7850 = state_7823__$1;
(statearr_7832_7850[(1)] = (4));

} else {
var statearr_7833_7851 = state_7823__$1;
(statearr_7833_7851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7824 === (11))){
var inst_7793 = (state_7823[(10)]);
var inst_7812 = (state_7823[(2)]);
var tmp7831 = inst_7793;
var inst_7793__$1 = tmp7831;
var state_7823__$1 = (function (){var statearr_7834 = state_7823;
(statearr_7834[(10)] = inst_7793__$1);

(statearr_7834[(11)] = inst_7812);

return statearr_7834;
})();
var statearr_7835_7852 = state_7823__$1;
(statearr_7835_7852[(2)] = null);

(statearr_7835_7852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7824 === (9))){
var inst_7803 = (state_7823[(8)]);
var state_7823__$1 = state_7823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7823__$1,(11),out,inst_7803);
} else {
if((state_val_7824 === (5))){
var inst_7817 = cljs.core.async.close_BANG_.call(null,out);
var state_7823__$1 = state_7823;
var statearr_7836_7853 = state_7823__$1;
(statearr_7836_7853[(2)] = inst_7817);

(statearr_7836_7853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7824 === (10))){
var inst_7815 = (state_7823[(2)]);
var state_7823__$1 = state_7823;
var statearr_7837_7854 = state_7823__$1;
(statearr_7837_7854[(2)] = inst_7815);

(statearr_7837_7854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7824 === (8))){
var inst_7802 = (state_7823[(7)]);
var inst_7793 = (state_7823[(10)]);
var inst_7803 = (state_7823[(8)]);
var inst_7804 = (state_7823[(9)]);
var inst_7807 = (function (){var cs = inst_7793;
var vec__7798 = inst_7802;
var v = inst_7803;
var c = inst_7804;
return ((function (cs,vec__7798,v,c,inst_7802,inst_7793,inst_7803,inst_7804,state_val_7824,c__6432__auto___7845,out){
return (function (p1__7789_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__7789_SHARP_);
});
;})(cs,vec__7798,v,c,inst_7802,inst_7793,inst_7803,inst_7804,state_val_7824,c__6432__auto___7845,out))
})();
var inst_7808 = cljs.core.filterv.call(null,inst_7807,inst_7793);
var inst_7793__$1 = inst_7808;
var state_7823__$1 = (function (){var statearr_7838 = state_7823;
(statearr_7838[(10)] = inst_7793__$1);

return statearr_7838;
})();
var statearr_7839_7855 = state_7823__$1;
(statearr_7839_7855[(2)] = null);

(statearr_7839_7855[(1)] = (2));


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
});})(c__6432__auto___7845,out))
;
return ((function (switch__6342__auto__,c__6432__auto___7845,out){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_7840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7840[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_7840[(1)] = (1));

return statearr_7840;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_7823){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_7823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7841){if((e7841 instanceof Object)){
var ex__6346__auto__ = e7841;
var statearr_7842_7856 = state_7823;
(statearr_7842_7856[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7857 = state_7823;
state_7823 = G__7857;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_7823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_7823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___7845,out))
})();
var state__6434__auto__ = (function (){var statearr_7843 = f__6433__auto__.call(null);
(statearr_7843[(6)] = c__6432__auto___7845);

return statearr_7843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___7845,out))
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
var G__7859 = arguments.length;
switch (G__7859) {
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
var c__6432__auto___7904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___7904,out){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___7904,out){
return (function (state_7883){
var state_val_7884 = (state_7883[(1)]);
if((state_val_7884 === (7))){
var inst_7865 = (state_7883[(7)]);
var inst_7865__$1 = (state_7883[(2)]);
var inst_7866 = (inst_7865__$1 == null);
var inst_7867 = cljs.core.not.call(null,inst_7866);
var state_7883__$1 = (function (){var statearr_7885 = state_7883;
(statearr_7885[(7)] = inst_7865__$1);

return statearr_7885;
})();
if(inst_7867){
var statearr_7886_7905 = state_7883__$1;
(statearr_7886_7905[(1)] = (8));

} else {
var statearr_7887_7906 = state_7883__$1;
(statearr_7887_7906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (1))){
var inst_7860 = (0);
var state_7883__$1 = (function (){var statearr_7888 = state_7883;
(statearr_7888[(8)] = inst_7860);

return statearr_7888;
})();
var statearr_7889_7907 = state_7883__$1;
(statearr_7889_7907[(2)] = null);

(statearr_7889_7907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (4))){
var state_7883__$1 = state_7883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7883__$1,(7),ch);
} else {
if((state_val_7884 === (6))){
var inst_7878 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7890_7908 = state_7883__$1;
(statearr_7890_7908[(2)] = inst_7878);

(statearr_7890_7908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (3))){
var inst_7880 = (state_7883[(2)]);
var inst_7881 = cljs.core.async.close_BANG_.call(null,out);
var state_7883__$1 = (function (){var statearr_7891 = state_7883;
(statearr_7891[(9)] = inst_7880);

return statearr_7891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7883__$1,inst_7881);
} else {
if((state_val_7884 === (2))){
var inst_7860 = (state_7883[(8)]);
var inst_7862 = (inst_7860 < n);
var state_7883__$1 = state_7883;
if(cljs.core.truth_(inst_7862)){
var statearr_7892_7909 = state_7883__$1;
(statearr_7892_7909[(1)] = (4));

} else {
var statearr_7893_7910 = state_7883__$1;
(statearr_7893_7910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (11))){
var inst_7860 = (state_7883[(8)]);
var inst_7870 = (state_7883[(2)]);
var inst_7871 = (inst_7860 + (1));
var inst_7860__$1 = inst_7871;
var state_7883__$1 = (function (){var statearr_7894 = state_7883;
(statearr_7894[(8)] = inst_7860__$1);

(statearr_7894[(10)] = inst_7870);

return statearr_7894;
})();
var statearr_7895_7911 = state_7883__$1;
(statearr_7895_7911[(2)] = null);

(statearr_7895_7911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (9))){
var state_7883__$1 = state_7883;
var statearr_7896_7912 = state_7883__$1;
(statearr_7896_7912[(2)] = null);

(statearr_7896_7912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (5))){
var state_7883__$1 = state_7883;
var statearr_7897_7913 = state_7883__$1;
(statearr_7897_7913[(2)] = null);

(statearr_7897_7913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (10))){
var inst_7875 = (state_7883[(2)]);
var state_7883__$1 = state_7883;
var statearr_7898_7914 = state_7883__$1;
(statearr_7898_7914[(2)] = inst_7875);

(statearr_7898_7914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7884 === (8))){
var inst_7865 = (state_7883[(7)]);
var state_7883__$1 = state_7883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7883__$1,(11),out,inst_7865);
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
});})(c__6432__auto___7904,out))
;
return ((function (switch__6342__auto__,c__6432__auto___7904,out){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_7899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7899[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_7899[(1)] = (1));

return statearr_7899;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_7883){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_7883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7900){if((e7900 instanceof Object)){
var ex__6346__auto__ = e7900;
var statearr_7901_7915 = state_7883;
(statearr_7901_7915[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7916 = state_7883;
state_7883 = G__7916;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_7883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_7883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___7904,out))
})();
var state__6434__auto__ = (function (){var statearr_7902 = f__6433__auto__.call(null);
(statearr_7902[(6)] = c__6432__auto___7904);

return statearr_7902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___7904,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async7918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7918 = (function (f,ch,meta7919){
this.f = f;
this.ch = ch;
this.meta7919 = meta7919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7920,meta7919__$1){
var self__ = this;
var _7920__$1 = this;
return (new cljs.core.async.t_cljs$core$async7918(self__.f,self__.ch,meta7919__$1));
});

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7920){
var self__ = this;
var _7920__$1 = this;
return self__.meta7919;
});

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async7921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7921 = (function (f,ch,meta7919,_,fn1,meta7922){
this.f = f;
this.ch = ch;
this.meta7919 = meta7919;
this._ = _;
this.fn1 = fn1;
this.meta7922 = meta7922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_7923,meta7922__$1){
var self__ = this;
var _7923__$1 = this;
return (new cljs.core.async.t_cljs$core$async7921(self__.f,self__.ch,self__.meta7919,self__._,self__.fn1,meta7922__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async7921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_7923){
var self__ = this;
var _7923__$1 = this;
return self__.meta7922;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7921.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__7917_SHARP_){
return f1.call(null,(((p1__7917_SHARP_ == null))?null:self__.f.call(null,p1__7917_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async7921.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7919","meta7919",-834234392,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async7918","cljs.core.async/t_cljs$core$async7918",2042195770,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta7922","meta7922",-2117150193,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7921";

cljs.core.async.t_cljs$core$async7921.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7921");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7921.
 */
cljs.core.async.__GT_t_cljs$core$async7921 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7921(f__$1,ch__$1,meta7919__$1,___$2,fn1__$1,meta7922){
return (new cljs.core.async.t_cljs$core$async7921(f__$1,ch__$1,meta7919__$1,___$2,fn1__$1,meta7922));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async7921(self__.f,self__.ch,self__.meta7919,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async7918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7919","meta7919",-834234392,null)], null);
});

cljs.core.async.t_cljs$core$async7918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7918";

cljs.core.async.t_cljs$core$async7918.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7918");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7918.
 */
cljs.core.async.__GT_t_cljs$core$async7918 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7918(f__$1,ch__$1,meta7919){
return (new cljs.core.async.t_cljs$core$async7918(f__$1,ch__$1,meta7919));
});

}

return (new cljs.core.async.t_cljs$core$async7918(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async7924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7924 = (function (f,ch,meta7925){
this.f = f;
this.ch = ch;
this.meta7925 = meta7925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7926,meta7925__$1){
var self__ = this;
var _7926__$1 = this;
return (new cljs.core.async.t_cljs$core$async7924(self__.f,self__.ch,meta7925__$1));
});

cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7926){
var self__ = this;
var _7926__$1 = this;
return self__.meta7925;
});

cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async7924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7925","meta7925",136706596,null)], null);
});

cljs.core.async.t_cljs$core$async7924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7924";

cljs.core.async.t_cljs$core$async7924.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7924");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7924.
 */
cljs.core.async.__GT_t_cljs$core$async7924 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async7924(f__$1,ch__$1,meta7925){
return (new cljs.core.async.t_cljs$core$async7924(f__$1,ch__$1,meta7925));
});

}

return (new cljs.core.async.t_cljs$core$async7924(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async7927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7927 = (function (p,ch,meta7928){
this.p = p;
this.ch = ch;
this.meta7928 = meta7928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7929,meta7928__$1){
var self__ = this;
var _7929__$1 = this;
return (new cljs.core.async.t_cljs$core$async7927(self__.p,self__.ch,meta7928__$1));
});

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7929){
var self__ = this;
var _7929__$1 = this;
return self__.meta7928;
});

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async7927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7928","meta7928",-417211542,null)], null);
});

cljs.core.async.t_cljs$core$async7927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7927";

cljs.core.async.t_cljs$core$async7927.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7927");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7927.
 */
cljs.core.async.__GT_t_cljs$core$async7927 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async7927(p__$1,ch__$1,meta7928){
return (new cljs.core.async.t_cljs$core$async7927(p__$1,ch__$1,meta7928));
});

}

return (new cljs.core.async.t_cljs$core$async7927(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__7931 = arguments.length;
switch (G__7931) {
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
var c__6432__auto___7971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___7971,out){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___7971,out){
return (function (state_7952){
var state_val_7953 = (state_7952[(1)]);
if((state_val_7953 === (7))){
var inst_7948 = (state_7952[(2)]);
var state_7952__$1 = state_7952;
var statearr_7954_7972 = state_7952__$1;
(statearr_7954_7972[(2)] = inst_7948);

(statearr_7954_7972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (1))){
var state_7952__$1 = state_7952;
var statearr_7955_7973 = state_7952__$1;
(statearr_7955_7973[(2)] = null);

(statearr_7955_7973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (4))){
var inst_7934 = (state_7952[(7)]);
var inst_7934__$1 = (state_7952[(2)]);
var inst_7935 = (inst_7934__$1 == null);
var state_7952__$1 = (function (){var statearr_7956 = state_7952;
(statearr_7956[(7)] = inst_7934__$1);

return statearr_7956;
})();
if(cljs.core.truth_(inst_7935)){
var statearr_7957_7974 = state_7952__$1;
(statearr_7957_7974[(1)] = (5));

} else {
var statearr_7958_7975 = state_7952__$1;
(statearr_7958_7975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (6))){
var inst_7934 = (state_7952[(7)]);
var inst_7939 = p.call(null,inst_7934);
var state_7952__$1 = state_7952;
if(cljs.core.truth_(inst_7939)){
var statearr_7959_7976 = state_7952__$1;
(statearr_7959_7976[(1)] = (8));

} else {
var statearr_7960_7977 = state_7952__$1;
(statearr_7960_7977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (3))){
var inst_7950 = (state_7952[(2)]);
var state_7952__$1 = state_7952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7952__$1,inst_7950);
} else {
if((state_val_7953 === (2))){
var state_7952__$1 = state_7952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7952__$1,(4),ch);
} else {
if((state_val_7953 === (11))){
var inst_7942 = (state_7952[(2)]);
var state_7952__$1 = state_7952;
var statearr_7961_7978 = state_7952__$1;
(statearr_7961_7978[(2)] = inst_7942);

(statearr_7961_7978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (9))){
var state_7952__$1 = state_7952;
var statearr_7962_7979 = state_7952__$1;
(statearr_7962_7979[(2)] = null);

(statearr_7962_7979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (5))){
var inst_7937 = cljs.core.async.close_BANG_.call(null,out);
var state_7952__$1 = state_7952;
var statearr_7963_7980 = state_7952__$1;
(statearr_7963_7980[(2)] = inst_7937);

(statearr_7963_7980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (10))){
var inst_7945 = (state_7952[(2)]);
var state_7952__$1 = (function (){var statearr_7964 = state_7952;
(statearr_7964[(8)] = inst_7945);

return statearr_7964;
})();
var statearr_7965_7981 = state_7952__$1;
(statearr_7965_7981[(2)] = null);

(statearr_7965_7981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7953 === (8))){
var inst_7934 = (state_7952[(7)]);
var state_7952__$1 = state_7952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7952__$1,(11),out,inst_7934);
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
});})(c__6432__auto___7971,out))
;
return ((function (switch__6342__auto__,c__6432__auto___7971,out){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_7966 = [null,null,null,null,null,null,null,null,null];
(statearr_7966[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_7966[(1)] = (1));

return statearr_7966;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_7952){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_7952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e7967){if((e7967 instanceof Object)){
var ex__6346__auto__ = e7967;
var statearr_7968_7982 = state_7952;
(statearr_7968_7982[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7983 = state_7952;
state_7952 = G__7983;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_7952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_7952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___7971,out))
})();
var state__6434__auto__ = (function (){var statearr_7969 = f__6433__auto__.call(null);
(statearr_7969[(6)] = c__6432__auto___7971);

return statearr_7969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___7971,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__7985 = arguments.length;
switch (G__7985) {
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
var c__6432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto__){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto__){
return (function (state_8048){
var state_val_8049 = (state_8048[(1)]);
if((state_val_8049 === (7))){
var inst_8044 = (state_8048[(2)]);
var state_8048__$1 = state_8048;
var statearr_8050_8088 = state_8048__$1;
(statearr_8050_8088[(2)] = inst_8044);

(statearr_8050_8088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (20))){
var inst_8014 = (state_8048[(7)]);
var inst_8025 = (state_8048[(2)]);
var inst_8026 = cljs.core.next.call(null,inst_8014);
var inst_8000 = inst_8026;
var inst_8001 = null;
var inst_8002 = (0);
var inst_8003 = (0);
var state_8048__$1 = (function (){var statearr_8051 = state_8048;
(statearr_8051[(8)] = inst_8000);

(statearr_8051[(9)] = inst_8001);

(statearr_8051[(10)] = inst_8003);

(statearr_8051[(11)] = inst_8002);

(statearr_8051[(12)] = inst_8025);

return statearr_8051;
})();
var statearr_8052_8089 = state_8048__$1;
(statearr_8052_8089[(2)] = null);

(statearr_8052_8089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (1))){
var state_8048__$1 = state_8048;
var statearr_8053_8090 = state_8048__$1;
(statearr_8053_8090[(2)] = null);

(statearr_8053_8090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (4))){
var inst_7989 = (state_8048[(13)]);
var inst_7989__$1 = (state_8048[(2)]);
var inst_7990 = (inst_7989__$1 == null);
var state_8048__$1 = (function (){var statearr_8054 = state_8048;
(statearr_8054[(13)] = inst_7989__$1);

return statearr_8054;
})();
if(cljs.core.truth_(inst_7990)){
var statearr_8055_8091 = state_8048__$1;
(statearr_8055_8091[(1)] = (5));

} else {
var statearr_8056_8092 = state_8048__$1;
(statearr_8056_8092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (15))){
var state_8048__$1 = state_8048;
var statearr_8060_8093 = state_8048__$1;
(statearr_8060_8093[(2)] = null);

(statearr_8060_8093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (21))){
var state_8048__$1 = state_8048;
var statearr_8061_8094 = state_8048__$1;
(statearr_8061_8094[(2)] = null);

(statearr_8061_8094[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (13))){
var inst_8000 = (state_8048[(8)]);
var inst_8001 = (state_8048[(9)]);
var inst_8003 = (state_8048[(10)]);
var inst_8002 = (state_8048[(11)]);
var inst_8010 = (state_8048[(2)]);
var inst_8011 = (inst_8003 + (1));
var tmp8057 = inst_8000;
var tmp8058 = inst_8001;
var tmp8059 = inst_8002;
var inst_8000__$1 = tmp8057;
var inst_8001__$1 = tmp8058;
var inst_8002__$1 = tmp8059;
var inst_8003__$1 = inst_8011;
var state_8048__$1 = (function (){var statearr_8062 = state_8048;
(statearr_8062[(8)] = inst_8000__$1);

(statearr_8062[(9)] = inst_8001__$1);

(statearr_8062[(14)] = inst_8010);

(statearr_8062[(10)] = inst_8003__$1);

(statearr_8062[(11)] = inst_8002__$1);

return statearr_8062;
})();
var statearr_8063_8095 = state_8048__$1;
(statearr_8063_8095[(2)] = null);

(statearr_8063_8095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (22))){
var state_8048__$1 = state_8048;
var statearr_8064_8096 = state_8048__$1;
(statearr_8064_8096[(2)] = null);

(statearr_8064_8096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (6))){
var inst_7989 = (state_8048[(13)]);
var inst_7998 = f.call(null,inst_7989);
var inst_7999 = cljs.core.seq.call(null,inst_7998);
var inst_8000 = inst_7999;
var inst_8001 = null;
var inst_8002 = (0);
var inst_8003 = (0);
var state_8048__$1 = (function (){var statearr_8065 = state_8048;
(statearr_8065[(8)] = inst_8000);

(statearr_8065[(9)] = inst_8001);

(statearr_8065[(10)] = inst_8003);

(statearr_8065[(11)] = inst_8002);

return statearr_8065;
})();
var statearr_8066_8097 = state_8048__$1;
(statearr_8066_8097[(2)] = null);

(statearr_8066_8097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (17))){
var inst_8014 = (state_8048[(7)]);
var inst_8018 = cljs.core.chunk_first.call(null,inst_8014);
var inst_8019 = cljs.core.chunk_rest.call(null,inst_8014);
var inst_8020 = cljs.core.count.call(null,inst_8018);
var inst_8000 = inst_8019;
var inst_8001 = inst_8018;
var inst_8002 = inst_8020;
var inst_8003 = (0);
var state_8048__$1 = (function (){var statearr_8067 = state_8048;
(statearr_8067[(8)] = inst_8000);

(statearr_8067[(9)] = inst_8001);

(statearr_8067[(10)] = inst_8003);

(statearr_8067[(11)] = inst_8002);

return statearr_8067;
})();
var statearr_8068_8098 = state_8048__$1;
(statearr_8068_8098[(2)] = null);

(statearr_8068_8098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (3))){
var inst_8046 = (state_8048[(2)]);
var state_8048__$1 = state_8048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8048__$1,inst_8046);
} else {
if((state_val_8049 === (12))){
var inst_8034 = (state_8048[(2)]);
var state_8048__$1 = state_8048;
var statearr_8069_8099 = state_8048__$1;
(statearr_8069_8099[(2)] = inst_8034);

(statearr_8069_8099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (2))){
var state_8048__$1 = state_8048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8048__$1,(4),in$);
} else {
if((state_val_8049 === (23))){
var inst_8042 = (state_8048[(2)]);
var state_8048__$1 = state_8048;
var statearr_8070_8100 = state_8048__$1;
(statearr_8070_8100[(2)] = inst_8042);

(statearr_8070_8100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (19))){
var inst_8029 = (state_8048[(2)]);
var state_8048__$1 = state_8048;
var statearr_8071_8101 = state_8048__$1;
(statearr_8071_8101[(2)] = inst_8029);

(statearr_8071_8101[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (11))){
var inst_8000 = (state_8048[(8)]);
var inst_8014 = (state_8048[(7)]);
var inst_8014__$1 = cljs.core.seq.call(null,inst_8000);
var state_8048__$1 = (function (){var statearr_8072 = state_8048;
(statearr_8072[(7)] = inst_8014__$1);

return statearr_8072;
})();
if(inst_8014__$1){
var statearr_8073_8102 = state_8048__$1;
(statearr_8073_8102[(1)] = (14));

} else {
var statearr_8074_8103 = state_8048__$1;
(statearr_8074_8103[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (9))){
var inst_8036 = (state_8048[(2)]);
var inst_8037 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8048__$1 = (function (){var statearr_8075 = state_8048;
(statearr_8075[(15)] = inst_8036);

return statearr_8075;
})();
if(cljs.core.truth_(inst_8037)){
var statearr_8076_8104 = state_8048__$1;
(statearr_8076_8104[(1)] = (21));

} else {
var statearr_8077_8105 = state_8048__$1;
(statearr_8077_8105[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (5))){
var inst_7992 = cljs.core.async.close_BANG_.call(null,out);
var state_8048__$1 = state_8048;
var statearr_8078_8106 = state_8048__$1;
(statearr_8078_8106[(2)] = inst_7992);

(statearr_8078_8106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (14))){
var inst_8014 = (state_8048[(7)]);
var inst_8016 = cljs.core.chunked_seq_QMARK_.call(null,inst_8014);
var state_8048__$1 = state_8048;
if(inst_8016){
var statearr_8079_8107 = state_8048__$1;
(statearr_8079_8107[(1)] = (17));

} else {
var statearr_8080_8108 = state_8048__$1;
(statearr_8080_8108[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (16))){
var inst_8032 = (state_8048[(2)]);
var state_8048__$1 = state_8048;
var statearr_8081_8109 = state_8048__$1;
(statearr_8081_8109[(2)] = inst_8032);

(statearr_8081_8109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8049 === (10))){
var inst_8001 = (state_8048[(9)]);
var inst_8003 = (state_8048[(10)]);
var inst_8008 = cljs.core._nth.call(null,inst_8001,inst_8003);
var state_8048__$1 = state_8048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8048__$1,(13),out,inst_8008);
} else {
if((state_val_8049 === (18))){
var inst_8014 = (state_8048[(7)]);
var inst_8023 = cljs.core.first.call(null,inst_8014);
var state_8048__$1 = state_8048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8048__$1,(20),out,inst_8023);
} else {
if((state_val_8049 === (8))){
var inst_8003 = (state_8048[(10)]);
var inst_8002 = (state_8048[(11)]);
var inst_8005 = (inst_8003 < inst_8002);
var inst_8006 = inst_8005;
var state_8048__$1 = state_8048;
if(cljs.core.truth_(inst_8006)){
var statearr_8082_8110 = state_8048__$1;
(statearr_8082_8110[(1)] = (10));

} else {
var statearr_8083_8111 = state_8048__$1;
(statearr_8083_8111[(1)] = (11));

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
});})(c__6432__auto__))
;
return ((function (switch__6342__auto__,c__6432__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6343__auto____0 = (function (){
var statearr_8084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8084[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6343__auto__);

(statearr_8084[(1)] = (1));

return statearr_8084;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6343__auto____1 = (function (state_8048){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_8048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e8085){if((e8085 instanceof Object)){
var ex__6346__auto__ = e8085;
var statearr_8086_8112 = state_8048;
(statearr_8086_8112[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8113 = state_8048;
state_8048 = G__8113;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6343__auto__ = function(state_8048){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6343__auto____1.call(this,state_8048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto__))
})();
var state__6434__auto__ = (function (){var statearr_8087 = f__6433__auto__.call(null);
(statearr_8087[(6)] = c__6432__auto__);

return statearr_8087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto__))
);

return c__6432__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8115 = arguments.length;
switch (G__8115) {
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
var G__8118 = arguments.length;
switch (G__8118) {
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
var G__8121 = arguments.length;
switch (G__8121) {
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
var c__6432__auto___8168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___8168,out){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___8168,out){
return (function (state_8145){
var state_val_8146 = (state_8145[(1)]);
if((state_val_8146 === (7))){
var inst_8140 = (state_8145[(2)]);
var state_8145__$1 = state_8145;
var statearr_8147_8169 = state_8145__$1;
(statearr_8147_8169[(2)] = inst_8140);

(statearr_8147_8169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8146 === (1))){
var inst_8122 = null;
var state_8145__$1 = (function (){var statearr_8148 = state_8145;
(statearr_8148[(7)] = inst_8122);

return statearr_8148;
})();
var statearr_8149_8170 = state_8145__$1;
(statearr_8149_8170[(2)] = null);

(statearr_8149_8170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8146 === (4))){
var inst_8125 = (state_8145[(8)]);
var inst_8125__$1 = (state_8145[(2)]);
var inst_8126 = (inst_8125__$1 == null);
var inst_8127 = cljs.core.not.call(null,inst_8126);
var state_8145__$1 = (function (){var statearr_8150 = state_8145;
(statearr_8150[(8)] = inst_8125__$1);

return statearr_8150;
})();
if(inst_8127){
var statearr_8151_8171 = state_8145__$1;
(statearr_8151_8171[(1)] = (5));

} else {
var statearr_8152_8172 = state_8145__$1;
(statearr_8152_8172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8146 === (6))){
var state_8145__$1 = state_8145;
var statearr_8153_8173 = state_8145__$1;
(statearr_8153_8173[(2)] = null);

(statearr_8153_8173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8146 === (3))){
var inst_8142 = (state_8145[(2)]);
var inst_8143 = cljs.core.async.close_BANG_.call(null,out);
var state_8145__$1 = (function (){var statearr_8154 = state_8145;
(statearr_8154[(9)] = inst_8142);

return statearr_8154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8145__$1,inst_8143);
} else {
if((state_val_8146 === (2))){
var state_8145__$1 = state_8145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8145__$1,(4),ch);
} else {
if((state_val_8146 === (11))){
var inst_8125 = (state_8145[(8)]);
var inst_8134 = (state_8145[(2)]);
var inst_8122 = inst_8125;
var state_8145__$1 = (function (){var statearr_8155 = state_8145;
(statearr_8155[(10)] = inst_8134);

(statearr_8155[(7)] = inst_8122);

return statearr_8155;
})();
var statearr_8156_8174 = state_8145__$1;
(statearr_8156_8174[(2)] = null);

(statearr_8156_8174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8146 === (9))){
var inst_8125 = (state_8145[(8)]);
var state_8145__$1 = state_8145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8145__$1,(11),out,inst_8125);
} else {
if((state_val_8146 === (5))){
var inst_8125 = (state_8145[(8)]);
var inst_8122 = (state_8145[(7)]);
var inst_8129 = cljs.core._EQ_.call(null,inst_8125,inst_8122);
var state_8145__$1 = state_8145;
if(inst_8129){
var statearr_8158_8175 = state_8145__$1;
(statearr_8158_8175[(1)] = (8));

} else {
var statearr_8159_8176 = state_8145__$1;
(statearr_8159_8176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8146 === (10))){
var inst_8137 = (state_8145[(2)]);
var state_8145__$1 = state_8145;
var statearr_8160_8177 = state_8145__$1;
(statearr_8160_8177[(2)] = inst_8137);

(statearr_8160_8177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8146 === (8))){
var inst_8122 = (state_8145[(7)]);
var tmp8157 = inst_8122;
var inst_8122__$1 = tmp8157;
var state_8145__$1 = (function (){var statearr_8161 = state_8145;
(statearr_8161[(7)] = inst_8122__$1);

return statearr_8161;
})();
var statearr_8162_8178 = state_8145__$1;
(statearr_8162_8178[(2)] = null);

(statearr_8162_8178[(1)] = (2));


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
});})(c__6432__auto___8168,out))
;
return ((function (switch__6342__auto__,c__6432__auto___8168,out){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_8163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8163[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_8163[(1)] = (1));

return statearr_8163;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_8145){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_8145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e8164){if((e8164 instanceof Object)){
var ex__6346__auto__ = e8164;
var statearr_8165_8179 = state_8145;
(statearr_8165_8179[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8180 = state_8145;
state_8145 = G__8180;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_8145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_8145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___8168,out))
})();
var state__6434__auto__ = (function (){var statearr_8166 = f__6433__auto__.call(null);
(statearr_8166[(6)] = c__6432__auto___8168);

return statearr_8166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___8168,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8182 = arguments.length;
switch (G__8182) {
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
var c__6432__auto___8248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___8248,out){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___8248,out){
return (function (state_8220){
var state_val_8221 = (state_8220[(1)]);
if((state_val_8221 === (7))){
var inst_8216 = (state_8220[(2)]);
var state_8220__$1 = state_8220;
var statearr_8222_8249 = state_8220__$1;
(statearr_8222_8249[(2)] = inst_8216);

(statearr_8222_8249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (1))){
var inst_8183 = (new Array(n));
var inst_8184 = inst_8183;
var inst_8185 = (0);
var state_8220__$1 = (function (){var statearr_8223 = state_8220;
(statearr_8223[(7)] = inst_8184);

(statearr_8223[(8)] = inst_8185);

return statearr_8223;
})();
var statearr_8224_8250 = state_8220__$1;
(statearr_8224_8250[(2)] = null);

(statearr_8224_8250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (4))){
var inst_8188 = (state_8220[(9)]);
var inst_8188__$1 = (state_8220[(2)]);
var inst_8189 = (inst_8188__$1 == null);
var inst_8190 = cljs.core.not.call(null,inst_8189);
var state_8220__$1 = (function (){var statearr_8225 = state_8220;
(statearr_8225[(9)] = inst_8188__$1);

return statearr_8225;
})();
if(inst_8190){
var statearr_8226_8251 = state_8220__$1;
(statearr_8226_8251[(1)] = (5));

} else {
var statearr_8227_8252 = state_8220__$1;
(statearr_8227_8252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (15))){
var inst_8210 = (state_8220[(2)]);
var state_8220__$1 = state_8220;
var statearr_8228_8253 = state_8220__$1;
(statearr_8228_8253[(2)] = inst_8210);

(statearr_8228_8253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (13))){
var state_8220__$1 = state_8220;
var statearr_8229_8254 = state_8220__$1;
(statearr_8229_8254[(2)] = null);

(statearr_8229_8254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (6))){
var inst_8185 = (state_8220[(8)]);
var inst_8206 = (inst_8185 > (0));
var state_8220__$1 = state_8220;
if(cljs.core.truth_(inst_8206)){
var statearr_8230_8255 = state_8220__$1;
(statearr_8230_8255[(1)] = (12));

} else {
var statearr_8231_8256 = state_8220__$1;
(statearr_8231_8256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (3))){
var inst_8218 = (state_8220[(2)]);
var state_8220__$1 = state_8220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8220__$1,inst_8218);
} else {
if((state_val_8221 === (12))){
var inst_8184 = (state_8220[(7)]);
var inst_8208 = cljs.core.vec.call(null,inst_8184);
var state_8220__$1 = state_8220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8220__$1,(15),out,inst_8208);
} else {
if((state_val_8221 === (2))){
var state_8220__$1 = state_8220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8220__$1,(4),ch);
} else {
if((state_val_8221 === (11))){
var inst_8200 = (state_8220[(2)]);
var inst_8201 = (new Array(n));
var inst_8184 = inst_8201;
var inst_8185 = (0);
var state_8220__$1 = (function (){var statearr_8232 = state_8220;
(statearr_8232[(10)] = inst_8200);

(statearr_8232[(7)] = inst_8184);

(statearr_8232[(8)] = inst_8185);

return statearr_8232;
})();
var statearr_8233_8257 = state_8220__$1;
(statearr_8233_8257[(2)] = null);

(statearr_8233_8257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (9))){
var inst_8184 = (state_8220[(7)]);
var inst_8198 = cljs.core.vec.call(null,inst_8184);
var state_8220__$1 = state_8220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8220__$1,(11),out,inst_8198);
} else {
if((state_val_8221 === (5))){
var inst_8188 = (state_8220[(9)]);
var inst_8184 = (state_8220[(7)]);
var inst_8185 = (state_8220[(8)]);
var inst_8193 = (state_8220[(11)]);
var inst_8192 = (inst_8184[inst_8185] = inst_8188);
var inst_8193__$1 = (inst_8185 + (1));
var inst_8194 = (inst_8193__$1 < n);
var state_8220__$1 = (function (){var statearr_8234 = state_8220;
(statearr_8234[(12)] = inst_8192);

(statearr_8234[(11)] = inst_8193__$1);

return statearr_8234;
})();
if(cljs.core.truth_(inst_8194)){
var statearr_8235_8258 = state_8220__$1;
(statearr_8235_8258[(1)] = (8));

} else {
var statearr_8236_8259 = state_8220__$1;
(statearr_8236_8259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (14))){
var inst_8213 = (state_8220[(2)]);
var inst_8214 = cljs.core.async.close_BANG_.call(null,out);
var state_8220__$1 = (function (){var statearr_8238 = state_8220;
(statearr_8238[(13)] = inst_8213);

return statearr_8238;
})();
var statearr_8239_8260 = state_8220__$1;
(statearr_8239_8260[(2)] = inst_8214);

(statearr_8239_8260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (10))){
var inst_8204 = (state_8220[(2)]);
var state_8220__$1 = state_8220;
var statearr_8240_8261 = state_8220__$1;
(statearr_8240_8261[(2)] = inst_8204);

(statearr_8240_8261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8221 === (8))){
var inst_8184 = (state_8220[(7)]);
var inst_8193 = (state_8220[(11)]);
var tmp8237 = inst_8184;
var inst_8184__$1 = tmp8237;
var inst_8185 = inst_8193;
var state_8220__$1 = (function (){var statearr_8241 = state_8220;
(statearr_8241[(7)] = inst_8184__$1);

(statearr_8241[(8)] = inst_8185);

return statearr_8241;
})();
var statearr_8242_8262 = state_8220__$1;
(statearr_8242_8262[(2)] = null);

(statearr_8242_8262[(1)] = (2));


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
});})(c__6432__auto___8248,out))
;
return ((function (switch__6342__auto__,c__6432__auto___8248,out){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_8243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8243[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_8243[(1)] = (1));

return statearr_8243;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_8220){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_8220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e8244){if((e8244 instanceof Object)){
var ex__6346__auto__ = e8244;
var statearr_8245_8263 = state_8220;
(statearr_8245_8263[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8264 = state_8220;
state_8220 = G__8264;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_8220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_8220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___8248,out))
})();
var state__6434__auto__ = (function (){var statearr_8246 = f__6433__auto__.call(null);
(statearr_8246[(6)] = c__6432__auto___8248);

return statearr_8246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___8248,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8266 = arguments.length;
switch (G__8266) {
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
var c__6432__auto___8336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6432__auto___8336,out){
return (function (){
var f__6433__auto__ = (function (){var switch__6342__auto__ = ((function (c__6432__auto___8336,out){
return (function (state_8308){
var state_val_8309 = (state_8308[(1)]);
if((state_val_8309 === (7))){
var inst_8304 = (state_8308[(2)]);
var state_8308__$1 = state_8308;
var statearr_8310_8337 = state_8308__$1;
(statearr_8310_8337[(2)] = inst_8304);

(statearr_8310_8337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (1))){
var inst_8267 = [];
var inst_8268 = inst_8267;
var inst_8269 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8308__$1 = (function (){var statearr_8311 = state_8308;
(statearr_8311[(7)] = inst_8269);

(statearr_8311[(8)] = inst_8268);

return statearr_8311;
})();
var statearr_8312_8338 = state_8308__$1;
(statearr_8312_8338[(2)] = null);

(statearr_8312_8338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (4))){
var inst_8272 = (state_8308[(9)]);
var inst_8272__$1 = (state_8308[(2)]);
var inst_8273 = (inst_8272__$1 == null);
var inst_8274 = cljs.core.not.call(null,inst_8273);
var state_8308__$1 = (function (){var statearr_8313 = state_8308;
(statearr_8313[(9)] = inst_8272__$1);

return statearr_8313;
})();
if(inst_8274){
var statearr_8314_8339 = state_8308__$1;
(statearr_8314_8339[(1)] = (5));

} else {
var statearr_8315_8340 = state_8308__$1;
(statearr_8315_8340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (15))){
var inst_8298 = (state_8308[(2)]);
var state_8308__$1 = state_8308;
var statearr_8316_8341 = state_8308__$1;
(statearr_8316_8341[(2)] = inst_8298);

(statearr_8316_8341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (13))){
var state_8308__$1 = state_8308;
var statearr_8317_8342 = state_8308__$1;
(statearr_8317_8342[(2)] = null);

(statearr_8317_8342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (6))){
var inst_8268 = (state_8308[(8)]);
var inst_8293 = inst_8268.length;
var inst_8294 = (inst_8293 > (0));
var state_8308__$1 = state_8308;
if(cljs.core.truth_(inst_8294)){
var statearr_8318_8343 = state_8308__$1;
(statearr_8318_8343[(1)] = (12));

} else {
var statearr_8319_8344 = state_8308__$1;
(statearr_8319_8344[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (3))){
var inst_8306 = (state_8308[(2)]);
var state_8308__$1 = state_8308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8308__$1,inst_8306);
} else {
if((state_val_8309 === (12))){
var inst_8268 = (state_8308[(8)]);
var inst_8296 = cljs.core.vec.call(null,inst_8268);
var state_8308__$1 = state_8308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8308__$1,(15),out,inst_8296);
} else {
if((state_val_8309 === (2))){
var state_8308__$1 = state_8308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8308__$1,(4),ch);
} else {
if((state_val_8309 === (11))){
var inst_8276 = (state_8308[(10)]);
var inst_8272 = (state_8308[(9)]);
var inst_8286 = (state_8308[(2)]);
var inst_8287 = [];
var inst_8288 = inst_8287.push(inst_8272);
var inst_8268 = inst_8287;
var inst_8269 = inst_8276;
var state_8308__$1 = (function (){var statearr_8320 = state_8308;
(statearr_8320[(7)] = inst_8269);

(statearr_8320[(8)] = inst_8268);

(statearr_8320[(11)] = inst_8288);

(statearr_8320[(12)] = inst_8286);

return statearr_8320;
})();
var statearr_8321_8345 = state_8308__$1;
(statearr_8321_8345[(2)] = null);

(statearr_8321_8345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (9))){
var inst_8268 = (state_8308[(8)]);
var inst_8284 = cljs.core.vec.call(null,inst_8268);
var state_8308__$1 = state_8308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8308__$1,(11),out,inst_8284);
} else {
if((state_val_8309 === (5))){
var inst_8269 = (state_8308[(7)]);
var inst_8276 = (state_8308[(10)]);
var inst_8272 = (state_8308[(9)]);
var inst_8276__$1 = f.call(null,inst_8272);
var inst_8277 = cljs.core._EQ_.call(null,inst_8276__$1,inst_8269);
var inst_8278 = cljs.core.keyword_identical_QMARK_.call(null,inst_8269,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8279 = ((inst_8277) || (inst_8278));
var state_8308__$1 = (function (){var statearr_8322 = state_8308;
(statearr_8322[(10)] = inst_8276__$1);

return statearr_8322;
})();
if(cljs.core.truth_(inst_8279)){
var statearr_8323_8346 = state_8308__$1;
(statearr_8323_8346[(1)] = (8));

} else {
var statearr_8324_8347 = state_8308__$1;
(statearr_8324_8347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (14))){
var inst_8301 = (state_8308[(2)]);
var inst_8302 = cljs.core.async.close_BANG_.call(null,out);
var state_8308__$1 = (function (){var statearr_8326 = state_8308;
(statearr_8326[(13)] = inst_8301);

return statearr_8326;
})();
var statearr_8327_8348 = state_8308__$1;
(statearr_8327_8348[(2)] = inst_8302);

(statearr_8327_8348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (10))){
var inst_8291 = (state_8308[(2)]);
var state_8308__$1 = state_8308;
var statearr_8328_8349 = state_8308__$1;
(statearr_8328_8349[(2)] = inst_8291);

(statearr_8328_8349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8309 === (8))){
var inst_8268 = (state_8308[(8)]);
var inst_8276 = (state_8308[(10)]);
var inst_8272 = (state_8308[(9)]);
var inst_8281 = inst_8268.push(inst_8272);
var tmp8325 = inst_8268;
var inst_8268__$1 = tmp8325;
var inst_8269 = inst_8276;
var state_8308__$1 = (function (){var statearr_8329 = state_8308;
(statearr_8329[(7)] = inst_8269);

(statearr_8329[(8)] = inst_8268__$1);

(statearr_8329[(14)] = inst_8281);

return statearr_8329;
})();
var statearr_8330_8350 = state_8308__$1;
(statearr_8330_8350[(2)] = null);

(statearr_8330_8350[(1)] = (2));


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
});})(c__6432__auto___8336,out))
;
return ((function (switch__6342__auto__,c__6432__auto___8336,out){
return (function() {
var cljs$core$async$state_machine__6343__auto__ = null;
var cljs$core$async$state_machine__6343__auto____0 = (function (){
var statearr_8331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8331[(0)] = cljs$core$async$state_machine__6343__auto__);

(statearr_8331[(1)] = (1));

return statearr_8331;
});
var cljs$core$async$state_machine__6343__auto____1 = (function (state_8308){
while(true){
var ret_value__6344__auto__ = (function (){try{while(true){
var result__6345__auto__ = switch__6342__auto__.call(null,state_8308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6345__auto__;
}
break;
}
}catch (e8332){if((e8332 instanceof Object)){
var ex__6346__auto__ = e8332;
var statearr_8333_8351 = state_8308;
(statearr_8333_8351[(5)] = ex__6346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8352 = state_8308;
state_8308 = G__8352;
continue;
} else {
return ret_value__6344__auto__;
}
break;
}
});
cljs$core$async$state_machine__6343__auto__ = function(state_8308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6343__auto____1.call(this,state_8308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6343__auto____0;
cljs$core$async$state_machine__6343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6343__auto____1;
return cljs$core$async$state_machine__6343__auto__;
})()
;})(switch__6342__auto__,c__6432__auto___8336,out))
})();
var state__6434__auto__ = (function (){var statearr_8334 = f__6433__auto__.call(null);
(statearr_8334[(6)] = c__6432__auto___8336);

return statearr_8334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6434__auto__);
});})(c__6432__auto___8336,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1673484812346
