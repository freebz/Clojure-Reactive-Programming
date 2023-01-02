;; Implementing event streams

(def in (chan))
(def multiple (mult in))

(def out-1 (chan))
(tap multiple out-1)

(def out-2 (chan))
(tap multiple out-2)
(go (>! in "Single put!"))

(go (prn "Got from out-1 " (<! out-1)))
(go (prn "Got from out-2 " (<! out-2)))



;; "Got from out-1 " "Single put!"
;; "Got from out-2 " "Single put!"



(declare event-stream)

(deftype EventStream [channel multiple completed]
  IEventStream
  (map [_ f]
    (let [out (map> f (chan))]
      (tap multiple out)
      (event-stream out)))

  (filter [_ pred]
    (let [out (filter> pred (chan))]
      (tap multiple out)
      (event-stream out)))

  (flatmap [_ f]
    (let [es (event-stream)
          out (chan)]
      (tap multiple out)
      (go-loop []
        (when-let [a (<! out)]
          (let [mb (f a)]
            (subscribe mb (fn [b]
                            (deliver es b)))
            (recur))))
      es))
  
  (deliver [_ value]
    (if (= value ::complete)
      (do (reset! completed true)
          (go (>! channel value)
              (close! channel)))
      (go (>! channel value))))

  (completed? [_] @completed)

  IObservable
  (subscribe [this f]
    (let [out (chan)]
      (tap multiple out)
      (go-loop []
        (let [value (<! out)]
          (when (and value (not= value ::complete))
            (f value)
            (recur))))
      (Token. out))))




(defn event-stream
  "Creates and returns a new event stream. You can optionally provide an existing
  core.async channel as the source for the new stream"
  ([]
   (event-stream (chan)))
  ([ch]
   (let [multiple  (mult ch)
         completed (atom false)]
     (EventStream. ch multiple completed))))





(def es1 (event-stream))
(subscribe es1 #(prn "first event stream emitted: " %))
(deliver es1 10)
;; "first event stream emitted: " 10


(def es2 (map es1 #(* 2 %)))
(subscribe es2 #(prn "second event stream emitted: " %))

(deliver es1 20)
;; "first event stream emitted: " 20
;; "second event stream emitted: " 40



(def es1 (event-stream))
(def es2 (filter es1 even?))
(subscribe es1 #(prn "first event stream emitted: " %))
(subscribe es2 #(prn "second event stream emitted: " %))

(deliver es1 2)
(deliver es1 3)
(deliver es1 4)

;; "first event stream emitted: " 2
;; "second event stream emitted: " 2
;; "first event stream emitted: " 3
;; "first event stream emitted: " 4
;; "second event stream emitted: " 4



(defn range-es [n]
  (let [es (event-stream (chan n))]
    (doseq [n (range n)]
      (deliver es n))
    es))

(def es1 (event-stream))
(def es2 (flatmap es1 range-es))
(subscribe es1 #(prn "first event stream emitted: " %))
(subscribe es2 #(prn "second event stream emitted: " %))

(deliver es1 2)
;; "first event stream emitted: " 2
;; "second event stream emitted: " 0
;; "second event stream emitted: " 1

(deliver es1 3)
;; "first event stream emitted: " 3
;; "second event stream emitted: " 0
;; "second event stream emitted: " 1
;; "second event stream emitted: " 2
