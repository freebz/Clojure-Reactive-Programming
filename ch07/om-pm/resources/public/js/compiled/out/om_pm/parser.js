// Compiled by ClojureScript 1.10.238 {}
goog.provide('om_pm.parser');
goog.require('cljs.core');
goog.require('om.next');
if(typeof om_pm.parser.read !== 'undefined'){
} else {
om_pm.parser.read = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-pm.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,om_pm.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23917,k,_){
var map__23918 = p__23917;
var map__23918__$1 = ((((!((map__23918 == null)))?(((((map__23918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23918):map__23918);
var state = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,k.call(null,st),st)], null);
}));
if(typeof om_pm.parser.mutate !== 'undefined'){
} else {
om_pm.parser.mutate = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-pm.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,om_pm.parser.mutate,new cljs.core.Symbol("card","move","card/move",-475790526,null),(function (p__23920,_,p__23921){
var map__23922 = p__23920;
var map__23922__$1 = ((((!((map__23922 == null)))?(((((map__23922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23922):map__23922);
var state = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23923 = p__23921;
var map__23923__$1 = ((((!((map__23923 == null)))?(((((map__23923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23923):map__23923);
var card_id = cljs.core.get.call(null,map__23923__$1,new cljs.core.Keyword(null,"card-id","card-id",-1770060179));
var source_column_id = cljs.core.get.call(null,map__23923__$1,new cljs.core.Keyword(null,"source-column-id","source-column-id",643071119));
var destination_column_id = cljs.core.get.call(null,map__23923__$1,new cljs.core.Keyword(null,"destination-column-id","destination-column-id",1500166188));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("column","by-id","column/by-id",1364327309),(source_column_id | (0)),new cljs.core.Keyword("column","cards","column/cards",-1235863488)], null),((function (map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id){
return (function (existing_cards){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id){
return (function (p__23926){
var vec__23927 = p__23926;
var ___$1 = cljs.core.nth.call(null,vec__23927,(0),null);
var id = cljs.core.nth.call(null,vec__23927,(1),null);
return cljs.core._EQ_.call(null,card_id,id);
});})(map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id))
,existing_cards));
});})(map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("column","by-id","column/by-id",1364327309),(destination_column_id | (0)),new cljs.core.Keyword("column","cards","column/cards",-1235863488)], null),((function (map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id){
return (function (existing_cards){
return cljs.core.conj.call(null,existing_cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),card_id], null));
});})(map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id))
);
});})(map__23922,map__23922__$1,state,map__23923,map__23923__$1,card_id,source_column_id,destination_column_id))
], null);
}));
om_pm.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_pm.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_pm.parser.mutate], null));

//# sourceMappingURL=parser.js.map?rel=1673484950186
