// Compiled by ClojureScript 1.10.238 {}
goog.provide('respondent_app.core');
goog.require('cljs.core');
goog.require('respondent.core');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
respondent_app.core.mouse_pos_selector = document.getElementById("mouse-xy");
respondent_app.core.mouse_pos_stream = respondent.core.event_stream.call(null);
document.onmousemove = (function (e){
return respondent.core.deliver.call(null,respondent_app.core.mouse_pos_stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.pageX,e.pageY], null));
});
respondent.core.subscribe.call(null,respondent_app.core.mouse_pos_stream,(function (p__26641){
var vec__26642 = p__26641;
var x = cljs.core.nth.call(null,vec__26642,(0),null);
var y = cljs.core.nth.call(null,vec__26642,(1),null);
return dommy.core.set_text_BANG_.call(null,respondent_app.core.mouse_pos_selector,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''));
}));
respondent_app.core.on_js_reload = (function respondent_app$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1672617806532
