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
}catch (e30299){if((e30299 instanceof Error)){
var e = e30299;
return "Error: Unable to stringify";
} else {
throw e30299;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30302 = arguments.length;
switch (G__30302) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30300_SHARP_){
if(typeof p1__30300_SHARP_ === 'string'){
return p1__30300_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30300_SHARP_);
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
var len__4499__auto___30305 = arguments.length;
var i__4500__auto___30306 = (0);
while(true){
if((i__4500__auto___30306 < len__4499__auto___30305)){
args__4502__auto__.push((arguments[i__4500__auto___30306]));

var G__30307 = (i__4500__auto___30306 + (1));
i__4500__auto___30306 = G__30307;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30304){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30304));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30309 = arguments.length;
var i__4500__auto___30310 = (0);
while(true){
if((i__4500__auto___30310 < len__4499__auto___30309)){
args__4502__auto__.push((arguments[i__4500__auto___30310]));

var G__30311 = (i__4500__auto___30310 + (1));
i__4500__auto___30310 = G__30311;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30308){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30308));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30312){
var map__30313 = p__30312;
var map__30313__$1 = ((((!((map__30313 == null)))?(((((map__30313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30313):map__30313);
var message = cljs.core.get.call(null,map__30313__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30313__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26439__auto___30392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___30392,ch){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___30392,ch){
return (function (state_30364){
var state_val_30365 = (state_30364[(1)]);
if((state_val_30365 === (7))){
var inst_30360 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30366_30393 = state_30364__$1;
(statearr_30366_30393[(2)] = inst_30360);

(statearr_30366_30393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (1))){
var state_30364__$1 = state_30364;
var statearr_30367_30394 = state_30364__$1;
(statearr_30367_30394[(2)] = null);

(statearr_30367_30394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (4))){
var inst_30317 = (state_30364[(7)]);
var inst_30317__$1 = (state_30364[(2)]);
var state_30364__$1 = (function (){var statearr_30368 = state_30364;
(statearr_30368[(7)] = inst_30317__$1);

return statearr_30368;
})();
if(cljs.core.truth_(inst_30317__$1)){
var statearr_30369_30395 = state_30364__$1;
(statearr_30369_30395[(1)] = (5));

} else {
var statearr_30370_30396 = state_30364__$1;
(statearr_30370_30396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (15))){
var inst_30324 = (state_30364[(8)]);
var inst_30339 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30324);
var inst_30340 = cljs.core.first.call(null,inst_30339);
var inst_30341 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30340);
var inst_30342 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30341)].join('');
var inst_30343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30342);
var state_30364__$1 = state_30364;
var statearr_30371_30397 = state_30364__$1;
(statearr_30371_30397[(2)] = inst_30343);

(statearr_30371_30397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (13))){
var inst_30348 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30372_30398 = state_30364__$1;
(statearr_30372_30398[(2)] = inst_30348);

(statearr_30372_30398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (6))){
var state_30364__$1 = state_30364;
var statearr_30373_30399 = state_30364__$1;
(statearr_30373_30399[(2)] = null);

(statearr_30373_30399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (17))){
var inst_30346 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30374_30400 = state_30364__$1;
(statearr_30374_30400[(2)] = inst_30346);

(statearr_30374_30400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (3))){
var inst_30362 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30364__$1,inst_30362);
} else {
if((state_val_30365 === (12))){
var inst_30323 = (state_30364[(9)]);
var inst_30337 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30323,opts);
var state_30364__$1 = state_30364;
if(cljs.core.truth_(inst_30337)){
var statearr_30375_30401 = state_30364__$1;
(statearr_30375_30401[(1)] = (15));

} else {
var statearr_30376_30402 = state_30364__$1;
(statearr_30376_30402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (2))){
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30364__$1,(4),ch);
} else {
if((state_val_30365 === (11))){
var inst_30324 = (state_30364[(8)]);
var inst_30329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30330 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30324);
var inst_30331 = cljs.core.async.timeout.call(null,(1000));
var inst_30332 = [inst_30330,inst_30331];
var inst_30333 = (new cljs.core.PersistentVector(null,2,(5),inst_30329,inst_30332,null));
var state_30364__$1 = state_30364;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30364__$1,(14),inst_30333);
} else {
if((state_val_30365 === (9))){
var inst_30324 = (state_30364[(8)]);
var inst_30350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30351 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30324);
var inst_30352 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30351);
var inst_30353 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30352)].join('');
var inst_30354 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30353);
var state_30364__$1 = (function (){var statearr_30377 = state_30364;
(statearr_30377[(10)] = inst_30350);

return statearr_30377;
})();
var statearr_30378_30403 = state_30364__$1;
(statearr_30378_30403[(2)] = inst_30354);

(statearr_30378_30403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (5))){
var inst_30317 = (state_30364[(7)]);
var inst_30319 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30320 = (new cljs.core.PersistentArrayMap(null,2,inst_30319,null));
var inst_30321 = (new cljs.core.PersistentHashSet(null,inst_30320,null));
var inst_30322 = figwheel.client.focus_msgs.call(null,inst_30321,inst_30317);
var inst_30323 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30322);
var inst_30324 = cljs.core.first.call(null,inst_30322);
var inst_30325 = figwheel.client.autoload_QMARK_.call(null);
var state_30364__$1 = (function (){var statearr_30379 = state_30364;
(statearr_30379[(9)] = inst_30323);

(statearr_30379[(8)] = inst_30324);

return statearr_30379;
})();
if(cljs.core.truth_(inst_30325)){
var statearr_30380_30404 = state_30364__$1;
(statearr_30380_30404[(1)] = (8));

} else {
var statearr_30381_30405 = state_30364__$1;
(statearr_30381_30405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (14))){
var inst_30335 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30382_30406 = state_30364__$1;
(statearr_30382_30406[(2)] = inst_30335);

(statearr_30382_30406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (16))){
var state_30364__$1 = state_30364;
var statearr_30383_30407 = state_30364__$1;
(statearr_30383_30407[(2)] = null);

(statearr_30383_30407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (10))){
var inst_30356 = (state_30364[(2)]);
var state_30364__$1 = (function (){var statearr_30384 = state_30364;
(statearr_30384[(11)] = inst_30356);

return statearr_30384;
})();
var statearr_30385_30408 = state_30364__$1;
(statearr_30385_30408[(2)] = null);

(statearr_30385_30408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (8))){
var inst_30323 = (state_30364[(9)]);
var inst_30327 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30323,opts);
var state_30364__$1 = state_30364;
if(cljs.core.truth_(inst_30327)){
var statearr_30386_30409 = state_30364__$1;
(statearr_30386_30409[(1)] = (11));

} else {
var statearr_30387_30410 = state_30364__$1;
(statearr_30387_30410[(1)] = (12));

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
});})(c__26439__auto___30392,ch))
;
return ((function (switch__26349__auto__,c__26439__auto___30392,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26350__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26350__auto____0 = (function (){
var statearr_30388 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30388[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26350__auto__);

(statearr_30388[(1)] = (1));

return statearr_30388;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26350__auto____1 = (function (state_30364){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_30364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e30389){if((e30389 instanceof Object)){
var ex__26353__auto__ = e30389;
var statearr_30390_30411 = state_30364;
(statearr_30390_30411[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30412 = state_30364;
state_30364 = G__30412;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26350__auto__ = function(state_30364){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26350__auto____1.call(this,state_30364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26350__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26350__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___30392,ch))
})();
var state__26441__auto__ = (function (){var statearr_30391 = f__26440__auto__.call(null);
(statearr_30391[(6)] = c__26439__auto___30392);

return statearr_30391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___30392,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30413_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30413_SHARP_));
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
var base_path_30417 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30417){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30416 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30415,_STAR_print_fn_STAR_30416,sb,base_path_30417){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30415,_STAR_print_fn_STAR_30416,sb,base_path_30417))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30416;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30415;
}}catch (e30414){if((e30414 instanceof Error)){
var e = e30414;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30417], null));
} else {
var e = e30414;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30417))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30418){
var map__30419 = p__30418;
var map__30419__$1 = ((((!((map__30419 == null)))?(((((map__30419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);
var opts = map__30419__$1;
var build_id = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30419,map__30419__$1,opts,build_id){
return (function (p__30421){
var vec__30422 = p__30421;
var seq__30423 = cljs.core.seq.call(null,vec__30422);
var first__30424 = cljs.core.first.call(null,seq__30423);
var seq__30423__$1 = cljs.core.next.call(null,seq__30423);
var map__30425 = first__30424;
var map__30425__$1 = ((((!((map__30425 == null)))?(((((map__30425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30425):map__30425);
var msg = map__30425__$1;
var msg_name = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30423__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30422,seq__30423,first__30424,seq__30423__$1,map__30425,map__30425__$1,msg,msg_name,_,map__30419,map__30419__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30422,seq__30423,first__30424,seq__30423__$1,map__30425,map__30425__$1,msg,msg_name,_,map__30419,map__30419__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30419,map__30419__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30427){
var vec__30428 = p__30427;
var seq__30429 = cljs.core.seq.call(null,vec__30428);
var first__30430 = cljs.core.first.call(null,seq__30429);
var seq__30429__$1 = cljs.core.next.call(null,seq__30429);
var map__30431 = first__30430;
var map__30431__$1 = ((((!((map__30431 == null)))?(((((map__30431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30431):map__30431);
var msg = map__30431__$1;
var msg_name = cljs.core.get.call(null,map__30431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30429__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30433){
var map__30434 = p__30433;
var map__30434__$1 = ((((!((map__30434 == null)))?(((((map__30434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30434):map__30434);
var on_compile_warning = cljs.core.get.call(null,map__30434__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30434__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30434,map__30434__$1,on_compile_warning,on_compile_fail){
return (function (p__30436){
var vec__30437 = p__30436;
var seq__30438 = cljs.core.seq.call(null,vec__30437);
var first__30439 = cljs.core.first.call(null,seq__30438);
var seq__30438__$1 = cljs.core.next.call(null,seq__30438);
var map__30440 = first__30439;
var map__30440__$1 = ((((!((map__30440 == null)))?(((((map__30440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30440):map__30440);
var msg = map__30440__$1;
var msg_name = cljs.core.get.call(null,map__30440__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30438__$1;
var pred__30442 = cljs.core._EQ_;
var expr__30443 = msg_name;
if(cljs.core.truth_(pred__30442.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30443))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30442.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30443))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30434,map__30434__$1,on_compile_warning,on_compile_fail))
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
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__,msg_hist,msg_names,msg){
return (function (state_30532){
var state_val_30533 = (state_30532[(1)]);
if((state_val_30533 === (7))){
var inst_30452 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30452)){
var statearr_30534_30581 = state_30532__$1;
(statearr_30534_30581[(1)] = (8));

} else {
var statearr_30535_30582 = state_30532__$1;
(statearr_30535_30582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (20))){
var inst_30526 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30536_30583 = state_30532__$1;
(statearr_30536_30583[(2)] = inst_30526);

(statearr_30536_30583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (27))){
var inst_30522 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30537_30584 = state_30532__$1;
(statearr_30537_30584[(2)] = inst_30522);

(statearr_30537_30584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (1))){
var inst_30445 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30445)){
var statearr_30538_30585 = state_30532__$1;
(statearr_30538_30585[(1)] = (2));

} else {
var statearr_30539_30586 = state_30532__$1;
(statearr_30539_30586[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (24))){
var inst_30524 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30540_30587 = state_30532__$1;
(statearr_30540_30587[(2)] = inst_30524);

(statearr_30540_30587[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (4))){
var inst_30530 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30532__$1,inst_30530);
} else {
if((state_val_30533 === (15))){
var inst_30528 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30541_30588 = state_30532__$1;
(statearr_30541_30588[(2)] = inst_30528);

(statearr_30541_30588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (21))){
var inst_30481 = (state_30532[(2)]);
var inst_30482 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30483 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30482);
var state_30532__$1 = (function (){var statearr_30542 = state_30532;
(statearr_30542[(7)] = inst_30481);

return statearr_30542;
})();
var statearr_30543_30589 = state_30532__$1;
(statearr_30543_30589[(2)] = inst_30483);

(statearr_30543_30589[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (31))){
var inst_30511 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30511)){
var statearr_30544_30590 = state_30532__$1;
(statearr_30544_30590[(1)] = (34));

} else {
var statearr_30545_30591 = state_30532__$1;
(statearr_30545_30591[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (32))){
var inst_30520 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30546_30592 = state_30532__$1;
(statearr_30546_30592[(2)] = inst_30520);

(statearr_30546_30592[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (33))){
var inst_30507 = (state_30532[(2)]);
var inst_30508 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30509 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30508);
var state_30532__$1 = (function (){var statearr_30547 = state_30532;
(statearr_30547[(8)] = inst_30507);

return statearr_30547;
})();
var statearr_30548_30593 = state_30532__$1;
(statearr_30548_30593[(2)] = inst_30509);

(statearr_30548_30593[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (13))){
var inst_30466 = figwheel.client.heads_up.clear.call(null);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(16),inst_30466);
} else {
if((state_val_30533 === (22))){
var inst_30487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30488 = figwheel.client.heads_up.append_warning_message.call(null,inst_30487);
var state_30532__$1 = state_30532;
var statearr_30549_30594 = state_30532__$1;
(statearr_30549_30594[(2)] = inst_30488);

(statearr_30549_30594[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (36))){
var inst_30518 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30550_30595 = state_30532__$1;
(statearr_30550_30595[(2)] = inst_30518);

(statearr_30550_30595[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (29))){
var inst_30498 = (state_30532[(2)]);
var inst_30499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30500 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30499);
var state_30532__$1 = (function (){var statearr_30551 = state_30532;
(statearr_30551[(9)] = inst_30498);

return statearr_30551;
})();
var statearr_30552_30596 = state_30532__$1;
(statearr_30552_30596[(2)] = inst_30500);

(statearr_30552_30596[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (6))){
var inst_30447 = (state_30532[(10)]);
var state_30532__$1 = state_30532;
var statearr_30553_30597 = state_30532__$1;
(statearr_30553_30597[(2)] = inst_30447);

(statearr_30553_30597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (28))){
var inst_30494 = (state_30532[(2)]);
var inst_30495 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30496 = figwheel.client.heads_up.display_warning.call(null,inst_30495);
var state_30532__$1 = (function (){var statearr_30554 = state_30532;
(statearr_30554[(11)] = inst_30494);

return statearr_30554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(29),inst_30496);
} else {
if((state_val_30533 === (25))){
var inst_30492 = figwheel.client.heads_up.clear.call(null);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(28),inst_30492);
} else {
if((state_val_30533 === (34))){
var inst_30513 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(37),inst_30513);
} else {
if((state_val_30533 === (17))){
var inst_30472 = (state_30532[(2)]);
var inst_30473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30474 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30473);
var state_30532__$1 = (function (){var statearr_30555 = state_30532;
(statearr_30555[(12)] = inst_30472);

return statearr_30555;
})();
var statearr_30556_30598 = state_30532__$1;
(statearr_30556_30598[(2)] = inst_30474);

(statearr_30556_30598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (3))){
var inst_30464 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30464)){
var statearr_30557_30599 = state_30532__$1;
(statearr_30557_30599[(1)] = (13));

} else {
var statearr_30558_30600 = state_30532__$1;
(statearr_30558_30600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (12))){
var inst_30460 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30559_30601 = state_30532__$1;
(statearr_30559_30601[(2)] = inst_30460);

(statearr_30559_30601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (2))){
var inst_30447 = (state_30532[(10)]);
var inst_30447__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30532__$1 = (function (){var statearr_30560 = state_30532;
(statearr_30560[(10)] = inst_30447__$1);

return statearr_30560;
})();
if(cljs.core.truth_(inst_30447__$1)){
var statearr_30561_30602 = state_30532__$1;
(statearr_30561_30602[(1)] = (5));

} else {
var statearr_30562_30603 = state_30532__$1;
(statearr_30562_30603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (23))){
var inst_30490 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30490)){
var statearr_30563_30604 = state_30532__$1;
(statearr_30563_30604[(1)] = (25));

} else {
var statearr_30564_30605 = state_30532__$1;
(statearr_30564_30605[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (35))){
var state_30532__$1 = state_30532;
var statearr_30565_30606 = state_30532__$1;
(statearr_30565_30606[(2)] = null);

(statearr_30565_30606[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (19))){
var inst_30485 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30485)){
var statearr_30566_30607 = state_30532__$1;
(statearr_30566_30607[(1)] = (22));

} else {
var statearr_30567_30608 = state_30532__$1;
(statearr_30567_30608[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (11))){
var inst_30456 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30568_30609 = state_30532__$1;
(statearr_30568_30609[(2)] = inst_30456);

(statearr_30568_30609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (9))){
var inst_30458 = figwheel.client.heads_up.clear.call(null);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(12),inst_30458);
} else {
if((state_val_30533 === (5))){
var inst_30449 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30532__$1 = state_30532;
var statearr_30569_30610 = state_30532__$1;
(statearr_30569_30610[(2)] = inst_30449);

(statearr_30569_30610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (14))){
var inst_30476 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30476)){
var statearr_30570_30611 = state_30532__$1;
(statearr_30570_30611[(1)] = (18));

} else {
var statearr_30571_30612 = state_30532__$1;
(statearr_30571_30612[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (26))){
var inst_30502 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30502)){
var statearr_30572_30613 = state_30532__$1;
(statearr_30572_30613[(1)] = (30));

} else {
var statearr_30573_30614 = state_30532__$1;
(statearr_30573_30614[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (16))){
var inst_30468 = (state_30532[(2)]);
var inst_30469 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30470 = figwheel.client.heads_up.display_exception.call(null,inst_30469);
var state_30532__$1 = (function (){var statearr_30574 = state_30532;
(statearr_30574[(13)] = inst_30468);

return statearr_30574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(17),inst_30470);
} else {
if((state_val_30533 === (30))){
var inst_30504 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30505 = figwheel.client.heads_up.display_warning.call(null,inst_30504);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(33),inst_30505);
} else {
if((state_val_30533 === (10))){
var inst_30462 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30575_30615 = state_30532__$1;
(statearr_30575_30615[(2)] = inst_30462);

(statearr_30575_30615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (18))){
var inst_30478 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30479 = figwheel.client.heads_up.display_exception.call(null,inst_30478);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(21),inst_30479);
} else {
if((state_val_30533 === (37))){
var inst_30515 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30576_30616 = state_30532__$1;
(statearr_30576_30616[(2)] = inst_30515);

(statearr_30576_30616[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (8))){
var inst_30454 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(11),inst_30454);
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
});})(c__26439__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26349__auto__,c__26439__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto____0 = (function (){
var statearr_30577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30577[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto__);

(statearr_30577[(1)] = (1));

return statearr_30577;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto____1 = (function (state_30532){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_30532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e30578){if((e30578 instanceof Object)){
var ex__26353__auto__ = e30578;
var statearr_30579_30617 = state_30532;
(statearr_30579_30617[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30618 = state_30532;
state_30532 = G__30618;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto__ = function(state_30532){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto____1.call(this,state_30532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__,msg_hist,msg_names,msg))
})();
var state__26441__auto__ = (function (){var statearr_30580 = f__26440__auto__.call(null);
(statearr_30580[(6)] = c__26439__auto__);

return statearr_30580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,msg_hist,msg_names,msg))
);

return c__26439__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26439__auto___30647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___30647,ch){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___30647,ch){
return (function (state_30633){
var state_val_30634 = (state_30633[(1)]);
if((state_val_30634 === (1))){
var state_30633__$1 = state_30633;
var statearr_30635_30648 = state_30633__$1;
(statearr_30635_30648[(2)] = null);

(statearr_30635_30648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (2))){
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30633__$1,(4),ch);
} else {
if((state_val_30634 === (3))){
var inst_30631 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30633__$1,inst_30631);
} else {
if((state_val_30634 === (4))){
var inst_30621 = (state_30633[(7)]);
var inst_30621__$1 = (state_30633[(2)]);
var state_30633__$1 = (function (){var statearr_30636 = state_30633;
(statearr_30636[(7)] = inst_30621__$1);

return statearr_30636;
})();
if(cljs.core.truth_(inst_30621__$1)){
var statearr_30637_30649 = state_30633__$1;
(statearr_30637_30649[(1)] = (5));

} else {
var statearr_30638_30650 = state_30633__$1;
(statearr_30638_30650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (5))){
var inst_30621 = (state_30633[(7)]);
var inst_30623 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30621);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30633__$1,(8),inst_30623);
} else {
if((state_val_30634 === (6))){
var state_30633__$1 = state_30633;
var statearr_30639_30651 = state_30633__$1;
(statearr_30639_30651[(2)] = null);

(statearr_30639_30651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (7))){
var inst_30629 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30640_30652 = state_30633__$1;
(statearr_30640_30652[(2)] = inst_30629);

(statearr_30640_30652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (8))){
var inst_30625 = (state_30633[(2)]);
var state_30633__$1 = (function (){var statearr_30641 = state_30633;
(statearr_30641[(8)] = inst_30625);

return statearr_30641;
})();
var statearr_30642_30653 = state_30633__$1;
(statearr_30642_30653[(2)] = null);

(statearr_30642_30653[(1)] = (2));


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
});})(c__26439__auto___30647,ch))
;
return ((function (switch__26349__auto__,c__26439__auto___30647,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26350__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26350__auto____0 = (function (){
var statearr_30643 = [null,null,null,null,null,null,null,null,null];
(statearr_30643[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26350__auto__);

(statearr_30643[(1)] = (1));

return statearr_30643;
});
var figwheel$client$heads_up_plugin_$_state_machine__26350__auto____1 = (function (state_30633){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_30633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e30644){if((e30644 instanceof Object)){
var ex__26353__auto__ = e30644;
var statearr_30645_30654 = state_30633;
(statearr_30645_30654[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30655 = state_30633;
state_30633 = G__30655;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26350__auto__ = function(state_30633){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26350__auto____1.call(this,state_30633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26350__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26350__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___30647,ch))
})();
var state__26441__auto__ = (function (){var statearr_30646 = f__26440__auto__.call(null);
(statearr_30646[(6)] = c__26439__auto___30647);

return statearr_30646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___30647,ch))
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
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__){
return (function (state_30661){
var state_val_30662 = (state_30661[(1)]);
if((state_val_30662 === (1))){
var inst_30656 = cljs.core.async.timeout.call(null,(3000));
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30661__$1,(2),inst_30656);
} else {
if((state_val_30662 === (2))){
var inst_30658 = (state_30661[(2)]);
var inst_30659 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30661__$1 = (function (){var statearr_30663 = state_30661;
(statearr_30663[(7)] = inst_30658);

return statearr_30663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30661__$1,inst_30659);
} else {
return null;
}
}
});})(c__26439__auto__))
;
return ((function (switch__26349__auto__,c__26439__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26350__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26350__auto____0 = (function (){
var statearr_30664 = [null,null,null,null,null,null,null,null];
(statearr_30664[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26350__auto__);

(statearr_30664[(1)] = (1));

return statearr_30664;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26350__auto____1 = (function (state_30661){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_30661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e30665){if((e30665 instanceof Object)){
var ex__26353__auto__ = e30665;
var statearr_30666_30668 = state_30661;
(statearr_30666_30668[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30669 = state_30661;
state_30661 = G__30669;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26350__auto__ = function(state_30661){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26350__auto____1.call(this,state_30661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26350__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26350__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_30667 = f__26440__auto__.call(null);
(statearr_30667[(6)] = c__26439__auto__);

return statearr_30667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
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
var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30676){
var state_val_30677 = (state_30676[(1)]);
if((state_val_30677 === (1))){
var inst_30670 = cljs.core.async.timeout.call(null,(2000));
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30676__$1,(2),inst_30670);
} else {
if((state_val_30677 === (2))){
var inst_30672 = (state_30676[(2)]);
var inst_30673 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30674 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30673);
var state_30676__$1 = (function (){var statearr_30678 = state_30676;
(statearr_30678[(7)] = inst_30672);

return statearr_30678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30676__$1,inst_30674);
} else {
return null;
}
}
});})(c__26439__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26349__auto__,c__26439__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto____0 = (function (){
var statearr_30679 = [null,null,null,null,null,null,null,null];
(statearr_30679[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto__);

(statearr_30679[(1)] = (1));

return statearr_30679;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto____1 = (function (state_30676){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_30676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e30680){if((e30680 instanceof Object)){
var ex__26353__auto__ = e30680;
var statearr_30681_30683 = state_30676;
(statearr_30681_30683[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30684 = state_30676;
state_30676 = G__30684;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto__ = function(state_30676){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto____1.call(this,state_30676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26441__auto__ = (function (){var statearr_30682 = f__26440__auto__.call(null);
(statearr_30682[(6)] = c__26439__auto__);

return statearr_30682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,figwheel_version,temp__5457__auto__))
);

return c__26439__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30685){
var map__30686 = p__30685;
var map__30686__$1 = ((((!((map__30686 == null)))?(((((map__30686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30686):map__30686);
var file = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30688 = "";
var G__30688__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30688),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30688);
var G__30688__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30688__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30688__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30688__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30688__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30689){
var map__30690 = p__30689;
var map__30690__$1 = ((((!((map__30690 == null)))?(((((map__30690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30690):map__30690);
var ed = map__30690__$1;
var formatted_exception = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30690__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30692_30696 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30693_30697 = null;
var count__30694_30698 = (0);
var i__30695_30699 = (0);
while(true){
if((i__30695_30699 < count__30694_30698)){
var msg_30700 = cljs.core._nth.call(null,chunk__30693_30697,i__30695_30699);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30700);


var G__30701 = seq__30692_30696;
var G__30702 = chunk__30693_30697;
var G__30703 = count__30694_30698;
var G__30704 = (i__30695_30699 + (1));
seq__30692_30696 = G__30701;
chunk__30693_30697 = G__30702;
count__30694_30698 = G__30703;
i__30695_30699 = G__30704;
continue;
} else {
var temp__5457__auto___30705 = cljs.core.seq.call(null,seq__30692_30696);
if(temp__5457__auto___30705){
var seq__30692_30706__$1 = temp__5457__auto___30705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30692_30706__$1)){
var c__4319__auto___30707 = cljs.core.chunk_first.call(null,seq__30692_30706__$1);
var G__30708 = cljs.core.chunk_rest.call(null,seq__30692_30706__$1);
var G__30709 = c__4319__auto___30707;
var G__30710 = cljs.core.count.call(null,c__4319__auto___30707);
var G__30711 = (0);
seq__30692_30696 = G__30708;
chunk__30693_30697 = G__30709;
count__30694_30698 = G__30710;
i__30695_30699 = G__30711;
continue;
} else {
var msg_30712 = cljs.core.first.call(null,seq__30692_30706__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30712);


var G__30713 = cljs.core.next.call(null,seq__30692_30706__$1);
var G__30714 = null;
var G__30715 = (0);
var G__30716 = (0);
seq__30692_30696 = G__30713;
chunk__30693_30697 = G__30714;
count__30694_30698 = G__30715;
i__30695_30699 = G__30716;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30717){
var map__30718 = p__30717;
var map__30718__$1 = ((((!((map__30718 == null)))?(((((map__30718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30718):map__30718);
var w = map__30718__$1;
var message = cljs.core.get.call(null,map__30718__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30720 = cljs.core.seq.call(null,plugins);
var chunk__30721 = null;
var count__30722 = (0);
var i__30723 = (0);
while(true){
if((i__30723 < count__30722)){
var vec__30724 = cljs.core._nth.call(null,chunk__30721,i__30723);
var k = cljs.core.nth.call(null,vec__30724,(0),null);
var plugin = cljs.core.nth.call(null,vec__30724,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30730 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30720,chunk__30721,count__30722,i__30723,pl_30730,vec__30724,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30730.call(null,msg_hist);
});})(seq__30720,chunk__30721,count__30722,i__30723,pl_30730,vec__30724,k,plugin))
);
} else {
}


var G__30731 = seq__30720;
var G__30732 = chunk__30721;
var G__30733 = count__30722;
var G__30734 = (i__30723 + (1));
seq__30720 = G__30731;
chunk__30721 = G__30732;
count__30722 = G__30733;
i__30723 = G__30734;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30720);
if(temp__5457__auto__){
var seq__30720__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30720__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30720__$1);
var G__30735 = cljs.core.chunk_rest.call(null,seq__30720__$1);
var G__30736 = c__4319__auto__;
var G__30737 = cljs.core.count.call(null,c__4319__auto__);
var G__30738 = (0);
seq__30720 = G__30735;
chunk__30721 = G__30736;
count__30722 = G__30737;
i__30723 = G__30738;
continue;
} else {
var vec__30727 = cljs.core.first.call(null,seq__30720__$1);
var k = cljs.core.nth.call(null,vec__30727,(0),null);
var plugin = cljs.core.nth.call(null,vec__30727,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30739 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30720,chunk__30721,count__30722,i__30723,pl_30739,vec__30727,k,plugin,seq__30720__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30739.call(null,msg_hist);
});})(seq__30720,chunk__30721,count__30722,i__30723,pl_30739,vec__30727,k,plugin,seq__30720__$1,temp__5457__auto__))
);
} else {
}


var G__30740 = cljs.core.next.call(null,seq__30720__$1);
var G__30741 = null;
var G__30742 = (0);
var G__30743 = (0);
seq__30720 = G__30740;
chunk__30721 = G__30741;
count__30722 = G__30742;
i__30723 = G__30743;
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
var G__30745 = arguments.length;
switch (G__30745) {
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

var seq__30746_30751 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30747_30752 = null;
var count__30748_30753 = (0);
var i__30749_30754 = (0);
while(true){
if((i__30749_30754 < count__30748_30753)){
var msg_30755 = cljs.core._nth.call(null,chunk__30747_30752,i__30749_30754);
figwheel.client.socket.handle_incoming_message.call(null,msg_30755);


var G__30756 = seq__30746_30751;
var G__30757 = chunk__30747_30752;
var G__30758 = count__30748_30753;
var G__30759 = (i__30749_30754 + (1));
seq__30746_30751 = G__30756;
chunk__30747_30752 = G__30757;
count__30748_30753 = G__30758;
i__30749_30754 = G__30759;
continue;
} else {
var temp__5457__auto___30760 = cljs.core.seq.call(null,seq__30746_30751);
if(temp__5457__auto___30760){
var seq__30746_30761__$1 = temp__5457__auto___30760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30746_30761__$1)){
var c__4319__auto___30762 = cljs.core.chunk_first.call(null,seq__30746_30761__$1);
var G__30763 = cljs.core.chunk_rest.call(null,seq__30746_30761__$1);
var G__30764 = c__4319__auto___30762;
var G__30765 = cljs.core.count.call(null,c__4319__auto___30762);
var G__30766 = (0);
seq__30746_30751 = G__30763;
chunk__30747_30752 = G__30764;
count__30748_30753 = G__30765;
i__30749_30754 = G__30766;
continue;
} else {
var msg_30767 = cljs.core.first.call(null,seq__30746_30761__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30767);


var G__30768 = cljs.core.next.call(null,seq__30746_30761__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__30746_30751 = G__30768;
chunk__30747_30752 = G__30769;
count__30748_30753 = G__30770;
i__30749_30754 = G__30771;
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
var len__4499__auto___30776 = arguments.length;
var i__4500__auto___30777 = (0);
while(true){
if((i__4500__auto___30777 < len__4499__auto___30776)){
args__4502__auto__.push((arguments[i__4500__auto___30777]));

var G__30778 = (i__4500__auto___30777 + (1));
i__4500__auto___30777 = G__30778;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30773){
var map__30774 = p__30773;
var map__30774__$1 = ((((!((map__30774 == null)))?(((((map__30774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30774):map__30774);
var opts = map__30774__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30772){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30772));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30779){if((e30779 instanceof Error)){
var e = e30779;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30779;

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
return (function (p__30780){
var map__30781 = p__30780;
var map__30781__$1 = ((((!((map__30781 == null)))?(((((map__30781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30781):map__30781);
var msg_name = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1672621538064
