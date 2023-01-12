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
}catch (e25021){if((e25021 instanceof Error)){
var e = e25021;
return "Error: Unable to stringify";
} else {
throw e25021;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__25024 = arguments.length;
switch (G__25024) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__25022_SHARP_){
if(typeof p1__25022_SHARP_ === 'string'){
return p1__25022_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__25022_SHARP_);
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
var len__4499__auto___25027 = arguments.length;
var i__4500__auto___25028 = (0);
while(true){
if((i__4500__auto___25028 < len__4499__auto___25027)){
args__4502__auto__.push((arguments[i__4500__auto___25028]));

var G__25029 = (i__4500__auto___25028 + (1));
i__4500__auto___25028 = G__25029;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq25026){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25026));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25031 = arguments.length;
var i__4500__auto___25032 = (0);
while(true){
if((i__4500__auto___25032 < len__4499__auto___25031)){
args__4502__auto__.push((arguments[i__4500__auto___25032]));

var G__25033 = (i__4500__auto___25032 + (1));
i__4500__auto___25032 = G__25033;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq25030){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25030));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25034){
var map__25035 = p__25034;
var map__25035__$1 = ((((!((map__25035 == null)))?(((((map__25035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25035):map__25035);
var message = cljs.core.get.call(null,map__25035__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25035__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23190__auto___25114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto___25114,ch){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto___25114,ch){
return (function (state_25086){
var state_val_25087 = (state_25086[(1)]);
if((state_val_25087 === (7))){
var inst_25082 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25088_25115 = state_25086__$1;
(statearr_25088_25115[(2)] = inst_25082);

(statearr_25088_25115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (1))){
var state_25086__$1 = state_25086;
var statearr_25089_25116 = state_25086__$1;
(statearr_25089_25116[(2)] = null);

(statearr_25089_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (4))){
var inst_25039 = (state_25086[(7)]);
var inst_25039__$1 = (state_25086[(2)]);
var state_25086__$1 = (function (){var statearr_25090 = state_25086;
(statearr_25090[(7)] = inst_25039__$1);

return statearr_25090;
})();
if(cljs.core.truth_(inst_25039__$1)){
var statearr_25091_25117 = state_25086__$1;
(statearr_25091_25117[(1)] = (5));

} else {
var statearr_25092_25118 = state_25086__$1;
(statearr_25092_25118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (15))){
var inst_25046 = (state_25086[(8)]);
var inst_25061 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25046);
var inst_25062 = cljs.core.first.call(null,inst_25061);
var inst_25063 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25062);
var inst_25064 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25063)].join('');
var inst_25065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25064);
var state_25086__$1 = state_25086;
var statearr_25093_25119 = state_25086__$1;
(statearr_25093_25119[(2)] = inst_25065);

(statearr_25093_25119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (13))){
var inst_25070 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25094_25120 = state_25086__$1;
(statearr_25094_25120[(2)] = inst_25070);

(statearr_25094_25120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (6))){
var state_25086__$1 = state_25086;
var statearr_25095_25121 = state_25086__$1;
(statearr_25095_25121[(2)] = null);

(statearr_25095_25121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (17))){
var inst_25068 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25096_25122 = state_25086__$1;
(statearr_25096_25122[(2)] = inst_25068);

(statearr_25096_25122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (3))){
var inst_25084 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25086__$1,inst_25084);
} else {
if((state_val_25087 === (12))){
var inst_25045 = (state_25086[(9)]);
var inst_25059 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25045,opts);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25059)){
var statearr_25097_25123 = state_25086__$1;
(statearr_25097_25123[(1)] = (15));

} else {
var statearr_25098_25124 = state_25086__$1;
(statearr_25098_25124[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (2))){
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25086__$1,(4),ch);
} else {
if((state_val_25087 === (11))){
var inst_25046 = (state_25086[(8)]);
var inst_25051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25052 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25046);
var inst_25053 = cljs.core.async.timeout.call(null,(1000));
var inst_25054 = [inst_25052,inst_25053];
var inst_25055 = (new cljs.core.PersistentVector(null,2,(5),inst_25051,inst_25054,null));
var state_25086__$1 = state_25086;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25086__$1,(14),inst_25055);
} else {
if((state_val_25087 === (9))){
var inst_25046 = (state_25086[(8)]);
var inst_25072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25073 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25046);
var inst_25074 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25073);
var inst_25075 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25074)].join('');
var inst_25076 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25075);
var state_25086__$1 = (function (){var statearr_25099 = state_25086;
(statearr_25099[(10)] = inst_25072);

return statearr_25099;
})();
var statearr_25100_25125 = state_25086__$1;
(statearr_25100_25125[(2)] = inst_25076);

(statearr_25100_25125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (5))){
var inst_25039 = (state_25086[(7)]);
var inst_25041 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25042 = (new cljs.core.PersistentArrayMap(null,2,inst_25041,null));
var inst_25043 = (new cljs.core.PersistentHashSet(null,inst_25042,null));
var inst_25044 = figwheel.client.focus_msgs.call(null,inst_25043,inst_25039);
var inst_25045 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25044);
var inst_25046 = cljs.core.first.call(null,inst_25044);
var inst_25047 = figwheel.client.autoload_QMARK_.call(null);
var state_25086__$1 = (function (){var statearr_25101 = state_25086;
(statearr_25101[(8)] = inst_25046);

(statearr_25101[(9)] = inst_25045);

return statearr_25101;
})();
if(cljs.core.truth_(inst_25047)){
var statearr_25102_25126 = state_25086__$1;
(statearr_25102_25126[(1)] = (8));

} else {
var statearr_25103_25127 = state_25086__$1;
(statearr_25103_25127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (14))){
var inst_25057 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25104_25128 = state_25086__$1;
(statearr_25104_25128[(2)] = inst_25057);

(statearr_25104_25128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (16))){
var state_25086__$1 = state_25086;
var statearr_25105_25129 = state_25086__$1;
(statearr_25105_25129[(2)] = null);

(statearr_25105_25129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (10))){
var inst_25078 = (state_25086[(2)]);
var state_25086__$1 = (function (){var statearr_25106 = state_25086;
(statearr_25106[(11)] = inst_25078);

return statearr_25106;
})();
var statearr_25107_25130 = state_25086__$1;
(statearr_25107_25130[(2)] = null);

(statearr_25107_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (8))){
var inst_25045 = (state_25086[(9)]);
var inst_25049 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25045,opts);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25049)){
var statearr_25108_25131 = state_25086__$1;
(statearr_25108_25131[(1)] = (11));

} else {
var statearr_25109_25132 = state_25086__$1;
(statearr_25109_25132[(1)] = (12));

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
});})(c__23190__auto___25114,ch))
;
return ((function (switch__23167__auto__,c__23190__auto___25114,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23168__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23168__auto____0 = (function (){
var statearr_25110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25110[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23168__auto__);

(statearr_25110[(1)] = (1));

return statearr_25110;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23168__auto____1 = (function (state_25086){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_25086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e25111){if((e25111 instanceof Object)){
var ex__23171__auto__ = e25111;
var statearr_25112_25133 = state_25086;
(statearr_25112_25133[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25134 = state_25086;
state_25086 = G__25134;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23168__auto__ = function(state_25086){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23168__auto____1.call(this,state_25086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23168__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23168__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto___25114,ch))
})();
var state__23192__auto__ = (function (){var statearr_25113 = f__23191__auto__.call(null);
(statearr_25113[(6)] = c__23190__auto___25114);

return statearr_25113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto___25114,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25135_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25135_SHARP_));
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
var base_path_25139 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25139){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_25137 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_25138 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_25137,_STAR_print_fn_STAR_25138,sb,base_path_25139){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_25137,_STAR_print_fn_STAR_25138,sb,base_path_25139))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25138;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25137;
}}catch (e25136){if((e25136 instanceof Error)){
var e = e25136;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25139], null));
} else {
var e = e25136;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25139))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25140){
var map__25141 = p__25140;
var map__25141__$1 = ((((!((map__25141 == null)))?(((((map__25141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25141):map__25141);
var opts = map__25141__$1;
var build_id = cljs.core.get.call(null,map__25141__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25141,map__25141__$1,opts,build_id){
return (function (p__25143){
var vec__25144 = p__25143;
var seq__25145 = cljs.core.seq.call(null,vec__25144);
var first__25146 = cljs.core.first.call(null,seq__25145);
var seq__25145__$1 = cljs.core.next.call(null,seq__25145);
var map__25147 = first__25146;
var map__25147__$1 = ((((!((map__25147 == null)))?(((((map__25147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25147):map__25147);
var msg = map__25147__$1;
var msg_name = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__25145__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25144,seq__25145,first__25146,seq__25145__$1,map__25147,map__25147__$1,msg,msg_name,_,map__25141,map__25141__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25144,seq__25145,first__25146,seq__25145__$1,map__25147,map__25147__$1,msg,msg_name,_,map__25141,map__25141__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25141,map__25141__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25149){
var vec__25150 = p__25149;
var seq__25151 = cljs.core.seq.call(null,vec__25150);
var first__25152 = cljs.core.first.call(null,seq__25151);
var seq__25151__$1 = cljs.core.next.call(null,seq__25151);
var map__25153 = first__25152;
var map__25153__$1 = ((((!((map__25153 == null)))?(((((map__25153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25153):map__25153);
var msg = map__25153__$1;
var msg_name = cljs.core.get.call(null,map__25153__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__25151__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25155){
var map__25156 = p__25155;
var map__25156__$1 = ((((!((map__25156 == null)))?(((((map__25156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25156):map__25156);
var on_compile_warning = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25156,map__25156__$1,on_compile_warning,on_compile_fail){
return (function (p__25158){
var vec__25159 = p__25158;
var seq__25160 = cljs.core.seq.call(null,vec__25159);
var first__25161 = cljs.core.first.call(null,seq__25160);
var seq__25160__$1 = cljs.core.next.call(null,seq__25160);
var map__25162 = first__25161;
var map__25162__$1 = ((((!((map__25162 == null)))?(((((map__25162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25162):map__25162);
var msg = map__25162__$1;
var msg_name = cljs.core.get.call(null,map__25162__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__25160__$1;
var pred__25164 = cljs.core._EQ_;
var expr__25165 = msg_name;
if(cljs.core.truth_(pred__25164.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25165))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25164.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25165))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25156,map__25156__$1,on_compile_warning,on_compile_fail))
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
var c__23190__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto__,msg_hist,msg_names,msg){
return (function (state_25254){
var state_val_25255 = (state_25254[(1)]);
if((state_val_25255 === (7))){
var inst_25174 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25174)){
var statearr_25256_25303 = state_25254__$1;
(statearr_25256_25303[(1)] = (8));

} else {
var statearr_25257_25304 = state_25254__$1;
(statearr_25257_25304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (20))){
var inst_25248 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25258_25305 = state_25254__$1;
(statearr_25258_25305[(2)] = inst_25248);

(statearr_25258_25305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (27))){
var inst_25244 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25259_25306 = state_25254__$1;
(statearr_25259_25306[(2)] = inst_25244);

(statearr_25259_25306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (1))){
var inst_25167 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25167)){
var statearr_25260_25307 = state_25254__$1;
(statearr_25260_25307[(1)] = (2));

} else {
var statearr_25261_25308 = state_25254__$1;
(statearr_25261_25308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (24))){
var inst_25246 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25262_25309 = state_25254__$1;
(statearr_25262_25309[(2)] = inst_25246);

(statearr_25262_25309[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (4))){
var inst_25252 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25254__$1,inst_25252);
} else {
if((state_val_25255 === (15))){
var inst_25250 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25263_25310 = state_25254__$1;
(statearr_25263_25310[(2)] = inst_25250);

(statearr_25263_25310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (21))){
var inst_25203 = (state_25254[(2)]);
var inst_25204 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25205 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25204);
var state_25254__$1 = (function (){var statearr_25264 = state_25254;
(statearr_25264[(7)] = inst_25203);

return statearr_25264;
})();
var statearr_25265_25311 = state_25254__$1;
(statearr_25265_25311[(2)] = inst_25205);

(statearr_25265_25311[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (31))){
var inst_25233 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25233)){
var statearr_25266_25312 = state_25254__$1;
(statearr_25266_25312[(1)] = (34));

} else {
var statearr_25267_25313 = state_25254__$1;
(statearr_25267_25313[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (32))){
var inst_25242 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25268_25314 = state_25254__$1;
(statearr_25268_25314[(2)] = inst_25242);

(statearr_25268_25314[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (33))){
var inst_25229 = (state_25254[(2)]);
var inst_25230 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25231 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25230);
var state_25254__$1 = (function (){var statearr_25269 = state_25254;
(statearr_25269[(8)] = inst_25229);

return statearr_25269;
})();
var statearr_25270_25315 = state_25254__$1;
(statearr_25270_25315[(2)] = inst_25231);

(statearr_25270_25315[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (13))){
var inst_25188 = figwheel.client.heads_up.clear.call(null);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(16),inst_25188);
} else {
if((state_val_25255 === (22))){
var inst_25209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25210 = figwheel.client.heads_up.append_warning_message.call(null,inst_25209);
var state_25254__$1 = state_25254;
var statearr_25271_25316 = state_25254__$1;
(statearr_25271_25316[(2)] = inst_25210);

(statearr_25271_25316[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (36))){
var inst_25240 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25272_25317 = state_25254__$1;
(statearr_25272_25317[(2)] = inst_25240);

(statearr_25272_25317[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (29))){
var inst_25220 = (state_25254[(2)]);
var inst_25221 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25222 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25221);
var state_25254__$1 = (function (){var statearr_25273 = state_25254;
(statearr_25273[(9)] = inst_25220);

return statearr_25273;
})();
var statearr_25274_25318 = state_25254__$1;
(statearr_25274_25318[(2)] = inst_25222);

(statearr_25274_25318[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (6))){
var inst_25169 = (state_25254[(10)]);
var state_25254__$1 = state_25254;
var statearr_25275_25319 = state_25254__$1;
(statearr_25275_25319[(2)] = inst_25169);

(statearr_25275_25319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (28))){
var inst_25216 = (state_25254[(2)]);
var inst_25217 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25218 = figwheel.client.heads_up.display_warning.call(null,inst_25217);
var state_25254__$1 = (function (){var statearr_25276 = state_25254;
(statearr_25276[(11)] = inst_25216);

return statearr_25276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(29),inst_25218);
} else {
if((state_val_25255 === (25))){
var inst_25214 = figwheel.client.heads_up.clear.call(null);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(28),inst_25214);
} else {
if((state_val_25255 === (34))){
var inst_25235 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(37),inst_25235);
} else {
if((state_val_25255 === (17))){
var inst_25194 = (state_25254[(2)]);
var inst_25195 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25196 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25195);
var state_25254__$1 = (function (){var statearr_25277 = state_25254;
(statearr_25277[(12)] = inst_25194);

return statearr_25277;
})();
var statearr_25278_25320 = state_25254__$1;
(statearr_25278_25320[(2)] = inst_25196);

(statearr_25278_25320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (3))){
var inst_25186 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25186)){
var statearr_25279_25321 = state_25254__$1;
(statearr_25279_25321[(1)] = (13));

} else {
var statearr_25280_25322 = state_25254__$1;
(statearr_25280_25322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (12))){
var inst_25182 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25281_25323 = state_25254__$1;
(statearr_25281_25323[(2)] = inst_25182);

(statearr_25281_25323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (2))){
var inst_25169 = (state_25254[(10)]);
var inst_25169__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25254__$1 = (function (){var statearr_25282 = state_25254;
(statearr_25282[(10)] = inst_25169__$1);

return statearr_25282;
})();
if(cljs.core.truth_(inst_25169__$1)){
var statearr_25283_25324 = state_25254__$1;
(statearr_25283_25324[(1)] = (5));

} else {
var statearr_25284_25325 = state_25254__$1;
(statearr_25284_25325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (23))){
var inst_25212 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25212)){
var statearr_25285_25326 = state_25254__$1;
(statearr_25285_25326[(1)] = (25));

} else {
var statearr_25286_25327 = state_25254__$1;
(statearr_25286_25327[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (35))){
var state_25254__$1 = state_25254;
var statearr_25287_25328 = state_25254__$1;
(statearr_25287_25328[(2)] = null);

(statearr_25287_25328[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (19))){
var inst_25207 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25207)){
var statearr_25288_25329 = state_25254__$1;
(statearr_25288_25329[(1)] = (22));

} else {
var statearr_25289_25330 = state_25254__$1;
(statearr_25289_25330[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (11))){
var inst_25178 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25290_25331 = state_25254__$1;
(statearr_25290_25331[(2)] = inst_25178);

(statearr_25290_25331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (9))){
var inst_25180 = figwheel.client.heads_up.clear.call(null);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(12),inst_25180);
} else {
if((state_val_25255 === (5))){
var inst_25171 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25254__$1 = state_25254;
var statearr_25291_25332 = state_25254__$1;
(statearr_25291_25332[(2)] = inst_25171);

(statearr_25291_25332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (14))){
var inst_25198 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25198)){
var statearr_25292_25333 = state_25254__$1;
(statearr_25292_25333[(1)] = (18));

} else {
var statearr_25293_25334 = state_25254__$1;
(statearr_25293_25334[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (26))){
var inst_25224 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25254__$1 = state_25254;
if(cljs.core.truth_(inst_25224)){
var statearr_25294_25335 = state_25254__$1;
(statearr_25294_25335[(1)] = (30));

} else {
var statearr_25295_25336 = state_25254__$1;
(statearr_25295_25336[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (16))){
var inst_25190 = (state_25254[(2)]);
var inst_25191 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25192 = figwheel.client.heads_up.display_exception.call(null,inst_25191);
var state_25254__$1 = (function (){var statearr_25296 = state_25254;
(statearr_25296[(13)] = inst_25190);

return statearr_25296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(17),inst_25192);
} else {
if((state_val_25255 === (30))){
var inst_25226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25227 = figwheel.client.heads_up.display_warning.call(null,inst_25226);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(33),inst_25227);
} else {
if((state_val_25255 === (10))){
var inst_25184 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25297_25337 = state_25254__$1;
(statearr_25297_25337[(2)] = inst_25184);

(statearr_25297_25337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (18))){
var inst_25200 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25201 = figwheel.client.heads_up.display_exception.call(null,inst_25200);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(21),inst_25201);
} else {
if((state_val_25255 === (37))){
var inst_25237 = (state_25254[(2)]);
var state_25254__$1 = state_25254;
var statearr_25298_25338 = state_25254__$1;
(statearr_25298_25338[(2)] = inst_25237);

(statearr_25298_25338[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25255 === (8))){
var inst_25176 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25254__$1 = state_25254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25254__$1,(11),inst_25176);
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
});})(c__23190__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23167__auto__,c__23190__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto____0 = (function (){
var statearr_25299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25299[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto__);

(statearr_25299[(1)] = (1));

return statearr_25299;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto____1 = (function (state_25254){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_25254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e25300){if((e25300 instanceof Object)){
var ex__23171__auto__ = e25300;
var statearr_25301_25339 = state_25254;
(statearr_25301_25339[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25340 = state_25254;
state_25254 = G__25340;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto__ = function(state_25254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto____1.call(this,state_25254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto__,msg_hist,msg_names,msg))
})();
var state__23192__auto__ = (function (){var statearr_25302 = f__23191__auto__.call(null);
(statearr_25302[(6)] = c__23190__auto__);

return statearr_25302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto__,msg_hist,msg_names,msg))
);

return c__23190__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23190__auto___25369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto___25369,ch){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto___25369,ch){
return (function (state_25355){
var state_val_25356 = (state_25355[(1)]);
if((state_val_25356 === (1))){
var state_25355__$1 = state_25355;
var statearr_25357_25370 = state_25355__$1;
(statearr_25357_25370[(2)] = null);

(statearr_25357_25370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (2))){
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25355__$1,(4),ch);
} else {
if((state_val_25356 === (3))){
var inst_25353 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25355__$1,inst_25353);
} else {
if((state_val_25356 === (4))){
var inst_25343 = (state_25355[(7)]);
var inst_25343__$1 = (state_25355[(2)]);
var state_25355__$1 = (function (){var statearr_25358 = state_25355;
(statearr_25358[(7)] = inst_25343__$1);

return statearr_25358;
})();
if(cljs.core.truth_(inst_25343__$1)){
var statearr_25359_25371 = state_25355__$1;
(statearr_25359_25371[(1)] = (5));

} else {
var statearr_25360_25372 = state_25355__$1;
(statearr_25360_25372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (5))){
var inst_25343 = (state_25355[(7)]);
var inst_25345 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25343);
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25355__$1,(8),inst_25345);
} else {
if((state_val_25356 === (6))){
var state_25355__$1 = state_25355;
var statearr_25361_25373 = state_25355__$1;
(statearr_25361_25373[(2)] = null);

(statearr_25361_25373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (7))){
var inst_25351 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25362_25374 = state_25355__$1;
(statearr_25362_25374[(2)] = inst_25351);

(statearr_25362_25374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (8))){
var inst_25347 = (state_25355[(2)]);
var state_25355__$1 = (function (){var statearr_25363 = state_25355;
(statearr_25363[(8)] = inst_25347);

return statearr_25363;
})();
var statearr_25364_25375 = state_25355__$1;
(statearr_25364_25375[(2)] = null);

(statearr_25364_25375[(1)] = (2));


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
});})(c__23190__auto___25369,ch))
;
return ((function (switch__23167__auto__,c__23190__auto___25369,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23168__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23168__auto____0 = (function (){
var statearr_25365 = [null,null,null,null,null,null,null,null,null];
(statearr_25365[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23168__auto__);

(statearr_25365[(1)] = (1));

return statearr_25365;
});
var figwheel$client$heads_up_plugin_$_state_machine__23168__auto____1 = (function (state_25355){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_25355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e25366){if((e25366 instanceof Object)){
var ex__23171__auto__ = e25366;
var statearr_25367_25376 = state_25355;
(statearr_25367_25376[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25377 = state_25355;
state_25355 = G__25377;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23168__auto__ = function(state_25355){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23168__auto____1.call(this,state_25355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23168__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23168__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto___25369,ch))
})();
var state__23192__auto__ = (function (){var statearr_25368 = f__23191__auto__.call(null);
(statearr_25368[(6)] = c__23190__auto___25369);

return statearr_25368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto___25369,ch))
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
var c__23190__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto__){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto__){
return (function (state_25383){
var state_val_25384 = (state_25383[(1)]);
if((state_val_25384 === (1))){
var inst_25378 = cljs.core.async.timeout.call(null,(3000));
var state_25383__$1 = state_25383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25383__$1,(2),inst_25378);
} else {
if((state_val_25384 === (2))){
var inst_25380 = (state_25383[(2)]);
var inst_25381 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25383__$1 = (function (){var statearr_25385 = state_25383;
(statearr_25385[(7)] = inst_25380);

return statearr_25385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25383__$1,inst_25381);
} else {
return null;
}
}
});})(c__23190__auto__))
;
return ((function (switch__23167__auto__,c__23190__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23168__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23168__auto____0 = (function (){
var statearr_25386 = [null,null,null,null,null,null,null,null];
(statearr_25386[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23168__auto__);

(statearr_25386[(1)] = (1));

return statearr_25386;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23168__auto____1 = (function (state_25383){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_25383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e25387){if((e25387 instanceof Object)){
var ex__23171__auto__ = e25387;
var statearr_25388_25390 = state_25383;
(statearr_25388_25390[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25391 = state_25383;
state_25383 = G__25391;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23168__auto__ = function(state_25383){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23168__auto____1.call(this,state_25383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23168__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23168__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto__))
})();
var state__23192__auto__ = (function (){var statearr_25389 = f__23191__auto__.call(null);
(statearr_25389[(6)] = c__23190__auto__);

return statearr_25389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto__))
);

return c__23190__auto__;
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
var c__23190__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto__,figwheel_version,temp__5457__auto__){
return (function (state_25398){
var state_val_25399 = (state_25398[(1)]);
if((state_val_25399 === (1))){
var inst_25392 = cljs.core.async.timeout.call(null,(2000));
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25398__$1,(2),inst_25392);
} else {
if((state_val_25399 === (2))){
var inst_25394 = (state_25398[(2)]);
var inst_25395 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_25396 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_25395);
var state_25398__$1 = (function (){var statearr_25400 = state_25398;
(statearr_25400[(7)] = inst_25394);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25398__$1,inst_25396);
} else {
return null;
}
}
});})(c__23190__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23167__auto__,c__23190__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto____0 = (function (){
var statearr_25401 = [null,null,null,null,null,null,null,null];
(statearr_25401[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto__);

(statearr_25401[(1)] = (1));

return statearr_25401;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto____1 = (function (state_25398){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_25398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e25402){if((e25402 instanceof Object)){
var ex__23171__auto__ = e25402;
var statearr_25403_25405 = state_25398;
(statearr_25403_25405[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25406 = state_25398;
state_25398 = G__25406;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto__ = function(state_25398){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto____1.call(this,state_25398);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23192__auto__ = (function (){var statearr_25404 = f__23191__auto__.call(null);
(statearr_25404[(6)] = c__23190__auto__);

return statearr_25404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto__,figwheel_version,temp__5457__auto__))
);

return c__23190__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__25407){
var map__25408 = p__25407;
var map__25408__$1 = ((((!((map__25408 == null)))?(((((map__25408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25408):map__25408);
var file = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__25410 = "";
var G__25410__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25410),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__25410);
var G__25410__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25410__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__25410__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25410__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__25410__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25411){
var map__25412 = p__25411;
var map__25412__$1 = ((((!((map__25412 == null)))?(((((map__25412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25412):map__25412);
var ed = map__25412__$1;
var formatted_exception = cljs.core.get.call(null,map__25412__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25412__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25412__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25414_25418 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25415_25419 = null;
var count__25416_25420 = (0);
var i__25417_25421 = (0);
while(true){
if((i__25417_25421 < count__25416_25420)){
var msg_25422 = cljs.core._nth.call(null,chunk__25415_25419,i__25417_25421);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25422);


var G__25423 = seq__25414_25418;
var G__25424 = chunk__25415_25419;
var G__25425 = count__25416_25420;
var G__25426 = (i__25417_25421 + (1));
seq__25414_25418 = G__25423;
chunk__25415_25419 = G__25424;
count__25416_25420 = G__25425;
i__25417_25421 = G__25426;
continue;
} else {
var temp__5457__auto___25427 = cljs.core.seq.call(null,seq__25414_25418);
if(temp__5457__auto___25427){
var seq__25414_25428__$1 = temp__5457__auto___25427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25414_25428__$1)){
var c__4319__auto___25429 = cljs.core.chunk_first.call(null,seq__25414_25428__$1);
var G__25430 = cljs.core.chunk_rest.call(null,seq__25414_25428__$1);
var G__25431 = c__4319__auto___25429;
var G__25432 = cljs.core.count.call(null,c__4319__auto___25429);
var G__25433 = (0);
seq__25414_25418 = G__25430;
chunk__25415_25419 = G__25431;
count__25416_25420 = G__25432;
i__25417_25421 = G__25433;
continue;
} else {
var msg_25434 = cljs.core.first.call(null,seq__25414_25428__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25434);


var G__25435 = cljs.core.next.call(null,seq__25414_25428__$1);
var G__25436 = null;
var G__25437 = (0);
var G__25438 = (0);
seq__25414_25418 = G__25435;
chunk__25415_25419 = G__25436;
count__25416_25420 = G__25437;
i__25417_25421 = G__25438;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25439){
var map__25440 = p__25439;
var map__25440__$1 = ((((!((map__25440 == null)))?(((((map__25440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25440):map__25440);
var w = map__25440__$1;
var message = cljs.core.get.call(null,map__25440__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25442 = cljs.core.seq.call(null,plugins);
var chunk__25443 = null;
var count__25444 = (0);
var i__25445 = (0);
while(true){
if((i__25445 < count__25444)){
var vec__25446 = cljs.core._nth.call(null,chunk__25443,i__25445);
var k = cljs.core.nth.call(null,vec__25446,(0),null);
var plugin = cljs.core.nth.call(null,vec__25446,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25452 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25442,chunk__25443,count__25444,i__25445,pl_25452,vec__25446,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25452.call(null,msg_hist);
});})(seq__25442,chunk__25443,count__25444,i__25445,pl_25452,vec__25446,k,plugin))
);
} else {
}


var G__25453 = seq__25442;
var G__25454 = chunk__25443;
var G__25455 = count__25444;
var G__25456 = (i__25445 + (1));
seq__25442 = G__25453;
chunk__25443 = G__25454;
count__25444 = G__25455;
i__25445 = G__25456;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25442);
if(temp__5457__auto__){
var seq__25442__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25442__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25442__$1);
var G__25457 = cljs.core.chunk_rest.call(null,seq__25442__$1);
var G__25458 = c__4319__auto__;
var G__25459 = cljs.core.count.call(null,c__4319__auto__);
var G__25460 = (0);
seq__25442 = G__25457;
chunk__25443 = G__25458;
count__25444 = G__25459;
i__25445 = G__25460;
continue;
} else {
var vec__25449 = cljs.core.first.call(null,seq__25442__$1);
var k = cljs.core.nth.call(null,vec__25449,(0),null);
var plugin = cljs.core.nth.call(null,vec__25449,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25461 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25442,chunk__25443,count__25444,i__25445,pl_25461,vec__25449,k,plugin,seq__25442__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25461.call(null,msg_hist);
});})(seq__25442,chunk__25443,count__25444,i__25445,pl_25461,vec__25449,k,plugin,seq__25442__$1,temp__5457__auto__))
);
} else {
}


var G__25462 = cljs.core.next.call(null,seq__25442__$1);
var G__25463 = null;
var G__25464 = (0);
var G__25465 = (0);
seq__25442 = G__25462;
chunk__25443 = G__25463;
count__25444 = G__25464;
i__25445 = G__25465;
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
var G__25467 = arguments.length;
switch (G__25467) {
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

var seq__25468_25473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__25469_25474 = null;
var count__25470_25475 = (0);
var i__25471_25476 = (0);
while(true){
if((i__25471_25476 < count__25470_25475)){
var msg_25477 = cljs.core._nth.call(null,chunk__25469_25474,i__25471_25476);
figwheel.client.socket.handle_incoming_message.call(null,msg_25477);


var G__25478 = seq__25468_25473;
var G__25479 = chunk__25469_25474;
var G__25480 = count__25470_25475;
var G__25481 = (i__25471_25476 + (1));
seq__25468_25473 = G__25478;
chunk__25469_25474 = G__25479;
count__25470_25475 = G__25480;
i__25471_25476 = G__25481;
continue;
} else {
var temp__5457__auto___25482 = cljs.core.seq.call(null,seq__25468_25473);
if(temp__5457__auto___25482){
var seq__25468_25483__$1 = temp__5457__auto___25482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25468_25483__$1)){
var c__4319__auto___25484 = cljs.core.chunk_first.call(null,seq__25468_25483__$1);
var G__25485 = cljs.core.chunk_rest.call(null,seq__25468_25483__$1);
var G__25486 = c__4319__auto___25484;
var G__25487 = cljs.core.count.call(null,c__4319__auto___25484);
var G__25488 = (0);
seq__25468_25473 = G__25485;
chunk__25469_25474 = G__25486;
count__25470_25475 = G__25487;
i__25471_25476 = G__25488;
continue;
} else {
var msg_25489 = cljs.core.first.call(null,seq__25468_25483__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_25489);


var G__25490 = cljs.core.next.call(null,seq__25468_25483__$1);
var G__25491 = null;
var G__25492 = (0);
var G__25493 = (0);
seq__25468_25473 = G__25490;
chunk__25469_25474 = G__25491;
count__25470_25475 = G__25492;
i__25471_25476 = G__25493;
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
var len__4499__auto___25498 = arguments.length;
var i__4500__auto___25499 = (0);
while(true){
if((i__4500__auto___25499 < len__4499__auto___25498)){
args__4502__auto__.push((arguments[i__4500__auto___25499]));

var G__25500 = (i__4500__auto___25499 + (1));
i__4500__auto___25499 = G__25500;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25495){
var map__25496 = p__25495;
var map__25496__$1 = ((((!((map__25496 == null)))?(((((map__25496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25496):map__25496);
var opts = map__25496__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25494){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25494));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e25501){if((e25501 instanceof Error)){
var e = e25501;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e25501;

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
return (function (p__25502){
var map__25503 = p__25502;
var map__25503__$1 = ((((!((map__25503 == null)))?(((((map__25503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25503):map__25503);
var msg_name = cljs.core.get.call(null,map__25503__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1673484855807
