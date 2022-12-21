;; Flatmap and friends

(defn factorial [n]
  (reduce * (range 1 (inc n))))

(defn all-positive-integers []
  (Observable/interval 1 TimeUnit/MICROSECONDS))


(defn fact-obs [n]
  (rx/observable*
   (fn [observer]
     (rx/on-next observer (factorial n))
     (rx/on-completed observer))))


(rx/subscribe (fact-obs 5) prn-to-repl)

;; 120


(rx/subscribe (->> (all-positive-integers)
                   (rx/filter  even?)
                   (rx/flatmap fact-obs)
                   (rx/take 5))
              prn-to-repl)

;; 1
;; 2
;; 24
;; 720
;; 40320
