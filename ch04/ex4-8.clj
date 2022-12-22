;; Transducers

(require '[clojure.core.async :refer [go chan map< filter< into >! <! go-loop close! pipe]])


(->> (range 10)
     (map inc)          ;; creates a new sequence
     (filter even?)     ;; creates a new sequence
     (prn "result is"))
;; "result is" (2 4 6 8 10)


(def xform
  (comp (map inc)
        (filter even?)))  ;; no intermediate sequence created

(->> (range 10)
     (sequence xform)
     (prn "result is "))
;; "result is " (2 4 6 8 10)


(def xform
  (comp (map inc)
        (filter even?)))

(->> (range 10)
     (sequence xform)
     (prn "result is "))
;; "result is " (2 4 6 8 10)
