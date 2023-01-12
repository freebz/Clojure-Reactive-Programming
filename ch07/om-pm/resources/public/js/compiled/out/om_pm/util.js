// Compiled by ClojureScript 1.10.238 {}
goog.provide('om_pm.util');
goog.require('cljs.core');
om_pm.util.set_transfer_data_BANG_ = (function om_pm$util$set_transfer_data_BANG_(e,key,value){
return e.nativeEvent.dataTransfer.setData(key,value);
});
om_pm.util.get_transfer_data_BANG_ = (function om_pm$util$get_transfer_data_BANG_(e,key){
return e.nativeEvent.dataTransfer.getData(key);
});

//# sourceMappingURL=util.js.map?rel=1673484922943
