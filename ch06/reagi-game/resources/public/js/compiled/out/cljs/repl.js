// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30011){
var map__30012 = p__30011;
var map__30012__$1 = ((((!((map__30012 == null)))?(((((map__30012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);
var m = map__30012__$1;
var n = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30014_30036 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30015_30037 = null;
var count__30016_30038 = (0);
var i__30017_30039 = (0);
while(true){
if((i__30017_30039 < count__30016_30038)){
var f_30040 = cljs.core._nth.call(null,chunk__30015_30037,i__30017_30039);
cljs.core.println.call(null,"  ",f_30040);


var G__30041 = seq__30014_30036;
var G__30042 = chunk__30015_30037;
var G__30043 = count__30016_30038;
var G__30044 = (i__30017_30039 + (1));
seq__30014_30036 = G__30041;
chunk__30015_30037 = G__30042;
count__30016_30038 = G__30043;
i__30017_30039 = G__30044;
continue;
} else {
var temp__5457__auto___30045 = cljs.core.seq.call(null,seq__30014_30036);
if(temp__5457__auto___30045){
var seq__30014_30046__$1 = temp__5457__auto___30045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30014_30046__$1)){
var c__4319__auto___30047 = cljs.core.chunk_first.call(null,seq__30014_30046__$1);
var G__30048 = cljs.core.chunk_rest.call(null,seq__30014_30046__$1);
var G__30049 = c__4319__auto___30047;
var G__30050 = cljs.core.count.call(null,c__4319__auto___30047);
var G__30051 = (0);
seq__30014_30036 = G__30048;
chunk__30015_30037 = G__30049;
count__30016_30038 = G__30050;
i__30017_30039 = G__30051;
continue;
} else {
var f_30052 = cljs.core.first.call(null,seq__30014_30046__$1);
cljs.core.println.call(null,"  ",f_30052);


var G__30053 = cljs.core.next.call(null,seq__30014_30046__$1);
var G__30054 = null;
var G__30055 = (0);
var G__30056 = (0);
seq__30014_30036 = G__30053;
chunk__30015_30037 = G__30054;
count__30016_30038 = G__30055;
i__30017_30039 = G__30056;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30057 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30057);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30057)))?cljs.core.second.call(null,arglists_30057):arglists_30057));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30018_30058 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30019_30059 = null;
var count__30020_30060 = (0);
var i__30021_30061 = (0);
while(true){
if((i__30021_30061 < count__30020_30060)){
var vec__30022_30062 = cljs.core._nth.call(null,chunk__30019_30059,i__30021_30061);
var name_30063 = cljs.core.nth.call(null,vec__30022_30062,(0),null);
var map__30025_30064 = cljs.core.nth.call(null,vec__30022_30062,(1),null);
var map__30025_30065__$1 = ((((!((map__30025_30064 == null)))?(((((map__30025_30064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30025_30064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30025_30064):map__30025_30064);
var doc_30066 = cljs.core.get.call(null,map__30025_30065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30067 = cljs.core.get.call(null,map__30025_30065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30063);

cljs.core.println.call(null," ",arglists_30067);

if(cljs.core.truth_(doc_30066)){
cljs.core.println.call(null," ",doc_30066);
} else {
}


var G__30068 = seq__30018_30058;
var G__30069 = chunk__30019_30059;
var G__30070 = count__30020_30060;
var G__30071 = (i__30021_30061 + (1));
seq__30018_30058 = G__30068;
chunk__30019_30059 = G__30069;
count__30020_30060 = G__30070;
i__30021_30061 = G__30071;
continue;
} else {
var temp__5457__auto___30072 = cljs.core.seq.call(null,seq__30018_30058);
if(temp__5457__auto___30072){
var seq__30018_30073__$1 = temp__5457__auto___30072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30018_30073__$1)){
var c__4319__auto___30074 = cljs.core.chunk_first.call(null,seq__30018_30073__$1);
var G__30075 = cljs.core.chunk_rest.call(null,seq__30018_30073__$1);
var G__30076 = c__4319__auto___30074;
var G__30077 = cljs.core.count.call(null,c__4319__auto___30074);
var G__30078 = (0);
seq__30018_30058 = G__30075;
chunk__30019_30059 = G__30076;
count__30020_30060 = G__30077;
i__30021_30061 = G__30078;
continue;
} else {
var vec__30027_30079 = cljs.core.first.call(null,seq__30018_30073__$1);
var name_30080 = cljs.core.nth.call(null,vec__30027_30079,(0),null);
var map__30030_30081 = cljs.core.nth.call(null,vec__30027_30079,(1),null);
var map__30030_30082__$1 = ((((!((map__30030_30081 == null)))?(((((map__30030_30081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30030_30081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30030_30081):map__30030_30081);
var doc_30083 = cljs.core.get.call(null,map__30030_30082__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30084 = cljs.core.get.call(null,map__30030_30082__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30080);

cljs.core.println.call(null," ",arglists_30084);

if(cljs.core.truth_(doc_30083)){
cljs.core.println.call(null," ",doc_30083);
} else {
}


var G__30085 = cljs.core.next.call(null,seq__30018_30073__$1);
var G__30086 = null;
var G__30087 = (0);
var G__30088 = (0);
seq__30018_30058 = G__30085;
chunk__30019_30059 = G__30086;
count__30020_30060 = G__30087;
i__30021_30061 = G__30088;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30032 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30033 = null;
var count__30034 = (0);
var i__30035 = (0);
while(true){
if((i__30035 < count__30034)){
var role = cljs.core._nth.call(null,chunk__30033,i__30035);
var temp__5457__auto___30089__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30089__$1)){
var spec_30090 = temp__5457__auto___30089__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30090));
} else {
}


var G__30091 = seq__30032;
var G__30092 = chunk__30033;
var G__30093 = count__30034;
var G__30094 = (i__30035 + (1));
seq__30032 = G__30091;
chunk__30033 = G__30092;
count__30034 = G__30093;
i__30035 = G__30094;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30032);
if(temp__5457__auto____$1){
var seq__30032__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30032__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30032__$1);
var G__30095 = cljs.core.chunk_rest.call(null,seq__30032__$1);
var G__30096 = c__4319__auto__;
var G__30097 = cljs.core.count.call(null,c__4319__auto__);
var G__30098 = (0);
seq__30032 = G__30095;
chunk__30033 = G__30096;
count__30034 = G__30097;
i__30035 = G__30098;
continue;
} else {
var role = cljs.core.first.call(null,seq__30032__$1);
var temp__5457__auto___30099__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30099__$2)){
var spec_30100 = temp__5457__auto___30099__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30100));
} else {
}


var G__30101 = cljs.core.next.call(null,seq__30032__$1);
var G__30102 = null;
var G__30103 = (0);
var G__30104 = (0);
seq__30032 = G__30101;
chunk__30033 = G__30102;
count__30034 = G__30103;
i__30035 = G__30104;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1672621537305
