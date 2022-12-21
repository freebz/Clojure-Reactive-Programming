;; Error handling

;; OnError

(defn exceptional-obs []
  (rx/observable*
   (fn [observer]
     (rx/on-next observer (throw (Exception. "Oops. Something went wrong")))
     (rx/on-completed observer))))


(rx/subscribe (->> (exceptional-obs)
                   (rx/map inc))
              (fn [v] (prn-to-repl "result is " v)))

;; Exception Oops. Something went wrong  rx-playground.core/exceptional-obs/fn--1505


(rx/subscribe (->> (exceptional-obs)
                   (rx/map inc))
              (fn [v] (prn-to-repl "result is " v))
              (fn [e] (prn-to-repl "error is " e)))

;; "error is " #<Exception java.lang.Exception: Oops. Something went wrong>
