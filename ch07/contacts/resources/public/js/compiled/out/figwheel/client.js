// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e34357){if((e34357 instanceof Error)){
var e = e34357;
return "Error: Unable to stringify";
} else {
throw e34357;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34360 = arguments.length;
switch (G__34360) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34358_SHARP_){
if(typeof p1__34358_SHARP_ === 'string'){
return p1__34358_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34358_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34363 = arguments.length;
var i__4500__auto___34364 = (0);
while(true){
if((i__4500__auto___34364 < len__4499__auto___34363)){
args__4502__auto__.push((arguments[i__4500__auto___34364]));

var G__34365 = (i__4500__auto___34364 + (1));
i__4500__auto___34364 = G__34365;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34362){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34362));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34367 = arguments.length;
var i__4500__auto___34368 = (0);
while(true){
if((i__4500__auto___34368 < len__4499__auto___34367)){
args__4502__auto__.push((arguments[i__4500__auto___34368]));

var G__34369 = (i__4500__auto___34368 + (1));
i__4500__auto___34368 = G__34369;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34366){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34366));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34370){
var map__34371 = p__34370;
var map__34371__$1 = ((((!((map__34371 == null)))?(((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34371):map__34371);
var message = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30599__auto___34450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___34450,ch){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___34450,ch){
return (function (state_34422){
var state_val_34423 = (state_34422[(1)]);
if((state_val_34423 === (7))){
var inst_34418 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
var statearr_34424_34451 = state_34422__$1;
(statearr_34424_34451[(2)] = inst_34418);

(statearr_34424_34451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (1))){
var state_34422__$1 = state_34422;
var statearr_34425_34452 = state_34422__$1;
(statearr_34425_34452[(2)] = null);

(statearr_34425_34452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (4))){
var inst_34375 = (state_34422[(7)]);
var inst_34375__$1 = (state_34422[(2)]);
var state_34422__$1 = (function (){var statearr_34426 = state_34422;
(statearr_34426[(7)] = inst_34375__$1);

return statearr_34426;
})();
if(cljs.core.truth_(inst_34375__$1)){
var statearr_34427_34453 = state_34422__$1;
(statearr_34427_34453[(1)] = (5));

} else {
var statearr_34428_34454 = state_34422__$1;
(statearr_34428_34454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (15))){
var inst_34382 = (state_34422[(8)]);
var inst_34397 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34382);
var inst_34398 = cljs.core.first.call(null,inst_34397);
var inst_34399 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34398);
var inst_34400 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34399)].join('');
var inst_34401 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34400);
var state_34422__$1 = state_34422;
var statearr_34429_34455 = state_34422__$1;
(statearr_34429_34455[(2)] = inst_34401);

(statearr_34429_34455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (13))){
var inst_34406 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
var statearr_34430_34456 = state_34422__$1;
(statearr_34430_34456[(2)] = inst_34406);

(statearr_34430_34456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (6))){
var state_34422__$1 = state_34422;
var statearr_34431_34457 = state_34422__$1;
(statearr_34431_34457[(2)] = null);

(statearr_34431_34457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (17))){
var inst_34404 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
var statearr_34432_34458 = state_34422__$1;
(statearr_34432_34458[(2)] = inst_34404);

(statearr_34432_34458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (3))){
var inst_34420 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34422__$1,inst_34420);
} else {
if((state_val_34423 === (12))){
var inst_34381 = (state_34422[(9)]);
var inst_34395 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34381,opts);
var state_34422__$1 = state_34422;
if(cljs.core.truth_(inst_34395)){
var statearr_34433_34459 = state_34422__$1;
(statearr_34433_34459[(1)] = (15));

} else {
var statearr_34434_34460 = state_34422__$1;
(statearr_34434_34460[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (2))){
var state_34422__$1 = state_34422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34422__$1,(4),ch);
} else {
if((state_val_34423 === (11))){
var inst_34382 = (state_34422[(8)]);
var inst_34387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34388 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34382);
var inst_34389 = cljs.core.async.timeout.call(null,(1000));
var inst_34390 = [inst_34388,inst_34389];
var inst_34391 = (new cljs.core.PersistentVector(null,2,(5),inst_34387,inst_34390,null));
var state_34422__$1 = state_34422;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34422__$1,(14),inst_34391);
} else {
if((state_val_34423 === (9))){
var inst_34382 = (state_34422[(8)]);
var inst_34408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34409 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34382);
var inst_34410 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34409);
var inst_34411 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34410)].join('');
var inst_34412 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34411);
var state_34422__$1 = (function (){var statearr_34435 = state_34422;
(statearr_34435[(10)] = inst_34408);

return statearr_34435;
})();
var statearr_34436_34461 = state_34422__$1;
(statearr_34436_34461[(2)] = inst_34412);

(statearr_34436_34461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (5))){
var inst_34375 = (state_34422[(7)]);
var inst_34377 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34378 = (new cljs.core.PersistentArrayMap(null,2,inst_34377,null));
var inst_34379 = (new cljs.core.PersistentHashSet(null,inst_34378,null));
var inst_34380 = figwheel.client.focus_msgs.call(null,inst_34379,inst_34375);
var inst_34381 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34380);
var inst_34382 = cljs.core.first.call(null,inst_34380);
var inst_34383 = figwheel.client.autoload_QMARK_.call(null);
var state_34422__$1 = (function (){var statearr_34437 = state_34422;
(statearr_34437[(9)] = inst_34381);

(statearr_34437[(8)] = inst_34382);

return statearr_34437;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34438_34462 = state_34422__$1;
(statearr_34438_34462[(1)] = (8));

} else {
var statearr_34439_34463 = state_34422__$1;
(statearr_34439_34463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (14))){
var inst_34393 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
var statearr_34440_34464 = state_34422__$1;
(statearr_34440_34464[(2)] = inst_34393);

(statearr_34440_34464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (16))){
var state_34422__$1 = state_34422;
var statearr_34441_34465 = state_34422__$1;
(statearr_34441_34465[(2)] = null);

(statearr_34441_34465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (10))){
var inst_34414 = (state_34422[(2)]);
var state_34422__$1 = (function (){var statearr_34442 = state_34422;
(statearr_34442[(11)] = inst_34414);

return statearr_34442;
})();
var statearr_34443_34466 = state_34422__$1;
(statearr_34443_34466[(2)] = null);

(statearr_34443_34466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (8))){
var inst_34381 = (state_34422[(9)]);
var inst_34385 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34381,opts);
var state_34422__$1 = state_34422;
if(cljs.core.truth_(inst_34385)){
var statearr_34444_34467 = state_34422__$1;
(statearr_34444_34467[(1)] = (11));

} else {
var statearr_34445_34468 = state_34422__$1;
(statearr_34445_34468[(1)] = (12));

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
});})(c__30599__auto___34450,ch))
;
return ((function (switch__30509__auto__,c__30599__auto___34450,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30510__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30510__auto____0 = (function (){
var statearr_34446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34446[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30510__auto__);

(statearr_34446[(1)] = (1));

return statearr_34446;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30510__auto____1 = (function (state_34422){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_34422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e34447){if((e34447 instanceof Object)){
var ex__30513__auto__ = e34447;
var statearr_34448_34469 = state_34422;
(statearr_34448_34469[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34470 = state_34422;
state_34422 = G__34470;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30510__auto__ = function(state_34422){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30510__auto____1.call(this,state_34422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30510__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30510__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___34450,ch))
})();
var state__30601__auto__ = (function (){var statearr_34449 = f__30600__auto__.call(null);
(statearr_34449[(6)] = c__30599__auto___34450);

return statearr_34449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___34450,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34471_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34471_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34475 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34475){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34473 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34474 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34473,_STAR_print_fn_STAR_34474,sb,base_path_34475){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_34473,_STAR_print_fn_STAR_34474,sb,base_path_34475))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34474;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34473;
}}catch (e34472){if((e34472 instanceof Error)){
var e = e34472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34475], null));
} else {
var e = e34472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34475))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34476){
var map__34477 = p__34476;
var map__34477__$1 = ((((!((map__34477 == null)))?(((((map__34477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34477):map__34477);
var opts = map__34477__$1;
var build_id = cljs.core.get.call(null,map__34477__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34477,map__34477__$1,opts,build_id){
return (function (p__34479){
var vec__34480 = p__34479;
var seq__34481 = cljs.core.seq.call(null,vec__34480);
var first__34482 = cljs.core.first.call(null,seq__34481);
var seq__34481__$1 = cljs.core.next.call(null,seq__34481);
var map__34483 = first__34482;
var map__34483__$1 = ((((!((map__34483 == null)))?(((((map__34483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34483):map__34483);
var msg = map__34483__$1;
var msg_name = cljs.core.get.call(null,map__34483__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34481__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34480,seq__34481,first__34482,seq__34481__$1,map__34483,map__34483__$1,msg,msg_name,_,map__34477,map__34477__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34480,seq__34481,first__34482,seq__34481__$1,map__34483,map__34483__$1,msg,msg_name,_,map__34477,map__34477__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34477,map__34477__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34485){
var vec__34486 = p__34485;
var seq__34487 = cljs.core.seq.call(null,vec__34486);
var first__34488 = cljs.core.first.call(null,seq__34487);
var seq__34487__$1 = cljs.core.next.call(null,seq__34487);
var map__34489 = first__34488;
var map__34489__$1 = ((((!((map__34489 == null)))?(((((map__34489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34489):map__34489);
var msg = map__34489__$1;
var msg_name = cljs.core.get.call(null,map__34489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34487__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34491){
var map__34492 = p__34491;
var map__34492__$1 = ((((!((map__34492 == null)))?(((((map__34492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34492):map__34492);
var on_compile_warning = cljs.core.get.call(null,map__34492__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34492__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34492,map__34492__$1,on_compile_warning,on_compile_fail){
return (function (p__34494){
var vec__34495 = p__34494;
var seq__34496 = cljs.core.seq.call(null,vec__34495);
var first__34497 = cljs.core.first.call(null,seq__34496);
var seq__34496__$1 = cljs.core.next.call(null,seq__34496);
var map__34498 = first__34497;
var map__34498__$1 = ((((!((map__34498 == null)))?(((((map__34498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34498):map__34498);
var msg = map__34498__$1;
var msg_name = cljs.core.get.call(null,map__34498__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34496__$1;
var pred__34500 = cljs.core._EQ_;
var expr__34501 = msg_name;
if(cljs.core.truth_(pred__34500.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34501))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34500.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34501))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34492,map__34492__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__,msg_hist,msg_names,msg){
return (function (state_34590){
var state_val_34591 = (state_34590[(1)]);
if((state_val_34591 === (7))){
var inst_34510 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34510)){
var statearr_34592_34639 = state_34590__$1;
(statearr_34592_34639[(1)] = (8));

} else {
var statearr_34593_34640 = state_34590__$1;
(statearr_34593_34640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (20))){
var inst_34584 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34594_34641 = state_34590__$1;
(statearr_34594_34641[(2)] = inst_34584);

(statearr_34594_34641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (27))){
var inst_34580 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34595_34642 = state_34590__$1;
(statearr_34595_34642[(2)] = inst_34580);

(statearr_34595_34642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (1))){
var inst_34503 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34503)){
var statearr_34596_34643 = state_34590__$1;
(statearr_34596_34643[(1)] = (2));

} else {
var statearr_34597_34644 = state_34590__$1;
(statearr_34597_34644[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (24))){
var inst_34582 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34598_34645 = state_34590__$1;
(statearr_34598_34645[(2)] = inst_34582);

(statearr_34598_34645[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (4))){
var inst_34588 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34590__$1,inst_34588);
} else {
if((state_val_34591 === (15))){
var inst_34586 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34599_34646 = state_34590__$1;
(statearr_34599_34646[(2)] = inst_34586);

(statearr_34599_34646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (21))){
var inst_34539 = (state_34590[(2)]);
var inst_34540 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34541 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34540);
var state_34590__$1 = (function (){var statearr_34600 = state_34590;
(statearr_34600[(7)] = inst_34539);

return statearr_34600;
})();
var statearr_34601_34647 = state_34590__$1;
(statearr_34601_34647[(2)] = inst_34541);

(statearr_34601_34647[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (31))){
var inst_34569 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34569)){
var statearr_34602_34648 = state_34590__$1;
(statearr_34602_34648[(1)] = (34));

} else {
var statearr_34603_34649 = state_34590__$1;
(statearr_34603_34649[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (32))){
var inst_34578 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34604_34650 = state_34590__$1;
(statearr_34604_34650[(2)] = inst_34578);

(statearr_34604_34650[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (33))){
var inst_34565 = (state_34590[(2)]);
var inst_34566 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34567 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34566);
var state_34590__$1 = (function (){var statearr_34605 = state_34590;
(statearr_34605[(8)] = inst_34565);

return statearr_34605;
})();
var statearr_34606_34651 = state_34590__$1;
(statearr_34606_34651[(2)] = inst_34567);

(statearr_34606_34651[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (13))){
var inst_34524 = figwheel.client.heads_up.clear.call(null);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(16),inst_34524);
} else {
if((state_val_34591 === (22))){
var inst_34545 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34546 = figwheel.client.heads_up.append_warning_message.call(null,inst_34545);
var state_34590__$1 = state_34590;
var statearr_34607_34652 = state_34590__$1;
(statearr_34607_34652[(2)] = inst_34546);

(statearr_34607_34652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (36))){
var inst_34576 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34608_34653 = state_34590__$1;
(statearr_34608_34653[(2)] = inst_34576);

(statearr_34608_34653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (29))){
var inst_34556 = (state_34590[(2)]);
var inst_34557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34557);
var state_34590__$1 = (function (){var statearr_34609 = state_34590;
(statearr_34609[(9)] = inst_34556);

return statearr_34609;
})();
var statearr_34610_34654 = state_34590__$1;
(statearr_34610_34654[(2)] = inst_34558);

(statearr_34610_34654[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (6))){
var inst_34505 = (state_34590[(10)]);
var state_34590__$1 = state_34590;
var statearr_34611_34655 = state_34590__$1;
(statearr_34611_34655[(2)] = inst_34505);

(statearr_34611_34655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (28))){
var inst_34552 = (state_34590[(2)]);
var inst_34553 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34554 = figwheel.client.heads_up.display_warning.call(null,inst_34553);
var state_34590__$1 = (function (){var statearr_34612 = state_34590;
(statearr_34612[(11)] = inst_34552);

return statearr_34612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(29),inst_34554);
} else {
if((state_val_34591 === (25))){
var inst_34550 = figwheel.client.heads_up.clear.call(null);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(28),inst_34550);
} else {
if((state_val_34591 === (34))){
var inst_34571 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(37),inst_34571);
} else {
if((state_val_34591 === (17))){
var inst_34530 = (state_34590[(2)]);
var inst_34531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34532 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34531);
var state_34590__$1 = (function (){var statearr_34613 = state_34590;
(statearr_34613[(12)] = inst_34530);

return statearr_34613;
})();
var statearr_34614_34656 = state_34590__$1;
(statearr_34614_34656[(2)] = inst_34532);

(statearr_34614_34656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (3))){
var inst_34522 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34522)){
var statearr_34615_34657 = state_34590__$1;
(statearr_34615_34657[(1)] = (13));

} else {
var statearr_34616_34658 = state_34590__$1;
(statearr_34616_34658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (12))){
var inst_34518 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34617_34659 = state_34590__$1;
(statearr_34617_34659[(2)] = inst_34518);

(statearr_34617_34659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (2))){
var inst_34505 = (state_34590[(10)]);
var inst_34505__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34590__$1 = (function (){var statearr_34618 = state_34590;
(statearr_34618[(10)] = inst_34505__$1);

return statearr_34618;
})();
if(cljs.core.truth_(inst_34505__$1)){
var statearr_34619_34660 = state_34590__$1;
(statearr_34619_34660[(1)] = (5));

} else {
var statearr_34620_34661 = state_34590__$1;
(statearr_34620_34661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (23))){
var inst_34548 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34548)){
var statearr_34621_34662 = state_34590__$1;
(statearr_34621_34662[(1)] = (25));

} else {
var statearr_34622_34663 = state_34590__$1;
(statearr_34622_34663[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (35))){
var state_34590__$1 = state_34590;
var statearr_34623_34664 = state_34590__$1;
(statearr_34623_34664[(2)] = null);

(statearr_34623_34664[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (19))){
var inst_34543 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34543)){
var statearr_34624_34665 = state_34590__$1;
(statearr_34624_34665[(1)] = (22));

} else {
var statearr_34625_34666 = state_34590__$1;
(statearr_34625_34666[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (11))){
var inst_34514 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34626_34667 = state_34590__$1;
(statearr_34626_34667[(2)] = inst_34514);

(statearr_34626_34667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (9))){
var inst_34516 = figwheel.client.heads_up.clear.call(null);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(12),inst_34516);
} else {
if((state_val_34591 === (5))){
var inst_34507 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34590__$1 = state_34590;
var statearr_34627_34668 = state_34590__$1;
(statearr_34627_34668[(2)] = inst_34507);

(statearr_34627_34668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (14))){
var inst_34534 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34534)){
var statearr_34628_34669 = state_34590__$1;
(statearr_34628_34669[(1)] = (18));

} else {
var statearr_34629_34670 = state_34590__$1;
(statearr_34629_34670[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (26))){
var inst_34560 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34560)){
var statearr_34630_34671 = state_34590__$1;
(statearr_34630_34671[(1)] = (30));

} else {
var statearr_34631_34672 = state_34590__$1;
(statearr_34631_34672[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (16))){
var inst_34526 = (state_34590[(2)]);
var inst_34527 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34528 = figwheel.client.heads_up.display_exception.call(null,inst_34527);
var state_34590__$1 = (function (){var statearr_34632 = state_34590;
(statearr_34632[(13)] = inst_34526);

return statearr_34632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(17),inst_34528);
} else {
if((state_val_34591 === (30))){
var inst_34562 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34563 = figwheel.client.heads_up.display_warning.call(null,inst_34562);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(33),inst_34563);
} else {
if((state_val_34591 === (10))){
var inst_34520 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34633_34673 = state_34590__$1;
(statearr_34633_34673[(2)] = inst_34520);

(statearr_34633_34673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (18))){
var inst_34536 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34537 = figwheel.client.heads_up.display_exception.call(null,inst_34536);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(21),inst_34537);
} else {
if((state_val_34591 === (37))){
var inst_34573 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34634_34674 = state_34590__$1;
(statearr_34634_34674[(2)] = inst_34573);

(statearr_34634_34674[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (8))){
var inst_34512 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(11),inst_34512);
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
});})(c__30599__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30509__auto__,c__30599__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto____0 = (function (){
var statearr_34635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34635[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto__);

(statearr_34635[(1)] = (1));

return statearr_34635;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto____1 = (function (state_34590){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_34590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e34636){if((e34636 instanceof Object)){
var ex__30513__auto__ = e34636;
var statearr_34637_34675 = state_34590;
(statearr_34637_34675[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34676 = state_34590;
state_34590 = G__34676;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto__ = function(state_34590){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto____1.call(this,state_34590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__,msg_hist,msg_names,msg))
})();
var state__30601__auto__ = (function (){var statearr_34638 = f__30600__auto__.call(null);
(statearr_34638[(6)] = c__30599__auto__);

return statearr_34638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__,msg_hist,msg_names,msg))
);

return c__30599__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30599__auto___34705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___34705,ch){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___34705,ch){
return (function (state_34691){
var state_val_34692 = (state_34691[(1)]);
if((state_val_34692 === (1))){
var state_34691__$1 = state_34691;
var statearr_34693_34706 = state_34691__$1;
(statearr_34693_34706[(2)] = null);

(statearr_34693_34706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (2))){
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34691__$1,(4),ch);
} else {
if((state_val_34692 === (3))){
var inst_34689 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34691__$1,inst_34689);
} else {
if((state_val_34692 === (4))){
var inst_34679 = (state_34691[(7)]);
var inst_34679__$1 = (state_34691[(2)]);
var state_34691__$1 = (function (){var statearr_34694 = state_34691;
(statearr_34694[(7)] = inst_34679__$1);

return statearr_34694;
})();
if(cljs.core.truth_(inst_34679__$1)){
var statearr_34695_34707 = state_34691__$1;
(statearr_34695_34707[(1)] = (5));

} else {
var statearr_34696_34708 = state_34691__$1;
(statearr_34696_34708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (5))){
var inst_34679 = (state_34691[(7)]);
var inst_34681 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34679);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34691__$1,(8),inst_34681);
} else {
if((state_val_34692 === (6))){
var state_34691__$1 = state_34691;
var statearr_34697_34709 = state_34691__$1;
(statearr_34697_34709[(2)] = null);

(statearr_34697_34709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (7))){
var inst_34687 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34698_34710 = state_34691__$1;
(statearr_34698_34710[(2)] = inst_34687);

(statearr_34698_34710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (8))){
var inst_34683 = (state_34691[(2)]);
var state_34691__$1 = (function (){var statearr_34699 = state_34691;
(statearr_34699[(8)] = inst_34683);

return statearr_34699;
})();
var statearr_34700_34711 = state_34691__$1;
(statearr_34700_34711[(2)] = null);

(statearr_34700_34711[(1)] = (2));


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
});})(c__30599__auto___34705,ch))
;
return ((function (switch__30509__auto__,c__30599__auto___34705,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30510__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30510__auto____0 = (function (){
var statearr_34701 = [null,null,null,null,null,null,null,null,null];
(statearr_34701[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30510__auto__);

(statearr_34701[(1)] = (1));

return statearr_34701;
});
var figwheel$client$heads_up_plugin_$_state_machine__30510__auto____1 = (function (state_34691){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_34691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e34702){if((e34702 instanceof Object)){
var ex__30513__auto__ = e34702;
var statearr_34703_34712 = state_34691;
(statearr_34703_34712[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34713 = state_34691;
state_34691 = G__34713;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30510__auto__ = function(state_34691){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30510__auto____1.call(this,state_34691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30510__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30510__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___34705,ch))
})();
var state__30601__auto__ = (function (){var statearr_34704 = f__30600__auto__.call(null);
(statearr_34704[(6)] = c__30599__auto___34705);

return statearr_34704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___34705,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__){
return (function (state_34719){
var state_val_34720 = (state_34719[(1)]);
if((state_val_34720 === (1))){
var inst_34714 = cljs.core.async.timeout.call(null,(3000));
var state_34719__$1 = state_34719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34719__$1,(2),inst_34714);
} else {
if((state_val_34720 === (2))){
var inst_34716 = (state_34719[(2)]);
var inst_34717 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34719__$1 = (function (){var statearr_34721 = state_34719;
(statearr_34721[(7)] = inst_34716);

return statearr_34721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34719__$1,inst_34717);
} else {
return null;
}
}
});})(c__30599__auto__))
;
return ((function (switch__30509__auto__,c__30599__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30510__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30510__auto____0 = (function (){
var statearr_34722 = [null,null,null,null,null,null,null,null];
(statearr_34722[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30510__auto__);

(statearr_34722[(1)] = (1));

return statearr_34722;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30510__auto____1 = (function (state_34719){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_34719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e34723){if((e34723 instanceof Object)){
var ex__30513__auto__ = e34723;
var statearr_34724_34726 = state_34719;
(statearr_34724_34726[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34727 = state_34719;
state_34719 = G__34727;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30510__auto__ = function(state_34719){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30510__auto____1.call(this,state_34719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30510__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30510__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__))
})();
var state__30601__auto__ = (function (){var statearr_34725 = f__30600__auto__.call(null);
(statearr_34725[(6)] = c__30599__auto__);

return statearr_34725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__))
);

return c__30599__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__,figwheel_version,temp__5457__auto__){
return (function (state_34734){
var state_val_34735 = (state_34734[(1)]);
if((state_val_34735 === (1))){
var inst_34728 = cljs.core.async.timeout.call(null,(2000));
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34734__$1,(2),inst_34728);
} else {
if((state_val_34735 === (2))){
var inst_34730 = (state_34734[(2)]);
var inst_34731 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34732 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34731);
var state_34734__$1 = (function (){var statearr_34736 = state_34734;
(statearr_34736[(7)] = inst_34730);

return statearr_34736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34734__$1,inst_34732);
} else {
return null;
}
}
});})(c__30599__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__30509__auto__,c__30599__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto____0 = (function (){
var statearr_34737 = [null,null,null,null,null,null,null,null];
(statearr_34737[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto__);

(statearr_34737[(1)] = (1));

return statearr_34737;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto____1 = (function (state_34734){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_34734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e34738){if((e34738 instanceof Object)){
var ex__30513__auto__ = e34738;
var statearr_34739_34741 = state_34734;
(statearr_34739_34741[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34742 = state_34734;
state_34734 = G__34742;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto__ = function(state_34734){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto____1.call(this,state_34734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__,figwheel_version,temp__5457__auto__))
})();
var state__30601__auto__ = (function (){var statearr_34740 = f__30600__auto__.call(null);
(statearr_34740[(6)] = c__30599__auto__);

return statearr_34740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__,figwheel_version,temp__5457__auto__))
);

return c__30599__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34743){
var map__34744 = p__34743;
var map__34744__$1 = ((((!((map__34744 == null)))?(((((map__34744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34744):map__34744);
var file = cljs.core.get.call(null,map__34744__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34744__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34744__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34746 = "";
var G__34746__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34746),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34746);
var G__34746__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34746__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34746__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34746__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34746__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34747){
var map__34748 = p__34747;
var map__34748__$1 = ((((!((map__34748 == null)))?(((((map__34748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34748):map__34748);
var ed = map__34748__$1;
var formatted_exception = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34750_34754 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34751_34755 = null;
var count__34752_34756 = (0);
var i__34753_34757 = (0);
while(true){
if((i__34753_34757 < count__34752_34756)){
var msg_34758 = cljs.core._nth.call(null,chunk__34751_34755,i__34753_34757);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34758);


var G__34759 = seq__34750_34754;
var G__34760 = chunk__34751_34755;
var G__34761 = count__34752_34756;
var G__34762 = (i__34753_34757 + (1));
seq__34750_34754 = G__34759;
chunk__34751_34755 = G__34760;
count__34752_34756 = G__34761;
i__34753_34757 = G__34762;
continue;
} else {
var temp__5457__auto___34763 = cljs.core.seq.call(null,seq__34750_34754);
if(temp__5457__auto___34763){
var seq__34750_34764__$1 = temp__5457__auto___34763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34750_34764__$1)){
var c__4319__auto___34765 = cljs.core.chunk_first.call(null,seq__34750_34764__$1);
var G__34766 = cljs.core.chunk_rest.call(null,seq__34750_34764__$1);
var G__34767 = c__4319__auto___34765;
var G__34768 = cljs.core.count.call(null,c__4319__auto___34765);
var G__34769 = (0);
seq__34750_34754 = G__34766;
chunk__34751_34755 = G__34767;
count__34752_34756 = G__34768;
i__34753_34757 = G__34769;
continue;
} else {
var msg_34770 = cljs.core.first.call(null,seq__34750_34764__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34770);


var G__34771 = cljs.core.next.call(null,seq__34750_34764__$1);
var G__34772 = null;
var G__34773 = (0);
var G__34774 = (0);
seq__34750_34754 = G__34771;
chunk__34751_34755 = G__34772;
count__34752_34756 = G__34773;
i__34753_34757 = G__34774;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34775){
var map__34776 = p__34775;
var map__34776__$1 = ((((!((map__34776 == null)))?(((((map__34776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34776):map__34776);
var w = map__34776__$1;
var message = cljs.core.get.call(null,map__34776__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34778 = cljs.core.seq.call(null,plugins);
var chunk__34779 = null;
var count__34780 = (0);
var i__34781 = (0);
while(true){
if((i__34781 < count__34780)){
var vec__34782 = cljs.core._nth.call(null,chunk__34779,i__34781);
var k = cljs.core.nth.call(null,vec__34782,(0),null);
var plugin = cljs.core.nth.call(null,vec__34782,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34788 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34778,chunk__34779,count__34780,i__34781,pl_34788,vec__34782,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34788.call(null,msg_hist);
});})(seq__34778,chunk__34779,count__34780,i__34781,pl_34788,vec__34782,k,plugin))
);
} else {
}


var G__34789 = seq__34778;
var G__34790 = chunk__34779;
var G__34791 = count__34780;
var G__34792 = (i__34781 + (1));
seq__34778 = G__34789;
chunk__34779 = G__34790;
count__34780 = G__34791;
i__34781 = G__34792;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34778);
if(temp__5457__auto__){
var seq__34778__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34778__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34778__$1);
var G__34793 = cljs.core.chunk_rest.call(null,seq__34778__$1);
var G__34794 = c__4319__auto__;
var G__34795 = cljs.core.count.call(null,c__4319__auto__);
var G__34796 = (0);
seq__34778 = G__34793;
chunk__34779 = G__34794;
count__34780 = G__34795;
i__34781 = G__34796;
continue;
} else {
var vec__34785 = cljs.core.first.call(null,seq__34778__$1);
var k = cljs.core.nth.call(null,vec__34785,(0),null);
var plugin = cljs.core.nth.call(null,vec__34785,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34797 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34778,chunk__34779,count__34780,i__34781,pl_34797,vec__34785,k,plugin,seq__34778__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34797.call(null,msg_hist);
});})(seq__34778,chunk__34779,count__34780,i__34781,pl_34797,vec__34785,k,plugin,seq__34778__$1,temp__5457__auto__))
);
} else {
}


var G__34798 = cljs.core.next.call(null,seq__34778__$1);
var G__34799 = null;
var G__34800 = (0);
var G__34801 = (0);
seq__34778 = G__34798;
chunk__34779 = G__34799;
count__34780 = G__34800;
i__34781 = G__34801;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34803 = arguments.length;
switch (G__34803) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34804_34809 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34805_34810 = null;
var count__34806_34811 = (0);
var i__34807_34812 = (0);
while(true){
if((i__34807_34812 < count__34806_34811)){
var msg_34813 = cljs.core._nth.call(null,chunk__34805_34810,i__34807_34812);
figwheel.client.socket.handle_incoming_message.call(null,msg_34813);


var G__34814 = seq__34804_34809;
var G__34815 = chunk__34805_34810;
var G__34816 = count__34806_34811;
var G__34817 = (i__34807_34812 + (1));
seq__34804_34809 = G__34814;
chunk__34805_34810 = G__34815;
count__34806_34811 = G__34816;
i__34807_34812 = G__34817;
continue;
} else {
var temp__5457__auto___34818 = cljs.core.seq.call(null,seq__34804_34809);
if(temp__5457__auto___34818){
var seq__34804_34819__$1 = temp__5457__auto___34818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34804_34819__$1)){
var c__4319__auto___34820 = cljs.core.chunk_first.call(null,seq__34804_34819__$1);
var G__34821 = cljs.core.chunk_rest.call(null,seq__34804_34819__$1);
var G__34822 = c__4319__auto___34820;
var G__34823 = cljs.core.count.call(null,c__4319__auto___34820);
var G__34824 = (0);
seq__34804_34809 = G__34821;
chunk__34805_34810 = G__34822;
count__34806_34811 = G__34823;
i__34807_34812 = G__34824;
continue;
} else {
var msg_34825 = cljs.core.first.call(null,seq__34804_34819__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34825);


var G__34826 = cljs.core.next.call(null,seq__34804_34819__$1);
var G__34827 = null;
var G__34828 = (0);
var G__34829 = (0);
seq__34804_34809 = G__34826;
chunk__34805_34810 = G__34827;
count__34806_34811 = G__34828;
i__34807_34812 = G__34829;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34834 = arguments.length;
var i__4500__auto___34835 = (0);
while(true){
if((i__4500__auto___34835 < len__4499__auto___34834)){
args__4502__auto__.push((arguments[i__4500__auto___34835]));

var G__34836 = (i__4500__auto___34835 + (1));
i__4500__auto___34835 = G__34836;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34831){
var map__34832 = p__34831;
var map__34832__$1 = ((((!((map__34832 == null)))?(((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var opts = map__34832__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34830){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34830));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34837){if((e34837 instanceof Error)){
var e = e34837;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34837;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34838){
var map__34839 = p__34838;
var map__34839__$1 = ((((!((map__34839 == null)))?(((((map__34839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34839):map__34839);
var msg_name = cljs.core.get.call(null,map__34839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1673416720718
