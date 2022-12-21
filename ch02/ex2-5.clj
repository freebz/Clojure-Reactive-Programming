;; Manipulating Observables

(rx/subscribe (->> (Observable/interval 1 TimeUnit/MICROSECONDS)
                   (rx/filter even?)
                   (rx/take 5)
                   (rx/reduce +))
              prn-to-repl)
;; 20


(defn musicians []
  (rx/seq->o ["James Hetfield" "Dave Mustaine" "Kerry King"]))

(defn bands     []
  (rx/seq->o ["Metallica" "Megadeth" "Slayer"]))


(defn uppercased-obj []
  (rx/map (fn [s] (.toUpperCase s)) (bands)))


(-> (rx/map vector
            (musicians)
            (uppercased-obj))
    (rx/subscribe (fn [[musician band]]
                    (prn-to-repl (str musician " - from: " band)))))

;; "James Hetfield - from: METALLICA"
;; "Dave Mustaine - from: MEGADETH"
;; "Kerry King - from: SLAYER"
