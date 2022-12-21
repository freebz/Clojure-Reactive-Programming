goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18202 = arguments.length;
var i__5770__auto___18203 = (0);
while(true){
if((i__5770__auto___18203 < len__5769__auto___18202)){
args__5775__auto__.push((arguments[i__5770__auto___18203]));

var G__18204 = (i__5770__auto___18203 + (1));
i__5770__auto___18203 = G__18204;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17922){
var G__17923 = cljs.core.first(seq17922);
var seq17922__$1 = cljs.core.next(seq17922);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17923,seq17922__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17924 = cljs.core.seq(sources);
var chunk__17925 = null;
var count__17926 = (0);
var i__17927 = (0);
while(true){
if((i__17927 < count__17926)){
var map__17932 = chunk__17925.cljs$core$IIndexed$_nth$arity$2(null,i__17927);
var map__17932__$1 = cljs.core.__destructure_map(map__17932);
var src = map__17932__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17933){var e_18205 = e17933;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18205);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18205.message)].join('')));
}

var G__18206 = seq__17924;
var G__18207 = chunk__17925;
var G__18208 = count__17926;
var G__18209 = (i__17927 + (1));
seq__17924 = G__18206;
chunk__17925 = G__18207;
count__17926 = G__18208;
i__17927 = G__18209;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17924);
if(temp__5804__auto__){
var seq__17924__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17924__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17924__$1);
var G__18210 = cljs.core.chunk_rest(seq__17924__$1);
var G__18211 = c__5568__auto__;
var G__18212 = cljs.core.count(c__5568__auto__);
var G__18213 = (0);
seq__17924 = G__18210;
chunk__17925 = G__18211;
count__17926 = G__18212;
i__17927 = G__18213;
continue;
} else {
var map__17934 = cljs.core.first(seq__17924__$1);
var map__17934__$1 = cljs.core.__destructure_map(map__17934);
var src = map__17934__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17935){var e_18214 = e17935;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18214);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18214.message)].join('')));
}

var G__18215 = cljs.core.next(seq__17924__$1);
var G__18216 = null;
var G__18217 = (0);
var G__18218 = (0);
seq__17924 = G__18215;
chunk__17925 = G__18216;
count__17926 = G__18217;
i__17927 = G__18218;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__17936 = cljs.core.seq(js_requires);
var chunk__17937 = null;
var count__17938 = (0);
var i__17939 = (0);
while(true){
if((i__17939 < count__17938)){
var js_ns = chunk__17937.cljs$core$IIndexed$_nth$arity$2(null,i__17939);
var require_str_18219 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18219);


var G__18220 = seq__17936;
var G__18221 = chunk__17937;
var G__18222 = count__17938;
var G__18223 = (i__17939 + (1));
seq__17936 = G__18220;
chunk__17937 = G__18221;
count__17938 = G__18222;
i__17939 = G__18223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17936);
if(temp__5804__auto__){
var seq__17936__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17936__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17936__$1);
var G__18224 = cljs.core.chunk_rest(seq__17936__$1);
var G__18225 = c__5568__auto__;
var G__18226 = cljs.core.count(c__5568__auto__);
var G__18227 = (0);
seq__17936 = G__18224;
chunk__17937 = G__18225;
count__17938 = G__18226;
i__17939 = G__18227;
continue;
} else {
var js_ns = cljs.core.first(seq__17936__$1);
var require_str_18228 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18228);


var G__18229 = cljs.core.next(seq__17936__$1);
var G__18230 = null;
var G__18231 = (0);
var G__18232 = (0);
seq__17936 = G__18229;
chunk__17937 = G__18230;
count__17938 = G__18231;
i__17939 = G__18232;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17941){
var map__17942 = p__17941;
var map__17942__$1 = cljs.core.__destructure_map(map__17942);
var msg = map__17942__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17942__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17942__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943(s__17944){
return (new cljs.core.LazySeq(null,(function (){
var s__17944__$1 = s__17944;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17944__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17949 = cljs.core.first(xs__6360__auto__);
var map__17949__$1 = cljs.core.__destructure_map(map__17949);
var src = map__17949__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943_$_iter__17945(s__17946){
return (new cljs.core.LazySeq(null,((function (s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info){
return (function (){
var s__17946__$1 = s__17946;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17946__$1);
if(temp__5804__auto____$1){
var s__17946__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17946__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17946__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17948 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17947 = (0);
while(true){
if((i__17947 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__17947);
cljs.core.chunk_append(b__17948,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18233 = (i__17947 + (1));
i__17947 = G__18233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17948),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943_$_iter__17945(cljs.core.chunk_rest(s__17946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17948),null);
}
} else {
var warning = cljs.core.first(s__17946__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943_$_iter__17945(cljs.core.rest(s__17946__$2)));
}
} else {
return null;
}
break;
}
});})(s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info))
,null,null));
});})(s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943(cljs.core.rest(s__17944__$1)));
} else {
var G__18234 = cljs.core.rest(s__17944__$1);
s__17944__$1 = G__18234;
continue;
}
} else {
var G__18235 = cljs.core.rest(s__17944__$1);
s__17944__$1 = G__18235;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__17950_18236 = cljs.core.seq(warnings);
var chunk__17951_18237 = null;
var count__17952_18238 = (0);
var i__17953_18239 = (0);
while(true){
if((i__17953_18239 < count__17952_18238)){
var map__17956_18240 = chunk__17951_18237.cljs$core$IIndexed$_nth$arity$2(null,i__17953_18239);
var map__17956_18241__$1 = cljs.core.__destructure_map(map__17956_18240);
var w_18242 = map__17956_18241__$1;
var msg_18243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18241__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18246)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18244),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18245),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18243__$1)].join(''));


var G__18247 = seq__17950_18236;
var G__18248 = chunk__17951_18237;
var G__18249 = count__17952_18238;
var G__18250 = (i__17953_18239 + (1));
seq__17950_18236 = G__18247;
chunk__17951_18237 = G__18248;
count__17952_18238 = G__18249;
i__17953_18239 = G__18250;
continue;
} else {
var temp__5804__auto___18251 = cljs.core.seq(seq__17950_18236);
if(temp__5804__auto___18251){
var seq__17950_18252__$1 = temp__5804__auto___18251;
if(cljs.core.chunked_seq_QMARK_(seq__17950_18252__$1)){
var c__5568__auto___18253 = cljs.core.chunk_first(seq__17950_18252__$1);
var G__18254 = cljs.core.chunk_rest(seq__17950_18252__$1);
var G__18255 = c__5568__auto___18253;
var G__18256 = cljs.core.count(c__5568__auto___18253);
var G__18257 = (0);
seq__17950_18236 = G__18254;
chunk__17951_18237 = G__18255;
count__17952_18238 = G__18256;
i__17953_18239 = G__18257;
continue;
} else {
var map__17957_18258 = cljs.core.first(seq__17950_18252__$1);
var map__17957_18259__$1 = cljs.core.__destructure_map(map__17957_18258);
var w_18260 = map__17957_18259__$1;
var msg_18261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18259__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18259__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18259__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18264)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18262),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18263),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18261__$1)].join(''));


var G__18265 = cljs.core.next(seq__17950_18252__$1);
var G__18266 = null;
var G__18267 = (0);
var G__18268 = (0);
seq__17950_18236 = G__18265;
chunk__17951_18237 = G__18266;
count__17952_18238 = G__18267;
i__17953_18239 = G__18268;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17940_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17940_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17958){
var map__17959 = p__17958;
var map__17959__$1 = cljs.core.__destructure_map(map__17959);
var msg = map__17959__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17960 = cljs.core.seq(updates);
var chunk__17962 = null;
var count__17963 = (0);
var i__17964 = (0);
while(true){
if((i__17964 < count__17963)){
var path = chunk__17962.cljs$core$IIndexed$_nth$arity$2(null,i__17964);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18074_18269 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18078_18270 = null;
var count__18079_18271 = (0);
var i__18080_18272 = (0);
while(true){
if((i__18080_18272 < count__18079_18271)){
var node_18273 = chunk__18078_18270.cljs$core$IIndexed$_nth$arity$2(null,i__18080_18272);
if(cljs.core.not(node_18273.shadow$old)){
var path_match_18274 = shadow.cljs.devtools.client.browser.match_paths(node_18273.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18274)){
var new_link_18275 = (function (){var G__18106 = node_18273.cloneNode(true);
G__18106.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18274),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18106;
})();
(node_18273.shadow$old = true);

(new_link_18275.onload = ((function (seq__18074_18269,chunk__18078_18270,count__18079_18271,i__18080_18272,seq__17960,chunk__17962,count__17963,i__17964,new_link_18275,path_match_18274,node_18273,path,map__17959,map__17959__$1,msg,updates,reload_info){
return (function (e){
var seq__18107_18276 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18109_18277 = null;
var count__18110_18278 = (0);
var i__18111_18279 = (0);
while(true){
if((i__18111_18279 < count__18110_18278)){
var map__18115_18280 = chunk__18109_18277.cljs$core$IIndexed$_nth$arity$2(null,i__18111_18279);
var map__18115_18281__$1 = cljs.core.__destructure_map(map__18115_18280);
var task_18282 = map__18115_18281__$1;
var fn_str_18283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115_18281__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115_18281__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18285 = goog.getObjectByName(fn_str_18283,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18284)].join(''));

(fn_obj_18285.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18285.cljs$core$IFn$_invoke$arity$2(path,new_link_18275) : fn_obj_18285.call(null,path,new_link_18275));


var G__18286 = seq__18107_18276;
var G__18287 = chunk__18109_18277;
var G__18288 = count__18110_18278;
var G__18289 = (i__18111_18279 + (1));
seq__18107_18276 = G__18286;
chunk__18109_18277 = G__18287;
count__18110_18278 = G__18288;
i__18111_18279 = G__18289;
continue;
} else {
var temp__5804__auto___18290 = cljs.core.seq(seq__18107_18276);
if(temp__5804__auto___18290){
var seq__18107_18291__$1 = temp__5804__auto___18290;
if(cljs.core.chunked_seq_QMARK_(seq__18107_18291__$1)){
var c__5568__auto___18292 = cljs.core.chunk_first(seq__18107_18291__$1);
var G__18293 = cljs.core.chunk_rest(seq__18107_18291__$1);
var G__18294 = c__5568__auto___18292;
var G__18295 = cljs.core.count(c__5568__auto___18292);
var G__18296 = (0);
seq__18107_18276 = G__18293;
chunk__18109_18277 = G__18294;
count__18110_18278 = G__18295;
i__18111_18279 = G__18296;
continue;
} else {
var map__18116_18297 = cljs.core.first(seq__18107_18291__$1);
var map__18116_18298__$1 = cljs.core.__destructure_map(map__18116_18297);
var task_18299 = map__18116_18298__$1;
var fn_str_18300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18116_18298__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18116_18298__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18302 = goog.getObjectByName(fn_str_18300,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18301)].join(''));

(fn_obj_18302.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18302.cljs$core$IFn$_invoke$arity$2(path,new_link_18275) : fn_obj_18302.call(null,path,new_link_18275));


var G__18303 = cljs.core.next(seq__18107_18291__$1);
var G__18304 = null;
var G__18305 = (0);
var G__18306 = (0);
seq__18107_18276 = G__18303;
chunk__18109_18277 = G__18304;
count__18110_18278 = G__18305;
i__18111_18279 = G__18306;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18273);
});})(seq__18074_18269,chunk__18078_18270,count__18079_18271,i__18080_18272,seq__17960,chunk__17962,count__17963,i__17964,new_link_18275,path_match_18274,node_18273,path,map__17959,map__17959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18274], 0));

goog.dom.insertSiblingAfter(new_link_18275,node_18273);


var G__18307 = seq__18074_18269;
var G__18308 = chunk__18078_18270;
var G__18309 = count__18079_18271;
var G__18310 = (i__18080_18272 + (1));
seq__18074_18269 = G__18307;
chunk__18078_18270 = G__18308;
count__18079_18271 = G__18309;
i__18080_18272 = G__18310;
continue;
} else {
var G__18311 = seq__18074_18269;
var G__18312 = chunk__18078_18270;
var G__18313 = count__18079_18271;
var G__18314 = (i__18080_18272 + (1));
seq__18074_18269 = G__18311;
chunk__18078_18270 = G__18312;
count__18079_18271 = G__18313;
i__18080_18272 = G__18314;
continue;
}
} else {
var G__18315 = seq__18074_18269;
var G__18316 = chunk__18078_18270;
var G__18317 = count__18079_18271;
var G__18318 = (i__18080_18272 + (1));
seq__18074_18269 = G__18315;
chunk__18078_18270 = G__18316;
count__18079_18271 = G__18317;
i__18080_18272 = G__18318;
continue;
}
} else {
var temp__5804__auto___18319 = cljs.core.seq(seq__18074_18269);
if(temp__5804__auto___18319){
var seq__18074_18320__$1 = temp__5804__auto___18319;
if(cljs.core.chunked_seq_QMARK_(seq__18074_18320__$1)){
var c__5568__auto___18321 = cljs.core.chunk_first(seq__18074_18320__$1);
var G__18322 = cljs.core.chunk_rest(seq__18074_18320__$1);
var G__18323 = c__5568__auto___18321;
var G__18324 = cljs.core.count(c__5568__auto___18321);
var G__18325 = (0);
seq__18074_18269 = G__18322;
chunk__18078_18270 = G__18323;
count__18079_18271 = G__18324;
i__18080_18272 = G__18325;
continue;
} else {
var node_18326 = cljs.core.first(seq__18074_18320__$1);
if(cljs.core.not(node_18326.shadow$old)){
var path_match_18327 = shadow.cljs.devtools.client.browser.match_paths(node_18326.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18327)){
var new_link_18328 = (function (){var G__18117 = node_18326.cloneNode(true);
G__18117.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18327),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18117;
})();
(node_18326.shadow$old = true);

(new_link_18328.onload = ((function (seq__18074_18269,chunk__18078_18270,count__18079_18271,i__18080_18272,seq__17960,chunk__17962,count__17963,i__17964,new_link_18328,path_match_18327,node_18326,seq__18074_18320__$1,temp__5804__auto___18319,path,map__17959,map__17959__$1,msg,updates,reload_info){
return (function (e){
var seq__18118_18329 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18120_18330 = null;
var count__18121_18331 = (0);
var i__18122_18332 = (0);
while(true){
if((i__18122_18332 < count__18121_18331)){
var map__18126_18333 = chunk__18120_18330.cljs$core$IIndexed$_nth$arity$2(null,i__18122_18332);
var map__18126_18334__$1 = cljs.core.__destructure_map(map__18126_18333);
var task_18335 = map__18126_18334__$1;
var fn_str_18336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18126_18334__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18126_18334__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18338 = goog.getObjectByName(fn_str_18336,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18337)].join(''));

(fn_obj_18338.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18338.cljs$core$IFn$_invoke$arity$2(path,new_link_18328) : fn_obj_18338.call(null,path,new_link_18328));


var G__18339 = seq__18118_18329;
var G__18340 = chunk__18120_18330;
var G__18341 = count__18121_18331;
var G__18342 = (i__18122_18332 + (1));
seq__18118_18329 = G__18339;
chunk__18120_18330 = G__18340;
count__18121_18331 = G__18341;
i__18122_18332 = G__18342;
continue;
} else {
var temp__5804__auto___18343__$1 = cljs.core.seq(seq__18118_18329);
if(temp__5804__auto___18343__$1){
var seq__18118_18344__$1 = temp__5804__auto___18343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18118_18344__$1)){
var c__5568__auto___18345 = cljs.core.chunk_first(seq__18118_18344__$1);
var G__18346 = cljs.core.chunk_rest(seq__18118_18344__$1);
var G__18347 = c__5568__auto___18345;
var G__18348 = cljs.core.count(c__5568__auto___18345);
var G__18349 = (0);
seq__18118_18329 = G__18346;
chunk__18120_18330 = G__18347;
count__18121_18331 = G__18348;
i__18122_18332 = G__18349;
continue;
} else {
var map__18127_18350 = cljs.core.first(seq__18118_18344__$1);
var map__18127_18351__$1 = cljs.core.__destructure_map(map__18127_18350);
var task_18352 = map__18127_18351__$1;
var fn_str_18353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18127_18351__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18127_18351__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18355 = goog.getObjectByName(fn_str_18353,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18354)].join(''));

(fn_obj_18355.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18355.cljs$core$IFn$_invoke$arity$2(path,new_link_18328) : fn_obj_18355.call(null,path,new_link_18328));


var G__18356 = cljs.core.next(seq__18118_18344__$1);
var G__18357 = null;
var G__18358 = (0);
var G__18359 = (0);
seq__18118_18329 = G__18356;
chunk__18120_18330 = G__18357;
count__18121_18331 = G__18358;
i__18122_18332 = G__18359;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18326);
});})(seq__18074_18269,chunk__18078_18270,count__18079_18271,i__18080_18272,seq__17960,chunk__17962,count__17963,i__17964,new_link_18328,path_match_18327,node_18326,seq__18074_18320__$1,temp__5804__auto___18319,path,map__17959,map__17959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18327], 0));

goog.dom.insertSiblingAfter(new_link_18328,node_18326);


var G__18360 = cljs.core.next(seq__18074_18320__$1);
var G__18361 = null;
var G__18362 = (0);
var G__18363 = (0);
seq__18074_18269 = G__18360;
chunk__18078_18270 = G__18361;
count__18079_18271 = G__18362;
i__18080_18272 = G__18363;
continue;
} else {
var G__18364 = cljs.core.next(seq__18074_18320__$1);
var G__18365 = null;
var G__18366 = (0);
var G__18367 = (0);
seq__18074_18269 = G__18364;
chunk__18078_18270 = G__18365;
count__18079_18271 = G__18366;
i__18080_18272 = G__18367;
continue;
}
} else {
var G__18368 = cljs.core.next(seq__18074_18320__$1);
var G__18369 = null;
var G__18370 = (0);
var G__18371 = (0);
seq__18074_18269 = G__18368;
chunk__18078_18270 = G__18369;
count__18079_18271 = G__18370;
i__18080_18272 = G__18371;
continue;
}
}
} else {
}
}
break;
}


var G__18372 = seq__17960;
var G__18373 = chunk__17962;
var G__18374 = count__17963;
var G__18375 = (i__17964 + (1));
seq__17960 = G__18372;
chunk__17962 = G__18373;
count__17963 = G__18374;
i__17964 = G__18375;
continue;
} else {
var G__18376 = seq__17960;
var G__18377 = chunk__17962;
var G__18378 = count__17963;
var G__18379 = (i__17964 + (1));
seq__17960 = G__18376;
chunk__17962 = G__18377;
count__17963 = G__18378;
i__17964 = G__18379;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17960);
if(temp__5804__auto__){
var seq__17960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17960__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17960__$1);
var G__18380 = cljs.core.chunk_rest(seq__17960__$1);
var G__18381 = c__5568__auto__;
var G__18382 = cljs.core.count(c__5568__auto__);
var G__18383 = (0);
seq__17960 = G__18380;
chunk__17962 = G__18381;
count__17963 = G__18382;
i__17964 = G__18383;
continue;
} else {
var path = cljs.core.first(seq__17960__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18128_18384 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18132_18385 = null;
var count__18133_18386 = (0);
var i__18134_18387 = (0);
while(true){
if((i__18134_18387 < count__18133_18386)){
var node_18388 = chunk__18132_18385.cljs$core$IIndexed$_nth$arity$2(null,i__18134_18387);
if(cljs.core.not(node_18388.shadow$old)){
var path_match_18389 = shadow.cljs.devtools.client.browser.match_paths(node_18388.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18389)){
var new_link_18390 = (function (){var G__18160 = node_18388.cloneNode(true);
G__18160.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18389),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18160;
})();
(node_18388.shadow$old = true);

(new_link_18390.onload = ((function (seq__18128_18384,chunk__18132_18385,count__18133_18386,i__18134_18387,seq__17960,chunk__17962,count__17963,i__17964,new_link_18390,path_match_18389,node_18388,path,seq__17960__$1,temp__5804__auto__,map__17959,map__17959__$1,msg,updates,reload_info){
return (function (e){
var seq__18161_18391 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18163_18392 = null;
var count__18164_18393 = (0);
var i__18165_18394 = (0);
while(true){
if((i__18165_18394 < count__18164_18393)){
var map__18169_18395 = chunk__18163_18392.cljs$core$IIndexed$_nth$arity$2(null,i__18165_18394);
var map__18169_18396__$1 = cljs.core.__destructure_map(map__18169_18395);
var task_18397 = map__18169_18396__$1;
var fn_str_18398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169_18396__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169_18396__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18400 = goog.getObjectByName(fn_str_18398,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18399)].join(''));

(fn_obj_18400.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18400.cljs$core$IFn$_invoke$arity$2(path,new_link_18390) : fn_obj_18400.call(null,path,new_link_18390));


var G__18401 = seq__18161_18391;
var G__18402 = chunk__18163_18392;
var G__18403 = count__18164_18393;
var G__18404 = (i__18165_18394 + (1));
seq__18161_18391 = G__18401;
chunk__18163_18392 = G__18402;
count__18164_18393 = G__18403;
i__18165_18394 = G__18404;
continue;
} else {
var temp__5804__auto___18405__$1 = cljs.core.seq(seq__18161_18391);
if(temp__5804__auto___18405__$1){
var seq__18161_18406__$1 = temp__5804__auto___18405__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18161_18406__$1)){
var c__5568__auto___18407 = cljs.core.chunk_first(seq__18161_18406__$1);
var G__18408 = cljs.core.chunk_rest(seq__18161_18406__$1);
var G__18409 = c__5568__auto___18407;
var G__18410 = cljs.core.count(c__5568__auto___18407);
var G__18411 = (0);
seq__18161_18391 = G__18408;
chunk__18163_18392 = G__18409;
count__18164_18393 = G__18410;
i__18165_18394 = G__18411;
continue;
} else {
var map__18170_18412 = cljs.core.first(seq__18161_18406__$1);
var map__18170_18413__$1 = cljs.core.__destructure_map(map__18170_18412);
var task_18414 = map__18170_18413__$1;
var fn_str_18415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170_18413__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170_18413__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18417 = goog.getObjectByName(fn_str_18415,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18416)].join(''));

(fn_obj_18417.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18417.cljs$core$IFn$_invoke$arity$2(path,new_link_18390) : fn_obj_18417.call(null,path,new_link_18390));


var G__18418 = cljs.core.next(seq__18161_18406__$1);
var G__18419 = null;
var G__18420 = (0);
var G__18421 = (0);
seq__18161_18391 = G__18418;
chunk__18163_18392 = G__18419;
count__18164_18393 = G__18420;
i__18165_18394 = G__18421;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18388);
});})(seq__18128_18384,chunk__18132_18385,count__18133_18386,i__18134_18387,seq__17960,chunk__17962,count__17963,i__17964,new_link_18390,path_match_18389,node_18388,path,seq__17960__$1,temp__5804__auto__,map__17959,map__17959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18389], 0));

goog.dom.insertSiblingAfter(new_link_18390,node_18388);


var G__18422 = seq__18128_18384;
var G__18423 = chunk__18132_18385;
var G__18424 = count__18133_18386;
var G__18425 = (i__18134_18387 + (1));
seq__18128_18384 = G__18422;
chunk__18132_18385 = G__18423;
count__18133_18386 = G__18424;
i__18134_18387 = G__18425;
continue;
} else {
var G__18426 = seq__18128_18384;
var G__18427 = chunk__18132_18385;
var G__18428 = count__18133_18386;
var G__18429 = (i__18134_18387 + (1));
seq__18128_18384 = G__18426;
chunk__18132_18385 = G__18427;
count__18133_18386 = G__18428;
i__18134_18387 = G__18429;
continue;
}
} else {
var G__18430 = seq__18128_18384;
var G__18431 = chunk__18132_18385;
var G__18432 = count__18133_18386;
var G__18433 = (i__18134_18387 + (1));
seq__18128_18384 = G__18430;
chunk__18132_18385 = G__18431;
count__18133_18386 = G__18432;
i__18134_18387 = G__18433;
continue;
}
} else {
var temp__5804__auto___18434__$1 = cljs.core.seq(seq__18128_18384);
if(temp__5804__auto___18434__$1){
var seq__18128_18435__$1 = temp__5804__auto___18434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18128_18435__$1)){
var c__5568__auto___18436 = cljs.core.chunk_first(seq__18128_18435__$1);
var G__18437 = cljs.core.chunk_rest(seq__18128_18435__$1);
var G__18438 = c__5568__auto___18436;
var G__18439 = cljs.core.count(c__5568__auto___18436);
var G__18440 = (0);
seq__18128_18384 = G__18437;
chunk__18132_18385 = G__18438;
count__18133_18386 = G__18439;
i__18134_18387 = G__18440;
continue;
} else {
var node_18441 = cljs.core.first(seq__18128_18435__$1);
if(cljs.core.not(node_18441.shadow$old)){
var path_match_18442 = shadow.cljs.devtools.client.browser.match_paths(node_18441.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18442)){
var new_link_18443 = (function (){var G__18171 = node_18441.cloneNode(true);
G__18171.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18442),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18171;
})();
(node_18441.shadow$old = true);

(new_link_18443.onload = ((function (seq__18128_18384,chunk__18132_18385,count__18133_18386,i__18134_18387,seq__17960,chunk__17962,count__17963,i__17964,new_link_18443,path_match_18442,node_18441,seq__18128_18435__$1,temp__5804__auto___18434__$1,path,seq__17960__$1,temp__5804__auto__,map__17959,map__17959__$1,msg,updates,reload_info){
return (function (e){
var seq__18172_18444 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18174_18445 = null;
var count__18175_18446 = (0);
var i__18176_18447 = (0);
while(true){
if((i__18176_18447 < count__18175_18446)){
var map__18180_18448 = chunk__18174_18445.cljs$core$IIndexed$_nth$arity$2(null,i__18176_18447);
var map__18180_18449__$1 = cljs.core.__destructure_map(map__18180_18448);
var task_18450 = map__18180_18449__$1;
var fn_str_18451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180_18449__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18180_18449__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18453 = goog.getObjectByName(fn_str_18451,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18452)].join(''));

(fn_obj_18453.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18453.cljs$core$IFn$_invoke$arity$2(path,new_link_18443) : fn_obj_18453.call(null,path,new_link_18443));


var G__18454 = seq__18172_18444;
var G__18455 = chunk__18174_18445;
var G__18456 = count__18175_18446;
var G__18457 = (i__18176_18447 + (1));
seq__18172_18444 = G__18454;
chunk__18174_18445 = G__18455;
count__18175_18446 = G__18456;
i__18176_18447 = G__18457;
continue;
} else {
var temp__5804__auto___18458__$2 = cljs.core.seq(seq__18172_18444);
if(temp__5804__auto___18458__$2){
var seq__18172_18459__$1 = temp__5804__auto___18458__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18172_18459__$1)){
var c__5568__auto___18460 = cljs.core.chunk_first(seq__18172_18459__$1);
var G__18461 = cljs.core.chunk_rest(seq__18172_18459__$1);
var G__18462 = c__5568__auto___18460;
var G__18463 = cljs.core.count(c__5568__auto___18460);
var G__18464 = (0);
seq__18172_18444 = G__18461;
chunk__18174_18445 = G__18462;
count__18175_18446 = G__18463;
i__18176_18447 = G__18464;
continue;
} else {
var map__18181_18465 = cljs.core.first(seq__18172_18459__$1);
var map__18181_18466__$1 = cljs.core.__destructure_map(map__18181_18465);
var task_18467 = map__18181_18466__$1;
var fn_str_18468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181_18466__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18181_18466__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18470 = goog.getObjectByName(fn_str_18468,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18469)].join(''));

(fn_obj_18470.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18470.cljs$core$IFn$_invoke$arity$2(path,new_link_18443) : fn_obj_18470.call(null,path,new_link_18443));


var G__18471 = cljs.core.next(seq__18172_18459__$1);
var G__18472 = null;
var G__18473 = (0);
var G__18474 = (0);
seq__18172_18444 = G__18471;
chunk__18174_18445 = G__18472;
count__18175_18446 = G__18473;
i__18176_18447 = G__18474;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18441);
});})(seq__18128_18384,chunk__18132_18385,count__18133_18386,i__18134_18387,seq__17960,chunk__17962,count__17963,i__17964,new_link_18443,path_match_18442,node_18441,seq__18128_18435__$1,temp__5804__auto___18434__$1,path,seq__17960__$1,temp__5804__auto__,map__17959,map__17959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18442], 0));

goog.dom.insertSiblingAfter(new_link_18443,node_18441);


var G__18475 = cljs.core.next(seq__18128_18435__$1);
var G__18476 = null;
var G__18477 = (0);
var G__18478 = (0);
seq__18128_18384 = G__18475;
chunk__18132_18385 = G__18476;
count__18133_18386 = G__18477;
i__18134_18387 = G__18478;
continue;
} else {
var G__18479 = cljs.core.next(seq__18128_18435__$1);
var G__18480 = null;
var G__18481 = (0);
var G__18482 = (0);
seq__18128_18384 = G__18479;
chunk__18132_18385 = G__18480;
count__18133_18386 = G__18481;
i__18134_18387 = G__18482;
continue;
}
} else {
var G__18483 = cljs.core.next(seq__18128_18435__$1);
var G__18484 = null;
var G__18485 = (0);
var G__18486 = (0);
seq__18128_18384 = G__18483;
chunk__18132_18385 = G__18484;
count__18133_18386 = G__18485;
i__18134_18387 = G__18486;
continue;
}
}
} else {
}
}
break;
}


var G__18487 = cljs.core.next(seq__17960__$1);
var G__18488 = null;
var G__18489 = (0);
var G__18490 = (0);
seq__17960 = G__18487;
chunk__17962 = G__18488;
count__17963 = G__18489;
i__17964 = G__18490;
continue;
} else {
var G__18491 = cljs.core.next(seq__17960__$1);
var G__18492 = null;
var G__18493 = (0);
var G__18494 = (0);
seq__17960 = G__18491;
chunk__17962 = G__18492;
count__17963 = G__18493;
i__17964 = G__18494;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__18182){
var map__18183 = p__18182;
var map__18183__$1 = cljs.core.__destructure_map(map__18183);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18183__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__18184){
var map__18185 = p__18184;
var map__18185__$1 = cljs.core.__destructure_map(map__18185);
var _ = map__18185__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18186,done,error){
var map__18187 = p__18186;
var map__18187__$1 = cljs.core.__destructure_map(map__18187);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18187__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18188,done,error){
var map__18189 = p__18188;
var map__18189__$1 = cljs.core.__destructure_map(map__18189);
var msg = map__18189__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18189__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18189__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18189__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18190){
var map__18191 = p__18190;
var map__18191__$1 = cljs.core.__destructure_map(map__18191);
var src = map__18191__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18191__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18192 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18192) : done.call(null,G__18192));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18193){
var map__18194 = p__18193;
var map__18194__$1 = cljs.core.__destructure_map(map__18194);
var msg__$1 = map__18194__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18194__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18195){var ex = e18195;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18196){
var map__18197 = p__18196;
var map__18197__$1 = cljs.core.__destructure_map(map__18197);
var env = map__18197__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18197__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18198){
var map__18199 = p__18198;
var map__18199__$1 = cljs.core.__destructure_map(map__18199);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18199__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18199__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18200){
var map__18201 = p__18200;
var map__18201__$1 = cljs.core.__destructure_map(map__18201);
var svc = map__18201__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18201__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
