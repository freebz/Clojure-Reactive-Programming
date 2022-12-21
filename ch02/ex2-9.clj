;; Catch

(rx/subscribe (->> (exceptional-obs)
                   (rx/catch Exception e
                     (rx/return 10))
                   (rx/map inc))
              (fn [v] (prn-to-repl "result is " v)))

;; "result is " 11


(rx/subscribe (->> (exceptional-obs)
                   (rx/catch Exception e
                     (rx/seq->o (range 5)))
                   (rx/map inc))
              (fn [v] (prn-to-repl "result is " v)))

;; "result is " 1
;; "result is " 2
;; "result is " 3
;; "result is " 4
;; "result is " 5
