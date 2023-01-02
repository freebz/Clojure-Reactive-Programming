// Compiled by ClojureScript 1.10.238 {}
goog.provide('respondent.core');
goog.require('cljs.core');
goog.require('cljs.core.async');

/**
 * @interface
 */
respondent.core.IBehavior = function(){};

/**
 * Turns this Behavior into an EventStream from the sampled values at the given interval
 */
respondent.core.sample = (function respondent$core$sample(b,interval){
if(((!((b == null))) && (!((b.respondent$core$IBehavior$sample$arity$2 == null))))){
return b.respondent$core$IBehavior$sample$arity$2(b,interval);
} else {
var x__4211__auto__ = (((b == null))?null:b);
var m__4212__auto__ = (respondent.core.sample[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,b,interval);
} else {
var m__4212__auto____$1 = (respondent.core.sample["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,b,interval);
} else {
throw cljs.core.missing_protocol.call(null,"IBehavior.sample",b);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {respondent.core.IBehavior}
*/
respondent.core.Behavior = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
respondent.core.Behavior.prototype.respondent$core$IBehavior$ = cljs.core.PROTOCOL_SENTINEL;

respondent.core.Behavior.prototype.respondent$core$IBehavior$sample$arity$2 = (function (_,interval){
var self__ = this;
var ___$1 = this;
return respondent.core.from_interval.call(null,interval,self__.f.call(null),((function (___$1){
return (function() { 
var G__25632__delegate = function (args){
return self__.f.call(null);
};
var G__25632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25633__i = 0, G__25633__a = new Array(arguments.length -  0);
while (G__25633__i < G__25633__a.length) {G__25633__a[G__25633__i] = arguments[G__25633__i + 0]; ++G__25633__i;}
  args = new cljs.core.IndexedSeq(G__25633__a,0,null);
} 
return G__25632__delegate.call(this,args);};
G__25632.cljs$lang$maxFixedArity = 0;
G__25632.cljs$lang$applyTo = (function (arglist__25634){
var args = cljs.core.seq(arglist__25634);
return G__25632__delegate(args);
});
G__25632.cljs$core$IFn$_invoke$arity$variadic = G__25632__delegate;
return G__25632;
})()
;})(___$1))
);
});

respondent.core.Behavior.prototype.cljs$core$IDeref$deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f.call(null);
});

respondent.core.Behavior.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null);
});

respondent.core.Behavior.cljs$lang$type = true;

respondent.core.Behavior.cljs$lang$ctorStr = "respondent.core/Behavior";

respondent.core.Behavior.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"respondent.core/Behavior");
});

/**
 * Positional factory function for respondent.core/Behavior.
 */
respondent.core.__GT_Behavior = (function respondent$core$__GT_Behavior(f){
return (new respondent.core.Behavior(f));
});

var ret__4533__auto___25638 = (function (){
respondent.core.behavior = (function respondent$core$behavior(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25639 = arguments.length;
var i__4500__auto___25640 = (0);
while(true){
if((i__4500__auto___25640 < len__4499__auto___25639)){
args__4502__auto__.push((arguments[i__4500__auto___25640]));

var G__25641 = (i__4500__auto___25640 + (1));
i__4500__auto___25640 = G__25641;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return respondent.core.behavior.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

respondent.core.behavior.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"Behavior.","Behavior.",-753760804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
});

respondent.core.behavior.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
respondent.core.behavior.cljs$lang$applyTo = (function (seq25635){
var G__25636 = cljs.core.first.call(null,seq25635);
var seq25635__$1 = cljs.core.next.call(null,seq25635);
var G__25637 = cljs.core.first.call(null,seq25635__$1);
var seq25635__$2 = cljs.core.next.call(null,seq25635__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25636,G__25637,seq25635__$2);
});

return null;
})()
;
respondent.core.behavior.cljs$lang$macro = true;


/**
 * @interface
 */
respondent.core.IEventStream = function(){};

/**
 * Returns a new stream containing the result of applying f
 *   to the values in s
 */
respondent.core.map = (function respondent$core$map(s,f){
if(((!((s == null))) && (!((s.respondent$core$IEventStream$map$arity$2 == null))))){
return s.respondent$core$IEventStream$map$arity$2(s,f);
} else {
var x__4211__auto__ = (((s == null))?null:s);
var m__4212__auto__ = (respondent.core.map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,s,f);
} else {
var m__4212__auto____$1 = (respondent.core.map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,s,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.map",s);
}
}
}
});

/**
 * Returns a new stream containing the items from s
 *   for which pred returns true
 */
respondent.core.filter = (function respondent$core$filter(s,pred){
if(((!((s == null))) && (!((s.respondent$core$IEventStream$filter$arity$2 == null))))){
return s.respondent$core$IEventStream$filter$arity$2(s,pred);
} else {
var x__4211__auto__ = (((s == null))?null:s);
var m__4212__auto__ = (respondent.core.filter[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,s,pred);
} else {
var m__4212__auto____$1 = (respondent.core.filter["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,s,pred);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.filter",s);
}
}
}
});

/**
 * Takes a function f from values in s to a new EventStream.
 *   Returns an EventStream containinig values from all underlying streams combined.
 */
respondent.core.flatmap = (function respondent$core$flatmap(s,f){
if(((!((s == null))) && (!((s.respondent$core$IEventStream$flatmap$arity$2 == null))))){
return s.respondent$core$IEventStream$flatmap$arity$2(s,f);
} else {
var x__4211__auto__ = (((s == null))?null:s);
var m__4212__auto__ = (respondent.core.flatmap[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,s,f);
} else {
var m__4212__auto____$1 = (respondent.core.flatmap["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,s,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.flatmap",s);
}
}
}
});

/**
 * delivers a value to the stream s
 */
respondent.core.deliver = (function respondent$core$deliver(s,value){
if(((!((s == null))) && (!((s.respondent$core$IEventStream$deliver$arity$2 == null))))){
return s.respondent$core$IEventStream$deliver$arity$2(s,value);
} else {
var x__4211__auto__ = (((s == null))?null:s);
var m__4212__auto__ = (respondent.core.deliver[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,s,value);
} else {
var m__4212__auto____$1 = (respondent.core.deliver["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,s,value);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.deliver",s);
}
}
}
});

/**
 * Returns true if this stream has stopped emitting values. False otherwise.
 */
respondent.core.completed_QMARK_ = (function respondent$core$completed_QMARK_(s){
if(((!((s == null))) && (!((s.respondent$core$IEventStream$completed_QMARK_$arity$1 == null))))){
return s.respondent$core$IEventStream$completed_QMARK_$arity$1(s);
} else {
var x__4211__auto__ = (((s == null))?null:s);
var m__4212__auto__ = (respondent.core.completed_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,s);
} else {
var m__4212__auto____$1 = (respondent.core.completed_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"IEventStream.completed?",s);
}
}
}
});


/**
 * @interface
 */
respondent.core.IObservable = function(){};

/**
 * Register a callback to be invoked when the underlying source changes.
 *                    Returns a token the subscriber can use to cancel the subscription.
 */
respondent.core.subscribe = (function respondent$core$subscribe(obs,f){
if(((!((obs == null))) && (!((obs.respondent$core$IObservable$subscribe$arity$2 == null))))){
return obs.respondent$core$IObservable$subscribe$arity$2(obs,f);
} else {
var x__4211__auto__ = (((obs == null))?null:obs);
var m__4212__auto__ = (respondent.core.subscribe[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,obs,f);
} else {
var m__4212__auto____$1 = (respondent.core.subscribe["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,obs,f);
} else {
throw cljs.core.missing_protocol.call(null,"IObservable.subscribe",obs);
}
}
}
});


/**
 * @interface
 */
respondent.core.IToken = function(){};

/**
 * Called when the subscriber isn't interested in receiving more items
 */
respondent.core.dispose = (function respondent$core$dispose(tk){
if(((!((tk == null))) && (!((tk.respondent$core$IToken$dispose$arity$1 == null))))){
return tk.respondent$core$IToken$dispose$arity$1(tk);
} else {
var x__4211__auto__ = (((tk == null))?null:tk);
var m__4212__auto__ = (respondent.core.dispose[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,tk);
} else {
var m__4212__auto____$1 = (respondent.core.dispose["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,tk);
} else {
throw cljs.core.missing_protocol.call(null,"IToken.dispose",tk);
}
}
}
});


/**
* @constructor
 * @implements {respondent.core.IToken}
*/
respondent.core.Token = (function (ch){
this.ch = ch;
});
respondent.core.Token.prototype.respondent$core$IToken$ = cljs.core.PROTOCOL_SENTINEL;

respondent.core.Token.prototype.respondent$core$IToken$dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.close_BANG_.call(null,self__.ch);
});

respondent.core.Token.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null);
});

respondent.core.Token.cljs$lang$type = true;

respondent.core.Token.cljs$lang$ctorStr = "respondent.core/Token";

respondent.core.Token.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"respondent.core/Token");
});

/**
 * Positional factory function for respondent.core/Token.
 */
respondent.core.__GT_Token = (function respondent$core$__GT_Token(ch){
return (new respondent.core.Token(ch));
});


/**
* @constructor
 * @implements {respondent.core.IObservable}
 * @implements {respondent.core.IEventStream}
*/
respondent.core.EventStream = (function (channel,multiple,completed){
this.channel = channel;
this.multiple = multiple;
this.completed = completed;
});
respondent.core.EventStream.prototype.respondent$core$IEventStream$ = cljs.core.PROTOCOL_SENTINEL;

respondent.core.EventStream.prototype.respondent$core$IEventStream$map$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var out = cljs.core.async.map_GT_.call(null,f,cljs.core.async.chan.call(null));
cljs.core.async.tap.call(null,self__.multiple,out);

return respondent.core.event_stream.call(null,out);
});

respondent.core.EventStream.prototype.respondent$core$IEventStream$filter$arity$2 = (function (_,pred){
var self__ = this;
var ___$1 = this;
var out = cljs.core.async.filter_GT_.call(null,pred,cljs.core.async.chan.call(null));
cljs.core.async.tap.call(null,self__.multiple,out);

return respondent.core.event_stream.call(null,out);
});

respondent.core.EventStream.prototype.respondent$core$IEventStream$flatmap$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var es = respondent.core.event_stream.call(null);
var out = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,self__.multiple,out);

var c__23152__auto___25725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___25725,es,out,___$1){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___25725,es,out,___$1){
return (function (state_25656){
var state_val_25657 = (state_25656[(1)]);
if((state_val_25657 === (1))){
var state_25656__$1 = state_25656;
var statearr_25658_25726 = state_25656__$1;
(statearr_25658_25726[(2)] = null);

(statearr_25658_25726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (2))){
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25656__$1,(4),out);
} else {
if((state_val_25657 === (3))){
var inst_25654 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25656__$1,inst_25654);
} else {
if((state_val_25657 === (4))){
var inst_25644 = (state_25656[(7)]);
var inst_25644__$1 = (state_25656[(2)]);
var state_25656__$1 = (function (){var statearr_25659 = state_25656;
(statearr_25659[(7)] = inst_25644__$1);

return statearr_25659;
})();
if(cljs.core.truth_(inst_25644__$1)){
var statearr_25660_25727 = state_25656__$1;
(statearr_25660_25727[(1)] = (5));

} else {
var statearr_25661_25728 = state_25656__$1;
(statearr_25661_25728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (5))){
var inst_25644 = (state_25656[(7)]);
var inst_25646 = f.call(null,inst_25644);
var inst_25647 = (function (){var temp__5457__auto__ = inst_25644;
var a = inst_25644;
var mb = inst_25646;
return ((function (temp__5457__auto__,a,mb,inst_25644,inst_25646,state_val_25657,c__23152__auto___25725,es,out,___$1){
return (function (b){
return respondent.core.deliver.call(null,es,b);
});
;})(temp__5457__auto__,a,mb,inst_25644,inst_25646,state_val_25657,c__23152__auto___25725,es,out,___$1))
})();
var inst_25648 = respondent.core.subscribe.call(null,inst_25646,inst_25647);
var state_25656__$1 = (function (){var statearr_25662 = state_25656;
(statearr_25662[(8)] = inst_25648);

return statearr_25662;
})();
var statearr_25663_25729 = state_25656__$1;
(statearr_25663_25729[(2)] = null);

(statearr_25663_25729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (6))){
var state_25656__$1 = state_25656;
var statearr_25664_25730 = state_25656__$1;
(statearr_25664_25730[(2)] = null);

(statearr_25664_25730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25657 === (7))){
var inst_25652 = (state_25656[(2)]);
var state_25656__$1 = state_25656;
var statearr_25665_25731 = state_25656__$1;
(statearr_25665_25731[(2)] = inst_25652);

(statearr_25665_25731[(1)] = (3));


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
});})(c__23152__auto___25725,es,out,___$1))
;
return ((function (switch__23062__auto__,c__23152__auto___25725,es,out,___$1){
return (function() {
var respondent$core$state_machine__23063__auto__ = null;
var respondent$core$state_machine__23063__auto____0 = (function (){
var statearr_25666 = [null,null,null,null,null,null,null,null,null];
(statearr_25666[(0)] = respondent$core$state_machine__23063__auto__);

(statearr_25666[(1)] = (1));

return statearr_25666;
});
var respondent$core$state_machine__23063__auto____1 = (function (state_25656){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25667){if((e25667 instanceof Object)){
var ex__23066__auto__ = e25667;
var statearr_25668_25732 = state_25656;
(statearr_25668_25732[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25733 = state_25656;
state_25656 = G__25733;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
respondent$core$state_machine__23063__auto__ = function(state_25656){
switch(arguments.length){
case 0:
return respondent$core$state_machine__23063__auto____0.call(this);
case 1:
return respondent$core$state_machine__23063__auto____1.call(this,state_25656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = respondent$core$state_machine__23063__auto____0;
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = respondent$core$state_machine__23063__auto____1;
return respondent$core$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___25725,es,out,___$1))
})();
var state__23154__auto__ = (function (){var statearr_25669 = f__23153__auto__.call(null);
(statearr_25669[(6)] = c__23152__auto___25725);

return statearr_25669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___25725,es,out,___$1))
);


return es;
});

respondent.core.EventStream.prototype.respondent$core$IEventStream$deliver$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,value,new cljs.core.Keyword("respondent.core","complete","respondent.core/complete",1955978690))){
cljs.core.reset_BANG_.call(null,self__.completed,true);

var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,___$1){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,___$1){
return (function (state_25674){
var state_val_25675 = (state_25674[(1)]);
if((state_val_25675 === (1))){
var state_25674__$1 = state_25674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25674__$1,(2),self__.channel,value);
} else {
if((state_val_25675 === (2))){
var inst_25671 = (state_25674[(2)]);
var inst_25672 = cljs.core.async.close_BANG_.call(null,self__.channel);
var state_25674__$1 = (function (){var statearr_25676 = state_25674;
(statearr_25676[(7)] = inst_25671);

return statearr_25676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25674__$1,inst_25672);
} else {
return null;
}
}
});})(c__23152__auto__,___$1))
;
return ((function (switch__23062__auto__,c__23152__auto__,___$1){
return (function() {
var respondent$core$state_machine__23063__auto__ = null;
var respondent$core$state_machine__23063__auto____0 = (function (){
var statearr_25677 = [null,null,null,null,null,null,null,null];
(statearr_25677[(0)] = respondent$core$state_machine__23063__auto__);

(statearr_25677[(1)] = (1));

return statearr_25677;
});
var respondent$core$state_machine__23063__auto____1 = (function (state_25674){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25678){if((e25678 instanceof Object)){
var ex__23066__auto__ = e25678;
var statearr_25679_25734 = state_25674;
(statearr_25679_25734[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25735 = state_25674;
state_25674 = G__25735;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
respondent$core$state_machine__23063__auto__ = function(state_25674){
switch(arguments.length){
case 0:
return respondent$core$state_machine__23063__auto____0.call(this);
case 1:
return respondent$core$state_machine__23063__auto____1.call(this,state_25674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = respondent$core$state_machine__23063__auto____0;
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = respondent$core$state_machine__23063__auto____1;
return respondent$core$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,___$1))
})();
var state__23154__auto__ = (function (){var statearr_25680 = f__23153__auto__.call(null);
(statearr_25680[(6)] = c__23152__auto__);

return statearr_25680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,___$1))
);

return c__23152__auto__;
} else {
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,___$1){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,___$1){
return (function (state_25684){
var state_val_25685 = (state_25684[(1)]);
if((state_val_25685 === (1))){
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25684__$1,(2),self__.channel,value);
} else {
if((state_val_25685 === (2))){
var inst_25682 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25684__$1,inst_25682);
} else {
return null;
}
}
});})(c__23152__auto__,___$1))
;
return ((function (switch__23062__auto__,c__23152__auto__,___$1){
return (function() {
var respondent$core$state_machine__23063__auto__ = null;
var respondent$core$state_machine__23063__auto____0 = (function (){
var statearr_25686 = [null,null,null,null,null,null,null];
(statearr_25686[(0)] = respondent$core$state_machine__23063__auto__);

(statearr_25686[(1)] = (1));

return statearr_25686;
});
var respondent$core$state_machine__23063__auto____1 = (function (state_25684){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25687){if((e25687 instanceof Object)){
var ex__23066__auto__ = e25687;
var statearr_25688_25736 = state_25684;
(statearr_25688_25736[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25737 = state_25684;
state_25684 = G__25737;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
respondent$core$state_machine__23063__auto__ = function(state_25684){
switch(arguments.length){
case 0:
return respondent$core$state_machine__23063__auto____0.call(this);
case 1:
return respondent$core$state_machine__23063__auto____1.call(this,state_25684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = respondent$core$state_machine__23063__auto____0;
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = respondent$core$state_machine__23063__auto____1;
return respondent$core$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,___$1))
})();
var state__23154__auto__ = (function (){var statearr_25689 = f__23153__auto__.call(null);
(statearr_25689[(6)] = c__23152__auto__);

return statearr_25689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,___$1))
);

return c__23152__auto__;
}
});

respondent.core.EventStream.prototype.respondent$core$IEventStream$completed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.completed);
});

respondent.core.EventStream.prototype.respondent$core$IObservable$ = cljs.core.PROTOCOL_SENTINEL;

respondent.core.EventStream.prototype.respondent$core$IObservable$subscribe$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var out = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,self__.multiple,out);

var c__23152__auto___25738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___25738,out,this$__$1){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___25738,out,this$__$1){
return (function (state_25707){
var state_val_25708 = (state_25707[(1)]);
if((state_val_25708 === (7))){
var inst_25697 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
if(cljs.core.truth_(inst_25697)){
var statearr_25709_25739 = state_25707__$1;
(statearr_25709_25739[(1)] = (8));

} else {
var statearr_25710_25740 = state_25707__$1;
(statearr_25710_25740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (1))){
var state_25707__$1 = state_25707;
var statearr_25711_25741 = state_25707__$1;
(statearr_25711_25741[(2)] = null);

(statearr_25711_25741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (4))){
var inst_25692 = (state_25707[(7)]);
var inst_25692__$1 = (state_25707[(2)]);
var state_25707__$1 = (function (){var statearr_25712 = state_25707;
(statearr_25712[(7)] = inst_25692__$1);

return statearr_25712;
})();
if(cljs.core.truth_(inst_25692__$1)){
var statearr_25713_25742 = state_25707__$1;
(statearr_25713_25742[(1)] = (5));

} else {
var statearr_25714_25743 = state_25707__$1;
(statearr_25714_25743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (6))){
var inst_25692 = (state_25707[(7)]);
var state_25707__$1 = state_25707;
var statearr_25715_25744 = state_25707__$1;
(statearr_25715_25744[(2)] = inst_25692);

(statearr_25715_25744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (3))){
var inst_25705 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25707__$1,inst_25705);
} else {
if((state_val_25708 === (2))){
var state_25707__$1 = state_25707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25707__$1,(4),out);
} else {
if((state_val_25708 === (9))){
var state_25707__$1 = state_25707;
var statearr_25716_25745 = state_25707__$1;
(statearr_25716_25745[(2)] = null);

(statearr_25716_25745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (5))){
var inst_25692 = (state_25707[(7)]);
var inst_25694 = cljs.core.not_EQ_.call(null,inst_25692,new cljs.core.Keyword("respondent.core","complete","respondent.core/complete",1955978690));
var state_25707__$1 = state_25707;
var statearr_25717_25746 = state_25707__$1;
(statearr_25717_25746[(2)] = inst_25694);

(statearr_25717_25746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (10))){
var inst_25703 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
var statearr_25718_25747 = state_25707__$1;
(statearr_25718_25747[(2)] = inst_25703);

(statearr_25718_25747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (8))){
var inst_25692 = (state_25707[(7)]);
var inst_25699 = f.call(null,inst_25692);
var state_25707__$1 = (function (){var statearr_25719 = state_25707;
(statearr_25719[(8)] = inst_25699);

return statearr_25719;
})();
var statearr_25720_25748 = state_25707__$1;
(statearr_25720_25748[(2)] = null);

(statearr_25720_25748[(1)] = (2));


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
});})(c__23152__auto___25738,out,this$__$1))
;
return ((function (switch__23062__auto__,c__23152__auto___25738,out,this$__$1){
return (function() {
var respondent$core$state_machine__23063__auto__ = null;
var respondent$core$state_machine__23063__auto____0 = (function (){
var statearr_25721 = [null,null,null,null,null,null,null,null,null];
(statearr_25721[(0)] = respondent$core$state_machine__23063__auto__);

(statearr_25721[(1)] = (1));

return statearr_25721;
});
var respondent$core$state_machine__23063__auto____1 = (function (state_25707){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25722){if((e25722 instanceof Object)){
var ex__23066__auto__ = e25722;
var statearr_25723_25749 = state_25707;
(statearr_25723_25749[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25750 = state_25707;
state_25707 = G__25750;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
respondent$core$state_machine__23063__auto__ = function(state_25707){
switch(arguments.length){
case 0:
return respondent$core$state_machine__23063__auto____0.call(this);
case 1:
return respondent$core$state_machine__23063__auto____1.call(this,state_25707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = respondent$core$state_machine__23063__auto____0;
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = respondent$core$state_machine__23063__auto____1;
return respondent$core$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___25738,out,this$__$1))
})();
var state__23154__auto__ = (function (){var statearr_25724 = f__23153__auto__.call(null);
(statearr_25724[(6)] = c__23152__auto___25738);

return statearr_25724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___25738,out,this$__$1))
);


return (new respondent.core.Token(out));
});

respondent.core.EventStream.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"channel","channel",-1920248077,null),new cljs.core.Symbol(null,"multiple","multiple",-1409990220,null),new cljs.core.Symbol(null,"completed","completed",1154475024,null)], null);
});

respondent.core.EventStream.cljs$lang$type = true;

respondent.core.EventStream.cljs$lang$ctorStr = "respondent.core/EventStream";

respondent.core.EventStream.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"respondent.core/EventStream");
});

/**
 * Positional factory function for respondent.core/EventStream.
 */
respondent.core.__GT_EventStream = (function respondent$core$__GT_EventStream(channel,multiple,completed){
return (new respondent.core.EventStream(channel,multiple,completed));
});

/**
 * Creates and returns a new event stream. You can optionally provide an existing
 *   core.async channel as the source for the new stream
 */
respondent.core.event_stream = (function respondent$core$event_stream(var_args){
var G__25752 = arguments.length;
switch (G__25752) {
case 0:
return respondent.core.event_stream.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return respondent.core.event_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

respondent.core.event_stream.cljs$core$IFn$_invoke$arity$0 = (function (){
return respondent.core.event_stream.call(null,cljs.core.async.chan.call(null));
});

respondent.core.event_stream.cljs$core$IFn$_invoke$arity$1 = (function (ch){
var multiple = cljs.core.async.mult.call(null,ch);
var completed = cljs.core.atom.call(null,false);
return (new respondent.core.EventStream(ch,multiple,completed));
});

respondent.core.event_stream.cljs$lang$maxFixedArity = 1;

/**
 * Creates and returns a new event stream which emits values at the given interval.
 * If no other arguments are given, the values start at 0 and increment by one at each delivery.
 * 
 * If given seed and succ it emits seed and applies succ to seed to get the next value. It then
 * applies succ to the previous result and so on.
 */
respondent.core.from_interval = (function respondent$core$from_interval(var_args){
var G__25755 = arguments.length;
switch (G__25755) {
case 1:
return respondent.core.from_interval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return respondent.core.from_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

respondent.core.from_interval.cljs$core$IFn$_invoke$arity$1 = (function (msecs){
return respondent.core.from_interval.call(null,msecs,(0),cljs.core.inc);
});

respondent.core.from_interval.cljs$core$IFn$_invoke$arity$3 = (function (msecs,seed,succ){
var es = respondent.core.event_stream.call(null);
var c__23152__auto___25789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___25789,es){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___25789,es){
return (function (state_25774){
var state_val_25775 = (state_25774[(1)]);
if((state_val_25775 === (1))){
var inst_25756 = cljs.core.async.timeout.call(null,msecs);
var inst_25757 = inst_25756;
var inst_25758 = seed;
var state_25774__$1 = (function (){var statearr_25776 = state_25774;
(statearr_25776[(7)] = inst_25758);

(statearr_25776[(8)] = inst_25757);

return statearr_25776;
})();
var statearr_25777_25790 = state_25774__$1;
(statearr_25777_25790[(2)] = null);

(statearr_25777_25790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (2))){
var inst_25760 = respondent.core.completed_QMARK_.call(null,es);
var state_25774__$1 = state_25774;
if(cljs.core.truth_(inst_25760)){
var statearr_25778_25791 = state_25774__$1;
(statearr_25778_25791[(1)] = (4));

} else {
var statearr_25779_25792 = state_25774__$1;
(statearr_25779_25792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (3))){
var inst_25772 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25774__$1,inst_25772);
} else {
if((state_val_25775 === (4))){
var state_25774__$1 = state_25774;
var statearr_25780_25793 = state_25774__$1;
(statearr_25780_25793[(2)] = null);

(statearr_25780_25793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (5))){
var inst_25757 = (state_25774[(8)]);
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25774__$1,(7),inst_25757);
} else {
if((state_val_25775 === (6))){
var inst_25770 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25781_25794 = state_25774__$1;
(statearr_25781_25794[(2)] = inst_25770);

(statearr_25781_25794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (7))){
var inst_25758 = (state_25774[(7)]);
var inst_25764 = (state_25774[(2)]);
var inst_25765 = respondent.core.deliver.call(null,es,inst_25758);
var inst_25766 = cljs.core.async.timeout.call(null,msecs);
var inst_25767 = succ.call(null,inst_25758);
var inst_25757 = inst_25766;
var inst_25758__$1 = inst_25767;
var state_25774__$1 = (function (){var statearr_25782 = state_25774;
(statearr_25782[(7)] = inst_25758__$1);

(statearr_25782[(8)] = inst_25757);

(statearr_25782[(9)] = inst_25765);

(statearr_25782[(10)] = inst_25764);

return statearr_25782;
})();
var statearr_25783_25795 = state_25774__$1;
(statearr_25783_25795[(2)] = null);

(statearr_25783_25795[(1)] = (2));


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
});})(c__23152__auto___25789,es))
;
return ((function (switch__23062__auto__,c__23152__auto___25789,es){
return (function() {
var respondent$core$state_machine__23063__auto__ = null;
var respondent$core$state_machine__23063__auto____0 = (function (){
var statearr_25784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25784[(0)] = respondent$core$state_machine__23063__auto__);

(statearr_25784[(1)] = (1));

return statearr_25784;
});
var respondent$core$state_machine__23063__auto____1 = (function (state_25774){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25785){if((e25785 instanceof Object)){
var ex__23066__auto__ = e25785;
var statearr_25786_25796 = state_25774;
(statearr_25786_25796[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25797 = state_25774;
state_25774 = G__25797;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
respondent$core$state_machine__23063__auto__ = function(state_25774){
switch(arguments.length){
case 0:
return respondent$core$state_machine__23063__auto____0.call(this);
case 1:
return respondent$core$state_machine__23063__auto____1.call(this,state_25774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = respondent$core$state_machine__23063__auto____0;
respondent$core$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = respondent$core$state_machine__23063__auto____1;
return respondent$core$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___25789,es))
})();
var state__23154__auto__ = (function (){var statearr_25787 = f__23153__auto__.call(null);
(statearr_25787[(6)] = c__23152__auto___25789);

return statearr_25787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___25789,es))
);


return es;
});

respondent.core.from_interval.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1672617805545
