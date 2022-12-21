goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13064 = arguments.length;
switch (G__13064) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13065 = (function (f,blockable,meta13066){
this.f = f;
this.blockable = blockable;
this.meta13066 = meta13066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13067,meta13066__$1){
var self__ = this;
var _13067__$1 = this;
return (new cljs.core.async.t_cljs$core$async13065(self__.f,self__.blockable,meta13066__$1));
}));

(cljs.core.async.t_cljs$core$async13065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13067){
var self__ = this;
var _13067__$1 = this;
return self__.meta13066;
}));

(cljs.core.async.t_cljs$core$async13065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13066","meta13066",738179603,null)], null);
}));

(cljs.core.async.t_cljs$core$async13065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13065");

(cljs.core.async.t_cljs$core$async13065.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13065.
 */
cljs.core.async.__GT_t_cljs$core$async13065 = (function cljs$core$async$__GT_t_cljs$core$async13065(f__$1,blockable__$1,meta13066){
return (new cljs.core.async.t_cljs$core$async13065(f__$1,blockable__$1,meta13066));
});

}

return (new cljs.core.async.t_cljs$core$async13065(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__13070 = arguments.length;
switch (G__13070) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13072 = arguments.length;
switch (G__13072) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__13074 = arguments.length;
switch (G__13074) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14510 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14510) : fn1.call(null,val_14510));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14510) : fn1.call(null,val_14510));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13076 = arguments.length;
switch (G__13076) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___14512 = n;
var x_14513 = (0);
while(true){
if((x_14513 < n__5636__auto___14512)){
(a[x_14513] = x_14513);

var G__14514 = (x_14513 + (1));
x_14513 = G__14514;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13077 = (function (flag,meta13078){
this.flag = flag;
this.meta13078 = meta13078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13079,meta13078__$1){
var self__ = this;
var _13079__$1 = this;
return (new cljs.core.async.t_cljs$core$async13077(self__.flag,meta13078__$1));
}));

(cljs.core.async.t_cljs$core$async13077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13079){
var self__ = this;
var _13079__$1 = this;
return self__.meta13078;
}));

(cljs.core.async.t_cljs$core$async13077.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13077.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13078","meta13078",-969166977,null)], null);
}));

(cljs.core.async.t_cljs$core$async13077.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13077");

(cljs.core.async.t_cljs$core$async13077.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13077");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13077.
 */
cljs.core.async.__GT_t_cljs$core$async13077 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13077(flag__$1,meta13078){
return (new cljs.core.async.t_cljs$core$async13077(flag__$1,meta13078));
});

}

return (new cljs.core.async.t_cljs$core$async13077(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13080 = (function (flag,cb,meta13081){
this.flag = flag;
this.cb = cb;
this.meta13081 = meta13081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13082,meta13081__$1){
var self__ = this;
var _13082__$1 = this;
return (new cljs.core.async.t_cljs$core$async13080(self__.flag,self__.cb,meta13081__$1));
}));

(cljs.core.async.t_cljs$core$async13080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13082){
var self__ = this;
var _13082__$1 = this;
return self__.meta13081;
}));

(cljs.core.async.t_cljs$core$async13080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13081","meta13081",34315801,null)], null);
}));

(cljs.core.async.t_cljs$core$async13080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13080");

(cljs.core.async.t_cljs$core$async13080.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13080.
 */
cljs.core.async.__GT_t_cljs$core$async13080 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13080(flag__$1,cb__$1,meta13081){
return (new cljs.core.async.t_cljs$core$async13080(flag__$1,cb__$1,meta13081));
});

}

return (new cljs.core.async.t_cljs$core$async13080(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13083_SHARP_){
var G__13085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13083_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13085) : fret.call(null,G__13085));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13084_SHARP_){
var G__13086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13084_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13086) : fret.call(null,G__13086));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14518 = (i + (1));
i = G__14518;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___14519 = arguments.length;
var i__5770__auto___14520 = (0);
while(true){
if((i__5770__auto___14520 < len__5769__auto___14519)){
args__5775__auto__.push((arguments[i__5770__auto___14520]));

var G__14521 = (i__5770__auto___14520 + (1));
i__5770__auto___14520 = G__14521;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13089){
var map__13090 = p__13089;
var map__13090__$1 = cljs.core.__destructure_map(map__13090);
var opts = map__13090__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13087){
var G__13088 = cljs.core.first(seq13087);
var seq13087__$1 = cljs.core.next(seq13087);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13088,seq13087__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__13092 = arguments.length;
switch (G__13092) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13004__auto___14525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13116){
var state_val_13117 = (state_13116[(1)]);
if((state_val_13117 === (7))){
var inst_13112 = (state_13116[(2)]);
var state_13116__$1 = state_13116;
var statearr_13118_14526 = state_13116__$1;
(statearr_13118_14526[(2)] = inst_13112);

(statearr_13118_14526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (1))){
var state_13116__$1 = state_13116;
var statearr_13119_14527 = state_13116__$1;
(statearr_13119_14527[(2)] = null);

(statearr_13119_14527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (4))){
var inst_13095 = (state_13116[(7)]);
var inst_13095__$1 = (state_13116[(2)]);
var inst_13096 = (inst_13095__$1 == null);
var state_13116__$1 = (function (){var statearr_13120 = state_13116;
(statearr_13120[(7)] = inst_13095__$1);

return statearr_13120;
})();
if(cljs.core.truth_(inst_13096)){
var statearr_13121_14528 = state_13116__$1;
(statearr_13121_14528[(1)] = (5));

} else {
var statearr_13122_14530 = state_13116__$1;
(statearr_13122_14530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (13))){
var state_13116__$1 = state_13116;
var statearr_13123_14531 = state_13116__$1;
(statearr_13123_14531[(2)] = null);

(statearr_13123_14531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (6))){
var inst_13095 = (state_13116[(7)]);
var state_13116__$1 = state_13116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13116__$1,(11),to,inst_13095);
} else {
if((state_val_13117 === (3))){
var inst_13114 = (state_13116[(2)]);
var state_13116__$1 = state_13116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13116__$1,inst_13114);
} else {
if((state_val_13117 === (12))){
var state_13116__$1 = state_13116;
var statearr_13124_14533 = state_13116__$1;
(statearr_13124_14533[(2)] = null);

(statearr_13124_14533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (2))){
var state_13116__$1 = state_13116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13116__$1,(4),from);
} else {
if((state_val_13117 === (11))){
var inst_13105 = (state_13116[(2)]);
var state_13116__$1 = state_13116;
if(cljs.core.truth_(inst_13105)){
var statearr_13125_14534 = state_13116__$1;
(statearr_13125_14534[(1)] = (12));

} else {
var statearr_13126_14535 = state_13116__$1;
(statearr_13126_14535[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (9))){
var state_13116__$1 = state_13116;
var statearr_13127_14536 = state_13116__$1;
(statearr_13127_14536[(2)] = null);

(statearr_13127_14536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (5))){
var state_13116__$1 = state_13116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13128_14537 = state_13116__$1;
(statearr_13128_14537[(1)] = (8));

} else {
var statearr_13129_14538 = state_13116__$1;
(statearr_13129_14538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (14))){
var inst_13110 = (state_13116[(2)]);
var state_13116__$1 = state_13116;
var statearr_13130_14539 = state_13116__$1;
(statearr_13130_14539[(2)] = inst_13110);

(statearr_13130_14539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (10))){
var inst_13102 = (state_13116[(2)]);
var state_13116__$1 = state_13116;
var statearr_13131_14540 = state_13116__$1;
(statearr_13131_14540[(2)] = inst_13102);

(statearr_13131_14540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13117 === (8))){
var inst_13099 = cljs.core.async.close_BANG_(to);
var state_13116__$1 = state_13116;
var statearr_13132_14542 = state_13116__$1;
(statearr_13132_14542[(2)] = inst_13099);

(statearr_13132_14542[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_13133 = [null,null,null,null,null,null,null,null];
(statearr_13133[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_13133[(1)] = (1));

return statearr_13133;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_13116){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13116);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13134){var ex__12974__auto__ = e13134;
var statearr_13135_14544 = state_13116;
(statearr_13135_14544[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13116[(4)]))){
var statearr_13136_14545 = state_13116;
(statearr_13136_14545[(1)] = cljs.core.first((state_13116[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14546 = state_13116;
state_13116 = G__14546;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_13116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_13116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13137 = f__13006__auto__();
(statearr_13137[(6)] = c__13004__auto___14525);

return statearr_13137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13138){
var vec__13139 = p__13138;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(1),null);
var job = vec__13139;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13004__auto___14547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13146){
var state_val_13147 = (state_13146[(1)]);
if((state_val_13147 === (1))){
var state_13146__$1 = state_13146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13146__$1,(2),res,v);
} else {
if((state_val_13147 === (2))){
var inst_13143 = (state_13146[(2)]);
var inst_13144 = cljs.core.async.close_BANG_(res);
var state_13146__$1 = (function (){var statearr_13148 = state_13146;
(statearr_13148[(7)] = inst_13143);

return statearr_13148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13146__$1,inst_13144);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0 = (function (){
var statearr_13149 = [null,null,null,null,null,null,null,null];
(statearr_13149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__);

(statearr_13149[(1)] = (1));

return statearr_13149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1 = (function (state_13146){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13146);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13150){var ex__12974__auto__ = e13150;
var statearr_13151_14548 = state_13146;
(statearr_13151_14548[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13146[(4)]))){
var statearr_13152_14550 = state_13146;
(statearr_13152_14550[(1)] = cljs.core.first((state_13146[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14551 = state_13146;
state_13146 = G__14551;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = function(state_13146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1.call(this,state_13146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13153 = f__13006__auto__();
(statearr_13153[(6)] = c__13004__auto___14547);

return statearr_13153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13154){
var vec__13155 = p__13154;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13155,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13155,(1),null);
var job = vec__13155;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___14553 = n;
var __14554 = (0);
while(true){
if((__14554 < n__5636__auto___14553)){
var G__13158_14555 = type;
var G__13158_14556__$1 = (((G__13158_14555 instanceof cljs.core.Keyword))?G__13158_14555.fqn:null);
switch (G__13158_14556__$1) {
case "compute":
var c__13004__auto___14558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14554,c__13004__auto___14558,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async){
return (function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = ((function (__14554,c__13004__auto___14558,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async){
return (function (state_13171){
var state_val_13172 = (state_13171[(1)]);
if((state_val_13172 === (1))){
var state_13171__$1 = state_13171;
var statearr_13173_14559 = state_13171__$1;
(statearr_13173_14559[(2)] = null);

(statearr_13173_14559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13172 === (2))){
var state_13171__$1 = state_13171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13171__$1,(4),jobs);
} else {
if((state_val_13172 === (3))){
var inst_13169 = (state_13171[(2)]);
var state_13171__$1 = state_13171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13171__$1,inst_13169);
} else {
if((state_val_13172 === (4))){
var inst_13161 = (state_13171[(2)]);
var inst_13162 = process__$1(inst_13161);
var state_13171__$1 = state_13171;
if(cljs.core.truth_(inst_13162)){
var statearr_13174_14560 = state_13171__$1;
(statearr_13174_14560[(1)] = (5));

} else {
var statearr_13175_14561 = state_13171__$1;
(statearr_13175_14561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13172 === (5))){
var state_13171__$1 = state_13171;
var statearr_13176_14562 = state_13171__$1;
(statearr_13176_14562[(2)] = null);

(statearr_13176_14562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13172 === (6))){
var state_13171__$1 = state_13171;
var statearr_13177_14563 = state_13171__$1;
(statearr_13177_14563[(2)] = null);

(statearr_13177_14563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13172 === (7))){
var inst_13167 = (state_13171[(2)]);
var state_13171__$1 = state_13171;
var statearr_13178_14564 = state_13171__$1;
(statearr_13178_14564[(2)] = inst_13167);

(statearr_13178_14564[(1)] = (3));


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
});})(__14554,c__13004__auto___14558,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async))
;
return ((function (__14554,switch__12970__auto__,c__13004__auto___14558,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0 = (function (){
var statearr_13179 = [null,null,null,null,null,null,null];
(statearr_13179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__);

(statearr_13179[(1)] = (1));

return statearr_13179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1 = (function (state_13171){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13171);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13180){var ex__12974__auto__ = e13180;
var statearr_13181_14567 = state_13171;
(statearr_13181_14567[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13171[(4)]))){
var statearr_13182_14568 = state_13171;
(statearr_13182_14568[(1)] = cljs.core.first((state_13171[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14569 = state_13171;
state_13171 = G__14569;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = function(state_13171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1.call(this,state_13171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__;
})()
;})(__14554,switch__12970__auto__,c__13004__auto___14558,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async))
})();
var state__13007__auto__ = (function (){var statearr_13183 = f__13006__auto__();
(statearr_13183[(6)] = c__13004__auto___14558);

return statearr_13183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
});})(__14554,c__13004__auto___14558,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async))
);


break;
case "async":
var c__13004__auto___14570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14554,c__13004__auto___14570,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async){
return (function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = ((function (__14554,c__13004__auto___14570,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async){
return (function (state_13196){
var state_val_13197 = (state_13196[(1)]);
if((state_val_13197 === (1))){
var state_13196__$1 = state_13196;
var statearr_13198_14571 = state_13196__$1;
(statearr_13198_14571[(2)] = null);

(statearr_13198_14571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (2))){
var state_13196__$1 = state_13196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13196__$1,(4),jobs);
} else {
if((state_val_13197 === (3))){
var inst_13194 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13196__$1,inst_13194);
} else {
if((state_val_13197 === (4))){
var inst_13186 = (state_13196[(2)]);
var inst_13187 = async(inst_13186);
var state_13196__$1 = state_13196;
if(cljs.core.truth_(inst_13187)){
var statearr_13199_14572 = state_13196__$1;
(statearr_13199_14572[(1)] = (5));

} else {
var statearr_13200_14573 = state_13196__$1;
(statearr_13200_14573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (5))){
var state_13196__$1 = state_13196;
var statearr_13201_14574 = state_13196__$1;
(statearr_13201_14574[(2)] = null);

(statearr_13201_14574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (6))){
var state_13196__$1 = state_13196;
var statearr_13202_14575 = state_13196__$1;
(statearr_13202_14575[(2)] = null);

(statearr_13202_14575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13197 === (7))){
var inst_13192 = (state_13196[(2)]);
var state_13196__$1 = state_13196;
var statearr_13203_14576 = state_13196__$1;
(statearr_13203_14576[(2)] = inst_13192);

(statearr_13203_14576[(1)] = (3));


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
});})(__14554,c__13004__auto___14570,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async))
;
return ((function (__14554,switch__12970__auto__,c__13004__auto___14570,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0 = (function (){
var statearr_13204 = [null,null,null,null,null,null,null];
(statearr_13204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__);

(statearr_13204[(1)] = (1));

return statearr_13204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1 = (function (state_13196){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13196);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13205){var ex__12974__auto__ = e13205;
var statearr_13206_14578 = state_13196;
(statearr_13206_14578[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13196[(4)]))){
var statearr_13207_14579 = state_13196;
(statearr_13207_14579[(1)] = cljs.core.first((state_13196[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14580 = state_13196;
state_13196 = G__14580;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = function(state_13196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1.call(this,state_13196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__;
})()
;})(__14554,switch__12970__auto__,c__13004__auto___14570,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async))
})();
var state__13007__auto__ = (function (){var statearr_13208 = f__13006__auto__();
(statearr_13208[(6)] = c__13004__auto___14570);

return statearr_13208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
});})(__14554,c__13004__auto___14570,G__13158_14555,G__13158_14556__$1,n__5636__auto___14553,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13158_14556__$1)].join('')));

}

var G__14581 = (__14554 + (1));
__14554 = G__14581;
continue;
} else {
}
break;
}

var c__13004__auto___14582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13230){
var state_val_13231 = (state_13230[(1)]);
if((state_val_13231 === (7))){
var inst_13226 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
var statearr_13232_14583 = state_13230__$1;
(statearr_13232_14583[(2)] = inst_13226);

(statearr_13232_14583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (1))){
var state_13230__$1 = state_13230;
var statearr_13233_14584 = state_13230__$1;
(statearr_13233_14584[(2)] = null);

(statearr_13233_14584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (4))){
var inst_13211 = (state_13230[(7)]);
var inst_13211__$1 = (state_13230[(2)]);
var inst_13212 = (inst_13211__$1 == null);
var state_13230__$1 = (function (){var statearr_13234 = state_13230;
(statearr_13234[(7)] = inst_13211__$1);

return statearr_13234;
})();
if(cljs.core.truth_(inst_13212)){
var statearr_13235_14585 = state_13230__$1;
(statearr_13235_14585[(1)] = (5));

} else {
var statearr_13236_14586 = state_13230__$1;
(statearr_13236_14586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (6))){
var inst_13216 = (state_13230[(8)]);
var inst_13211 = (state_13230[(7)]);
var inst_13216__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13218 = [inst_13211,inst_13216__$1];
var inst_13219 = (new cljs.core.PersistentVector(null,2,(5),inst_13217,inst_13218,null));
var state_13230__$1 = (function (){var statearr_13237 = state_13230;
(statearr_13237[(8)] = inst_13216__$1);

return statearr_13237;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13230__$1,(8),jobs,inst_13219);
} else {
if((state_val_13231 === (3))){
var inst_13228 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13230__$1,inst_13228);
} else {
if((state_val_13231 === (2))){
var state_13230__$1 = state_13230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13230__$1,(4),from);
} else {
if((state_val_13231 === (9))){
var inst_13223 = (state_13230[(2)]);
var state_13230__$1 = (function (){var statearr_13238 = state_13230;
(statearr_13238[(9)] = inst_13223);

return statearr_13238;
})();
var statearr_13239_14591 = state_13230__$1;
(statearr_13239_14591[(2)] = null);

(statearr_13239_14591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (5))){
var inst_13214 = cljs.core.async.close_BANG_(jobs);
var state_13230__$1 = state_13230;
var statearr_13240_14592 = state_13230__$1;
(statearr_13240_14592[(2)] = inst_13214);

(statearr_13240_14592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (8))){
var inst_13216 = (state_13230[(8)]);
var inst_13221 = (state_13230[(2)]);
var state_13230__$1 = (function (){var statearr_13241 = state_13230;
(statearr_13241[(10)] = inst_13221);

return statearr_13241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13230__$1,(9),results,inst_13216);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0 = (function (){
var statearr_13242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__);

(statearr_13242[(1)] = (1));

return statearr_13242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1 = (function (state_13230){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13230);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13243){var ex__12974__auto__ = e13243;
var statearr_13244_14593 = state_13230;
(statearr_13244_14593[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13230[(4)]))){
var statearr_13245_14594 = state_13230;
(statearr_13245_14594[(1)] = cljs.core.first((state_13230[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14595 = state_13230;
state_13230 = G__14595;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = function(state_13230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1.call(this,state_13230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13246 = f__13006__auto__();
(statearr_13246[(6)] = c__13004__auto___14582);

return statearr_13246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


var c__13004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13284){
var state_val_13285 = (state_13284[(1)]);
if((state_val_13285 === (7))){
var inst_13280 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
var statearr_13286_14596 = state_13284__$1;
(statearr_13286_14596[(2)] = inst_13280);

(statearr_13286_14596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (20))){
var state_13284__$1 = state_13284;
var statearr_13287_14597 = state_13284__$1;
(statearr_13287_14597[(2)] = null);

(statearr_13287_14597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (1))){
var state_13284__$1 = state_13284;
var statearr_13288_14598 = state_13284__$1;
(statearr_13288_14598[(2)] = null);

(statearr_13288_14598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (4))){
var inst_13249 = (state_13284[(7)]);
var inst_13249__$1 = (state_13284[(2)]);
var inst_13250 = (inst_13249__$1 == null);
var state_13284__$1 = (function (){var statearr_13289 = state_13284;
(statearr_13289[(7)] = inst_13249__$1);

return statearr_13289;
})();
if(cljs.core.truth_(inst_13250)){
var statearr_13290_14599 = state_13284__$1;
(statearr_13290_14599[(1)] = (5));

} else {
var statearr_13291_14600 = state_13284__$1;
(statearr_13291_14600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (15))){
var inst_13262 = (state_13284[(8)]);
var state_13284__$1 = state_13284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13284__$1,(18),to,inst_13262);
} else {
if((state_val_13285 === (21))){
var inst_13275 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
var statearr_13292_14601 = state_13284__$1;
(statearr_13292_14601[(2)] = inst_13275);

(statearr_13292_14601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (13))){
var inst_13277 = (state_13284[(2)]);
var state_13284__$1 = (function (){var statearr_13293 = state_13284;
(statearr_13293[(9)] = inst_13277);

return statearr_13293;
})();
var statearr_13294_14602 = state_13284__$1;
(statearr_13294_14602[(2)] = null);

(statearr_13294_14602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (6))){
var inst_13249 = (state_13284[(7)]);
var state_13284__$1 = state_13284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13284__$1,(11),inst_13249);
} else {
if((state_val_13285 === (17))){
var inst_13270 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
if(cljs.core.truth_(inst_13270)){
var statearr_13295_14603 = state_13284__$1;
(statearr_13295_14603[(1)] = (19));

} else {
var statearr_13296_14604 = state_13284__$1;
(statearr_13296_14604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (3))){
var inst_13282 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13284__$1,inst_13282);
} else {
if((state_val_13285 === (12))){
var inst_13259 = (state_13284[(10)]);
var state_13284__$1 = state_13284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13284__$1,(14),inst_13259);
} else {
if((state_val_13285 === (2))){
var state_13284__$1 = state_13284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13284__$1,(4),results);
} else {
if((state_val_13285 === (19))){
var state_13284__$1 = state_13284;
var statearr_13297_14606 = state_13284__$1;
(statearr_13297_14606[(2)] = null);

(statearr_13297_14606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (11))){
var inst_13259 = (state_13284[(2)]);
var state_13284__$1 = (function (){var statearr_13298 = state_13284;
(statearr_13298[(10)] = inst_13259);

return statearr_13298;
})();
var statearr_13299_14607 = state_13284__$1;
(statearr_13299_14607[(2)] = null);

(statearr_13299_14607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (9))){
var state_13284__$1 = state_13284;
var statearr_13300_14609 = state_13284__$1;
(statearr_13300_14609[(2)] = null);

(statearr_13300_14609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (5))){
var state_13284__$1 = state_13284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13301_14610 = state_13284__$1;
(statearr_13301_14610[(1)] = (8));

} else {
var statearr_13302_14611 = state_13284__$1;
(statearr_13302_14611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (14))){
var inst_13264 = (state_13284[(11)]);
var inst_13262 = (state_13284[(8)]);
var inst_13262__$1 = (state_13284[(2)]);
var inst_13263 = (inst_13262__$1 == null);
var inst_13264__$1 = cljs.core.not(inst_13263);
var state_13284__$1 = (function (){var statearr_13303 = state_13284;
(statearr_13303[(11)] = inst_13264__$1);

(statearr_13303[(8)] = inst_13262__$1);

return statearr_13303;
})();
if(inst_13264__$1){
var statearr_13304_14612 = state_13284__$1;
(statearr_13304_14612[(1)] = (15));

} else {
var statearr_13305_14613 = state_13284__$1;
(statearr_13305_14613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (16))){
var inst_13264 = (state_13284[(11)]);
var state_13284__$1 = state_13284;
var statearr_13306_14614 = state_13284__$1;
(statearr_13306_14614[(2)] = inst_13264);

(statearr_13306_14614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (10))){
var inst_13256 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
var statearr_13307_14615 = state_13284__$1;
(statearr_13307_14615[(2)] = inst_13256);

(statearr_13307_14615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (18))){
var inst_13267 = (state_13284[(2)]);
var state_13284__$1 = state_13284;
var statearr_13308_14616 = state_13284__$1;
(statearr_13308_14616[(2)] = inst_13267);

(statearr_13308_14616[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13285 === (8))){
var inst_13253 = cljs.core.async.close_BANG_(to);
var state_13284__$1 = state_13284;
var statearr_13309_14617 = state_13284__$1;
(statearr_13309_14617[(2)] = inst_13253);

(statearr_13309_14617[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0 = (function (){
var statearr_13310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__);

(statearr_13310[(1)] = (1));

return statearr_13310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1 = (function (state_13284){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13284);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13311){var ex__12974__auto__ = e13311;
var statearr_13312_14618 = state_13284;
(statearr_13312_14618[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13284[(4)]))){
var statearr_13313_14619 = state_13284;
(statearr_13313_14619[(1)] = cljs.core.first((state_13284[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14624 = state_13284;
state_13284 = G__14624;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__ = function(state_13284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1.call(this,state_13284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13314 = f__13006__auto__();
(statearr_13314[(6)] = c__13004__auto__);

return statearr_13314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

return c__13004__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13316 = arguments.length;
switch (G__13316) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__13318 = arguments.length;
switch (G__13318) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__13320 = arguments.length;
switch (G__13320) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13004__auto___14637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13346){
var state_val_13347 = (state_13346[(1)]);
if((state_val_13347 === (7))){
var inst_13342 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13348_14638 = state_13346__$1;
(statearr_13348_14638[(2)] = inst_13342);

(statearr_13348_14638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (1))){
var state_13346__$1 = state_13346;
var statearr_13349_14642 = state_13346__$1;
(statearr_13349_14642[(2)] = null);

(statearr_13349_14642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (4))){
var inst_13323 = (state_13346[(7)]);
var inst_13323__$1 = (state_13346[(2)]);
var inst_13324 = (inst_13323__$1 == null);
var state_13346__$1 = (function (){var statearr_13350 = state_13346;
(statearr_13350[(7)] = inst_13323__$1);

return statearr_13350;
})();
if(cljs.core.truth_(inst_13324)){
var statearr_13351_14643 = state_13346__$1;
(statearr_13351_14643[(1)] = (5));

} else {
var statearr_13352_14644 = state_13346__$1;
(statearr_13352_14644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (13))){
var state_13346__$1 = state_13346;
var statearr_13353_14645 = state_13346__$1;
(statearr_13353_14645[(2)] = null);

(statearr_13353_14645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (6))){
var inst_13323 = (state_13346[(7)]);
var inst_13329 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13323) : p.call(null,inst_13323));
var state_13346__$1 = state_13346;
if(cljs.core.truth_(inst_13329)){
var statearr_13354_14646 = state_13346__$1;
(statearr_13354_14646[(1)] = (9));

} else {
var statearr_13355_14647 = state_13346__$1;
(statearr_13355_14647[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (3))){
var inst_13344 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13346__$1,inst_13344);
} else {
if((state_val_13347 === (12))){
var state_13346__$1 = state_13346;
var statearr_13356_14652 = state_13346__$1;
(statearr_13356_14652[(2)] = null);

(statearr_13356_14652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (2))){
var state_13346__$1 = state_13346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13346__$1,(4),ch);
} else {
if((state_val_13347 === (11))){
var inst_13323 = (state_13346[(7)]);
var inst_13333 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13346__$1,(8),inst_13333,inst_13323);
} else {
if((state_val_13347 === (9))){
var state_13346__$1 = state_13346;
var statearr_13357_14656 = state_13346__$1;
(statearr_13357_14656[(2)] = tc);

(statearr_13357_14656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (5))){
var inst_13326 = cljs.core.async.close_BANG_(tc);
var inst_13327 = cljs.core.async.close_BANG_(fc);
var state_13346__$1 = (function (){var statearr_13358 = state_13346;
(statearr_13358[(8)] = inst_13326);

return statearr_13358;
})();
var statearr_13359_14657 = state_13346__$1;
(statearr_13359_14657[(2)] = inst_13327);

(statearr_13359_14657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (14))){
var inst_13340 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
var statearr_13360_14658 = state_13346__$1;
(statearr_13360_14658[(2)] = inst_13340);

(statearr_13360_14658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (10))){
var state_13346__$1 = state_13346;
var statearr_13361_14659 = state_13346__$1;
(statearr_13361_14659[(2)] = fc);

(statearr_13361_14659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13347 === (8))){
var inst_13335 = (state_13346[(2)]);
var state_13346__$1 = state_13346;
if(cljs.core.truth_(inst_13335)){
var statearr_13362_14663 = state_13346__$1;
(statearr_13362_14663[(1)] = (12));

} else {
var statearr_13363_14664 = state_13346__$1;
(statearr_13363_14664[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_13364 = [null,null,null,null,null,null,null,null,null];
(statearr_13364[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_13364[(1)] = (1));

return statearr_13364;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_13346){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13346);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13365){var ex__12974__auto__ = e13365;
var statearr_13366_14665 = state_13346;
(statearr_13366_14665[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13346[(4)]))){
var statearr_13367_14669 = state_13346;
(statearr_13367_14669[(1)] = cljs.core.first((state_13346[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14670 = state_13346;
state_13346 = G__14670;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_13346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_13346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13368 = f__13006__auto__();
(statearr_13368[(6)] = c__13004__auto___14637);

return statearr_13368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13390){
var state_val_13391 = (state_13390[(1)]);
if((state_val_13391 === (7))){
var inst_13386 = (state_13390[(2)]);
var state_13390__$1 = state_13390;
var statearr_13392_14671 = state_13390__$1;
(statearr_13392_14671[(2)] = inst_13386);

(statearr_13392_14671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13391 === (1))){
var inst_13369 = init;
var inst_13370 = inst_13369;
var state_13390__$1 = (function (){var statearr_13393 = state_13390;
(statearr_13393[(7)] = inst_13370);

return statearr_13393;
})();
var statearr_13394_14672 = state_13390__$1;
(statearr_13394_14672[(2)] = null);

(statearr_13394_14672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13391 === (4))){
var inst_13373 = (state_13390[(8)]);
var inst_13373__$1 = (state_13390[(2)]);
var inst_13374 = (inst_13373__$1 == null);
var state_13390__$1 = (function (){var statearr_13395 = state_13390;
(statearr_13395[(8)] = inst_13373__$1);

return statearr_13395;
})();
if(cljs.core.truth_(inst_13374)){
var statearr_13396_14676 = state_13390__$1;
(statearr_13396_14676[(1)] = (5));

} else {
var statearr_13397_14677 = state_13390__$1;
(statearr_13397_14677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13391 === (6))){
var inst_13377 = (state_13390[(9)]);
var inst_13370 = (state_13390[(7)]);
var inst_13373 = (state_13390[(8)]);
var inst_13377__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13370,inst_13373) : f.call(null,inst_13370,inst_13373));
var inst_13378 = cljs.core.reduced_QMARK_(inst_13377__$1);
var state_13390__$1 = (function (){var statearr_13398 = state_13390;
(statearr_13398[(9)] = inst_13377__$1);

return statearr_13398;
})();
if(inst_13378){
var statearr_13399_14678 = state_13390__$1;
(statearr_13399_14678[(1)] = (8));

} else {
var statearr_13400_14679 = state_13390__$1;
(statearr_13400_14679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13391 === (3))){
var inst_13388 = (state_13390[(2)]);
var state_13390__$1 = state_13390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13390__$1,inst_13388);
} else {
if((state_val_13391 === (2))){
var state_13390__$1 = state_13390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13390__$1,(4),ch);
} else {
if((state_val_13391 === (9))){
var inst_13377 = (state_13390[(9)]);
var inst_13370 = inst_13377;
var state_13390__$1 = (function (){var statearr_13401 = state_13390;
(statearr_13401[(7)] = inst_13370);

return statearr_13401;
})();
var statearr_13402_14680 = state_13390__$1;
(statearr_13402_14680[(2)] = null);

(statearr_13402_14680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13391 === (5))){
var inst_13370 = (state_13390[(7)]);
var state_13390__$1 = state_13390;
var statearr_13403_14682 = state_13390__$1;
(statearr_13403_14682[(2)] = inst_13370);

(statearr_13403_14682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13391 === (10))){
var inst_13384 = (state_13390[(2)]);
var state_13390__$1 = state_13390;
var statearr_13404_14683 = state_13390__$1;
(statearr_13404_14683[(2)] = inst_13384);

(statearr_13404_14683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13391 === (8))){
var inst_13377 = (state_13390[(9)]);
var inst_13380 = cljs.core.deref(inst_13377);
var state_13390__$1 = state_13390;
var statearr_13405_14684 = state_13390__$1;
(statearr_13405_14684[(2)] = inst_13380);

(statearr_13405_14684[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12971__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12971__auto____0 = (function (){
var statearr_13406 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13406[(0)] = cljs$core$async$reduce_$_state_machine__12971__auto__);

(statearr_13406[(1)] = (1));

return statearr_13406;
});
var cljs$core$async$reduce_$_state_machine__12971__auto____1 = (function (state_13390){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13390);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13407){var ex__12974__auto__ = e13407;
var statearr_13408_14685 = state_13390;
(statearr_13408_14685[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13390[(4)]))){
var statearr_13409_14686 = state_13390;
(statearr_13409_14686[(1)] = cljs.core.first((state_13390[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14687 = state_13390;
state_13390 = G__14687;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12971__auto__ = function(state_13390){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12971__auto____1.call(this,state_13390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12971__auto____0;
cljs$core$async$reduce_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12971__auto____1;
return cljs$core$async$reduce_$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13410 = f__13006__auto__();
(statearr_13410[(6)] = c__13004__auto__);

return statearr_13410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

return c__13004__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13416){
var state_val_13417 = (state_13416[(1)]);
if((state_val_13417 === (1))){
var inst_13411 = cljs.core.async.reduce(f__$1,init,ch);
var state_13416__$1 = state_13416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13416__$1,(2),inst_13411);
} else {
if((state_val_13417 === (2))){
var inst_13413 = (state_13416[(2)]);
var inst_13414 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13413) : f__$1.call(null,inst_13413));
var state_13416__$1 = state_13416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13416__$1,inst_13414);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12971__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12971__auto____0 = (function (){
var statearr_13418 = [null,null,null,null,null,null,null];
(statearr_13418[(0)] = cljs$core$async$transduce_$_state_machine__12971__auto__);

(statearr_13418[(1)] = (1));

return statearr_13418;
});
var cljs$core$async$transduce_$_state_machine__12971__auto____1 = (function (state_13416){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13416);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13419){var ex__12974__auto__ = e13419;
var statearr_13420_14688 = state_13416;
(statearr_13420_14688[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13416[(4)]))){
var statearr_13421_14689 = state_13416;
(statearr_13421_14689[(1)] = cljs.core.first((state_13416[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14690 = state_13416;
state_13416 = G__14690;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12971__auto__ = function(state_13416){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12971__auto____1.call(this,state_13416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12971__auto____0;
cljs$core$async$transduce_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12971__auto____1;
return cljs$core$async$transduce_$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13422 = f__13006__auto__();
(statearr_13422[(6)] = c__13004__auto__);

return statearr_13422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

return c__13004__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13424 = arguments.length;
switch (G__13424) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13449){
var state_val_13450 = (state_13449[(1)]);
if((state_val_13450 === (7))){
var inst_13431 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13451_14692 = state_13449__$1;
(statearr_13451_14692[(2)] = inst_13431);

(statearr_13451_14692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (1))){
var inst_13425 = cljs.core.seq(coll);
var inst_13426 = inst_13425;
var state_13449__$1 = (function (){var statearr_13452 = state_13449;
(statearr_13452[(7)] = inst_13426);

return statearr_13452;
})();
var statearr_13453_14693 = state_13449__$1;
(statearr_13453_14693[(2)] = null);

(statearr_13453_14693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (4))){
var inst_13426 = (state_13449[(7)]);
var inst_13429 = cljs.core.first(inst_13426);
var state_13449__$1 = state_13449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13449__$1,(7),ch,inst_13429);
} else {
if((state_val_13450 === (13))){
var inst_13443 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13454_14694 = state_13449__$1;
(statearr_13454_14694[(2)] = inst_13443);

(statearr_13454_14694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (6))){
var inst_13434 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
if(cljs.core.truth_(inst_13434)){
var statearr_13455_14695 = state_13449__$1;
(statearr_13455_14695[(1)] = (8));

} else {
var statearr_13456_14696 = state_13449__$1;
(statearr_13456_14696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (3))){
var inst_13447 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13449__$1,inst_13447);
} else {
if((state_val_13450 === (12))){
var state_13449__$1 = state_13449;
var statearr_13457_14697 = state_13449__$1;
(statearr_13457_14697[(2)] = null);

(statearr_13457_14697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (2))){
var inst_13426 = (state_13449[(7)]);
var state_13449__$1 = state_13449;
if(cljs.core.truth_(inst_13426)){
var statearr_13458_14698 = state_13449__$1;
(statearr_13458_14698[(1)] = (4));

} else {
var statearr_13459_14699 = state_13449__$1;
(statearr_13459_14699[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (11))){
var inst_13440 = cljs.core.async.close_BANG_(ch);
var state_13449__$1 = state_13449;
var statearr_13460_14700 = state_13449__$1;
(statearr_13460_14700[(2)] = inst_13440);

(statearr_13460_14700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (9))){
var state_13449__$1 = state_13449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13461_14701 = state_13449__$1;
(statearr_13461_14701[(1)] = (11));

} else {
var statearr_13462_14702 = state_13449__$1;
(statearr_13462_14702[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (5))){
var inst_13426 = (state_13449[(7)]);
var state_13449__$1 = state_13449;
var statearr_13463_14703 = state_13449__$1;
(statearr_13463_14703[(2)] = inst_13426);

(statearr_13463_14703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (10))){
var inst_13445 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13464_14704 = state_13449__$1;
(statearr_13464_14704[(2)] = inst_13445);

(statearr_13464_14704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (8))){
var inst_13426 = (state_13449[(7)]);
var inst_13436 = cljs.core.next(inst_13426);
var inst_13426__$1 = inst_13436;
var state_13449__$1 = (function (){var statearr_13465 = state_13449;
(statearr_13465[(7)] = inst_13426__$1);

return statearr_13465;
})();
var statearr_13466_14706 = state_13449__$1;
(statearr_13466_14706[(2)] = null);

(statearr_13466_14706[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_13467 = [null,null,null,null,null,null,null,null];
(statearr_13467[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_13467[(1)] = (1));

return statearr_13467;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_13449){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13449);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13468){var ex__12974__auto__ = e13468;
var statearr_13469_14711 = state_13449;
(statearr_13469_14711[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13449[(4)]))){
var statearr_13470_14712 = state_13449;
(statearr_13470_14712[(1)] = cljs.core.first((state_13449[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14713 = state_13449;
state_13449 = G__14713;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_13449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_13449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13471 = f__13006__auto__();
(statearr_13471[(6)] = c__13004__auto__);

return statearr_13471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

return c__13004__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13473 = arguments.length;
switch (G__13473) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_14718 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14718(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14719 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14719(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14720 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14720(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14721 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14721(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13474 = (function (ch,cs,meta13475){
this.ch = ch;
this.cs = cs;
this.meta13475 = meta13475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13476,meta13475__$1){
var self__ = this;
var _13476__$1 = this;
return (new cljs.core.async.t_cljs$core$async13474(self__.ch,self__.cs,meta13475__$1));
}));

(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13476){
var self__ = this;
var _13476__$1 = this;
return self__.meta13475;
}));

(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13474.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13475","meta13475",-1319760173,null)], null);
}));

(cljs.core.async.t_cljs$core$async13474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13474");

(cljs.core.async.t_cljs$core$async13474.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13474.
 */
cljs.core.async.__GT_t_cljs$core$async13474 = (function cljs$core$async$mult_$___GT_t_cljs$core$async13474(ch__$1,cs__$1,meta13475){
return (new cljs.core.async.t_cljs$core$async13474(ch__$1,cs__$1,meta13475));
});

}

return (new cljs.core.async.t_cljs$core$async13474(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13004__auto___14730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13609){
var state_val_13610 = (state_13609[(1)]);
if((state_val_13610 === (7))){
var inst_13605 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13611_14734 = state_13609__$1;
(statearr_13611_14734[(2)] = inst_13605);

(statearr_13611_14734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (20))){
var inst_13510 = (state_13609[(7)]);
var inst_13522 = cljs.core.first(inst_13510);
var inst_13523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13522,(0),null);
var inst_13524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13522,(1),null);
var state_13609__$1 = (function (){var statearr_13612 = state_13609;
(statearr_13612[(8)] = inst_13523);

return statearr_13612;
})();
if(cljs.core.truth_(inst_13524)){
var statearr_13613_14739 = state_13609__$1;
(statearr_13613_14739[(1)] = (22));

} else {
var statearr_13614_14740 = state_13609__$1;
(statearr_13614_14740[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (27))){
var inst_13479 = (state_13609[(9)]);
var inst_13554 = (state_13609[(10)]);
var inst_13559 = (state_13609[(11)]);
var inst_13552 = (state_13609[(12)]);
var inst_13559__$1 = cljs.core._nth(inst_13552,inst_13554);
var inst_13560 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13559__$1,inst_13479,done);
var state_13609__$1 = (function (){var statearr_13615 = state_13609;
(statearr_13615[(11)] = inst_13559__$1);

return statearr_13615;
})();
if(cljs.core.truth_(inst_13560)){
var statearr_13616_14747 = state_13609__$1;
(statearr_13616_14747[(1)] = (30));

} else {
var statearr_13617_14748 = state_13609__$1;
(statearr_13617_14748[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (1))){
var state_13609__$1 = state_13609;
var statearr_13618_14749 = state_13609__$1;
(statearr_13618_14749[(2)] = null);

(statearr_13618_14749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (24))){
var inst_13510 = (state_13609[(7)]);
var inst_13529 = (state_13609[(2)]);
var inst_13530 = cljs.core.next(inst_13510);
var inst_13488 = inst_13530;
var inst_13489 = null;
var inst_13490 = (0);
var inst_13491 = (0);
var state_13609__$1 = (function (){var statearr_13619 = state_13609;
(statearr_13619[(13)] = inst_13490);

(statearr_13619[(14)] = inst_13491);

(statearr_13619[(15)] = inst_13529);

(statearr_13619[(16)] = inst_13489);

(statearr_13619[(17)] = inst_13488);

return statearr_13619;
})();
var statearr_13620_14750 = state_13609__$1;
(statearr_13620_14750[(2)] = null);

(statearr_13620_14750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (39))){
var state_13609__$1 = state_13609;
var statearr_13624_14751 = state_13609__$1;
(statearr_13624_14751[(2)] = null);

(statearr_13624_14751[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (4))){
var inst_13479 = (state_13609[(9)]);
var inst_13479__$1 = (state_13609[(2)]);
var inst_13480 = (inst_13479__$1 == null);
var state_13609__$1 = (function (){var statearr_13625 = state_13609;
(statearr_13625[(9)] = inst_13479__$1);

return statearr_13625;
})();
if(cljs.core.truth_(inst_13480)){
var statearr_13626_14752 = state_13609__$1;
(statearr_13626_14752[(1)] = (5));

} else {
var statearr_13627_14753 = state_13609__$1;
(statearr_13627_14753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (15))){
var inst_13490 = (state_13609[(13)]);
var inst_13491 = (state_13609[(14)]);
var inst_13489 = (state_13609[(16)]);
var inst_13488 = (state_13609[(17)]);
var inst_13506 = (state_13609[(2)]);
var inst_13507 = (inst_13491 + (1));
var tmp13621 = inst_13490;
var tmp13622 = inst_13489;
var tmp13623 = inst_13488;
var inst_13488__$1 = tmp13623;
var inst_13489__$1 = tmp13622;
var inst_13490__$1 = tmp13621;
var inst_13491__$1 = inst_13507;
var state_13609__$1 = (function (){var statearr_13628 = state_13609;
(statearr_13628[(13)] = inst_13490__$1);

(statearr_13628[(18)] = inst_13506);

(statearr_13628[(14)] = inst_13491__$1);

(statearr_13628[(16)] = inst_13489__$1);

(statearr_13628[(17)] = inst_13488__$1);

return statearr_13628;
})();
var statearr_13629_14754 = state_13609__$1;
(statearr_13629_14754[(2)] = null);

(statearr_13629_14754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (21))){
var inst_13533 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13633_14755 = state_13609__$1;
(statearr_13633_14755[(2)] = inst_13533);

(statearr_13633_14755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (31))){
var inst_13559 = (state_13609[(11)]);
var inst_13563 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13559);
var state_13609__$1 = state_13609;
var statearr_13634_14756 = state_13609__$1;
(statearr_13634_14756[(2)] = inst_13563);

(statearr_13634_14756[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (32))){
var inst_13553 = (state_13609[(19)]);
var inst_13554 = (state_13609[(10)]);
var inst_13551 = (state_13609[(20)]);
var inst_13552 = (state_13609[(12)]);
var inst_13565 = (state_13609[(2)]);
var inst_13566 = (inst_13554 + (1));
var tmp13630 = inst_13553;
var tmp13631 = inst_13551;
var tmp13632 = inst_13552;
var inst_13551__$1 = tmp13631;
var inst_13552__$1 = tmp13632;
var inst_13553__$1 = tmp13630;
var inst_13554__$1 = inst_13566;
var state_13609__$1 = (function (){var statearr_13635 = state_13609;
(statearr_13635[(19)] = inst_13553__$1);

(statearr_13635[(10)] = inst_13554__$1);

(statearr_13635[(20)] = inst_13551__$1);

(statearr_13635[(12)] = inst_13552__$1);

(statearr_13635[(21)] = inst_13565);

return statearr_13635;
})();
var statearr_13636_14757 = state_13609__$1;
(statearr_13636_14757[(2)] = null);

(statearr_13636_14757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (40))){
var inst_13578 = (state_13609[(22)]);
var inst_13582 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13578);
var state_13609__$1 = state_13609;
var statearr_13637_14758 = state_13609__$1;
(statearr_13637_14758[(2)] = inst_13582);

(statearr_13637_14758[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (33))){
var inst_13569 = (state_13609[(23)]);
var inst_13571 = cljs.core.chunked_seq_QMARK_(inst_13569);
var state_13609__$1 = state_13609;
if(inst_13571){
var statearr_13638_14759 = state_13609__$1;
(statearr_13638_14759[(1)] = (36));

} else {
var statearr_13639_14760 = state_13609__$1;
(statearr_13639_14760[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (13))){
var inst_13500 = (state_13609[(24)]);
var inst_13503 = cljs.core.async.close_BANG_(inst_13500);
var state_13609__$1 = state_13609;
var statearr_13640_14761 = state_13609__$1;
(statearr_13640_14761[(2)] = inst_13503);

(statearr_13640_14761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (22))){
var inst_13523 = (state_13609[(8)]);
var inst_13526 = cljs.core.async.close_BANG_(inst_13523);
var state_13609__$1 = state_13609;
var statearr_13641_14762 = state_13609__$1;
(statearr_13641_14762[(2)] = inst_13526);

(statearr_13641_14762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (36))){
var inst_13569 = (state_13609[(23)]);
var inst_13573 = cljs.core.chunk_first(inst_13569);
var inst_13574 = cljs.core.chunk_rest(inst_13569);
var inst_13575 = cljs.core.count(inst_13573);
var inst_13551 = inst_13574;
var inst_13552 = inst_13573;
var inst_13553 = inst_13575;
var inst_13554 = (0);
var state_13609__$1 = (function (){var statearr_13642 = state_13609;
(statearr_13642[(19)] = inst_13553);

(statearr_13642[(10)] = inst_13554);

(statearr_13642[(20)] = inst_13551);

(statearr_13642[(12)] = inst_13552);

return statearr_13642;
})();
var statearr_13643_14769 = state_13609__$1;
(statearr_13643_14769[(2)] = null);

(statearr_13643_14769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (41))){
var inst_13569 = (state_13609[(23)]);
var inst_13584 = (state_13609[(2)]);
var inst_13585 = cljs.core.next(inst_13569);
var inst_13551 = inst_13585;
var inst_13552 = null;
var inst_13553 = (0);
var inst_13554 = (0);
var state_13609__$1 = (function (){var statearr_13644 = state_13609;
(statearr_13644[(19)] = inst_13553);

(statearr_13644[(25)] = inst_13584);

(statearr_13644[(10)] = inst_13554);

(statearr_13644[(20)] = inst_13551);

(statearr_13644[(12)] = inst_13552);

return statearr_13644;
})();
var statearr_13645_14770 = state_13609__$1;
(statearr_13645_14770[(2)] = null);

(statearr_13645_14770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (43))){
var state_13609__$1 = state_13609;
var statearr_13646_14771 = state_13609__$1;
(statearr_13646_14771[(2)] = null);

(statearr_13646_14771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (29))){
var inst_13593 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13647_14772 = state_13609__$1;
(statearr_13647_14772[(2)] = inst_13593);

(statearr_13647_14772[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (44))){
var inst_13602 = (state_13609[(2)]);
var state_13609__$1 = (function (){var statearr_13648 = state_13609;
(statearr_13648[(26)] = inst_13602);

return statearr_13648;
})();
var statearr_13649_14773 = state_13609__$1;
(statearr_13649_14773[(2)] = null);

(statearr_13649_14773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (6))){
var inst_13543 = (state_13609[(27)]);
var inst_13542 = cljs.core.deref(cs);
var inst_13543__$1 = cljs.core.keys(inst_13542);
var inst_13544 = cljs.core.count(inst_13543__$1);
var inst_13545 = cljs.core.reset_BANG_(dctr,inst_13544);
var inst_13550 = cljs.core.seq(inst_13543__$1);
var inst_13551 = inst_13550;
var inst_13552 = null;
var inst_13553 = (0);
var inst_13554 = (0);
var state_13609__$1 = (function (){var statearr_13650 = state_13609;
(statearr_13650[(19)] = inst_13553);

(statearr_13650[(27)] = inst_13543__$1);

(statearr_13650[(10)] = inst_13554);

(statearr_13650[(28)] = inst_13545);

(statearr_13650[(20)] = inst_13551);

(statearr_13650[(12)] = inst_13552);

return statearr_13650;
})();
var statearr_13651_14774 = state_13609__$1;
(statearr_13651_14774[(2)] = null);

(statearr_13651_14774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (28))){
var inst_13569 = (state_13609[(23)]);
var inst_13551 = (state_13609[(20)]);
var inst_13569__$1 = cljs.core.seq(inst_13551);
var state_13609__$1 = (function (){var statearr_13652 = state_13609;
(statearr_13652[(23)] = inst_13569__$1);

return statearr_13652;
})();
if(inst_13569__$1){
var statearr_13653_14775 = state_13609__$1;
(statearr_13653_14775[(1)] = (33));

} else {
var statearr_13654_14776 = state_13609__$1;
(statearr_13654_14776[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (25))){
var inst_13553 = (state_13609[(19)]);
var inst_13554 = (state_13609[(10)]);
var inst_13556 = (inst_13554 < inst_13553);
var inst_13557 = inst_13556;
var state_13609__$1 = state_13609;
if(cljs.core.truth_(inst_13557)){
var statearr_13655_14777 = state_13609__$1;
(statearr_13655_14777[(1)] = (27));

} else {
var statearr_13656_14778 = state_13609__$1;
(statearr_13656_14778[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (34))){
var state_13609__$1 = state_13609;
var statearr_13657_14779 = state_13609__$1;
(statearr_13657_14779[(2)] = null);

(statearr_13657_14779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (17))){
var state_13609__$1 = state_13609;
var statearr_13658_14780 = state_13609__$1;
(statearr_13658_14780[(2)] = null);

(statearr_13658_14780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (3))){
var inst_13607 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13609__$1,inst_13607);
} else {
if((state_val_13610 === (12))){
var inst_13538 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13659_14781 = state_13609__$1;
(statearr_13659_14781[(2)] = inst_13538);

(statearr_13659_14781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (2))){
var state_13609__$1 = state_13609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13609__$1,(4),ch);
} else {
if((state_val_13610 === (23))){
var state_13609__$1 = state_13609;
var statearr_13660_14782 = state_13609__$1;
(statearr_13660_14782[(2)] = null);

(statearr_13660_14782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (35))){
var inst_13591 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13661_14789 = state_13609__$1;
(statearr_13661_14789[(2)] = inst_13591);

(statearr_13661_14789[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (19))){
var inst_13510 = (state_13609[(7)]);
var inst_13514 = cljs.core.chunk_first(inst_13510);
var inst_13515 = cljs.core.chunk_rest(inst_13510);
var inst_13516 = cljs.core.count(inst_13514);
var inst_13488 = inst_13515;
var inst_13489 = inst_13514;
var inst_13490 = inst_13516;
var inst_13491 = (0);
var state_13609__$1 = (function (){var statearr_13662 = state_13609;
(statearr_13662[(13)] = inst_13490);

(statearr_13662[(14)] = inst_13491);

(statearr_13662[(16)] = inst_13489);

(statearr_13662[(17)] = inst_13488);

return statearr_13662;
})();
var statearr_13663_14790 = state_13609__$1;
(statearr_13663_14790[(2)] = null);

(statearr_13663_14790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (11))){
var inst_13510 = (state_13609[(7)]);
var inst_13488 = (state_13609[(17)]);
var inst_13510__$1 = cljs.core.seq(inst_13488);
var state_13609__$1 = (function (){var statearr_13664 = state_13609;
(statearr_13664[(7)] = inst_13510__$1);

return statearr_13664;
})();
if(inst_13510__$1){
var statearr_13665_14791 = state_13609__$1;
(statearr_13665_14791[(1)] = (16));

} else {
var statearr_13666_14792 = state_13609__$1;
(statearr_13666_14792[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (9))){
var inst_13540 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13667_14793 = state_13609__$1;
(statearr_13667_14793[(2)] = inst_13540);

(statearr_13667_14793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (5))){
var inst_13486 = cljs.core.deref(cs);
var inst_13487 = cljs.core.seq(inst_13486);
var inst_13488 = inst_13487;
var inst_13489 = null;
var inst_13490 = (0);
var inst_13491 = (0);
var state_13609__$1 = (function (){var statearr_13668 = state_13609;
(statearr_13668[(13)] = inst_13490);

(statearr_13668[(14)] = inst_13491);

(statearr_13668[(16)] = inst_13489);

(statearr_13668[(17)] = inst_13488);

return statearr_13668;
})();
var statearr_13669_14794 = state_13609__$1;
(statearr_13669_14794[(2)] = null);

(statearr_13669_14794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (14))){
var state_13609__$1 = state_13609;
var statearr_13670_14795 = state_13609__$1;
(statearr_13670_14795[(2)] = null);

(statearr_13670_14795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (45))){
var inst_13599 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13671_14796 = state_13609__$1;
(statearr_13671_14796[(2)] = inst_13599);

(statearr_13671_14796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (26))){
var inst_13543 = (state_13609[(27)]);
var inst_13595 = (state_13609[(2)]);
var inst_13596 = cljs.core.seq(inst_13543);
var state_13609__$1 = (function (){var statearr_13672 = state_13609;
(statearr_13672[(29)] = inst_13595);

return statearr_13672;
})();
if(inst_13596){
var statearr_13673_14797 = state_13609__$1;
(statearr_13673_14797[(1)] = (42));

} else {
var statearr_13674_14798 = state_13609__$1;
(statearr_13674_14798[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (16))){
var inst_13510 = (state_13609[(7)]);
var inst_13512 = cljs.core.chunked_seq_QMARK_(inst_13510);
var state_13609__$1 = state_13609;
if(inst_13512){
var statearr_13675_14799 = state_13609__$1;
(statearr_13675_14799[(1)] = (19));

} else {
var statearr_13676_14800 = state_13609__$1;
(statearr_13676_14800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (38))){
var inst_13588 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13677_14801 = state_13609__$1;
(statearr_13677_14801[(2)] = inst_13588);

(statearr_13677_14801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (30))){
var state_13609__$1 = state_13609;
var statearr_13678_14802 = state_13609__$1;
(statearr_13678_14802[(2)] = null);

(statearr_13678_14802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (10))){
var inst_13491 = (state_13609[(14)]);
var inst_13489 = (state_13609[(16)]);
var inst_13499 = cljs.core._nth(inst_13489,inst_13491);
var inst_13500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13499,(0),null);
var inst_13501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13499,(1),null);
var state_13609__$1 = (function (){var statearr_13679 = state_13609;
(statearr_13679[(24)] = inst_13500);

return statearr_13679;
})();
if(cljs.core.truth_(inst_13501)){
var statearr_13680_14803 = state_13609__$1;
(statearr_13680_14803[(1)] = (13));

} else {
var statearr_13681_14804 = state_13609__$1;
(statearr_13681_14804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (18))){
var inst_13536 = (state_13609[(2)]);
var state_13609__$1 = state_13609;
var statearr_13682_14805 = state_13609__$1;
(statearr_13682_14805[(2)] = inst_13536);

(statearr_13682_14805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (42))){
var state_13609__$1 = state_13609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13609__$1,(45),dchan);
} else {
if((state_val_13610 === (37))){
var inst_13569 = (state_13609[(23)]);
var inst_13479 = (state_13609[(9)]);
var inst_13578 = (state_13609[(22)]);
var inst_13578__$1 = cljs.core.first(inst_13569);
var inst_13579 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13578__$1,inst_13479,done);
var state_13609__$1 = (function (){var statearr_13683 = state_13609;
(statearr_13683[(22)] = inst_13578__$1);

return statearr_13683;
})();
if(cljs.core.truth_(inst_13579)){
var statearr_13684_14806 = state_13609__$1;
(statearr_13684_14806[(1)] = (39));

} else {
var statearr_13685_14807 = state_13609__$1;
(statearr_13685_14807[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13610 === (8))){
var inst_13490 = (state_13609[(13)]);
var inst_13491 = (state_13609[(14)]);
var inst_13493 = (inst_13491 < inst_13490);
var inst_13494 = inst_13493;
var state_13609__$1 = state_13609;
if(cljs.core.truth_(inst_13494)){
var statearr_13686_14814 = state_13609__$1;
(statearr_13686_14814[(1)] = (10));

} else {
var statearr_13687_14815 = state_13609__$1;
(statearr_13687_14815[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__12971__auto__ = null;
var cljs$core$async$mult_$_state_machine__12971__auto____0 = (function (){
var statearr_13688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13688[(0)] = cljs$core$async$mult_$_state_machine__12971__auto__);

(statearr_13688[(1)] = (1));

return statearr_13688;
});
var cljs$core$async$mult_$_state_machine__12971__auto____1 = (function (state_13609){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13609);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13689){var ex__12974__auto__ = e13689;
var statearr_13690_14816 = state_13609;
(statearr_13690_14816[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13609[(4)]))){
var statearr_13691_14817 = state_13609;
(statearr_13691_14817[(1)] = cljs.core.first((state_13609[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14818 = state_13609;
state_13609 = G__14818;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12971__auto__ = function(state_13609){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12971__auto____1.call(this,state_13609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12971__auto____0;
cljs$core$async$mult_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12971__auto____1;
return cljs$core$async$mult_$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13692 = f__13006__auto__();
(statearr_13692[(6)] = c__13004__auto___14730);

return statearr_13692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13694 = arguments.length;
switch (G__13694) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_14820 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_14820(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14821 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_14821(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14822 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14822(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14823 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_14823(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14824 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14824(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14825 = arguments.length;
var i__5770__auto___14826 = (0);
while(true){
if((i__5770__auto___14826 < len__5769__auto___14825)){
args__5775__auto__.push((arguments[i__5770__auto___14826]));

var G__14827 = (i__5770__auto___14826 + (1));
i__5770__auto___14826 = G__14827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13699){
var map__13700 = p__13699;
var map__13700__$1 = cljs.core.__destructure_map(map__13700);
var opts = map__13700__$1;
var statearr_13701_14828 = state;
(statearr_13701_14828[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13702_14829 = state;
(statearr_13702_14829[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_13703_14830 = state;
(statearr_13703_14830[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13695){
var G__13696 = cljs.core.first(seq13695);
var seq13695__$1 = cljs.core.next(seq13695);
var G__13697 = cljs.core.first(seq13695__$1);
var seq13695__$2 = cljs.core.next(seq13695__$1);
var G__13698 = cljs.core.first(seq13695__$2);
var seq13695__$3 = cljs.core.next(seq13695__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13696,G__13697,G__13698,seq13695__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13704 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13705){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13705 = meta13705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13706,meta13705__$1){
var self__ = this;
var _13706__$1 = this;
return (new cljs.core.async.t_cljs$core$async13704(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13705__$1));
}));

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13706){
var self__ = this;
var _13706__$1 = this;
return self__.meta13705;
}));

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13704.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13705","meta13705",-1345162642,null)], null);
}));

(cljs.core.async.t_cljs$core$async13704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13704");

(cljs.core.async.t_cljs$core$async13704.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13704.
 */
cljs.core.async.__GT_t_cljs$core$async13704 = (function cljs$core$async$mix_$___GT_t_cljs$core$async13704(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13705){
return (new cljs.core.async.t_cljs$core$async13704(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13705));
});

}

return (new cljs.core.async.t_cljs$core$async13704(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13004__auto___14831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13774){
var state_val_13775 = (state_13774[(1)]);
if((state_val_13775 === (7))){
var inst_13734 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
if(cljs.core.truth_(inst_13734)){
var statearr_13776_14832 = state_13774__$1;
(statearr_13776_14832[(1)] = (8));

} else {
var statearr_13777_14833 = state_13774__$1;
(statearr_13777_14833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (20))){
var inst_13727 = (state_13774[(7)]);
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13774__$1,(23),out,inst_13727);
} else {
if((state_val_13775 === (1))){
var inst_13710 = calc_state();
var inst_13711 = cljs.core.__destructure_map(inst_13710);
var inst_13712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13715 = inst_13710;
var state_13774__$1 = (function (){var statearr_13778 = state_13774;
(statearr_13778[(8)] = inst_13714);

(statearr_13778[(9)] = inst_13715);

(statearr_13778[(10)] = inst_13713);

(statearr_13778[(11)] = inst_13712);

return statearr_13778;
})();
var statearr_13779_14834 = state_13774__$1;
(statearr_13779_14834[(2)] = null);

(statearr_13779_14834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (24))){
var inst_13718 = (state_13774[(12)]);
var inst_13715 = inst_13718;
var state_13774__$1 = (function (){var statearr_13780 = state_13774;
(statearr_13780[(9)] = inst_13715);

return statearr_13780;
})();
var statearr_13781_14835 = state_13774__$1;
(statearr_13781_14835[(2)] = null);

(statearr_13781_14835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (4))){
var inst_13727 = (state_13774[(7)]);
var inst_13729 = (state_13774[(13)]);
var inst_13726 = (state_13774[(2)]);
var inst_13727__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13726,(0),null);
var inst_13728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13726,(1),null);
var inst_13729__$1 = (inst_13727__$1 == null);
var state_13774__$1 = (function (){var statearr_13782 = state_13774;
(statearr_13782[(7)] = inst_13727__$1);

(statearr_13782[(13)] = inst_13729__$1);

(statearr_13782[(14)] = inst_13728);

return statearr_13782;
})();
if(cljs.core.truth_(inst_13729__$1)){
var statearr_13783_14836 = state_13774__$1;
(statearr_13783_14836[(1)] = (5));

} else {
var statearr_13784_14837 = state_13774__$1;
(statearr_13784_14837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (15))){
var inst_13719 = (state_13774[(15)]);
var inst_13748 = (state_13774[(16)]);
var inst_13748__$1 = cljs.core.empty_QMARK_(inst_13719);
var state_13774__$1 = (function (){var statearr_13785 = state_13774;
(statearr_13785[(16)] = inst_13748__$1);

return statearr_13785;
})();
if(inst_13748__$1){
var statearr_13786_14838 = state_13774__$1;
(statearr_13786_14838[(1)] = (17));

} else {
var statearr_13787_14839 = state_13774__$1;
(statearr_13787_14839[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (21))){
var inst_13718 = (state_13774[(12)]);
var inst_13715 = inst_13718;
var state_13774__$1 = (function (){var statearr_13788 = state_13774;
(statearr_13788[(9)] = inst_13715);

return statearr_13788;
})();
var statearr_13789_14840 = state_13774__$1;
(statearr_13789_14840[(2)] = null);

(statearr_13789_14840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (13))){
var inst_13741 = (state_13774[(2)]);
var inst_13742 = calc_state();
var inst_13715 = inst_13742;
var state_13774__$1 = (function (){var statearr_13790 = state_13774;
(statearr_13790[(9)] = inst_13715);

(statearr_13790[(17)] = inst_13741);

return statearr_13790;
})();
var statearr_13791_14841 = state_13774__$1;
(statearr_13791_14841[(2)] = null);

(statearr_13791_14841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (22))){
var inst_13768 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13792_14842 = state_13774__$1;
(statearr_13792_14842[(2)] = inst_13768);

(statearr_13792_14842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (6))){
var inst_13728 = (state_13774[(14)]);
var inst_13732 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13728,change);
var state_13774__$1 = state_13774;
var statearr_13793_14843 = state_13774__$1;
(statearr_13793_14843[(2)] = inst_13732);

(statearr_13793_14843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (25))){
var state_13774__$1 = state_13774;
var statearr_13794_14844 = state_13774__$1;
(statearr_13794_14844[(2)] = null);

(statearr_13794_14844[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (17))){
var inst_13720 = (state_13774[(18)]);
var inst_13728 = (state_13774[(14)]);
var inst_13750 = (inst_13720.cljs$core$IFn$_invoke$arity$1 ? inst_13720.cljs$core$IFn$_invoke$arity$1(inst_13728) : inst_13720.call(null,inst_13728));
var inst_13751 = cljs.core.not(inst_13750);
var state_13774__$1 = state_13774;
var statearr_13795_14845 = state_13774__$1;
(statearr_13795_14845[(2)] = inst_13751);

(statearr_13795_14845[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (3))){
var inst_13772 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13774__$1,inst_13772);
} else {
if((state_val_13775 === (12))){
var state_13774__$1 = state_13774;
var statearr_13796_14847 = state_13774__$1;
(statearr_13796_14847[(2)] = null);

(statearr_13796_14847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (2))){
var inst_13718 = (state_13774[(12)]);
var inst_13715 = (state_13774[(9)]);
var inst_13718__$1 = cljs.core.__destructure_map(inst_13715);
var inst_13719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13718__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13718__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13718__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13774__$1 = (function (){var statearr_13797 = state_13774;
(statearr_13797[(15)] = inst_13719);

(statearr_13797[(12)] = inst_13718__$1);

(statearr_13797[(18)] = inst_13720);

return statearr_13797;
})();
return cljs.core.async.ioc_alts_BANG_(state_13774__$1,(4),inst_13721);
} else {
if((state_val_13775 === (23))){
var inst_13759 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
if(cljs.core.truth_(inst_13759)){
var statearr_13798_14852 = state_13774__$1;
(statearr_13798_14852[(1)] = (24));

} else {
var statearr_13799_14853 = state_13774__$1;
(statearr_13799_14853[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (19))){
var inst_13754 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13800_14854 = state_13774__$1;
(statearr_13800_14854[(2)] = inst_13754);

(statearr_13800_14854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (11))){
var inst_13728 = (state_13774[(14)]);
var inst_13738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13728);
var state_13774__$1 = state_13774;
var statearr_13801_14855 = state_13774__$1;
(statearr_13801_14855[(2)] = inst_13738);

(statearr_13801_14855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (9))){
var inst_13719 = (state_13774[(15)]);
var inst_13745 = (state_13774[(19)]);
var inst_13728 = (state_13774[(14)]);
var inst_13745__$1 = (inst_13719.cljs$core$IFn$_invoke$arity$1 ? inst_13719.cljs$core$IFn$_invoke$arity$1(inst_13728) : inst_13719.call(null,inst_13728));
var state_13774__$1 = (function (){var statearr_13802 = state_13774;
(statearr_13802[(19)] = inst_13745__$1);

return statearr_13802;
})();
if(cljs.core.truth_(inst_13745__$1)){
var statearr_13803_14856 = state_13774__$1;
(statearr_13803_14856[(1)] = (14));

} else {
var statearr_13804_14857 = state_13774__$1;
(statearr_13804_14857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (5))){
var inst_13729 = (state_13774[(13)]);
var state_13774__$1 = state_13774;
var statearr_13805_14858 = state_13774__$1;
(statearr_13805_14858[(2)] = inst_13729);

(statearr_13805_14858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (14))){
var inst_13745 = (state_13774[(19)]);
var state_13774__$1 = state_13774;
var statearr_13806_14859 = state_13774__$1;
(statearr_13806_14859[(2)] = inst_13745);

(statearr_13806_14859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (26))){
var inst_13764 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13807_14860 = state_13774__$1;
(statearr_13807_14860[(2)] = inst_13764);

(statearr_13807_14860[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (16))){
var inst_13756 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
if(cljs.core.truth_(inst_13756)){
var statearr_13808_14861 = state_13774__$1;
(statearr_13808_14861[(1)] = (20));

} else {
var statearr_13809_14862 = state_13774__$1;
(statearr_13809_14862[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (10))){
var inst_13770 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13810_14863 = state_13774__$1;
(statearr_13810_14863[(2)] = inst_13770);

(statearr_13810_14863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (18))){
var inst_13748 = (state_13774[(16)]);
var state_13774__$1 = state_13774;
var statearr_13811_14864 = state_13774__$1;
(statearr_13811_14864[(2)] = inst_13748);

(statearr_13811_14864[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (8))){
var inst_13727 = (state_13774[(7)]);
var inst_13736 = (inst_13727 == null);
var state_13774__$1 = state_13774;
if(cljs.core.truth_(inst_13736)){
var statearr_13812_14865 = state_13774__$1;
(statearr_13812_14865[(1)] = (11));

} else {
var statearr_13813_14866 = state_13774__$1;
(statearr_13813_14866[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__12971__auto__ = null;
var cljs$core$async$mix_$_state_machine__12971__auto____0 = (function (){
var statearr_13814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13814[(0)] = cljs$core$async$mix_$_state_machine__12971__auto__);

(statearr_13814[(1)] = (1));

return statearr_13814;
});
var cljs$core$async$mix_$_state_machine__12971__auto____1 = (function (state_13774){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13774);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13815){var ex__12974__auto__ = e13815;
var statearr_13816_14867 = state_13774;
(statearr_13816_14867[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13774[(4)]))){
var statearr_13817_14868 = state_13774;
(statearr_13817_14868[(1)] = cljs.core.first((state_13774[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14869 = state_13774;
state_13774 = G__14869;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12971__auto__ = function(state_13774){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12971__auto____1.call(this,state_13774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12971__auto____0;
cljs$core$async$mix_$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12971__auto____1;
return cljs$core$async$mix_$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13818 = f__13006__auto__();
(statearr_13818[(6)] = c__13004__auto___14831);

return statearr_13818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14871 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14871(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14872 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14872(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14874 = (function() {
var G__14875 = null;
var G__14875__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__14875__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__14875 = function(p,v){
switch(arguments.length){
case 1:
return G__14875__1.call(this,p);
case 2:
return G__14875__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14875.cljs$core$IFn$_invoke$arity$1 = G__14875__1;
G__14875.cljs$core$IFn$_invoke$arity$2 = G__14875__2;
return G__14875;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13820 = arguments.length;
switch (G__13820) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14874(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14874(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__13823 = arguments.length;
switch (G__13823) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13821_SHARP_){
if(cljs.core.truth_((p1__13821_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13821_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13821_SHARP_.call(null,topic)))){
return p1__13821_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13821_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13824 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13825){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13825 = meta13825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13826,meta13825__$1){
var self__ = this;
var _13826__$1 = this;
return (new cljs.core.async.t_cljs$core$async13824(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13825__$1));
}));

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13826){
var self__ = this;
var _13826__$1 = this;
return self__.meta13825;
}));

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13825","meta13825",-1060801553,null)], null);
}));

(cljs.core.async.t_cljs$core$async13824.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13824");

(cljs.core.async.t_cljs$core$async13824.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13824");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13824.
 */
cljs.core.async.__GT_t_cljs$core$async13824 = (function cljs$core$async$__GT_t_cljs$core$async13824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13825){
return (new cljs.core.async.t_cljs$core$async13824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13825));
});

}

return (new cljs.core.async.t_cljs$core$async13824(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13004__auto___14881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13898){
var state_val_13899 = (state_13898[(1)]);
if((state_val_13899 === (7))){
var inst_13894 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13900_14883 = state_13898__$1;
(statearr_13900_14883[(2)] = inst_13894);

(statearr_13900_14883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (20))){
var state_13898__$1 = state_13898;
var statearr_13901_14884 = state_13898__$1;
(statearr_13901_14884[(2)] = null);

(statearr_13901_14884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (1))){
var state_13898__$1 = state_13898;
var statearr_13902_14885 = state_13898__$1;
(statearr_13902_14885[(2)] = null);

(statearr_13902_14885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (24))){
var inst_13877 = (state_13898[(7)]);
var inst_13886 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13877);
var state_13898__$1 = state_13898;
var statearr_13903_14886 = state_13898__$1;
(statearr_13903_14886[(2)] = inst_13886);

(statearr_13903_14886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (4))){
var inst_13829 = (state_13898[(8)]);
var inst_13829__$1 = (state_13898[(2)]);
var inst_13830 = (inst_13829__$1 == null);
var state_13898__$1 = (function (){var statearr_13904 = state_13898;
(statearr_13904[(8)] = inst_13829__$1);

return statearr_13904;
})();
if(cljs.core.truth_(inst_13830)){
var statearr_13905_14887 = state_13898__$1;
(statearr_13905_14887[(1)] = (5));

} else {
var statearr_13906_14888 = state_13898__$1;
(statearr_13906_14888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (15))){
var inst_13871 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13907_14889 = state_13898__$1;
(statearr_13907_14889[(2)] = inst_13871);

(statearr_13907_14889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (21))){
var inst_13891 = (state_13898[(2)]);
var state_13898__$1 = (function (){var statearr_13908 = state_13898;
(statearr_13908[(9)] = inst_13891);

return statearr_13908;
})();
var statearr_13909_14890 = state_13898__$1;
(statearr_13909_14890[(2)] = null);

(statearr_13909_14890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (13))){
var inst_13853 = (state_13898[(10)]);
var inst_13855 = cljs.core.chunked_seq_QMARK_(inst_13853);
var state_13898__$1 = state_13898;
if(inst_13855){
var statearr_13910_14891 = state_13898__$1;
(statearr_13910_14891[(1)] = (16));

} else {
var statearr_13911_14892 = state_13898__$1;
(statearr_13911_14892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (22))){
var inst_13883 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
if(cljs.core.truth_(inst_13883)){
var statearr_13912_14893 = state_13898__$1;
(statearr_13912_14893[(1)] = (23));

} else {
var statearr_13913_14894 = state_13898__$1;
(statearr_13913_14894[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (6))){
var inst_13879 = (state_13898[(11)]);
var inst_13877 = (state_13898[(7)]);
var inst_13829 = (state_13898[(8)]);
var inst_13877__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13829) : topic_fn.call(null,inst_13829));
var inst_13878 = cljs.core.deref(mults);
var inst_13879__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13878,inst_13877__$1);
var state_13898__$1 = (function (){var statearr_13914 = state_13898;
(statearr_13914[(11)] = inst_13879__$1);

(statearr_13914[(7)] = inst_13877__$1);

return statearr_13914;
})();
if(cljs.core.truth_(inst_13879__$1)){
var statearr_13915_14896 = state_13898__$1;
(statearr_13915_14896[(1)] = (19));

} else {
var statearr_13916_14897 = state_13898__$1;
(statearr_13916_14897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (25))){
var inst_13888 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13917_14898 = state_13898__$1;
(statearr_13917_14898[(2)] = inst_13888);

(statearr_13917_14898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (17))){
var inst_13853 = (state_13898[(10)]);
var inst_13862 = cljs.core.first(inst_13853);
var inst_13863 = cljs.core.async.muxch_STAR_(inst_13862);
var inst_13864 = cljs.core.async.close_BANG_(inst_13863);
var inst_13865 = cljs.core.next(inst_13853);
var inst_13839 = inst_13865;
var inst_13840 = null;
var inst_13841 = (0);
var inst_13842 = (0);
var state_13898__$1 = (function (){var statearr_13918 = state_13898;
(statearr_13918[(12)] = inst_13841);

(statearr_13918[(13)] = inst_13864);

(statearr_13918[(14)] = inst_13839);

(statearr_13918[(15)] = inst_13840);

(statearr_13918[(16)] = inst_13842);

return statearr_13918;
})();
var statearr_13919_14899 = state_13898__$1;
(statearr_13919_14899[(2)] = null);

(statearr_13919_14899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (3))){
var inst_13896 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13898__$1,inst_13896);
} else {
if((state_val_13899 === (12))){
var inst_13873 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13920_14904 = state_13898__$1;
(statearr_13920_14904[(2)] = inst_13873);

(statearr_13920_14904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (2))){
var state_13898__$1 = state_13898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13898__$1,(4),ch);
} else {
if((state_val_13899 === (23))){
var state_13898__$1 = state_13898;
var statearr_13921_14905 = state_13898__$1;
(statearr_13921_14905[(2)] = null);

(statearr_13921_14905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (19))){
var inst_13879 = (state_13898[(11)]);
var inst_13829 = (state_13898[(8)]);
var inst_13881 = cljs.core.async.muxch_STAR_(inst_13879);
var state_13898__$1 = state_13898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13898__$1,(22),inst_13881,inst_13829);
} else {
if((state_val_13899 === (11))){
var inst_13853 = (state_13898[(10)]);
var inst_13839 = (state_13898[(14)]);
var inst_13853__$1 = cljs.core.seq(inst_13839);
var state_13898__$1 = (function (){var statearr_13922 = state_13898;
(statearr_13922[(10)] = inst_13853__$1);

return statearr_13922;
})();
if(inst_13853__$1){
var statearr_13923_14906 = state_13898__$1;
(statearr_13923_14906[(1)] = (13));

} else {
var statearr_13924_14907 = state_13898__$1;
(statearr_13924_14907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (9))){
var inst_13875 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13925_14908 = state_13898__$1;
(statearr_13925_14908[(2)] = inst_13875);

(statearr_13925_14908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (5))){
var inst_13836 = cljs.core.deref(mults);
var inst_13837 = cljs.core.vals(inst_13836);
var inst_13838 = cljs.core.seq(inst_13837);
var inst_13839 = inst_13838;
var inst_13840 = null;
var inst_13841 = (0);
var inst_13842 = (0);
var state_13898__$1 = (function (){var statearr_13926 = state_13898;
(statearr_13926[(12)] = inst_13841);

(statearr_13926[(14)] = inst_13839);

(statearr_13926[(15)] = inst_13840);

(statearr_13926[(16)] = inst_13842);

return statearr_13926;
})();
var statearr_13927_14909 = state_13898__$1;
(statearr_13927_14909[(2)] = null);

(statearr_13927_14909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (14))){
var state_13898__$1 = state_13898;
var statearr_13931_14910 = state_13898__$1;
(statearr_13931_14910[(2)] = null);

(statearr_13931_14910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (16))){
var inst_13853 = (state_13898[(10)]);
var inst_13857 = cljs.core.chunk_first(inst_13853);
var inst_13858 = cljs.core.chunk_rest(inst_13853);
var inst_13859 = cljs.core.count(inst_13857);
var inst_13839 = inst_13858;
var inst_13840 = inst_13857;
var inst_13841 = inst_13859;
var inst_13842 = (0);
var state_13898__$1 = (function (){var statearr_13932 = state_13898;
(statearr_13932[(12)] = inst_13841);

(statearr_13932[(14)] = inst_13839);

(statearr_13932[(15)] = inst_13840);

(statearr_13932[(16)] = inst_13842);

return statearr_13932;
})();
var statearr_13933_14911 = state_13898__$1;
(statearr_13933_14911[(2)] = null);

(statearr_13933_14911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (10))){
var inst_13841 = (state_13898[(12)]);
var inst_13839 = (state_13898[(14)]);
var inst_13840 = (state_13898[(15)]);
var inst_13842 = (state_13898[(16)]);
var inst_13847 = cljs.core._nth(inst_13840,inst_13842);
var inst_13848 = cljs.core.async.muxch_STAR_(inst_13847);
var inst_13849 = cljs.core.async.close_BANG_(inst_13848);
var inst_13850 = (inst_13842 + (1));
var tmp13928 = inst_13841;
var tmp13929 = inst_13839;
var tmp13930 = inst_13840;
var inst_13839__$1 = tmp13929;
var inst_13840__$1 = tmp13930;
var inst_13841__$1 = tmp13928;
var inst_13842__$1 = inst_13850;
var state_13898__$1 = (function (){var statearr_13934 = state_13898;
(statearr_13934[(12)] = inst_13841__$1);

(statearr_13934[(14)] = inst_13839__$1);

(statearr_13934[(15)] = inst_13840__$1);

(statearr_13934[(17)] = inst_13849);

(statearr_13934[(16)] = inst_13842__$1);

return statearr_13934;
})();
var statearr_13935_14919 = state_13898__$1;
(statearr_13935_14919[(2)] = null);

(statearr_13935_14919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (18))){
var inst_13868 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13936_14926 = state_13898__$1;
(statearr_13936_14926[(2)] = inst_13868);

(statearr_13936_14926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (8))){
var inst_13841 = (state_13898[(12)]);
var inst_13842 = (state_13898[(16)]);
var inst_13844 = (inst_13842 < inst_13841);
var inst_13845 = inst_13844;
var state_13898__$1 = state_13898;
if(cljs.core.truth_(inst_13845)){
var statearr_13937_14927 = state_13898__$1;
(statearr_13937_14927[(1)] = (10));

} else {
var statearr_13938_14931 = state_13898__$1;
(statearr_13938_14931[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_13939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13939[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_13939[(1)] = (1));

return statearr_13939;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_13898){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13898);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e13940){var ex__12974__auto__ = e13940;
var statearr_13941_14936 = state_13898;
(statearr_13941_14936[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13898[(4)]))){
var statearr_13942_14937 = state_13898;
(statearr_13942_14937[(1)] = cljs.core.first((state_13898[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14938 = state_13898;
state_13898 = G__14938;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_13898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_13898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_13943 = f__13006__auto__();
(statearr_13943[(6)] = c__13004__auto___14881);

return statearr_13943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13945 = arguments.length;
switch (G__13945) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13947 = arguments.length;
switch (G__13947) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__13949 = arguments.length;
switch (G__13949) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13004__auto___14944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_13992){
var state_val_13993 = (state_13992[(1)]);
if((state_val_13993 === (7))){
var state_13992__$1 = state_13992;
var statearr_13994_14945 = state_13992__$1;
(statearr_13994_14945[(2)] = null);

(statearr_13994_14945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (1))){
var state_13992__$1 = state_13992;
var statearr_13995_14946 = state_13992__$1;
(statearr_13995_14946[(2)] = null);

(statearr_13995_14946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (4))){
var inst_13953 = (state_13992[(7)]);
var inst_13952 = (state_13992[(8)]);
var inst_13955 = (inst_13953 < inst_13952);
var state_13992__$1 = state_13992;
if(cljs.core.truth_(inst_13955)){
var statearr_13996_14947 = state_13992__$1;
(statearr_13996_14947[(1)] = (6));

} else {
var statearr_13997_14948 = state_13992__$1;
(statearr_13997_14948[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (15))){
var inst_13978 = (state_13992[(9)]);
var inst_13983 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13978);
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13992__$1,(17),out,inst_13983);
} else {
if((state_val_13993 === (13))){
var inst_13978 = (state_13992[(9)]);
var inst_13978__$1 = (state_13992[(2)]);
var inst_13979 = cljs.core.some(cljs.core.nil_QMARK_,inst_13978__$1);
var state_13992__$1 = (function (){var statearr_13998 = state_13992;
(statearr_13998[(9)] = inst_13978__$1);

return statearr_13998;
})();
if(cljs.core.truth_(inst_13979)){
var statearr_13999_14953 = state_13992__$1;
(statearr_13999_14953[(1)] = (14));

} else {
var statearr_14000_14954 = state_13992__$1;
(statearr_14000_14954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (6))){
var state_13992__$1 = state_13992;
var statearr_14001_14955 = state_13992__$1;
(statearr_14001_14955[(2)] = null);

(statearr_14001_14955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (17))){
var inst_13985 = (state_13992[(2)]);
var state_13992__$1 = (function (){var statearr_14003 = state_13992;
(statearr_14003[(10)] = inst_13985);

return statearr_14003;
})();
var statearr_14004_14956 = state_13992__$1;
(statearr_14004_14956[(2)] = null);

(statearr_14004_14956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (3))){
var inst_13990 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13992__$1,inst_13990);
} else {
if((state_val_13993 === (12))){
var _ = (function (){var statearr_14005 = state_13992;
(statearr_14005[(4)] = cljs.core.rest((state_13992[(4)])));

return statearr_14005;
})();
var state_13992__$1 = state_13992;
var ex14002 = (state_13992__$1[(2)]);
var statearr_14006_14957 = state_13992__$1;
(statearr_14006_14957[(5)] = ex14002);


if((ex14002 instanceof Object)){
var statearr_14007_14962 = state_13992__$1;
(statearr_14007_14962[(1)] = (11));

(statearr_14007_14962[(5)] = null);

} else {
throw ex14002;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (2))){
var inst_13951 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13952 = cnt;
var inst_13953 = (0);
var state_13992__$1 = (function (){var statearr_14008 = state_13992;
(statearr_14008[(7)] = inst_13953);

(statearr_14008[(8)] = inst_13952);

(statearr_14008[(11)] = inst_13951);

return statearr_14008;
})();
var statearr_14009_14965 = state_13992__$1;
(statearr_14009_14965[(2)] = null);

(statearr_14009_14965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (11))){
var inst_13957 = (state_13992[(2)]);
var inst_13958 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13992__$1 = (function (){var statearr_14010 = state_13992;
(statearr_14010[(12)] = inst_13957);

return statearr_14010;
})();
var statearr_14011_14970 = state_13992__$1;
(statearr_14011_14970[(2)] = inst_13958);

(statearr_14011_14970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (9))){
var inst_13953 = (state_13992[(7)]);
var _ = (function (){var statearr_14012 = state_13992;
(statearr_14012[(4)] = cljs.core.cons((12),(state_13992[(4)])));

return statearr_14012;
})();
var inst_13964 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13953) : chs__$1.call(null,inst_13953));
var inst_13965 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13953) : done.call(null,inst_13953));
var inst_13966 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13964,inst_13965);
var ___$1 = (function (){var statearr_14013 = state_13992;
(statearr_14013[(4)] = cljs.core.rest((state_13992[(4)])));

return statearr_14013;
})();
var state_13992__$1 = state_13992;
var statearr_14014_14971 = state_13992__$1;
(statearr_14014_14971[(2)] = inst_13966);

(statearr_14014_14971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (5))){
var inst_13976 = (state_13992[(2)]);
var state_13992__$1 = (function (){var statearr_14015 = state_13992;
(statearr_14015[(13)] = inst_13976);

return statearr_14015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13992__$1,(13),dchan);
} else {
if((state_val_13993 === (14))){
var inst_13981 = cljs.core.async.close_BANG_(out);
var state_13992__$1 = state_13992;
var statearr_14016_14972 = state_13992__$1;
(statearr_14016_14972[(2)] = inst_13981);

(statearr_14016_14972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (16))){
var inst_13988 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
var statearr_14017_14973 = state_13992__$1;
(statearr_14017_14973[(2)] = inst_13988);

(statearr_14017_14973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (10))){
var inst_13953 = (state_13992[(7)]);
var inst_13969 = (state_13992[(2)]);
var inst_13970 = (inst_13953 + (1));
var inst_13953__$1 = inst_13970;
var state_13992__$1 = (function (){var statearr_14018 = state_13992;
(statearr_14018[(7)] = inst_13953__$1);

(statearr_14018[(14)] = inst_13969);

return statearr_14018;
})();
var statearr_14019_14974 = state_13992__$1;
(statearr_14019_14974[(2)] = null);

(statearr_14019_14974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (8))){
var inst_13974 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
var statearr_14020_14975 = state_13992__$1;
(statearr_14020_14975[(2)] = inst_13974);

(statearr_14020_14975[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_14021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14021[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_14021[(1)] = (1));

return statearr_14021;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_13992){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_13992);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14022){var ex__12974__auto__ = e14022;
var statearr_14023_14976 = state_13992;
(statearr_14023_14976[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_13992[(4)]))){
var statearr_14024_14977 = state_13992;
(statearr_14024_14977[(1)] = cljs.core.first((state_13992[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14978 = state_13992;
state_13992 = G__14978;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_13992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_13992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14025 = f__13006__auto__();
(statearr_14025[(6)] = c__13004__auto___14944);

return statearr_14025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14028 = arguments.length;
switch (G__14028) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13004__auto___14980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_14060){
var state_val_14061 = (state_14060[(1)]);
if((state_val_14061 === (7))){
var inst_14040 = (state_14060[(7)]);
var inst_14039 = (state_14060[(8)]);
var inst_14039__$1 = (state_14060[(2)]);
var inst_14040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14039__$1,(0),null);
var inst_14041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14039__$1,(1),null);
var inst_14042 = (inst_14040__$1 == null);
var state_14060__$1 = (function (){var statearr_14062 = state_14060;
(statearr_14062[(9)] = inst_14041);

(statearr_14062[(7)] = inst_14040__$1);

(statearr_14062[(8)] = inst_14039__$1);

return statearr_14062;
})();
if(cljs.core.truth_(inst_14042)){
var statearr_14063_14985 = state_14060__$1;
(statearr_14063_14985[(1)] = (8));

} else {
var statearr_14064_14986 = state_14060__$1;
(statearr_14064_14986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (1))){
var inst_14029 = cljs.core.vec(chs);
var inst_14030 = inst_14029;
var state_14060__$1 = (function (){var statearr_14065 = state_14060;
(statearr_14065[(10)] = inst_14030);

return statearr_14065;
})();
var statearr_14066_14987 = state_14060__$1;
(statearr_14066_14987[(2)] = null);

(statearr_14066_14987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (4))){
var inst_14030 = (state_14060[(10)]);
var state_14060__$1 = state_14060;
return cljs.core.async.ioc_alts_BANG_(state_14060__$1,(7),inst_14030);
} else {
if((state_val_14061 === (6))){
var inst_14056 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
var statearr_14067_14988 = state_14060__$1;
(statearr_14067_14988[(2)] = inst_14056);

(statearr_14067_14988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (3))){
var inst_14058 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14060__$1,inst_14058);
} else {
if((state_val_14061 === (2))){
var inst_14030 = (state_14060[(10)]);
var inst_14032 = cljs.core.count(inst_14030);
var inst_14033 = (inst_14032 > (0));
var state_14060__$1 = state_14060;
if(cljs.core.truth_(inst_14033)){
var statearr_14069_14989 = state_14060__$1;
(statearr_14069_14989[(1)] = (4));

} else {
var statearr_14070_14990 = state_14060__$1;
(statearr_14070_14990[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (11))){
var inst_14030 = (state_14060[(10)]);
var inst_14049 = (state_14060[(2)]);
var tmp14068 = inst_14030;
var inst_14030__$1 = tmp14068;
var state_14060__$1 = (function (){var statearr_14071 = state_14060;
(statearr_14071[(11)] = inst_14049);

(statearr_14071[(10)] = inst_14030__$1);

return statearr_14071;
})();
var statearr_14072_14992 = state_14060__$1;
(statearr_14072_14992[(2)] = null);

(statearr_14072_14992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (9))){
var inst_14040 = (state_14060[(7)]);
var state_14060__$1 = state_14060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14060__$1,(11),out,inst_14040);
} else {
if((state_val_14061 === (5))){
var inst_14054 = cljs.core.async.close_BANG_(out);
var state_14060__$1 = state_14060;
var statearr_14073_14993 = state_14060__$1;
(statearr_14073_14993[(2)] = inst_14054);

(statearr_14073_14993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (10))){
var inst_14052 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
var statearr_14074_14994 = state_14060__$1;
(statearr_14074_14994[(2)] = inst_14052);

(statearr_14074_14994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (8))){
var inst_14041 = (state_14060[(9)]);
var inst_14040 = (state_14060[(7)]);
var inst_14030 = (state_14060[(10)]);
var inst_14039 = (state_14060[(8)]);
var inst_14044 = (function (){var cs = inst_14030;
var vec__14035 = inst_14039;
var v = inst_14040;
var c = inst_14041;
return (function (p1__14026_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14026_SHARP_);
});
})();
var inst_14045 = cljs.core.filterv(inst_14044,inst_14030);
var inst_14030__$1 = inst_14045;
var state_14060__$1 = (function (){var statearr_14075 = state_14060;
(statearr_14075[(10)] = inst_14030__$1);

return statearr_14075;
})();
var statearr_14076_14999 = state_14060__$1;
(statearr_14076_14999[(2)] = null);

(statearr_14076_14999[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_14077 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14077[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_14077[(1)] = (1));

return statearr_14077;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_14060){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_14060);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14078){var ex__12974__auto__ = e14078;
var statearr_14079_15001 = state_14060;
(statearr_14079_15001[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_14060[(4)]))){
var statearr_14080_15002 = state_14060;
(statearr_14080_15002[(1)] = cljs.core.first((state_14060[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15003 = state_14060;
state_14060 = G__15003;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_14060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_14060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14081 = f__13006__auto__();
(statearr_14081[(6)] = c__13004__auto___14980);

return statearr_14081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14083 = arguments.length;
switch (G__14083) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13004__auto___15006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_14107){
var state_val_14108 = (state_14107[(1)]);
if((state_val_14108 === (7))){
var inst_14089 = (state_14107[(7)]);
var inst_14089__$1 = (state_14107[(2)]);
var inst_14090 = (inst_14089__$1 == null);
var inst_14091 = cljs.core.not(inst_14090);
var state_14107__$1 = (function (){var statearr_14109 = state_14107;
(statearr_14109[(7)] = inst_14089__$1);

return statearr_14109;
})();
if(inst_14091){
var statearr_14110_15007 = state_14107__$1;
(statearr_14110_15007[(1)] = (8));

} else {
var statearr_14111_15008 = state_14107__$1;
(statearr_14111_15008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (1))){
var inst_14084 = (0);
var state_14107__$1 = (function (){var statearr_14112 = state_14107;
(statearr_14112[(8)] = inst_14084);

return statearr_14112;
})();
var statearr_14113_15012 = state_14107__$1;
(statearr_14113_15012[(2)] = null);

(statearr_14113_15012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (4))){
var state_14107__$1 = state_14107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14107__$1,(7),ch);
} else {
if((state_val_14108 === (6))){
var inst_14102 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
var statearr_14114_15014 = state_14107__$1;
(statearr_14114_15014[(2)] = inst_14102);

(statearr_14114_15014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (3))){
var inst_14104 = (state_14107[(2)]);
var inst_14105 = cljs.core.async.close_BANG_(out);
var state_14107__$1 = (function (){var statearr_14115 = state_14107;
(statearr_14115[(9)] = inst_14104);

return statearr_14115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14107__$1,inst_14105);
} else {
if((state_val_14108 === (2))){
var inst_14084 = (state_14107[(8)]);
var inst_14086 = (inst_14084 < n);
var state_14107__$1 = state_14107;
if(cljs.core.truth_(inst_14086)){
var statearr_14116_15015 = state_14107__$1;
(statearr_14116_15015[(1)] = (4));

} else {
var statearr_14117_15016 = state_14107__$1;
(statearr_14117_15016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (11))){
var inst_14084 = (state_14107[(8)]);
var inst_14094 = (state_14107[(2)]);
var inst_14095 = (inst_14084 + (1));
var inst_14084__$1 = inst_14095;
var state_14107__$1 = (function (){var statearr_14118 = state_14107;
(statearr_14118[(8)] = inst_14084__$1);

(statearr_14118[(10)] = inst_14094);

return statearr_14118;
})();
var statearr_14119_15017 = state_14107__$1;
(statearr_14119_15017[(2)] = null);

(statearr_14119_15017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (9))){
var state_14107__$1 = state_14107;
var statearr_14120_15018 = state_14107__$1;
(statearr_14120_15018[(2)] = null);

(statearr_14120_15018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (5))){
var state_14107__$1 = state_14107;
var statearr_14121_15019 = state_14107__$1;
(statearr_14121_15019[(2)] = null);

(statearr_14121_15019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (10))){
var inst_14099 = (state_14107[(2)]);
var state_14107__$1 = state_14107;
var statearr_14122_15020 = state_14107__$1;
(statearr_14122_15020[(2)] = inst_14099);

(statearr_14122_15020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14108 === (8))){
var inst_14089 = (state_14107[(7)]);
var state_14107__$1 = state_14107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14107__$1,(11),out,inst_14089);
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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_14123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14123[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_14123[(1)] = (1));

return statearr_14123;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_14107){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_14107);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14124){var ex__12974__auto__ = e14124;
var statearr_14125_15021 = state_14107;
(statearr_14125_15021[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_14107[(4)]))){
var statearr_14126_15022 = state_14107;
(statearr_14126_15022[(1)] = cljs.core.first((state_14107[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15023 = state_14107;
state_14107 = G__15023;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_14107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_14107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14127 = f__13006__auto__();
(statearr_14127[(6)] = c__13004__auto___15006);

return statearr_14127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14129 = (function (f,ch,meta14130){
this.f = f;
this.ch = ch;
this.meta14130 = meta14130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14131,meta14130__$1){
var self__ = this;
var _14131__$1 = this;
return (new cljs.core.async.t_cljs$core$async14129(self__.f,self__.ch,meta14130__$1));
}));

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14131){
var self__ = this;
var _14131__$1 = this;
return self__.meta14130;
}));

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14132 = (function (f,ch,meta14130,_,fn1,meta14133){
this.f = f;
this.ch = ch;
this.meta14130 = meta14130;
this._ = _;
this.fn1 = fn1;
this.meta14133 = meta14133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14134,meta14133__$1){
var self__ = this;
var _14134__$1 = this;
return (new cljs.core.async.t_cljs$core$async14132(self__.f,self__.ch,self__.meta14130,self__._,self__.fn1,meta14133__$1));
}));

(cljs.core.async.t_cljs$core$async14132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14134){
var self__ = this;
var _14134__$1 = this;
return self__.meta14133;
}));

(cljs.core.async.t_cljs$core$async14132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14128_SHARP_){
var G__14135 = (((p1__14128_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14128_SHARP_) : self__.f.call(null,p1__14128_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14135) : f1.call(null,G__14135));
});
}));

(cljs.core.async.t_cljs$core$async14132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14130","meta14130",237660024,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14129","cljs.core.async/t_cljs$core$async14129",-601514833,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14133","meta14133",1416102609,null)], null);
}));

(cljs.core.async.t_cljs$core$async14132.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14132");

(cljs.core.async.t_cljs$core$async14132.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14132");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14132.
 */
cljs.core.async.__GT_t_cljs$core$async14132 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14132(f__$1,ch__$1,meta14130__$1,___$2,fn1__$1,meta14133){
return (new cljs.core.async.t_cljs$core$async14132(f__$1,ch__$1,meta14130__$1,___$2,fn1__$1,meta14133));
});

}

return (new cljs.core.async.t_cljs$core$async14132(self__.f,self__.ch,self__.meta14130,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14136 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14136) : self__.f.call(null,G__14136));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14130","meta14130",237660024,null)], null);
}));

(cljs.core.async.t_cljs$core$async14129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14129");

(cljs.core.async.t_cljs$core$async14129.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14129.
 */
cljs.core.async.__GT_t_cljs$core$async14129 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14129(f__$1,ch__$1,meta14130){
return (new cljs.core.async.t_cljs$core$async14129(f__$1,ch__$1,meta14130));
});

}

return (new cljs.core.async.t_cljs$core$async14129(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14137 = (function (f,ch,meta14138){
this.f = f;
this.ch = ch;
this.meta14138 = meta14138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14139,meta14138__$1){
var self__ = this;
var _14139__$1 = this;
return (new cljs.core.async.t_cljs$core$async14137(self__.f,self__.ch,meta14138__$1));
}));

(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14139){
var self__ = this;
var _14139__$1 = this;
return self__.meta14138;
}));

(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14138","meta14138",862052008,null)], null);
}));

(cljs.core.async.t_cljs$core$async14137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14137");

(cljs.core.async.t_cljs$core$async14137.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14137.
 */
cljs.core.async.__GT_t_cljs$core$async14137 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14137(f__$1,ch__$1,meta14138){
return (new cljs.core.async.t_cljs$core$async14137(f__$1,ch__$1,meta14138));
});

}

return (new cljs.core.async.t_cljs$core$async14137(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14140 = (function (p,ch,meta14141){
this.p = p;
this.ch = ch;
this.meta14141 = meta14141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14142,meta14141__$1){
var self__ = this;
var _14142__$1 = this;
return (new cljs.core.async.t_cljs$core$async14140(self__.p,self__.ch,meta14141__$1));
}));

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14142){
var self__ = this;
var _14142__$1 = this;
return self__.meta14141;
}));

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14141","meta14141",1026635618,null)], null);
}));

(cljs.core.async.t_cljs$core$async14140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14140");

(cljs.core.async.t_cljs$core$async14140.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14140.
 */
cljs.core.async.__GT_t_cljs$core$async14140 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14140(p__$1,ch__$1,meta14141){
return (new cljs.core.async.t_cljs$core$async14140(p__$1,ch__$1,meta14141));
});

}

return (new cljs.core.async.t_cljs$core$async14140(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14144 = arguments.length;
switch (G__14144) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13004__auto___15030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_14165){
var state_val_14166 = (state_14165[(1)]);
if((state_val_14166 === (7))){
var inst_14161 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14167_15031 = state_14165__$1;
(statearr_14167_15031[(2)] = inst_14161);

(statearr_14167_15031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (1))){
var state_14165__$1 = state_14165;
var statearr_14168_15032 = state_14165__$1;
(statearr_14168_15032[(2)] = null);

(statearr_14168_15032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (4))){
var inst_14147 = (state_14165[(7)]);
var inst_14147__$1 = (state_14165[(2)]);
var inst_14148 = (inst_14147__$1 == null);
var state_14165__$1 = (function (){var statearr_14169 = state_14165;
(statearr_14169[(7)] = inst_14147__$1);

return statearr_14169;
})();
if(cljs.core.truth_(inst_14148)){
var statearr_14170_15034 = state_14165__$1;
(statearr_14170_15034[(1)] = (5));

} else {
var statearr_14171_15038 = state_14165__$1;
(statearr_14171_15038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (6))){
var inst_14147 = (state_14165[(7)]);
var inst_14152 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14147) : p.call(null,inst_14147));
var state_14165__$1 = state_14165;
if(cljs.core.truth_(inst_14152)){
var statearr_14172_15043 = state_14165__$1;
(statearr_14172_15043[(1)] = (8));

} else {
var statearr_14173_15044 = state_14165__$1;
(statearr_14173_15044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (3))){
var inst_14163 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14165__$1,inst_14163);
} else {
if((state_val_14166 === (2))){
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14165__$1,(4),ch);
} else {
if((state_val_14166 === (11))){
var inst_14155 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14174_15047 = state_14165__$1;
(statearr_14174_15047[(2)] = inst_14155);

(statearr_14174_15047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (9))){
var state_14165__$1 = state_14165;
var statearr_14175_15048 = state_14165__$1;
(statearr_14175_15048[(2)] = null);

(statearr_14175_15048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (5))){
var inst_14150 = cljs.core.async.close_BANG_(out);
var state_14165__$1 = state_14165;
var statearr_14176_15049 = state_14165__$1;
(statearr_14176_15049[(2)] = inst_14150);

(statearr_14176_15049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (10))){
var inst_14158 = (state_14165[(2)]);
var state_14165__$1 = (function (){var statearr_14177 = state_14165;
(statearr_14177[(8)] = inst_14158);

return statearr_14177;
})();
var statearr_14178_15050 = state_14165__$1;
(statearr_14178_15050[(2)] = null);

(statearr_14178_15050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (8))){
var inst_14147 = (state_14165[(7)]);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14165__$1,(11),out,inst_14147);
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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_14179 = [null,null,null,null,null,null,null,null,null];
(statearr_14179[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_14179[(1)] = (1));

return statearr_14179;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_14165){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_14165);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14180){var ex__12974__auto__ = e14180;
var statearr_14181_15051 = state_14165;
(statearr_14181_15051[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_14165[(4)]))){
var statearr_14182_15052 = state_14165;
(statearr_14182_15052[(1)] = cljs.core.first((state_14165[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15053 = state_14165;
state_14165 = G__15053;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_14165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_14165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14183 = f__13006__auto__();
(statearr_14183[(6)] = c__13004__auto___15030);

return statearr_14183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14185 = arguments.length;
switch (G__14185) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13004__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_14247){
var state_val_14248 = (state_14247[(1)]);
if((state_val_14248 === (7))){
var inst_14243 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14249_15055 = state_14247__$1;
(statearr_14249_15055[(2)] = inst_14243);

(statearr_14249_15055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (20))){
var inst_14213 = (state_14247[(7)]);
var inst_14224 = (state_14247[(2)]);
var inst_14225 = cljs.core.next(inst_14213);
var inst_14199 = inst_14225;
var inst_14200 = null;
var inst_14201 = (0);
var inst_14202 = (0);
var state_14247__$1 = (function (){var statearr_14250 = state_14247;
(statearr_14250[(8)] = inst_14224);

(statearr_14250[(9)] = inst_14199);

(statearr_14250[(10)] = inst_14201);

(statearr_14250[(11)] = inst_14202);

(statearr_14250[(12)] = inst_14200);

return statearr_14250;
})();
var statearr_14251_15056 = state_14247__$1;
(statearr_14251_15056[(2)] = null);

(statearr_14251_15056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (1))){
var state_14247__$1 = state_14247;
var statearr_14252_15057 = state_14247__$1;
(statearr_14252_15057[(2)] = null);

(statearr_14252_15057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (4))){
var inst_14188 = (state_14247[(13)]);
var inst_14188__$1 = (state_14247[(2)]);
var inst_14189 = (inst_14188__$1 == null);
var state_14247__$1 = (function (){var statearr_14253 = state_14247;
(statearr_14253[(13)] = inst_14188__$1);

return statearr_14253;
})();
if(cljs.core.truth_(inst_14189)){
var statearr_14254_15058 = state_14247__$1;
(statearr_14254_15058[(1)] = (5));

} else {
var statearr_14255_15059 = state_14247__$1;
(statearr_14255_15059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (15))){
var state_14247__$1 = state_14247;
var statearr_14259_15060 = state_14247__$1;
(statearr_14259_15060[(2)] = null);

(statearr_14259_15060[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (21))){
var state_14247__$1 = state_14247;
var statearr_14260_15061 = state_14247__$1;
(statearr_14260_15061[(2)] = null);

(statearr_14260_15061[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (13))){
var inst_14199 = (state_14247[(9)]);
var inst_14201 = (state_14247[(10)]);
var inst_14202 = (state_14247[(11)]);
var inst_14200 = (state_14247[(12)]);
var inst_14209 = (state_14247[(2)]);
var inst_14210 = (inst_14202 + (1));
var tmp14256 = inst_14199;
var tmp14257 = inst_14201;
var tmp14258 = inst_14200;
var inst_14199__$1 = tmp14256;
var inst_14200__$1 = tmp14258;
var inst_14201__$1 = tmp14257;
var inst_14202__$1 = inst_14210;
var state_14247__$1 = (function (){var statearr_14261 = state_14247;
(statearr_14261[(9)] = inst_14199__$1);

(statearr_14261[(10)] = inst_14201__$1);

(statearr_14261[(14)] = inst_14209);

(statearr_14261[(11)] = inst_14202__$1);

(statearr_14261[(12)] = inst_14200__$1);

return statearr_14261;
})();
var statearr_14262_15062 = state_14247__$1;
(statearr_14262_15062[(2)] = null);

(statearr_14262_15062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (22))){
var state_14247__$1 = state_14247;
var statearr_14263_15063 = state_14247__$1;
(statearr_14263_15063[(2)] = null);

(statearr_14263_15063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (6))){
var inst_14188 = (state_14247[(13)]);
var inst_14197 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14188) : f.call(null,inst_14188));
var inst_14198 = cljs.core.seq(inst_14197);
var inst_14199 = inst_14198;
var inst_14200 = null;
var inst_14201 = (0);
var inst_14202 = (0);
var state_14247__$1 = (function (){var statearr_14264 = state_14247;
(statearr_14264[(9)] = inst_14199);

(statearr_14264[(10)] = inst_14201);

(statearr_14264[(11)] = inst_14202);

(statearr_14264[(12)] = inst_14200);

return statearr_14264;
})();
var statearr_14265_15064 = state_14247__$1;
(statearr_14265_15064[(2)] = null);

(statearr_14265_15064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (17))){
var inst_14213 = (state_14247[(7)]);
var inst_14217 = cljs.core.chunk_first(inst_14213);
var inst_14218 = cljs.core.chunk_rest(inst_14213);
var inst_14219 = cljs.core.count(inst_14217);
var inst_14199 = inst_14218;
var inst_14200 = inst_14217;
var inst_14201 = inst_14219;
var inst_14202 = (0);
var state_14247__$1 = (function (){var statearr_14266 = state_14247;
(statearr_14266[(9)] = inst_14199);

(statearr_14266[(10)] = inst_14201);

(statearr_14266[(11)] = inst_14202);

(statearr_14266[(12)] = inst_14200);

return statearr_14266;
})();
var statearr_14267_15065 = state_14247__$1;
(statearr_14267_15065[(2)] = null);

(statearr_14267_15065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (3))){
var inst_14245 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14247__$1,inst_14245);
} else {
if((state_val_14248 === (12))){
var inst_14233 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14268_15066 = state_14247__$1;
(statearr_14268_15066[(2)] = inst_14233);

(statearr_14268_15066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (2))){
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14247__$1,(4),in$);
} else {
if((state_val_14248 === (23))){
var inst_14241 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14269_15067 = state_14247__$1;
(statearr_14269_15067[(2)] = inst_14241);

(statearr_14269_15067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (19))){
var inst_14228 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14270_15068 = state_14247__$1;
(statearr_14270_15068[(2)] = inst_14228);

(statearr_14270_15068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (11))){
var inst_14199 = (state_14247[(9)]);
var inst_14213 = (state_14247[(7)]);
var inst_14213__$1 = cljs.core.seq(inst_14199);
var state_14247__$1 = (function (){var statearr_14271 = state_14247;
(statearr_14271[(7)] = inst_14213__$1);

return statearr_14271;
})();
if(inst_14213__$1){
var statearr_14272_15069 = state_14247__$1;
(statearr_14272_15069[(1)] = (14));

} else {
var statearr_14273_15070 = state_14247__$1;
(statearr_14273_15070[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (9))){
var inst_14235 = (state_14247[(2)]);
var inst_14236 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14247__$1 = (function (){var statearr_14274 = state_14247;
(statearr_14274[(15)] = inst_14235);

return statearr_14274;
})();
if(cljs.core.truth_(inst_14236)){
var statearr_14275_15074 = state_14247__$1;
(statearr_14275_15074[(1)] = (21));

} else {
var statearr_14276_15075 = state_14247__$1;
(statearr_14276_15075[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (5))){
var inst_14191 = cljs.core.async.close_BANG_(out);
var state_14247__$1 = state_14247;
var statearr_14277_15076 = state_14247__$1;
(statearr_14277_15076[(2)] = inst_14191);

(statearr_14277_15076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (14))){
var inst_14213 = (state_14247[(7)]);
var inst_14215 = cljs.core.chunked_seq_QMARK_(inst_14213);
var state_14247__$1 = state_14247;
if(inst_14215){
var statearr_14278_15084 = state_14247__$1;
(statearr_14278_15084[(1)] = (17));

} else {
var statearr_14279_15085 = state_14247__$1;
(statearr_14279_15085[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (16))){
var inst_14231 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14280_15086 = state_14247__$1;
(statearr_14280_15086[(2)] = inst_14231);

(statearr_14280_15086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (10))){
var inst_14202 = (state_14247[(11)]);
var inst_14200 = (state_14247[(12)]);
var inst_14207 = cljs.core._nth(inst_14200,inst_14202);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14247__$1,(13),out,inst_14207);
} else {
if((state_val_14248 === (18))){
var inst_14213 = (state_14247[(7)]);
var inst_14222 = cljs.core.first(inst_14213);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14247__$1,(20),out,inst_14222);
} else {
if((state_val_14248 === (8))){
var inst_14201 = (state_14247[(10)]);
var inst_14202 = (state_14247[(11)]);
var inst_14204 = (inst_14202 < inst_14201);
var inst_14205 = inst_14204;
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14205)){
var statearr_14281_15090 = state_14247__$1;
(statearr_14281_15090[(1)] = (10));

} else {
var statearr_14282_15091 = state_14247__$1;
(statearr_14282_15091[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12971__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12971__auto____0 = (function (){
var statearr_14283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14283[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12971__auto__);

(statearr_14283[(1)] = (1));

return statearr_14283;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12971__auto____1 = (function (state_14247){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_14247);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14284){var ex__12974__auto__ = e14284;
var statearr_14285_15092 = state_14247;
(statearr_14285_15092[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_14247[(4)]))){
var statearr_14286_15096 = state_14247;
(statearr_14286_15096[(1)] = cljs.core.first((state_14247[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15097 = state_14247;
state_14247 = G__15097;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12971__auto__ = function(state_14247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12971__auto____1.call(this,state_14247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12971__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12971__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14287 = f__13006__auto__();
(statearr_14287[(6)] = c__13004__auto__);

return statearr_14287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

return c__13004__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14289 = arguments.length;
switch (G__14289) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14291 = arguments.length;
switch (G__14291) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14293 = arguments.length;
switch (G__14293) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13004__auto___15101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_14317){
var state_val_14318 = (state_14317[(1)]);
if((state_val_14318 === (7))){
var inst_14312 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
var statearr_14319_15102 = state_14317__$1;
(statearr_14319_15102[(2)] = inst_14312);

(statearr_14319_15102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (1))){
var inst_14294 = null;
var state_14317__$1 = (function (){var statearr_14320 = state_14317;
(statearr_14320[(7)] = inst_14294);

return statearr_14320;
})();
var statearr_14321_15106 = state_14317__$1;
(statearr_14321_15106[(2)] = null);

(statearr_14321_15106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (4))){
var inst_14297 = (state_14317[(8)]);
var inst_14297__$1 = (state_14317[(2)]);
var inst_14298 = (inst_14297__$1 == null);
var inst_14299 = cljs.core.not(inst_14298);
var state_14317__$1 = (function (){var statearr_14322 = state_14317;
(statearr_14322[(8)] = inst_14297__$1);

return statearr_14322;
})();
if(inst_14299){
var statearr_14323_15107 = state_14317__$1;
(statearr_14323_15107[(1)] = (5));

} else {
var statearr_14324_15108 = state_14317__$1;
(statearr_14324_15108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (6))){
var state_14317__$1 = state_14317;
var statearr_14325_15109 = state_14317__$1;
(statearr_14325_15109[(2)] = null);

(statearr_14325_15109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (3))){
var inst_14314 = (state_14317[(2)]);
var inst_14315 = cljs.core.async.close_BANG_(out);
var state_14317__$1 = (function (){var statearr_14326 = state_14317;
(statearr_14326[(9)] = inst_14314);

return statearr_14326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14317__$1,inst_14315);
} else {
if((state_val_14318 === (2))){
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14317__$1,(4),ch);
} else {
if((state_val_14318 === (11))){
var inst_14297 = (state_14317[(8)]);
var inst_14306 = (state_14317[(2)]);
var inst_14294 = inst_14297;
var state_14317__$1 = (function (){var statearr_14327 = state_14317;
(statearr_14327[(7)] = inst_14294);

(statearr_14327[(10)] = inst_14306);

return statearr_14327;
})();
var statearr_14328_15111 = state_14317__$1;
(statearr_14328_15111[(2)] = null);

(statearr_14328_15111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (9))){
var inst_14297 = (state_14317[(8)]);
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14317__$1,(11),out,inst_14297);
} else {
if((state_val_14318 === (5))){
var inst_14294 = (state_14317[(7)]);
var inst_14297 = (state_14317[(8)]);
var inst_14301 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14297,inst_14294);
var state_14317__$1 = state_14317;
if(inst_14301){
var statearr_14330_15121 = state_14317__$1;
(statearr_14330_15121[(1)] = (8));

} else {
var statearr_14331_15128 = state_14317__$1;
(statearr_14331_15128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (10))){
var inst_14309 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
var statearr_14332_15129 = state_14317__$1;
(statearr_14332_15129[(2)] = inst_14309);

(statearr_14332_15129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (8))){
var inst_14294 = (state_14317[(7)]);
var tmp14329 = inst_14294;
var inst_14294__$1 = tmp14329;
var state_14317__$1 = (function (){var statearr_14333 = state_14317;
(statearr_14333[(7)] = inst_14294__$1);

return statearr_14333;
})();
var statearr_14334_15130 = state_14317__$1;
(statearr_14334_15130[(2)] = null);

(statearr_14334_15130[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_14335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14335[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_14335[(1)] = (1));

return statearr_14335;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_14317){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_14317);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14336){var ex__12974__auto__ = e14336;
var statearr_14337_15131 = state_14317;
(statearr_14337_15131[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_14317[(4)]))){
var statearr_14338_15132 = state_14317;
(statearr_14338_15132[(1)] = cljs.core.first((state_14317[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15133 = state_14317;
state_14317 = G__15133;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_14317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_14317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14339 = f__13006__auto__();
(statearr_14339[(6)] = c__13004__auto___15101);

return statearr_14339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14341 = arguments.length;
switch (G__14341) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13004__auto___15141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_14379){
var state_val_14380 = (state_14379[(1)]);
if((state_val_14380 === (7))){
var inst_14375 = (state_14379[(2)]);
var state_14379__$1 = state_14379;
var statearr_14381_15142 = state_14379__$1;
(statearr_14381_15142[(2)] = inst_14375);

(statearr_14381_15142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (1))){
var inst_14342 = (new Array(n));
var inst_14343 = inst_14342;
var inst_14344 = (0);
var state_14379__$1 = (function (){var statearr_14382 = state_14379;
(statearr_14382[(7)] = inst_14343);

(statearr_14382[(8)] = inst_14344);

return statearr_14382;
})();
var statearr_14383_15143 = state_14379__$1;
(statearr_14383_15143[(2)] = null);

(statearr_14383_15143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (4))){
var inst_14347 = (state_14379[(9)]);
var inst_14347__$1 = (state_14379[(2)]);
var inst_14348 = (inst_14347__$1 == null);
var inst_14349 = cljs.core.not(inst_14348);
var state_14379__$1 = (function (){var statearr_14384 = state_14379;
(statearr_14384[(9)] = inst_14347__$1);

return statearr_14384;
})();
if(inst_14349){
var statearr_14385_15144 = state_14379__$1;
(statearr_14385_15144[(1)] = (5));

} else {
var statearr_14386_15145 = state_14379__$1;
(statearr_14386_15145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (15))){
var inst_14369 = (state_14379[(2)]);
var state_14379__$1 = state_14379;
var statearr_14387_15146 = state_14379__$1;
(statearr_14387_15146[(2)] = inst_14369);

(statearr_14387_15146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (13))){
var state_14379__$1 = state_14379;
var statearr_14388_15147 = state_14379__$1;
(statearr_14388_15147[(2)] = null);

(statearr_14388_15147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (6))){
var inst_14344 = (state_14379[(8)]);
var inst_14365 = (inst_14344 > (0));
var state_14379__$1 = state_14379;
if(cljs.core.truth_(inst_14365)){
var statearr_14389_15148 = state_14379__$1;
(statearr_14389_15148[(1)] = (12));

} else {
var statearr_14390_15149 = state_14379__$1;
(statearr_14390_15149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (3))){
var inst_14377 = (state_14379[(2)]);
var state_14379__$1 = state_14379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14379__$1,inst_14377);
} else {
if((state_val_14380 === (12))){
var inst_14343 = (state_14379[(7)]);
var inst_14367 = cljs.core.vec(inst_14343);
var state_14379__$1 = state_14379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14379__$1,(15),out,inst_14367);
} else {
if((state_val_14380 === (2))){
var state_14379__$1 = state_14379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14379__$1,(4),ch);
} else {
if((state_val_14380 === (11))){
var inst_14359 = (state_14379[(2)]);
var inst_14360 = (new Array(n));
var inst_14343 = inst_14360;
var inst_14344 = (0);
var state_14379__$1 = (function (){var statearr_14391 = state_14379;
(statearr_14391[(7)] = inst_14343);

(statearr_14391[(10)] = inst_14359);

(statearr_14391[(8)] = inst_14344);

return statearr_14391;
})();
var statearr_14392_15156 = state_14379__$1;
(statearr_14392_15156[(2)] = null);

(statearr_14392_15156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (9))){
var inst_14343 = (state_14379[(7)]);
var inst_14357 = cljs.core.vec(inst_14343);
var state_14379__$1 = state_14379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14379__$1,(11),out,inst_14357);
} else {
if((state_val_14380 === (5))){
var inst_14352 = (state_14379[(11)]);
var inst_14343 = (state_14379[(7)]);
var inst_14344 = (state_14379[(8)]);
var inst_14347 = (state_14379[(9)]);
var inst_14351 = (inst_14343[inst_14344] = inst_14347);
var inst_14352__$1 = (inst_14344 + (1));
var inst_14353 = (inst_14352__$1 < n);
var state_14379__$1 = (function (){var statearr_14393 = state_14379;
(statearr_14393[(11)] = inst_14352__$1);

(statearr_14393[(12)] = inst_14351);

return statearr_14393;
})();
if(cljs.core.truth_(inst_14353)){
var statearr_14394_15157 = state_14379__$1;
(statearr_14394_15157[(1)] = (8));

} else {
var statearr_14395_15158 = state_14379__$1;
(statearr_14395_15158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (14))){
var inst_14372 = (state_14379[(2)]);
var inst_14373 = cljs.core.async.close_BANG_(out);
var state_14379__$1 = (function (){var statearr_14397 = state_14379;
(statearr_14397[(13)] = inst_14372);

return statearr_14397;
})();
var statearr_14398_15159 = state_14379__$1;
(statearr_14398_15159[(2)] = inst_14373);

(statearr_14398_15159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (10))){
var inst_14363 = (state_14379[(2)]);
var state_14379__$1 = state_14379;
var statearr_14399_15160 = state_14379__$1;
(statearr_14399_15160[(2)] = inst_14363);

(statearr_14399_15160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14380 === (8))){
var inst_14352 = (state_14379[(11)]);
var inst_14343 = (state_14379[(7)]);
var tmp14396 = inst_14343;
var inst_14343__$1 = tmp14396;
var inst_14344 = inst_14352;
var state_14379__$1 = (function (){var statearr_14400 = state_14379;
(statearr_14400[(7)] = inst_14343__$1);

(statearr_14400[(8)] = inst_14344);

return statearr_14400;
})();
var statearr_14401_15167 = state_14379__$1;
(statearr_14401_15167[(2)] = null);

(statearr_14401_15167[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_14402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14402[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_14402[(1)] = (1));

return statearr_14402;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_14379){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_14379);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14403){var ex__12974__auto__ = e14403;
var statearr_14404_15168 = state_14379;
(statearr_14404_15168[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_14379[(4)]))){
var statearr_14405_15169 = state_14379;
(statearr_14405_15169[(1)] = cljs.core.first((state_14379[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15170 = state_14379;
state_14379 = G__15170;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_14379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_14379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14406 = f__13006__auto__();
(statearr_14406[(6)] = c__13004__auto___15141);

return statearr_14406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14408 = arguments.length;
switch (G__14408) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13004__auto___15172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_14453){
var state_val_14454 = (state_14453[(1)]);
if((state_val_14454 === (7))){
var inst_14449 = (state_14453[(2)]);
var state_14453__$1 = state_14453;
var statearr_14455_15173 = state_14453__$1;
(statearr_14455_15173[(2)] = inst_14449);

(statearr_14455_15173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (1))){
var inst_14409 = [];
var inst_14410 = inst_14409;
var inst_14411 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14453__$1 = (function (){var statearr_14456 = state_14453;
(statearr_14456[(7)] = inst_14410);

(statearr_14456[(8)] = inst_14411);

return statearr_14456;
})();
var statearr_14457_15174 = state_14453__$1;
(statearr_14457_15174[(2)] = null);

(statearr_14457_15174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (4))){
var inst_14414 = (state_14453[(9)]);
var inst_14414__$1 = (state_14453[(2)]);
var inst_14415 = (inst_14414__$1 == null);
var inst_14416 = cljs.core.not(inst_14415);
var state_14453__$1 = (function (){var statearr_14458 = state_14453;
(statearr_14458[(9)] = inst_14414__$1);

return statearr_14458;
})();
if(inst_14416){
var statearr_14459_15175 = state_14453__$1;
(statearr_14459_15175[(1)] = (5));

} else {
var statearr_14460_15176 = state_14453__$1;
(statearr_14460_15176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (15))){
var inst_14410 = (state_14453[(7)]);
var inst_14441 = cljs.core.vec(inst_14410);
var state_14453__$1 = state_14453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14453__$1,(18),out,inst_14441);
} else {
if((state_val_14454 === (13))){
var inst_14436 = (state_14453[(2)]);
var state_14453__$1 = state_14453;
var statearr_14461_15177 = state_14453__$1;
(statearr_14461_15177[(2)] = inst_14436);

(statearr_14461_15177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (6))){
var inst_14410 = (state_14453[(7)]);
var inst_14438 = inst_14410.length;
var inst_14439 = (inst_14438 > (0));
var state_14453__$1 = state_14453;
if(cljs.core.truth_(inst_14439)){
var statearr_14462_15178 = state_14453__$1;
(statearr_14462_15178[(1)] = (15));

} else {
var statearr_14463_15179 = state_14453__$1;
(statearr_14463_15179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (17))){
var inst_14446 = (state_14453[(2)]);
var inst_14447 = cljs.core.async.close_BANG_(out);
var state_14453__$1 = (function (){var statearr_14464 = state_14453;
(statearr_14464[(10)] = inst_14446);

return statearr_14464;
})();
var statearr_14465_15180 = state_14453__$1;
(statearr_14465_15180[(2)] = inst_14447);

(statearr_14465_15180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (3))){
var inst_14451 = (state_14453[(2)]);
var state_14453__$1 = state_14453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14453__$1,inst_14451);
} else {
if((state_val_14454 === (12))){
var inst_14410 = (state_14453[(7)]);
var inst_14429 = cljs.core.vec(inst_14410);
var state_14453__$1 = state_14453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14453__$1,(14),out,inst_14429);
} else {
if((state_val_14454 === (2))){
var state_14453__$1 = state_14453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14453__$1,(4),ch);
} else {
if((state_val_14454 === (11))){
var inst_14410 = (state_14453[(7)]);
var inst_14414 = (state_14453[(9)]);
var inst_14418 = (state_14453[(11)]);
var inst_14426 = inst_14410.push(inst_14414);
var tmp14466 = inst_14410;
var inst_14410__$1 = tmp14466;
var inst_14411 = inst_14418;
var state_14453__$1 = (function (){var statearr_14467 = state_14453;
(statearr_14467[(12)] = inst_14426);

(statearr_14467[(7)] = inst_14410__$1);

(statearr_14467[(8)] = inst_14411);

return statearr_14467;
})();
var statearr_14468_15181 = state_14453__$1;
(statearr_14468_15181[(2)] = null);

(statearr_14468_15181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (9))){
var inst_14411 = (state_14453[(8)]);
var inst_14422 = cljs.core.keyword_identical_QMARK_(inst_14411,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_14453__$1 = state_14453;
var statearr_14469_15182 = state_14453__$1;
(statearr_14469_15182[(2)] = inst_14422);

(statearr_14469_15182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (5))){
var inst_14414 = (state_14453[(9)]);
var inst_14419 = (state_14453[(13)]);
var inst_14411 = (state_14453[(8)]);
var inst_14418 = (state_14453[(11)]);
var inst_14418__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14414) : f.call(null,inst_14414));
var inst_14419__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14418__$1,inst_14411);
var state_14453__$1 = (function (){var statearr_14470 = state_14453;
(statearr_14470[(13)] = inst_14419__$1);

(statearr_14470[(11)] = inst_14418__$1);

return statearr_14470;
})();
if(inst_14419__$1){
var statearr_14471_15183 = state_14453__$1;
(statearr_14471_15183[(1)] = (8));

} else {
var statearr_14472_15184 = state_14453__$1;
(statearr_14472_15184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (14))){
var inst_14414 = (state_14453[(9)]);
var inst_14418 = (state_14453[(11)]);
var inst_14431 = (state_14453[(2)]);
var inst_14432 = [];
var inst_14433 = inst_14432.push(inst_14414);
var inst_14410 = inst_14432;
var inst_14411 = inst_14418;
var state_14453__$1 = (function (){var statearr_14473 = state_14453;
(statearr_14473[(7)] = inst_14410);

(statearr_14473[(14)] = inst_14433);

(statearr_14473[(15)] = inst_14431);

(statearr_14473[(8)] = inst_14411);

return statearr_14473;
})();
var statearr_14474_15185 = state_14453__$1;
(statearr_14474_15185[(2)] = null);

(statearr_14474_15185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (16))){
var state_14453__$1 = state_14453;
var statearr_14475_15186 = state_14453__$1;
(statearr_14475_15186[(2)] = null);

(statearr_14475_15186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (10))){
var inst_14424 = (state_14453[(2)]);
var state_14453__$1 = state_14453;
if(cljs.core.truth_(inst_14424)){
var statearr_14476_15187 = state_14453__$1;
(statearr_14476_15187[(1)] = (11));

} else {
var statearr_14477_15188 = state_14453__$1;
(statearr_14477_15188[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (18))){
var inst_14443 = (state_14453[(2)]);
var state_14453__$1 = state_14453;
var statearr_14478_15189 = state_14453__$1;
(statearr_14478_15189[(2)] = inst_14443);

(statearr_14478_15189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14454 === (8))){
var inst_14419 = (state_14453[(13)]);
var state_14453__$1 = state_14453;
var statearr_14479_15190 = state_14453__$1;
(statearr_14479_15190[(2)] = inst_14419);

(statearr_14479_15190[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__12971__auto__ = null;
var cljs$core$async$state_machine__12971__auto____0 = (function (){
var statearr_14480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14480[(0)] = cljs$core$async$state_machine__12971__auto__);

(statearr_14480[(1)] = (1));

return statearr_14480;
});
var cljs$core$async$state_machine__12971__auto____1 = (function (state_14453){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_14453);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e14481){var ex__12974__auto__ = e14481;
var statearr_14482_15191 = state_14453;
(statearr_14482_15191[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_14453[(4)]))){
var statearr_14483_15192 = state_14453;
(statearr_14483_15192[(1)] = cljs.core.first((state_14453[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15193 = state_14453;
state_14453 = G__15193;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
cljs$core$async$state_machine__12971__auto__ = function(state_14453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12971__auto____1.call(this,state_14453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12971__auto____0;
cljs$core$async$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12971__auto____1;
return cljs$core$async$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_14484 = f__13006__auto__();
(statearr_14484[(6)] = c__13004__auto___15172);

return statearr_14484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
