// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31531){
var map__31532 = p__31531;
var map__31532__$1 = ((((!((map__31532 == null)))?(((((map__31532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31532):map__31532);
var m = map__31532__$1;
var n = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31534_31556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31535_31557 = null;
var count__31536_31558 = (0);
var i__31537_31559 = (0);
while(true){
if((i__31537_31559 < count__31536_31558)){
var f_31560 = cljs.core._nth.call(null,chunk__31535_31557,i__31537_31559);
cljs.core.println.call(null,"  ",f_31560);


var G__31561 = seq__31534_31556;
var G__31562 = chunk__31535_31557;
var G__31563 = count__31536_31558;
var G__31564 = (i__31537_31559 + (1));
seq__31534_31556 = G__31561;
chunk__31535_31557 = G__31562;
count__31536_31558 = G__31563;
i__31537_31559 = G__31564;
continue;
} else {
var temp__5457__auto___31565 = cljs.core.seq.call(null,seq__31534_31556);
if(temp__5457__auto___31565){
var seq__31534_31566__$1 = temp__5457__auto___31565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31534_31566__$1)){
var c__4319__auto___31567 = cljs.core.chunk_first.call(null,seq__31534_31566__$1);
var G__31568 = cljs.core.chunk_rest.call(null,seq__31534_31566__$1);
var G__31569 = c__4319__auto___31567;
var G__31570 = cljs.core.count.call(null,c__4319__auto___31567);
var G__31571 = (0);
seq__31534_31556 = G__31568;
chunk__31535_31557 = G__31569;
count__31536_31558 = G__31570;
i__31537_31559 = G__31571;
continue;
} else {
var f_31572 = cljs.core.first.call(null,seq__31534_31566__$1);
cljs.core.println.call(null,"  ",f_31572);


var G__31573 = cljs.core.next.call(null,seq__31534_31566__$1);
var G__31574 = null;
var G__31575 = (0);
var G__31576 = (0);
seq__31534_31556 = G__31573;
chunk__31535_31557 = G__31574;
count__31536_31558 = G__31575;
i__31537_31559 = G__31576;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31577 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31577);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31577)))?cljs.core.second.call(null,arglists_31577):arglists_31577));
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
var seq__31538_31578 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31539_31579 = null;
var count__31540_31580 = (0);
var i__31541_31581 = (0);
while(true){
if((i__31541_31581 < count__31540_31580)){
var vec__31542_31582 = cljs.core._nth.call(null,chunk__31539_31579,i__31541_31581);
var name_31583 = cljs.core.nth.call(null,vec__31542_31582,(0),null);
var map__31545_31584 = cljs.core.nth.call(null,vec__31542_31582,(1),null);
var map__31545_31585__$1 = ((((!((map__31545_31584 == null)))?(((((map__31545_31584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31545_31584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31545_31584):map__31545_31584);
var doc_31586 = cljs.core.get.call(null,map__31545_31585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31587 = cljs.core.get.call(null,map__31545_31585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31583);

cljs.core.println.call(null," ",arglists_31587);

if(cljs.core.truth_(doc_31586)){
cljs.core.println.call(null," ",doc_31586);
} else {
}


var G__31588 = seq__31538_31578;
var G__31589 = chunk__31539_31579;
var G__31590 = count__31540_31580;
var G__31591 = (i__31541_31581 + (1));
seq__31538_31578 = G__31588;
chunk__31539_31579 = G__31589;
count__31540_31580 = G__31590;
i__31541_31581 = G__31591;
continue;
} else {
var temp__5457__auto___31592 = cljs.core.seq.call(null,seq__31538_31578);
if(temp__5457__auto___31592){
var seq__31538_31593__$1 = temp__5457__auto___31592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31538_31593__$1)){
var c__4319__auto___31594 = cljs.core.chunk_first.call(null,seq__31538_31593__$1);
var G__31595 = cljs.core.chunk_rest.call(null,seq__31538_31593__$1);
var G__31596 = c__4319__auto___31594;
var G__31597 = cljs.core.count.call(null,c__4319__auto___31594);
var G__31598 = (0);
seq__31538_31578 = G__31595;
chunk__31539_31579 = G__31596;
count__31540_31580 = G__31597;
i__31541_31581 = G__31598;
continue;
} else {
var vec__31547_31599 = cljs.core.first.call(null,seq__31538_31593__$1);
var name_31600 = cljs.core.nth.call(null,vec__31547_31599,(0),null);
var map__31550_31601 = cljs.core.nth.call(null,vec__31547_31599,(1),null);
var map__31550_31602__$1 = ((((!((map__31550_31601 == null)))?(((((map__31550_31601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31550_31601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31550_31601):map__31550_31601);
var doc_31603 = cljs.core.get.call(null,map__31550_31602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31604 = cljs.core.get.call(null,map__31550_31602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31600);

cljs.core.println.call(null," ",arglists_31604);

if(cljs.core.truth_(doc_31603)){
cljs.core.println.call(null," ",doc_31603);
} else {
}


var G__31605 = cljs.core.next.call(null,seq__31538_31593__$1);
var G__31606 = null;
var G__31607 = (0);
var G__31608 = (0);
seq__31538_31578 = G__31605;
chunk__31539_31579 = G__31606;
count__31540_31580 = G__31607;
i__31541_31581 = G__31608;
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

var seq__31552 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31553 = null;
var count__31554 = (0);
var i__31555 = (0);
while(true){
if((i__31555 < count__31554)){
var role = cljs.core._nth.call(null,chunk__31553,i__31555);
var temp__5457__auto___31609__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31609__$1)){
var spec_31610 = temp__5457__auto___31609__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31610));
} else {
}


var G__31611 = seq__31552;
var G__31612 = chunk__31553;
var G__31613 = count__31554;
var G__31614 = (i__31555 + (1));
seq__31552 = G__31611;
chunk__31553 = G__31612;
count__31554 = G__31613;
i__31555 = G__31614;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31552);
if(temp__5457__auto____$1){
var seq__31552__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31552__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31552__$1);
var G__31615 = cljs.core.chunk_rest.call(null,seq__31552__$1);
var G__31616 = c__4319__auto__;
var G__31617 = cljs.core.count.call(null,c__4319__auto__);
var G__31618 = (0);
seq__31552 = G__31615;
chunk__31553 = G__31616;
count__31554 = G__31617;
i__31555 = G__31618;
continue;
} else {
var role = cljs.core.first.call(null,seq__31552__$1);
var temp__5457__auto___31619__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31619__$2)){
var spec_31620 = temp__5457__auto___31619__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31620));
} else {
}


var G__31621 = cljs.core.next.call(null,seq__31552__$1);
var G__31622 = null;
var G__31623 = (0);
var G__31624 = (0);
seq__31552 = G__31621;
chunk__31553 = G__31622;
count__31554 = G__31623;
i__31555 = G__31624;
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

//# sourceMappingURL=repl.js.map?rel=1672617820818
