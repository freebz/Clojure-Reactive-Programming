;; Retry

(defn retry-obs []
  (let [errored (atom false)]
    (rx/observable*
     (fn [observer]
       (if @errored
         (rx/on-next observer 20)
         (do (reset! errored true)
             (throw (Exception. "Oops. Something went wrong"))))))))


(rx/subscribe (retry-obs)
              (fn [v] (prn-to-repl "result is " v)))

;; Execution error Oops. Something went wrong rx-playground.core/retry-obs/fn--1476


(rx/subscribe (->> (retry-obs)
                   (.retry))
              (fn [v] (prn-to-repl "result is " v)))

;; "result is " 20
