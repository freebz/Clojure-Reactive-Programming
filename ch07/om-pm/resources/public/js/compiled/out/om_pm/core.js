// Compiled by ClojureScript 1.10.238 {}
goog.provide('om_pm.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.next');
goog.require('cljs.core.async');
goog.require('om_pm.parser');
goog.require('om_pm.util');
om_pm.core.init_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("card","name","card/name",1845148473),"Expenses",new cljs.core.Keyword("card","description","card/description",-1429970800),"Submit last client's expense report"], null),(2),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("card","name","card/name",1845148473),"Groceries shopping",new cljs.core.Keyword("card","description","card/description",-1429970800),"Almond milk, mixed nuts, eggs..."], null)], null),new cljs.core.Keyword("column","list","column/list",1985805513),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("column","by-id","column/by-id",1364327309),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("column","by-id","column/by-id",1364327309),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("column","by-id","column/by-id",1364327309),(3)], null)], null),new cljs.core.Keyword("column","by-id","column/by-id",1364327309),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("column","title","column/title",1957789061),"Backlog",new cljs.core.Keyword("column","cards","column/cards",-1235863488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),(2)], null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("column","title","column/title",1957789061),"In Progress",new cljs.core.Keyword("column","cards","column/cards",-1235863488),cljs.core.PersistentVector.EMPTY], null),(3),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(3),new cljs.core.Keyword("column","title","column/title",1957789061),"Done",new cljs.core.Keyword("column","cards","column/cards",-1235863488),cljs.core.PersistentVector.EMPTY], null)], null)], null);
om_pm.core.handle_drop = (function om_pm$core$handle_drop(e,transfer_chan,destination_column_id){
e.preventDefault();

var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card-id","card-id",-1770060179),parseInt(om_pm.util.get_transfer_data_BANG_.call(null,e,"cardId")),new cljs.core.Keyword(null,"source-column-id","source-column-id",643071119),om_pm.util.get_transfer_data_BANG_.call(null,e,"sourceColumnId"),new cljs.core.Keyword(null,"destination-column-id","destination-column-id",1500166188),destination_column_id], null);
return cljs.core.async.put_BANG_.call(null,transfer_chan,data);
});
om_pm.core.card_view = (function om_pm$core$card_view(p__33466,column_id){
var map__33467 = p__33466;
var map__33467__$1 = ((((!((map__33467 == null)))?(((((map__33467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33467):map__33467);
var id = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var name = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword("card","name","card/name",1845148473));
var description = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword("card","description","card/description",-1429970800));
return om.dom.div.call(null,({"key": id, "className": "card", "draggable": true, "onDragStart": ((function (map__33467,map__33467__$1,id,name,description){
return (function (e){
om_pm.util.set_transfer_data_BANG_.call(null,e,"cardId",id);

return om_pm.util.set_transfer_data_BANG_.call(null,e,"sourceColumnId",column_id);
});})(map__33467,map__33467__$1,id,name,description))
}),om.dom.div.call(null,null,name),om.dom.div.call(null,null,description));
});
/**
 * @constructor
 */
om_pm.core.Column = (function om_pm$core$Column(){
var this__32594__auto__ = this;
React.Component.apply(this__32594__auto__,arguments);

if(!((this__32594__auto__.initLocalState == null))){
this__32594__auto__.state = this__32594__auto__.initLocalState();
} else {
this__32594__auto__.state = {};
}

return this__32594__auto__;
});

om_pm.core.Column.prototype = goog.object.clone(React.Component.prototype);

var x33474_33495 = om_pm.core.Column.prototype;
x33474_33495.componentWillUpdate = ((function (x33474_33495){
return (function (next_props__32435__auto__,next_state__32436__auto__){
var this__32434__auto__ = this;
if(((!((this__32434__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__32434__auto__.om$next$Ident$))))?true:false):false)){
var ident__32438__auto___33496 = om.next.ident.call(null,this__32434__auto__,om.next.props.call(null,this__32434__auto__));
var next_ident__32439__auto___33497 = om.next.ident.call(null,this__32434__auto__,om.next._next_props.call(null,next_props__32435__auto__,this__32434__auto__));
if(cljs.core.not_EQ_.call(null,ident__32438__auto___33496,next_ident__32439__auto___33497)){
var idxr__32440__auto___33498 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32434__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32440__auto___33498 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32440__auto___33498),((function (idxr__32440__auto___33498,ident__32438__auto___33496,next_ident__32439__auto___33497,this__32434__auto__,x33474_33495){
return (function (indexes__32441__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32441__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32438__auto___33496], null),cljs.core.disj,this__32434__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32439__auto___33497], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32434__auto__);
});})(idxr__32440__auto___33498,ident__32438__auto___33496,next_ident__32439__auto___33497,this__32434__auto__,x33474_33495))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32434__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32434__auto__);
});})(x33474_33495))
;

x33474_33495.shouldComponentUpdate = ((function (x33474_33495){
return (function (next_props__32435__auto__,next_state__32436__auto__){
var this__32434__auto__ = this;
var next_children__32437__auto__ = next_props__32435__auto__.children;
var next_props__32435__auto____$1 = goog.object.get(next_props__32435__auto__,"omcljs$value");
var next_props__32435__auto____$2 = (function (){var G__33476 = next_props__32435__auto____$1;
if((next_props__32435__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__33476);
} else {
return G__33476;
}
})();
var or__3922__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32434__auto__),next_props__32435__auto____$2);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = this__32434__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32434__auto__.state,"omcljs$state"),goog.object.get(next_state__32436__auto__,"omcljs$state"));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32434__auto__.props.children,next_children__32437__auto__);
}
}
});})(x33474_33495))
;

x33474_33495.componentWillUnmount = ((function (x33474_33495){
return (function (){
var this__32434__auto__ = this;
var r__32445__auto__ = om.next.get_reconciler.call(null,this__32434__auto__);
var cfg__32446__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32445__auto__);
var st__32447__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32446__auto__);
var indexer__32444__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32446__auto__);
if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__32447__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32434__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32447__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32434__auto__);
} else {
}

if((indexer__32444__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32444__auto__,this__32434__auto__);
}
});})(x33474_33495))
;

x33474_33495.componentDidUpdate = ((function (x33474_33495){
return (function (prev_props__32442__auto__,prev_state__32443__auto__){
var this__32434__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32434__auto__);
});})(x33474_33495))
;

x33474_33495.isMounted = ((function (x33474_33495){
return (function (){
var this__32434__auto__ = this;
return cljs.core.boolean$.call(null,(function (){var or__3922__auto__ = (function (){var G__33478 = this__32434__auto__;
var G__33478__$1 = (((G__33478 == null))?null:G__33478._reactInternalFiber);
if((G__33478__$1 == null)){
return null;
} else {
return G__33478__$1.stateNode;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__33479 = this__32434__auto__;
var G__33479__$1 = (((G__33479 == null))?null:G__33479._reactInternalInstance);
if((G__33479__$1 == null)){
return null;
} else {
return G__33479__$1._renderedComponent;
}
}
})());
});})(x33474_33495))
;

x33474_33495.componentWillMount = ((function (x33474_33495){
return (function (){
var this__32434__auto__ = this;
var indexer__32444__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32434__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32444__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32444__auto__,this__32434__auto__);
}
});})(x33474_33495))
;

x33474_33495.render = ((function (x33474_33495){
return (function (){
var this__32433__auto__ = this;
var this$ = this__32433__auto__;
var _STAR_reconciler_STAR_33480 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33481 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33482 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33483 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33484 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32433__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32433__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32433__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32433__auto__);

om.next._STAR_parent_STAR_ = this__32433__auto__;

try{var map__33485 = om.next.props.call(null,this$);
var map__33485__$1 = ((((!((map__33485 == null)))?(((((map__33485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33485):map__33485);
var data = map__33485__$1;
var id = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var title = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword("column","title","column/title",1957789061));
var cards = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword("column","cards","column/cards",-1235863488));
var transfer_chan = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword(null,"transfer-chan","transfer-chan",686261984));
return om.dom.div.call(null,({"className": "column", "onDragOver": ((function (map__33485,map__33485__$1,data,id,title,cards,transfer_chan,_STAR_reconciler_STAR_33480,_STAR_depth_STAR_33481,_STAR_shared_STAR_33482,_STAR_instrument_STAR_33483,_STAR_parent_STAR_33484,this$,this__32433__auto__,x33474_33495){
return (function (p1__33469_SHARP_){
return p1__33469_SHARP_.preventDefault();
});})(map__33485,map__33485__$1,data,id,title,cards,transfer_chan,_STAR_reconciler_STAR_33480,_STAR_depth_STAR_33481,_STAR_shared_STAR_33482,_STAR_instrument_STAR_33483,_STAR_parent_STAR_33484,this$,this__32433__auto__,x33474_33495))
, "onDrop": ((function (map__33485,map__33485__$1,data,id,title,cards,transfer_chan,_STAR_reconciler_STAR_33480,_STAR_depth_STAR_33481,_STAR_shared_STAR_33482,_STAR_instrument_STAR_33483,_STAR_parent_STAR_33484,this$,this__32433__auto__,x33474_33495){
return (function (p1__33470_SHARP_){
return om_pm.core.handle_drop.call(null,p1__33470_SHARP_,transfer_chan,id);
});})(map__33485,map__33485__$1,data,id,title,cards,transfer_chan,_STAR_reconciler_STAR_33480,_STAR_depth_STAR_33481,_STAR_shared_STAR_33482,_STAR_instrument_STAR_33483,_STAR_parent_STAR_33484,this$,this__32433__auto__,x33474_33495))
}),om.dom.div.call(null,({"className": "column-title"}),title),(cljs.core.truth_(cards)?cljs.core.map.call(null,((function (map__33485,map__33485__$1,data,id,title,cards,transfer_chan,_STAR_reconciler_STAR_33480,_STAR_depth_STAR_33481,_STAR_shared_STAR_33482,_STAR_instrument_STAR_33483,_STAR_parent_STAR_33484,this$,this__32433__auto__,x33474_33495){
return (function (p1__33471_SHARP_){
return om_pm.core.card_view.call(null,p1__33471_SHARP_,id);
});})(map__33485,map__33485__$1,data,id,title,cards,transfer_chan,_STAR_reconciler_STAR_33480,_STAR_depth_STAR_33481,_STAR_shared_STAR_33482,_STAR_instrument_STAR_33483,_STAR_parent_STAR_33484,this$,this__32433__auto__,x33474_33495))
,cards):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33484;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33483;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33482;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33481;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33480;
}});})(x33474_33495))
;


om_pm.core.Column.prototype.constructor = om_pm.core.Column;

om_pm.core.Column.prototype.constructor.displayName = "om-pm.core/Column";

om_pm.core.Column.prototype.om$isComponent = true;

var x33487_33499 = om_pm.core.Column;
/** @nocollapse */
x33487_33499.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x33487_33499.om$next$Ident$ident$arity$2 = ((function (x33487_33499){
return (function (this$,p__33488){
var map__33489 = p__33488;
var map__33489__$1 = ((((!((map__33489 == null)))?(((((map__33489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33489):map__33489);
var id = cljs.core.get.call(null,map__33489__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("column","by-id","column/by-id",1364327309),id], null);
});})(x33487_33499))
;

/** @nocollapse */
x33487_33499.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x33487_33499.om$next$IQuery$query$arity$1 = ((function (x33487_33499){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("column","title","column/title",1957789061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("column","cards","column/cards",-1235863488),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("card","name","card/name",1845148473),new cljs.core.Keyword("card","description","card/description",-1429970800)], null)], null)], null);
});})(x33487_33499))
;


var x33491_33500 = om_pm.core.Column.prototype;

x33491_33500.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x33491_33500.om$next$Ident$ident$arity$2 = ((function (x33491_33500){
return (function (this$,p__33492){
var map__33493 = p__33492;
var map__33493__$1 = ((((!((map__33493 == null)))?(((((map__33493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33493):map__33493);
var id = cljs.core.get.call(null,map__33493__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("column","by-id","column/by-id",1364327309),id], null);
});})(x33491_33500))
;


x33491_33500.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x33491_33500.om$next$IQuery$query$arity$1 = ((function (x33491_33500){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("column","title","column/title",1957789061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("column","cards","column/cards",-1235863488),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("card","name","card/name",1845148473),new cljs.core.Keyword("card","description","card/description",-1429970800)], null)], null)], null);
});})(x33491_33500))
;


om_pm.core.Column.cljs$lang$type = true;

om_pm.core.Column.cljs$lang$ctorStr = "om-pm.core/Column";

om_pm.core.Column.cljs$lang$ctorPrWriter = (function (this__32597__auto__,writer__32598__auto__,opt__32599__auto__){
return cljs.core._write.call(null,writer__32598__auto__,"om-pm.core/Column");
});
om_pm.core.column_STAR_ = om.next.factory.call(null,om_pm.core.Column);
om_pm.core.column = (function om_pm$core$column(props,transfer_chan){
return om_pm.core.column_STAR_.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"transfer-chan","transfer-chan",686261984),transfer_chan));
});
om_pm.core.column_view = (function om_pm$core$column_view(columns,transfer_chan){
return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__33501_SHARP_){
return om_pm.core.column.call(null,p1__33501_SHARP_,transfer_chan);
}),columns));
});
/**
 * @constructor
 */
om_pm.core.RootView = (function om_pm$core$RootView(){
var this__32594__auto__ = this;
React.Component.apply(this__32594__auto__,arguments);

if(!((this__32594__auto__.initLocalState == null))){
this__32594__auto__.state = this__32594__auto__.initLocalState();
} else {
this__32594__auto__.state = {};
}

return this__32594__auto__;
});

om_pm.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x33504_33551 = om_pm.core.RootView.prototype;
x33504_33551.componentWillUpdate = ((function (x33504_33551){
return (function (next_props__32435__auto__,next_state__32436__auto__){
var this__32434__auto__ = this;
if(((!((this__32434__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__32434__auto__.om$next$Ident$))))?true:false):false)){
var ident__32438__auto___33552 = om.next.ident.call(null,this__32434__auto__,om.next.props.call(null,this__32434__auto__));
var next_ident__32439__auto___33553 = om.next.ident.call(null,this__32434__auto__,om.next._next_props.call(null,next_props__32435__auto__,this__32434__auto__));
if(cljs.core.not_EQ_.call(null,ident__32438__auto___33552,next_ident__32439__auto___33553)){
var idxr__32440__auto___33554 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32434__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32440__auto___33554 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32440__auto___33554),((function (idxr__32440__auto___33554,ident__32438__auto___33552,next_ident__32439__auto___33553,this__32434__auto__,x33504_33551){
return (function (indexes__32441__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32441__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32438__auto___33552], null),cljs.core.disj,this__32434__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32439__auto___33553], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32434__auto__);
});})(idxr__32440__auto___33554,ident__32438__auto___33552,next_ident__32439__auto___33553,this__32434__auto__,x33504_33551))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32434__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32434__auto__);
});})(x33504_33551))
;

x33504_33551.shouldComponentUpdate = ((function (x33504_33551){
return (function (next_props__32435__auto__,next_state__32436__auto__){
var this__32434__auto__ = this;
var next_children__32437__auto__ = next_props__32435__auto__.children;
var next_props__32435__auto____$1 = goog.object.get(next_props__32435__auto__,"omcljs$value");
var next_props__32435__auto____$2 = (function (){var G__33506 = next_props__32435__auto____$1;
if((next_props__32435__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__33506);
} else {
return G__33506;
}
})();
var or__3922__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32434__auto__),next_props__32435__auto____$2);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = this__32434__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32434__auto__.state,"omcljs$state"),goog.object.get(next_state__32436__auto__,"omcljs$state"));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32434__auto__.props.children,next_children__32437__auto__);
}
}
});})(x33504_33551))
;

x33504_33551.componentWillUnmount = ((function (x33504_33551){
return (function (){
var this__32434__auto__ = this;
var r__32445__auto__ = om.next.get_reconciler.call(null,this__32434__auto__);
var cfg__32446__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32445__auto__);
var st__32447__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32446__auto__);
var indexer__32444__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32446__auto__);
if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__32447__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32434__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32447__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32434__auto__);
} else {
}

if((indexer__32444__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32444__auto__,this__32434__auto__);
}
});})(x33504_33551))
;

x33504_33551.componentDidUpdate = ((function (x33504_33551){
return (function (prev_props__32442__auto__,prev_state__32443__auto__){
var this__32434__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32434__auto__);
});})(x33504_33551))
;

x33504_33551.isMounted = ((function (x33504_33551){
return (function (){
var this__32434__auto__ = this;
return cljs.core.boolean$.call(null,(function (){var or__3922__auto__ = (function (){var G__33508 = this__32434__auto__;
var G__33508__$1 = (((G__33508 == null))?null:G__33508._reactInternalFiber);
if((G__33508__$1 == null)){
return null;
} else {
return G__33508__$1.stateNode;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__33509 = this__32434__auto__;
var G__33509__$1 = (((G__33509 == null))?null:G__33509._reactInternalInstance);
if((G__33509__$1 == null)){
return null;
} else {
return G__33509__$1._renderedComponent;
}
}
})());
});})(x33504_33551))
;

x33504_33551.componentWillMount = ((function (x33504_33551){
return (function (){
var this__32434__auto__ = this;
var indexer__32444__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32434__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32444__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32444__auto__,this__32434__auto__);
}
});})(x33504_33551))
;

x33504_33551.initLocalState = ((function (x33504_33551){
return (function (){
var _ = this;
var ret__32412__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transfer-chan","transfer-chan",686261984),cljs.core.async.chan.call(null)], null);
var obj33511 = {"omcljs$state":ret__32412__auto__};
return obj33511;
});})(x33504_33551))
;

x33504_33551.componentDidMount = ((function (x33504_33551){
return (function (nextprops,nextstate){
var this$ = this;
var transfer_chan = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"transfer-chan","transfer-chan",686261984));
var c__23190__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23190__auto__,transfer_chan,this$,x33504_33551){
return (function (){
var f__23191__auto__ = (function (){var switch__23167__auto__ = ((function (c__23190__auto__,transfer_chan,this$,x33504_33551){
return (function (state_33531){
var state_val_33532 = (state_33531[(1)]);
if((state_val_33532 === (1))){
var state_33531__$1 = state_33531;
var statearr_33533_33555 = state_33531__$1;
(statearr_33533_33555[(2)] = null);

(statearr_33533_33555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33532 === (2))){
var state_33531__$1 = state_33531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33531__$1,(4),transfer_chan);
} else {
if((state_val_33532 === (3))){
var inst_33529 = (state_33531[(2)]);
var state_33531__$1 = state_33531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33531__$1,inst_33529);
} else {
if((state_val_33532 === (4))){
var inst_33514 = (state_33531[(2)]);
var inst_33515 = new cljs.core.Symbol("card","move","card/move",-475790526,null);
var inst_33516 = (new cljs.core.List(null,inst_33515,null,(1),null));
var inst_33517 = (new cljs.core.List(null,inst_33514,null,(1),null));
var inst_33518 = cljs.core.concat.call(null,inst_33516,inst_33517);
var inst_33519 = cljs.core.seq.call(null,inst_33518);
var inst_33520 = cljs.core.sequence.call(null,inst_33519);
var inst_33521 = (new cljs.core.List(null,inst_33520,null,(1),null));
var inst_33522 = cljs.core.concat.call(null,inst_33521);
var inst_33523 = cljs.core.seq.call(null,inst_33522);
var inst_33524 = cljs.core.sequence.call(null,inst_33523);
var inst_33525 = cljs.core.vec.call(null,inst_33524);
var inst_33526 = om.next.transact_BANG_.call(null,this$,inst_33525);
var state_33531__$1 = (function (){var statearr_33534 = state_33531;
(statearr_33534[(7)] = inst_33526);

return statearr_33534;
})();
var statearr_33535_33556 = state_33531__$1;
(statearr_33535_33556[(2)] = null);

(statearr_33535_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__23190__auto__,transfer_chan,this$,x33504_33551))
;
return ((function (switch__23167__auto__,c__23190__auto__,transfer_chan,this$,x33504_33551){
return (function() {
var om_pm$core$state_machine__23168__auto__ = null;
var om_pm$core$state_machine__23168__auto____0 = (function (){
var statearr_33536 = [null,null,null,null,null,null,null,null];
(statearr_33536[(0)] = om_pm$core$state_machine__23168__auto__);

(statearr_33536[(1)] = (1));

return statearr_33536;
});
var om_pm$core$state_machine__23168__auto____1 = (function (state_33531){
while(true){
var ret_value__23169__auto__ = (function (){try{while(true){
var result__23170__auto__ = switch__23167__auto__.call(null,state_33531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23170__auto__;
}
break;
}
}catch (e33537){if((e33537 instanceof Object)){
var ex__23171__auto__ = e33537;
var statearr_33538_33557 = state_33531;
(statearr_33538_33557[(5)] = ex__23171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33558 = state_33531;
state_33531 = G__33558;
continue;
} else {
return ret_value__23169__auto__;
}
break;
}
});
om_pm$core$state_machine__23168__auto__ = function(state_33531){
switch(arguments.length){
case 0:
return om_pm$core$state_machine__23168__auto____0.call(this);
case 1:
return om_pm$core$state_machine__23168__auto____1.call(this,state_33531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om_pm$core$state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$0 = om_pm$core$state_machine__23168__auto____0;
om_pm$core$state_machine__23168__auto__.cljs$core$IFn$_invoke$arity$1 = om_pm$core$state_machine__23168__auto____1;
return om_pm$core$state_machine__23168__auto__;
})()
;})(switch__23167__auto__,c__23190__auto__,transfer_chan,this$,x33504_33551))
})();
var state__23192__auto__ = (function (){var statearr_33539 = f__23191__auto__.call(null);
(statearr_33539[(6)] = c__23190__auto__);

return statearr_33539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23192__auto__);
});})(c__23190__auto__,transfer_chan,this$,x33504_33551))
);

return c__23190__auto__;
});})(x33504_33551))
;

x33504_33551.render = ((function (x33504_33551){
return (function (){
var this__32433__auto__ = this;
var this$ = this__32433__auto__;
var _STAR_reconciler_STAR_33540 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33541 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33542 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33543 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33544 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32433__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32433__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32433__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32433__auto__);

om.next._STAR_parent_STAR_ = this__32433__auto__;

try{var map__33545 = om.next.props.call(null,this$);
var map__33545__$1 = ((((!((map__33545 == null)))?(((((map__33545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33545):map__33545);
var list = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword("column","list","column/list",1985805513));
var map__33546 = om.next.get_state.call(null,this$);
var map__33546__$1 = ((((!((map__33546 == null)))?(((((map__33546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33546):map__33546);
var transfer_chan = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"transfer-chan","transfer-chan",686261984));
return om.dom.div.call(null,null,om_pm.core.column_view.call(null,list,transfer_chan));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33544;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33543;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33542;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33541;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33540;
}});})(x33504_33551))
;


om_pm.core.RootView.prototype.constructor = om_pm.core.RootView;

om_pm.core.RootView.prototype.constructor.displayName = "om-pm.core/RootView";

om_pm.core.RootView.prototype.om$isComponent = true;

var x33549_33559 = om_pm.core.RootView;
/** @nocollapse */
x33549_33559.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x33549_33559.om$next$IQuery$query$arity$1 = ((function (x33549_33559){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("column","list","column/list",1985805513),om.next.get_query.call(null,om_pm.core.Column)], null)], null);
});})(x33549_33559))
;


var x33550_33560 = om_pm.core.RootView.prototype;

x33550_33560.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x33550_33560.om$next$IQuery$query$arity$1 = ((function (x33550_33560){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("column","list","column/list",1985805513),om.next.get_query.call(null,om_pm.core.Column)], null)], null);
});})(x33550_33560))
;


om_pm.core.RootView.cljs$lang$type = true;

om_pm.core.RootView.cljs$lang$ctorStr = "om-pm.core/RootView";

om_pm.core.RootView.cljs$lang$ctorPrWriter = (function (this__32597__auto__,writer__32598__auto__,opt__32599__auto__){
return cljs.core._write.call(null,writer__32598__auto__,"om-pm.core/RootView");
});
om_pm.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,om_pm.core.init_data),new cljs.core.Keyword(null,"parser","parser",-1543495310),om_pm.parser.parser], null));
om_pm.core.start = (function om_pm$core$start(){
return om.next.add_root_BANG_.call(null,om_pm.core.reconciler,om_pm.core.RootView,goog.dom.getElement("app"));
});
om_pm.core.start.call(null);
om_pm.core.on_js_reload = (function om_pm$core$on_js_reload(){
return om_pm.core.start.call(null);
});

//# sourceMappingURL=core.js.map?rel=1673484973152
