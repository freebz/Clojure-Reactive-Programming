;; Transducers and core.async

(def result (chan 10))

(def transformed
  (->> result
       (map< inc)      ;; creates a new channel
       (filter< even?) ;; creates a new channel
       (into [])))


(go
  (prn "result is " (<! transformed)))

(go
  (doseq [n (range 10)]
    (>! result n))
  (close! result))

;; "result is " [2 4 6 8 10]



(def result (chan 10))

(def xform
  (comp (map inc)
        (filter even?)))   ;; no intermediate channels created

(def transformed (->> (pipe result (chan 10 xform))
                      (into [])))


(go
  (prn "result is " (<! transformed)))

(go
  (doseq [n (range 10)]
    (>! result n))
  (close! result))

;; "result is " [2 4 6 8 10]
