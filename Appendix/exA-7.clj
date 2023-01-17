;; Monads

(defprotocol Monad
  (bind [mv g]))


(extend-protocol fkp/Monad
  Some
  (bind [mv g]
    (g (:v mv)))

  None
  (bind [_ _]
    (None.)))



(def opt-ctx (None.))

(fkc/bind (age-option "Jack Sparrow")
          (fn [a]
            (fkc/bind (age-option "Blackbeard")
                      (fn [b]
                        (fkc/bind (age-option "Hector Barbossa")
                                  (fn [c]
                                    (fkc/pure opt-ctx
                                              (+ a b c))))))))
;; #library_design.option.Some{:v 170.0}


(fkc/mdo [a (age-option "Jack Sparrow")
          b (age-option "Blackbeard")
          c (age-option "Hector Barbossa")]
         (fkc/pure opt-ctx  (+ a b c)))
;; #library_design.option.Some{:v 170.0}


(require '[clojure.walk :as w])

(w/macroexpand-all '(fkc/mdo [a (age-option "Jack Sparrow")
                              b (age-option "Blackbeard")
                              c (age-option "Hector Barbossa")]
                             (option  (+ a b c))))
;; (uncomplicate.fluokitten.core/bind
;;  (age-option "Jack Sparrow")
;;  (fn*
;;   ([a]
;;    (uncomplicate.fluokitten.core/bind
;;     (age-option "Blackbeard")
;;     (fn*
;;      ([b]
;;       (uncomplicate.fluokitten.core/bind
;;        (age-option "Hector Barbossa")
;;        (fn* ([c] (option (+ a b c)))))))))))



(def avg-opt     (comp option avg))
(def median-opt  (comp option median))
(def std-dev-opt (comp option std-dev))


(fkc/mdo [a       (age-option "Jack Sparrow")
          b       (age-option "Blackbeard")
          c       (age-option "Hector Barbossa")
          avg     (avg-opt a b c)
          median  (median-opt a b c)
          std-dev (std-dev-opt a b c)]
         (option {:avg avg
                  :median median
                  :std-dev std-dev}))
;; #library_design.option.Some{:v {:avg 56.666668,
;;                                 :median 60,
;;                                 :std-dev 12.472191289246473}}


(fkc/mdo [a       (age-option "Jack Sparrow")
          b       (age-option "Davy Jones")
          c       (age-option "Hector Barbossa")
          avg     (avg-opt a b c)
          median  (median-opt a b c)
          std-dev (std-dev-opt a b c)]
         (fkc/pure opt-ctx {:avg avg
                  :median median
                  :std-dev std-dev}))
;; #library_design.option.None{}



(def avg-fut     (comp i/future-call avg))
(def median-fut  (comp i/future-call median))
(def std-dev-fut (comp i/future-call std-dev))

(fkc/mdo [a       (i/future (some-> (pirate-by-name "Jack Sparrow")    age))
          b       (i/future (some-> (pirate-by-name "Blackbeard")      age))
          c       (i/future (some-> (pirate-by-name "Hector Barbossa") age))
          avg     (avg-fut a b c)
          median  (median-fut a b c)
          std-dev (std-dev-fut a b c)]
         (i/const-future {:avg avg
                          :median median
                          :std-dev std-dev}))
;;#<Future@30bdccb0: #<Success@1e08486b: {:avg 56.666668,
;;                                        :median 60,
;;                                        :std-dev 12.472191289246473}}
