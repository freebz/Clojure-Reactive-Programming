// Compiled by ClojureScript 1.10.238 {}
goog.provide('contacts.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('contacts.parser');
goog.require('contacts.ui');
cljs.core.enable_console_print_BANG_.call(null);
contacts.core.init_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","contacts","list/contacts",332680044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"James Hetfield",new cljs.core.Keyword(null,"email","email",1415816706),"james@metallica.com",new cljs.core.Keyword(null,"phone","phone",-763596057),"+1 XXX XXX XXX"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Adam Darski",new cljs.core.Keyword(null,"email","email",1415816706),"the.nergal@behemoth.pl",new cljs.core.Keyword(null,"phone","phone",-763596057),"+48 XXX XXX XXX"], null)], null)], null);
contacts.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),contacts.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),contacts.parser.parser], null));
contacts.core.mount_root_view_BANG_ = (function contacts$core$mount_root_view_BANG_(){
return om.next.add_root_BANG_.call(null,contacts.core.reconciler,contacts.ui.RootView,document.getElementById("app"));
});
contacts.core.mount_root_view_BANG_.call(null);
contacts.core.on_js_reload = (function contacts$core$on_js_reload(){
return contacts.core.mount_root_view_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1673424251051
