;; Backpressure strategies

(rx/subscribe (->> (rx/map vector
                           (.onBackpressureBuffer (fast-producing-obs))
                           (slow-producing-obs))
                   (rx/map (fn [[x y]]
                             (+ x y)))
                   (rx/take 10))
              prn-to-repl
              (fn [e] (prn-to-repl "error is " e)))

;; 2
;; 4
;; 6
;; 8
;; 10
;; 12
;; 14
;; 16
;; 18
;; 20
