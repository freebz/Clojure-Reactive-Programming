;; Designing the public API

(defprotocol IBehavior
  (sample [b interval]
    "Turns this Behavior into an EventStream from the sampled values at the given interval"))



(defprotocol IEventStream
  (map        [s f]
    "Returns a new stream containing the result of applying f to the values in s")
  (filter     [s pred]
    "Returns a new stream containing the items from s for which pred returns true")
  (flatmap    [s f]
    "Takes a function f from values in s to a new EventStream. Returns an EventStream containinig values from all underlying streams combined.")
  (deliver    [s value]
    "delivers a value to the stream s")
  (completed? [s]
    "Returns true if this stream has stopped emitting values. False otherwise."))



(defprotocol IObservable
  (subscribe [obs f] "Register a callback to be invoked when the underlying source changes. Returns a token the subscriber can use to cancel the subscription."))



(defprotocol IToken
  (dispose [tk]
    "Called when the subscriber isn't interested in receiving more items"))
