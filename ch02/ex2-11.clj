;; Backpressure

(defn fast-producing-obs []
  (rx/map inc (Observable/interval 1 TimeUnit/MILLISECONDS)))

(defn slow-producing-obs []
  (rx/map inc (Observable/interval 500 TimeUnit/MILLISECONDS)))

(rx/subscribe (->> (rx/map vector
                           (fast-producing-obs)
                           (slow-producing-obs))
                   (rx/map (fn [[x y]]
                             (+ x y)))
                   (rx/take 10))
              prn-to-repl
              (fn [e] (prn-to-repl "error is " e)))

;; "error is " #<MissingBackpressureException rx.exceptions.MissingBackpressureException>
