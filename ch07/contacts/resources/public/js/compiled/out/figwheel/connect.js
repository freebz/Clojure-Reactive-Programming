// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__34870__delegate = function (x__34854__auto__){
if(cljs.core.truth_(contacts.core.on_js_reload)){
return cljs.core.apply.call(null,contacts.core.on_js_reload,x__34854__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("contacts.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__34870 = function (var_args){
var x__34854__auto__ = null;
if (arguments.length > 0) {
var G__34871__i = 0, G__34871__a = new Array(arguments.length -  0);
while (G__34871__i < G__34871__a.length) {G__34871__a[G__34871__i] = arguments[G__34871__i + 0]; ++G__34871__i;}
  x__34854__auto__ = new cljs.core.IndexedSeq(G__34871__a,0,null);
} 
return G__34870__delegate.call(this,x__34854__auto__);};
G__34870.cljs$lang$maxFixedArity = 0;
G__34870.cljs$lang$applyTo = (function (arglist__34872){
var x__34854__auto__ = cljs.core.seq(arglist__34872);
return G__34870__delegate(x__34854__auto__);
});
G__34870.cljs$core$IFn$_invoke$arity$variadic = G__34870__delegate;
return G__34870;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1673416720799
