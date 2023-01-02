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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30068_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30068_SHARP_));
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
var seq__30069 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30070 = null;
var count__30071 = (0);
var i__30072 = (0);
while(true){
if((i__30072 < count__30071)){
var n = cljs.core._nth.call(null,chunk__30070,i__30072);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30073 = seq__30069;
var G__30074 = chunk__30070;
var G__30075 = count__30071;
var G__30076 = (i__30072 + (1));
seq__30069 = G__30073;
chunk__30070 = G__30074;
count__30071 = G__30075;
i__30072 = G__30076;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30069);
if(temp__5457__auto__){
var seq__30069__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30069__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30069__$1);
var G__30077 = cljs.core.chunk_rest.call(null,seq__30069__$1);
var G__30078 = c__4319__auto__;
var G__30079 = cljs.core.count.call(null,c__4319__auto__);
var G__30080 = (0);
seq__30069 = G__30077;
chunk__30070 = G__30078;
count__30071 = G__30079;
i__30072 = G__30080;
continue;
} else {
var n = cljs.core.first.call(null,seq__30069__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30081 = cljs.core.next.call(null,seq__30069__$1);
var G__30082 = null;
var G__30083 = (0);
var G__30084 = (0);
seq__30069 = G__30081;
chunk__30070 = G__30082;
count__30071 = G__30083;
i__30072 = G__30084;
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
return cljs.core.some.call(null,(function (p__30085){
var vec__30086 = p__30085;
var _ = cljs.core.nth.call(null,vec__30086,(0),null);
var v = cljs.core.nth.call(null,vec__30086,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__30089){
var vec__30090 = p__30089;
var k = cljs.core.nth.call(null,vec__30090,(0),null);
var v = cljs.core.nth.call(null,vec__30090,(1),null);
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

var seq__30102_30110 = cljs.core.seq.call(null,deps);
var chunk__30103_30111 = null;
var count__30104_30112 = (0);
var i__30105_30113 = (0);
while(true){
if((i__30105_30113 < count__30104_30112)){
var dep_30114 = cljs.core._nth.call(null,chunk__30103_30111,i__30105_30113);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30114;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30114));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30114,(depth + (1)),state);
} else {
}


var G__30115 = seq__30102_30110;
var G__30116 = chunk__30103_30111;
var G__30117 = count__30104_30112;
var G__30118 = (i__30105_30113 + (1));
seq__30102_30110 = G__30115;
chunk__30103_30111 = G__30116;
count__30104_30112 = G__30117;
i__30105_30113 = G__30118;
continue;
} else {
var temp__5457__auto___30119 = cljs.core.seq.call(null,seq__30102_30110);
if(temp__5457__auto___30119){
var seq__30102_30120__$1 = temp__5457__auto___30119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30102_30120__$1)){
var c__4319__auto___30121 = cljs.core.chunk_first.call(null,seq__30102_30120__$1);
var G__30122 = cljs.core.chunk_rest.call(null,seq__30102_30120__$1);
var G__30123 = c__4319__auto___30121;
var G__30124 = cljs.core.count.call(null,c__4319__auto___30121);
var G__30125 = (0);
seq__30102_30110 = G__30122;
chunk__30103_30111 = G__30123;
count__30104_30112 = G__30124;
i__30105_30113 = G__30125;
continue;
} else {
var dep_30126 = cljs.core.first.call(null,seq__30102_30120__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30126;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30126));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30126,(depth + (1)),state);
} else {
}


var G__30127 = cljs.core.next.call(null,seq__30102_30120__$1);
var G__30128 = null;
var G__30129 = (0);
var G__30130 = (0);
seq__30102_30110 = G__30127;
chunk__30103_30111 = G__30128;
count__30104_30112 = G__30129;
i__30105_30113 = G__30130;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30106){
var vec__30107 = p__30106;
var seq__30108 = cljs.core.seq.call(null,vec__30107);
var first__30109 = cljs.core.first.call(null,seq__30108);
var seq__30108__$1 = cljs.core.next.call(null,seq__30108);
var x = first__30109;
var xs = seq__30108__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30107,seq__30108,first__30109,seq__30108__$1,x,xs,get_deps__$1){
return (function (p1__30093_SHARP_){
return clojure.set.difference.call(null,p1__30093_SHARP_,x);
});})(vec__30107,seq__30108,first__30109,seq__30108__$1,x,xs,get_deps__$1))
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
var seq__30131 = cljs.core.seq.call(null,provides);
var chunk__30132 = null;
var count__30133 = (0);
var i__30134 = (0);
while(true){
if((i__30134 < count__30133)){
var prov = cljs.core._nth.call(null,chunk__30132,i__30134);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30135_30143 = cljs.core.seq.call(null,requires);
var chunk__30136_30144 = null;
var count__30137_30145 = (0);
var i__30138_30146 = (0);
while(true){
if((i__30138_30146 < count__30137_30145)){
var req_30147 = cljs.core._nth.call(null,chunk__30136_30144,i__30138_30146);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30147,prov);


var G__30148 = seq__30135_30143;
var G__30149 = chunk__30136_30144;
var G__30150 = count__30137_30145;
var G__30151 = (i__30138_30146 + (1));
seq__30135_30143 = G__30148;
chunk__30136_30144 = G__30149;
count__30137_30145 = G__30150;
i__30138_30146 = G__30151;
continue;
} else {
var temp__5457__auto___30152 = cljs.core.seq.call(null,seq__30135_30143);
if(temp__5457__auto___30152){
var seq__30135_30153__$1 = temp__5457__auto___30152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30135_30153__$1)){
var c__4319__auto___30154 = cljs.core.chunk_first.call(null,seq__30135_30153__$1);
var G__30155 = cljs.core.chunk_rest.call(null,seq__30135_30153__$1);
var G__30156 = c__4319__auto___30154;
var G__30157 = cljs.core.count.call(null,c__4319__auto___30154);
var G__30158 = (0);
seq__30135_30143 = G__30155;
chunk__30136_30144 = G__30156;
count__30137_30145 = G__30157;
i__30138_30146 = G__30158;
continue;
} else {
var req_30159 = cljs.core.first.call(null,seq__30135_30153__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30159,prov);


var G__30160 = cljs.core.next.call(null,seq__30135_30153__$1);
var G__30161 = null;
var G__30162 = (0);
var G__30163 = (0);
seq__30135_30143 = G__30160;
chunk__30136_30144 = G__30161;
count__30137_30145 = G__30162;
i__30138_30146 = G__30163;
continue;
}
} else {
}
}
break;
}


var G__30164 = seq__30131;
var G__30165 = chunk__30132;
var G__30166 = count__30133;
var G__30167 = (i__30134 + (1));
seq__30131 = G__30164;
chunk__30132 = G__30165;
count__30133 = G__30166;
i__30134 = G__30167;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30131);
if(temp__5457__auto__){
var seq__30131__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30131__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30131__$1);
var G__30168 = cljs.core.chunk_rest.call(null,seq__30131__$1);
var G__30169 = c__4319__auto__;
var G__30170 = cljs.core.count.call(null,c__4319__auto__);
var G__30171 = (0);
seq__30131 = G__30168;
chunk__30132 = G__30169;
count__30133 = G__30170;
i__30134 = G__30171;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30131__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30139_30172 = cljs.core.seq.call(null,requires);
var chunk__30140_30173 = null;
var count__30141_30174 = (0);
var i__30142_30175 = (0);
while(true){
if((i__30142_30175 < count__30141_30174)){
var req_30176 = cljs.core._nth.call(null,chunk__30140_30173,i__30142_30175);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30176,prov);


var G__30177 = seq__30139_30172;
var G__30178 = chunk__30140_30173;
var G__30179 = count__30141_30174;
var G__30180 = (i__30142_30175 + (1));
seq__30139_30172 = G__30177;
chunk__30140_30173 = G__30178;
count__30141_30174 = G__30179;
i__30142_30175 = G__30180;
continue;
} else {
var temp__5457__auto___30181__$1 = cljs.core.seq.call(null,seq__30139_30172);
if(temp__5457__auto___30181__$1){
var seq__30139_30182__$1 = temp__5457__auto___30181__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30139_30182__$1)){
var c__4319__auto___30183 = cljs.core.chunk_first.call(null,seq__30139_30182__$1);
var G__30184 = cljs.core.chunk_rest.call(null,seq__30139_30182__$1);
var G__30185 = c__4319__auto___30183;
var G__30186 = cljs.core.count.call(null,c__4319__auto___30183);
var G__30187 = (0);
seq__30139_30172 = G__30184;
chunk__30140_30173 = G__30185;
count__30141_30174 = G__30186;
i__30142_30175 = G__30187;
continue;
} else {
var req_30188 = cljs.core.first.call(null,seq__30139_30182__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30188,prov);


var G__30189 = cljs.core.next.call(null,seq__30139_30182__$1);
var G__30190 = null;
var G__30191 = (0);
var G__30192 = (0);
seq__30139_30172 = G__30189;
chunk__30140_30173 = G__30190;
count__30141_30174 = G__30191;
i__30142_30175 = G__30192;
continue;
}
} else {
}
}
break;
}


var G__30193 = cljs.core.next.call(null,seq__30131__$1);
var G__30194 = null;
var G__30195 = (0);
var G__30196 = (0);
seq__30131 = G__30193;
chunk__30132 = G__30194;
count__30133 = G__30195;
i__30134 = G__30196;
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
var seq__30197_30201 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30198_30202 = null;
var count__30199_30203 = (0);
var i__30200_30204 = (0);
while(true){
if((i__30200_30204 < count__30199_30203)){
var ns_30205 = cljs.core._nth.call(null,chunk__30198_30202,i__30200_30204);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30205);


var G__30206 = seq__30197_30201;
var G__30207 = chunk__30198_30202;
var G__30208 = count__30199_30203;
var G__30209 = (i__30200_30204 + (1));
seq__30197_30201 = G__30206;
chunk__30198_30202 = G__30207;
count__30199_30203 = G__30208;
i__30200_30204 = G__30209;
continue;
} else {
var temp__5457__auto___30210 = cljs.core.seq.call(null,seq__30197_30201);
if(temp__5457__auto___30210){
var seq__30197_30211__$1 = temp__5457__auto___30210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30197_30211__$1)){
var c__4319__auto___30212 = cljs.core.chunk_first.call(null,seq__30197_30211__$1);
var G__30213 = cljs.core.chunk_rest.call(null,seq__30197_30211__$1);
var G__30214 = c__4319__auto___30212;
var G__30215 = cljs.core.count.call(null,c__4319__auto___30212);
var G__30216 = (0);
seq__30197_30201 = G__30213;
chunk__30198_30202 = G__30214;
count__30199_30203 = G__30215;
i__30200_30204 = G__30216;
continue;
} else {
var ns_30217 = cljs.core.first.call(null,seq__30197_30211__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30217);


var G__30218 = cljs.core.next.call(null,seq__30197_30211__$1);
var G__30219 = null;
var G__30220 = (0);
var G__30221 = (0);
seq__30197_30201 = G__30218;
chunk__30198_30202 = G__30219;
count__30199_30203 = G__30220;
i__30200_30204 = G__30221;
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
var G__30222__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30223__i = 0, G__30223__a = new Array(arguments.length -  0);
while (G__30223__i < G__30223__a.length) {G__30223__a[G__30223__i] = arguments[G__30223__i + 0]; ++G__30223__i;}
  args = new cljs.core.IndexedSeq(G__30223__a,0,null);
} 
return G__30222__delegate.call(this,args);};
G__30222.cljs$lang$maxFixedArity = 0;
G__30222.cljs$lang$applyTo = (function (arglist__30224){
var args = cljs.core.seq(arglist__30224);
return G__30222__delegate(args);
});
G__30222.cljs$core$IFn$_invoke$arity$variadic = G__30222__delegate;
return G__30222;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__30225_SHARP_,p2__30226_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30225_SHARP_)].join('')),p2__30226_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__30227_SHARP_,p2__30228_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30227_SHARP_)].join(''),p2__30228_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30229 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30229.addCallback(((function (G__30229){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30229))
);

G__30229.addErrback(((function (G__30229){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30229))
);

return G__30229;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30230){if((e30230 instanceof Error)){
var e = e30230;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30230;

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
}catch (e30231){if((e30231 instanceof Error)){
var e = e30231;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30231;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30232 = cljs.core._EQ_;
var expr__30233 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30232.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30233))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30232.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30233))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30232.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30233))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30232,expr__30233){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30232,expr__30233))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30235,callback){
var map__30236 = p__30235;
var map__30236__$1 = ((((!((map__30236 == null)))?(((((map__30236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30236):map__30236);
var file_msg = map__30236__$1;
var request_url = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30236,map__30236__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30236,map__30236__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_30274){
var state_val_30275 = (state_30274[(1)]);
if((state_val_30275 === (7))){
var inst_30270 = (state_30274[(2)]);
var state_30274__$1 = state_30274;
var statearr_30276_30302 = state_30274__$1;
(statearr_30276_30302[(2)] = inst_30270);

(statearr_30276_30302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (1))){
var state_30274__$1 = state_30274;
var statearr_30277_30303 = state_30274__$1;
(statearr_30277_30303[(2)] = null);

(statearr_30277_30303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (4))){
var inst_30240 = (state_30274[(7)]);
var inst_30240__$1 = (state_30274[(2)]);
var state_30274__$1 = (function (){var statearr_30278 = state_30274;
(statearr_30278[(7)] = inst_30240__$1);

return statearr_30278;
})();
if(cljs.core.truth_(inst_30240__$1)){
var statearr_30279_30304 = state_30274__$1;
(statearr_30279_30304[(1)] = (5));

} else {
var statearr_30280_30305 = state_30274__$1;
(statearr_30280_30305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (15))){
var inst_30253 = (state_30274[(8)]);
var inst_30255 = (state_30274[(9)]);
var inst_30257 = inst_30255.call(null,inst_30253);
var state_30274__$1 = state_30274;
var statearr_30281_30306 = state_30274__$1;
(statearr_30281_30306[(2)] = inst_30257);

(statearr_30281_30306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (13))){
var inst_30264 = (state_30274[(2)]);
var state_30274__$1 = state_30274;
var statearr_30282_30307 = state_30274__$1;
(statearr_30282_30307[(2)] = inst_30264);

(statearr_30282_30307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (6))){
var state_30274__$1 = state_30274;
var statearr_30283_30308 = state_30274__$1;
(statearr_30283_30308[(2)] = null);

(statearr_30283_30308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (17))){
var inst_30261 = (state_30274[(2)]);
var state_30274__$1 = state_30274;
var statearr_30284_30309 = state_30274__$1;
(statearr_30284_30309[(2)] = inst_30261);

(statearr_30284_30309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (3))){
var inst_30272 = (state_30274[(2)]);
var state_30274__$1 = state_30274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30274__$1,inst_30272);
} else {
if((state_val_30275 === (12))){
var state_30274__$1 = state_30274;
var statearr_30285_30310 = state_30274__$1;
(statearr_30285_30310[(2)] = null);

(statearr_30285_30310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (2))){
var state_30274__$1 = state_30274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30274__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30275 === (11))){
var inst_30245 = (state_30274[(10)]);
var inst_30251 = figwheel.client.file_reloading.blocking_load.call(null,inst_30245);
var state_30274__$1 = state_30274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30274__$1,(14),inst_30251);
} else {
if((state_val_30275 === (9))){
var inst_30245 = (state_30274[(10)]);
var state_30274__$1 = state_30274;
if(cljs.core.truth_(inst_30245)){
var statearr_30286_30311 = state_30274__$1;
(statearr_30286_30311[(1)] = (11));

} else {
var statearr_30287_30312 = state_30274__$1;
(statearr_30287_30312[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (5))){
var inst_30240 = (state_30274[(7)]);
var inst_30246 = (state_30274[(11)]);
var inst_30245 = cljs.core.nth.call(null,inst_30240,(0),null);
var inst_30246__$1 = cljs.core.nth.call(null,inst_30240,(1),null);
var state_30274__$1 = (function (){var statearr_30288 = state_30274;
(statearr_30288[(10)] = inst_30245);

(statearr_30288[(11)] = inst_30246__$1);

return statearr_30288;
})();
if(cljs.core.truth_(inst_30246__$1)){
var statearr_30289_30313 = state_30274__$1;
(statearr_30289_30313[(1)] = (8));

} else {
var statearr_30290_30314 = state_30274__$1;
(statearr_30290_30314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (14))){
var inst_30245 = (state_30274[(10)]);
var inst_30255 = (state_30274[(9)]);
var inst_30253 = (state_30274[(2)]);
var inst_30254 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30255__$1 = cljs.core.get.call(null,inst_30254,inst_30245);
var state_30274__$1 = (function (){var statearr_30291 = state_30274;
(statearr_30291[(8)] = inst_30253);

(statearr_30291[(9)] = inst_30255__$1);

return statearr_30291;
})();
if(cljs.core.truth_(inst_30255__$1)){
var statearr_30292_30315 = state_30274__$1;
(statearr_30292_30315[(1)] = (15));

} else {
var statearr_30293_30316 = state_30274__$1;
(statearr_30293_30316[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (16))){
var inst_30253 = (state_30274[(8)]);
var inst_30259 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30253);
var state_30274__$1 = state_30274;
var statearr_30294_30317 = state_30274__$1;
(statearr_30294_30317[(2)] = inst_30259);

(statearr_30294_30317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (10))){
var inst_30266 = (state_30274[(2)]);
var state_30274__$1 = (function (){var statearr_30295 = state_30274;
(statearr_30295[(12)] = inst_30266);

return statearr_30295;
})();
var statearr_30296_30318 = state_30274__$1;
(statearr_30296_30318[(2)] = null);

(statearr_30296_30318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30275 === (8))){
var inst_30246 = (state_30274[(11)]);
var inst_30248 = eval(inst_30246);
var state_30274__$1 = state_30274;
var statearr_30297_30319 = state_30274__$1;
(statearr_30297_30319[(2)] = inst_30248);

(statearr_30297_30319[(1)] = (10));


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
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$state_machine__23063__auto____0 = (function (){
var statearr_30298 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30298[(0)] = figwheel$client$file_reloading$state_machine__23063__auto__);

(statearr_30298[(1)] = (1));

return statearr_30298;
});
var figwheel$client$file_reloading$state_machine__23063__auto____1 = (function (state_30274){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_30274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e30299){if((e30299 instanceof Object)){
var ex__23066__auto__ = e30299;
var statearr_30300_30320 = state_30274;
(statearr_30300_30320[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30321 = state_30274;
state_30274 = G__30321;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23063__auto__ = function(state_30274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23063__auto____1.call(this,state_30274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23063__auto____0;
figwheel$client$file_reloading$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23063__auto____1;
return figwheel$client$file_reloading$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_30301 = f__23153__auto__.call(null);
(statearr_30301[(6)] = c__23152__auto__);

return statearr_30301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30323 = arguments.length;
switch (G__30323) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30325,callback){
var map__30326 = p__30325;
var map__30326__$1 = ((((!((map__30326 == null)))?(((((map__30326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30326):map__30326);
var file_msg = map__30326__$1;
var namespace = cljs.core.get.call(null,map__30326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30326,map__30326__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30326,map__30326__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30328){
var map__30329 = p__30328;
var map__30329__$1 = ((((!((map__30329 == null)))?(((((map__30329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30329):map__30329);
var file_msg = map__30329__$1;
var namespace = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30331){
var map__30332 = p__30331;
var map__30332__$1 = ((((!((map__30332 == null)))?(((((map__30332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30332):map__30332);
var file_msg = map__30332__$1;
var namespace = cljs.core.get.call(null,map__30332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30334,callback){
var map__30335 = p__30334;
var map__30335__$1 = ((((!((map__30335 == null)))?(((((map__30335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30335):map__30335);
var file_msg = map__30335__$1;
var request_url = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23152__auto___30385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___30385,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___30385,out){
return (function (state_30370){
var state_val_30371 = (state_30370[(1)]);
if((state_val_30371 === (1))){
var inst_30344 = cljs.core.seq.call(null,files);
var inst_30345 = cljs.core.first.call(null,inst_30344);
var inst_30346 = cljs.core.next.call(null,inst_30344);
var inst_30347 = files;
var state_30370__$1 = (function (){var statearr_30372 = state_30370;
(statearr_30372[(7)] = inst_30345);

(statearr_30372[(8)] = inst_30346);

(statearr_30372[(9)] = inst_30347);

return statearr_30372;
})();
var statearr_30373_30386 = state_30370__$1;
(statearr_30373_30386[(2)] = null);

(statearr_30373_30386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (2))){
var inst_30353 = (state_30370[(10)]);
var inst_30347 = (state_30370[(9)]);
var inst_30352 = cljs.core.seq.call(null,inst_30347);
var inst_30353__$1 = cljs.core.first.call(null,inst_30352);
var inst_30354 = cljs.core.next.call(null,inst_30352);
var inst_30355 = (inst_30353__$1 == null);
var inst_30356 = cljs.core.not.call(null,inst_30355);
var state_30370__$1 = (function (){var statearr_30374 = state_30370;
(statearr_30374[(10)] = inst_30353__$1);

(statearr_30374[(11)] = inst_30354);

return statearr_30374;
})();
if(inst_30356){
var statearr_30375_30387 = state_30370__$1;
(statearr_30375_30387[(1)] = (4));

} else {
var statearr_30376_30388 = state_30370__$1;
(statearr_30376_30388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (3))){
var inst_30368 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30370__$1,inst_30368);
} else {
if((state_val_30371 === (4))){
var inst_30353 = (state_30370[(10)]);
var inst_30358 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30353);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(7),inst_30358);
} else {
if((state_val_30371 === (5))){
var inst_30364 = cljs.core.async.close_BANG_.call(null,out);
var state_30370__$1 = state_30370;
var statearr_30377_30389 = state_30370__$1;
(statearr_30377_30389[(2)] = inst_30364);

(statearr_30377_30389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (6))){
var inst_30366 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30378_30390 = state_30370__$1;
(statearr_30378_30390[(2)] = inst_30366);

(statearr_30378_30390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (7))){
var inst_30354 = (state_30370[(11)]);
var inst_30360 = (state_30370[(2)]);
var inst_30361 = cljs.core.async.put_BANG_.call(null,out,inst_30360);
var inst_30347 = inst_30354;
var state_30370__$1 = (function (){var statearr_30379 = state_30370;
(statearr_30379[(12)] = inst_30361);

(statearr_30379[(9)] = inst_30347);

return statearr_30379;
})();
var statearr_30380_30391 = state_30370__$1;
(statearr_30380_30391[(2)] = null);

(statearr_30380_30391[(1)] = (2));


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
});})(c__23152__auto___30385,out))
;
return ((function (switch__23062__auto__,c__23152__auto___30385,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0 = (function (){
var statearr_30381 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30381[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__);

(statearr_30381[(1)] = (1));

return statearr_30381;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1 = (function (state_30370){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_30370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e30382){if((e30382 instanceof Object)){
var ex__23066__auto__ = e30382;
var statearr_30383_30392 = state_30370;
(statearr_30383_30392[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30393 = state_30370;
state_30370 = G__30393;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__ = function(state_30370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1.call(this,state_30370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___30385,out))
})();
var state__23154__auto__ = (function (){var statearr_30384 = f__23153__auto__.call(null);
(statearr_30384[(6)] = c__23152__auto___30385);

return statearr_30384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___30385,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30394,opts){
var map__30395 = p__30394;
var map__30395__$1 = ((((!((map__30395 == null)))?(((((map__30395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30395):map__30395);
var eval_body = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30397){var e = e30397;
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
return (function (p1__30398_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30398_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30399){
var vec__30400 = p__30399;
var k = cljs.core.nth.call(null,vec__30400,(0),null);
var v = cljs.core.nth.call(null,vec__30400,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30403){
var vec__30404 = p__30403;
var k = cljs.core.nth.call(null,vec__30404,(0),null);
var v = cljs.core.nth.call(null,vec__30404,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30410,p__30411){
var map__30412 = p__30410;
var map__30412__$1 = ((((!((map__30412 == null)))?(((((map__30412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30412):map__30412);
var opts = map__30412__$1;
var before_jsload = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30413 = p__30411;
var map__30413__$1 = ((((!((map__30413 == null)))?(((((map__30413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30413):map__30413);
var msg = map__30413__$1;
var files = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30567){
var state_val_30568 = (state_30567[(1)]);
if((state_val_30568 === (7))){
var inst_30428 = (state_30567[(7)]);
var inst_30427 = (state_30567[(8)]);
var inst_30430 = (state_30567[(9)]);
var inst_30429 = (state_30567[(10)]);
var inst_30435 = cljs.core._nth.call(null,inst_30428,inst_30430);
var inst_30436 = figwheel.client.file_reloading.eval_body.call(null,inst_30435,opts);
var inst_30437 = (inst_30430 + (1));
var tmp30569 = inst_30428;
var tmp30570 = inst_30427;
var tmp30571 = inst_30429;
var inst_30427__$1 = tmp30570;
var inst_30428__$1 = tmp30569;
var inst_30429__$1 = tmp30571;
var inst_30430__$1 = inst_30437;
var state_30567__$1 = (function (){var statearr_30572 = state_30567;
(statearr_30572[(7)] = inst_30428__$1);

(statearr_30572[(11)] = inst_30436);

(statearr_30572[(8)] = inst_30427__$1);

(statearr_30572[(9)] = inst_30430__$1);

(statearr_30572[(10)] = inst_30429__$1);

return statearr_30572;
})();
var statearr_30573_30656 = state_30567__$1;
(statearr_30573_30656[(2)] = null);

(statearr_30573_30656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (20))){
var inst_30470 = (state_30567[(12)]);
var inst_30478 = figwheel.client.file_reloading.sort_files.call(null,inst_30470);
var state_30567__$1 = state_30567;
var statearr_30574_30657 = state_30567__$1;
(statearr_30574_30657[(2)] = inst_30478);

(statearr_30574_30657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (27))){
var state_30567__$1 = state_30567;
var statearr_30575_30658 = state_30567__$1;
(statearr_30575_30658[(2)] = null);

(statearr_30575_30658[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (1))){
var inst_30419 = (state_30567[(13)]);
var inst_30416 = before_jsload.call(null,files);
var inst_30417 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30418 = (function (){return ((function (inst_30419,inst_30416,inst_30417,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30407_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30407_SHARP_);
});
;})(inst_30419,inst_30416,inst_30417,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30419__$1 = cljs.core.filter.call(null,inst_30418,files);
var inst_30420 = cljs.core.not_empty.call(null,inst_30419__$1);
var state_30567__$1 = (function (){var statearr_30576 = state_30567;
(statearr_30576[(14)] = inst_30416);

(statearr_30576[(13)] = inst_30419__$1);

(statearr_30576[(15)] = inst_30417);

return statearr_30576;
})();
if(cljs.core.truth_(inst_30420)){
var statearr_30577_30659 = state_30567__$1;
(statearr_30577_30659[(1)] = (2));

} else {
var statearr_30578_30660 = state_30567__$1;
(statearr_30578_30660[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (24))){
var state_30567__$1 = state_30567;
var statearr_30579_30661 = state_30567__$1;
(statearr_30579_30661[(2)] = null);

(statearr_30579_30661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (39))){
var inst_30520 = (state_30567[(16)]);
var state_30567__$1 = state_30567;
var statearr_30580_30662 = state_30567__$1;
(statearr_30580_30662[(2)] = inst_30520);

(statearr_30580_30662[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (46))){
var inst_30562 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30581_30663 = state_30567__$1;
(statearr_30581_30663[(2)] = inst_30562);

(statearr_30581_30663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (4))){
var inst_30464 = (state_30567[(2)]);
var inst_30465 = cljs.core.List.EMPTY;
var inst_30466 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30465);
var inst_30467 = (function (){return ((function (inst_30464,inst_30465,inst_30466,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30408_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30408_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30408_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30408_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30464,inst_30465,inst_30466,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30468 = cljs.core.filter.call(null,inst_30467,files);
var inst_30469 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30470 = cljs.core.concat.call(null,inst_30468,inst_30469);
var state_30567__$1 = (function (){var statearr_30582 = state_30567;
(statearr_30582[(17)] = inst_30466);

(statearr_30582[(12)] = inst_30470);

(statearr_30582[(18)] = inst_30464);

return statearr_30582;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30583_30664 = state_30567__$1;
(statearr_30583_30664[(1)] = (16));

} else {
var statearr_30584_30665 = state_30567__$1;
(statearr_30584_30665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (15))){
var inst_30454 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30585_30666 = state_30567__$1;
(statearr_30585_30666[(2)] = inst_30454);

(statearr_30585_30666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (21))){
var inst_30480 = (state_30567[(19)]);
var inst_30480__$1 = (state_30567[(2)]);
var inst_30481 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30480__$1);
var state_30567__$1 = (function (){var statearr_30586 = state_30567;
(statearr_30586[(19)] = inst_30480__$1);

return statearr_30586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(22),inst_30481);
} else {
if((state_val_30568 === (31))){
var inst_30565 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30567__$1,inst_30565);
} else {
if((state_val_30568 === (32))){
var inst_30520 = (state_30567[(16)]);
var inst_30525 = inst_30520.cljs$lang$protocol_mask$partition0$;
var inst_30526 = (inst_30525 & (64));
var inst_30527 = inst_30520.cljs$core$ISeq$;
var inst_30528 = (cljs.core.PROTOCOL_SENTINEL === inst_30527);
var inst_30529 = ((inst_30526) || (inst_30528));
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30529)){
var statearr_30587_30667 = state_30567__$1;
(statearr_30587_30667[(1)] = (35));

} else {
var statearr_30588_30668 = state_30567__$1;
(statearr_30588_30668[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (40))){
var inst_30542 = (state_30567[(20)]);
var inst_30541 = (state_30567[(2)]);
var inst_30542__$1 = cljs.core.get.call(null,inst_30541,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30543 = cljs.core.get.call(null,inst_30541,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30544 = cljs.core.not_empty.call(null,inst_30542__$1);
var state_30567__$1 = (function (){var statearr_30589 = state_30567;
(statearr_30589[(20)] = inst_30542__$1);

(statearr_30589[(21)] = inst_30543);

return statearr_30589;
})();
if(cljs.core.truth_(inst_30544)){
var statearr_30590_30669 = state_30567__$1;
(statearr_30590_30669[(1)] = (41));

} else {
var statearr_30591_30670 = state_30567__$1;
(statearr_30591_30670[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (33))){
var state_30567__$1 = state_30567;
var statearr_30592_30671 = state_30567__$1;
(statearr_30592_30671[(2)] = false);

(statearr_30592_30671[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (13))){
var inst_30440 = (state_30567[(22)]);
var inst_30444 = cljs.core.chunk_first.call(null,inst_30440);
var inst_30445 = cljs.core.chunk_rest.call(null,inst_30440);
var inst_30446 = cljs.core.count.call(null,inst_30444);
var inst_30427 = inst_30445;
var inst_30428 = inst_30444;
var inst_30429 = inst_30446;
var inst_30430 = (0);
var state_30567__$1 = (function (){var statearr_30593 = state_30567;
(statearr_30593[(7)] = inst_30428);

(statearr_30593[(8)] = inst_30427);

(statearr_30593[(9)] = inst_30430);

(statearr_30593[(10)] = inst_30429);

return statearr_30593;
})();
var statearr_30594_30672 = state_30567__$1;
(statearr_30594_30672[(2)] = null);

(statearr_30594_30672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (22))){
var inst_30480 = (state_30567[(19)]);
var inst_30483 = (state_30567[(23)]);
var inst_30488 = (state_30567[(24)]);
var inst_30484 = (state_30567[(25)]);
var inst_30483__$1 = (state_30567[(2)]);
var inst_30484__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30483__$1);
var inst_30485 = (function (){var all_files = inst_30480;
var res_SINGLEQUOTE_ = inst_30483__$1;
var res = inst_30484__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30480,inst_30483,inst_30488,inst_30484,inst_30483__$1,inst_30484__$1,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30409_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30409_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30480,inst_30483,inst_30488,inst_30484,inst_30483__$1,inst_30484__$1,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30486 = cljs.core.filter.call(null,inst_30485,inst_30483__$1);
var inst_30487 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30488__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30487);
var inst_30489 = cljs.core.not_empty.call(null,inst_30488__$1);
var state_30567__$1 = (function (){var statearr_30595 = state_30567;
(statearr_30595[(23)] = inst_30483__$1);

(statearr_30595[(24)] = inst_30488__$1);

(statearr_30595[(25)] = inst_30484__$1);

(statearr_30595[(26)] = inst_30486);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30489)){
var statearr_30596_30673 = state_30567__$1;
(statearr_30596_30673[(1)] = (23));

} else {
var statearr_30597_30674 = state_30567__$1;
(statearr_30597_30674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (36))){
var state_30567__$1 = state_30567;
var statearr_30598_30675 = state_30567__$1;
(statearr_30598_30675[(2)] = false);

(statearr_30598_30675[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (41))){
var inst_30542 = (state_30567[(20)]);
var inst_30546 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30547 = cljs.core.map.call(null,inst_30546,inst_30542);
var inst_30548 = cljs.core.pr_str.call(null,inst_30547);
var inst_30549 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30548)].join('');
var inst_30550 = figwheel.client.utils.log.call(null,inst_30549);
var state_30567__$1 = state_30567;
var statearr_30599_30676 = state_30567__$1;
(statearr_30599_30676[(2)] = inst_30550);

(statearr_30599_30676[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (43))){
var inst_30543 = (state_30567[(21)]);
var inst_30553 = (state_30567[(2)]);
var inst_30554 = cljs.core.not_empty.call(null,inst_30543);
var state_30567__$1 = (function (){var statearr_30600 = state_30567;
(statearr_30600[(27)] = inst_30553);

return statearr_30600;
})();
if(cljs.core.truth_(inst_30554)){
var statearr_30601_30677 = state_30567__$1;
(statearr_30601_30677[(1)] = (44));

} else {
var statearr_30602_30678 = state_30567__$1;
(statearr_30602_30678[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (29))){
var inst_30480 = (state_30567[(19)]);
var inst_30483 = (state_30567[(23)]);
var inst_30488 = (state_30567[(24)]);
var inst_30484 = (state_30567[(25)]);
var inst_30520 = (state_30567[(16)]);
var inst_30486 = (state_30567[(26)]);
var inst_30516 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30519 = (function (){var all_files = inst_30480;
var res_SINGLEQUOTE_ = inst_30483;
var res = inst_30484;
var files_not_loaded = inst_30486;
var dependencies_that_loaded = inst_30488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30520,inst_30486,inst_30516,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30518){
var map__30603 = p__30518;
var map__30603__$1 = ((((!((map__30603 == null)))?(((((map__30603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30603):map__30603);
var namespace = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30520,inst_30486,inst_30516,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30520__$1 = cljs.core.group_by.call(null,inst_30519,inst_30486);
var inst_30522 = (inst_30520__$1 == null);
var inst_30523 = cljs.core.not.call(null,inst_30522);
var state_30567__$1 = (function (){var statearr_30605 = state_30567;
(statearr_30605[(28)] = inst_30516);

(statearr_30605[(16)] = inst_30520__$1);

return statearr_30605;
})();
if(inst_30523){
var statearr_30606_30679 = state_30567__$1;
(statearr_30606_30679[(1)] = (32));

} else {
var statearr_30607_30680 = state_30567__$1;
(statearr_30607_30680[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (44))){
var inst_30543 = (state_30567[(21)]);
var inst_30556 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30543);
var inst_30557 = cljs.core.pr_str.call(null,inst_30556);
var inst_30558 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30557)].join('');
var inst_30559 = figwheel.client.utils.log.call(null,inst_30558);
var state_30567__$1 = state_30567;
var statearr_30608_30681 = state_30567__$1;
(statearr_30608_30681[(2)] = inst_30559);

(statearr_30608_30681[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (6))){
var inst_30461 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30609_30682 = state_30567__$1;
(statearr_30609_30682[(2)] = inst_30461);

(statearr_30609_30682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (28))){
var inst_30486 = (state_30567[(26)]);
var inst_30513 = (state_30567[(2)]);
var inst_30514 = cljs.core.not_empty.call(null,inst_30486);
var state_30567__$1 = (function (){var statearr_30610 = state_30567;
(statearr_30610[(29)] = inst_30513);

return statearr_30610;
})();
if(cljs.core.truth_(inst_30514)){
var statearr_30611_30683 = state_30567__$1;
(statearr_30611_30683[(1)] = (29));

} else {
var statearr_30612_30684 = state_30567__$1;
(statearr_30612_30684[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (25))){
var inst_30484 = (state_30567[(25)]);
var inst_30500 = (state_30567[(2)]);
var inst_30501 = cljs.core.not_empty.call(null,inst_30484);
var state_30567__$1 = (function (){var statearr_30613 = state_30567;
(statearr_30613[(30)] = inst_30500);

return statearr_30613;
})();
if(cljs.core.truth_(inst_30501)){
var statearr_30614_30685 = state_30567__$1;
(statearr_30614_30685[(1)] = (26));

} else {
var statearr_30615_30686 = state_30567__$1;
(statearr_30615_30686[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (34))){
var inst_30536 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30536)){
var statearr_30616_30687 = state_30567__$1;
(statearr_30616_30687[(1)] = (38));

} else {
var statearr_30617_30688 = state_30567__$1;
(statearr_30617_30688[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (17))){
var state_30567__$1 = state_30567;
var statearr_30618_30689 = state_30567__$1;
(statearr_30618_30689[(2)] = recompile_dependents);

(statearr_30618_30689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (3))){
var state_30567__$1 = state_30567;
var statearr_30619_30690 = state_30567__$1;
(statearr_30619_30690[(2)] = null);

(statearr_30619_30690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (12))){
var inst_30457 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30620_30691 = state_30567__$1;
(statearr_30620_30691[(2)] = inst_30457);

(statearr_30620_30691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (2))){
var inst_30419 = (state_30567[(13)]);
var inst_30426 = cljs.core.seq.call(null,inst_30419);
var inst_30427 = inst_30426;
var inst_30428 = null;
var inst_30429 = (0);
var inst_30430 = (0);
var state_30567__$1 = (function (){var statearr_30621 = state_30567;
(statearr_30621[(7)] = inst_30428);

(statearr_30621[(8)] = inst_30427);

(statearr_30621[(9)] = inst_30430);

(statearr_30621[(10)] = inst_30429);

return statearr_30621;
})();
var statearr_30622_30692 = state_30567__$1;
(statearr_30622_30692[(2)] = null);

(statearr_30622_30692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (23))){
var inst_30480 = (state_30567[(19)]);
var inst_30483 = (state_30567[(23)]);
var inst_30488 = (state_30567[(24)]);
var inst_30484 = (state_30567[(25)]);
var inst_30486 = (state_30567[(26)]);
var inst_30491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30493 = (function (){var all_files = inst_30480;
var res_SINGLEQUOTE_ = inst_30483;
var res = inst_30484;
var files_not_loaded = inst_30486;
var dependencies_that_loaded = inst_30488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30486,inst_30491,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30492){
var map__30623 = p__30492;
var map__30623__$1 = ((((!((map__30623 == null)))?(((((map__30623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30623):map__30623);
var request_url = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30486,inst_30491,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30494 = cljs.core.reverse.call(null,inst_30488);
var inst_30495 = cljs.core.map.call(null,inst_30493,inst_30494);
var inst_30496 = cljs.core.pr_str.call(null,inst_30495);
var inst_30497 = figwheel.client.utils.log.call(null,inst_30496);
var state_30567__$1 = (function (){var statearr_30625 = state_30567;
(statearr_30625[(31)] = inst_30491);

return statearr_30625;
})();
var statearr_30626_30693 = state_30567__$1;
(statearr_30626_30693[(2)] = inst_30497);

(statearr_30626_30693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (35))){
var state_30567__$1 = state_30567;
var statearr_30627_30694 = state_30567__$1;
(statearr_30627_30694[(2)] = true);

(statearr_30627_30694[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (19))){
var inst_30470 = (state_30567[(12)]);
var inst_30476 = figwheel.client.file_reloading.expand_files.call(null,inst_30470);
var state_30567__$1 = state_30567;
var statearr_30628_30695 = state_30567__$1;
(statearr_30628_30695[(2)] = inst_30476);

(statearr_30628_30695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (11))){
var state_30567__$1 = state_30567;
var statearr_30629_30696 = state_30567__$1;
(statearr_30629_30696[(2)] = null);

(statearr_30629_30696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (9))){
var inst_30459 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30630_30697 = state_30567__$1;
(statearr_30630_30697[(2)] = inst_30459);

(statearr_30630_30697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (5))){
var inst_30430 = (state_30567[(9)]);
var inst_30429 = (state_30567[(10)]);
var inst_30432 = (inst_30430 < inst_30429);
var inst_30433 = inst_30432;
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30433)){
var statearr_30631_30698 = state_30567__$1;
(statearr_30631_30698[(1)] = (7));

} else {
var statearr_30632_30699 = state_30567__$1;
(statearr_30632_30699[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (14))){
var inst_30440 = (state_30567[(22)]);
var inst_30449 = cljs.core.first.call(null,inst_30440);
var inst_30450 = figwheel.client.file_reloading.eval_body.call(null,inst_30449,opts);
var inst_30451 = cljs.core.next.call(null,inst_30440);
var inst_30427 = inst_30451;
var inst_30428 = null;
var inst_30429 = (0);
var inst_30430 = (0);
var state_30567__$1 = (function (){var statearr_30633 = state_30567;
(statearr_30633[(7)] = inst_30428);

(statearr_30633[(8)] = inst_30427);

(statearr_30633[(9)] = inst_30430);

(statearr_30633[(10)] = inst_30429);

(statearr_30633[(32)] = inst_30450);

return statearr_30633;
})();
var statearr_30634_30700 = state_30567__$1;
(statearr_30634_30700[(2)] = null);

(statearr_30634_30700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (45))){
var state_30567__$1 = state_30567;
var statearr_30635_30701 = state_30567__$1;
(statearr_30635_30701[(2)] = null);

(statearr_30635_30701[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (26))){
var inst_30480 = (state_30567[(19)]);
var inst_30483 = (state_30567[(23)]);
var inst_30488 = (state_30567[(24)]);
var inst_30484 = (state_30567[(25)]);
var inst_30486 = (state_30567[(26)]);
var inst_30503 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30505 = (function (){var all_files = inst_30480;
var res_SINGLEQUOTE_ = inst_30483;
var res = inst_30484;
var files_not_loaded = inst_30486;
var dependencies_that_loaded = inst_30488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30486,inst_30503,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30504){
var map__30636 = p__30504;
var map__30636__$1 = ((((!((map__30636 == null)))?(((((map__30636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30636):map__30636);
var namespace = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30486,inst_30503,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30506 = cljs.core.map.call(null,inst_30505,inst_30484);
var inst_30507 = cljs.core.pr_str.call(null,inst_30506);
var inst_30508 = figwheel.client.utils.log.call(null,inst_30507);
var inst_30509 = (function (){var all_files = inst_30480;
var res_SINGLEQUOTE_ = inst_30483;
var res = inst_30484;
var files_not_loaded = inst_30486;
var dependencies_that_loaded = inst_30488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30486,inst_30503,inst_30505,inst_30506,inst_30507,inst_30508,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30480,inst_30483,inst_30488,inst_30484,inst_30486,inst_30503,inst_30505,inst_30506,inst_30507,inst_30508,state_val_30568,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30510 = setTimeout(inst_30509,(10));
var state_30567__$1 = (function (){var statearr_30638 = state_30567;
(statearr_30638[(33)] = inst_30503);

(statearr_30638[(34)] = inst_30508);

return statearr_30638;
})();
var statearr_30639_30702 = state_30567__$1;
(statearr_30639_30702[(2)] = inst_30510);

(statearr_30639_30702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (16))){
var state_30567__$1 = state_30567;
var statearr_30640_30703 = state_30567__$1;
(statearr_30640_30703[(2)] = reload_dependents);

(statearr_30640_30703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (38))){
var inst_30520 = (state_30567[(16)]);
var inst_30538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30520);
var state_30567__$1 = state_30567;
var statearr_30641_30704 = state_30567__$1;
(statearr_30641_30704[(2)] = inst_30538);

(statearr_30641_30704[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (30))){
var state_30567__$1 = state_30567;
var statearr_30642_30705 = state_30567__$1;
(statearr_30642_30705[(2)] = null);

(statearr_30642_30705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (10))){
var inst_30440 = (state_30567[(22)]);
var inst_30442 = cljs.core.chunked_seq_QMARK_.call(null,inst_30440);
var state_30567__$1 = state_30567;
if(inst_30442){
var statearr_30643_30706 = state_30567__$1;
(statearr_30643_30706[(1)] = (13));

} else {
var statearr_30644_30707 = state_30567__$1;
(statearr_30644_30707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (18))){
var inst_30474 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30474)){
var statearr_30645_30708 = state_30567__$1;
(statearr_30645_30708[(1)] = (19));

} else {
var statearr_30646_30709 = state_30567__$1;
(statearr_30646_30709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (42))){
var state_30567__$1 = state_30567;
var statearr_30647_30710 = state_30567__$1;
(statearr_30647_30710[(2)] = null);

(statearr_30647_30710[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (37))){
var inst_30533 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30648_30711 = state_30567__$1;
(statearr_30648_30711[(2)] = inst_30533);

(statearr_30648_30711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (8))){
var inst_30427 = (state_30567[(8)]);
var inst_30440 = (state_30567[(22)]);
var inst_30440__$1 = cljs.core.seq.call(null,inst_30427);
var state_30567__$1 = (function (){var statearr_30649 = state_30567;
(statearr_30649[(22)] = inst_30440__$1);

return statearr_30649;
})();
if(inst_30440__$1){
var statearr_30650_30712 = state_30567__$1;
(statearr_30650_30712[(1)] = (10));

} else {
var statearr_30651_30713 = state_30567__$1;
(statearr_30651_30713[(1)] = (11));

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
});})(c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23062__auto__,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0 = (function (){
var statearr_30652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30652[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__);

(statearr_30652[(1)] = (1));

return statearr_30652;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1 = (function (state_30567){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_30567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e30653){if((e30653 instanceof Object)){
var ex__23066__auto__ = e30653;
var statearr_30654_30714 = state_30567;
(statearr_30654_30714[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30715 = state_30567;
state_30567 = G__30715;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__ = function(state_30567){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1.call(this,state_30567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23154__auto__ = (function (){var statearr_30655 = f__23153__auto__.call(null);
(statearr_30655[(6)] = c__23152__auto__);

return statearr_30655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,map__30412,map__30412__$1,opts,before_jsload,on_jsload,reload_dependents,map__30413,map__30413__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23152__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30718,link){
var map__30719 = p__30718;
var map__30719__$1 = ((((!((map__30719 == null)))?(((((map__30719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30719):map__30719);
var file = cljs.core.get.call(null,map__30719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30719,map__30719__$1,file){
return (function (p1__30716_SHARP_,p2__30717_SHARP_){
if(cljs.core._EQ_.call(null,p1__30716_SHARP_,p2__30717_SHARP_)){
return p1__30716_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30719,map__30719__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30722){
var map__30723 = p__30722;
var map__30723__$1 = ((((!((map__30723 == null)))?(((((map__30723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30723):map__30723);
var match_length = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30721_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30721_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30725_SHARP_,p2__30726_SHARP_){
return cljs.core.assoc.call(null,p1__30725_SHARP_,cljs.core.get.call(null,p2__30726_SHARP_,key),p2__30726_SHARP_);
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
var loaded_f_datas_30727 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30727);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30727);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30728,p__30729){
var map__30730 = p__30728;
var map__30730__$1 = ((((!((map__30730 == null)))?(((((map__30730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30730):map__30730);
var on_cssload = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30731 = p__30729;
var map__30731__$1 = ((((!((map__30731 == null)))?(((((map__30731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30731):map__30731);
var files_msg = map__30731__$1;
var files = cljs.core.get.call(null,map__30731__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1672617817847
