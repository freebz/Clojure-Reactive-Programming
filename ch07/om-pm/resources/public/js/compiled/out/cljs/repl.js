// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24733){
var map__24734 = p__24733;
var map__24734__$1 = ((((!((map__24734 == null)))?(((((map__24734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24734):map__24734);
var m = map__24734__$1;
var n = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24736_24758 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24737_24759 = null;
var count__24738_24760 = (0);
var i__24739_24761 = (0);
while(true){
if((i__24739_24761 < count__24738_24760)){
var f_24762 = cljs.core._nth.call(null,chunk__24737_24759,i__24739_24761);
cljs.core.println.call(null,"  ",f_24762);


var G__24763 = seq__24736_24758;
var G__24764 = chunk__24737_24759;
var G__24765 = count__24738_24760;
var G__24766 = (i__24739_24761 + (1));
seq__24736_24758 = G__24763;
chunk__24737_24759 = G__24764;
count__24738_24760 = G__24765;
i__24739_24761 = G__24766;
continue;
} else {
var temp__5457__auto___24767 = cljs.core.seq.call(null,seq__24736_24758);
if(temp__5457__auto___24767){
var seq__24736_24768__$1 = temp__5457__auto___24767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24736_24768__$1)){
var c__4319__auto___24769 = cljs.core.chunk_first.call(null,seq__24736_24768__$1);
var G__24770 = cljs.core.chunk_rest.call(null,seq__24736_24768__$1);
var G__24771 = c__4319__auto___24769;
var G__24772 = cljs.core.count.call(null,c__4319__auto___24769);
var G__24773 = (0);
seq__24736_24758 = G__24770;
chunk__24737_24759 = G__24771;
count__24738_24760 = G__24772;
i__24739_24761 = G__24773;
continue;
} else {
var f_24774 = cljs.core.first.call(null,seq__24736_24768__$1);
cljs.core.println.call(null,"  ",f_24774);


var G__24775 = cljs.core.next.call(null,seq__24736_24768__$1);
var G__24776 = null;
var G__24777 = (0);
var G__24778 = (0);
seq__24736_24758 = G__24775;
chunk__24737_24759 = G__24776;
count__24738_24760 = G__24777;
i__24739_24761 = G__24778;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24779 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24779);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24779)))?cljs.core.second.call(null,arglists_24779):arglists_24779));
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
var seq__24740_24780 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24741_24781 = null;
var count__24742_24782 = (0);
var i__24743_24783 = (0);
while(true){
if((i__24743_24783 < count__24742_24782)){
var vec__24744_24784 = cljs.core._nth.call(null,chunk__24741_24781,i__24743_24783);
var name_24785 = cljs.core.nth.call(null,vec__24744_24784,(0),null);
var map__24747_24786 = cljs.core.nth.call(null,vec__24744_24784,(1),null);
var map__24747_24787__$1 = ((((!((map__24747_24786 == null)))?(((((map__24747_24786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24747_24786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24747_24786):map__24747_24786);
var doc_24788 = cljs.core.get.call(null,map__24747_24787__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24789 = cljs.core.get.call(null,map__24747_24787__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24785);

cljs.core.println.call(null," ",arglists_24789);

if(cljs.core.truth_(doc_24788)){
cljs.core.println.call(null," ",doc_24788);
} else {
}


var G__24790 = seq__24740_24780;
var G__24791 = chunk__24741_24781;
var G__24792 = count__24742_24782;
var G__24793 = (i__24743_24783 + (1));
seq__24740_24780 = G__24790;
chunk__24741_24781 = G__24791;
count__24742_24782 = G__24792;
i__24743_24783 = G__24793;
continue;
} else {
var temp__5457__auto___24794 = cljs.core.seq.call(null,seq__24740_24780);
if(temp__5457__auto___24794){
var seq__24740_24795__$1 = temp__5457__auto___24794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24740_24795__$1)){
var c__4319__auto___24796 = cljs.core.chunk_first.call(null,seq__24740_24795__$1);
var G__24797 = cljs.core.chunk_rest.call(null,seq__24740_24795__$1);
var G__24798 = c__4319__auto___24796;
var G__24799 = cljs.core.count.call(null,c__4319__auto___24796);
var G__24800 = (0);
seq__24740_24780 = G__24797;
chunk__24741_24781 = G__24798;
count__24742_24782 = G__24799;
i__24743_24783 = G__24800;
continue;
} else {
var vec__24749_24801 = cljs.core.first.call(null,seq__24740_24795__$1);
var name_24802 = cljs.core.nth.call(null,vec__24749_24801,(0),null);
var map__24752_24803 = cljs.core.nth.call(null,vec__24749_24801,(1),null);
var map__24752_24804__$1 = ((((!((map__24752_24803 == null)))?(((((map__24752_24803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24752_24803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24752_24803):map__24752_24803);
var doc_24805 = cljs.core.get.call(null,map__24752_24804__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24806 = cljs.core.get.call(null,map__24752_24804__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24802);

cljs.core.println.call(null," ",arglists_24806);

if(cljs.core.truth_(doc_24805)){
cljs.core.println.call(null," ",doc_24805);
} else {
}


var G__24807 = cljs.core.next.call(null,seq__24740_24795__$1);
var G__24808 = null;
var G__24809 = (0);
var G__24810 = (0);
seq__24740_24780 = G__24807;
chunk__24741_24781 = G__24808;
count__24742_24782 = G__24809;
i__24743_24783 = G__24810;
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

var seq__24754 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24755 = null;
var count__24756 = (0);
var i__24757 = (0);
while(true){
if((i__24757 < count__24756)){
var role = cljs.core._nth.call(null,chunk__24755,i__24757);
var temp__5457__auto___24811__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24811__$1)){
var spec_24812 = temp__5457__auto___24811__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24812));
} else {
}


var G__24813 = seq__24754;
var G__24814 = chunk__24755;
var G__24815 = count__24756;
var G__24816 = (i__24757 + (1));
seq__24754 = G__24813;
chunk__24755 = G__24814;
count__24756 = G__24815;
i__24757 = G__24816;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__24754);
if(temp__5457__auto____$1){
var seq__24754__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24754__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24754__$1);
var G__24817 = cljs.core.chunk_rest.call(null,seq__24754__$1);
var G__24818 = c__4319__auto__;
var G__24819 = cljs.core.count.call(null,c__4319__auto__);
var G__24820 = (0);
seq__24754 = G__24817;
chunk__24755 = G__24818;
count__24756 = G__24819;
i__24757 = G__24820;
continue;
} else {
var role = cljs.core.first.call(null,seq__24754__$1);
var temp__5457__auto___24821__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24821__$2)){
var spec_24822 = temp__5457__auto___24821__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24822));
} else {
}


var G__24823 = cljs.core.next.call(null,seq__24754__$1);
var G__24824 = null;
var G__24825 = (0);
var G__24826 = (0);
seq__24754 = G__24823;
chunk__24755 = G__24824;
count__24756 = G__24825;
i__24757 = G__24826;
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

//# sourceMappingURL=repl.js.map?rel=1673484855051
