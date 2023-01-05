// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagi.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');

/**
 * @interface
 */
reagi.core.Signal = function(){};

/**
 * True if the signal's value will no longer change.
 */
reagi.core.complete_QMARK_ = (function reagi$core$complete_QMARK_(signal){
if(((!((signal == null))) && (!((signal.reagi$core$Signal$complete_QMARK_$arity$1 == null))))){
return signal.reagi$core$Signal$complete_QMARK_$arity$1(signal);
} else {
var x__4211__auto__ = (((signal == null))?null:signal);
var m__4212__auto__ = (reagi.core.complete_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,signal);
} else {
var m__4212__auto____$1 = (reagi.core.complete_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,signal);
} else {
throw cljs.core.missing_protocol.call(null,"Signal.complete?",signal);
}
}
}
});

/**
 * True if the object is a behavior or event stream.
 */
reagi.core.signal_QMARK_ = (function reagi$core$signal_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reagi$core$Signal$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagi.core.Signal,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagi.core.Signal,x);
}
});

/**
 * @interface
 */
reagi.core.Boxed = function(){};

/**
 * Unbox a boxed value.
 */
reagi.core.unbox = (function reagi$core$unbox(x){
if(((!((x == null))) && (!((x.reagi$core$Boxed$unbox$arity$1 == null))))){
return x.reagi$core$Boxed$unbox$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (reagi.core.unbox[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,x);
} else {
var m__4212__auto____$1 = (reagi.core.unbox["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Boxed.unbox",x);
}
}
}
});


/**
* @constructor
 * @implements {reagi.core.Boxed}
*/
reagi.core.Completed = (function (x){
this.x = x;
});
reagi.core.Completed.prototype.reagi$core$Boxed$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Completed.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.Completed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null);
});

reagi.core.Completed.cljs$lang$type = true;

reagi.core.Completed.cljs$lang$ctorStr = "reagi.core/Completed";

reagi.core.Completed.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"reagi.core/Completed");
});

/**
 * Positional factory function for reagi.core/Completed.
 */
reagi.core.__GT_Completed = (function reagi$core$__GT_Completed(x){
return (new reagi.core.Completed(x));
});

/**
 * Wraps x to guarantee that it will be the last value in a behavior or event
 *   stream. The value of x will be cached, and any values after x will be
 *   ignored.
 */
reagi.core.completed = (function reagi$core$completed(x){
return (new reagi.core.Completed(x));
});
/**
 * Box a value to ensure it can be sent through a channel.
 */
reagi.core.box = (function reagi$core$box(x){
if((x instanceof reagi.core.Completed)){
return x;
} else {
if(typeof reagi.core.t_reagi$core24798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {reagi.core.Boxed}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core24798 = (function (x,meta24799){
this.x = x;
this.meta24799 = meta24799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagi.core.t_reagi$core24798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24800,meta24799__$1){
var self__ = this;
var _24800__$1 = this;
return (new reagi.core.t_reagi$core24798(self__.x,meta24799__$1));
});

reagi.core.t_reagi$core24798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24800){
var self__ = this;
var _24800__$1 = this;
return self__.meta24799;
});

reagi.core.t_reagi$core24798.prototype.reagi$core$Boxed$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core24798.prototype.reagi$core$Boxed$unbox$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
});

reagi.core.t_reagi$core24798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"meta24799","meta24799",1554966685,null)], null);
});

reagi.core.t_reagi$core24798.cljs$lang$type = true;

reagi.core.t_reagi$core24798.cljs$lang$ctorStr = "reagi.core/t_reagi$core24798";

reagi.core.t_reagi$core24798.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"reagi.core/t_reagi$core24798");
});

/**
 * Positional factory function for reagi.core/t_reagi$core24798.
 */
reagi.core.__GT_t_reagi$core24798 = (function reagi$core$box_$___GT_t_reagi$core24798(x__$1,meta24799){
return (new reagi.core.t_reagi$core24798(x__$1,meta24799));
});

}

return (new reagi.core.t_reagi$core24798(x,cljs.core.PersistentArrayMap.EMPTY));
}
});
goog.object.set(reagi.core.Boxed,"_",true);

goog.object.set(reagi.core.unbox,"_",(function (x){
return x;
}));

/**
* @constructor
 * @implements {reagi.core.Signal}
 * @implements {cljs.core.IDeref}
*/
reagi.core.Behavior = (function (func,cache){
this.func = func;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagi.core.Behavior.prototype.cljs$core$IDeref$_deref$arity$1 = (function (behavior){
var self__ = this;
var behavior__$1 = this;
return reagi.core.unbox.call(null,cljs.core.swap_BANG_.call(null,self__.cache,((function (behavior__$1){
return (function (p1__24801_SHARP_){
if((p1__24801_SHARP_ instanceof reagi.core.Completed)){
return p1__24801_SHARP_;
} else {
return self__.func.call(null);
}
});})(behavior__$1))
));
});

reagi.core.Behavior.prototype.reagi$core$Signal$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Behavior.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.call(null,self__.cache) instanceof reagi.core.Completed);
});

reagi.core.Behavior.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

reagi.core.Behavior.cljs$lang$type = true;

reagi.core.Behavior.cljs$lang$ctorStr = "reagi.core/Behavior";

reagi.core.Behavior.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"reagi.core/Behavior");
});

/**
 * Positional factory function for reagi.core/Behavior.
 */
reagi.core.__GT_Behavior = (function reagi$core$__GT_Behavior(func,cache){
return (new reagi.core.Behavior(func,cache));
});

/**
 * Takes a zero-argument function and yields a Behavior object that will
 *   evaluate the function each time it is dereferenced. See: behavior.
 */
reagi.core.behavior_call = (function reagi$core$behavior_call(func){
return (new reagi.core.Behavior(func,cljs.core.atom.call(null,null)));
});
/**
 * Return true if the object is a behavior.
 */
reagi.core.behavior_QMARK_ = (function reagi$core$behavior_QMARK_(x){
return (x instanceof reagi.core.Behavior);
});
/**
 * A behavior that tracks the current time in seconds.
 */
reagi.core.time = reagi.core.behavior_call.call(null,(function (){
return ((new Date()).getTime() / 1000.0);
}));
/**
 * Return a behavior that tracks the time in seconds from when it was created.
 */
reagi.core.delta = (function reagi$core$delta(){
var t = cljs.core.deref.call(null,reagi.core.time);
return reagi.core.behavior_call.call(null,((function (t){
return (function (){
return (cljs.core.deref.call(null,reagi.core.time) - t);
});})(t))
);
});

/**
 * @interface
 */
reagi.core.Observable = function(){};

/**
 * Return a write-only core.async channel. Any elements send to the port will
 *  be distributed to the listener channels in parallel. Each listener must
 *  accept before the next item is distributed.
 */
reagi.core.port = (function reagi$core$port(ob){
if(((!((ob == null))) && (!((ob.reagi$core$Observable$port$arity$1 == null))))){
return ob.reagi$core$Observable$port$arity$1(ob);
} else {
var x__4211__auto__ = (((ob == null))?null:ob);
var m__4212__auto__ = (reagi.core.port[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ob);
} else {
var m__4212__auto____$1 = (reagi.core.port["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ob);
} else {
throw cljs.core.missing_protocol.call(null,"Observable.port",ob);
}
}
}
});

/**
 * Add a listener channel to the observable. The channel will be closed
 *  when the port of the observable is closed. Returns the channel.
 * 
 *  Any events sent to the channel will be boxed to protect the channel from
 *  nils. To listen for unboxed events, use subscribe.
 */
reagi.core.listen = (function reagi$core$listen(ob,ch){
if(((!((ob == null))) && (!((ob.reagi$core$Observable$listen$arity$2 == null))))){
return ob.reagi$core$Observable$listen$arity$2(ob,ch);
} else {
var x__4211__auto__ = (((ob == null))?null:ob);
var m__4212__auto__ = (reagi.core.listen[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,ob,ch);
} else {
var m__4212__auto____$1 = (reagi.core.listen["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,ob,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Observable.listen",ob);
}
}
}
});

/**
 * A version of clojure.core.async/mult that fixes ASYNC-64.
 *   This can be removed once a fix is released for core.async.
 */
reagi.core.mult_STAR_ = (function reagi$core$mult_STAR_(ch){
var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.PersistentArrayMap.EMPTY], null));
var m = (function (){
if(typeof reagi.core.t_reagi$core24802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
reagi.core.t_reagi$core24802 = (function (ch,state,meta24803){
this.ch = ch;
this.state = state;
this.meta24803 = meta24803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagi.core.t_reagi$core24802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state){
return (function (_24804,meta24803__$1){
var self__ = this;
var _24804__$1 = this;
return (new reagi.core.t_reagi$core24802(self__.ch,self__.state,meta24803__$1));
});})(state))
;

reagi.core.t_reagi$core24802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state){
return (function (_24804){
var self__ = this;
var _24804__$1 = this;
return self__.meta24803;
});})(state))
;

reagi.core.t_reagi$core24802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core24802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(state))
;

reagi.core.t_reagi$core24802.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.t_reagi$core24802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (state){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
var add_ch = ((function (___$1,state){
return (function (p__24808){
var vec__24809 = p__24808;
var o_QMARK_ = cljs.core.nth.call(null,vec__24809,(0),null);
var cs = cljs.core.nth.call(null,vec__24809,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_QMARK_,(cljs.core.truth_(o_QMARK_)?cljs.core.assoc.call(null,cs,ch__$1,close_QMARK_):cs)], null);
});})(___$1,state))
;
var vec__24805 = cljs.core.swap_BANG_.call(null,self__.state,add_ch);
var open_QMARK_ = cljs.core.nth.call(null,vec__24805,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__24805,(1),null);
if(cljs.core.truth_(open_QMARK_)){
} else {
cljs.core.async.close_BANG_.call(null,ch__$1);
}

return null;
});})(state))
;

reagi.core.t_reagi$core24802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (state){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__24812){
var vec__24813 = p__24812;
var open_QMARK_ = cljs.core.nth.call(null,vec__24813,(0),null);
var cs = cljs.core.nth.call(null,vec__24813,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.dissoc.call(null,cs,ch__$1)], null);
});})(___$1,state))
);

return null;
});})(state))
;

reagi.core.t_reagi$core24802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (state){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,((function (___$1,state){
return (function (p__24816){
var vec__24817 = p__24816;
var open_QMARK_ = cljs.core.nth.call(null,vec__24817,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__24817,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null);
});})(___$1,state))
);
});})(state))
;

reagi.core.t_reagi$core24802.getBasis = ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta24803","meta24803",1073929129,null)], null);
});})(state))
;

reagi.core.t_reagi$core24802.cljs$lang$type = true;

reagi.core.t_reagi$core24802.cljs$lang$ctorStr = "reagi.core/t_reagi$core24802";

reagi.core.t_reagi$core24802.cljs$lang$ctorPrWriter = ((function (state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"reagi.core/t_reagi$core24802");
});})(state))
;

/**
 * Positional factory function for reagi.core/t_reagi$core24802.
 */
reagi.core.__GT_t_reagi$core24802 = ((function (state){
return (function reagi$core$mult_STAR__$___GT_t_reagi$core24802(ch__$1,state__$1,meta24803){
return (new reagi.core.t_reagi$core24802(ch__$1,state__$1,meta24803));
});})(state))
;

}

return (new reagi.core.t_reagi$core24802(ch,state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (state,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(state,m,dchan,dctr))
;
var c__23120__auto___25050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto___25050,state,m,dchan,dctr,done){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto___25050,state,m,dchan,dctr,done){
return (function (state_24962){
var state_val_24963 = (state_24962[(1)]);
if((state_val_24963 === (7))){
var inst_24958 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_24964_25051 = state_24962__$1;
(statearr_24964_25051[(2)] = inst_24958);

(statearr_24964_25051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (20))){
var inst_24860 = (state_24962[(7)]);
var inst_24872 = cljs.core.first.call(null,inst_24860);
var inst_24873 = cljs.core.nth.call(null,inst_24872,(0),null);
var inst_24874 = cljs.core.nth.call(null,inst_24872,(1),null);
var state_24962__$1 = (function (){var statearr_24965 = state_24962;
(statearr_24965[(8)] = inst_24873);

return statearr_24965;
})();
if(cljs.core.truth_(inst_24874)){
var statearr_24966_25052 = state_24962__$1;
(statearr_24966_25052[(1)] = (22));

} else {
var statearr_24967_25053 = state_24962__$1;
(statearr_24967_25053[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (27))){
var inst_24903 = (state_24962[(9)]);
var inst_24905 = (state_24962[(10)]);
var inst_24822 = (state_24962[(11)]);
var inst_24910 = (state_24962[(12)]);
var inst_24910__$1 = cljs.core._nth.call(null,inst_24903,inst_24905);
var inst_24911 = cljs.core.async.put_BANG_.call(null,inst_24910__$1,inst_24822,done);
var state_24962__$1 = (function (){var statearr_24968 = state_24962;
(statearr_24968[(12)] = inst_24910__$1);

return statearr_24968;
})();
if(cljs.core.truth_(inst_24911)){
var statearr_24969_25054 = state_24962__$1;
(statearr_24969_25054[(1)] = (30));

} else {
var statearr_24970_25055 = state_24962__$1;
(statearr_24970_25055[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (1))){
var state_24962__$1 = state_24962;
var statearr_24971_25056 = state_24962__$1;
(statearr_24971_25056[(2)] = null);

(statearr_24971_25056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (24))){
var inst_24860 = (state_24962[(7)]);
var inst_24879 = (state_24962[(2)]);
var inst_24880 = cljs.core.next.call(null,inst_24860);
var inst_24838 = inst_24880;
var inst_24839 = null;
var inst_24840 = (0);
var inst_24841 = (0);
var state_24962__$1 = (function (){var statearr_24972 = state_24962;
(statearr_24972[(13)] = inst_24839);

(statearr_24972[(14)] = inst_24840);

(statearr_24972[(15)] = inst_24879);

(statearr_24972[(16)] = inst_24841);

(statearr_24972[(17)] = inst_24838);

return statearr_24972;
})();
var statearr_24973_25057 = state_24962__$1;
(statearr_24973_25057[(2)] = null);

(statearr_24973_25057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (39))){
var state_24962__$1 = state_24962;
var statearr_24977_25058 = state_24962__$1;
(statearr_24977_25058[(2)] = null);

(statearr_24977_25058[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (4))){
var inst_24822 = (state_24962[(11)]);
var inst_24822__$1 = (state_24962[(2)]);
var inst_24823 = (inst_24822__$1 == null);
var state_24962__$1 = (function (){var statearr_24978 = state_24962;
(statearr_24978[(11)] = inst_24822__$1);

return statearr_24978;
})();
if(cljs.core.truth_(inst_24823)){
var statearr_24979_25059 = state_24962__$1;
(statearr_24979_25059[(1)] = (5));

} else {
var statearr_24980_25060 = state_24962__$1;
(statearr_24980_25060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (15))){
var inst_24839 = (state_24962[(13)]);
var inst_24840 = (state_24962[(14)]);
var inst_24841 = (state_24962[(16)]);
var inst_24838 = (state_24962[(17)]);
var inst_24856 = (state_24962[(2)]);
var inst_24857 = (inst_24841 + (1));
var tmp24974 = inst_24839;
var tmp24975 = inst_24840;
var tmp24976 = inst_24838;
var inst_24838__$1 = tmp24976;
var inst_24839__$1 = tmp24974;
var inst_24840__$1 = tmp24975;
var inst_24841__$1 = inst_24857;
var state_24962__$1 = (function (){var statearr_24981 = state_24962;
(statearr_24981[(13)] = inst_24839__$1);

(statearr_24981[(14)] = inst_24840__$1);

(statearr_24981[(18)] = inst_24856);

(statearr_24981[(16)] = inst_24841__$1);

(statearr_24981[(17)] = inst_24838__$1);

return statearr_24981;
})();
var statearr_24982_25061 = state_24962__$1;
(statearr_24982_25061[(2)] = null);

(statearr_24982_25061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (21))){
var inst_24883 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_24986_25062 = state_24962__$1;
(statearr_24986_25062[(2)] = inst_24883);

(statearr_24986_25062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (31))){
var inst_24910 = (state_24962[(12)]);
var inst_24914 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_24915 = cljs.core.async.untap_STAR_.call(null,m,inst_24910);
var state_24962__$1 = (function (){var statearr_24987 = state_24962;
(statearr_24987[(19)] = inst_24914);

return statearr_24987;
})();
var statearr_24988_25063 = state_24962__$1;
(statearr_24988_25063[(2)] = inst_24915);

(statearr_24988_25063[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (32))){
var inst_24903 = (state_24962[(9)]);
var inst_24905 = (state_24962[(10)]);
var inst_24902 = (state_24962[(20)]);
var inst_24904 = (state_24962[(21)]);
var inst_24917 = (state_24962[(2)]);
var inst_24918 = (inst_24905 + (1));
var tmp24983 = inst_24903;
var tmp24984 = inst_24902;
var tmp24985 = inst_24904;
var inst_24902__$1 = tmp24984;
var inst_24903__$1 = tmp24983;
var inst_24904__$1 = tmp24985;
var inst_24905__$1 = inst_24918;
var state_24962__$1 = (function (){var statearr_24989 = state_24962;
(statearr_24989[(9)] = inst_24903__$1);

(statearr_24989[(10)] = inst_24905__$1);

(statearr_24989[(20)] = inst_24902__$1);

(statearr_24989[(22)] = inst_24917);

(statearr_24989[(21)] = inst_24904__$1);

return statearr_24989;
})();
var statearr_24990_25064 = state_24962__$1;
(statearr_24990_25064[(2)] = null);

(statearr_24990_25064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (40))){
var inst_24930 = (state_24962[(23)]);
var inst_24934 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_24935 = cljs.core.async.untap_STAR_.call(null,m,inst_24930);
var state_24962__$1 = (function (){var statearr_24991 = state_24962;
(statearr_24991[(24)] = inst_24934);

return statearr_24991;
})();
var statearr_24992_25065 = state_24962__$1;
(statearr_24992_25065[(2)] = inst_24935);

(statearr_24992_25065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (33))){
var inst_24921 = (state_24962[(25)]);
var inst_24923 = cljs.core.chunked_seq_QMARK_.call(null,inst_24921);
var state_24962__$1 = state_24962;
if(inst_24923){
var statearr_24993_25066 = state_24962__$1;
(statearr_24993_25066[(1)] = (36));

} else {
var statearr_24994_25067 = state_24962__$1;
(statearr_24994_25067[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (13))){
var inst_24850 = (state_24962[(26)]);
var inst_24853 = cljs.core.async.close_BANG_.call(null,inst_24850);
var state_24962__$1 = state_24962;
var statearr_24995_25068 = state_24962__$1;
(statearr_24995_25068[(2)] = inst_24853);

(statearr_24995_25068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (22))){
var inst_24873 = (state_24962[(8)]);
var inst_24876 = cljs.core.async.close_BANG_.call(null,inst_24873);
var state_24962__$1 = state_24962;
var statearr_24996_25069 = state_24962__$1;
(statearr_24996_25069[(2)] = inst_24876);

(statearr_24996_25069[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (36))){
var inst_24921 = (state_24962[(25)]);
var inst_24925 = cljs.core.chunk_first.call(null,inst_24921);
var inst_24926 = cljs.core.chunk_rest.call(null,inst_24921);
var inst_24927 = cljs.core.count.call(null,inst_24925);
var inst_24902 = inst_24926;
var inst_24903 = inst_24925;
var inst_24904 = inst_24927;
var inst_24905 = (0);
var state_24962__$1 = (function (){var statearr_24997 = state_24962;
(statearr_24997[(9)] = inst_24903);

(statearr_24997[(10)] = inst_24905);

(statearr_24997[(20)] = inst_24902);

(statearr_24997[(21)] = inst_24904);

return statearr_24997;
})();
var statearr_24998_25070 = state_24962__$1;
(statearr_24998_25070[(2)] = null);

(statearr_24998_25070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (41))){
var inst_24921 = (state_24962[(25)]);
var inst_24937 = (state_24962[(2)]);
var inst_24938 = cljs.core.next.call(null,inst_24921);
var inst_24902 = inst_24938;
var inst_24903 = null;
var inst_24904 = (0);
var inst_24905 = (0);
var state_24962__$1 = (function (){var statearr_24999 = state_24962;
(statearr_24999[(9)] = inst_24903);

(statearr_24999[(10)] = inst_24905);

(statearr_24999[(20)] = inst_24902);

(statearr_24999[(27)] = inst_24937);

(statearr_24999[(21)] = inst_24904);

return statearr_24999;
})();
var statearr_25000_25071 = state_24962__$1;
(statearr_25000_25071[(2)] = null);

(statearr_25000_25071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (43))){
var state_24962__$1 = state_24962;
var statearr_25001_25072 = state_24962__$1;
(statearr_25001_25072[(2)] = null);

(statearr_25001_25072[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (29))){
var inst_24946 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_25002_25073 = state_24962__$1;
(statearr_25002_25073[(2)] = inst_24946);

(statearr_25002_25073[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (44))){
var inst_24955 = (state_24962[(2)]);
var state_24962__$1 = (function (){var statearr_25003 = state_24962;
(statearr_25003[(28)] = inst_24955);

return statearr_25003;
})();
var statearr_25004_25074 = state_24962__$1;
(statearr_25004_25074[(2)] = null);

(statearr_25004_25074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (6))){
var inst_24894 = (state_24962[(29)]);
var inst_24892 = cljs.core.deref.call(null,state);
var inst_24893 = cljs.core.second.call(null,inst_24892);
var inst_24894__$1 = cljs.core.keys.call(null,inst_24893);
var inst_24895 = cljs.core.count.call(null,inst_24894__$1);
var inst_24896 = cljs.core.reset_BANG_.call(null,dctr,inst_24895);
var inst_24901 = cljs.core.seq.call(null,inst_24894__$1);
var inst_24902 = inst_24901;
var inst_24903 = null;
var inst_24904 = (0);
var inst_24905 = (0);
var state_24962__$1 = (function (){var statearr_25005 = state_24962;
(statearr_25005[(29)] = inst_24894__$1);

(statearr_25005[(9)] = inst_24903);

(statearr_25005[(30)] = inst_24896);

(statearr_25005[(10)] = inst_24905);

(statearr_25005[(20)] = inst_24902);

(statearr_25005[(21)] = inst_24904);

return statearr_25005;
})();
var statearr_25006_25075 = state_24962__$1;
(statearr_25006_25075[(2)] = null);

(statearr_25006_25075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (28))){
var inst_24921 = (state_24962[(25)]);
var inst_24902 = (state_24962[(20)]);
var inst_24921__$1 = cljs.core.seq.call(null,inst_24902);
var state_24962__$1 = (function (){var statearr_25007 = state_24962;
(statearr_25007[(25)] = inst_24921__$1);

return statearr_25007;
})();
if(inst_24921__$1){
var statearr_25008_25076 = state_24962__$1;
(statearr_25008_25076[(1)] = (33));

} else {
var statearr_25009_25077 = state_24962__$1;
(statearr_25009_25077[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (25))){
var inst_24905 = (state_24962[(10)]);
var inst_24904 = (state_24962[(21)]);
var inst_24907 = (inst_24905 < inst_24904);
var inst_24908 = inst_24907;
var state_24962__$1 = state_24962;
if(cljs.core.truth_(inst_24908)){
var statearr_25010_25078 = state_24962__$1;
(statearr_25010_25078[(1)] = (27));

} else {
var statearr_25011_25079 = state_24962__$1;
(statearr_25011_25079[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (34))){
var state_24962__$1 = state_24962;
var statearr_25012_25080 = state_24962__$1;
(statearr_25012_25080[(2)] = null);

(statearr_25012_25080[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (17))){
var state_24962__$1 = state_24962;
var statearr_25013_25081 = state_24962__$1;
(statearr_25013_25081[(2)] = null);

(statearr_25013_25081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (3))){
var inst_24960 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24962__$1,inst_24960);
} else {
if((state_val_24963 === (12))){
var inst_24888 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_25014_25082 = state_24962__$1;
(statearr_25014_25082[(2)] = inst_24888);

(statearr_25014_25082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (2))){
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24962__$1,(4),ch);
} else {
if((state_val_24963 === (23))){
var state_24962__$1 = state_24962;
var statearr_25015_25083 = state_24962__$1;
(statearr_25015_25083[(2)] = null);

(statearr_25015_25083[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (35))){
var inst_24944 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_25016_25084 = state_24962__$1;
(statearr_25016_25084[(2)] = inst_24944);

(statearr_25016_25084[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (19))){
var inst_24860 = (state_24962[(7)]);
var inst_24864 = cljs.core.chunk_first.call(null,inst_24860);
var inst_24865 = cljs.core.chunk_rest.call(null,inst_24860);
var inst_24866 = cljs.core.count.call(null,inst_24864);
var inst_24838 = inst_24865;
var inst_24839 = inst_24864;
var inst_24840 = inst_24866;
var inst_24841 = (0);
var state_24962__$1 = (function (){var statearr_25017 = state_24962;
(statearr_25017[(13)] = inst_24839);

(statearr_25017[(14)] = inst_24840);

(statearr_25017[(16)] = inst_24841);

(statearr_25017[(17)] = inst_24838);

return statearr_25017;
})();
var statearr_25018_25085 = state_24962__$1;
(statearr_25018_25085[(2)] = null);

(statearr_25018_25085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (11))){
var inst_24860 = (state_24962[(7)]);
var inst_24838 = (state_24962[(17)]);
var inst_24860__$1 = cljs.core.seq.call(null,inst_24838);
var state_24962__$1 = (function (){var statearr_25019 = state_24962;
(statearr_25019[(7)] = inst_24860__$1);

return statearr_25019;
})();
if(inst_24860__$1){
var statearr_25020_25086 = state_24962__$1;
(statearr_25020_25086[(1)] = (16));

} else {
var statearr_25021_25087 = state_24962__$1;
(statearr_25021_25087[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (9))){
var inst_24890 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_25022_25088 = state_24962__$1;
(statearr_25022_25088[(2)] = inst_24890);

(statearr_25022_25088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (5))){
var inst_24822 = (state_24962[(11)]);
var inst_24829 = (function (){var val = inst_24822;
return ((function (val,inst_24822,state_val_24963,c__23120__auto___25050,state,m,dchan,dctr,done){
return (function (p__24828){
var vec__25023 = p__24828;
var _ = cljs.core.nth.call(null,vec__25023,(0),null);
var cs = cljs.core.nth.call(null,vec__25023,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cs], null);
});
;})(val,inst_24822,state_val_24963,c__23120__auto___25050,state,m,dchan,dctr,done))
})();
var inst_24830 = cljs.core.swap_BANG_.call(null,state,inst_24829);
var inst_24831 = cljs.core.nth.call(null,inst_24830,(0),null);
var inst_24832 = cljs.core.nth.call(null,inst_24830,(1),null);
var inst_24837 = cljs.core.seq.call(null,inst_24832);
var inst_24838 = inst_24837;
var inst_24839 = null;
var inst_24840 = (0);
var inst_24841 = (0);
var state_24962__$1 = (function (){var statearr_25026 = state_24962;
(statearr_25026[(13)] = inst_24839);

(statearr_25026[(14)] = inst_24840);

(statearr_25026[(31)] = inst_24831);

(statearr_25026[(16)] = inst_24841);

(statearr_25026[(17)] = inst_24838);

return statearr_25026;
})();
var statearr_25027_25089 = state_24962__$1;
(statearr_25027_25089[(2)] = null);

(statearr_25027_25089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (14))){
var state_24962__$1 = state_24962;
var statearr_25028_25090 = state_24962__$1;
(statearr_25028_25090[(2)] = null);

(statearr_25028_25090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (45))){
var inst_24952 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_25029_25091 = state_24962__$1;
(statearr_25029_25091[(2)] = inst_24952);

(statearr_25029_25091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (26))){
var inst_24894 = (state_24962[(29)]);
var inst_24948 = (state_24962[(2)]);
var inst_24949 = cljs.core.seq.call(null,inst_24894);
var state_24962__$1 = (function (){var statearr_25030 = state_24962;
(statearr_25030[(32)] = inst_24948);

return statearr_25030;
})();
if(inst_24949){
var statearr_25031_25092 = state_24962__$1;
(statearr_25031_25092[(1)] = (42));

} else {
var statearr_25032_25093 = state_24962__$1;
(statearr_25032_25093[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (16))){
var inst_24860 = (state_24962[(7)]);
var inst_24862 = cljs.core.chunked_seq_QMARK_.call(null,inst_24860);
var state_24962__$1 = state_24962;
if(inst_24862){
var statearr_25033_25094 = state_24962__$1;
(statearr_25033_25094[(1)] = (19));

} else {
var statearr_25034_25095 = state_24962__$1;
(statearr_25034_25095[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (38))){
var inst_24941 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_25035_25096 = state_24962__$1;
(statearr_25035_25096[(2)] = inst_24941);

(statearr_25035_25096[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (30))){
var state_24962__$1 = state_24962;
var statearr_25036_25097 = state_24962__$1;
(statearr_25036_25097[(2)] = null);

(statearr_25036_25097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (10))){
var inst_24839 = (state_24962[(13)]);
var inst_24841 = (state_24962[(16)]);
var inst_24849 = cljs.core._nth.call(null,inst_24839,inst_24841);
var inst_24850 = cljs.core.nth.call(null,inst_24849,(0),null);
var inst_24851 = cljs.core.nth.call(null,inst_24849,(1),null);
var state_24962__$1 = (function (){var statearr_25037 = state_24962;
(statearr_25037[(26)] = inst_24850);

return statearr_25037;
})();
if(cljs.core.truth_(inst_24851)){
var statearr_25038_25098 = state_24962__$1;
(statearr_25038_25098[(1)] = (13));

} else {
var statearr_25039_25099 = state_24962__$1;
(statearr_25039_25099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (18))){
var inst_24886 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_25040_25100 = state_24962__$1;
(statearr_25040_25100[(2)] = inst_24886);

(statearr_25040_25100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (42))){
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24962__$1,(45),dchan);
} else {
if((state_val_24963 === (37))){
var inst_24930 = (state_24962[(23)]);
var inst_24822 = (state_24962[(11)]);
var inst_24921 = (state_24962[(25)]);
var inst_24930__$1 = cljs.core.first.call(null,inst_24921);
var inst_24931 = cljs.core.async.put_BANG_.call(null,inst_24930__$1,inst_24822,done);
var state_24962__$1 = (function (){var statearr_25041 = state_24962;
(statearr_25041[(23)] = inst_24930__$1);

return statearr_25041;
})();
if(cljs.core.truth_(inst_24931)){
var statearr_25042_25101 = state_24962__$1;
(statearr_25042_25101[(1)] = (39));

} else {
var statearr_25043_25102 = state_24962__$1;
(statearr_25043_25102[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (8))){
var inst_24840 = (state_24962[(14)]);
var inst_24841 = (state_24962[(16)]);
var inst_24843 = (inst_24841 < inst_24840);
var inst_24844 = inst_24843;
var state_24962__$1 = state_24962;
if(cljs.core.truth_(inst_24844)){
var statearr_25044_25103 = state_24962__$1;
(statearr_25044_25103[(1)] = (10));

} else {
var statearr_25045_25104 = state_24962__$1;
(statearr_25045_25104[(1)] = (11));

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
});})(c__23120__auto___25050,state,m,dchan,dctr,done))
;
return ((function (switch__23097__auto__,c__23120__auto___25050,state,m,dchan,dctr,done){
return (function() {
var reagi$core$mult_STAR__$_state_machine__23098__auto__ = null;
var reagi$core$mult_STAR__$_state_machine__23098__auto____0 = (function (){
var statearr_25046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25046[(0)] = reagi$core$mult_STAR__$_state_machine__23098__auto__);

(statearr_25046[(1)] = (1));

return statearr_25046;
});
var reagi$core$mult_STAR__$_state_machine__23098__auto____1 = (function (state_24962){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_24962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25047){if((e25047 instanceof Object)){
var ex__23101__auto__ = e25047;
var statearr_25048_25105 = state_24962;
(statearr_25048_25105[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25106 = state_24962;
state_24962 = G__25106;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$mult_STAR__$_state_machine__23098__auto__ = function(state_24962){
switch(arguments.length){
case 0:
return reagi$core$mult_STAR__$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$mult_STAR__$_state_machine__23098__auto____1.call(this,state_24962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$mult_STAR__$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mult_STAR__$_state_machine__23098__auto____0;
reagi$core$mult_STAR__$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mult_STAR__$_state_machine__23098__auto____1;
return reagi$core$mult_STAR__$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto___25050,state,m,dchan,dctr,done))
})();
var state__23122__auto__ = (function (){var statearr_25049 = f__23121__auto__.call(null);
(statearr_25049[(6)] = c__23120__auto___25050);

return statearr_25049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto___25050,state,m,dchan,dctr,done))
);


return m;
});
/**
 * Protect a collection of child objects from being GCed before the parent.
 */
reagi.core.depend_on = (function reagi$core$depend_on(parent,children){
return null;
});
reagi.core.deref_events = (function reagi$core$deref_events(head){
var temp__5455__auto__ = cljs.core.deref.call(null,head);
if(cljs.core.truth_(temp__5455__auto__)){
var hd = temp__5455__auto__;
return reagi.core.unbox.call(null,hd);
} else {
return undefined;
}
});

/**
 * @interface
 */
reagi.core.Disposable = function(){};

/**
 * Clean up any resources an object has before it goes out of scope. In
 *  Clojure this is called automatically when the object is finalized. In
 *  ClojureScript this must be called manually.
 */
reagi.core.dispose = (function reagi$core$dispose(x){
if(((!((x == null))) && (!((x.reagi$core$Disposable$dispose$arity$1 == null))))){
return x.reagi$core$Disposable$dispose$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (reagi.core.dispose[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,x);
} else {
var m__4212__auto____$1 = (reagi.core.dispose["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Disposable.dispose",x);
}
}
}
});

/**
 * Add a function to be called when the object is disposed.
 */
reagi.core.on_dispose = (function reagi$core$on_dispose(x,f){
if(((!((x == null))) && (!((x.reagi$core$Disposable$on_dispose$arity$2 == null))))){
return x.reagi$core$Disposable$on_dispose$arity$2(x,f);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (reagi.core.on_dispose[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,x,f);
} else {
var m__4212__auto____$1 = (reagi.core.on_dispose["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,x,f);
} else {
throw cljs.core.missing_protocol.call(null,"Disposable.on-dispose",x);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IPending}
 * @implements {reagi.core.Signal}
 * @implements {cljs.core.IDeref}
 * @implements {reagi.core.Disposable}
 * @implements {reagi.core.Observable}
*/
reagi.core.Events = (function (ch,mult,head,closed,disposers){
this.ch = ch;
this.mult = mult;
this.head = head;
this.closed = closed;
this.disposers = disposers;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32769;
});
reagi.core.Events.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return !((cljs.core.deref.call(null,self__.head) == null));
});

reagi.core.Events.prototype.cljs$core$IDeref$_deref$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return reagi.core.deref_events.call(null,self__.head);
});

reagi.core.Events.prototype.call = (function (self__,msg){
var self__ = this;
var self____$1 = this;
var stream = self____$1;
var c__23120__auto___25153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto___25153,stream,self____$1){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto___25153,stream,self____$1){
return (function (state_25112){
var state_val_25113 = (state_25112[(1)]);
if((state_val_25113 === (1))){
var inst_25108 = reagi.core.box.call(null,msg);
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25112__$1,(2),self__.ch,inst_25108);
} else {
if((state_val_25113 === (2))){
var inst_25110 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25112__$1,inst_25110);
} else {
return null;
}
}
});})(c__23120__auto___25153,stream,self____$1))
;
return ((function (switch__23097__auto__,c__23120__auto___25153,stream,self____$1){
return (function() {
var reagi$core$state_machine__23098__auto__ = null;
var reagi$core$state_machine__23098__auto____0 = (function (){
var statearr_25114 = [null,null,null,null,null,null,null];
(statearr_25114[(0)] = reagi$core$state_machine__23098__auto__);

(statearr_25114[(1)] = (1));

return statearr_25114;
});
var reagi$core$state_machine__23098__auto____1 = (function (state_25112){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25115){if((e25115 instanceof Object)){
var ex__23101__auto__ = e25115;
var statearr_25116_25154 = state_25112;
(statearr_25116_25154[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25155 = state_25112;
state_25112 = G__25155;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$state_machine__23098__auto__ = function(state_25112){
switch(arguments.length){
case 0:
return reagi$core$state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$state_machine__23098__auto____1.call(this,state_25112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__23098__auto____0;
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__23098__auto____1;
return reagi$core$state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto___25153,stream,self____$1))
})();
var state__23122__auto__ = (function (){var statearr_25117 = f__23121__auto__.call(null);
(statearr_25117[(6)] = c__23120__auto___25153);

return statearr_25117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto___25153,stream,self____$1))
);


return stream;
});

reagi.core.Events.prototype.apply = (function (self__,args25107){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25107)));
});

reagi.core.Events.prototype.cljs$core$IFn$_invoke$arity$1 = (function (msg){
var self__ = this;
var stream = this;
var c__23120__auto___25156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto___25156,stream){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto___25156,stream){
return (function (state_25122){
var state_val_25123 = (state_25122[(1)]);
if((state_val_25123 === (1))){
var inst_25118 = reagi.core.box.call(null,msg);
var state_25122__$1 = state_25122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25122__$1,(2),self__.ch,inst_25118);
} else {
if((state_val_25123 === (2))){
var inst_25120 = (state_25122[(2)]);
var state_25122__$1 = state_25122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25122__$1,inst_25120);
} else {
return null;
}
}
});})(c__23120__auto___25156,stream))
;
return ((function (switch__23097__auto__,c__23120__auto___25156,stream){
return (function() {
var reagi$core$state_machine__23098__auto__ = null;
var reagi$core$state_machine__23098__auto____0 = (function (){
var statearr_25124 = [null,null,null,null,null,null,null];
(statearr_25124[(0)] = reagi$core$state_machine__23098__auto__);

(statearr_25124[(1)] = (1));

return statearr_25124;
});
var reagi$core$state_machine__23098__auto____1 = (function (state_25122){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object)){
var ex__23101__auto__ = e25125;
var statearr_25126_25157 = state_25122;
(statearr_25126_25157[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25158 = state_25122;
state_25122 = G__25158;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$state_machine__23098__auto__ = function(state_25122){
switch(arguments.length){
case 0:
return reagi$core$state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$state_machine__23098__auto____1.call(this,state_25122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__23098__auto____0;
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__23098__auto____1;
return reagi$core$state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto___25156,stream))
})();
var state__23122__auto__ = (function (){var statearr_25127 = f__23121__auto__.call(null);
(statearr_25127[(6)] = c__23120__auto___25156);

return statearr_25127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto___25156,stream))
);


return stream;
});

reagi.core.Events.prototype.reagi$core$Observable$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Observable$port$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});

reagi.core.Events.prototype.reagi$core$Observable$listen$arity$2 = (function (_,channel){
var self__ = this;
var ___$1 = this;
var c__23120__auto___25159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto___25159,___$1){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto___25159,___$1){
return (function (state_25137){
var state_val_25138 = (state_25137[(1)]);
if((state_val_25138 === (1))){
var inst_25128 = (state_25137[(7)]);
var inst_25128__$1 = cljs.core.deref.call(null,self__.head);
var state_25137__$1 = (function (){var statearr_25139 = state_25137;
(statearr_25139[(7)] = inst_25128__$1);

return statearr_25139;
})();
if(cljs.core.truth_(inst_25128__$1)){
var statearr_25140_25160 = state_25137__$1;
(statearr_25140_25160[(1)] = (2));

} else {
var statearr_25141_25161 = state_25137__$1;
(statearr_25141_25161[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (2))){
var inst_25128 = (state_25137[(7)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25137__$1,(5),channel,inst_25128);
} else {
if((state_val_25138 === (3))){
var state_25137__$1 = state_25137;
var statearr_25142_25162 = state_25137__$1;
(statearr_25142_25162[(2)] = null);

(statearr_25142_25162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (4))){
var inst_25134 = (state_25137[(2)]);
var inst_25135 = cljs.core.async.tap.call(null,self__.mult,channel);
var state_25137__$1 = (function (){var statearr_25143 = state_25137;
(statearr_25143[(8)] = inst_25134);

return statearr_25143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25137__$1,inst_25135);
} else {
if((state_val_25138 === (5))){
var inst_25131 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25144_25163 = state_25137__$1;
(statearr_25144_25163[(2)] = inst_25131);

(statearr_25144_25163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__23120__auto___25159,___$1))
;
return ((function (switch__23097__auto__,c__23120__auto___25159,___$1){
return (function() {
var reagi$core$state_machine__23098__auto__ = null;
var reagi$core$state_machine__23098__auto____0 = (function (){
var statearr_25145 = [null,null,null,null,null,null,null,null,null];
(statearr_25145[(0)] = reagi$core$state_machine__23098__auto__);

(statearr_25145[(1)] = (1));

return statearr_25145;
});
var reagi$core$state_machine__23098__auto____1 = (function (state_25137){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25146){if((e25146 instanceof Object)){
var ex__23101__auto__ = e25146;
var statearr_25147_25164 = state_25137;
(statearr_25147_25164[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25165 = state_25137;
state_25137 = G__25165;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$state_machine__23098__auto__ = function(state_25137){
switch(arguments.length){
case 0:
return reagi$core$state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$state_machine__23098__auto____1.call(this,state_25137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__23098__auto____0;
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__23098__auto____1;
return reagi$core$state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto___25159,___$1))
})();
var state__23122__auto__ = (function (){var statearr_25148 = f__23121__auto__.call(null);
(statearr_25148[(6)] = c__23120__auto___25159);

return statearr_25148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto___25159,___$1))
);


return channel;
});

reagi.core.Events.prototype.reagi$core$Signal$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Signal$complete_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3922__auto__ = cljs.core.deref.call(null,self__.closed);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (cljs.core.deref.call(null,self__.head) instanceof reagi.core.Completed);
}
});

reagi.core.Events.prototype.reagi$core$Disposable$ = cljs.core.PROTOCOL_SENTINEL;

reagi.core.Events.prototype.reagi$core$Disposable$dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var seq__25149_25166 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.disposers));
var chunk__25150_25167 = null;
var count__25151_25168 = (0);
var i__25152_25169 = (0);
while(true){
if((i__25152_25169 < count__25151_25168)){
var d_25170 = cljs.core._nth.call(null,chunk__25150_25167,i__25152_25169);
d_25170.call(null);


var G__25171 = seq__25149_25166;
var G__25172 = chunk__25150_25167;
var G__25173 = count__25151_25168;
var G__25174 = (i__25152_25169 + (1));
seq__25149_25166 = G__25171;
chunk__25150_25167 = G__25172;
count__25151_25168 = G__25173;
i__25152_25169 = G__25174;
continue;
} else {
var temp__5457__auto___25175 = cljs.core.seq.call(null,seq__25149_25166);
if(temp__5457__auto___25175){
var seq__25149_25176__$1 = temp__5457__auto___25175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25149_25176__$1)){
var c__4319__auto___25177 = cljs.core.chunk_first.call(null,seq__25149_25176__$1);
var G__25178 = cljs.core.chunk_rest.call(null,seq__25149_25176__$1);
var G__25179 = c__4319__auto___25177;
var G__25180 = cljs.core.count.call(null,c__4319__auto___25177);
var G__25181 = (0);
seq__25149_25166 = G__25178;
chunk__25150_25167 = G__25179;
count__25151_25168 = G__25180;
i__25152_25169 = G__25181;
continue;
} else {
var d_25182 = cljs.core.first.call(null,seq__25149_25176__$1);
d_25182.call(null);


var G__25183 = cljs.core.next.call(null,seq__25149_25176__$1);
var G__25184 = null;
var G__25185 = (0);
var G__25186 = (0);
seq__25149_25166 = G__25183;
chunk__25150_25167 = G__25184;
count__25151_25168 = G__25185;
i__25152_25169 = G__25186;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.close_BANG_.call(null,self__.ch);
});

reagi.core.Events.prototype.reagi$core$Disposable$on_dispose$arity$2 = (function (_,d){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.disposers,cljs.core.conj,d);
});

reagi.core.Events.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.Symbol(null,"disposers","disposers",-1899395189,null)], null);
});

reagi.core.Events.cljs$lang$type = true;

reagi.core.Events.cljs$lang$ctorStr = "reagi.core/Events";

reagi.core.Events.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"reagi.core/Events");
});

/**
 * Positional factory function for reagi.core/Events.
 */
reagi.core.__GT_Events = (function reagi$core$__GT_Events(ch,mult,head,closed,disposers){
return (new reagi.core.Events(ch,mult,head,closed,disposers));
});

reagi.core.no_op = (function reagi$core$no_op(){
return null;
});
reagi.core.no_value = (new Object());
reagi.core.no_value_QMARK_ = (function reagi$core$no_value_QMARK_(x){
return (x === reagi.core.no_value);
});
/**
 * Create a referential stream of events. An initial value may optionally be
 *   supplied, otherwise the stream will be unrealized until the first value is
 *   pushed to it. Event streams will deref to the latest value pushed to the
 *   stream.
 */
reagi.core.events = (function reagi$core$events(var_args){
var G__25188 = arguments.length;
switch (G__25188) {
case 0:
return reagi.core.events.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagi.core.events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagi.core.events.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagi.core.events.call(null,reagi.core.no_value);
});

reagi.core.events.cljs$core$IFn$_invoke$arity$1 = (function (init){
var in$ = cljs.core.async.chan.call(null);
var closed = cljs.core.atom.call(null,false);
var head = cljs.core.atom.call(null,(cljs.core.truth_(reagi.core.no_value_QMARK_.call(null,init))?null:reagi.core.box.call(null,init)));
var out = cljs.core.async.chan.call(null);
var mult = reagi.core.mult_STAR_.call(null,out);
var c__23120__auto___25234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto___25234,in$,closed,head,out,mult){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto___25234,in$,closed,head,out,mult){
return (function (state_25212){
var state_val_25213 = (state_25212[(1)]);
if((state_val_25213 === (7))){
var inst_25198 = (state_25212[(7)]);
var inst_25198__$1 = (state_25212[(2)]);
var state_25212__$1 = (function (){var statearr_25214 = state_25212;
(statearr_25214[(7)] = inst_25198__$1);

return statearr_25214;
})();
if(cljs.core.truth_(inst_25198__$1)){
var statearr_25215_25235 = state_25212__$1;
(statearr_25215_25235[(1)] = (8));

} else {
var statearr_25216_25236 = state_25212__$1;
(statearr_25216_25236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (1))){
var inst_25189 = init;
var state_25212__$1 = (function (){var statearr_25217 = state_25212;
(statearr_25217[(8)] = inst_25189);

return statearr_25217;
})();
var statearr_25218_25237 = state_25212__$1;
(statearr_25218_25237[(2)] = null);

(statearr_25218_25237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (4))){
var inst_25193 = cljs.core.async.close_BANG_.call(null,in$);
var state_25212__$1 = state_25212;
var statearr_25219_25238 = state_25212__$1;
(statearr_25219_25238[(2)] = inst_25193);

(statearr_25219_25238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (6))){
var inst_25196 = (state_25212[(2)]);
var state_25212__$1 = (function (){var statearr_25220 = state_25212;
(statearr_25220[(9)] = inst_25196);

return statearr_25220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25212__$1,(7),in$);
} else {
if((state_val_25213 === (3))){
var inst_25208 = (state_25212[(2)]);
var inst_25209 = cljs.core.async.close_BANG_.call(null,out);
var inst_25210 = cljs.core.reset_BANG_.call(null,closed,true);
var state_25212__$1 = (function (){var statearr_25221 = state_25212;
(statearr_25221[(10)] = inst_25209);

(statearr_25221[(11)] = inst_25208);

return statearr_25221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25212__$1,inst_25210);
} else {
if((state_val_25213 === (2))){
var inst_25189 = (state_25212[(8)]);
var inst_25191 = (inst_25189 instanceof reagi.core.Completed);
var state_25212__$1 = state_25212;
if(cljs.core.truth_(inst_25191)){
var statearr_25222_25239 = state_25212__$1;
(statearr_25222_25239[(1)] = (4));

} else {
var statearr_25223_25240 = state_25212__$1;
(statearr_25223_25240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (11))){
var inst_25198 = (state_25212[(7)]);
var inst_25201 = (state_25212[(2)]);
var inst_25202 = cljs.core.reset_BANG_.call(null,head,inst_25198);
var inst_25189 = inst_25198;
var state_25212__$1 = (function (){var statearr_25224 = state_25212;
(statearr_25224[(12)] = inst_25201);

(statearr_25224[(8)] = inst_25189);

(statearr_25224[(13)] = inst_25202);

return statearr_25224;
})();
var statearr_25225_25241 = state_25212__$1;
(statearr_25225_25241[(2)] = null);

(statearr_25225_25241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (9))){
var state_25212__$1 = state_25212;
var statearr_25226_25242 = state_25212__$1;
(statearr_25226_25242[(2)] = null);

(statearr_25226_25242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (5))){
var state_25212__$1 = state_25212;
var statearr_25227_25243 = state_25212__$1;
(statearr_25227_25243[(2)] = null);

(statearr_25227_25243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (10))){
var inst_25206 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25228_25244 = state_25212__$1;
(statearr_25228_25244[(2)] = inst_25206);

(statearr_25228_25244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (8))){
var inst_25198 = (state_25212[(7)]);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25212__$1,(11),out,inst_25198);
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
});})(c__23120__auto___25234,in$,closed,head,out,mult))
;
return ((function (switch__23097__auto__,c__23120__auto___25234,in$,closed,head,out,mult){
return (function() {
var reagi$core$state_machine__23098__auto__ = null;
var reagi$core$state_machine__23098__auto____0 = (function (){
var statearr_25229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25229[(0)] = reagi$core$state_machine__23098__auto__);

(statearr_25229[(1)] = (1));

return statearr_25229;
});
var reagi$core$state_machine__23098__auto____1 = (function (state_25212){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25230){if((e25230 instanceof Object)){
var ex__23101__auto__ = e25230;
var statearr_25231_25245 = state_25212;
(statearr_25231_25245[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25246 = state_25212;
state_25212 = G__25246;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$state_machine__23098__auto__ = function(state_25212){
switch(arguments.length){
case 0:
return reagi$core$state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$state_machine__23098__auto____1.call(this,state_25212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$state_machine__23098__auto____0;
reagi$core$state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$state_machine__23098__auto____1;
return reagi$core$state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto___25234,in$,closed,head,out,mult))
})();
var state__23122__auto__ = (function (){var statearr_25232 = f__23121__auto__.call(null);
(statearr_25232[(6)] = c__23120__auto___25234);

return statearr_25232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto___25234,in$,closed,head,out,mult))
);


return (new reagi.core.Events(in$,mult,head,closed,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});

reagi.core.events.cljs$lang$maxFixedArity = 1;

/**
 * Return true if the object is a stream of events.
 */
reagi.core.events_QMARK_ = (function reagi$core$events_QMARK_(x){
return (x instanceof reagi.core.Events);
});
/**
 * Create a completed event stream for a single value.
 */
reagi.core.once = (function reagi$core$once(value){
return reagi.core.events.call(null,reagi.core.completed.call(null,value));
});
/**
 * Deliver one or more messages to an event stream.
 */
reagi.core.deliver = (function reagi$core$deliver(var_args){
var G__25251 = arguments.length;
switch (G__25251) {
case 1:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___25257 = arguments.length;
var i__4500__auto___25258 = (0);
while(true){
if((i__4500__auto___25258 < len__4499__auto___25257)){
args_arr__4514__auto__.push((arguments[i__4500__auto___25258]));

var G__25259 = (i__4500__auto___25258 + (1));
i__4500__auto___25258 = G__25259;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return null;
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$2 = (function (stream,msg){
return stream.call(null,msg);
});

reagi.core.deliver.cljs$core$IFn$_invoke$arity$variadic = (function (stream,msg,msgs){
var seq__25252 = cljs.core.seq.call(null,cljs.core.cons.call(null,msg,msgs));
var chunk__25253 = null;
var count__25254 = (0);
var i__25255 = (0);
while(true){
if((i__25255 < count__25254)){
var m = cljs.core._nth.call(null,chunk__25253,i__25255);
stream.call(null,m);


var G__25260 = seq__25252;
var G__25261 = chunk__25253;
var G__25262 = count__25254;
var G__25263 = (i__25255 + (1));
seq__25252 = G__25260;
chunk__25253 = G__25261;
count__25254 = G__25262;
i__25255 = G__25263;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25252);
if(temp__5457__auto__){
var seq__25252__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25252__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25252__$1);
var G__25264 = cljs.core.chunk_rest.call(null,seq__25252__$1);
var G__25265 = c__4319__auto__;
var G__25266 = cljs.core.count.call(null,c__4319__auto__);
var G__25267 = (0);
seq__25252 = G__25264;
chunk__25253 = G__25265;
count__25254 = G__25266;
i__25255 = G__25267;
continue;
} else {
var m = cljs.core.first.call(null,seq__25252__$1);
stream.call(null,m);


var G__25268 = cljs.core.next.call(null,seq__25252__$1);
var G__25269 = null;
var G__25270 = (0);
var G__25271 = (0);
seq__25252 = G__25268;
chunk__25253 = G__25269;
count__25254 = G__25270;
i__25255 = G__25271;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
reagi.core.deliver.cljs$lang$applyTo = (function (seq25248){
var G__25249 = cljs.core.first.call(null,seq25248);
var seq25248__$1 = cljs.core.next.call(null,seq25248);
var G__25250 = cljs.core.first.call(null,seq25248__$1);
var seq25248__$2 = cljs.core.next.call(null,seq25248__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25249,G__25250,seq25248__$2);
});

reagi.core.deliver.cljs$lang$maxFixedArity = (2);

/**
 * Deliver events on an event stream to a core.async channel. Returns the
 *   channel.
 * 
 *   The events from the stream cannot include nil. The channel will be closed when
 *   the event stream is complete.
 */
reagi.core.subscribe = (function reagi$core$subscribe(stream,channel){
reagi.core.listen.call(null,stream,cljs.core.async.map_GT_.call(null,reagi.core.unbox,channel));

reagi.core.depend_on.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return channel;
});
reagi.core.close_all_BANG_ = (function reagi$core$close_all_BANG_(chs){
var seq__25272 = cljs.core.seq.call(null,chs);
var chunk__25273 = null;
var count__25274 = (0);
var i__25275 = (0);
while(true){
if((i__25275 < count__25274)){
var ch = cljs.core._nth.call(null,chunk__25273,i__25275);
cljs.core.async.close_BANG_.call(null,ch);


var G__25276 = seq__25272;
var G__25277 = chunk__25273;
var G__25278 = count__25274;
var G__25279 = (i__25275 + (1));
seq__25272 = G__25276;
chunk__25273 = G__25277;
count__25274 = G__25278;
i__25275 = G__25279;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25272);
if(temp__5457__auto__){
var seq__25272__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25272__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25272__$1);
var G__25280 = cljs.core.chunk_rest.call(null,seq__25272__$1);
var G__25281 = c__4319__auto__;
var G__25282 = cljs.core.count.call(null,c__4319__auto__);
var G__25283 = (0);
seq__25272 = G__25280;
chunk__25273 = G__25281;
count__25274 = G__25282;
i__25275 = G__25283;
continue;
} else {
var ch = cljs.core.first.call(null,seq__25272__$1);
cljs.core.async.close_BANG_.call(null,ch);


var G__25284 = cljs.core.next.call(null,seq__25272__$1);
var G__25285 = null;
var G__25286 = (0);
var G__25287 = (0);
seq__25272 = G__25284;
chunk__25273 = G__25285;
count__25274 = G__25286;
i__25275 = G__25287;
continue;
}
} else {
return null;
}
}
break;
}
});
reagi.core.listen_all = (function reagi$core$listen_all(streams){
return cljs.core.mapv.call(null,(function (p1__25288_SHARP_){
return reagi.core.listen.call(null,p1__25288_SHARP_,cljs.core.async.chan.call(null));
}),streams);
});
reagi.core.connect_port = (function reagi$core$connect_port(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25292 = arguments.length;
var i__4500__auto___25293 = (0);
while(true){
if((i__4500__auto___25293 < len__4499__auto___25292)){
args__4502__auto__.push((arguments[i__4500__auto___25293]));

var G__25294 = (i__4500__auto___25293 + (1));
i__4500__auto___25293 = G__25294;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

reagi.core.connect_port.cljs$core$IFn$_invoke$arity$variadic = (function (stream,f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagi.core.port.call(null,stream)], null)));
});

reagi.core.connect_port.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagi.core.connect_port.cljs$lang$applyTo = (function (seq25289){
var G__25290 = cljs.core.first.call(null,seq25289);
var seq25289__$1 = cljs.core.next.call(null,seq25289);
var G__25291 = cljs.core.first.call(null,seq25289__$1);
var seq25289__$2 = cljs.core.next.call(null,seq25289__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25290,G__25291,seq25289__$2);
});

/**
 * Combine multiple streams into one. All events from the input streams are
 *   pushed to the returned stream.
 */
reagi.core.merge = (function reagi$core$merge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25297 = arguments.length;
var i__4500__auto___25298 = (0);
while(true){
if((i__4500__auto___25298 < len__4499__auto___25297)){
args__4502__auto__.push((arguments[i__4500__auto___25298]));

var G__25299 = (i__4500__auto___25298 + (1));
i__4500__auto___25298 = G__25299;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

reagi.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__25296 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__25296,cljs.core.async.pipe,cljs.core.async.merge.call(null,chs));

reagi.core.on_dispose.call(null,G__25296,((function (G__25296,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__25296,chs))
);

reagi.core.depend_on.call(null,G__25296,streams);

return G__25296;
});

reagi.core.merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
reagi.core.merge.cljs$lang$applyTo = (function (seq25295){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25295));
});

reagi.core.zip_ch = (function reagi$core$zip_ch(ins,out){
var index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i], null);
}),ins));
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__,index){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__,index){
return (function (state_25341){
var state_val_25342 = (state_25341[(1)]);
if((state_val_25342 === (7))){
var inst_25314 = (state_25341[(7)]);
var inst_25313 = (state_25341[(2)]);
var inst_25314__$1 = cljs.core.nth.call(null,inst_25313,(0),null);
var inst_25315 = cljs.core.nth.call(null,inst_25313,(1),null);
var state_25341__$1 = (function (){var statearr_25344 = state_25341;
(statearr_25344[(8)] = inst_25315);

(statearr_25344[(7)] = inst_25314__$1);

return statearr_25344;
})();
if(cljs.core.truth_(inst_25314__$1)){
var statearr_25345_25368 = state_25341__$1;
(statearr_25345_25368[(1)] = (8));

} else {
var statearr_25346_25369 = state_25341__$1;
(statearr_25346_25369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (1))){
var inst_25300 = cljs.core.constantly.call(null,reagi.core.no_value);
var inst_25301 = cljs.core.mapv.call(null,inst_25300,ins);
var inst_25302 = cljs.core.set.call(null,ins);
var inst_25303 = inst_25301;
var inst_25304 = inst_25302;
var state_25341__$1 = (function (){var statearr_25347 = state_25341;
(statearr_25347[(9)] = inst_25304);

(statearr_25347[(10)] = inst_25303);

return statearr_25347;
})();
var statearr_25348_25370 = state_25341__$1;
(statearr_25348_25370[(2)] = null);

(statearr_25348_25370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (4))){
var inst_25304 = (state_25341[(9)]);
var inst_25311 = cljs.core.vec.call(null,inst_25304);
var state_25341__$1 = state_25341;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25341__$1,(7),inst_25311);
} else {
if((state_val_25342 === (13))){
var inst_25319 = (state_25341[(11)]);
var inst_25304 = (state_25341[(9)]);
var inst_25327 = (state_25341[(2)]);
var tmp25343 = inst_25304;
var inst_25303 = inst_25319;
var inst_25304__$1 = tmp25343;
var state_25341__$1 = (function (){var statearr_25349 = state_25341;
(statearr_25349[(9)] = inst_25304__$1);

(statearr_25349[(10)] = inst_25303);

(statearr_25349[(12)] = inst_25327);

return statearr_25349;
})();
var statearr_25350_25371 = state_25341__$1;
(statearr_25350_25371[(2)] = null);

(statearr_25350_25371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (6))){
var inst_25337 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
var statearr_25351_25372 = state_25341__$1;
(statearr_25351_25372[(2)] = inst_25337);

(statearr_25351_25372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (3))){
var inst_25339 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25341__$1,inst_25339);
} else {
if((state_val_25342 === (12))){
var inst_25319 = (state_25341[(11)]);
var inst_25323 = reagi.core.box.call(null,inst_25319);
var state_25341__$1 = state_25341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25341__$1,(14),out,inst_25323);
} else {
if((state_val_25342 === (2))){
var inst_25304 = (state_25341[(9)]);
var inst_25306 = cljs.core.seq.call(null,inst_25304);
var state_25341__$1 = state_25341;
if(inst_25306){
var statearr_25353_25373 = state_25341__$1;
(statearr_25353_25373[(1)] = (4));

} else {
var statearr_25354_25374 = state_25341__$1;
(statearr_25354_25374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (11))){
var state_25341__$1 = state_25341;
var statearr_25355_25375 = state_25341__$1;
(statearr_25355_25375[(2)] = null);

(statearr_25355_25375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (9))){
var inst_25304 = (state_25341[(9)]);
var inst_25315 = (state_25341[(8)]);
var inst_25303 = (state_25341[(10)]);
var inst_25330 = cljs.core.disj.call(null,inst_25304,inst_25315);
var tmp25352 = inst_25303;
var inst_25303__$1 = tmp25352;
var inst_25304__$1 = inst_25330;
var state_25341__$1 = (function (){var statearr_25356 = state_25341;
(statearr_25356[(9)] = inst_25304__$1);

(statearr_25356[(10)] = inst_25303__$1);

return statearr_25356;
})();
var statearr_25357_25376 = state_25341__$1;
(statearr_25357_25376[(2)] = null);

(statearr_25357_25376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (5))){
var inst_25335 = cljs.core.async.close_BANG_.call(null,out);
var state_25341__$1 = state_25341;
var statearr_25358_25377 = state_25341__$1;
(statearr_25358_25377[(2)] = inst_25335);

(statearr_25358_25377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (14))){
var inst_25325 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
var statearr_25359_25378 = state_25341__$1;
(statearr_25359_25378[(2)] = inst_25325);

(statearr_25359_25378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (10))){
var inst_25333 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
var statearr_25360_25379 = state_25341__$1;
(statearr_25360_25379[(2)] = inst_25333);

(statearr_25360_25379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (8))){
var inst_25319 = (state_25341[(11)]);
var inst_25315 = (state_25341[(8)]);
var inst_25314 = (state_25341[(7)]);
var inst_25303 = (state_25341[(10)]);
var inst_25317 = index.call(null,inst_25315);
var inst_25318 = reagi.core.unbox.call(null,inst_25314);
var inst_25319__$1 = cljs.core.assoc.call(null,inst_25303,inst_25317,inst_25318);
var inst_25320 = cljs.core.some.call(null,reagi.core.no_value_QMARK_,inst_25319__$1);
var state_25341__$1 = (function (){var statearr_25361 = state_25341;
(statearr_25361[(11)] = inst_25319__$1);

return statearr_25361;
})();
if(cljs.core.truth_(inst_25320)){
var statearr_25362_25380 = state_25341__$1;
(statearr_25362_25380[(1)] = (11));

} else {
var statearr_25363_25381 = state_25341__$1;
(statearr_25363_25381[(1)] = (12));

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
});})(c__23120__auto__,index))
;
return ((function (switch__23097__auto__,c__23120__auto__,index){
return (function() {
var reagi$core$zip_ch_$_state_machine__23098__auto__ = null;
var reagi$core$zip_ch_$_state_machine__23098__auto____0 = (function (){
var statearr_25364 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25364[(0)] = reagi$core$zip_ch_$_state_machine__23098__auto__);

(statearr_25364[(1)] = (1));

return statearr_25364;
});
var reagi$core$zip_ch_$_state_machine__23098__auto____1 = (function (state_25341){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25365){if((e25365 instanceof Object)){
var ex__23101__auto__ = e25365;
var statearr_25366_25382 = state_25341;
(statearr_25366_25382[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25383 = state_25341;
state_25341 = G__25383;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$zip_ch_$_state_machine__23098__auto__ = function(state_25341){
switch(arguments.length){
case 0:
return reagi$core$zip_ch_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$zip_ch_$_state_machine__23098__auto____1.call(this,state_25341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$zip_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$zip_ch_$_state_machine__23098__auto____0;
reagi$core$zip_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$zip_ch_$_state_machine__23098__auto____1;
return reagi$core$zip_ch_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__,index))
})();
var state__23122__auto__ = (function (){var statearr_25367 = f__23121__auto__.call(null);
(statearr_25367[(6)] = c__23120__auto__);

return statearr_25367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__,index))
);

return c__23120__auto__;
});
/**
 * Combine multiple streams into one. On an event from any input stream, a
 *   vector will be pushed to the returned stream containing the latest events
 *   of all input streams.
 */
reagi.core.zip = (function reagi$core$zip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25386 = arguments.length;
var i__4500__auto___25387 = (0);
while(true){
if((i__4500__auto___25387 < len__4499__auto___25386)){
args__4502__auto__.push((arguments[i__4500__auto___25387]));

var G__25388 = (i__4500__auto___25387 + (1));
i__4500__auto___25387 = G__25388;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

reagi.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__25385 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__25385,reagi.core.zip_ch,chs);

reagi.core.on_dispose.call(null,G__25385,((function (G__25385,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__25385,chs))
);

reagi.core.depend_on.call(null,G__25385,streams);

return G__25385;
});

reagi.core.zip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
reagi.core.zip.cljs$lang$applyTo = (function (seq25384){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25384));
});

reagi.core.mapcat_ch = (function reagi$core$mapcat_ch(f,in$,out){
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__){
return (function (state_25447){
var state_val_25448 = (state_25447[(1)]);
if((state_val_25448 === (7))){
var inst_25443 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25449_25483 = state_25447__$1;
(statearr_25449_25483[(2)] = inst_25443);

(statearr_25449_25483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (20))){
var inst_25415 = (state_25447[(7)]);
var inst_25427 = (state_25447[(2)]);
var inst_25428 = cljs.core.next.call(null,inst_25415);
var inst_25400 = inst_25428;
var inst_25401 = null;
var inst_25402 = (0);
var inst_25403 = (0);
var state_25447__$1 = (function (){var statearr_25450 = state_25447;
(statearr_25450[(8)] = inst_25402);

(statearr_25450[(9)] = inst_25400);

(statearr_25450[(10)] = inst_25427);

(statearr_25450[(11)] = inst_25403);

(statearr_25450[(12)] = inst_25401);

return statearr_25450;
})();
var statearr_25451_25484 = state_25447__$1;
(statearr_25451_25484[(2)] = null);

(statearr_25451_25484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (1))){
var state_25447__$1 = state_25447;
var statearr_25452_25485 = state_25447__$1;
(statearr_25452_25485[(2)] = null);

(statearr_25452_25485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (4))){
var inst_25391 = (state_25447[(13)]);
var inst_25391__$1 = (state_25447[(2)]);
var state_25447__$1 = (function (){var statearr_25456 = state_25447;
(statearr_25456[(13)] = inst_25391__$1);

return statearr_25456;
})();
if(cljs.core.truth_(inst_25391__$1)){
var statearr_25457_25486 = state_25447__$1;
(statearr_25457_25486[(1)] = (5));

} else {
var statearr_25458_25487 = state_25447__$1;
(statearr_25458_25487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (15))){
var state_25447__$1 = state_25447;
var statearr_25459_25488 = state_25447__$1;
(statearr_25459_25488[(2)] = null);

(statearr_25459_25488[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (13))){
var inst_25402 = (state_25447[(8)]);
var inst_25400 = (state_25447[(9)]);
var inst_25403 = (state_25447[(11)]);
var inst_25401 = (state_25447[(12)]);
var inst_25411 = (state_25447[(2)]);
var inst_25412 = (inst_25403 + (1));
var tmp25453 = inst_25402;
var tmp25454 = inst_25400;
var tmp25455 = inst_25401;
var inst_25400__$1 = tmp25454;
var inst_25401__$1 = tmp25455;
var inst_25402__$1 = tmp25453;
var inst_25403__$1 = inst_25412;
var state_25447__$1 = (function (){var statearr_25460 = state_25447;
(statearr_25460[(14)] = inst_25411);

(statearr_25460[(8)] = inst_25402__$1);

(statearr_25460[(9)] = inst_25400__$1);

(statearr_25460[(11)] = inst_25403__$1);

(statearr_25460[(12)] = inst_25401__$1);

return statearr_25460;
})();
var statearr_25461_25489 = state_25447__$1;
(statearr_25461_25489[(2)] = null);

(statearr_25461_25489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (6))){
var inst_25441 = cljs.core.async.close_BANG_.call(null,out);
var state_25447__$1 = state_25447;
var statearr_25462_25490 = state_25447__$1;
(statearr_25462_25490[(2)] = inst_25441);

(statearr_25462_25490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (17))){
var inst_25415 = (state_25447[(7)]);
var inst_25419 = cljs.core.chunk_first.call(null,inst_25415);
var inst_25420 = cljs.core.chunk_rest.call(null,inst_25415);
var inst_25421 = cljs.core.count.call(null,inst_25419);
var inst_25400 = inst_25420;
var inst_25401 = inst_25419;
var inst_25402 = inst_25421;
var inst_25403 = (0);
var state_25447__$1 = (function (){var statearr_25463 = state_25447;
(statearr_25463[(8)] = inst_25402);

(statearr_25463[(9)] = inst_25400);

(statearr_25463[(11)] = inst_25403);

(statearr_25463[(12)] = inst_25401);

return statearr_25463;
})();
var statearr_25464_25491 = state_25447__$1;
(statearr_25464_25491[(2)] = null);

(statearr_25464_25491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (3))){
var inst_25445 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25447__$1,inst_25445);
} else {
if((state_val_25448 === (12))){
var inst_25436 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25465_25492 = state_25447__$1;
(statearr_25465_25492[(2)] = inst_25436);

(statearr_25465_25492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (2))){
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(4),in$);
} else {
if((state_val_25448 === (19))){
var inst_25431 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25466_25493 = state_25447__$1;
(statearr_25466_25493[(2)] = inst_25431);

(statearr_25466_25493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (11))){
var inst_25400 = (state_25447[(9)]);
var inst_25415 = (state_25447[(7)]);
var inst_25415__$1 = cljs.core.seq.call(null,inst_25400);
var state_25447__$1 = (function (){var statearr_25467 = state_25447;
(statearr_25467[(7)] = inst_25415__$1);

return statearr_25467;
})();
if(inst_25415__$1){
var statearr_25468_25494 = state_25447__$1;
(statearr_25468_25494[(1)] = (14));

} else {
var statearr_25469_25495 = state_25447__$1;
(statearr_25469_25495[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (9))){
var inst_25438 = (state_25447[(2)]);
var state_25447__$1 = (function (){var statearr_25470 = state_25447;
(statearr_25470[(15)] = inst_25438);

return statearr_25470;
})();
var statearr_25471_25496 = state_25447__$1;
(statearr_25471_25496[(2)] = null);

(statearr_25471_25496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (5))){
var inst_25391 = (state_25447[(13)]);
var inst_25393 = reagi.core.unbox.call(null,inst_25391);
var inst_25394 = f.call(null,inst_25393);
var inst_25399 = cljs.core.seq.call(null,inst_25394);
var inst_25400 = inst_25399;
var inst_25401 = null;
var inst_25402 = (0);
var inst_25403 = (0);
var state_25447__$1 = (function (){var statearr_25472 = state_25447;
(statearr_25472[(8)] = inst_25402);

(statearr_25472[(9)] = inst_25400);

(statearr_25472[(11)] = inst_25403);

(statearr_25472[(12)] = inst_25401);

return statearr_25472;
})();
var statearr_25473_25497 = state_25447__$1;
(statearr_25473_25497[(2)] = null);

(statearr_25473_25497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (14))){
var inst_25415 = (state_25447[(7)]);
var inst_25417 = cljs.core.chunked_seq_QMARK_.call(null,inst_25415);
var state_25447__$1 = state_25447;
if(inst_25417){
var statearr_25474_25498 = state_25447__$1;
(statearr_25474_25498[(1)] = (17));

} else {
var statearr_25475_25499 = state_25447__$1;
(statearr_25475_25499[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (16))){
var inst_25434 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25476_25500 = state_25447__$1;
(statearr_25476_25500[(2)] = inst_25434);

(statearr_25476_25500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (10))){
var inst_25403 = (state_25447[(11)]);
var inst_25401 = (state_25447[(12)]);
var inst_25408 = cljs.core._nth.call(null,inst_25401,inst_25403);
var inst_25409 = reagi.core.box.call(null,inst_25408);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25447__$1,(13),out,inst_25409);
} else {
if((state_val_25448 === (18))){
var inst_25415 = (state_25447[(7)]);
var inst_25424 = cljs.core.first.call(null,inst_25415);
var inst_25425 = reagi.core.box.call(null,inst_25424);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25447__$1,(20),out,inst_25425);
} else {
if((state_val_25448 === (8))){
var inst_25402 = (state_25447[(8)]);
var inst_25403 = (state_25447[(11)]);
var inst_25405 = (inst_25403 < inst_25402);
var inst_25406 = inst_25405;
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25406)){
var statearr_25477_25501 = state_25447__$1;
(statearr_25477_25501[(1)] = (10));

} else {
var statearr_25478_25502 = state_25447__$1;
(statearr_25478_25502[(1)] = (11));

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
});})(c__23120__auto__))
;
return ((function (switch__23097__auto__,c__23120__auto__){
return (function() {
var reagi$core$mapcat_ch_$_state_machine__23098__auto__ = null;
var reagi$core$mapcat_ch_$_state_machine__23098__auto____0 = (function (){
var statearr_25479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25479[(0)] = reagi$core$mapcat_ch_$_state_machine__23098__auto__);

(statearr_25479[(1)] = (1));

return statearr_25479;
});
var reagi$core$mapcat_ch_$_state_machine__23098__auto____1 = (function (state_25447){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25480){if((e25480 instanceof Object)){
var ex__23101__auto__ = e25480;
var statearr_25481_25503 = state_25447;
(statearr_25481_25503[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25504 = state_25447;
state_25447 = G__25504;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$mapcat_ch_$_state_machine__23098__auto__ = function(state_25447){
switch(arguments.length){
case 0:
return reagi$core$mapcat_ch_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$mapcat_ch_$_state_machine__23098__auto____1.call(this,state_25447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$mapcat_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$mapcat_ch_$_state_machine__23098__auto____0;
reagi$core$mapcat_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$mapcat_ch_$_state_machine__23098__auto____1;
return reagi$core$mapcat_ch_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__))
})();
var state__23122__auto__ = (function (){var statearr_25482 = f__23121__auto__.call(null);
(statearr_25482[(6)] = c__23120__auto__);

return statearr_25482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__))
);

return c__23120__auto__;
});
/**
 * Mapcat a function over a stream.
 */
reagi.core.mapcat = (function reagi$core$mapcat(var_args){
var G__25509 = arguments.length;
switch (G__25509) {
case 2:
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___25512 = arguments.length;
var i__4500__auto___25513 = (0);
while(true){
if((i__4500__auto___25513 < len__4499__auto___25512)){
args_arr__4514__auto__.push((arguments[i__4500__auto___25513]));

var G__25514 = (i__4500__auto___25513 + (1));
i__4500__auto___25513 = G__25514;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__25510 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__25510,reagi.core.mapcat_ch,f,ch);

reagi.core.on_dispose.call(null,G__25510,((function (G__25510,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__25510,ch))
);

reagi.core.depend_on.call(null,G__25510,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__25510;
});

reagi.core.mapcat.cljs$core$IFn$_invoke$arity$variadic = (function (f,stream,streams){
return reagi.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,f),cljs.core.apply.call(null,reagi.core.zip,stream,streams));
});

/** @this {Function} */
reagi.core.mapcat.cljs$lang$applyTo = (function (seq25506){
var G__25507 = cljs.core.first.call(null,seq25506);
var seq25506__$1 = cljs.core.next.call(null,seq25506);
var G__25508 = cljs.core.first.call(null,seq25506__$1);
var seq25506__$2 = cljs.core.next.call(null,seq25506__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25507,G__25508,seq25506__$2);
});

reagi.core.mapcat.cljs$lang$maxFixedArity = (2);

/**
 * Map a function over a stream.
 */
reagi.core.map = (function reagi$core$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25517 = arguments.length;
var i__4500__auto___25518 = (0);
while(true){
if((i__4500__auto___25518 < len__4499__auto___25517)){
args__4502__auto__.push((arguments[i__4500__auto___25518]));

var G__25519 = (i__4500__auto___25518 + (1));
i__4500__auto___25518 = G__25519;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return reagi.core.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

reagi.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,streams){
return cljs.core.apply.call(null,reagi.core.mapcat,cljs.core.comp.call(null,cljs.core.list,f),streams);
});

reagi.core.map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagi.core.map.cljs$lang$applyTo = (function (seq25515){
var G__25516 = cljs.core.first.call(null,seq25515);
var seq25515__$1 = cljs.core.next.call(null,seq25515);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25516,seq25515__$1);
});

/**
 * Filter a stream by a predicate.
 */
reagi.core.filter = (function reagi$core$filter(pred,stream){
return reagi.core.mapcat.call(null,(function (p1__25520_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__25520_SHARP_))){
return (new cljs.core.List(null,p1__25520_SHARP_,null,(1),null));
} else {
return null;
}
}),stream);
});
/**
 * Remove all items in a stream the predicate matches.
 */
reagi.core.remove = (function reagi$core$remove(pred,stream){
return reagi.core.filter.call(null,cljs.core.complement.call(null,pred),stream);
});
/**
 * Constantly map the same value over an event stream.
 */
reagi.core.constantly = (function reagi$core$constantly(value,stream){
return reagi.core.map.call(null,cljs.core.constantly.call(null,value),stream);
});
reagi.core.reduce_ch = (function reagi$core$reduce_ch(f,init,in$,out){
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__){
return (function (state_25545){
var state_val_25546 = (state_25545[(1)]);
if((state_val_25546 === (7))){
var inst_25541 = (state_25545[(2)]);
var state_25545__$1 = state_25545;
var statearr_25547_25565 = state_25545__$1;
(statearr_25547_25565[(2)] = inst_25541);

(statearr_25547_25565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (1))){
var inst_25521 = init;
var state_25545__$1 = (function (){var statearr_25548 = state_25545;
(statearr_25548[(7)] = inst_25521);

return statearr_25548;
})();
var statearr_25549_25566 = state_25545__$1;
(statearr_25549_25566[(2)] = null);

(statearr_25549_25566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (4))){
var inst_25524 = (state_25545[(8)]);
var inst_25524__$1 = (state_25545[(2)]);
var state_25545__$1 = (function (){var statearr_25550 = state_25545;
(statearr_25550[(8)] = inst_25524__$1);

return statearr_25550;
})();
if(cljs.core.truth_(inst_25524__$1)){
var statearr_25551_25567 = state_25545__$1;
(statearr_25551_25567[(1)] = (5));

} else {
var statearr_25552_25568 = state_25545__$1;
(statearr_25552_25568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (6))){
var inst_25539 = cljs.core.async.close_BANG_.call(null,out);
var state_25545__$1 = state_25545;
var statearr_25553_25569 = state_25545__$1;
(statearr_25553_25569[(2)] = inst_25539);

(statearr_25553_25569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (3))){
var inst_25543 = (state_25545[(2)]);
var state_25545__$1 = state_25545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25545__$1,inst_25543);
} else {
if((state_val_25546 === (2))){
var state_25545__$1 = state_25545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25545__$1,(4),in$);
} else {
if((state_val_25546 === (11))){
var inst_25533 = (state_25545[(9)]);
var inst_25536 = (state_25545[(2)]);
var inst_25521 = inst_25533;
var state_25545__$1 = (function (){var statearr_25554 = state_25545;
(statearr_25554[(7)] = inst_25521);

(statearr_25554[(10)] = inst_25536);

return statearr_25554;
})();
var statearr_25555_25570 = state_25545__$1;
(statearr_25555_25570[(2)] = null);

(statearr_25555_25570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (9))){
var inst_25521 = (state_25545[(7)]);
var inst_25524 = (state_25545[(8)]);
var inst_25530 = reagi.core.unbox.call(null,inst_25524);
var inst_25531 = f.call(null,inst_25521,inst_25530);
var state_25545__$1 = state_25545;
var statearr_25556_25571 = state_25545__$1;
(statearr_25556_25571[(2)] = inst_25531);

(statearr_25556_25571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (5))){
var inst_25521 = (state_25545[(7)]);
var inst_25526 = reagi.core.no_value_QMARK_.call(null,inst_25521);
var state_25545__$1 = state_25545;
if(cljs.core.truth_(inst_25526)){
var statearr_25557_25572 = state_25545__$1;
(statearr_25557_25572[(1)] = (8));

} else {
var statearr_25558_25573 = state_25545__$1;
(statearr_25558_25573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (10))){
var inst_25533 = (state_25545[(9)]);
var inst_25533__$1 = (state_25545[(2)]);
var inst_25534 = reagi.core.box.call(null,inst_25533__$1);
var state_25545__$1 = (function (){var statearr_25559 = state_25545;
(statearr_25559[(9)] = inst_25533__$1);

return statearr_25559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25545__$1,(11),out,inst_25534);
} else {
if((state_val_25546 === (8))){
var inst_25524 = (state_25545[(8)]);
var inst_25528 = reagi.core.unbox.call(null,inst_25524);
var state_25545__$1 = state_25545;
var statearr_25560_25574 = state_25545__$1;
(statearr_25560_25574[(2)] = inst_25528);

(statearr_25560_25574[(1)] = (10));


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
});})(c__23120__auto__))
;
return ((function (switch__23097__auto__,c__23120__auto__){
return (function() {
var reagi$core$reduce_ch_$_state_machine__23098__auto__ = null;
var reagi$core$reduce_ch_$_state_machine__23098__auto____0 = (function (){
var statearr_25561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25561[(0)] = reagi$core$reduce_ch_$_state_machine__23098__auto__);

(statearr_25561[(1)] = (1));

return statearr_25561;
});
var reagi$core$reduce_ch_$_state_machine__23098__auto____1 = (function (state_25545){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25562){if((e25562 instanceof Object)){
var ex__23101__auto__ = e25562;
var statearr_25563_25575 = state_25545;
(statearr_25563_25575[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25576 = state_25545;
state_25545 = G__25576;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$reduce_ch_$_state_machine__23098__auto__ = function(state_25545){
switch(arguments.length){
case 0:
return reagi$core$reduce_ch_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$reduce_ch_$_state_machine__23098__auto____1.call(this,state_25545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$reduce_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$reduce_ch_$_state_machine__23098__auto____0;
reagi$core$reduce_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$reduce_ch_$_state_machine__23098__auto____1;
return reagi$core$reduce_ch_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__))
})();
var state__23122__auto__ = (function (){var statearr_25564 = f__23121__auto__.call(null);
(statearr_25564[(6)] = c__23120__auto__);

return statearr_25564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__))
);

return c__23120__auto__;
});
/**
 * Create a new stream by applying a function to the previous return value and
 *   the current value of the source stream.
 */
reagi.core.reduce = (function reagi$core$reduce(var_args){
var G__25578 = arguments.length;
switch (G__25578) {
case 2:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagi.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,stream){
return reagi.core.reduce.call(null,f,reagi.core.no_value,stream);
});

reagi.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__25579 = reagi.core.events.call(null,init);
reagi.core.connect_port.call(null,G__25579,reagi.core.reduce_ch,f,init,ch);

reagi.core.on_dispose.call(null,G__25579,((function (G__25579,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__25579,ch))
);

reagi.core.depend_on.call(null,G__25579,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__25579;
});

reagi.core.reduce.cljs$lang$maxFixedArity = 3;

/**
 * Return an accumulating count of the items in a stream.
 */
reagi.core.count = (function reagi$core$count(stream){
return reagi.core.reduce.call(null,(function (x,_){
return (x + (1));
}),(0),stream);
});
/**
 * Change an initial value based on an event stream of functions.
 */
reagi.core.accum = (function reagi$core$accum(init,stream){
return reagi.core.reduce.call(null,(function (p1__25582_SHARP_,p2__25581_SHARP_){
return p2__25581_SHARP_.call(null,p1__25582_SHARP_);
}),init,stream);
});
reagi.core.empty_queue = cljs.core.PersistentQueue.EMPTY;
/**
 * Buffer all the events in the stream. A maximum buffer size may be specified,
 *   in which case the buffer will contain only the last n items. It's recommended
 *   that a buffer size is specified, otherwise the buffer will grow without limit.
 */
reagi.core.buffer = (function reagi$core$buffer(var_args){
var G__25584 = arguments.length;
switch (G__25584) {
case 1:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagi.core.buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return reagi.core.reduce.call(null,cljs.core.conj,reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$core$IFn$_invoke$arity$2 = (function (n,stream){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

return reagi.core.reduce.call(null,(function (q,x){
return cljs.core.conj.call(null,(((cljs.core.count.call(null,q) >= n))?cljs.core.pop.call(null,q):q),x);
}),reagi.core.empty_queue,stream);
});

reagi.core.buffer.cljs$lang$maxFixedArity = 2;

reagi.core.uniq_ch = (function reagi$core$uniq_ch(in$,out){
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__){
return (function (state_25613){
var state_val_25614 = (state_25613[(1)]);
if((state_val_25614 === (7))){
var inst_25609 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
var statearr_25615_25637 = state_25613__$1;
(statearr_25615_25637[(2)] = inst_25609);

(statearr_25615_25637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (1))){
var inst_25586 = reagi.core.no_value;
var state_25613__$1 = (function (){var statearr_25616 = state_25613;
(statearr_25616[(7)] = inst_25586);

return statearr_25616;
})();
var statearr_25617_25638 = state_25613__$1;
(statearr_25617_25638[(2)] = null);

(statearr_25617_25638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (4))){
var inst_25589 = (state_25613[(8)]);
var inst_25589__$1 = (state_25613[(2)]);
var state_25613__$1 = (function (){var statearr_25618 = state_25613;
(statearr_25618[(8)] = inst_25589__$1);

return statearr_25618;
})();
if(cljs.core.truth_(inst_25589__$1)){
var statearr_25619_25639 = state_25613__$1;
(statearr_25619_25639[(1)] = (5));

} else {
var statearr_25620_25640 = state_25613__$1;
(statearr_25620_25640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (13))){
var inst_25591 = (state_25613[(9)]);
var inst_25604 = (state_25613[(2)]);
var inst_25586 = inst_25591;
var state_25613__$1 = (function (){var statearr_25621 = state_25613;
(statearr_25621[(10)] = inst_25604);

(statearr_25621[(7)] = inst_25586);

return statearr_25621;
})();
var statearr_25622_25641 = state_25613__$1;
(statearr_25622_25641[(2)] = null);

(statearr_25622_25641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (6))){
var inst_25607 = cljs.core.async.close_BANG_.call(null,out);
var state_25613__$1 = state_25613;
var statearr_25623_25642 = state_25613__$1;
(statearr_25623_25642[(2)] = inst_25607);

(statearr_25623_25642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (3))){
var inst_25611 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25613__$1,inst_25611);
} else {
if((state_val_25614 === (12))){
var state_25613__$1 = state_25613;
var statearr_25624_25643 = state_25613__$1;
(statearr_25624_25643[(2)] = null);

(statearr_25624_25643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (2))){
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25613__$1,(4),in$);
} else {
if((state_val_25614 === (11))){
var inst_25591 = (state_25613[(9)]);
var inst_25599 = reagi.core.box.call(null,inst_25591);
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25613__$1,(14),out,inst_25599);
} else {
if((state_val_25614 === (9))){
var inst_25591 = (state_25613[(9)]);
var inst_25586 = (state_25613[(7)]);
var inst_25595 = cljs.core.not_EQ_.call(null,inst_25591,inst_25586);
var state_25613__$1 = state_25613;
var statearr_25625_25644 = state_25613__$1;
(statearr_25625_25644[(2)] = inst_25595);

(statearr_25625_25644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (5))){
var inst_25586 = (state_25613[(7)]);
var inst_25592 = (state_25613[(11)]);
var inst_25589 = (state_25613[(8)]);
var inst_25591 = reagi.core.unbox.call(null,inst_25589);
var inst_25592__$1 = reagi.core.no_value_QMARK_.call(null,inst_25586);
var state_25613__$1 = (function (){var statearr_25626 = state_25613;
(statearr_25626[(9)] = inst_25591);

(statearr_25626[(11)] = inst_25592__$1);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25592__$1)){
var statearr_25627_25645 = state_25613__$1;
(statearr_25627_25645[(1)] = (8));

} else {
var statearr_25628_25646 = state_25613__$1;
(statearr_25628_25646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (14))){
var inst_25601 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
var statearr_25629_25647 = state_25613__$1;
(statearr_25629_25647[(2)] = inst_25601);

(statearr_25629_25647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (10))){
var inst_25597 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
if(cljs.core.truth_(inst_25597)){
var statearr_25630_25648 = state_25613__$1;
(statearr_25630_25648[(1)] = (11));

} else {
var statearr_25631_25649 = state_25613__$1;
(statearr_25631_25649[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (8))){
var inst_25592 = (state_25613[(11)]);
var state_25613__$1 = state_25613;
var statearr_25632_25650 = state_25613__$1;
(statearr_25632_25650[(2)] = inst_25592);

(statearr_25632_25650[(1)] = (10));


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
});})(c__23120__auto__))
;
return ((function (switch__23097__auto__,c__23120__auto__){
return (function() {
var reagi$core$uniq_ch_$_state_machine__23098__auto__ = null;
var reagi$core$uniq_ch_$_state_machine__23098__auto____0 = (function (){
var statearr_25633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25633[(0)] = reagi$core$uniq_ch_$_state_machine__23098__auto__);

(statearr_25633[(1)] = (1));

return statearr_25633;
});
var reagi$core$uniq_ch_$_state_machine__23098__auto____1 = (function (state_25613){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25634){if((e25634 instanceof Object)){
var ex__23101__auto__ = e25634;
var statearr_25635_25651 = state_25613;
(statearr_25635_25651[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25652 = state_25613;
state_25613 = G__25652;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$uniq_ch_$_state_machine__23098__auto__ = function(state_25613){
switch(arguments.length){
case 0:
return reagi$core$uniq_ch_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$uniq_ch_$_state_machine__23098__auto____1.call(this,state_25613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$uniq_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$uniq_ch_$_state_machine__23098__auto____0;
reagi$core$uniq_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$uniq_ch_$_state_machine__23098__auto____1;
return reagi$core$uniq_ch_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__))
})();
var state__23122__auto__ = (function (){var statearr_25636 = f__23121__auto__.call(null);
(statearr_25636[(6)] = c__23120__auto__);

return statearr_25636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__))
);

return c__23120__auto__;
});
/**
 * Remove any successive duplicates from the stream.
 */
reagi.core.uniq = (function reagi$core$uniq(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__25653 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__25653,reagi.core.uniq_ch,ch);

reagi.core.on_dispose.call(null,G__25653,((function (G__25653,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__25653,ch))
);

reagi.core.depend_on.call(null,G__25653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__25653;
});
/**
 * Incoming events cycle a sequence of values. Useful for switching between
 *   states.
 */
reagi.core.cycle = (function reagi$core$cycle(values,stream){
return reagi.core.map.call(null,cljs.core.first,reagi.core.reduce.call(null,(function (xs,_){
return cljs.core.next.call(null,xs);
}),cljs.core.cycle.call(null,values),stream));
});
reagi.core.time_ms = (function reagi$core$time_ms(){
return (new Date()).getTime();
});
reagi.core.throttle_ch = (function reagi$core$throttle_ch(timeout_ms,in$,out){
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__){
return (function (state_25676){
var state_val_25677 = (state_25676[(1)]);
if((state_val_25677 === (7))){
var inst_25672 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25678_25696 = state_25676__$1;
(statearr_25678_25696[(2)] = inst_25672);

(statearr_25678_25696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (1))){
var inst_25654 = (0);
var state_25676__$1 = (function (){var statearr_25679 = state_25676;
(statearr_25679[(7)] = inst_25654);

return statearr_25679;
})();
var statearr_25680_25697 = state_25676__$1;
(statearr_25680_25697[(2)] = null);

(statearr_25680_25697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (4))){
var inst_25657 = (state_25676[(8)]);
var inst_25657__$1 = (state_25676[(2)]);
var state_25676__$1 = (function (){var statearr_25681 = state_25676;
(statearr_25681[(8)] = inst_25657__$1);

return statearr_25681;
})();
if(cljs.core.truth_(inst_25657__$1)){
var statearr_25682_25698 = state_25676__$1;
(statearr_25682_25698[(1)] = (5));

} else {
var statearr_25683_25699 = state_25676__$1;
(statearr_25683_25699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (6))){
var inst_25670 = cljs.core.async.close_BANG_.call(null,out);
var state_25676__$1 = state_25676;
var statearr_25684_25700 = state_25676__$1;
(statearr_25684_25700[(2)] = inst_25670);

(statearr_25684_25700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (3))){
var inst_25674 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25676__$1,inst_25674);
} else {
if((state_val_25677 === (2))){
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25676__$1,(4),in$);
} else {
if((state_val_25677 === (11))){
var inst_25664 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25685_25701 = state_25676__$1;
(statearr_25685_25701[(2)] = inst_25664);

(statearr_25685_25701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (9))){
var state_25676__$1 = state_25676;
var statearr_25686_25702 = state_25676__$1;
(statearr_25686_25702[(2)] = null);

(statearr_25686_25702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (5))){
var inst_25659 = (state_25676[(9)]);
var inst_25654 = (state_25676[(7)]);
var inst_25659__$1 = reagi.core.time_ms.call(null);
var inst_25660 = (inst_25659__$1 - inst_25654);
var inst_25661 = (inst_25660 >= timeout_ms);
var state_25676__$1 = (function (){var statearr_25687 = state_25676;
(statearr_25687[(9)] = inst_25659__$1);

return statearr_25687;
})();
if(cljs.core.truth_(inst_25661)){
var statearr_25688_25703 = state_25676__$1;
(statearr_25688_25703[(1)] = (8));

} else {
var statearr_25689_25704 = state_25676__$1;
(statearr_25689_25704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (10))){
var inst_25659 = (state_25676[(9)]);
var inst_25667 = (state_25676[(2)]);
var inst_25654 = inst_25659;
var state_25676__$1 = (function (){var statearr_25690 = state_25676;
(statearr_25690[(10)] = inst_25667);

(statearr_25690[(7)] = inst_25654);

return statearr_25690;
})();
var statearr_25691_25705 = state_25676__$1;
(statearr_25691_25705[(2)] = null);

(statearr_25691_25705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (8))){
var inst_25657 = (state_25676[(8)]);
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25676__$1,(11),out,inst_25657);
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
});})(c__23120__auto__))
;
return ((function (switch__23097__auto__,c__23120__auto__){
return (function() {
var reagi$core$throttle_ch_$_state_machine__23098__auto__ = null;
var reagi$core$throttle_ch_$_state_machine__23098__auto____0 = (function (){
var statearr_25692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25692[(0)] = reagi$core$throttle_ch_$_state_machine__23098__auto__);

(statearr_25692[(1)] = (1));

return statearr_25692;
});
var reagi$core$throttle_ch_$_state_machine__23098__auto____1 = (function (state_25676){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25693){if((e25693 instanceof Object)){
var ex__23101__auto__ = e25693;
var statearr_25694_25706 = state_25676;
(statearr_25694_25706[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25707 = state_25676;
state_25676 = G__25707;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$throttle_ch_$_state_machine__23098__auto__ = function(state_25676){
switch(arguments.length){
case 0:
return reagi$core$throttle_ch_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$throttle_ch_$_state_machine__23098__auto____1.call(this,state_25676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$throttle_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$throttle_ch_$_state_machine__23098__auto____0;
reagi$core$throttle_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$throttle_ch_$_state_machine__23098__auto____1;
return reagi$core$throttle_ch_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__))
})();
var state__23122__auto__ = (function (){var statearr_25695 = f__23121__auto__.call(null);
(statearr_25695[(6)] = c__23120__auto__);

return statearr_25695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__))
);

return c__23120__auto__;
});
/**
 * Remove any events in a stream that occur too soon after the prior event.
 *   The timeout is specified in milliseconds.
 */
reagi.core.throttle = (function reagi$core$throttle(timeout_ms,stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var G__25708 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__25708,reagi.core.throttle_ch,timeout_ms,ch);

reagi.core.on_dispose.call(null,G__25708,((function (G__25708,ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(G__25708,ch))
);

reagi.core.depend_on.call(null,G__25708,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__25708;
});
reagi.core.run_sampler = (function reagi$core$run_sampler(ref,interval,stop,out){
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__){
return (function (state_25750){
var state_val_25751 = (state_25750[(1)]);
if((state_val_25751 === (7))){
var inst_25745 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
var statearr_25752_25778 = state_25750__$1;
(statearr_25752_25778[(2)] = inst_25745);

(statearr_25752_25778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (1))){
var state_25750__$1 = state_25750;
var statearr_25753_25779 = state_25750__$1;
(statearr_25753_25779[(2)] = null);

(statearr_25753_25779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (4))){
var inst_25718 = (state_25750[(2)]);
var inst_25719 = cljs.core.nth.call(null,inst_25718,(0),null);
var inst_25720 = cljs.core.nth.call(null,inst_25718,(1),null);
var inst_25721 = cljs.core.not_EQ_.call(null,inst_25720,stop);
var state_25750__$1 = (function (){var statearr_25754 = state_25750;
(statearr_25754[(7)] = inst_25719);

return statearr_25754;
})();
if(inst_25721){
var statearr_25755_25780 = state_25750__$1;
(statearr_25755_25780[(1)] = (5));

} else {
var statearr_25756_25781 = state_25750__$1;
(statearr_25756_25781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (15))){
var state_25750__$1 = state_25750;
var statearr_25757_25782 = state_25750__$1;
(statearr_25757_25782[(2)] = null);

(statearr_25757_25782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (13))){
var inst_25732 = (state_25750[(8)]);
var state_25750__$1 = state_25750;
var statearr_25758_25783 = state_25750__$1;
(statearr_25758_25783[(2)] = inst_25732);

(statearr_25758_25783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (6))){
var state_25750__$1 = state_25750;
var statearr_25759_25784 = state_25750__$1;
(statearr_25759_25784[(2)] = null);

(statearr_25759_25784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (17))){
var inst_25742 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
var statearr_25760_25785 = state_25750__$1;
(statearr_25760_25785[(2)] = inst_25742);

(statearr_25760_25785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (3))){
var inst_25747 = (state_25750[(2)]);
var inst_25748 = cljs.core.async.close_BANG_.call(null,out);
var state_25750__$1 = (function (){var statearr_25761 = state_25750;
(statearr_25761[(9)] = inst_25747);

return statearr_25761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25750__$1,inst_25748);
} else {
if((state_val_25751 === (12))){
var inst_25734 = reagi.core.complete_QMARK_.call(null,ref);
var state_25750__$1 = state_25750;
var statearr_25762_25786 = state_25750__$1;
(statearr_25762_25786[(2)] = inst_25734);

(statearr_25762_25786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (2))){
var inst_25713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25714 = cljs.core.async.timeout.call(null,interval);
var inst_25715 = [stop,inst_25714];
var inst_25716 = (new cljs.core.PersistentVector(null,2,(5),inst_25713,inst_25715,null));
var state_25750__$1 = state_25750;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25750__$1,(4),inst_25716);
} else {
if((state_val_25751 === (11))){
var inst_25729 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
var statearr_25763_25787 = state_25750__$1;
(statearr_25763_25787[(2)] = inst_25729);

(statearr_25763_25787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (9))){
var inst_25723 = (state_25750[(10)]);
var inst_25727 = reagi.core.box.call(null,inst_25723);
var state_25750__$1 = state_25750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25750__$1,(11),out,inst_25727);
} else {
if((state_val_25751 === (5))){
var inst_25723 = (state_25750[(10)]);
var inst_25723__$1 = cljs.core.deref.call(null,ref);
var inst_25724 = (void 0 === inst_25723__$1);
var state_25750__$1 = (function (){var statearr_25764 = state_25750;
(statearr_25764[(10)] = inst_25723__$1);

return statearr_25764;
})();
if(cljs.core.truth_(inst_25724)){
var statearr_25765_25788 = state_25750__$1;
(statearr_25765_25788[(1)] = (8));

} else {
var statearr_25766_25789 = state_25750__$1;
(statearr_25766_25789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (14))){
var inst_25737 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
if(cljs.core.truth_(inst_25737)){
var statearr_25767_25790 = state_25750__$1;
(statearr_25767_25790[(1)] = (15));

} else {
var statearr_25768_25791 = state_25750__$1;
(statearr_25768_25791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (16))){
var state_25750__$1 = state_25750;
var statearr_25769_25792 = state_25750__$1;
(statearr_25769_25792[(2)] = null);

(statearr_25769_25792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (10))){
var inst_25732 = (state_25750[(8)]);
var inst_25731 = (state_25750[(2)]);
var inst_25732__$1 = reagi.core.signal_QMARK_.call(null,ref);
var state_25750__$1 = (function (){var statearr_25770 = state_25750;
(statearr_25770[(11)] = inst_25731);

(statearr_25770[(8)] = inst_25732__$1);

return statearr_25770;
})();
if(cljs.core.truth_(inst_25732__$1)){
var statearr_25771_25793 = state_25750__$1;
(statearr_25771_25793[(1)] = (12));

} else {
var statearr_25772_25794 = state_25750__$1;
(statearr_25772_25794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (8))){
var state_25750__$1 = state_25750;
var statearr_25773_25795 = state_25750__$1;
(statearr_25773_25795[(2)] = null);

(statearr_25773_25795[(1)] = (10));


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
});})(c__23120__auto__))
;
return ((function (switch__23097__auto__,c__23120__auto__){
return (function() {
var reagi$core$run_sampler_$_state_machine__23098__auto__ = null;
var reagi$core$run_sampler_$_state_machine__23098__auto____0 = (function (){
var statearr_25774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25774[(0)] = reagi$core$run_sampler_$_state_machine__23098__auto__);

(statearr_25774[(1)] = (1));

return statearr_25774;
});
var reagi$core$run_sampler_$_state_machine__23098__auto____1 = (function (state_25750){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25775){if((e25775 instanceof Object)){
var ex__23101__auto__ = e25775;
var statearr_25776_25796 = state_25750;
(statearr_25776_25796[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25797 = state_25750;
state_25750 = G__25797;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$run_sampler_$_state_machine__23098__auto__ = function(state_25750){
switch(arguments.length){
case 0:
return reagi$core$run_sampler_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$run_sampler_$_state_machine__23098__auto____1.call(this,state_25750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$run_sampler_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$run_sampler_$_state_machine__23098__auto____0;
reagi$core$run_sampler_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$run_sampler_$_state_machine__23098__auto____1;
return reagi$core$run_sampler_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__))
})();
var state__23122__auto__ = (function (){var statearr_25777 = f__23121__auto__.call(null);
(statearr_25777[(6)] = c__23120__auto__);

return statearr_25777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__))
);

return c__23120__auto__;
});
/**
 * Turn a reference into an event stream by deref-ing it at fixed intervals.
 *   The interval time is specified in milliseconds.
 */
reagi.core.sample = (function reagi$core$sample(interval_ms,reference){
var stop = cljs.core.async.chan.call(null);
var G__25798 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__25798,reagi.core.run_sampler,reference,interval_ms,stop);

reagi.core.on_dispose.call(null,G__25798,((function (G__25798,stop){
return (function (){
return cljs.core.async.close_BANG_.call(null,stop);
});})(G__25798,stop))
);

return G__25798;
});
/**
 * Returns a channel that will complete unrealized after specified number of
 *   milliseconds.
 */
reagi.core.wait = (function reagi$core$wait(time_ms){
var stream = reagi.core.events.call(null);
var c__23120__auto___25812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto___25812,stream){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto___25812,stream){
return (function (state_25805){
var state_val_25806 = (state_25805[(1)]);
if((state_val_25806 === (1))){
var inst_25799 = cljs.core.async.timeout.call(null,time_ms);
var state_25805__$1 = state_25805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25805__$1,(2),inst_25799);
} else {
if((state_val_25806 === (2))){
var inst_25801 = (state_25805[(2)]);
var inst_25802 = reagi.core.port.call(null,stream);
var inst_25803 = cljs.core.async.close_BANG_.call(null,inst_25802);
var state_25805__$1 = (function (){var statearr_25807 = state_25805;
(statearr_25807[(7)] = inst_25801);

return statearr_25807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25805__$1,inst_25803);
} else {
return null;
}
}
});})(c__23120__auto___25812,stream))
;
return ((function (switch__23097__auto__,c__23120__auto___25812,stream){
return (function() {
var reagi$core$wait_$_state_machine__23098__auto__ = null;
var reagi$core$wait_$_state_machine__23098__auto____0 = (function (){
var statearr_25808 = [null,null,null,null,null,null,null,null];
(statearr_25808[(0)] = reagi$core$wait_$_state_machine__23098__auto__);

(statearr_25808[(1)] = (1));

return statearr_25808;
});
var reagi$core$wait_$_state_machine__23098__auto____1 = (function (state_25805){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25809){if((e25809 instanceof Object)){
var ex__23101__auto__ = e25809;
var statearr_25810_25813 = state_25805;
(statearr_25810_25813[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25814 = state_25805;
state_25805 = G__25814;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$wait_$_state_machine__23098__auto__ = function(state_25805){
switch(arguments.length){
case 0:
return reagi$core$wait_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$wait_$_state_machine__23098__auto____1.call(this,state_25805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$wait_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$wait_$_state_machine__23098__auto____0;
reagi$core$wait_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$wait_$_state_machine__23098__auto____1;
return reagi$core$wait_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto___25812,stream))
})();
var state__23122__auto__ = (function (){var statearr_25811 = f__23121__auto__.call(null);
(statearr_25811[(6)] = c__23120__auto___25812);

return statearr_25811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto___25812,stream))
);


return stream;
});
reagi.core.join_ch = (function reagi$core$join_ch(chs,out){
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__){
return (function (state_25883){
var state_val_25884 = (state_25883[(1)]);
if((state_val_25884 === (7))){
var inst_25828 = (state_25883[(7)]);
var state_25883__$1 = state_25883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25883__$1,(9),inst_25828);
} else {
if((state_val_25884 === (20))){
var inst_25855 = (state_25883[(8)]);
var state_25883__$1 = state_25883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25883__$1,(22),inst_25855);
} else {
if((state_val_25884 === (1))){
var inst_25819 = cljs.core.seq.call(null,chs);
var inst_25820 = inst_25819;
var inst_25821 = null;
var inst_25822 = (0);
var inst_25823 = (0);
var state_25883__$1 = (function (){var statearr_25885 = state_25883;
(statearr_25885[(9)] = inst_25821);

(statearr_25885[(10)] = inst_25823);

(statearr_25885[(11)] = inst_25822);

(statearr_25885[(12)] = inst_25820);

return statearr_25885;
})();
var statearr_25886_25930 = state_25883__$1;
(statearr_25886_25930[(2)] = null);

(statearr_25886_25930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (24))){
var state_25883__$1 = state_25883;
var statearr_25887_25931 = state_25883__$1;
(statearr_25887_25931[(2)] = null);

(statearr_25887_25931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (4))){
var inst_25821 = (state_25883[(9)]);
var inst_25823 = (state_25883[(10)]);
var inst_25828 = cljs.core._nth.call(null,inst_25821,inst_25823);
var state_25883__$1 = (function (){var statearr_25888 = state_25883;
(statearr_25888[(7)] = inst_25828);

return statearr_25888;
})();
var statearr_25889_25932 = state_25883__$1;
(statearr_25889_25932[(2)] = null);

(statearr_25889_25932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (15))){
var state_25883__$1 = state_25883;
var statearr_25890_25933 = state_25883__$1;
(statearr_25890_25933[(2)] = null);

(statearr_25890_25933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (21))){
var inst_25846 = (state_25883[(13)]);
var inst_25869 = (state_25883[(2)]);
var inst_25870 = cljs.core.next.call(null,inst_25846);
var inst_25820 = inst_25870;
var inst_25821 = null;
var inst_25822 = (0);
var inst_25823 = (0);
var state_25883__$1 = (function (){var statearr_25891 = state_25883;
(statearr_25891[(14)] = inst_25869);

(statearr_25891[(9)] = inst_25821);

(statearr_25891[(10)] = inst_25823);

(statearr_25891[(11)] = inst_25822);

(statearr_25891[(12)] = inst_25820);

return statearr_25891;
})();
var statearr_25892_25934 = state_25883__$1;
(statearr_25892_25934[(2)] = null);

(statearr_25892_25934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (13))){
var inst_25836 = (state_25883[(2)]);
var state_25883__$1 = (function (){var statearr_25893 = state_25883;
(statearr_25893[(15)] = inst_25836);

return statearr_25893;
})();
var statearr_25894_25935 = state_25883__$1;
(statearr_25894_25935[(2)] = null);

(statearr_25894_25935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (22))){
var inst_25858 = (state_25883[(16)]);
var inst_25858__$1 = (state_25883[(2)]);
var state_25883__$1 = (function (){var statearr_25895 = state_25883;
(statearr_25895[(16)] = inst_25858__$1);

return statearr_25895;
})();
if(cljs.core.truth_(inst_25858__$1)){
var statearr_25896_25936 = state_25883__$1;
(statearr_25896_25936[(1)] = (23));

} else {
var statearr_25897_25937 = state_25883__$1;
(statearr_25897_25937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (6))){
var inst_25878 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25898_25938 = state_25883__$1;
(statearr_25898_25938[(2)] = inst_25878);

(statearr_25898_25938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (25))){
var inst_25867 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25899_25939 = state_25883__$1;
(statearr_25899_25939[(2)] = inst_25867);

(statearr_25899_25939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (17))){
var inst_25846 = (state_25883[(13)]);
var inst_25850 = cljs.core.chunk_first.call(null,inst_25846);
var inst_25851 = cljs.core.chunk_rest.call(null,inst_25846);
var inst_25852 = cljs.core.count.call(null,inst_25850);
var inst_25820 = inst_25851;
var inst_25821 = inst_25850;
var inst_25822 = inst_25852;
var inst_25823 = (0);
var state_25883__$1 = (function (){var statearr_25900 = state_25883;
(statearr_25900[(9)] = inst_25821);

(statearr_25900[(10)] = inst_25823);

(statearr_25900[(11)] = inst_25822);

(statearr_25900[(12)] = inst_25820);

return statearr_25900;
})();
var statearr_25901_25940 = state_25883__$1;
(statearr_25901_25940[(2)] = null);

(statearr_25901_25940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (3))){
var inst_25880 = (state_25883[(2)]);
var inst_25881 = cljs.core.async.close_BANG_.call(null,out);
var state_25883__$1 = (function (){var statearr_25902 = state_25883;
(statearr_25902[(17)] = inst_25880);

return statearr_25902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25883__$1,inst_25881);
} else {
if((state_val_25884 === (12))){
var inst_25840 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25903_25941 = state_25883__$1;
(statearr_25903_25941[(2)] = inst_25840);

(statearr_25903_25941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (2))){
var inst_25823 = (state_25883[(10)]);
var inst_25822 = (state_25883[(11)]);
var inst_25825 = (inst_25823 < inst_25822);
var inst_25826 = inst_25825;
var state_25883__$1 = state_25883;
if(cljs.core.truth_(inst_25826)){
var statearr_25904_25942 = state_25883__$1;
(statearr_25904_25942[(1)] = (4));

} else {
var statearr_25905_25943 = state_25883__$1;
(statearr_25905_25943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (23))){
var inst_25858 = (state_25883[(16)]);
var inst_25860 = reagi.core.unbox.call(null,inst_25858);
var inst_25861 = reagi.core.box.call(null,inst_25860);
var state_25883__$1 = state_25883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25883__$1,(26),out,inst_25861);
} else {
if((state_val_25884 === (19))){
var inst_25873 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25906_25944 = state_25883__$1;
(statearr_25906_25944[(2)] = inst_25873);

(statearr_25906_25944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (11))){
var state_25883__$1 = state_25883;
var statearr_25907_25945 = state_25883__$1;
(statearr_25907_25945[(2)] = null);

(statearr_25907_25945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (9))){
var inst_25831 = (state_25883[(18)]);
var inst_25831__$1 = (state_25883[(2)]);
var state_25883__$1 = (function (){var statearr_25908 = state_25883;
(statearr_25908[(18)] = inst_25831__$1);

return statearr_25908;
})();
if(cljs.core.truth_(inst_25831__$1)){
var statearr_25909_25946 = state_25883__$1;
(statearr_25909_25946[(1)] = (10));

} else {
var statearr_25910_25947 = state_25883__$1;
(statearr_25910_25947[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (5))){
var inst_25846 = (state_25883[(13)]);
var inst_25820 = (state_25883[(12)]);
var inst_25846__$1 = cljs.core.seq.call(null,inst_25820);
var state_25883__$1 = (function (){var statearr_25911 = state_25883;
(statearr_25911[(13)] = inst_25846__$1);

return statearr_25911;
})();
if(inst_25846__$1){
var statearr_25912_25948 = state_25883__$1;
(statearr_25912_25948[(1)] = (14));

} else {
var statearr_25913_25949 = state_25883__$1;
(statearr_25913_25949[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (14))){
var inst_25846 = (state_25883[(13)]);
var inst_25848 = cljs.core.chunked_seq_QMARK_.call(null,inst_25846);
var state_25883__$1 = state_25883;
if(inst_25848){
var statearr_25914_25950 = state_25883__$1;
(statearr_25914_25950[(1)] = (17));

} else {
var statearr_25915_25951 = state_25883__$1;
(statearr_25915_25951[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (26))){
var inst_25863 = (state_25883[(2)]);
var state_25883__$1 = (function (){var statearr_25916 = state_25883;
(statearr_25916[(19)] = inst_25863);

return statearr_25916;
})();
var statearr_25917_25952 = state_25883__$1;
(statearr_25917_25952[(2)] = null);

(statearr_25917_25952[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (16))){
var inst_25876 = (state_25883[(2)]);
var state_25883__$1 = state_25883;
var statearr_25918_25953 = state_25883__$1;
(statearr_25918_25953[(2)] = inst_25876);

(statearr_25918_25953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (10))){
var inst_25831 = (state_25883[(18)]);
var inst_25833 = reagi.core.unbox.call(null,inst_25831);
var inst_25834 = reagi.core.box.call(null,inst_25833);
var state_25883__$1 = state_25883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25883__$1,(13),out,inst_25834);
} else {
if((state_val_25884 === (18))){
var inst_25846 = (state_25883[(13)]);
var inst_25855 = cljs.core.first.call(null,inst_25846);
var state_25883__$1 = (function (){var statearr_25922 = state_25883;
(statearr_25922[(8)] = inst_25855);

return statearr_25922;
})();
var statearr_25923_25954 = state_25883__$1;
(statearr_25923_25954[(2)] = null);

(statearr_25923_25954[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25884 === (8))){
var inst_25821 = (state_25883[(9)]);
var inst_25823 = (state_25883[(10)]);
var inst_25822 = (state_25883[(11)]);
var inst_25820 = (state_25883[(12)]);
var inst_25842 = (state_25883[(2)]);
var inst_25843 = (inst_25823 + (1));
var tmp25919 = inst_25821;
var tmp25920 = inst_25822;
var tmp25921 = inst_25820;
var inst_25820__$1 = tmp25921;
var inst_25821__$1 = tmp25919;
var inst_25822__$1 = tmp25920;
var inst_25823__$1 = inst_25843;
var state_25883__$1 = (function (){var statearr_25924 = state_25883;
(statearr_25924[(20)] = inst_25842);

(statearr_25924[(9)] = inst_25821__$1);

(statearr_25924[(10)] = inst_25823__$1);

(statearr_25924[(11)] = inst_25822__$1);

(statearr_25924[(12)] = inst_25820__$1);

return statearr_25924;
})();
var statearr_25925_25955 = state_25883__$1;
(statearr_25925_25955[(2)] = null);

(statearr_25925_25955[(1)] = (2));


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
});})(c__23120__auto__))
;
return ((function (switch__23097__auto__,c__23120__auto__){
return (function() {
var reagi$core$join_ch_$_state_machine__23098__auto__ = null;
var reagi$core$join_ch_$_state_machine__23098__auto____0 = (function (){
var statearr_25926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25926[(0)] = reagi$core$join_ch_$_state_machine__23098__auto__);

(statearr_25926[(1)] = (1));

return statearr_25926;
});
var reagi$core$join_ch_$_state_machine__23098__auto____1 = (function (state_25883){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_25883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e25927){if((e25927 instanceof Object)){
var ex__23101__auto__ = e25927;
var statearr_25928_25956 = state_25883;
(statearr_25928_25956[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25957 = state_25883;
state_25883 = G__25957;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$join_ch_$_state_machine__23098__auto__ = function(state_25883){
switch(arguments.length){
case 0:
return reagi$core$join_ch_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$join_ch_$_state_machine__23098__auto____1.call(this,state_25883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$join_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$join_ch_$_state_machine__23098__auto____0;
reagi$core$join_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$join_ch_$_state_machine__23098__auto____1;
return reagi$core$join_ch_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__))
})();
var state__23122__auto__ = (function (){var statearr_25929 = f__23121__auto__.call(null);
(statearr_25929[(6)] = c__23120__auto__);

return statearr_25929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__))
);

return c__23120__auto__;
});
/**
 * Join several streams together. Events are delivered from the first stream
 *   until it is completed, then the next stream, until all streams are complete.
 */
reagi.core.join = (function reagi$core$join(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25960 = arguments.length;
var i__4500__auto___25961 = (0);
while(true){
if((i__4500__auto___25961 < len__4499__auto___25960)){
args__4502__auto__.push((arguments[i__4500__auto___25961]));

var G__25962 = (i__4500__auto___25961 + (1));
i__4500__auto___25961 = G__25962;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return reagi.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

reagi.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (streams){
var chs = reagi.core.listen_all.call(null,streams);
var G__25959 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__25959,reagi.core.join_ch,chs);

reagi.core.on_dispose.call(null,G__25959,((function (G__25959,chs){
return (function (){
return reagi.core.close_all_BANG_.call(null,chs);
});})(G__25959,chs))
);

reagi.core.depend_on.call(null,G__25959,streams);

return G__25959;
});

reagi.core.join.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
reagi.core.join.cljs$lang$applyTo = (function (seq25958){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25958));
});

reagi.core.flatten_ch = (function reagi$core$flatten_ch(in$,valve,out){
var c__23120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23120__auto__){
return (function (){
var f__23121__auto__ = (function (){var switch__23097__auto__ = ((function (c__23120__auto__){
return (function (state_26016){
var state_val_26017 = (state_26016[(1)]);
if((state_val_26017 === (7))){
var inst_25980 = (state_26016[(7)]);
var inst_25978 = (state_26016[(2)]);
var inst_25979 = cljs.core.nth.call(null,inst_25978,(0),null);
var inst_25980__$1 = cljs.core.nth.call(null,inst_25978,(1),null);
var inst_25981 = (inst_25980__$1 === valve);
var state_26016__$1 = (function (){var statearr_26018 = state_26016;
(statearr_26018[(7)] = inst_25980__$1);

(statearr_26018[(8)] = inst_25979);

return statearr_26018;
})();
if(cljs.core.truth_(inst_25981)){
var statearr_26019_26047 = state_26016__$1;
(statearr_26019_26047[(1)] = (8));

} else {
var statearr_26020_26048 = state_26016__$1;
(statearr_26020_26048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (1))){
var inst_25963 = [in$];
var inst_25964 = [null];
var inst_25965 = cljs.core.PersistentHashMap.fromArrays(inst_25963,inst_25964);
var inst_25966 = inst_25965;
var state_26016__$1 = (function (){var statearr_26021 = state_26016;
(statearr_26021[(9)] = inst_25966);

return statearr_26021;
})();
var statearr_26022_26049 = state_26016__$1;
(statearr_26022_26049[(2)] = null);

(statearr_26022_26049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (4))){
var inst_25966 = (state_26016[(9)]);
var inst_25974 = cljs.core.keys.call(null,inst_25966);
var inst_25975 = cljs.core.vec.call(null,inst_25974);
var inst_25976 = cljs.core.conj.call(null,inst_25975,valve);
var state_26016__$1 = state_26016;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26016__$1,(7),inst_25976);
} else {
if((state_val_26017 === (15))){
var inst_25979 = (state_26016[(8)]);
var inst_25995 = reagi.core.unbox.call(null,inst_25979);
var inst_25996 = reagi.core.box.call(null,inst_25995);
var state_26016__$1 = state_26016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26016__$1,(17),out,inst_25996);
} else {
if((state_val_26017 === (13))){
var inst_26006 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26024_26050 = state_26016__$1;
(statearr_26024_26050[(2)] = inst_26006);

(statearr_26024_26050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (6))){
var inst_26011 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26025_26051 = state_26016__$1;
(statearr_26025_26051[(2)] = inst_26011);

(statearr_26025_26051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (17))){
var inst_25966 = (state_26016[(9)]);
var inst_25998 = (state_26016[(2)]);
var tmp26023 = inst_25966;
var inst_25966__$1 = tmp26023;
var state_26016__$1 = (function (){var statearr_26026 = state_26016;
(statearr_26026[(9)] = inst_25966__$1);

(statearr_26026[(10)] = inst_25998);

return statearr_26026;
})();
var statearr_26027_26052 = state_26016__$1;
(statearr_26027_26052[(2)] = null);

(statearr_26027_26052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (3))){
var inst_26013 = (state_26016[(2)]);
var inst_26014 = cljs.core.async.close_BANG_.call(null,out);
var state_26016__$1 = (function (){var statearr_26028 = state_26016;
(statearr_26028[(11)] = inst_26013);

return statearr_26028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26016__$1,inst_26014);
} else {
if((state_val_26017 === (12))){
var inst_25966 = (state_26016[(9)]);
var inst_25980 = (state_26016[(7)]);
var inst_26003 = cljs.core.dissoc.call(null,inst_25966,inst_25980);
var inst_25966__$1 = inst_26003;
var state_26016__$1 = (function (){var statearr_26029 = state_26016;
(statearr_26029[(9)] = inst_25966__$1);

return statearr_26029;
})();
var statearr_26030_26053 = state_26016__$1;
(statearr_26030_26053[(2)] = null);

(statearr_26030_26053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (2))){
var inst_25966 = (state_26016[(9)]);
var inst_25968 = cljs.core.empty_QMARK_.call(null,inst_25966);
var inst_25969 = !(inst_25968);
var state_26016__$1 = state_26016;
if(inst_25969){
var statearr_26031_26054 = state_26016__$1;
(statearr_26031_26054[(1)] = (4));

} else {
var statearr_26032_26055 = state_26016__$1;
(statearr_26032_26055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (11))){
var inst_25980 = (state_26016[(7)]);
var inst_25987 = (inst_25980 === in$);
var state_26016__$1 = state_26016;
if(cljs.core.truth_(inst_25987)){
var statearr_26033_26056 = state_26016__$1;
(statearr_26033_26056[(1)] = (14));

} else {
var statearr_26034_26057 = state_26016__$1;
(statearr_26034_26057[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (9))){
var inst_25979 = (state_26016[(8)]);
var state_26016__$1 = state_26016;
if(cljs.core.truth_(inst_25979)){
var statearr_26035_26058 = state_26016__$1;
(statearr_26035_26058[(1)] = (11));

} else {
var statearr_26036_26059 = state_26016__$1;
(statearr_26036_26059[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (5))){
var state_26016__$1 = state_26016;
var statearr_26037_26060 = state_26016__$1;
(statearr_26037_26060[(2)] = null);

(statearr_26037_26060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (14))){
var inst_25966 = (state_26016[(9)]);
var inst_25979 = (state_26016[(8)]);
var inst_25989 = reagi.core.unbox.call(null,inst_25979);
var inst_25990 = cljs.core.async.chan.call(null);
var inst_25991 = reagi.core.listen.call(null,inst_25989,inst_25990);
var inst_25992 = cljs.core.assoc.call(null,inst_25966,inst_25991,inst_25989);
var inst_25966__$1 = inst_25992;
var state_26016__$1 = (function (){var statearr_26038 = state_26016;
(statearr_26038[(9)] = inst_25966__$1);

return statearr_26038;
})();
var statearr_26039_26061 = state_26016__$1;
(statearr_26039_26061[(2)] = null);

(statearr_26039_26061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (16))){
var inst_26001 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26040_26062 = state_26016__$1;
(statearr_26040_26062[(2)] = inst_26001);

(statearr_26040_26062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (10))){
var inst_26008 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26041_26063 = state_26016__$1;
(statearr_26041_26063[(2)] = inst_26008);

(statearr_26041_26063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (8))){
var inst_25966 = (state_26016[(9)]);
var inst_25983 = cljs.core.keys.call(null,inst_25966);
var inst_25984 = reagi.core.close_all_BANG_.call(null,inst_25983);
var state_26016__$1 = state_26016;
var statearr_26042_26064 = state_26016__$1;
(statearr_26042_26064[(2)] = inst_25984);

(statearr_26042_26064[(1)] = (10));


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
});})(c__23120__auto__))
;
return ((function (switch__23097__auto__,c__23120__auto__){
return (function() {
var reagi$core$flatten_ch_$_state_machine__23098__auto__ = null;
var reagi$core$flatten_ch_$_state_machine__23098__auto____0 = (function (){
var statearr_26043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26043[(0)] = reagi$core$flatten_ch_$_state_machine__23098__auto__);

(statearr_26043[(1)] = (1));

return statearr_26043;
});
var reagi$core$flatten_ch_$_state_machine__23098__auto____1 = (function (state_26016){
while(true){
var ret_value__23099__auto__ = (function (){try{while(true){
var result__23100__auto__ = switch__23097__auto__.call(null,state_26016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23100__auto__;
}
break;
}
}catch (e26044){if((e26044 instanceof Object)){
var ex__23101__auto__ = e26044;
var statearr_26045_26065 = state_26016;
(statearr_26045_26065[(5)] = ex__23101__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26066 = state_26016;
state_26016 = G__26066;
continue;
} else {
return ret_value__23099__auto__;
}
break;
}
});
reagi$core$flatten_ch_$_state_machine__23098__auto__ = function(state_26016){
switch(arguments.length){
case 0:
return reagi$core$flatten_ch_$_state_machine__23098__auto____0.call(this);
case 1:
return reagi$core$flatten_ch_$_state_machine__23098__auto____1.call(this,state_26016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
reagi$core$flatten_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$0 = reagi$core$flatten_ch_$_state_machine__23098__auto____0;
reagi$core$flatten_ch_$_state_machine__23098__auto__.cljs$core$IFn$_invoke$arity$1 = reagi$core$flatten_ch_$_state_machine__23098__auto____1;
return reagi$core$flatten_ch_$_state_machine__23098__auto__;
})()
;})(switch__23097__auto__,c__23120__auto__))
})();
var state__23122__auto__ = (function (){var statearr_26046 = f__23121__auto__.call(null);
(statearr_26046[(6)] = c__23120__auto__);

return statearr_26046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23122__auto__);
});})(c__23120__auto__))
);

return c__23120__auto__;
});
/**
 * Flatten a stream of streams into a stream that contains all the values of
 *   its components.
 */
reagi.core.flatten = (function reagi$core$flatten(stream){
var ch = reagi.core.listen.call(null,stream,cljs.core.async.chan.call(null));
var valve = cljs.core.async.chan.call(null);
var G__26067 = reagi.core.events.call(null);
reagi.core.connect_port.call(null,G__26067,reagi.core.flatten_ch,ch,valve);

reagi.core.on_dispose.call(null,G__26067,((function (G__26067,ch,valve){
return (function (){
return cljs.core.async.close_BANG_.call(null,valve);
});})(G__26067,ch,valve))
);

reagi.core.depend_on.call(null,G__26067,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream], null));

return G__26067;
});

//# sourceMappingURL=core.js.map?rel=1672795890420
