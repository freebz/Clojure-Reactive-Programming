// Compiled by ClojureScript 1.10.238 {}
goog.provide('contacts.ui');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
contacts.ui.set_value = (function contacts$ui$set_value(component,name,key){
return (function (e){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("list","edit-contact","list/edit-contact",2034410157,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),e.target.value], null),null,(1),null))))),null,(1),null)))))));
});
});
/**
 * @constructor
 */
contacts.ui.Contact = (function contacts$ui$Contact(){
var this__24526__auto__ = this;
React.Component.apply(this__24526__auto__,arguments);

if(!((this__24526__auto__.initLocalState == null))){
this__24526__auto__.state = this__24526__auto__.initLocalState();
} else {
this__24526__auto__.state = {};
}

return this__24526__auto__;
});

contacts.ui.Contact.prototype = goog.object.clone(React.Component.prototype);

var x42298_42319 = contacts.ui.Contact.prototype;
x42298_42319.componentWillUpdate = ((function (x42298_42319){
return (function (next_props__24367__auto__,next_state__24368__auto__){
var this__24366__auto__ = this;
if(((!((this__24366__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24366__auto__.om$next$Ident$))))?true:false):false)){
var ident__24370__auto___42320 = om.next.ident.call(null,this__24366__auto__,om.next.props.call(null,this__24366__auto__));
var next_ident__24371__auto___42321 = om.next.ident.call(null,this__24366__auto__,om.next._next_props.call(null,next_props__24367__auto__,this__24366__auto__));
if(cljs.core.not_EQ_.call(null,ident__24370__auto___42320,next_ident__24371__auto___42321)){
var idxr__24372__auto___42322 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__24372__auto___42322 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__24372__auto___42322),((function (idxr__24372__auto___42322,ident__24370__auto___42320,next_ident__24371__auto___42321,this__24366__auto__,x42298_42319){
return (function (indexes__24373__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__24373__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__24370__auto___42320], null),cljs.core.disj,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__24371__auto___42321], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24366__auto__);
});})(idxr__24372__auto___42322,ident__24370__auto___42320,next_ident__24371__auto___42321,this__24366__auto__,x42298_42319))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__24366__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24366__auto__);
});})(x42298_42319))
;

x42298_42319.shouldComponentUpdate = ((function (x42298_42319){
return (function (next_props__24367__auto__,next_state__24368__auto__){
var this__24366__auto__ = this;
var next_children__24369__auto__ = next_props__24367__auto__.children;
var next_props__24367__auto____$1 = goog.object.get(next_props__24367__auto__,"omcljs$value");
var next_props__24367__auto____$2 = (function (){var G__42300 = next_props__24367__auto____$1;
if((next_props__24367__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__42300);
} else {
return G__42300;
}
})();
var or__3922__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24366__auto__),next_props__24367__auto____$2);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = this__24366__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24366__auto__.state,"omcljs$state"),goog.object.get(next_state__24368__auto__,"omcljs$state"));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__24366__auto__.props.children,next_children__24369__auto__);
}
}
});})(x42298_42319))
;

x42298_42319.componentWillUnmount = ((function (x42298_42319){
return (function (){
var this__24366__auto__ = this;
var r__24377__auto__ = om.next.get_reconciler.call(null,this__24366__auto__);
var cfg__24378__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24377__auto__);
var st__24379__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24378__auto__);
var indexer__24376__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24378__auto__);
if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__24379__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__24379__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__24366__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__24379__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24366__auto__);
} else {
}

if((indexer__24376__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24376__auto__,this__24366__auto__);
}
});})(x42298_42319))
;

x42298_42319.componentDidUpdate = ((function (x42298_42319){
return (function (prev_props__24374__auto__,prev_state__24375__auto__){
var this__24366__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24366__auto__);
});})(x42298_42319))
;

x42298_42319.isMounted = ((function (x42298_42319){
return (function (){
var this__24366__auto__ = this;
return cljs.core.boolean$.call(null,(function (){var or__3922__auto__ = (function (){var G__42302 = this__24366__auto__;
var G__42302__$1 = (((G__42302 == null))?null:G__42302._reactInternalFiber);
if((G__42302__$1 == null)){
return null;
} else {
return G__42302__$1.stateNode;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__42303 = this__24366__auto__;
var G__42303__$1 = (((G__42303 == null))?null:G__42303._reactInternalInstance);
if((G__42303__$1 == null)){
return null;
} else {
return G__42303__$1._renderedComponent;
}
}
})());
});})(x42298_42319))
;

x42298_42319.componentWillMount = ((function (x42298_42319){
return (function (){
var this__24366__auto__ = this;
var indexer__24376__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24376__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24376__auto__,this__24366__auto__);
}
});})(x42298_42319))
;

x42298_42319.render = ((function (x42298_42319){
return (function (){
var this__24365__auto__ = this;
var this$ = this__24365__auto__;
var _STAR_reconciler_STAR_42304 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42305 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42306 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42307 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42308 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__24365__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__24365__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__24365__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__24365__auto__);

om.next._STAR_parent_STAR_ = this__24365__auto__;

try{var map__42309 = om.next.props.call(null,this$);
var map__42309__$1 = ((((!((map__42309 == null)))?(((((map__42309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42309):map__42309);
var props = map__42309__$1;
var phone = cljs.core.get.call(null,map__42309__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
var name = cljs.core.get.call(null,map__42309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var email = cljs.core.get.call(null,map__42309__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var show_details = cljs.core.get.call(null,map__42309__$1,new cljs.core.Keyword(null,"show-details","show-details",463792396));
return om.dom.li.call(null,null,om.dom.label.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(phone),") (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email),")"].join('')),om.dom.button.call(null,({"style": ({"marginLeft": "10px"}), "onClick": ((function (map__42309,map__42309__$1,props,phone,name,email,show_details,_STAR_reconciler_STAR_42304,_STAR_depth_STAR_42305,_STAR_shared_STAR_42306,_STAR_instrument_STAR_42307,_STAR_parent_STAR_42308,this$,this__24365__auto__,x42298_42319){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("list","toggle-select-contact","list/toggle-select-contact",-280806589,null),null,(1),null)),(new cljs.core.List(null,props,null,(1),null))))),null,(1),null)))))));
});})(map__42309,map__42309__$1,props,phone,name,email,show_details,_STAR_reconciler_STAR_42304,_STAR_depth_STAR_42305,_STAR_shared_STAR_42306,_STAR_instrument_STAR_42307,_STAR_parent_STAR_42308,this$,this__24365__auto__,x42298_42319))
}),"Show details"),(cljs.core.truth_(show_details)?om.dom.div.call(null,null,om.dom.div.call(null,({"className": "input-div"}),om.dom.label.call(null,({"className": "label"}),"Email"),om.dom.input.call(null,({"value": email, "onChange": contacts.ui.set_value.call(null,this$,name,new cljs.core.Keyword(null,"email","email",1415816706))}))),om.dom.div.call(null,({"className": "input-div"}),om.dom.label.call(null,({"className": "label"}),"Phone"),om.dom.input.call(null,({"value": phone, "onChange": contacts.ui.set_value.call(null,this$,name,new cljs.core.Keyword(null,"phone","phone",-763596057))})))):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42308;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42307;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42306;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42305;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42304;
}});})(x42298_42319))
;


contacts.ui.Contact.prototype.constructor = contacts.ui.Contact;

contacts.ui.Contact.prototype.constructor.displayName = "contacts.ui/Contact";

contacts.ui.Contact.prototype.om$isComponent = true;

var x42311_42323 = contacts.ui.Contact;
/** @nocollapse */
x42311_42323.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42311_42323.om$next$Ident$ident$arity$2 = ((function (x42311_42323){
return (function (this$,p__42312){
var map__42313 = p__42312;
var map__42313__$1 = ((((!((map__42313 == null)))?(((((map__42313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42313):map__42313);
var name = cljs.core.get.call(null,map__42313__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contact","by-name","contact/by-name",1626014564),name], null);
});})(x42311_42323))
;

/** @nocollapse */
x42311_42323.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42311_42323.om$next$IQuery$query$arity$1 = ((function (x42311_42323){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"email","email",1415816706)], null);
});})(x42311_42323))
;


var x42315_42324 = contacts.ui.Contact.prototype;

x42315_42324.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x42315_42324.om$next$Ident$ident$arity$2 = ((function (x42315_42324){
return (function (this$,p__42316){
var map__42317 = p__42316;
var map__42317__$1 = ((((!((map__42317 == null)))?(((((map__42317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42317):map__42317);
var name = cljs.core.get.call(null,map__42317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contact","by-name","contact/by-name",1626014564),name], null);
});})(x42315_42324))
;


x42315_42324.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x42315_42324.om$next$IQuery$query$arity$1 = ((function (x42315_42324){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"email","email",1415816706)], null);
});})(x42315_42324))
;


contacts.ui.Contact.cljs$lang$type = true;

contacts.ui.Contact.cljs$lang$ctorStr = "contacts.ui/Contact";

contacts.ui.Contact.cljs$lang$ctorPrWriter = (function (this__24529__auto__,writer__24530__auto__,opt__24531__auto__){
return cljs.core._write.call(null,writer__24530__auto__,"contacts.ui/Contact");
});
contacts.ui.contact = om.next.factory.call(null,contacts.ui.Contact,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
/**
 * @constructor
 */
contacts.ui.ListView = (function contacts$ui$ListView(){
var this__24526__auto__ = this;
React.Component.apply(this__24526__auto__,arguments);

if(!((this__24526__auto__.initLocalState == null))){
this__24526__auto__.state = this__24526__auto__.initLocalState();
} else {
this__24526__auto__.state = {};
}

return this__24526__auto__;
});

contacts.ui.ListView.prototype = goog.object.clone(React.Component.prototype);

var x42327_42340 = contacts.ui.ListView.prototype;
x42327_42340.componentWillUpdate = ((function (x42327_42340){
return (function (next_props__24367__auto__,next_state__24368__auto__){
var this__24366__auto__ = this;
if(((!((this__24366__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24366__auto__.om$next$Ident$))))?true:false):false)){
var ident__24370__auto___42341 = om.next.ident.call(null,this__24366__auto__,om.next.props.call(null,this__24366__auto__));
var next_ident__24371__auto___42342 = om.next.ident.call(null,this__24366__auto__,om.next._next_props.call(null,next_props__24367__auto__,this__24366__auto__));
if(cljs.core.not_EQ_.call(null,ident__24370__auto___42341,next_ident__24371__auto___42342)){
var idxr__24372__auto___42343 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__24372__auto___42343 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__24372__auto___42343),((function (idxr__24372__auto___42343,ident__24370__auto___42341,next_ident__24371__auto___42342,this__24366__auto__,x42327_42340){
return (function (indexes__24373__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__24373__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__24370__auto___42341], null),cljs.core.disj,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__24371__auto___42342], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24366__auto__);
});})(idxr__24372__auto___42343,ident__24370__auto___42341,next_ident__24371__auto___42342,this__24366__auto__,x42327_42340))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__24366__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24366__auto__);
});})(x42327_42340))
;

x42327_42340.shouldComponentUpdate = ((function (x42327_42340){
return (function (next_props__24367__auto__,next_state__24368__auto__){
var this__24366__auto__ = this;
var next_children__24369__auto__ = next_props__24367__auto__.children;
var next_props__24367__auto____$1 = goog.object.get(next_props__24367__auto__,"omcljs$value");
var next_props__24367__auto____$2 = (function (){var G__42329 = next_props__24367__auto____$1;
if((next_props__24367__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__42329);
} else {
return G__42329;
}
})();
var or__3922__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24366__auto__),next_props__24367__auto____$2);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = this__24366__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24366__auto__.state,"omcljs$state"),goog.object.get(next_state__24368__auto__,"omcljs$state"));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__24366__auto__.props.children,next_children__24369__auto__);
}
}
});})(x42327_42340))
;

x42327_42340.componentWillUnmount = ((function (x42327_42340){
return (function (){
var this__24366__auto__ = this;
var r__24377__auto__ = om.next.get_reconciler.call(null,this__24366__auto__);
var cfg__24378__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24377__auto__);
var st__24379__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24378__auto__);
var indexer__24376__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24378__auto__);
if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__24379__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__24379__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__24366__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__24379__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24366__auto__);
} else {
}

if((indexer__24376__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24376__auto__,this__24366__auto__);
}
});})(x42327_42340))
;

x42327_42340.componentDidUpdate = ((function (x42327_42340){
return (function (prev_props__24374__auto__,prev_state__24375__auto__){
var this__24366__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24366__auto__);
});})(x42327_42340))
;

x42327_42340.isMounted = ((function (x42327_42340){
return (function (){
var this__24366__auto__ = this;
return cljs.core.boolean$.call(null,(function (){var or__3922__auto__ = (function (){var G__42331 = this__24366__auto__;
var G__42331__$1 = (((G__42331 == null))?null:G__42331._reactInternalFiber);
if((G__42331__$1 == null)){
return null;
} else {
return G__42331__$1.stateNode;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__42332 = this__24366__auto__;
var G__42332__$1 = (((G__42332 == null))?null:G__42332._reactInternalInstance);
if((G__42332__$1 == null)){
return null;
} else {
return G__42332__$1._renderedComponent;
}
}
})());
});})(x42327_42340))
;

x42327_42340.componentWillMount = ((function (x42327_42340){
return (function (){
var this__24366__auto__ = this;
var indexer__24376__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24376__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24376__auto__,this__24366__auto__);
}
});})(x42327_42340))
;

x42327_42340.render = ((function (x42327_42340){
return (function (){
var this__24365__auto__ = this;
var this$ = this__24365__auto__;
var _STAR_reconciler_STAR_42333 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42334 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42335 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42336 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42337 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__24365__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__24365__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__24365__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__24365__auto__);

om.next._STAR_parent_STAR_ = this__24365__auto__;

try{var list = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,contacts.ui.contact,list));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42337;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42336;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42335;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42334;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42333;
}});})(x42327_42340))
;


contacts.ui.ListView.prototype.constructor = contacts.ui.ListView;

contacts.ui.ListView.prototype.constructor.displayName = "contacts.ui/ListView";

contacts.ui.ListView.prototype.om$isComponent = true;

var x42338_42344 = contacts.ui.ListView;


var x42339_42345 = contacts.ui.ListView.prototype;


contacts.ui.ListView.cljs$lang$type = true;

contacts.ui.ListView.cljs$lang$ctorStr = "contacts.ui/ListView";

contacts.ui.ListView.cljs$lang$ctorPrWriter = (function (this__24529__auto__,writer__24530__auto__,opt__24531__auto__){
return cljs.core._write.call(null,writer__24530__auto__,"contacts.ui/ListView");
});
contacts.ui.list_view = om.next.factory.call(null,contacts.ui.ListView);
/**
 * @constructor
 */
contacts.ui.RootView = (function contacts$ui$RootView(){
var this__24526__auto__ = this;
React.Component.apply(this__24526__auto__,arguments);

if(!((this__24526__auto__.initLocalState == null))){
this__24526__auto__.state = this__24526__auto__.initLocalState();
} else {
this__24526__auto__.state = {};
}

return this__24526__auto__;
});

contacts.ui.RootView.prototype = goog.object.clone(React.Component.prototype);

var x42348_42363 = contacts.ui.RootView.prototype;
x42348_42363.componentWillUpdate = ((function (x42348_42363){
return (function (next_props__24367__auto__,next_state__24368__auto__){
var this__24366__auto__ = this;
if(((!((this__24366__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24366__auto__.om$next$Ident$))))?true:false):false)){
var ident__24370__auto___42364 = om.next.ident.call(null,this__24366__auto__,om.next.props.call(null,this__24366__auto__));
var next_ident__24371__auto___42365 = om.next.ident.call(null,this__24366__auto__,om.next._next_props.call(null,next_props__24367__auto__,this__24366__auto__));
if(cljs.core.not_EQ_.call(null,ident__24370__auto___42364,next_ident__24371__auto___42365)){
var idxr__24372__auto___42366 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__24372__auto___42366 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__24372__auto___42366),((function (idxr__24372__auto___42366,ident__24370__auto___42364,next_ident__24371__auto___42365,this__24366__auto__,x42348_42363){
return (function (indexes__24373__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__24373__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__24370__auto___42364], null),cljs.core.disj,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__24371__auto___42365], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24366__auto__);
});})(idxr__24372__auto___42366,ident__24370__auto___42364,next_ident__24371__auto___42365,this__24366__auto__,x42348_42363))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__24366__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24366__auto__);
});})(x42348_42363))
;

x42348_42363.shouldComponentUpdate = ((function (x42348_42363){
return (function (next_props__24367__auto__,next_state__24368__auto__){
var this__24366__auto__ = this;
var next_children__24369__auto__ = next_props__24367__auto__.children;
var next_props__24367__auto____$1 = goog.object.get(next_props__24367__auto__,"omcljs$value");
var next_props__24367__auto____$2 = (function (){var G__42350 = next_props__24367__auto____$1;
if((next_props__24367__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__42350);
} else {
return G__42350;
}
})();
var or__3922__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24366__auto__),next_props__24367__auto____$2);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = this__24366__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24366__auto__.state,"omcljs$state"),goog.object.get(next_state__24368__auto__,"omcljs$state"));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__24366__auto__.props.children,next_children__24369__auto__);
}
}
});})(x42348_42363))
;

x42348_42363.componentWillUnmount = ((function (x42348_42363){
return (function (){
var this__24366__auto__ = this;
var r__24377__auto__ = om.next.get_reconciler.call(null,this__24366__auto__);
var cfg__24378__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24377__auto__);
var st__24379__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24378__auto__);
var indexer__24376__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24378__auto__);
if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__24379__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__24379__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__24366__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__24379__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24366__auto__);
} else {
}

if((indexer__24376__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24376__auto__,this__24366__auto__);
}
});})(x42348_42363))
;

x42348_42363.componentDidUpdate = ((function (x42348_42363){
return (function (prev_props__24374__auto__,prev_state__24375__auto__){
var this__24366__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24366__auto__);
});})(x42348_42363))
;

x42348_42363.isMounted = ((function (x42348_42363){
return (function (){
var this__24366__auto__ = this;
return cljs.core.boolean$.call(null,(function (){var or__3922__auto__ = (function (){var G__42352 = this__24366__auto__;
var G__42352__$1 = (((G__42352 == null))?null:G__42352._reactInternalFiber);
if((G__42352__$1 == null)){
return null;
} else {
return G__42352__$1.stateNode;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__42353 = this__24366__auto__;
var G__42353__$1 = (((G__42353 == null))?null:G__42353._reactInternalInstance);
if((G__42353__$1 == null)){
return null;
} else {
return G__42353__$1._renderedComponent;
}
}
})());
});})(x42348_42363))
;

x42348_42363.componentWillMount = ((function (x42348_42363){
return (function (){
var this__24366__auto__ = this;
var indexer__24376__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24366__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24376__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24376__auto__,this__24366__auto__);
}
});})(x42348_42363))
;

x42348_42363.render = ((function (x42348_42363){
return (function (){
var this__24365__auto__ = this;
var this$ = this__24365__auto__;
var _STAR_reconciler_STAR_42354 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42355 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42356 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42357 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42358 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__24365__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__24365__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__24365__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__24365__auto__);

om.next._STAR_parent_STAR_ = this__24365__auto__;

try{var map__42359 = om.next.props.call(null,this$);
var map__42359__$1 = ((((!((map__42359 == null)))?(((((map__42359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42359):map__42359);
var contacts__$1 = cljs.core.get.call(null,map__42359__$1,new cljs.core.Keyword("list","contacts","list/contacts",332680044));
return om.dom.div.call(null,null,cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.h2.call(null,null,"Contacts"),contacts.ui.list_view.call(null,contacts__$1)], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42358;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42357;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42356;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42355;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42354;
}});})(x42348_42363))
;


contacts.ui.RootView.prototype.constructor = contacts.ui.RootView;

contacts.ui.RootView.prototype.constructor.displayName = "contacts.ui/RootView";

contacts.ui.RootView.prototype.om$isComponent = true;

var x42361_42367 = contacts.ui.RootView;
/** @nocollapse */
x42361_42367.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42361_42367.om$next$IQuery$query$arity$1 = ((function (x42361_42367){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,contacts.ui.Contact);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("list","contacts","list/contacts",332680044),null,(1),null)),(new cljs.core.List(null,subquery,null,(1),null)))))),null,(1),null))))));
});})(x42361_42367))
;


var x42362_42368 = contacts.ui.RootView.prototype;

x42362_42368.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x42362_42368.om$next$IQuery$query$arity$1 = ((function (x42362_42368){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,contacts.ui.Contact);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("list","contacts","list/contacts",332680044),null,(1),null)),(new cljs.core.List(null,subquery,null,(1),null)))))),null,(1),null))))));
});})(x42362_42368))
;


contacts.ui.RootView.cljs$lang$type = true;

contacts.ui.RootView.cljs$lang$ctorStr = "contacts.ui/RootView";

contacts.ui.RootView.cljs$lang$ctorPrWriter = (function (this__24529__auto__,writer__24530__auto__,opt__24531__auto__){
return cljs.core._write.call(null,writer__24530__auto__,"contacts.ui/RootView");
});

//# sourceMappingURL=ui.js.map?rel=1673424212800
