// Compiled by ClojureScript 1.10.238 {}
goog.provide('contacts.parser');
goog.require('cljs.core');
goog.require('om.next');
if(typeof contacts.parser.read !== 'undefined'){
} else {
contacts.parser.read = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"contacts.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
if(typeof contacts.parser.mutate !== 'undefined'){
} else {
contacts.parser.mutate = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"contacts.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
contacts.parser.get_contacts = (function contacts$parser$get_contacts(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__40630_SHARP_){
return cljs.core.get_in.call(null,st,p1__40630_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,contacts.parser.read,new cljs.core.Keyword("list","contacts","list/contacts",332680044),(function (p__40631,key,params){
var map__40632 = p__40631;
var map__40632__$1 = ((((!((map__40632 == null)))?(((((map__40632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40632):map__40632);
var env = map__40632__$1;
var state = cljs.core.get.call(null,map__40632__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),contacts.parser.get_contacts.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,contacts.parser.mutate,new cljs.core.Symbol("list","toggle-select-contact","list/toggle-select-contact",-280806589,null),(function (p__40635,_,p__40636){
var map__40637 = p__40635;
var map__40637__$1 = ((((!((map__40637 == null)))?(((((map__40637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40637):map__40637);
var state = cljs.core.get.call(null,map__40637__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__40638 = p__40636;
var map__40638__$1 = ((((!((map__40638 == null)))?(((((map__40638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40638):map__40638);
var name = cljs.core.get.call(null,map__40638__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.call(null,map__40638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__40637,map__40637__$1,state,map__40638,map__40638__$1,name,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contact","by-name","contact/by-name",1626014564),name,new cljs.core.Keyword(null,"show-details","show-details",463792396)], null),((function (map__40637,map__40637__$1,state,map__40638,map__40638__$1,name,id){
return (function (p1__40634_SHARP_){
return cljs.core.not.call(null,p1__40634_SHARP_);
});})(map__40637,map__40637__$1,state,map__40638,map__40638__$1,name,id))
);
});})(map__40637,map__40637__$1,state,map__40638,map__40638__$1,name,id))
], null);
}));
cljs.core._add_method.call(null,contacts.parser.mutate,new cljs.core.Symbol("list","edit-contact","list/edit-contact",2034410157,null),(function (p__40641,_,p__40642){
var map__40643 = p__40641;
var map__40643__$1 = ((((!((map__40643 == null)))?(((((map__40643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40643):map__40643);
var state = cljs.core.get.call(null,map__40643__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__40644 = p__40642;
var map__40644__$1 = ((((!((map__40644 == null)))?(((((map__40644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40644):map__40644);
var name = cljs.core.get.call(null,map__40644__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var key = cljs.core.get.call(null,map__40644__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.call(null,map__40644__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__40643,map__40643__$1,state,map__40644,map__40644__$1,name,key,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contact","by-name","contact/by-name",1626014564),name,key], null),((function (map__40643,map__40643__$1,state,map__40644,map__40644__$1,name,key,value){
return (function (___$1){
return value;
});})(map__40643,map__40643__$1,state,map__40644,map__40644__$1,name,key,value))
);
});})(map__40643,map__40643__$1,state,map__40644,map__40644__$1,name,key,value))
], null);
}));
contacts.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),contacts.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),contacts.parser.mutate], null));

//# sourceMappingURL=parser.js.map?rel=1673423510662
