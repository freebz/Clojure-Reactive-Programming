// Compiled by ClojureScript 1.10.238 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__3922__auto__ = elem.textContent;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__25923 = arguments.length;
switch (G__25923) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto__ = elem.classList;
if(cljs.core.truth_(temp__5455__auto__)){
var class_list = temp__5455__auto__;
return class_list.contains(c__$1);
} else {
var temp__5457__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5457__auto__)){
var class_name = temp__5457__auto__;
var temp__5457__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5457__auto____$1)){
var i = temp__5457__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__25926 = arguments.length;
switch (G__25926) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__25930 = arguments.length;
switch (G__25930) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__25928_SHARP_){
return !((p1__25928_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25944 = arguments.length;
var i__4500__auto___25945 = (0);
while(true){
if((i__4500__auto___25945 < len__4499__auto___25944)){
args__4502__auto__.push((arguments[i__4500__auto___25945]));

var G__25946 = (i__4500__auto___25945 + (1));
i__4500__auto___25945 = G__25946;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__25934_25947 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__25935_25948 = null;
var count__25936_25949 = (0);
var i__25937_25950 = (0);
while(true){
if((i__25937_25950 < count__25936_25949)){
var vec__25938_25951 = cljs.core._nth.call(null,chunk__25935_25948,i__25937_25950);
var k_25952 = cljs.core.nth.call(null,vec__25938_25951,(0),null);
var v_25953 = cljs.core.nth.call(null,vec__25938_25951,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_25952),v_25953);


var G__25954 = seq__25934_25947;
var G__25955 = chunk__25935_25948;
var G__25956 = count__25936_25949;
var G__25957 = (i__25937_25950 + (1));
seq__25934_25947 = G__25954;
chunk__25935_25948 = G__25955;
count__25936_25949 = G__25956;
i__25937_25950 = G__25957;
continue;
} else {
var temp__5457__auto___25958 = cljs.core.seq.call(null,seq__25934_25947);
if(temp__5457__auto___25958){
var seq__25934_25959__$1 = temp__5457__auto___25958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25934_25959__$1)){
var c__4319__auto___25960 = cljs.core.chunk_first.call(null,seq__25934_25959__$1);
var G__25961 = cljs.core.chunk_rest.call(null,seq__25934_25959__$1);
var G__25962 = c__4319__auto___25960;
var G__25963 = cljs.core.count.call(null,c__4319__auto___25960);
var G__25964 = (0);
seq__25934_25947 = G__25961;
chunk__25935_25948 = G__25962;
count__25936_25949 = G__25963;
i__25937_25950 = G__25964;
continue;
} else {
var vec__25941_25965 = cljs.core.first.call(null,seq__25934_25959__$1);
var k_25966 = cljs.core.nth.call(null,vec__25941_25965,(0),null);
var v_25967 = cljs.core.nth.call(null,vec__25941_25965,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_25966),v_25967);


var G__25968 = cljs.core.next.call(null,seq__25934_25959__$1);
var G__25969 = null;
var G__25970 = (0);
var G__25971 = (0);
seq__25934_25947 = G__25968;
chunk__25935_25948 = G__25969;
count__25936_25949 = G__25970;
i__25937_25950 = G__25971;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq25932){
var G__25933 = cljs.core.first.call(null,seq25932);
var seq25932__$1 = cljs.core.next.call(null,seq25932);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25933,seq25932__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25978 = arguments.length;
var i__4500__auto___25979 = (0);
while(true){
if((i__4500__auto___25979 < len__4499__auto___25978)){
args__4502__auto__.push((arguments[i__4500__auto___25979]));

var G__25980 = (i__4500__auto___25979 + (1));
i__4500__auto___25979 = G__25980;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__25974_25981 = cljs.core.seq.call(null,keywords);
var chunk__25975_25982 = null;
var count__25976_25983 = (0);
var i__25977_25984 = (0);
while(true){
if((i__25977_25984 < count__25976_25983)){
var kw_25985 = cljs.core._nth.call(null,chunk__25975_25982,i__25977_25984);
style.removeProperty(dommy.utils.as_str.call(null,kw_25985));


var G__25986 = seq__25974_25981;
var G__25987 = chunk__25975_25982;
var G__25988 = count__25976_25983;
var G__25989 = (i__25977_25984 + (1));
seq__25974_25981 = G__25986;
chunk__25975_25982 = G__25987;
count__25976_25983 = G__25988;
i__25977_25984 = G__25989;
continue;
} else {
var temp__5457__auto___25990 = cljs.core.seq.call(null,seq__25974_25981);
if(temp__5457__auto___25990){
var seq__25974_25991__$1 = temp__5457__auto___25990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25974_25991__$1)){
var c__4319__auto___25992 = cljs.core.chunk_first.call(null,seq__25974_25991__$1);
var G__25993 = cljs.core.chunk_rest.call(null,seq__25974_25991__$1);
var G__25994 = c__4319__auto___25992;
var G__25995 = cljs.core.count.call(null,c__4319__auto___25992);
var G__25996 = (0);
seq__25974_25981 = G__25993;
chunk__25975_25982 = G__25994;
count__25976_25983 = G__25995;
i__25977_25984 = G__25996;
continue;
} else {
var kw_25997 = cljs.core.first.call(null,seq__25974_25991__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_25997));


var G__25998 = cljs.core.next.call(null,seq__25974_25991__$1);
var G__25999 = null;
var G__26000 = (0);
var G__26001 = (0);
seq__25974_25981 = G__25998;
chunk__25975_25982 = G__25999;
count__25976_25983 = G__26000;
i__25977_25984 = G__26001;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq25972){
var G__25973 = cljs.core.first.call(null,seq25972);
var seq25972__$1 = cljs.core.next.call(null,seq25972);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25973,seq25972__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26014 = arguments.length;
var i__4500__auto___26015 = (0);
while(true){
if((i__4500__auto___26015 < len__4499__auto___26014)){
args__4502__auto__.push((arguments[i__4500__auto___26015]));

var G__26016 = (i__4500__auto___26015 + (1));
i__4500__auto___26015 = G__26016;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__26004_26017 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__26005_26018 = null;
var count__26006_26019 = (0);
var i__26007_26020 = (0);
while(true){
if((i__26007_26020 < count__26006_26019)){
var vec__26008_26021 = cljs.core._nth.call(null,chunk__26005_26018,i__26007_26020);
var k_26022 = cljs.core.nth.call(null,vec__26008_26021,(0),null);
var v_26023 = cljs.core.nth.call(null,vec__26008_26021,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_26022,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26023),"px"].join(''));


var G__26024 = seq__26004_26017;
var G__26025 = chunk__26005_26018;
var G__26026 = count__26006_26019;
var G__26027 = (i__26007_26020 + (1));
seq__26004_26017 = G__26024;
chunk__26005_26018 = G__26025;
count__26006_26019 = G__26026;
i__26007_26020 = G__26027;
continue;
} else {
var temp__5457__auto___26028 = cljs.core.seq.call(null,seq__26004_26017);
if(temp__5457__auto___26028){
var seq__26004_26029__$1 = temp__5457__auto___26028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26004_26029__$1)){
var c__4319__auto___26030 = cljs.core.chunk_first.call(null,seq__26004_26029__$1);
var G__26031 = cljs.core.chunk_rest.call(null,seq__26004_26029__$1);
var G__26032 = c__4319__auto___26030;
var G__26033 = cljs.core.count.call(null,c__4319__auto___26030);
var G__26034 = (0);
seq__26004_26017 = G__26031;
chunk__26005_26018 = G__26032;
count__26006_26019 = G__26033;
i__26007_26020 = G__26034;
continue;
} else {
var vec__26011_26035 = cljs.core.first.call(null,seq__26004_26029__$1);
var k_26036 = cljs.core.nth.call(null,vec__26011_26035,(0),null);
var v_26037 = cljs.core.nth.call(null,vec__26011_26035,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_26036,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_26037),"px"].join(''));


var G__26038 = cljs.core.next.call(null,seq__26004_26029__$1);
var G__26039 = null;
var G__26040 = (0);
var G__26041 = (0);
seq__26004_26017 = G__26038;
chunk__26005_26018 = G__26039;
count__26006_26019 = G__26040;
i__26007_26020 = G__26041;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq26002){
var G__26003 = cljs.core.first.call(null,seq26002);
var seq26002__$1 = cljs.core.next.call(null,seq26002);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26003,seq26002__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__26047 = arguments.length;
switch (G__26047) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___26061 = arguments.length;
var i__4500__auto___26062 = (0);
while(true){
if((i__4500__auto___26062 < len__4499__auto___26061)){
args_arr__4514__auto__.push((arguments[i__4500__auto___26062]));

var G__26063 = (i__4500__auto___26062 + (1));
i__4500__auto___26062 = G__26063;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__26048 = elem;
(G__26048[k__$1] = v);

return G__26048;
} else {
var G__26049 = elem;
G__26049.setAttribute(k__$1,v);

return G__26049;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__26050_26064 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__26051_26065 = null;
var count__26052_26066 = (0);
var i__26053_26067 = (0);
while(true){
if((i__26053_26067 < count__26052_26066)){
var vec__26054_26068 = cljs.core._nth.call(null,chunk__26051_26065,i__26053_26067);
var k_26069__$1 = cljs.core.nth.call(null,vec__26054_26068,(0),null);
var v_26070__$1 = cljs.core.nth.call(null,vec__26054_26068,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_26069__$1,v_26070__$1);


var G__26071 = seq__26050_26064;
var G__26072 = chunk__26051_26065;
var G__26073 = count__26052_26066;
var G__26074 = (i__26053_26067 + (1));
seq__26050_26064 = G__26071;
chunk__26051_26065 = G__26072;
count__26052_26066 = G__26073;
i__26053_26067 = G__26074;
continue;
} else {
var temp__5457__auto___26075 = cljs.core.seq.call(null,seq__26050_26064);
if(temp__5457__auto___26075){
var seq__26050_26076__$1 = temp__5457__auto___26075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26050_26076__$1)){
var c__4319__auto___26077 = cljs.core.chunk_first.call(null,seq__26050_26076__$1);
var G__26078 = cljs.core.chunk_rest.call(null,seq__26050_26076__$1);
var G__26079 = c__4319__auto___26077;
var G__26080 = cljs.core.count.call(null,c__4319__auto___26077);
var G__26081 = (0);
seq__26050_26064 = G__26078;
chunk__26051_26065 = G__26079;
count__26052_26066 = G__26080;
i__26053_26067 = G__26081;
continue;
} else {
var vec__26057_26082 = cljs.core.first.call(null,seq__26050_26076__$1);
var k_26083__$1 = cljs.core.nth.call(null,vec__26057_26082,(0),null);
var v_26084__$1 = cljs.core.nth.call(null,vec__26057_26082,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_26083__$1,v_26084__$1);


var G__26085 = cljs.core.next.call(null,seq__26050_26076__$1);
var G__26086 = null;
var G__26087 = (0);
var G__26088 = (0);
seq__26050_26064 = G__26085;
chunk__26051_26065 = G__26086;
count__26052_26066 = G__26087;
i__26053_26067 = G__26088;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq26043){
var G__26044 = cljs.core.first.call(null,seq26043);
var seq26043__$1 = cljs.core.next.call(null,seq26043);
var G__26045 = cljs.core.first.call(null,seq26043__$1);
var seq26043__$2 = cljs.core.next.call(null,seq26043__$1);
var G__26046 = cljs.core.first.call(null,seq26043__$2);
var seq26043__$3 = cljs.core.next.call(null,seq26043__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26044,G__26045,G__26046,seq26043__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__26093 = arguments.length;
switch (G__26093) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___26099 = arguments.length;
var i__4500__auto___26100 = (0);
while(true){
if((i__4500__auto___26100 < len__4499__auto___26099)){
args_arr__4514__auto__.push((arguments[i__4500__auto___26100]));

var G__26101 = (i__4500__auto___26100 + (1));
i__4500__auto___26100 = G__26101;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_26102__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_26102__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_26102__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__26094_26103 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__26095_26104 = null;
var count__26096_26105 = (0);
var i__26097_26106 = (0);
while(true){
if((i__26097_26106 < count__26096_26105)){
var k_26107__$1 = cljs.core._nth.call(null,chunk__26095_26104,i__26097_26106);
dommy.core.remove_attr_BANG_.call(null,elem,k_26107__$1);


var G__26108 = seq__26094_26103;
var G__26109 = chunk__26095_26104;
var G__26110 = count__26096_26105;
var G__26111 = (i__26097_26106 + (1));
seq__26094_26103 = G__26108;
chunk__26095_26104 = G__26109;
count__26096_26105 = G__26110;
i__26097_26106 = G__26111;
continue;
} else {
var temp__5457__auto___26112 = cljs.core.seq.call(null,seq__26094_26103);
if(temp__5457__auto___26112){
var seq__26094_26113__$1 = temp__5457__auto___26112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26094_26113__$1)){
var c__4319__auto___26114 = cljs.core.chunk_first.call(null,seq__26094_26113__$1);
var G__26115 = cljs.core.chunk_rest.call(null,seq__26094_26113__$1);
var G__26116 = c__4319__auto___26114;
var G__26117 = cljs.core.count.call(null,c__4319__auto___26114);
var G__26118 = (0);
seq__26094_26103 = G__26115;
chunk__26095_26104 = G__26116;
count__26096_26105 = G__26117;
i__26097_26106 = G__26118;
continue;
} else {
var k_26119__$1 = cljs.core.first.call(null,seq__26094_26113__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_26119__$1);


var G__26120 = cljs.core.next.call(null,seq__26094_26113__$1);
var G__26121 = null;
var G__26122 = (0);
var G__26123 = (0);
seq__26094_26103 = G__26120;
chunk__26095_26104 = G__26121;
count__26096_26105 = G__26122;
i__26097_26106 = G__26123;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq26090){
var G__26091 = cljs.core.first.call(null,seq26090);
var seq26090__$1 = cljs.core.next.call(null,seq26090);
var G__26092 = cljs.core.first.call(null,seq26090__$1);
var seq26090__$2 = cljs.core.next.call(null,seq26090__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26091,G__26092,seq26090__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__26125 = arguments.length;
switch (G__26125) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__26131 = arguments.length;
switch (G__26131) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___26145 = arguments.length;
var i__4500__auto___26146 = (0);
while(true){
if((i__4500__auto___26146 < len__4499__auto___26145)){
args_arr__4514__auto__.push((arguments[i__4500__auto___26146]));

var G__26147 = (i__4500__auto___26146 + (1));
i__4500__auto___26146 = G__26147;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5455__auto___26148 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___26148)){
var class_list_26149 = temp__5455__auto___26148;
var seq__26132_26150 = cljs.core.seq.call(null,classes__$1);
var chunk__26133_26151 = null;
var count__26134_26152 = (0);
var i__26135_26153 = (0);
while(true){
if((i__26135_26153 < count__26134_26152)){
var c_26154 = cljs.core._nth.call(null,chunk__26133_26151,i__26135_26153);
class_list_26149.add(c_26154);


var G__26155 = seq__26132_26150;
var G__26156 = chunk__26133_26151;
var G__26157 = count__26134_26152;
var G__26158 = (i__26135_26153 + (1));
seq__26132_26150 = G__26155;
chunk__26133_26151 = G__26156;
count__26134_26152 = G__26157;
i__26135_26153 = G__26158;
continue;
} else {
var temp__5457__auto___26159 = cljs.core.seq.call(null,seq__26132_26150);
if(temp__5457__auto___26159){
var seq__26132_26160__$1 = temp__5457__auto___26159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26132_26160__$1)){
var c__4319__auto___26161 = cljs.core.chunk_first.call(null,seq__26132_26160__$1);
var G__26162 = cljs.core.chunk_rest.call(null,seq__26132_26160__$1);
var G__26163 = c__4319__auto___26161;
var G__26164 = cljs.core.count.call(null,c__4319__auto___26161);
var G__26165 = (0);
seq__26132_26150 = G__26162;
chunk__26133_26151 = G__26163;
count__26134_26152 = G__26164;
i__26135_26153 = G__26165;
continue;
} else {
var c_26166 = cljs.core.first.call(null,seq__26132_26160__$1);
class_list_26149.add(c_26166);


var G__26167 = cljs.core.next.call(null,seq__26132_26160__$1);
var G__26168 = null;
var G__26169 = (0);
var G__26170 = (0);
seq__26132_26150 = G__26167;
chunk__26133_26151 = G__26168;
count__26134_26152 = G__26169;
i__26135_26153 = G__26170;
continue;
}
} else {
}
}
break;
}
} else {
var seq__26136_26171 = cljs.core.seq.call(null,classes__$1);
var chunk__26137_26172 = null;
var count__26138_26173 = (0);
var i__26139_26174 = (0);
while(true){
if((i__26139_26174 < count__26138_26173)){
var c_26175 = cljs.core._nth.call(null,chunk__26137_26172,i__26139_26174);
var class_name_26176 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_26176,c_26175))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_26176 === ""))?c_26175:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_26176)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_26175)].join('')));
}


var G__26177 = seq__26136_26171;
var G__26178 = chunk__26137_26172;
var G__26179 = count__26138_26173;
var G__26180 = (i__26139_26174 + (1));
seq__26136_26171 = G__26177;
chunk__26137_26172 = G__26178;
count__26138_26173 = G__26179;
i__26139_26174 = G__26180;
continue;
} else {
var temp__5457__auto___26181 = cljs.core.seq.call(null,seq__26136_26171);
if(temp__5457__auto___26181){
var seq__26136_26182__$1 = temp__5457__auto___26181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26136_26182__$1)){
var c__4319__auto___26183 = cljs.core.chunk_first.call(null,seq__26136_26182__$1);
var G__26184 = cljs.core.chunk_rest.call(null,seq__26136_26182__$1);
var G__26185 = c__4319__auto___26183;
var G__26186 = cljs.core.count.call(null,c__4319__auto___26183);
var G__26187 = (0);
seq__26136_26171 = G__26184;
chunk__26137_26172 = G__26185;
count__26138_26173 = G__26186;
i__26139_26174 = G__26187;
continue;
} else {
var c_26188 = cljs.core.first.call(null,seq__26136_26182__$1);
var class_name_26189 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_26189,c_26188))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_26189 === ""))?c_26188:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_26189)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_26188)].join('')));
}


var G__26190 = cljs.core.next.call(null,seq__26136_26182__$1);
var G__26191 = null;
var G__26192 = (0);
var G__26193 = (0);
seq__26136_26171 = G__26190;
chunk__26137_26172 = G__26191;
count__26138_26173 = G__26192;
i__26139_26174 = G__26193;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__26140_26194 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__26141_26195 = null;
var count__26142_26196 = (0);
var i__26143_26197 = (0);
while(true){
if((i__26143_26197 < count__26142_26196)){
var c_26198 = cljs.core._nth.call(null,chunk__26141_26195,i__26143_26197);
dommy.core.add_class_BANG_.call(null,elem,c_26198);


var G__26199 = seq__26140_26194;
var G__26200 = chunk__26141_26195;
var G__26201 = count__26142_26196;
var G__26202 = (i__26143_26197 + (1));
seq__26140_26194 = G__26199;
chunk__26141_26195 = G__26200;
count__26142_26196 = G__26201;
i__26143_26197 = G__26202;
continue;
} else {
var temp__5457__auto___26203 = cljs.core.seq.call(null,seq__26140_26194);
if(temp__5457__auto___26203){
var seq__26140_26204__$1 = temp__5457__auto___26203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26140_26204__$1)){
var c__4319__auto___26205 = cljs.core.chunk_first.call(null,seq__26140_26204__$1);
var G__26206 = cljs.core.chunk_rest.call(null,seq__26140_26204__$1);
var G__26207 = c__4319__auto___26205;
var G__26208 = cljs.core.count.call(null,c__4319__auto___26205);
var G__26209 = (0);
seq__26140_26194 = G__26206;
chunk__26141_26195 = G__26207;
count__26142_26196 = G__26208;
i__26143_26197 = G__26209;
continue;
} else {
var c_26210 = cljs.core.first.call(null,seq__26140_26204__$1);
dommy.core.add_class_BANG_.call(null,elem,c_26210);


var G__26211 = cljs.core.next.call(null,seq__26140_26204__$1);
var G__26212 = null;
var G__26213 = (0);
var G__26214 = (0);
seq__26140_26194 = G__26211;
chunk__26141_26195 = G__26212;
count__26142_26196 = G__26213;
i__26143_26197 = G__26214;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq26128){
var G__26129 = cljs.core.first.call(null,seq26128);
var seq26128__$1 = cljs.core.next.call(null,seq26128);
var G__26130 = cljs.core.first.call(null,seq26128__$1);
var seq26128__$2 = cljs.core.next.call(null,seq26128__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26129,G__26130,seq26128__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__26219 = arguments.length;
switch (G__26219) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___26225 = arguments.length;
var i__4500__auto___26226 = (0);
while(true){
if((i__4500__auto___26226 < len__4499__auto___26225)){
args_arr__4514__auto__.push((arguments[i__4500__auto___26226]));

var G__26227 = (i__4500__auto___26226 + (1));
i__4500__auto___26226 = G__26227;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto___26228 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___26228)){
var class_list_26229 = temp__5455__auto___26228;
class_list_26229.remove(c__$1);
} else {
var class_name_26230 = dommy.core.class$.call(null,elem);
var new_class_name_26231 = dommy.utils.remove_class_str.call(null,class_name_26230,c__$1);
if((class_name_26230 === new_class_name_26231)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_26231);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__26220 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__26221 = null;
var count__26222 = (0);
var i__26223 = (0);
while(true){
if((i__26223 < count__26222)){
var c = cljs.core._nth.call(null,chunk__26221,i__26223);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__26232 = seq__26220;
var G__26233 = chunk__26221;
var G__26234 = count__26222;
var G__26235 = (i__26223 + (1));
seq__26220 = G__26232;
chunk__26221 = G__26233;
count__26222 = G__26234;
i__26223 = G__26235;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26220);
if(temp__5457__auto__){
var seq__26220__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26220__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26220__$1);
var G__26236 = cljs.core.chunk_rest.call(null,seq__26220__$1);
var G__26237 = c__4319__auto__;
var G__26238 = cljs.core.count.call(null,c__4319__auto__);
var G__26239 = (0);
seq__26220 = G__26236;
chunk__26221 = G__26237;
count__26222 = G__26238;
i__26223 = G__26239;
continue;
} else {
var c = cljs.core.first.call(null,seq__26220__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__26240 = cljs.core.next.call(null,seq__26220__$1);
var G__26241 = null;
var G__26242 = (0);
var G__26243 = (0);
seq__26220 = G__26240;
chunk__26221 = G__26241;
count__26222 = G__26242;
i__26223 = G__26243;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq26216){
var G__26217 = cljs.core.first.call(null,seq26216);
var seq26216__$1 = cljs.core.next.call(null,seq26216);
var G__26218 = cljs.core.first.call(null,seq26216__$1);
var seq26216__$2 = cljs.core.next.call(null,seq26216__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26217,G__26218,seq26216__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__26245 = arguments.length;
switch (G__26245) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto___26247 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___26247)){
var class_list_26248 = temp__5455__auto___26247;
class_list_26248.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__26250 = arguments.length;
switch (G__26250) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__26253 = arguments.length;
switch (G__26253) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__26259 = arguments.length;
switch (G__26259) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___26266 = arguments.length;
var i__4500__auto___26267 = (0);
while(true){
if((i__4500__auto___26267 < len__4499__auto___26266)){
args_arr__4514__auto__.push((arguments[i__4500__auto___26267]));

var G__26268 = (i__4500__auto___26267 + (1));
i__4500__auto___26267 = G__26268;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__26260 = parent;
G__26260.appendChild(child);

return G__26260;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__26261_26269 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__26262_26270 = null;
var count__26263_26271 = (0);
var i__26264_26272 = (0);
while(true){
if((i__26264_26272 < count__26263_26271)){
var c_26273 = cljs.core._nth.call(null,chunk__26262_26270,i__26264_26272);
dommy.core.append_BANG_.call(null,parent,c_26273);


var G__26274 = seq__26261_26269;
var G__26275 = chunk__26262_26270;
var G__26276 = count__26263_26271;
var G__26277 = (i__26264_26272 + (1));
seq__26261_26269 = G__26274;
chunk__26262_26270 = G__26275;
count__26263_26271 = G__26276;
i__26264_26272 = G__26277;
continue;
} else {
var temp__5457__auto___26278 = cljs.core.seq.call(null,seq__26261_26269);
if(temp__5457__auto___26278){
var seq__26261_26279__$1 = temp__5457__auto___26278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26261_26279__$1)){
var c__4319__auto___26280 = cljs.core.chunk_first.call(null,seq__26261_26279__$1);
var G__26281 = cljs.core.chunk_rest.call(null,seq__26261_26279__$1);
var G__26282 = c__4319__auto___26280;
var G__26283 = cljs.core.count.call(null,c__4319__auto___26280);
var G__26284 = (0);
seq__26261_26269 = G__26281;
chunk__26262_26270 = G__26282;
count__26263_26271 = G__26283;
i__26264_26272 = G__26284;
continue;
} else {
var c_26285 = cljs.core.first.call(null,seq__26261_26279__$1);
dommy.core.append_BANG_.call(null,parent,c_26285);


var G__26286 = cljs.core.next.call(null,seq__26261_26279__$1);
var G__26287 = null;
var G__26288 = (0);
var G__26289 = (0);
seq__26261_26269 = G__26286;
chunk__26262_26270 = G__26287;
count__26263_26271 = G__26288;
i__26264_26272 = G__26289;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq26256){
var G__26257 = cljs.core.first.call(null,seq26256);
var seq26256__$1 = cljs.core.next.call(null,seq26256);
var G__26258 = cljs.core.first.call(null,seq26256__$1);
var seq26256__$2 = cljs.core.next.call(null,seq26256__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26257,G__26258,seq26256__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__26294 = arguments.length;
switch (G__26294) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___26301 = arguments.length;
var i__4500__auto___26302 = (0);
while(true){
if((i__4500__auto___26302 < len__4499__auto___26301)){
args_arr__4514__auto__.push((arguments[i__4500__auto___26302]));

var G__26303 = (i__4500__auto___26302 + (1));
i__4500__auto___26302 = G__26303;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__26295 = parent;
G__26295.insertBefore(child,parent.firstChild);

return G__26295;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__26296_26304 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__26297_26305 = null;
var count__26298_26306 = (0);
var i__26299_26307 = (0);
while(true){
if((i__26299_26307 < count__26298_26306)){
var c_26308 = cljs.core._nth.call(null,chunk__26297_26305,i__26299_26307);
dommy.core.prepend_BANG_.call(null,parent,c_26308);


var G__26309 = seq__26296_26304;
var G__26310 = chunk__26297_26305;
var G__26311 = count__26298_26306;
var G__26312 = (i__26299_26307 + (1));
seq__26296_26304 = G__26309;
chunk__26297_26305 = G__26310;
count__26298_26306 = G__26311;
i__26299_26307 = G__26312;
continue;
} else {
var temp__5457__auto___26313 = cljs.core.seq.call(null,seq__26296_26304);
if(temp__5457__auto___26313){
var seq__26296_26314__$1 = temp__5457__auto___26313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26296_26314__$1)){
var c__4319__auto___26315 = cljs.core.chunk_first.call(null,seq__26296_26314__$1);
var G__26316 = cljs.core.chunk_rest.call(null,seq__26296_26314__$1);
var G__26317 = c__4319__auto___26315;
var G__26318 = cljs.core.count.call(null,c__4319__auto___26315);
var G__26319 = (0);
seq__26296_26304 = G__26316;
chunk__26297_26305 = G__26317;
count__26298_26306 = G__26318;
i__26299_26307 = G__26319;
continue;
} else {
var c_26320 = cljs.core.first.call(null,seq__26296_26314__$1);
dommy.core.prepend_BANG_.call(null,parent,c_26320);


var G__26321 = cljs.core.next.call(null,seq__26296_26314__$1);
var G__26322 = null;
var G__26323 = (0);
var G__26324 = (0);
seq__26296_26304 = G__26321;
chunk__26297_26305 = G__26322;
count__26298_26306 = G__26323;
i__26299_26307 = G__26324;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq26291){
var G__26292 = cljs.core.first.call(null,seq26291);
var seq26291__$1 = cljs.core.next.call(null,seq26291);
var G__26293 = cljs.core.first.call(null,seq26291__$1);
var seq26291__$2 = cljs.core.next.call(null,seq26291__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26292,G__26293,seq26291__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5455__auto___26325 = other.nextSibling;
if(cljs.core.truth_(temp__5455__auto___26325)){
var next_26326 = temp__5455__auto___26325;
dommy.core.insert_before_BANG_.call(null,elem,next_26326);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__26328 = arguments.length;
switch (G__26328) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__26329 = p;
G__26329.removeChild(elem);

return G__26329;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26331){
var vec__26332 = p__26331;
var special_mouse_event = cljs.core.nth.call(null,vec__26332,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__26332,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__26332,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__26332,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3922__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = related_target;
if(cljs.core.truth_(and__3911__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3911__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__26332,special_mouse_event,real_mouse_event))
});})(vec__26332,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3911__auto__ = selected_target;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3911__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__3922__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26338 = arguments.length;
var i__4500__auto___26339 = (0);
while(true){
if((i__4500__auto___26339 < len__4499__auto___26338)){
args__4502__auto__.push((arguments[i__4500__auto___26339]));

var G__26340 = (i__4500__auto___26339 + (1));
i__4500__auto___26339 = G__26340;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq26335){
var G__26336 = cljs.core.first.call(null,seq26335);
var seq26335__$1 = cljs.core.next.call(null,seq26335);
var G__26337 = cljs.core.first.call(null,seq26335__$1);
var seq26335__$2 = cljs.core.next.call(null,seq26335__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26336,G__26337,seq26335__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26380 = arguments.length;
var i__4500__auto___26381 = (0);
while(true){
if((i__4500__auto___26381 < len__4499__auto___26380)){
args__4502__auto__.push((arguments[i__4500__auto___26381]));

var G__26382 = (i__4500__auto___26381 + (1));
i__4500__auto___26381 = G__26382;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__26343_26383 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_26384 = cljs.core.nth.call(null,vec__26343_26383,(0),null);
var selector_26385 = cljs.core.nth.call(null,vec__26343_26383,(1),null);
var seq__26346_26386 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__26353_26387 = null;
var count__26354_26388 = (0);
var i__26355_26389 = (0);
while(true){
if((i__26355_26389 < count__26354_26388)){
var vec__26362_26390 = cljs.core._nth.call(null,chunk__26353_26387,i__26355_26389);
var orig_type_26391 = cljs.core.nth.call(null,vec__26362_26390,(0),null);
var f_26392 = cljs.core.nth.call(null,vec__26362_26390,(1),null);
var seq__26356_26393 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26391,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_26391,cljs.core.identity])));
var chunk__26358_26394 = null;
var count__26359_26395 = (0);
var i__26360_26396 = (0);
while(true){
if((i__26360_26396 < count__26359_26395)){
var vec__26365_26397 = cljs.core._nth.call(null,chunk__26358_26394,i__26360_26396);
var actual_type_26398 = cljs.core.nth.call(null,vec__26365_26397,(0),null);
var factory_26399 = cljs.core.nth.call(null,vec__26365_26397,(1),null);
var canonical_f_26400 = (cljs.core.truth_(selector_26385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26384,selector_26385):cljs.core.identity).call(null,factory_26399.call(null,f_26392));
dommy.core.update_event_listeners_BANG_.call(null,elem_26384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26385,actual_type_26398,f_26392], null),canonical_f_26400);

if(cljs.core.truth_(elem_26384.addEventListener)){
elem_26384.addEventListener(cljs.core.name.call(null,actual_type_26398),canonical_f_26400);
} else {
elem_26384.attachEvent(cljs.core.name.call(null,actual_type_26398),canonical_f_26400);
}


var G__26401 = seq__26356_26393;
var G__26402 = chunk__26358_26394;
var G__26403 = count__26359_26395;
var G__26404 = (i__26360_26396 + (1));
seq__26356_26393 = G__26401;
chunk__26358_26394 = G__26402;
count__26359_26395 = G__26403;
i__26360_26396 = G__26404;
continue;
} else {
var temp__5457__auto___26405 = cljs.core.seq.call(null,seq__26356_26393);
if(temp__5457__auto___26405){
var seq__26356_26406__$1 = temp__5457__auto___26405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26356_26406__$1)){
var c__4319__auto___26407 = cljs.core.chunk_first.call(null,seq__26356_26406__$1);
var G__26408 = cljs.core.chunk_rest.call(null,seq__26356_26406__$1);
var G__26409 = c__4319__auto___26407;
var G__26410 = cljs.core.count.call(null,c__4319__auto___26407);
var G__26411 = (0);
seq__26356_26393 = G__26408;
chunk__26358_26394 = G__26409;
count__26359_26395 = G__26410;
i__26360_26396 = G__26411;
continue;
} else {
var vec__26368_26412 = cljs.core.first.call(null,seq__26356_26406__$1);
var actual_type_26413 = cljs.core.nth.call(null,vec__26368_26412,(0),null);
var factory_26414 = cljs.core.nth.call(null,vec__26368_26412,(1),null);
var canonical_f_26415 = (cljs.core.truth_(selector_26385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26384,selector_26385):cljs.core.identity).call(null,factory_26414.call(null,f_26392));
dommy.core.update_event_listeners_BANG_.call(null,elem_26384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26385,actual_type_26413,f_26392], null),canonical_f_26415);

if(cljs.core.truth_(elem_26384.addEventListener)){
elem_26384.addEventListener(cljs.core.name.call(null,actual_type_26413),canonical_f_26415);
} else {
elem_26384.attachEvent(cljs.core.name.call(null,actual_type_26413),canonical_f_26415);
}


var G__26416 = cljs.core.next.call(null,seq__26356_26406__$1);
var G__26417 = null;
var G__26418 = (0);
var G__26419 = (0);
seq__26356_26393 = G__26416;
chunk__26358_26394 = G__26417;
count__26359_26395 = G__26418;
i__26360_26396 = G__26419;
continue;
}
} else {
}
}
break;
}

var G__26420 = seq__26346_26386;
var G__26421 = chunk__26353_26387;
var G__26422 = count__26354_26388;
var G__26423 = (i__26355_26389 + (1));
seq__26346_26386 = G__26420;
chunk__26353_26387 = G__26421;
count__26354_26388 = G__26422;
i__26355_26389 = G__26423;
continue;
} else {
var temp__5457__auto___26424 = cljs.core.seq.call(null,seq__26346_26386);
if(temp__5457__auto___26424){
var seq__26346_26425__$1 = temp__5457__auto___26424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26346_26425__$1)){
var c__4319__auto___26426 = cljs.core.chunk_first.call(null,seq__26346_26425__$1);
var G__26427 = cljs.core.chunk_rest.call(null,seq__26346_26425__$1);
var G__26428 = c__4319__auto___26426;
var G__26429 = cljs.core.count.call(null,c__4319__auto___26426);
var G__26430 = (0);
seq__26346_26386 = G__26427;
chunk__26353_26387 = G__26428;
count__26354_26388 = G__26429;
i__26355_26389 = G__26430;
continue;
} else {
var vec__26371_26431 = cljs.core.first.call(null,seq__26346_26425__$1);
var orig_type_26432 = cljs.core.nth.call(null,vec__26371_26431,(0),null);
var f_26433 = cljs.core.nth.call(null,vec__26371_26431,(1),null);
var seq__26347_26434 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26432,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_26432,cljs.core.identity])));
var chunk__26349_26435 = null;
var count__26350_26436 = (0);
var i__26351_26437 = (0);
while(true){
if((i__26351_26437 < count__26350_26436)){
var vec__26374_26438 = cljs.core._nth.call(null,chunk__26349_26435,i__26351_26437);
var actual_type_26439 = cljs.core.nth.call(null,vec__26374_26438,(0),null);
var factory_26440 = cljs.core.nth.call(null,vec__26374_26438,(1),null);
var canonical_f_26441 = (cljs.core.truth_(selector_26385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26384,selector_26385):cljs.core.identity).call(null,factory_26440.call(null,f_26433));
dommy.core.update_event_listeners_BANG_.call(null,elem_26384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26385,actual_type_26439,f_26433], null),canonical_f_26441);

if(cljs.core.truth_(elem_26384.addEventListener)){
elem_26384.addEventListener(cljs.core.name.call(null,actual_type_26439),canonical_f_26441);
} else {
elem_26384.attachEvent(cljs.core.name.call(null,actual_type_26439),canonical_f_26441);
}


var G__26442 = seq__26347_26434;
var G__26443 = chunk__26349_26435;
var G__26444 = count__26350_26436;
var G__26445 = (i__26351_26437 + (1));
seq__26347_26434 = G__26442;
chunk__26349_26435 = G__26443;
count__26350_26436 = G__26444;
i__26351_26437 = G__26445;
continue;
} else {
var temp__5457__auto___26446__$1 = cljs.core.seq.call(null,seq__26347_26434);
if(temp__5457__auto___26446__$1){
var seq__26347_26447__$1 = temp__5457__auto___26446__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26347_26447__$1)){
var c__4319__auto___26448 = cljs.core.chunk_first.call(null,seq__26347_26447__$1);
var G__26449 = cljs.core.chunk_rest.call(null,seq__26347_26447__$1);
var G__26450 = c__4319__auto___26448;
var G__26451 = cljs.core.count.call(null,c__4319__auto___26448);
var G__26452 = (0);
seq__26347_26434 = G__26449;
chunk__26349_26435 = G__26450;
count__26350_26436 = G__26451;
i__26351_26437 = G__26452;
continue;
} else {
var vec__26377_26453 = cljs.core.first.call(null,seq__26347_26447__$1);
var actual_type_26454 = cljs.core.nth.call(null,vec__26377_26453,(0),null);
var factory_26455 = cljs.core.nth.call(null,vec__26377_26453,(1),null);
var canonical_f_26456 = (cljs.core.truth_(selector_26385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26384,selector_26385):cljs.core.identity).call(null,factory_26455.call(null,f_26433));
dommy.core.update_event_listeners_BANG_.call(null,elem_26384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26385,actual_type_26454,f_26433], null),canonical_f_26456);

if(cljs.core.truth_(elem_26384.addEventListener)){
elem_26384.addEventListener(cljs.core.name.call(null,actual_type_26454),canonical_f_26456);
} else {
elem_26384.attachEvent(cljs.core.name.call(null,actual_type_26454),canonical_f_26456);
}


var G__26457 = cljs.core.next.call(null,seq__26347_26447__$1);
var G__26458 = null;
var G__26459 = (0);
var G__26460 = (0);
seq__26347_26434 = G__26457;
chunk__26349_26435 = G__26458;
count__26350_26436 = G__26459;
i__26351_26437 = G__26460;
continue;
}
} else {
}
}
break;
}

var G__26461 = cljs.core.next.call(null,seq__26346_26425__$1);
var G__26462 = null;
var G__26463 = (0);
var G__26464 = (0);
seq__26346_26386 = G__26461;
chunk__26353_26387 = G__26462;
count__26354_26388 = G__26463;
i__26355_26389 = G__26464;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq26341){
var G__26342 = cljs.core.first.call(null,seq26341);
var seq26341__$1 = cljs.core.next.call(null,seq26341);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26342,seq26341__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26504 = arguments.length;
var i__4500__auto___26505 = (0);
while(true){
if((i__4500__auto___26505 < len__4499__auto___26504)){
args__4502__auto__.push((arguments[i__4500__auto___26505]));

var G__26506 = (i__4500__auto___26505 + (1));
i__4500__auto___26505 = G__26506;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__26467_26507 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_26508 = cljs.core.nth.call(null,vec__26467_26507,(0),null);
var selector_26509 = cljs.core.nth.call(null,vec__26467_26507,(1),null);
var seq__26470_26510 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__26477_26511 = null;
var count__26478_26512 = (0);
var i__26479_26513 = (0);
while(true){
if((i__26479_26513 < count__26478_26512)){
var vec__26486_26514 = cljs.core._nth.call(null,chunk__26477_26511,i__26479_26513);
var orig_type_26515 = cljs.core.nth.call(null,vec__26486_26514,(0),null);
var f_26516 = cljs.core.nth.call(null,vec__26486_26514,(1),null);
var seq__26480_26517 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26515,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_26515,cljs.core.identity])));
var chunk__26482_26518 = null;
var count__26483_26519 = (0);
var i__26484_26520 = (0);
while(true){
if((i__26484_26520 < count__26483_26519)){
var vec__26489_26521 = cljs.core._nth.call(null,chunk__26482_26518,i__26484_26520);
var actual_type_26522 = cljs.core.nth.call(null,vec__26489_26521,(0),null);
var __26523 = cljs.core.nth.call(null,vec__26489_26521,(1),null);
var keys_26524 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26509,actual_type_26522,f_26516], null);
var canonical_f_26525 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26508),keys_26524);
dommy.core.update_event_listeners_BANG_.call(null,elem_26508,dommy.utils.dissoc_in,keys_26524);

if(cljs.core.truth_(elem_26508.removeEventListener)){
elem_26508.removeEventListener(cljs.core.name.call(null,actual_type_26522),canonical_f_26525);
} else {
elem_26508.detachEvent(cljs.core.name.call(null,actual_type_26522),canonical_f_26525);
}


var G__26526 = seq__26480_26517;
var G__26527 = chunk__26482_26518;
var G__26528 = count__26483_26519;
var G__26529 = (i__26484_26520 + (1));
seq__26480_26517 = G__26526;
chunk__26482_26518 = G__26527;
count__26483_26519 = G__26528;
i__26484_26520 = G__26529;
continue;
} else {
var temp__5457__auto___26530 = cljs.core.seq.call(null,seq__26480_26517);
if(temp__5457__auto___26530){
var seq__26480_26531__$1 = temp__5457__auto___26530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26480_26531__$1)){
var c__4319__auto___26532 = cljs.core.chunk_first.call(null,seq__26480_26531__$1);
var G__26533 = cljs.core.chunk_rest.call(null,seq__26480_26531__$1);
var G__26534 = c__4319__auto___26532;
var G__26535 = cljs.core.count.call(null,c__4319__auto___26532);
var G__26536 = (0);
seq__26480_26517 = G__26533;
chunk__26482_26518 = G__26534;
count__26483_26519 = G__26535;
i__26484_26520 = G__26536;
continue;
} else {
var vec__26492_26537 = cljs.core.first.call(null,seq__26480_26531__$1);
var actual_type_26538 = cljs.core.nth.call(null,vec__26492_26537,(0),null);
var __26539 = cljs.core.nth.call(null,vec__26492_26537,(1),null);
var keys_26540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26509,actual_type_26538,f_26516], null);
var canonical_f_26541 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26508),keys_26540);
dommy.core.update_event_listeners_BANG_.call(null,elem_26508,dommy.utils.dissoc_in,keys_26540);

if(cljs.core.truth_(elem_26508.removeEventListener)){
elem_26508.removeEventListener(cljs.core.name.call(null,actual_type_26538),canonical_f_26541);
} else {
elem_26508.detachEvent(cljs.core.name.call(null,actual_type_26538),canonical_f_26541);
}


var G__26542 = cljs.core.next.call(null,seq__26480_26531__$1);
var G__26543 = null;
var G__26544 = (0);
var G__26545 = (0);
seq__26480_26517 = G__26542;
chunk__26482_26518 = G__26543;
count__26483_26519 = G__26544;
i__26484_26520 = G__26545;
continue;
}
} else {
}
}
break;
}

var G__26546 = seq__26470_26510;
var G__26547 = chunk__26477_26511;
var G__26548 = count__26478_26512;
var G__26549 = (i__26479_26513 + (1));
seq__26470_26510 = G__26546;
chunk__26477_26511 = G__26547;
count__26478_26512 = G__26548;
i__26479_26513 = G__26549;
continue;
} else {
var temp__5457__auto___26550 = cljs.core.seq.call(null,seq__26470_26510);
if(temp__5457__auto___26550){
var seq__26470_26551__$1 = temp__5457__auto___26550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26470_26551__$1)){
var c__4319__auto___26552 = cljs.core.chunk_first.call(null,seq__26470_26551__$1);
var G__26553 = cljs.core.chunk_rest.call(null,seq__26470_26551__$1);
var G__26554 = c__4319__auto___26552;
var G__26555 = cljs.core.count.call(null,c__4319__auto___26552);
var G__26556 = (0);
seq__26470_26510 = G__26553;
chunk__26477_26511 = G__26554;
count__26478_26512 = G__26555;
i__26479_26513 = G__26556;
continue;
} else {
var vec__26495_26557 = cljs.core.first.call(null,seq__26470_26551__$1);
var orig_type_26558 = cljs.core.nth.call(null,vec__26495_26557,(0),null);
var f_26559 = cljs.core.nth.call(null,vec__26495_26557,(1),null);
var seq__26471_26560 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26558,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_26558,cljs.core.identity])));
var chunk__26473_26561 = null;
var count__26474_26562 = (0);
var i__26475_26563 = (0);
while(true){
if((i__26475_26563 < count__26474_26562)){
var vec__26498_26564 = cljs.core._nth.call(null,chunk__26473_26561,i__26475_26563);
var actual_type_26565 = cljs.core.nth.call(null,vec__26498_26564,(0),null);
var __26566 = cljs.core.nth.call(null,vec__26498_26564,(1),null);
var keys_26567 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26509,actual_type_26565,f_26559], null);
var canonical_f_26568 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26508),keys_26567);
dommy.core.update_event_listeners_BANG_.call(null,elem_26508,dommy.utils.dissoc_in,keys_26567);

if(cljs.core.truth_(elem_26508.removeEventListener)){
elem_26508.removeEventListener(cljs.core.name.call(null,actual_type_26565),canonical_f_26568);
} else {
elem_26508.detachEvent(cljs.core.name.call(null,actual_type_26565),canonical_f_26568);
}


var G__26569 = seq__26471_26560;
var G__26570 = chunk__26473_26561;
var G__26571 = count__26474_26562;
var G__26572 = (i__26475_26563 + (1));
seq__26471_26560 = G__26569;
chunk__26473_26561 = G__26570;
count__26474_26562 = G__26571;
i__26475_26563 = G__26572;
continue;
} else {
var temp__5457__auto___26573__$1 = cljs.core.seq.call(null,seq__26471_26560);
if(temp__5457__auto___26573__$1){
var seq__26471_26574__$1 = temp__5457__auto___26573__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26471_26574__$1)){
var c__4319__auto___26575 = cljs.core.chunk_first.call(null,seq__26471_26574__$1);
var G__26576 = cljs.core.chunk_rest.call(null,seq__26471_26574__$1);
var G__26577 = c__4319__auto___26575;
var G__26578 = cljs.core.count.call(null,c__4319__auto___26575);
var G__26579 = (0);
seq__26471_26560 = G__26576;
chunk__26473_26561 = G__26577;
count__26474_26562 = G__26578;
i__26475_26563 = G__26579;
continue;
} else {
var vec__26501_26580 = cljs.core.first.call(null,seq__26471_26574__$1);
var actual_type_26581 = cljs.core.nth.call(null,vec__26501_26580,(0),null);
var __26582 = cljs.core.nth.call(null,vec__26501_26580,(1),null);
var keys_26583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26509,actual_type_26581,f_26559], null);
var canonical_f_26584 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26508),keys_26583);
dommy.core.update_event_listeners_BANG_.call(null,elem_26508,dommy.utils.dissoc_in,keys_26583);

if(cljs.core.truth_(elem_26508.removeEventListener)){
elem_26508.removeEventListener(cljs.core.name.call(null,actual_type_26581),canonical_f_26584);
} else {
elem_26508.detachEvent(cljs.core.name.call(null,actual_type_26581),canonical_f_26584);
}


var G__26585 = cljs.core.next.call(null,seq__26471_26574__$1);
var G__26586 = null;
var G__26587 = (0);
var G__26588 = (0);
seq__26471_26560 = G__26585;
chunk__26473_26561 = G__26586;
count__26474_26562 = G__26587;
i__26475_26563 = G__26588;
continue;
}
} else {
}
}
break;
}

var G__26589 = cljs.core.next.call(null,seq__26470_26551__$1);
var G__26590 = null;
var G__26591 = (0);
var G__26592 = (0);
seq__26470_26510 = G__26589;
chunk__26477_26511 = G__26590;
count__26478_26512 = G__26591;
i__26479_26513 = G__26592;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq26465){
var G__26466 = cljs.core.first.call(null,seq26465);
var seq26465__$1 = cljs.core.next.call(null,seq26465);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26466,seq26465__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26608 = arguments.length;
var i__4500__auto___26609 = (0);
while(true){
if((i__4500__auto___26609 < len__4499__auto___26608)){
args__4502__auto__.push((arguments[i__4500__auto___26609]));

var G__26610 = (i__4500__auto___26609 + (1));
i__4500__auto___26609 = G__26610;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__26595_26611 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_26612 = cljs.core.nth.call(null,vec__26595_26611,(0),null);
var selector_26613 = cljs.core.nth.call(null,vec__26595_26611,(1),null);
var seq__26598_26614 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__26599_26615 = null;
var count__26600_26616 = (0);
var i__26601_26617 = (0);
while(true){
if((i__26601_26617 < count__26600_26616)){
var vec__26602_26618 = cljs.core._nth.call(null,chunk__26599_26615,i__26601_26617);
var type_26619 = cljs.core.nth.call(null,vec__26602_26618,(0),null);
var f_26620 = cljs.core.nth.call(null,vec__26602_26618,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_26619,((function (seq__26598_26614,chunk__26599_26615,count__26600_26616,i__26601_26617,vec__26602_26618,type_26619,f_26620,vec__26595_26611,elem_26612,selector_26613){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_26619,dommy$core$this_fn);

return f_26620.call(null,e);
});})(seq__26598_26614,chunk__26599_26615,count__26600_26616,i__26601_26617,vec__26602_26618,type_26619,f_26620,vec__26595_26611,elem_26612,selector_26613))
);


var G__26621 = seq__26598_26614;
var G__26622 = chunk__26599_26615;
var G__26623 = count__26600_26616;
var G__26624 = (i__26601_26617 + (1));
seq__26598_26614 = G__26621;
chunk__26599_26615 = G__26622;
count__26600_26616 = G__26623;
i__26601_26617 = G__26624;
continue;
} else {
var temp__5457__auto___26625 = cljs.core.seq.call(null,seq__26598_26614);
if(temp__5457__auto___26625){
var seq__26598_26626__$1 = temp__5457__auto___26625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26598_26626__$1)){
var c__4319__auto___26627 = cljs.core.chunk_first.call(null,seq__26598_26626__$1);
var G__26628 = cljs.core.chunk_rest.call(null,seq__26598_26626__$1);
var G__26629 = c__4319__auto___26627;
var G__26630 = cljs.core.count.call(null,c__4319__auto___26627);
var G__26631 = (0);
seq__26598_26614 = G__26628;
chunk__26599_26615 = G__26629;
count__26600_26616 = G__26630;
i__26601_26617 = G__26631;
continue;
} else {
var vec__26605_26632 = cljs.core.first.call(null,seq__26598_26626__$1);
var type_26633 = cljs.core.nth.call(null,vec__26605_26632,(0),null);
var f_26634 = cljs.core.nth.call(null,vec__26605_26632,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_26633,((function (seq__26598_26614,chunk__26599_26615,count__26600_26616,i__26601_26617,vec__26605_26632,type_26633,f_26634,seq__26598_26626__$1,temp__5457__auto___26625,vec__26595_26611,elem_26612,selector_26613){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_26633,dommy$core$this_fn);

return f_26634.call(null,e);
});})(seq__26598_26614,chunk__26599_26615,count__26600_26616,i__26601_26617,vec__26605_26632,type_26633,f_26634,seq__26598_26626__$1,temp__5457__auto___26625,vec__26595_26611,elem_26612,selector_26613))
);


var G__26635 = cljs.core.next.call(null,seq__26598_26626__$1);
var G__26636 = null;
var G__26637 = (0);
var G__26638 = (0);
seq__26598_26614 = G__26635;
chunk__26599_26615 = G__26636;
count__26600_26616 = G__26637;
i__26601_26617 = G__26638;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq26593){
var G__26594 = cljs.core.first.call(null,seq26593);
var seq26593__$1 = cljs.core.next.call(null,seq26593);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26594,seq26593__$1);
});


//# sourceMappingURL=core.js.map?rel=1672617806463
