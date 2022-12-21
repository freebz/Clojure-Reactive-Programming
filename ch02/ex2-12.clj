;; Sample

(rx/subscribe (->> (rx/map vector
                           (.sample (fast-producing-obs) 200
                                    TimeUnit/MILLISECONDS)
                           (slow-producing-obs))
                   (rx/map (fn [[x y]]
                             (+ x y)))
                   (rx/take 10))
              prn-to-repl
              (fn [e] (prn-to-repl "error is " e)))

;; 201
;; 401
;; 603
;; 804
;; 1006
;; 1205
;; 1407
;; 1608
;; 1809
;; 2009
