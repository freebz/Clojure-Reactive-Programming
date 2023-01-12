// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23270_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23270_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23271 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23272 = null;
var count__23273 = (0);
var i__23274 = (0);
while(true){
if((i__23274 < count__23273)){
var n = cljs.core._nth.call(null,chunk__23272,i__23274);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__23275 = seq__23271;
var G__23276 = chunk__23272;
var G__23277 = count__23273;
var G__23278 = (i__23274 + (1));
seq__23271 = G__23275;
chunk__23272 = G__23276;
count__23273 = G__23277;
i__23274 = G__23278;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23271);
if(temp__5457__auto__){
var seq__23271__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23271__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23271__$1);
var G__23279 = cljs.core.chunk_rest.call(null,seq__23271__$1);
var G__23280 = c__4319__auto__;
var G__23281 = cljs.core.count.call(null,c__4319__auto__);
var G__23282 = (0);
seq__23271 = G__23279;
chunk__23272 = G__23280;
count__23273 = G__23281;
i__23274 = G__23282;
continue;
} else {
var n = cljs.core.first.call(null,seq__23271__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__23283 = cljs.core.next.call(null,seq__23271__$1);
var G__23284 = null;
var G__23285 = (0);
var G__23286 = (0);
seq__23271 = G__23283;
chunk__23272 = G__23284;
count__23273 = G__23285;
i__23274 = G__23286;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__23287){
var vec__23288 = p__23287;
var _ = cljs.core.nth.call(null,vec__23288,(0),null);
var v = cljs.core.nth.call(null,vec__23288,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__23291){
var vec__23292 = p__23291;
var k = cljs.core.nth.call(null,vec__23292,(0),null);
var v = cljs.core.nth.call(null,vec__23292,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23304_23312 = cljs.core.seq.call(null,deps);
var chunk__23305_23313 = null;
var count__23306_23314 = (0);
var i__23307_23315 = (0);
while(true){
if((i__23307_23315 < count__23306_23314)){
var dep_23316 = cljs.core._nth.call(null,chunk__23305_23313,i__23307_23315);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_23316;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_23316));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_23316,(depth + (1)),state);
} else {
}


var G__23317 = seq__23304_23312;
var G__23318 = chunk__23305_23313;
var G__23319 = count__23306_23314;
var G__23320 = (i__23307_23315 + (1));
seq__23304_23312 = G__23317;
chunk__23305_23313 = G__23318;
count__23306_23314 = G__23319;
i__23307_23315 = G__23320;
continue;
} else {
var temp__5457__auto___23321 = cljs.core.seq.call(null,seq__23304_23312);
if(temp__5457__auto___23321){
var seq__23304_23322__$1 = temp__5457__auto___23321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23304_23322__$1)){
var c__4319__auto___23323 = cljs.core.chunk_first.call(null,seq__23304_23322__$1);
var G__23324 = cljs.core.chunk_rest.call(null,seq__23304_23322__$1);
var G__23325 = c__4319__auto___23323;
var G__23326 = cljs.core.count.call(null,c__4319__auto___23323);
var G__23327 = (0);
seq__23304_23312 = G__23324;
chunk__23305_23313 = G__23325;
count__23306_23314 = G__23326;
i__23307_23315 = G__23327;
continue;
} else {
var dep_23328 = cljs.core.first.call(null,seq__23304_23322__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_23328;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_23328));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_23328,(depth + (1)),state);
} else {
}


var G__23329 = cljs.core.next.call(null,seq__23304_23322__$1);
var G__23330 = null;
var G__23331 = (0);
var G__23332 = (0);
seq__23304_23312 = G__23329;
chunk__23305_23313 = G__23330;
count__23306_23314 = G__23331;
i__23307_23315 = G__23332;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23308){
var vec__23309 = p__23308;
var seq__23310 = cljs.core.seq.call(null,vec__23309);
var first__23311 = cljs.core.first.call(null,seq__23310);
var seq__23310__$1 = cljs.core.next.call(null,seq__23310);
var x = first__23311;
var xs = seq__23310__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23309,seq__23310,first__23311,seq__23310__$1,x,xs,get_deps__$1){
return (function (p1__23295_SHARP_){
return clojure.set.difference.call(null,p1__23295_SHARP_,x);
});})(vec__23309,seq__23310,first__23311,seq__23310__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23333 = cljs.core.seq.call(null,provides);
var chunk__23334 = null;
var count__23335 = (0);
var i__23336 = (0);
while(true){
if((i__23336 < count__23335)){
var prov = cljs.core._nth.call(null,chunk__23334,i__23336);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23337_23345 = cljs.core.seq.call(null,requires);
var chunk__23338_23346 = null;
var count__23339_23347 = (0);
var i__23340_23348 = (0);
while(true){
if((i__23340_23348 < count__23339_23347)){
var req_23349 = cljs.core._nth.call(null,chunk__23338_23346,i__23340_23348);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23349,prov);


var G__23350 = seq__23337_23345;
var G__23351 = chunk__23338_23346;
var G__23352 = count__23339_23347;
var G__23353 = (i__23340_23348 + (1));
seq__23337_23345 = G__23350;
chunk__23338_23346 = G__23351;
count__23339_23347 = G__23352;
i__23340_23348 = G__23353;
continue;
} else {
var temp__5457__auto___23354 = cljs.core.seq.call(null,seq__23337_23345);
if(temp__5457__auto___23354){
var seq__23337_23355__$1 = temp__5457__auto___23354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23337_23355__$1)){
var c__4319__auto___23356 = cljs.core.chunk_first.call(null,seq__23337_23355__$1);
var G__23357 = cljs.core.chunk_rest.call(null,seq__23337_23355__$1);
var G__23358 = c__4319__auto___23356;
var G__23359 = cljs.core.count.call(null,c__4319__auto___23356);
var G__23360 = (0);
seq__23337_23345 = G__23357;
chunk__23338_23346 = G__23358;
count__23339_23347 = G__23359;
i__23340_23348 = G__23360;
continue;
} else {
var req_23361 = cljs.core.first.call(null,seq__23337_23355__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23361,prov);


var G__23362 = cljs.core.next.call(null,seq__23337_23355__$1);
var G__23363 = null;
var G__23364 = (0);
var G__23365 = (0);
seq__23337_23345 = G__23362;
chunk__23338_23346 = G__23363;
count__23339_23347 = G__23364;
i__23340_23348 = G__23365;
continue;
}
} else {
}
}
break;
}


var G__23366 = seq__23333;
var G__23367 = chunk__23334;
var G__23368 = count__23335;
var G__23369 = (i__23336 + (1));
seq__23333 = G__23366;
chunk__23334 = G__23367;
count__23335 = G__23368;
i__23336 = G__23369;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23333);
if(temp__5457__auto__){
var seq__23333__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23333__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23333__$1);
var G__23370 = cljs.core.chunk_rest.call(null,seq__23333__$1);
var G__23371 = c__4319__auto__;
var G__23372 = cljs.core.count.call(null,c__4319__auto__);
var G__23373 = (0);
seq__23333 = G__23370;
chunk__23334 = G__23371;
count__23335 = G__23372;
i__23336 = G__23373;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23333__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23341_23374 = cljs.core.seq.call(null,requires);
var chunk__23342_23375 = null;
var count__23343_23376 = (0);
var i__23344_23377 = (0);
while(true){
if((i__23344_23377 < count__23343_23376)){
var req_23378 = cljs.core._nth.call(null,chunk__23342_23375,i__23344_23377);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23378,prov);


var G__23379 = seq__23341_23374;
var G__23380 = chunk__23342_23375;
var G__23381 = count__23343_23376;
var G__23382 = (i__23344_23377 + (1));
seq__23341_23374 = G__23379;
chunk__23342_23375 = G__23380;
count__23343_23376 = G__23381;
i__23344_23377 = G__23382;
continue;
} else {
var temp__5457__auto___23383__$1 = cljs.core.seq.call(null,seq__23341_23374);
if(temp__5457__auto___23383__$1){
var seq__23341_23384__$1 = temp__5457__auto___23383__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23341_23384__$1)){
var c__4319__auto___23385 = cljs.core.chunk_first.call(null,seq__23341_23384__$1);
var G__23386 = cljs.core.chunk_rest.call(null,seq__23341_23384__$1);
var G__23387 = c__4319__auto___23385;
var G__23388 = cljs.core.count.call(null,c__4319__auto___23385);
var G__23389 = (0);
seq__23341_23374 = G__23386;
chunk__23342_23375 = G__23387;
count__23343_23376 = G__23388;
i__23344_23377 = G__23389;
continue;
} else {
var req_23390 = cljs.core.first.call(null,seq__23341_23384__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23390,prov);


var G__23391 = cljs.core.next.call(null,seq__23341_23384__$1);
var G__23392 = null;
var G__23393 = (0);
var G__23394 = (0);
seq__23341_23374 = G__23391;
chunk__23342_23375 = G__23392;
count__23343_23376 = G__23393;
i__23344_23377 = G__23394;
continue;
}
} else {
}
}
break;
}


var G__23395 = cljs.core.next.call(null,seq__23333__$1);
var G__23396 = null;
var G__23397 = (0);
var G__23398 = (0);
seq__23333 = G__23395;
chunk__23334 = G__23396;
count__23335 = G__23397;
i__23336 = G__23398;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23399_23403 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23400_23404 = null;
var count__23401_23405 = (0);
var i__23402_23406 = (0);
while(true){
if((i__23402_23406 < count__23401_23405)){
var ns_23407 = cljs.core._nth.call(null,chunk__23400_23404,i__23402_23406);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23407);


var G__23408 = seq__23399_23403;
var G__23409 = chunk__23400_23404;
var G__23410 = count__23401_23405;
var G__23411 = (i__23402_23406 + (1));
seq__23399_23403 = G__23408;
chunk__23400_23404 = G__23409;
count__23401_23405 = G__23410;
i__23402_23406 = G__23411;
continue;
} else {
var temp__5457__auto___23412 = cljs.core.seq.call(null,seq__23399_23403);
if(temp__5457__auto___23412){
var seq__23399_23413__$1 = temp__5457__auto___23412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23399_23413__$1)){
var c__4319__auto___23414 = cljs.core.chunk_first.call(null,seq__23399_23413__$1);
var G__23415 = cljs.core.chunk_rest.call(null,seq__23399_23413__$1);
var G__23416 = c__4319__auto___23414;
var G__23417 = cljs.core.count.call(null,c__4319__auto___23414);
var G__23418 = (0);
seq__23399_23403 = G__23415;
chunk__23400_23404 = G__23416;
count__23401_23405 = G__23417;
i__23402_23406 = G__23418;
continue;
} else {
var ns_23419 = cljs.core.first.call(null,seq__23399_23413__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23419);


var G__23420 = cljs.core.next.call(null,seq__23399_23413__$1);
var G__23421 = null;
var G__23422 = (0);
var G__23423 = (0);
seq__23399_23403 = G__23420;
chunk__23400_23404 = G__23421;
count__23401_23405 = G__23422;
i__23402_23406 = G__23423;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23424__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23425__i = 0, G__23425__a = new Array(arguments.length -  0);
while (G__23425__i < G__23425__a.length) {G__23425__a[G__23425__i] = arguments[G__23425__i + 0]; ++G__23425__i;}
  args = new cljs.core.IndexedSeq(G__23425__a,0,null);
} 
return G__23424__delegate.call(this,args);};
G__23424.cljs$lang$maxFixedArity = 0;
G__23424.cljs$lang$applyTo = (function (arglist__23426){
var args = cljs.core.seq(arglist__23426);
return G__23424__delegate(args);
});
G__23424.cljs$core$IFn$_invoke$arity$variadic = G__23424__delegate;
return G__23424;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__23427_SHARP_,p2__23428_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23427_SHARP_)].join('')),p2__23428_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__23429_SHARP_,p2__23430_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23429_SHARP_)].join(''),p2__23430_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__23431 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__23431.addCallback(((function (G__23431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__23431))
);

G__23431.addErrback(((function (G__23431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__23431))
);

return G__23431;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e23432){if((e23432 instanceof Error)){
var e = e23432;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23432;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23433){if((e23433 instanceof Error)){
var e = e23433;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23433;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23434 = cljs.core._EQ_;
var expr__23435 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23434.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23435))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__23434.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23435))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__23434.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__23435))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__23434,expr__23435){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23434,expr__23435))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23437,callback){
var map__23438 = p__23437;
var map__23438__$1 = ((((!((map__23438 == null)))?(((((map__23438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23438):map__23438);
var file_msg = map__23438__$1;
var request_url = cljs.core.get.call(null,map__23438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__23438,map__23438__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23438,map__23438__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23190__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto__){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto__){
return (function (state_23476){
var state_val_23477 = (state_23476[(1)]);
if((state_val_23477 === (7))){
var inst_23472 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23478_23504 = state_23476__$1;
(statearr_23478_23504[(2)] = inst_23472);

(statearr_23478_23504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (1))){
var state_23476__$1 = state_23476;
var statearr_23479_23505 = state_23476__$1;
(statearr_23479_23505[(2)] = null);

(statearr_23479_23505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (4))){
var inst_23442 = (state_23476[(7)]);
var inst_23442__$1 = (state_23476[(2)]);
var state_23476__$1 = (function (){var statearr_23480 = state_23476;
(statearr_23480[(7)] = inst_23442__$1);

return statearr_23480;
})();
if(cljs.core.truth_(inst_23442__$1)){
var statearr_23481_23506 = state_23476__$1;
(statearr_23481_23506[(1)] = (5));

} else {
var statearr_23482_23507 = state_23476__$1;
(statearr_23482_23507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (15))){
var inst_23457 = (state_23476[(8)]);
var inst_23455 = (state_23476[(9)]);
var inst_23459 = inst_23457.call(null,inst_23455);
var state_23476__$1 = state_23476;
var statearr_23483_23508 = state_23476__$1;
(statearr_23483_23508[(2)] = inst_23459);

(statearr_23483_23508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (13))){
var inst_23466 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23484_23509 = state_23476__$1;
(statearr_23484_23509[(2)] = inst_23466);

(statearr_23484_23509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (6))){
var state_23476__$1 = state_23476;
var statearr_23485_23510 = state_23476__$1;
(statearr_23485_23510[(2)] = null);

(statearr_23485_23510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (17))){
var inst_23463 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23486_23511 = state_23476__$1;
(statearr_23486_23511[(2)] = inst_23463);

(statearr_23486_23511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (3))){
var inst_23474 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23476__$1,inst_23474);
} else {
if((state_val_23477 === (12))){
var state_23476__$1 = state_23476;
var statearr_23487_23512 = state_23476__$1;
(statearr_23487_23512[(2)] = null);

(statearr_23487_23512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (2))){
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23476__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23477 === (11))){
var inst_23447 = (state_23476[(10)]);
var inst_23453 = figwheel.client.file_reloading.blocking_load.call(null,inst_23447);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23476__$1,(14),inst_23453);
} else {
if((state_val_23477 === (9))){
var inst_23447 = (state_23476[(10)]);
var state_23476__$1 = state_23476;
if(cljs.core.truth_(inst_23447)){
var statearr_23488_23513 = state_23476__$1;
(statearr_23488_23513[(1)] = (11));

} else {
var statearr_23489_23514 = state_23476__$1;
(statearr_23489_23514[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (5))){
var inst_23442 = (state_23476[(7)]);
var inst_23448 = (state_23476[(11)]);
var inst_23447 = cljs.core.nth.call(null,inst_23442,(0),null);
var inst_23448__$1 = cljs.core.nth.call(null,inst_23442,(1),null);
var state_23476__$1 = (function (){var statearr_23490 = state_23476;
(statearr_23490[(11)] = inst_23448__$1);

(statearr_23490[(10)] = inst_23447);

return statearr_23490;
})();
if(cljs.core.truth_(inst_23448__$1)){
var statearr_23491_23515 = state_23476__$1;
(statearr_23491_23515[(1)] = (8));

} else {
var statearr_23492_23516 = state_23476__$1;
(statearr_23492_23516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (14))){
var inst_23457 = (state_23476[(8)]);
var inst_23447 = (state_23476[(10)]);
var inst_23455 = (state_23476[(2)]);
var inst_23456 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23457__$1 = cljs.core.get.call(null,inst_23456,inst_23447);
var state_23476__$1 = (function (){var statearr_23493 = state_23476;
(statearr_23493[(8)] = inst_23457__$1);

(statearr_23493[(9)] = inst_23455);

return statearr_23493;
})();
if(cljs.core.truth_(inst_23457__$1)){
var statearr_23494_23517 = state_23476__$1;
(statearr_23494_23517[(1)] = (15));

} else {
var statearr_23495_23518 = state_23476__$1;
(statearr_23495_23518[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (16))){
var inst_23455 = (state_23476[(9)]);
var inst_23461 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23455);
var state_23476__$1 = state_23476;
var statearr_23496_23519 = state_23476__$1;
(statearr_23496_23519[(2)] = inst_23461);

(statearr_23496_23519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (10))){
var inst_23468 = (state_23476[(2)]);
var state_23476__$1 = (function (){var statearr_23497 = state_23476;
(statearr_23497[(12)] = inst_23468);

return statearr_23497;
})();
var statearr_23498_23520 = state_23476__$1;
(statearr_23498_23520[(2)] = null);

(statearr_23498_23520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (8))){
var inst_23448 = (state_23476[(11)]);
var inst_23450 = eval(inst_23448);
var state_23476__$1 = state_23476;
var statearr_23499_23521 = state_23476__$1;
(statearr_23499_23521[(2)] = inst_23450);

(statearr_23499_23521[(1)] = (10));


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
});})(c__23190__auto__))
;
return ((function (switch__23167__auto__,c__23190__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23168__auto__ = null;
var figwheel$client$file_reloading$state_machine__23168__auto____0 = (function (){
var statearr_23500 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23500[(0)] = figwheel$client$file_reloading$state_machine__23168__auto__);

(statearr_23500[(1)] = (1));

return statearr_23500;
});
var figwheel$client$file_reloading$state_machine__23168__auto____1 = (function (state_23476){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_23476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e23501){if((e23501 instanceof Object)){
var ex__23171__auto__ = e23501;
var statearr_23502_23522 = state_23476;
(statearr_23502_23522[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23523 = state_23476;
state_23476 = G__23523;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23168__auto__ = function(state_23476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23168__auto____1.call(this,state_23476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23168__auto____0;
figwheel$client$file_reloading$state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23168__auto____1;
return figwheel$client$file_reloading$state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto__))
})();
var state__23192__auto__ = (function (){var statearr_23503 = f__23191__auto__.call(null);
(statearr_23503[(6)] = c__23190__auto__);

return statearr_23503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto__))
);

return c__23190__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__23525 = arguments.length;
switch (G__23525) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23527,callback){
var map__23528 = p__23527;
var map__23528__$1 = ((((!((map__23528 == null)))?(((((map__23528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23528):map__23528);
var file_msg = map__23528__$1;
var namespace = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23528,map__23528__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23528,map__23528__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__23530){
var map__23531 = p__23530;
var map__23531__$1 = ((((!((map__23531 == null)))?(((((map__23531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23531):map__23531);
var file_msg = map__23531__$1;
var namespace = cljs.core.get.call(null,map__23531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23533){
var map__23534 = p__23533;
var map__23534__$1 = ((((!((map__23534 == null)))?(((((map__23534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23534):map__23534);
var file_msg = map__23534__$1;
var namespace = cljs.core.get.call(null,map__23534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23536,callback){
var map__23537 = p__23536;
var map__23537__$1 = ((((!((map__23537 == null)))?(((((map__23537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23537):map__23537);
var file_msg = map__23537__$1;
var request_url = cljs.core.get.call(null,map__23537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23190__auto___23587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto___23587,out){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto___23587,out){
return (function (state_23572){
var state_val_23573 = (state_23572[(1)]);
if((state_val_23573 === (1))){
var inst_23546 = cljs.core.seq.call(null,files);
var inst_23547 = cljs.core.first.call(null,inst_23546);
var inst_23548 = cljs.core.next.call(null,inst_23546);
var inst_23549 = files;
var state_23572__$1 = (function (){var statearr_23574 = state_23572;
(statearr_23574[(7)] = inst_23547);

(statearr_23574[(8)] = inst_23549);

(statearr_23574[(9)] = inst_23548);

return statearr_23574;
})();
var statearr_23575_23588 = state_23572__$1;
(statearr_23575_23588[(2)] = null);

(statearr_23575_23588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (2))){
var inst_23549 = (state_23572[(8)]);
var inst_23555 = (state_23572[(10)]);
var inst_23554 = cljs.core.seq.call(null,inst_23549);
var inst_23555__$1 = cljs.core.first.call(null,inst_23554);
var inst_23556 = cljs.core.next.call(null,inst_23554);
var inst_23557 = (inst_23555__$1 == null);
var inst_23558 = cljs.core.not.call(null,inst_23557);
var state_23572__$1 = (function (){var statearr_23576 = state_23572;
(statearr_23576[(11)] = inst_23556);

(statearr_23576[(10)] = inst_23555__$1);

return statearr_23576;
})();
if(inst_23558){
var statearr_23577_23589 = state_23572__$1;
(statearr_23577_23589[(1)] = (4));

} else {
var statearr_23578_23590 = state_23572__$1;
(statearr_23578_23590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (3))){
var inst_23570 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23572__$1,inst_23570);
} else {
if((state_val_23573 === (4))){
var inst_23555 = (state_23572[(10)]);
var inst_23560 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23555);
var state_23572__$1 = state_23572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23572__$1,(7),inst_23560);
} else {
if((state_val_23573 === (5))){
var inst_23566 = cljs.core.async.close_BANG_.call(null,out);
var state_23572__$1 = state_23572;
var statearr_23579_23591 = state_23572__$1;
(statearr_23579_23591[(2)] = inst_23566);

(statearr_23579_23591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (6))){
var inst_23568 = (state_23572[(2)]);
var state_23572__$1 = state_23572;
var statearr_23580_23592 = state_23572__$1;
(statearr_23580_23592[(2)] = inst_23568);

(statearr_23580_23592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23573 === (7))){
var inst_23556 = (state_23572[(11)]);
var inst_23562 = (state_23572[(2)]);
var inst_23563 = cljs.core.async.put_BANG_.call(null,out,inst_23562);
var inst_23549 = inst_23556;
var state_23572__$1 = (function (){var statearr_23581 = state_23572;
(statearr_23581[(12)] = inst_23563);

(statearr_23581[(8)] = inst_23549);

return statearr_23581;
})();
var statearr_23582_23593 = state_23572__$1;
(statearr_23582_23593[(2)] = null);

(statearr_23582_23593[(1)] = (2));


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
});})(c__23190__auto___23587,out))
;
return ((function (switch__23167__auto__,c__23190__auto___23587,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto____0 = (function (){
var statearr_23583 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23583[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto__);

(statearr_23583[(1)] = (1));

return statearr_23583;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto____1 = (function (state_23572){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_23572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e23584){if((e23584 instanceof Object)){
var ex__23171__auto__ = e23584;
var statearr_23585_23594 = state_23572;
(statearr_23585_23594[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23595 = state_23572;
state_23572 = G__23595;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto__ = function(state_23572){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto____1.call(this,state_23572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto___23587,out))
})();
var state__23192__auto__ = (function (){var statearr_23586 = f__23191__auto__.call(null);
(statearr_23586[(6)] = c__23190__auto___23587);

return statearr_23586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto___23587,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23596,opts){
var map__23597 = p__23596;
var map__23597__$1 = ((((!((map__23597 == null)))?(((((map__23597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23597):map__23597);
var eval_body = cljs.core.get.call(null,map__23597__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23599){var e = e23599;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23600_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23600_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23601){
var vec__23602 = p__23601;
var k = cljs.core.nth.call(null,vec__23602,(0),null);
var v = cljs.core.nth.call(null,vec__23602,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23605){
var vec__23606 = p__23605;
var k = cljs.core.nth.call(null,vec__23606,(0),null);
var v = cljs.core.nth.call(null,vec__23606,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23612,p__23613){
var map__23614 = p__23612;
var map__23614__$1 = ((((!((map__23614 == null)))?(((((map__23614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23614):map__23614);
var opts = map__23614__$1;
var before_jsload = cljs.core.get.call(null,map__23614__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23614__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23614__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23615 = p__23613;
var map__23615__$1 = ((((!((map__23615 == null)))?(((((map__23615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23615):map__23615);
var msg = map__23615__$1;
var files = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23190__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23769){
var state_val_23770 = (state_23769[(1)]);
if((state_val_23770 === (7))){
var inst_23630 = (state_23769[(7)]);
var inst_23631 = (state_23769[(8)]);
var inst_23629 = (state_23769[(9)]);
var inst_23632 = (state_23769[(10)]);
var inst_23637 = cljs.core._nth.call(null,inst_23630,inst_23632);
var inst_23638 = figwheel.client.file_reloading.eval_body.call(null,inst_23637,opts);
var inst_23639 = (inst_23632 + (1));
var tmp23771 = inst_23630;
var tmp23772 = inst_23631;
var tmp23773 = inst_23629;
var inst_23629__$1 = tmp23773;
var inst_23630__$1 = tmp23771;
var inst_23631__$1 = tmp23772;
var inst_23632__$1 = inst_23639;
var state_23769__$1 = (function (){var statearr_23774 = state_23769;
(statearr_23774[(11)] = inst_23638);

(statearr_23774[(7)] = inst_23630__$1);

(statearr_23774[(8)] = inst_23631__$1);

(statearr_23774[(9)] = inst_23629__$1);

(statearr_23774[(10)] = inst_23632__$1);

return statearr_23774;
})();
var statearr_23775_23858 = state_23769__$1;
(statearr_23775_23858[(2)] = null);

(statearr_23775_23858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (20))){
var inst_23672 = (state_23769[(12)]);
var inst_23680 = figwheel.client.file_reloading.sort_files.call(null,inst_23672);
var state_23769__$1 = state_23769;
var statearr_23776_23859 = state_23769__$1;
(statearr_23776_23859[(2)] = inst_23680);

(statearr_23776_23859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (27))){
var state_23769__$1 = state_23769;
var statearr_23777_23860 = state_23769__$1;
(statearr_23777_23860[(2)] = null);

(statearr_23777_23860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (1))){
var inst_23621 = (state_23769[(13)]);
var inst_23618 = before_jsload.call(null,files);
var inst_23619 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23620 = (function (){return ((function (inst_23621,inst_23618,inst_23619,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23609_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23609_SHARP_);
});
;})(inst_23621,inst_23618,inst_23619,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23621__$1 = cljs.core.filter.call(null,inst_23620,files);
var inst_23622 = cljs.core.not_empty.call(null,inst_23621__$1);
var state_23769__$1 = (function (){var statearr_23778 = state_23769;
(statearr_23778[(14)] = inst_23618);

(statearr_23778[(15)] = inst_23619);

(statearr_23778[(13)] = inst_23621__$1);

return statearr_23778;
})();
if(cljs.core.truth_(inst_23622)){
var statearr_23779_23861 = state_23769__$1;
(statearr_23779_23861[(1)] = (2));

} else {
var statearr_23780_23862 = state_23769__$1;
(statearr_23780_23862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (24))){
var state_23769__$1 = state_23769;
var statearr_23781_23863 = state_23769__$1;
(statearr_23781_23863[(2)] = null);

(statearr_23781_23863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (39))){
var inst_23722 = (state_23769[(16)]);
var state_23769__$1 = state_23769;
var statearr_23782_23864 = state_23769__$1;
(statearr_23782_23864[(2)] = inst_23722);

(statearr_23782_23864[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (46))){
var inst_23764 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23783_23865 = state_23769__$1;
(statearr_23783_23865[(2)] = inst_23764);

(statearr_23783_23865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (4))){
var inst_23666 = (state_23769[(2)]);
var inst_23667 = cljs.core.List.EMPTY;
var inst_23668 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23667);
var inst_23669 = (function (){return ((function (inst_23666,inst_23667,inst_23668,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23610_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23610_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23610_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__23610_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_23666,inst_23667,inst_23668,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23670 = cljs.core.filter.call(null,inst_23669,files);
var inst_23671 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23672 = cljs.core.concat.call(null,inst_23670,inst_23671);
var state_23769__$1 = (function (){var statearr_23784 = state_23769;
(statearr_23784[(17)] = inst_23668);

(statearr_23784[(18)] = inst_23666);

(statearr_23784[(12)] = inst_23672);

return statearr_23784;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23785_23866 = state_23769__$1;
(statearr_23785_23866[(1)] = (16));

} else {
var statearr_23786_23867 = state_23769__$1;
(statearr_23786_23867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (15))){
var inst_23656 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23787_23868 = state_23769__$1;
(statearr_23787_23868[(2)] = inst_23656);

(statearr_23787_23868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (21))){
var inst_23682 = (state_23769[(19)]);
var inst_23682__$1 = (state_23769[(2)]);
var inst_23683 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23682__$1);
var state_23769__$1 = (function (){var statearr_23788 = state_23769;
(statearr_23788[(19)] = inst_23682__$1);

return statearr_23788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23769__$1,(22),inst_23683);
} else {
if((state_val_23770 === (31))){
var inst_23767 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23769__$1,inst_23767);
} else {
if((state_val_23770 === (32))){
var inst_23722 = (state_23769[(16)]);
var inst_23727 = inst_23722.cljs$lang$protocol_mask$partition0$;
var inst_23728 = (inst_23727 & (64));
var inst_23729 = inst_23722.cljs$core$ISeq$;
var inst_23730 = (cljs.core.PROTOCOL_SENTINEL === inst_23729);
var inst_23731 = ((inst_23728) || (inst_23730));
var state_23769__$1 = state_23769;
if(cljs.core.truth_(inst_23731)){
var statearr_23789_23869 = state_23769__$1;
(statearr_23789_23869[(1)] = (35));

} else {
var statearr_23790_23870 = state_23769__$1;
(statearr_23790_23870[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (40))){
var inst_23744 = (state_23769[(20)]);
var inst_23743 = (state_23769[(2)]);
var inst_23744__$1 = cljs.core.get.call(null,inst_23743,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23745 = cljs.core.get.call(null,inst_23743,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23746 = cljs.core.not_empty.call(null,inst_23744__$1);
var state_23769__$1 = (function (){var statearr_23791 = state_23769;
(statearr_23791[(21)] = inst_23745);

(statearr_23791[(20)] = inst_23744__$1);

return statearr_23791;
})();
if(cljs.core.truth_(inst_23746)){
var statearr_23792_23871 = state_23769__$1;
(statearr_23792_23871[(1)] = (41));

} else {
var statearr_23793_23872 = state_23769__$1;
(statearr_23793_23872[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (33))){
var state_23769__$1 = state_23769;
var statearr_23794_23873 = state_23769__$1;
(statearr_23794_23873[(2)] = false);

(statearr_23794_23873[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (13))){
var inst_23642 = (state_23769[(22)]);
var inst_23646 = cljs.core.chunk_first.call(null,inst_23642);
var inst_23647 = cljs.core.chunk_rest.call(null,inst_23642);
var inst_23648 = cljs.core.count.call(null,inst_23646);
var inst_23629 = inst_23647;
var inst_23630 = inst_23646;
var inst_23631 = inst_23648;
var inst_23632 = (0);
var state_23769__$1 = (function (){var statearr_23795 = state_23769;
(statearr_23795[(7)] = inst_23630);

(statearr_23795[(8)] = inst_23631);

(statearr_23795[(9)] = inst_23629);

(statearr_23795[(10)] = inst_23632);

return statearr_23795;
})();
var statearr_23796_23874 = state_23769__$1;
(statearr_23796_23874[(2)] = null);

(statearr_23796_23874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (22))){
var inst_23690 = (state_23769[(23)]);
var inst_23682 = (state_23769[(19)]);
var inst_23685 = (state_23769[(24)]);
var inst_23686 = (state_23769[(25)]);
var inst_23685__$1 = (state_23769[(2)]);
var inst_23686__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23685__$1);
var inst_23687 = (function (){var all_files = inst_23682;
var res_SINGLEQUOTE_ = inst_23685__$1;
var res = inst_23686__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23690,inst_23682,inst_23685,inst_23686,inst_23685__$1,inst_23686__$1,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23611_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23611_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23690,inst_23682,inst_23685,inst_23686,inst_23685__$1,inst_23686__$1,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23688 = cljs.core.filter.call(null,inst_23687,inst_23685__$1);
var inst_23689 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23690__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23689);
var inst_23691 = cljs.core.not_empty.call(null,inst_23690__$1);
var state_23769__$1 = (function (){var statearr_23797 = state_23769;
(statearr_23797[(26)] = inst_23688);

(statearr_23797[(23)] = inst_23690__$1);

(statearr_23797[(24)] = inst_23685__$1);

(statearr_23797[(25)] = inst_23686__$1);

return statearr_23797;
})();
if(cljs.core.truth_(inst_23691)){
var statearr_23798_23875 = state_23769__$1;
(statearr_23798_23875[(1)] = (23));

} else {
var statearr_23799_23876 = state_23769__$1;
(statearr_23799_23876[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (36))){
var state_23769__$1 = state_23769;
var statearr_23800_23877 = state_23769__$1;
(statearr_23800_23877[(2)] = false);

(statearr_23800_23877[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (41))){
var inst_23744 = (state_23769[(20)]);
var inst_23748 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23749 = cljs.core.map.call(null,inst_23748,inst_23744);
var inst_23750 = cljs.core.pr_str.call(null,inst_23749);
var inst_23751 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23750)].join('');
var inst_23752 = figwheel.client.utils.log.call(null,inst_23751);
var state_23769__$1 = state_23769;
var statearr_23801_23878 = state_23769__$1;
(statearr_23801_23878[(2)] = inst_23752);

(statearr_23801_23878[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (43))){
var inst_23745 = (state_23769[(21)]);
var inst_23755 = (state_23769[(2)]);
var inst_23756 = cljs.core.not_empty.call(null,inst_23745);
var state_23769__$1 = (function (){var statearr_23802 = state_23769;
(statearr_23802[(27)] = inst_23755);

return statearr_23802;
})();
if(cljs.core.truth_(inst_23756)){
var statearr_23803_23879 = state_23769__$1;
(statearr_23803_23879[(1)] = (44));

} else {
var statearr_23804_23880 = state_23769__$1;
(statearr_23804_23880[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (29))){
var inst_23722 = (state_23769[(16)]);
var inst_23688 = (state_23769[(26)]);
var inst_23690 = (state_23769[(23)]);
var inst_23682 = (state_23769[(19)]);
var inst_23685 = (state_23769[(24)]);
var inst_23686 = (state_23769[(25)]);
var inst_23718 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23721 = (function (){var all_files = inst_23682;
var res_SINGLEQUOTE_ = inst_23685;
var res = inst_23686;
var files_not_loaded = inst_23688;
var dependencies_that_loaded = inst_23690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23722,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23718,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23720){
var map__23805 = p__23720;
var map__23805__$1 = ((((!((map__23805 == null)))?(((((map__23805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23805):map__23805);
var namespace = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23722,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23718,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23722__$1 = cljs.core.group_by.call(null,inst_23721,inst_23688);
var inst_23724 = (inst_23722__$1 == null);
var inst_23725 = cljs.core.not.call(null,inst_23724);
var state_23769__$1 = (function (){var statearr_23807 = state_23769;
(statearr_23807[(16)] = inst_23722__$1);

(statearr_23807[(28)] = inst_23718);

return statearr_23807;
})();
if(inst_23725){
var statearr_23808_23881 = state_23769__$1;
(statearr_23808_23881[(1)] = (32));

} else {
var statearr_23809_23882 = state_23769__$1;
(statearr_23809_23882[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (44))){
var inst_23745 = (state_23769[(21)]);
var inst_23758 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23745);
var inst_23759 = cljs.core.pr_str.call(null,inst_23758);
var inst_23760 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23759)].join('');
var inst_23761 = figwheel.client.utils.log.call(null,inst_23760);
var state_23769__$1 = state_23769;
var statearr_23810_23883 = state_23769__$1;
(statearr_23810_23883[(2)] = inst_23761);

(statearr_23810_23883[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (6))){
var inst_23663 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23811_23884 = state_23769__$1;
(statearr_23811_23884[(2)] = inst_23663);

(statearr_23811_23884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (28))){
var inst_23688 = (state_23769[(26)]);
var inst_23715 = (state_23769[(2)]);
var inst_23716 = cljs.core.not_empty.call(null,inst_23688);
var state_23769__$1 = (function (){var statearr_23812 = state_23769;
(statearr_23812[(29)] = inst_23715);

return statearr_23812;
})();
if(cljs.core.truth_(inst_23716)){
var statearr_23813_23885 = state_23769__$1;
(statearr_23813_23885[(1)] = (29));

} else {
var statearr_23814_23886 = state_23769__$1;
(statearr_23814_23886[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (25))){
var inst_23686 = (state_23769[(25)]);
var inst_23702 = (state_23769[(2)]);
var inst_23703 = cljs.core.not_empty.call(null,inst_23686);
var state_23769__$1 = (function (){var statearr_23815 = state_23769;
(statearr_23815[(30)] = inst_23702);

return statearr_23815;
})();
if(cljs.core.truth_(inst_23703)){
var statearr_23816_23887 = state_23769__$1;
(statearr_23816_23887[(1)] = (26));

} else {
var statearr_23817_23888 = state_23769__$1;
(statearr_23817_23888[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (34))){
var inst_23738 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
if(cljs.core.truth_(inst_23738)){
var statearr_23818_23889 = state_23769__$1;
(statearr_23818_23889[(1)] = (38));

} else {
var statearr_23819_23890 = state_23769__$1;
(statearr_23819_23890[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (17))){
var state_23769__$1 = state_23769;
var statearr_23820_23891 = state_23769__$1;
(statearr_23820_23891[(2)] = recompile_dependents);

(statearr_23820_23891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (3))){
var state_23769__$1 = state_23769;
var statearr_23821_23892 = state_23769__$1;
(statearr_23821_23892[(2)] = null);

(statearr_23821_23892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (12))){
var inst_23659 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23822_23893 = state_23769__$1;
(statearr_23822_23893[(2)] = inst_23659);

(statearr_23822_23893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (2))){
var inst_23621 = (state_23769[(13)]);
var inst_23628 = cljs.core.seq.call(null,inst_23621);
var inst_23629 = inst_23628;
var inst_23630 = null;
var inst_23631 = (0);
var inst_23632 = (0);
var state_23769__$1 = (function (){var statearr_23823 = state_23769;
(statearr_23823[(7)] = inst_23630);

(statearr_23823[(8)] = inst_23631);

(statearr_23823[(9)] = inst_23629);

(statearr_23823[(10)] = inst_23632);

return statearr_23823;
})();
var statearr_23824_23894 = state_23769__$1;
(statearr_23824_23894[(2)] = null);

(statearr_23824_23894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (23))){
var inst_23688 = (state_23769[(26)]);
var inst_23690 = (state_23769[(23)]);
var inst_23682 = (state_23769[(19)]);
var inst_23685 = (state_23769[(24)]);
var inst_23686 = (state_23769[(25)]);
var inst_23693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23695 = (function (){var all_files = inst_23682;
var res_SINGLEQUOTE_ = inst_23685;
var res = inst_23686;
var files_not_loaded = inst_23688;
var dependencies_that_loaded = inst_23690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23693,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23694){
var map__23825 = p__23694;
var map__23825__$1 = ((((!((map__23825 == null)))?(((((map__23825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23825):map__23825);
var request_url = cljs.core.get.call(null,map__23825__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23693,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23696 = cljs.core.reverse.call(null,inst_23690);
var inst_23697 = cljs.core.map.call(null,inst_23695,inst_23696);
var inst_23698 = cljs.core.pr_str.call(null,inst_23697);
var inst_23699 = figwheel.client.utils.log.call(null,inst_23698);
var state_23769__$1 = (function (){var statearr_23827 = state_23769;
(statearr_23827[(31)] = inst_23693);

return statearr_23827;
})();
var statearr_23828_23895 = state_23769__$1;
(statearr_23828_23895[(2)] = inst_23699);

(statearr_23828_23895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (35))){
var state_23769__$1 = state_23769;
var statearr_23829_23896 = state_23769__$1;
(statearr_23829_23896[(2)] = true);

(statearr_23829_23896[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (19))){
var inst_23672 = (state_23769[(12)]);
var inst_23678 = figwheel.client.file_reloading.expand_files.call(null,inst_23672);
var state_23769__$1 = state_23769;
var statearr_23830_23897 = state_23769__$1;
(statearr_23830_23897[(2)] = inst_23678);

(statearr_23830_23897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (11))){
var state_23769__$1 = state_23769;
var statearr_23831_23898 = state_23769__$1;
(statearr_23831_23898[(2)] = null);

(statearr_23831_23898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (9))){
var inst_23661 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23832_23899 = state_23769__$1;
(statearr_23832_23899[(2)] = inst_23661);

(statearr_23832_23899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (5))){
var inst_23631 = (state_23769[(8)]);
var inst_23632 = (state_23769[(10)]);
var inst_23634 = (inst_23632 < inst_23631);
var inst_23635 = inst_23634;
var state_23769__$1 = state_23769;
if(cljs.core.truth_(inst_23635)){
var statearr_23833_23900 = state_23769__$1;
(statearr_23833_23900[(1)] = (7));

} else {
var statearr_23834_23901 = state_23769__$1;
(statearr_23834_23901[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (14))){
var inst_23642 = (state_23769[(22)]);
var inst_23651 = cljs.core.first.call(null,inst_23642);
var inst_23652 = figwheel.client.file_reloading.eval_body.call(null,inst_23651,opts);
var inst_23653 = cljs.core.next.call(null,inst_23642);
var inst_23629 = inst_23653;
var inst_23630 = null;
var inst_23631 = (0);
var inst_23632 = (0);
var state_23769__$1 = (function (){var statearr_23835 = state_23769;
(statearr_23835[(7)] = inst_23630);

(statearr_23835[(32)] = inst_23652);

(statearr_23835[(8)] = inst_23631);

(statearr_23835[(9)] = inst_23629);

(statearr_23835[(10)] = inst_23632);

return statearr_23835;
})();
var statearr_23836_23902 = state_23769__$1;
(statearr_23836_23902[(2)] = null);

(statearr_23836_23902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (45))){
var state_23769__$1 = state_23769;
var statearr_23837_23903 = state_23769__$1;
(statearr_23837_23903[(2)] = null);

(statearr_23837_23903[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (26))){
var inst_23688 = (state_23769[(26)]);
var inst_23690 = (state_23769[(23)]);
var inst_23682 = (state_23769[(19)]);
var inst_23685 = (state_23769[(24)]);
var inst_23686 = (state_23769[(25)]);
var inst_23705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23707 = (function (){var all_files = inst_23682;
var res_SINGLEQUOTE_ = inst_23685;
var res = inst_23686;
var files_not_loaded = inst_23688;
var dependencies_that_loaded = inst_23690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23705,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23706){
var map__23838 = p__23706;
var map__23838__$1 = ((((!((map__23838 == null)))?(((((map__23838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23838):map__23838);
var namespace = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23705,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23708 = cljs.core.map.call(null,inst_23707,inst_23686);
var inst_23709 = cljs.core.pr_str.call(null,inst_23708);
var inst_23710 = figwheel.client.utils.log.call(null,inst_23709);
var inst_23711 = (function (){var all_files = inst_23682;
var res_SINGLEQUOTE_ = inst_23685;
var res = inst_23686;
var files_not_loaded = inst_23688;
var dependencies_that_loaded = inst_23690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23705,inst_23707,inst_23708,inst_23709,inst_23710,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23688,inst_23690,inst_23682,inst_23685,inst_23686,inst_23705,inst_23707,inst_23708,inst_23709,inst_23710,state_val_23770,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23712 = setTimeout(inst_23711,(10));
var state_23769__$1 = (function (){var statearr_23840 = state_23769;
(statearr_23840[(33)] = inst_23705);

(statearr_23840[(34)] = inst_23710);

return statearr_23840;
})();
var statearr_23841_23904 = state_23769__$1;
(statearr_23841_23904[(2)] = inst_23712);

(statearr_23841_23904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (16))){
var state_23769__$1 = state_23769;
var statearr_23842_23905 = state_23769__$1;
(statearr_23842_23905[(2)] = reload_dependents);

(statearr_23842_23905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (38))){
var inst_23722 = (state_23769[(16)]);
var inst_23740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23722);
var state_23769__$1 = state_23769;
var statearr_23843_23906 = state_23769__$1;
(statearr_23843_23906[(2)] = inst_23740);

(statearr_23843_23906[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (30))){
var state_23769__$1 = state_23769;
var statearr_23844_23907 = state_23769__$1;
(statearr_23844_23907[(2)] = null);

(statearr_23844_23907[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (10))){
var inst_23642 = (state_23769[(22)]);
var inst_23644 = cljs.core.chunked_seq_QMARK_.call(null,inst_23642);
var state_23769__$1 = state_23769;
if(inst_23644){
var statearr_23845_23908 = state_23769__$1;
(statearr_23845_23908[(1)] = (13));

} else {
var statearr_23846_23909 = state_23769__$1;
(statearr_23846_23909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (18))){
var inst_23676 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
if(cljs.core.truth_(inst_23676)){
var statearr_23847_23910 = state_23769__$1;
(statearr_23847_23910[(1)] = (19));

} else {
var statearr_23848_23911 = state_23769__$1;
(statearr_23848_23911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (42))){
var state_23769__$1 = state_23769;
var statearr_23849_23912 = state_23769__$1;
(statearr_23849_23912[(2)] = null);

(statearr_23849_23912[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (37))){
var inst_23735 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23850_23913 = state_23769__$1;
(statearr_23850_23913[(2)] = inst_23735);

(statearr_23850_23913[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (8))){
var inst_23642 = (state_23769[(22)]);
var inst_23629 = (state_23769[(9)]);
var inst_23642__$1 = cljs.core.seq.call(null,inst_23629);
var state_23769__$1 = (function (){var statearr_23851 = state_23769;
(statearr_23851[(22)] = inst_23642__$1);

return statearr_23851;
})();
if(inst_23642__$1){
var statearr_23852_23914 = state_23769__$1;
(statearr_23852_23914[(1)] = (10));

} else {
var statearr_23853_23915 = state_23769__$1;
(statearr_23853_23915[(1)] = (11));

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
}
});})(c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23167__auto__,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto____0 = (function (){
var statearr_23854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23854[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto__);

(statearr_23854[(1)] = (1));

return statearr_23854;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto____1 = (function (state_23769){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_23769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e23855){if((e23855 instanceof Object)){
var ex__23171__auto__ = e23855;
var statearr_23856_23916 = state_23769;
(statearr_23856_23916[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23917 = state_23769;
state_23769 = G__23917;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto__ = function(state_23769){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto____1.call(this,state_23769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23192__auto__ = (function (){var statearr_23857 = f__23191__auto__.call(null);
(statearr_23857[(6)] = c__23190__auto__);

return statearr_23857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto__,map__23614,map__23614__$1,opts,before_jsload,on_jsload,reload_dependents,map__23615,map__23615__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23190__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23920,link){
var map__23921 = p__23920;
var map__23921__$1 = ((((!((map__23921 == null)))?(((((map__23921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23921):map__23921);
var file = cljs.core.get.call(null,map__23921__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__23921,map__23921__$1,file){
return (function (p1__23918_SHARP_,p2__23919_SHARP_){
if(cljs.core._EQ_.call(null,p1__23918_SHARP_,p2__23919_SHARP_)){
return p1__23918_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__23921,map__23921__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23924){
var map__23925 = p__23924;
var map__23925__$1 = ((((!((map__23925 == null)))?(((((map__23925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23925):map__23925);
var match_length = cljs.core.get.call(null,map__23925__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23925__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23923_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23923_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23927_SHARP_,p2__23928_SHARP_){
return cljs.core.assoc.call(null,p1__23927_SHARP_,cljs.core.get.call(null,p2__23928_SHARP_,key),p2__23928_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_23929 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_23929);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_23929);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23930,p__23931){
var map__23932 = p__23930;
var map__23932__$1 = ((((!((map__23932 == null)))?(((((map__23932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23932):map__23932);
var on_cssload = cljs.core.get.call(null,map__23932__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__23933 = p__23931;
var map__23933__$1 = ((((!((map__23933 == null)))?(((((map__23933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23933):map__23933);
var files_msg = map__23933__$1;
var files = cljs.core.get.call(null,map__23933__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1673484852929
