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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28548_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28548_SHARP_));
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
var seq__28549 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28550 = null;
var count__28551 = (0);
var i__28552 = (0);
while(true){
if((i__28552 < count__28551)){
var n = cljs.core._nth.call(null,chunk__28550,i__28552);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28553 = seq__28549;
var G__28554 = chunk__28550;
var G__28555 = count__28551;
var G__28556 = (i__28552 + (1));
seq__28549 = G__28553;
chunk__28550 = G__28554;
count__28551 = G__28555;
i__28552 = G__28556;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28549);
if(temp__5457__auto__){
var seq__28549__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28549__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28549__$1);
var G__28557 = cljs.core.chunk_rest.call(null,seq__28549__$1);
var G__28558 = c__4319__auto__;
var G__28559 = cljs.core.count.call(null,c__4319__auto__);
var G__28560 = (0);
seq__28549 = G__28557;
chunk__28550 = G__28558;
count__28551 = G__28559;
i__28552 = G__28560;
continue;
} else {
var n = cljs.core.first.call(null,seq__28549__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28561 = cljs.core.next.call(null,seq__28549__$1);
var G__28562 = null;
var G__28563 = (0);
var G__28564 = (0);
seq__28549 = G__28561;
chunk__28550 = G__28562;
count__28551 = G__28563;
i__28552 = G__28564;
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
return cljs.core.some.call(null,(function (p__28565){
var vec__28566 = p__28565;
var _ = cljs.core.nth.call(null,vec__28566,(0),null);
var v = cljs.core.nth.call(null,vec__28566,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28569){
var vec__28570 = p__28569;
var k = cljs.core.nth.call(null,vec__28570,(0),null);
var v = cljs.core.nth.call(null,vec__28570,(1),null);
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

var seq__28582_28590 = cljs.core.seq.call(null,deps);
var chunk__28583_28591 = null;
var count__28584_28592 = (0);
var i__28585_28593 = (0);
while(true){
if((i__28585_28593 < count__28584_28592)){
var dep_28594 = cljs.core._nth.call(null,chunk__28583_28591,i__28585_28593);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28594;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28594));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28594,(depth + (1)),state);
} else {
}


var G__28595 = seq__28582_28590;
var G__28596 = chunk__28583_28591;
var G__28597 = count__28584_28592;
var G__28598 = (i__28585_28593 + (1));
seq__28582_28590 = G__28595;
chunk__28583_28591 = G__28596;
count__28584_28592 = G__28597;
i__28585_28593 = G__28598;
continue;
} else {
var temp__5457__auto___28599 = cljs.core.seq.call(null,seq__28582_28590);
if(temp__5457__auto___28599){
var seq__28582_28600__$1 = temp__5457__auto___28599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28582_28600__$1)){
var c__4319__auto___28601 = cljs.core.chunk_first.call(null,seq__28582_28600__$1);
var G__28602 = cljs.core.chunk_rest.call(null,seq__28582_28600__$1);
var G__28603 = c__4319__auto___28601;
var G__28604 = cljs.core.count.call(null,c__4319__auto___28601);
var G__28605 = (0);
seq__28582_28590 = G__28602;
chunk__28583_28591 = G__28603;
count__28584_28592 = G__28604;
i__28585_28593 = G__28605;
continue;
} else {
var dep_28606 = cljs.core.first.call(null,seq__28582_28600__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28606;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28606));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28606,(depth + (1)),state);
} else {
}


var G__28607 = cljs.core.next.call(null,seq__28582_28600__$1);
var G__28608 = null;
var G__28609 = (0);
var G__28610 = (0);
seq__28582_28590 = G__28607;
chunk__28583_28591 = G__28608;
count__28584_28592 = G__28609;
i__28585_28593 = G__28610;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28586){
var vec__28587 = p__28586;
var seq__28588 = cljs.core.seq.call(null,vec__28587);
var first__28589 = cljs.core.first.call(null,seq__28588);
var seq__28588__$1 = cljs.core.next.call(null,seq__28588);
var x = first__28589;
var xs = seq__28588__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28587,seq__28588,first__28589,seq__28588__$1,x,xs,get_deps__$1){
return (function (p1__28573_SHARP_){
return clojure.set.difference.call(null,p1__28573_SHARP_,x);
});})(vec__28587,seq__28588,first__28589,seq__28588__$1,x,xs,get_deps__$1))
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
var seq__28611 = cljs.core.seq.call(null,provides);
var chunk__28612 = null;
var count__28613 = (0);
var i__28614 = (0);
while(true){
if((i__28614 < count__28613)){
var prov = cljs.core._nth.call(null,chunk__28612,i__28614);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28615_28623 = cljs.core.seq.call(null,requires);
var chunk__28616_28624 = null;
var count__28617_28625 = (0);
var i__28618_28626 = (0);
while(true){
if((i__28618_28626 < count__28617_28625)){
var req_28627 = cljs.core._nth.call(null,chunk__28616_28624,i__28618_28626);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28627,prov);


var G__28628 = seq__28615_28623;
var G__28629 = chunk__28616_28624;
var G__28630 = count__28617_28625;
var G__28631 = (i__28618_28626 + (1));
seq__28615_28623 = G__28628;
chunk__28616_28624 = G__28629;
count__28617_28625 = G__28630;
i__28618_28626 = G__28631;
continue;
} else {
var temp__5457__auto___28632 = cljs.core.seq.call(null,seq__28615_28623);
if(temp__5457__auto___28632){
var seq__28615_28633__$1 = temp__5457__auto___28632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28615_28633__$1)){
var c__4319__auto___28634 = cljs.core.chunk_first.call(null,seq__28615_28633__$1);
var G__28635 = cljs.core.chunk_rest.call(null,seq__28615_28633__$1);
var G__28636 = c__4319__auto___28634;
var G__28637 = cljs.core.count.call(null,c__4319__auto___28634);
var G__28638 = (0);
seq__28615_28623 = G__28635;
chunk__28616_28624 = G__28636;
count__28617_28625 = G__28637;
i__28618_28626 = G__28638;
continue;
} else {
var req_28639 = cljs.core.first.call(null,seq__28615_28633__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28639,prov);


var G__28640 = cljs.core.next.call(null,seq__28615_28633__$1);
var G__28641 = null;
var G__28642 = (0);
var G__28643 = (0);
seq__28615_28623 = G__28640;
chunk__28616_28624 = G__28641;
count__28617_28625 = G__28642;
i__28618_28626 = G__28643;
continue;
}
} else {
}
}
break;
}


var G__28644 = seq__28611;
var G__28645 = chunk__28612;
var G__28646 = count__28613;
var G__28647 = (i__28614 + (1));
seq__28611 = G__28644;
chunk__28612 = G__28645;
count__28613 = G__28646;
i__28614 = G__28647;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28611);
if(temp__5457__auto__){
var seq__28611__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28611__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28611__$1);
var G__28648 = cljs.core.chunk_rest.call(null,seq__28611__$1);
var G__28649 = c__4319__auto__;
var G__28650 = cljs.core.count.call(null,c__4319__auto__);
var G__28651 = (0);
seq__28611 = G__28648;
chunk__28612 = G__28649;
count__28613 = G__28650;
i__28614 = G__28651;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28611__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28619_28652 = cljs.core.seq.call(null,requires);
var chunk__28620_28653 = null;
var count__28621_28654 = (0);
var i__28622_28655 = (0);
while(true){
if((i__28622_28655 < count__28621_28654)){
var req_28656 = cljs.core._nth.call(null,chunk__28620_28653,i__28622_28655);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28656,prov);


var G__28657 = seq__28619_28652;
var G__28658 = chunk__28620_28653;
var G__28659 = count__28621_28654;
var G__28660 = (i__28622_28655 + (1));
seq__28619_28652 = G__28657;
chunk__28620_28653 = G__28658;
count__28621_28654 = G__28659;
i__28622_28655 = G__28660;
continue;
} else {
var temp__5457__auto___28661__$1 = cljs.core.seq.call(null,seq__28619_28652);
if(temp__5457__auto___28661__$1){
var seq__28619_28662__$1 = temp__5457__auto___28661__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28619_28662__$1)){
var c__4319__auto___28663 = cljs.core.chunk_first.call(null,seq__28619_28662__$1);
var G__28664 = cljs.core.chunk_rest.call(null,seq__28619_28662__$1);
var G__28665 = c__4319__auto___28663;
var G__28666 = cljs.core.count.call(null,c__4319__auto___28663);
var G__28667 = (0);
seq__28619_28652 = G__28664;
chunk__28620_28653 = G__28665;
count__28621_28654 = G__28666;
i__28622_28655 = G__28667;
continue;
} else {
var req_28668 = cljs.core.first.call(null,seq__28619_28662__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28668,prov);


var G__28669 = cljs.core.next.call(null,seq__28619_28662__$1);
var G__28670 = null;
var G__28671 = (0);
var G__28672 = (0);
seq__28619_28652 = G__28669;
chunk__28620_28653 = G__28670;
count__28621_28654 = G__28671;
i__28622_28655 = G__28672;
continue;
}
} else {
}
}
break;
}


var G__28673 = cljs.core.next.call(null,seq__28611__$1);
var G__28674 = null;
var G__28675 = (0);
var G__28676 = (0);
seq__28611 = G__28673;
chunk__28612 = G__28674;
count__28613 = G__28675;
i__28614 = G__28676;
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
var seq__28677_28681 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28678_28682 = null;
var count__28679_28683 = (0);
var i__28680_28684 = (0);
while(true){
if((i__28680_28684 < count__28679_28683)){
var ns_28685 = cljs.core._nth.call(null,chunk__28678_28682,i__28680_28684);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28685);


var G__28686 = seq__28677_28681;
var G__28687 = chunk__28678_28682;
var G__28688 = count__28679_28683;
var G__28689 = (i__28680_28684 + (1));
seq__28677_28681 = G__28686;
chunk__28678_28682 = G__28687;
count__28679_28683 = G__28688;
i__28680_28684 = G__28689;
continue;
} else {
var temp__5457__auto___28690 = cljs.core.seq.call(null,seq__28677_28681);
if(temp__5457__auto___28690){
var seq__28677_28691__$1 = temp__5457__auto___28690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28677_28691__$1)){
var c__4319__auto___28692 = cljs.core.chunk_first.call(null,seq__28677_28691__$1);
var G__28693 = cljs.core.chunk_rest.call(null,seq__28677_28691__$1);
var G__28694 = c__4319__auto___28692;
var G__28695 = cljs.core.count.call(null,c__4319__auto___28692);
var G__28696 = (0);
seq__28677_28681 = G__28693;
chunk__28678_28682 = G__28694;
count__28679_28683 = G__28695;
i__28680_28684 = G__28696;
continue;
} else {
var ns_28697 = cljs.core.first.call(null,seq__28677_28691__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28697);


var G__28698 = cljs.core.next.call(null,seq__28677_28691__$1);
var G__28699 = null;
var G__28700 = (0);
var G__28701 = (0);
seq__28677_28681 = G__28698;
chunk__28678_28682 = G__28699;
count__28679_28683 = G__28700;
i__28680_28684 = G__28701;
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
var G__28702__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28703__i = 0, G__28703__a = new Array(arguments.length -  0);
while (G__28703__i < G__28703__a.length) {G__28703__a[G__28703__i] = arguments[G__28703__i + 0]; ++G__28703__i;}
  args = new cljs.core.IndexedSeq(G__28703__a,0,null);
} 
return G__28702__delegate.call(this,args);};
G__28702.cljs$lang$maxFixedArity = 0;
G__28702.cljs$lang$applyTo = (function (arglist__28704){
var args = cljs.core.seq(arglist__28704);
return G__28702__delegate(args);
});
G__28702.cljs$core$IFn$_invoke$arity$variadic = G__28702__delegate;
return G__28702;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__28705_SHARP_,p2__28706_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28705_SHARP_)].join('')),p2__28706_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__28707_SHARP_,p2__28708_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28707_SHARP_)].join(''),p2__28708_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28709 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28709.addCallback(((function (G__28709){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28709))
);

G__28709.addErrback(((function (G__28709){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28709))
);

return G__28709;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28710){if((e28710 instanceof Error)){
var e = e28710;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28710;

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
}catch (e28711){if((e28711 instanceof Error)){
var e = e28711;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28711;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28712 = cljs.core._EQ_;
var expr__28713 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28712.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28713))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28712.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28713))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28712.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28713))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28712,expr__28713){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28712,expr__28713))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28715,callback){
var map__28716 = p__28715;
var map__28716__$1 = ((((!((map__28716 == null)))?(((((map__28716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28716):map__28716);
var file_msg = map__28716__$1;
var request_url = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28716,map__28716__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28716,map__28716__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__){
return (function (state_28754){
var state_val_28755 = (state_28754[(1)]);
if((state_val_28755 === (7))){
var inst_28750 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28756_28782 = state_28754__$1;
(statearr_28756_28782[(2)] = inst_28750);

(statearr_28756_28782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (1))){
var state_28754__$1 = state_28754;
var statearr_28757_28783 = state_28754__$1;
(statearr_28757_28783[(2)] = null);

(statearr_28757_28783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (4))){
var inst_28720 = (state_28754[(7)]);
var inst_28720__$1 = (state_28754[(2)]);
var state_28754__$1 = (function (){var statearr_28758 = state_28754;
(statearr_28758[(7)] = inst_28720__$1);

return statearr_28758;
})();
if(cljs.core.truth_(inst_28720__$1)){
var statearr_28759_28784 = state_28754__$1;
(statearr_28759_28784[(1)] = (5));

} else {
var statearr_28760_28785 = state_28754__$1;
(statearr_28760_28785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (15))){
var inst_28733 = (state_28754[(8)]);
var inst_28735 = (state_28754[(9)]);
var inst_28737 = inst_28735.call(null,inst_28733);
var state_28754__$1 = state_28754;
var statearr_28761_28786 = state_28754__$1;
(statearr_28761_28786[(2)] = inst_28737);

(statearr_28761_28786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (13))){
var inst_28744 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28762_28787 = state_28754__$1;
(statearr_28762_28787[(2)] = inst_28744);

(statearr_28762_28787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (6))){
var state_28754__$1 = state_28754;
var statearr_28763_28788 = state_28754__$1;
(statearr_28763_28788[(2)] = null);

(statearr_28763_28788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (17))){
var inst_28741 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28764_28789 = state_28754__$1;
(statearr_28764_28789[(2)] = inst_28741);

(statearr_28764_28789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (3))){
var inst_28752 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28754__$1,inst_28752);
} else {
if((state_val_28755 === (12))){
var state_28754__$1 = state_28754;
var statearr_28765_28790 = state_28754__$1;
(statearr_28765_28790[(2)] = null);

(statearr_28765_28790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (2))){
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28754__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28755 === (11))){
var inst_28725 = (state_28754[(10)]);
var inst_28731 = figwheel.client.file_reloading.blocking_load.call(null,inst_28725);
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28754__$1,(14),inst_28731);
} else {
if((state_val_28755 === (9))){
var inst_28725 = (state_28754[(10)]);
var state_28754__$1 = state_28754;
if(cljs.core.truth_(inst_28725)){
var statearr_28766_28791 = state_28754__$1;
(statearr_28766_28791[(1)] = (11));

} else {
var statearr_28767_28792 = state_28754__$1;
(statearr_28767_28792[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (5))){
var inst_28720 = (state_28754[(7)]);
var inst_28726 = (state_28754[(11)]);
var inst_28725 = cljs.core.nth.call(null,inst_28720,(0),null);
var inst_28726__$1 = cljs.core.nth.call(null,inst_28720,(1),null);
var state_28754__$1 = (function (){var statearr_28768 = state_28754;
(statearr_28768[(10)] = inst_28725);

(statearr_28768[(11)] = inst_28726__$1);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28726__$1)){
var statearr_28769_28793 = state_28754__$1;
(statearr_28769_28793[(1)] = (8));

} else {
var statearr_28770_28794 = state_28754__$1;
(statearr_28770_28794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (14))){
var inst_28725 = (state_28754[(10)]);
var inst_28735 = (state_28754[(9)]);
var inst_28733 = (state_28754[(2)]);
var inst_28734 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28735__$1 = cljs.core.get.call(null,inst_28734,inst_28725);
var state_28754__$1 = (function (){var statearr_28771 = state_28754;
(statearr_28771[(8)] = inst_28733);

(statearr_28771[(9)] = inst_28735__$1);

return statearr_28771;
})();
if(cljs.core.truth_(inst_28735__$1)){
var statearr_28772_28795 = state_28754__$1;
(statearr_28772_28795[(1)] = (15));

} else {
var statearr_28773_28796 = state_28754__$1;
(statearr_28773_28796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (16))){
var inst_28733 = (state_28754[(8)]);
var inst_28739 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28733);
var state_28754__$1 = state_28754;
var statearr_28774_28797 = state_28754__$1;
(statearr_28774_28797[(2)] = inst_28739);

(statearr_28774_28797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (10))){
var inst_28746 = (state_28754[(2)]);
var state_28754__$1 = (function (){var statearr_28775 = state_28754;
(statearr_28775[(12)] = inst_28746);

return statearr_28775;
})();
var statearr_28776_28798 = state_28754__$1;
(statearr_28776_28798[(2)] = null);

(statearr_28776_28798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (8))){
var inst_28726 = (state_28754[(11)]);
var inst_28728 = eval(inst_28726);
var state_28754__$1 = state_28754;
var statearr_28777_28799 = state_28754__$1;
(statearr_28777_28799[(2)] = inst_28728);

(statearr_28777_28799[(1)] = (10));


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
});})(c__26439__auto__))
;
return ((function (switch__26349__auto__,c__26439__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26350__auto__ = null;
var figwheel$client$file_reloading$state_machine__26350__auto____0 = (function (){
var statearr_28778 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28778[(0)] = figwheel$client$file_reloading$state_machine__26350__auto__);

(statearr_28778[(1)] = (1));

return statearr_28778;
});
var figwheel$client$file_reloading$state_machine__26350__auto____1 = (function (state_28754){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_28754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e28779){if((e28779 instanceof Object)){
var ex__26353__auto__ = e28779;
var statearr_28780_28800 = state_28754;
(statearr_28780_28800[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28801 = state_28754;
state_28754 = G__28801;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26350__auto__ = function(state_28754){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26350__auto____1.call(this,state_28754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26350__auto____0;
figwheel$client$file_reloading$state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26350__auto____1;
return figwheel$client$file_reloading$state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__))
})();
var state__26441__auto__ = (function (){var statearr_28781 = f__26440__auto__.call(null);
(statearr_28781[(6)] = c__26439__auto__);

return statearr_28781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__))
);

return c__26439__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28803 = arguments.length;
switch (G__28803) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28805,callback){
var map__28806 = p__28805;
var map__28806__$1 = ((((!((map__28806 == null)))?(((((map__28806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28806):map__28806);
var file_msg = map__28806__$1;
var namespace = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28806,map__28806__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28806,map__28806__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28808){
var map__28809 = p__28808;
var map__28809__$1 = ((((!((map__28809 == null)))?(((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var file_msg = map__28809__$1;
var namespace = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28811){
var map__28812 = p__28811;
var map__28812__$1 = ((((!((map__28812 == null)))?(((((map__28812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28812):map__28812);
var file_msg = map__28812__$1;
var namespace = cljs.core.get.call(null,map__28812__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28814,callback){
var map__28815 = p__28814;
var map__28815__$1 = ((((!((map__28815 == null)))?(((((map__28815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28815):map__28815);
var file_msg = map__28815__$1;
var request_url = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26439__auto___28865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto___28865,out){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto___28865,out){
return (function (state_28850){
var state_val_28851 = (state_28850[(1)]);
if((state_val_28851 === (1))){
var inst_28824 = cljs.core.seq.call(null,files);
var inst_28825 = cljs.core.first.call(null,inst_28824);
var inst_28826 = cljs.core.next.call(null,inst_28824);
var inst_28827 = files;
var state_28850__$1 = (function (){var statearr_28852 = state_28850;
(statearr_28852[(7)] = inst_28826);

(statearr_28852[(8)] = inst_28825);

(statearr_28852[(9)] = inst_28827);

return statearr_28852;
})();
var statearr_28853_28866 = state_28850__$1;
(statearr_28853_28866[(2)] = null);

(statearr_28853_28866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (2))){
var inst_28833 = (state_28850[(10)]);
var inst_28827 = (state_28850[(9)]);
var inst_28832 = cljs.core.seq.call(null,inst_28827);
var inst_28833__$1 = cljs.core.first.call(null,inst_28832);
var inst_28834 = cljs.core.next.call(null,inst_28832);
var inst_28835 = (inst_28833__$1 == null);
var inst_28836 = cljs.core.not.call(null,inst_28835);
var state_28850__$1 = (function (){var statearr_28854 = state_28850;
(statearr_28854[(11)] = inst_28834);

(statearr_28854[(10)] = inst_28833__$1);

return statearr_28854;
})();
if(inst_28836){
var statearr_28855_28867 = state_28850__$1;
(statearr_28855_28867[(1)] = (4));

} else {
var statearr_28856_28868 = state_28850__$1;
(statearr_28856_28868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (3))){
var inst_28848 = (state_28850[(2)]);
var state_28850__$1 = state_28850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28850__$1,inst_28848);
} else {
if((state_val_28851 === (4))){
var inst_28833 = (state_28850[(10)]);
var inst_28838 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28833);
var state_28850__$1 = state_28850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28850__$1,(7),inst_28838);
} else {
if((state_val_28851 === (5))){
var inst_28844 = cljs.core.async.close_BANG_.call(null,out);
var state_28850__$1 = state_28850;
var statearr_28857_28869 = state_28850__$1;
(statearr_28857_28869[(2)] = inst_28844);

(statearr_28857_28869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (6))){
var inst_28846 = (state_28850[(2)]);
var state_28850__$1 = state_28850;
var statearr_28858_28870 = state_28850__$1;
(statearr_28858_28870[(2)] = inst_28846);

(statearr_28858_28870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (7))){
var inst_28834 = (state_28850[(11)]);
var inst_28840 = (state_28850[(2)]);
var inst_28841 = cljs.core.async.put_BANG_.call(null,out,inst_28840);
var inst_28827 = inst_28834;
var state_28850__$1 = (function (){var statearr_28859 = state_28850;
(statearr_28859[(12)] = inst_28841);

(statearr_28859[(9)] = inst_28827);

return statearr_28859;
})();
var statearr_28860_28871 = state_28850__$1;
(statearr_28860_28871[(2)] = null);

(statearr_28860_28871[(1)] = (2));


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
});})(c__26439__auto___28865,out))
;
return ((function (switch__26349__auto__,c__26439__auto___28865,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto____0 = (function (){
var statearr_28861 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28861[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto__);

(statearr_28861[(1)] = (1));

return statearr_28861;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto____1 = (function (state_28850){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_28850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e28862){if((e28862 instanceof Object)){
var ex__26353__auto__ = e28862;
var statearr_28863_28872 = state_28850;
(statearr_28863_28872[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28873 = state_28850;
state_28850 = G__28873;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto__ = function(state_28850){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto____1.call(this,state_28850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto___28865,out))
})();
var state__26441__auto__ = (function (){var statearr_28864 = f__26440__auto__.call(null);
(statearr_28864[(6)] = c__26439__auto___28865);

return statearr_28864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto___28865,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28874,opts){
var map__28875 = p__28874;
var map__28875__$1 = ((((!((map__28875 == null)))?(((((map__28875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28875):map__28875);
var eval_body = cljs.core.get.call(null,map__28875__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28877){var e = e28877;
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
return (function (p1__28878_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28878_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28879){
var vec__28880 = p__28879;
var k = cljs.core.nth.call(null,vec__28880,(0),null);
var v = cljs.core.nth.call(null,vec__28880,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28883){
var vec__28884 = p__28883;
var k = cljs.core.nth.call(null,vec__28884,(0),null);
var v = cljs.core.nth.call(null,vec__28884,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28890,p__28891){
var map__28892 = p__28890;
var map__28892__$1 = ((((!((map__28892 == null)))?(((((map__28892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28892):map__28892);
var opts = map__28892__$1;
var before_jsload = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28893 = p__28891;
var map__28893__$1 = ((((!((map__28893 == null)))?(((((map__28893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28893):map__28893);
var msg = map__28893__$1;
var files = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26440__auto__ = (function (){var switch__26349__auto__ = ((function (c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29047){
var state_val_29048 = (state_29047[(1)]);
if((state_val_29048 === (7))){
var inst_28908 = (state_29047[(7)]);
var inst_28907 = (state_29047[(8)]);
var inst_28910 = (state_29047[(9)]);
var inst_28909 = (state_29047[(10)]);
var inst_28915 = cljs.core._nth.call(null,inst_28908,inst_28910);
var inst_28916 = figwheel.client.file_reloading.eval_body.call(null,inst_28915,opts);
var inst_28917 = (inst_28910 + (1));
var tmp29049 = inst_28908;
var tmp29050 = inst_28907;
var tmp29051 = inst_28909;
var inst_28907__$1 = tmp29050;
var inst_28908__$1 = tmp29049;
var inst_28909__$1 = tmp29051;
var inst_28910__$1 = inst_28917;
var state_29047__$1 = (function (){var statearr_29052 = state_29047;
(statearr_29052[(7)] = inst_28908__$1);

(statearr_29052[(11)] = inst_28916);

(statearr_29052[(8)] = inst_28907__$1);

(statearr_29052[(9)] = inst_28910__$1);

(statearr_29052[(10)] = inst_28909__$1);

return statearr_29052;
})();
var statearr_29053_29136 = state_29047__$1;
(statearr_29053_29136[(2)] = null);

(statearr_29053_29136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (20))){
var inst_28950 = (state_29047[(12)]);
var inst_28958 = figwheel.client.file_reloading.sort_files.call(null,inst_28950);
var state_29047__$1 = state_29047;
var statearr_29054_29137 = state_29047__$1;
(statearr_29054_29137[(2)] = inst_28958);

(statearr_29054_29137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (27))){
var state_29047__$1 = state_29047;
var statearr_29055_29138 = state_29047__$1;
(statearr_29055_29138[(2)] = null);

(statearr_29055_29138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (1))){
var inst_28899 = (state_29047[(13)]);
var inst_28896 = before_jsload.call(null,files);
var inst_28897 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28898 = (function (){return ((function (inst_28899,inst_28896,inst_28897,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28887_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28887_SHARP_);
});
;})(inst_28899,inst_28896,inst_28897,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28899__$1 = cljs.core.filter.call(null,inst_28898,files);
var inst_28900 = cljs.core.not_empty.call(null,inst_28899__$1);
var state_29047__$1 = (function (){var statearr_29056 = state_29047;
(statearr_29056[(14)] = inst_28897);

(statearr_29056[(15)] = inst_28896);

(statearr_29056[(13)] = inst_28899__$1);

return statearr_29056;
})();
if(cljs.core.truth_(inst_28900)){
var statearr_29057_29139 = state_29047__$1;
(statearr_29057_29139[(1)] = (2));

} else {
var statearr_29058_29140 = state_29047__$1;
(statearr_29058_29140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (24))){
var state_29047__$1 = state_29047;
var statearr_29059_29141 = state_29047__$1;
(statearr_29059_29141[(2)] = null);

(statearr_29059_29141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (39))){
var inst_29000 = (state_29047[(16)]);
var state_29047__$1 = state_29047;
var statearr_29060_29142 = state_29047__$1;
(statearr_29060_29142[(2)] = inst_29000);

(statearr_29060_29142[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (46))){
var inst_29042 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
var statearr_29061_29143 = state_29047__$1;
(statearr_29061_29143[(2)] = inst_29042);

(statearr_29061_29143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (4))){
var inst_28944 = (state_29047[(2)]);
var inst_28945 = cljs.core.List.EMPTY;
var inst_28946 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28945);
var inst_28947 = (function (){return ((function (inst_28944,inst_28945,inst_28946,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28888_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28888_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28888_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28888_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_28944,inst_28945,inst_28946,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28948 = cljs.core.filter.call(null,inst_28947,files);
var inst_28949 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28950 = cljs.core.concat.call(null,inst_28948,inst_28949);
var state_29047__$1 = (function (){var statearr_29062 = state_29047;
(statearr_29062[(12)] = inst_28950);

(statearr_29062[(17)] = inst_28944);

(statearr_29062[(18)] = inst_28946);

return statearr_29062;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29063_29144 = state_29047__$1;
(statearr_29063_29144[(1)] = (16));

} else {
var statearr_29064_29145 = state_29047__$1;
(statearr_29064_29145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (15))){
var inst_28934 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
var statearr_29065_29146 = state_29047__$1;
(statearr_29065_29146[(2)] = inst_28934);

(statearr_29065_29146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (21))){
var inst_28960 = (state_29047[(19)]);
var inst_28960__$1 = (state_29047[(2)]);
var inst_28961 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28960__$1);
var state_29047__$1 = (function (){var statearr_29066 = state_29047;
(statearr_29066[(19)] = inst_28960__$1);

return statearr_29066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29047__$1,(22),inst_28961);
} else {
if((state_val_29048 === (31))){
var inst_29045 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29047__$1,inst_29045);
} else {
if((state_val_29048 === (32))){
var inst_29000 = (state_29047[(16)]);
var inst_29005 = inst_29000.cljs$lang$protocol_mask$partition0$;
var inst_29006 = (inst_29005 & (64));
var inst_29007 = inst_29000.cljs$core$ISeq$;
var inst_29008 = (cljs.core.PROTOCOL_SENTINEL === inst_29007);
var inst_29009 = ((inst_29006) || (inst_29008));
var state_29047__$1 = state_29047;
if(cljs.core.truth_(inst_29009)){
var statearr_29067_29147 = state_29047__$1;
(statearr_29067_29147[(1)] = (35));

} else {
var statearr_29068_29148 = state_29047__$1;
(statearr_29068_29148[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (40))){
var inst_29022 = (state_29047[(20)]);
var inst_29021 = (state_29047[(2)]);
var inst_29022__$1 = cljs.core.get.call(null,inst_29021,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29023 = cljs.core.get.call(null,inst_29021,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29024 = cljs.core.not_empty.call(null,inst_29022__$1);
var state_29047__$1 = (function (){var statearr_29069 = state_29047;
(statearr_29069[(20)] = inst_29022__$1);

(statearr_29069[(21)] = inst_29023);

return statearr_29069;
})();
if(cljs.core.truth_(inst_29024)){
var statearr_29070_29149 = state_29047__$1;
(statearr_29070_29149[(1)] = (41));

} else {
var statearr_29071_29150 = state_29047__$1;
(statearr_29071_29150[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (33))){
var state_29047__$1 = state_29047;
var statearr_29072_29151 = state_29047__$1;
(statearr_29072_29151[(2)] = false);

(statearr_29072_29151[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (13))){
var inst_28920 = (state_29047[(22)]);
var inst_28924 = cljs.core.chunk_first.call(null,inst_28920);
var inst_28925 = cljs.core.chunk_rest.call(null,inst_28920);
var inst_28926 = cljs.core.count.call(null,inst_28924);
var inst_28907 = inst_28925;
var inst_28908 = inst_28924;
var inst_28909 = inst_28926;
var inst_28910 = (0);
var state_29047__$1 = (function (){var statearr_29073 = state_29047;
(statearr_29073[(7)] = inst_28908);

(statearr_29073[(8)] = inst_28907);

(statearr_29073[(9)] = inst_28910);

(statearr_29073[(10)] = inst_28909);

return statearr_29073;
})();
var statearr_29074_29152 = state_29047__$1;
(statearr_29074_29152[(2)] = null);

(statearr_29074_29152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (22))){
var inst_28963 = (state_29047[(23)]);
var inst_28960 = (state_29047[(19)]);
var inst_28964 = (state_29047[(24)]);
var inst_28968 = (state_29047[(25)]);
var inst_28963__$1 = (state_29047[(2)]);
var inst_28964__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28963__$1);
var inst_28965 = (function (){var all_files = inst_28960;
var res_SINGLEQUOTE_ = inst_28963__$1;
var res = inst_28964__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28963,inst_28960,inst_28964,inst_28968,inst_28963__$1,inst_28964__$1,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28889_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28889_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28963,inst_28960,inst_28964,inst_28968,inst_28963__$1,inst_28964__$1,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28966 = cljs.core.filter.call(null,inst_28965,inst_28963__$1);
var inst_28967 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28968__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28967);
var inst_28969 = cljs.core.not_empty.call(null,inst_28968__$1);
var state_29047__$1 = (function (){var statearr_29075 = state_29047;
(statearr_29075[(23)] = inst_28963__$1);

(statearr_29075[(24)] = inst_28964__$1);

(statearr_29075[(25)] = inst_28968__$1);

(statearr_29075[(26)] = inst_28966);

return statearr_29075;
})();
if(cljs.core.truth_(inst_28969)){
var statearr_29076_29153 = state_29047__$1;
(statearr_29076_29153[(1)] = (23));

} else {
var statearr_29077_29154 = state_29047__$1;
(statearr_29077_29154[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (36))){
var state_29047__$1 = state_29047;
var statearr_29078_29155 = state_29047__$1;
(statearr_29078_29155[(2)] = false);

(statearr_29078_29155[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (41))){
var inst_29022 = (state_29047[(20)]);
var inst_29026 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29027 = cljs.core.map.call(null,inst_29026,inst_29022);
var inst_29028 = cljs.core.pr_str.call(null,inst_29027);
var inst_29029 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29028)].join('');
var inst_29030 = figwheel.client.utils.log.call(null,inst_29029);
var state_29047__$1 = state_29047;
var statearr_29079_29156 = state_29047__$1;
(statearr_29079_29156[(2)] = inst_29030);

(statearr_29079_29156[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (43))){
var inst_29023 = (state_29047[(21)]);
var inst_29033 = (state_29047[(2)]);
var inst_29034 = cljs.core.not_empty.call(null,inst_29023);
var state_29047__$1 = (function (){var statearr_29080 = state_29047;
(statearr_29080[(27)] = inst_29033);

return statearr_29080;
})();
if(cljs.core.truth_(inst_29034)){
var statearr_29081_29157 = state_29047__$1;
(statearr_29081_29157[(1)] = (44));

} else {
var statearr_29082_29158 = state_29047__$1;
(statearr_29082_29158[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (29))){
var inst_29000 = (state_29047[(16)]);
var inst_28963 = (state_29047[(23)]);
var inst_28960 = (state_29047[(19)]);
var inst_28964 = (state_29047[(24)]);
var inst_28968 = (state_29047[(25)]);
var inst_28966 = (state_29047[(26)]);
var inst_28996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28999 = (function (){var all_files = inst_28960;
var res_SINGLEQUOTE_ = inst_28963;
var res = inst_28964;
var files_not_loaded = inst_28966;
var dependencies_that_loaded = inst_28968;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29000,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28996,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28998){
var map__29083 = p__28998;
var map__29083__$1 = ((((!((map__29083 == null)))?(((((map__29083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29083):map__29083);
var namespace = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29000,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28996,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29000__$1 = cljs.core.group_by.call(null,inst_28999,inst_28966);
var inst_29002 = (inst_29000__$1 == null);
var inst_29003 = cljs.core.not.call(null,inst_29002);
var state_29047__$1 = (function (){var statearr_29085 = state_29047;
(statearr_29085[(16)] = inst_29000__$1);

(statearr_29085[(28)] = inst_28996);

return statearr_29085;
})();
if(inst_29003){
var statearr_29086_29159 = state_29047__$1;
(statearr_29086_29159[(1)] = (32));

} else {
var statearr_29087_29160 = state_29047__$1;
(statearr_29087_29160[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (44))){
var inst_29023 = (state_29047[(21)]);
var inst_29036 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29023);
var inst_29037 = cljs.core.pr_str.call(null,inst_29036);
var inst_29038 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29037)].join('');
var inst_29039 = figwheel.client.utils.log.call(null,inst_29038);
var state_29047__$1 = state_29047;
var statearr_29088_29161 = state_29047__$1;
(statearr_29088_29161[(2)] = inst_29039);

(statearr_29088_29161[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (6))){
var inst_28941 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
var statearr_29089_29162 = state_29047__$1;
(statearr_29089_29162[(2)] = inst_28941);

(statearr_29089_29162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (28))){
var inst_28966 = (state_29047[(26)]);
var inst_28993 = (state_29047[(2)]);
var inst_28994 = cljs.core.not_empty.call(null,inst_28966);
var state_29047__$1 = (function (){var statearr_29090 = state_29047;
(statearr_29090[(29)] = inst_28993);

return statearr_29090;
})();
if(cljs.core.truth_(inst_28994)){
var statearr_29091_29163 = state_29047__$1;
(statearr_29091_29163[(1)] = (29));

} else {
var statearr_29092_29164 = state_29047__$1;
(statearr_29092_29164[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (25))){
var inst_28964 = (state_29047[(24)]);
var inst_28980 = (state_29047[(2)]);
var inst_28981 = cljs.core.not_empty.call(null,inst_28964);
var state_29047__$1 = (function (){var statearr_29093 = state_29047;
(statearr_29093[(30)] = inst_28980);

return statearr_29093;
})();
if(cljs.core.truth_(inst_28981)){
var statearr_29094_29165 = state_29047__$1;
(statearr_29094_29165[(1)] = (26));

} else {
var statearr_29095_29166 = state_29047__$1;
(statearr_29095_29166[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (34))){
var inst_29016 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
if(cljs.core.truth_(inst_29016)){
var statearr_29096_29167 = state_29047__$1;
(statearr_29096_29167[(1)] = (38));

} else {
var statearr_29097_29168 = state_29047__$1;
(statearr_29097_29168[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (17))){
var state_29047__$1 = state_29047;
var statearr_29098_29169 = state_29047__$1;
(statearr_29098_29169[(2)] = recompile_dependents);

(statearr_29098_29169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (3))){
var state_29047__$1 = state_29047;
var statearr_29099_29170 = state_29047__$1;
(statearr_29099_29170[(2)] = null);

(statearr_29099_29170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (12))){
var inst_28937 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
var statearr_29100_29171 = state_29047__$1;
(statearr_29100_29171[(2)] = inst_28937);

(statearr_29100_29171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (2))){
var inst_28899 = (state_29047[(13)]);
var inst_28906 = cljs.core.seq.call(null,inst_28899);
var inst_28907 = inst_28906;
var inst_28908 = null;
var inst_28909 = (0);
var inst_28910 = (0);
var state_29047__$1 = (function (){var statearr_29101 = state_29047;
(statearr_29101[(7)] = inst_28908);

(statearr_29101[(8)] = inst_28907);

(statearr_29101[(9)] = inst_28910);

(statearr_29101[(10)] = inst_28909);

return statearr_29101;
})();
var statearr_29102_29172 = state_29047__$1;
(statearr_29102_29172[(2)] = null);

(statearr_29102_29172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (23))){
var inst_28963 = (state_29047[(23)]);
var inst_28960 = (state_29047[(19)]);
var inst_28964 = (state_29047[(24)]);
var inst_28968 = (state_29047[(25)]);
var inst_28966 = (state_29047[(26)]);
var inst_28971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28973 = (function (){var all_files = inst_28960;
var res_SINGLEQUOTE_ = inst_28963;
var res = inst_28964;
var files_not_loaded = inst_28966;
var dependencies_that_loaded = inst_28968;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28971,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28972){
var map__29103 = p__28972;
var map__29103__$1 = ((((!((map__29103 == null)))?(((((map__29103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29103):map__29103);
var request_url = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28971,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28974 = cljs.core.reverse.call(null,inst_28968);
var inst_28975 = cljs.core.map.call(null,inst_28973,inst_28974);
var inst_28976 = cljs.core.pr_str.call(null,inst_28975);
var inst_28977 = figwheel.client.utils.log.call(null,inst_28976);
var state_29047__$1 = (function (){var statearr_29105 = state_29047;
(statearr_29105[(31)] = inst_28971);

return statearr_29105;
})();
var statearr_29106_29173 = state_29047__$1;
(statearr_29106_29173[(2)] = inst_28977);

(statearr_29106_29173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (35))){
var state_29047__$1 = state_29047;
var statearr_29107_29174 = state_29047__$1;
(statearr_29107_29174[(2)] = true);

(statearr_29107_29174[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (19))){
var inst_28950 = (state_29047[(12)]);
var inst_28956 = figwheel.client.file_reloading.expand_files.call(null,inst_28950);
var state_29047__$1 = state_29047;
var statearr_29108_29175 = state_29047__$1;
(statearr_29108_29175[(2)] = inst_28956);

(statearr_29108_29175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (11))){
var state_29047__$1 = state_29047;
var statearr_29109_29176 = state_29047__$1;
(statearr_29109_29176[(2)] = null);

(statearr_29109_29176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (9))){
var inst_28939 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
var statearr_29110_29177 = state_29047__$1;
(statearr_29110_29177[(2)] = inst_28939);

(statearr_29110_29177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (5))){
var inst_28910 = (state_29047[(9)]);
var inst_28909 = (state_29047[(10)]);
var inst_28912 = (inst_28910 < inst_28909);
var inst_28913 = inst_28912;
var state_29047__$1 = state_29047;
if(cljs.core.truth_(inst_28913)){
var statearr_29111_29178 = state_29047__$1;
(statearr_29111_29178[(1)] = (7));

} else {
var statearr_29112_29179 = state_29047__$1;
(statearr_29112_29179[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (14))){
var inst_28920 = (state_29047[(22)]);
var inst_28929 = cljs.core.first.call(null,inst_28920);
var inst_28930 = figwheel.client.file_reloading.eval_body.call(null,inst_28929,opts);
var inst_28931 = cljs.core.next.call(null,inst_28920);
var inst_28907 = inst_28931;
var inst_28908 = null;
var inst_28909 = (0);
var inst_28910 = (0);
var state_29047__$1 = (function (){var statearr_29113 = state_29047;
(statearr_29113[(7)] = inst_28908);

(statearr_29113[(8)] = inst_28907);

(statearr_29113[(9)] = inst_28910);

(statearr_29113[(32)] = inst_28930);

(statearr_29113[(10)] = inst_28909);

return statearr_29113;
})();
var statearr_29114_29180 = state_29047__$1;
(statearr_29114_29180[(2)] = null);

(statearr_29114_29180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (45))){
var state_29047__$1 = state_29047;
var statearr_29115_29181 = state_29047__$1;
(statearr_29115_29181[(2)] = null);

(statearr_29115_29181[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (26))){
var inst_28963 = (state_29047[(23)]);
var inst_28960 = (state_29047[(19)]);
var inst_28964 = (state_29047[(24)]);
var inst_28968 = (state_29047[(25)]);
var inst_28966 = (state_29047[(26)]);
var inst_28983 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28985 = (function (){var all_files = inst_28960;
var res_SINGLEQUOTE_ = inst_28963;
var res = inst_28964;
var files_not_loaded = inst_28966;
var dependencies_that_loaded = inst_28968;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28983,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28984){
var map__29116 = p__28984;
var map__29116__$1 = ((((!((map__29116 == null)))?(((((map__29116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29116):map__29116);
var namespace = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28983,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28986 = cljs.core.map.call(null,inst_28985,inst_28964);
var inst_28987 = cljs.core.pr_str.call(null,inst_28986);
var inst_28988 = figwheel.client.utils.log.call(null,inst_28987);
var inst_28989 = (function (){var all_files = inst_28960;
var res_SINGLEQUOTE_ = inst_28963;
var res = inst_28964;
var files_not_loaded = inst_28966;
var dependencies_that_loaded = inst_28968;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28983,inst_28985,inst_28986,inst_28987,inst_28988,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28963,inst_28960,inst_28964,inst_28968,inst_28966,inst_28983,inst_28985,inst_28986,inst_28987,inst_28988,state_val_29048,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28990 = setTimeout(inst_28989,(10));
var state_29047__$1 = (function (){var statearr_29118 = state_29047;
(statearr_29118[(33)] = inst_28983);

(statearr_29118[(34)] = inst_28988);

return statearr_29118;
})();
var statearr_29119_29182 = state_29047__$1;
(statearr_29119_29182[(2)] = inst_28990);

(statearr_29119_29182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (16))){
var state_29047__$1 = state_29047;
var statearr_29120_29183 = state_29047__$1;
(statearr_29120_29183[(2)] = reload_dependents);

(statearr_29120_29183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (38))){
var inst_29000 = (state_29047[(16)]);
var inst_29018 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29000);
var state_29047__$1 = state_29047;
var statearr_29121_29184 = state_29047__$1;
(statearr_29121_29184[(2)] = inst_29018);

(statearr_29121_29184[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (30))){
var state_29047__$1 = state_29047;
var statearr_29122_29185 = state_29047__$1;
(statearr_29122_29185[(2)] = null);

(statearr_29122_29185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (10))){
var inst_28920 = (state_29047[(22)]);
var inst_28922 = cljs.core.chunked_seq_QMARK_.call(null,inst_28920);
var state_29047__$1 = state_29047;
if(inst_28922){
var statearr_29123_29186 = state_29047__$1;
(statearr_29123_29186[(1)] = (13));

} else {
var statearr_29124_29187 = state_29047__$1;
(statearr_29124_29187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (18))){
var inst_28954 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
if(cljs.core.truth_(inst_28954)){
var statearr_29125_29188 = state_29047__$1;
(statearr_29125_29188[(1)] = (19));

} else {
var statearr_29126_29189 = state_29047__$1;
(statearr_29126_29189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (42))){
var state_29047__$1 = state_29047;
var statearr_29127_29190 = state_29047__$1;
(statearr_29127_29190[(2)] = null);

(statearr_29127_29190[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (37))){
var inst_29013 = (state_29047[(2)]);
var state_29047__$1 = state_29047;
var statearr_29128_29191 = state_29047__$1;
(statearr_29128_29191[(2)] = inst_29013);

(statearr_29128_29191[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29048 === (8))){
var inst_28920 = (state_29047[(22)]);
var inst_28907 = (state_29047[(8)]);
var inst_28920__$1 = cljs.core.seq.call(null,inst_28907);
var state_29047__$1 = (function (){var statearr_29129 = state_29047;
(statearr_29129[(22)] = inst_28920__$1);

return statearr_29129;
})();
if(inst_28920__$1){
var statearr_29130_29192 = state_29047__$1;
(statearr_29130_29192[(1)] = (10));

} else {
var statearr_29131_29193 = state_29047__$1;
(statearr_29131_29193[(1)] = (11));

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
});})(c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26349__auto__,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto____0 = (function (){
var statearr_29132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29132[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto__);

(statearr_29132[(1)] = (1));

return statearr_29132;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto____1 = (function (state_29047){
while(true){
var ret_value__26351__auto__ = (function (){try{while(true){
var result__26352__auto__ = switch__26349__auto__.call(null,state_29047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26352__auto__;
}
break;
}
}catch (e29133){if((e29133 instanceof Object)){
var ex__26353__auto__ = e29133;
var statearr_29134_29194 = state_29047;
(statearr_29134_29194[(5)] = ex__26353__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29195 = state_29047;
state_29047 = G__29195;
continue;
} else {
return ret_value__26351__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto__ = function(state_29047){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto____1.call(this,state_29047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26350__auto__;
})()
;})(switch__26349__auto__,c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26441__auto__ = (function (){var statearr_29135 = f__26440__auto__.call(null);
(statearr_29135[(6)] = c__26439__auto__);

return statearr_29135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26441__auto__);
});})(c__26439__auto__,map__28892,map__28892__$1,opts,before_jsload,on_jsload,reload_dependents,map__28893,map__28893__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26439__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29198,link){
var map__29199 = p__29198;
var map__29199__$1 = ((((!((map__29199 == null)))?(((((map__29199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29199):map__29199);
var file = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29199,map__29199__$1,file){
return (function (p1__29196_SHARP_,p2__29197_SHARP_){
if(cljs.core._EQ_.call(null,p1__29196_SHARP_,p2__29197_SHARP_)){
return p1__29196_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29199,map__29199__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29202){
var map__29203 = p__29202;
var map__29203__$1 = ((((!((map__29203 == null)))?(((((map__29203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var match_length = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29201_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29201_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29205_SHARP_,p2__29206_SHARP_){
return cljs.core.assoc.call(null,p1__29205_SHARP_,cljs.core.get.call(null,p2__29206_SHARP_,key),p2__29206_SHARP_);
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
var loaded_f_datas_29207 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29207);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29207);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29208,p__29209){
var map__29210 = p__29208;
var map__29210__$1 = ((((!((map__29210 == null)))?(((((map__29210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29210):map__29210);
var on_cssload = cljs.core.get.call(null,map__29210__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29211 = p__29209;
var map__29211__$1 = ((((!((map__29211 == null)))?(((((map__29211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29211):map__29211);
var files_msg = map__29211__$1;
var files = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1672621535268
