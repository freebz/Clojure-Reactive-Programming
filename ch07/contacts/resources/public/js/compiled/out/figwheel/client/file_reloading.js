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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32606_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32606_SHARP_));
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
var seq__32607 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32608 = null;
var count__32609 = (0);
var i__32610 = (0);
while(true){
if((i__32610 < count__32609)){
var n = cljs.core._nth.call(null,chunk__32608,i__32610);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32611 = seq__32607;
var G__32612 = chunk__32608;
var G__32613 = count__32609;
var G__32614 = (i__32610 + (1));
seq__32607 = G__32611;
chunk__32608 = G__32612;
count__32609 = G__32613;
i__32610 = G__32614;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32607);
if(temp__5457__auto__){
var seq__32607__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32607__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32607__$1);
var G__32615 = cljs.core.chunk_rest.call(null,seq__32607__$1);
var G__32616 = c__4319__auto__;
var G__32617 = cljs.core.count.call(null,c__4319__auto__);
var G__32618 = (0);
seq__32607 = G__32615;
chunk__32608 = G__32616;
count__32609 = G__32617;
i__32610 = G__32618;
continue;
} else {
var n = cljs.core.first.call(null,seq__32607__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32619 = cljs.core.next.call(null,seq__32607__$1);
var G__32620 = null;
var G__32621 = (0);
var G__32622 = (0);
seq__32607 = G__32619;
chunk__32608 = G__32620;
count__32609 = G__32621;
i__32610 = G__32622;
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
return cljs.core.some.call(null,(function (p__32623){
var vec__32624 = p__32623;
var _ = cljs.core.nth.call(null,vec__32624,(0),null);
var v = cljs.core.nth.call(null,vec__32624,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__32627){
var vec__32628 = p__32627;
var k = cljs.core.nth.call(null,vec__32628,(0),null);
var v = cljs.core.nth.call(null,vec__32628,(1),null);
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

var seq__32640_32648 = cljs.core.seq.call(null,deps);
var chunk__32641_32649 = null;
var count__32642_32650 = (0);
var i__32643_32651 = (0);
while(true){
if((i__32643_32651 < count__32642_32650)){
var dep_32652 = cljs.core._nth.call(null,chunk__32641_32649,i__32643_32651);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_32652;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32652));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32652,(depth + (1)),state);
} else {
}


var G__32653 = seq__32640_32648;
var G__32654 = chunk__32641_32649;
var G__32655 = count__32642_32650;
var G__32656 = (i__32643_32651 + (1));
seq__32640_32648 = G__32653;
chunk__32641_32649 = G__32654;
count__32642_32650 = G__32655;
i__32643_32651 = G__32656;
continue;
} else {
var temp__5457__auto___32657 = cljs.core.seq.call(null,seq__32640_32648);
if(temp__5457__auto___32657){
var seq__32640_32658__$1 = temp__5457__auto___32657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32640_32658__$1)){
var c__4319__auto___32659 = cljs.core.chunk_first.call(null,seq__32640_32658__$1);
var G__32660 = cljs.core.chunk_rest.call(null,seq__32640_32658__$1);
var G__32661 = c__4319__auto___32659;
var G__32662 = cljs.core.count.call(null,c__4319__auto___32659);
var G__32663 = (0);
seq__32640_32648 = G__32660;
chunk__32641_32649 = G__32661;
count__32642_32650 = G__32662;
i__32643_32651 = G__32663;
continue;
} else {
var dep_32664 = cljs.core.first.call(null,seq__32640_32658__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_32664;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32664));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32664,(depth + (1)),state);
} else {
}


var G__32665 = cljs.core.next.call(null,seq__32640_32658__$1);
var G__32666 = null;
var G__32667 = (0);
var G__32668 = (0);
seq__32640_32648 = G__32665;
chunk__32641_32649 = G__32666;
count__32642_32650 = G__32667;
i__32643_32651 = G__32668;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32644){
var vec__32645 = p__32644;
var seq__32646 = cljs.core.seq.call(null,vec__32645);
var first__32647 = cljs.core.first.call(null,seq__32646);
var seq__32646__$1 = cljs.core.next.call(null,seq__32646);
var x = first__32647;
var xs = seq__32646__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32645,seq__32646,first__32647,seq__32646__$1,x,xs,get_deps__$1){
return (function (p1__32631_SHARP_){
return clojure.set.difference.call(null,p1__32631_SHARP_,x);
});})(vec__32645,seq__32646,first__32647,seq__32646__$1,x,xs,get_deps__$1))
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
var seq__32669 = cljs.core.seq.call(null,provides);
var chunk__32670 = null;
var count__32671 = (0);
var i__32672 = (0);
while(true){
if((i__32672 < count__32671)){
var prov = cljs.core._nth.call(null,chunk__32670,i__32672);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32673_32681 = cljs.core.seq.call(null,requires);
var chunk__32674_32682 = null;
var count__32675_32683 = (0);
var i__32676_32684 = (0);
while(true){
if((i__32676_32684 < count__32675_32683)){
var req_32685 = cljs.core._nth.call(null,chunk__32674_32682,i__32676_32684);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32685,prov);


var G__32686 = seq__32673_32681;
var G__32687 = chunk__32674_32682;
var G__32688 = count__32675_32683;
var G__32689 = (i__32676_32684 + (1));
seq__32673_32681 = G__32686;
chunk__32674_32682 = G__32687;
count__32675_32683 = G__32688;
i__32676_32684 = G__32689;
continue;
} else {
var temp__5457__auto___32690 = cljs.core.seq.call(null,seq__32673_32681);
if(temp__5457__auto___32690){
var seq__32673_32691__$1 = temp__5457__auto___32690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32673_32691__$1)){
var c__4319__auto___32692 = cljs.core.chunk_first.call(null,seq__32673_32691__$1);
var G__32693 = cljs.core.chunk_rest.call(null,seq__32673_32691__$1);
var G__32694 = c__4319__auto___32692;
var G__32695 = cljs.core.count.call(null,c__4319__auto___32692);
var G__32696 = (0);
seq__32673_32681 = G__32693;
chunk__32674_32682 = G__32694;
count__32675_32683 = G__32695;
i__32676_32684 = G__32696;
continue;
} else {
var req_32697 = cljs.core.first.call(null,seq__32673_32691__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32697,prov);


var G__32698 = cljs.core.next.call(null,seq__32673_32691__$1);
var G__32699 = null;
var G__32700 = (0);
var G__32701 = (0);
seq__32673_32681 = G__32698;
chunk__32674_32682 = G__32699;
count__32675_32683 = G__32700;
i__32676_32684 = G__32701;
continue;
}
} else {
}
}
break;
}


var G__32702 = seq__32669;
var G__32703 = chunk__32670;
var G__32704 = count__32671;
var G__32705 = (i__32672 + (1));
seq__32669 = G__32702;
chunk__32670 = G__32703;
count__32671 = G__32704;
i__32672 = G__32705;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32669);
if(temp__5457__auto__){
var seq__32669__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32669__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32669__$1);
var G__32706 = cljs.core.chunk_rest.call(null,seq__32669__$1);
var G__32707 = c__4319__auto__;
var G__32708 = cljs.core.count.call(null,c__4319__auto__);
var G__32709 = (0);
seq__32669 = G__32706;
chunk__32670 = G__32707;
count__32671 = G__32708;
i__32672 = G__32709;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32669__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32677_32710 = cljs.core.seq.call(null,requires);
var chunk__32678_32711 = null;
var count__32679_32712 = (0);
var i__32680_32713 = (0);
while(true){
if((i__32680_32713 < count__32679_32712)){
var req_32714 = cljs.core._nth.call(null,chunk__32678_32711,i__32680_32713);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32714,prov);


var G__32715 = seq__32677_32710;
var G__32716 = chunk__32678_32711;
var G__32717 = count__32679_32712;
var G__32718 = (i__32680_32713 + (1));
seq__32677_32710 = G__32715;
chunk__32678_32711 = G__32716;
count__32679_32712 = G__32717;
i__32680_32713 = G__32718;
continue;
} else {
var temp__5457__auto___32719__$1 = cljs.core.seq.call(null,seq__32677_32710);
if(temp__5457__auto___32719__$1){
var seq__32677_32720__$1 = temp__5457__auto___32719__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32677_32720__$1)){
var c__4319__auto___32721 = cljs.core.chunk_first.call(null,seq__32677_32720__$1);
var G__32722 = cljs.core.chunk_rest.call(null,seq__32677_32720__$1);
var G__32723 = c__4319__auto___32721;
var G__32724 = cljs.core.count.call(null,c__4319__auto___32721);
var G__32725 = (0);
seq__32677_32710 = G__32722;
chunk__32678_32711 = G__32723;
count__32679_32712 = G__32724;
i__32680_32713 = G__32725;
continue;
} else {
var req_32726 = cljs.core.first.call(null,seq__32677_32720__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32726,prov);


var G__32727 = cljs.core.next.call(null,seq__32677_32720__$1);
var G__32728 = null;
var G__32729 = (0);
var G__32730 = (0);
seq__32677_32710 = G__32727;
chunk__32678_32711 = G__32728;
count__32679_32712 = G__32729;
i__32680_32713 = G__32730;
continue;
}
} else {
}
}
break;
}


var G__32731 = cljs.core.next.call(null,seq__32669__$1);
var G__32732 = null;
var G__32733 = (0);
var G__32734 = (0);
seq__32669 = G__32731;
chunk__32670 = G__32732;
count__32671 = G__32733;
i__32672 = G__32734;
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
var seq__32735_32739 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32736_32740 = null;
var count__32737_32741 = (0);
var i__32738_32742 = (0);
while(true){
if((i__32738_32742 < count__32737_32741)){
var ns_32743 = cljs.core._nth.call(null,chunk__32736_32740,i__32738_32742);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32743);


var G__32744 = seq__32735_32739;
var G__32745 = chunk__32736_32740;
var G__32746 = count__32737_32741;
var G__32747 = (i__32738_32742 + (1));
seq__32735_32739 = G__32744;
chunk__32736_32740 = G__32745;
count__32737_32741 = G__32746;
i__32738_32742 = G__32747;
continue;
} else {
var temp__5457__auto___32748 = cljs.core.seq.call(null,seq__32735_32739);
if(temp__5457__auto___32748){
var seq__32735_32749__$1 = temp__5457__auto___32748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32735_32749__$1)){
var c__4319__auto___32750 = cljs.core.chunk_first.call(null,seq__32735_32749__$1);
var G__32751 = cljs.core.chunk_rest.call(null,seq__32735_32749__$1);
var G__32752 = c__4319__auto___32750;
var G__32753 = cljs.core.count.call(null,c__4319__auto___32750);
var G__32754 = (0);
seq__32735_32739 = G__32751;
chunk__32736_32740 = G__32752;
count__32737_32741 = G__32753;
i__32738_32742 = G__32754;
continue;
} else {
var ns_32755 = cljs.core.first.call(null,seq__32735_32749__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32755);


var G__32756 = cljs.core.next.call(null,seq__32735_32749__$1);
var G__32757 = null;
var G__32758 = (0);
var G__32759 = (0);
seq__32735_32739 = G__32756;
chunk__32736_32740 = G__32757;
count__32737_32741 = G__32758;
i__32738_32742 = G__32759;
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
var G__32760__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32761__i = 0, G__32761__a = new Array(arguments.length -  0);
while (G__32761__i < G__32761__a.length) {G__32761__a[G__32761__i] = arguments[G__32761__i + 0]; ++G__32761__i;}
  args = new cljs.core.IndexedSeq(G__32761__a,0,null);
} 
return G__32760__delegate.call(this,args);};
G__32760.cljs$lang$maxFixedArity = 0;
G__32760.cljs$lang$applyTo = (function (arglist__32762){
var args = cljs.core.seq(arglist__32762);
return G__32760__delegate(args);
});
G__32760.cljs$core$IFn$_invoke$arity$variadic = G__32760__delegate;
return G__32760;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__32763_SHARP_,p2__32764_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32763_SHARP_)].join('')),p2__32764_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__32765_SHARP_,p2__32766_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32765_SHARP_)].join(''),p2__32766_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32767 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32767.addCallback(((function (G__32767){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32767))
);

G__32767.addErrback(((function (G__32767){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32767))
);

return G__32767;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32768){if((e32768 instanceof Error)){
var e = e32768;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32768;

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
}catch (e32769){if((e32769 instanceof Error)){
var e = e32769;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32769;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32770 = cljs.core._EQ_;
var expr__32771 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32770.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32771))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32770.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32771))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32770.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32771))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32770,expr__32771){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32770,expr__32771))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32773,callback){
var map__32774 = p__32773;
var map__32774__$1 = ((((!((map__32774 == null)))?(((((map__32774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32774):map__32774);
var file_msg = map__32774__$1;
var request_url = cljs.core.get.call(null,map__32774__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32774,map__32774__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32774,map__32774__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__){
return (function (state_32812){
var state_val_32813 = (state_32812[(1)]);
if((state_val_32813 === (7))){
var inst_32808 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
var statearr_32814_32840 = state_32812__$1;
(statearr_32814_32840[(2)] = inst_32808);

(statearr_32814_32840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (1))){
var state_32812__$1 = state_32812;
var statearr_32815_32841 = state_32812__$1;
(statearr_32815_32841[(2)] = null);

(statearr_32815_32841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (4))){
var inst_32778 = (state_32812[(7)]);
var inst_32778__$1 = (state_32812[(2)]);
var state_32812__$1 = (function (){var statearr_32816 = state_32812;
(statearr_32816[(7)] = inst_32778__$1);

return statearr_32816;
})();
if(cljs.core.truth_(inst_32778__$1)){
var statearr_32817_32842 = state_32812__$1;
(statearr_32817_32842[(1)] = (5));

} else {
var statearr_32818_32843 = state_32812__$1;
(statearr_32818_32843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (15))){
var inst_32793 = (state_32812[(8)]);
var inst_32791 = (state_32812[(9)]);
var inst_32795 = inst_32793.call(null,inst_32791);
var state_32812__$1 = state_32812;
var statearr_32819_32844 = state_32812__$1;
(statearr_32819_32844[(2)] = inst_32795);

(statearr_32819_32844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (13))){
var inst_32802 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
var statearr_32820_32845 = state_32812__$1;
(statearr_32820_32845[(2)] = inst_32802);

(statearr_32820_32845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (6))){
var state_32812__$1 = state_32812;
var statearr_32821_32846 = state_32812__$1;
(statearr_32821_32846[(2)] = null);

(statearr_32821_32846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (17))){
var inst_32799 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
var statearr_32822_32847 = state_32812__$1;
(statearr_32822_32847[(2)] = inst_32799);

(statearr_32822_32847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (3))){
var inst_32810 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32812__$1,inst_32810);
} else {
if((state_val_32813 === (12))){
var state_32812__$1 = state_32812;
var statearr_32823_32848 = state_32812__$1;
(statearr_32823_32848[(2)] = null);

(statearr_32823_32848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (2))){
var state_32812__$1 = state_32812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32812__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32813 === (11))){
var inst_32783 = (state_32812[(10)]);
var inst_32789 = figwheel.client.file_reloading.blocking_load.call(null,inst_32783);
var state_32812__$1 = state_32812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32812__$1,(14),inst_32789);
} else {
if((state_val_32813 === (9))){
var inst_32783 = (state_32812[(10)]);
var state_32812__$1 = state_32812;
if(cljs.core.truth_(inst_32783)){
var statearr_32824_32849 = state_32812__$1;
(statearr_32824_32849[(1)] = (11));

} else {
var statearr_32825_32850 = state_32812__$1;
(statearr_32825_32850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (5))){
var inst_32778 = (state_32812[(7)]);
var inst_32784 = (state_32812[(11)]);
var inst_32783 = cljs.core.nth.call(null,inst_32778,(0),null);
var inst_32784__$1 = cljs.core.nth.call(null,inst_32778,(1),null);
var state_32812__$1 = (function (){var statearr_32826 = state_32812;
(statearr_32826[(10)] = inst_32783);

(statearr_32826[(11)] = inst_32784__$1);

return statearr_32826;
})();
if(cljs.core.truth_(inst_32784__$1)){
var statearr_32827_32851 = state_32812__$1;
(statearr_32827_32851[(1)] = (8));

} else {
var statearr_32828_32852 = state_32812__$1;
(statearr_32828_32852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (14))){
var inst_32783 = (state_32812[(10)]);
var inst_32793 = (state_32812[(8)]);
var inst_32791 = (state_32812[(2)]);
var inst_32792 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32793__$1 = cljs.core.get.call(null,inst_32792,inst_32783);
var state_32812__$1 = (function (){var statearr_32829 = state_32812;
(statearr_32829[(8)] = inst_32793__$1);

(statearr_32829[(9)] = inst_32791);

return statearr_32829;
})();
if(cljs.core.truth_(inst_32793__$1)){
var statearr_32830_32853 = state_32812__$1;
(statearr_32830_32853[(1)] = (15));

} else {
var statearr_32831_32854 = state_32812__$1;
(statearr_32831_32854[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (16))){
var inst_32791 = (state_32812[(9)]);
var inst_32797 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32791);
var state_32812__$1 = state_32812;
var statearr_32832_32855 = state_32812__$1;
(statearr_32832_32855[(2)] = inst_32797);

(statearr_32832_32855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (10))){
var inst_32804 = (state_32812[(2)]);
var state_32812__$1 = (function (){var statearr_32833 = state_32812;
(statearr_32833[(12)] = inst_32804);

return statearr_32833;
})();
var statearr_32834_32856 = state_32812__$1;
(statearr_32834_32856[(2)] = null);

(statearr_32834_32856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (8))){
var inst_32784 = (state_32812[(11)]);
var inst_32786 = eval(inst_32784);
var state_32812__$1 = state_32812;
var statearr_32835_32857 = state_32812__$1;
(statearr_32835_32857[(2)] = inst_32786);

(statearr_32835_32857[(1)] = (10));


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
});})(c__30599__auto__))
;
return ((function (switch__30509__auto__,c__30599__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30510__auto__ = null;
var figwheel$client$file_reloading$state_machine__30510__auto____0 = (function (){
var statearr_32836 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32836[(0)] = figwheel$client$file_reloading$state_machine__30510__auto__);

(statearr_32836[(1)] = (1));

return statearr_32836;
});
var figwheel$client$file_reloading$state_machine__30510__auto____1 = (function (state_32812){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32837){if((e32837 instanceof Object)){
var ex__30513__auto__ = e32837;
var statearr_32838_32858 = state_32812;
(statearr_32838_32858[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32859 = state_32812;
state_32812 = G__32859;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30510__auto__ = function(state_32812){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30510__auto____1.call(this,state_32812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30510__auto____0;
figwheel$client$file_reloading$state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30510__auto____1;
return figwheel$client$file_reloading$state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__))
})();
var state__30601__auto__ = (function (){var statearr_32839 = f__30600__auto__.call(null);
(statearr_32839[(6)] = c__30599__auto__);

return statearr_32839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__))
);

return c__30599__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32861 = arguments.length;
switch (G__32861) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32863,callback){
var map__32864 = p__32863;
var map__32864__$1 = ((((!((map__32864 == null)))?(((((map__32864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32864):map__32864);
var file_msg = map__32864__$1;
var namespace = cljs.core.get.call(null,map__32864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32864,map__32864__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32864,map__32864__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32866){
var map__32867 = p__32866;
var map__32867__$1 = ((((!((map__32867 == null)))?(((((map__32867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32867):map__32867);
var file_msg = map__32867__$1;
var namespace = cljs.core.get.call(null,map__32867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32869){
var map__32870 = p__32869;
var map__32870__$1 = ((((!((map__32870 == null)))?(((((map__32870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32870):map__32870);
var file_msg = map__32870__$1;
var namespace = cljs.core.get.call(null,map__32870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32872,callback){
var map__32873 = p__32872;
var map__32873__$1 = ((((!((map__32873 == null)))?(((((map__32873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32873):map__32873);
var file_msg = map__32873__$1;
var request_url = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30599__auto___32923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto___32923,out){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto___32923,out){
return (function (state_32908){
var state_val_32909 = (state_32908[(1)]);
if((state_val_32909 === (1))){
var inst_32882 = cljs.core.seq.call(null,files);
var inst_32883 = cljs.core.first.call(null,inst_32882);
var inst_32884 = cljs.core.next.call(null,inst_32882);
var inst_32885 = files;
var state_32908__$1 = (function (){var statearr_32910 = state_32908;
(statearr_32910[(7)] = inst_32885);

(statearr_32910[(8)] = inst_32883);

(statearr_32910[(9)] = inst_32884);

return statearr_32910;
})();
var statearr_32911_32924 = state_32908__$1;
(statearr_32911_32924[(2)] = null);

(statearr_32911_32924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (2))){
var inst_32885 = (state_32908[(7)]);
var inst_32891 = (state_32908[(10)]);
var inst_32890 = cljs.core.seq.call(null,inst_32885);
var inst_32891__$1 = cljs.core.first.call(null,inst_32890);
var inst_32892 = cljs.core.next.call(null,inst_32890);
var inst_32893 = (inst_32891__$1 == null);
var inst_32894 = cljs.core.not.call(null,inst_32893);
var state_32908__$1 = (function (){var statearr_32912 = state_32908;
(statearr_32912[(11)] = inst_32892);

(statearr_32912[(10)] = inst_32891__$1);

return statearr_32912;
})();
if(inst_32894){
var statearr_32913_32925 = state_32908__$1;
(statearr_32913_32925[(1)] = (4));

} else {
var statearr_32914_32926 = state_32908__$1;
(statearr_32914_32926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (3))){
var inst_32906 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32908__$1,inst_32906);
} else {
if((state_val_32909 === (4))){
var inst_32891 = (state_32908[(10)]);
var inst_32896 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32891);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32908__$1,(7),inst_32896);
} else {
if((state_val_32909 === (5))){
var inst_32902 = cljs.core.async.close_BANG_.call(null,out);
var state_32908__$1 = state_32908;
var statearr_32915_32927 = state_32908__$1;
(statearr_32915_32927[(2)] = inst_32902);

(statearr_32915_32927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (6))){
var inst_32904 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32916_32928 = state_32908__$1;
(statearr_32916_32928[(2)] = inst_32904);

(statearr_32916_32928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (7))){
var inst_32892 = (state_32908[(11)]);
var inst_32898 = (state_32908[(2)]);
var inst_32899 = cljs.core.async.put_BANG_.call(null,out,inst_32898);
var inst_32885 = inst_32892;
var state_32908__$1 = (function (){var statearr_32917 = state_32908;
(statearr_32917[(12)] = inst_32899);

(statearr_32917[(7)] = inst_32885);

return statearr_32917;
})();
var statearr_32918_32929 = state_32908__$1;
(statearr_32918_32929[(2)] = null);

(statearr_32918_32929[(1)] = (2));


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
});})(c__30599__auto___32923,out))
;
return ((function (switch__30509__auto__,c__30599__auto___32923,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto____0 = (function (){
var statearr_32919 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32919[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto__);

(statearr_32919[(1)] = (1));

return statearr_32919;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto____1 = (function (state_32908){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_32908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e32920){if((e32920 instanceof Object)){
var ex__30513__auto__ = e32920;
var statearr_32921_32930 = state_32908;
(statearr_32921_32930[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32931 = state_32908;
state_32908 = G__32931;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto___32923,out))
})();
var state__30601__auto__ = (function (){var statearr_32922 = f__30600__auto__.call(null);
(statearr_32922[(6)] = c__30599__auto___32923);

return statearr_32922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto___32923,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32932,opts){
var map__32933 = p__32932;
var map__32933__$1 = ((((!((map__32933 == null)))?(((((map__32933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32933):map__32933);
var eval_body = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32935){var e = e32935;
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
return (function (p1__32936_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32936_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32937){
var vec__32938 = p__32937;
var k = cljs.core.nth.call(null,vec__32938,(0),null);
var v = cljs.core.nth.call(null,vec__32938,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32941){
var vec__32942 = p__32941;
var k = cljs.core.nth.call(null,vec__32942,(0),null);
var v = cljs.core.nth.call(null,vec__32942,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32948,p__32949){
var map__32950 = p__32948;
var map__32950__$1 = ((((!((map__32950 == null)))?(((((map__32950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32950):map__32950);
var opts = map__32950__$1;
var before_jsload = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32951 = p__32949;
var map__32951__$1 = ((((!((map__32951 == null)))?(((((map__32951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32951):map__32951);
var msg = map__32951__$1;
var files = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30600__auto__ = (function (){var switch__30509__auto__ = ((function (c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33105){
var state_val_33106 = (state_33105[(1)]);
if((state_val_33106 === (7))){
var inst_32967 = (state_33105[(7)]);
var inst_32966 = (state_33105[(8)]);
var inst_32965 = (state_33105[(9)]);
var inst_32968 = (state_33105[(10)]);
var inst_32973 = cljs.core._nth.call(null,inst_32966,inst_32968);
var inst_32974 = figwheel.client.file_reloading.eval_body.call(null,inst_32973,opts);
var inst_32975 = (inst_32968 + (1));
var tmp33107 = inst_32967;
var tmp33108 = inst_32966;
var tmp33109 = inst_32965;
var inst_32965__$1 = tmp33109;
var inst_32966__$1 = tmp33108;
var inst_32967__$1 = tmp33107;
var inst_32968__$1 = inst_32975;
var state_33105__$1 = (function (){var statearr_33110 = state_33105;
(statearr_33110[(7)] = inst_32967__$1);

(statearr_33110[(8)] = inst_32966__$1);

(statearr_33110[(9)] = inst_32965__$1);

(statearr_33110[(11)] = inst_32974);

(statearr_33110[(10)] = inst_32968__$1);

return statearr_33110;
})();
var statearr_33111_33194 = state_33105__$1;
(statearr_33111_33194[(2)] = null);

(statearr_33111_33194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (20))){
var inst_33008 = (state_33105[(12)]);
var inst_33016 = figwheel.client.file_reloading.sort_files.call(null,inst_33008);
var state_33105__$1 = state_33105;
var statearr_33112_33195 = state_33105__$1;
(statearr_33112_33195[(2)] = inst_33016);

(statearr_33112_33195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (27))){
var state_33105__$1 = state_33105;
var statearr_33113_33196 = state_33105__$1;
(statearr_33113_33196[(2)] = null);

(statearr_33113_33196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (1))){
var inst_32957 = (state_33105[(13)]);
var inst_32954 = before_jsload.call(null,files);
var inst_32955 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32956 = (function (){return ((function (inst_32957,inst_32954,inst_32955,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32945_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32945_SHARP_);
});
;})(inst_32957,inst_32954,inst_32955,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32957__$1 = cljs.core.filter.call(null,inst_32956,files);
var inst_32958 = cljs.core.not_empty.call(null,inst_32957__$1);
var state_33105__$1 = (function (){var statearr_33114 = state_33105;
(statearr_33114[(13)] = inst_32957__$1);

(statearr_33114[(14)] = inst_32954);

(statearr_33114[(15)] = inst_32955);

return statearr_33114;
})();
if(cljs.core.truth_(inst_32958)){
var statearr_33115_33197 = state_33105__$1;
(statearr_33115_33197[(1)] = (2));

} else {
var statearr_33116_33198 = state_33105__$1;
(statearr_33116_33198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (24))){
var state_33105__$1 = state_33105;
var statearr_33117_33199 = state_33105__$1;
(statearr_33117_33199[(2)] = null);

(statearr_33117_33199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (39))){
var inst_33058 = (state_33105[(16)]);
var state_33105__$1 = state_33105;
var statearr_33118_33200 = state_33105__$1;
(statearr_33118_33200[(2)] = inst_33058);

(statearr_33118_33200[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (46))){
var inst_33100 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
var statearr_33119_33201 = state_33105__$1;
(statearr_33119_33201[(2)] = inst_33100);

(statearr_33119_33201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (4))){
var inst_33002 = (state_33105[(2)]);
var inst_33003 = cljs.core.List.EMPTY;
var inst_33004 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33003);
var inst_33005 = (function (){return ((function (inst_33002,inst_33003,inst_33004,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32946_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32946_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32946_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32946_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_33002,inst_33003,inst_33004,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33006 = cljs.core.filter.call(null,inst_33005,files);
var inst_33007 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33008 = cljs.core.concat.call(null,inst_33006,inst_33007);
var state_33105__$1 = (function (){var statearr_33120 = state_33105;
(statearr_33120[(12)] = inst_33008);

(statearr_33120[(17)] = inst_33004);

(statearr_33120[(18)] = inst_33002);

return statearr_33120;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33121_33202 = state_33105__$1;
(statearr_33121_33202[(1)] = (16));

} else {
var statearr_33122_33203 = state_33105__$1;
(statearr_33122_33203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (15))){
var inst_32992 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
var statearr_33123_33204 = state_33105__$1;
(statearr_33123_33204[(2)] = inst_32992);

(statearr_33123_33204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (21))){
var inst_33018 = (state_33105[(19)]);
var inst_33018__$1 = (state_33105[(2)]);
var inst_33019 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33018__$1);
var state_33105__$1 = (function (){var statearr_33124 = state_33105;
(statearr_33124[(19)] = inst_33018__$1);

return statearr_33124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33105__$1,(22),inst_33019);
} else {
if((state_val_33106 === (31))){
var inst_33103 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33105__$1,inst_33103);
} else {
if((state_val_33106 === (32))){
var inst_33058 = (state_33105[(16)]);
var inst_33063 = inst_33058.cljs$lang$protocol_mask$partition0$;
var inst_33064 = (inst_33063 & (64));
var inst_33065 = inst_33058.cljs$core$ISeq$;
var inst_33066 = (cljs.core.PROTOCOL_SENTINEL === inst_33065);
var inst_33067 = ((inst_33064) || (inst_33066));
var state_33105__$1 = state_33105;
if(cljs.core.truth_(inst_33067)){
var statearr_33125_33205 = state_33105__$1;
(statearr_33125_33205[(1)] = (35));

} else {
var statearr_33126_33206 = state_33105__$1;
(statearr_33126_33206[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (40))){
var inst_33080 = (state_33105[(20)]);
var inst_33079 = (state_33105[(2)]);
var inst_33080__$1 = cljs.core.get.call(null,inst_33079,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33081 = cljs.core.get.call(null,inst_33079,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33082 = cljs.core.not_empty.call(null,inst_33080__$1);
var state_33105__$1 = (function (){var statearr_33127 = state_33105;
(statearr_33127[(21)] = inst_33081);

(statearr_33127[(20)] = inst_33080__$1);

return statearr_33127;
})();
if(cljs.core.truth_(inst_33082)){
var statearr_33128_33207 = state_33105__$1;
(statearr_33128_33207[(1)] = (41));

} else {
var statearr_33129_33208 = state_33105__$1;
(statearr_33129_33208[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (33))){
var state_33105__$1 = state_33105;
var statearr_33130_33209 = state_33105__$1;
(statearr_33130_33209[(2)] = false);

(statearr_33130_33209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (13))){
var inst_32978 = (state_33105[(22)]);
var inst_32982 = cljs.core.chunk_first.call(null,inst_32978);
var inst_32983 = cljs.core.chunk_rest.call(null,inst_32978);
var inst_32984 = cljs.core.count.call(null,inst_32982);
var inst_32965 = inst_32983;
var inst_32966 = inst_32982;
var inst_32967 = inst_32984;
var inst_32968 = (0);
var state_33105__$1 = (function (){var statearr_33131 = state_33105;
(statearr_33131[(7)] = inst_32967);

(statearr_33131[(8)] = inst_32966);

(statearr_33131[(9)] = inst_32965);

(statearr_33131[(10)] = inst_32968);

return statearr_33131;
})();
var statearr_33132_33210 = state_33105__$1;
(statearr_33132_33210[(2)] = null);

(statearr_33132_33210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (22))){
var inst_33026 = (state_33105[(23)]);
var inst_33022 = (state_33105[(24)]);
var inst_33021 = (state_33105[(25)]);
var inst_33018 = (state_33105[(19)]);
var inst_33021__$1 = (state_33105[(2)]);
var inst_33022__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33021__$1);
var inst_33023 = (function (){var all_files = inst_33018;
var res_SINGLEQUOTE_ = inst_33021__$1;
var res = inst_33022__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33026,inst_33022,inst_33021,inst_33018,inst_33021__$1,inst_33022__$1,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32947_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32947_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33026,inst_33022,inst_33021,inst_33018,inst_33021__$1,inst_33022__$1,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33024 = cljs.core.filter.call(null,inst_33023,inst_33021__$1);
var inst_33025 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33026__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33025);
var inst_33027 = cljs.core.not_empty.call(null,inst_33026__$1);
var state_33105__$1 = (function (){var statearr_33133 = state_33105;
(statearr_33133[(23)] = inst_33026__$1);

(statearr_33133[(24)] = inst_33022__$1);

(statearr_33133[(26)] = inst_33024);

(statearr_33133[(25)] = inst_33021__$1);

return statearr_33133;
})();
if(cljs.core.truth_(inst_33027)){
var statearr_33134_33211 = state_33105__$1;
(statearr_33134_33211[(1)] = (23));

} else {
var statearr_33135_33212 = state_33105__$1;
(statearr_33135_33212[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (36))){
var state_33105__$1 = state_33105;
var statearr_33136_33213 = state_33105__$1;
(statearr_33136_33213[(2)] = false);

(statearr_33136_33213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (41))){
var inst_33080 = (state_33105[(20)]);
var inst_33084 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33085 = cljs.core.map.call(null,inst_33084,inst_33080);
var inst_33086 = cljs.core.pr_str.call(null,inst_33085);
var inst_33087 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33086)].join('');
var inst_33088 = figwheel.client.utils.log.call(null,inst_33087);
var state_33105__$1 = state_33105;
var statearr_33137_33214 = state_33105__$1;
(statearr_33137_33214[(2)] = inst_33088);

(statearr_33137_33214[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (43))){
var inst_33081 = (state_33105[(21)]);
var inst_33091 = (state_33105[(2)]);
var inst_33092 = cljs.core.not_empty.call(null,inst_33081);
var state_33105__$1 = (function (){var statearr_33138 = state_33105;
(statearr_33138[(27)] = inst_33091);

return statearr_33138;
})();
if(cljs.core.truth_(inst_33092)){
var statearr_33139_33215 = state_33105__$1;
(statearr_33139_33215[(1)] = (44));

} else {
var statearr_33140_33216 = state_33105__$1;
(statearr_33140_33216[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (29))){
var inst_33026 = (state_33105[(23)]);
var inst_33022 = (state_33105[(24)]);
var inst_33024 = (state_33105[(26)]);
var inst_33021 = (state_33105[(25)]);
var inst_33058 = (state_33105[(16)]);
var inst_33018 = (state_33105[(19)]);
var inst_33054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33057 = (function (){var all_files = inst_33018;
var res_SINGLEQUOTE_ = inst_33021;
var res = inst_33022;
var files_not_loaded = inst_33024;
var dependencies_that_loaded = inst_33026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33058,inst_33018,inst_33054,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33056){
var map__33141 = p__33056;
var map__33141__$1 = ((((!((map__33141 == null)))?(((((map__33141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);
var namespace = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33058,inst_33018,inst_33054,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33058__$1 = cljs.core.group_by.call(null,inst_33057,inst_33024);
var inst_33060 = (inst_33058__$1 == null);
var inst_33061 = cljs.core.not.call(null,inst_33060);
var state_33105__$1 = (function (){var statearr_33143 = state_33105;
(statearr_33143[(28)] = inst_33054);

(statearr_33143[(16)] = inst_33058__$1);

return statearr_33143;
})();
if(inst_33061){
var statearr_33144_33217 = state_33105__$1;
(statearr_33144_33217[(1)] = (32));

} else {
var statearr_33145_33218 = state_33105__$1;
(statearr_33145_33218[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (44))){
var inst_33081 = (state_33105[(21)]);
var inst_33094 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33081);
var inst_33095 = cljs.core.pr_str.call(null,inst_33094);
var inst_33096 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33095)].join('');
var inst_33097 = figwheel.client.utils.log.call(null,inst_33096);
var state_33105__$1 = state_33105;
var statearr_33146_33219 = state_33105__$1;
(statearr_33146_33219[(2)] = inst_33097);

(statearr_33146_33219[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (6))){
var inst_32999 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
var statearr_33147_33220 = state_33105__$1;
(statearr_33147_33220[(2)] = inst_32999);

(statearr_33147_33220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (28))){
var inst_33024 = (state_33105[(26)]);
var inst_33051 = (state_33105[(2)]);
var inst_33052 = cljs.core.not_empty.call(null,inst_33024);
var state_33105__$1 = (function (){var statearr_33148 = state_33105;
(statearr_33148[(29)] = inst_33051);

return statearr_33148;
})();
if(cljs.core.truth_(inst_33052)){
var statearr_33149_33221 = state_33105__$1;
(statearr_33149_33221[(1)] = (29));

} else {
var statearr_33150_33222 = state_33105__$1;
(statearr_33150_33222[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (25))){
var inst_33022 = (state_33105[(24)]);
var inst_33038 = (state_33105[(2)]);
var inst_33039 = cljs.core.not_empty.call(null,inst_33022);
var state_33105__$1 = (function (){var statearr_33151 = state_33105;
(statearr_33151[(30)] = inst_33038);

return statearr_33151;
})();
if(cljs.core.truth_(inst_33039)){
var statearr_33152_33223 = state_33105__$1;
(statearr_33152_33223[(1)] = (26));

} else {
var statearr_33153_33224 = state_33105__$1;
(statearr_33153_33224[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (34))){
var inst_33074 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
if(cljs.core.truth_(inst_33074)){
var statearr_33154_33225 = state_33105__$1;
(statearr_33154_33225[(1)] = (38));

} else {
var statearr_33155_33226 = state_33105__$1;
(statearr_33155_33226[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (17))){
var state_33105__$1 = state_33105;
var statearr_33156_33227 = state_33105__$1;
(statearr_33156_33227[(2)] = recompile_dependents);

(statearr_33156_33227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (3))){
var state_33105__$1 = state_33105;
var statearr_33157_33228 = state_33105__$1;
(statearr_33157_33228[(2)] = null);

(statearr_33157_33228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (12))){
var inst_32995 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
var statearr_33158_33229 = state_33105__$1;
(statearr_33158_33229[(2)] = inst_32995);

(statearr_33158_33229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (2))){
var inst_32957 = (state_33105[(13)]);
var inst_32964 = cljs.core.seq.call(null,inst_32957);
var inst_32965 = inst_32964;
var inst_32966 = null;
var inst_32967 = (0);
var inst_32968 = (0);
var state_33105__$1 = (function (){var statearr_33159 = state_33105;
(statearr_33159[(7)] = inst_32967);

(statearr_33159[(8)] = inst_32966);

(statearr_33159[(9)] = inst_32965);

(statearr_33159[(10)] = inst_32968);

return statearr_33159;
})();
var statearr_33160_33230 = state_33105__$1;
(statearr_33160_33230[(2)] = null);

(statearr_33160_33230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (23))){
var inst_33026 = (state_33105[(23)]);
var inst_33022 = (state_33105[(24)]);
var inst_33024 = (state_33105[(26)]);
var inst_33021 = (state_33105[(25)]);
var inst_33018 = (state_33105[(19)]);
var inst_33029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33031 = (function (){var all_files = inst_33018;
var res_SINGLEQUOTE_ = inst_33021;
var res = inst_33022;
var files_not_loaded = inst_33024;
var dependencies_that_loaded = inst_33026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33018,inst_33029,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33030){
var map__33161 = p__33030;
var map__33161__$1 = ((((!((map__33161 == null)))?(((((map__33161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33161):map__33161);
var request_url = cljs.core.get.call(null,map__33161__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33018,inst_33029,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33032 = cljs.core.reverse.call(null,inst_33026);
var inst_33033 = cljs.core.map.call(null,inst_33031,inst_33032);
var inst_33034 = cljs.core.pr_str.call(null,inst_33033);
var inst_33035 = figwheel.client.utils.log.call(null,inst_33034);
var state_33105__$1 = (function (){var statearr_33163 = state_33105;
(statearr_33163[(31)] = inst_33029);

return statearr_33163;
})();
var statearr_33164_33231 = state_33105__$1;
(statearr_33164_33231[(2)] = inst_33035);

(statearr_33164_33231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (35))){
var state_33105__$1 = state_33105;
var statearr_33165_33232 = state_33105__$1;
(statearr_33165_33232[(2)] = true);

(statearr_33165_33232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (19))){
var inst_33008 = (state_33105[(12)]);
var inst_33014 = figwheel.client.file_reloading.expand_files.call(null,inst_33008);
var state_33105__$1 = state_33105;
var statearr_33166_33233 = state_33105__$1;
(statearr_33166_33233[(2)] = inst_33014);

(statearr_33166_33233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (11))){
var state_33105__$1 = state_33105;
var statearr_33167_33234 = state_33105__$1;
(statearr_33167_33234[(2)] = null);

(statearr_33167_33234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (9))){
var inst_32997 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
var statearr_33168_33235 = state_33105__$1;
(statearr_33168_33235[(2)] = inst_32997);

(statearr_33168_33235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (5))){
var inst_32967 = (state_33105[(7)]);
var inst_32968 = (state_33105[(10)]);
var inst_32970 = (inst_32968 < inst_32967);
var inst_32971 = inst_32970;
var state_33105__$1 = state_33105;
if(cljs.core.truth_(inst_32971)){
var statearr_33169_33236 = state_33105__$1;
(statearr_33169_33236[(1)] = (7));

} else {
var statearr_33170_33237 = state_33105__$1;
(statearr_33170_33237[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (14))){
var inst_32978 = (state_33105[(22)]);
var inst_32987 = cljs.core.first.call(null,inst_32978);
var inst_32988 = figwheel.client.file_reloading.eval_body.call(null,inst_32987,opts);
var inst_32989 = cljs.core.next.call(null,inst_32978);
var inst_32965 = inst_32989;
var inst_32966 = null;
var inst_32967 = (0);
var inst_32968 = (0);
var state_33105__$1 = (function (){var statearr_33171 = state_33105;
(statearr_33171[(7)] = inst_32967);

(statearr_33171[(8)] = inst_32966);

(statearr_33171[(9)] = inst_32965);

(statearr_33171[(32)] = inst_32988);

(statearr_33171[(10)] = inst_32968);

return statearr_33171;
})();
var statearr_33172_33238 = state_33105__$1;
(statearr_33172_33238[(2)] = null);

(statearr_33172_33238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (45))){
var state_33105__$1 = state_33105;
var statearr_33173_33239 = state_33105__$1;
(statearr_33173_33239[(2)] = null);

(statearr_33173_33239[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (26))){
var inst_33026 = (state_33105[(23)]);
var inst_33022 = (state_33105[(24)]);
var inst_33024 = (state_33105[(26)]);
var inst_33021 = (state_33105[(25)]);
var inst_33018 = (state_33105[(19)]);
var inst_33041 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33043 = (function (){var all_files = inst_33018;
var res_SINGLEQUOTE_ = inst_33021;
var res = inst_33022;
var files_not_loaded = inst_33024;
var dependencies_that_loaded = inst_33026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33018,inst_33041,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33042){
var map__33174 = p__33042;
var map__33174__$1 = ((((!((map__33174 == null)))?(((((map__33174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33174):map__33174);
var namespace = cljs.core.get.call(null,map__33174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33018,inst_33041,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33044 = cljs.core.map.call(null,inst_33043,inst_33022);
var inst_33045 = cljs.core.pr_str.call(null,inst_33044);
var inst_33046 = figwheel.client.utils.log.call(null,inst_33045);
var inst_33047 = (function (){var all_files = inst_33018;
var res_SINGLEQUOTE_ = inst_33021;
var res = inst_33022;
var files_not_loaded = inst_33024;
var dependencies_that_loaded = inst_33026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33018,inst_33041,inst_33043,inst_33044,inst_33045,inst_33046,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33026,inst_33022,inst_33024,inst_33021,inst_33018,inst_33041,inst_33043,inst_33044,inst_33045,inst_33046,state_val_33106,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33048 = setTimeout(inst_33047,(10));
var state_33105__$1 = (function (){var statearr_33176 = state_33105;
(statearr_33176[(33)] = inst_33046);

(statearr_33176[(34)] = inst_33041);

return statearr_33176;
})();
var statearr_33177_33240 = state_33105__$1;
(statearr_33177_33240[(2)] = inst_33048);

(statearr_33177_33240[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (16))){
var state_33105__$1 = state_33105;
var statearr_33178_33241 = state_33105__$1;
(statearr_33178_33241[(2)] = reload_dependents);

(statearr_33178_33241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (38))){
var inst_33058 = (state_33105[(16)]);
var inst_33076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33058);
var state_33105__$1 = state_33105;
var statearr_33179_33242 = state_33105__$1;
(statearr_33179_33242[(2)] = inst_33076);

(statearr_33179_33242[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (30))){
var state_33105__$1 = state_33105;
var statearr_33180_33243 = state_33105__$1;
(statearr_33180_33243[(2)] = null);

(statearr_33180_33243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (10))){
var inst_32978 = (state_33105[(22)]);
var inst_32980 = cljs.core.chunked_seq_QMARK_.call(null,inst_32978);
var state_33105__$1 = state_33105;
if(inst_32980){
var statearr_33181_33244 = state_33105__$1;
(statearr_33181_33244[(1)] = (13));

} else {
var statearr_33182_33245 = state_33105__$1;
(statearr_33182_33245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (18))){
var inst_33012 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
if(cljs.core.truth_(inst_33012)){
var statearr_33183_33246 = state_33105__$1;
(statearr_33183_33246[(1)] = (19));

} else {
var statearr_33184_33247 = state_33105__$1;
(statearr_33184_33247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (42))){
var state_33105__$1 = state_33105;
var statearr_33185_33248 = state_33105__$1;
(statearr_33185_33248[(2)] = null);

(statearr_33185_33248[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (37))){
var inst_33071 = (state_33105[(2)]);
var state_33105__$1 = state_33105;
var statearr_33186_33249 = state_33105__$1;
(statearr_33186_33249[(2)] = inst_33071);

(statearr_33186_33249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33106 === (8))){
var inst_32978 = (state_33105[(22)]);
var inst_32965 = (state_33105[(9)]);
var inst_32978__$1 = cljs.core.seq.call(null,inst_32965);
var state_33105__$1 = (function (){var statearr_33187 = state_33105;
(statearr_33187[(22)] = inst_32978__$1);

return statearr_33187;
})();
if(inst_32978__$1){
var statearr_33188_33250 = state_33105__$1;
(statearr_33188_33250[(1)] = (10));

} else {
var statearr_33189_33251 = state_33105__$1;
(statearr_33189_33251[(1)] = (11));

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
});})(c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30509__auto__,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto____0 = (function (){
var statearr_33190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33190[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto__);

(statearr_33190[(1)] = (1));

return statearr_33190;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto____1 = (function (state_33105){
while(true){
var ret_value__30511__auto__ = (function (){try{while(true){
var result__30512__auto__ = switch__30509__auto__.call(null,state_33105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30512__auto__;
}
break;
}
}catch (e33191){if((e33191 instanceof Object)){
var ex__30513__auto__ = e33191;
var statearr_33192_33252 = state_33105;
(statearr_33192_33252[(5)] = ex__30513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33253 = state_33105;
state_33105 = G__33253;
continue;
} else {
return ret_value__30511__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto__ = function(state_33105){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto____1.call(this,state_33105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30510__auto__;
})()
;})(switch__30509__auto__,c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30601__auto__ = (function (){var statearr_33193 = f__30600__auto__.call(null);
(statearr_33193[(6)] = c__30599__auto__);

return statearr_33193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30601__auto__);
});})(c__30599__auto__,map__32950,map__32950__$1,opts,before_jsload,on_jsload,reload_dependents,map__32951,map__32951__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30599__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33256,link){
var map__33257 = p__33256;
var map__33257__$1 = ((((!((map__33257 == null)))?(((((map__33257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257):map__33257);
var file = cljs.core.get.call(null,map__33257__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__33257,map__33257__$1,file){
return (function (p1__33254_SHARP_,p2__33255_SHARP_){
if(cljs.core._EQ_.call(null,p1__33254_SHARP_,p2__33255_SHARP_)){
return p1__33254_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__33257,map__33257__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33260){
var map__33261 = p__33260;
var map__33261__$1 = ((((!((map__33261 == null)))?(((((map__33261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33261):map__33261);
var match_length = cljs.core.get.call(null,map__33261__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33261__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33259_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33259_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33263_SHARP_,p2__33264_SHARP_){
return cljs.core.assoc.call(null,p1__33263_SHARP_,cljs.core.get.call(null,p2__33264_SHARP_,key),p2__33264_SHARP_);
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
var loaded_f_datas_33265 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33265);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33265);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33266,p__33267){
var map__33268 = p__33266;
var map__33268__$1 = ((((!((map__33268 == null)))?(((((map__33268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33268):map__33268);
var on_cssload = cljs.core.get.call(null,map__33268__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33269 = p__33267;
var map__33269__$1 = ((((!((map__33269 == null)))?(((((map__33269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33269):map__33269);
var files_msg = map__33269__$1;
var files = cljs.core.get.call(null,map__33269__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1673416717901
