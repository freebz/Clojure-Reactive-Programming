;; Clojure futures

(def f (clojure.core/future
         (println "doing some expensive work...")
         (Thread/sleep 5000)
         (println "done")
         10))
(println "You'll see me before the future finishes")
;; doing some expensive work...
;; You'll see me before the future finishes
;; done



(def f (clojure.core/future
         (println "doing some expensive work...")
         (Thread/sleep 5000)
         (println "done")
         10))
(println "You'll see me before the future finishes")
@f
(println "I could be doing something else. Instead I had to wait")


;; doing some expensive work...
;; fYou'll see me before the future finishes
;; done
;; I could be doing something else. Instead I had to wait
