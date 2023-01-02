;; Implementing behaviors

(defn from-interval
  "Creates and returns a new event stream which emits values at the given
  interval.
  If no other arguments are given, the values start at 0 and increment by
  one at each delivery.

    If given seed and succ it emits seed and applies succ to seed to get
  the next value. It then applies succ to the previous result and so
  on."
  ([msecs]
   (from-interval msecs 0 inc))
  ([msecs seed succ]
   (let [es (event-stream)]
     (go-loop [timeout-ch (timeout msecs)
               value seed]
       (when-not (completed? es)
         (<! timeout-ch)
         (deliver es value)
         (recur (timeout msecs) (succ value))))
     es)))



(def es1 (from-interval 500))
(def es1-token (subscribe es1 #(prn "Got: " %)))
;; "Got: " 0
;; "Got: " 1
;; "Got: " 2
;; "Got: " 3
;; ...
(dispose es1-token)



;; (deftype Behavior [f]
;;   IBehavior
;;   (sample [_ interval]
;;     (from-interval interval (f) (fn [& args] (f))))
;;   IDeref
;;   (#+clj deref #+cljs -deref [_]
;;     (f)))

(deftype Behavior [f]
  IBehavior
  (sample [_ interval]
    (from-interval interval (f) (fn [& args] (f))))
  IDeref
  (deref [_]
    (f)))

(defmacro behavior [& body]
  `(Behavior. #(do ~@body)))



(def time-behavior (behavior (System/nanoTime)))

@time-behavior
;; 448637275131533

@time-behavior
;; 448642948860938
