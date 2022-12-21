;; Custom Observables

(defn just-obs [v]
  (rx/observable*
   (fn [observer]
     (rx/on-next observer v)
     (rx/on-completed observer))))

(rx/subscribe (just-obs 20) prn)
