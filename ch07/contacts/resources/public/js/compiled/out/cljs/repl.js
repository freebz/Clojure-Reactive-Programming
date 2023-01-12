// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34069){
var map__34070 = p__34069;
var map__34070__$1 = ((((!((map__34070 == null)))?(((((map__34070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34070):map__34070);
var m = map__34070__$1;
var n = cljs.core.get.call(null,map__34070__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34072_34094 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34073_34095 = null;
var count__34074_34096 = (0);
var i__34075_34097 = (0);
while(true){
if((i__34075_34097 < count__34074_34096)){
var f_34098 = cljs.core._nth.call(null,chunk__34073_34095,i__34075_34097);
cljs.core.println.call(null,"  ",f_34098);


var G__34099 = seq__34072_34094;
var G__34100 = chunk__34073_34095;
var G__34101 = count__34074_34096;
var G__34102 = (i__34075_34097 + (1));
seq__34072_34094 = G__34099;
chunk__34073_34095 = G__34100;
count__34074_34096 = G__34101;
i__34075_34097 = G__34102;
continue;
} else {
var temp__5457__auto___34103 = cljs.core.seq.call(null,seq__34072_34094);
if(temp__5457__auto___34103){
var seq__34072_34104__$1 = temp__5457__auto___34103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34072_34104__$1)){
var c__4319__auto___34105 = cljs.core.chunk_first.call(null,seq__34072_34104__$1);
var G__34106 = cljs.core.chunk_rest.call(null,seq__34072_34104__$1);
var G__34107 = c__4319__auto___34105;
var G__34108 = cljs.core.count.call(null,c__4319__auto___34105);
var G__34109 = (0);
seq__34072_34094 = G__34106;
chunk__34073_34095 = G__34107;
count__34074_34096 = G__34108;
i__34075_34097 = G__34109;
continue;
} else {
var f_34110 = cljs.core.first.call(null,seq__34072_34104__$1);
cljs.core.println.call(null,"  ",f_34110);


var G__34111 = cljs.core.next.call(null,seq__34072_34104__$1);
var G__34112 = null;
var G__34113 = (0);
var G__34114 = (0);
seq__34072_34094 = G__34111;
chunk__34073_34095 = G__34112;
count__34074_34096 = G__34113;
i__34075_34097 = G__34114;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34115 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34115);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34115)))?cljs.core.second.call(null,arglists_34115):arglists_34115));
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
var seq__34076_34116 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34077_34117 = null;
var count__34078_34118 = (0);
var i__34079_34119 = (0);
while(true){
if((i__34079_34119 < count__34078_34118)){
var vec__34080_34120 = cljs.core._nth.call(null,chunk__34077_34117,i__34079_34119);
var name_34121 = cljs.core.nth.call(null,vec__34080_34120,(0),null);
var map__34083_34122 = cljs.core.nth.call(null,vec__34080_34120,(1),null);
var map__34083_34123__$1 = ((((!((map__34083_34122 == null)))?(((((map__34083_34122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34083_34122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34083_34122):map__34083_34122);
var doc_34124 = cljs.core.get.call(null,map__34083_34123__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34125 = cljs.core.get.call(null,map__34083_34123__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34121);

cljs.core.println.call(null," ",arglists_34125);

if(cljs.core.truth_(doc_34124)){
cljs.core.println.call(null," ",doc_34124);
} else {
}


var G__34126 = seq__34076_34116;
var G__34127 = chunk__34077_34117;
var G__34128 = count__34078_34118;
var G__34129 = (i__34079_34119 + (1));
seq__34076_34116 = G__34126;
chunk__34077_34117 = G__34127;
count__34078_34118 = G__34128;
i__34079_34119 = G__34129;
continue;
} else {
var temp__5457__auto___34130 = cljs.core.seq.call(null,seq__34076_34116);
if(temp__5457__auto___34130){
var seq__34076_34131__$1 = temp__5457__auto___34130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34076_34131__$1)){
var c__4319__auto___34132 = cljs.core.chunk_first.call(null,seq__34076_34131__$1);
var G__34133 = cljs.core.chunk_rest.call(null,seq__34076_34131__$1);
var G__34134 = c__4319__auto___34132;
var G__34135 = cljs.core.count.call(null,c__4319__auto___34132);
var G__34136 = (0);
seq__34076_34116 = G__34133;
chunk__34077_34117 = G__34134;
count__34078_34118 = G__34135;
i__34079_34119 = G__34136;
continue;
} else {
var vec__34085_34137 = cljs.core.first.call(null,seq__34076_34131__$1);
var name_34138 = cljs.core.nth.call(null,vec__34085_34137,(0),null);
var map__34088_34139 = cljs.core.nth.call(null,vec__34085_34137,(1),null);
var map__34088_34140__$1 = ((((!((map__34088_34139 == null)))?(((((map__34088_34139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34088_34139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34088_34139):map__34088_34139);
var doc_34141 = cljs.core.get.call(null,map__34088_34140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34142 = cljs.core.get.call(null,map__34088_34140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34138);

cljs.core.println.call(null," ",arglists_34142);

if(cljs.core.truth_(doc_34141)){
cljs.core.println.call(null," ",doc_34141);
} else {
}


var G__34143 = cljs.core.next.call(null,seq__34076_34131__$1);
var G__34144 = null;
var G__34145 = (0);
var G__34146 = (0);
seq__34076_34116 = G__34143;
chunk__34077_34117 = G__34144;
count__34078_34118 = G__34145;
i__34079_34119 = G__34146;
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

var seq__34090 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34091 = null;
var count__34092 = (0);
var i__34093 = (0);
while(true){
if((i__34093 < count__34092)){
var role = cljs.core._nth.call(null,chunk__34091,i__34093);
var temp__5457__auto___34147__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34147__$1)){
var spec_34148 = temp__5457__auto___34147__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34148));
} else {
}


var G__34149 = seq__34090;
var G__34150 = chunk__34091;
var G__34151 = count__34092;
var G__34152 = (i__34093 + (1));
seq__34090 = G__34149;
chunk__34091 = G__34150;
count__34092 = G__34151;
i__34093 = G__34152;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__34090);
if(temp__5457__auto____$1){
var seq__34090__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34090__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34090__$1);
var G__34153 = cljs.core.chunk_rest.call(null,seq__34090__$1);
var G__34154 = c__4319__auto__;
var G__34155 = cljs.core.count.call(null,c__4319__auto__);
var G__34156 = (0);
seq__34090 = G__34153;
chunk__34091 = G__34154;
count__34092 = G__34155;
i__34093 = G__34156;
continue;
} else {
var role = cljs.core.first.call(null,seq__34090__$1);
var temp__5457__auto___34157__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34157__$2)){
var spec_34158 = temp__5457__auto___34157__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34158));
} else {
}


var G__34159 = cljs.core.next.call(null,seq__34090__$1);
var G__34160 = null;
var G__34161 = (0);
var G__34162 = (0);
seq__34090 = G__34159;
chunk__34091 = G__34160;
count__34092 = G__34161;
i__34093 = G__34162;
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

//# sourceMappingURL=repl.js.map?rel=1673416719944
