// Compiled by ClojureScript 1.10.238 {}
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__25800){
var vec__25801 = p__25800;
var seq__25802 = cljs.core.seq.call(null,vec__25801);
var first__25803 = cljs.core.first.call(null,seq__25802);
var seq__25802__$1 = cljs.core.next.call(null,seq__25802);
var k = first__25803;
var ks = seq__25802__$1;
if(cljs.core.truth_(m)){
var temp__5455__auto__ = (function (){var and__3911__auto__ = ks;
if(and__3911__auto__){
return dommy.utils.dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var res = temp__5455__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
dommy.utils.as_str = (function dommy$utils$as_str(s){
if((s instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__25804 = cljs.core.namespace.call(null,s);
if((G__25804 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25804),"/"].join('');
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,s))].join('');
} else {
return s;
}
});
/**
 * Does `class-name` string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.utils.class_match_QMARK_ = (function dommy$utils$class_match_QMARK_(class_name,class$,idx){
var and__3911__auto__ = (((idx === (0))) || ((" " === class_name.charAt((idx - (1))))));
if(and__3911__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return (((stop === total_len)) || ((" " === class_name.charAt(stop))));
} else {
return null;
}
} else {
return and__3911__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 *  only will be used when Element::classList doesn't exist
 */
dommy.utils.class_index = (function dommy$utils$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.utils.class_match_QMARK_.call(null,class_name,class$,i)){
return i;
} else {
var G__25805 = (i + class$.length);
start_from = G__25805;
continue;
}
} else {
return null;
}
break;
}
});
dommy.utils.remove_class_str = (function dommy$utils$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__5455__auto__ = dommy.utils.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__5455__auto__)){
var i = temp__5455__auto__;
var G__25806 = (function (){var end = (i + class$.length);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__25806;
continue;
} else {
return class_name;
}
break;
}
});

//# sourceMappingURL=utils.js.map?rel=1672617805631
