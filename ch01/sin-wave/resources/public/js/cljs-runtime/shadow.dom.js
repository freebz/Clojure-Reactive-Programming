goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15210 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15210(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15211 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15211(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14507 = coll;
var G__14508 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14507,G__14508) : shadow.dom.lazy_native_coll_seq.call(null,G__14507,G__14508));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14517 = arguments.length;
switch (G__14517) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14523 = arguments.length;
switch (G__14523) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14532 = arguments.length;
switch (G__14532) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14543 = arguments.length;
switch (G__14543) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14552 = arguments.length;
switch (G__14552) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14566 = arguments.length;
switch (G__14566) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14577){if((e14577 instanceof Object)){
var e = e14577;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14577;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14587 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14588 = null;
var count__14589 = (0);
var i__14590 = (0);
while(true){
if((i__14590 < count__14589)){
var el = chunk__14588.cljs$core$IIndexed$_nth$arity$2(null,i__14590);
var handler_15218__$1 = ((function (seq__14587,chunk__14588,count__14589,i__14590,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14587,chunk__14588,count__14589,i__14590,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15218__$1);


var G__15219 = seq__14587;
var G__15220 = chunk__14588;
var G__15221 = count__14589;
var G__15222 = (i__14590 + (1));
seq__14587 = G__15219;
chunk__14588 = G__15220;
count__14589 = G__15221;
i__14590 = G__15222;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14587);
if(temp__5804__auto__){
var seq__14587__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14587__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14587__$1);
var G__15223 = cljs.core.chunk_rest(seq__14587__$1);
var G__15224 = c__5568__auto__;
var G__15225 = cljs.core.count(c__5568__auto__);
var G__15226 = (0);
seq__14587 = G__15223;
chunk__14588 = G__15224;
count__14589 = G__15225;
i__14590 = G__15226;
continue;
} else {
var el = cljs.core.first(seq__14587__$1);
var handler_15227__$1 = ((function (seq__14587,chunk__14588,count__14589,i__14590,el,seq__14587__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14587,chunk__14588,count__14589,i__14590,el,seq__14587__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15227__$1);


var G__15228 = cljs.core.next(seq__14587__$1);
var G__15229 = null;
var G__15230 = (0);
var G__15231 = (0);
seq__14587 = G__15228;
chunk__14588 = G__15229;
count__14589 = G__15230;
i__14590 = G__15231;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14608 = arguments.length;
switch (G__14608) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14620 = cljs.core.seq(events);
var chunk__14621 = null;
var count__14622 = (0);
var i__14623 = (0);
while(true){
if((i__14623 < count__14622)){
var vec__14633 = chunk__14621.cljs$core$IIndexed$_nth$arity$2(null,i__14623);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14633,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15233 = seq__14620;
var G__15234 = chunk__14621;
var G__15235 = count__14622;
var G__15236 = (i__14623 + (1));
seq__14620 = G__15233;
chunk__14621 = G__15234;
count__14622 = G__15235;
i__14623 = G__15236;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14620);
if(temp__5804__auto__){
var seq__14620__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14620__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14620__$1);
var G__15237 = cljs.core.chunk_rest(seq__14620__$1);
var G__15238 = c__5568__auto__;
var G__15239 = cljs.core.count(c__5568__auto__);
var G__15240 = (0);
seq__14620 = G__15237;
chunk__14621 = G__15238;
count__14622 = G__15239;
i__14623 = G__15240;
continue;
} else {
var vec__14639 = cljs.core.first(seq__14620__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15241 = cljs.core.next(seq__14620__$1);
var G__15242 = null;
var G__15243 = (0);
var G__15244 = (0);
seq__14620 = G__15241;
chunk__14621 = G__15242;
count__14622 = G__15243;
i__14623 = G__15244;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14648 = cljs.core.seq(styles);
var chunk__14649 = null;
var count__14650 = (0);
var i__14651 = (0);
while(true){
if((i__14651 < count__14650)){
var vec__14666 = chunk__14649.cljs$core$IIndexed$_nth$arity$2(null,i__14651);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15245 = seq__14648;
var G__15246 = chunk__14649;
var G__15247 = count__14650;
var G__15248 = (i__14651 + (1));
seq__14648 = G__15245;
chunk__14649 = G__15246;
count__14650 = G__15247;
i__14651 = G__15248;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14648);
if(temp__5804__auto__){
var seq__14648__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14648__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14648__$1);
var G__15249 = cljs.core.chunk_rest(seq__14648__$1);
var G__15250 = c__5568__auto__;
var G__15251 = cljs.core.count(c__5568__auto__);
var G__15252 = (0);
seq__14648 = G__15249;
chunk__14649 = G__15250;
count__14650 = G__15251;
i__14651 = G__15252;
continue;
} else {
var vec__14673 = cljs.core.first(seq__14648__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14673,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15253 = cljs.core.next(seq__14648__$1);
var G__15254 = null;
var G__15255 = (0);
var G__15256 = (0);
seq__14648 = G__15253;
chunk__14649 = G__15254;
count__14650 = G__15255;
i__14651 = G__15256;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14681_15257 = key;
var G__14681_15258__$1 = (((G__14681_15257 instanceof cljs.core.Keyword))?G__14681_15257.fqn:null);
switch (G__14681_15258__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15260 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_15260,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_15260,"aria-");
}
})())){
el.setAttribute(ks_15260,value);
} else {
(el[ks_15260] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14705){
var map__14707 = p__14705;
var map__14707__$1 = cljs.core.__destructure_map(map__14707);
var props = map__14707__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14707__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14708 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14708,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14708,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14708,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14714 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14714,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14714;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14717 = arguments.length;
switch (G__14717) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14722){
var vec__14723 = p__14722;
var seq__14724 = cljs.core.seq(vec__14723);
var first__14725 = cljs.core.first(seq__14724);
var seq__14724__$1 = cljs.core.next(seq__14724);
var nn = first__14725;
var first__14725__$1 = cljs.core.first(seq__14724__$1);
var seq__14724__$2 = cljs.core.next(seq__14724__$1);
var np = first__14725__$1;
var nc = seq__14724__$2;
var node = vec__14723;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14726 = nn;
var G__14727 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14726,G__14727) : create_fn.call(null,G__14726,G__14727));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14728 = nn;
var G__14729 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14728,G__14729) : create_fn.call(null,G__14728,G__14729));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14731 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14731,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14731,(1),null);
var seq__14735_15262 = cljs.core.seq(node_children);
var chunk__14736_15263 = null;
var count__14737_15264 = (0);
var i__14738_15265 = (0);
while(true){
if((i__14738_15265 < count__14737_15264)){
var child_struct_15266 = chunk__14736_15263.cljs$core$IIndexed$_nth$arity$2(null,i__14738_15265);
var children_15267 = shadow.dom.dom_node(child_struct_15266);
if(cljs.core.seq_QMARK_(children_15267)){
var seq__14783_15268 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15267));
var chunk__14785_15269 = null;
var count__14786_15270 = (0);
var i__14787_15271 = (0);
while(true){
if((i__14787_15271 < count__14786_15270)){
var child_15272 = chunk__14785_15269.cljs$core$IIndexed$_nth$arity$2(null,i__14787_15271);
if(cljs.core.truth_(child_15272)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15272);


var G__15273 = seq__14783_15268;
var G__15274 = chunk__14785_15269;
var G__15275 = count__14786_15270;
var G__15276 = (i__14787_15271 + (1));
seq__14783_15268 = G__15273;
chunk__14785_15269 = G__15274;
count__14786_15270 = G__15275;
i__14787_15271 = G__15276;
continue;
} else {
var G__15277 = seq__14783_15268;
var G__15278 = chunk__14785_15269;
var G__15279 = count__14786_15270;
var G__15280 = (i__14787_15271 + (1));
seq__14783_15268 = G__15277;
chunk__14785_15269 = G__15278;
count__14786_15270 = G__15279;
i__14787_15271 = G__15280;
continue;
}
} else {
var temp__5804__auto___15281 = cljs.core.seq(seq__14783_15268);
if(temp__5804__auto___15281){
var seq__14783_15282__$1 = temp__5804__auto___15281;
if(cljs.core.chunked_seq_QMARK_(seq__14783_15282__$1)){
var c__5568__auto___15283 = cljs.core.chunk_first(seq__14783_15282__$1);
var G__15284 = cljs.core.chunk_rest(seq__14783_15282__$1);
var G__15285 = c__5568__auto___15283;
var G__15286 = cljs.core.count(c__5568__auto___15283);
var G__15287 = (0);
seq__14783_15268 = G__15284;
chunk__14785_15269 = G__15285;
count__14786_15270 = G__15286;
i__14787_15271 = G__15287;
continue;
} else {
var child_15288 = cljs.core.first(seq__14783_15282__$1);
if(cljs.core.truth_(child_15288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15288);


var G__15289 = cljs.core.next(seq__14783_15282__$1);
var G__15290 = null;
var G__15291 = (0);
var G__15292 = (0);
seq__14783_15268 = G__15289;
chunk__14785_15269 = G__15290;
count__14786_15270 = G__15291;
i__14787_15271 = G__15292;
continue;
} else {
var G__15293 = cljs.core.next(seq__14783_15282__$1);
var G__15294 = null;
var G__15295 = (0);
var G__15296 = (0);
seq__14783_15268 = G__15293;
chunk__14785_15269 = G__15294;
count__14786_15270 = G__15295;
i__14787_15271 = G__15296;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15267);
}


var G__15297 = seq__14735_15262;
var G__15298 = chunk__14736_15263;
var G__15299 = count__14737_15264;
var G__15300 = (i__14738_15265 + (1));
seq__14735_15262 = G__15297;
chunk__14736_15263 = G__15298;
count__14737_15264 = G__15299;
i__14738_15265 = G__15300;
continue;
} else {
var temp__5804__auto___15301 = cljs.core.seq(seq__14735_15262);
if(temp__5804__auto___15301){
var seq__14735_15302__$1 = temp__5804__auto___15301;
if(cljs.core.chunked_seq_QMARK_(seq__14735_15302__$1)){
var c__5568__auto___15303 = cljs.core.chunk_first(seq__14735_15302__$1);
var G__15304 = cljs.core.chunk_rest(seq__14735_15302__$1);
var G__15305 = c__5568__auto___15303;
var G__15306 = cljs.core.count(c__5568__auto___15303);
var G__15307 = (0);
seq__14735_15262 = G__15304;
chunk__14736_15263 = G__15305;
count__14737_15264 = G__15306;
i__14738_15265 = G__15307;
continue;
} else {
var child_struct_15308 = cljs.core.first(seq__14735_15302__$1);
var children_15309 = shadow.dom.dom_node(child_struct_15308);
if(cljs.core.seq_QMARK_(children_15309)){
var seq__14808_15310 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15309));
var chunk__14810_15311 = null;
var count__14811_15312 = (0);
var i__14812_15313 = (0);
while(true){
if((i__14812_15313 < count__14811_15312)){
var child_15314 = chunk__14810_15311.cljs$core$IIndexed$_nth$arity$2(null,i__14812_15313);
if(cljs.core.truth_(child_15314)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15314);


var G__15315 = seq__14808_15310;
var G__15316 = chunk__14810_15311;
var G__15317 = count__14811_15312;
var G__15318 = (i__14812_15313 + (1));
seq__14808_15310 = G__15315;
chunk__14810_15311 = G__15316;
count__14811_15312 = G__15317;
i__14812_15313 = G__15318;
continue;
} else {
var G__15319 = seq__14808_15310;
var G__15320 = chunk__14810_15311;
var G__15321 = count__14811_15312;
var G__15322 = (i__14812_15313 + (1));
seq__14808_15310 = G__15319;
chunk__14810_15311 = G__15320;
count__14811_15312 = G__15321;
i__14812_15313 = G__15322;
continue;
}
} else {
var temp__5804__auto___15323__$1 = cljs.core.seq(seq__14808_15310);
if(temp__5804__auto___15323__$1){
var seq__14808_15324__$1 = temp__5804__auto___15323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14808_15324__$1)){
var c__5568__auto___15325 = cljs.core.chunk_first(seq__14808_15324__$1);
var G__15326 = cljs.core.chunk_rest(seq__14808_15324__$1);
var G__15327 = c__5568__auto___15325;
var G__15328 = cljs.core.count(c__5568__auto___15325);
var G__15329 = (0);
seq__14808_15310 = G__15326;
chunk__14810_15311 = G__15327;
count__14811_15312 = G__15328;
i__14812_15313 = G__15329;
continue;
} else {
var child_15330 = cljs.core.first(seq__14808_15324__$1);
if(cljs.core.truth_(child_15330)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15330);


var G__15331 = cljs.core.next(seq__14808_15324__$1);
var G__15332 = null;
var G__15333 = (0);
var G__15334 = (0);
seq__14808_15310 = G__15331;
chunk__14810_15311 = G__15332;
count__14811_15312 = G__15333;
i__14812_15313 = G__15334;
continue;
} else {
var G__15335 = cljs.core.next(seq__14808_15324__$1);
var G__15336 = null;
var G__15337 = (0);
var G__15338 = (0);
seq__14808_15310 = G__15335;
chunk__14810_15311 = G__15336;
count__14811_15312 = G__15337;
i__14812_15313 = G__15338;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15309);
}


var G__15339 = cljs.core.next(seq__14735_15302__$1);
var G__15340 = null;
var G__15341 = (0);
var G__15342 = (0);
seq__14735_15262 = G__15339;
chunk__14736_15263 = G__15340;
count__14737_15264 = G__15341;
i__14738_15265 = G__15342;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14848 = cljs.core.seq(node);
var chunk__14849 = null;
var count__14850 = (0);
var i__14851 = (0);
while(true){
if((i__14851 < count__14850)){
var n = chunk__14849.cljs$core$IIndexed$_nth$arity$2(null,i__14851);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15343 = seq__14848;
var G__15344 = chunk__14849;
var G__15345 = count__14850;
var G__15346 = (i__14851 + (1));
seq__14848 = G__15343;
chunk__14849 = G__15344;
count__14850 = G__15345;
i__14851 = G__15346;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14848);
if(temp__5804__auto__){
var seq__14848__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14848__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14848__$1);
var G__15347 = cljs.core.chunk_rest(seq__14848__$1);
var G__15348 = c__5568__auto__;
var G__15349 = cljs.core.count(c__5568__auto__);
var G__15350 = (0);
seq__14848 = G__15347;
chunk__14849 = G__15348;
count__14850 = G__15349;
i__14851 = G__15350;
continue;
} else {
var n = cljs.core.first(seq__14848__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15351 = cljs.core.next(seq__14848__$1);
var G__15352 = null;
var G__15353 = (0);
var G__15354 = (0);
seq__14848 = G__15351;
chunk__14849 = G__15352;
count__14850 = G__15353;
i__14851 = G__15354;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14873 = arguments.length;
switch (G__14873) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14878 = arguments.length;
switch (G__14878) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14882 = arguments.length;
switch (G__14882) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15358 = arguments.length;
var i__5770__auto___15359 = (0);
while(true){
if((i__5770__auto___15359 < len__5769__auto___15358)){
args__5775__auto__.push((arguments[i__5770__auto___15359]));

var G__15360 = (i__5770__auto___15359 + (1));
i__5770__auto___15359 = G__15360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14900_15361 = cljs.core.seq(nodes);
var chunk__14901_15362 = null;
var count__14902_15363 = (0);
var i__14903_15364 = (0);
while(true){
if((i__14903_15364 < count__14902_15363)){
var node_15365 = chunk__14901_15362.cljs$core$IIndexed$_nth$arity$2(null,i__14903_15364);
fragment.appendChild(shadow.dom._to_dom(node_15365));


var G__15366 = seq__14900_15361;
var G__15367 = chunk__14901_15362;
var G__15368 = count__14902_15363;
var G__15369 = (i__14903_15364 + (1));
seq__14900_15361 = G__15366;
chunk__14901_15362 = G__15367;
count__14902_15363 = G__15368;
i__14903_15364 = G__15369;
continue;
} else {
var temp__5804__auto___15370 = cljs.core.seq(seq__14900_15361);
if(temp__5804__auto___15370){
var seq__14900_15371__$1 = temp__5804__auto___15370;
if(cljs.core.chunked_seq_QMARK_(seq__14900_15371__$1)){
var c__5568__auto___15372 = cljs.core.chunk_first(seq__14900_15371__$1);
var G__15373 = cljs.core.chunk_rest(seq__14900_15371__$1);
var G__15374 = c__5568__auto___15372;
var G__15375 = cljs.core.count(c__5568__auto___15372);
var G__15376 = (0);
seq__14900_15361 = G__15373;
chunk__14901_15362 = G__15374;
count__14902_15363 = G__15375;
i__14903_15364 = G__15376;
continue;
} else {
var node_15377 = cljs.core.first(seq__14900_15371__$1);
fragment.appendChild(shadow.dom._to_dom(node_15377));


var G__15378 = cljs.core.next(seq__14900_15371__$1);
var G__15379 = null;
var G__15380 = (0);
var G__15381 = (0);
seq__14900_15361 = G__15378;
chunk__14901_15362 = G__15379;
count__14902_15363 = G__15380;
i__14903_15364 = G__15381;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14895){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14895));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14912_15382 = cljs.core.seq(scripts);
var chunk__14913_15383 = null;
var count__14914_15384 = (0);
var i__14915_15385 = (0);
while(true){
if((i__14915_15385 < count__14914_15384)){
var vec__14923_15386 = chunk__14913_15383.cljs$core$IIndexed$_nth$arity$2(null,i__14915_15385);
var script_tag_15387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14923_15386,(0),null);
var script_body_15388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14923_15386,(1),null);
eval(script_body_15388);


var G__15389 = seq__14912_15382;
var G__15390 = chunk__14913_15383;
var G__15391 = count__14914_15384;
var G__15392 = (i__14915_15385 + (1));
seq__14912_15382 = G__15389;
chunk__14913_15383 = G__15390;
count__14914_15384 = G__15391;
i__14915_15385 = G__15392;
continue;
} else {
var temp__5804__auto___15393 = cljs.core.seq(seq__14912_15382);
if(temp__5804__auto___15393){
var seq__14912_15394__$1 = temp__5804__auto___15393;
if(cljs.core.chunked_seq_QMARK_(seq__14912_15394__$1)){
var c__5568__auto___15395 = cljs.core.chunk_first(seq__14912_15394__$1);
var G__15396 = cljs.core.chunk_rest(seq__14912_15394__$1);
var G__15397 = c__5568__auto___15395;
var G__15398 = cljs.core.count(c__5568__auto___15395);
var G__15399 = (0);
seq__14912_15382 = G__15396;
chunk__14913_15383 = G__15397;
count__14914_15384 = G__15398;
i__14915_15385 = G__15399;
continue;
} else {
var vec__14928_15400 = cljs.core.first(seq__14912_15394__$1);
var script_tag_15401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14928_15400,(0),null);
var script_body_15402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14928_15400,(1),null);
eval(script_body_15402);


var G__15403 = cljs.core.next(seq__14912_15394__$1);
var G__15404 = null;
var G__15405 = (0);
var G__15406 = (0);
seq__14912_15382 = G__15403;
chunk__14913_15383 = G__15404;
count__14914_15384 = G__15405;
i__14915_15385 = G__15406;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14932){
var vec__14933 = p__14932;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14933,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14933,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14940 = arguments.length;
switch (G__14940) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14949 = cljs.core.seq(style_keys);
var chunk__14950 = null;
var count__14951 = (0);
var i__14952 = (0);
while(true){
if((i__14952 < count__14951)){
var it = chunk__14950.cljs$core$IIndexed$_nth$arity$2(null,i__14952);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15408 = seq__14949;
var G__15409 = chunk__14950;
var G__15410 = count__14951;
var G__15411 = (i__14952 + (1));
seq__14949 = G__15408;
chunk__14950 = G__15409;
count__14951 = G__15410;
i__14952 = G__15411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14949);
if(temp__5804__auto__){
var seq__14949__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14949__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14949__$1);
var G__15412 = cljs.core.chunk_rest(seq__14949__$1);
var G__15413 = c__5568__auto__;
var G__15414 = cljs.core.count(c__5568__auto__);
var G__15415 = (0);
seq__14949 = G__15412;
chunk__14950 = G__15413;
count__14951 = G__15414;
i__14952 = G__15415;
continue;
} else {
var it = cljs.core.first(seq__14949__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15416 = cljs.core.next(seq__14949__$1);
var G__15417 = null;
var G__15418 = (0);
var G__15419 = (0);
seq__14949 = G__15416;
chunk__14950 = G__15417;
count__14951 = G__15418;
i__14952 = G__15419;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k14959,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__14964 = k14959;
var G__14964__$1 = (((G__14964 instanceof cljs.core.Keyword))?G__14964.fqn:null);
switch (G__14964__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14959,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__14966){
var vec__14967 = p__14966;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14967,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14967,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14958){
var self__ = this;
var G__14958__$1 = this;
return (new cljs.core.RecordIter((0),G__14958__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14960,other14961){
var self__ = this;
var this14960__$1 = this;
return (((!((other14961 == null)))) && ((((this14960__$1.constructor === other14961.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14960__$1.x,other14961.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14960__$1.y,other14961.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14960__$1.__extmap,other14961.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k14959){
var self__ = this;
var this__5350__auto____$1 = this;
var G__14981 = k14959;
var G__14981__$1 = (((G__14981 instanceof cljs.core.Keyword))?G__14981.fqn:null);
switch (G__14981__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14959);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__14958){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__14982 = cljs.core.keyword_identical_QMARK_;
var expr__14983 = k__5352__auto__;
if(cljs.core.truth_((pred__14982.cljs$core$IFn$_invoke$arity$2 ? pred__14982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14983) : pred__14982.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14983)))){
return (new shadow.dom.Coordinate(G__14958,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14982.cljs$core$IFn$_invoke$arity$2 ? pred__14982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14983) : pred__14982.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14983)))){
return (new shadow.dom.Coordinate(self__.x,G__14958,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__14958),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__14958){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14958,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14963){
var extmap__5385__auto__ = (function (){var G__14991 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14963,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14963)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14991);
} else {
return G__14991;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14963),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14963),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k14996,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15004 = k14996;
var G__15004__$1 = (((G__15004 instanceof cljs.core.Keyword))?G__15004.fqn:null);
switch (G__15004__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14996,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15009){
var vec__15010 = p__15009;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15010,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15010,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14995){
var self__ = this;
var G__14995__$1 = this;
return (new cljs.core.RecordIter((0),G__14995__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14997,other14998){
var self__ = this;
var this14997__$1 = this;
return (((!((other14998 == null)))) && ((((this14997__$1.constructor === other14998.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14997__$1.w,other14998.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14997__$1.h,other14998.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14997__$1.__extmap,other14998.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k14996){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15024 = k14996;
var G__15024__$1 = (((G__15024 instanceof cljs.core.Keyword))?G__15024.fqn:null);
switch (G__15024__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14996);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__14995){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15025 = cljs.core.keyword_identical_QMARK_;
var expr__15026 = k__5352__auto__;
if(cljs.core.truth_((pred__15025.cljs$core$IFn$_invoke$arity$2 ? pred__15025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15026) : pred__15025.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15026)))){
return (new shadow.dom.Size(G__14995,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15025.cljs$core$IFn$_invoke$arity$2 ? pred__15025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15026) : pred__15025.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15026)))){
return (new shadow.dom.Size(self__.w,G__14995,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__14995),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__14995){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14995,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15000){
var extmap__5385__auto__ = (function (){var G__15028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15000,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15000)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15028);
} else {
return G__15028;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15000),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15000),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__15424 = (i + (1));
var G__15425 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15424;
ret = G__15425;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15039){
var vec__15040 = p__15039;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15046 = arguments.length;
switch (G__15046) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15427 = ps;
var G__15428 = (i + (1));
el__$1 = G__15427;
i = G__15428;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15071 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15071,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15071,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15071,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15077_15429 = cljs.core.seq(props);
var chunk__15078_15430 = null;
var count__15079_15431 = (0);
var i__15080_15432 = (0);
while(true){
if((i__15080_15432 < count__15079_15431)){
var vec__15093_15433 = chunk__15078_15430.cljs$core$IIndexed$_nth$arity$2(null,i__15080_15432);
var k_15434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15093_15433,(0),null);
var v_15435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15093_15433,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15434);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15434),v_15435);


var G__15436 = seq__15077_15429;
var G__15437 = chunk__15078_15430;
var G__15438 = count__15079_15431;
var G__15439 = (i__15080_15432 + (1));
seq__15077_15429 = G__15436;
chunk__15078_15430 = G__15437;
count__15079_15431 = G__15438;
i__15080_15432 = G__15439;
continue;
} else {
var temp__5804__auto___15440 = cljs.core.seq(seq__15077_15429);
if(temp__5804__auto___15440){
var seq__15077_15441__$1 = temp__5804__auto___15440;
if(cljs.core.chunked_seq_QMARK_(seq__15077_15441__$1)){
var c__5568__auto___15442 = cljs.core.chunk_first(seq__15077_15441__$1);
var G__15443 = cljs.core.chunk_rest(seq__15077_15441__$1);
var G__15444 = c__5568__auto___15442;
var G__15445 = cljs.core.count(c__5568__auto___15442);
var G__15446 = (0);
seq__15077_15429 = G__15443;
chunk__15078_15430 = G__15444;
count__15079_15431 = G__15445;
i__15080_15432 = G__15446;
continue;
} else {
var vec__15103_15447 = cljs.core.first(seq__15077_15441__$1);
var k_15448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15103_15447,(0),null);
var v_15449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15103_15447,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15448);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15448),v_15449);


var G__15450 = cljs.core.next(seq__15077_15441__$1);
var G__15451 = null;
var G__15452 = (0);
var G__15453 = (0);
seq__15077_15429 = G__15450;
chunk__15078_15430 = G__15451;
count__15079_15431 = G__15452;
i__15080_15432 = G__15453;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15112 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(1),null);
var seq__15115_15454 = cljs.core.seq(node_children);
var chunk__15117_15455 = null;
var count__15118_15456 = (0);
var i__15119_15457 = (0);
while(true){
if((i__15119_15457 < count__15118_15456)){
var child_struct_15458 = chunk__15117_15455.cljs$core$IIndexed$_nth$arity$2(null,i__15119_15457);
if((!((child_struct_15458 == null)))){
if(typeof child_struct_15458 === 'string'){
var text_15459 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15459),child_struct_15458].join(''));
} else {
var children_15460 = shadow.dom.svg_node(child_struct_15458);
if(cljs.core.seq_QMARK_(children_15460)){
var seq__15150_15461 = cljs.core.seq(children_15460);
var chunk__15152_15462 = null;
var count__15153_15463 = (0);
var i__15154_15464 = (0);
while(true){
if((i__15154_15464 < count__15153_15463)){
var child_15465 = chunk__15152_15462.cljs$core$IIndexed$_nth$arity$2(null,i__15154_15464);
if(cljs.core.truth_(child_15465)){
node.appendChild(child_15465);


var G__15466 = seq__15150_15461;
var G__15467 = chunk__15152_15462;
var G__15468 = count__15153_15463;
var G__15469 = (i__15154_15464 + (1));
seq__15150_15461 = G__15466;
chunk__15152_15462 = G__15467;
count__15153_15463 = G__15468;
i__15154_15464 = G__15469;
continue;
} else {
var G__15470 = seq__15150_15461;
var G__15471 = chunk__15152_15462;
var G__15472 = count__15153_15463;
var G__15473 = (i__15154_15464 + (1));
seq__15150_15461 = G__15470;
chunk__15152_15462 = G__15471;
count__15153_15463 = G__15472;
i__15154_15464 = G__15473;
continue;
}
} else {
var temp__5804__auto___15474 = cljs.core.seq(seq__15150_15461);
if(temp__5804__auto___15474){
var seq__15150_15475__$1 = temp__5804__auto___15474;
if(cljs.core.chunked_seq_QMARK_(seq__15150_15475__$1)){
var c__5568__auto___15476 = cljs.core.chunk_first(seq__15150_15475__$1);
var G__15477 = cljs.core.chunk_rest(seq__15150_15475__$1);
var G__15478 = c__5568__auto___15476;
var G__15479 = cljs.core.count(c__5568__auto___15476);
var G__15480 = (0);
seq__15150_15461 = G__15477;
chunk__15152_15462 = G__15478;
count__15153_15463 = G__15479;
i__15154_15464 = G__15480;
continue;
} else {
var child_15481 = cljs.core.first(seq__15150_15475__$1);
if(cljs.core.truth_(child_15481)){
node.appendChild(child_15481);


var G__15482 = cljs.core.next(seq__15150_15475__$1);
var G__15483 = null;
var G__15484 = (0);
var G__15485 = (0);
seq__15150_15461 = G__15482;
chunk__15152_15462 = G__15483;
count__15153_15463 = G__15484;
i__15154_15464 = G__15485;
continue;
} else {
var G__15486 = cljs.core.next(seq__15150_15475__$1);
var G__15487 = null;
var G__15488 = (0);
var G__15489 = (0);
seq__15150_15461 = G__15486;
chunk__15152_15462 = G__15487;
count__15153_15463 = G__15488;
i__15154_15464 = G__15489;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15460);
}
}


var G__15490 = seq__15115_15454;
var G__15491 = chunk__15117_15455;
var G__15492 = count__15118_15456;
var G__15493 = (i__15119_15457 + (1));
seq__15115_15454 = G__15490;
chunk__15117_15455 = G__15491;
count__15118_15456 = G__15492;
i__15119_15457 = G__15493;
continue;
} else {
var G__15494 = seq__15115_15454;
var G__15495 = chunk__15117_15455;
var G__15496 = count__15118_15456;
var G__15497 = (i__15119_15457 + (1));
seq__15115_15454 = G__15494;
chunk__15117_15455 = G__15495;
count__15118_15456 = G__15496;
i__15119_15457 = G__15497;
continue;
}
} else {
var temp__5804__auto___15498 = cljs.core.seq(seq__15115_15454);
if(temp__5804__auto___15498){
var seq__15115_15499__$1 = temp__5804__auto___15498;
if(cljs.core.chunked_seq_QMARK_(seq__15115_15499__$1)){
var c__5568__auto___15500 = cljs.core.chunk_first(seq__15115_15499__$1);
var G__15501 = cljs.core.chunk_rest(seq__15115_15499__$1);
var G__15502 = c__5568__auto___15500;
var G__15503 = cljs.core.count(c__5568__auto___15500);
var G__15504 = (0);
seq__15115_15454 = G__15501;
chunk__15117_15455 = G__15502;
count__15118_15456 = G__15503;
i__15119_15457 = G__15504;
continue;
} else {
var child_struct_15505 = cljs.core.first(seq__15115_15499__$1);
if((!((child_struct_15505 == null)))){
if(typeof child_struct_15505 === 'string'){
var text_15506 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15506),child_struct_15505].join(''));
} else {
var children_15507 = shadow.dom.svg_node(child_struct_15505);
if(cljs.core.seq_QMARK_(children_15507)){
var seq__15161_15508 = cljs.core.seq(children_15507);
var chunk__15163_15509 = null;
var count__15164_15510 = (0);
var i__15165_15511 = (0);
while(true){
if((i__15165_15511 < count__15164_15510)){
var child_15512 = chunk__15163_15509.cljs$core$IIndexed$_nth$arity$2(null,i__15165_15511);
if(cljs.core.truth_(child_15512)){
node.appendChild(child_15512);


var G__15513 = seq__15161_15508;
var G__15514 = chunk__15163_15509;
var G__15515 = count__15164_15510;
var G__15516 = (i__15165_15511 + (1));
seq__15161_15508 = G__15513;
chunk__15163_15509 = G__15514;
count__15164_15510 = G__15515;
i__15165_15511 = G__15516;
continue;
} else {
var G__15517 = seq__15161_15508;
var G__15518 = chunk__15163_15509;
var G__15519 = count__15164_15510;
var G__15520 = (i__15165_15511 + (1));
seq__15161_15508 = G__15517;
chunk__15163_15509 = G__15518;
count__15164_15510 = G__15519;
i__15165_15511 = G__15520;
continue;
}
} else {
var temp__5804__auto___15521__$1 = cljs.core.seq(seq__15161_15508);
if(temp__5804__auto___15521__$1){
var seq__15161_15522__$1 = temp__5804__auto___15521__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15161_15522__$1)){
var c__5568__auto___15523 = cljs.core.chunk_first(seq__15161_15522__$1);
var G__15524 = cljs.core.chunk_rest(seq__15161_15522__$1);
var G__15525 = c__5568__auto___15523;
var G__15526 = cljs.core.count(c__5568__auto___15523);
var G__15527 = (0);
seq__15161_15508 = G__15524;
chunk__15163_15509 = G__15525;
count__15164_15510 = G__15526;
i__15165_15511 = G__15527;
continue;
} else {
var child_15528 = cljs.core.first(seq__15161_15522__$1);
if(cljs.core.truth_(child_15528)){
node.appendChild(child_15528);


var G__15529 = cljs.core.next(seq__15161_15522__$1);
var G__15530 = null;
var G__15531 = (0);
var G__15532 = (0);
seq__15161_15508 = G__15529;
chunk__15163_15509 = G__15530;
count__15164_15510 = G__15531;
i__15165_15511 = G__15532;
continue;
} else {
var G__15533 = cljs.core.next(seq__15161_15522__$1);
var G__15534 = null;
var G__15535 = (0);
var G__15536 = (0);
seq__15161_15508 = G__15533;
chunk__15163_15509 = G__15534;
count__15164_15510 = G__15535;
i__15165_15511 = G__15536;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15507);
}
}


var G__15537 = cljs.core.next(seq__15115_15499__$1);
var G__15538 = null;
var G__15539 = (0);
var G__15540 = (0);
seq__15115_15454 = G__15537;
chunk__15117_15455 = G__15538;
count__15118_15456 = G__15539;
i__15119_15457 = G__15540;
continue;
} else {
var G__15541 = cljs.core.next(seq__15115_15499__$1);
var G__15542 = null;
var G__15543 = (0);
var G__15544 = (0);
seq__15115_15454 = G__15541;
chunk__15117_15455 = G__15542;
count__15118_15456 = G__15543;
i__15119_15457 = G__15544;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15545 = arguments.length;
var i__5770__auto___15546 = (0);
while(true){
if((i__5770__auto___15546 < len__5769__auto___15545)){
args__5775__auto__.push((arguments[i__5770__auto___15546]));

var G__15547 = (i__5770__auto___15546 + (1));
i__5770__auto___15546 = G__15547;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15194){
var G__15195 = cljs.core.first(seq15194);
var seq15194__$1 = cljs.core.next(seq15194);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15195,seq15194__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__15197 = arguments.length;
switch (G__15197) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13004__auto___15549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_15202){
var state_val_15203 = (state_15202[(1)]);
if((state_val_15203 === (1))){
var state_15202__$1 = state_15202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15202__$1,(2),once_or_cleanup);
} else {
if((state_val_15203 === (2))){
var inst_15199 = (state_15202[(2)]);
var inst_15200 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_15202__$1 = (function (){var statearr_15204 = state_15202;
(statearr_15204[(7)] = inst_15199);

return statearr_15204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15202__$1,inst_15200);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12971__auto__ = null;
var shadow$dom$state_machine__12971__auto____0 = (function (){
var statearr_15205 = [null,null,null,null,null,null,null,null];
(statearr_15205[(0)] = shadow$dom$state_machine__12971__auto__);

(statearr_15205[(1)] = (1));

return statearr_15205;
});
var shadow$dom$state_machine__12971__auto____1 = (function (state_15202){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_15202);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e15206){var ex__12974__auto__ = e15206;
var statearr_15207_15550 = state_15202;
(statearr_15207_15550[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_15202[(4)]))){
var statearr_15208_15551 = state_15202;
(statearr_15208_15551[(1)] = cljs.core.first((state_15202[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15552 = state_15202;
state_15202 = G__15552;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
shadow$dom$state_machine__12971__auto__ = function(state_15202){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12971__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12971__auto____1.call(this,state_15202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12971__auto____0;
shadow$dom$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12971__auto____1;
return shadow$dom$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_15209 = f__13006__auto__();
(statearr_15209[(6)] = c__13004__auto___15549);

return statearr_15209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
