;; Creating Observables

(require '[rx.lang.clojure.core :as rx])
(import '(rx Observable))


(def obj (rx/return 10))


(rx/subscribe obj
              (fn [value]
                (prn (str "Got value: " value))))
;; "Got value: 10"


(-> (rx/seq->o [1 2 3 4 5 6 7 8 9 10])
    (rx/subscribe prn))


(-> (rx/range 1 10)
    (rx/subscribe prn))



(import '(java.util.concurrent TimeUnit))
(rx/subscribe (Observable/interval 100 TimeUnit/MILLISECONDS)
              prn-to-repl)


(def  repl-out *out*)
(defn prn-to-repl [& args]
  (binding [*out* repl-out]
    (apply prn args)))


(def subscription (rx/subscribe (Observable/interval 100 TimeUnit/MILLISECONDS)
                                prn-to-repl))

(Thread/sleep 1000)

(rx/unsubscribe subscription)
