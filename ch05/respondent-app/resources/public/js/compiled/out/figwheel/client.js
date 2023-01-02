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
}catch (e31819){if((e31819 instanceof Error)){
var e = e31819;
return "Error: Unable to stringify";
} else {
throw e31819;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31822 = arguments.length;
switch (G__31822) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31820_SHARP_){
if(typeof p1__31820_SHARP_ === 'string'){
return p1__31820_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31820_SHARP_);
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
var len__4499__auto___31825 = arguments.length;
var i__4500__auto___31826 = (0);
while(true){
if((i__4500__auto___31826 < len__4499__auto___31825)){
args__4502__auto__.push((arguments[i__4500__auto___31826]));

var G__31827 = (i__4500__auto___31826 + (1));
i__4500__auto___31826 = G__31827;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31824){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31824));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31829 = arguments.length;
var i__4500__auto___31830 = (0);
while(true){
if((i__4500__auto___31830 < len__4499__auto___31829)){
args__4502__auto__.push((arguments[i__4500__auto___31830]));

var G__31831 = (i__4500__auto___31830 + (1));
i__4500__auto___31830 = G__31831;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31828){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31828));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31832){
var map__31833 = p__31832;
var map__31833__$1 = ((((!((map__31833 == null)))?(((((map__31833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31833):map__31833);
var message = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23152__auto___31912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___31912,ch){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___31912,ch){
return (function (state_31884){
var state_val_31885 = (state_31884[(1)]);
if((state_val_31885 === (7))){
var inst_31880 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31886_31913 = state_31884__$1;
(statearr_31886_31913[(2)] = inst_31880);

(statearr_31886_31913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (1))){
var state_31884__$1 = state_31884;
var statearr_31887_31914 = state_31884__$1;
(statearr_31887_31914[(2)] = null);

(statearr_31887_31914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (4))){
var inst_31837 = (state_31884[(7)]);
var inst_31837__$1 = (state_31884[(2)]);
var state_31884__$1 = (function (){var statearr_31888 = state_31884;
(statearr_31888[(7)] = inst_31837__$1);

return statearr_31888;
})();
if(cljs.core.truth_(inst_31837__$1)){
var statearr_31889_31915 = state_31884__$1;
(statearr_31889_31915[(1)] = (5));

} else {
var statearr_31890_31916 = state_31884__$1;
(statearr_31890_31916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (15))){
var inst_31844 = (state_31884[(8)]);
var inst_31859 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31844);
var inst_31860 = cljs.core.first.call(null,inst_31859);
var inst_31861 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31860);
var inst_31862 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31861)].join('');
var inst_31863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31862);
var state_31884__$1 = state_31884;
var statearr_31891_31917 = state_31884__$1;
(statearr_31891_31917[(2)] = inst_31863);

(statearr_31891_31917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (13))){
var inst_31868 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31892_31918 = state_31884__$1;
(statearr_31892_31918[(2)] = inst_31868);

(statearr_31892_31918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (6))){
var state_31884__$1 = state_31884;
var statearr_31893_31919 = state_31884__$1;
(statearr_31893_31919[(2)] = null);

(statearr_31893_31919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (17))){
var inst_31866 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31894_31920 = state_31884__$1;
(statearr_31894_31920[(2)] = inst_31866);

(statearr_31894_31920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (3))){
var inst_31882 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31884__$1,inst_31882);
} else {
if((state_val_31885 === (12))){
var inst_31843 = (state_31884[(9)]);
var inst_31857 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31843,opts);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31857)){
var statearr_31895_31921 = state_31884__$1;
(statearr_31895_31921[(1)] = (15));

} else {
var statearr_31896_31922 = state_31884__$1;
(statearr_31896_31922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (2))){
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(4),ch);
} else {
if((state_val_31885 === (11))){
var inst_31844 = (state_31884[(8)]);
var inst_31849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31850 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31844);
var inst_31851 = cljs.core.async.timeout.call(null,(1000));
var inst_31852 = [inst_31850,inst_31851];
var inst_31853 = (new cljs.core.PersistentVector(null,2,(5),inst_31849,inst_31852,null));
var state_31884__$1 = state_31884;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31884__$1,(14),inst_31853);
} else {
if((state_val_31885 === (9))){
var inst_31844 = (state_31884[(8)]);
var inst_31870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31871 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31844);
var inst_31872 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31871);
var inst_31873 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31872)].join('');
var inst_31874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31873);
var state_31884__$1 = (function (){var statearr_31897 = state_31884;
(statearr_31897[(10)] = inst_31870);

return statearr_31897;
})();
var statearr_31898_31923 = state_31884__$1;
(statearr_31898_31923[(2)] = inst_31874);

(statearr_31898_31923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (5))){
var inst_31837 = (state_31884[(7)]);
var inst_31839 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31840 = (new cljs.core.PersistentArrayMap(null,2,inst_31839,null));
var inst_31841 = (new cljs.core.PersistentHashSet(null,inst_31840,null));
var inst_31842 = figwheel.client.focus_msgs.call(null,inst_31841,inst_31837);
var inst_31843 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31842);
var inst_31844 = cljs.core.first.call(null,inst_31842);
var inst_31845 = figwheel.client.autoload_QMARK_.call(null);
var state_31884__$1 = (function (){var statearr_31899 = state_31884;
(statearr_31899[(8)] = inst_31844);

(statearr_31899[(9)] = inst_31843);

return statearr_31899;
})();
if(cljs.core.truth_(inst_31845)){
var statearr_31900_31924 = state_31884__$1;
(statearr_31900_31924[(1)] = (8));

} else {
var statearr_31901_31925 = state_31884__$1;
(statearr_31901_31925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (14))){
var inst_31855 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31902_31926 = state_31884__$1;
(statearr_31902_31926[(2)] = inst_31855);

(statearr_31902_31926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (16))){
var state_31884__$1 = state_31884;
var statearr_31903_31927 = state_31884__$1;
(statearr_31903_31927[(2)] = null);

(statearr_31903_31927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (10))){
var inst_31876 = (state_31884[(2)]);
var state_31884__$1 = (function (){var statearr_31904 = state_31884;
(statearr_31904[(11)] = inst_31876);

return statearr_31904;
})();
var statearr_31905_31928 = state_31884__$1;
(statearr_31905_31928[(2)] = null);

(statearr_31905_31928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (8))){
var inst_31843 = (state_31884[(9)]);
var inst_31847 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31843,opts);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31847)){
var statearr_31906_31929 = state_31884__$1;
(statearr_31906_31929[(1)] = (11));

} else {
var statearr_31907_31930 = state_31884__$1;
(statearr_31907_31930[(1)] = (12));

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
});})(c__23152__auto___31912,ch))
;
return ((function (switch__23062__auto__,c__23152__auto___31912,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_31908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31908[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__);

(statearr_31908[(1)] = (1));

return statearr_31908;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1 = (function (state_31884){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_31884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e31909){if((e31909 instanceof Object)){
var ex__23066__auto__ = e31909;
var statearr_31910_31931 = state_31884;
(statearr_31910_31931[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31932 = state_31884;
state_31884 = G__31932;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__ = function(state_31884){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1.call(this,state_31884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___31912,ch))
})();
var state__23154__auto__ = (function (){var statearr_31911 = f__23153__auto__.call(null);
(statearr_31911[(6)] = c__23152__auto___31912);

return statearr_31911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___31912,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31933_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31933_SHARP_));
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
var base_path_31937 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31937){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31935 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31936 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31935,_STAR_print_fn_STAR_31936,sb,base_path_31937){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31935,_STAR_print_fn_STAR_31936,sb,base_path_31937))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31936;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31935;
}}catch (e31934){if((e31934 instanceof Error)){
var e = e31934;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31937], null));
} else {
var e = e31934;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31937))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31938){
var map__31939 = p__31938;
var map__31939__$1 = ((((!((map__31939 == null)))?(((((map__31939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31939):map__31939);
var opts = map__31939__$1;
var build_id = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31939,map__31939__$1,opts,build_id){
return (function (p__31941){
var vec__31942 = p__31941;
var seq__31943 = cljs.core.seq.call(null,vec__31942);
var first__31944 = cljs.core.first.call(null,seq__31943);
var seq__31943__$1 = cljs.core.next.call(null,seq__31943);
var map__31945 = first__31944;
var map__31945__$1 = ((((!((map__31945 == null)))?(((((map__31945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);
var msg = map__31945__$1;
var msg_name = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31943__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31942,seq__31943,first__31944,seq__31943__$1,map__31945,map__31945__$1,msg,msg_name,_,map__31939,map__31939__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31942,seq__31943,first__31944,seq__31943__$1,map__31945,map__31945__$1,msg,msg_name,_,map__31939,map__31939__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31939,map__31939__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31947){
var vec__31948 = p__31947;
var seq__31949 = cljs.core.seq.call(null,vec__31948);
var first__31950 = cljs.core.first.call(null,seq__31949);
var seq__31949__$1 = cljs.core.next.call(null,seq__31949);
var map__31951 = first__31950;
var map__31951__$1 = ((((!((map__31951 == null)))?(((((map__31951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31951):map__31951);
var msg = map__31951__$1;
var msg_name = cljs.core.get.call(null,map__31951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31949__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31953){
var map__31954 = p__31953;
var map__31954__$1 = ((((!((map__31954 == null)))?(((((map__31954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31954):map__31954);
var on_compile_warning = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31954,map__31954__$1,on_compile_warning,on_compile_fail){
return (function (p__31956){
var vec__31957 = p__31956;
var seq__31958 = cljs.core.seq.call(null,vec__31957);
var first__31959 = cljs.core.first.call(null,seq__31958);
var seq__31958__$1 = cljs.core.next.call(null,seq__31958);
var map__31960 = first__31959;
var map__31960__$1 = ((((!((map__31960 == null)))?(((((map__31960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31960):map__31960);
var msg = map__31960__$1;
var msg_name = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31958__$1;
var pred__31962 = cljs.core._EQ_;
var expr__31963 = msg_name;
if(cljs.core.truth_(pred__31962.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31963))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31962.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31963))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31954,map__31954__$1,on_compile_warning,on_compile_fail))
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
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,msg_hist,msg_names,msg){
return (function (state_32052){
var state_val_32053 = (state_32052[(1)]);
if((state_val_32053 === (7))){
var inst_31972 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_31972)){
var statearr_32054_32101 = state_32052__$1;
(statearr_32054_32101[(1)] = (8));

} else {
var statearr_32055_32102 = state_32052__$1;
(statearr_32055_32102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (20))){
var inst_32046 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32056_32103 = state_32052__$1;
(statearr_32056_32103[(2)] = inst_32046);

(statearr_32056_32103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (27))){
var inst_32042 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32057_32104 = state_32052__$1;
(statearr_32057_32104[(2)] = inst_32042);

(statearr_32057_32104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (1))){
var inst_31965 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_31965)){
var statearr_32058_32105 = state_32052__$1;
(statearr_32058_32105[(1)] = (2));

} else {
var statearr_32059_32106 = state_32052__$1;
(statearr_32059_32106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (24))){
var inst_32044 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32060_32107 = state_32052__$1;
(statearr_32060_32107[(2)] = inst_32044);

(statearr_32060_32107[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (4))){
var inst_32050 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32052__$1,inst_32050);
} else {
if((state_val_32053 === (15))){
var inst_32048 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32061_32108 = state_32052__$1;
(statearr_32061_32108[(2)] = inst_32048);

(statearr_32061_32108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (21))){
var inst_32001 = (state_32052[(2)]);
var inst_32002 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32003 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32002);
var state_32052__$1 = (function (){var statearr_32062 = state_32052;
(statearr_32062[(7)] = inst_32001);

return statearr_32062;
})();
var statearr_32063_32109 = state_32052__$1;
(statearr_32063_32109[(2)] = inst_32003);

(statearr_32063_32109[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (31))){
var inst_32031 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_32031)){
var statearr_32064_32110 = state_32052__$1;
(statearr_32064_32110[(1)] = (34));

} else {
var statearr_32065_32111 = state_32052__$1;
(statearr_32065_32111[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (32))){
var inst_32040 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32066_32112 = state_32052__$1;
(statearr_32066_32112[(2)] = inst_32040);

(statearr_32066_32112[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (33))){
var inst_32027 = (state_32052[(2)]);
var inst_32028 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32029 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32028);
var state_32052__$1 = (function (){var statearr_32067 = state_32052;
(statearr_32067[(8)] = inst_32027);

return statearr_32067;
})();
var statearr_32068_32113 = state_32052__$1;
(statearr_32068_32113[(2)] = inst_32029);

(statearr_32068_32113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (13))){
var inst_31986 = figwheel.client.heads_up.clear.call(null);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(16),inst_31986);
} else {
if((state_val_32053 === (22))){
var inst_32007 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32008 = figwheel.client.heads_up.append_warning_message.call(null,inst_32007);
var state_32052__$1 = state_32052;
var statearr_32069_32114 = state_32052__$1;
(statearr_32069_32114[(2)] = inst_32008);

(statearr_32069_32114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (36))){
var inst_32038 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32070_32115 = state_32052__$1;
(statearr_32070_32115[(2)] = inst_32038);

(statearr_32070_32115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (29))){
var inst_32018 = (state_32052[(2)]);
var inst_32019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32020 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32019);
var state_32052__$1 = (function (){var statearr_32071 = state_32052;
(statearr_32071[(9)] = inst_32018);

return statearr_32071;
})();
var statearr_32072_32116 = state_32052__$1;
(statearr_32072_32116[(2)] = inst_32020);

(statearr_32072_32116[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (6))){
var inst_31967 = (state_32052[(10)]);
var state_32052__$1 = state_32052;
var statearr_32073_32117 = state_32052__$1;
(statearr_32073_32117[(2)] = inst_31967);

(statearr_32073_32117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (28))){
var inst_32014 = (state_32052[(2)]);
var inst_32015 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32016 = figwheel.client.heads_up.display_warning.call(null,inst_32015);
var state_32052__$1 = (function (){var statearr_32074 = state_32052;
(statearr_32074[(11)] = inst_32014);

return statearr_32074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(29),inst_32016);
} else {
if((state_val_32053 === (25))){
var inst_32012 = figwheel.client.heads_up.clear.call(null);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(28),inst_32012);
} else {
if((state_val_32053 === (34))){
var inst_32033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(37),inst_32033);
} else {
if((state_val_32053 === (17))){
var inst_31992 = (state_32052[(2)]);
var inst_31993 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31994 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31993);
var state_32052__$1 = (function (){var statearr_32075 = state_32052;
(statearr_32075[(12)] = inst_31992);

return statearr_32075;
})();
var statearr_32076_32118 = state_32052__$1;
(statearr_32076_32118[(2)] = inst_31994);

(statearr_32076_32118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (3))){
var inst_31984 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_31984)){
var statearr_32077_32119 = state_32052__$1;
(statearr_32077_32119[(1)] = (13));

} else {
var statearr_32078_32120 = state_32052__$1;
(statearr_32078_32120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (12))){
var inst_31980 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32079_32121 = state_32052__$1;
(statearr_32079_32121[(2)] = inst_31980);

(statearr_32079_32121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (2))){
var inst_31967 = (state_32052[(10)]);
var inst_31967__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32052__$1 = (function (){var statearr_32080 = state_32052;
(statearr_32080[(10)] = inst_31967__$1);

return statearr_32080;
})();
if(cljs.core.truth_(inst_31967__$1)){
var statearr_32081_32122 = state_32052__$1;
(statearr_32081_32122[(1)] = (5));

} else {
var statearr_32082_32123 = state_32052__$1;
(statearr_32082_32123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (23))){
var inst_32010 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_32010)){
var statearr_32083_32124 = state_32052__$1;
(statearr_32083_32124[(1)] = (25));

} else {
var statearr_32084_32125 = state_32052__$1;
(statearr_32084_32125[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (35))){
var state_32052__$1 = state_32052;
var statearr_32085_32126 = state_32052__$1;
(statearr_32085_32126[(2)] = null);

(statearr_32085_32126[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (19))){
var inst_32005 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_32005)){
var statearr_32086_32127 = state_32052__$1;
(statearr_32086_32127[(1)] = (22));

} else {
var statearr_32087_32128 = state_32052__$1;
(statearr_32087_32128[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (11))){
var inst_31976 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32088_32129 = state_32052__$1;
(statearr_32088_32129[(2)] = inst_31976);

(statearr_32088_32129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (9))){
var inst_31978 = figwheel.client.heads_up.clear.call(null);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(12),inst_31978);
} else {
if((state_val_32053 === (5))){
var inst_31969 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32052__$1 = state_32052;
var statearr_32089_32130 = state_32052__$1;
(statearr_32089_32130[(2)] = inst_31969);

(statearr_32089_32130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (14))){
var inst_31996 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_31996)){
var statearr_32090_32131 = state_32052__$1;
(statearr_32090_32131[(1)] = (18));

} else {
var statearr_32091_32132 = state_32052__$1;
(statearr_32091_32132[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (26))){
var inst_32022 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_32022)){
var statearr_32092_32133 = state_32052__$1;
(statearr_32092_32133[(1)] = (30));

} else {
var statearr_32093_32134 = state_32052__$1;
(statearr_32093_32134[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (16))){
var inst_31988 = (state_32052[(2)]);
var inst_31989 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31990 = figwheel.client.heads_up.display_exception.call(null,inst_31989);
var state_32052__$1 = (function (){var statearr_32094 = state_32052;
(statearr_32094[(13)] = inst_31988);

return statearr_32094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(17),inst_31990);
} else {
if((state_val_32053 === (30))){
var inst_32024 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32025 = figwheel.client.heads_up.display_warning.call(null,inst_32024);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(33),inst_32025);
} else {
if((state_val_32053 === (10))){
var inst_31982 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32095_32135 = state_32052__$1;
(statearr_32095_32135[(2)] = inst_31982);

(statearr_32095_32135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (18))){
var inst_31998 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31999 = figwheel.client.heads_up.display_exception.call(null,inst_31998);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(21),inst_31999);
} else {
if((state_val_32053 === (37))){
var inst_32035 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32096_32136 = state_32052__$1;
(statearr_32096_32136[(2)] = inst_32035);

(statearr_32096_32136[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32053 === (8))){
var inst_31974 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(11),inst_31974);
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
});})(c__23152__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23062__auto__,c__23152__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0 = (function (){
var statearr_32097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32097[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__);

(statearr_32097[(1)] = (1));

return statearr_32097;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1 = (function (state_32052){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_32052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e32098){if((e32098 instanceof Object)){
var ex__23066__auto__ = e32098;
var statearr_32099_32137 = state_32052;
(statearr_32099_32137[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32138 = state_32052;
state_32052 = G__32138;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__ = function(state_32052){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1.call(this,state_32052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,msg_hist,msg_names,msg))
})();
var state__23154__auto__ = (function (){var statearr_32100 = f__23153__auto__.call(null);
(statearr_32100[(6)] = c__23152__auto__);

return statearr_32100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,msg_hist,msg_names,msg))
);

return c__23152__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23152__auto___32167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___32167,ch){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___32167,ch){
return (function (state_32153){
var state_val_32154 = (state_32153[(1)]);
if((state_val_32154 === (1))){
var state_32153__$1 = state_32153;
var statearr_32155_32168 = state_32153__$1;
(statearr_32155_32168[(2)] = null);

(statearr_32155_32168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (2))){
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32153__$1,(4),ch);
} else {
if((state_val_32154 === (3))){
var inst_32151 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32153__$1,inst_32151);
} else {
if((state_val_32154 === (4))){
var inst_32141 = (state_32153[(7)]);
var inst_32141__$1 = (state_32153[(2)]);
var state_32153__$1 = (function (){var statearr_32156 = state_32153;
(statearr_32156[(7)] = inst_32141__$1);

return statearr_32156;
})();
if(cljs.core.truth_(inst_32141__$1)){
var statearr_32157_32169 = state_32153__$1;
(statearr_32157_32169[(1)] = (5));

} else {
var statearr_32158_32170 = state_32153__$1;
(statearr_32158_32170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (5))){
var inst_32141 = (state_32153[(7)]);
var inst_32143 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32141);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32153__$1,(8),inst_32143);
} else {
if((state_val_32154 === (6))){
var state_32153__$1 = state_32153;
var statearr_32159_32171 = state_32153__$1;
(statearr_32159_32171[(2)] = null);

(statearr_32159_32171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (7))){
var inst_32149 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32160_32172 = state_32153__$1;
(statearr_32160_32172[(2)] = inst_32149);

(statearr_32160_32172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (8))){
var inst_32145 = (state_32153[(2)]);
var state_32153__$1 = (function (){var statearr_32161 = state_32153;
(statearr_32161[(8)] = inst_32145);

return statearr_32161;
})();
var statearr_32162_32173 = state_32153__$1;
(statearr_32162_32173[(2)] = null);

(statearr_32162_32173[(1)] = (2));


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
});})(c__23152__auto___32167,ch))
;
return ((function (switch__23062__auto__,c__23152__auto___32167,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_32163 = [null,null,null,null,null,null,null,null,null];
(statearr_32163[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23063__auto__);

(statearr_32163[(1)] = (1));

return statearr_32163;
});
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1 = (function (state_32153){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_32153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e32164){if((e32164 instanceof Object)){
var ex__23066__auto__ = e32164;
var statearr_32165_32174 = state_32153;
(statearr_32165_32174[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32175 = state_32153;
state_32153 = G__32175;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__ = function(state_32153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1.call(this,state_32153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___32167,ch))
})();
var state__23154__auto__ = (function (){var statearr_32166 = f__23153__auto__.call(null);
(statearr_32166[(6)] = c__23152__auto___32167);

return statearr_32166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___32167,ch))
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
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_32181){
var state_val_32182 = (state_32181[(1)]);
if((state_val_32182 === (1))){
var inst_32176 = cljs.core.async.timeout.call(null,(3000));
var state_32181__$1 = state_32181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32181__$1,(2),inst_32176);
} else {
if((state_val_32182 === (2))){
var inst_32178 = (state_32181[(2)]);
var inst_32179 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32181__$1 = (function (){var statearr_32183 = state_32181;
(statearr_32183[(7)] = inst_32178);

return statearr_32183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32181__$1,inst_32179);
} else {
return null;
}
}
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_32184 = [null,null,null,null,null,null,null,null];
(statearr_32184[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__);

(statearr_32184[(1)] = (1));

return statearr_32184;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1 = (function (state_32181){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_32181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e32185){if((e32185 instanceof Object)){
var ex__23066__auto__ = e32185;
var statearr_32186_32188 = state_32181;
(statearr_32186_32188[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32189 = state_32181;
state_32181 = G__32189;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__ = function(state_32181){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1.call(this,state_32181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_32187 = f__23153__auto__.call(null);
(statearr_32187[(6)] = c__23152__auto__);

return statearr_32187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
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
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,figwheel_version,temp__5457__auto__){
return (function (state_32196){
var state_val_32197 = (state_32196[(1)]);
if((state_val_32197 === (1))){
var inst_32190 = cljs.core.async.timeout.call(null,(2000));
var state_32196__$1 = state_32196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32196__$1,(2),inst_32190);
} else {
if((state_val_32197 === (2))){
var inst_32192 = (state_32196[(2)]);
var inst_32193 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32194 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32193);
var state_32196__$1 = (function (){var statearr_32198 = state_32196;
(statearr_32198[(7)] = inst_32192);

return statearr_32198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32196__$1,inst_32194);
} else {
return null;
}
}
});})(c__23152__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_32199 = [null,null,null,null,null,null,null,null];
(statearr_32199[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__);

(statearr_32199[(1)] = (1));

return statearr_32199;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1 = (function (state_32196){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_32196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e32200){if((e32200 instanceof Object)){
var ex__23066__auto__ = e32200;
var statearr_32201_32203 = state_32196;
(statearr_32201_32203[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32204 = state_32196;
state_32196 = G__32204;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__ = function(state_32196){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1.call(this,state_32196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23154__auto__ = (function (){var statearr_32202 = f__23153__auto__.call(null);
(statearr_32202[(6)] = c__23152__auto__);

return statearr_32202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,figwheel_version,temp__5457__auto__))
);

return c__23152__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32205){
var map__32206 = p__32205;
var map__32206__$1 = ((((!((map__32206 == null)))?(((((map__32206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32206):map__32206);
var file = cljs.core.get.call(null,map__32206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32206__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32206__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32208 = "";
var G__32208__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32208),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32208);
var G__32208__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32208__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32208__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32208__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32208__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32209){
var map__32210 = p__32209;
var map__32210__$1 = ((((!((map__32210 == null)))?(((((map__32210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32210):map__32210);
var ed = map__32210__$1;
var formatted_exception = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32212_32216 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32213_32217 = null;
var count__32214_32218 = (0);
var i__32215_32219 = (0);
while(true){
if((i__32215_32219 < count__32214_32218)){
var msg_32220 = cljs.core._nth.call(null,chunk__32213_32217,i__32215_32219);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32220);


var G__32221 = seq__32212_32216;
var G__32222 = chunk__32213_32217;
var G__32223 = count__32214_32218;
var G__32224 = (i__32215_32219 + (1));
seq__32212_32216 = G__32221;
chunk__32213_32217 = G__32222;
count__32214_32218 = G__32223;
i__32215_32219 = G__32224;
continue;
} else {
var temp__5457__auto___32225 = cljs.core.seq.call(null,seq__32212_32216);
if(temp__5457__auto___32225){
var seq__32212_32226__$1 = temp__5457__auto___32225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32212_32226__$1)){
var c__4319__auto___32227 = cljs.core.chunk_first.call(null,seq__32212_32226__$1);
var G__32228 = cljs.core.chunk_rest.call(null,seq__32212_32226__$1);
var G__32229 = c__4319__auto___32227;
var G__32230 = cljs.core.count.call(null,c__4319__auto___32227);
var G__32231 = (0);
seq__32212_32216 = G__32228;
chunk__32213_32217 = G__32229;
count__32214_32218 = G__32230;
i__32215_32219 = G__32231;
continue;
} else {
var msg_32232 = cljs.core.first.call(null,seq__32212_32226__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32232);


var G__32233 = cljs.core.next.call(null,seq__32212_32226__$1);
var G__32234 = null;
var G__32235 = (0);
var G__32236 = (0);
seq__32212_32216 = G__32233;
chunk__32213_32217 = G__32234;
count__32214_32218 = G__32235;
i__32215_32219 = G__32236;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32237){
var map__32238 = p__32237;
var map__32238__$1 = ((((!((map__32238 == null)))?(((((map__32238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32238):map__32238);
var w = map__32238__$1;
var message = cljs.core.get.call(null,map__32238__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__32240 = cljs.core.seq.call(null,plugins);
var chunk__32241 = null;
var count__32242 = (0);
var i__32243 = (0);
while(true){
if((i__32243 < count__32242)){
var vec__32244 = cljs.core._nth.call(null,chunk__32241,i__32243);
var k = cljs.core.nth.call(null,vec__32244,(0),null);
var plugin = cljs.core.nth.call(null,vec__32244,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32250 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32240,chunk__32241,count__32242,i__32243,pl_32250,vec__32244,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32250.call(null,msg_hist);
});})(seq__32240,chunk__32241,count__32242,i__32243,pl_32250,vec__32244,k,plugin))
);
} else {
}


var G__32251 = seq__32240;
var G__32252 = chunk__32241;
var G__32253 = count__32242;
var G__32254 = (i__32243 + (1));
seq__32240 = G__32251;
chunk__32241 = G__32252;
count__32242 = G__32253;
i__32243 = G__32254;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32240);
if(temp__5457__auto__){
var seq__32240__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32240__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32240__$1);
var G__32255 = cljs.core.chunk_rest.call(null,seq__32240__$1);
var G__32256 = c__4319__auto__;
var G__32257 = cljs.core.count.call(null,c__4319__auto__);
var G__32258 = (0);
seq__32240 = G__32255;
chunk__32241 = G__32256;
count__32242 = G__32257;
i__32243 = G__32258;
continue;
} else {
var vec__32247 = cljs.core.first.call(null,seq__32240__$1);
var k = cljs.core.nth.call(null,vec__32247,(0),null);
var plugin = cljs.core.nth.call(null,vec__32247,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32259 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32240,chunk__32241,count__32242,i__32243,pl_32259,vec__32247,k,plugin,seq__32240__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32259.call(null,msg_hist);
});})(seq__32240,chunk__32241,count__32242,i__32243,pl_32259,vec__32247,k,plugin,seq__32240__$1,temp__5457__auto__))
);
} else {
}


var G__32260 = cljs.core.next.call(null,seq__32240__$1);
var G__32261 = null;
var G__32262 = (0);
var G__32263 = (0);
seq__32240 = G__32260;
chunk__32241 = G__32261;
count__32242 = G__32262;
i__32243 = G__32263;
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
var G__32265 = arguments.length;
switch (G__32265) {
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

var seq__32266_32271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32267_32272 = null;
var count__32268_32273 = (0);
var i__32269_32274 = (0);
while(true){
if((i__32269_32274 < count__32268_32273)){
var msg_32275 = cljs.core._nth.call(null,chunk__32267_32272,i__32269_32274);
figwheel.client.socket.handle_incoming_message.call(null,msg_32275);


var G__32276 = seq__32266_32271;
var G__32277 = chunk__32267_32272;
var G__32278 = count__32268_32273;
var G__32279 = (i__32269_32274 + (1));
seq__32266_32271 = G__32276;
chunk__32267_32272 = G__32277;
count__32268_32273 = G__32278;
i__32269_32274 = G__32279;
continue;
} else {
var temp__5457__auto___32280 = cljs.core.seq.call(null,seq__32266_32271);
if(temp__5457__auto___32280){
var seq__32266_32281__$1 = temp__5457__auto___32280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32266_32281__$1)){
var c__4319__auto___32282 = cljs.core.chunk_first.call(null,seq__32266_32281__$1);
var G__32283 = cljs.core.chunk_rest.call(null,seq__32266_32281__$1);
var G__32284 = c__4319__auto___32282;
var G__32285 = cljs.core.count.call(null,c__4319__auto___32282);
var G__32286 = (0);
seq__32266_32271 = G__32283;
chunk__32267_32272 = G__32284;
count__32268_32273 = G__32285;
i__32269_32274 = G__32286;
continue;
} else {
var msg_32287 = cljs.core.first.call(null,seq__32266_32281__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32287);


var G__32288 = cljs.core.next.call(null,seq__32266_32281__$1);
var G__32289 = null;
var G__32290 = (0);
var G__32291 = (0);
seq__32266_32271 = G__32288;
chunk__32267_32272 = G__32289;
count__32268_32273 = G__32290;
i__32269_32274 = G__32291;
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
var len__4499__auto___32296 = arguments.length;
var i__4500__auto___32297 = (0);
while(true){
if((i__4500__auto___32297 < len__4499__auto___32296)){
args__4502__auto__.push((arguments[i__4500__auto___32297]));

var G__32298 = (i__4500__auto___32297 + (1));
i__4500__auto___32297 = G__32298;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32293){
var map__32294 = p__32293;
var map__32294__$1 = ((((!((map__32294 == null)))?(((((map__32294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32294):map__32294);
var opts = map__32294__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32292){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32292));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32299){if((e32299 instanceof Error)){
var e = e32299;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32299;

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
return (function (p__32300){
var map__32301 = p__32300;
var map__32301__$1 = ((((!((map__32301 == null)))?(((((map__32301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32301):map__32301);
var msg_name = cljs.core.get.call(null,map__32301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1672617822041
